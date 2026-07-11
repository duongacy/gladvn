import { Project, SyntaxKind, JsxElement, JsxSelfClosingElement } from "ts-morph";

const project = new Project({
  tsConfigFilePath: "tsconfig.json",
});

const sourceFiles = project.getSourceFiles("src/**/*.tsx");

let changed = 0;

for (const sf of sourceFiles) {
  let fileChanged = false;

  const jsxElements = sf.getDescendantsOfKind(SyntaxKind.JsxElement);
  
  for (const jsx of jsxElements) {
    const opening = jsx.getOpeningElement();
    const tagName = opening.getTagNameNode().getText();
    
    if (tagName === "Button") {
      // check if it already has iconOnly
      const hasIconOnly = opening.getAttributes().some(attr => {
        if (attr.getKind() === SyntaxKind.JsxAttribute) {
          return attr.asKind(SyntaxKind.JsxAttribute)?.getNameNode().getText() === "iconOnly";
        }
        return false;
      });
      
      // also check if it has data-icon="true" manually passed
      const hasDataIcon = opening.getAttributes().some(attr => {
        if (attr.getKind() === SyntaxKind.JsxAttribute) {
          return attr.asKind(SyntaxKind.JsxAttribute)?.getNameNode().getText() === "data-icon";
        }
        return false;
      });
      
      if (!hasIconOnly && !hasDataIcon) {
        // check children
        const children = jsx.getJsxChildren();
        // filter out whitespace text
        const significantChildren = children.filter(c => {
          if (c.getKind() === SyntaxKind.JsxText) {
            return c.getText().trim() !== "";
          }
          if (c.getKind() === SyntaxKind.JsxExpression) {
             // Sometimes it's a comment { /* comment */ }, ignore empty expressions if no actual elements.
             // But actually an expression like {icon} might be an icon.
             // Let's assume expressions might be text, so we skip auto-adding if there are expressions unless it's just one expression.
             // Actually, to be safe, only add if the child is explicitly an Icon component.
          }
          return true;
        });
        
        if (significantChildren.length === 1) {
          const child = significantChildren[0];
          let isIcon = false;
          
          if (child.getKind() === SyntaxKind.JsxElement) {
             const childTag = child.asKind(SyntaxKind.JsxElement)?.getOpeningElement().getTagNameNode().getText();
             if (childTag && (childTag.endsWith("Icon") || childTag === "svg")) isIcon = true;
          } else if (child.getKind() === SyntaxKind.JsxSelfClosingElement) {
             const childTag = child.asKind(SyntaxKind.JsxSelfClosingElement)?.getTagNameNode().getText();
             if (childTag && (childTag.endsWith("Icon") || childTag === "svg")) isIcon = true;
          } else if (child.getKind() === SyntaxKind.JsxExpression) {
             // {icon} or something. We can't safely know if it's an icon. So skip.
          }
          
          if (isIcon) {
            opening.addAttribute({ name: "iconOnly" });
            fileChanged = true;
          }
        }
      }
    }
  }
  
  if (fileChanged) {
    sf.saveSync();
    changed++;
    console.log("Updated", sf.getFilePath());
  }
}

console.log(`Updated ${changed} files.`);
