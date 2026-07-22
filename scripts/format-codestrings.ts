import { Project, SyntaxKind, JsxAttribute, StringLiteral, NoSubstitutionTemplateLiteral } from "ts-morph";
import * as prettier from "prettier";
import path from "path";
import fs from "fs";

async function main() {
  const project = new Project({
    tsConfigFilePath: "tsconfig.json",
  });

  const sourceFiles = project.getSourceFiles("src/dev/showcase/**/*.tsx");
  console.log(`Found ${sourceFiles.length} showcase files to process.`);

  let modifiedCount = 0;

  for (const sourceFile of sourceFiles) {
    let fileModified = false;

    // Find all JSX attributes named 'codeString'
    const jsxAttributes = sourceFile.getDescendantsOfKind(SyntaxKind.JsxAttribute);
    
    for (const attr of jsxAttributes) {
      if (attr.asKind(SyntaxKind.JsxAttribute)?.getNameNode().getText() !== "codeString") continue;

      const initializer = attr.asKind(SyntaxKind.JsxAttribute)?.getInitializer();
      if (!initializer) continue;

      let rawText = "";

      // It can be a StringLiteral `<Example codeString="<div/>" />`
      if (initializer.isKind(SyntaxKind.StringLiteral)) {
        rawText = (initializer as StringLiteral).getLiteralText();
      } 
      // Or a JSX Expression with a template literal `<Example codeString={`<div/>`} />`
      else if (initializer.isKind(SyntaxKind.JsxExpression)) {
        const expression = initializer.getExpression();
        if (expression && expression.isKind(SyntaxKind.NoSubstitutionTemplateLiteral)) {
          rawText = (expression as NoSubstitutionTemplateLiteral).getLiteralText();
        } else if (expression && expression.isKind(SyntaxKind.StringLiteral)) {
          rawText = (expression as StringLiteral).getLiteralText();
        }
      }

      if (!rawText) continue;

      try {
        // Wrap in fragment to allow adjacent JSX elements to be parsed by prettier
        const wrappedText = `<>\n${rawText}\n</>`;

        // Format the wrappedText as JSX/TSX
        let formatted = await prettier.format(wrappedText, {
          parser: "babel-ts",
          printWidth: 60,
          tabWidth: 2,
          semi: false,
          singleQuote: false,
          trailingComma: "all"
        });

        // Remove the wrapping fragment (including any leading semicolons injected by prettier) and trim
        formatted = formatted.replace(/^;?\s*<>\n?/, "").replace(/\n?<\/>;?\s*$/, "").trim();

        if (formatted !== rawText.trim()) {
          // Replace the initializer with the new formatted template literal
          // Note: we use JSON.stringify or manual escaping if needed, but since it's a template literal
          // we need to escape backticks and ${
          const escaped = formatted.replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
          attr.setInitializer(`{\`${escaped}\`}`);
          fileModified = true;
        }
      } catch (err) {
        console.error(`Failed to format codeString in ${sourceFile.getFilePath()} at line ${attr.getStartLineNumber()}`);
        console.error(err);
      }
    }

    if (fileModified) {
      sourceFile.saveSync();
      modifiedCount++;
      console.log(`Modified ${sourceFile.getBaseName()}`);
    }
  }

  console.log(`Successfully formatted codeStrings in ${modifiedCount} files.`);
}

main().catch(console.error);
