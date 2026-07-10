import { Nn as e, cr as t, qn as n, s as r } from "./showcase-vJrKG7HA.js";
import {
  a as i,
  c as a,
  i as o,
  n as s,
  o as c,
  r as l,
  s as u,
  t as d,
} from "./DialogTrigger-u4Orh-SU.js";
function f(e) {
  return a(e, `alert-dialog`);
}
var p = d;
t();
var m = e();
function h({ ...e }) {
  return (0, m.jsx)(f, { "data-slot": `alert-dialog`, ...e });
}
function g({ ...e }) {
  return (0, m.jsx)(p, { "data-slot": `alert-dialog-trigger`, ...e });
}
function _({ ...e }) {
  return (0, m.jsx)(c, { "data-slot": `alert-dialog-close`, ...e });
}
function v({ ...e }) {
  return (0, m.jsx)(l, { "data-slot": `alert-dialog-portal`, ...e });
}
function y({ className: e, ...t }) {
  return (0, m.jsx)(u, {
    "data-slot": `alert-dialog-overlay`,
    className: n(
      `fixed inset-0 isolate z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0`,
      e,
    ),
    ...t,
  });
}
function b({ className: e, size: t = `md`, ...r }) {
  return (0, m.jsxs)(v, {
    children: [
      (0, m.jsx)(y, {}),
      (0, m.jsx)(o, {
        "data-slot": `alert-dialog-content`,
        "data-size": t,
        className: n(
          `group/alert-dialog-content fixed top-1/2 left-1/2 z-50 grid w-full -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-popover p-4 text-popover-foreground ring-1 ring-foreground/10 duration-100 outline-none`,
          `data-[size=sm]:max-w-xs`,
          `data-[size=md]:max-w-xs data-[size=md]:sm:max-w-sm`,
          `data-[size=lg]:max-w-sm data-[size=lg]:sm:max-w-md`,
          `data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95`,
          e,
        ),
        ...r,
      }),
    ],
  });
}
function x({ className: e, ...t }) {
  return (0, m.jsx)(`div`, {
    "data-slot": `alert-dialog-header`,
    className: n(`flex flex-col gap-2 text-center sm:text-left`, e),
    ...t,
  });
}
function S({ className: e, ...t }) {
  return (0, m.jsx)(`div`, {
    "data-slot": `alert-dialog-footer`,
    className: n(
      `-mx-4 -mb-4 flex flex-col-reverse gap-2 rounded-b-xl border-t bg-muted/50 p-4 sm:flex-row sm:justify-end`,
      e,
    ),
    ...t,
  });
}
function C({ className: e, ...t }) {
  return (0, m.jsx)(`div`, {
    "data-slot": `alert-dialog-media`,
    className: n(
      `inline-flex size-10 items-center justify-center [&>svg:not([class*='size-'])]:size-6`,
      `group-data-[size=lg]/alert-dialog-content:size-12`,
      e,
    ),
    ...t,
  });
}
function w({ className: e, ...t }) {
  return (0, m.jsx)(s, {
    "data-slot": `alert-dialog-title`,
    className: n(
      `font-heading text-base font-medium`,
      `group-data-[size=lg]/alert-dialog-content:text-lg`,
      e,
    ),
    ...t,
  });
}
function T({ className: e, ...t }) {
  return (0, m.jsx)(i, {
    "data-slot": `alert-dialog-description`,
    className: n(
      `text-sm text-balance text-muted-foreground md:text-pretty [&_p]:leading-relaxed`,
      `group-data-[size=lg]/alert-dialog-content:text-base`,
      e,
    ),
    ...t,
  });
}
function E({ className: e, variant: t, color: i, size: a = `md`, ...o }) {
  return (0, m.jsx)(c, {
    "data-slot": `alert-dialog-action`,
    className: n(e),
    render: (0, m.jsx)(r, { variant: t, color: i, size: a }),
    ...o,
  });
}
function D({
  className: e,
  variant: t = `outline`,
  color: i,
  size: a = `md`,
  ...o
}) {
  return (0, m.jsx)(c, {
    "data-slot": `alert-dialog-cancel`,
    className: n(e),
    render: (0, m.jsx)(r, { variant: t, color: i, size: a }),
    ...o,
  });
}
export {
  b as a,
  x as c,
  g as d,
  _ as i,
  C as l,
  E as n,
  T as o,
  D as r,
  S as s,
  h as t,
  w as u,
};
