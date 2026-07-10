import { Nn as e, i as t, r as n } from "./showcase-vJrKG7HA.js";
import { t as r } from "./index-Dk0REsC9.js";
var i = e();
function a() {
  return (0, i.jsxs)(`div`, {
    className: `space-y-10`,
    children: [
      (0, i.jsx)(t, {
        title: `Separator`,
        description: `Phân tách nội dung một cách trực quan hoặc ngữ nghĩa.`,
      }),
      (0, i.jsx)(n, {
        label: `Default`,
        description: `Dải phân cách ngang và dọc.`,
        children: (0, i.jsxs)(`div`, {
          className: `w-full max-w-sm`,
          children: [
            (0, i.jsxs)(`div`, {
              className: `space-y-1`,
              children: [
                (0, i.jsx)(`h4`, {
                  className: `text-sm font-medium leading-none`,
                  children: `Radix Primitives`,
                }),
                (0, i.jsx)(`p`, {
                  className: `text-sm text-muted-foreground`,
                  children: `An open-source UI component library.`,
                }),
              ],
            }),
            (0, i.jsx)(r, { className: `my-4` }),
            (0, i.jsxs)(`div`, {
              className: `flex h-5 items-center space-x-4 text-sm`,
              children: [
                (0, i.jsx)(`div`, { children: `Blog` }),
                (0, i.jsx)(r, { orientation: `vertical` }),
                (0, i.jsx)(`div`, { children: `Docs` }),
                (0, i.jsx)(r, { orientation: `vertical` }),
                (0, i.jsx)(`div`, { children: `Source` }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
export { a as default };
