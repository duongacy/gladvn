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
  s as d,
  t as f,
} from "./pagination-Bti8DTWx.js";
var p = n(t(), 1),
  m = e();
function h(e, t, n = 1) {
  if (n + 5 >= t) return Array.from({ length: t }, (e, t) => t + 1);
  let r = Math.max(e - n, 1),
    i = Math.min(e + n, t),
    a = r > 2,
    o = i < t - 2,
    s = t;
  if (!a && o) {
    let e = 3 + 2 * n;
    return [...Array.from({ length: e }, (e, t) => t + 1), `...`, t];
  }
  if (a && !o) {
    let e = 3 + 2 * n;
    return [1, `...`, ...Array.from({ length: e }, (n, r) => t - e + r + 1)];
  }
  return a && o
    ? [
        1,
        `...`,
        ...Array.from({ length: i - r + 1 }, (e, t) => r + t),
        `...`,
        s,
      ]
    : [];
}
var g = p.forwardRef(
  (
    {
      currentPage: e,
      totalPages: t,
      onPageChange: n,
      siblingCount: r = 1,
      ...i
    },
    a,
  ) => {
    let p = h(e, t, r);
    return (0, m.jsx)(f, {
      ref: a,
      ...i,
      children: (0, m.jsxs)(c, {
        children: [
          (0, m.jsx)(s, {
            children: (0, m.jsx)(d, {
              href: `#`,
              onClick: (t) => {
                (t.preventDefault(), e > 1 && n?.(e - 1));
              },
              "aria-disabled": e === 1,
              className: e === 1 ? `pointer-events-none opacity-50` : ``,
            }),
          }),
          p.map((t, r) =>
            t === `...`
              ? (0, m.jsx)(s, { children: (0, m.jsx)(u, {}) }, `ellipsis-${r}`)
              : (0, m.jsx)(
                  s,
                  {
                    children: (0, m.jsx)(o, {
                      href: `#`,
                      isActive: t === e,
                      onClick: (e) => {
                        (e.preventDefault(), n?.(t));
                      },
                      children: t,
                    }),
                  },
                  `page-${t}`,
                ),
          ),
          (0, m.jsx)(s, {
            children: (0, m.jsx)(l, {
              href: `#`,
              onClick: (r) => {
                (r.preventDefault(), e < t && n?.(e + 1));
              },
              "aria-disabled": e === t,
              className: e === t ? `pointer-events-none opacity-50` : ``,
            }),
          }),
        ],
      }),
    });
  },
);
g.displayName = `PaginationPreset`;
function _() {
  return (0, m.jsxs)(`div`, {
    className: `space-y-10`,
    children: [
      (0, m.jsx)(r, {
        title: `Pagination (Macro)`,
        description: `Một thành phần đặt trước hiển thị phân trang dựa trên các trang hiện tại và tổng số trang.`,
      }),
      (0, m.jsxs)(i, {
        columns: 1,
        children: [
          (0, m.jsx)(a, {
            label: `Standard`,
            description: `Phân trang cơ bản.`,
            children: (0, m.jsx)(g, { currentPage: 4, totalPages: 10 }),
          }),
          (0, m.jsx)(a, {
            label: `Many Pages`,
            description: `Phân trang với số lượng lớn trang hiển thị hình elip ở cả hai bên.`,
            children: (0, m.jsx)(g, { currentPage: 50, totalPages: 100 }),
          }),
          (0, m.jsx)(a, {
            label: `First Page`,
            description: `Khi ở trang đầu tiên, nút trước đó bị tắt.`,
            children: (0, m.jsx)(g, { currentPage: 1, totalPages: 5 }),
          }),
          (0, m.jsx)(a, {
            label: `Last Page`,
            description: `Khi ở trang cuối cùng, nút tiếp theo bị tắt.`,
            children: (0, m.jsx)(g, { currentPage: 5, totalPages: 5 }),
          }),
        ],
      }),
    ],
  });
}
export { _ as default };
