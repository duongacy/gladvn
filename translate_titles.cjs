const fs = require("fs");
const path = require("path");

const dictionary = {
  "AlertDialogMedia": "Khối Hình Ảnh (Media)",
  "AlertDialogClose": "Nút Đóng (Close)",
  "Variants": "Biến Thể (Variants)",
  "Colors": "Màu Sắc (Colors)",
  "Disabled": "Khóa / Bất Hoạt (Disabled)",
  "Destructive": "Hành Động Nguy Hiểm (Destructive)",
  "Default": "Mặc Định (Default)",
  "Submenu": "Menu Con (Submenu)",
  "Position": "Vị Trí (Position)",
  "Sortable": "Sắp Xếp (Sortable)",
  "Vertical": "Chiều Dọc (Vertical)",
  "Outline": "Viền (Outline)",
  "Basic Usage": "Sử Dụng Cơ Bản (Basic Usage)",
  "Forms & Custom Content": "Form & Nội Dung Tùy Chỉnh",
  "No Close Button": "Không Có Nút Đóng",
  "Large Content Sizing": "Nội Dung Lớn (Large Sizing)",
  "Sticky Footer (Long Content)": "Chân Trang Cố Định (Sticky Footer)"
};

const files = fs.readdirSync("src/dev/showcase").filter(f => f.endsWith(".tsx"));

for (const file of files) {
  const filePath = path.join("src/dev/showcase", file);
  let code = fs.readFileSync(filePath, "utf8");
  let changed = false;

  code = code.replace(/title="([^"]+)"/g, (match, title) => {
    if (dictionary[title]) {
      changed = true;
      return `title="${dictionary[title]}"`;
    }
    return match;
  });

  if (changed) {
    fs.writeFileSync(filePath, code);
    console.log("Translated in", file);
  }
}
