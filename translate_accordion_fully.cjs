const fs = require("fs");
const path = require("path");
const ts = require("typescript");

const filePath = "/Users/nhungneee/Desktop/github/gladvn/src/dev/showcase/accordion.tsx";
let content = fs.readFileSync(filePath, "utf8");
const sourceFile = ts.createSourceFile("accordion.tsx", content, ts.ScriptTarget.Latest, true);

let dict = {};
try {
  dict = JSON.parse(fs.readFileSync("/Users/nhungneee/Desktop/github/gladvn/translated_strings.json", "utf8"));
} catch (e) {}
try {
  const autoTrans = JSON.parse(fs.readFileSync("/Users/nhungneee/Desktop/github/gladvn/auto_translated.json", "utf8"));
  dict = { ...dict, ...autoTrans };
} catch(e) {}

const isVietnamese = (str) => /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/i.test(str);

function getTranslation(str) {
  if (!isVietnamese(str)) return null;
  return dict[str] || str;
}

const replacements = [];

function visit(node) {
  // Skip the `code` prop on ShowcaseExample
  if (ts.isJsxAttribute(node) && node.name.text === "code") {
    return;
  }
  
  // Skip imports
  if (ts.isImportDeclaration(node)) {
      return;
  }

  // Handle JSX Text
  if (ts.isJsxText(node)) {
    const text = node.text.trim();
    if (text && isVietnamese(text)) {
      if (node.parent && ts.isJsxElement(node.parent) && node.parent.openingElement.tagName.getText() === "t") return;
      
      const eng = getTranslation(text);
      if (eng) {
        replacements.push({
          start: node.getStart(sourceFile),
          end: node.getEnd(),
          text: `{t(${JSON.stringify(text)}, ${JSON.stringify(eng)})}`
        });
      }
    }
  }

  // Handle String Literals
  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
    const text = node.text;
    if (text && isVietnamese(text)) {
      if (node.parent && ts.isCallExpression(node.parent) && node.parent.expression.getText() === "t") {
          return;
      }
      
      const eng = getTranslation(text);
      if (eng) {
        if (node.parent && ts.isJsxAttribute(node.parent)) {
          replacements.push({
            start: node.getStart(sourceFile),
            end: node.getEnd(),
            text: `{t(${JSON.stringify(text)}, ${JSON.stringify(eng)})}`
          });
        } 
        else {
          replacements.push({
            start: node.getStart(sourceFile),
            end: node.getEnd(),
            text: `t(${JSON.stringify(text)}, ${JSON.stringify(eng)})`
          });
        }
      }
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
  
  const sf2 = ts.createSourceFile("accordion.tsx", content, ts.ScriptTarget.Latest, true);
  const funcReplacements = [];
  function visitFuncs(node) {
      if (ts.isFunctionDeclaration(node) && node.name && node.name.text === "AccordionMicroShowcase") {
          let hasUseI18n = false;
          function checkJSX(n) {
              if (ts.isVariableDeclaration(n) && n.name.getText(sf2) === "t" && n.initializer && n.initializer.getText(sf2).includes("useI18n")) {
                  hasUseI18n = true;
              }
              ts.forEachChild(n, checkJSX);
          }
          checkJSX(node);
          if (!hasUseI18n && node.body) {
              funcReplacements.push({
                  start: node.body.statements[0].getStart(sf2),
                  text: `\n  const t = useI18n();\n  `
              });
          }
      }
      ts.forEachChild(node, visitFuncs);
  }
  visitFuncs(sf2);
  
  funcReplacements.sort((a, b) => b.start - a.start);
  for (const rep of funcReplacements) {
      content = content.slice(0, rep.start) + rep.text + content.slice(rep.start);
  }

  fs.writeFileSync(filePath, content, "utf8");
  console.log("Updated fully accordion.tsx");
} else {
  console.log("No new Vietnamese strings found.");
}
