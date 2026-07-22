const fs = require('fs');
const path = require('path');

async function main() {
  const showcaseDir = path.join(__dirname, '../src/dev/showcase');
  const files = fs.readdirSync(showcaseDir).filter(f => f.endsWith('.tsx'));

  let modifiedCount = 0;

  for (const file of files) {
    const filePath = path.join(showcaseDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let fileModified = false;

    // Regex to find codeString={`...`}
    // Using a loop to find all matches since there could be multiple per file
    const regex = /codeString=\{\`([\s\S]*?)\`\}/g;
    
    // We need to do replacement asynchronously because prettier.format is async
    const replacements = [];
    let match;
    while ((match = regex.exec(content)) !== null) {
      const fullMatch = match[0];
      const rawText = match[1];

      try {
        const wrappedText = `<>\n${rawText}\n</>`;
        // Use execSync to run npx prettier
        const tmpFile = path.join(__dirname, 'tmp.tsx');
        fs.writeFileSync(tmpFile, wrappedText, 'utf8');
        let formatted = require('child_process').execSync('npx prettier --parser babel-ts --print-width 60 --tab-width 2 --no-semi --trailing-comma all ' + tmpFile, { encoding: 'utf8' });
        fs.unlinkSync(tmpFile);

        // Strip leading semicolons and <> tags
        formatted = formatted.replace(/^;?\s*<>\n?/, "").replace(/\n?<\/>;?\s*$/, "").trim();

        if (formatted !== rawText.trim()) {
          const escaped = formatted.replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
          replacements.push({
            start: match.index,
            end: match.index + fullMatch.length,
            newText: `codeString={\`${escaped}\`}`
          });
        }
      } catch (err) {
        console.error(`Failed formatting in ${file}: ${err.message}`);
      }
    }

    // Apply replacements from back to front to not mess up indices
    for (let i = replacements.length - 1; i >= 0; i--) {
      const { start, end, newText } = replacements[i];
      content = content.slice(0, start) + newText + content.slice(end);
      fileModified = true;
    }

    if (fileModified) {
      fs.writeFileSync(filePath, content, 'utf8');
      modifiedCount++;
      console.log(`Modified ${file}`);
    }
  }

  console.log(`Successfully formatted codeStrings in ${modifiedCount} files.`);
}

main().catch(console.error);
