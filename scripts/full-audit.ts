import * as fs from "fs";
import * as path from "path";

const SRC_DIR = path.join(process.cwd(), "src/components");

function walkDir(dir: string, callback: (filePath: string) => void) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath, callback);
    } else if (fullPath.endsWith(".tsx") || fullPath.endsWith(".ts")) {
      callback(fullPath);
    }
  }
}

const results: Record<string, string[]> = {};

function addIssue(file: string, issue: string) {
  const relPath = path.relative(process.cwd(), file);
  if (!results[relPath]) results[relPath] = [];
  results[relPath].push(issue);
}

walkDir(SRC_DIR, (filePath) => {
  const content = fs.readFileSync(filePath, "utf-8");

  // 1. Magic CSS Violations
  if (/\[&_[a-zA-Z0-9]+\]/.test(content)) {
    addIssue(
      filePath,
      "Magic CSS: Uses raw HTML tag descendant selectors (e.g. [&_div]) instead of data-slots.",
    );
  }
  if (/has-\[/.test(content)) {
    addIssue(
      filePath,
      "Magic CSS: Uses :has() combinator which may be fragile for encapsulation.",
    );
  }
  if (/\*:/g.test(content)) {
    addIssue(
      filePath,
      "Magic CSS: Uses universal selector (*:) which breaks encapsulation.",
    );
  }

  // 2. React Antipatterns
  if (
    /\.map\([^,]+,\s*(?:index|i)\s*\)\s*=>\s*[\s\S]*?key=\{?(?:index|i)\}?/m.test(
      content,
    )
  ) {
    addIssue(filePath, "React: Uses array index as key in map().");
  }

  // 3. String manipulation Edge Cases
  if (/\.substring\(/.test(content) || /\.charAt\(/.test(content)) {
    addIssue(
      filePath,
      "Edge Case: Uses charAt or substring which breaks on Emojis/Surrogate pairs.",
    );
  }

  // 4. Props / Architecture
  if (filePath.includes("micro") && content.includes("useState(")) {
    addIssue(
      filePath,
      "Architecture: Micro component contains local state (useState). Micro components should generally be stateless wrappers.",
    );
  }

  if (
    filePath.includes("macro") &&
    content.includes("forwardRef") &&
    !content.includes("asChild") &&
    !content.includes("render=")
  ) {
    // Just a heuristic, not always a bug.
  }
});

for (const [file, issues] of Object.entries(results)) {
  console.log(`\nFile: ${file}`);
  for (const issue of issues) {
    console.log(`  - ${issue}`);
  }
}
