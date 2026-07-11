import * as fs from 'fs';
import * as path from 'path';

const dir = 'src/dev/showcase';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

let totalChanges = 0;

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  const selfClosingRegex = /<div className="(w-64|w-full)">\s*<([A-Z]\w*)([\s\S]*?)\/>\s*<\/div>/g;
  content = content.replace(selfClosingRegex, (match, width, comp, rest) => {
    if (rest.includes('className=')) {
      // If it already has className, replace className="..." with className="... width"
      return match.replace(/className="([^"]*)"/, `className="$1 ${width}"`).replace(/<div[^>]*>/, '').replace(/<\/div>/, '').trim();
    }
    totalChanges++;
    return `<${comp} className="${width}"${rest}/>`;
  });

  const withChildrenRegex = /<div className="(w-64|w-full)">\s*<([A-Z]\w*)([^>]*?)>([\s\S]*?)<\/\2>\s*<\/div>/g;
  content = content.replace(withChildrenRegex, (match, width, comp, rest, inner) => {
    if (rest.includes('className=')) {
      return match;
    }
    totalChanges++;
    return `<${comp} className="${width}"${rest}>${inner}</${comp}>`;
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
}

console.log(`Total wrappers removed: ${totalChanges}`);
