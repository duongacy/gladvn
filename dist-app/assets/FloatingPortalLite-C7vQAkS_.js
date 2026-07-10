import { Nn as e, cr as t, dr as n, sr as r } from "./showcase-vJrKG7HA.js";
import { g as i } from "./popupStateMapping-wxS0crot.js";
var a = n(t(), 1),
  o = n(r(), 1),
  s = e(),
  c = a.forwardRef(function (e, t) {
    let {
        children: n,
        container: r,
        className: c,
        render: l,
        style: u,
        ...d
      } = e,
      { portalNode: f, portalSubtree: p } = i({
        container: r,
        ref: t,
        componentProps: e,
        elementProps: d,
      });
    return !p && !f
      ? null
      : (0, s.jsxs)(a.Fragment, { children: [p, f && o.createPortal(n, f)] });
  });
export { c as t };
