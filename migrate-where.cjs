const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      const neededGroups = new Set();

      // Pattern 1: [:where([data-slot=X][data-PROP=Y]_&)]:class
      // Replace with: group-data-[PROP=Y]/X:class
      content = content.replace(/\[:where\(\[data-slot=([^\]]+)\]\[(data-[a-zA-Z0-9-]+)=([^\]]+)\]_&\)\]:/g, (match, slot, dataAttr, value) => {
        neededGroups.add(slot);
        const attrName = dataAttr.replace('data-', '');
        return `group-data-[${attrName}=${value}]/${slot}:`;
      });
      
      // Pattern 2: [:where([data-slot=X][data-PROP=Y]_&>svg)]:class
      content = content.replace(/\[:where\(\[data-slot=([^\]]+)\]\[(data-[a-zA-Z0-9-]+)=([^\]]+)\]_&>svg\)\]:/g, (match, slot, dataAttr, value) => {
        neededGroups.add(slot);
        const attrName = dataAttr.replace('data-', '');
        return `group-data-[${attrName}=${value}]/${slot}:[:where(&>svg)]:`;
      });
      
      // Pattern 3: [:where([data-slot=X][data-PROP=Y]_&_svg)]:class
      content = content.replace(/\[:where\(\[data-slot=([^\]]+)\]\[(data-[a-zA-Z0-9-]+)=([^\]]+)\]_&_svg\)\]:/g, (match, slot, dataAttr, value) => {
        neededGroups.add(slot);
        const attrName = dataAttr.replace('data-', '');
        return `group-data-[${attrName}=${value}]/${slot}:[:where(&_svg)]:`;
      });

      if (neededGroups.size > 0) {
        console.log(`File: ${fullPath} needs groups:`, Array.from(neededGroups));
      }
      
      fs.writeFileSync(fullPath, content);
    }
  }
}

processDir(path.join(__dirname, 'src', 'components'));
