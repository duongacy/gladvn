import * as fs from "fs";
import * as path from "path";

const SRC_DIR = path.join(process.cwd(), "src/components");

function walkDir(dir: string, callback: (filePath: string) => void) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath, callback);
    } else if (fullPath.endsWith(".tsx") || fullPath.endsWith(".ts")) {
      callback(fullPath);
    }
  }
}

const defRegex = /\[--([a-zA-Z0-9_-]+):([^\]]+)\]/g;
const usageRegex =
  /(w|h|size|rounded|p|m|gap|space-[xy]|top|bottom|left|right)-\(--([a-zA-Z0-9_-]+)\)/g;
const genericUsageRegex = /var\(--([a-zA-Z0-9_-]+)\)/g;

const results: Record<string, { defs: Set<string>; usages: Set<string> }> = {};

walkDir(SRC_DIR, (filePath) => {
  const content = fs.readFileSync(filePath, "utf-8");
  let match;

  const relPath = path.relative(process.cwd(), filePath);

  while ((match = defRegex.exec(content)) !== null) {
    if (!results[relPath])
      results[relPath] = { defs: new Set(), usages: new Set() };
    results[relPath].defs.add(`--${match[1]}: ${match[2]}`);
  }

  while ((match = usageRegex.exec(content)) !== null) {
    if (!results[relPath])
      results[relPath] = { defs: new Set(), usages: new Set() };
    results[relPath].usages.add(`${match[1]}-(--${match[2]})`);
  }

  while ((match = genericUsageRegex.exec(content)) !== null) {
    // Avoid double counting if it's already caught by defRegex
    if (!results[relPath])
      results[relPath] = { defs: new Set(), usages: new Set() };
    results[relPath].usages.add(`var(--${match[1]})`);
  }
});

for (const [file, data] of Object.entries(results)) {
  if (data.defs.size === 0 && data.usages.size === 0) continue;
  console.log(`\nFile: ${file}`);
  if (data.defs.size > 0) {
    console.log(`  Definitions:`);
    for (const def of data.defs) console.log(`    - ${def}`);
  }
  if (data.usages.size > 0) {
    console.log(`  Usages:`);
    for (const usage of data.usages) console.log(`    - ${usage}`);
  }
}
