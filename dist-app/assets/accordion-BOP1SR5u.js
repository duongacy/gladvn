import {
  Nn as e,
  a as t,
  cr as n,
  dr as r,
  i,
  n as a,
  r as o,
} from "./showcase-vJrKG7HA.js";
import { i as s, n as c, r as l, t as u } from "./accordion-DFYuOCEQ.js";
var d = r(n(), 1),
  f = e(),
  p = d.forwardRef(({ items: e, ...t }, n) =>
    (0, f.jsx)(u, {
      ref: n,
      ...t,
      children: e.map((e) =>
        (0, f.jsxs)(
          l,
          {
            value: e.value,
            disabled: e.disabled,
            children: [
              (0, f.jsx)(s, { children: e.title }),
              (0, f.jsx)(c, { children: e.content }),
            ],
          },
          e.value,
        ),
      ),
    }),
  );
p.displayName = `AccordionPreset`;
var m = [
  {
    value: `item-1`,
    title: `Is it accessible?`,
    content: `Yes. It adheres to the WAI-ARIA design pattern. Keyboard navigation and screen readers are fully supported.`,
  },
  {
    value: `item-2`,
    title: `Is it styled?`,
    content: `Yes. It comes with default styles that match the other components' aesthetic.`,
  },
  {
    value: `item-3`,
    title: `Is it animated?`,
    content: `Yes. It's animated by default with smooth transitions.`,
  },
];
function h() {
  let [e, n] = (0, d.useState)([]);
  return (0, f.jsxs)(`div`, {
    className: `space-y-10`,
    children: [
      (0, f.jsx)(i, {
        title: `Accordion (Macro)`,
        description: `Một Preset Component giúp render toàn bộ Accordion từ một mảng dữ liệu (array) truyền vào.`,
      }),
      (0, f.jsxs)(t, {
        children: [
          (0, f.jsx)(`h3`, { children: `Khi nào nên dùng` }),
          (0, f.jsxs)(`p`, {
            children: [
              `Đây là phiên bản `,
              (0, f.jsx)(`b`, { children: `được khuyên dùng mặc định` }),
              ` cho 90% các trường hợp cần Accordion (như FAQ, điều khoản, menu con). Thay vì phải render thủ công từng thẻ Root, Item, Trigger, Content, bạn chỉ cần truyền vào một array `,
              (0, f.jsx)(`code`, { children: `items` }),
              `.`,
            ],
          }),
          (0, f.jsx)(`h3`, { children: `Ưu điểm` }),
          (0, f.jsxs)(`ul`, {
            children: [
              (0, f.jsx)(`li`, {
                children: `Code siêu ngắn gọn, data-driven, dễ bảo trì.`,
              }),
              (0, f.jsx)(`li`, {
                children: `Đảm bảo chuẩn xác về Type và cấu trúc Headless UI.`,
              }),
              (0, f.jsxs)(`li`, {
                children: [
                  `Vẫn hỗ trợ nhét React Component phức tạp vào thẻ `,
                  (0, f.jsx)(`code`, { children: `content` }),
                  ` (như ví dụ Complex Content và Nested bên dưới).`,
                ],
              }),
            ],
          }),
          (0, f.jsx)(`h3`, { children: `Lưu ý` }),
          (0, f.jsxs)(`p`, {
            children: [
              `Bản Macro này đã được gói ghém (encapsulated) layout cẩn thận. Bạn có thể thoải mái truyền `,
              (0, f.jsx)(`code`, { children: `className` }),
              ` vào thẳng thẻ `,
              (0, f.jsx)(`code`, { children: `<AccordionPreset />` }),
              ` để giới hạn width hay margin mà không sợ vỡ layout bên trong.`,
            ],
          }),
          (0, f.jsx)(`h3`, { children: `Controlled vs Uncontrolled` }),
          (0, f.jsxs)(`ul`, {
            children: [
              (0, f.jsxs)(`li`, {
                children: [
                  (0, f.jsx)(`b`, { children: `Uncontrolled (Mặc định):` }),
                  ` Tự quản lý state. Phù hợp cho 80% trường hợp như trang FAQ cơ bản. Dùng `,
                  (0, f.jsx)(`code`, { children: `defaultValue` }),
                  ` để gán state ban đầu.`,
                ],
              }),
              (0, f.jsxs)(`li`, {
                children: [
                  (0, f.jsx)(`b`, { children: `Controlled:` }),
                  ` Phải dùng `,
                  (0, f.jsx)(`code`, { children: `value` }),
                  ` và `,
                  (0, f.jsx)(`code`, { children: `onValueChange` }),
                  `. Bắt buộc dùng khi cần: (1) Đồng bộ trạng thái mở với URL (ví dụ `,
                  (0, f.jsx)(`code`, { children: `?faq=1` }),
                  `), (2) Làm Form dạng Wizard (chặn user qua bước tiếp theo nếu form lỗi), (3) Điều khiển mở/đóng từ một nút bấm nằm ngoài Accordion, (4) Bắn event Tracking/Analytics khi user mở tab.`,
                ],
              }),
            ],
          }),
        ],
      }),
      (0, f.jsxs)(a, {
        columns: 2,
        children: [
          (0, f.jsx)(o, {
            label: `Tiêu Chuẩn (Standard)`,
            description: `Accordion mở đơn cơ bản.`,
            children: (0, f.jsx)(p, {
              className: `w-full`,
              defaultValue: [`item-1`],
              items: m,
            }),
          }),
          (0, f.jsx)(o, {
            label: `Mở Nhiều (Multiple Expansion)`,
            description: `Cho phép mở nhiều mục cùng một lúc.`,
            children: (0, f.jsx)(p, {
              className: `w-full`,
              multiple: !0,
              defaultValue: [`item-1`, `item-2`],
              items: m,
            }),
          }),
        ],
      }),
      (0, f.jsxs)(a, {
        columns: 2,
        children: [
          (0, f.jsx)(o, {
            label: `Controlled`,
            description: `Trạng thái mở được quản lý bằng state. Click vào các mục để xem state thay đổi.`,
            children: (0, f.jsxs)(`div`, {
              className: `flex w-full flex-col gap-3`,
              children: [
                (0, f.jsxs)(`p`, {
                  className: `text-xs text-muted-foreground`,
                  children: [
                    `Open:`,
                    ` `,
                    (0, f.jsx)(`code`, {
                      className: `rounded bg-muted px-1.5 py-0.5 text-xs font-mono`,
                      children:
                        e.length > 0
                          ? e.map((e) => `"${e}"`).join(`, `)
                          : `(none)`,
                    }),
                  ],
                }),
                (0, f.jsx)(p, {
                  className: `w-full`,
                  multiple: !0,
                  value: e,
                  onValueChange: n,
                  items: m,
                }),
              ],
            }),
          }),
          (0, f.jsx)(o, {
            label: `Disabled (Vô hiệu hoá)`,
            description: `Từng mục riêng lẻ có thể bị vô hiệu hóa trong khi các mục khác vẫn tương tác bình thường.`,
            children: (0, f.jsx)(p, {
              className: `w-full`,
              items: [
                {
                  value: `enabled-1`,
                  title: `Available Feature`,
                  content: `This feature is available and can be expanded normally.`,
                },
                {
                  value: `disabled-1`,
                  title: `Premium Feature (Locked)`,
                  content: `This content is hidden behind a premium plan.`,
                  disabled: !0,
                },
                {
                  value: `enabled-2`,
                  title: `Another Feature`,
                  content: `This is another available feature you can interact with freely.`,
                },
              ],
            }),
          }),
        ],
      }),
      (0, f.jsxs)(a, {
        columns: 2,
        children: [
          (0, f.jsx)(o, {
            label: `Nội Dung Phức Tạp`,
            description: `Render các React Node bên trong nội dung.`,
            children: (0, f.jsx)(p, {
              className: `w-full`,
              items: [
                {
                  value: `profile`,
                  title: `User Profile Settings`,
                  content: (0, f.jsxs)(`div`, {
                    className: `flex flex-col items-start gap-3`,
                    children: [
                      (0, f.jsx)(`p`, {
                        className: `text-sm`,
                        children: `Update your personal information and preferences.`,
                      }),
                      (0, f.jsx)(`button`, {
                        className: `rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground`,
                        children: `Edit Profile`,
                      }),
                    ],
                  }),
                },
              ],
            }),
          }),
          (0, f.jsx)(o, {
            label: `Lồng Nhau (Nested Accordions)`,
            description: `Nội dung bên trong có thể chứa một Accordion khác.`,
            children: (0, f.jsx)(p, {
              className: `w-full`,
              items: [
                {
                  value: `getting-started`,
                  title: `Getting Started`,
                  content: (0, f.jsx)(p, {
                    className: `w-full`,
                    items: [
                      {
                        value: `installation`,
                        title: `Installation`,
                        content: `Run npm install to add the component to your project.`,
                      },
                    ],
                  }),
                },
                {
                  value: `advanced`,
                  title: `Advanced Usage`,
                  content: (0, f.jsx)(p, {
                    className: `w-full`,
                    items: [
                      {
                        value: `controlled`,
                        title: `Controlled Mode`,
                        content: `Use the value and onValueChange props to control which items are open.`,
                      },
                    ],
                  }),
                },
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
export { h as default };
