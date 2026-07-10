import {
  Nn as e,
  a as t,
  cr as n,
  dr as r,
  i,
  n as a,
  qn as o,
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
var y = r(n(), 1),
  b = e(),
  x = y.forwardRef(
    (
      {
        title: e,
        description: t,
        icon: n,
        action: r,
        dismissible: i = !1,
        onDismiss: a,
        defaultOpen: s = !0,
        children: f,
        color: h = `info`,
        className: g,
        ...v
      },
      x,
    ) => {
      let [S, C] = y.useState(s);
      if (!S) return null;
      let w = () => {
        (C(!1), a?.());
      };
      return (0, b.jsxs)(m, {
        ref: x,
        color: h,
        className: o(
          `flex w-full flex-col gap-3 @sm/alert:flex-row @sm/alert:items-start`,
          i && `pr-8 data-[size=sm]:pr-7 data-[size=lg]:pr-10`,
          g,
        ),
        ...v,
        children: [
          (0, b.jsxs)(`div`, {
            className: `flex flex-1 items-start gap-3`,
            children: [
              n && (0, b.jsx)(u, { render: n, className: `mt-0.5 shrink-0` }),
              (0, b.jsxs)(`div`, {
                className: `flex-1 space-y-0.5`,
                children: [
                  e && (0, b.jsx)(l, { children: e }),
                  t && (0, b.jsx)(p, { children: t }),
                  f,
                ],
              }),
            ],
          }),
          r &&
            (0, b.jsx)(d, {
              className: `shrink-0 @sm/alert:ml-4`,
              children: r,
            }),
          i &&
            (0, b.jsx)(c, {
              variant: `ghost`,
              color: h,
              size: `sm`,
              className: `absolute right-1 top-1 p-0 size-6 group-data-[size=sm]/alert:size-5 group-data-[size=lg]/alert:size-7`,
              onClick: w,
              "aria-label": `Dismiss alert`,
              children: (0, b.jsx)(_, {
                className: `size-3.5 group-data-[size=sm]/alert:size-3 group-data-[size=lg]/alert:size-4`,
              }),
            }),
        ],
      });
    },
  );
x.displayName = `AlertPreset`;
function S() {
  let [e, n] = (0, y.useState)(`md`),
    [r, o] = (0, y.useState)(!0);
  return (0, b.jsxs)(`div`, {
    className: `space-y-10`,
    children: [
      (0, b.jsx)(i, {
        title: `Alert (Macro)`,
        description: `Phiên bản Preset của Alert hỗ trợ đóng gói logic tự động ẩn/tắt (dismissible) và code ngắn gọn hơn.`,
        children: (0, b.jsx)(v, {
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
      (0, b.jsxs)(t, {
        children: [
          (0, b.jsx)(`h3`, { children: `Khi nào nên dùng` }),
          (0, b.jsxs)(`p`, {
            children: [
              `Bản Macro (AlertPreset) là lựa chọn tuyệt vời khi bạn muốn hiển thị một cảnh báo ngắn gọn và cho phép người dùng tự tắt (dismiss) nó mà không phải tự viết logic `,
              (0, b.jsx)(`code`, { children: `useState` }),
              `. Nó đóng gói sẵn tất cả các thành phần (Icon, Title, Description, Close Button) vào một prop API duy nhất.`,
            ],
          }),
          (0, b.jsx)(`h3`, { children: `Controlled vs Uncontrolled` }),
          (0, b.jsxs)(`ul`, {
            children: [
              (0, b.jsxs)(`li`, {
                children: [
                  (0, b.jsx)(`b`, { children: `Uncontrolled (Mặc định):` }),
                  ` Nếu truyền `,
                  (0, b.jsx)(`code`, { children: `dismissible=true` }),
                  `, component tự quản lý state để tắt (ẩn) Alert khi click vào nút X.`,
                ],
              }),
              (0, b.jsxs)(`li`, {
                children: [
                  (0, b.jsx)(`b`, { children: `Controlled:` }),
                  ` Có thể kiểm soát state đóng/mở thông qua React state và truyền hàm vào `,
                  (0, b.jsx)(`code`, { children: `onDismiss` }),
                  `. Tuy nhiên thông thường Alert chỉ bị huỷ (unmount), nên nếu bạn kiểm soát thì hãy render nó có điều kiện bên ngoài.`,
                ],
              }),
            ],
          }),
        ],
      }),
      (0, b.jsxs)(a, {
        columns: 2,
        children: [
          (0, b.jsx)(s, {
            label: `Tiêu chuẩn (Standard)`,
            description: `Truyền props trực tiếp thay vì lồng children.`,
            fullWidth: !0,
            children: (0, b.jsx)(x, {
              color: `info`,
              size: e,
              title: `Có bản cập nhật mới`,
              description: `Phiên bản 2.0.4 đã sẵn sàng để tải xuống.`,
              icon: (0, b.jsx)(h, {}),
            }),
          }),
          (0, b.jsx)(s, {
            label: `Tự Đóng (Dismissible)`,
            description: `Thêm dismissible=true để hiển thị nút [X]. Thử bấm vào nút X bên dưới.`,
            fullWidth: !0,
            children: (0, b.jsx)(x, {
              color: `warning`,
              size: e,
              title: `Phiên bản sắp hết hạn`,
              description: `Phiên đăng nhập của bạn sẽ hết hạn trong 5 phút.`,
              icon: (0, b.jsx)(g, {}),
              dismissible: !0,
            }),
          }),
        ],
      }),
      (0, b.jsxs)(a, {
        columns: 2,
        children: [
          (0, b.jsx)(s, {
            label: `Controlled`,
            description: `Quản lý trạng thái đóng mở thông qua state bên ngoài bằng React (Conditional Rendering).`,
            fullWidth: !0,
            children: (0, b.jsxs)(`div`, {
              className: `flex w-full flex-col gap-3`,
              children: [
                (0, b.jsxs)(`div`, {
                  className: `flex items-center justify-between`,
                  children: [
                    (0, b.jsxs)(`p`, {
                      className: `text-xs text-muted-foreground`,
                      children: [
                        `State:`,
                        ` `,
                        (0, b.jsx)(`code`, {
                          className: `rounded bg-muted px-1.5 py-0.5 text-xs font-mono`,
                          children: r ? `true` : `false`,
                        }),
                      ],
                    }),
                    (0, b.jsx)(c, {
                      size: `sm`,
                      variant: `outline`,
                      className: `h-7 text-xs`,
                      onClick: () => o(!0),
                      disabled: r,
                      children: `Mở lại Alert`,
                    }),
                  ],
                }),
                r &&
                  (0, b.jsx)(x, {
                    color: `destructive`,
                    size: e,
                    title: `Bảo trì hệ thống`,
                    description: `Hệ thống sẽ tạm ngừng hoạt động để bảo trì vào lúc nửa đêm.`,
                    icon: (0, b.jsx)(g, {}),
                    dismissible: !0,
                    onDismiss: () => o(!1),
                  }),
              ],
            }),
          }),
          (0, b.jsx)(s, {
            label: `Nội Dung Phức Tạp (Complex Content)`,
            description: `Có thể truyền ReactNode hoặc thay thế toàn bộ bằng thẻ children.`,
            children: (0, b.jsx)(`div`, {
              className: `flex w-full flex-col gap-4 max-w-xl`,
              children: (0, b.jsx)(x, {
                color: `success`,
                size: e,
                title: `Thanh toán thành công`,
                icon: (0, b.jsx)(f, {}),
                dismissible: !0,
                action: (0, b.jsx)(c, {
                  size: `sm`,
                  variant: `outline`,
                  className: `h-7 px-2 text-xs`,
                  children: `Xem biên lai`,
                }),
                children: (0, b.jsx)(`p`, {
                  className: `text-sm mt-1 text-success/90`,
                  children: `Hoá đơn #1234 của bạn đã được thanh toán hoàn tất.`,
                }),
              }),
            }),
          }),
        ],
      }),
    ],
  });
}
export { S as default };
