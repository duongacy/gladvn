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
import { t as l } from "./log-out-DTgzBuOZ.js";
import { t as u } from "./shield-alert-BU-i_lMw.js";
import { t as d } from "./x-Ddx7uGRS.js";
import {
  a as f,
  c as p,
  d as m,
  i as h,
  l as g,
  n as _,
  o as v,
  r as y,
  s as b,
  t as x,
  u as S,
} from "./alert-dialog-BFZR-0wx.js";
import { t as C } from "./select-preset-B6grUIWS.js";
var w = o(`trash`, [
    [`path`, { d: `M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`, key: `miytrc` }],
    [`path`, { d: `M3 6h18`, key: `d0wm0j` }],
    [`path`, { d: `M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`, key: `e791ji` }],
  ]),
  T = r(n(), 1),
  E = e();
function D() {
  let [e, n] = (0, T.useState)(`md`);
  return (0, E.jsxs)(`div`, {
    className: `space-y-10`,
    children: [
      (0, E.jsx)(i, {
        title: `Alert Dialog (Micro)`,
        description: `Các thành phần nguyên thủy (Primitives) để xây dựng Hộp thoại Cảnh báo.`,
        children: (0, E.jsx)(C, {
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
      (0, E.jsxs)(t, {
        children: [
          (0, E.jsx)(`h3`, {
            children: `Micro Component (Kiến trúc "Dumb" Primitive)`,
          }),
          (0, E.jsxs)(`p`, {
            children: [
              `Bắt đầu từ phiên bản này, các thành phần `,
              (0, E.jsx)(`code`, { children: `AlertDialogHeader` }),
              `, `,
              (0, E.jsx)(`code`, { children: `AlertDialogMedia` }),
              `, v.v. đã được loại bỏ hoàn toàn các logic CSS Grid phức tạp. Chúng hiện tại chỉ là các khối thẻ `,
              (0, E.jsx)(`code`, { children: `div` }),
              ` bọc Flexbox cơ bản, cho phép bạn tự do sắp xếp layout theo bất kỳ kiểu nào bạn muốn (ví dụ: bọc bằng thẻ div ngoài, chèn thêm input, thay đổi thứ tự...).`,
            ],
          }),
          (0, E.jsxs)(`p`, {
            children: [
              (0, E.jsx)(`strong`, { children: `Lưu ý:` }),
              ` Để phục vụ 99% Use Case thực tế (tự động layout Icon và Text), vui lòng sử dụng bản `,
              (0, E.jsx)(`b`, { children: `AlertDialog Preset (Macro)` }),
              `.`,
            ],
          }),
        ],
      }),
      (0, E.jsxs)(a, {
        columns: 2,
        children: [
          (0, E.jsx)(s, {
            label: `Sử dụng Cơ bản`,
            description: `Lắp ráp thủ công các khối Header, Title, Description, Footer.`,
            children: (0, E.jsxs)(x, {
              children: [
                (0, E.jsx)(m, {
                  render: (0, E.jsx)(c, {
                    variant: `outline`,
                    size: e,
                    children: `Mở Hộp Thoại Trắng`,
                  }),
                }),
                (0, E.jsxs)(f, {
                  size: e,
                  children: [
                    (0, E.jsxs)(p, {
                      children: [
                        (0, E.jsx)(S, { children: `Cấu trúc nguyên thuỷ` }),
                        (0, E.jsx)(v, {
                          children: `Không có bất kỳ layout "thần thánh" nào ép buộc ở đây. Các thành phần chỉ xếp dọc (flex-col) mặc định.`,
                        }),
                      ],
                    }),
                    (0, E.jsxs)(b, {
                      children: [
                        (0, E.jsx)(y, { size: e, children: `Huỷ bỏ` }),
                        (0, E.jsx)(_, { size: e, children: `Tiếp tục` }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          (0, E.jsx)(s, {
            label: `Tự Do Custom Layout`,
            description: `Bởi vì Micro component rất 'dumb', bạn có thể tự chèn thẻ div, custom flexbox để làm ra bất kỳ giao diện nào.`,
            children: (0, E.jsxs)(x, {
              children: [
                (0, E.jsx)(m, {
                  render: (0, E.jsx)(c, {
                    variant: `outline`,
                    color: `warning`,
                    size: e,
                    children: `Giao Diện Custom`,
                  }),
                }),
                (0, E.jsxs)(f, {
                  size: e,
                  className: `border-warning/50`,
                  children: [
                    (0, E.jsxs)(`div`, {
                      className: `flex flex-col-reverse items-center justify-center gap-4 py-4 sm:flex-row`,
                      children: [
                        (0, E.jsx)(`div`, {
                          className: `size-16 rounded-lg bg-warning/20 border border-warning`,
                        }),
                        (0, E.jsxs)(p, {
                          className: `sm:text-left`,
                          children: [
                            (0, E.jsx)(S, {
                              className: `text-warning`,
                              children: `Cảnh báo Tùy chỉnh`,
                            }),
                            (0, E.jsx)(v, {
                              children: `Icon đang nằm bên trái, hoặc có thể dời sang phải tuỳ ý bạn vì bạn đang kiểm soát HTML.`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, E.jsx)(b, {
                      className: `border-t-0 bg-transparent`,
                      children: (0, E.jsx)(y, {
                        size: e,
                        className: `w-full`,
                        children: `Tôi đã hiểu`,
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      (0, E.jsxs)(a, {
        columns: 2,
        children: [
          (0, E.jsx)(s, {
            label: `AlertDialogMedia`,
            description: `Khối chứa Icon/Image, tự scale theo size của AlertDialogContent.`,
            children: (0, E.jsxs)(x, {
              children: [
                (0, E.jsx)(m, {
                  render: (0, E.jsx)(c, {
                    variant: `outline`,
                    size: e,
                    children: `Với Media`,
                  }),
                }),
                (0, E.jsxs)(f, {
                  size: e,
                  children: [
                    (0, E.jsxs)(`div`, {
                      className: `flex flex-col gap-1.5 sm:flex-row sm:gap-4`,
                      children: [
                        (0, E.jsx)(g, {
                          className: `mx-auto mb-2 shrink-0 sm:mx-0 sm:mb-0`,
                          children: (0, E.jsx)(u, {
                            className: `text-warning`,
                          }),
                        }),
                        (0, E.jsxs)(p, {
                          children: [
                            (0, E.jsx)(S, { children: `Cảnh báo bảo mật` }),
                            (0, E.jsx)(v, {
                              children: `AlertDialogMedia là khối div chứa icon, tự động scale kích thước theo data-size của AlertDialogContent.`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, E.jsxs)(b, {
                      children: [
                        (0, E.jsx)(y, { size: e, children: `Huỷ` }),
                        (0, E.jsx)(_, {
                          size: e,
                          color: `warning`,
                          children: `Xác nhận`,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          (0, E.jsx)(s, {
            label: `AlertDialogClose`,
            description: `Primitive đóng dialog cơ bản, cho phép render bất kỳ element nào (không bị ép thành Button).`,
            children: (0, E.jsxs)(x, {
              children: [
                (0, E.jsx)(m, {
                  render: (0, E.jsx)(c, {
                    variant: `outline`,
                    size: e,
                    children: `Dialog Có Nút X`,
                  }),
                }),
                (0, E.jsxs)(f, {
                  size: e,
                  children: [
                    (0, E.jsxs)(h, {
                      className: `absolute top-3 right-3 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none`,
                      children: [
                        (0, E.jsx)(d, { className: `size-4` }),
                        (0, E.jsx)(`span`, {
                          className: `sr-only`,
                          children: `Đóng`,
                        }),
                      ],
                    }),
                    (0, E.jsxs)(p, {
                      children: [
                        (0, E.jsx)(S, { children: `AlertDialogClose` }),
                        (0, E.jsx)(v, {
                          children: `Khác với AlertDialogCancel (luôn render Button), AlertDialogClose là bare-bone — bạn có thể render icon X, link, hay bất kỳ thứ gì.`,
                        }),
                      ],
                    }),
                    (0, E.jsxs)(b, {
                      children: [
                        (0, E.jsx)(y, { size: e, children: `Huỷ` }),
                        (0, E.jsx)(_, { size: e, children: `Đồng ý` }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      (0, E.jsxs)(a, {
        columns: 2,
        children: [
          (0, E.jsx)(s, {
            label: `Action Colors`,
            description: `AlertDialogAction hỗ trợ prop color để thay đổi ngữ nghĩa hành động.`,
            children: (0, E.jsxs)(x, {
              children: [
                (0, E.jsx)(m, {
                  render: (0, E.jsx)(c, {
                    variant: `outline`,
                    color: `destructive`,
                    size: e,
                    children: `Xoá Tài Khoản`,
                  }),
                }),
                (0, E.jsxs)(f, {
                  size: e,
                  children: [
                    (0, E.jsxs)(`div`, {
                      className: `flex flex-col gap-1.5 sm:flex-row sm:gap-4`,
                      children: [
                        (0, E.jsx)(g, {
                          className: `mx-auto mb-2 shrink-0 sm:mx-0 sm:mb-0`,
                          children: (0, E.jsx)(w, {
                            className: `text-destructive`,
                          }),
                        }),
                        (0, E.jsxs)(p, {
                          children: [
                            (0, E.jsx)(S, {
                              children: `Xoá tài khoản vĩnh viễn?`,
                            }),
                            (0, E.jsx)(v, {
                              children: `Tất cả dữ liệu sẽ bị xoá và không thể khôi phục.`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, E.jsxs)(b, {
                      children: [
                        (0, E.jsx)(y, { size: e, children: `Huỷ` }),
                        (0, E.jsx)(_, {
                          size: e,
                          color: `destructive`,
                          children: `Xoá vĩnh viễn`,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          (0, E.jsx)(s, {
            label: `Action & Cancel Variants`,
            description: `Tuỳ chỉnh variant cho cả Action (soft) và Cancel (ghost).`,
            children: (0, E.jsxs)(x, {
              children: [
                (0, E.jsx)(m, {
                  render: (0, E.jsx)(c, {
                    variant: `outline`,
                    size: e,
                    children: `Custom Variants`,
                  }),
                }),
                (0, E.jsxs)(f, {
                  size: e,
                  children: [
                    (0, E.jsxs)(`div`, {
                      className: `flex flex-col gap-1.5 sm:flex-row sm:gap-4`,
                      children: [
                        (0, E.jsx)(g, {
                          className: `mx-auto mb-2 shrink-0 sm:mx-0 sm:mb-0`,
                          children: (0, E.jsx)(l, {}),
                        }),
                        (0, E.jsxs)(p, {
                          children: [
                            (0, E.jsx)(S, { children: `Đăng xuất?` }),
                            (0, E.jsx)(v, {
                              children: `Phiên đăng nhập của bạn sẽ kết thúc. Bạn cần nhập lại mật khẩu để quay lại.`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, E.jsxs)(b, {
                      children: [
                        (0, E.jsx)(y, {
                          size: e,
                          variant: `ghost`,
                          children: `Ở lại`,
                        }),
                        (0, E.jsx)(_, {
                          size: e,
                          variant: `soft`,
                          color: `info`,
                          children: `Đăng xuất`,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
export { D as default };
