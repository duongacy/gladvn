#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const readline = require("readline");

// Colors
const cyan = "\x1b[36m";
const green = "\x1b[32m";
const yellow = "\x1b[33m";
const bold = "\x1b[1m";
const dim = "\x1b[90m";
const reset = "\x1b[0m";

// Find the consumer's project root (where npm install was run)
function findProjectRoot() {
  // During postinstall, CWD is the package dir inside node_modules
  // The consumer's project root is the INIT_CWD env variable
  const initCwd = process.env.INIT_CWD;
  if (initCwd) return initCwd;

  // Fallback: walk up from node_modules
  let dir = __dirname;
  while (dir !== path.dirname(dir)) {
    if (path.basename(dir) === "node_modules") {
      return path.dirname(dir);
    }
    dir = path.dirname(dir);
  }
  return process.cwd();
}

// Check if running in the package's own install (not consumer)
function isSelfInstall() {
  const projectRoot = findProjectRoot();
  try {
    const pkg = JSON.parse(
      fs.readFileSync(path.join(projectRoot, "package.json"), "utf8"),
    );
    return pkg.name === "@duongy96/gladcn";
  } catch {
    return false;
  }
}

// Copy tokens.css to the target directory
function copyTokens(projectRoot, targetDir) {
  const tokensSource = path.join(
    __dirname,
    "..",
    "src",
    "styles",
    "tokens.css",
  );
  const targetPath = path.join(projectRoot, targetDir, "tokens.css");

  // Create directory if it doesn't exist
  const dir = path.dirname(targetPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // Don't overwrite if already exists
  if (fs.existsSync(targetPath)) {
    console.log(
      `${dim}   ⏭  tokens.css already exists at ${targetDir}/tokens.css — skipped${reset}`,
    );
    return targetPath;
  }

  fs.copyFileSync(tokensSource, targetPath);
  console.log(
    `${green}   ✅ Copied tokens.css → ${targetDir}/tokens.css${reset}`,
  );
  return targetPath;
}

// Inject imports into the main CSS file
function injectImports(cssFilePath, tokensRelPath) {
  if (!fs.existsSync(cssFilePath)) {
    console.log(`${yellow}   ⚠  File not found: ${cssFilePath}${reset}`);
    return false;
  }

  let content = fs.readFileSync(cssFilePath, "utf8");

  // Check if already configured
  if (content.includes("@duongy96/gladcn/globals.css")) {
    console.log(
      `${dim}   ⏭  @duongy96/gladcn already configured in this file — skipped${reset}`,
    );
    return true;
  }

  // Build the import lines
  const sourceDirective = `@source "../node_modules/@duongy96/gladcn/dist";`;
  const tokensImport = `@import "${tokensRelPath}";`;
  const globalsImport = `@import "@duongy96/gladcn/globals.css";`;

  const imports = `\n/* @duongy96/gladcn */\n${sourceDirective}\n${tokensImport}\n${globalsImport}\n`;

  // Insert after @import "tailwindcss" if it exists, otherwise append
  const tailwindPattern = /@import\s+["']tailwindcss["'];?\s*\n?/;
  if (tailwindPattern.test(content)) {
    content = content.replace(tailwindPattern, (match) => match + imports);
  } else {
    content = content + "\n" + imports;
  }

  fs.writeFileSync(cssFilePath, content);
  console.log(
    `${green}   ✅ Injected gladcn imports into ${path.basename(
      cssFilePath,
    )}${reset}`,
  );
  return true;
}

// Interactive setup
async function interactiveSetup(projectRoot) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const ask = (question) =>
    new Promise((resolve) => rl.question(question, resolve));

  console.log(
    `\n${cyan}╔══════════════════════════════════════════════════════════════════╗${reset}`,
  );
  console.log(
    `${cyan}║  ${bold}@duongy96/gladcn${reset}${cyan} — Interactive Setup                          ║${reset}`,
  );
  console.log(
    `${cyan}╚══════════════════════════════════════════════════════════════════╝${reset}\n`,
  );

  // Step 1: Ask where to put tokens.css
  const tokensDir = await ask(
    `${yellow}   📁 Where to copy tokens.css? ${dim}(default: src/styles)${reset}\n   > `,
  );
  const targetDir = tokensDir.trim() || "src/styles";
  const tokensPath = copyTokens(projectRoot, targetDir);

  // Step 2: Ask for main CSS file
  const cssFile = await ask(
    `\n${yellow}   📄 Path to your main CSS file? ${dim}(e.g. src/app/globals.css)${reset}\n   > `,
  );
  const cssFileTrimmed = cssFile.trim();

  if (cssFileTrimmed) {
    const cssFilePath = path.resolve(projectRoot, cssFileTrimmed);
    const cssDir = path.dirname(cssFilePath);
    const tokensAbsPath = path.resolve(projectRoot, targetDir, "tokens.css");
    const tokensRelPath = "./" + path.relative(cssDir, tokensAbsPath);

    injectImports(cssFilePath, tokensRelPath);
  } else {
    console.log(`${dim}   ⏭  Skipped CSS injection${reset}`);
  }

  console.log(`\n${cyan}   🎉 Setup complete! Use components:${reset}`);
  console.log(
    `${green}   import { Button, Card } from "@duongy96/gladcn"${reset}`,
  );
  console.log(
    `\n${dim}   💡 Edit ${targetDir}/tokens.css to customize colors, radius, etc.${reset}\n`,
  );

  rl.close();
}

// Show static message (for non-interactive environments)
function showStaticMessage() {
  console.log(`
${cyan}╔══════════════════════════════════════════════════════════════════╗
║                                                                  ║
║   ${bold}@duongy96/gladcn${reset}${cyan} installed successfully! 🎉                   ║
║                                                                  ║
║   ${yellow}1. Copy the default tokens into your CSS:${cyan}                      ║
║                                                                  ║
║      ${dim}cp node_modules/@duongy96/gladcn/src/styles/tokens.css \\${cyan}    ║
║      ${dim}   src/styles/tokens.css${cyan}                                    ║
║                                                                  ║
║   ${yellow}2. Set up your main CSS file (e.g. globals.css):${cyan}               ║
║                                                                  ║
║      ${green}@import "tailwindcss";${cyan}                                      ║
║      ${green}@source "../node_modules/@duongy96/gladcn/dist";${cyan}             ║
║      ${green}@import "./tokens.css";${cyan}                                     ║
║      ${green}@import "@duongy96/gladcn/globals.css";${cyan}                      ║
║                                                                  ║
║   ${yellow}3. Use components:${cyan}                                             ║
║                                                                  ║
║      ${green}import { Button, Card } from "@duongy96/gladcn"${cyan}             ║
║                                                                  ║
║   ${dim}💡 Customize tokens.css to change colors, radius, etc.${cyan}        ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝${reset}
`);
}

// Main
async function main() {
  // Skip if this is the package's own install
  if (isSelfInstall()) return;

  const projectRoot = findProjectRoot();

  // Check if running in interactive terminal
  const isInteractive = process.stdin.isTTY && process.stdout.isTTY;

  if (isInteractive) {
    try {
      await interactiveSetup(projectRoot);
    } catch {
      // Fallback to static message if interactive fails
      showStaticMessage();
    }
  } else {
    showStaticMessage();
  }
}

main().catch(() => {
  // Never fail the install
  process.exit(0);
});
