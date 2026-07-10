import { Nn as e, i as t, r as n, s as r } from "./showcase-vJrKG7HA.js";
import { t as i } from "./input-CyfiqGPM.js";
import {
  a,
  c as o,
  i as s,
  n as c,
  o as l,
  r as u,
  s as d,
  t as f,
} from "./sheet-DBXwfdc_.js";
var p = e();
function m() {
  return (0, p.jsxs)(`div`, {
    className: `space-y-10`,
    children: [
      (0, p.jsx)(t, {
        title: `Sheet`,
        description: `Mở rộng thành phần Hộp thoại để hiển thị nội dung bổ sung cho nội dung chính của màn hình.`,
      }),
      (0, p.jsx)(n, {
        label: `Directions`,
        description: `Tấm có thể trượt từ bất kỳ cạnh nào.`,
        children: (0, p.jsx)(`div`, {
          className: `grid grid-cols-2 gap-2`,
          children: [`top`, `right`, `bottom`, `left`].map((e) =>
            (0, p.jsxs)(
              f,
              {
                children: [
                  (0, p.jsx)(o, {
                    render: (0, p.jsx)(r, {
                      variant: `outline`,
                      className: `capitalize`,
                    }),
                    children: e,
                  }),
                  (0, p.jsxs)(u, {
                    side: e,
                    children: [
                      (0, p.jsxs)(l, {
                        children: [
                          (0, p.jsx)(d, { children: `Edit profile` }),
                          (0, p.jsx)(s, {
                            children: `Make changes to your profile here. Click save when you're done.`,
                          }),
                        ],
                      }),
                      (0, p.jsx)(`div`, {
                        className: `grid gap-4 py-4`,
                        children: (0, p.jsxs)(`div`, {
                          className: `grid grid-cols-4 items-center gap-4`,
                          children: [
                            (0, p.jsx)(`span`, {
                              className: `text-right text-sm`,
                              children: `Name`,
                            }),
                            (0, p.jsx)(i, {
                              id: `name`,
                              defaultValue: `Pedro Duarte`,
                              className: `col-span-3`,
                            }),
                          ],
                        }),
                      }),
                      (0, p.jsxs)(a, {
                        children: [
                          (0, p.jsx)(c, {
                            render: (0, p.jsx)(r, { variant: `outline` }),
                            children: `Cancel`,
                          }),
                          (0, p.jsx)(r, {
                            type: `submit`,
                            children: `Save changes`,
                          }),
                        ],
                      }),
                    ],
                  }),
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
export { m as default };
