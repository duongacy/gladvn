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
  d as c,
  f as l,
  l as u,
  m as d,
  o as f,
  p,
  s as m,
  u as h,
} from "./index-Dk0REsC9.js";
import { n as g, o as _, r as v, t as y } from "./field-DA6j2oEX.js";
import { t as b } from "./select-preset-B6grUIWS.js";
var x = n(t(), 1),
  S = e();
function C() {
  let [e, t] = (0, x.useState)(`md`);
  return (0, S.jsxs)(`div`, {
    className: `space-y-10`,
    children: [
      (0, S.jsx)(r, {
        title: `Select`,
        description: `Hiển thị danh sách các tùy chọn để người dùng chọn—được kích hoạt bằng một nút.`,
        children: (0, S.jsx)(b, {
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
      (0, S.jsxs)(i, {
        columns: 2,
        children: [
          (0, S.jsx)(a, {
            label: `Standard`,
            description: `Chọn thả xuống tùy chỉnh.`,
            children: (0, S.jsx)(`div`, {
              className: `w-full max-w-sm`,
              children: (0, S.jsxs)(y, {
                size: e,
                children: [
                  (0, S.jsx)(_, { children: `Framework` }),
                  (0, S.jsx)(g, {
                    children: (0, S.jsxs)(o, {
                      items: {
                        next: `Next.js`,
                        vite: `Vite`,
                        remix: `Remix`,
                        astro: `Astro`,
                      },
                      children: [
                        (0, S.jsx)(p, {
                          size: e,
                          children: (0, S.jsx)(d, {
                            placeholder: `Pick a framework...`,
                          }),
                        }),
                        (0, S.jsxs)(f, {
                          children: [
                            (0, S.jsx)(c, {}),
                            (0, S.jsx)(s, {
                              value: `next`,
                              children: `Next.js`,
                            }),
                            (0, S.jsx)(s, { value: `vite`, children: `Vite` }),
                            (0, S.jsx)(s, {
                              value: `remix`,
                              children: `Remix`,
                            }),
                            (0, S.jsx)(s, {
                              value: `astro`,
                              children: `Astro`,
                            }),
                            (0, S.jsx)(h, {}),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, S.jsx)(v, {
                    children: `Choose your preferred tech stack.`,
                  }),
                ],
              }),
            }),
          }),
          (0, S.jsx)(a, {
            label: `Grouped`,
            description: `Các tùy chọn được nhóm trực quan bằng nhãn.`,
            children: (0, S.jsx)(`div`, {
              className: `w-full max-w-sm`,
              children: (0, S.jsxs)(y, {
                size: e,
                children: [
                  (0, S.jsx)(_, { children: `Fruit` }),
                  (0, S.jsx)(g, {
                    children: (0, S.jsxs)(o, {
                      items: {
                        orange: `Orange`,
                        lemon: `Lemon`,
                        strawberry: `Strawberry`,
                        blueberry: `Blueberry`,
                      },
                      children: [
                        (0, S.jsx)(p, {
                          size: e,
                          children: (0, S.jsx)(d, {
                            placeholder: `Pick a fruit...`,
                          }),
                        }),
                        (0, S.jsxs)(f, {
                          children: [
                            (0, S.jsxs)(m, {
                              children: [
                                (0, S.jsx)(u, { children: `Citrus` }),
                                (0, S.jsx)(s, {
                                  value: `orange`,
                                  children: `Orange`,
                                }),
                                (0, S.jsx)(s, {
                                  value: `lemon`,
                                  children: `Lemon`,
                                }),
                              ],
                            }),
                            (0, S.jsx)(l, {}),
                            (0, S.jsxs)(m, {
                              children: [
                                (0, S.jsx)(u, { children: `Berry` }),
                                (0, S.jsx)(s, {
                                  value: `strawberry`,
                                  children: `Strawberry`,
                                }),
                                (0, S.jsx)(s, {
                                  value: `blueberry`,
                                  children: `Blueberry`,
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
            }),
          }),
        ],
      }),
    ],
  });
}
export { C as default };
