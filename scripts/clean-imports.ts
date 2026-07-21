import { Project } from "ts-morph";

const project = new Project({
  tsConfigFilePath: "/Users/y/Desktop/github/gladvn/tsconfig.json",
});

const sourceFiles = project.getSourceFiles(
  "/Users/y/Desktop/github/gladvn/src/dev/showcase/**/*.tsx",
);
console.log(`Found ${sourceFiles.length} showcase files to process.`);

for (const sourceFile of sourceFiles) {
  // Use fixUnusedIdentifiers to let TS compiler fix unused imports
  const text = sourceFile.getFullText();
  // We can just use the organize imports feature
  sourceFile.organizeImports();
  sourceFile.fixUnusedIdentifiers();
}

project.saveSync();
console.log("Cleanup complete!");
