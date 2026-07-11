#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

if (process.argv.includes('--help') || process.argv.includes('-h')) {
  console.log(`
Usage:
  npx @duongy96/gladcn init [destination]

Options:
  [destination]   The folder where components will be copied. Defaults to "src/gladcn".
  --help, -h      Show this help message.
`);
  process.exit(0);
}

// Find destination
let userDest = "src/gladcn";
const args = process.argv.slice(2);

// Handle "init" command optionally (e.g. `npx pkg init ./dest`)
if (args[0] === "init") {
  if (args[1]) {
    userDest = args[1];
  }
} else if (args[0]) {
  userDest = args[0];
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const destPath = path.resolve(process.cwd(), userDest);
const srcDir = path.resolve(__dirname, "../src");

let dirsToCopy = [];
if (fs.existsSync(srcDir)) {
  const excludeList = ['dev', 'test', 'vite-env.d.ts'];
  dirsToCopy = fs.readdirSync(srcDir).filter(item => !excludeList.includes(item));
}

console.log(`\x1b[36mInitializing gladcn components into ${userDest}...\x1b[0m`);

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

// Install dependencies
try {
  const pkgPath = path.resolve(__dirname, "../package.json");
  const pkgContent = fs.readFileSync(pkgPath, "utf-8");
  const pkg = JSON.parse(pkgContent);
  const depsObj = pkg.dependencies || {};
  
  if (Object.keys(depsObj).length > 0) {
    const depsToInstall = Object.entries(depsObj).map(([name, version]) => `${name}@"${version}"`);
    
    // Detect package manager
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
