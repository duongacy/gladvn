import {
  Bt as e,
  Fn as t,
  Gn as n,
  Hn as r,
  It as i,
  Lt as a,
  Nn as ee,
  Pn as te,
  Rn as o,
  Rt as ne,
  Un as re,
  cn as ie,
  cr as s,
  dr as c,
  ir as l,
  qn as u,
  vt as d,
} from "./showcase-vJrKG7HA.js";
import { t as f } from "./chevron-right-B7sWI4XD.js";
import { n as p } from "./useTimeout-DMagV02N.js";
import {
  A as m,
  d as ae,
  f as oe,
  i as h,
  m as se,
  p as ce,
  w as g,
} from "./popupStateMapping-wxS0crot.js";
import { n as le, t as ue } from "./safePolygon-B0gZX8K1.js";
import { t as de } from "./useFocus-BjzyLaz1.js";
import { E as fe, g as _, gt as pe, yt as me } from "./index-Dk0REsC9.js";
import {
  _ as v,
  c as y,
  d as b,
  f as x,
  g as S,
  h as C,
  i as w,
  l as T,
  m as E,
  n as he,
  o as D,
  p as O,
  r as k,
  s as A,
  t as j,
  u as M,
  x as N,
  y as P,
} from "./MenuSubmenuTrigger-DI6U4VRr.js";
import { t as ge } from "./CompositeItem-lQIM2wtg.js";
import { t as _e } from "./useTriggerFocusGuards-C5aWF6X4.js";
var F = c(s(), 1);
function ve(t) {
  let { enabled: n = !0, mouseDownAction: r, open: i } = t,
    a = F.useRef(!1);
  return F.useMemo(
    () =>
      n
        ? {
            onMouseDown: (t) => {
              ((r === `open` && !i) || (r === `close` && i)) &&
                ((a.current = !0),
                e(t.currentTarget).addEventListener(
                  `click`,
                  () => {
                    a.current = !1;
                  },
                  { once: !0 },
                ));
            },
            onClick: (e) => {
              a.current && ((a.current = !1), e.preventBaseUIHandler());
            },
          }
        : o,
    [n, r, i],
  );
}
var I = ee(),
  L = 2,
  R = m(function (n, ee) {
    let {
        render: s,
        className: c,
        style: l,
        disabled: u = !1,
        nativeButton: f = !0,
        id: m,
        openOnHover: _,
        delay: v = 100,
        closeDelay: y = 0,
        handle: b,
        payload: x,
        ...S
      } = n,
      C = N(!0),
      w = b?.store ?? C?.store;
    if (!w) throw Error(r(85));
    let T = ne(m),
      E = w.useState(`isTriggerActive`, T),
      D = w.useState(`floatingRootContext`),
      O = w.useState(`isOpenedByTrigger`, T),
      k = w.useState(`triggerPopupId`, T),
      A = F.useRef(null),
      j = be(),
      M = a(!0),
      P = ce(),
      R = F.useMemo(() => P ?? new se(), [P]),
      { registerTrigger: z, isMountedByThisTrigger: B } = pe(T, A, w, {
        payload: x,
        closeDelay: y,
        parent: j,
        floatingTreeRoot: R,
        floatingNodeId: ae(R),
        floatingParentNodeId: oe(),
        keyboardEventRelay: M?.relayKeyboardEvent,
      }),
      V = j.type === `menubar`,
      H = w.useState(`disabled`),
      U = u || H || (V && j.context.disabled),
      { getButtonProps: W, buttonRef: G } = i({ disabled: U, native: f });
    F.useEffect(() => {
      !O &&
        j.type === void 0 &&
        (w.context.allowMouseUpTriggerRef.current = !1);
    }, [w, O, j.type]);
    let K = F.useRef(null),
      q = p(),
      J = re((e) => {
        if (!K.current) return;
        (q.clear(), (w.context.allowMouseUpTriggerRef.current = !1));
        let t = e.target;
        if (
          d(K.current, t) ||
          d(w.select(`positionerElement`), t) ||
          t === K.current ||
          (t != null && he(t) === w.select(`rootId`))
        )
          return;
        let n = fe(K.current);
        (e.clientX >= n.left - L &&
          e.clientX <= n.right + L &&
          e.clientY >= n.top - L &&
          e.clientY <= n.bottom + L) ||
          R.events.emit(`close`, { domEvent: e, reason: ie });
      });
    F.useEffect(() => {
      O &&
        w.select(`lastOpenChangeReason`) === `trigger-hover` &&
        e(K.current).addEventListener(`mouseup`, J, { once: !0 });
    }, [O, J, w]);
    let Y = V && j.context.hasSubmenuOpen,
      X = le(D, {
        enabled:
          (_ ?? Y) && !U && j.type !== `context-menu` && (!V || (Y && !B)),
        handleClose: ue({ blockPointerEvents: !V }),
        mouseOnly: !0,
        move: !1,
        restMs: j.type === void 0 ? v : void 0,
        delay: { close: y },
        triggerElementRef: A,
        externalTree: R,
        isActiveTrigger: E,
        isClosing: () => w.select(`transitionStatus`) === `ending`,
      }),
      Z = ye(O, w.select(`lastOpenChangeReason`)),
      Q = me(D, {
        enabled: !U && j.type !== `context-menu`,
        event: O && V ? `click` : `mousedown`,
        toggle: !0,
        ignoreMouse: !1,
        stickIfOpen: j.type === void 0 ? Z : !1,
      }),
      $ = de(D, { enabled: !U && Y }),
      xe = ve({ open: O, enabled: V, mouseDownAction: `open` }),
      Se = F.useMemo(
        () => t($.reference, Q.reference),
        [$.reference, Q.reference],
      ),
      Ce = w.useState(`triggerProps`, B),
      {
        preFocusGuardRef: we,
        handlePreFocusGuardFocus: Te,
        handleFocusTargetFocus: Ee,
      } = _e(w, A),
      De = { disabled: U, open: O },
      Oe = [K, ee, G, z, A],
      ke = [
        Se,
        X ?? o,
        Ce,
        {
          "aria-haspopup": `menu`,
          "aria-controls": k,
          id: T,
          onMouseDown: (t) => {
            w.select(`open`) ||
              (q.start(200, () => {
                w.context.allowMouseUpTriggerRef.current = !0;
              }),
              e(t.currentTarget).addEventListener(`mouseup`, J, { once: !0 }));
          },
        },
        V ? { role: `menuitem` } : {},
        xe,
        S,
        W,
      ],
      Ae = te(`button`, n, {
        enabled: !V,
        stateAttributesMapping: h,
        state: De,
        ref: Oe,
        props: ke,
      });
    return V
      ? (0, I.jsx)(ge, {
          tag: `button`,
          render: s,
          className: c,
          style: l,
          state: De,
          refs: Oe,
          props: ke,
          stateAttributesMapping: h,
        })
      : O
        ? (0, I.jsxs)(F.Fragment, {
            children: [
              (0, I.jsx)(g, { ref: we, onFocus: Te }, `${T}-pre-focus-guard`),
              (0, I.jsx)(F.Fragment, { children: Ae }, T),
              (0, I.jsx)(
                g,
                { ref: w.context.triggerFocusTargetRef, onFocus: Ee },
                `${T}-post-focus-guard`,
              ),
            ],
          })
        : (0, I.jsx)(F.Fragment, { children: Ae }, T);
  });
function ye(e, t) {
  let r = p(),
    [i, a] = F.useState(!1);
  return (
    n(() => {
      e && t === `trigger-hover`
        ? (a(!0),
          r.start(500, () => {
            a(!1);
          }))
        : e || (r.clear(), a(!1));
    }, [e, t, r]),
    i
  );
}
function be() {
  let e = P(!0),
    t = N(!0),
    n = D(!0);
  return F.useMemo(
    () =>
      n
        ? { type: `menubar`, context: n }
        : e && !t
          ? { type: `context-menu`, context: e }
          : { type: void 0 },
    [e, t, n],
  );
}
function z({ ...e }) {
  return (0, I.jsx)(w, { "data-slot": `dropdown-menu`, ...e });
}
function B({ ...e }) {
  return (0, I.jsx)(R, { "data-slot": `dropdown-menu-trigger`, ...e });
}
function V({
  align: e = `start`,
  alignOffset: t = 0,
  side: n = `bottom`,
  sideOffset: r = 4,
  className: i,
  ...a
}) {
  return (0, I.jsx)(b, {
    children: (0, I.jsx)(M, {
      className: `isolate z-50 outline-none`,
      align: e,
      alignOffset: t,
      side: n,
      sideOffset: r,
      children: (0, I.jsx)(x, {
        "data-slot": `dropdown-menu-content`,
        className: u(
          `z-50 max-h-(--available-height) w-(--anchor-width) min-w-32 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 outline-none data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:overflow-hidden data-closed:fade-out-0 data-closed:zoom-out-95`,
          i,
        ),
        ...a,
      }),
    }),
  });
}
function H({ ...e }) {
  return (0, I.jsx)(C, { "data-slot": `dropdown-menu-group`, ...e });
}
function U({ className: e, inset: t, ...n }) {
  return (0, I.jsx)(E, {
    "data-slot": `dropdown-menu-label`,
    "data-inset": t,
    className: u(
      `px-1.5 py-1 text-xs font-medium text-muted-foreground data-inset:pl-7`,
      e,
    ),
    ...n,
  });
}
function W({ className: e, inset: t, variant: n, ...r }) {
  return (0, I.jsx)(O, {
    "data-slot": `dropdown-menu-item`,
    "data-inset": t,
    "data-variant": n,
    className: u(
      `group/dropdown-menu-item relative flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:[&>svg]:text-accent-foreground data-inset:pl-7 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-disabled:pointer-events-none data-disabled:opacity-50 [&>svg]:pointer-events-none [&>svg]:shrink-0 [&>svg:not([class*='size-'])]:size-4 data-[variant=destructive]:[&>svg]:text-destructive`,
      e,
    ),
    ...r,
  });
}
function G({ ...e }) {
  return (0, I.jsx)(k, { "data-slot": `dropdown-menu-sub`, ...e });
}
function K({ className: e, inset: t, children: n, ...r }) {
  return (0, I.jsxs)(j, {
    "data-slot": `dropdown-menu-sub-trigger`,
    "data-inset": t,
    className: u(
      `flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:[&>svg]:text-accent-foreground data-inset:pl-7 data-popup-open:bg-accent data-popup-open:text-accent-foreground data-open:bg-accent data-open:text-accent-foreground [&>svg]:pointer-events-none [&>svg]:shrink-0 [&>svg:not([class*='size-'])]:size-4`,
      e,
    ),
    ...r,
    children: [n, (0, I.jsx)(f, { className: `ml-auto` })],
  });
}
function q({
  align: e = `start`,
  alignOffset: t = -3,
  side: n = `right`,
  sideOffset: r = 0,
  className: i,
  ...a
}) {
  return (0, I.jsx)(V, {
    "data-slot": `dropdown-menu-sub-content`,
    className: u(
      `w-auto min-w-[96px] rounded-lg bg-popover p-1 text-popover-foreground shadow-lg ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95`,
      i,
    ),
    align: e,
    alignOffset: t,
    side: n,
    sideOffset: r,
    ...a,
  });
}
function J({ className: e, children: t, checked: n, inset: r, ...i }) {
  return (0, I.jsxs)(v, {
    "data-slot": `dropdown-menu-checkbox-item`,
    "data-inset": r,
    className: u(
      `relative flex cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus:[&>svg]:text-accent-foreground data-inset:pl-7 data-disabled:pointer-events-none data-disabled:opacity-50 [&>svg]:pointer-events-none [&>svg]:shrink-0 [&>svg:not([class*='size-'])]:size-4`,
      e,
    ),
    checked: n,
    ...i,
    children: [
      (0, I.jsx)(`span`, {
        className: `pointer-events-none absolute right-2 flex items-center justify-center`,
        "data-slot": `dropdown-menu-checkbox-item-indicator`,
        children: (0, I.jsx)(S, { children: (0, I.jsx)(l, {}) }),
      }),
      t,
    ],
  });
}
function Y({ ...e }) {
  return (0, I.jsx)(T, { "data-slot": `dropdown-menu-radio-group`, ...e });
}
function X({ className: e, children: t, inset: n, ...r }) {
  return (0, I.jsxs)(y, {
    "data-slot": `dropdown-menu-radio-item`,
    "data-inset": n,
    className: u(
      `relative flex cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus:[&>svg]:text-accent-foreground data-inset:pl-7 data-disabled:pointer-events-none data-disabled:opacity-50 [&>svg]:pointer-events-none [&>svg]:shrink-0 [&>svg:not([class*='size-'])]:size-4`,
      e,
    ),
    ...r,
    children: [
      (0, I.jsx)(`span`, {
        className: `pointer-events-none absolute right-2 flex items-center justify-center`,
        "data-slot": `dropdown-menu-radio-item-indicator`,
        children: (0, I.jsx)(A, { children: (0, I.jsx)(l, {}) }),
      }),
      t,
    ],
  });
}
function Z({ className: e, ...t }) {
  return (0, I.jsx)(_, {
    "data-slot": `dropdown-menu-separator`,
    className: u(`-mx-1 my-1 h-px bg-border`, e),
    ...t,
  });
}
function Q({ className: e, ...t }) {
  return (0, I.jsx)(`span`, {
    "data-slot": `dropdown-menu-shortcut`,
    className: u(
      `ml-auto text-xs tracking-widest text-muted-foreground group-focus/dropdown-menu-item:text-accent-foreground`,
      e,
    ),
    ...t,
  });
}
export {
  W as a,
  X as c,
  G as d,
  q as f,
  H as i,
  Z as l,
  B as m,
  J as n,
  U as o,
  K as p,
  V as r,
  Y as s,
  z as t,
  Q as u,
};
