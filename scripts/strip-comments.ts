import * as fs from 'fs';
import * as path from 'path';
import * as ts from 'typescript';

function stripCommentsFromFile(filePath: string) {
  const content = fs.readFileSync(filePath, 'utf8');
  let result = '';
  
  const scanner = ts.createScanner(ts.ScriptTarget.Latest, false);
  scanner.setText(content);
  
  let currentToken = scanner.scan();
  let lastPos = 0;
  
  while (currentToken !== ts.SyntaxKind.EndOfFileToken) {
    const tokenStart = scanner.getTokenPos();
    const tokenEnd = scanner.getTextPos();
    
    if (currentToken === ts.SyntaxKind.SingleLineCommentTrivia) {
      // It's a // comment. Strip it!
      result += content.substring(lastPos, tokenStart);
      lastPos = tokenEnd;
    } else if (currentToken === ts.SyntaxKind.MultiLineCommentTrivia) {
      // It's a /* */ comment.
      const commentText = content.substring(tokenStart, tokenEnd);
      if (commentText.startsWith('/**')) {
        // Keep JSDoc
      } else {
        // Strip normal multiline comment
        result += content.substring(lastPos, tokenStart);
        lastPos = tokenEnd;
      }
    }
    
    currentToken = scanner.scan();
  }
  
  
  result += content.substring(lastPos);
  
  // Also clean up multiple blank lines left by deleted single line comments
  // (Optional, but helps keep code clean)
  result = result.replace(/\n\s*\n\s*\n/g, '\n\n');
  
  if (result !== content) {
    fs.writeFileSync(filePath, result, 'utf8');
    return true;
  }
  return false;
}

function processDirectory(dir: string) {
  let count = 0;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      count += processDirectory(fullPath);
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
      if (stripCommentsFromFile(fullPath)) {
        count++;
        console.log(`Stripped comments from: ${fullPath}`);
      }
    }
  }
  return count;
}

const targetDirs = ['src/components', 'src/blocks', 'src/dev'];
let totalChanged = 0;

for (const dir of targetDirs) {
  if (fs.existsSync(dir)) {
    totalChanged += processDirectory(dir);
  }
}

console.log(`\nFinished! Stripped comments from ${totalChanged} files.`);
