import { Project, SyntaxKind } from "ts-morph";

const project = new Project({
  tsConfigFilePath: "tsconfig.json",
});

const sourceFiles = project.getSourceFiles("src/dev/showcase/**/*.tsx");
let missing = 0;
let total = 0;

for (const sourceFile of sourceFiles) {
  const exampleSections = sourceFile.getDescendantsOfKind(SyntaxKind.JsxElement)
    .filter(element => element.getOpeningElement().getTagNameNode().getText() === "ExampleSection");
    
  for (const section of exampleSections) {
    total++;
    const hasCodeString = section.getOpeningElement().getAttributes().some(attr => {
      return attr.getKind() === SyntaxKind.JsxAttribute && 
             attr.asKind(SyntaxKind.JsxAttribute)?.getNameNode().getText() === "codeString";
    });
    if (!hasCodeString) missing++;
  }
}
console.log(`Total ExampleSections: ${total}, Missing codeString: ${missing}`);
