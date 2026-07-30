const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/dev/showcase/item.tsx');
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(
  `description="Container linh hoạt cho danh sách hoặc khối nội dung có cấu trúc."`,
  `description={t("Container linh hoạt cho danh sách hoặc khối nội dung có cấu trúc.", "Flexible container for lists or structured content blocks.")}`
);

content = content.replace(
  `<DocsP>\n            Sử dụng để tạo danh sách hoặc khối nội dung có icon, tiêu đề, mô tả\n            và hành động.\n          </DocsP>`,
  `<DocsP>\n            {t("Sử dụng để tạo danh sách hoặc khối nội dung có icon, tiêu đề, mô tả và hành động.", "Use to create lists or content blocks with an icon, title, description, and actions.")}\n          </DocsP>`
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Fixed item.tsx');
