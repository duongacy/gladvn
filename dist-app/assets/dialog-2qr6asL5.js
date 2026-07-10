import {
  Nn as e,
  cr as t,
  dr as n,
  i as r,
  n as i,
  qn as a,
  r as o,
  s,
} from "./showcase-vJrKG7HA.js";
import { t as c } from "./x-Ddx7uGRS.js";
import { At as l } from "./index-Dk0REsC9.js";
import { t as u } from "./input-CyfiqGPM.js";
import {
  a as d,
  c as f,
  i as p,
  n as m,
  o as h,
  r as g,
  s as _,
  t as v,
} from "./dialog-D34PAGGO.js";
import { t as y } from "./mono-select-2fT-ju4g.js";
var b = n(t(), 1),
  x = e();
function S() {
  let [e, t] = (0, b.useState)(`md`),
    [n, S] = (0, b.useState)(!1),
    C = e === `sm` ? `sm:max-w-md` : e === `md` ? `sm:max-w-lg` : `sm:max-w-xl`;
  return (0, x.jsxs)(`div`, {
    className: `space-y-10`,
    children: [
      (0, x.jsx)(r, {
        title: `Dialog`,
        description: `Một cửa sổ phương thức làm gián đoạn người dùng với nội dung quan trọng và mong đợi phản hồi.`,
        children: (0, x.jsx)(y, {
          value: e,
          onValueChange: (e) => t(e),
          options: [
            { value: `sm`, label: `Size: sm` },
            { value: `md`, label: `Size: md` },
            { value: `lg`, label: `Size: lg` },
          ],
        }),
      }),
      (0, x.jsxs)(i, {
        columns: 2,
        children: [
          (0, x.jsx)(o, {
            label: `Basic Usage`,
            description: `Sử dụng các thành phần rời rạc để tạo dialog cơ bản.`,
            children: (0, x.jsxs)(v, {
              children: [
                (0, x.jsx)(f, {
                  render: (0, x.jsx)(s, {
                    variant: `outline`,
                    size: e,
                    children: `Upgrade Plan`,
                  }),
                }),
                (0, x.jsxs)(g, {
                  className: C,
                  children: [
                    (0, x.jsxs)(h, {
                      children: [
                        (0, x.jsx)(_, { children: `Update Subscription` }),
                        (0, x.jsx)(p, {
                          children: `Are you sure you want to upgrade your plan to Pro? This will charge your card immediately.`,
                        }),
                      ],
                    }),
                    (0, x.jsxs)(d, {
                      className: `-mx-4 -mb-4 mt-4 rounded-b-xl border-t bg-muted/50 p-4`,
                      children: [
                        (0, x.jsx)(m, {
                          render: (0, x.jsx)(s, { variant: `ghost`, size: e }),
                          children: `Cancel`,
                        }),
                        (0, x.jsx)(s, {
                          color: `primary`,
                          size: e,
                          children: `Confirm`,
                        }),
                      ],
                    }),
                    (0, x.jsxs)(m, {
                      render: (0, x.jsx)(s, {
                        variant: `ghost`,
                        className: `absolute top-2 right-2`,
                        size: `sm`,
                        iconOnly: !0,
                      }),
                      children: [
                        (0, x.jsx)(c, {}),
                        (0, x.jsx)(`span`, {
                          className: `sr-only`,
                          children: `Close`,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          (0, x.jsx)(o, {
            label: `Forms & Custom Content`,
            description: `Sử dụng form bên trong DialogContent.`,
            children: (0, x.jsxs)(v, {
              children: [
                (0, x.jsx)(f, {
                  render: (0, x.jsx)(s, {
                    variant: `outline`,
                    size: e,
                    children: `Edit Profile`,
                  }),
                }),
                (0, x.jsxs)(g, {
                  className: C,
                  children: [
                    (0, x.jsxs)(h, {
                      children: [
                        (0, x.jsx)(_, { children: `Edit profile` }),
                        (0, x.jsx)(p, {
                          children: `Make changes to your profile here. Click save when you're done.`,
                        }),
                      ],
                    }),
                    (0, x.jsxs)(`div`, {
                      className: `grid gap-4 py-4`,
                      children: [
                        (0, x.jsxs)(`div`, {
                          className: `grid grid-cols-4 items-center gap-4`,
                          children: [
                            (0, x.jsx)(l, {
                              htmlFor: `name`,
                              className: `text-right`,
                              children: `Name`,
                            }),
                            (0, x.jsx)(u, {
                              id: `name`,
                              defaultValue: `Pedro Duarte`,
                              className: `col-span-3`,
                            }),
                          ],
                        }),
                        (0, x.jsxs)(`div`, {
                          className: `grid grid-cols-4 items-center gap-4`,
                          children: [
                            (0, x.jsx)(l, {
                              htmlFor: `username`,
                              className: `text-right`,
                              children: `Username`,
                            }),
                            (0, x.jsx)(u, {
                              id: `username`,
                              defaultValue: `@peduarte`,
                              className: `col-span-3`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, x.jsx)(d, {
                      className: `-mx-4 -mb-4 mt-4 rounded-b-xl border-t bg-muted/50 p-4`,
                      children: (0, x.jsx)(s, {
                        type: `submit`,
                        size: e,
                        children: `Save changes`,
                      }),
                    }),
                    (0, x.jsxs)(m, {
                      render: (0, x.jsx)(s, {
                        variant: `ghost`,
                        className: `absolute top-2 right-2`,
                        size: `sm`,
                        iconOnly: !0,
                      }),
                      children: [
                        (0, x.jsx)(c, {}),
                        (0, x.jsx)(`span`, {
                          className: `sr-only`,
                          children: `Close`,
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
      (0, x.jsxs)(i, {
        columns: 2,
        children: [
          (0, x.jsx)(o, {
            label: `No Close Button`,
            description: `Không render nút XIcon thủ công.`,
            children: (0, x.jsxs)(v, {
              children: [
                (0, x.jsx)(f, {
                  render: (0, x.jsx)(s, {
                    variant: `outline`,
                    size: e,
                    children: `View Terms`,
                  }),
                }),
                (0, x.jsxs)(g, {
                  className: C,
                  children: [
                    (0, x.jsxs)(h, {
                      children: [
                        (0, x.jsx)(_, { children: `Terms of Service` }),
                        (0, x.jsx)(p, {
                          children: `You must accept the new terms to continue using the application.`,
                        }),
                      ],
                    }),
                    (0, x.jsx)(`p`, {
                      className: `text-sm text-muted-foreground`,
                      children: `By clicking accept, you agree to our updated Terms of Service and Privacy Policy.`,
                    }),
                    (0, x.jsxs)(d, {
                      className: `-mx-4 -mb-4 mt-4 rounded-b-xl border-t bg-muted/50 p-4`,
                      children: [
                        (0, x.jsx)(m, {
                          render: (0, x.jsx)(s, {
                            variant: `outline`,
                            size: e,
                          }),
                          children: `Decline`,
                        }),
                        (0, x.jsx)(s, { size: e, children: `Accept` }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          (0, x.jsx)(o, {
            label: `Large Content Sizing`,
            description: `Sử dụng sm:max-w-lg cho nội dung lớn hơn.`,
            children: (0, x.jsxs)(v, {
              children: [
                (0, x.jsx)(f, {
                  render: (0, x.jsx)(s, {
                    variant: `outline`,
                    size: e,
                    children: `View Report`,
                  }),
                }),
                (0, x.jsxs)(g, {
                  className: C,
                  children: [
                    (0, x.jsxs)(h, {
                      children: [
                        (0, x.jsx)(_, { children: `Detailed Report` }),
                        (0, x.jsx)(p, {
                          children: `Monthly analytics and performance overview.`,
                        }),
                      ],
                    }),
                    (0, x.jsx)(`div`, {
                      className: `flex h-[200px] items-center justify-center rounded-md border border-dashed bg-muted/20`,
                      children: (0, x.jsx)(`span`, {
                        className: `text-sm text-muted-foreground`,
                        children: `Large Content Area`,
                      }),
                    }),
                    (0, x.jsx)(d, {
                      className: `-mx-4 -mb-4 mt-4 rounded-b-xl border-t bg-muted/50 p-4`,
                      children: (0, x.jsx)(s, {
                        size: e,
                        children: `Download PDF`,
                      }),
                    }),
                    (0, x.jsxs)(m, {
                      render: (0, x.jsx)(s, {
                        variant: `ghost`,
                        className: `absolute top-2 right-2`,
                        size: `sm`,
                        iconOnly: !0,
                      }),
                      children: [
                        (0, x.jsx)(c, {}),
                        (0, x.jsx)(`span`, {
                          className: `sr-only`,
                          children: `Close`,
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
      (0, x.jsxs)(i, {
        columns: 2,
        children: [
          (0, x.jsx)(o, {
            label: `Controlled State`,
            description: `Sử dụng open và onOpenChange để quản lý trạng thái đóng mở bằng React state.`,
            children: (0, x.jsxs)(`div`, {
              className: `w-full flex flex-col gap-4 items-center justify-center`,
              children: [
                (0, x.jsxs)(`div`, {
                  className: `flex gap-4 items-center`,
                  children: [
                    (0, x.jsx)(s, {
                      onClick: () => S(!0),
                      variant: `outline`,
                      size: e,
                      children: `Open Controlled Dialog`,
                    }),
                    (0, x.jsxs)(`span`, {
                      className: `text-sm text-muted-foreground font-mono`,
                      children: [`State: `, n ? `true` : `false`],
                    }),
                  ],
                }),
                (0, x.jsx)(v, {
                  open: n,
                  onOpenChange: S,
                  children: (0, x.jsxs)(g, {
                    className: C,
                    children: [
                      (0, x.jsxs)(h, {
                        children: [
                          (0, x.jsx)(_, { children: `Controlled Dialog` }),
                          (0, x.jsx)(p, {
                            children: `Trạng thái của hộp thoại này được quản lý hoàn toàn bởi React state bên ngoài.`,
                          }),
                        ],
                      }),
                      (0, x.jsx)(`p`, {
                        className: `text-sm text-foreground`,
                        children: `Bạn có thể đóng bằng nút bên dưới hoặc dấu X.`,
                      }),
                      (0, x.jsx)(d, {
                        className: `-mx-4 -mb-4 mt-4 rounded-b-xl border-t bg-muted/50 p-4`,
                        children: (0, x.jsx)(s, {
                          color: `primary`,
                          onClick: () => S(!1),
                          size: e,
                          children: `Close Manually`,
                        }),
                      }),
                      (0, x.jsxs)(m, {
                        render: (0, x.jsx)(s, {
                          variant: `ghost`,
                          className: `absolute top-2 right-2`,
                          size: `sm`,
                          iconOnly: !0,
                        }),
                        children: [
                          (0, x.jsx)(c, {}),
                          (0, x.jsx)(`span`, {
                            className: `sr-only`,
                            children: `Close`,
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
          (0, x.jsx)(o, {
            label: `Sticky Footer (Long Content)`,
            description: `Ghi đè class của DialogContent thành flex-col để khóa scroll ở phần body.`,
            children: (0, x.jsxs)(v, {
              children: [
                (0, x.jsx)(f, {
                  render: (0, x.jsx)(s, {
                    variant: `outline`,
                    size: e,
                    children: `View Long Content`,
                  }),
                }),
                (0, x.jsxs)(g, {
                  className: a(C, `flex flex-col gap-0 p-0 overflow-hidden`),
                  children: [
                    (0, x.jsxs)(h, {
                      className: `shrink-0 p-4 pb-0`,
                      children: [
                        (0, x.jsx)(_, { children: `Terms & Conditions` }),
                        (0, x.jsx)(p, {
                          children: `Cuộn xuống dưới cùng để có thể đồng ý với điều khoản.`,
                        }),
                      ],
                    }),
                    (0, x.jsx)(`div`, {
                      className: `flex-1 min-h-0 overflow-y-auto p-4`,
                      children: (0, x.jsxs)(`div`, {
                        className: `flex h-[800px] flex-col items-center justify-between rounded-md border border-dashed bg-muted/20 py-8`,
                        children: [
                          (0, x.jsx)(`span`, {
                            className: `text-sm font-medium text-muted-foreground`,
                            children: `START OF CONTENT`,
                          }),
                          (0, x.jsxs)(`div`, {
                            className: `flex flex-col items-center gap-2`,
                            children: [
                              (0, x.jsx)(`span`, {
                                className: `text-4xl`,
                                children: `👇`,
                              }),
                              (0, x.jsx)(`span`, {
                                className: `text-sm text-muted-foreground`,
                                children: `Keep scrolling`,
                              }),
                            ],
                          }),
                          (0, x.jsx)(`span`, {
                            className: `text-sm font-medium text-muted-foreground`,
                            children: `END OF CONTENT`,
                          }),
                        ],
                      }),
                    }),
                    (0, x.jsxs)(d, {
                      className: `shrink-0 rounded-b-xl border-t bg-muted/50 p-4`,
                      children: [
                        (0, x.jsx)(m, {
                          render: (0, x.jsx)(s, { variant: `ghost`, size: e }),
                          children: `Cancel`,
                        }),
                        (0, x.jsx)(s, { size: e, children: `I Agree` }),
                      ],
                    }),
                    (0, x.jsxs)(m, {
                      render: (0, x.jsx)(s, {
                        variant: `ghost`,
                        className: `absolute top-2 right-2`,
                        size: `sm`,
                        iconOnly: !0,
                      }),
                      children: [
                        (0, x.jsx)(c, {}),
                        (0, x.jsx)(`span`, {
                          className: `sr-only`,
                          children: `Close`,
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
    ],
  });
}
export { S as default };
