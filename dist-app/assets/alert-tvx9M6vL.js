import {
  Nn as e,
  a as t,
  cr as n,
  dr as r,
  i,
  n as a,
  or as o,
  r as s,
  s as c,
} from "./showcase-vJrKG7HA.js";
import {
  a as l,
  i as u,
  n as d,
  o as f,
  r as p,
  t as m,
} from "./alert-Bw5GdEl3.js";
import { t as h } from "./info-DF5q0VCE.js";
import { t as g } from "./triangle-alert-CiHAIrN2.js";
import { t as _ } from "./x-Ddx7uGRS.js";
import { t as v } from "./select-preset-B6grUIWS.js";
var y = o(`circle-x`, [
    [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
    [`path`, { d: `m15 9-6 6`, key: `1uzhvr` }],
    [`path`, { d: `m9 9 6 6`, key: `z0biqf` }],
  ]),
  b = r(n(), 1),
  x = e();
function S() {
  let [e, n] = (0, b.useState)(`md`);
  return (0, x.jsxs)(`div`, {
    className: `space-y-10`,
    children: [
      (0, x.jsx)(i, {
        title: `Alert (Micro)`,
        description: `Hiển thị một thông báo nổi bật để thu hút sự chú ý của người dùng.`,
        children: (0, x.jsx)(v, {
          value: e,
          onValueChange: (e) => n(e),
          options: [
            { value: `sm`, label: `Size: sm` },
            { value: `md`, label: `Size: md` },
            { value: `lg`, label: `Size: lg` },
          ],
          className: `w-[120px] h-8 text-xs bg-background`,
        }),
      }),
      (0, x.jsxs)(t, {
        children: [
          (0, x.jsx)(`h3`, { children: `Khi nào nên dùng` }),
          (0, x.jsx)(`p`, {
            children: `Dùng để hiển thị một thông báo quan trọng thu hút sự chú ý của người dùng (ví dụ: lỗi, cảnh báo, hoặc thông báo thành công). Không nên dùng Alert cho các thông báo mang tính tạm thời tự biến mất (hãy dùng Toast/Sonner).`,
          }),
          (0, x.jsx)(`h3`, { children: `Micro vs Macro` }),
          (0, x.jsxs)(`p`, {
            children: [
              `Phiên bản `,
              (0, x.jsx)(`strong`, { children: `Micro` }),
              ` (`,
              (0, x.jsx)(`code`, { children: `Alert` }),
              `) là một Box thuần tuý không ép buộc layout. Bạn phải dùng class Flexbox (`,
              (0, x.jsx)(`code`, { children: `flex items-start` }),
              `) và thẻ `,
              (0, x.jsx)(`code`, { children: `div` }),
              ` bọc ngoài để tự cấu trúc (Pure Composition) giống như các ví dụ bên dưới.`,
            ],
          }),
          (0, x.jsxs)(`p`, {
            children: [
              `Phiên bản `,
              (0, x.jsx)(`strong`, { children: `Macro` }),
              ` (`,
              (0, x.jsx)(`code`, { children: `AlertPreset` }),
              `) đã được đóng gói sẵn layout Flexbox, chỉ cần truyền props (title, description, icon) vào để dùng ngay.`,
            ],
          }),
        ],
      }),
      (0, x.jsx)(s, {
        label: `Màu Sắc Ngữ Nghĩa (Semantic Colors)`,
        description: `Mỗi màu sắc truyền đạt một mức độ khẩn cấp hoặc ý nghĩa khác nhau.`,
        children: (0, x.jsxs)(`div`, {
          className: `flex w-full flex-col gap-4 max-w-xl`,
          children: [
            (0, x.jsxs)(m, {
              color: `info`,
              size: e,
              className: `flex items-start`,
              children: [
                (0, x.jsx)(u, {
                  render: (0, x.jsx)(h, {}),
                  className: `mt-0.5 shrink-0`,
                }),
                (0, x.jsxs)(`div`, {
                  className: `flex-1 space-y-0.5`,
                  children: [
                    (0, x.jsx)(l, { children: `Có bản cập nhật mới` }),
                    (0, x.jsx)(p, {
                      children: `Phiên bản 2.0.4 đã sẵn sàng để tải xuống. Hãy cập nhật để trải nghiệm tính năng mới.`,
                    }),
                  ],
                }),
              ],
            }),
            (0, x.jsxs)(m, {
              color: `success`,
              size: e,
              className: `flex items-start`,
              children: [
                (0, x.jsx)(u, {
                  render: (0, x.jsx)(f, {}),
                  className: `mt-0.5 shrink-0`,
                }),
                (0, x.jsxs)(`div`, {
                  className: `flex-1 space-y-0.5`,
                  children: [
                    (0, x.jsx)(l, { children: `Đã lưu thành công` }),
                    (0, x.jsx)(p, {
                      children: `Các thay đổi của bạn đã được đồng bộ lên đám mây.`,
                    }),
                  ],
                }),
              ],
            }),
            (0, x.jsxs)(m, {
              color: `warning`,
              size: e,
              className: `flex items-start`,
              children: [
                (0, x.jsx)(u, {
                  render: (0, x.jsx)(g, {}),
                  className: `mt-0.5 shrink-0`,
                }),
                (0, x.jsxs)(`div`, {
                  className: `flex-1 space-y-0.5`,
                  children: [
                    (0, x.jsx)(l, { children: `Phiên bản sắp hết hạn` }),
                    (0, x.jsx)(p, {
                      children: `Phiên đăng nhập của bạn sẽ hết hạn trong 5 phút nữa. Vui lòng lưu lại công việc.`,
                    }),
                  ],
                }),
              ],
            }),
            (0, x.jsxs)(m, {
              color: `destructive`,
              size: e,
              className: `flex items-start`,
              children: [
                (0, x.jsx)(u, {
                  render: (0, x.jsx)(y, {}),
                  className: `mt-0.5 shrink-0`,
                }),
                (0, x.jsxs)(`div`, {
                  className: `flex-1 space-y-0.5`,
                  children: [
                    (0, x.jsx)(l, { children: `Kết nối thất bại` }),
                    (0, x.jsx)(p, {
                      children: `Không thể kết nối đến cơ sở dữ liệu. Vui lòng kiểm tra lại đường truyền mạng.`,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      (0, x.jsxs)(a, {
        columns: 2,
        children: [
          (0, x.jsx)(s, {
            label: `Cơ bản (Basic)`,
            description: `Hiển thị Alert với màu sắc mặc định (info).`,
            fullWidth: !0,
            children: (0, x.jsx)(`div`, {
              className: `w-full max-w-xl`,
              children: (0, x.jsxs)(m, {
                size: e,
                className: `flex items-start`,
                children: [
                  (0, x.jsx)(u, {
                    render: (0, x.jsx)(h, {}),
                    className: `mt-0.5 shrink-0`,
                  }),
                  (0, x.jsxs)(`div`, {
                    className: `flex-1 space-y-0.5`,
                    children: [
                      (0, x.jsx)(l, { children: `Chú ý!` }),
                      (0, x.jsx)(p, {
                        children: `Bạn có thể thêm các component vào dự án bằng cách sử dụng CLI.`,
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
          (0, x.jsx)(s, {
            label: `Có Nút Hành Động (With Action)`,
            description: `Alert kèm theo một nút tắt (dismiss) được đặt ở góc trên bên phải.`,
            fullWidth: !0,
            children: (0, x.jsx)(`div`, {
              className: `w-full max-w-xl`,
              children: (0, x.jsxs)(m, {
                color: `info`,
                size: e,
                className: `flex items-start relative`,
                children: [
                  (0, x.jsx)(u, {
                    render: (0, x.jsx)(h, {}),
                    className: `mt-0.5 shrink-0`,
                  }),
                  (0, x.jsxs)(`div`, {
                    className: `flex-1 space-y-0.5 pr-8`,
                    children: [
                      (0, x.jsx)(l, { children: `Tính năng mới` }),
                      (0, x.jsx)(p, {
                        children: `Hãy khám phá trang thống kê dashboard hoàn toàn mới của chúng tôi.`,
                      }),
                    ],
                  }),
                  (0, x.jsx)(d, {
                    className: `absolute right-1 top-1`,
                    children: (0, x.jsx)(c, {
                      variant: `ghost`,
                      size: `sm`,
                      className: `size-6 p-0 group-data-[size=sm]/alert:size-5 group-data-[size=lg]/alert:size-7`,
                      children: (0, x.jsx)(_, {
                        className: `size-3.5 group-data-[size=sm]/alert:size-3 group-data-[size=lg]/alert:size-4`,
                      }),
                    }),
                  }),
                ],
              }),
            }),
          }),
        ],
      }),
      (0, x.jsx)(s, {
        label: `Tối Giản (Minimal)`,
        description: `Alert chỉ có nội dung mô tả, không có tiêu đề.`,
        children: (0, x.jsxs)(`div`, {
          className: `flex w-full flex-col gap-3 max-w-xl`,
          children: [
            (0, x.jsxs)(m, {
              color: `info`,
              size: e,
              className: `flex items-start`,
              children: [
                (0, x.jsx)(u, {
                  render: (0, x.jsx)(h, {}),
                  className: `mt-0.5 shrink-0`,
                }),
                (0, x.jsx)(p, {
                  className: `flex-1`,
                  children: `Bạn có thể thêm các component vào dự án bằng cách sử dụng CLI.`,
                }),
              ],
            }),
            (0, x.jsxs)(m, {
              color: `warning`,
              size: e,
              className: `flex items-start`,
              children: [
                (0, x.jsx)(u, {
                  render: (0, x.jsx)(g, {}),
                  className: `mt-0.5 shrink-0`,
                }),
                (0, x.jsx)(p, {
                  className: `flex-1`,
                  children: `Bản dùng thử của bạn sẽ hết hạn trong 3 ngày nữa.`,
                }),
              ],
            }),
          ],
        }),
      }),
      (0, x.jsx)(s, {
        label: `Chỉ Có Chữ (Text Only)`,
        description: `Alert đơn giản không có icon — layout tự nhiên.`,
        children: (0, x.jsxs)(`div`, {
          className: `flex w-full flex-col gap-3 max-w-xl`,
          children: [
            (0, x.jsxs)(m, {
              color: `success`,
              size: e,
              className: `flex flex-col gap-0.5`,
              children: [
                (0, x.jsx)(l, { children: `Thanh toán thành công` }),
                (0, x.jsx)(p, {
                  children: `Hoá đơn #1234 của bạn đã được thanh toán hoàn tất.`,
                }),
              ],
            }),
            (0, x.jsxs)(m, {
              color: `destructive`,
              size: e,
              className: `flex flex-col gap-0.5`,
              children: [
                (0, x.jsx)(l, { children: `Tài khoản bị khoá` }),
                (0, x.jsx)(p, {
                  children: `Vui lòng liên hệ với bộ phận hỗ trợ để mở khoá tài khoản.`,
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
export { S as default };
