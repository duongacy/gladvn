import { Project } from "ts-morph";
import { resolve, relative } from "path";

const project = new Project({
  tsConfigFilePath: "tsconfig.json",
});

const indexFile = project.getSourceFileOrThrow("src/index.ts");
const presetFile = project.getSourceFileOrThrow("src/preset.ts");

const exportMap = new Map<string, string>();

function populateExportMap(file: any) {
  const exportedDeclarations = file.getExportedDeclarations();
  for (const [name, declarations] of exportedDeclarations) {
    const decl = declarations[0];
    const sourceFile = decl.getSourceFile();
    let relPath = relative(resolve("src"), sourceFile.getFilePath());
    relPath = relPath.replace(/\\/g, "/");
    relPath = relPath.replace(/\.tsx?$/, "");
    exportMap.set(name, "@/" + relPath);
  }
}

populateExportMap(indexFile);
populateExportMap(presetFile);

// Find all dev files
const filesToProcess = project.getSourceFiles([
  "src/dev/**/*.tsx",
  "src/dev/**/*.ts",
]);

let totalChanged = 0;

for (const file of filesToProcess) {
  let changed = false;
  const imports = file.getImportDeclarations();

  for (const imp of imports) {
    const specifier = imp.getModuleSpecifierValue();
    // Catch both @/index and @/preset (and trailing semicolon typos like @/index;)
    if (
      specifier === "@/index" ||
      specifier === "@/preset" ||
      specifier === "@/preset;"
    ) {
      const namedImports = imp.getNamedImports();
      const importsByPath = new Map<
        string,
        { name: string; alias?: string }[]
      >();

      for (const named of namedImports) {
        const name = named.getName();
        const alias = named.getAliasNode()?.getText();

        const sourcePath = exportMap.get(name);
        if (sourcePath) {
          if (!importsByPath.has(sourcePath)) {
            importsByPath.set(sourcePath, []);
          }
          importsByPath.get(sourcePath)!.push({ name, alias });
        } else {
          console.warn(
            `Export not found for ${name} in index.ts/preset.ts for file ${file.getFilePath()}`,
          );
          if (!importsByPath.has(specifier)) {
            importsByPath.set(specifier, []);
          }
          importsByPath.get(specifier)!.push({ name, alias });
        }
      }

      imp.remove();

      for (const [sourcePath, namedList] of importsByPath) {
        if (
          sourcePath === "@/index" ||
          sourcePath === "@/preset" ||
          sourcePath === "@/preset;"
        )
          continue; // skip unmapped to avoid infinite loop or just add them back if we want to preserve. Wait, if I skip them, they are lost!
        // Let's add them back correctly if they weren't found.
        file.addImportDeclaration({
          moduleSpecifier: sourcePath,
          namedImports: namedList.map((n) =>
            n.alias ? { name: n.name, alias: n.alias } : { name: n.name },
          ),
        });
      }
      // If we had unmapped ones, put them back
      if (importsByPath.has(specifier)) {
        file.addImportDeclaration({
          moduleSpecifier: specifier,
          namedImports: importsByPath
            .get(specifier)!
            .map((n) =>
              n.alias ? { name: n.name, alias: n.alias } : { name: n.name },
            ),
        });
      }

      changed = true;
    }
  }

  if (changed) {
    totalChanged++;
    file.saveSync();
  }
}

console.log(
  `Processed ${filesToProcess.length} files. Changed imports in ${totalChanged} files.`,
);
