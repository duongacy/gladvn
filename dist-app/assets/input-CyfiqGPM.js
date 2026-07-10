import {
  Bt as e,
  Gn as t,
  Kn as n,
  Nn as r,
  Pn as i,
  Un as a,
  _t as o,
  cr as s,
  dr as c,
  h as l,
  on as u,
  qn as d,
  wn as f,
} from "./showcase-vJrKG7HA.js";
import {
  $ as p,
  F as m,
  J as h,
  X as g,
  Y as _,
  tt as v,
} from "./index-Dk0REsC9.js";
var y = c(s(), 1),
  b = y.forwardRef(function (r, s) {
    let {
        render: c,
        className: l,
        id: d,
        name: b,
        value: x,
        disabled: S = !1,
        onValueChange: C,
        defaultValue: w,
        autoFocus: T = !1,
        style: E,
        ...D
      } = r,
      {
        state: O,
        name: k,
        disabled: A,
        setTouched: j,
        setDirty: M,
        validityData: N,
        setFocused: P,
        setFilled: F,
        validationMode: I,
        validation: L,
      } = p(),
      { clearErrors: R } = m(),
      z = A || S,
      B = k ?? b,
      V = { ...O, disabled: z },
      { labelId: H } = _(),
      U = h({ id: d });
    t(() => {
      let e = x != null;
      L.inputRef.current?.value || (e && x !== ``)
        ? F(!0)
        : e && x === `` && F(!1);
    }, [L.inputRef, F, x]);
    let W = y.useRef(null);
    t(() => {
      T && W.current === o(e(W.current)) && P(!0);
    }, [T, P]);
    let [G] = n({
        controlled: x,
        default: w,
        name: `FieldControl`,
        state: `value`,
      }),
      K = x !== void 0,
      q = K ? G : void 0,
      J = a(() => L.inputRef.current?.value);
    return (
      g(L.inputRef, U, q, J, !z, b),
      i(`input`, r, {
        ref: [s, W],
        state: V,
        props: [
          {
            id: U,
            disabled: z,
            name: B,
            ref: L.inputRef,
            "aria-labelledby": H,
            autoFocus: T,
            ...(K ? { value: q } : { defaultValue: w }),
            onChange(e) {
              let t = e.currentTarget.value;
              (C?.(t, u(f, e.nativeEvent)),
                M(t !== N.initialValue),
                F(t !== ``),
                e.nativeEvent.defaultPrevented || (R(B), L.change(t)));
            },
            onFocus() {
              P(!0);
            },
            onBlur(e) {
              (j(!0), P(!1), I === `onBlur` && L.commit(e.currentTarget.value));
            },
            onKeyDown(e) {
              e.currentTarget.tagName === `INPUT` &&
                e.key === `Enter` &&
                (j(!0), L.commit(e.currentTarget.value));
            },
          },
          D,
          (e) => L.getValidationProps(z, e),
        ],
        stateAttributesMapping: v,
      })
    );
  }),
  x = r(),
  S = y.forwardRef(function (e, t) {
    return (0, x.jsx)(b, { ref: t, ...e });
  }),
  C = l(
    `min-w-0 rounded-lg border border-input bg-transparent text-sm transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:focus-visible:ring-3 aria-invalid:focus-visible:ring-destructive/50 dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:focus-visible:ring-destructive/50`,
    {
      variants: {
        size: {
          sm: `h-7 px-2 py-0.5 text-xs`,
          md: `h-8 px-2.5 py-1 text-sm`,
          lg: `h-9 px-3 py-1.5 text-sm`,
        },
      },
    },
  ),
  w = y.forwardRef(function ({ className: e, size: t = `md`, ...n }, r) {
    return (0, x.jsx)(S, {
      ref: r,
      "data-slot": `input`,
      className: d(C({ size: t, className: e })),
      ...n,
    });
  });
w.displayName = `Input`;
export { w as t };
