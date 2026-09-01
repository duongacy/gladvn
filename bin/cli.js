#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
import readline from 'readline';

const cyan = "\x1b[36m";
const yellow = "\x1b[33m";
const bold = "\x1b[1m";
const dim = "\x1b[90m";
const reset = "\x1b[0m";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read version from package.json
const pkgPath = path.resolve(__dirname, "../package.json");
const pkgContent = fs.readFileSync(pkgPath, "utf-8");
const pkg = JSON.parse(pkgContent);
const VERSION = pkg.version;

if (process.argv.includes('--version') || process.argv.includes('-v')) {
  console.log(`gladvn v${VERSION}`);
  process.exit(0);
}

if (process.argv.includes('--help') || process.argv.includes('-h')) {
  console.log(`
gladvn v${VERSION}

Usage:
  npx gladvn init [destination]
  npx gladvn add <component | --all> [destination]
  npx gladvn add-block <block> [destination]

Options:
  [destination]   The folder where components will be copied. Defaults to "gladvn".
  --help, -h      Show this help message.
  --version, -v   Show the current version.
`);
  process.exit(0);
}

// Find destination
let userDest = "gladvn";
let command = "init";
let componentToAdd = null;
let viteConfigPath = null;
const args = process.argv.slice(2);

if (args[0] === "init") {
  if (args[1]) userDest = args[1];
} else if (args[0] === "add") {
  command = "add";
  if (!args[1]) {
    console.error(`\x1b[31m✖ Please specify a component to add (e.g. npx gladvn add button)\x1b[0m`);
    process.exit(1);
  }
  componentToAdd = args[1];
  if (args[2]) userDest = args[2];
} else if (args[0] === "add-block") {
  command = "add-block";
  if (!args[1]) {
    console.error(`\x1b[31m✖ Please specify a block to add (e.g. npx gladvn add-block auth)\x1b[0m`);
    process.exit(1);
  }
  componentToAdd = args[1];
  if (args[2]) userDest = args[2];
} else if (args[0]) {
  userDest = args[0];
}

const destPath = path.resolve(process.cwd(), userDest);
const srcDir = path.resolve(__dirname, "../src");

// Helper: check if a file is a test file
function isTestFile(filename) {
  return /\.test\.(tsx?|jsx?)$/.test(filename);
}

// Recursive file scanner for CSS files
const IGNORE_DIRS = ['node_modules', '.git', '.next', 'dist', 'build', 'out', 'coverage', '.cache', userDest];

function findCssFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (IGNORE_DIRS.includes(file)) continue;
    const filePath = path.join(dir, file);
    try {
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        findCssFiles(filePath, fileList);
      } else if (file.endsWith('.css')) {
        fileList.push(filePath);
      }
    } catch (e) {
      // Ignore permission or access errors
    }
  }
  return fileList;
}

// Recursive directory copy with optional filter
function copyDirFiltered(src, dest, filter) {
  if (!fs.existsSync(src)) return;
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirFiltered(srcPath, destPath, filter);
    } else {
      if (filter && !filter(entry.name)) continue;
      fs.cpSync(srcPath, destPath, { force: true });
    }
  }
}

// Native arrow key selector
async function selectOption(message, options) {
  return new Promise((resolve) => {
    let selectedIndex = 0;

    const render = () => {
      process.stdout.write('\x1B[?25l'); // Hide cursor
      readline.cursorTo(process.stdout, 0);
      readline.clearScreenDown(process.stdout);
      
      console.log(`\x1b[33m?\x1b[0m \x1b[1m${message}\x1b[0m`);
      options.forEach((opt, index) => {
        if (index === selectedIndex) {
          console.log(`  \x1b[36m❯ ${opt}\x1b[0m`);
        } else {
          console.log(`    ${opt}`);
        }
      });
      readline.moveCursor(process.stdout, 0, -(options.length + 1));
    };

    render();

    const onKeyPress = (str, key) => {
      if (key.name === 'up') {
        selectedIndex = selectedIndex > 0 ? selectedIndex - 1 : options.length - 1;
        render();
      } else if (key.name === 'down') {
        selectedIndex = selectedIndex < options.length - 1 ? selectedIndex + 1 : 0;
        render();
      } else if (key.name === 'return' || key.name === 'enter') {
        cleanup();
        console.log(`\x1b[32m✔\x1b[0m \x1b[1m${message}\x1b[0m \x1b[90m…\x1b[0m \x1b[36m${options[selectedIndex]}\x1b[0m`);
        resolve(options[selectedIndex]);
      } else if (key.name === 'c' && key.ctrl) {
        cleanup();
        console.log('\n\x1b[31m✖ Cancelled.\x1b[0m');
        process.exit(1);
      }
    };

    const cleanup = () => {
      process.stdin.removeListener('keypress', onKeyPress);
      if (process.stdin.isTTY) process.stdin.setRawMode(false);
      process.stdin.pause();
      readline.moveCursor(process.stdout, 0, options.length + 1);
      process.stdout.write('\x1B[?25h'); // Show cursor
      readline.moveCursor(process.stdout, 0, -(options.length + 1));
      readline.clearScreenDown(process.stdout);
    };

    readline.emitKeypressEvents(process.stdin);
    if (process.stdin.isTTY) process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.on('keypress', onKeyPress);
  });
}

// Helper: ensure lib/ and hooks/ exist in destPath (needed for add/add-block)
function ensureCoreDeps(srcDir, destPath) {
  const coreDeps = ['lib', 'hooks'];
  let copied = false;
  for (const dir of coreDeps) {
    const targetDir = path.join(destPath, dir);
    if (!fs.existsSync(targetDir)) {
      const sourceDir = path.join(srcDir, dir);
      if (fs.existsSync(sourceDir)) {
        copyDirFiltered(sourceDir, targetDir, (name) => !isTestFile(name));
        copied = true;
      }
    }
  }
  if (copied) {
    console.log(`\x1b[32m✔ Copied required core dependencies (lib, hooks)\x1b[0m`);
  }
}

async function main() {
  console.log(`\n${cyan}╔══════════════════════════════════════════════════════════════════╗${reset}`);
  if (command === "add") {
    console.log(`${cyan}║  ${bold}gladvn${reset} ${dim}v${VERSION}${reset}${cyan} — Add Component                              ║${reset}`);
  } else if (command === "add-block") {
    console.log(`${cyan}║  ${bold}gladvn${reset} ${dim}v${VERSION}${reset}${cyan} — Add Block                                  ║${reset}`);
  } else {
    console.log(`${cyan}║  ${bold}gladvn${reset} ${dim}v${VERSION}${reset}${cyan} — Initialization                             ║${reset}`);
  }
  console.log(`${cyan}╚══════════════════════════════════════════════════════════════════╝${reset}\n`);

  let hasErrors = false;
  const isTTY = process.stdin.isTTY;

  const componentsDir = path.join(srcDir, 'components');
  let availableComponents = [];
  
  if (fs.existsSync(componentsDir)) {
    const subDirs = ['micro', 'macro'];
    for (const sub of subDirs) {
      const subPath = path.join(componentsDir, sub);
      if (fs.existsSync(subPath)) {
        const files = fs.readdirSync(subPath);
        for (const file of files) {
          if ((file.endsWith('.tsx') || file.endsWith('.ts')) && !isTestFile(file)) {
            availableComponents.push(`${sub}/${file}`);
          }
        }
      }
    }
  }

  const blocksDir = path.join(srcDir, 'components', 'blocks');
  let availableBlocks = [];
  
  if (fs.existsSync(blocksDir)) {
    const files = fs.readdirSync(blocksDir);
    for (const file of files) {
      if ((file.endsWith('.tsx') || file.endsWith('.ts')) && !isTestFile(file)) {
        availableBlocks.push(file);
      }
    }
  }

  if (command === "add") {
    // ── ADD COMMAND ──────────────────────────────────────────────────────
    if (!fs.existsSync(destPath)) {
      fs.mkdirSync(destPath, { recursive: true });
    }

    // Ensure lib/ and hooks/ exist for component imports
    ensureCoreDeps(srcDir, destPath);

    if (componentToAdd === "--all") {
      console.log(`\x1b[36mAdding all components to ${userDest}...\x1b[0m`);
      let addedCount = 0;
      for (const comp of availableComponents) {
        const sourcePath = path.join(componentsDir, comp);
        const targetPath = path.join(destPath, 'components', comp);
        const targetDir = path.dirname(targetPath);
        if (!fs.existsSync(targetDir)) {
          fs.mkdirSync(targetDir, { recursive: true });
        }
        try {
          fs.cpSync(sourcePath, targetPath, { force: true });
          console.log(`\x1b[32m✔ Added ${comp}\x1b[0m`);
          addedCount++;
        } catch (err) {
          console.error(`\x1b[31m✖ Failed to add ${comp}: ${err.message}\x1b[0m`);
          hasErrors = true;
        }
      }
      console.log(`\x1b[32m✔ Successfully added ${addedCount} components!\x1b[0m`);
    } else {
      console.log(`\x1b[36mAdding ${componentToAdd} to ${userDest}...\x1b[0m`);
      const compMatches = availableComponents.filter(c => c.endsWith(`/${componentToAdd}.tsx`) || c.endsWith(`/${componentToAdd}.ts`));
      if (compMatches.length === 0) {
         console.error(`\x1b[31m✖ Component "${componentToAdd}" not found.\x1b[0m`);
         process.exit(1);
      }
      
      const comp = compMatches[0];
      const sourcePath = path.join(componentsDir, comp);
      const targetPath = path.join(destPath, 'components', comp);
      const targetDir = path.dirname(targetPath);
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }
      try {
        fs.cpSync(sourcePath, targetPath, { force: true });
        console.log(`\x1b[32m✔ Added ${comp}\x1b[0m`);
      } catch (err) {
        console.error(`\x1b[31m✖ Failed to add ${comp}: ${err.message}\x1b[0m`);
        hasErrors = true;
      }
    }

  } else if (command === "add-block") {
    // ── ADD-BLOCK COMMAND ────────────────────────────────────────────────
    console.log(`\x1b[36mAdding block ${componentToAdd} to ${userDest}...\x1b[0m`);
    const blockMatches = availableBlocks.filter(b => b === `${componentToAdd}.tsx` || b === `${componentToAdd}.ts`);
    if (blockMatches.length === 0) {
       console.error(`\x1b[31m✖ Block "${componentToAdd}" not found.\x1b[0m`);
       process.exit(1);
    }
    
    if (!fs.existsSync(destPath)) {
      fs.mkdirSync(destPath, { recursive: true });
    }

    // Ensure lib/ and hooks/ exist for block imports
    ensureCoreDeps(srcDir, destPath);

    const block = blockMatches[0];
    const sourcePath = path.join(blocksDir, block);
    const targetPath = path.join(destPath, 'components', 'blocks', block);
    const targetDir = path.dirname(targetPath);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    try {
      fs.cpSync(sourcePath, targetPath, { force: true });
      console.log(`\x1b[32m✔ Added block ${block}\x1b[0m`);
    } catch (err) {
      console.error(`\x1b[31m✖ Failed to add block ${block}: ${err.message}\x1b[0m`);
      hasErrors = true;
    }

  } else {
    // ── INIT COMMAND ─────────────────────────────────────────────────────
    let targetCss = "app/globals.css";
    const cssFilesFull = findCssFiles(process.cwd());
    const cssFiles = cssFilesFull.map(f => path.relative(process.cwd(), f));

    if (cssFiles.length === 0) {
      console.log(`\x1b[33m⚠ No CSS files found in the project.\x1b[0m`);
      
      let answer = 'y';
      if (isTTY) {
        const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
        answer = await new Promise((resolve) => rl.question(`${yellow}? Do you want to create a new app/globals.css file? (Y/n)${reset} `, resolve));
        rl.close();
      }
      
      if (answer.trim().toLowerCase() !== 'n') {
        targetCss = "app/globals.css";
        const newCssPath = path.resolve(process.cwd(), targetCss);
        if (!fs.existsSync(path.dirname(newCssPath))) {
          fs.mkdirSync(path.dirname(newCssPath), { recursive: true });
        }
        fs.writeFileSync(newCssPath, `@import "tailwindcss";\n`);
        console.log(`\x1b[32m✔\x1b[0m \x1b[1mCreated\x1b[0m \x1b[36m${targetCss}\x1b[0m`);
      } else {
        targetCss = null;
      }
    } else if (!isTTY) {
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });
      const ask = (question) => new Promise((resolve) => rl.question(question, resolve));
      const cssFile = await ask(
        `${yellow}   📄 Path to your main CSS file? ${dim}(default: app/globals.css)${reset}\n   > `
      );
      targetCss = cssFile.trim() || "app/globals.css";
      rl.close();
    } else if (cssFiles.length === 1) {
      targetCss = cssFiles[0];
      console.log(`\x1b[32m✔\x1b[0m \x1b[1mFound global CSS file\x1b[0m \x1b[90m…\x1b[0m \x1b[36m${targetCss}\x1b[0m`);
    } else {
      targetCss = await selectOption("Which CSS file should we inject gladvn styles into?", cssFiles);
    }

    let cssFilePath = null;
    if (targetCss) {
      cssFilePath = path.resolve(process.cwd(), targetCss);
    }

    // Step 1. Copy files
    console.log(`\n\x1b[36mInitializing gladvn components into ${userDest}...\x1b[0m`);

    if (!fs.existsSync(destPath)) {
      fs.mkdirSync(destPath, { recursive: true });
    }

    // Copy core directories (excluding test files)
    const coreDirs = ['hooks', 'lib', 'styles', 'components'];
    for (const dir of coreDirs) {
      const sourceDir = path.join(srcDir, dir);
      const targetDir = path.join(destPath, dir);
      if (fs.existsSync(sourceDir)) {
        try {
          copyDirFiltered(sourceDir, targetDir, (name) => !isTestFile(name));
        } catch (err) {
          console.error(`\x1b[31m✖ Failed to copy core ${dir}/: ${err.message}\x1b[0m`);
          hasErrors = true;
        }
      }
    }

    // Copy root-level files (index.ts, preset.ts)
    const rootFiles = ['index.ts', 'preset.ts'];
    for (const file of rootFiles) {
      const sourceFile = path.join(srcDir, file);
      const targetFile = path.join(destPath, file);
      if (fs.existsSync(sourceFile)) {
        try {
          fs.cpSync(sourceFile, targetFile, { force: true });
        } catch (err) {
          console.error(`\x1b[31m✖ Failed to copy ${file}: ${err.message}\x1b[0m`);
          hasErrors = true;
        }
      }
    }

    console.log(`\x1b[32m✔ Copied core files and all components (lib, hooks, styles, components including blocks)\x1b[0m`);

    // Step 2. Inject CSS (tokens.css MUST come before gladvn.css)
    if (cssFilePath && fs.existsSync(cssFilePath)) {
      let cssContent = fs.readFileSync(cssFilePath, 'utf8');
      const stylesDir = path.join(destPath, 'styles');
      const relDir = path.relative(path.dirname(cssFilePath), stylesDir).replace(/\\/g, '/');
      const prefix = relDir.startsWith('.') ? relDir : './' + relDir;

      const tokensImport = `@import "${prefix}/tokens.css";`;
      const gladvnImport = `@import "${prefix}/gladvn.css";`;
      const combinedImport = `${tokensImport}\n${gladvnImport}`;

      const needsTokens = !cssContent.includes('tokens.css');
      const needsGladvn = !cssContent.includes('gladvn.css');

      if (needsTokens || needsGladvn) {
        const toInject = needsTokens && needsGladvn
          ? combinedImport
          : needsTokens ? tokensImport : gladvnImport;

        if (cssContent.includes('@import "tailwindcss";')) {
          cssContent = cssContent.replace('@import "tailwindcss";', `@import "tailwindcss";\n${toInject}`);
        } else if (cssContent.includes('@tailwind base;')) {
          cssContent = cssContent.replace('@tailwind base;', `@tailwind base;\n${toInject}`);
        } else {
          cssContent = `${toInject}\n${cssContent}`;
        }
        fs.writeFileSync(cssFilePath, cssContent);
        console.log(`\x1b[32m✔ Injected gladvn styles (tokens + theme) into ${path.basename(cssFilePath)}\x1b[0m`);
      }
    }

    // Step 3. Configure TypeScript Path Alias
    const tsconfigFiles = ['tsconfig.app.json', 'tsconfig.json', 'jsconfig.json'];
    let tsconfigPath = null;
    for (const file of tsconfigFiles) {
      const p = path.join(process.cwd(), file);
      if (fs.existsSync(p)) {
        tsconfigPath = p;
        break;
      }
    }
    
    if (tsconfigPath) {
      let content = fs.readFileSync(tsconfigPath, 'utf8');
      let modified = false;

      // 3a. Ensure baseUrl is set (required for paths to work)
      if (!content.includes('"baseUrl"')) {
        if (content.match(/"compilerOptions"\s*:\s*\{/)) {
          content = content.replace(/"compilerOptions"\s*:\s*\{/, `"compilerOptions": {\n    "baseUrl": ".",`);
          modified = true;
        }
      }

      // 3b. Add path aliases: both @gladvn (barrel) and @gladvn/* (deep imports)
      if (!content.includes('@gladvn')) {
        const pathsBlock = `"paths": {\n      "@gladvn": ["./${userDest}/index.ts"],\n      "@gladvn/*": ["./${userDest}/*"]\n    }`;
        const pathsEmptyRegex = /"paths"\s*:\s*\{\s*\}/;
        const compilerOptionsEmptyRegex = /"compilerOptions"\s*:\s*\{\s*\}/;

        if (pathsEmptyRegex.test(content)) {
          content = content.replace(pathsEmptyRegex, pathsBlock);
        } else if (content.match(/"paths"\s*:\s*\{/)) {
          content = content.replace(/"paths"\s*:\s*\{/, `"paths": {\n      "@gladvn": ["./${userDest}/index.ts"],\n      "@gladvn/*": ["./${userDest}/*"],`);
        } else if (compilerOptionsEmptyRegex.test(content)) {
          content = content.replace(compilerOptionsEmptyRegex, `"compilerOptions": {\n    ${pathsBlock}\n  }`);
        } else if (content.match(/"compilerOptions"\s*:\s*\{/)) {
          content = content.replace(/"compilerOptions"\s*:\s*\{/, `"compilerOptions": {\n    ${pathsBlock},`);
        } else if (!content.includes('"compilerOptions"')) {
          content = content.replace(/\{/, `{\n  "compilerOptions": {\n    ${pathsBlock}\n  },`);
        }
        modified = true;
      }

      // 3c. Add destination folder to "include" so TS can see files outside src/
      if (content.includes('"include"') && !content.includes(`"${userDest}"`)) {
        content = content.replace(/"include"\s*:\s*\[/, `"include": [\n    "${userDest}",`);
        modified = true;
      }

      if (modified) {
        fs.writeFileSync(tsconfigPath, content);
        console.log(`\x1b[32m✔ Configured path alias @gladvn in ${path.basename(tsconfigPath)}\x1b[0m`);
      }
    }

    // Step 4. Configure Vite Alias
    const viteConfigFiles = ['vite.config.ts', 'vite.config.js', 'vite.config.mts', 'vite.config.mjs'];
    viteConfigPath = null;
    for (const file of viteConfigFiles) {
      const p = path.join(process.cwd(), file);
      if (fs.existsSync(p)) {
        viteConfigPath = p;
        break;
      }
    }

    if (viteConfigPath) {
      let content = fs.readFileSync(viteConfigPath, 'utf8');
      let modified = false;

      if (!content.includes('@gladvn')) {
        // Add `import path from "path"` if missing
        if (!content.includes('import path from') && !content.includes('require("path")')) {
          if (content.includes('import ')) {
            const lastImportIndex = content.lastIndexOf('import ');
            const endOfLine = content.indexOf('\n', lastImportIndex);
            if (endOfLine !== -1) {
              content = content.slice(0, endOfLine + 1) + 'import path from "path"\n' + content.slice(endOfLine + 1);
            } else {
              content = 'import path from "path"\n' + content;
            }
          } else {
            content = 'import path from "path"\n' + content;
          }
        }
        
        const resolveAlias = `\n  resolve: {\n    alias: {\n      "@gladvn": path.resolve(__dirname, "./${userDest}"),\n    },\n  },`;
        
        if (content.includes('resolve: {')) {
           if (content.includes('alias: {')) {
             content = content.replace(/alias:\s*\{/, `alias: {\n      "@gladvn": path.resolve(__dirname, "./${userDest}"),`);
           } else {
             content = content.replace(/resolve:\s*\{/, `resolve: {\n    alias: {\n      "@gladvn": path.resolve(__dirname, "./${userDest}"),\n    },`);
           }
        } else {
           content = content.replace(/defineConfig\s*\(\s*\{/, `defineConfig({${resolveAlias}`);
        }
        modified = true;
      }
      
      if (!content.includes('@tailwindcss/vite')) {
        if (content.includes('import ')) {
          const lastImportIndex = content.lastIndexOf('import ');
          const endOfLine = content.indexOf('\n', lastImportIndex);
          if (endOfLine !== -1) {
            content = content.slice(0, endOfLine + 1) + 'import tailwindcss from "@tailwindcss/vite"\n' + content.slice(endOfLine + 1);
          } else {
            content = 'import tailwindcss from "@tailwindcss/vite"\n' + content;
          }
        } else {
          content = 'import tailwindcss from "@tailwindcss/vite"\n' + content;
        }
        
        if (content.includes('plugins: [')) {
          content = content.replace(/plugins:\s*\[/, `plugins: [\n    tailwindcss(),`);
        } else if (content.match(/plugins:\s*\[/)) {
          content = content.replace(/plugins:\s*\[/, `plugins: [\n    tailwindcss(),`);
        } else if (content.includes('defineConfig({')) {
          content = content.replace(/defineConfig\s*\(\s*\{/, `defineConfig({\n  plugins: [tailwindcss()],`);
        }
        modified = true;
      }
      
      if (modified) {
        fs.writeFileSync(viteConfigPath, content);
        console.log(`\x1b[32m✔ Configured resolve.alias & tailwindcss plugin in ${path.basename(viteConfigPath)}\x1b[0m`);
      }
    }

  } // END OF INIT COMMAND

  // Step 5. Install dependencies
  // Track extra deps needed (e.g. @types/node for Vite TS projects)
  const extraDepsToInstall = [];

  // Check if we need @types/node (Vite + TypeScript)
  const viteConfigExists = ['vite.config.ts', 'vite.config.mts'].some(f => fs.existsSync(path.join(process.cwd(), f)));
  if (viteConfigExists || viteConfigPath) {
    try {
      const userPkgPath = path.resolve(process.cwd(), 'package.json');
      if (fs.existsSync(userPkgPath)) {
        const userPkg = JSON.parse(fs.readFileSync(userPkgPath, 'utf8'));
        const allUserDeps = { ...userPkg.dependencies, ...userPkg.devDependencies };
        if (viteConfigExists && !allUserDeps['@types/node']) {
          extraDepsToInstall.push('@types/node@"^20.0.0"');
        }
        if (!allUserDeps['tailwindcss']) {
          extraDepsToInstall.push('tailwindcss@"^4.0.0"');
        }
        if (!allUserDeps['@tailwindcss/vite']) {
          extraDepsToInstall.push('@tailwindcss/vite@"^4.0.0"');
        }
      } else {
        // If no package.json, just push them to be safe
        extraDepsToInstall.push('tailwindcss@"^4.0.0"');
        extraDepsToInstall.push('@tailwindcss/vite@"^4.0.0"');
      }
    } catch (e) {}
  }

  try {
    const depsObj = pkg.dependencies || {};
    
    if (Object.keys(depsObj).length > 0) {
      // Scan copied files to determine which dependencies are actually used
      function findSourceFiles(dir, fileList = []) {
        if (!fs.existsSync(dir)) return fileList;
        const files = fs.readdirSync(dir);
        for (const file of files) {
          const filePath = path.join(dir, file);
          const stat = fs.statSync(filePath);
          if (stat.isDirectory()) {
            findSourceFiles(filePath, fileList);
          } else if (file.match(/\.(tsx?|jsx?)$/)) {
            fileList.push(filePath);
          }
        }
        return fileList;
      }
      
      const sourceFiles = findSourceFiles(destPath);
      const usedDeps = new Set();
      const importRegex = /(?:import(?: type)?|from|require)\s*\(?\s*['"]([^'"]+)['"]/g;
      
      for (const file of sourceFiles) {
        let content = fs.readFileSync(file, 'utf-8');
        // Naively strip out comments to prevent false positive imports
        content = content.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '');
        let match;
        while ((match = importRegex.exec(content)) !== null) {
          const importPath = match[1];
          // Check if the import path matches any of our dependencies
          for (const dep of Object.keys(depsObj)) {
            if (importPath === dep || importPath.startsWith(dep + '/')) {
              usedDeps.add(dep);
            }
          }
        }
      }
      
      if (usedDeps.size > 0 || extraDepsToInstall.length > 0) {
        // Check user's package.json to see what is already installed
        const userPkgPath = path.resolve(process.cwd(), 'package.json');
        let userDeps = {};
        if (fs.existsSync(userPkgPath)) {
          try {
            const userPkg = JSON.parse(fs.readFileSync(userPkgPath, 'utf8'));
            userDeps = { ...userPkg.dependencies, ...userPkg.devDependencies };
          } catch (e) {}
        }

        const depsToInstall = [...extraDepsToInstall];
        for (const dep of usedDeps) {
          if (!userDeps[dep]) {
            depsToInstall.push(`${dep}@"${depsObj[dep]}"`);
          }
        }
      
        if (depsToInstall.length > 0) {
          let pm = "npm";
          let installCmd = "install";
          
          function hasLockfile(name) {
            let dir = process.cwd();
            while (true) {
              if (fs.existsSync(path.join(dir, name))) return true;
              const parent = path.dirname(dir);
              if (parent === dir) return false;
              dir = parent;
            }
          }
          
          if (hasLockfile("pnpm-lock.yaml")) {
            pm = "pnpm";
            installCmd = "add";
          } else if (hasLockfile("yarn.lock")) {
            pm = "yarn";
            installCmd = "add";
          } else if (hasLockfile("bun.lockb")) {
            pm = "bun";
            installCmd = "add";
          }

          const fullCmd = `${pm} ${installCmd} ${depsToInstall.join(" ")}`;
          
          if (process.env.TEST_ENV === 'true') {
            console.log(`\n\x1b[90m⏭  Skipping dependency installation in test environment.\x1b[0m`);
          } else {
            console.log(`\n\x1b[36mInstalling missing dependencies using ${pm}...\x1b[0m`);
            execSync(fullCmd, { stdio: "inherit", cwd: process.cwd() });
            console.log(`\x1b[32m✔ Dependencies installed successfully!\x1b[0m`);
          }
        } else {
          console.log(`\n\x1b[90m⏭  All required dependencies are already installed.\x1b[0m`);
        }
      }
    }
  } catch (err) {
    console.error(`\x1b[31m✖ Failed to install dependencies: ${err.message}\x1b[0m`);
    hasErrors = true;
  }

  if (!hasErrors) {
    if (command === "add") {
      console.log(`\n\x1b[32m✨ Successfully added ${componentToAdd}!\x1b[0m`);
    } else if (command === "add-block") {
      console.log(`\n\x1b[32m✨ Successfully added block ${componentToAdd}!\x1b[0m`);
    } else {
      console.log(`\n\x1b[32m✨ Successfully initialized gladvn files in ${userDest}!\x1b[0m`);
    }
  }
}

main().catch(err => {
  console.error(`\x1b[31m✖ An unexpected error occurred: ${err.message}\x1b[0m`);
  process.exit(1);
});
