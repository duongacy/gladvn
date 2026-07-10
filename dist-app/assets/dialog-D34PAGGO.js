import { Nn as e, cr as t, dr as n, qn as r } from "./showcase-vJrKG7HA.js";
import {
  a as i,
  i as a,
  n as o,
  o as s,
  r as c,
  s as l,
  t as u,
} from "./DialogTrigger-u4Orh-SU.js";
import { t as d } from "./DialogRoot-cdIi1lgp.js";
var f = n(t(), 1),
  p = e();
function m({ ...e }) {
  return (0, p.jsx)(d, { "data-slot": `dialog`, ...e });
}
var h = f.forwardRef(({ ...e }, t) =>
  (0, p.jsx)(u, { ref: t, "data-slot": `dialog-trigger`, ...e }),
);
h.displayName = `DialogTrigger`;
function g({ ...e }) {
  return (0, p.jsx)(c, { "data-slot": `dialog-portal`, ...e });
}
var _ = f.forwardRef(({ ...e }, t) =>
  (0, p.jsx)(s, { ref: t, "data-slot": `dialog-close`, ...e }),
);
_.displayName = `DialogClose`;
var v = f.forwardRef(({ className: e, ...t }, n) =>
  (0, p.jsx)(l, {
    ref: n,
    "data-slot": `dialog-overlay`,
    className: r(
      `fixed inset-0 isolate z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0`,
      e,
    ),
    ...t,
  }),
);
v.displayName = `DialogOverlay`;
var y = f.forwardRef(({ className: e, children: t, ...n }, i) =>
  (0, p.jsxs)(g, {
    children: [
      (0, p.jsx)(v, {}),
      (0, p.jsx)(a, {
        ref: i,
        "data-slot": `dialog-content`,
        className: r(
          `group/dialog-content fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-popover p-4 text-sm text-popover-foreground ring-1 ring-foreground/10 duration-100 outline-none max-h-[calc(100dvh-2rem)] sm:max-h-[calc(100dvh-4rem)] overflow-y-auto`,
          `data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95`,
          e,
        ),
        ...n,
        children: t,
      }),
    ],
  }),
);
y.displayName = `DialogContent`;
var b = f.forwardRef(({ className: e, ...t }, n) =>
  (0, p.jsx)(`div`, {
    ref: n,
    "data-slot": `dialog-header`,
    className: r(`flex flex-col gap-2`, e),
    ...t,
  }),
);
b.displayName = `DialogHeader`;
var x = f.forwardRef(({ className: e, children: t, ...n }, i) =>
  (0, p.jsx)(`div`, {
    ref: i,
    "data-slot": `dialog-footer`,
    className: r(`flex flex-col-reverse gap-2 sm:flex-row sm:justify-end`, e),
    ...n,
    children: t,
  }),
);
x.displayName = `DialogFooter`;
var S = f.forwardRef(({ className: e, ...t }, n) =>
  (0, p.jsx)(o, {
    ref: n,
    "data-slot": `dialog-title`,
    className: r(`font-heading text-base leading-none font-medium`, e),
    ...t,
  }),
);
S.displayName = `DialogTitle`;
var C = f.forwardRef(({ className: e, ...t }, n) =>
  (0, p.jsx)(i, {
    ref: n,
    "data-slot": `dialog-description`,
    className: r(`text-sm text-muted-foreground`, e),
    ...t,
  }),
);
C.displayName = `DialogDescription`;
export { x as a, h as c, C as i, _ as n, b as o, y as r, S as s, m as t };
