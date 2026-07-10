import {
  Nn as e,
  cr as t,
  dr as n,
  i as r,
  n as i,
  r as a,
} from "./showcase-vJrKG7HA.js";
import { n as o, o as s, r as c, t as l } from "./field-DA6j2oEX.js";
import { t as u } from "./select-preset-B6grUIWS.js";
import { i as d, n as f, r as p, t as m } from "./input-otp-B9GBZ5w7.js";
var h = n(t(), 1),
  g = e();
function _() {
  let [e, t] = (0, h.useState)(`md`);
  return (0, g.jsxs)(`div`, {
    className: `space-y-10`,
    children: [
      (0, g.jsx)(r, {
        title: `Input OTP`,
        description: `Thành phần mật khẩu một lần có thể truy cập được với chức năng sao chép và dán.`,
        children: (0, g.jsx)(u, {
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
      (0, g.jsxs)(i, {
        columns: 2,
        children: [
          (0, g.jsx)(a, {
            label: `Standard`,
            description: `Mã xác minh tiêu chuẩn gồm 6 chữ số.`,
            children: (0, g.jsxs)(l, {
              size: e,
              children: [
                (0, g.jsx)(s, {
                  htmlFor: `tf-otp-0`,
                  children: `Verification Code`,
                }),
                (0, g.jsx)(c, {
                  children: `Enter the 6-digit code sent to your phone number.`,
                }),
                (0, g.jsx)(o, {
                  children: (0, g.jsx)(m, {
                    id: `tf-otp-0`,
                    size: e,
                    maxLength: 6,
                    children: (0, g.jsxs)(f, {
                      children: [
                        (0, g.jsx)(d, { index: 0 }),
                        (0, g.jsx)(d, { index: 1 }),
                        (0, g.jsx)(d, { index: 2 }),
                        (0, g.jsx)(d, { index: 3 }),
                        (0, g.jsx)(d, { index: 4 }),
                        (0, g.jsx)(d, { index: 5 }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          }),
          (0, g.jsx)(a, {
            label: `Separated Format`,
            description: `OTP có dấu phân cách trực quan.`,
            children: (0, g.jsxs)(l, {
              size: e,
              children: [
                (0, g.jsx)(s, {
                  htmlFor: `tf-otp-1`,
                  children: `Security Key`,
                }),
                (0, g.jsx)(c, {
                  children: `Enter your two-factor recovery key.`,
                }),
                (0, g.jsx)(o, {
                  children: (0, g.jsxs)(m, {
                    id: `tf-otp-1`,
                    size: e,
                    maxLength: 6,
                    children: [
                      (0, g.jsxs)(f, {
                        children: [
                          (0, g.jsx)(d, { index: 0 }),
                          (0, g.jsx)(d, { index: 1 }),
                          (0, g.jsx)(d, { index: 2 }),
                        ],
                      }),
                      (0, g.jsx)(p, {}),
                      (0, g.jsxs)(f, {
                        children: [
                          (0, g.jsx)(d, { index: 3 }),
                          (0, g.jsx)(d, { index: 4 }),
                          (0, g.jsx)(d, { index: 5 }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
export { _ as default };
