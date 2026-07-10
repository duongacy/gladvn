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
  o as c,
  r as l,
  s as u,
  t as d,
} from "./breadcrumb-BRF-eS1I.js";
var f = n(t(), 1),
  p = e(),
  m = f.forwardRef(({ items: e, ...t }, n) =>
    (0, p.jsx)(d, {
      ref: n,
      ...t,
      children: (0, p.jsx)(o, {
        children: e.map((t, n) => {
          let r = n === e.length - 1,
            i = r || !t.href;
          return (0, p.jsxs)(
            f.Fragment,
            {
              children: [
                (0, p.jsx)(l, {
                  children: i
                    ? (0, p.jsx)(c, { children: t.label })
                    : (0, p.jsx)(s, { href: t.href, children: t.label }),
                }),
                !r && (0, p.jsx)(u, {}),
              ],
            },
            n,
          );
        }),
      }),
    }),
  );
m.displayName = `BreadcrumbPreset`;
function h() {
  return (0, p.jsxs)(`div`, {
    className: `space-y-10`,
    children: [
      (0, p.jsx)(r, {
        title: `Breadcrumb (Macro)`,
        description: `Một thành phần đặt trước hiển thị đường dẫn đường dẫn từ một mảng phẳng.`,
      }),
      (0, p.jsxs)(i, {
        columns: 1,
        children: [
          (0, p.jsx)(a, {
            label: `Standard`,
            description: `Breadcrumb với các liên kết và văn bản.`,
            children: (0, p.jsx)(m, {
              items: [
                { label: `Home`, href: `/` },
                { label: `Components`, href: `/components` },
                { label: `Breadcrumb` },
              ],
            }),
          }),
          (0, p.jsx)(a, {
            label: `Deep Navigation`,
            description: `Đường dẫn breadcrumb dài hơn điển hình cho các trang lồng nhau.`,
            children: (0, p.jsx)(m, {
              items: [
                { label: `Dashboard`, href: `/dashboard` },
                { label: `Settings`, href: `/settings` },
                { label: `Account`, href: `/settings/account` },
                { label: `Billing`, href: `/settings/account/billing` },
                { label: `Invoices` },
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
export { h as default };
