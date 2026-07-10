import {
  Nn as e,
  cr as t,
  h as n,
  or as r,
  qn as i,
} from "./showcase-vJrKG7HA.js";
var a = r(`loader-circle`, [
  [`path`, { d: `M21 12a9 9 0 1 1-6.219-8.56`, key: `13zald` }],
]);
t();
var o = e(),
  s = n(`animate-spin`, {
    variants: { size: { sm: `size-3.5`, md: `size-4`, lg: `size-5` } },
  });
function c({ className: e, size: t = `md`, ...n }) {
  return (0, o.jsx)(a, {
    "data-slot": `spinner`,
    role: `status`,
    "aria-label": `Loading`,
    className: i(s({ size: t, className: e })),
    ...n,
  });
}
export { c as t };
