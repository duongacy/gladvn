import {
  Nn as e,
  cr as t,
  dr as n,
  i as r,
  n as i,
  r as a,
} from "./showcase-vJrKG7HA.js";
import {
  a as o,
  i as s,
  n as c,
  o as l,
  r as u,
  t as d,
} from "./slider-preset-D1Mdnga8.js";
import { n as f, o as p, r as m, t as h } from "./field-DA6j2oEX.js";
import { t as g } from "./select-preset-B6grUIWS.js";
var _ = n(t(), 1),
  v = e();
function y() {
  let [e, t] = (0, _.useState)(`md`);
  return (0, v.jsxs)(`div`, {
    className: `space-y-10`,
    children: [
      (0, v.jsx)(r, {
        title: `Slider`,
        description: `Đầu vào trong đó người dùng chọn một giá trị trong một phạm vi nhất định.`,
        children: (0, v.jsx)(g, {
          value: e,
          onValueChange: (e) => t(e),
          options: [
            { value: `sm`, label: `Size: sm` },
            { value: `md`, label: `Size: md` },
            { value: `lg`, label: `Size: lg` },
          ],
          className: `w-[120px] h-8 text-xs bg-background`,
        }),
      }),
      (0, v.jsxs)(i, {
        columns: 2,
        children: [
          (0, v.jsx)(a, {
            label: `Standard`,
            description: `Lựa chọn phạm vi số cơ bản.`,
            children: (0, v.jsx)(`div`, {
              className: `w-full max-w-sm`,
              children: (0, v.jsxs)(h, {
                size: e,
                children: [
                  (0, v.jsx)(p, { children: `Volume` }),
                  (0, v.jsx)(f, {
                    children: (0, v.jsx)(d, {
                      size: e,
                      defaultValue: [60],
                      max: 100,
                      step: 1,
                    }),
                  }),
                  (0, v.jsx)(m, {
                    children: `Adjust the media volume globally.`,
                  }),
                ],
              }),
            }),
          }),
          (0, v.jsx)(a, {
            label: `Range`,
            description: `Chọn một phạm vi bằng hai ngón tay cái.`,
            children: (0, v.jsx)(`div`, {
              className: `w-full max-w-sm`,
              children: (0, v.jsxs)(h, {
                size: e,
                children: [
                  (0, v.jsx)(p, { children: `Price Range` }),
                  (0, v.jsx)(f, {
                    children: (0, v.jsx)(d, {
                      size: e,
                      defaultValue: [20, 80],
                      max: 100,
                      step: 1,
                    }),
                  }),
                  (0, v.jsx)(m, { children: `Filter items by price limits.` }),
                ],
              }),
            }),
          }),
        ],
      }),
      (0, v.jsx)(a, {
        label: `Compositional Usage`,
        description: `Xây dựng thanh trượt bằng cách sử dụng các nguyên hàm cơ bản của nó để có được khả năng kiểm soát tối ưu.`,
        children: (0, v.jsx)(`div`, {
          className: `w-full max-w-sm`,
          children: (0, v.jsx)(c, {
            size: e,
            defaultValue: [40],
            max: 100,
            step: 1,
            children: (0, v.jsxs)(u, {
              children: [
                (0, v.jsx)(l, { children: (0, v.jsx)(s, {}) }),
                (0, v.jsx)(o, {}),
              ],
            }),
          }),
        }),
      }),
      (0, v.jsx)(a, {
        label: `Disabled`,
        description: `Trạng thái thanh trượt không tương tác.`,
        children: (0, v.jsx)(`div`, {
          className: `w-full max-w-sm`,
          children: (0, v.jsxs)(h, {
            size: e,
            children: [
              (0, v.jsx)(p, { children: `Fixed Value` }),
              (0, v.jsx)(f, {
                children: (0, v.jsx)(d, {
                  disabled: !0,
                  size: e,
                  defaultValue: [40],
                  max: 100,
                  step: 1,
                }),
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
export { y as default };
