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
  npx @duongy96/gladcn init [destination]

Options:
  [destination]   The folder where components will be copied. Defaults to "gladcn".
  --help, -h      Show this help message.
`);
  process.exit(0);
}

// Find destination
let userDest = "gladcn";
const args = process.argv.slice(2);

if (args[0] === "init") {
  if (args[1]) userDest = args[1];
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

async function main() {
  console.log(`\n${cyan}╔══════════════════════════════════════════════════════════════════╗${reset}`);
  console.log(`${cyan}║  ${bold}gladcn${reset}${cyan} — Initialization                                     ║${reset}`);
  console.log(`${cyan}╚══════════════════════════════════════════════════════════════════╝${reset}\n`);

  let targetCss = "app/globals.css";
  const cssFilesFull = findCssFiles(process.cwd());
  const cssFiles = cssFilesFull.map(f => path.relative(process.cwd(), f));

  const isTTY = process.stdin.isTTY;

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
    // We have more than 1 file, and environment is TTY
    targetCss = await selectOption("Which CSS file should we inject gladcn styles into?", cssFiles);
  }

  let cssFilePath = null;
  if (targetCss) {
    cssFilePath = path.resolve(process.cwd(), targetCss);
  }

  // 1. Copy files
  let dirsToCopy = [];
  if (fs.existsSync(srcDir)) {
    const excludeList = ['dev', 'test', 'vite-env.d.ts'];
    dirsToCopy = fs.readdirSync(srcDir).filter(item => !excludeList.includes(item));
  }

  console.log(`\n\x1b[36mInitializing gladcn components into ${userDest}...\x1b[0m`);

  if (!fs.existsSync(destPath)) {
    fs.mkdirSync(destPath, { recursive: true });
  }

  let hasErrors = false;

  for (const dir of dirsToCopy) {
    const sourcePath = path.join(srcDir, dir);
    const targetPath = path.join(destPath, dir);

    if (fs.existsSync(sourcePath)) {
      try {
        fs.cpSync(sourcePath, targetPath, { recursive: true, force: true });
        console.log(`\x1b[32m✔ Copied ${dir}\x1b[0m`);
      } catch (err) {
        console.error(`\x1b[31m✖ Failed to copy ${dir}/: ${err.message}\x1b[0m`);
        hasErrors = true;
      }
    } else {
      console.warn(`\x1b[33m⚠ Source directory src/${dir} not found in package.\x1b[0m`);
    }
  }

  // 2. Inject CSS import
  if (cssFilePath && fs.existsSync(cssFilePath)) {
    const gladcnCssPath = path.resolve(destPath, "styles", "gladcn.css");
    const cssDir = path.dirname(cssFilePath);
    
    let relPath = path.relative(cssDir, gladcnCssPath);
    if (!relPath.startsWith('.')) {
      relPath = './' + relPath;
    }
    relPath = relPath.replace(/\\/g, '/');

    let content = fs.readFileSync(cssFilePath, "utf8");
    
    if (content.includes(relPath)) {
      console.log(`\x1b[90m⏭  CSS import already exists in ${targetCss}\x1b[0m`);
    } else {
      const importStatement = `@import "${relPath}";`;
      
      const tailwindPattern = /@import\s+["']tailwindcss["'];?\s*\n?/;
      if (tailwindPattern.test(content)) {
        content = content.replace(tailwindPattern, (match) => match + importStatement + '\n');
      } else {
        content = importStatement + '\n' + content;
      }
      
      fs.writeFileSync(cssFilePath, content);
      console.log(`\x1b[32m✔ Injected CSS import into ${targetCss}\x1b[0m`);
    }
  } else if (targetCss) {
    console.log(`\x1b[33m⚠ CSS file not found at ${targetCss}. You will need to manually import ${userDest}/styles/gladcn.css\x1b[0m`);
  } else {
    console.log(`\x1b[33m⚠ No CSS file configured. You will need to manually import ${userDest}/styles/gladcn.css into your project.\x1b[0m`);
  }

  // 2.5 Configure tsconfig.json
  if (isTTY) {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    const answer = await new Promise((resolve) => rl.question(`\n${yellow}? Do you want to configure tsconfig.json to use the @gladcn/* alias? (Y/n)${reset} `, resolve));
    rl.close();

    if (answer.trim().toLowerCase() !== 'n') {
      const tsconfigPath = path.resolve(process.cwd(), 'tsconfig.json');
      if (fs.existsSync(tsconfigPath)) {
        let tsContent = fs.readFileSync(tsconfigPath, 'utf8');
        const aliasPath = `./${userDest}/*`;

        if (tsContent.includes('"@gladcn/*"')) {
          console.log(`\x1b[90m⏭  @gladcn/* alias already exists in tsconfig.json\x1b[0m`);
        } else {
          const pathsRegex = /"paths"\s*:\s*\{/;
          if (pathsRegex.test(tsContent)) {
            tsContent = tsContent.replace(pathsRegex, `"paths": {\n      "@gladcn/*": ["${aliasPath}"],`);
            fs.writeFileSync(tsconfigPath, tsContent);
            console.log(`\x1b[32m✔ Injected @gladcn/* alias into existing paths\x1b[0m`);
          } else {
            const compilerOptionsRegex = /"compilerOptions"\s*:\s*\{/;
            if (compilerOptionsRegex.test(tsContent)) {
              tsContent = tsContent.replace(compilerOptionsRegex, `"compilerOptions": {\n    "paths": {\n      "@gladcn/*": ["${aliasPath}"]\n    },`);
              fs.writeFileSync(tsconfigPath, tsContent);
              console.log(`\x1b[32m✔ Injected paths object and @gladcn/* alias\x1b[0m`);
            } else {
              console.log(`\x1b[33m⚠ Could not find compilerOptions in tsconfig.json. Please add manually.\x1b[0m`);
            }
          }
        }
      } else {
        console.log(`\x1b[33m⚠ tsconfig.json not found. Please configure alias manually if desired.\x1b[0m`);
      }
    }
  }

  // 3. Install dependencies
  try {
    const pkgPath = path.resolve(__dirname, "../package.json");
    const pkgContent = fs.readFileSync(pkgPath, "utf-8");
    const pkg = JSON.parse(pkgContent);
    const depsObj = pkg.dependencies || {};
    
    if (Object.keys(depsObj).length > 0) {
      const depsToInstall = Object.entries(depsObj).map(([name, version]) => `${name}@"${version}"`);
      
      let pm = "npm";
      let installCmd = "install";
      
      if (fs.existsSync(path.resolve(process.cwd(), "pnpm-lock.yaml"))) {
        pm = "pnpm";
        installCmd = "add";
      } else if (fs.existsSync(path.resolve(process.cwd(), "yarn.lock"))) {
        pm = "yarn";
        installCmd = "add";
      } else if (fs.existsSync(path.resolve(process.cwd(), "bun.lockb"))) {
        pm = "bun";
        installCmd = "add";
      }

      const fullCmd = `${pm} ${installCmd} ${depsToInstall.join(" ")}`;
      
      console.log(`\n\x1b[36mInstalling required dependencies using ${pm}...\x1b[0m`);
      execSync(fullCmd, { stdio: "inherit", cwd: process.cwd() });
      console.log(`\x1b[32m✔ Dependencies installed successfully!\x1b[0m`);
    }
  } catch (err) {
    console.error(`\x1b[31m✖ Failed to install dependencies: ${err.message}\x1b[0m`);
    hasErrors = true;
  }

  if (!hasErrors) {
    console.log(`\n\x1b[32m✨ Successfully initialized gladcn files in ${userDest}!\x1b[0m`);
  }
}

main().catch(err => {
  console.error(`\x1b[31m✖ An unexpected error occurred: ${err.message}\x1b[0m`);
  process.exit(1);
});
