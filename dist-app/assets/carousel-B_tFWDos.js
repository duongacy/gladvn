import {
  Nn as e,
  cr as t,
  dr as n,
  i as r,
  n as i,
  qn as a,
  r as o,
} from "./showcase-vJrKG7HA.js";
import {
  a as s,
  i as c,
  n as l,
  o as u,
  r as d,
  t as f,
} from "./carousel-Cmm5w0KX.js";
var p = n(t(), 1),
  m = e(),
  h = p.forwardRef(
    (
      {
        items: e,
        showArrows: t = !0,
        showDots: n = !0,
        itemClassName: r,
        contentClassName: i,
        index: o,
        defaultIndex: h = 0,
        onIndexChange: g,
        ..._
      },
      v,
    ) => {
      let [y, b] = p.useState();
      (p.useEffect(() => {
        if (!y) return;
        let e = () => {
          g?.(y.selectedScrollSnap());
        };
        return (
          y.on(`select`, e),
          () => {
            y.off(`select`, e);
          }
        );
      }, [y, g]),
        p.useEffect(() => {
          !y || o === void 0 || (y.selectedScrollSnap() !== o && y.scrollTo(o));
        }, [y, o]));
      let x = _.orientation || `horizontal`,
        S = { ..._.opts, startIndex: h };
      return x === `vertical`
        ? (0, m.jsxs)(f, {
            ref: v,
            ..._,
            opts: S,
            setApi: b,
            orientation: `vertical`,
            children: [
              (0, m.jsx)(l, {
                className: a(`-mt-4`, i),
                children: e.map((e) =>
                  (0, m.jsx)(
                    c,
                    { className: a(`pt-4`, r), children: e.content },
                    e.id,
                  ),
                ),
              }),
              t &&
                (0, m.jsxs)(m.Fragment, {
                  children: [
                    (0, m.jsx)(u, {
                      className: `absolute z-10 -top-12 left-1/2 -translate-x-1/2 rotate-90`,
                    }),
                    (0, m.jsx)(s, {
                      className: `absolute z-10 -bottom-12 left-1/2 -translate-x-1/2 rotate-90`,
                    }),
                  ],
                }),
              n &&
                (0, m.jsx)(`div`, {
                  className: `mt-2 flex justify-center`,
                  children: (0, m.jsx)(d, {}),
                }),
            ],
          })
        : (0, m.jsxs)(f, {
            ref: v,
            ..._,
            opts: S,
            setApi: b,
            orientation: `horizontal`,
            children: [
              (0, m.jsx)(l, {
                className: a(`-ml-4`, i),
                children: e.map((e) =>
                  (0, m.jsx)(
                    c,
                    { className: a(`pl-4`, r), children: e.content },
                    e.id,
                  ),
                ),
              }),
              t &&
                (0, m.jsxs)(m.Fragment, {
                  children: [
                    (0, m.jsx)(u, {
                      className: `absolute z-10 inset-y-0 -left-12 my-auto`,
                    }),
                    (0, m.jsx)(s, {
                      className: `absolute z-10 inset-y-0 -right-12 my-auto`,
                    }),
                  ],
                }),
              n &&
                (0, m.jsx)(`div`, {
                  className: `mt-4 flex justify-center`,
                  children: (0, m.jsx)(d, {}),
                }),
            ],
          });
    },
  );
h.displayName = `CarouselPreset`;
function g() {
  let [e, t] = (0, p.useState)(0);
  return (0, m.jsxs)(`div`, {
    className: `w-full max-w-sm flex flex-col items-center gap-6`,
    children: [
      (0, m.jsx)(`div`, {
        className: `flex gap-2`,
        children: [0, 1, 2].map((n) =>
          (0, m.jsxs)(
            `button`,
            {
              onClick: () => t(n),
              "data-active": e === n ? `` : void 0,
              className: `px-4 py-2 text-sm font-medium rounded-md transition-colors bg-muted text-muted-foreground hover:bg-muted/80 data-active:bg-primary data-active:text-primary-foreground data-active:shadow-sm data-active:hover:bg-primary/90`,
              children: [`Slide `, n + 1],
            },
            n,
          ),
        ),
      }),
      (0, m.jsx)(`div`, {
        className: `w-full px-12`,
        children: (0, m.jsx)(h, {
          index: e,
          onIndexChange: t,
          showDots: !1,
          items: [
            {
              id: `c1`,
              content: (0, m.jsx)(`div`, {
                className: `p-1 border rounded-xl`,
                children: (0, m.jsx)(`div`, {
                  className: `flex aspect-square items-center justify-center p-6 bg-slate-100 dark:bg-slate-800 rounded-lg`,
                  children: (0, m.jsx)(`span`, {
                    className: `text-4xl font-semibold`,
                    children: `1`,
                  }),
                }),
              }),
            },
            {
              id: `c2`,
              content: (0, m.jsx)(`div`, {
                className: `p-1 border rounded-xl`,
                children: (0, m.jsx)(`div`, {
                  className: `flex aspect-square items-center justify-center p-6 bg-slate-100 dark:bg-slate-800 rounded-lg`,
                  children: (0, m.jsx)(`span`, {
                    className: `text-4xl font-semibold`,
                    children: `2`,
                  }),
                }),
              }),
            },
            {
              id: `c3`,
              content: (0, m.jsx)(`div`, {
                className: `p-1 border rounded-xl`,
                children: (0, m.jsx)(`div`, {
                  className: `flex aspect-square items-center justify-center p-6 bg-slate-100 dark:bg-slate-800 rounded-lg`,
                  children: (0, m.jsx)(`span`, {
                    className: `text-4xl font-semibold`,
                    children: `3`,
                  }),
                }),
              }),
            },
          ],
        }),
      }),
      (0, m.jsxs)(`p`, {
        className: `text-sm text-muted-foreground text-center`,
        children: [
          `Current Index in State: `,
          (0, m.jsx)(`span`, {
            className: `font-mono font-bold text-foreground`,
            children: e,
          }),
        ],
      }),
    ],
  });
}
function _() {
  return (0, m.jsxs)(`div`, {
    className: `space-y-10`,
    children: [
      (0, m.jsx)(r, {
        title: `Carousel (Macro)`,
        description: `Một thành phần cài sẵn bao gồm Carousel với các nội dung slide cơ bản.`,
      }),
      (0, m.jsxs)(i, {
        columns: 1,
        children: [
          (0, m.jsx)(o, {
            label: `Standard`,
            description: `Băng chuyền cơ bản có cầu trượt.`,
            children: (0, m.jsx)(`div`, {
              className: `w-full max-w-sm px-12`,
              children: (0, m.jsx)(h, {
                items: [
                  {
                    id: `std-1`,
                    content: (0, m.jsx)(`div`, {
                      className: `p-1 border rounded-xl`,
                      children: (0, m.jsx)(`div`, {
                        className: `flex aspect-square items-center justify-center p-6 bg-muted/20 rounded-lg`,
                        children: (0, m.jsx)(`span`, {
                          className: `text-4xl font-semibold`,
                          children: `1`,
                        }),
                      }),
                    }),
                  },
                  {
                    id: `std-2`,
                    content: (0, m.jsx)(`div`, {
                      className: `p-1 border rounded-xl`,
                      children: (0, m.jsx)(`div`, {
                        className: `flex aspect-square items-center justify-center p-6 bg-muted/20 rounded-lg`,
                        children: (0, m.jsx)(`span`, {
                          className: `text-4xl font-semibold`,
                          children: `2`,
                        }),
                      }),
                    }),
                  },
                  {
                    id: `std-3`,
                    content: (0, m.jsx)(`div`, {
                      className: `p-1 border rounded-xl`,
                      children: (0, m.jsx)(`div`, {
                        className: `flex aspect-square items-center justify-center p-6 bg-muted/20 rounded-lg`,
                        children: (0, m.jsx)(`span`, {
                          className: `text-4xl font-semibold`,
                          children: `3`,
                        }),
                      }),
                    }),
                  },
                ],
              }),
            }),
          }),
          (0, m.jsx)(o, {
            label: `Image Gallery`,
            description: `Sử dụng hình ảnh thực bên trong các slide băng chuyền.`,
            children: (0, m.jsx)(`div`, {
              className: `w-full max-w-lg px-12`,
              children: (0, m.jsx)(h, {
                items: [
                  {
                    id: `img-1`,
                    content: (0, m.jsx)(`img`, {
                      src: `https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=600&h=400&auto=format&fit=crop`,
                      alt: `Slide 1`,
                      className: `rounded-xl object-cover`,
                    }),
                  },
                  {
                    id: `img-2`,
                    content: (0, m.jsx)(`img`, {
                      src: `https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=600&h=400&auto=format&fit=crop`,
                      alt: `Slide 2`,
                      className: `rounded-xl object-cover`,
                    }),
                  },
                  {
                    id: `img-3`,
                    content: (0, m.jsx)(`img`, {
                      src: `https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=600&h=400&auto=format&fit=crop`,
                      alt: `Slide 3`,
                      className: `rounded-xl object-cover`,
                    }),
                  },
                ],
              }),
            }),
          }),
        ],
      }),
      (0, m.jsxs)(i, {
        columns: 2,
        children: [
          (0, m.jsx)(o, {
            label: `Loop Enabled`,
            description: `Vòng lặp vô hạn chỉ có dấu chấm (không có mũi tên).`,
            children: (0, m.jsx)(`div`, {
              className: `w-full max-w-sm`,
              children: (0, m.jsx)(h, {
                opts: { loop: !0 },
                showArrows: !1,
                items: [
                  {
                    id: `loop-1`,
                    content: (0, m.jsx)(`div`, {
                      className: `p-1 border rounded-xl`,
                      children: (0, m.jsx)(`div`, {
                        className: `flex aspect-square items-center justify-center p-6 bg-gradient-to-tr from-violet-500 to-purple-500 rounded-lg text-white`,
                        children: (0, m.jsx)(`span`, {
                          className: `text-4xl font-semibold`,
                          children: `1`,
                        }),
                      }),
                    }),
                  },
                  {
                    id: `loop-2`,
                    content: (0, m.jsx)(`div`, {
                      className: `p-1 border rounded-xl`,
                      children: (0, m.jsx)(`div`, {
                        className: `flex aspect-square items-center justify-center p-6 bg-gradient-to-tr from-pink-500 to-rose-500 rounded-lg text-white`,
                        children: (0, m.jsx)(`span`, {
                          className: `text-4xl font-semibold`,
                          children: `2`,
                        }),
                      }),
                    }),
                  },
                  {
                    id: `loop-3`,
                    content: (0, m.jsx)(`div`, {
                      className: `p-1 border rounded-xl`,
                      children: (0, m.jsx)(`div`, {
                        className: `flex aspect-square items-center justify-center p-6 bg-gradient-to-tr from-blue-500 to-cyan-500 rounded-lg text-white`,
                        children: (0, m.jsx)(`span`, {
                          className: `text-4xl font-semibold`,
                          children: `3`,
                        }),
                      }),
                    }),
                  },
                ],
              }),
            }),
          }),
          (0, m.jsx)(o, {
            label: `Arrows Only`,
            description: `Mũi tên điều hướng không có dấu chấm.`,
            children: (0, m.jsx)(`div`, {
              className: `w-full max-w-sm px-12`,
              children: (0, m.jsx)(h, {
                showDots: !1,
                items: [
                  {
                    id: `arr-1`,
                    content: (0, m.jsx)(`div`, {
                      className: `p-1 border rounded-xl`,
                      children: (0, m.jsx)(`div`, {
                        className: `flex aspect-square items-center justify-center p-6 bg-muted/20 rounded-lg`,
                        children: (0, m.jsx)(`span`, {
                          className: `text-4xl font-semibold`,
                          children: `A`,
                        }),
                      }),
                    }),
                  },
                  {
                    id: `arr-2`,
                    content: (0, m.jsx)(`div`, {
                      className: `p-1 border rounded-xl`,
                      children: (0, m.jsx)(`div`, {
                        className: `flex aspect-square items-center justify-center p-6 bg-muted/20 rounded-lg`,
                        children: (0, m.jsx)(`span`, {
                          className: `text-4xl font-semibold`,
                          children: `B`,
                        }),
                      }),
                    }),
                  },
                  {
                    id: `arr-3`,
                    content: (0, m.jsx)(`div`, {
                      className: `p-1 border rounded-xl`,
                      children: (0, m.jsx)(`div`, {
                        className: `flex aspect-square items-center justify-center p-6 bg-muted/20 rounded-lg`,
                        children: (0, m.jsx)(`span`, {
                          className: `text-4xl font-semibold`,
                          children: `C`,
                        }),
                      }),
                    }),
                  },
                ],
              }),
            }),
          }),
        ],
      }),
      (0, m.jsx)(i, {
        columns: 1,
        children: (0, m.jsx)(o, {
          label: `Controlled Mode`,
          description: `Điều khiển slide đang hoạt động bằng trạng thái React (index và onIndexChange).`,
          children: (0, m.jsx)(g, {}),
        }),
      }),
      (0, m.jsx)(i, {
        columns: 1,
        children: (0, m.jsx)(o, {
          label: `Vertical Orientation`,
          description: `Băng chuyền macro cuộn theo chiều dọc.`,
          children: (0, m.jsx)(`div`, {
            className: `w-full max-w-sm px-12 py-12 flex justify-center`,
            children: (0, m.jsx)(h, {
              className: `w-full`,
              orientation: `vertical`,
              contentClassName: `h-[300px]`,
              itemClassName: `basis-[250px]`,
              items: [
                {
                  id: `v1`,
                  content: (0, m.jsx)(`div`, {
                    className: `h-full w-full border rounded-xl flex items-center justify-center bg-muted/20 text-4xl font-semibold`,
                    children: `A`,
                  }),
                },
                {
                  id: `v2`,
                  content: (0, m.jsx)(`div`, {
                    className: `h-full w-full border rounded-xl flex items-center justify-center bg-muted/20 text-4xl font-semibold`,
                    children: `B`,
                  }),
                },
                {
                  id: `v3`,
                  content: (0, m.jsx)(`div`, {
                    className: `h-full w-full border rounded-xl flex items-center justify-center bg-muted/20 text-4xl font-semibold`,
                    children: `C`,
                  }),
                },
                {
                  id: `v4`,
                  content: (0, m.jsx)(`div`, {
                    className: `h-full w-full border rounded-xl flex items-center justify-center bg-muted/20 text-4xl font-semibold`,
                    children: `D`,
                  }),
                },
                {
                  id: `v5`,
                  content: (0, m.jsx)(`div`, {
                    className: `h-full w-full border rounded-xl flex items-center justify-center bg-muted/20 text-4xl font-semibold`,
                    children: `E`,
                  }),
                },
              ],
            }),
          }),
        }),
      }),
    ],
  });
}
export { _ as default };
