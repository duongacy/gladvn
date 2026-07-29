const ts = require("typescript");
const fs = require("fs");
const path = require("path");

const files = fs.readdirSync("src/dev/showcase").filter(f => f.endsWith(".tsx"));

for (const file of files) {
  const filePath = path.join("src/dev/showcase", file);
  let code = fs.readFileSync(filePath, "utf8");
  const sourceFile = ts.createSourceFile(file, code, ts.ScriptTarget.Latest, true);

  const replacements = [];

  function visit(node) {
    if (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) {
      const tagName = node.tagName.getText();
      if (tagName === "ShowcaseExample") {
        const attrs = node.attributes.properties;
        const previewAttr = attrs.find(a => a.name && a.name.getText() === "preview");
        if (previewAttr && previewAttr.initializer) {
          const start = previewAttr.initializer.getStart(sourceFile);
          const end = previewAttr.initializer.getEnd();
          replacements.push({ start, end });
        }
      }
    }
    ts.forEachChild(node, visit);
  }

  visit(sourceFile);

  if (replacements.length > 0) {
    // We must apply replacements from end to start to not mess up offsets
    replacements.sort((a, b) => b.start - a.start);
    let changed = false;
    for (const { start, end } of replacements) {
      const originalPreview = code.substring(start, end);
      const newPreview = originalPreview
        .replace(/size="sm"/g, "size={globalSize}")
        .replace(/size="md"/g, "size={globalSize}")
        .replace(/size="lg"/g, "size={globalSize}");
      if (originalPreview !== newPreview) {
        code = code.substring(0, start) + newPreview + code.substring(end);
        changed = true;
      }
    }
    if (changed) {
      fs.writeFileSync(filePath, code);
      console.log("Updated", file);
    }
  }
}
