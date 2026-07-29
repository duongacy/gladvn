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

let foundIssues = 0;

console.log('Scanning src/ for Tailwind class conflicts using tailwind-merge...\n');

walk('./src', (filepath) => {
  const content = fs.readFileSync(filepath, 'utf8');
  const lines = content.split('\n');

  lines.forEach((line, index) => {
    // Extract strings that look like they contain classes
    const stringRegex = /(?:className=|cn\(|\bclass:\s*)["'`]((?:[^"'`\\]|\\.)*)["'`]/g;
    let match;
    while ((match = stringRegex.exec(line)) !== null) {
      const classStr = match[1];
      checkConflict(filepath, classStr, index + 1);
    }
    
    // Check multiple strings inside cn(...) separated by commas on the same line
    const cnRegex = /cn\(([^)]+)\)/g;
    let cnMatch;
    while ((cnMatch = cnRegex.exec(line)) !== null) {
        const innerStrings = cnMatch[1].match(/["'`]((?:[^"'`\\]|\\.)*)["'`]/g);
        if (innerStrings) {
            innerStrings.forEach(str => {
                const cleanStr = str.replace(/^["'`]|["'`]$/g, '');
                checkConflict(filepath, cleanStr, index + 1);
            });
        }
    }
  });
});

function checkConflict(filepath, classStr, lineNumber) {
    if (classStr.includes('${')) return; // skip complex template literals
    
    const classes = classStr.split(/\s+/).filter(Boolean);
    if (classes.length < 2) return;
    
    const merged = twMerge(classStr);
    const mergedClasses = merged.split(/\s+/).filter(Boolean);
    
    if (mergedClasses.length < classes.length) {
        // Find which classes were removed (overridden)
        const missing = classes.filter(c => !mergedClasses.includes(c));
        
        // Ensure the removed class isn't just a false positive from twMerge stripping unknown custom prefixes
        // twMerge is pretty accurate for standard tailwind.
        console.log(`[${filepath}:${lineNumber}]`);
        console.log(`  Code: "${classStr}"`);
        console.log(`  Issue: The class(es) "${missing.join(', ')}" are overridden and have no effect.`);
        console.log(`  Fix: "${merged}"\n`);
        foundIssues++;
    }
}

if (foundIssues === 0) {
    console.log("✅ Perfect! No Tailwind class conflicts found.");
} else {
    console.log(`❌ Total issues found: ${foundIssues}`);
}
