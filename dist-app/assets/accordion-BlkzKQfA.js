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
  p = [
    {
      q: `Is it accessible?`,
      a: `Yes. It adheres to the WAI-ARIA design pattern. Keyboard navigation and screen readers are fully supported.`,
    },
    {
      q: `Is it styled?`,
      a: `Yes. It comes with default styles that match the other components' aesthetic. You can override every token via CSS variables.`,
    },
    {
      q: `Is it animated?`,
      a: `Yes. It's animated by default with smooth expand/collapse transitions, but you can disable animation if you prefer.`,
    },
    {
      q: `Can I nest accordions?`,
      a: `Yes. You can nest accordion components inside each other to create multi-level collapsible sections.`,
    },
  ],
  m = p[0]?.q ?? ``,
  h = p[1]?.q ?? ``;
function g() {
  let [e, n] = (0, d.useState)([]);
  return (0, f.jsxs)(`div`, {
    className: `space-y-10`,
    children: [
      (0, f.jsx)(i, {
        title: `Accordion`,
        description: `Tập hợp các tiêu đề có thể tương tác xếp chồng lên nhau theo chiều dọc, mỗi tiêu đề sẽ mở ra một phần nội dung.`,
      }),
      (0, f.jsxs)(t, {
        children: [
          (0, f.jsx)(`h3`, { children: `Khi nào nên dùng` }),
          (0, f.jsx)(`p`, {
            children: `Dùng để gom nhóm các khối nội dung lớn nhằm tiết kiệm không gian hiển thị (ví dụ: FAQ, Advanced Settings). Không nên dùng Accordion nếu nội dung bên trong quá quan trọng và cần user phải nhìn thấy ngay lập tức.`,
          }),
          (0, f.jsx)(`h3`, { children: `Micro vs Macro` }),
          (0, f.jsxs)(`ul`, {
            children: [
              (0, f.jsxs)(`li`, {
                children: [
                  `Hãy dùng bản `,
                  (0, f.jsx)(`code`, { children: `Macro (AccordionPreset)` }),
                  ` cho 90% các trường hợp thông thường (truyền array data).`,
                ],
              }),
              (0, f.jsxs)(`li`, {
                children: [
                  `Chỉ dùng bản `,
                  (0, f.jsx)(`code`, { children: `Micro` }),
                  ` này khi bạn cần tuỳ biến giao diện cực sâu hoặc nhét Form/Component phức tạp vào trong từng Panel.`,
                ],
              }),
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
            label: `Mở Đơn (Single Expand)`,
            description: `Chỉ một mục được phép mở tại một thời điểm (mặc định).`,
            children: (0, f.jsx)(u, {
              className: `w-full`,
              defaultValue: [m],
              children: p
                .slice(0, 3)
                .map(({ q: e, a: t }) =>
                  (0, f.jsxs)(
                    l,
                    {
                      value: e,
                      children: [
                        (0, f.jsx)(s, { children: e }),
                        (0, f.jsx)(c, { children: t }),
                      ],
                    },
                    e,
                  ),
                ),
            }),
          }),
          (0, f.jsx)(o, {
            label: `Mở Nhiều (Multiple Expand)`,
            description: `Cho phép mở nhiều mục cùng lúc.`,
            children: (0, f.jsx)(u, {
              className: `w-full`,
              multiple: !0,
              defaultValue: [m, h],
              children: p
                .slice(0, 3)
                .map(({ q: e, a: t }) =>
                  (0, f.jsxs)(
                    l,
                    {
                      value: e,
                      children: [
                        (0, f.jsx)(s, { children: e }),
                        (0, f.jsx)(c, { children: t }),
                      ],
                    },
                    e,
                  ),
                ),
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
                (0, f.jsx)(u, {
                  className: `w-full`,
                  multiple: !0,
                  value: e,
                  onValueChange: n,
                  children: p
                    .slice(0, 3)
                    .map(({ q: e, a: t }) =>
                      (0, f.jsxs)(
                        l,
                        {
                          value: e,
                          children: [
                            (0, f.jsx)(s, { children: e }),
                            (0, f.jsx)(c, { children: t }),
                          ],
                        },
                        e,
                      ),
                    ),
                }),
              ],
            }),
          }),
          (0, f.jsx)(o, {
            label: `Disabled (Vô hiệu hoá)`,
            description: `Từng mục riêng lẻ có thể bị vô hiệu hóa trong khi các mục khác vẫn tương tác bình thường.`,
            children: (0, f.jsxs)(u, {
              className: `w-full`,
              children: [
                (0, f.jsxs)(l, {
                  value: `enabled-1`,
                  children: [
                    (0, f.jsx)(s, { children: `Available Feature` }),
                    (0, f.jsx)(c, {
                      children: `This feature is available and can be expanded normally. Click to see the details.`,
                    }),
                  ],
                }),
                (0, f.jsxs)(l, {
                  value: `disabled-1`,
                  disabled: !0,
                  children: [
                    (0, f.jsx)(s, { children: `Premium Feature (Locked)` }),
                    (0, f.jsx)(c, {
                      children: `This content is hidden behind a premium plan.`,
                    }),
                  ],
                }),
                (0, f.jsxs)(l, {
                  value: `enabled-2`,
                  children: [
                    (0, f.jsx)(s, { children: `Another Feature` }),
                    (0, f.jsx)(c, {
                      children: `This is another available feature you can interact with freely.`,
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      (0, f.jsx)(o, {
        label: `Lồng Nhau (Nested Accordions)`,
        description: `Nội dung bên trong có thể chứa một Accordion khác để tạo cấu trúc nhiều cấp.`,
        children: (0, f.jsxs)(u, {
          className: `w-full max-w-lg`,
          children: [
            (0, f.jsxs)(l, {
              value: `getting-started`,
              children: [
                (0, f.jsx)(s, { children: `Getting Started` }),
                (0, f.jsx)(c, {
                  children: (0, f.jsxs)(u, {
                    children: [
                      (0, f.jsxs)(l, {
                        value: `installation`,
                        children: [
                          (0, f.jsx)(s, { children: `Installation` }),
                          (0, f.jsx)(c, {
                            children: `Run npm install to add the component to your project.`,
                          }),
                        ],
                      }),
                      (0, f.jsxs)(l, {
                        value: `configuration`,
                        children: [
                          (0, f.jsx)(s, { children: `Configuration` }),
                          (0, f.jsx)(c, {
                            children: `Import and wrap your content with the Accordion component.`,
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
            (0, f.jsxs)(l, {
              value: `advanced`,
              children: [
                (0, f.jsx)(s, { children: `Advanced Usage` }),
                (0, f.jsx)(c, {
                  children: (0, f.jsxs)(u, {
                    children: [
                      (0, f.jsxs)(l, {
                        value: `controlled`,
                        children: [
                          (0, f.jsx)(s, { children: `Controlled Mode` }),
                          (0, f.jsx)(c, {
                            children: `Use the value and onValueChange props to control which items are open.`,
                          }),
                        ],
                      }),
                      (0, f.jsxs)(l, {
                        value: `animation`,
                        children: [
                          (0, f.jsx)(s, { children: `Custom Animation` }),
                          (0, f.jsx)(c, {
                            children: `Override transition duration and easing via className.`,
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
      (0, f.jsx)(o, {
        label: `FAQ Hoàn Chỉnh`,
        description: `Ví dụ một phần hỏi đáp FAQ hoàn chỉnh.`,
        children: (0, f.jsx)(u, {
          className: `w-full max-w-lg`,
          children: p.map(({ q: e, a: t }) =>
            (0, f.jsxs)(
              l,
              {
                value: e,
                children: [
                  (0, f.jsx)(s, { children: e }),
                  (0, f.jsx)(c, { children: t }),
                ],
              },
              e,
            ),
          ),
        }),
      }),
    ],
  });
}
export { g as default };
