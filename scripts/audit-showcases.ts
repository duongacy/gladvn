import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uiDir = path.join(__dirname, "../src/components/micro");
const showcaseDir = path.join(__dirname, "../src/dev/showcase");

const uiFiles = fs
  .readdirSync(uiDir)
  .filter((f) => f.endsWith(".tsx") && !f.includes("index.tsx"));

const issues: Record<string, string[]> = {};

for (const file of uiFiles) {
  const componentName = file.replace(".tsx", "");
  const showcaseFile = path.join(showcaseDir, file);
  const uiContent = fs.readFileSync(path.join(uiDir, file), "utf-8");

  if (!fs.existsSync(showcaseFile)) continue;
  const showcaseContent = fs.readFileSync(showcaseFile, "utf-8");

  issues[componentName] = [];

  // 1. Check exports vs imports
  const exportMatches = uiContent.match(/export \{([^}]+)\}/);
  if (exportMatches) {
    const exports = exportMatches[1]
      .split(",")
      .map((e) => e.trim())
      .filter((e) => e);
    for (const exp of exports) {
      const actualExport = exp.includes(" as ")
        ? exp.split(" as ")[1].trim()
        : exp;
      if (
        actualExport &&
        !showcaseContent.includes(actualExport) &&
        actualExport !== "type"
      ) {
        issues[componentName].push(`Missing subcomponent: ${actualExport}`);
      }
    }
  }

  // 2. Check globalSize
  if (uiContent.includes("size: {") || uiContent.includes('size = "')) {
    if (!showcaseContent.includes("globalSize")) {
      issues[componentName].push("Missing globalSize toggle");
    }
  }

  // 3. Check variants
  if (uiContent.includes("variant: {")) {
    const variantMatch = uiContent.match(/variant:\s*\{([^}]+)\}/);
    if (variantMatch) {
      const variants = variantMatch[1]
        .split("\n")
        .map((l) => l.trim().split(":")[0].replace(/['"]/g, ""))
        .filter((v) => v && !v.includes("//") && v !== "default");
      for (const v of variants) {
        if (
          !showcaseContent.includes(`variant="${v}"`) &&
          !showcaseContent.includes(`variant='${v}'`)
        ) {
          issues[componentName].push(`Missing variant demo: ${v}`);
        }
      }
    }
  }
}

let hasIssues = false;
for (const [comp, compIssues] of Object.entries(issues)) {
  if (compIssues.length > 0) {
    hasIssues = true;
    console.log(`\n❌ ${comp}.tsx:`);
    compIssues.forEach((i) => console.log(`  - ${i}`));
  }
}
if (!hasIssues) console.log("All showcases fully cover their components!");
