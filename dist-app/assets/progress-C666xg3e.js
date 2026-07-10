import { Nn as e, i as t, n, r } from "./showcase-vJrKG7HA.js";
import { St as i } from "./index-Dk0REsC9.js";
var a = e();
function o() {
  return (0, a.jsxs)(`div`, {
    className: `space-y-10`,
    children: [
      (0, a.jsx)(t, {
        title: `Progress (Macro)`,
        description: `Một thành phần đặt trước hiển thị thanh tiến trình.`,
      }),
      (0, a.jsxs)(n, {
        columns: 1,
        children: [
          (0, a.jsx)(r, {
            label: `Standard`,
            description: `Thanh tiến trình cơ bản.`,
            children: (0, a.jsx)(`div`, {
              className: `w-full max-w-sm`,
              children: (0, a.jsx)(i, { value: 60 }),
            }),
          }),
          (0, a.jsx)(r, {
            label: `With Label`,
            description: `Hiển thị giá trị và nhãn tùy chỉnh tùy chọn.`,
            children: (0, a.jsx)(`div`, {
              className: `w-full max-w-sm`,
              children: (0, a.jsx)(i, {
                value: 85,
                label: `Uploading file...`,
                showValue: !0,
              }),
            }),
          }),
          (0, a.jsx)(r, {
            label: `Indeterminate`,
            description: `Khi giá trị không được cung cấp hoặc không được xác định.`,
            children: (0, a.jsx)(`div`, {
              className: `w-full max-w-sm`,
              children: (0, a.jsx)(i, {}),
            }),
          }),
        ],
      }),
    ],
  });
}
export { o as default };
