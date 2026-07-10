import {
  $t as e,
  An as t,
  Bn as n,
  Bt as r,
  F as i,
  Gn as a,
  Gt as o,
  H as s,
  Hn as c,
  Jt as l,
  Nn as u,
  Ot as d,
  Pn as f,
  Qt as p,
  Rn as m,
  Tn as h,
  Un as g,
  Vt as _,
  Wn as v,
  Zt as y,
  _t as b,
  cr as x,
  dr as S,
  dt as C,
  en as w,
  mn as ee,
  nn as te,
  on as T,
  pt as ne,
  sr as re,
  vt as E,
  yt as ie,
  zn as ae,
  zt as D,
} from "./showcase-vJrKG7HA.js";
import { i as oe, n as O, t as se } from "./useTimeout-DMagV02N.js";
import { i as ce, n as le } from "./element-kUn1rYdK.js";
import { t as ue } from "./shim-P6FrQurw.js";
import { t as k } from "./visuallyHidden-CrYY0HH5.js";
import { t as A } from "./with-selector-BPxG-Snh.js";
import { t as j } from "./addEventListener-VyGXw_SB.js";
var M = d,
  N = S(x(), 1),
  P = S(re(), 1),
  F = u();
function I(e, t, n = !0) {
  return e
    .filter((e) => e.parentId === t)
    .flatMap((t) => [...(!n || t.context?.open ? [t] : []), ...I(e, t.id, n)]);
}
function L(e, t) {
  let n = [],
    r = e.find((e) => e.id === t)?.parentId;
  for (; r;) {
    let t = e.find((e) => e.id === r);
    ((r = t?.parentId), t && (n = n.concat(t)));
  }
  return n;
}
var R = `a[href],button,input,select,textarea,summary,details,iframe,object,embed,[tabindex],[contenteditable]:not([contenteditable="false"]),audio[controls],video[controls]`;
function z(e) {
  let t = e.assignedSlot;
  if (t) return t;
  if (e.parentElement) return e.parentElement;
  let n = e.getRootNode();
  return te(n) ? n.host : null;
}
function B(e) {
  for (let t of Array.from(e.children)) if (o(t) === `summary`) return t;
  return null;
}
function V(e, t) {
  let n = B(t);
  return !!n && (e === n || E(n, e));
}
function H(e) {
  let t = e ? o(e) : ``;
  return (
    e != null &&
    e.matches(R) &&
    (t !== `summary` ||
      (e.parentElement != null &&
        o(e.parentElement) === `details` &&
        B(e.parentElement) === e)) &&
    (t !== `details` || B(e) == null) &&
    (t !== `input` || e.type !== `hidden`)
  );
}
function U(e) {
  if (!H(e) || !e.isConnected || e.matches(`:disabled`)) return !1;
  for (let t = e; t; t = z(t)) {
    let n = t !== e,
      r = o(t) === `slot`;
    if (
      t.hasAttribute(`inert`) ||
      (n && o(t) === `details` && !t.open && !V(e, t)) ||
      t.hasAttribute(`hidden`) ||
      (!r && !W(t, n))
    )
      return !1;
  }
  return !0;
}
function W(e, t) {
  let n = _(e);
  return t ? n.display !== `none` : s(e, n);
}
function G(e) {
  let t = e.tabIndex;
  if (t < 0) {
    let t = o(e);
    if (
      t === `details` ||
      t === `audio` ||
      t === `video` ||
      (p(e) && e.isContentEditable)
    )
      return 0;
  }
  return t;
}
function K(e) {
  if (o(e) !== `input`) return null;
  let t = e;
  return t.type === `radio` && t.name !== `` ? t : null;
}
function q(e, t) {
  let n = K(e);
  if (!n) return !0;
  let r = t.find((e) => {
    let t = K(e);
    return t?.name === n.name && t.form === n.form && t.checked;
  });
  return r
    ? r === n
    : t.find((e) => {
        let t = K(e);
        return t?.name === n.name && t.form === n.form;
      }) === n;
}
function J(e) {
  if (p(e) && o(e) === `slot`) {
    let t = e.assignedElements({ flatten: !0 });
    if (t.length > 0) return t;
  }
  return p(e) && e.shadowRoot
    ? Array.from(e.shadowRoot.children)
    : Array.from(e.children);
}
function Y(e, t) {
  J(e).forEach((e) => {
    (H(e) && t.push(e), Y(e, t));
  });
}
function de(e, t, n) {
  J(e).forEach((e) => {
    (p(e) && e.matches(t) && n.push(e), de(e, t, n));
  });
}
function fe(e) {
  return U(e) && G(e) >= 0;
}
function pe(e) {
  let t = [];
  return (Y(e, t), t.filter(U));
}
function X(e) {
  let t = pe(e);
  return t.filter((e) => G(e) >= 0 && q(e, t));
}
function me(e, t) {
  let n = X(e),
    i = n.length;
  if (i === 0) return;
  let a = b(r(e)),
    o = n.indexOf(a);
  return n[o === -1 ? (t === 1 ? 0 : i - 1) : o + t];
}
function he(e) {
  return me(r(e).body, 1) || e;
}
function ge(e) {
  return me(r(e).body, -1) || e;
}
function _e(e, t) {
  if (!e) return null;
  let n = X(r(e).body),
    i = n.length;
  if (i === 0) return null;
  let a = n.indexOf(e);
  return a === -1 ? null : n[(a + t + i) % i];
}
function ve(e) {
  return _e(e, 1);
}
function ye(e) {
  return _e(e, -1);
}
function Z(e, t) {
  let n = t || e.currentTarget,
    r = e.relatedTarget;
  return !r || !E(n, r);
}
function be(e) {
  X(e).forEach((e) => {
    ((e.dataset.tabindex = e.getAttribute(`tabindex`) || ``),
      e.setAttribute(`tabindex`, `-1`));
  });
}
function xe(e) {
  let t = [];
  (de(e, `[data-tabindex]`, t),
    t.forEach((e) => {
      let t = e.dataset.tabindex;
      (delete e.dataset.tabindex,
        t ? e.setAttribute(`tabindex`, t) : e.removeAttribute(`tabindex`));
    }));
}
var Q = (e, t, n, r, i, a, ...o) => {
    if (o.length > 0) throw Error(c(1));
    let s;
    if (e && t && n && r && i && a)
      s = (o, s, c, l) =>
        a(
          e(o, s, c, l),
          t(o, s, c, l),
          n(o, s, c, l),
          r(o, s, c, l),
          i(o, s, c, l),
          s,
          c,
          l,
        );
    else if (e && t && n && r && i)
      s = (a, o, s, c) =>
        i(e(a, o, s, c), t(a, o, s, c), n(a, o, s, c), r(a, o, s, c), o, s, c);
    else if (e && t && n && r)
      s = (i, a, o, s) =>
        r(e(i, a, o, s), t(i, a, o, s), n(i, a, o, s), a, o, s);
    else if (e && t && n)
      s = (r, i, a, o) => n(e(r, i, a, o), t(r, i, a, o), i, a, o);
    else if (e && t) s = (n, r, i, a) => t(e(n, r, i, a), r, i, a);
    else if (e) s = e;
    else throw Error(`Missing arguments`);
    return s;
  },
  Se = ue(),
  Ce = A(),
  we = [],
  Te = void 0;
function Ee() {
  return Te;
}
function De(e) {
  we.push(e);
}
function Oe(e) {
  let t = (t, n) => {
    let r = v(Ae).current,
      i;
    try {
      Te = r;
      for (let e of we) e.before(r);
      i = e(t, n);
      for (let e of we) e.after(r);
      r.didInitialize = !0;
    } finally {
      Te = void 0;
    }
    return i;
  };
  return ((t.displayName = e.displayName || e.name), t);
}
function ke(e) {
  return N.forwardRef(Oe(e));
}
function Ae() {
  return { didInitialize: !1 };
}
var je = n(19) ? Pe : Fe;
function Me(e, t, n, r, i) {
  return je(e, t, n, r, i);
}
function Ne(e, t, n, r, i) {
  let a = N.useCallback(() => t(e.getSnapshot(), n, r, i), [e, t, n, r, i]);
  return (0, Se.useSyncExternalStore)(e.subscribe, a, a);
}
De({
  before(e) {
    ((e.syncIndex = 0),
      e.didInitialize ||
        ((e.syncTick = 1),
        (e.syncHooks = []),
        (e.didChangeStore = !0),
        (e.getSnapshot = () => {
          let t = !1;
          for (let n = 0; n < e.syncHooks.length; n += 1) {
            let r = e.syncHooks[n],
              i = r.selector(r.store.state, r.a1, r.a2, r.a3);
            Object.is(r.value, i) || ((t = !0), (r.value = i));
          }
          return (t && (e.syncTick += 1), e.syncTick);
        })));
  },
  after(e) {
    e.syncHooks.length > 0 &&
      (e.didChangeStore &&
        ((e.didChangeStore = !1),
        (e.subscribe = (t) => {
          let n = new Set();
          for (let t of e.syncHooks) n.add(t.store);
          let r = [];
          for (let e of n) r.push(e.subscribe(t));
          return () => {
            for (let e of r) e();
          };
        })),
      (0, Se.useSyncExternalStore)(e.subscribe, e.getSnapshot, e.getSnapshot));
  },
});
function Pe(e, t, n, r, i) {
  let a = Ee();
  if (!a) return Ne(e, t, n, r, i);
  let o = a.syncIndex;
  a.syncIndex += 1;
  let s;
  return (
    a.didInitialize
      ? ((s = a.syncHooks[o]),
        (s.store !== e ||
          s.selector !== t ||
          !Object.is(s.a1, n) ||
          !Object.is(s.a2, r) ||
          !Object.is(s.a3, i)) &&
          (s.store !== e && (a.didChangeStore = !0),
          (s.store = e),
          (s.selector = t),
          (s.a1 = n),
          (s.a2 = r),
          (s.a3 = i),
          (s.value = t(e.getSnapshot(), n, r, i))))
      : ((s = {
          store: e,
          selector: t,
          a1: n,
          a2: r,
          a3: i,
          value: t(e.getSnapshot(), n, r, i),
        }),
        a.syncHooks.push(s)),
    s.value
  );
}
function Fe(e, t, n, r, i) {
  return (0, Ce.useSyncExternalStoreWithSelector)(
    e.subscribe,
    e.getSnapshot,
    e.getSnapshot,
    (e) => t(e, n, r, i),
  );
}
var Ie = class {
    constructor(e) {
      ((this.state = e), (this.listeners = new Set()), (this.updateTick = 0));
    }
    subscribe = (e) => (
      this.listeners.add(e),
      () => {
        this.listeners.delete(e);
      }
    );
    getSnapshot = () => this.state;
    setState(e) {
      if (this.state === e) return;
      ((this.state = e), (this.updateTick += 1));
      let t = this.updateTick;
      for (let n of this.listeners) {
        if (t !== this.updateTick) return;
        n(e);
      }
    }
    update(e) {
      for (let t in e)
        if (!Object.is(this.state[t], e[t])) {
          this.setState({ ...this.state, ...e });
          return;
        }
    }
    set(e, t) {
      Object.is(this.state[e], t) || this.setState({ ...this.state, [e]: t });
    }
    notifyAll() {
      let e = { ...this.state };
      this.setState(e);
    }
    use(e, t, n, r) {
      return Me(this, e, t, n, r);
    }
  },
  Le = class extends Ie {
    constructor(e, t = {}, n) {
      (super(e), (this.context = t), (this.selectors = n));
    }
    useSyncedValue(e, t) {
      N.useDebugValue(e);
      let n = this;
      a(() => {
        n.state[e] !== t && n.set(e, t);
      }, [n, e, t]);
    }
    useSyncedValueWithCleanup(e, t) {
      let n = this;
      a(
        () => (
          n.state[e] !== t && n.set(e, t),
          () => {
            n.set(e, void 0);
          }
        ),
        [n, e, t],
      );
    }
    useSyncedValues(e) {
      let t = this;
      a(() => {
        t.update(e);
      }, [t, ...Object.values(e)]);
    }
    useControlledProp(e, t) {
      N.useDebugValue(e);
      let n = this,
        r = t !== void 0;
      a(() => {
        r && !Object.is(n.state[e], t) && n.setState({ ...n.state, [e]: t });
      }, [n, e, t, r]);
    }
    select(e, t, n, r) {
      let i = this.selectors[e];
      return i(this.state, t, n, r);
    }
    useState(e, t, n, r) {
      return (N.useDebugValue(e), Me(this, this.selectors[e], t, n, r));
    }
    useContextCallback(e, t) {
      N.useDebugValue(e);
      let n = g(t ?? ae);
      this.context[e] = n;
    }
    useStateSetter(e) {
      let t = N.useRef(void 0);
      return (
        t.current === void 0 &&
          (t.current = (t) => {
            this.set(e, t);
          }),
        t.current
      );
    }
    observe(e, t) {
      let n;
      n = typeof e == `function` ? e : this.selectors[e];
      let r = n(this.state);
      return (
        t(r, r, this),
        this.subscribe((e) => {
          let i = n(e);
          if (!Object.is(r, i)) {
            let e = r;
            ((r = i), t(i, e, this));
          }
        })
      );
    }
  };
function $(...e) {
  return () => {
    for (let t = 0; t < e.length; t += 1) {
      let n = e[t];
      n && n();
    }
  };
}
var Re = N.forwardRef(function (e, t) {
  let [n, r] = N.useState();
  a(() => {
    M && oe && r(`button`);
  }, []);
  let i = { tabIndex: 0, role: n };
  return (0, F.jsx)(`span`, {
    ...e,
    ref: t,
    style: k,
    "aria-hidden": n ? void 0 : !0,
    ...i,
    "data-base-ui-focus-guard": ``,
  });
});
function ze(e) {
  return `data-base-ui-${e}`;
}
var Be = { style: { transition: `none` } },
  Ve = `data-base-ui-click-trigger`,
  He = { fallbackAxisSide: `none` },
  Ue = { fallbackAxisSide: `end` },
  We = { clipPath: `inset(50%)`, position: `fixed`, top: 0, left: 0 },
  Ge = N.createContext(null),
  Ke = () => N.useContext(Ge),
  qe = ze(`portal`);
function Je(e = {}) {
  let { ref: t, container: n, componentProps: r = m, elementProps: i } = e,
    o = D(),
    s = Ke()?.portalNode,
    [c, l] = N.useState(null),
    [u, d] = N.useState(null),
    p = g((e) => {
      e !== null && d(e);
    }),
    h = N.useRef(null);
  a(() => {
    if (n === null) {
      h.current && ((h.current = null), d(null), l(null));
      return;
    }
    if (o == null) return;
    let e = (n && (w(n) ? n : n.current)) ?? s ?? document.body;
    if (e == null) {
      h.current && ((h.current = null), d(null), l(null));
      return;
    }
    h.current !== e && ((h.current = e), d(null), l(e));
  }, [n, s, o]);
  let _ = f(`div`, r, { ref: [t, p], props: [{ id: o, [qe]: `` }, i] });
  return { portalNode: u, portalSubtree: c && _ ? P.createPortal(_, c) : null };
}
var Ye = N.forwardRef(function (e, t) {
  let {
      render: n,
      className: r,
      style: i,
      children: o,
      container: s,
      renderGuards: c,
      ...l
    } = e,
    { portalNode: u, portalSubtree: d } = Je({
      container: s,
      ref: t,
      componentProps: e,
      elementProps: l,
    }),
    f = N.useRef(null),
    p = N.useRef(null),
    m = N.useRef(null),
    h = N.useRef(null),
    [g, _] = N.useState(null),
    v = N.useRef(!1),
    y = g?.modal,
    b = g?.open,
    x = typeof c == `boolean` ? c : !!g && !g.modal && g.open && !!u;
  (N.useEffect(() => {
    if (!u || y) return;
    function e(e) {
      u &&
        e.relatedTarget &&
        Z(e) &&
        (e.type === `focusin`
          ? (v.current &&= (xe(u), !1))
          : (be(u), (v.current = !0)));
    }
    return $(j(u, `focusin`, e, !0), j(u, `focusout`, e, !0));
  }, [u, y]),
    a(() => {
      !u || b !== !0 || !v.current || (xe(u), (v.current = !1));
    }, [b, u]));
  let S = N.useMemo(
    () => ({
      beforeOutsideRef: f,
      afterOutsideRef: p,
      beforeInsideRef: m,
      afterInsideRef: h,
      portalNode: u,
      setFocusManagerState: _,
    }),
    [u],
  );
  return (0, F.jsxs)(N.Fragment, {
    children: [
      d,
      (0, F.jsxs)(Ge.Provider, {
        value: S,
        children: [
          x &&
            u &&
            (0, F.jsx)(Re, {
              "data-type": `outside`,
              ref: f,
              onFocus: (e) => {
                Z(e, u)
                  ? m.current?.focus()
                  : ge(g ? g.domReference : null)?.focus();
              },
            }),
          x && u && (0, F.jsx)(`span`, { "aria-owns": u.id, style: We }),
          u && P.createPortal(o, u),
          x &&
            u &&
            (0, F.jsx)(Re, {
              "data-type": `outside`,
              ref: p,
              onFocus: (e) => {
                Z(e, u)
                  ? h.current?.focus()
                  : (he(g ? g.domReference : null)?.focus(),
                    g?.closeOnFocusOut &&
                      g?.onOpenChange(!1, T(`focus-out`, e.nativeEvent)));
              },
            }),
        ],
      }),
    ],
  });
});
function Xe() {
  let e = new Map();
  return {
    emit(t, n) {
      e.get(t)?.forEach((e) => e(n));
    },
    on(t, n) {
      (e.has(t) || e.set(t, new Set()), e.get(t).add(n));
    },
    off(t, n) {
      e.get(t)?.delete(n);
    },
  };
}
var Ze = class {
    nodesRef = { current: [] };
    events = Xe();
    addNode(e) {
      this.nodesRef.current.push(e);
    }
    removeNode(e) {
      let t = this.nodesRef.current.findIndex((t) => t === e);
      t !== -1 && this.nodesRef.current.splice(t, 1);
    }
  },
  Qe = N.createContext(null),
  $e = N.createContext(null),
  et = () => N.useContext(Qe)?.id || null,
  tt = (e) => {
    let t = N.useContext($e);
    return e ?? t;
  };
function nt(e) {
  let t = D(),
    n = tt(e),
    r = et();
  return (
    a(() => {
      if (!t) return;
      let e = { id: t, parentId: r };
      return (
        n?.addNode(e),
        () => {
          n?.removeNode(e);
        }
      );
    }, [n, t, r]),
    t
  );
}
function rt(e) {
  let { children: t, id: n } = e,
    r = et();
  return (0, F.jsx)(Qe.Provider, {
    value: N.useMemo(() => ({ id: n, parentId: r }), [n, r]),
    children: t,
  });
}
function it(e) {
  let { children: t, externalTree: n } = e,
    r = v(() => n ?? new Ze()).current;
  return (0, F.jsx)($e.Provider, { value: r, children: t });
}
function at() {
  return !1;
}
function ot(e) {
  return {
    escapeKey: typeof e == `boolean` ? e : (e?.escapeKey ?? !1),
    outsidePress: typeof e == `boolean` ? e : (e?.outsidePress ?? !0),
  };
}
function st(n, i = {}) {
  let {
      enabled: a = !0,
      escapeKey: o = !0,
      outsidePress: s = !0,
      outsidePressEvent: c = `sloppy`,
      referencePress: u = at,
      bubbles: d,
      externalTree: f,
    } = i,
    m = `rootStore` in n ? n.rootStore : n,
    v = m.useState(`open`),
    b = m.useState(`floatingElement`),
    { dataRef: x } = m.context,
    S = tt(f),
    C = g(typeof s == `function` ? s : () => !1),
    w = typeof s == `function` ? C : s,
    re = w !== !1,
    ae = g(() => c),
    { escapeKey: D, outsidePress: ue } = ot(d),
    k = N.useRef(!1),
    A = N.useRef(!1),
    M = N.useRef(!1),
    P = N.useRef(!1),
    F = N.useRef(``),
    L = N.useRef(null),
    R = O(),
    z = O(),
    B = g(() => {
      (z.clear(), (x.current.insideReactTree = !1));
    }),
    V = g((e) => {
      let t = x.current.floatingContext?.nodeId;
      return (S ? I(S.nodesRef.current, t) : []).some(
        (t) => t.context?.open && !t.context.dataRef.current[e],
      );
    }),
    H = g(
      (e) =>
        le(e, m.select(`floatingElement`)) ||
        le(e, m.select(`domReferenceElement`)),
    ),
    U = g((e) => {
      u() && m.setOpen(!1, T(t, e.nativeEvent));
    }),
    W = g((e) => {
      if (
        !v ||
        !a ||
        !o ||
        e.key !== `Escape` ||
        P.current ||
        (!D && V(`__escapeKeyBubbles`))
      )
        return;
      let t = T(ee, ne(e) ? e.nativeEvent : e);
      (m.setOpen(!1, t),
        t.isCanceled || e.preventDefault(),
        !D && !t.isPropagationAllowed && e.stopPropagation());
    }),
    G = g(() => {
      ((x.current.insideReactTree = !0), z.start(0, B));
    }),
    K = g((e) => {
      if (!v || !a || e.button !== 0) return;
      let t = ie(e.nativeEvent);
      E(m.select(`floatingElement`), t) &&
        (k.current || ((k.current = !0), (A.current = !1)));
    }),
    q = g((e) => {
      !v ||
        !a ||
        ((e.defaultPrevented || e.nativeEvent.defaultPrevented) &&
          k.current &&
          (A.current = !0));
    });
  (N.useEffect(() => {
    if (!v || !a) return;
    ((x.current.__escapeKeyBubbles = D),
      (x.current.__outsidePressBubbles = ue));
    let t = new se(),
      n = new se();
    function i() {
      (t.clear(), (P.current = !0));
    }
    function s() {
      t.start(oe ? 5 : 0, () => {
        P.current = !1;
      });
    }
    function c() {
      ((M.current = !0),
        n.start(0, () => {
          M.current = !1;
        }));
    }
    function u() {
      ((k.current = !1), (A.current = !1));
    }
    function d() {
      let e = F.current,
        t = e === `pen` || !e ? `mouse` : e,
        n = ae(),
        r = typeof n == `function` ? n() : n;
      return typeof r == `string` ? r : r[t];
    }
    function f(e) {
      let t = d();
      return (
        (t === `intentional` && e.type !== `click`) ||
        (t === `sloppy` && e.type === `click`)
      );
    }
    function g(e) {
      let t = x.current.floatingContext?.nodeId,
        n =
          S &&
          I(S.nodesRef.current, t).some((t) =>
            le(e, t.context?.elements.floating),
          );
      return H(e) || n;
    }
    function C(t) {
      if (f(t)) {
        (t.type !== `click` && !H(t) && (n.clear(), (M.current = !1)), B());
        return;
      }
      if (x.current.insideReactTree) {
        B();
        return;
      }
      let i = ie(t),
        a = `[${ze(`inert`)}]`,
        o = y(i) ? i.getRootNode() : null,
        s = Array.from(
          (te(o) ? o : r(m.select(`floatingElement`))).querySelectorAll(a),
        ),
        c = m.context.triggerElements;
      if (i && (c.hasElement(i) || c.hasMatchingElement((e) => E(e, i))))
        return;
      let u = y(i) ? i : null;
      for (; u && !e(u);) {
        let t = l(u);
        if (e(t) || !y(t)) break;
        u = t;
      }
      if (!(
        s.length &&
        y(i) &&
        !ce(i) &&
        !E(i, m.select(`floatingElement`)) &&
        s.every((e) => !E(u, e))
      )) {
        if (p(i) && !(`touches` in t)) {
          let n = e(i),
            r = _(i),
            a = /auto|scroll/,
            o = n || a.test(r.overflowX),
            s = n || a.test(r.overflowY),
            c = o && i.clientWidth > 0 && i.scrollWidth > i.clientWidth,
            l = s && i.clientHeight > 0 && i.scrollHeight > i.clientHeight,
            u = r.direction === `rtl`,
            d =
              l &&
              (u
                ? t.offsetX <= i.offsetWidth - i.clientWidth
                : t.offsetX > i.clientWidth),
            f = c && t.offsetY > i.clientHeight;
          if (d || f) return;
        }
        if (!g(t)) {
          if (d() === `intentional` && M.current) {
            (n.clear(), (M.current = !1));
            return;
          }
          (typeof w == `function` && !w(t)) ||
            V(`__outsidePressBubbles`) ||
            (m.setOpen(!1, T(h, t)), B());
        }
      }
    }
    function ee(e) {
      d() !== `sloppy` ||
        e.pointerType === `touch` ||
        !m.select(`open`) ||
        !a ||
        H(e) ||
        C(e);
    }
    function ne(e) {
      if (d() !== `sloppy` || !m.select(`open`) || !a || H(e)) return;
      let t = e.touches[0];
      t &&
        ((L.current = {
          startTime: Date.now(),
          startX: t.clientX,
          startY: t.clientY,
          dismissOnTouchEnd: !1,
          dismissOnMouseDown: !0,
        }),
        R.start(1e3, () => {
          L.current &&
            ((L.current.dismissOnTouchEnd = !1),
            (L.current.dismissOnMouseDown = !1));
        }));
    }
    function O(e, t) {
      let n = ie(e);
      if (!n) return;
      let r = j(n, e.type, () => {
        (t(e), r());
      });
    }
    function N(e) {
      ((F.current = `touch`), O(e, ne));
    }
    function z(e) {
      (R.clear(),
        e.type === `pointerdown` && (F.current = e.pointerType),
        !(
          e.type === `mousedown` &&
          L.current &&
          !L.current.dismissOnMouseDown
        ) &&
          O(e, (e) => {
            e.type === `pointerdown` ? ee(e) : C(e);
          }));
    }
    function U(e) {
      if (!k.current) return;
      let t = A.current;
      if ((u(), d() === `intentional`)) {
        if (e.type === `pointercancel`) {
          t && c();
          return;
        }
        if (!g(e)) {
          if (t) {
            c();
            return;
          }
          (typeof w == `function` && !w(e)) ||
            (n.clear(), (M.current = !0), B());
        }
      }
    }
    function G(e) {
      if (d() !== `sloppy` || !L.current || H(e)) return;
      let t = e.touches[0];
      if (!t) return;
      let n = Math.abs(t.clientX - L.current.startX),
        r = Math.abs(t.clientY - L.current.startY),
        i = Math.sqrt(n * n + r * r);
      (i > 5 && (L.current.dismissOnTouchEnd = !0),
        i > 10 && (C(e), R.clear(), (L.current = null)));
    }
    function K(e) {
      O(e, G);
    }
    function q(e) {
      d() !== `sloppy` ||
        !L.current ||
        H(e) ||
        (L.current.dismissOnTouchEnd && C(e), R.clear(), (L.current = null));
    }
    function J(e) {
      O(e, q);
    }
    let Y = r(b),
      de = $(
        o &&
          $(
            j(Y, `keydown`, W),
            j(Y, `compositionstart`, i),
            j(Y, `compositionend`, s),
          ),
        re &&
          $(
            j(Y, `click`, z, !0),
            j(Y, `pointerdown`, z, !0),
            j(Y, `pointerup`, U, !0),
            j(Y, `pointercancel`, U, !0),
            j(Y, `mousedown`, z, !0),
            j(Y, `mouseup`, U, !0),
            j(Y, `touchstart`, N, !0),
            j(Y, `touchmove`, K, !0),
            j(Y, `touchend`, J, !0),
          ),
      );
    return () => {
      (de(), t.clear(), n.clear(), u(), (M.current = !1));
    };
  }, [x, b, o, re, w, v, a, D, ue, W, B, ae, V, H, S, m, R]),
    N.useEffect(B, [w, B]));
  let J = N.useMemo(
      () => ({ onKeyDown: W, onPointerDown: U, onClick: U }),
      [W, U],
    ),
    Y = N.useMemo(
      () => ({
        onKeyDown: W,
        onPointerDown: q,
        onMouseDown: q,
        onClickCapture: G,
        onMouseDownCapture(e) {
          (G(), K(e));
        },
        onPointerDownCapture(e) {
          (G(), K(e));
        },
        onMouseUpCapture: G,
        onTouchEndCapture: G,
        onTouchMoveCapture: G,
      }),
      [W, G, K, q],
    );
  return N.useMemo(
    () => (a ? { reference: J, floating: Y, trigger: J } : {}),
    [a, J, Y],
  );
}
var ct = {
    open: Q((e) => e.open),
    transitionStatus: Q((e) => e.transitionStatus),
    domReferenceElement: Q((e) => e.domReferenceElement),
    referenceElement: Q((e) => e.positionReference ?? e.referenceElement),
    floatingElement: Q((e) => e.floatingElement),
    floatingId: Q((e) => e.floatingId),
  },
  lt = class extends Le {
    constructor(e) {
      let {
        syncOnly: t,
        nested: n,
        onOpenChange: r,
        triggerElements: i,
        ...a
      } = e;
      (super(
        {
          ...a,
          positionReference: a.referenceElement,
          domReferenceElement: a.referenceElement,
        },
        {
          onOpenChange: r,
          dataRef: { current: {} },
          events: Xe(),
          nested: n,
          triggerElements: i,
        },
        ct,
      ),
        (this.syncOnly = t));
    }
    syncOpenEvent = (e, t) => {
      (!e || !this.state.open || (t != null && C(t))) &&
        (this.context.dataRef.current.openEvent = e ? t : void 0);
    };
    dispatchOpenChange = (e, t) => {
      this.syncOpenEvent(e, t.event);
      let n = {
        open: e,
        reason: t.reason,
        nativeEvent: t.event,
        nested: this.context.nested,
        triggerElement: t.trigger,
      };
      this.context.events.emit(`openchange`, n);
    };
    setOpen = (e, t) => {
      if (this.syncOnly) {
        this.context.onOpenChange?.(e, t);
        return;
      }
      (this.dispatchOpenChange(e, t), this.context.onOpenChange?.(e, t));
    };
  },
  ut = class {
    constructor() {
      ((this.elementsSet = new Set()), (this.idMap = new Map()));
    }
    add(e, t) {
      let n = this.idMap.get(e);
      n !== t &&
        (n !== void 0 && this.elementsSet.delete(n),
        this.elementsSet.add(t),
        this.idMap.set(e, t));
    }
    delete(e) {
      let t = this.idMap.get(e);
      t && (this.elementsSet.delete(t), this.idMap.delete(e));
    }
    hasElement(e) {
      return this.elementsSet.has(e);
    }
    hasMatchingElement(e) {
      for (let t of this.elementsSet) if (e(t)) return !0;
      return !1;
    }
    getById(e) {
      return this.idMap.get(e);
    }
    entries() {
      return this.idMap.entries();
    }
    elements() {
      return this.elementsSet.values();
    }
    get size() {
      return this.idMap.size;
    }
  },
  dt = (function (e) {
    return (
      (e.open = `data-open`),
      (e.closed = `data-closed`),
      (e[(e.startingStyle = i.startingStyle)] = `startingStyle`),
      (e[(e.endingStyle = i.endingStyle)] = `endingStyle`),
      (e.anchorHidden = `data-anchor-hidden`),
      (e.side = `data-side`),
      (e.align = `data-align`),
      e
    );
  })({}),
  ft = (function (e) {
    return ((e.popupOpen = `data-popup-open`), (e.pressed = `data-pressed`), e);
  })({}),
  pt = { [ft.popupOpen]: `` },
  mt = { [ft.popupOpen]: ``, [ft.pressed]: `` },
  ht = { [dt.open]: `` },
  gt = { [dt.closed]: `` },
  _t = { [dt.anchorHidden]: `` },
  vt = {
    open(e) {
      return e ? pt : null;
    },
  },
  yt = {
    open(e) {
      return e ? mt : null;
    },
  },
  bt = {
    open(e) {
      return e ? ht : gt;
    },
    anchorHidden(e) {
      return e ? _t : null;
    },
  };
export {
  ke as A,
  fe as B,
  ze as C,
  Ie as D,
  Le as E,
  he as F,
  L as H,
  ge as I,
  ve as L,
  be as M,
  xe as N,
  Me as O,
  pe as P,
  ye as R,
  We as S,
  $ as T,
  I as U,
  X as V,
  Ke as _,
  vt as a,
  He as b,
  st as c,
  nt as d,
  et as f,
  Je as g,
  Ye as h,
  yt as i,
  Q as j,
  Oe as k,
  rt as l,
  Ze as m,
  ft as n,
  ut as o,
  tt as p,
  bt as r,
  lt as s,
  dt as t,
  it as u,
  Ve as v,
  Re as w,
  Ue as x,
  Be as y,
  Z as z,
};
