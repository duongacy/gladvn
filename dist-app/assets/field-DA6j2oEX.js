import {
  Nn as e,
  cr as t,
  dr as n,
  h as r,
  qn as i,
  rr as a,
} from "./showcase-vJrKG7HA.js";
import { At as o, t as s } from "./index-Dk0REsC9.js";
var c = n(t(), 1),
  l = e();
function u({ className: e, ...t }) {
  return (0, l.jsx)(`fieldset`, {
    "data-slot": `field-set`,
    className: i(`flex flex-col gap-4`, e),
    ...t,
  });
}
function d({ className: e, variant: t = `legend`, ...n }) {
  return (0, l.jsx)(`legend`, {
    "data-slot": `field-legend`,
    "data-variant": t,
    className: i(
      `mb-1.5 font-medium data-[variant=label]:text-sm data-[variant=legend]:text-base`,
      e,
    ),
    ...n,
  });
}
function f({ className: e, ...t }) {
  return (0, l.jsx)(`div`, {
    "data-slot": `field-group`,
    className: i(
      `group/field-group @container/field-group flex flex-col gap-5 data-[slot=checkbox-group]:gap-3 [&>*]:data-[slot=field-group]:gap-4`,
      e,
    ),
    ...t,
  });
}
var p = r(`group/field @container/field flex`, {
  variants: {
    orientation: {
      vertical: `flex-col [&>.sr-only]:w-auto`,
      horizontal: `flex-row items-center [&>*]:data-[slot=field-label]:flex-auto`,
      responsive: `flex-col @md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:data-[slot=field-label]:flex-auto [&>.sr-only]:w-auto`,
    },
    size: { sm: ``, md: ``, lg: `` },
  },
  compoundVariants: [
    { orientation: `vertical`, size: `sm`, className: `gap-0.5` },
    { orientation: `vertical`, size: `md`, className: `gap-0.5` },
    { orientation: `vertical`, size: `lg`, className: `gap-0.5` },
    { orientation: `horizontal`, size: `sm`, className: `gap-1.5` },
    { orientation: `horizontal`, size: `md`, className: `gap-2` },
    { orientation: `horizontal`, size: `lg`, className: `gap-3` },
    {
      orientation: `responsive`,
      size: `sm`,
      className: `gap-1 @md/field-group:gap-1.5`,
    },
    {
      orientation: `responsive`,
      size: `md`,
      className: `gap-1.5 @md/field-group:gap-2`,
    },
    {
      orientation: `responsive`,
      size: `lg`,
      className: `gap-2 @md/field-group:gap-3`,
    },
  ],
});
function m({
  className: e,
  orientation: t = `vertical`,
  size: n = `md`,
  error: r,
  ...a
}) {
  return (0, l.jsx)(`div`, {
    role: `group`,
    "data-slot": `field`,
    "data-orientation": t,
    "data-size": n,
    "data-invalid": !!r,
    className: i(p({ orientation: t, size: n }), e),
    ...a,
  });
}
function h({ className: e, ...t }) {
  return (0, l.jsx)(`div`, {
    "data-slot": `field-content`,
    className: i(
      `group/field-content flex flex-1 flex-col gap-0.5 leading-snug`,
      e,
    ),
    ...t,
  });
}
function g({ className: e, ...t }) {
  return (0, l.jsx)(o, {
    "data-slot": `field-label`,
    className: i(
      `group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50`,
      `text-sm group-data-[size=sm]/field:text-xs`,
      e,
    ),
    ...t,
  });
}
function _({ className: e, ...t }) {
  return (0, l.jsx)(`div`, {
    "data-slot": `field-label`,
    className: i(
      `flex w-fit items-center gap-2 font-medium group-data-[disabled=true]/field:opacity-50`,
      `text-sm group-data-[size=sm]/field:text-xs`,
      e,
    ),
    ...t,
  });
}
function v({ className: e, ...t }) {
  return (0, l.jsx)(`p`, {
    "data-slot": `field-description`,
    className: i(
      `text-left leading-normal font-normal text-muted-foreground group-has-data-horizontal/field:text-balance [[data-variant=legend]+&]:-mt-1.5`,
      `last:mt-0 nth-last-2:-mt-1`,
      `[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary`,
      `text-sm group-data-[size=sm]/field:text-xs`,
      e,
    ),
    ...t,
  });
}
function y({ children: e, className: t, ...n }) {
  return (0, l.jsxs)(`div`, {
    "data-slot": `field-separator`,
    "data-content": !!e,
    className: i(
      `relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2`,
      t,
    ),
    ...n,
    children: [
      (0, l.jsx)(s, { className: `absolute inset-0 top-1/2` }),
      e &&
        (0, l.jsx)(`span`, {
          className: `relative mx-auto block w-fit bg-background px-2 text-muted-foreground`,
          "data-slot": `field-separator-content`,
          children: e,
        }),
    ],
  });
}
function b({ className: e, children: t, errors: n, ...r }) {
  let o = (0, c.useMemo)(() => {
    if (t) return t;
    if (!n?.length) return null;
    let e = [...new Map(n.map((e) => [e?.message, e])).values()];
    return e?.length == 1
      ? e[0]?.message
      : (0, l.jsx)(`ul`, {
          className: `ml-4 flex list-disc flex-col gap-1`,
          children: e.map(
            (e, t) =>
              e?.message && (0, l.jsx)(`li`, { children: e.message }, t),
          ),
        });
  }, [t, n]);
  return o
    ? (0, l.jsxs)(`div`, {
        role: `alert`,
        "data-slot": `field-error`,
        className: i(
          `text-sm font-medium text-destructive flex items-start gap-1.5 animate-in fade-in-0 slide-in-from-top-1`,
          e,
        ),
        ...r,
        children: [
          (0, l.jsx)(a, { className: `size-4 shrink-0 mt-0.5` }),
          (0, l.jsx)(`div`, { className: `flex-1`, children: o }),
        ],
      })
    : null;
}
export {
  f as a,
  y as c,
  b as i,
  u as l,
  h as n,
  g as o,
  v as r,
  d as s,
  m as t,
  _ as u,
};
