const fs = require("fs");
const path = require("path");
const ts = require("typescript");

const dir = "src/dev/showcase";
const files = fs.readdirSync(dir).filter(f => f.endsWith(".tsx"));
const missingStrings = new Set();

for (const file of files) {
  const filePath = path.join(dir, file);
  const content = fs.readFileSync(filePath, "utf8");
  const sourceFile = ts.createSourceFile(filePath, content, ts.ScriptTarget.Latest, true);

  function visit(node) {
    if (ts.isJsxAttribute(node)) {
      const name = node.name.text;
      if (name === "title" || name === "description" || name === "label") {
        if (node.initializer && ts.isStringLiteral(node.initializer)) {
          const text = node.initializer.text;
          // Ignore if it's already translated using parenthesis in old format, we will fix it later?
          // Actually if it's a string literal, it's NOT a CallExpression `t(...)`.
          // We should extract it!
          missingStrings.add(text);
        }
      }
    }
    ts.forEachChild(node, visit);
  }

  visit(sourceFile);
}

const arr = Array.from(missingStrings).sort();
fs.writeFileSync("missing_strings.json", JSON.stringify(arr, null, 2));
console.log(`Extracted ${arr.length} missing strings.`);
