const fs = require("fs");
const path = require("path");

const fullDict = {
  // Batch 1
  "Solid Colors": "Màu Sắc Dạng Solid",
  "Soft Colors": "Màu Sắc Dạng Soft",
  "With Icons": "Kèm Icon (With Icons)",
  "Status Indicators": "Chỉ Báo Trạng Thái (Status Indicators)",
  "Tags & Categories": "Thẻ & Danh Mục (Tags & Categories)",
  "As Link": "Dạng Thẻ Liên Kết (As Link)",
  "With Icon": "Kèm Icon (With Icon)",
  "Icon Only": "Chỉ Có Icon (Icon Only)",
  "Loading State": "Trạng Thái Đang Tải (Loading)",
  "Input Group": "Nhóm Nhập Liệu (Input Group)",
  "Custom Title Node": "Tiêu Đề Tùy Chỉnh (Custom Title)",
  "Decorative vs Semantic": "Trang Trí vs Ngữ Nghĩa (Decorative vs Semantic)",
  "Card Profile": "Thẻ Thông Tin Cá Nhân (Profile Card)",
  "Article / Blog Post": "Bài Viết / Blog (Article Post)",
  "List Items / Table Rows": "Danh Sách / Hàng Trong Bảng (List Items)",
  "Media / Image Placeholder": "Khung Ảnh / Media (Media Placeholder)",
  "Custom Colors": "Màu Sắc Tùy Chỉnh (Custom Colors)",
  "In Context — Button Loading": "Trong Ngữ Cảnh — Nút Đang Tải",
  "Overlay Loading": "Đang Tải Phủ Lớp (Overlay Loading)",
  "Kbd trong Tooltip": "Phím Kbd Trong Tooltip",
  "Error State": "Trạng Thái Lỗi (Error State)",
  "With Peer Input": "Với Input Đi Kèm (Peer Input)",

  // Batch 2
  "Auto Resize (CSS content)": "Tự Động Giãn Chiều Cao (Auto Resize)",
  "InputGroup + Textarea": "Nhóm Input + Textarea",
  "Text Prefix & Suffix": "Tiền Tố & Hậu Tố Dạng Chữ",
  "Icon Prefix & Text Suffix": "Tiền Tố Icon & Hậu Tố Text",
  "Password Toggle": "Ẩn/Hiện Mật Khẩu (Password Toggle)",
  "Clear Button": "Nút Xóa Nhanh (Clear Button)",
  "Text Button (non-icon)": "Nút Dạng Text (Non-Icon Button)",
  "Both Ends — Counter": "Hai Đầu — Bộ Đếm Ký Tự (Counter)",
  "Button Variants": "Các Kiểu Nút Đi Kèm (Button Variants)",
  "Invalid / Error": "Trạng Thái Lỗi (Invalid / Error)",
  "With Textarea": "Đi Kèm Textarea",
  "Controlled Mode": "Chế Độ Điều Khiển (Controlled Mode)",

  // Batch 3
  "Icon Trigger": "Nút Nguồn Icon (Icon Trigger)",
  "Controlled State": "Trạng Thái Điều Khiển (Controlled State)",

  // Batch 4
  "Custom Button Variants": "Các Kiểu Nút Tùy Chỉnh (Custom Button Variants)",
  "Action Colors": "Màu Sắc Nút Hành Động (Action Colors)",
  "Action & Cancel Variants": "Các Kiểu Nút Hành Động & Hủy",
  "React Node Label (Custom Content)": "Nhãn Tùy Chỉnh (Custom Content Label)"
};

const files = fs.readdirSync("src/dev/showcase").filter(f => f.endsWith(".tsx"));

for (const file of files) {
  const filePath = path.join("src/dev/showcase", file);
  let code = fs.readFileSync(filePath, "utf8");
  let changed = false;

  code = code.replace(/title=(?:"([^"]+)"|\{t\("([^"]+)",\s*"([^"]+)"\)\})/g, (match, t1, t2, t3) => {
    const origTitle = t1 || t2;
    if (fullDict[origTitle]) {
      changed = true;
      return `title="${fullDict[origTitle]}"`;
    }
    return match;
  });

  if (changed) {
    fs.writeFileSync(filePath, code);
    console.log("Fully translated:", file);
  }
}
