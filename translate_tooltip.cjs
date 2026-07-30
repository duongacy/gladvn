const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/dev/showcase/tooltip.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const replacements = [
  [
    `title="Vị trí (Placements)"`,
    `title={t("Vị trí (Placements)", "Placements")}`
  ],
  [
    `title="Nội dung dài (Long Content)"`,
    `title={t("Nội dung dài (Long Content)", "Long Content")}`
  ],
  [
    `title="Trigger bị vô hiệu (Disabled Trigger)"`,
    `title={t("Trigger bị vô hiệu (Disabled Trigger)", "Disabled Trigger")}`
  ],
  [
    `title="Độ trễ tuỳ chỉnh (Custom Delay)"`,
    `title={t("Độ trễ tuỳ chỉnh (Custom Delay)", "Custom Delay")}`
  ],
  [
    `title="Tooltip"\n      description={t(`,
    `title={t("Tooltip", "Tooltip")}\n      description={t(`
  ],
  [
    `<DocsH3>Tooltip (Gợi ý)</DocsH3>`,
    `<DocsH3>{t("Tooltip (Gợi ý)", "Tooltip")}</DocsH3>`
  ],
  
  [/>\s*Tooltip nằm trên\s*<\/TooltipContent>/g, '>Tooltip on top</TooltipContent>'],
  [/>\s*Tooltip nằm dưới\s*<\/TooltipContent>/g, '>Tooltip on bottom</TooltipContent>'],
  [/>\s*Tooltip nằm trái\s*<\/TooltipContent>/g, '>Tooltip on left</TooltipContent>'],
  [/>\s*Tooltip nằm phải\s*<\/TooltipContent>/g, '>Tooltip on right</TooltipContent>'],
  
  [/>\s*Trên \(Top\)\s*<\/Button>/g, '>Top</Button>'],
  [/>\s*Dưới \(Bottom\)\s*<\/Button>/g, '>Bottom</Button>'],
  [/>\s*Trái \(Left\)\s*<\/Button>/g, '>Left</Button>'],
  [/>\s*Phải \(Right\)\s*<\/Button>/g, '>Right</Button>'],

  [/>\s*Đây là một đoạn nội dung tooltip khá dài nhằm\s*mục đích trình diễn cách mà Tooltip tự động cắt\s*và xuống dòng khi vượt quá chiều rộng tối đa\s*\(max-width\) cho phép\.\s*<\/p>/g, '>This is a fairly long tooltip content intended to demonstrate how the Tooltip automatically wraps when it exceeds the maximum allowed width (max-width).</p>'],
  [/>\s*Đây là một đoạn nội dung tooltip khá dài nhằm mục đích\s*trình diễn cách mà Tooltip tự động cắt và xuống dòng khi\s*vượt quá chiều rộng tối đa \(max-width\) cho phép\.\s*<\/p>/g, '>This is a fairly long tooltip content intended to demonstrate how the Tooltip automatically wraps when it exceeds the maximum allowed width (max-width).</p>'],

  [/>\s*Tức thì \(0ms\)\s*<\/Button>/g, '>Immediate (0ms)</Button>'],
  [/>\s*Mặc định \(500ms\)\s*<\/Button>/g, '>Default (500ms)</Button>'],
  [/>\s*Chậm \(2000ms\)\s*<\/Button>/g, '>Slow (2000ms)</Button>'],

  [/>\s*Xuất hiện ngay lập tức\s*<\/TooltipContent>/g, '>Appears immediately</TooltipContent>'],
  [/>\s*Xuất hiện sau nửa giây\s*<\/TooltipContent>/g, '>Appears after half a second</TooltipContent>'],
  [/>\s*Xuất hiện sau 2 giây chờ đợi\s*<\/TooltipContent>/g, '>Appears after waiting 2 seconds</TooltipContent>'],
];

for (const [search, replace] of replacements) {
  content = content.replace(search, replace);
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Translated tooltip.tsx');
