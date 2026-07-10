import {
  Nn as e,
  cr as t,
  dr as n,
  i as r,
  n as i,
  r as a,
} from "./showcase-vJrKG7HA.js";
import { n as o, o as s, r as c, t as l } from "./field-DA6j2oEX.js";
import { t as u } from "./input-CyfiqGPM.js";
import { a as d, i as f, n as p, t as m } from "./input-group-CEoiDdE-.js";
import { t as h } from "./mono-select-2fT-ju4g.js";
var g = n(t(), 1),
  _ = e();
function v() {
  let [e, t] = (0, g.useState)(`md`);
  return (0, _.jsxs)(`div`, {
    className: `space-y-10`,
    children: [
      (0, _.jsx)(r, {
        title: `Input`,
        description: `Trường văn bản để ghi lại thông tin đầu vào của người dùng dạng ngắn.`,
        children: (0, _.jsx)(h, {
          value: e,
          onValueChange: (e) => t(e),
          options: [
            { value: `sm`, label: `Small` },
            { value: `md`, label: `Medium` },
            { value: `lg`, label: `Large` },
          ],
        }),
      }),
      (0, _.jsx)(a, {
        label: `Default`,
        description: `Nhập văn bản cơ bản với nhãn và mô tả.`,
        children: (0, _.jsx)(`div`, {
          className: `w-full max-w-sm`,
          children: (0, _.jsxs)(l, {
            size: e,
            children: [
              (0, _.jsx)(s, { htmlFor: `tf-input`, children: `Email` }),
              (0, _.jsx)(c, { children: `We'll never share your email.` }),
              (0, _.jsx)(o, {
                children: (0, _.jsx)(u, {
                  id: `tf-input`,
                  size: e,
                  placeholder: `you@example.com`,
                }),
              }),
            ],
          }),
        }),
      }),
      (0, _.jsxs)(i, {
        columns: 2,
        children: [
          (0, _.jsx)(a, {
            label: `Input Group`,
            description: `Đầu vào với các phần bổ sung tiền tố và hậu tố.`,
            children: (0, _.jsx)(`div`, {
              className: `w-full max-w-sm`,
              children: (0, _.jsxs)(l, {
                size: e,
                children: [
                  (0, _.jsx)(s, { htmlFor: `tf-group`, children: `Website` }),
                  (0, _.jsx)(o, {
                    children: (0, _.jsxs)(m, {
                      size: e,
                      children: [
                        (0, _.jsx)(p, {
                          children: (0, _.jsx)(d, { children: `https://` }),
                        }),
                        (0, _.jsx)(f, {
                          id: `tf-group`,
                          placeholder: `example`,
                        }),
                        (0, _.jsx)(p, {
                          children: (0, _.jsx)(d, { children: `.com` }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          }),
          (0, _.jsx)(a, {
            label: `Disabled`,
            description: `Trạng thái đầu vào không tương tác.`,
            children: (0, _.jsx)(`div`, {
              className: `w-full max-w-sm`,
              children: (0, _.jsxs)(l, {
                size: e,
                children: [
                  (0, _.jsx)(s, { htmlFor: `tf-disabled`, children: `Locked` }),
                  (0, _.jsx)(o, {
                    children: (0, _.jsx)(u, {
                      id: `tf-disabled`,
                      disabled: !0,
                      size: e,
                      value: `Readonly content`,
                    }),
                  }),
                ],
              }),
            }),
          }),
        ],
      }),
    ],
  });
}
export { v as default };
