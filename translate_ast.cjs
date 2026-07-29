const fs = require("fs");
const path = require("path");
const ts = require("typescript");

const dir = "src/dev/showcase";
const files = fs.readdirSync(dir).filter(f => f.endsWith(".tsx"));
let dict = {};
try {
  dict = JSON.parse(fs.readFileSync("translated_strings.json", "utf8"));
} catch (e) {}
try {
  const autoTrans = JSON.parse(fs.readFileSync("auto_translated.json", "utf8"));
  dict = { ...dict, ...autoTrans };
} catch(e) {}

const isVietnamese = (str) => /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/i.test(str);

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, "utf8");
  const sourceFile = ts.createSourceFile(filePath, content, ts.ScriptTarget.Latest, true);
  
  let needsI18n = false;
  const replacements = [];

  function getTranslation(str) {
    if (!isVietnamese(str)) return null;
    return dict[str] || str;
  }

  function visit(node) {
    if (ts.isJsxAttribute(node)) {
      const name = node.name.text;
      if (name === "title" || name === "description" || name === "label") {
        if (node.initializer && ts.isStringLiteral(node.initializer)) {
          const text = node.initializer.text;
          const eng = getTranslation(text);
          if (eng && eng !== text) {
            replacements.push({
              start: node.initializer.getStart(sourceFile),
              end: node.initializer.getEnd(),
              text: `{t(${JSON.stringify(text)}, ${JSON.stringify(eng)})}`
            });
            needsI18n = true;
          }
        }
      }
    } else if (ts.isJsxElement(node)) {
      const tagName = node.openingElement.tagName.getText(sourceFile);
      if (tagName === "DocsP" || tagName === "DocsUl" || tagName === "ShowcaseExample" || tagName === "AlertTitle" || tagName === "AlertDescription") {
         node.children.forEach(child => {
            if (ts.isJsxText(child)) {
               const text = child.text.trim();
               if (text && isVietnamese(text)) {
                 const eng = getTranslation(text);
                 if (eng && eng !== text) {
                   replacements.push({
                     start: child.getStart(sourceFile),
                     end: child.getEnd(),
                     text: `{t(${JSON.stringify(text)}, ${JSON.stringify(eng)})}`
                   });
                   needsI18n = true;
                 }
               }
            }
         });
      }
    }
    ts.forEachChild(node, visit);
  }

  visit(sourceFile);

  if (replacements.length > 0) {
    replacements.sort((a, b) => b.start - a.start);
    for (const rep of replacements) {
      content = content.slice(0, rep.start) + rep.text + content.slice(rep.end);
    }
    
    // Process imports and useI18n injection
    const sf2 = ts.createSourceFile(filePath, content, ts.ScriptTarget.Latest, true);
    let hasImport = false;
    const funcReplacements = [];
    
    function visitFuncs(node) {
        if (ts.isImportDeclaration(node)) {
            if (node.moduleSpecifier.text.includes("dev-context")) {
                if (node.importClause && node.importClause.getText(sf2).includes("useI18n")) {
                    hasImport = true;
                }
            }
        }
        
        let isComponent = false;
        if (ts.isFunctionDeclaration(node) && node.name && /^[A-Z]/.test(node.name.text)) {
            isComponent = true;
        } else if (ts.isArrowFunction(node) || ts.isFunctionExpression(node)) {
            if (node.parent && ts.isVariableDeclaration(node.parent) && /^[A-Z]/.test(node.parent.name.getText(sf2))) {
                isComponent = true;
            }
        }
        
        if (isComponent) {
            let hasJSX = false;
            let hasUseI18n = false;
            
            function checkJSX(n) {
                if (ts.isJsxElement(n) || ts.isJsxSelfClosingElement(n) || ts.isJsxFragment(n)) hasJSX = true;
                if (ts.isVariableDeclaration(n) && n.name.getText(sf2) === "t" && n.initializer && n.initializer.getText(sf2).includes("useI18n")) {
                    hasUseI18n = true;
                }
                ts.forEachChild(n, checkJSX);
            }
            checkJSX(node);
            
            if (hasJSX && !hasUseI18n) {
                if (node.body && ts.isBlock(node.body)) {
                    const pos = node.body.statements.length > 0 ? node.body.statements[0].getStart(sf2) : node.body.getEnd() - 1;
                    funcReplacements.push({
                        start: pos,
                        text: `\n  const t = useI18n();\n  `
                    });
                }
            }
        }
        ts.forEachChild(node, visitFuncs);
    }
    
    visitFuncs(sf2);
    
    funcReplacements.sort((a, b) => b.start - a.start);
    for (const rep of funcReplacements) {
        content = content.slice(0, rep.start) + rep.text + content.slice(rep.start);
    }
    
    if (!hasImport) {
        content = `import { useI18n } from "../components/dev-context";\n` + content;
    }
    
    fs.writeFileSync(filePath, content, "utf8");
    console.log("Updated", file);
  }
}
