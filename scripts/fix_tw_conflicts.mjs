import fs from 'fs';
import path from 'path';
import { twMerge } from 'tailwind-merge';

function walk(dir, callback) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filepath = path.join(dir, file);
    const stat = fs.statSync(filepath);
    if (stat.isDirectory()) {
      walk(filepath, callback);
    } else if (filepath.endsWith('.tsx') || filepath.endsWith('.ts')) {
      callback(filepath);
    }
  }
}

let fixedCount = 0;

console.log('Fixing Tailwind class conflicts using tailwind-merge...\n');

walk('./src', (filepath) => {
  let content = fs.readFileSync(filepath, 'utf8');
  let originalContent = content;
  let hasChanges = false;
  
  const classStrings = new Set();
  
  const stringRegex = /(?:className=|cn\(|\bclass:\s*)["'`]((?:[^"'`\\]|\\.)*)["'`]/g;
  let match;
  while ((match = stringRegex.exec(content)) !== null) {
    classStrings.add(match[1]);
  }
  
  const cnRegex = /cn\(([^)]+)\)/g;
  let cnMatch;
  while ((cnMatch = cnRegex.exec(content)) !== null) {
      const innerStrings = cnMatch[1].match(/["'`]((?:[^"'`\\]|\\.)*)["'`]/g);
      if (innerStrings) {
          innerStrings.forEach(str => {
              const cleanStr = str.replace(/^["'`]|["'`]$/g, '');
              classStrings.add(cleanStr);
          });
      }
  }
  
  for (const classStr of classStrings) {
      if (classStr.includes('${')) continue;
      const classes = classStr.split(/\s+/).filter(Boolean);
      if (classes.length < 2) continue;
      
      const merged = twMerge(classStr);
      const mergedClasses = merged.split(/\s+/).filter(Boolean);
      
      if (mergedClasses.length < classes.length) {
          content = content.split(`"${classStr}"`).join(`"${merged}"`);
          content = content.split(`'${classStr}'`).join(`'${merged}'`);
          content = content.split(`\`${classStr}\``).join(`\`${merged}\``);
          hasChanges = true;
          fixedCount++;
          console.log(`[FIXED] ${filepath}`);
          console.log(`  - Old: ${classStr}`);
          console.log(`  - New: ${merged}\n`);
      }
  }
  
  if (hasChanges && content !== originalContent) {
      fs.writeFileSync(filepath, content, 'utf8');
  }
});

console.log(`🎉 Successfully fixed ${fixedCount} tailwind class conflicts!`);
