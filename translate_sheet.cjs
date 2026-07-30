const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/dev/showcase/sheet.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const replacements = [
  [
    `title="Có nút đóng (mặc định)"\n          description="showCloseButton={true} — nút X tự động hiển thị ở góc trên phải."`,
    `title={t("Có nút đóng (mặc định)", "With Close Button (Default)")}\n          description={t("showCloseButton={true} — nút X tự động hiển thị ở góc trên phải.", "showCloseButton={true} — the X button automatically appears in the top right corner.")}`
  ],
  [
    `title="Ẩn nút đóng"\n          description="showCloseButton={false} — dùng khi muốn tự control nút đóng bên trong nội dung."`,
    `title={t("Ẩn nút đóng", "Hide Close Button")}\n          description={t("showCloseButton={false} — dùng khi muốn tự control nút đóng bên trong nội dung.", "showCloseButton={false} — used when you want to control the close button manually inside the content.")}`
  ],
  [
    `title="Controlled State"\n        description="Quản lý trạng thái đóng/mở qua React state với open và onOpenChange."`,
    `title={t("Trạng thái được kiểm soát (Controlled State)", "Controlled State")}\n        description={t("Quản lý trạng thái đóng/mở qua React state với open và onOpenChange.", "Manage the open/closed state via React state with open and onOpenChange.")}`
  ],
  [
    `title="Use case — Filter Panel"\n        description="Sheet dùng làm bảng lọc dữ liệu bên phải — pattern phổ biến trong dashboard, table view."`,
    `title={t("Tình huống sử dụng — Bảng lọc", "Use case — Filter Panel")}\n        description={t("Sheet dùng làm bảng lọc dữ liệu bên phải — pattern phổ biến trong dashboard, table view.", "Sheet used as a right-side data filter panel — a common pattern in dashboards, table views.")}`
  ],
  
  [/>\s*Tên\s*<\/Label>/g, '>Name</Label>'],
  [/>\s*Huỷ\s*<\/SheetClose>/g, '>Cancel</SheetClose>'],
  [/>\s*Mở Sheet\s*<\/SheetTrigger>/g, '>Open Sheet</SheetTrigger>'],
  [/>\s*Có nút đóng\s*<\/SheetTitle>/g, '>With Close Button</SheetTitle>'],
  [/>\s*Nút X xuất hiện tự động\.\s*<\/SheetDescription>/g, '>The X button appears automatically.</SheetDescription>'],
  [/>\s*Không có X\s*<\/SheetTrigger>/g, '>No X Button</SheetTrigger>'],
  [/>\s*Ẩn nút đóng\s*<\/SheetTitle>/g, '>Hide Close Button</SheetTitle>'],
  [/>\s*Consumer tự render nút đóng trong footer\.\s*<\/SheetDescription>/g, '>Consumer renders the close button in the footer.</SheetDescription>'],
  [/>\s*Đóng thủ công\s*<\/SheetClose>/g, '>Close Manually</SheetClose>'],
  [/>\s*Đóng bằng state\s*<\/Button>/g, '>Close via state</Button>'],
  [/Trạng thái:\s*\{" "\}/g, 'Status: {" "}'],
  [/>\s*Mở\s*</g, '>Open<'],
  [/\{open \? "Mở" : "Đóng"\}/g, '{open ? "Open" : "Closed"}'],
  [/>\s*Sheet được điều khiển hoàn toàn bởi React\s*state\.\s*<\/SheetDescription>/g, '>Sheet is fully controlled by React state.</SheetDescription>'],
  [/>\s*Sheet được điều khiển hoàn toàn bởi React state\.\s*<\/SheetDescription>/g, '>Sheet is fully controlled by React state.</SheetDescription>'],
  
  [/>\s*Lọc dữ liệu\s*<\/SheetTrigger>/g, '>Filter Data</SheetTrigger>'],
  [/>\s*Bộ lọc\s*<\/SheetTitle>/g, '>Filters</SheetTitle>'],
  [/>\s*Tinh chỉnh kết quả hiển thị theo điều kiện\.\s*<\/SheetDescription>/g, '>Refine the displayed results based on conditions.</SheetDescription>'],
  [/>\s*Trạng thái\s*<\/Label>/g, '>Status</Label>'],
  [/placeholder="Tất cả"/g, 'placeholder="All"'],
  [/>\s*Từ ngày\s*<\/Label>/g, '>From Date</Label>'],
  [/>\s*Đến ngày\s*<\/Label>/g, '>To Date</Label>'],
  [/>\s*Xoá bộ lọc\s*<\/SheetClose>/g, '>Clear Filters</SheetClose>'],
  [/>\s*Áp dụng\s*<\/Button>/g, '>Apply</Button>'],
  
  [
    `title="Sheet"\n      description="Panel trượt từ cạnh màn hình — mở rộng Dialog để hiển thị nội dung bổ sung mà không rời trang."\n      guideline={`,
    `title={t("Sheet", "Sheet")}\n      description={t(\n        "Panel trượt từ cạnh màn hình — mở rộng Dialog để hiển thị nội dung bổ sung mà không rời trang.",\n        "A panel that slides in from the edge of the screen — extending Dialog to display additional content without leaving the page."\n      )}\n      guideline={`
  ],
  
  [
    `<DocsCode>Sheet</DocsCode> là một variant của Dialog, nhưng thay vì\n            hiện ở giữa màn hình, nó trượt ra từ một cạnh (right, left, top,\n            bottom). Phù hợp cho navigation drawer, filter panel, settings\n            sidebar, hay form chỉnh sửa.`,
    `<DocsCode>Sheet</DocsCode>\n            {t(\n              " là một variant của Dialog, nhưng thay vì hiện ở giữa màn hình, nó trượt ra từ một cạnh (right, left, top, bottom). Phù hợp cho navigation drawer, filter panel, settings sidebar, hay form chỉnh sửa.",\n              " is a variant of Dialog, but instead of appearing in the center of the screen, it slides out from an edge (right, left, top, bottom). Suitable for navigation drawer, filter panel, settings sidebar, or edit forms."\n            )}`
  ],
  [
    `<DocsCode>SheetContent</DocsCode> tự tích hợp{" "}\n            <DocsCode>Portal</DocsCode> và <DocsCode>Overlay</DocsCode> bên\n            trong. Prop <DocsCode>showCloseButton</DocsCode> cho phép bật/tắt\n            nút X tự động. Dùng <DocsCode>open</DocsCode> /{" "}\n            <DocsCode>onOpenChange</DocsCode> để controlled mode.`,
    `<DocsCode>SheetContent</DocsCode>\n            {t(" tự tích hợp ", " integrates ")}\n            <DocsCode>Portal</DocsCode>\n            {t(" và ", " and ")}\n            <DocsCode>Overlay</DocsCode>\n            {t(" bên trong. Prop ", " internally. The ")}\n            <DocsCode>showCloseButton</DocsCode>\n            {t(" cho phép bật/tắt nút X tự động. Dùng ", " prop allows toggling the automatic X button. Use ")}\n            <DocsCode>open</DocsCode>\n            {t(" / ", " / ")}\n            <DocsCode>onOpenChange</DocsCode>\n            {t(" để sử dụng controlled mode.", " for controlled mode.")}`
  ],
  [
    `"Sheet có thể trượt ra từ bốn cạnh: right (mặc định), left, top, bottom."`,
    `"Sheet có thể trượt ra từ bốn cạnh: right (mặc định), left, top, bottom."` // Already translated
  ]
];

for (const [search, replace] of replacements) {
  content = content.replace(search, replace);
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Translated sheet.tsx');
