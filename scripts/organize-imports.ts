import { Project } from "ts-morph";

const project = new Project({
  tsConfigFilePath: "tsconfig.json",
});

const files = project.getSourceFiles("src/**/*.{ts,tsx}");
console.log(`Found ${files.length} files. Organizing imports...`);

let updatedCount = 0;

for (const file of files) {
  const originalText = file.getFullText();
  file.organizeImports();
  if (file.getFullText() !== originalText) {
    updatedCount++;
    await file.save();
  }
}

console.log(`Done! Organized imports in ${updatedCount} files.`);
