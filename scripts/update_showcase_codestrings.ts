import { Project, SyntaxKind, JsxElement } from "ts-morph";

const project = new Project({
  tsConfigFilePath: "tsconfig.json",
});

const sourceFiles = project.getSourceFiles("src/dev/showcase/**/*.tsx");

let totalUpdates = 0;

function dedent(text: string): string {
  const lines = text.split('\n');
  // Remove first empty line if it exists (usually just newline after the opening tag)
  if (lines.length > 0 && lines[0].trim() === '') {
    lines.shift();
  }
  // Remove last empty line if it exists
  if (lines.length > 0 && lines[lines.length - 1].trim() === '') {
    lines.pop();
  }
  
  // Find minimum indentation
  let minIndent = Infinity;
  for (const line of lines) {
    if (line.trim().length === 0) continue;
    const match = line.match(/^(\s*)/);
    if (match) {
      minIndent = Math.min(minIndent, match[1].length);
    }
  }
  
  if (minIndent === Infinity) return text.trim();
  
  return lines.map(line => line.substring(minIndent)).join('\n');
}

for (const sourceFile of sourceFiles) {
  const exampleSections = sourceFile.getDescendantsOfKind(SyntaxKind.JsxElement)
    .filter(element => {
      const opening = element.getOpeningElement();
      return opening.getTagNameNode().getText() === "ExampleSection";
    });

  let fileUpdated = false;

  for (const section of exampleSections) {
    const opening = section.getOpeningElement();
    
    // Check if codeString already exists
    const hasCodeString = opening.getAttributes().some(attr => {
      return attr.getKind() === SyntaxKind.JsxAttribute && 
             attr.asKind(SyntaxKind.JsxAttribute)?.getNameNode().getText() === "codeString";
    });

    if (!hasCodeString) {
      // Get raw text of children
      const childrenNodes = section.getJsxChildren();
      if (childrenNodes.length === 0) continue;
      
      const start = childrenNodes[0].getStart();
      const end = childrenNodes[childrenNodes.length - 1].getEnd();
      const rawText = sourceFile.getFullText().substring(start, end);
      
      const cleanCode = dedent(rawText);
      
      // Escape backticks and ${} to avoid template literal interpolation issues
      const escapedCode = cleanCode
        .replace(/`/g, '\\`')
        .replace(/\$\{/g, '\\${');

      opening.addAttribute({
        name: "codeString",
        initializer: `{\`${escapedCode}\`}`
      });
      
      fileUpdated = true;
      totalUpdates++;
    }
  }

  if (fileUpdated) {
    console.log(`Updated ${sourceFile.getBaseName()}`);
  }
}

project.saveSync();
console.log(`Finished! Updated ${totalUpdates} ExampleSections.`);
