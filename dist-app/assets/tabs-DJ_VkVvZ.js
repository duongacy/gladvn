import {
  Nn as e,
  d as t,
  f as n,
  i as r,
  m as i,
  n as a,
  p as o,
  r as s,
} from "./showcase-vJrKG7HA.js";
import { t as c } from "./bell-osa514pj.js";
import { t as l } from "./credit-card-CrNa2qum.js";
import { t as u } from "./settings-B7j5T5VV.js";
import { t as d } from "./user-B_lk4UZ_.js";
var f = e();
function p() {
  return (0, f.jsxs)(`div`, {
    className: `space-y-10`,
    children: [
      (0, f.jsx)(r, {
        title: `Tabs`,
        description: `Một tập hợp các phần nội dung được xếp lớp—được gọi là bảng tab—được hiển thị lần lượt.`,
      }),
      (0, f.jsxs)(a, {
        columns: 2,
        children: [
          (0, f.jsx)(s, {
            label: `Default`,
            description: `Tabs cơ bản với mặc định.`,
            children: (0, f.jsxs)(t, {
              defaultValue: `account`,
              className: `w-full`,
              children: [
                (0, f.jsxs)(o, {
                  className: `w-full`,
                  children: [
                    (0, f.jsx)(i, { value: `account`, children: `Account` }),
                    (0, f.jsx)(i, { value: `password`, children: `Password` }),
                  ],
                }),
                (0, f.jsx)(n, {
                  value: `account`,
                  children: (0, f.jsxs)(`div`, {
                    className: `rounded-xl border bg-card p-4`,
                    children: [
                      (0, f.jsx)(`h4`, {
                        className: `font-medium`,
                        children: `Account`,
                      }),
                      (0, f.jsx)(`p`, {
                        className: `text-sm text-muted-foreground`,
                        children: `Make changes to your account here.`,
                      }),
                    ],
                  }),
                }),
                (0, f.jsx)(n, {
                  value: `password`,
                  children: (0, f.jsxs)(`div`, {
                    className: `rounded-xl border bg-card p-4`,
                    children: [
                      (0, f.jsx)(`h4`, {
                        className: `font-medium`,
                        children: `Password`,
                      }),
                      (0, f.jsx)(`p`, {
                        className: `text-sm text-muted-foreground`,
                        children: `Change your password here.`,
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
          (0, f.jsx)(s, {
            label: `Disabled Tab`,
            description: `Một hoặc nhiều tab bị vô hiệu hoá.`,
            children: (0, f.jsxs)(t, {
              defaultValue: `general`,
              className: `w-full`,
              children: [
                (0, f.jsxs)(o, {
                  className: `w-full`,
                  children: [
                    (0, f.jsx)(i, { value: `general`, children: `General` }),
                    (0, f.jsx)(i, { value: `security`, children: `Security` }),
                    (0, f.jsx)(i, {
                      value: `advanced`,
                      disabled: !0,
                      children: `Advanced`,
                    }),
                  ],
                }),
                (0, f.jsx)(n, {
                  value: `general`,
                  children: (0, f.jsxs)(`div`, {
                    className: `rounded-xl border bg-card p-4`,
                    children: [
                      (0, f.jsx)(`h4`, {
                        className: `font-medium`,
                        children: `General Settings`,
                      }),
                      (0, f.jsx)(`p`, {
                        className: `text-sm text-muted-foreground`,
                        children: `Manage your general preferences.`,
                      }),
                    ],
                  }),
                }),
                (0, f.jsx)(n, {
                  value: `security`,
                  children: (0, f.jsxs)(`div`, {
                    className: `rounded-xl border bg-card p-4`,
                    children: [
                      (0, f.jsx)(`h4`, {
                        className: `font-medium`,
                        children: `Security Settings`,
                      }),
                      (0, f.jsx)(`p`, {
                        className: `text-sm text-muted-foreground`,
                        children: `Configure two-factor authentication.`,
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
      (0, f.jsx)(s, {
        label: `Line Variant`,
        description: `Tabs có kiểu gạch chân thay vì nền.`,
        fullWidth: !0,
        children: (0, f.jsx)(`div`, {
          className: `max-w-lg`,
          children: (0, f.jsxs)(t, {
            defaultValue: `music`,
            className: `w-full`,
            children: [
              (0, f.jsxs)(o, {
                variant: `line`,
                className: `w-full justify-start border-b rounded-none px-0`,
                children: [
                  (0, f.jsx)(i, { value: `music`, children: `Music` }),
                  (0, f.jsx)(i, { value: `podcasts`, children: `Podcasts` }),
                  (0, f.jsx)(i, { value: `live`, children: `Live` }),
                ],
              }),
              (0, f.jsx)(n, {
                value: `music`,
                children: (0, f.jsxs)(`div`, {
                  className: `pt-4`,
                  children: [
                    (0, f.jsx)(`h4`, {
                      className: `font-medium`,
                      children: `Music Library`,
                    }),
                    (0, f.jsx)(`p`, {
                      className: `text-sm text-muted-foreground`,
                      children: `Your top played songs and albums.`,
                    }),
                  ],
                }),
              }),
              (0, f.jsx)(n, {
                value: `podcasts`,
                children: (0, f.jsxs)(`div`, {
                  className: `pt-4`,
                  children: [
                    (0, f.jsx)(`h4`, {
                      className: `font-medium`,
                      children: `Podcasts`,
                    }),
                    (0, f.jsx)(`p`, {
                      className: `text-sm text-muted-foreground`,
                      children: `Episodes from your subscriptions.`,
                    }),
                  ],
                }),
              }),
              (0, f.jsx)(n, {
                value: `live`,
                children: (0, f.jsxs)(`div`, {
                  className: `pt-4`,
                  children: [
                    (0, f.jsx)(`h4`, {
                      className: `font-medium`,
                      children: `Live Radio`,
                    }),
                    (0, f.jsx)(`p`, {
                      className: `text-sm text-muted-foreground`,
                      children: `Tune in to live broadcasts.`,
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      }),
      (0, f.jsx)(s, {
        label: `With Icons`,
        description: `Tabs kết hợp biểu tượng và nhãn.`,
        fullWidth: !0,
        children: (0, f.jsx)(`div`, {
          className: `max-w-lg`,
          children: (0, f.jsxs)(t, {
            defaultValue: `profile`,
            className: `w-full`,
            children: [
              (0, f.jsxs)(o, {
                className: `w-full`,
                children: [
                  (0, f.jsxs)(i, {
                    value: `profile`,
                    children: [
                      (0, f.jsx)(d, { "data-icon": `inline-start` }),
                      `Profile`,
                    ],
                  }),
                  (0, f.jsxs)(i, {
                    value: `notifications`,
                    children: [
                      (0, f.jsx)(c, { "data-icon": `inline-start` }),
                      `Notifications`,
                    ],
                  }),
                  (0, f.jsxs)(i, {
                    value: `settings`,
                    children: [
                      (0, f.jsx)(u, { "data-icon": `inline-start` }),
                      `Settings`,
                    ],
                  }),
                ],
              }),
              (0, f.jsx)(n, {
                value: `profile`,
                children: (0, f.jsxs)(`div`, {
                  className: `rounded-xl border bg-card p-4`,
                  children: [
                    (0, f.jsx)(`h4`, {
                      className: `font-medium`,
                      children: `Profile`,
                    }),
                    (0, f.jsx)(`p`, {
                      className: `text-sm text-muted-foreground`,
                      children: `Update your name, avatar and bio.`,
                    }),
                  ],
                }),
              }),
              (0, f.jsx)(n, {
                value: `notifications`,
                children: (0, f.jsxs)(`div`, {
                  className: `rounded-xl border bg-card p-4`,
                  children: [
                    (0, f.jsx)(`h4`, {
                      className: `font-medium`,
                      children: `Notifications`,
                    }),
                    (0, f.jsx)(`p`, {
                      className: `text-sm text-muted-foreground`,
                      children: `Choose what notifications you receive.`,
                    }),
                  ],
                }),
              }),
              (0, f.jsx)(n, {
                value: `settings`,
                children: (0, f.jsxs)(`div`, {
                  className: `rounded-xl border bg-card p-4`,
                  children: [
                    (0, f.jsx)(`h4`, {
                      className: `font-medium`,
                      children: `Settings`,
                    }),
                    (0, f.jsx)(`p`, {
                      className: `text-sm text-muted-foreground`,
                      children: `Configure your app preferences.`,
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      }),
      (0, f.jsx)(s, {
        label: `Vertical Orientation`,
        description: `Tabs xếp dọc với nội dung bên phải.`,
        fullWidth: !0,
        children: (0, f.jsx)(`div`, {
          className: `max-w-xl`,
          children: (0, f.jsxs)(t, {
            defaultValue: `profile`,
            orientation: `vertical`,
            className: `w-full`,
            children: [
              (0, f.jsxs)(o, {
                className: `w-40 shrink-0`,
                children: [
                  (0, f.jsxs)(i, {
                    value: `profile`,
                    children: [
                      (0, f.jsx)(d, { "data-icon": `inline-start` }),
                      `Profile`,
                    ],
                  }),
                  (0, f.jsxs)(i, {
                    value: `notifications`,
                    children: [
                      (0, f.jsx)(c, { "data-icon": `inline-start` }),
                      `Notifications`,
                    ],
                  }),
                  (0, f.jsxs)(i, {
                    value: `billing`,
                    children: [
                      (0, f.jsx)(l, { "data-icon": `inline-start` }),
                      `Billing`,
                    ],
                  }),
                ],
              }),
              (0, f.jsx)(n, {
                value: `profile`,
                children: (0, f.jsxs)(`div`, {
                  className: `rounded-xl border bg-card p-4`,
                  children: [
                    (0, f.jsx)(`h4`, {
                      className: `font-medium`,
                      children: `Profile`,
                    }),
                    (0, f.jsx)(`p`, {
                      className: `text-sm text-muted-foreground`,
                      children: `Update your personal information and manage your public profile.`,
                    }),
                  ],
                }),
              }),
              (0, f.jsx)(n, {
                value: `notifications`,
                children: (0, f.jsxs)(`div`, {
                  className: `rounded-xl border bg-card p-4`,
                  children: [
                    (0, f.jsx)(`h4`, {
                      className: `font-medium`,
                      children: `Notifications`,
                    }),
                    (0, f.jsx)(`p`, {
                      className: `text-sm text-muted-foreground`,
                      children: `Choose what notifications you receive and how.`,
                    }),
                  ],
                }),
              }),
              (0, f.jsx)(n, {
                value: `billing`,
                children: (0, f.jsxs)(`div`, {
                  className: `rounded-xl border bg-card p-4`,
                  children: [
                    (0, f.jsx)(`h4`, {
                      className: `font-medium`,
                      children: `Billing`,
                    }),
                    (0, f.jsx)(`p`, {
                      className: `text-sm text-muted-foreground`,
                      children: `Manage your subscription and payment methods.`,
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
export { p as default };
