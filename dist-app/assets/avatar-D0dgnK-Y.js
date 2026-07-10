import {
  Gn as e,
  Hn as t,
  I as n,
  Nn as r,
  O as i,
  Pn as a,
  Un as o,
  cr as s,
  dr as c,
  k as l,
  qn as u,
  zn as d,
} from "./showcase-vJrKG7HA.js";
import { n as f } from "./useTimeout-DMagV02N.js";
var p = c(s(), 1),
  m = p.createContext(void 0);
function h() {
  let e = p.useContext(m);
  if (e === void 0) throw Error(t(13));
  return e;
}
var g = { imageLoadingStatus: () => null },
  _ = r(),
  v = p.forwardRef(function (e, t) {
    let { className: n, render: r, style: i, ...o } = e,
      [s, c] = p.useState(`idle`),
      l = { imageLoadingStatus: s },
      u = p.useMemo(
        () => ({ imageLoadingStatus: s, setImageLoadingStatus: c }),
        [s, c],
      ),
      d = a(`span`, e, {
        state: l,
        ref: t,
        props: o,
        stateAttributesMapping: g,
      });
    return (0, _.jsx)(m.Provider, { value: u, children: d });
  });
function y(t, { referrerPolicy: n, crossOrigin: r, sizes: i, srcSet: a }) {
  let [o, s] = p.useState(`idle`);
  return (
    e(() => {
      if (!t && !a) return (s(`error`), d);
      let e = !0,
        o = new window.Image(),
        c = (t) => () => {
          e && s(t);
        };
      return (
        s(`loading`),
        (o.onload = c(`loaded`)),
        (o.onerror = c(`error`)),
        n && (o.referrerPolicy = n),
        (o.crossOrigin = r ?? null),
        i && (o.sizes = i),
        a && (o.srcset = a),
        t && (o.src = t),
        o.complete && s(o.naturalWidth > 0 ? `loaded` : `error`),
        () => {
          e = !1;
        }
      );
    }, [t, a, i, r, n]),
    o
  );
}
var b = { ...g, ...n },
  x = p.forwardRef(function (t, n) {
    let {
        className: r,
        render: s,
        onLoadingStatusChange: c,
        style: u,
        ...d
      } = t,
      { setImageLoadingStatus: f } = h(),
      m = y(d.src, d),
      g = m === `loaded`,
      { mounted: _, transitionStatus: v, setMounted: x } = i(g),
      S = p.useRef(null),
      C = o((e) => {
        (c?.(e), f(e));
      });
    (e(() => {
      m !== `idle` && C(m);
    }, [m, C]),
      e(() => () => f(`idle`), [f]),
      l({
        open: g,
        ref: S,
        onComplete() {
          g || x(!1);
        },
      }));
    let w = a(`img`, t, {
      state: { imageLoadingStatus: m, transitionStatus: v },
      ref: [n, S],
      props: d,
      stateAttributesMapping: b,
      enabled: _,
    });
    return _ ? w : null;
  }),
  S = p.forwardRef(function (e, t) {
    let { className: n, render: r, delay: i, style: o, ...s } = e,
      { imageLoadingStatus: c } = h(),
      [l, u] = p.useState(i === void 0),
      d = f();
    return (
      p.useEffect(
        () => (i === void 0 ? u(!0) : d.start(i, () => u(!0)), d.clear),
        [d, i],
      ),
      a(`span`, e, {
        state: { imageLoadingStatus: c },
        ref: t,
        props: s,
        stateAttributesMapping: g,
        enabled: c !== `loaded` && (i === void 0 || l),
      })
    );
  }),
  C = p.forwardRef(({ className: e, size: t = `md`, ...n }, r) =>
    (0, _.jsx)(v, {
      ref: r,
      "data-slot": `avatar`,
      "data-size": t,
      className: u(
        `group/avatar relative flex size-8 shrink-0 rounded-full select-none after:absolute after:inset-0 after:rounded-full after:border after:border-border after:mix-blend-darken data-[size=lg]:size-10 data-[size=sm]:size-6 dark:after:mix-blend-lighten`,
        `group-data-[slot=avatar-group]/avatar-group:ring-2 group-data-[slot=avatar-group]/avatar-group:ring-background`,
        e,
      ),
      ...n,
    }),
  );
C.displayName = `Avatar`;
var w = p.forwardRef(({ className: e, ...t }, n) =>
  (0, _.jsx)(x, {
    ref: n,
    "data-slot": `avatar-image`,
    className: u(`aspect-square size-full rounded-full object-cover`, e),
    ...t,
  }),
);
w.displayName = `AvatarImage`;
var T = p.forwardRef(({ className: e, ...t }, n) =>
  (0, _.jsx)(S, {
    ref: n,
    "data-slot": `avatar-fallback`,
    className: u(
      `flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground group-data-[size=sm]/avatar:text-xs group-data-[size=lg]/avatar:text-base`,
      e,
    ),
    ...t,
  }),
);
T.displayName = `AvatarFallback`;
var E = p.forwardRef(({ className: e, ...t }, n) =>
  (0, _.jsx)(`span`, {
    ref: n,
    "data-slot": `avatar-badge`,
    className: u(
      `rounded-full bg-primary ring-2 ring-background`,
      `group-data-[size=sm]/avatar:size-2`,
      `group-data-[size=md]/avatar:size-2.5`,
      `group-data-[size=lg]/avatar:size-3`,
      e,
    ),
    ...t,
  }),
);
E.displayName = `AvatarBadge`;
var D = p.forwardRef(({ className: e, ...t }, n) =>
  (0, _.jsx)(`div`, {
    ref: n,
    "data-slot": `avatar-group`,
    className: u(`group/avatar-group flex -space-x-2`, e),
    ...t,
  }),
);
D.displayName = `AvatarGroup`;
var O = p.forwardRef(({ className: e, size: t = `md`, ...n }, r) =>
  (0, _.jsx)(`div`, {
    ref: r,
    "data-slot": `avatar-group-count`,
    "data-size": t,
    className: u(
      `relative flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm text-muted-foreground ring-2 ring-background data-[size=lg]:size-10 data-[size=sm]:size-6`,
      e,
    ),
    ...n,
  }),
);
O.displayName = `AvatarGroupCount`;
export { O as a, D as i, E as n, w as o, T as r, C as t };
