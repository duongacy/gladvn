import {
  Nn as e,
  cr as t,
  dr as n,
  i as r,
  n as i,
  r as a,
} from "./showcase-vJrKG7HA.js";
import { n as o, o as s, r as c, t as l } from "./field-DA6j2oEX.js";
import { t as u } from "./textarea-BDNGe1-g.js";
import { a as d, n as f, o as p, t as m } from "./input-group-CEoiDdE-.js";
import { t as h } from "./mono-select-2fT-ju4g.js";
var g = n(t(), 1),
  _ = e();
function v() {
  let [e, t] = (0, g.useState)(`md`);
  return (0, _.jsxs)(`div`, {
    className: `space-y-10`,
    children: [
      (0, _.jsx)(r, {
        title: `Textarea`,
        description: `Phù hợp nhất cho nội dung dài, phản hồi hoặc tiểu sử.`,
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
        label: `Standard`,
        description: `Trường nhập văn bản nhiều dòng cơ bản với nhãn và mô tả.`,
        children: (0, _.jsx)(`div`, {
          className: `w-full max-w-sm`,
          children: (0, _.jsxs)(l, {
            size: e,
            children: [
              (0, _.jsx)(s, { htmlFor: `tf-textarea`, children: `Biography` }),
              (0, _.jsx)(c, {
                children: `A standard textarea for long strings.`,
              }),
              (0, _.jsx)(o, {
                children: (0, _.jsx)(u, {
                  id: `tf-textarea`,
                  size: e,
                  rows: 4,
                  placeholder: `Write something about yourself...`,
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
            label: `Auto Resize (field-sizing-content)`,
            description: `Tự động giãn chiều cao theo nội dung nhờ CSS field-sizing-content.`,
            children: (0, _.jsx)(`div`, {
              className: `w-full max-w-sm`,
              children: (0, _.jsxs)(l, {
                size: e,
                children: [
                  (0, _.jsx)(s, {
                    htmlFor: `tf-autoresize`,
                    children: `Notes`,
                  }),
                  (0, _.jsx)(o, {
                    children: (0, _.jsx)(u, {
                      id: `tf-autoresize`,
                      size: e,
                      placeholder: `Start typing and watch me grow...`,
                      defaultValue: `Line 1
Line 2
Line 3
Line 4
Line 5`,
                    }),
                  }),
                ],
              }),
            }),
          }),
          (0, _.jsx)(a, {
            label: `Invalid State`,
            description: `Trạng thái lỗi với viền đỏ và focus ring đỏ.`,
            children: (0, _.jsx)(`div`, {
              className: `w-full max-w-sm`,
              children: (0, _.jsxs)(l, {
                size: e,
                children: [
                  (0, _.jsx)(s, {
                    htmlFor: `tf-invalid`,
                    children: `Complaint`,
                  }),
                  (0, _.jsx)(o, {
                    children: (0, _.jsx)(u, {
                      id: `tf-invalid`,
                      size: e,
                      rows: 3,
                      "aria-invalid": !0,
                      placeholder: `Describe your issue...`,
                      defaultValue: `Too short`,
                    }),
                  }),
                ],
              }),
            }),
          }),
        ],
      }),
      (0, _.jsxs)(i, {
        columns: 2,
        children: [
          (0, _.jsx)(a, {
            label: `Disabled`,
            description: `Trạng thái vùng văn bản không tương tác.`,
            children: (0, _.jsx)(`div`, {
              className: `w-full max-w-sm`,
              children: (0, _.jsxs)(l, {
                size: e,
                children: [
                  (0, _.jsx)(s, {
                    htmlFor: `tf-disabled-textarea`,
                    children: `Disabled Biography`,
                  }),
                  (0, _.jsx)(o, {
                    children: (0, _.jsx)(u, {
                      id: `tf-disabled-textarea`,
                      disabled: !0,
                      size: e,
                      rows: 4,
                      value: `I am an AI assistant designed to help developers.`,
                    }),
                  }),
                ],
              }),
            }),
          }),
          (0, _.jsx)(a, {
            label: `InputGroup + Textarea`,
            description: `Textarea bên trong InputGroup với các phần bổ sung.`,
            children: (0, _.jsx)(`div`, {
              className: `w-full max-w-sm`,
              children: (0, _.jsxs)(l, {
                size: e,
                children: [
                  (0, _.jsx)(s, {
                    htmlFor: `tf-group-textarea`,
                    children: `Message`,
                  }),
                  (0, _.jsx)(o, {
                    children: (0, _.jsxs)(m, {
                      size: e,
                      className: `items-start`,
                      children: [
                        (0, _.jsx)(f, {
                          align: `inline-start`,
                          className: `mt-2`,
                          children: (0, _.jsx)(d, { children: `📝` }),
                        }),
                        (0, _.jsx)(p, {
                          id: `tf-group-textarea`,
                          rows: 3,
                          placeholder: `Write your message...`,
                        }),
                      ],
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
