const fs = require('fs');
const path = require('path');

function processFile(filePath, replacements) {
  let content = fs.readFileSync(filePath, 'utf8');
  for (const [search, replace] of replacements) {
    content = content.replace(search, replace);
  }
  fs.writeFileSync(filePath, content, 'utf8');
}

// 1. menubar.tsx
processFile(path.join(__dirname, 'src/dev/showcase/menubar.tsx'), [
  [
    `title="Menubar"`,
    `title={t("Thanh Menu (Menubar)", "Menubar")}`
  ],
  [
    `<DocsP>\n            Menubar cung cấp thanh điều hướng ngang với các menu dropdown\n            (thường thấy trên thanh công cụ của hệ điều hành như macOS). Nó hỗ\n            trợ nhiều tính năng phức tạp như sub-menus, checkbox, radio group,\n            và shortcut keys.\n          </DocsP>`,
    `<DocsP>\n            {t("Menubar cung cấp thanh điều hướng ngang với các menu dropdown (thường thấy trên thanh công cụ của hệ điều hành như macOS). Nó hỗ trợ nhiều tính năng phức tạp như sub-menus, checkbox, radio group, và shortcut keys.", "Menubar provides a horizontal navigation bar with dropdown menus (often seen on OS toolbars like macOS). It supports complex features like sub-menus, checkbox, radio group, and shortcut keys.")}\n          </DocsP>`
  ]
]);

// 2. chart.tsx
processFile(path.join(__dirname, 'src/dev/showcase/chart.tsx'), [
  [
    `title="Chart"`,
    `title={t("Biểu đồ (Chart)", "Chart")}`
  ],
  [
    `<DocsP>\n            Component wrapper cho thư viện <DocsCode>Recharts</DocsCode>. Cung\n            cấp <DocsCode>ChartContainer</DocsCode> để cấu hình theme màu sắc,{" "}\n            <DocsCode>ChartTooltip</DocsCode> và{" "}\n            <DocsCode>ChartLegend</DocsCode> để hiển thị thông tin bổ sung khi\n            hover.\n          </DocsP>`,
    `<DocsP>\n            {t("Component wrapper cho thư viện ", "Component wrapper for the ")}\n            <DocsCode>Recharts</DocsCode>\n            {t(" library. Cung cấp ", ". Provides ")}\n            <DocsCode>ChartContainer</DocsCode>\n            {t(" để cấu hình theme màu sắc, ", " to configure color themes, ")}\n            <DocsCode>ChartTooltip</DocsCode>\n            {t(" và ", " and ")}\n            <DocsCode>ChartLegend</DocsCode>\n            {t(" để hiển thị thông tin bổ sung khi hover.", " to display additional information on hover.")}\n          </DocsP>`
  ]
]);

// 3. kbd.tsx
processFile(path.join(__dirname, 'src/dev/showcase/kbd.tsx'), [
  [
    `title="Kbd"`,
    `title={t("Phím tắt (Kbd)", "Kbd")}`
  ],
  [
    `title="Phím tắt cơ bản (Basic Kbd)"`,
    `title={t("Phím tắt cơ bản (Basic Kbd)", "Basic Kbd")}`
  ],
  [
    `title="Kết hợp phím (Key Combinations)"`,
    `title={t("Kết hợp phím (Key Combinations)", "Key Combinations")}`
  ],
  [
    `title="Trong văn bản (Inline Text)"`,
    `title={t("Trong văn bản (Inline Text)", "Inline Text")}`
  ],
  [
    `<DocsP>\n            <DocsCode>Kbd</DocsCode> (Keyboard Input) là một component hiển thị\n            giao diện mô phỏng một phím bấm trên bàn phím. Thường được sử dụng\n            để hướng dẫn người dùng các phím tắt (shortcuts) trong ứng dụng.\n          </DocsP>`,
    `<DocsP>\n            <DocsCode>Kbd</DocsCode>\n            {t(\n              " (Keyboard Input) là một component hiển thị giao diện mô phỏng một phím bấm trên bàn phím. Thường được sử dụng để hướng dẫn người dùng các phím tắt (shortcuts) trong ứng dụng.",\n              " (Keyboard Input) is a component that displays an interface simulating a keyboard key. It is commonly used to guide users on keyboard shortcuts in the application."\n            )}\n          </DocsP>`
  ],
  [
    `Nhấn <Kbd>⌘</Kbd> + <Kbd>S</Kbd> để lưu tài liệu.`,
    `{t("Nhấn ", "Press ")}<Kbd>⌘</Kbd> + <Kbd>S</Kbd>{t(" để lưu tài liệu.", " to save the document.")}`
  ]
]);

// 4. item.tsx
processFile(path.join(__dirname, 'src/dev/showcase/item.tsx'), [
  [
    `title="Item"`,
    `title={t("Mục danh sách (Item)", "Item")}`
  ],
  [
    `title="Mục danh sách cơ bản (Basic Item)"`,
    `title={t("Mục danh sách cơ bản (Basic Item)", "Basic Item")}`
  ],
  [
    `title="Mục danh sách có Icon (Item with Icon)"`,
    `title={t("Mục danh sách có Icon (Item with Icon)", "Item with Icon")}`
  ],
  [
    `title="Tích hợp Checkbox (Checkbox integration)"`,
    `title={t("Tích hợp Checkbox (Checkbox integration)", "Checkbox integration")}`
  ],
  [
    `title="Trạng thái vô hiệu hóa (Disabled State)"`,
    `title={t("Trạng thái vô hiệu hóa (Disabled State)", "Disabled State")}`
  ],
  [
    `<DocsP>\n            Component <DocsCode>Item</DocsCode> là một khối hiển thị tiêu chuẩn\n            cho các danh sách (list) và menu. Nó được thiết kế với bố cục thống\n            nhất: <DocsCode>ItemIcon</DocsCode> ở bên trái,\n            <DocsCode>ItemTitle</DocsCode> và <DocsCode>ItemSubtitle</DocsCode> ở\n            giữa, cùng với vùng chứa hành động (actions) hoặc thông tin phụ\n            (meta) ở bên phải.\n          </DocsP>`,
    `<DocsP>\n            {t("Component ", "The ")}\n            <DocsCode>Item</DocsCode>\n            {t(\n              " là một khối hiển thị tiêu chuẩn cho các danh sách (list) và menu. Nó được thiết kế với bố cục thống nhất: ",\n              " component is a standard display block for lists and menus. It is designed with a unified layout: "\n            )}\n            <DocsCode>ItemIcon</DocsCode>\n            {t(" ở bên trái, ", " on the left, ")}\n            <DocsCode>ItemTitle</DocsCode>\n            {t(" và ", " and ")}\n            <DocsCode>ItemSubtitle</DocsCode>\n            {t(\n              " ở giữa, cùng với vùng chứa hành động (actions) hoặc thông tin phụ (meta) ở bên phải.",\n              " in the center, along with an action or meta area on the right."\n            )}\n          </DocsP>`
  ],
  [/>\s*Hỗ trợ đa ngôn ngữ\s*<\/ItemTitle>/g, '>{t("Hỗ trợ đa ngôn ngữ", "Multi-language support")}</ItemTitle>'],
  [/>\s*English, Vietnamese\.\.\.\s*<\/ItemSubtitle>/g, '>{t("English, Vietnamese...", "English, Vietnamese...")}</ItemSubtitle>'],
  [/>\s*Hồ sơ cá nhân\s*<\/ItemTitle>/g, '>{t("Hồ sơ cá nhân", "Personal Profile")}</ItemTitle>'],
  [/>\s*Chỉnh sửa thông tin cá nhân và ảnh đại diện\.\s*<\/ItemSubtitle>/g, '>{t("Chỉnh sửa thông tin cá nhân và ảnh đại diện.", "Edit personal information and avatar.")}</ItemSubtitle>'],
  [/>\s*Bảo mật\s*<\/ItemTitle>/g, '>{t("Bảo mật", "Security")}</ItemTitle>'],
  [/>\s*Quản lý mật khẩu và xác thực hai yếu tố\.\s*<\/ItemSubtitle>/g, '>{t("Quản lý mật khẩu và xác thực hai yếu tố.", "Manage password and two-factor authentication.")}</ItemSubtitle>'],
  [/>\s*Chế độ tối\s*<\/ItemTitle>/g, '>{t("Chế độ tối", "Dark Mode")}</ItemTitle>'],
  [/>\s*Đổi giao diện sang nền tối\.\s*<\/ItemSubtitle>/g, '>{t("Đổi giao diện sang nền tối.", "Switch to dark theme.")}</ItemSubtitle>'],
  [/>\s*Xóa tài khoản\s*<\/ItemTitle>/g, '>{t("Xóa tài khoản", "Delete Account")}</ItemTitle>'],
  [/>\s*Hành động này không thể hoàn tác\.\s*<\/ItemSubtitle>/g, '>{t("Hành động này không thể hoàn tác.", "This action cannot be undone.")}</ItemSubtitle>'],
  [/>\s*Cho phép thông báo\s*<\/ItemTitle>/g, '>{t("Cho phép thông báo", "Allow Notifications")}</ItemTitle>'],
  [/>\s*Nhận email về hoạt động mới\.\s*<\/ItemSubtitle>/g, '>{t("Nhận email về hoạt động mới.", "Receive emails about new activity.")}</ItemSubtitle>']
]);

// 5. Remove why page from data.ts
let dataTsContent = fs.readFileSync(path.join(__dirname, 'src/dev/data.ts'), 'utf8');
dataTsContent = dataTsContent.replace(/,\s*\{\s*id:\s*"why",\s*category:\s*"Khác",\s*label:\s*"Tại sao chọn gladvn\?",\s*hasMicro:\s*false,\s*hasMacro:\s*false,\s*status:\s*"stable",\s*\}/, '');
fs.writeFileSync(path.join(__dirname, 'src/dev/data.ts'), dataTsContent, 'utf8');

// 6. Remove why page from App.tsx
let appTsxContent = fs.readFileSync(path.join(__dirname, 'src/dev/App.tsx'), 'utf8');
appTsxContent = appTsxContent.replace(/\s*"Tại sao chọn gladvn\?": "Why gladvn\?",/, '');
fs.writeFileSync(path.join(__dirname, 'src/dev/App.tsx'), appTsxContent, 'utf8');

// 7. Delete why.tsx
if (fs.existsSync(path.join(__dirname, 'src/dev/showcase/why.tsx'))) {
  fs.unlinkSync(path.join(__dirname, 'src/dev/showcase/why.tsx'));
}

console.log('Fixes applied successfully');
