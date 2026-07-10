import {
  Nn as e,
  cr as t,
  dr as n,
  i as r,
  ir as i,
  n as a,
  or as o,
  qn as s,
  r as c,
  s as l,
} from "./showcase-vJrKG7HA.js";
import { t as u } from "./calendar-Bm1jGYE7.js";
import { t as d } from "./credit-card-CrNa2qum.js";
import { t as f } from "./search-Ba8-HPrO.js";
import { t as p } from "./settings-B7j5T5VV.js";
import { t as m } from "./user-B_lk4UZ_.js";
import { n as ee, t as h } from "./input-group-CEoiDdE-.js";
import {
  a as g,
  d as _,
  l as v,
  o as te,
  r as y,
  t as b,
  u as x,
} from "./dist-CllS2Eq0.js";
import { i as S, o as C, r as w, s as T, t as E } from "./dialog-D34PAGGO.js";
var D = o(`calculator`, [
    [
      `rect`,
      { width: `16`, height: `20`, x: `4`, y: `2`, rx: `2`, key: `1nb95v` },
    ],
    [`line`, { x1: `8`, x2: `16`, y1: `6`, y2: `6`, key: `x4nwl0` }],
    [`line`, { x1: `16`, x2: `16`, y1: `14`, y2: `18`, key: `wjye3r` }],
    [`path`, { d: `M16 10h.01`, key: `1m94wz` }],
    [`path`, { d: `M12 10h.01`, key: `1nrarc` }],
    [`path`, { d: `M8 10h.01`, key: `19clt8` }],
    [`path`, { d: `M12 14h.01`, key: `1etili` }],
    [`path`, { d: `M8 14h.01`, key: `6423bh` }],
    [`path`, { d: `M12 18h.01`, key: `mhygvu` }],
    [`path`, { d: `M8 18h.01`, key: `lrp35t` }],
  ]),
  O = o(`smile`, [
    [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
    [`path`, { d: `M8 14s1.5 2 4 2 4-2 4-2`, key: `1y1vjs` }],
    [`line`, { x1: `9`, x2: `9.01`, y1: `9`, y2: `9`, key: `yxxnd0` }],
    [`line`, { x1: `15`, x2: `15.01`, y1: `9`, y2: `9`, key: `1p4y9e` }],
  ]),
  k = n(t(), 1),
  A = 1,
  j = 0.9,
  M = 0.8,
  N = 0.17,
  P = 0.1,
  F = 0.999,
  I = 0.9999,
  L = 0.99,
  R = /[\\\/_+.#"@\[\(\{&]/,
  ne = /[\\\/_+.#"@\[\(\{&]/g,
  re = /[\s-]/,
  ie = /[\s-]/g;
function ae(e, t, n, r, i, a, o) {
  if (a === t.length) return i === e.length ? A : L;
  var s = `${i},${a}`;
  if (o[s] !== void 0) return o[s];
  for (var c = r.charAt(a), l = n.indexOf(c, i), u = 0, d, f, p, m; l >= 0;)
    ((d = ae(e, t, n, r, l + 1, a + 1, o)),
      d > u &&
        (l === i
          ? (d *= A)
          : R.test(e.charAt(l - 1))
            ? ((d *= M),
              (p = e.slice(i, l - 1).match(ne)),
              p && i > 0 && (d *= F ** +p.length))
            : re.test(e.charAt(l - 1))
              ? ((d *= j),
                (m = e.slice(i, l - 1).match(ie)),
                m && i > 0 && (d *= F ** +m.length))
              : ((d *= N), i > 0 && (d *= F ** +(l - i))),
        e.charAt(l) !== t.charAt(a) && (d *= I)),
      ((d < P && n.charAt(l - 1) === r.charAt(a + 1)) ||
        (r.charAt(a + 1) === r.charAt(a) && n.charAt(l - 1) !== r.charAt(a))) &&
        ((f = ae(e, t, n, r, l + 1, a + 2, o)), f * P > d && (d = f * P)),
      d > u && (u = d),
      (l = n.indexOf(c, l + 1)));
  return ((o[s] = u), u);
}
function oe(e) {
  return e.toLowerCase().replace(ie, ` `);
}
function se(e, t, n) {
  return (
    (e = n && n.length > 0 ? `${e + ` ` + n.join(` `)}` : e),
    ae(e, t, oe(e), oe(t), 0, 0, {})
  );
}
var z = `[cmdk-group=""]`,
  B = `[cmdk-group-items=""]`,
  ce = `[cmdk-group-heading=""]`,
  le = `[cmdk-item=""]`,
  ue = `${le}:not([aria-disabled="true"])`,
  V = `cmdk-item-select`,
  H = `data-value`,
  de = (e, t, n) => se(e, t, n),
  fe = k.createContext(void 0),
  U = () => k.useContext(fe),
  pe = k.createContext(void 0),
  W = () => k.useContext(pe),
  me = k.createContext(void 0),
  he = k.forwardRef((e, t) => {
    let n = q(() => ({
        search: ``,
        value: e.value ?? e.defaultValue ?? ``,
        selectedItemId: void 0,
        filtered: { count: 0, items: new Map(), groups: new Set() },
      })),
      r = q(() => new Set()),
      i = q(() => new Map()),
      a = q(() => new Map()),
      o = q(() => new Set()),
      s = Ee(e),
      {
        label: c,
        children: l,
        value: u,
        onValueChange: d,
        filter: f,
        shouldFilter: p,
        loop: m,
        disablePointerSelection: ee = !1,
        vimBindings: h = !0,
        ...g
      } = e,
      _ = x(),
      te = x(),
      y = x(),
      b = k.useRef(null),
      S = Oe();
    (K(() => {
      if (u !== void 0) {
        let e = u.trim();
        ((n.current.value = e), C.emit());
      }
    }, [u]),
      K(() => {
        S(6, A);
      }, []));
    let C = k.useMemo(
        () => ({
          subscribe: (e) => (o.current.add(e), () => o.current.delete(e)),
          snapshot: () => n.current,
          setState: (e, t, r) => {
            var i, a, o;
            if (!Object.is(n.current[e], t)) {
              if (((n.current[e] = t), e === `search`)) (O(), E(), S(1, D));
              else if (e === `value`) {
                if (
                  document.activeElement.hasAttribute(`cmdk-input`) ||
                  document.activeElement.hasAttribute(`cmdk-root`)
                ) {
                  let e = document.getElementById(y);
                  e
                    ? e.focus()
                    : (i = document.getElementById(_)) == null || i.focus();
                }
                if (
                  (S(7, () => {
                    ((n.current.selectedItemId = j()?.id), C.emit());
                  }),
                  r || S(5, A),
                  s.current?.value !== void 0)
                ) {
                  let e = t ?? ``;
                  (o = (a = s.current).onValueChange) == null || o.call(a, e);
                  return;
                }
              }
              C.emit();
            }
          },
          emit: () => {
            o.current.forEach((e) => e());
          },
        }),
        [],
      ),
      w = k.useMemo(
        () => ({
          value: (e, t, r) => {
            t !== a.current.get(e)?.value &&
              (a.current.set(e, { value: t, keywords: r }),
              n.current.filtered.items.set(e, T(t, r)),
              S(2, () => {
                (E(), C.emit());
              }));
          },
          item: (e, t) => (
            r.current.add(e),
            t &&
              (i.current.has(t)
                ? i.current.get(t).add(e)
                : i.current.set(t, new Set([e]))),
            S(3, () => {
              (O(), E(), n.current.value || D(), C.emit());
            }),
            () => {
              (a.current.delete(e),
                r.current.delete(e),
                n.current.filtered.items.delete(e));
              let t = j();
              S(4, () => {
                (O(), t?.getAttribute(`id`) === e && D(), C.emit());
              });
            }
          ),
          group: (e) => (
            i.current.has(e) || i.current.set(e, new Set()),
            () => {
              (a.current.delete(e), i.current.delete(e));
            }
          ),
          filter: () => s.current.shouldFilter,
          label: c || e[`aria-label`],
          getDisablePointerSelection: () => s.current.disablePointerSelection,
          listId: _,
          inputId: y,
          labelId: te,
          listInnerRef: b,
        }),
        [],
      );
    function T(e, t) {
      let r = s.current?.filter ?? de;
      return e ? r(e, n.current.search, t) : 0;
    }
    function E() {
      if (!n.current.search || s.current.shouldFilter === !1) return;
      let e = n.current.filtered.items,
        t = [];
      n.current.filtered.groups.forEach((n) => {
        let r = i.current.get(n),
          a = 0;
        (r.forEach((t) => {
          let n = e.get(t);
          a = Math.max(n, a);
        }),
          t.push([n, a]));
      });
      let r = b.current;
      (M()
        .sort((t, n) => {
          let r = t.getAttribute(`id`),
            i = n.getAttribute(`id`);
          return (e.get(i) ?? 0) - (e.get(r) ?? 0);
        })
        .forEach((e) => {
          let t = e.closest(B);
          t
            ? t.appendChild(e.parentElement === t ? e : e.closest(`${B} > *`))
            : r.appendChild(e.parentElement === r ? e : e.closest(`${B} > *`));
        }),
        t
          .sort((e, t) => t[1] - e[1])
          .forEach((e) => {
            let t = b.current?.querySelector(
              `${z}[${H}="${encodeURIComponent(e[0])}"]`,
            );
            t?.parentElement.appendChild(t);
          }));
    }
    function D() {
      let e = M()
        .find((e) => e.getAttribute(`aria-disabled`) !== `true`)
        ?.getAttribute(H);
      C.setState(`value`, e || void 0);
    }
    function O() {
      if (!n.current.search || s.current.shouldFilter === !1) {
        n.current.filtered.count = r.current.size;
        return;
      }
      n.current.filtered.groups = new Set();
      let e = 0;
      for (let t of r.current) {
        let r = T(
          a.current.get(t)?.value ?? ``,
          a.current.get(t)?.keywords ?? [],
        );
        (n.current.filtered.items.set(t, r), r > 0 && e++);
      }
      for (let [e, t] of i.current)
        for (let r of t)
          if (n.current.filtered.items.get(r) > 0) {
            n.current.filtered.groups.add(e);
            break;
          }
      n.current.filtered.count = e;
    }
    function A() {
      var e;
      let t = j();
      t &&
        (t.parentElement?.firstChild === t &&
          ((e = t.closest(z)?.querySelector(ce)) == null ||
            e.scrollIntoView({ block: `nearest` })),
        t.scrollIntoView({ block: `nearest` }));
    }
    function j() {
      return b.current?.querySelector(`${le}[aria-selected="true"]`);
    }
    function M() {
      return Array.from(b.current?.querySelectorAll(ue) || []);
    }
    function N(e) {
      let t = M()[e];
      t && C.setState(`value`, t.getAttribute(H));
    }
    function P(e) {
      var t;
      let n = j(),
        r = M(),
        i = r.findIndex((e) => e === n),
        a = r[i + e];
      ((t = s.current) != null &&
        t.loop &&
        (a =
          i + e < 0 ? r[r.length - 1] : i + e === r.length ? r[0] : r[i + e]),
        a && C.setState(`value`, a.getAttribute(H)));
    }
    function F(e) {
      let t = j()?.closest(z),
        n;
      for (; t && !n;)
        ((t = e > 0 ? we(t, z) : Te(t, z)), (n = t?.querySelector(ue)));
      n ? C.setState(`value`, n.getAttribute(H)) : P(e);
    }
    let I = () => N(M().length - 1),
      L = (e) => {
        (e.preventDefault(), e.metaKey ? I() : e.altKey ? F(1) : P(1));
      },
      R = (e) => {
        (e.preventDefault(), e.metaKey ? N(0) : e.altKey ? F(-1) : P(-1));
      };
    return k.createElement(
      v.div,
      {
        ref: t,
        tabIndex: -1,
        ...g,
        "cmdk-root": ``,
        onKeyDown: (e) => {
          var t;
          (t = g.onKeyDown) == null || t.call(g, e);
          let n = e.nativeEvent.isComposing || e.keyCode === 229;
          if (!(e.defaultPrevented || n))
            switch (e.key) {
              case `n`:
              case `j`:
                h && e.ctrlKey && L(e);
                break;
              case `ArrowDown`:
                L(e);
                break;
              case `p`:
              case `k`:
                h && e.ctrlKey && R(e);
                break;
              case `ArrowUp`:
                R(e);
                break;
              case `Home`:
                (e.preventDefault(), N(0));
                break;
              case `End`:
                (e.preventDefault(), I());
                break;
              case `Enter`: {
                e.preventDefault();
                let t = j();
                if (t) {
                  let e = new Event(V);
                  t.dispatchEvent(e);
                }
              }
            }
        },
      },
      k.createElement(
        `label`,
        { "cmdk-label": ``, htmlFor: w.inputId, id: w.labelId, style: Ae },
        c,
      ),
      Y(e, (e) =>
        k.createElement(
          pe.Provider,
          { value: C },
          k.createElement(fe.Provider, { value: w }, e),
        ),
      ),
    );
  }),
  ge = k.forwardRef((e, t) => {
    let n = x(),
      r = k.useRef(null),
      i = k.useContext(me),
      a = U(),
      o = Ee(e),
      s = o.current?.forceMount ?? i?.forceMount;
    K(() => {
      if (!s) return a.item(n, i?.id);
    }, [s]);
    let c = De(n, r, [e.value, e.children, r], e.keywords),
      l = W(),
      u = J((e) => e.value && e.value === c.current),
      d = J((e) =>
        s || a.filter() === !1
          ? !0
          : e.search
            ? e.filtered.items.get(n) > 0
            : !0,
      );
    k.useEffect(() => {
      let t = r.current;
      if (!(!t || e.disabled))
        return (t.addEventListener(V, f), () => t.removeEventListener(V, f));
    }, [d, e.onSelect, e.disabled]);
    function f() {
      var e, t;
      (p(), (t = (e = o.current).onSelect) == null || t.call(e, c.current));
    }
    function p() {
      l.setState(`value`, c.current, !0);
    }
    if (!d) return null;
    let {
      disabled: m,
      value: ee,
      onSelect: h,
      forceMount: g,
      keywords: te,
      ...y
    } = e;
    return k.createElement(
      v.div,
      {
        ref: _(r, t),
        ...y,
        id: n,
        "cmdk-item": ``,
        role: `option`,
        "aria-disabled": !!m,
        "aria-selected": !!u,
        "data-disabled": !!m,
        "data-selected": !!u,
        onPointerMove: m || a.getDisablePointerSelection() ? void 0 : p,
        onClick: m ? void 0 : f,
      },
      e.children,
    );
  }),
  _e = k.forwardRef((e, t) => {
    let { heading: n, children: r, forceMount: i, ...a } = e,
      o = x(),
      s = k.useRef(null),
      c = k.useRef(null),
      l = x(),
      u = U(),
      d = J((e) =>
        i || u.filter() === !1 ? !0 : e.search ? e.filtered.groups.has(o) : !0,
      );
    (K(() => u.group(o), []), De(o, s, [e.value, e.heading, c]));
    let f = k.useMemo(() => ({ id: o, forceMount: i }), [i]);
    return k.createElement(
      v.div,
      {
        ref: _(s, t),
        ...a,
        "cmdk-group": ``,
        role: `presentation`,
        hidden: d ? void 0 : !0,
      },
      n &&
        k.createElement(
          `div`,
          { ref: c, "cmdk-group-heading": ``, "aria-hidden": !0, id: l },
          n,
        ),
      Y(e, (e) =>
        k.createElement(
          `div`,
          {
            "cmdk-group-items": ``,
            role: `group`,
            "aria-labelledby": n ? l : void 0,
          },
          k.createElement(me.Provider, { value: f }, e),
        ),
      ),
    );
  }),
  ve = k.forwardRef((e, t) => {
    let { alwaysRender: n, ...r } = e,
      i = k.useRef(null),
      a = J((e) => !e.search);
    return !n && !a
      ? null
      : k.createElement(v.div, {
          ref: _(i, t),
          ...r,
          "cmdk-separator": ``,
          role: `separator`,
        });
  }),
  ye = k.forwardRef((e, t) => {
    let { onValueChange: n, ...r } = e,
      i = e.value != null,
      a = W(),
      o = J((e) => e.search),
      s = J((e) => e.selectedItemId),
      c = U();
    return (
      k.useEffect(() => {
        e.value != null && a.setState(`search`, e.value);
      }, [e.value]),
      k.createElement(v.input, {
        ref: t,
        ...r,
        "cmdk-input": ``,
        autoComplete: `off`,
        autoCorrect: `off`,
        spellCheck: !1,
        "aria-autocomplete": `list`,
        role: `combobox`,
        "aria-expanded": !0,
        "aria-controls": c.listId,
        "aria-labelledby": c.labelId,
        "aria-activedescendant": s,
        id: c.inputId,
        type: `text`,
        value: i ? e.value : o,
        onChange: (e) => {
          (i || a.setState(`search`, e.target.value), n?.(e.target.value));
        },
      })
    );
  }),
  be = k.forwardRef((e, t) => {
    let { children: n, label: r = `Suggestions`, ...i } = e,
      a = k.useRef(null),
      o = k.useRef(null),
      s = J((e) => e.selectedItemId),
      c = U();
    return (
      k.useEffect(() => {
        if (o.current && a.current) {
          let e = o.current,
            t = a.current,
            n,
            r = new ResizeObserver(() => {
              n = requestAnimationFrame(() => {
                let n = e.offsetHeight;
                t.style.setProperty(`--cmdk-list-height`, n.toFixed(1) + `px`);
              });
            });
          return (
            r.observe(e),
            () => {
              (cancelAnimationFrame(n), r.unobserve(e));
            }
          );
        }
      }, []),
      k.createElement(
        v.div,
        {
          ref: _(a, t),
          ...i,
          "cmdk-list": ``,
          role: `listbox`,
          tabIndex: -1,
          "aria-activedescendant": s,
          "aria-label": r,
          id: c.listId,
        },
        Y(e, (e) =>
          k.createElement(
            `div`,
            { ref: _(o, c.listInnerRef), "cmdk-list-sizer": `` },
            e,
          ),
        ),
      )
    );
  }),
  xe = k.forwardRef((e, t) => {
    let {
      open: n,
      onOpenChange: r,
      overlayClassName: i,
      contentClassName: a,
      container: o,
      ...s
    } = e;
    return k.createElement(
      b,
      { open: n, onOpenChange: r },
      k.createElement(
        te,
        { container: o },
        k.createElement(g, { "cmdk-overlay": ``, className: i }),
        k.createElement(
          y,
          { "aria-label": e.label, "cmdk-dialog": ``, className: a },
          k.createElement(he, { ref: t, ...s }),
        ),
      ),
    );
  }),
  Se = k.forwardRef((e, t) =>
    J((e) => e.filtered.count === 0)
      ? k.createElement(v.div, {
          ref: t,
          ...e,
          "cmdk-empty": ``,
          role: `presentation`,
        })
      : null,
  ),
  Ce = k.forwardRef((e, t) => {
    let { progress: n, children: r, label: i = `Loading...`, ...a } = e;
    return k.createElement(
      v.div,
      {
        ref: t,
        ...a,
        "cmdk-loading": ``,
        role: `progressbar`,
        "aria-valuenow": n,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-label": i,
      },
      Y(e, (e) => k.createElement(`div`, { "aria-hidden": !0 }, e)),
    );
  }),
  G = Object.assign(he, {
    List: be,
    Item: ge,
    Input: ye,
    Group: _e,
    Separator: ve,
    Dialog: xe,
    Empty: Se,
    Loading: Ce,
  });
function we(e, t) {
  let n = e.nextElementSibling;
  for (; n;) {
    if (n.matches(t)) return n;
    n = n.nextElementSibling;
  }
}
function Te(e, t) {
  let n = e.previousElementSibling;
  for (; n;) {
    if (n.matches(t)) return n;
    n = n.previousElementSibling;
  }
}
function Ee(e) {
  let t = k.useRef(e);
  return (
    K(() => {
      t.current = e;
    }),
    t
  );
}
var K = typeof window > `u` ? k.useEffect : k.useLayoutEffect;
function q(e) {
  let t = k.useRef();
  return (t.current === void 0 && (t.current = e()), t);
}
function J(e) {
  let t = W(),
    n = () => e(t.snapshot());
  return k.useSyncExternalStore(t.subscribe, n, n);
}
function De(e, t, n, r = []) {
  let i = k.useRef(),
    a = U();
  return (
    K(() => {
      var o;
      let s = (() => {
          for (let e of n) {
            if (typeof e == `string`) return e.trim();
            if (typeof e == `object` && `current` in e)
              return e.current ? e.current.textContent?.trim() : i.current;
          }
        })(),
        c = r.map((e) => e.trim());
      (a.value(e, s, c),
        (o = t.current) == null || o.setAttribute(H, s),
        (i.current = s));
    }),
    i
  );
}
var Oe = () => {
  let [e, t] = k.useState(),
    n = q(() => new Map());
  return (
    K(() => {
      (n.current.forEach((e) => e()), (n.current = new Map()));
    }, [e]),
    (e, r) => {
      (n.current.set(e, r), t({}));
    }
  );
};
function ke(e) {
  let t = e.type;
  return typeof t == `function`
    ? t(e.props)
    : `render` in t
      ? t.render(e.props)
      : e;
}
function Y({ asChild: e, children: t }, n) {
  return e && k.isValidElement(t)
    ? k.cloneElement(ke(t), { ref: t.ref }, n(t.props.children))
    : n(t);
}
var Ae = {
    position: `absolute`,
    width: `1px`,
    height: `1px`,
    padding: `0`,
    margin: `-1px`,
    overflow: `hidden`,
    clip: `rect(0, 0, 0, 0)`,
    whiteSpace: `nowrap`,
    borderWidth: `0`,
  },
  X = e();
function je({ className: e, ...t }) {
  return (0, X.jsx)(G, {
    "data-slot": `command`,
    className: s(
      `flex size-full flex-col overflow-hidden rounded-xl bg-popover p-1 text-popover-foreground`,
      e,
    ),
    ...t,
  });
}
function Me({
  title: e = `Command Palette`,
  description: t = `Search for a command to run...`,
  children: n,
  className: r,
  showCloseButton: i = !1,
  ...a
}) {
  return (0, X.jsxs)(E, {
    ...a,
    children: [
      (0, X.jsxs)(C, {
        className: `sr-only`,
        children: [
          (0, X.jsx)(T, { children: e }),
          (0, X.jsx)(S, { children: t }),
        ],
      }),
      (0, X.jsx)(w, {
        className: s(`top-1/3 translate-y-0 overflow-hidden rounded-xl p-0`, r),
        children: n,
      }),
    ],
  });
}
function Z({ className: e, ...t }) {
  return (0, X.jsx)(`div`, {
    "data-slot": `command-input-wrapper`,
    className: `p-1 pb-0`,
    children: (0, X.jsxs)(h, {
      className: `h-8 rounded-lg border-input/30 bg-input/30 shadow-none`,
      children: [
        (0, X.jsx)(G.Input, {
          "data-slot": `command-input`,
          className: s(
            `w-full text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50`,
            e,
          ),
          ...t,
        }),
        (0, X.jsx)(ee, {
          className: `pl-2`,
          children: (0, X.jsx)(f, { className: `size-4 shrink-0 opacity-50` }),
        }),
      ],
    }),
  });
}
function Ne({ className: e, ...t }) {
  return (0, X.jsx)(G.List, {
    "data-slot": `command-list`,
    className: s(
      `no-scrollbar max-h-72 scroll-py-1 overflow-x-hidden overflow-y-auto outline-none`,
      e,
    ),
    ...t,
  });
}
function Pe({ className: e, ...t }) {
  return (0, X.jsx)(G.Empty, {
    "data-slot": `command-empty`,
    className: s(`py-6 text-center text-sm`, e),
    ...t,
  });
}
function Q({ className: e, ...t }) {
  return (0, X.jsx)(G.Group, {
    "data-slot": `command-group`,
    className: s(
      `overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground`,
      e,
    ),
    ...t,
  });
}
function Fe({ className: e, ...t }) {
  return (0, X.jsx)(G.Separator, {
    "data-slot": `command-separator`,
    className: s(`-mx-1 h-px bg-border`, e),
    ...t,
  });
}
function $({ className: e, children: t, ...n }) {
  return (0, X.jsxs)(G.Item, {
    "data-slot": `command-item`,
    className: s(
      `group/command-item relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none in-data-[slot=dialog-content]:rounded-lg data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 data-selected:bg-muted data-selected:text-foreground [&>svg]:pointer-events-none [&>svg]:shrink-0 [&>svg:not([class*='size-'])]:size-4 data-selected:[&>svg]:text-foreground`,
      e,
    ),
    ...n,
    children: [
      t,
      (0, X.jsx)(i, {
        className: `ml-auto opacity-0 group-has-data-[slot=command-shortcut]/command-item:hidden group-data-[checked=true]/command-item:opacity-100`,
      }),
    ],
  });
}
function Ie({ className: e, ...t }) {
  return (0, X.jsx)(`span`, {
    "data-slot": `command-shortcut`,
    className: s(
      `ml-auto text-xs tracking-widest text-muted-foreground group-data-selected/command-item:text-foreground`,
      e,
    ),
    ...t,
  });
}
function Le() {
  let [e, t] = (0, k.useState)(!1);
  return (0, X.jsxs)(`div`, {
    className: `space-y-10`,
    children: [
      (0, X.jsx)(r, {
        title: `Command`,
        description: `Menu lệnh nhanh, có thể kết hợp, không theo kiểu cho React.`,
      }),
      (0, X.jsxs)(a, {
        columns: 2,
        children: [
          (0, X.jsx)(c, {
            label: `Default`,
            description: `Bảng lệnh có thể tìm kiếm với các mục được nhóm.`,
            children: (0, X.jsx)(`div`, {
              className: `border rounded-xl shadow-sm overflow-hidden bg-background w-full`,
              children: (0, X.jsxs)(je, {
                children: [
                  (0, X.jsx)(Z, { placeholder: `Type a command or search...` }),
                  (0, X.jsxs)(Ne, {
                    children: [
                      (0, X.jsx)(Pe, { children: `No results found.` }),
                      (0, X.jsxs)(Q, {
                        heading: `Suggestions`,
                        children: [
                          (0, X.jsxs)($, {
                            children: [
                              (0, X.jsx)(u, { className: `mr-2 h-4 w-4` }),
                              (0, X.jsx)(`span`, { children: `Calendar` }),
                            ],
                          }),
                          (0, X.jsxs)($, {
                            children: [
                              (0, X.jsx)(O, { className: `mr-2 h-4 w-4` }),
                              (0, X.jsx)(`span`, { children: `Search Emoji` }),
                            ],
                          }),
                          (0, X.jsxs)($, {
                            disabled: !0,
                            children: [
                              (0, X.jsx)(D, { className: `mr-2 h-4 w-4` }),
                              (0, X.jsx)(`span`, { children: `Calculator` }),
                            ],
                          }),
                        ],
                      }),
                      (0, X.jsx)(Fe, {}),
                      (0, X.jsxs)(Q, {
                        heading: `Settings`,
                        children: [
                          (0, X.jsxs)($, {
                            children: [
                              (0, X.jsx)(m, { className: `mr-2 h-4 w-4` }),
                              (0, X.jsx)(`span`, { children: `Profile` }),
                              (0, X.jsx)(Ie, { children: `⌘P` }),
                            ],
                          }),
                          (0, X.jsxs)($, {
                            children: [
                              (0, X.jsx)(d, { className: `mr-2 h-4 w-4` }),
                              (0, X.jsx)(`span`, { children: `Billing` }),
                              (0, X.jsx)(Ie, { children: `⌘B` }),
                            ],
                          }),
                          (0, X.jsxs)($, {
                            children: [
                              (0, X.jsx)(p, { className: `mr-2 h-4 w-4` }),
                              (0, X.jsx)(`span`, { children: `Settings` }),
                              (0, X.jsx)(Ie, { children: `⌘S` }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
          (0, X.jsx)(c, {
            label: `Flat List`,
            description: `Nhóm duy nhất không có tiêu đề.`,
            children: (0, X.jsx)(`div`, {
              className: `border rounded-xl shadow-sm overflow-hidden bg-background w-full`,
              children: (0, X.jsxs)(je, {
                children: [
                  (0, X.jsx)(Z, { placeholder: `Search actions...` }),
                  (0, X.jsxs)(Ne, {
                    children: [
                      (0, X.jsx)(Pe, { children: `No actions found.` }),
                      (0, X.jsxs)(Q, {
                        children: [
                          (0, X.jsxs)($, {
                            children: [
                              (0, X.jsx)(m, { className: `mr-2 h-4 w-4` }),
                              (0, X.jsx)(`span`, { children: `View Profile` }),
                            ],
                          }),
                          (0, X.jsxs)($, {
                            children: [
                              (0, X.jsx)(p, { className: `mr-2 h-4 w-4` }),
                              (0, X.jsx)(`span`, { children: `Open Settings` }),
                            ],
                          }),
                          (0, X.jsxs)($, {
                            children: [
                              (0, X.jsx)(u, { className: `mr-2 h-4 w-4` }),
                              (0, X.jsx)(`span`, {
                                children: `Schedule Meeting`,
                              }),
                            ],
                          }),
                          (0, X.jsxs)($, {
                            children: [
                              (0, X.jsx)(d, { className: `mr-2 h-4 w-4` }),
                              (0, X.jsx)(`span`, {
                                children: `Manage Billing`,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        ],
      }),
      (0, X.jsxs)(c, {
        label: `Dialog Menu`,
        description: `Menu lệnh được hiển thị bên trong hộp thoại.`,
        children: [
          (0, X.jsx)(l, {
            onClick: () => t(!0),
            children: `Open Command Palette`,
          }),
          (0, X.jsxs)(Me, {
            open: e,
            onOpenChange: t,
            children: [
              (0, X.jsx)(Z, { placeholder: `Type a command or search...` }),
              (0, X.jsxs)(Ne, {
                children: [
                  (0, X.jsx)(Pe, { children: `No results found.` }),
                  (0, X.jsxs)(Q, {
                    heading: `Suggestions`,
                    children: [
                      (0, X.jsxs)($, {
                        children: [
                          (0, X.jsx)(u, { className: `mr-2 h-4 w-4` }),
                          (0, X.jsx)(`span`, { children: `Calendar` }),
                        ],
                      }),
                      (0, X.jsxs)($, {
                        children: [
                          (0, X.jsx)(O, { className: `mr-2 h-4 w-4` }),
                          (0, X.jsx)(`span`, { children: `Search Emoji` }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
export { Le as default };
