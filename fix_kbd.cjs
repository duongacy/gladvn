const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/dev/showcase/kbd.tsx');
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(
  /Press <Kbd>Enter<\/Kbd> để gửi, hoặc\{" "\}/g,
  `Press <Kbd>Enter</Kbd> {t("để gửi, hoặc ", "to send, or ")}`
);

content = content.replace(
  `to newline.`,
  `{t("to newline.", "to newline.")}`
);

content = content.replace(
  `title="Keyboard Shortcut"`,
  `title={t("Phím tắt (Keyboard Shortcut)", "Keyboard Shortcut")}`
);

content = content.replace(
  `<DocsP>\n            <DocsCode>Kbd</DocsCode> dùng thẻ HTML semantic{" "}\n            <DocsCode>&lt;kbd&gt;</DocsCode> để biểu diễn một phím bàn phím.\n            Screen reader nhận ra đây là keyboard input thay vì văn bản thường.\n          </DocsP>`,
  `<DocsP>\n            <DocsCode>Kbd</DocsCode>\n            {t(" dùng thẻ HTML semantic ", " uses the semantic HTML tag ")}\n            <DocsCode>&lt;kbd&gt;</DocsCode>\n            {t(" để biểu diễn một phím bàn phím. Screen reader nhận ra đây là keyboard input thay vì văn bản thường.", " to represent a keyboard key. Screen readers recognize this as keyboard input instead of regular text.")}\n          </DocsP>`
);

content = content.replace(
  `<DocsP>\n            <DocsCode>KbdGroup</DocsCode> nhóm nhiều <DocsCode>Kbd</DocsCode>{" "}\n            lại để tạo tổ hợp phím (ví dụ: ⌘ + ⇧ + P). Kbd tự thích nghi màu sắc\n            khi nằm trong <DocsCode>TooltipContent</DocsCode> nhờ data-slot\n            context.\n          </DocsP>`,
  `<DocsP>\n            <DocsCode>KbdGroup</DocsCode>\n            {t(" nhóm nhiều ", " groups multiple ")}\n            <DocsCode>Kbd</DocsCode>\n            {t(" lại để tạo tổ hợp phím (ví dụ: ⌘ + ⇧ + P). Kbd tự thích nghi màu sắc khi nằm trong ", " together to create a key combination (e.g., ⌘ + ⇧ + P). Kbd automatically adapts its colors when placed inside ")}\n            <DocsCode>TooltipContent</DocsCode>\n            {t(" nhờ data-slot context.", " thanks to the data-slot context.")}\n          </DocsP>`
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Fixed kbd.tsx');
