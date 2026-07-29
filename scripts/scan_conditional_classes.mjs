import { Project, SyntaxKind } from "ts-morph";

const project = new Project();
project.addSourceFilesAtPaths("src/**/*.tsx");
project.addSourceFilesAtPaths("src/**/*.ts");

let violations = 0;
// Keep track of logged nodes to avoid duplicates (e.g. if && is inside ternary)
const loggedLines = new Set();

console.log("Scanning source code for ternaries (?) and logical AND (&&) inside className or cn()...\n");

for (const sourceFile of project.getSourceFiles()) {
  const filePath = sourceFile.getFilePath();
  
  const conditionals = sourceFile.getDescendantsOfKind(SyntaxKind.ConditionalExpression);
  const binaries = sourceFile.getDescendantsOfKind(SyntaxKind.BinaryExpression).filter(b => b.getOperatorToken().getText() === '&&');
  
  const suspects = [...conditionals, ...binaries];
  
  for (const node of suspects) {
      let isViolation = false;
      let isInsideObjectLiteral = false;
      let contextNode = null;
      let parent = node.getParent();
      
      while (parent) {
          if (parent.isKind(SyntaxKind.ObjectLiteralExpression)) {
              isInsideObjectLiteral = true;
          }
          
          const callExpr = parent.asKind(SyntaxKind.CallExpression);
          if (callExpr && callExpr.getExpression().getText() === 'cn') {
              isViolation = true;
              break;
          }
          
          const jsxAttr = parent.asKind(SyntaxKind.JsxAttribute);
          if (jsxAttr && jsxAttr.getNameNode().getText() === 'className') {
              isViolation = true;
              break;
          }
          
          parent = parent.getParent();
      }
      
      const lineKey = `${filePath}:${node.getStartLineNumber()}`;
      if (isViolation && !isInsideObjectLiteral && !loggedLines.has(lineKey)) {
          loggedLines.add(lineKey);
          
          // Print relative path for cleaner output
          const relativePath = filePath.split('/gladvn/')[1] || filePath;
          
          console.log(`[VIOLATION] ${relativePath}:${node.getStartLineNumber()}`);
          console.log(`CODE: ${node.getText()}`);
          console.log(`------------------------------------------------------------`);
          violations++;
      }
  }
}

if (violations === 0) {
    console.log("✅ All clean! No ternaries or && used for class logic.");
} else {
    console.log(`\n❌ Found ${violations} violations of the "No Conditional String Interpolation" rule.`);
    console.log(`Please refactor these to use the object syntax: cn({ "class": condition })`);
}
