import {
  Nn as e,
  cr as t,
  dr as n,
  h as r,
  qn as i,
} from "./showcase-vJrKG7HA.js";
var a = n(t(), 1),
  o = e(),
  s = r(
    `flex field-sizing-content min-h-16 min-w-0 rounded-lg border border-input bg-transparent text-sm transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:focus-visible:ring-3 aria-invalid:focus-visible:ring-destructive/50 dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:focus-visible:ring-destructive/50`,
    {
      variants: {
        size: {
          sm: `px-2 py-1.5 text-xs`,
          md: `px-2.5 py-2`,
          lg: `px-3 py-2.5`,
        },
      },
    },
  ),
  c = a.forwardRef(function ({ className: e, size: t = `md`, ...n }, r) {
    return (0, o.jsx)(`textarea`, {
      ref: r,
      "data-slot": `textarea`,
      className: i(s({ size: t, className: e })),
      ...n,
    });
  });
c.displayName = `Textarea`;
export { c as t };
