const fs = require("fs");
const path = require("path");
const ts = require("typescript");

const dir = "src/dev/showcase";
const files = fs.readdirSync(dir).filter(f => f.endsWith(".tsx"));

let dict = {};
try {
  dict = JSON.parse(fs.readFileSync("translated_strings.json", "utf8"));
} catch (e) {}
try {
  const autoTrans = JSON.parse(fs.readFileSync("auto_translated.json", "utf8"));
  dict = { ...dict, ...autoTrans };
} catch(e) {}
try {
  const accFixes = JSON.parse(fs.readFileSync("/Users/nhungneee/.gemini/antigravity-ide/brain/21536da7-dd4b-4a33-be70-8afa444b1b6b/scratch/accordion_fixes.json", "utf8"));
  dict = { ...dict, ...accFixes };
  
  // Also merge accFixes into translated_strings.json
  const existing = JSON.parse(fs.readFileSync("translated_strings.json", "utf8"));
  fs.writeFileSync("translated_strings.json", JSON.stringify({ ...existing, ...accFixes }, null, 2), "utf8");
} catch(e) {}

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, "utf8");
  const sourceFile = ts.createSourceFile(file, content, ts.ScriptTarget.Latest, true);

  const replacements = [];

  function visit(node) {
    if (ts.isCallExpression(node) && node.expression.getText() === "t") {
      const args = node.arguments;
      if (args.length === 2 && ts.isStringLiteral(args[0]) && ts.isStringLiteral(args[1])) {
        const vi = args[0].text;
        const en = args[1].text;
        if (vi === en && dict[vi] && dict[vi] !== vi) {
          replacements.push({
            start: args[1].getStart(sourceFile),
            end: args[1].getEnd(),
            text: JSON.stringify(dict[vi])
          });
        }
      }
    }
    ts.forEachChild(node, visit);
  }

  visit(sourceFile);

  if (replacements.length > 0) {
    replacements.sort((a, b) => b.start - a.start);
    for (const rep of replacements) {
      content = content.slice(0, rep.start) + rep.text + content.slice(rep.end);
    }
    
    // Quick regex pass for multiline template strings that might have been wrapped
    content = content.replace(/t\("Trigger cần hiển thị Icon hoặc Badge[\s\S]*?Macro không thể làm[\s\S]*?được việc này\.", "Trigger cần hiển thị Icon hoặc Badge[\s\S]*?Macro không thể làm[\s\S]*?được việc này\."\)/g, 
    't("Trigger cần hiển thị Icon hoặc Badge. Nội dung bên trong là một Form phức tạp (chứ không phải text đơn thuần). Macro không thể làm được việc này.", "Trigger needs to show an Icon or Badge. The content inside is a complex Form (not just plain text). Macro cannot do this.")');
    content = content.replace(/t\("Bạn nhận được một mảng dữ liệu FAQ[\s\S]*?Nội dung[\s\S]*?đơn giản chỉ là text\. Dùng Macro để tiết kiệm code\.", "Bạn nhận được một mảng dữ liệu FAQ[\s\S]*?Nội dung[\s\S]*?đơn giản chỉ là text\. Dùng Macro để tiết kiệm code\."\)/g,
    't("Bạn nhận được một mảng dữ liệu FAQ (hỏi đáp) từ server. Nội dung đơn giản chỉ là text. Dùng Macro để tiết kiệm code.", "You receive an array of FAQ data from the server. The content is simply text. Use Macro to save code.")');

    fs.writeFileSync(filePath, content, "utf8");
    console.log("Fixed t(vi, vi) in", file);
  }
}
