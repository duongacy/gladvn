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
  c as s,
  i as c,
  l,
  n as u,
  o as d,
  r as f,
  s as p,
  t as m,
  u as h,
} from "./field-DA6j2oEX.js";
import { t as g } from "./select-preset-B6grUIWS.js";
import { t as _ } from "./input-CyfiqGPM.js";
var v = n(t(), 1),
  y = e();
function b() {
  let [e, t] = (0, v.useState)(`md`);
  return (0, y.jsxs)(`div`, {
    className: `space-y-10`,
    children: [
      (0, y.jsx)(r, {
        title: `Field`,
        description: `Thành phần trình bao bọc để quản lý trạng thái trường biểu mẫu, nhãn và lỗi.`,
        children: (0, y.jsx)(g, {
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
      (0, y.jsxs)(i, {
        columns: 2,
        children: [
          (0, y.jsx)(a, {
            label: `Basic`,
            description: `Trường tiêu chuẩn có nhãn và mô tả.`,
            children: (0, y.jsxs)(m, {
              size: e,
              className: `max-w-sm`,
              children: [
                (0, y.jsx)(d, { children: `Username` }),
                (0, y.jsx)(u, {
                  children: (0, y.jsx)(_, {
                    placeholder: `Enter username...`,
                    size: e,
                  }),
                }),
                (0, y.jsx)(f, {
                  children: `This is your public display name.`,
                }),
              ],
            }),
          }),
          (0, y.jsx)(a, {
            label: `With Error`,
            description: `Trường hiển thị lỗi xác thực.`,
            children: (0, y.jsxs)(m, {
              size: e,
              className: `max-w-sm`,
              "data-invalid": !0,
              children: [
                (0, y.jsx)(d, { children: `Username` }),
                (0, y.jsx)(u, {
                  children: (0, y.jsx)(_, {
                    defaultValue: `pedro`,
                    size: e,
                    "aria-invalid": !0,
                  }),
                }),
                (0, y.jsx)(c, { children: `Username is already taken.` }),
              ],
            }),
          }),
        ],
      }),
      (0, y.jsx)(a, {
        label: `Fieldset and Group`,
        description: `Nhóm nhiều lĩnh vực liên quan lại với nhau.`,
        children: (0, y.jsxs)(l, {
          className: `max-w-md border p-6 rounded-xl`,
          children: [
            (0, y.jsxs)(p, {
              children: [
                (0, y.jsx)(h, { children: `Personal Information` }),
                (0, y.jsx)(f, {
                  children: `Please enter your contact details.`,
                }),
              ],
            }),
            (0, y.jsx)(s, {}),
            (0, y.jsxs)(o, {
              children: [
                (0, y.jsxs)(m, {
                  size: e,
                  children: [
                    (0, y.jsx)(d, { children: `First Name` }),
                    (0, y.jsx)(u, {
                      children: (0, y.jsx)(_, { placeholder: `John`, size: e }),
                    }),
                  ],
                }),
                (0, y.jsxs)(m, {
                  size: e,
                  children: [
                    (0, y.jsx)(d, { children: `Last Name` }),
                    (0, y.jsx)(u, {
                      children: (0, y.jsx)(_, { placeholder: `Doe`, size: e }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      (0, y.jsx)(a, {
        label: `Orientations`,
        description: `Các trường có thể được bố trí theo chiều dọc, chiều ngang hoặc phản hồi dựa trên kích thước màn hình.`,
        children: (0, y.jsxs)(`div`, {
          className: `flex flex-col gap-8 w-full max-w-sm`,
          children: [
            (0, y.jsxs)(m, {
              size: e,
              orientation: `vertical`,
              children: [
                (0, y.jsx)(d, { children: `Vertical` }),
                (0, y.jsx)(u, {
                  children: (0, y.jsx)(_, {
                    placeholder: `Vertical field...`,
                    size: e,
                  }),
                }),
              ],
            }),
            (0, y.jsxs)(m, {
              size: e,
              orientation: `horizontal`,
              children: [
                (0, y.jsx)(d, { children: `Horizontal` }),
                (0, y.jsx)(u, {
                  children: (0, y.jsx)(_, {
                    placeholder: `Horizontal field...`,
                    size: e,
                  }),
                }),
              ],
            }),
            (0, y.jsxs)(m, {
              size: e,
              orientation: `responsive`,
              children: [
                (0, y.jsx)(d, { children: `Responsive` }),
                (0, y.jsx)(u, {
                  children: (0, y.jsx)(_, {
                    placeholder: `Stack on mobile, inline on md...`,
                    size: e,
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
export { b as default };
