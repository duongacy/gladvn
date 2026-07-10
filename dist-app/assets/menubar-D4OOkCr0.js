import {
  Nn as e,
  Rt as t,
  cr as n,
  dr as r,
  g as i,
  i as a,
  ir as o,
  qn as s,
  r as c,
} from "./showcase-vJrKG7HA.js";
import {
  d as l,
  l as u,
  p as d,
  u as f,
} from "./popupStateMapping-wxS0crot.js";
import {
  _ as p,
  a as m,
  c as h,
  g,
  o as _,
  s as v,
} from "./MenuSubmenuTrigger-DI6U4VRr.js";
import {
  a as y,
  d as b,
  f as x,
  i as S,
  l as C,
  m as w,
  o as T,
  p as E,
  r as D,
  s as O,
  t as k,
  u as A,
} from "./dropdown-menu-P0heMpMs.js";
var j = (function (e) {
    return (
      (e.modal = `data-modal`),
      (e.orientation = `data-orientation`),
      (e.hasSubmenuOpen = `data-has-submenu-open`),
      e
    );
  })({}),
  M = r(n(), 1),
  N = e(),
  P = {
    hasSubmenuOpen(e) {
      return e ? { [j.hasSubmenuOpen]: `` } : null;
    },
  },
  F = M.forwardRef(function (e, n) {
    let {
        orientation: r = `horizontal`,
        loopFocus: a = !0,
        render: o,
        className: s,
        modal: c = !0,
        disabled: l = !1,
        id: u,
        style: d,
        ...p
      } = e,
      [h, g] = M.useState(null),
      [_, v] = M.useState(!1),
      y = t(u),
      b = { orientation: r, modal: c, hasSubmenuOpen: _ },
      x = M.useRef(null),
      S = M.useRef(!1),
      C = M.useMemo(
        () => ({
          contentElement: h,
          setContentElement: g,
          setHasSubmenuOpen: v,
          hasSubmenuOpen: _,
          modal: c,
          disabled: l,
          orientation: r,
          allowMouseUpTriggerRef: S,
          rootId: y,
        }),
        [h, _, c, l, r, y],
      );
    return (0, N.jsx)(m.Provider, {
      value: C,
      children: (0, N.jsx)(f, {
        children: (0, N.jsx)(I, {
          children: (0, N.jsx)(i, {
            render: o,
            className: s,
            style: d,
            state: b,
            stateAttributesMapping: P,
            refs: [n, g, x],
            props: [{ role: `menubar`, id: y, "aria-orientation": r }, p],
            orientation: r,
            loopFocus: a,
            enableHomeAndEndKeys: !0,
            highlightItemOnHover: _,
          }),
        }),
      }),
    });
  });
function I(e) {
  let t = l(),
    { events: n } = d(),
    r = _();
  return (
    M.useEffect(() => {
      function e(e) {
        !e.nodeId ||
          e.parentNodeId !== t ||
          (e.open
            ? r.hasSubmenuOpen || r.setHasSubmenuOpen(!0)
            : e.reason !== `sibling-open` &&
              e.reason !== `list-navigation` &&
              r.setHasSubmenuOpen(!1));
      }
      return (
        n.on(`menuopenchange`, e),
        () => {
          n.off(`menuopenchange`, e);
        }
      );
    }, [n, t, r]),
    (0, N.jsx)(u, { id: t, children: e.children })
  );
}
function L({ className: e, ...t }) {
  return (0, N.jsx)(F, {
    "data-slot": `menubar`,
    className: s(`flex h-8 items-center gap-0.5 rounded-lg border p-[3px]`, e),
    ...t,
  });
}
function R({ ...e }) {
  return (0, N.jsx)(k, { "data-slot": `menubar-menu`, ...e });
}
function z({ ...e }) {
  return (0, N.jsx)(S, { "data-slot": `menubar-group`, ...e });
}
function B({ className: e, ...t }) {
  return (0, N.jsx)(w, {
    "data-slot": `menubar-trigger`,
    className: s(
      `flex items-center rounded-sm px-1.5 py-[2px] text-sm font-medium outline-hidden select-none hover:bg-muted aria-expanded:bg-muted`,
      e,
    ),
    ...t,
  });
}
function V({
  className: e,
  align: t = `start`,
  alignOffset: n = -4,
  sideOffset: r = 8,
  ...i
}) {
  return (0, N.jsx)(D, {
    "data-slot": `menubar-content`,
    align: t,
    alignOffset: n,
    sideOffset: r,
    className: s(
      `min-w-36 rounded-lg bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95`,
      e,
    ),
    ...i,
  });
}
function H({ className: e, inset: t, variant: n, ...r }) {
  return (0, N.jsx)(y, {
    "data-slot": `menubar-item`,
    "data-inset": t,
    "data-variant": n,
    className: s(
      `group/menubar-item gap-1.5 rounded-md px-1.5 py-1 text-sm focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:[&>svg]:text-accent-foreground data-inset:pl-7 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-disabled:opacity-50 [&>svg:not([class*='size-'])]:size-4 data-[variant=destructive]:[&>svg]:text-destructive`,
      e,
    ),
    ...r,
  });
}
function U({ className: e, children: t, checked: n, inset: r, ...i }) {
  return (0, N.jsxs)(p, {
    "data-slot": `menubar-checkbox-item`,
    "data-inset": r,
    className: s(
      `relative flex cursor-default items-center gap-1.5 rounded-md py-1 pr-1.5 pl-7 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus:[&>svg]:text-accent-foreground data-inset:pl-7 data-disabled:pointer-events-none data-disabled:opacity-50 [&>svg]:pointer-events-none [&>svg]:shrink-0`,
      e,
    ),
    checked: n,
    ...i,
    children: [
      (0, N.jsx)(`span`, {
        className: `pointer-events-none absolute left-1.5 flex size-4 items-center justify-center [&_svg:not([class*='size-'])]:size-4`,
        children: (0, N.jsx)(g, { children: (0, N.jsx)(o, {}) }),
      }),
      t,
    ],
  });
}
function W({ ...e }) {
  return (0, N.jsx)(O, { "data-slot": `menubar-radio-group`, ...e });
}
function G({ className: e, children: t, inset: n, ...r }) {
  return (0, N.jsxs)(h, {
    "data-slot": `menubar-radio-item`,
    "data-inset": n,
    className: s(
      `relative flex cursor-default items-center gap-1.5 rounded-md py-1 pr-1.5 pl-7 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus:[&>svg]:text-accent-foreground data-inset:pl-7 data-disabled:pointer-events-none data-disabled:opacity-50 [&>svg]:pointer-events-none [&>svg]:shrink-0 [&>svg:not([class*='size-'])]:size-4`,
      e,
    ),
    ...r,
    children: [
      (0, N.jsx)(`span`, {
        className: `pointer-events-none absolute left-1.5 flex size-4 items-center justify-center [&_svg:not([class*='size-'])]:size-4`,
        children: (0, N.jsx)(v, { children: (0, N.jsx)(o, {}) }),
      }),
      t,
    ],
  });
}
function K({ className: e, inset: t, ...n }) {
  return (0, N.jsx)(T, {
    "data-slot": `menubar-label`,
    "data-inset": t,
    className: s(`px-1.5 py-1 text-sm font-medium data-inset:pl-7`, e),
    ...n,
  });
}
function q({ className: e, ...t }) {
  return (0, N.jsx)(C, {
    "data-slot": `menubar-separator`,
    className: s(`-mx-1 my-1 h-px bg-border`, e),
    ...t,
  });
}
function J({ className: e, ...t }) {
  return (0, N.jsx)(A, {
    "data-slot": `menubar-shortcut`,
    className: s(
      `ml-auto text-xs tracking-widest text-muted-foreground group-focus/menubar-item:text-accent-foreground`,
      e,
    ),
    ...t,
  });
}
function Y({ ...e }) {
  return (0, N.jsx)(b, { "data-slot": `menubar-sub`, ...e });
}
function X({ className: e, inset: t, ...n }) {
  return (0, N.jsx)(E, {
    "data-slot": `menubar-sub-trigger`,
    "data-inset": t,
    className: s(
      `gap-1.5 rounded-md px-1.5 py-1 text-sm focus:bg-accent focus:text-accent-foreground data-inset:pl-7 data-open:bg-accent data-open:text-accent-foreground [&_svg:not([class*='size-'])]:size-4`,
      e,
    ),
    ...n,
  });
}
function Z({ className: e, ...t }) {
  return (0, N.jsx)(x, {
    "data-slot": `menubar-sub-content`,
    className: s(
      `min-w-32 rounded-lg bg-popover p-1 text-popover-foreground shadow-lg ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95`,
      e,
    ),
    ...t,
  });
}
function Q() {
  let [e, t] = (0, M.useState)(!0),
    [n, r] = (0, M.useState)(!1),
    [i, o] = (0, M.useState)(`pedro`);
  return (0, N.jsxs)(`div`, {
    className: `space-y-10`,
    children: [
      (0, N.jsx)(a, {
        title: `Menubar`,
        description: `Một menu liên tục trực quan phổ biến trong các ứng dụng máy tính để bàn.`,
      }),
      (0, N.jsx)(c, {
        label: `Full Menubar`,
        description: `Thanh menu với các menu con, hộp kiểm và các mục radio.`,
        children: (0, N.jsxs)(L, {
          className: `w-fit`,
          children: [
            (0, N.jsxs)(R, {
              children: [
                (0, N.jsx)(B, { children: `File` }),
                (0, N.jsxs)(V, {
                  children: [
                    (0, N.jsxs)(H, {
                      children: [`New Tab `, (0, N.jsx)(J, { children: `⌘T` })],
                    }),
                    (0, N.jsxs)(H, {
                      children: [
                        `New Window `,
                        (0, N.jsx)(J, { children: `⌘N` }),
                      ],
                    }),
                    (0, N.jsx)(H, {
                      disabled: !0,
                      children: `New Incognito Window`,
                    }),
                    (0, N.jsx)(q, {}),
                    (0, N.jsxs)(Y, {
                      children: [
                        (0, N.jsx)(X, { children: `Share` }),
                        (0, N.jsxs)(Z, {
                          children: [
                            (0, N.jsx)(H, { children: `Email link` }),
                            (0, N.jsx)(H, { children: `Messages` }),
                            (0, N.jsx)(H, { children: `Notes` }),
                          ],
                        }),
                      ],
                    }),
                    (0, N.jsx)(q, {}),
                    (0, N.jsxs)(H, {
                      children: [
                        `Print... `,
                        (0, N.jsx)(J, { children: `⌘P` }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, N.jsxs)(R, {
              children: [
                (0, N.jsx)(B, { children: `View` }),
                (0, N.jsxs)(V, {
                  children: [
                    (0, N.jsx)(U, {
                      checked: e,
                      onCheckedChange: t,
                      children: `Always Show Bookmarks Bar`,
                    }),
                    (0, N.jsx)(U, {
                      checked: n,
                      onCheckedChange: r,
                      children: `Always Show Full URLs`,
                    }),
                    (0, N.jsx)(q, {}),
                    (0, N.jsxs)(H, {
                      inset: !0,
                      children: [`Reload `, (0, N.jsx)(J, { children: `⌘R` })],
                    }),
                    (0, N.jsxs)(H, {
                      disabled: !0,
                      inset: !0,
                      children: [
                        `Force Reload `,
                        (0, N.jsx)(J, { children: `⇧⌘R` }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, N.jsxs)(R, {
              children: [
                (0, N.jsx)(B, { children: `Profiles` }),
                (0, N.jsxs)(V, {
                  children: [
                    (0, N.jsxs)(z, {
                      children: [
                        (0, N.jsx)(K, {
                          inset: !0,
                          children: `Select Profile`,
                        }),
                        (0, N.jsx)(q, {}),
                        (0, N.jsxs)(W, {
                          value: i,
                          onValueChange: o,
                          children: [
                            (0, N.jsx)(G, {
                              value: `pedro`,
                              children: `Pedro`,
                            }),
                            (0, N.jsx)(G, { value: `colm`, children: `Colm` }),
                            (0, N.jsx)(G, { value: `andy`, children: `Andy` }),
                          ],
                        }),
                      ],
                    }),
                    (0, N.jsx)(q, {}),
                    (0, N.jsx)(H, { inset: !0, children: `Edit...` }),
                    (0, N.jsx)(q, {}),
                    (0, N.jsx)(H, { inset: !0, children: `Add Profile...` }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
export { Q as default };
