const ts = require("typescript");
const fs = require("fs");
const path = require("path");

const files = fs.readdirSync("src/dev/showcase").filter(f => f.endsWith(".tsx"));

const results = [];

for (const file of files) {
  const filePath = path.join("src/dev/showcase", file);
  const code = fs.readFileSync(filePath, "utf8");
  const sourceFile = ts.createSourceFile(file, code, ts.ScriptTarget.Latest, true);

  let hasIssue = false;

  function visit(node) {
    if (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) {
      const tagName = node.tagName.getText();
      if (tagName === "ShowcaseExample") {
        // find preview attribute
        const attrs = node.attributes.properties;
        const previewAttr = attrs.find(a => a.name && a.name.getText() === "preview");
        if (previewAttr && previewAttr.initializer && ts.isJsxExpression(previewAttr.initializer)) {
          const expr = previewAttr.initializer.expression;
          if (expr && ts.isJsxFragment(expr)) {
            // Count non-text children
            const childElements = expr.children.filter(c => ts.isJsxElement(c) || ts.isJsxSelfClosingElement(c));
            if (childElements.length > 1) {
              hasIssue = true;
            }
          }
        }
      }
    }
    ts.forEachChild(node, visit);
  }

  visit(sourceFile);
  if (hasIssue) {
    results.push(file);
  }
}

console.log(results.join("\n"));
