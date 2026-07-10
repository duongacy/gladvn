import { Nn as e, cr as t, dr as n, sr as r } from "./showcase-vJrKG7HA.js";
var i = n(t(), 1);
typeof window < `u` && window.document && window.document.createElement;
function a(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (r) {
    if ((e?.(r), n === !1 || !r.defaultPrevented)) return t?.(r);
  };
}
function o(e, t) {
  if (typeof e == `function`) return e(t);
  e != null && (e.current = t);
}
function s(...e) {
  return (t) => {
    let n = !1,
      r = e.map((e) => {
        let r = o(e, t);
        return (!n && typeof r == `function` && (n = !0), r);
      });
    if (n)
      return () => {
        for (let t = 0; t < r.length; t++) {
          let n = r[t];
          typeof n == `function` ? n() : o(e[t], null);
        }
      };
  };
}
function c(...e) {
  return i.useCallback(s(...e), e);
}
var l = e();
function u(e, t = []) {
  let n = [];
  function r(t, r) {
    let a = i.createContext(r);
    a.displayName = t + `Context`;
    let o = n.length;
    n = [...n, r];
    let s = (t) => {
      let { scope: n, children: r, ...s } = t,
        c = n?.[e]?.[o] || a,
        u = i.useMemo(() => s, Object.values(s));
      return (0, l.jsx)(c.Provider, { value: u, children: r });
    };
    s.displayName = t + `Provider`;
    function c(n, s) {
      let c = s?.[e]?.[o] || a,
        l = i.useContext(c);
      if (l) return l;
      if (r !== void 0) return r;
      throw Error(`\`${n}\` must be used within \`${t}\``);
    }
    return [s, c];
  }
  let a = () => {
    let t = n.map((e) => i.createContext(e));
    return function (n) {
      let r = n?.[e] || t;
      return i.useMemo(() => ({ [`__scope${e}`]: { ...n, [e]: r } }), [n, r]);
    };
  };
  return ((a.scopeName = e), [r, d(a, ...t)]);
}
function d(...e) {
  let t = e[0];
  if (e.length === 1) return t;
  let n = () => {
    let n = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
    return function (e) {
      let r = n.reduce((t, { useScope: n, scopeName: r }) => {
        let i = n(e)[`__scope${r}`];
        return { ...t, ...i };
      }, {});
      return i.useMemo(() => ({ [`__scope${t.scopeName}`]: r }), [r]);
    };
  };
  return ((n.scopeName = t.scopeName), n);
}
var f = globalThis?.document ? i.useLayoutEffect : () => {},
  p = i.useId || (() => void 0),
  m = 0;
function h(e) {
  let [t, n] = i.useState(p());
  return (
    f(() => {
      e || n((e) => e ?? String(m++));
    }, [e]),
    e || (t ? `radix-${t}` : ``)
  );
}
var g = i.useEffectEvent,
  _ = i.useInsertionEffect;
function ee(e) {
  if (typeof g == `function`) return g(e);
  let t = i.useRef(() => {
    throw Error(`Cannot call an event handler while rendering.`);
  });
  return (
    typeof _ == `function`
      ? _(() => {
          t.current = e;
        })
      : f(() => {
          t.current = e;
        }),
    i.useMemo(
      () =>
        (...e) =>
          t.current?.(...e),
      [],
    )
  );
}
var te = i.useInsertionEffect || f;
function ne({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
  let [a, o, s] = v({ defaultProp: t, onChange: n }),
    c = e !== void 0,
    l = c ? e : a;
  {
    let t = i.useRef(e !== void 0);
    i.useEffect(() => {
      let e = t.current;
      (e !== c &&
        console.warn(
          `${r} is changing from ${e ? `controlled` : `uncontrolled`} to ${c ? `controlled` : `uncontrolled`}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
        ),
        (t.current = c));
    }, [c, r]);
  }
  return [
    l,
    i.useCallback(
      (t) => {
        if (c) {
          let n = re(t) ? t(e) : t;
          n !== e && s.current?.(n);
        } else o(t);
      },
      [c, e, o, s],
    ),
  ];
}
function v({ defaultProp: e, onChange: t }) {
  let [n, r] = i.useState(e),
    a = i.useRef(n),
    o = i.useRef(t);
  return (
    te(() => {
      o.current = t;
    }, [t]),
    i.useEffect(() => {
      a.current !== n && (o.current?.(n), (a.current = n));
    }, [n, a]),
    [n, r, o]
  );
}
function re(e) {
  return typeof e == `function`;
}
var y = n(r(), 1);
function b(e) {
  let t = i.forwardRef((t, n) => {
    let { children: r, ...a } = t,
      o = null,
      s = !1,
      l = [];
    (T(r) && typeof E == `function` && (r = E(r._payload)),
      i.Children.forEach(r, (e) => {
        if (C(e)) {
          s = !0;
          let t = e,
            n = `child` in t.props ? t.props.child : t.props.children;
          (T(n) && typeof E == `function` && (n = E(n._payload)),
            (o = x(t, n)),
            l.push(o?.props?.children));
        } else l.push(e);
      }),
      o
        ? (o = i.cloneElement(o, void 0, l))
        : !s && i.Children.count(r) === 1 && i.isValidElement(r) && (o = r));
    let u = o ? ae(o) : void 0,
      d = c(n, u);
    if (!o) {
      if (r || r === 0) throw Error(s ? ce(e) : se(e));
      return r;
    }
    let f = S(a, o.props ?? {});
    return (o.type !== i.Fragment && (f.ref = n ? d : u), i.cloneElement(o, f));
  });
  return ((t.displayName = `${e}.Slot`), t);
}
var ie = Symbol.for(`radix.slottable`),
  x = (e, t) => {
    if (`child` in e.props) {
      let t = e.props.child;
      return i.isValidElement(t)
        ? i.cloneElement(t, void 0, e.props.children(t.props.children))
        : null;
    }
    return i.isValidElement(t) ? t : null;
  };
function S(e, t) {
  let n = { ...t };
  for (let r in t) {
    let i = e[r],
      a = t[r];
    /^on[A-Z]/.test(r)
      ? i && a
        ? (n[r] = (...e) => {
            let t = a(...e);
            return (i(...e), t);
          })
        : i && (n[r] = i)
      : r === `style`
        ? (n[r] = { ...i, ...a })
        : r === `className` && (n[r] = [i, a].filter(Boolean).join(` `));
  }
  return { ...e, ...n };
}
function ae(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get,
    n = t && `isReactWarning` in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, `ref`)?.get),
      (n = t && `isReactWarning` in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function C(e) {
  return (
    i.isValidElement(e) &&
    typeof e.type == `function` &&
    `__radixId` in e.type &&
    e.type.__radixId === ie
  );
}
var w = Symbol.for(`react.lazy`);
function T(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `$$typeof` in e &&
    e.$$typeof === w &&
    `_payload` in e &&
    oe(e._payload)
  );
}
function oe(e) {
  return typeof e == `object` && !!e && `then` in e;
}
var se = (e) =>
    `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,
  ce = (e) =>
    `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,
  E = i.use,
  D = [
    `a`,
    `button`,
    `div`,
    `form`,
    `h2`,
    `h3`,
    `img`,
    `input`,
    `label`,
    `li`,
    `nav`,
    `ol`,
    `p`,
    `select`,
    `span`,
    `svg`,
    `ul`,
  ].reduce((e, t) => {
    let n = b(`Primitive.${t}`),
      r = i.forwardRef((e, r) => {
        let { asChild: i, ...a } = e,
          o = i ? n : t;
        return (
          typeof window < `u` && (window[Symbol.for(`radix-ui`)] = !0),
          (0, l.jsx)(o, { ...a, ref: r })
        );
      });
    return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
  }, {});
function le(e, t) {
  e && y.flushSync(() => e.dispatchEvent(t));
}
function O(e) {
  let t = i.useRef(e);
  return (
    i.useEffect(() => {
      t.current = e;
    }),
    i.useMemo(
      () =>
        (...e) =>
          t.current?.(...e),
      [],
    )
  );
}
var ue = `DismissableLayer`,
  de = `dismissableLayer.update`,
  fe = `dismissableLayer.pointerDownOutside`,
  pe = `dismissableLayer.focusOutside`,
  me,
  he = i.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
    dismissableSurfaces: new Set(),
  }),
  ge = i.forwardRef((e, t) => {
    let {
        disableOutsidePointerEvents: n = !1,
        deferPointerDownOutside: r = !1,
        onEscapeKeyDown: o,
        onPointerDownOutside: s,
        onFocusOutside: u,
        onInteractOutside: d,
        onDismiss: f,
        ...p
      } = e,
      m = i.useContext(he),
      [h, g] = i.useState(null),
      _ = h?.ownerDocument ?? globalThis?.document,
      [, te] = i.useState({}),
      ne = c(t, g),
      v = Array.from(m.layers),
      [re] = [...m.layersWithOutsidePointerEventsDisabled].slice(-1),
      y = v.indexOf(re),
      b = h ? v.indexOf(h) : -1,
      ie = m.layersWithOutsidePointerEventsDisabled.size > 0,
      x = b >= y,
      S = i.useRef(!1),
      ae = be(
        (e) => {
          let t = e.target;
          if (!(t instanceof Node)) return;
          let n = [...m.branches].some((e) => e.contains(t));
          !x || n || (s?.(e), d?.(e), e.defaultPrevented || f?.());
        },
        {
          ownerDocument: _,
          deferPointerDownOutside: r,
          isDeferredPointerDownOutsideRef: S,
          dismissableSurfaces: m.dismissableSurfaces,
        },
      ),
      C = xe((e) => {
        if (r && S.current) return;
        let t = e.target;
        [...m.branches].some((e) => e.contains(t)) ||
          (u?.(e), d?.(e), e.defaultPrevented || f?.());
      }, _),
      w = h ? b === v.length - 1 : !1,
      T = ee((e) => {
        e.key === `Escape` &&
          (o?.(e), !e.defaultPrevented && f && (e.preventDefault(), f()));
      });
    return (
      i.useEffect(() => {
        if (w)
          return (
            _.addEventListener(`keydown`, T, { capture: !0 }),
            () => _.removeEventListener(`keydown`, T, { capture: !0 })
          );
      }, [_, w]),
      i.useEffect(() => {
        if (h)
          return (
            n &&
              (m.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((me = _.body.style.pointerEvents),
                (_.body.style.pointerEvents = `none`)),
              m.layersWithOutsidePointerEventsDisabled.add(h)),
            m.layers.add(h),
            Se(),
            () => {
              n &&
                (m.layersWithOutsidePointerEventsDisabled.delete(h),
                m.layersWithOutsidePointerEventsDisabled.size === 0 &&
                  (_.body.style.pointerEvents = me));
            }
          );
      }, [h, _, n, m]),
      i.useEffect(
        () => () => {
          h &&
            (m.layers.delete(h),
            m.layersWithOutsidePointerEventsDisabled.delete(h),
            Se());
        },
        [h, m],
      ),
      i.useEffect(() => {
        let e = () => te({});
        return (
          document.addEventListener(de, e),
          () => document.removeEventListener(de, e)
        );
      }, []),
      (0, l.jsx)(D.div, {
        ...p,
        ref: ne,
        style: {
          pointerEvents: ie ? (x ? `auto` : `none`) : void 0,
          ...e.style,
        },
        onFocusCapture: a(e.onFocusCapture, C.onFocusCapture),
        onBlurCapture: a(e.onBlurCapture, C.onBlurCapture),
        onPointerDownCapture: a(
          e.onPointerDownCapture,
          ae.onPointerDownCapture,
        ),
      })
    );
  });
ge.displayName = ue;
var _e = `DismissableLayerBranch`,
  ve = i.forwardRef((e, t) => {
    let n = i.useContext(he),
      r = i.useRef(null),
      a = c(t, r);
    return (
      i.useEffect(() => {
        let e = r.current;
        if (e)
          return (
            n.branches.add(e),
            () => {
              n.branches.delete(e);
            }
          );
      }, [n.branches]),
      (0, l.jsx)(D.div, { ...e, ref: a })
    );
  });
ve.displayName = _e;
function ye() {
  let e = i.useContext(he),
    [t, n] = i.useState(null);
  return (
    i.useEffect(() => {
      if (t)
        return (
          e.dismissableSurfaces.add(t),
          () => {
            e.dismissableSurfaces.delete(t);
          }
        );
    }, [t, e.dismissableSurfaces]),
    n
  );
}
function be(e, t) {
  let {
      ownerDocument: n = globalThis?.document,
      deferPointerDownOutside: r = !1,
      isDeferredPointerDownOutsideRef: a,
      dismissableSurfaces: o,
    } = t,
    s = O(e),
    c = i.useRef(!1),
    l = i.useRef(!1),
    u = i.useRef(new Map()),
    d = i.useRef(() => {});
  return (
    i.useEffect(() => {
      function e() {
        ((l.current = !1), (a.current = !1), u.current.clear());
      }
      function t() {
        return Array.from(u.current.values()).some(Boolean);
      }
      function i(e) {
        if (!l.current) return;
        let t = e.target;
        ((t instanceof Node && [...o].some((e) => e.contains(t))) ||
          u.current.set(e.type, !0),
          e.type === `click` &&
            window.setTimeout(() => {
              l.current && d.current();
            }, 0));
      }
      function f(e) {
        l.current && u.current.set(e.type, !1);
      }
      let p = (i) => {
          if (i.target && !c.current) {
            let o = function () {
                n.removeEventListener(`click`, d.current);
                let r = t();
                (e(), r || Ce(fe, s, c, { discrete: !0 }));
              },
              c = { originalEvent: i };
            ((l.current = !0),
              (a.current = r && i.button === 0),
              u.current.clear(),
              !r || i.button !== 0
                ? o()
                : (n.removeEventListener(`click`, d.current),
                  (d.current = o),
                  n.addEventListener(`click`, d.current, { once: !0 })));
          } else (n.removeEventListener(`click`, d.current), e());
          c.current = !1;
        },
        m = [
          `pointerup`,
          `mousedown`,
          `mouseup`,
          `touchstart`,
          `touchend`,
          `click`,
        ];
      for (let e of m) (n.addEventListener(e, i, !0), n.addEventListener(e, f));
      let h = window.setTimeout(() => {
        n.addEventListener(`pointerdown`, p);
      }, 0);
      return () => {
        (window.clearTimeout(h),
          n.removeEventListener(`pointerdown`, p),
          n.removeEventListener(`click`, d.current));
        for (let e of m)
          (n.removeEventListener(e, i, !0), n.removeEventListener(e, f));
      };
    }, [n, s, r, a, o]),
    { onPointerDownCapture: () => (c.current = !0) }
  );
}
function xe(e, t = globalThis?.document) {
  let n = O(e),
    r = i.useRef(!1);
  return (
    i.useEffect(() => {
      let e = (e) => {
        e.target &&
          !r.current &&
          Ce(pe, n, { originalEvent: e }, { discrete: !1 });
      };
      return (
        t.addEventListener(`focusin`, e),
        () => t.removeEventListener(`focusin`, e)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function Se() {
  let e = new CustomEvent(de);
  document.dispatchEvent(e);
}
function Ce(e, t, n, { discrete: r }) {
  let i = n.originalEvent.target,
    a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  (t && i.addEventListener(e, t, { once: !0 }),
    r ? le(i, a) : i.dispatchEvent(a));
}
var k = `focusScope.autoFocusOnMount`,
  A = `focusScope.autoFocusOnUnmount`,
  we = { bubbles: !1, cancelable: !0 },
  Te = `FocusScope`,
  Ee = i.forwardRef((e, t) => {
    let {
        loop: n = !1,
        trapped: r = !1,
        onMountAutoFocus: a,
        onUnmountAutoFocus: o,
        ...s
      } = e,
      [u, d] = i.useState(null),
      f = O(a),
      p = O(o),
      m = i.useRef(null),
      h = c(t, d),
      g = i.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    (i.useEffect(() => {
      if (r) {
        let e = function (e) {
            if (g.paused || !u) return;
            let t = e.target;
            u.contains(t) ? (m.current = t) : j(m.current, { select: !0 });
          },
          t = function (e) {
            if (g.paused || !u) return;
            let t = e.relatedTarget;
            t !== null && (u.contains(t) || j(m.current, { select: !0 }));
          },
          n = function (e) {
            if (document.activeElement === document.body)
              for (let t of e) t.removedNodes.length > 0 && j(u);
          };
        (document.addEventListener(`focusin`, e),
          document.addEventListener(`focusout`, t));
        let r = new MutationObserver(n);
        return (
          u && r.observe(u, { childList: !0, subtree: !0 }),
          () => {
            (document.removeEventListener(`focusin`, e),
              document.removeEventListener(`focusout`, t),
              r.disconnect());
          }
        );
      }
    }, [r, u, g.paused]),
      i.useEffect(() => {
        if (u) {
          Ne.add(g);
          let e = document.activeElement;
          if (!u.contains(e)) {
            let t = new CustomEvent(k, we);
            (u.addEventListener(k, f),
              u.dispatchEvent(t),
              t.defaultPrevented ||
                (De(Ie(ke(u)), { select: !0 }),
                document.activeElement === e && j(u)));
          }
          return () => {
            (u.removeEventListener(k, f),
              setTimeout(() => {
                let t = new CustomEvent(A, we);
                (u.addEventListener(A, p),
                  u.dispatchEvent(t),
                  t.defaultPrevented || j(e ?? document.body, { select: !0 }),
                  u.removeEventListener(A, p),
                  Ne.remove(g));
              }, 0));
          };
        }
      }, [u, f, p, g]));
    let _ = i.useCallback(
      (e) => {
        if ((!n && !r) || g.paused) return;
        let t = e.key === `Tab` && !e.altKey && !e.ctrlKey && !e.metaKey,
          i = document.activeElement;
        if (t && i) {
          let t = e.currentTarget,
            [r, a] = Oe(t);
          r && a
            ? !e.shiftKey && i === a
              ? (e.preventDefault(), n && j(r, { select: !0 }))
              : e.shiftKey &&
                i === r &&
                (e.preventDefault(), n && j(a, { select: !0 }))
            : i === t && e.preventDefault();
        }
      },
      [n, r, g.paused],
    );
    return (0, l.jsx)(D.div, { tabIndex: -1, ...s, ref: h, onKeyDown: _ });
  });
Ee.displayName = Te;
function De(e, { select: t = !1 } = {}) {
  let n = document.activeElement;
  for (let r of e)
    if ((j(r, { select: t }), document.activeElement !== n)) return;
}
function Oe(e) {
  let t = ke(e);
  return [Ae(t, e), Ae(t.reverse(), e)];
}
function ke(e) {
  let t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (e) => {
        let t = e.tagName === `INPUT` && e.type === `hidden`;
        return e.disabled || e.hidden || t
          ? NodeFilter.FILTER_SKIP
          : e.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode();) t.push(n.currentNode);
  return t;
}
function Ae(e, t) {
  for (let n of e) if (!je(n, { upTo: t })) return n;
}
function je(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === `hidden`) return !0;
  for (; e;) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === `none`) return !0;
    e = e.parentElement;
  }
  return !1;
}
function Me(e) {
  return e instanceof HTMLInputElement && `select` in e;
}
function j(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    let n = document.activeElement;
    (e.focus({ preventScroll: !0 }), e !== n && Me(e) && t && e.select());
  }
}
var Ne = Pe();
function Pe() {
  let e = [];
  return {
    add(t) {
      let n = e[0];
      (t !== n && n?.pause(), (e = Fe(e, t)), e.unshift(t));
    },
    remove(t) {
      ((e = Fe(e, t)), e[0]?.resume());
    },
  };
}
function Fe(e, t) {
  let n = [...e],
    r = n.indexOf(t);
  return (r !== -1 && n.splice(r, 1), n);
}
function Ie(e) {
  return e.filter((e) => e.tagName !== `A`);
}
var Le = `Portal`,
  Re = i.forwardRef((e, t) => {
    let { container: n, ...r } = e,
      [a, o] = i.useState(!1);
    f(() => o(!0), []);
    let s = n || (a && globalThis?.document?.body);
    return s ? y.createPortal((0, l.jsx)(D.div, { ...r, ref: t }), s) : null;
  });
Re.displayName = Le;
function ze(e, t) {
  return i.useReducer((e, n) => t[e][n] ?? e, e);
}
var M = (e) => {
  let { present: t, children: n } = e,
    r = Be(t),
    a =
      typeof n == `function` ? n({ present: r.isPresent }) : i.Children.only(n),
    o = He(r.ref, Ue(a));
  return typeof n == `function` || r.isPresent
    ? i.cloneElement(a, { ref: o })
    : null;
};
M.displayName = `Presence`;
function Be(e) {
  let [t, n] = i.useState(),
    r = i.useRef(null),
    a = i.useRef(e),
    o = i.useRef(`none`),
    [s, c] = ze(e ? `mounted` : `unmounted`, {
      mounted: { UNMOUNT: `unmounted`, ANIMATION_OUT: `unmountSuspended` },
      unmountSuspended: { MOUNT: `mounted`, ANIMATION_END: `unmounted` },
      unmounted: { MOUNT: `mounted` },
    });
  return (
    i.useEffect(() => {
      let e = N(r.current);
      o.current = s === `mounted` ? e : `none`;
    }, [s]),
    f(() => {
      let t = r.current,
        n = a.current;
      if (n !== e) {
        let r = o.current,
          i = N(t);
        (e
          ? c(`MOUNT`)
          : i === `none` || t?.display === `none`
            ? c(`UNMOUNT`)
            : c(n && r !== i ? `ANIMATION_OUT` : `UNMOUNT`),
          (a.current = e));
      }
    }, [e, c]),
    f(() => {
      if (t) {
        let e,
          n = t.ownerDocument.defaultView ?? window,
          i = (i) => {
            let o = N(r.current).includes(CSS.escape(i.animationName));
            if (i.target === t && o && (c(`ANIMATION_END`), !a.current)) {
              let r = t.style.animationFillMode;
              ((t.style.animationFillMode = `forwards`),
                (e = n.setTimeout(() => {
                  t.style.animationFillMode === `forwards` &&
                    (t.style.animationFillMode = r);
                })));
            }
          },
          s = (e) => {
            e.target === t && (o.current = N(r.current));
          };
        return (
          t.addEventListener(`animationstart`, s),
          t.addEventListener(`animationcancel`, i),
          t.addEventListener(`animationend`, i),
          () => {
            (n.clearTimeout(e),
              t.removeEventListener(`animationstart`, s),
              t.removeEventListener(`animationcancel`, i),
              t.removeEventListener(`animationend`, i));
          }
        );
      } else c(`ANIMATION_END`);
    }, [t, c]),
    {
      isPresent: [`mounted`, `unmountSuspended`].includes(s),
      ref: i.useCallback((e) => {
        ((r.current = e ? getComputedStyle(e) : null), n(e));
      }, []),
    }
  );
}
function Ve(e, t) {
  if (typeof e == `function`) return e(t);
  e != null && (e.current = t);
}
function He(...e) {
  let t = i.useRef(e);
  return (
    (t.current = e),
    i.useCallback((e) => {
      let n = t.current,
        r = !1,
        i = n.map((t) => {
          let n = Ve(t, e);
          return (!r && typeof n == `function` && (r = !0), n);
        });
      if (r)
        return () => {
          for (let e = 0; e < i.length; e++) {
            let t = i[e];
            typeof t == `function` ? t() : Ve(n[e], null);
          }
        };
    }, [])
  );
}
function N(e) {
  return e?.animationName || `none`;
}
function Ue(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get,
    n = t && `isReactWarning` in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, `ref`)?.get),
      (n = t && `isReactWarning` in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var P = 0,
  F = null;
function We() {
  i.useEffect(() => {
    F ||= { start: Ge(), end: Ge() };
    let { start: e, end: t } = F;
    return (
      document.body.firstElementChild !== e &&
        document.body.insertAdjacentElement(`afterbegin`, e),
      document.body.lastElementChild !== t &&
        document.body.insertAdjacentElement(`beforeend`, t),
      P++,
      () => {
        (P === 1 && (F?.start.remove(), F?.end.remove(), (F = null)),
          (P = Math.max(0, P - 1)));
      }
    );
  }, []);
}
function Ge() {
  let e = document.createElement(`span`);
  return (
    e.setAttribute(`data-radix-focus-guard`, ``),
    (e.tabIndex = 0),
    (e.style.outline = `none`),
    (e.style.opacity = `0`),
    (e.style.position = `fixed`),
    (e.style.pointerEvents = `none`),
    e
  );
}
var I = function () {
  return (
    (I =
      Object.assign ||
      function (e) {
        for (var t, n = 1, r = arguments.length; n < r; n++)
          for (var i in ((t = arguments[n]), t))
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e;
      }),
    I.apply(this, arguments)
  );
};
function Ke(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == `function`)
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  return n;
}
function qe(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, a; r < i; r++)
      (a || !(r in t)) &&
        ((a ||= Array.prototype.slice.call(t, 0, r)), (a[r] = t[r]));
  return e.concat(a || Array.prototype.slice.call(t));
}
var L = `right-scroll-bar-position`,
  R = `width-before-scroll-bar`,
  Je = `with-scroll-bars-hidden`,
  Ye = `--removed-body-scroll-bar-size`;
function Xe(e, t) {
  return (typeof e == `function` ? e(t) : e && (e.current = t), e);
}
function Ze(e, t) {
  var n = (0, i.useState)(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(e) {
          var t = n.value;
          t !== e && ((n.value = e), n.callback(e, t));
        },
      },
    };
  })[0];
  return ((n.callback = t), n.facade);
}
var Qe = typeof window < `u` ? i.useLayoutEffect : i.useEffect,
  $e = new WeakMap();
function et(e, t) {
  var n = Ze(t || null, function (t) {
    return e.forEach(function (e) {
      return Xe(e, t);
    });
  });
  return (
    Qe(
      function () {
        var t = $e.get(n);
        if (t) {
          var r = new Set(t),
            i = new Set(e),
            a = n.current;
          (r.forEach(function (e) {
            i.has(e) || Xe(e, null);
          }),
            i.forEach(function (e) {
              r.has(e) || Xe(e, a);
            }));
        }
        $e.set(n, e);
      },
      [e],
    ),
    n
  );
}
function tt(e) {
  return e;
}
function nt(e, t) {
  t === void 0 && (t = tt);
  var n = [],
    r = !1;
  return {
    read: function () {
      if (r)
        throw Error(
          "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
        );
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function (e) {
      var i = t(e, r);
      return (
        n.push(i),
        function () {
          n = n.filter(function (e) {
            return e !== i;
          });
        }
      );
    },
    assignSyncMedium: function (e) {
      for (r = !0; n.length;) {
        var t = n;
        ((n = []), t.forEach(e));
      }
      n = {
        push: function (t) {
          return e(t);
        },
        filter: function () {
          return n;
        },
      };
    },
    assignMedium: function (e) {
      r = !0;
      var t = [];
      if (n.length) {
        var i = n;
        ((n = []), i.forEach(e), (t = n));
      }
      var a = function () {
          var n = t;
          ((t = []), n.forEach(e));
        },
        o = function () {
          return Promise.resolve().then(a);
        };
      (o(),
        (n = {
          push: function (e) {
            (t.push(e), o());
          },
          filter: function (e) {
            return ((t = t.filter(e)), n);
          },
        }));
    },
  };
}
function rt(e) {
  e === void 0 && (e = {});
  var t = nt(null);
  return ((t.options = I({ async: !0, ssr: !1 }, e)), t);
}
var it = function (e) {
  var t = e.sideCar,
    n = Ke(e, [`sideCar`]);
  if (!t)
    throw Error(
      "Sidecar: please provide `sideCar` property to import the right car",
    );
  var r = t.read();
  if (!r) throw Error(`Sidecar medium not found`);
  return i.createElement(r, I({}, n));
};
it.isSideCarExport = !0;
function at(e, t) {
  return (e.useMedium(t), it);
}
var ot = rt(),
  st = function () {},
  z = i.forwardRef(function (e, t) {
    var n = i.useRef(null),
      r = i.useState({
        onScrollCapture: st,
        onWheelCapture: st,
        onTouchMoveCapture: st,
      }),
      a = r[0],
      o = r[1],
      s = e.forwardProps,
      c = e.children,
      l = e.className,
      u = e.removeScrollBar,
      d = e.enabled,
      f = e.shards,
      p = e.sideCar,
      m = e.noRelative,
      h = e.noIsolation,
      g = e.inert,
      _ = e.allowPinchZoom,
      ee = e.as,
      te = ee === void 0 ? `div` : ee,
      ne = e.gapMode,
      v = Ke(e, [
        `forwardProps`,
        `children`,
        `className`,
        `removeScrollBar`,
        `enabled`,
        `shards`,
        `sideCar`,
        `noRelative`,
        `noIsolation`,
        `inert`,
        `allowPinchZoom`,
        `as`,
        `gapMode`,
      ]),
      re = p,
      y = et([n, t]),
      b = I(I({}, v), a);
    return i.createElement(
      i.Fragment,
      null,
      d &&
        i.createElement(re, {
          sideCar: ot,
          removeScrollBar: u,
          shards: f,
          noRelative: m,
          noIsolation: h,
          inert: g,
          setCallbacks: o,
          allowPinchZoom: !!_,
          lockRef: n,
          gapMode: ne,
        }),
      s
        ? i.cloneElement(i.Children.only(c), I(I({}, b), { ref: y }))
        : i.createElement(te, I({}, b, { className: l, ref: y }), c),
    );
  });
((z.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
  (z.classNames = { fullWidth: R, zeroRight: L }));
var ct,
  lt = function () {
    if (ct) return ct;
    if (typeof __webpack_nonce__ < `u`) return __webpack_nonce__;
  };
function ut() {
  if (!document) return null;
  var e = document.createElement(`style`);
  e.type = `text/css`;
  var t = lt();
  return (t && e.setAttribute(`nonce`, t), e);
}
function dt(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function ft(e) {
  (document.head || document.getElementsByTagName(`head`)[0]).appendChild(e);
}
var pt = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        (e == 0 && (t = ut()) && (dt(t, n), ft(t)), e++);
      },
      remove: function () {
        (e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null)));
      },
    };
  },
  mt = function () {
    var e = pt();
    return function (t, n) {
      i.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n],
      );
    };
  },
  ht = function () {
    var e = mt();
    return function (t) {
      var n = t.styles,
        r = t.dynamic;
      return (e(n, r), null);
    };
  },
  gt = { left: 0, top: 0, right: 0, gap: 0 },
  _t = function (e) {
    return parseInt(e || ``, 10) || 0;
  },
  vt = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === `padding` ? `paddingLeft` : `marginLeft`],
      r = t[e === `padding` ? `paddingTop` : `marginTop`],
      i = t[e === `padding` ? `paddingRight` : `marginRight`];
    return [_t(n), _t(r), _t(i)];
  },
  yt = function (e) {
    if ((e === void 0 && (e = `margin`), typeof window > `u`)) return gt;
    var t = vt(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  bt = ht(),
  B = `data-scroll-locked`,
  xt = function (e, t, n, r) {
    var i = e.left,
      a = e.top,
      o = e.right,
      s = e.gap;
    return (
      n === void 0 && (n = `margin`),
      `
  .${Je} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${B}] {
    overflow: hidden ${r};
    overscroll-behavior: contain;
    ${[
      t && `position: relative ${r};`,
      n === `margin` &&
        `
    padding-left: ${i}px;
    padding-top: ${a}px;
    padding-right: ${o}px;
    margin-left:0;
    margin-top:0;
    margin-right: ${s}px ${r};
    `,
      n === `padding` && `padding-right: ${s}px ${r};`,
    ]
      .filter(Boolean)
      .join(``)}
  }
  
  .${L} {
    right: ${s}px ${r};
  }
  
  .${R} {
    margin-right: ${s}px ${r};
  }
  
  .${L} .${L} {
    right: 0 ${r};
  }
  
  .${R} .${R} {
    margin-right: 0 ${r};
  }
  
  body[${B}] {
    ${Ye}: ${s}px;
  }
`
    );
  },
  St = function () {
    var e = parseInt(
      document.body.getAttribute(`data-scroll-locked`) || `0`,
      10,
    );
    return isFinite(e) ? e : 0;
  },
  Ct = function () {
    i.useEffect(function () {
      return (
        document.body.setAttribute(B, (St() + 1).toString()),
        function () {
          var e = St() - 1;
          e <= 0
            ? document.body.removeAttribute(B)
            : document.body.setAttribute(B, e.toString());
        }
      );
    }, []);
  },
  wt = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      a = r === void 0 ? `margin` : r;
    Ct();
    var o = i.useMemo(
      function () {
        return yt(a);
      },
      [a],
    );
    return i.createElement(bt, { styles: xt(o, !t, a, n ? `` : `!important`) });
  },
  Tt = !1;
if (typeof window < `u`)
  try {
    var V = Object.defineProperty({}, "passive", {
      get: function () {
        return ((Tt = !0), !0);
      },
    });
    (window.addEventListener(`test`, V, V),
      window.removeEventListener(`test`, V, V));
  } catch {
    Tt = !1;
  }
var H = Tt ? { passive: !1 } : !1,
  Et = function (e) {
    return e.tagName === `TEXTAREA`;
  },
  Dt = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return (
      n[t] !== `hidden` &&
      !(n.overflowY === n.overflowX && !Et(e) && n[t] === `visible`)
    );
  },
  Ot = function (e) {
    return Dt(e, `overflowY`);
  },
  kt = function (e) {
    return Dt(e, `overflowX`);
  },
  At = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      if (
        (typeof ShadowRoot < `u` && r instanceof ShadowRoot && (r = r.host),
        Nt(e, r))
      ) {
        var i = Pt(e, r);
        if (i[1] > i[2]) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  jt = function (e) {
    return [e.scrollTop, e.scrollHeight, e.clientHeight];
  },
  Mt = function (e) {
    return [e.scrollLeft, e.scrollWidth, e.clientWidth];
  },
  Nt = function (e, t) {
    return e === `v` ? Ot(t) : kt(t);
  },
  Pt = function (e, t) {
    return e === `v` ? jt(t) : Mt(t);
  },
  Ft = function (e, t) {
    return e === `h` && t === `rtl` ? -1 : 1;
  },
  It = function (e, t, n, r, i) {
    var a = Ft(e, window.getComputedStyle(t).direction),
      o = a * r,
      s = n.target,
      c = t.contains(s),
      l = !1,
      u = o > 0,
      d = 0,
      f = 0;
    do {
      if (!s) break;
      var p = Pt(e, s),
        m = p[0],
        h = p[1] - p[2] - a * m;
      (m || h) && Nt(e, s) && ((d += h), (f += m));
      var g = s.parentNode;
      s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
    } while ((!c && s !== document.body) || (c && (t.contains(s) || t === s)));
    return (
      ((u && ((i && Math.abs(d) < 1) || (!i && o > d))) ||
        (!u && ((i && Math.abs(f) < 1) || (!i && -o > f)))) &&
        (l = !0),
      l
    );
  },
  U = function (e) {
    return `changedTouches` in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  Lt = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Rt = function (e) {
    return e && `current` in e ? e.current : e;
  },
  zt = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  Bt = function (e) {
    return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
  },
  Vt = 0,
  W = [];
function Ht(e) {
  var t = i.useRef([]),
    n = i.useRef([0, 0]),
    r = i.useRef(),
    a = i.useState(Vt++)[0],
    o = i.useState(ht)[0],
    s = i.useRef(e);
  (i.useEffect(
    function () {
      s.current = e;
    },
    [e],
  ),
    i.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add(`block-interactivity-${a}`);
          var t = qe([e.lockRef.current], (e.shards || []).map(Rt), !0).filter(
            Boolean,
          );
          return (
            t.forEach(function (e) {
              return e.classList.add(`allow-interactivity-${a}`);
            }),
            function () {
              (document.body.classList.remove(`block-interactivity-${a}`),
                t.forEach(function (e) {
                  return e.classList.remove(`allow-interactivity-${a}`);
                }));
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards],
    ));
  var c = i.useCallback(function (e, t) {
      if (
        (`touches` in e && e.touches.length === 2) ||
        (e.type === `wheel` && e.ctrlKey)
      )
        return !s.current.allowPinchZoom;
      var i = U(e),
        a = n.current,
        o = `deltaX` in e ? e.deltaX : a[0] - i[0],
        c = `deltaY` in e ? e.deltaY : a[1] - i[1],
        l,
        u = e.target,
        d = Math.abs(o) > Math.abs(c) ? `h` : `v`;
      if (`touches` in e && d === `h` && u.type === `range`) return !1;
      var f = window.getSelection(),
        p = f && f.anchorNode;
      if (p && (p === u || p.contains(u))) return !1;
      var m = At(d, u);
      if (!m) return !0;
      if ((m ? (l = d) : ((l = d === `v` ? `h` : `v`), (m = At(d, u))), !m))
        return !1;
      if (
        (!r.current && `changedTouches` in e && (o || c) && (r.current = l), !l)
      )
        return !0;
      var h = r.current || l;
      return It(h, t, e, h === `h` ? o : c, !0);
    }, []),
    l = i.useCallback(function (e) {
      var n = e;
      if (!(!W.length || W[W.length - 1] !== o)) {
        var r = `deltaY` in n ? Lt(n) : U(n),
          i = t.current.filter(function (e) {
            return (
              e.name === n.type &&
              (e.target === n.target || n.target === e.shadowParent) &&
              zt(e.delta, r)
            );
          })[0];
        if (i && i.should) {
          n.cancelable && n.preventDefault();
          return;
        }
        if (!i) {
          var a = (s.current.shards || [])
            .map(Rt)
            .filter(Boolean)
            .filter(function (e) {
              return e.contains(n.target);
            });
          (a.length > 0 ? c(n, a[0]) : !s.current.noIsolation) &&
            n.cancelable &&
            n.preventDefault();
        }
      }
    }, []),
    u = i.useCallback(function (e, n, r, i) {
      var a = { name: e, delta: n, target: r, should: i, shadowParent: Ut(r) };
      (t.current.push(a),
        setTimeout(function () {
          t.current = t.current.filter(function (e) {
            return e !== a;
          });
        }, 1));
    }, []),
    d = i.useCallback(function (e) {
      ((n.current = U(e)), (r.current = void 0));
    }, []),
    f = i.useCallback(function (t) {
      u(t.type, Lt(t), t.target, c(t, e.lockRef.current));
    }, []),
    p = i.useCallback(function (t) {
      u(t.type, U(t), t.target, c(t, e.lockRef.current));
    }, []);
  i.useEffect(function () {
    return (
      W.push(o),
      e.setCallbacks({
        onScrollCapture: f,
        onWheelCapture: f,
        onTouchMoveCapture: p,
      }),
      document.addEventListener(`wheel`, l, H),
      document.addEventListener(`touchmove`, l, H),
      document.addEventListener(`touchstart`, d, H),
      function () {
        ((W = W.filter(function (e) {
          return e !== o;
        })),
          document.removeEventListener(`wheel`, l, H),
          document.removeEventListener(`touchmove`, l, H),
          document.removeEventListener(`touchstart`, d, H));
      }
    );
  }, []);
  var m = e.removeScrollBar,
    h = e.inert;
  return i.createElement(
    i.Fragment,
    null,
    h ? i.createElement(o, { styles: Bt(a) }) : null,
    m
      ? i.createElement(wt, { noRelative: e.noRelative, gapMode: e.gapMode })
      : null,
  );
}
function Ut(e) {
  for (var t = null; e !== null;)
    (e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
      (e = e.parentNode));
  return t;
}
var Wt = at(ot, Ht),
  Gt = i.forwardRef(function (e, t) {
    return i.createElement(z, I({}, e, { ref: t, sideCar: Wt }));
  });
Gt.classNames = z.classNames;
var Kt = function (e) {
    return typeof document > `u`
      ? null
      : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
  },
  G = new WeakMap(),
  K = new WeakMap(),
  q = {},
  qt = 0,
  Jt = function (e) {
    return e && (e.host || Jt(e.parentNode));
  },
  Yt = function (e, t) {
    return t
      .map(function (t) {
        if (e.contains(t)) return t;
        var n = Jt(t);
        return n && e.contains(n)
          ? n
          : (console.error(
              `aria-hidden`,
              t,
              `in not contained inside`,
              e,
              `. Doing nothing`,
            ),
            null);
      })
      .filter(function (e) {
        return !!e;
      });
  },
  Xt = function (e, t, n, r) {
    var i = Yt(t, Array.isArray(e) ? e : [e]);
    q[n] || (q[n] = new WeakMap());
    var a = q[n],
      o = [],
      s = new Set(),
      c = new Set(i),
      l = function (e) {
        !e || s.has(e) || (s.add(e), l(e.parentNode));
      };
    i.forEach(l);
    var u = function (e) {
      !e ||
        c.has(e) ||
        Array.prototype.forEach.call(e.children, function (e) {
          if (s.has(e)) u(e);
          else
            try {
              var t = e.getAttribute(r),
                i = t !== null && t !== `false`,
                c = (G.get(e) || 0) + 1,
                l = (a.get(e) || 0) + 1;
              (G.set(e, c),
                a.set(e, l),
                o.push(e),
                c === 1 && i && K.set(e, !0),
                l === 1 && e.setAttribute(n, `true`),
                i || e.setAttribute(r, `true`));
            } catch (t) {
              console.error(`aria-hidden: cannot operate on `, e, t);
            }
        });
    };
    return (
      u(t),
      s.clear(),
      qt++,
      function () {
        (o.forEach(function (e) {
          var t = G.get(e) - 1,
            i = a.get(e) - 1;
          (G.set(e, t),
            a.set(e, i),
            t || (K.has(e) || e.removeAttribute(r), K.delete(e)),
            i || e.removeAttribute(n));
        }),
          qt--,
          qt ||
            ((G = new WeakMap()),
            (G = new WeakMap()),
            (K = new WeakMap()),
            (q = {})));
      }
    );
  },
  Zt = function (e, t, n) {
    n === void 0 && (n = `data-aria-hidden`);
    var r = Array.from(Array.isArray(e) ? e : [e]),
      i = t || Kt(e);
    return i
      ? (r.push.apply(r, Array.from(i.querySelectorAll(`[aria-live], script`))),
        Xt(r, i, n, `aria-hidden`))
      : function () {
          return null;
        };
  },
  J = `Dialog`,
  [Qt, $t] = u(J),
  [en, Y] = Qt(J),
  tn = (e) => {
    let {
        __scopeDialog: t,
        children: n,
        open: r,
        defaultOpen: a,
        onOpenChange: o,
        modal: s = !0,
      } = e,
      c = i.useRef(null),
      u = i.useRef(null),
      [d, f] = ne({ prop: r, defaultProp: a ?? !1, onChange: o, caller: J });
    return (0, l.jsx)(en, {
      scope: t,
      triggerRef: c,
      contentRef: u,
      contentId: h(),
      titleId: h(),
      descriptionId: h(),
      open: d,
      onOpenChange: f,
      onOpenToggle: i.useCallback(() => f((e) => !e), [f]),
      modal: s,
      children: n,
    });
  };
tn.displayName = J;
var nn = `DialogTrigger`,
  rn = i.forwardRef((e, t) => {
    let { __scopeDialog: n, ...r } = e,
      i = Y(nn, n),
      o = c(t, i.triggerRef);
    return (0, l.jsx)(D.button, {
      type: `button`,
      "aria-haspopup": `dialog`,
      "aria-expanded": i.open,
      "aria-controls": i.open ? i.contentId : void 0,
      "data-state": $(i.open),
      ...r,
      ref: o,
      onClick: a(e.onClick, i.onOpenToggle),
    });
  });
rn.displayName = nn;
var X = `DialogPortal`,
  [an, on] = Qt(X, { forceMount: void 0 }),
  sn = (e) => {
    let { __scopeDialog: t, forceMount: n, children: r, container: a } = e,
      o = Y(X, t);
    return (0, l.jsx)(an, {
      scope: t,
      forceMount: n,
      children: i.Children.map(r, (e) =>
        (0, l.jsx)(M, {
          present: n || o.open,
          children: (0, l.jsx)(Re, { asChild: !0, container: a, children: e }),
        }),
      ),
    });
  };
sn.displayName = X;
var Z = `DialogOverlay`,
  cn = i.forwardRef((e, t) => {
    let n = on(Z, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...i } = e,
      a = Y(Z, e.__scopeDialog);
    return a.modal
      ? (0, l.jsx)(M, {
          present: r || a.open,
          children: (0, l.jsx)(un, { ...i, ref: t }),
        })
      : null;
  });
cn.displayName = Z;
var ln = b(`DialogOverlay.RemoveScroll`),
  un = i.forwardRef((e, t) => {
    let { __scopeDialog: n, ...r } = e,
      i = Y(Z, n),
      a = c(t, ye());
    return (0, l.jsx)(Gt, {
      as: ln,
      allowPinchZoom: !0,
      shards: [i.contentRef],
      children: (0, l.jsx)(D.div, {
        "data-state": $(i.open),
        ...r,
        ref: a,
        style: { pointerEvents: `auto`, ...r.style },
      }),
    });
  }),
  Q = `DialogContent`,
  dn = i.forwardRef((e, t) => {
    let n = on(Q, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...i } = e,
      a = Y(Q, e.__scopeDialog);
    return (0, l.jsx)(M, {
      present: r || a.open,
      children: a.modal
        ? (0, l.jsx)(fn, { ...i, ref: t })
        : (0, l.jsx)(pn, { ...i, ref: t }),
    });
  });
dn.displayName = Q;
var fn = i.forwardRef((e, t) => {
    let n = Y(Q, e.__scopeDialog),
      r = i.useRef(null),
      o = c(t, n.contentRef, r);
    return (
      i.useEffect(() => {
        let e = r.current;
        if (e) return Zt(e);
      }, []),
      (0, l.jsx)(mn, {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        onCloseAutoFocus: a(e.onCloseAutoFocus, (e) => {
          (e.preventDefault(), n.triggerRef.current?.focus());
        }),
        onPointerDownOutside: a(e.onPointerDownOutside, (e) => {
          let t = e.detail.originalEvent,
            n = t.button === 0 && t.ctrlKey === !0;
          (t.button === 2 || n) && e.preventDefault();
        }),
        onFocusOutside: a(e.onFocusOutside, (e) => e.preventDefault()),
      })
    );
  }),
  pn = i.forwardRef((e, t) => {
    let n = Y(Q, e.__scopeDialog),
      r = i.useRef(!1),
      a = i.useRef(!1);
    return (0, l.jsx)(mn, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (t) => {
        (e.onCloseAutoFocus?.(t),
          t.defaultPrevented ||
            (r.current || n.triggerRef.current?.focus(), t.preventDefault()),
          (r.current = !1),
          (a.current = !1));
      },
      onInteractOutside: (t) => {
        (e.onInteractOutside?.(t),
          t.defaultPrevented ||
            ((r.current = !0),
            t.detail.originalEvent.type === `pointerdown` && (a.current = !0)));
        let i = t.target;
        (n.triggerRef.current?.contains(i) && t.preventDefault(),
          t.detail.originalEvent.type === `focusin` &&
            a.current &&
            t.preventDefault());
      },
    });
  }),
  mn = i.forwardRef((e, t) => {
    let {
        __scopeDialog: n,
        trapFocus: r,
        onOpenAutoFocus: i,
        onCloseAutoFocus: a,
        ...o
      } = e,
      s = Y(Q, n);
    return (
      We(),
      (0, l.jsx)(l.Fragment, {
        children: (0, l.jsx)(Ee, {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: i,
          onUnmountAutoFocus: a,
          children: (0, l.jsx)(ge, {
            role: `dialog`,
            id: s.contentId,
            "aria-describedby": s.descriptionId,
            "aria-labelledby": s.titleId,
            "data-state": $(s.open),
            ...o,
            ref: t,
            deferPointerDownOutside: !0,
            onDismiss: () => s.onOpenChange(!1),
          }),
        }),
      })
    );
  }),
  hn = `DialogTitle`,
  gn = i.forwardRef((e, t) => {
    let { __scopeDialog: n, ...r } = e,
      i = Y(hn, n);
    return (0, l.jsx)(D.h2, { id: i.titleId, ...r, ref: t });
  });
gn.displayName = hn;
var _n = `DialogDescription`,
  vn = i.forwardRef((e, t) => {
    let { __scopeDialog: n, ...r } = e,
      i = Y(_n, n);
    return (0, l.jsx)(D.p, { id: i.descriptionId, ...r, ref: t });
  });
vn.displayName = _n;
var yn = `DialogClose`,
  bn = i.forwardRef((e, t) => {
    let { __scopeDialog: n, ...r } = e,
      i = Y(yn, n);
    return (0, l.jsx)(D.button, {
      type: `button`,
      ...r,
      ref: t,
      onClick: a(e.onClick, () => i.onOpenChange(!1)),
    });
  });
bn.displayName = yn;
function $(e) {
  return e ? `open` : `closed`;
}
export {
  cn as a,
  rn as c,
  s as d,
  vn as i,
  D as l,
  bn as n,
  sn as o,
  dn as r,
  gn as s,
  tn as t,
  h as u,
};
