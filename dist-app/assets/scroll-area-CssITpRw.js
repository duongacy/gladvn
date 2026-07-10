import {
  Gn as e,
  Hn as t,
  Nn as n,
  Pn as r,
  Rt as i,
  Un as a,
  _ as o,
  cr as s,
  dr as c,
  i as l,
  n as u,
  qn as d,
  r as f,
  vt as ee,
  yt as p,
} from "./showcase-vJrKG7HA.js";
import { i as m, n as h } from "./useTimeout-DMagV02N.js";
import { t as g } from "./addEventListener-VyGXw_SB.js";
import { A as _, Rt as v, k as y, v as b } from "./index-Dk0REsC9.js";
var x = c(s(), 1),
  S = x.createContext(void 0);
function C() {
  let e = x.useContext(S);
  if (e === void 0) throw Error(t(53));
  return e;
}
var w = (function (e) {
  return (
    (e.scrollAreaCornerHeight = `--scroll-area-corner-height`),
    (e.scrollAreaCornerWidth = `--scroll-area-corner-width`),
    e
  );
})({});
function T(e, t, n) {
  if (!e) return 0;
  let r = getComputedStyle(e),
    i = n === `x` ? `Inline` : `Block`;
  return n === `x` && t === `margin`
    ? parseFloat(r[`${t}InlineStart`]) * 2
    : parseFloat(r[`${t}${i}Start`]) + parseFloat(r[`${t}${i}End`]);
}
var te = (function (e) {
    return (
      (e.orientation = `data-orientation`),
      (e.hovering = `data-hovering`),
      (e.scrolling = `data-scrolling`),
      (e.hasOverflowX = `data-has-overflow-x`),
      (e.hasOverflowY = `data-has-overflow-y`),
      (e.overflowXStart = `data-overflow-x-start`),
      (e.overflowXEnd = `data-overflow-x-end`),
      (e.overflowYStart = `data-overflow-y-start`),
      (e.overflowYEnd = `data-overflow-y-end`),
      e
    );
  })({}),
  E = (function (e) {
    return (
      (e.scrolling = `data-scrolling`),
      (e.hasOverflowX = `data-has-overflow-x`),
      (e.hasOverflowY = `data-has-overflow-y`),
      (e.overflowXStart = `data-overflow-x-start`),
      (e.overflowXEnd = `data-overflow-x-end`),
      (e.overflowYStart = `data-overflow-y-start`),
      (e.overflowYEnd = `data-overflow-y-end`),
      e
    );
  })({}),
  D = {
    hasOverflowX: (e) => (e ? { [E.hasOverflowX]: `` } : null),
    hasOverflowY: (e) => (e ? { [E.hasOverflowY]: `` } : null),
    overflowXStart: (e) => (e ? { [E.overflowXStart]: `` } : null),
    overflowXEnd: (e) => (e ? { [E.overflowXEnd]: `` } : null),
    overflowYStart: (e) => (e ? { [E.overflowYStart]: `` } : null),
    overflowYEnd: (e) => (e ? { [E.overflowYEnd]: `` } : null),
    cornerHidden: () => null,
  },
  O = n(),
  k = { x: 0, y: 0 },
  A = { width: 0, height: 0 },
  j = { xStart: !1, xEnd: !1, yStart: !1, yEnd: !1 },
  ne = { x: !0, y: !0, corner: !0 },
  M = x.forwardRef(function (e, t) {
    let {
        render: n,
        className: o,
        overflowEdgeThreshold: s,
        style: c,
        ...l
      } = e,
      { xStart: u, xEnd: d, yStart: f, yEnd: p } = N(s),
      m = i(),
      g = h(),
      _ = h(),
      { nonce: y, disableStyleElements: C } = v(),
      [E, M] = x.useState(!1),
      [P, F] = x.useState(!1),
      [I, L] = x.useState(!1),
      [R, re] = x.useState(!1),
      [ie, z] = x.useState(!1),
      [B, V] = x.useState(A),
      [H, U] = x.useState(A),
      [W, G] = x.useState(j),
      [K, ae] = x.useState(ne),
      q = x.useRef(null),
      J = x.useRef(null),
      Y = x.useRef(null),
      X = x.useRef(null),
      Z = x.useRef(null),
      Q = x.useRef(null),
      oe = x.useRef(null),
      se = x.useRef(!1),
      ce = x.useRef(0),
      le = x.useRef(0),
      ue = x.useRef(0),
      de = x.useRef(0),
      $ = x.useRef(`vertical`),
      fe = x.useRef(k),
      pe = a((e) => {
        let t = e.x - fe.current.x,
          n = e.y - fe.current.y;
        ((fe.current = e),
          n !== 0 &&
            (L(!0),
            g.start(500, () => {
              L(!1);
            })),
          t !== 0 &&
            (F(!0),
            _.start(500, () => {
              F(!1);
            })));
      }),
      me = a((e) => {
        e.button === 0 &&
          ((se.current = !0),
          (ce.current = e.clientY),
          (le.current = e.clientX),
          ($.current = e.currentTarget.getAttribute(te.orientation)),
          J.current &&
            ((ue.current = J.current.scrollTop),
            (de.current = J.current.scrollLeft)),
          Z.current &&
            $.current === `vertical` &&
            Z.current.setPointerCapture(e.pointerId),
          Q.current &&
            $.current === `horizontal` &&
            Q.current.setPointerCapture(e.pointerId));
      }),
      he = a((e) => {
        if (!se.current) return;
        let t = e.clientY - ce.current,
          n = e.clientX - le.current;
        if (J.current) {
          let r = J.current.scrollHeight,
            i = J.current.clientHeight,
            a = J.current.scrollWidth,
            o = J.current.clientWidth;
          if (Z.current && Y.current && $.current === `vertical`) {
            let n = T(Y.current, `padding`, `y`),
              a = T(Z.current, `margin`, `y`),
              o = Z.current.offsetHeight,
              s = t / (Y.current.offsetHeight - o - n - a);
            ((J.current.scrollTop = ue.current + s * (r - i)),
              e.preventDefault(),
              L(!0),
              g.start(500, () => {
                L(!1);
              }));
          }
          if (Q.current && X.current && $.current === `horizontal`) {
            let t = T(X.current, `padding`, `x`),
              r = T(Q.current, `margin`, `x`),
              i = Q.current.offsetWidth,
              s = n / (X.current.offsetWidth - i - t - r);
            ((J.current.scrollLeft = de.current + s * (a - o)),
              e.preventDefault(),
              F(!0),
              _.start(500, () => {
                F(!1);
              }));
          }
        }
      }),
      ge = a((e) => {
        ((se.current = !1),
          Z.current &&
            $.current === `vertical` &&
            Z.current.hasPointerCapture(e.pointerId) &&
            Z.current.releasePointerCapture(e.pointerId),
          Q.current &&
            $.current === `horizontal` &&
            Q.current.hasPointerCapture(e.pointerId) &&
            Q.current.releasePointerCapture(e.pointerId));
      });
    function _e(e) {
      re(e.pointerType === `touch`);
    }
    function ve(e) {
      if ((_e(e), e.pointerType !== `touch`)) {
        let t = ee(q.current, e.target);
        M(t);
      }
    }
    let ye = x.useMemo(
        () => ({
          scrolling: P || I,
          hasOverflowX: !K.x,
          hasOverflowY: !K.y,
          overflowXStart: W.xStart,
          overflowXEnd: W.xEnd,
          overflowYStart: W.yStart,
          overflowYEnd: W.yEnd,
          cornerHidden: K.corner,
        }),
        [P, I, K.x, K.y, K.corner, W],
      ),
      be = {
        role: `presentation`,
        onPointerEnter: ve,
        onPointerMove: ve,
        onPointerDown: _e,
        onPointerLeave() {
          M(!1);
        },
        style: {
          position: `relative`,
          [w.scrollAreaCornerHeight]: `${B.height}px`,
          [w.scrollAreaCornerWidth]: `${B.width}px`,
        },
      },
      xe = r(`div`, e, {
        state: ye,
        ref: [t, q],
        props: [be, l],
        stateAttributesMapping: D,
      }),
      Se = x.useMemo(
        () => ({
          handlePointerDown: me,
          handlePointerMove: he,
          handlePointerUp: ge,
          handleScroll: pe,
          cornerSize: B,
          setCornerSize: V,
          thumbSize: H,
          setThumbSize: U,
          hasMeasuredScrollbar: ie,
          setHasMeasuredScrollbar: z,
          touchModality: R,
          cornerRef: oe,
          scrollingX: P,
          setScrollingX: F,
          scrollingY: I,
          setScrollingY: L,
          hovering: E,
          setHovering: M,
          viewportRef: J,
          rootRef: q,
          scrollbarYRef: Y,
          scrollbarXRef: X,
          thumbYRef: Z,
          thumbXRef: Q,
          rootId: m,
          hiddenState: K,
          setHiddenState: ae,
          overflowEdges: W,
          setOverflowEdges: G,
          viewportState: ye,
          overflowEdgeThreshold: { xStart: u, xEnd: d, yStart: f, yEnd: p },
        }),
        [
          me,
          he,
          ge,
          pe,
          B,
          H,
          ie,
          R,
          P,
          F,
          I,
          L,
          E,
          M,
          m,
          K,
          W,
          ye,
          u,
          d,
          f,
          p,
        ],
      );
    return (0, O.jsxs)(S.Provider, {
      value: Se,
      children: [!C && b.getElement(y), xe],
    });
  });
function N(e) {
  if (typeof e == `number`) {
    let t = Math.max(0, e);
    return { xStart: t, xEnd: t, yStart: t, yEnd: t };
  }
  return {
    xStart: Math.max(0, e?.xStart || 0),
    xEnd: Math.max(0, e?.xEnd || 0),
    yStart: Math.max(0, e?.yStart || 0),
    yEnd: Math.max(0, e?.yEnd || 0),
  };
}
var P = x.createContext(void 0),
  F = (function (e) {
    return (
      (e.scrollAreaOverflowXStart = `--scroll-area-overflow-x-start`),
      (e.scrollAreaOverflowXEnd = `--scroll-area-overflow-x-end`),
      (e.scrollAreaOverflowYStart = `--scroll-area-overflow-y-start`),
      (e.scrollAreaOverflowYEnd = `--scroll-area-overflow-y-end`),
      e
    );
  })({}),
  I = !1;
function L() {
  I ||
    m ||
    (typeof CSS < `u` &&
      `registerProperty` in CSS &&
      [
        F.scrollAreaOverflowXStart,
        F.scrollAreaOverflowXEnd,
        F.scrollAreaOverflowYStart,
        F.scrollAreaOverflowYEnd,
      ].forEach((e) => {
        try {
          CSS.registerProperty({
            name: e,
            syntax: `<length>`,
            inherits: !1,
            initialValue: `0px`,
          });
        } catch {}
      }),
    (I = !0));
}
var R = x.forwardRef(function (t, n) {
  let { render: i, className: s, style: c, ...l } = t,
    {
      viewportRef: u,
      scrollbarYRef: d,
      scrollbarXRef: f,
      thumbYRef: ee,
      thumbXRef: p,
      cornerRef: m,
      cornerSize: g,
      setCornerSize: v,
      setThumbSize: S,
      rootId: w,
      setHiddenState: te,
      hiddenState: E,
      setHasMeasuredScrollbar: k,
      handleScroll: A,
      setHovering: j,
      setOverflowEdges: ne,
      overflowEdges: M,
      overflowEdgeThreshold: N,
      scrollingX: I,
      scrollingY: R,
    } = C(),
    z = o(),
    B = x.useRef(!0),
    V = x.useRef([NaN, NaN, NaN, NaN]),
    H = h(),
    U = h(),
    W = a(() => {
      let e = u.current,
        t = d.current,
        n = f.current,
        r = ee.current,
        i = p.current,
        a = m.current;
      if (!e) return;
      let o = e.scrollHeight,
        s = e.scrollWidth,
        c = e.clientHeight,
        l = e.clientWidth,
        h = e.scrollTop,
        b = e.scrollLeft,
        x = V.current,
        C = Number.isNaN(x[0]);
      if (
        ((x[0] = c),
        (x[1] = o),
        (x[2] = l),
        (x[3] = s),
        C && k(!0),
        o === 0 || s === 0)
      )
        return;
      let w = re(e),
        E = w.y,
        D = w.x,
        O = l / s,
        A = c / o,
        j = Math.max(0, s - l),
        M = Math.max(0, o - c),
        P = 0,
        I = 0;
      if (!D) {
        let e = 0;
        ((e = _(z === `rtl` ? -b : b, 0, j)), (P = y(e, j)), (I = j - P));
      }
      let L = E ? 0 : _(h, 0, M),
        R = E ? 0 : y(L, M),
        B = E ? 0 : M - R,
        H = D ? 0 : l,
        U = E ? 0 : c,
        W = 0,
        G = 0;
      !D && !E && ((W = t?.offsetWidth || 0), (G = n?.offsetHeight || 0));
      let K = g.width === 0 && g.height === 0,
        ae = K ? W : 0,
        q = K ? G : 0,
        J = T(n, `padding`, `x`),
        Y = T(t, `padding`, `y`),
        X = T(i, `margin`, `x`),
        Z = T(r, `margin`, `y`),
        Q = H - J - X,
        oe = U - Y - Z,
        se = n ? Math.min(n.offsetWidth - ae, Q) : Q,
        ce = t ? Math.min(t.offsetHeight - q, oe) : oe,
        le = Math.max(16, se * O),
        ue = Math.max(16, ce * A);
      if (
        (S((e) =>
          e.height === ue && e.width === le ? e : { width: le, height: ue },
        ),
        t && r)
      ) {
        let e = t.offsetHeight - ue - Y - Z,
          n = o - c,
          i = n === 0 ? 0 : h / n,
          a = Math.min(e, Math.max(0, i * e));
        r.style.transform = `translate3d(0,${a}px,0)`;
      }
      if (n && i) {
        let e = n.offsetWidth - le - J - X,
          t = s - l,
          r = t === 0 ? 0 : b / t,
          a = z === `rtl` ? _(r * e, -e, 0) : _(r * e, 0, e);
        i.style.transform = `translate3d(${a}px,0,0)`;
      }
      let de = [
        [F.scrollAreaOverflowXStart, P],
        [F.scrollAreaOverflowXEnd, I],
        [F.scrollAreaOverflowYStart, R],
        [F.scrollAreaOverflowYEnd, B],
      ];
      for (let [t, n] of de) e.style.setProperty(t, `${n}px`);
      (a &&
        (D || E
          ? v({ width: 0, height: 0 })
          : !D && !E && v({ width: W, height: G })),
        te((e) => ie(e, w)));
      let $ = {
        xStart: !D && P > N.xStart,
        xEnd: !D && I > N.xEnd,
        yStart: !E && R > N.yStart,
        yEnd: !E && B > N.yEnd,
      };
      ne((e) =>
        e.xStart === $.xStart &&
        e.xEnd === $.xEnd &&
        e.yStart === $.yStart &&
        e.yEnd === $.yEnd
          ? e
          : $,
      );
    });
  (e(() => {
    u.current && L();
  }, [u]),
    e(() => {
      queueMicrotask(W);
    }, [W, E, z, N.xStart, N.xEnd, N.yStart, N.yEnd]),
    e(() => {
      u.current?.matches(`:hover`) && j(!0);
    }, [u, j]),
    e(() => {
      let e = u.current;
      if (typeof ResizeObserver > `u` || !e) return;
      let t = !1,
        n = new ResizeObserver(() => {
          if (!t) {
            t = !0;
            let n = V.current;
            if (
              n[0] === e.clientHeight &&
              n[1] === e.scrollHeight &&
              n[2] === e.clientWidth &&
              n[3] === e.scrollWidth
            )
              return;
          }
          W();
        });
      return (
        n.observe(e),
        U.start(0, () => {
          let t = e.getAnimations({ subtree: !0 });
          t.length !== 0 &&
            Promise.allSettled(t.map((e) => e.finished))
              .then(W)
              .catch(() => {});
        }),
        () => {
          (n.disconnect(), U.clear());
        }
      );
    }, [W, u, U]));
  function G() {
    B.current = !1;
  }
  let K = {
      role: `presentation`,
      ...(w && { "data-id": `${w}-viewport` }),
      tabIndex: E.x && E.y ? -1 : 0,
      className: b.className,
      style: { overflow: `scroll` },
      onScroll() {
        u.current &&
          (W(),
          B.current || A({ x: u.current.scrollLeft, y: u.current.scrollTop }),
          H.start(100, () => {
            B.current = !0;
          }));
      },
      onWheel: G,
      onTouchMove: G,
      onPointerMove: G,
      onPointerEnter: G,
      onKeyDown: G,
    },
    ae = x.useMemo(
      () => ({
        scrolling: I || R,
        hasOverflowX: !E.x,
        hasOverflowY: !E.y,
        overflowXStart: M.xStart,
        overflowXEnd: M.xEnd,
        overflowYStart: M.yStart,
        overflowYEnd: M.yEnd,
        cornerHidden: E.corner,
      }),
      [I, R, E.x, E.y, E.corner, M],
    ),
    q = r(`div`, t, {
      ref: [n, u],
      state: ae,
      props: [K, l],
      stateAttributesMapping: D,
    }),
    J = x.useMemo(() => ({ computeThumbPosition: W }), [W]);
  return (0, O.jsx)(P.Provider, { value: J, children: q });
});
function re(e) {
  let t = e.clientHeight >= e.scrollHeight,
    n = e.clientWidth >= e.scrollWidth;
  return { y: t, x: n, corner: t || n };
}
function ie(e, t) {
  return e.y === t.y && e.x === t.x && e.corner === t.corner ? e : t;
}
var z = x.createContext(void 0);
function B() {
  let e = x.useContext(z);
  if (e === void 0) throw Error(t(54));
  return e;
}
var V = (function (e) {
    return (
      (e.scrollAreaThumbHeight = `--scroll-area-thumb-height`),
      (e.scrollAreaThumbWidth = `--scroll-area-thumb-width`),
      e
    );
  })({}),
  H = x.forwardRef(function (e, t) {
    let {
        render: n,
        className: i,
        orientation: a = `vertical`,
        keepMounted: s = !1,
        style: c,
        ...l
      } = e,
      {
        hovering: u,
        scrollingX: d,
        scrollingY: f,
        hiddenState: m,
        overflowEdges: h,
        scrollbarYRef: _,
        scrollbarXRef: v,
        viewportRef: y,
        thumbYRef: b,
        thumbXRef: S,
        handlePointerDown: te,
        handlePointerUp: E,
        handleScroll: k,
        rootId: A,
        thumbSize: j,
        hasMeasuredScrollbar: ne,
      } = C(),
      M = {
        hovering: u,
        scrolling: { horizontal: d, vertical: f }[a],
        orientation: a,
        hasOverflowX: !m.x,
        hasOverflowY: !m.y,
        overflowXStart: h.xStart,
        overflowXEnd: h.xEnd,
        overflowYStart: h.yStart,
        overflowYEnd: h.yEnd,
        cornerHidden: m.corner,
      },
      N = o(),
      P = !ne && !s,
      F = a === `vertical` ? m.y : m.x,
      I = s || !F;
    x.useEffect(() => {
      if (!I) return;
      let e = y.current,
        t = a === `vertical` ? _.current : v.current;
      if (!t) return;
      function n(n) {
        if (!e || !t || n.ctrlKey) return;
        let r = a === `horizontal`,
          i = r ? `scrollLeft` : `scrollTop`,
          o = r ? n.deltaX : n.deltaY;
        if (o === 0) return;
        let s = r
            ? e.scrollWidth - e.clientWidth
            : e.scrollHeight - e.clientHeight,
          c = r && N === `rtl` ? -s : 0,
          l = r && N === `rtl` ? 0 : s,
          u = e[i];
        (u <= c && o < 0) ||
          (u >= l && o > 0) ||
          (n.preventDefault(),
          (e[i] = Math.min(l, Math.max(c, u + o))),
          k({ x: e.scrollLeft, y: e.scrollTop }));
      }
      return g(t, `wheel`, n, { passive: !1 });
    }, [N, k, a, v, _, I, y]);
    let L = {
        ...(A && { "data-id": `${A}-scrollbar` }),
        onPointerDown(e) {
          if (e.button !== 0) return;
          let t = p(e.nativeEvent),
            n = a === `vertical` ? b.current : S.current;
          if (!(n && ee(n, t)) && y.current) {
            if (b.current && _.current && a === `vertical`) {
              let t = T(b.current, `margin`, `y`),
                n = T(_.current, `padding`, `y`),
                r = b.current.offsetHeight,
                i = _.current.getBoundingClientRect(),
                a = e.clientY - i.top - r / 2 - n + t / 2,
                o = y.current.scrollHeight,
                s = y.current.clientHeight,
                c = (a / (_.current.offsetHeight - r - n - t)) * (o - s);
              y.current.scrollTop = c;
            }
            if (S.current && v.current && a === `horizontal`) {
              let t = T(S.current, `margin`, `x`),
                n = T(v.current, `padding`, `x`),
                r = S.current.offsetWidth,
                i = v.current.getBoundingClientRect(),
                a = e.clientX - i.left - r / 2 - n + t / 2,
                o = y.current.scrollWidth,
                s = y.current.clientWidth,
                c = a / (v.current.offsetWidth - r - n - t),
                l;
              (N === `rtl`
                ? ((l = (1 - c) * (o - s)),
                  y.current.scrollLeft <= 0 && (l = -l))
                : (l = c * (o - s)),
                (y.current.scrollLeft = l));
            }
            (k({ x: y.current.scrollLeft, y: y.current.scrollTop }), te(e));
          }
        },
        onPointerUp: E,
        onPointerCancel: E,
        style: {
          position: `absolute`,
          touchAction: `none`,
          WebkitUserSelect: `none`,
          userSelect: `none`,
          visibility: P ? `hidden` : void 0,
          ...(a === `vertical` && {
            top: 0,
            bottom: `var(${w.scrollAreaCornerHeight})`,
            insetInlineEnd: 0,
            [V.scrollAreaThumbHeight]: `${j.height}px`,
          }),
          ...(a === `horizontal` && {
            insetInlineStart: 0,
            insetInlineEnd: `var(${w.scrollAreaCornerWidth})`,
            bottom: 0,
            [V.scrollAreaThumbWidth]: `${j.width}px`,
          }),
        },
      },
      R = r(`div`, e, {
        ref: [t, a === `vertical` ? _ : v],
        state: M,
        props: [L, l],
        stateAttributesMapping: D,
      }),
      re = x.useMemo(() => ({ orientation: a }), [a]);
    return I ? (0, O.jsx)(z.Provider, { value: re, children: R }) : null;
  }),
  U = x.forwardRef(function (e, t) {
    let { render: n, className: i, style: a, ...o } = e,
      {
        thumbYRef: s,
        thumbXRef: c,
        handlePointerDown: l,
        handlePointerMove: u,
        handlePointerUp: d,
        setScrollingX: f,
        setScrollingY: ee,
        scrollingX: p,
        scrollingY: m,
        hasMeasuredScrollbar: h,
      } = C(),
      { orientation: g } = B(),
      _ = { scrolling: g === `horizontal` ? p : m, orientation: g };
    function v(e) {
      (g === `vertical` && ee(!1), g === `horizontal` && f(!1), d(e));
    }
    return r(`div`, e, {
      ref: [t, g === `vertical` ? s : c],
      state: _,
      props: [
        {
          onPointerDown: l,
          onPointerMove: u,
          onPointerUp: v,
          onPointerCancel: v,
          style: {
            visibility: h ? void 0 : `hidden`,
            ...(g === `vertical` && {
              height: `var(${V.scrollAreaThumbHeight})`,
            }),
            ...(g === `horizontal` && {
              width: `var(${V.scrollAreaThumbWidth})`,
            }),
          },
        },
        o,
      ],
    });
  }),
  W = x.forwardRef(function (e, t) {
    let { render: n, className: i, style: a, ...o } = e,
      { cornerRef: s, cornerSize: c, hiddenState: l } = C(),
      u = r(`div`, e, {
        ref: [t, s],
        props: [
          {
            style: {
              position: `absolute`,
              bottom: 0,
              insetInlineEnd: 0,
              width: c.width,
              height: c.height,
            },
          },
          o,
        ],
      });
    return l.corner ? null : u;
  });
function G({ className: e, children: t, ...n }) {
  return (0, O.jsxs)(M, {
    "data-slot": `scroll-area`,
    className: d(`relative`, e),
    ...n,
    children: [
      (0, O.jsx)(R, {
        "data-slot": `scroll-area-viewport`,
        className: `size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:ring-offset-1 focus-visible:ring-offset-background`,
        children: t,
      }),
      (0, O.jsx)(K, {}),
      (0, O.jsx)(W, {}),
    ],
  });
}
function K({ className: e, orientation: t = `vertical`, ...n }) {
  return (0, O.jsx)(H, {
    "data-slot": `scroll-area-scrollbar`,
    "data-orientation": t,
    orientation: t,
    className: d(
      `flex touch-none p-px transition-colors select-none data-horizontal:h-2.5 data-horizontal:flex-col data-horizontal:border-t data-horizontal:border-t-transparent data-vertical:h-full data-vertical:w-2.5 data-vertical:border-l data-vertical:border-l-transparent`,
      e,
    ),
    ...n,
    children: (0, O.jsx)(U, {
      "data-slot": `scroll-area-thumb`,
      className: `relative flex-1 rounded-full bg-border`,
    }),
  });
}
function ae() {
  return (0, O.jsxs)(`div`, {
    className: `space-y-10`,
    children: [
      (0, O.jsx)(l, {
        title: `Scroll Area`,
        description: `Tăng cường chức năng cuộn gốc để tạo kiểu tùy chỉnh trên nhiều trình duyệt.`,
      }),
      (0, O.jsxs)(u, {
        columns: 2,
        children: [
          (0, O.jsx)(f, {
            label: `Vertical`,
            description: `Danh sách các mục có thể cuộn.`,
            children: (0, O.jsx)(G, {
              className: `h-72 w-full max-w-sm rounded-xl border bg-card`,
              children: (0, O.jsxs)(`div`, {
                className: `p-4`,
                children: [
                  (0, O.jsx)(`h4`, {
                    className: `mb-4 text-sm font-medium leading-none`,
                    children: `Settings`,
                  }),
                  Array.from({ length: 20 }).map((e, t) =>
                    (0, O.jsxs)(
                      `div`,
                      {
                        className: `text-sm py-2 border-b last:border-0`,
                        children: [`Option `, t + 1],
                      },
                      t,
                    ),
                  ),
                ],
              }),
            }),
          }),
          (0, O.jsx)(f, {
            label: `Horizontal`,
            description: `Thư viện cuộn ngang.`,
            children: (0, O.jsxs)(G, {
              className: `w-full max-w-sm whitespace-nowrap rounded-xl border bg-card p-4`,
              children: [
                (0, O.jsx)(`div`, {
                  className: `flex w-max space-x-4`,
                  children: Array.from({ length: 5 }).map((e, t) =>
                    (0, O.jsxs)(
                      `div`,
                      {
                        className: `w-[150px] shrink-0`,
                        children: [
                          (0, O.jsx)(`div`, {
                            className: `overflow-hidden rounded-md bg-muted aspect-[3/4] mb-2 flex items-center justify-center`,
                            children: (0, O.jsxs)(`span`, {
                              className: `text-xs text-muted-foreground`,
                              children: [`Artwork `, t + 1],
                            }),
                          }),
                          (0, O.jsxs)(`p`, {
                            className: `text-sm font-medium`,
                            children: [`Title `, t + 1],
                          }),
                          (0, O.jsxs)(`p`, {
                            className: `text-xs text-muted-foreground`,
                            children: [`Artist `, t + 1],
                          }),
                        ],
                      },
                      t,
                    ),
                  ),
                }),
                (0, O.jsx)(K, { orientation: `horizontal` }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
export { ae as default };
