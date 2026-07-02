import { Project, SyntaxKind } from "ts-morph";
import * as fs from "fs";
import * as path from "path";

const project = new Project({
  tsConfigFilePath: "tsconfig.json",
});

const sourceFiles = project.getSourceFiles("src/components/micro/*.tsx");

interface Violation {
  file: string;
  type: string;
  message: string;
  line: number;
}

const violations: Violation[] = [];

// Regular expressions for anti-patterns
const MAGIC_CSS_REGEX = /\[&_?[a-zA-Z0-9\->\+~]\]|\*:\[?[a-zA-Z0-9\->\+~]\]?|has-\[>?[a-zA-Z0-9\->\+~]\]/;
const ARBITRARY_VAR_REGEX = /var\(--[a-zA-Z0-9-]+\)|-\[--[a-zA-Z0-9-]+\]/;
// Exclude semantic colors (primary, muted, etc.), find raw colors
const HARDCODED_COLOR_REGEX = /(bg|text|border|ring)-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-[1-9]00/;

for (const sf of sourceFiles) {
  const fileName = sf.getBaseName();
  
  // 1. Check for "default" variants/sizes statically
  const text = sf.getFullText();
  const lines = text.split("\n");
  
  lines.forEach((line, index) => {
    const lineNum = index + 1;
    
    // Check for Magic CSS
    if (MAGIC_CSS_REGEX.test(line) && !line.includes("eslint-disable")) {
      // Small exception for specific radix states if needed, but let's flag them all first
      violations.push({
        file: fileName,
        type: "Magic CSS",
        message: "Found descendant/magic CSS combinator: " + line.trim().substring(0, 50),
        line: lineNum
      });
    }

    // Check for Arbitrary Variables
    if (ARBITRARY_VAR_REGEX.test(line) && !line.includes("radix-") && !line.includes("collapsible-") && !line.includes("accordion-")) {
      violations.push({
        file: fileName,
        type: "Arbitrary CSS Variable",
        message: "Found arbitrary CSS variable not from Headless UI: " + line.trim().substring(0, 50),
        line: lineNum
      });
    }

    // Check for Hardcoded Colors
    if (HARDCODED_COLOR_REGEX.test(line)) {
      violations.push({
        file: fileName,
        type: "Hardcoded Color",
        message: "Found raw Tailwind color instead of semantic token: " + line.trim().substring(0, 50),
        line: lineNum
      });
    }

    // Check for default variants
    if (/(variant|size|color):\s*["']default["']/.test(line)) {
      violations.push({
        file: fileName,
        type: "Default Variant",
        message: "Found 'default' as a variant/size/color value",
        line: lineNum
      });
    }
  });
}

// Group violations by file
const grouped: Record<string, Violation[]> = {};
for (const v of violations) {
  if (!grouped[v.file]) grouped[v.file] = [];
  grouped[v.file].push(v);
}

console.log("=== COMPONENT BEST PRACTICES AUDIT ===");
if (violations.length === 0) {
  console.log("✅ All components passed the Best Practices Audit with 100% compliance!");
} else {
  console.log(`❌ Found ${violations.length} violations across ${Object.keys(grouped).length} components.\n`);
  for (const file of Object.keys(grouped)) {
    console.log(`\n📄 ${file}`);
    for (const v of grouped[file]) {
      console.log(`  - [${v.type}] Line ${v.line}: ${v.message}`);
    }
  }
}
