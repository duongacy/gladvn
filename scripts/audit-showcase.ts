import {
  Project,
  SyntaxKind,
  JsxOpeningElement,
  JsxSelfClosingElement,
} from "ts-morph";
import * as fs from "fs";
import * as path from "path";

const project = new Project({
  tsConfigFilePath: "tsconfig.json",
});

const uiSourceFiles = project.getSourceFiles("src/components/micro/*.tsx");
const monolithicSourceFiles = project.getSourceFiles(
  "src/components/monolithic/*.tsx",
);
const showcaseSourceFiles = project.getSourceFiles("src/dev/showcase/*.tsx");

type ComponentCoverage = {
  name: string;
  uiFile: string;
  exportedComponents: string[];
  variants: Record<string, string[]>;
  showcaseFile: string | null;
  missingComponents: string[];
  missingVariants: Record<string, string[]>;
};

const results: ComponentCoverage[] = [];

for (const uiFile of uiSourceFiles) {
  const baseName = uiFile.getBaseNameWithoutExtension();
  const showcaseFile = showcaseSourceFiles.find(
    (f) => f.getBaseNameWithoutExtension() === baseName,
  );

  // Find all exported components (Capitalized names)
  const exportedComponents: string[] = [];

  // Named exports
  for (const [name, declarations] of uiFile.getExportedDeclarations()) {
    if (
      /^[A-Z]/.test(name) &&
      !name.includes("Context") &&
      !name.includes("Provider") &&
      !name.includes("Overlay") &&
      !name.includes("Portal")
    ) {
      const decl = declarations[0];
      if (
        decl &&
        decl.getKind() !== SyntaxKind.TypeAliasDeclaration &&
        decl.getKind() !== SyntaxKind.InterfaceDeclaration
      ) {
        exportedComponents.push(name);
      }
    }
  }

  // Find variants from CVA
  const variants: Record<string, string[]> = {};
  const cvaCalls = uiFile
    .getDescendantsOfKind(SyntaxKind.CallExpression)
    .filter((c) => c.getExpression().getText() === "cva");

  for (const cvaCall of cvaCalls) {
    const args = cvaCall.getArguments();
    if (args.length >= 2) {
      const configObj = args[1].asKind(SyntaxKind.ObjectLiteralExpression);
      if (configObj) {
        const variantsProp = configObj.getProperty("variants");
        if (
          variantsProp &&
          variantsProp.getKind() === SyntaxKind.PropertyAssignment
        ) {
          const variantsObj = variantsProp.getInitializerIfKind(
            SyntaxKind.ObjectLiteralExpression,
          );
          if (variantsObj) {
            for (const variantProp of variantsObj.getProperties()) {
              if (variantProp.getKind() === SyntaxKind.PropertyAssignment) {
                const variantName = variantProp.getName();
                const variantValuesObj = variantProp.getInitializerIfKind(
                  SyntaxKind.ObjectLiteralExpression,
                );
                if (variantValuesObj) {
                  variants[variantName] = variantValuesObj
                    .getProperties()
                    .map((p) => p.getName().replace(/['"]/g, ""));
                }
              }
            }
          }
        }
      }
    }
  }

  // Also check monolithic wrapper for extra variants/components if it exists
  const monolithicFile = monolithicSourceFiles.find(
    (f) => f.getBaseNameWithoutExtension() === baseName,
  );
  if (monolithicFile) {
    for (const [
      name,
      declarations,
    ] of monolithicFile.getExportedDeclarations()) {
      if (
        /^[A-Z]/.test(name) &&
        !name.includes("Context") &&
        !name.includes("Provider") &&
        !exportedComponents.includes(name)
      ) {
        const decl = declarations[0];
        if (
          decl &&
          decl.getKind() !== SyntaxKind.TypeAliasDeclaration &&
          decl.getKind() !== SyntaxKind.InterfaceDeclaration
        ) {
          exportedComponents.push(name);
        }
      }
    }
  }

  const missingComponents: string[] = [];
  const missingVariants: Record<string, string[]> = {};

  if (showcaseFile) {
    const jsxElements = [
      ...showcaseFile.getDescendantsOfKind(SyntaxKind.JsxOpeningElement),
      ...showcaseFile.getDescendantsOfKind(SyntaxKind.JsxSelfClosingElement),
    ];

    const usedTags = new Set(
      jsxElements.map((el) => el.getTagNameNode().getText()),
    );

    // Check components
    for (const comp of exportedComponents) {
      if (!usedTags.has(comp)) {
        const isNamespacedUsed = Array.from(usedTags).some(
          (tag) => tag.includes(`.${comp}`) || tag.endsWith(comp),
        );
        if (!isNamespacedUsed) {
          missingComponents.push(comp);
        }
      }
    }

    // Check variants
    const usedAttributes: Record<string, Set<string>> = {};
    for (const el of jsxElements) {
      for (const attr of el.getAttributes()) {
        if (attr.getKind() === SyntaxKind.JsxAttribute) {
          const name = attr.getNameNode().getText();
          const init = attr.getInitializer();
          let value = "";
          if (init) {
            if (init.getKind() === SyntaxKind.StringLiteral) {
              value = init.getText().replace(/['"]/g, "");
            } else if (init.getKind() === SyntaxKind.JsxExpression) {
              value = init.getExpression()?.getText() || "";
            }
          } else {
            value = "true";
          }
          if (!usedAttributes[name]) usedAttributes[name] = new Set();
          usedAttributes[name].add(value);
        }
      }
    }

    for (const [vName, vValues] of Object.entries(variants)) {
      missingVariants[vName] = [];
      const usedVals = usedAttributes[vName] || new Set();
      const usedValsStr = Array.from(usedVals).join(" ");

      for (const val of vValues) {
        if (val === "default") continue;
        if (
          !usedValsStr.includes(val) &&
          !usedValsStr.includes(`"${val}"`) &&
          !usedValsStr.includes(`'${val}'`)
        ) {
          if (vName === "size" && usedValsStr.includes("globalSize")) {
            continue;
          }
          missingVariants[vName].push(val);
        }
      }
      if (missingVariants[vName].length === 0) {
        delete missingVariants[vName];
      }
    }
  }

  if (exportedComponents.length > 0 || Object.keys(variants).length > 0) {
    results.push({
      name: baseName,
      uiFile: uiFile.getFilePath(),
      exportedComponents,
      variants,
      showcaseFile: showcaseFile?.getFilePath() || null,
      missingComponents,
      missingVariants,
    });
  }
}

let md = `# Báo Cáo Mức Độ Phủ Sóng Của Showcase (AST Auditing)
*Tạo lúc: ${new Date().toLocaleString()}*

Mục tiêu: Đảm bảo toàn bộ Component, Sub-component, Variant, Color, Size được export từ \`src/components/micro/*\` đều có ít nhất một ví dụ trong \`src/dev/showcase/*\`.

`;

let perfectCount = 0;
let missingShowcaseCount = 0;

for (const res of results) {
  if (!res.showcaseFile) {
    missingShowcaseCount++;
    md += `## ❌ ${res.name} (Thiếu hoàn toàn Showcase)\n`;
    continue;
  }

  const hasMissingComps = res.missingComponents.length > 0;
  const hasMissingVars = Object.keys(res.missingVariants).length > 0;

  if (!hasMissingComps && !hasMissingVars) {
    perfectCount++;
    continue;
  }

  md += `## ⚠️ ${res.name}\n`;
  if (hasMissingComps) {
    md += `- **Thiếu Sub-components:** ${res.missingComponents.map((c) => "`" + c + "`").join(", ")}\n`;
  }
  if (hasMissingVars) {
    md += `- **Thiếu Variants:**\n`;
    for (const [vName, vVals] of Object.entries(res.missingVariants)) {
      md += `  - \`${vName}\`: ${vVals.map((v) => "`" + v + "`").join(", ")}\n`;
    }
  }
  md += "\n";
}

md += `## Tóm Tắt\n`;
md += `- Tổng số Components: ${results.length}\n`;
md += `- Hoàn hảo (100% Coverage): ${perfectCount}\n`;
md += `- Thiếu Showcase File: ${missingShowcaseCount}\n`;
md += `- Cần bổ sung ví dụ: ${results.length - perfectCount - missingShowcaseCount}\n`;

fs.writeFileSync(
  "/Users/y/.gemini/antigravity-ide/brain/b74152fa-bc73-4d65-9843-c65a49e0b5c5/showcase_coverage_report.md",
  md,
);
console.log(
  "Report generated at /Users/y/.gemini/antigravity-ide/brain/b74152fa-bc73-4d65-9843-c65a49e0b5c5/showcase_coverage_report.md",
);
