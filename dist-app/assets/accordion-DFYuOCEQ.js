import {
  Gn as e,
  Hn as t,
  I as n,
  In as r,
  It as i,
  Kn as a,
  Mn as o,
  Nn as s,
  Pn as c,
  Pt as l,
  Rt as u,
  Un as d,
  Vn as f,
  _ as p,
  cr as m,
  dr as h,
  qn as g,
} from "./showcase-vJrKG7HA.js";
import { Vt as _ } from "./index-Dk0REsC9.js";
import {
  a as v,
  i as y,
  n as b,
  o as x,
  r as S,
  t as C,
} from "./useCollapsiblePanel-LBfYe00b.js";
var w = h(m(), 1),
  T = w.createContext(void 0);
function E() {
  let e = w.useContext(T);
  if (e === void 0) throw Error(t(10));
  return e;
}
var D = s(),
  O = { value: () => null },
  k = w.forwardRef(function (e, t) {
    let {
        render: n,
        className: r,
        disabled: i = !1,
        hiddenUntilFound: s,
        keepMounted: l,
        loopFocus: u,
        onValueChange: f,
        multiple: m = !1,
        orientation: h = `vertical`,
        value: g,
        defaultValue: _,
        style: v,
        ...y
      } = e,
      b = p(),
      x = w.useMemo(() => {
        if (g === void 0) return _ ?? [];
      }, [g, _]),
      S = w.useRef([]),
      [C, E] = a({
        controlled: g,
        default: x,
        name: `Accordion`,
        state: `value`,
      }),
      k = d((e, t, n) => {
        if (!m) {
          let t = C[0] === e ? [] : [e];
          if ((f?.(t, n), n.isCanceled)) return;
          E(t);
        } else if (t) {
          let t = C.slice();
          if ((t.push(e), f?.(t, n), n.isCanceled)) return;
          E(t);
        } else {
          let t = C.filter((t) => t !== e);
          if ((f?.(t, n), n.isCanceled)) return;
          E(t);
        }
      }),
      A = w.useMemo(
        () => ({ value: C, disabled: i, orientation: h }),
        [C, i, h],
      ),
      j = w.useMemo(
        () => ({
          disabled: i,
          handleValueChange: k,
          hiddenUntilFound: s ?? !1,
          keepMounted: l ?? !1,
          state: A,
          value: C,
        }),
        [i, k, s, l, A, C],
      ),
      M = c(`div`, e, {
        state: A,
        ref: t,
        props: [{ dir: b }, y],
        stateAttributesMapping: O,
      });
    return (0, D.jsx)(T.Provider, {
      value: j,
      children: (0, D.jsx)(o, { elementsRef: S, children: M }),
    });
  }),
  A = w.createContext(void 0);
function j() {
  let e = w.useContext(A);
  if (e === void 0) throw Error(t(9));
  return e;
}
var M = (function (e) {
    return (
      (e.index = `data-index`),
      (e.disabled = `data-disabled`),
      (e.open = `data-open`),
      e
    );
  })({}),
  N = {
    ...b,
    index: (e) => (Number.isInteger(e) ? { [M.index]: String(e) } : null),
    ...n,
    value: () => null,
  },
  P = w.forwardRef(function (e, t) {
    let {
        className: n,
        disabled: r = !1,
        onOpenChange: i,
        render: a,
        value: o,
        style: s,
        ...p
      } = e,
      { ref: m, index: h } = l(),
      g = f(t, m),
      { disabled: _, handleValueChange: v, state: b, value: S } = E(),
      C = u(),
      T = o ?? C,
      O = r || _,
      k = w.useMemo(() => {
        if (!S) return !1;
        for (let e = 0; e < S.length; e += 1) if (S[e] === T) return !0;
        return !1;
      }, [S, T]),
      j = d((e, t) => {
        (i?.(e, t), !t.isCanceled && v(T, e, t));
      }),
      M = x({ open: k, onOpenChange: j, disabled: O }),
      P = w.useMemo(
        () => ({
          open: M.open,
          disabled: M.disabled,
          transitionStatus: M.transitionStatus,
        }),
        [M.open, M.disabled, M.transitionStatus],
      ),
      F = w.useMemo(() => ({ ...M, onOpenChange: j, state: P }), [M, P, j]),
      I = w.useMemo(
        () => ({
          ...b,
          hidden: !k && !M.mounted,
          index: h,
          disabled: O,
          open: k,
        }),
        [M.mounted, O, h, k, b],
      ),
      L = u(),
      [R, z] = w.useState(),
      B = w.useMemo(
        () => ({ open: k, state: I, setTriggerId: z, triggerId: R ?? L }),
        [L, k, I, z, R],
      ),
      V = c(`div`, e, {
        state: I,
        ref: g,
        props: p,
        stateAttributesMapping: N,
      });
    return (0, D.jsx)(y.Provider, {
      value: F,
      children: (0, D.jsx)(A.Provider, { value: B, children: V }),
    });
  }),
  F = w.forwardRef(function (e, t) {
    let { render: n, className: r, style: i, ...a } = e,
      { state: o } = j();
    return c(`h3`, e, {
      state: o,
      ref: t,
      props: a,
      stateAttributesMapping: N,
    });
  }),
  I = w.forwardRef(function (t, n) {
    let {
        disabled: r,
        className: a,
        id: o,
        render: s,
        nativeButton: l = !0,
        style: u,
        ...d
      } = t,
      { panelId: f, open: p, handleTrigger: m, disabled: h } = v(),
      { getButtonProps: g, buttonRef: _ } = i({
        disabled: r || h,
        focusableWhenDisabled: !0,
        native: l,
      }),
      { state: y, setTriggerId: b, triggerId: x } = j();
    return (
      e(
        () => (
          o && b(o),
          () => {
            b(void 0);
          }
        ),
        [o, b],
      ),
      c(`button`, t, {
        state: y,
        ref: [n, _],
        props: [
          {
            "aria-controls": p ? f : void 0,
            "aria-expanded": p,
            id: x,
            onClick: m,
          },
          d,
          g,
        ],
        stateAttributesMapping: S,
      })
    );
  }),
  L = (function (e) {
    return (
      (e.accordionPanelHeight = `--accordion-panel-height`),
      (e.accordionPanelWidth = `--accordion-panel-width`),
      e
    );
  })({}),
  R = w.forwardRef(function (t, n) {
    let {
        className: i,
        hiddenUntilFound: a,
        keepMounted: o,
        id: s,
        render: l,
        style: u,
        ...d
      } = t,
      { hiddenUntilFound: f, keepMounted: p } = E(),
      {
        mounted: m,
        onOpenChange: h,
        open: g,
        panelId: _,
        setMounted: y,
        setOpen: b,
        setPanelIdState: x,
        transitionStatus: S,
      } = v(),
      w = a ?? f,
      T = o ?? p;
    e(() => {
      if (s)
        return (
          x(s),
          () => {
            x(void 0);
          }
        );
    }, [s, x]);
    let {
        height: D,
        props: O,
        ref: k,
        shouldPreventOpenAnimation: A,
        shouldRender: M,
        transitionStatus: P,
        width: F,
      } = C({
        externalRef: n,
        hiddenUntilFound: w,
        id: s ?? _,
        keepMounted: T,
        mounted: m,
        onOpenChange: h,
        open: g,
        setMounted: y,
        setOpen: b,
        transitionStatus: S,
      }),
      { state: I, triggerId: R } = j(),
      z = { ...I, transitionStatus: P },
      B = r(u, z),
      V = c(
        `div`,
        { ...t, style: void 0 },
        {
          state: z,
          ref: k,
          props: [
            O,
            {
              "aria-labelledby": R,
              role: `region`,
              style: {
                [L.accordionPanelHeight]: D === void 0 ? `auto` : `${D}px`,
                [L.accordionPanelWidth]: F === void 0 ? `auto` : `${F}px`,
              },
            },
            d,
            B ? { style: B } : void 0,
            A ? { style: { animationName: `none` } } : void 0,
          ],
          stateAttributesMapping: N,
        },
      );
    return M ? V : null;
  }),
  z = w.forwardRef(({ className: e, ...t }, n) =>
    (0, D.jsx)(k, {
      ref: n,
      "data-slot": `accordion`,
      className: g(`flex flex-col`, e),
      ...t,
    }),
  );
z.displayName = `Accordion`;
var B = w.forwardRef(({ className: e, ...t }, n) =>
  (0, D.jsx)(P, {
    ref: n,
    "data-slot": `accordion-item`,
    className: g(`not-last:border-b`, e),
    ...t,
  }),
);
B.displayName = `AccordionItem`;
var V = w.forwardRef(({ className: e, children: t, ...n }, r) =>
  (0, D.jsx)(F, {
    className: g(`flex`, e),
    children: (0, D.jsxs)(I, {
      ref: r,
      "data-slot": `accordion-trigger`,
      className: `group/accordion-trigger relative flex flex-1 items-start justify-between gap-4 rounded-lg border border-transparent py-2.5 text-left text-sm font-medium transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:after:border-ring aria-disabled:pointer-events-none aria-disabled:opacity-50`,
      ...n,
      children: [
        t,
        (0, D.jsx)(_, {
          "data-slot": `accordion-trigger-icon`,
          className: `size-4 text-muted-foreground pointer-events-none shrink-0 transition-[rotate] duration-200 group-data-panel-open/accordion-trigger:rotate-180`,
        }),
      ],
    }),
  }),
);
V.displayName = `AccordionTrigger`;
var H = w.forwardRef(({ className: e, children: t, ...n }, r) =>
  (0, D.jsx)(R, {
    ref: r,
    "data-slot": `accordion-content`,
    className: `overflow-hidden text-sm h-(--accordion-panel-height) transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0`,
    ...n,
    children: (0, D.jsx)(`div`, { className: g(`pb-4 pt-0`, e), children: t }),
  }),
);
H.displayName = `AccordionContent`;
export { V as i, H as n, B as r, z as t };
