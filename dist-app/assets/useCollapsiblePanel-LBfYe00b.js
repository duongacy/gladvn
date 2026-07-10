import {
  A as e,
  An as t,
  F as n,
  Gn as r,
  Hn as i,
  Kn as a,
  M as o,
  O as s,
  Rt as c,
  Un as l,
  Vn as u,
  Yt as d,
  cr as f,
  dr as p,
  k as m,
  on as h,
  wn as g,
} from "./showcase-vJrKG7HA.js";
import { t as _ } from "./useValueAsRef-DBI0R_ly.js";
import { t as v } from "./addEventListener-VyGXw_SB.js";
var y = p(f(), 1);
function b(e) {
  let { open: n, defaultOpen: r, onOpenChange: i, disabled: o } = e,
    [u, d] = a({
      controlled: n,
      default: r,
      name: `Collapsible`,
      state: `open`,
    }),
    { mounted: f, setMounted: p, transitionStatus: m } = s(u, !0, !0),
    g = c(),
    [_, v] = y.useState(),
    b = _ ?? g,
    x = l((e) => {
      let n = !u,
        r = h(t, e.nativeEvent);
      (i(n, r), !r.isCanceled && d(n));
    });
  return y.useMemo(
    () => ({
      disabled: o,
      handleTrigger: x,
      mounted: f,
      open: u,
      panelId: b,
      setMounted: p,
      setOpen: d,
      setPanelIdState: v,
      transitionStatus: m,
    }),
    [o, x, f, u, b, p, d, v, m],
  );
}
var x = y.createContext(void 0);
function S() {
  let e = y.useContext(x);
  if (e === void 0) throw Error(i(15));
  return e;
}
var C = (function (e) {
    return (
      (e.open = `data-open`),
      (e.closed = `data-closed`),
      (e[(e.startingStyle = n.startingStyle)] = `startingStyle`),
      (e[(e.endingStyle = n.endingStyle)] = `endingStyle`),
      e
    );
  })({}),
  w = (function (e) {
    return ((e.panelOpen = `data-panel-open`), e);
  })({}),
  T = { [C.open]: `` },
  E = { [C.closed]: `` },
  D = {
    open(e) {
      return e ? { [w.panelOpen]: `` } : null;
    },
  },
  O = {
    open(e) {
      return e ? T : E;
    },
  },
  k = { height: void 0, width: void 0 };
function A(t) {
  let {
      externalRef: n,
      hiddenUntilFound: i,
      id: a,
      keepMounted: s,
      mounted: c,
      onOpenChange: d,
      open: f,
      setMounted: p,
      setOpen: b,
      transitionStatus: x,
    } = t,
    S = y.useRef(null),
    w = y.useRef(null),
    [T, E] = y.useState(k),
    D = y.useRef(k),
    O = y.useRef(!1),
    A = y.useRef(f),
    N = y.useRef(!1),
    [I, L] = y.useState(!1),
    R = y.useRef(null),
    z = u(n, S),
    B = _({ mounted: c, open: f }),
    V = e(S, !1, !1),
    H = !f && !c,
    U = I ? `idle` : x,
    W = f && (A.current || N.current),
    G =
      !f &&
      c &&
      w.current === `css-animation` &&
      T.height === void 0 &&
      T.width === void 0
        ? D.current
        : T,
    K = i && H && w.current !== `css-animation`,
    q = l((e, t = !0) => {
      (t && (D.current = e), E(e));
    }),
    J = l(() => {
      (R.current?.(), (R.current = null));
    }),
    Y = l((e) => {
      (J(),
        (R.current = () => {
          ((R.current = null), e());
        }));
    }),
    X = l(() => {
      f && c && w.current === `css-animation` && (N.current = !0);
    });
  (r(() => {
    !I || x === `starting` || L(!1);
  }, [I, x]),
    y.useEffect(
      () => () => {
        (X(), J());
      },
      [X, J],
    ),
    r(() => {
      let e = S.current;
      if (!e) return;
      !f && R.current && J();
      let t = M(e, W);
      if (
        ((w.current = t),
        f && x === `idle` && A.current && t === `css-animation`)
      ) {
        D.current = j(e);
        return;
      }
      if (f && x === `starting`) {
        let n = O.current;
        if (((O.current = !1), t === `none`)) {
          (q(j(e)), L(!0));
          return;
        }
        if (t === `css-transition`) {
          let t = F(e);
          if ((q(j(e)), !n)) return t;
          let r = P(e, `transition-duration`, `0s`);
          return (Y(r), L(!0), t);
        }
        if (t === `css-animation`) {
          if ((q(j(e)), !n)) {
            P(e, `animation-name`, `none`)();
            return;
          }
          let t = P(e, `animation-name`, `none`),
            r = P(e, `animation-duration`, `0s`);
          (t(), Y(r), L(!0));
          return;
        }
      }
      if (!f && c && (x === `idle` || x === `starting`)) {
        if (((A.current = !1), (N.current = !1), t === `none`)) {
          (q(k, !1), p(!1));
          return;
        }
        q(j(e));
        return;
      }
      if (x !== `ending`) return;
      if (t === `none`) {
        p(!1);
        return;
      }
      let n = j(e);
      if (!((n.height ?? 0) > 0 || (n.width ?? 0) > 0)) {
        p(!1);
        return;
      }
      (q(n), t === `css-animation` && P(e, `animation-name`, `none`)());
    }, [c, f, J, q, p, Y, W, x]),
    m({
      enabled: f && c && U === `idle`,
      open: !0,
      ref: S,
      onComplete() {
        f && q(k, !1);
      },
    }),
    y.useEffect(() => {
      if (f || !c || U !== `ending` || !S.current) return;
      let e = new AbortController(),
        t = -1;
      function n() {
        B.current.open || (p(!1), q(k, !1));
      }
      return (
        (t = o.request(() => {
          e.signal.aborted || V(n, e.signal);
        })),
        () => {
          (o.cancel(t), e.abort());
        }
      );
    }, [B, c, f, U, V, q, p]),
    r(() => {
      let e = S.current;
      !e || !i || !H || e.setAttribute(`hidden`, `until-found`);
    }, [H, i]),
    y.useEffect(
      function () {
        let e = S.current;
        if (!e) return;
        function t(e) {
          let t = h(g, e);
          (d(!0, t), !t.isCanceled && ((O.current = !0), b(!0)));
        }
        return v(e, `beforematch`, t);
      },
      [d, b],
    ));
  let Z = s || i || c || f;
  return {
    height: G.height,
    props: { ...(K ? { [C.startingStyle]: `` } : void 0), hidden: H, id: a },
    ref: z,
    shouldPreventOpenAnimation: W,
    shouldRender: Z,
    transitionStatus: U,
    width: G.width,
  };
}
function j(e) {
  return { height: e.scrollHeight, width: e.scrollWidth };
}
function M(e, t = !1) {
  let n = d(e).getComputedStyle(e),
    r =
      (n.animationName
        .split(`,`)
        .map((e) => e.trim())
        .some((e) => e !== `` && e !== `none`) ||
        t) &&
      N(n.animationDuration),
    i = N(n.transitionDuration);
  return (r && i) || i ? `css-transition` : r ? `css-animation` : `none`;
}
function N(e) {
  return e
    .split(`,`)
    .map((e) => e.trim())
    .some((e) => e !== `` && Number.parseFloat(e) > 0);
}
function P(e, t, n) {
  let r = e.style.getPropertyValue(t),
    i = e.style.getPropertyPriority(t);
  return (
    e.style.setProperty(t, n),
    () => {
      if (r === ``) {
        e.style.removeProperty(t);
        return;
      }
      e.style.setProperty(t, r, i);
    }
  );
}
function F(e) {
  let t = {
    "justify-content": e.style.justifyContent,
    "align-items": e.style.alignItems,
    "align-content": e.style.alignContent,
    "justify-items": e.style.justifyItems,
  };
  Object.keys(t).forEach((t) => {
    e.style.setProperty(t, `initial`, `important`);
  });
  function n() {
    Object.entries(t).forEach(([t, n]) => {
      if (n === ``) {
        e.style.removeProperty(t);
        return;
      }
      e.style.setProperty(t, n);
    });
  }
  let r = o.request(n);
  return () => {
    (o.cancel(r), n());
  };
}
export { S as a, x as i, O as n, b as o, D as r, A as t };
