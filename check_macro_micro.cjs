const ts = require("typescript");
const fs = require("fs");
const path = require("path");

const files = ["input.tsx", "card.tsx", "textarea.tsx", "radio-group.tsx", "slider.tsx", "checkbox.tsx", "switch.tsx", "dialog.tsx", "alert-dialog.tsx", "avatar.tsx", "empty.tsx", "input-otp.tsx", "carousel.tsx", "table.tsx"];

for (const file of files) {
  const filePath = path.join("src/dev/showcase", file);
  if (!fs.existsSync(filePath)) continue;
  
  let code = fs.readFileSync(filePath, "utf8");
  const sourceFile = ts.createSourceFile(file, code, ts.ScriptTarget.Latest, true);

  let macroFirstExample = null;
  let microFirstExample = null;
  
  function getShowcaseExampleInfo(node) {
    if (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) {
      if (node.tagName.getText() === "ShowcaseExample") {
        const attrs = node.attributes.properties;
        const titleProp = attrs.find(a => a.name && a.name.getText() === "title");
        const descProp = attrs.find(a => a.name && a.name.getText() === "description");
        const title = titleProp ? (titleProp.initializer.text || titleProp.initializer.getText()) : null;
        const desc = descProp ? (descProp.initializer.text || descProp.initializer.getText()) : null;
        return { title, desc };
      }
    }
    return null;
  }

  function findFirstExample(node, parentName) {
    let found = null;
    let inTargetFn = false;

    function visit(n) {
      if (ts.isFunctionDeclaration(n) && n.name && n.name.getText() === parentName) {
        inTargetFn = true;
        ts.forEachChild(n, visitInside);
        inTargetFn = false;
      } else {
        ts.forEachChild(n, visit);
      }
    }

    function visitInside(n) {
      if (found) return;
      const info = getShowcaseExampleInfo(n);
      if (info) {
        found = info;
        return;
      }
      ts.forEachChild(n, visitInside);
    }

    visit(sourceFile);
    return found;
  }

  const baseName = path.basename(file, ".tsx");
  // Some component names might be compound like RadioGroup
  const parts = baseName.split("-").map(p => p.charAt(0).toUpperCase() + p.slice(1));
  const compName = parts.join("");
  
  macroFirstExample = findFirstExample(sourceFile, compName + "MacroShowcase");
  microFirstExample = findFirstExample(sourceFile, compName + "MicroShowcase");

  console.log(`\n--- ${file} ---`);
  if (macroFirstExample) {
    console.log("Macro:", macroFirstExample.title, "|", macroFirstExample.desc);
  } else {
    console.log("Macro: not found");
  }
  if (microFirstExample) {
    console.log("Micro:", microFirstExample.title, "|", microFirstExample.desc);
  } else {
    console.log("Micro: not found");
  }
}
