const fs = require("fs");
const path = require("path");

const files = fs.readdirSync("src/dev/showcase").filter(f => f.endsWith(".tsx"));

for (const file of files) {
  const filePath = path.join("src/dev/showcase", file);
  let code = fs.readFileSync(filePath, "utf8");
  
  // Regex to remove the callout div blocks:
  // <div className="[^"]*(?:border-green|border-blue|bg-green|bg-blue)[^"]*">[\s\S]*?<\/div>
  const regex = /<div className="[^"]*(?:border-green|border-blue|bg-green|bg-blue)[^"]*">[\s\S]*?<\/div>\s*/g;
  
  if (regex.test(code)) {
    code = code.replace(regex, "");
    fs.writeFileSync(filePath, code);
    console.log("Stripped callout boxes from:", file);
  }
}
