const fs = require("fs");
const path = require("path");
const ts = require("typescript");

const dir = "src/dev/showcase";
// Only run on the files we just restored!
const targetFiles = [
  "checkbox.tsx", "combobox.tsx", "radio-group.tsx", 
  "select.tsx", "switch.tsx", "table.tsx", "sonner.tsx"
];
const files = fs.readdirSync(dir).filter(f => targetFiles.includes(f));

let dict = {};
try {
  dict = JSON.parse(fs.readFileSync("translated_strings.json", "utf8"));
} catch (e) {}
try {
  const autoTrans = JSON.parse(fs.readFileSync("auto_translated.json", "utf8"));
  dict = { ...dict, ...autoTrans };
} catch(e) {}

const isVietnamese = (str) => /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/i.test(str);

function getTranslation(str) {
  if (!isVietnamese(str)) return null;
  return dict[str] || str;
}

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, "utf8");
  const sourceFile = ts.createSourceFile(file, content, ts.ScriptTarget.Latest, true);

  const replacements = [];
  let needsI18n = false;

  function visit(node) {
    if (ts.isJsxAttribute(node) && node.name.text === "code") return;
    if (ts.isImportDeclaration(node)) return;

    // Ignore top-level variable declarations for forms and mock data
    if (ts.isVariableDeclaration(node)) {
      const name = node.name.getText();
      if (name === "formSchema" || name === "rhfCode" || name === "invoices" || name === "data" || name === "formSchema2") {
        return; // skip injecting t() into these constants
      }
    }

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
          needsI18n = true;
        }
      }
    }

    if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
      const text = node.text;
      if (text && isVietnamese(text)) {
        if (node.parent && ts.isCallExpression(node.parent) && node.parent.expression.getText() === "t") return;
        const eng = getTranslation(text);
        if (eng) {
          if (node.parent && ts.isJsxAttribute(node.parent)) {
            replacements.push({
              start: node.getStart(sourceFile),
              end: node.getEnd(),
              text: `{t(${JSON.stringify(text)}, ${JSON.stringify(eng)})}`
            });
          } else {
            replacements.push({
              start: node.getStart(sourceFile),
              end: node.getEnd(),
              text: `t(${JSON.stringify(text)}, ${JSON.stringify(eng)})`
            });
          }
          needsI18n = true;
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

    const sf2 = ts.createSourceFile(file, content, ts.ScriptTarget.Latest, true);
    let hasImport = false;
    let hasDevContextImport = false;
    const funcReplacements = [];

    function visitFuncs(node) {
      if (ts.isImportDeclaration(node)) {
        if (node.moduleSpecifier.text.includes("dev-context")) {
          if (node.importClause && node.importClause.getText(sf2).includes("useI18n")) hasImport = true;
          if (node.importClause && node.importClause.getText(sf2).includes("useDevContext")) hasDevContextImport = true;
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
        let hasGlobalSize = false;
        
        function checkJSX(n) {
          if (ts.isJsxElement(n) || ts.isJsxSelfClosingElement(n) || ts.isJsxFragment(n)) hasJSX = true;
          if (ts.isVariableDeclaration(n) && n.name.getText(sf2) === "t" && n.initializer && n.initializer.getText(sf2).includes("useI18n")) hasUseI18n = true;
          if (ts.isVariableDeclaration(n) && n.name.getText(sf2) === "globalSize") hasGlobalSize = true;
          ts.forEachChild(n, checkJSX);
        }
        checkJSX(node);

        if (hasJSX && !hasUseI18n && node.body && ts.isBlock(node.body)) {
          funcReplacements.push({
            start: node.body.statements.length > 0 ? node.body.statements[0].getStart(sf2) : node.body.getEnd() - 1,
            text: `\n  const t = useI18n();\n  `
          });
        }
        
        // Also inject globalSize if it's missing in SonnerMicroShowcase
        if (file === "sonner.tsx" && node.name && node.name.text === "SonnerMicroShowcase" && !hasGlobalSize) {
           funcReplacements.push({
             start: node.body.statements.length > 0 ? node.body.statements[0].getStart(sf2) : node.body.getEnd() - 1,
             text: `\n  const { globalSize } = useDevContext();\n  `
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

    if (!hasImport && funcReplacements.length > 0) {
      content = `import { useI18n, useDevContext } from "../components/dev-context";\n` + content;
    } else if (hasImport && file === "sonner.tsx" && !hasDevContextImport) {
      content = content.replace(/useI18n\s*\}/, "useI18n, useDevContext }");
    }

    fs.writeFileSync(filePath, content, "utf8");
    console.log("Updated", file);
  }
}
