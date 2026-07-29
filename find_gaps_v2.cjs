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
        const attrs = node.attributes.properties;
        const previewAttr = attrs.find(a => a.name && a.name.getText() === "preview");
        if (previewAttr && previewAttr.initializer && ts.isJsxExpression(previewAttr.initializer)) {
          let expr = previewAttr.initializer.expression;
          if (expr) {
            if (ts.isParenthesizedExpression(expr)) {
              expr = expr.expression;
            }
            
            // Check if it's a fragment
            if (ts.isJsxFragment(expr)) {
              const childElements = expr.children.filter(c => ts.isJsxElement(c) || ts.isJsxSelfClosingElement(c));
              if (childElements.length > 1) {
                hasIssue = true;
              }
            } else if (ts.isJsxElement(expr)) {
              // Check if it's a div without gap
              const openElem = expr.openingElement;
              const classNameAttr = openElem.attributes.properties.find(a => a.name && a.name.getText() === "className");
              let hasGap = false;
              if (classNameAttr && classNameAttr.initializer && ts.isStringLiteral(classNameAttr.initializer)) {
                const className = classNameAttr.initializer.text;
                if (className.includes("gap-")) {
                  hasGap = true;
                }
              }
              const childElements = expr.children.filter(c => ts.isJsxElement(c) || ts.isJsxSelfClosingElement(c));
              if (childElements.length > 1 && !hasGap) {
                // If it's a TooltipProvider or something, it might not take className, but let's check
                // Usually we use <div className="flex gap-4">
                if (openElem.tagName.getText() === "div" || openElem.tagName.getText() === "ExampleGrid") {
                   hasIssue = true;
                }
              }
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
