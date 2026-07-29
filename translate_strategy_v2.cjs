const fs = require("fs");
const path = require("path");
const ts = require("typescript");

const files = process.argv.slice(2);
if (files.length === 0) {
  console.error("Please provide files to process.");
  process.exit(1);
}

let dict = {};
try {
  const dict1 = JSON.parse(fs.readFileSync("translated_strings.json", "utf8"));
  let dict2 = {};
  try {
    dict2 = JSON.parse(fs.readFileSync("/Users/nhungneee/.gemini/antigravity-ide/brain/21536da7-dd4b-4a33-be70-8afa444b1b6b/scratch/accordion_fixes.json", "utf8"));
  } catch(e) {}
  dict = { ...dict1, ...dict2 };
} catch (e) {
  console.error("No dictionary found");
  process.exit(1);
}

function isVietnamese(text) {
  return /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/i.test(text);
}

function escapeString(str) {
  return str.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');
}

function shouldWrapWithT(node) {
  let current = node;
  while (current) {
    if (ts.isJsxAttribute(current)) {
      const name = current.name.getText();
      if (name === "title" || name === "description" || name === "label") {
        if (current.parent && current.parent.parent && ts.isJsxOpeningElement(current.parent.parent)) {
          const tagName = current.parent.parent.tagName.getText();
          if (["ShowcaseExample", "SectionHeader", "ExampleSection"].includes(tagName)) {
            return true;
          }
        }
      }
    }
    if (ts.isJsxElement(current)) {
      const tagName = current.openingElement.tagName.getText();
      if (["ShowcaseDocs", "DocsP", "DocsH3", "DocsH2"].includes(tagName)) {
        return true;
      }
    }
    current = current.parent;
  }
  return false;
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");
  const sourceFile = ts.createSourceFile(filePath, content, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  
  const replacements = [];
  let needsI18n = false;

  function extractViEn(text, engFromDict) {
    let vi = text;
    let en = engFromDict || text;
    
    const parensMatch = text.match(/^(.*?)\s*\((.*?)\)$/);
    if (parensMatch) {
      const part1 = parensMatch[1].trim();
      const part2 = parensMatch[2].trim();
      if (isVietnamese(part1) && !isVietnamese(part2)) {
        vi = part1;
        en = part2;
      } else if (!isVietnamese(part1) && isVietnamese(part2)) {
        vi = part2;
        en = part1;
      }
    }
    return { vi, en };
  }

  function visit(node) {
    if (ts.isJsxAttribute(node) && node.name.getText() === "code") {
      if (node.initializer) {
        if (ts.isJsxExpression(node.initializer) && node.initializer.expression && ts.isNoSubstitutionTemplateLiteral(node.initializer.expression)) {
          const start = node.initializer.expression.getStart(sourceFile) + 1;
          const end = node.initializer.expression.getEnd() - 1;
          const originalSourceText = content.substring(start, end);
          let newText = originalSourceText;
          
          const keys = Object.keys(dict).sort((a, b) => b.length - a.length);
          keys.forEach(viKey => {
            if (viKey.trim() && newText.includes(viKey)) {
              newText = newText.split(viKey).join(dict[viKey]);
            }
          });
          
          if (newText !== originalSourceText) {
            replacements.push({
              start,
              end,
              text: newText
            });
          }
        }
      }
      return; 
    }

    if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
      const text = node.text;
      if (isVietnamese(text)) {
        const { vi, en } = extractViEn(text, dict[text.trim()] || dict[text] || text);
        
        if (shouldWrapWithT(node)) {
          needsI18n = true;
          let repl = `t("${escapeString(vi)}", "${escapeString(en)}")`;
          if (ts.isJsxAttribute(node.parent)) {
            repl = `{${repl}}`;
          }
          replacements.push({
            start: node.getStart(sourceFile),
            end: node.getEnd(),
            text: repl
          });
        } else {
          let repl = `"${escapeString(en)}"`;
          if (ts.isNoSubstitutionTemplateLiteral(node)) {
            repl = `\`${escapeString(en)}\``;
          }
          if (ts.isJsxAttribute(node.parent) && ts.isStringLiteral(node)) {
            repl = `{${repl}}`;
          }
          replacements.push({
            start: node.getStart(sourceFile),
            end: node.getEnd(),
            text: repl
          });
        }
      }
    }

    if (ts.isJsxText(node)) {
      const text = node.getText();
      const trimmed = text.trim();
      if (trimmed && isVietnamese(trimmed)) {
        const { vi, en } = extractViEn(trimmed, dict[trimmed] || trimmed);
        
        if (shouldWrapWithT(node)) {
          needsI18n = true;
          replacements.push({
            start: node.getStart(sourceFile),
            end: node.getEnd(),
            text: text.replace(trimmed, `{t("${escapeString(vi)}", "${escapeString(en)}")}`)
          });
        } else {
          replacements.push({
            start: node.getStart(sourceFile),
            end: node.getEnd(),
            text: text.replace(trimmed, en)
          });
        }
      }
    }

    ts.forEachChild(node, visit);
  }

  visit(sourceFile);

  if (replacements.length > 0) {
    replacements.sort((a, b) => b.start - a.start);
    for (const repl of replacements) {
      content = content.substring(0, repl.start) + repl.text + content.substring(repl.end);
    }

    if (needsI18n && !content.includes("useI18n")) {
      const importMatches = [...content.matchAll(/^import .* from ".*";$/gm)];
      let lastImportIndex = 0;
      if (importMatches.length > 0) {
        const lastMatch = importMatches[importMatches.length - 1];
        lastImportIndex = lastMatch.index + lastMatch[0].length;
      }
      content = content.substring(0, lastImportIndex) + '\nimport { useI18n } from "../components/dev-context";' + content.substring(lastImportIndex);
      
      const functionMatches = [...content.matchAll(/export default function \w+\(\) \{/g)];
      for (let i = functionMatches.length - 1; i >= 0; i--) {
        const m = functionMatches[i];
        const idx = m.index + m[0].length;
        content = content.substring(0, idx) + "\n  const t = useI18n();" + content.substring(idx);
      }
      
      const macroMatches = [...content.matchAll(/function \w+MacroShowcase\(\) \{/g)];
      for (let i = macroMatches.length - 1; i >= 0; i--) {
        const m = macroMatches[i];
        const idx = m.index + m[0].length;
        content = content.substring(0, idx) + "\n  const t = useI18n();" + content.substring(idx);
      }
      
      const microMatches = [...content.matchAll(/function \w+MicroShowcase\(\) \{/g)];
      for (let i = microMatches.length - 1; i >= 0; i--) {
        const m = microMatches[i];
        const idx = m.index + m[0].length;
        content = content.substring(0, idx) + "\n  const t = useI18n();" + content.substring(idx);
      }
    }

    fs.writeFileSync(filePath, content, "utf8");
    console.log("Processed " + filePath);
  }
}

files.forEach(file => {
  processFile(file);
});
