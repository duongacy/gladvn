import { Project, SyntaxKind, PropertyAssignment } from "ts-morph";
import fs from "fs";
import path from "path";

const project = new Project({
  tsConfigFilePath: "tsconfig.json",
});

const sourceFiles = project.getSourceFiles("src/components/micro/*.tsx");

let changed = 0;

for (const sf of sourceFiles) {
  let fileChanged = false;
  
  // 1. Update Badge base class specifically
  if (sf.getBaseName() === "badge.tsx") {
    const varDecls = sf.getVariableDeclarations();
    for (const v of varDecls) {
      if (v.getName() === "badgeVariants") {
        const init = v.getInitializer();
        if (init && init.getKind() === SyntaxKind.CallExpression) {
          const args = init.getArguments();
          if (args.length > 0 && args[0].getKind() === SyntaxKind.StringLiteral) {
            let str = args[0].getText();
            str = str.replace(/gap-\d+(\.\d+)?/g, "gap-1");
            args[0].replaceWithText(str);
            fileChanged = true;
          }
        }
      }
    }
  }

  // 2. Update size variants for all components
  const calls = sf.getDescendantsOfKind(SyntaxKind.CallExpression);
  for (const call of calls) {
    if (call.getExpression().getText() === "cva" || call.getExpression().getText() === "tv") {
      const args = call.getArguments();
      if (args.length > 1 && args[1].getKind() === SyntaxKind.ObjectLiteralExpression) {
        const variantsProp = args[1].getProperty("variants");
        if (variantsProp && variantsProp.getKind() === SyntaxKind.PropertyAssignment) {
          const variantsInit = variantsProp.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
          if (variantsInit) {
            const sizeProp = variantsInit.getProperty("size");
            if (sizeProp && sizeProp.getKind() === SyntaxKind.PropertyAssignment) {
              const sizeInit = sizeProp.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
              if (sizeInit) {
                // We have size: { sm: "...", md: "...", lg: "..." }
                const sizes = ["sm", "md", "lg"];
                const targetGaps = { sm: "gap-1", md: "gap-1.5", lg: "gap-2" };

                for (const s of sizes) {
                  const prop = sizeInit.getProperty(s);
                  if (prop && prop.getKind() === SyntaxKind.PropertyAssignment) {
                    const init = prop.getInitializer();
                    if (init && init.getKind() === SyntaxKind.StringLiteral) {
                      let text = init.getText();
                      // Only replace if gap- exists
                      if (/gap-\d+(\.\d+)?/.test(text)) {
                        text = text.replace(/gap-\d+(\.\d+)?/g, targetGaps[s]);
                        init.replaceWithText(text);
                        fileChanged = true;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  if (fileChanged) {
    sf.saveSync();
    changed++;
    console.log("Updated", sf.getFilePath());
  }
}

console.log(`Updated ${changed} files.`);
