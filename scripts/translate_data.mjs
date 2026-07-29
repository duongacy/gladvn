import fs from 'fs';

let content = fs.readFileSync('src/dev/data.ts', 'utf8');

const translations = {
  // NAV
  'label: "Overview"': 'label: "Tổng quan"',
  'label: "Buttons"': 'label: "Nút bấm"',
  'label: "Forms"': 'label: "Biểu mẫu"',
  'label: "Feedback"': 'label: "Phản hồi"',
  'label: "Display"': 'label: "Hiển thị"',
  'label: "Interactive"': 'label: "Tương tác"',
  
  // COLOR_INFO descriptions
  'description: "Main action"': 'description: "Hành động chính"',
  'description: "Alternative"': 'description: "Thay thế / Phụ"',
  'description: "Danger / Delete"': 'description: "Nguy hiểm / Xóa"',
  'description: "Caution"': 'description: "Cảnh báo"',
  'description: "Confirm / Done"': 'description: "Thành công / Hoàn tất"',
  'description: "Information"': 'description: "Thông tin"',
  'description: "Extra / Beta"': 'description: "Bổ sung / Thử nghiệm"',
  
  // COMPONENTS categories
  'category: "Layout & Structure"': 'category: "Bố cục & Cấu trúc"',
  'category: "Feedback & Overlays"': 'category: "Phản hồi & Lớp phủ"',
  'category: "Data Display"': 'category: "Hiển thị Dữ liệu"',
  'category: "Navigation"': 'category: "Điều hướng"',
  'category: "Forms & Inputs"': 'category: "Biểu mẫu & Đầu vào"',
  'category: "Dashboards"': 'category: "Dashboard"', 
  'category: "Settings"': 'category: "Cài đặt"',
  'category: "Authentication"': 'category: "Xác thực"',
  'category: "Other"': 'category: "Khác"',
  
  // Labels for blocks
  'label: "Why gladvn?"': 'label: "Tại sao chọn gladvn?"',
  'label: "Settings Layout"': 'label: "Giao diện Cài đặt"',
  'label: "Login Form"': 'label: "Form Đăng nhập"',
  'label: "Password Recovery"': 'label: "Khôi phục Mật khẩu"',
  'label: "Login (Split Screen)"': 'label: "Đăng nhập (Chia màn hình)"',
};

for (const [en, vi] of Object.entries(translations)) {
  content = content.split(en).join(vi);
}

fs.writeFileSync('src/dev/data.ts', content);
console.log("Translated data.ts successfully.");
