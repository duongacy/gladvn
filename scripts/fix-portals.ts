import { Project, SyntaxKind, JsxElement } from "ts-morph";

const project = new Project({ tsConfigFilePath: "./tsconfig.json" });
const sourceFiles = [
  ...project.addSourceFilesAtPaths("src/dev/showcase/**/*.tsx"),
  ...project.addSourceFilesAtPaths("src/components/macro/**/*.tsx")
];

const map: Record<string, string> = {
  "DropdownMenuContent": "DropdownMenuPortal",
  "SelectContent": "SelectPortal",
  "PopoverContent": "PopoverPortal",
  "HoverCardContent": "HoverCardPortal",
  "TooltipContent": "TooltipPortal",
  "DialogContent": "DialogPortal",
  "AlertDialogContent": "AlertDialogPortal",
  "ContextMenuContent": "ContextMenuPortal",
  "MenubarContent": "MenubarPortal",
  "ComboboxContent": "ComboboxPortal"
};

for (const sf of sourceFiles) {
  let changed = false;

  // We loop until no more elements need wrapping to avoid AST node invalidation errors
  let needsMoreWork = true;
  while (needsMoreWork) {
    needsMoreWork = false;
    const elements = sf.getDescendantsOfKind(SyntaxKind.JsxElement);
    
    for (const element of elements) {
      // Check if it's already been deleted/replaced
      if (element.wasForgotten()) continue;
      
      const openingEl = element.getOpeningElement();
      const tagName = openingEl.getTagNameNode().getText();
      
      if (map[tagName]) {
        const portalName = map[tagName];
        const parent = element.getParent();
        
        let needsWrap = true;
        if (parent && parent.getKind() === SyntaxKind.JsxElement) {
          const parentOpening = (parent as JsxElement).getOpeningElement().getTagNameNode().getText();
          if (parentOpening === portalName || parentOpening === "ThemeWrapper") {
            needsWrap = false;
          }
        }
        
        if (needsWrap) {
          element.replaceWithText(`<${portalName}>\n${element.getText()}\n</${portalName}>`);
          changed = true;
          needsMoreWork = true;
          break; // Break the for loop and restart traversal on fresh AST
        }
      }
    }
  }

  // Ensure imports are correct
  if (changed) {
    const importDecls = sf.getImportDeclarations();
    // Gather all tags we need imports for in this file
    const tagsInFile = new Set<string>();
    sf.getDescendantsOfKind(SyntaxKind.JsxOpeningElement).forEach(el => {
      const name = el.getTagNameNode().getText();
      if (Object.values(map).includes(name)) tagsInFile.add(name);
    });

    for (const portalName of tagsInFile) {
      // Find the import declaration for this micro component
      const primitiveName = portalName.replace('Portal', '').toLowerCase()
        .replace('dropdownmenu', 'dropdown-menu')
        .replace('alertdialog', 'alert-dialog')
        .replace('hovercard', 'hover-card')
        .replace('contextmenu', 'context-menu');
      
      const matchingImport = importDecls.find(imp => imp.getModuleSpecifierValue().includes(`components/micro/${primitiveName}`));
      if (matchingImport) {
        const namedImports = matchingImport.getNamedImports();
        if (!namedImports.some(n => n.getName() === portalName)) {
          matchingImport.addNamedImport(portalName);
        }
      }
    }

    sf.saveSync();
    console.log("Fixed missing portals in", sf.getBaseName());
  }
}
