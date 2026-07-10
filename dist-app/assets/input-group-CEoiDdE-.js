import {
  Nn as e,
  cr as t,
  dr as n,
  h as r,
  qn as i,
  s as a,
} from "./showcase-vJrKG7HA.js";
import { t as o } from "./input-CyfiqGPM.js";
import { t as s } from "./textarea-BDNGe1-g.js";
var c = n(t(), 1),
  l = e(),
  u = r(
    [
      `group/input-group @container/input-group relative flex min-w-0 items-center rounded-lg border border-input transition-colors outline-none`,
      `in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0`,
      `has-disabled:bg-input/50 has-disabled:opacity-50 has-disabled:cursor-not-allowed dark:has-disabled:bg-input/80`,
      `has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot=input-group-control]:focus-visible]:ring-offset-1 has-[[data-slot=input-group-control]:focus-visible]:ring-offset-background`,
      `has-[[data-slot][aria-invalid=true]]:border-destructive`,
      `has-[[data-slot][aria-invalid=true]:focus-visible]:border-destructive has-[[data-slot][aria-invalid=true]:focus-visible]:ring-3 has-[[data-slot][aria-invalid=true]:focus-visible]:ring-destructive/50 dark:has-[[data-slot][aria-invalid=true]:focus-visible]:ring-destructive/50`,
      `dark:bg-input/30`,
    ],
    {
      variants: {
        size: {
          sm: `input-group-sm min-h-7 text-xs`,
          md: `input-group-md min-h-8 text-sm`,
          lg: `input-group-lg min-h-9 text-sm`,
        },
      },
    },
  ),
  d = c.forwardRef(function ({ className: e, size: t = `md`, ...n }, r) {
    return (0, l.jsx)(`div`, {
      ref: r,
      "data-slot": `input-group`,
      role: `group`,
      className: i(u({ size: t }), e),
      ...n,
    });
  });
d.displayName = `InputGroup`;
var f = r(
    [
      `flex h-auto cursor-text items-center justify-center gap-2 font-medium text-muted-foreground select-none`,
      `group-data-[disabled=true]/input-group:opacity-50`,
      `group-has-[[data-slot][aria-invalid=true]]/input-group:text-destructive`,
      `group-[.input-group-sm]/input-group:py-0.5 group-[.input-group-md]/input-group:py-1.5 group-[.input-group-lg]/input-group:py-1.5`,
      `[&>kbd]:rounded-sm [&>svg:not([class*='size-'])]:size-4 group-[.input-group-sm]/input-group:[&>svg:not([class*='size-'])]:size-3.5`,
    ],
    {
      variants: {
        align: {
          "inline-start": `order-first pl-2`,
          "inline-end": `order-last pr-2`,
          "block-start": `order-first w-full justify-start px-2.5 pt-2 [.border-b]:pb-2`,
          "block-end": `order-last w-full justify-start px-2.5 pb-2 [.border-t]:pt-2`,
        },
      },
    },
  ),
  p = c.forwardRef(function (
    { className: e, align: t = `inline-start`, ...n },
    r,
  ) {
    return (0, l.jsx)(`div`, {
      ref: r,
      role: `group`,
      "data-slot": `input-group-addon`,
      "data-align": t,
      className: i(f({ align: t }), e),
      onClick: (e) => {
        e.target.closest(`button`) ||
          e.currentTarget.parentElement?.querySelector(`input`)?.focus();
      },
      ...n,
    });
  });
p.displayName = `InputGroupAddon`;
var m = r(`flex items-center gap-2 text-sm shadow-none`, {
    variants: {
      size: {
        sm: `h-7 gap-1.5 rounded-sm px-2 [&>svg:not([class*='size-'])]:size-3.5`,
        md: `h-8 gap-2 rounded-md px-3 [&>svg:not([class*='size-'])]:size-4`,
        lg: `h-9 gap-2 rounded-md px-4 [&>svg:not([class*='size-'])]:size-5`,
        xs: `h-6 gap-1 rounded-sm px-1.5 [&>svg:not([class*='size-'])]:size-3.5`,
        icon: `size-8 rounded-md p-0`,
        "icon-sm": `size-8 p-0`,
      },
    },
  }),
  h = c.forwardRef(function (
    {
      className: e,
      type: t = `button`,
      variant: n = `ghost`,
      size: r = `xs`,
      ...o
    },
    s,
  ) {
    return (0, l.jsx)(a, {
      ref: s,
      type: t,
      "data-size": r,
      variant: n,
      className: i(m({ size: r }), e),
      ...o,
    });
  });
h.displayName = `InputGroupButton`;
var g = c.forwardRef(function ({ className: e, ...t }, n) {
  return (0, l.jsx)(`span`, {
    ref: n,
    className: i(
      `flex items-center gap-2 text-muted-foreground [&>svg]:pointer-events-none [&>svg:not([class*='size-'])]:size-4 group-[.input-group-sm]/input-group:[&>svg:not([class*='size-'])]:size-3.5`,
      e,
    ),
    ...t,
  });
});
g.displayName = `InputGroupText`;
var _ = c.forwardRef(function ({ className: e, ...t }, n) {
  return (0, l.jsx)(o, {
    ref: n,
    "data-slot": `input-group-control`,
    className: i(
      `flex-1 rounded-none border-0 bg-transparent shadow-none ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 disabled:bg-transparent disabled:opacity-100 aria-invalid:ring-0 aria-invalid:focus-visible:ring-0 aria-invalid:focus-visible:ring-offset-0 dark:bg-transparent dark:disabled:bg-transparent`,
      `group-[.input-group-sm]/input-group:h-7 group-[.input-group-sm]/input-group:px-2 group-[.input-group-sm]/input-group:py-0.5 group-[.input-group-sm]/input-group:text-xs`,
      `group-[.input-group-md]/input-group:h-8 group-[.input-group-md]/input-group:px-2.5 group-[.input-group-md]/input-group:py-1 group-[.input-group-md]/input-group:text-sm`,
      `group-[.input-group-lg]/input-group:h-9 group-[.input-group-lg]/input-group:px-3 group-[.input-group-lg]/input-group:py-1.5 group-[.input-group-lg]/input-group:text-sm`,
      e,
    ),
    ...t,
  });
});
_.displayName = `InputGroupInput`;
var v = c.forwardRef(function ({ className: e, ...t }, n) {
  return (0, l.jsx)(s, {
    ref: n,
    "data-slot": `input-group-control`,
    className: i(
      `flex-1 resize-none rounded-none border-0 bg-transparent py-2 shadow-none ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 disabled:bg-transparent disabled:opacity-100 aria-invalid:ring-0 aria-invalid:focus-visible:ring-0 aria-invalid:focus-visible:ring-offset-0 dark:bg-transparent dark:disabled:bg-transparent`,
      `group-[.input-group-sm]/input-group:text-xs group-[.input-group-sm]/input-group:px-2`,
      `group-[.input-group-md]/input-group:text-sm group-[.input-group-md]/input-group:px-2.5`,
      `group-[.input-group-lg]/input-group:text-sm group-[.input-group-lg]/input-group:px-3`,
      e,
    ),
    ...t,
  });
});
v.displayName = `InputGroupTextarea`;
export { g as a, _ as i, p as n, v as o, h as r, d as t };
