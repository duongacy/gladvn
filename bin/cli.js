#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
import readline from 'readline';

const cyan = "\x1b[36m";
const green = "\x1b[32m";
const yellow = "\x1b[33m";
const bold = "\x1b[1m";
const dim = "\x1b[90m";
const reset = "\x1b[0m";

if (process.argv.includes('--help') || process.argv.includes('-h')) {
  console.log(`
Usage:
  npx gladvn init [destination]
  npx gladvn add <component> [destination]
  npx gladvn add-block <block> [destination]

Options:
  [destination]   The folder where components will be copied. Defaults to "gladvn".
  --help, -h      Show this help message.
`);
  process.exit(0);
}

// Find destination
let userDest = "gladvn";
let command = "init";
let componentToAdd = null;
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

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const destPath = path.resolve(process.cwd(), userDest);
const srcDir = path.resolve(__dirname, "../src");

// Recursive file scanner
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

async function selectMultipleOptions(message, options) {
  return new Promise((resolve) => {
    let selectedIndex = 0;
    const selected = new Set();

    const render = () => {
      process.stdout.write('\x1B[?25l');
      readline.cursorTo(process.stdout, 0);
      readline.clearScreenDown(process.stdout);
      
      console.log(`\x1b[33m?\x1b[0m \x1b[1m${message}\x1b[0m \x1b[90m(Press <space> to select, <enter> to confirm)\x1b[0m`);
      options.forEach((opt, index) => {
        const isChecked = selected.has(index);
        const checkbox = isChecked ? '\x1b[32m◉\x1b[0m' : '\x1b[90m◯\x1b[0m';
        if (index === selectedIndex) {
          console.log(`  \x1b[36m❯ ${checkbox} ${opt}\x1b[0m`);
        } else {
          console.log(`    ${checkbox} ${opt}`);
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
      } else if (key.name === 'space') {
        if (selected.has(selectedIndex)) {
          selected.delete(selectedIndex);
        } else {
          selected.add(selectedIndex);
        }
        render();
      } else if (key.name === 'return' || key.name === 'enter') {
        cleanup();
        const results = Array.from(selected).map(idx => options[idx]);
        console.log(`\x1b[32m✔\x1b[0m \x1b[1m${message}\x1b[0m \x1b[90m…\x1b[0m \x1b[36m${results.length} selected\x1b[0m`);
        resolve(results);
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
      process.stdout.write('\x1B[?25h');
      readline.moveCursor(process.stdout, 0, -(options.length + 1));
      readline.clearScreenDown(process.stdout);
    };

    readline.emitKeypressEvents(process.stdin);
    if (process.stdin.isTTY) process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.on('keypress', onKeyPress);
  });
}

async function main() {
  console.log(`\n${cyan}╔══════════════════════════════════════════════════════════════════╗${reset}`);
  if (command === "add") {
    console.log(`${cyan}║  ${bold}gladvn${reset}${cyan} — Add Component                                      ║${reset}`);
  } else if (command === "add-block") {
    console.log(`${cyan}║  ${bold}gladvn${reset}${cyan} — Add Block                                          ║${reset}`);
  } else {
    console.log(`${cyan}║  ${bold}gladvn${reset}${cyan} — Initialization                                     ║${reset}`);
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
          if (file.endsWith('.tsx') || file.endsWith('.ts')) {
            availableComponents.push(`${sub}/${file}`);
          }
        }
      }
    }
  }

  const blocksDir = path.join(srcDir, 'blocks');
  let availableBlocks = [];
  
  if (fs.existsSync(blocksDir)) {
    const files = fs.readdirSync(blocksDir);
    for (const file of files) {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        availableBlocks.push(file);
      }
    }
  }

  if (command === "add") {
    console.log(`\x1b[36mAdding ${componentToAdd} to ${userDest}...\x1b[0m`);
    const compMatches = availableComponents.filter(c => c.endsWith(`/${componentToAdd}.tsx`) || c.endsWith(`/${componentToAdd}.ts`));
    if (compMatches.length === 0) {
       console.error(`\x1b[31m✖ Component "${componentToAdd}" not found.\x1b[0m`);
       process.exit(1);
    }
    
    if (!fs.existsSync(destPath)) {
      fs.mkdirSync(destPath, { recursive: true });
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
  } else if (command === "add-block") {
    console.log(`\x1b[36mAdding block ${componentToAdd} to ${userDest}...\x1b[0m`);
    const blockMatches = availableBlocks.filter(b => b === `${componentToAdd}.tsx` || b === `${componentToAdd}.ts`);
    if (blockMatches.length === 0) {
       console.error(`\x1b[31m✖ Block "${componentToAdd}" not found.\x1b[0m`);
       process.exit(1);
    }
    
    if (!fs.existsSync(destPath)) {
      fs.mkdirSync(destPath, { recursive: true });
    }
    const block = blockMatches[0];
    const sourcePath = path.join(blocksDir, block);
    const targetPath = path.join(destPath, 'blocks', block);
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
    // === INIT COMMAND ===
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

    // 1. Copy files
    console.log(`\n\x1b[36mInitializing gladvn components into ${userDest}...\x1b[0m`);

    if (!fs.existsSync(destPath)) {
      fs.mkdirSync(destPath, { recursive: true });
    }

    // Always copy core directories

  const coreDirs = ['hooks', 'lib', 'styles'];
  for (const dir of coreDirs) {
    const sourcePath = path.join(srcDir, dir);
    const targetPath = path.join(destPath, dir);
    if (fs.existsSync(sourcePath)) {
      try {
        fs.cpSync(sourcePath, targetPath, { recursive: true, force: true });
      } catch (err) {
        console.error(`\x1b[31m✖ Failed to copy core ${dir}/: ${err.message}\x1b[0m`);
        hasErrors = true;
      }
    }
  }
  console.log(`\x1b[32m✔ Copied core files (lib, hooks, styles)\x1b[0m`);

  // 2. Inject CSS
  if (cssFilePath && fs.existsSync(cssFilePath)) {
    const cssContent = fs.readFileSync(cssFilePath, 'utf8');
    const cssTarget = path.join(destPath, 'styles', 'gladvn.css');
    let relPath = path.relative(path.dirname(cssFilePath), cssTarget).replace(/\\/g, '/');
    if (!relPath.startsWith('.')) relPath = './' + relPath;
    const importStmt = `@import "${relPath}";`;
    if (!cssContent.includes(importStmt) && !cssContent.includes('gladvn.css')) {
      if (cssContent.includes('@import "tailwindcss";')) {
        fs.writeFileSync(cssFilePath, cssContent.replace('@import "tailwindcss";', `@import "tailwindcss";\n${importStmt}`));
      } else if (cssContent.includes('@tailwind base;')) {
        fs.writeFileSync(cssFilePath, cssContent.replace('@tailwind base;', `@tailwind base;\n${importStmt}`));
      } else {
        fs.writeFileSync(cssFilePath, `${importStmt}\n${cssContent}`);
      }
      console.log(`\x1b[32m✔ Injected gladvn CSS into ${path.basename(cssFilePath)}\x1b[0m`);
    }
  }

  // 3. Configure Path Alias
  let tsconfigPath = path.join(process.cwd(), 'tsconfig.json');
  if (!fs.existsSync(tsconfigPath)) tsconfigPath = path.join(process.cwd(), 'jsconfig.json');
  
  if (fs.existsSync(tsconfigPath)) {
    let content = fs.readFileSync(tsconfigPath, 'utf8');
    if (!content.includes('@gladvn/*')) {
      const pathsEmptyRegex = /"paths"\s*:\s*\{\s*\}/;
      const compilerOptionsEmptyRegex = /"compilerOptions"\s*:\s*\{\s*\}/;

      if (pathsEmptyRegex.test(content)) {
        content = content.replace(pathsEmptyRegex, `"paths": {\n      "@gladvn/*": ["./${userDest}/*"]\n    }`);
      } else if (content.match(/"paths"\s*:\s*\{/)) {
        content = content.replace(/"paths"\s*:\s*\{/, `"paths": {\n      "@gladvn/*": ["./${userDest}/*"],`);
      } else if (compilerOptionsEmptyRegex.test(content)) {
        content = content.replace(compilerOptionsEmptyRegex, `"compilerOptions": {\n    "paths": {\n      "@gladvn/*": ["./${userDest}/*"]\n    }\n  }`);
      } else if (content.match(/"compilerOptions"\s*:\s*\{/)) {
        content = content.replace(/"compilerOptions"\s*:\s*\{/, `"compilerOptions": {\n    "paths": {\n      "@gladvn/*": ["./${userDest}/*"]\n    },`);
      }
      fs.writeFileSync(tsconfigPath, content);
      console.log(`\x1b[32m✔ Configured path alias @gladvn/* in ${path.basename(tsconfigPath)}\x1b[0m`);
    }
  }

  } // END OF INIT COMMAND

  // 3. Install dependencies
  try {
    const pkgPath = path.resolve(__dirname, "../package.json");
    const pkgContent = fs.readFileSync(pkgPath, "utf-8");
    const pkg = JSON.parse(pkgContent);
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
      
      if (usedDeps.size > 0) {
        // Check user's package.json to see what is already installed
        const userPkgPath = path.resolve(process.cwd(), 'package.json');
        let userDeps = {};
        if (fs.existsSync(userPkgPath)) {
          try {
            const userPkg = JSON.parse(fs.readFileSync(userPkgPath, 'utf8'));
            userDeps = { ...(userPkg.dependencies || {}), ...(userPkg.devDependencies || {}) };
          } catch (e) {}
        }

        const depsToInstall = [];
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
          
          console.log(`\n\x1b[36mInstalling missing dependencies using ${pm}...\x1b[0m`);
          execSync(fullCmd, { stdio: "inherit", cwd: process.cwd() });
          console.log(`\x1b[32m✔ Dependencies installed successfully!\x1b[0m`);
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
