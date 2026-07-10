import {
  Jn as e,
  Nn as t,
  Yn as n,
  cr as r,
  dr as i,
  i as a,
  lr as o,
  qn as s,
  r as c,
  sr as l,
  ur as u,
} from "./showcase-vJrKG7HA.js";
import { t as d } from "./with-selector-BPxG-Snh.js";
function f(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != `function`) throw TypeError(t);
}
function p(
  e,
  t = `expected all items to be functions, instead received the following types: `,
) {
  if (!e.every((e) => typeof e == `function`)) {
    let n = e
      .map((e) =>
        typeof e == `function` ? `function ${e.name || `unnamed`}()` : typeof e,
      )
      .join(`, `);
    throw TypeError(`${t}[${n}]`);
  }
}
var m = (e) => (Array.isArray(e) ? e : [e]);
function h(e) {
  let t = Array.isArray(e[0]) ? e[0] : e;
  return (
    p(
      t,
      `createSelector expects all input-selectors to be functions, but received the following types: `,
    ),
    t
  );
}
function g(e, t) {
  let n = [],
    { length: r } = e;
  for (let i = 0; i < r; i++) n.push(e[i].apply(null, t));
  return n;
}
var _ = class {
    constructor(e) {
      this.value = e;
    }
    deref() {
      return this.value;
    }
  },
  v = typeof WeakRef > `u` ? _ : WeakRef,
  y = 0,
  b = 1;
function x() {
  return { s: y, v: void 0, o: null, p: null };
}
function S(e) {
  return e instanceof v ? e.deref() : e;
}
function C(e, t = {}) {
  let n = x(),
    { resultEqualityCheck: r } = t,
    i,
    a = 0;
  function o() {
    let t = n,
      { length: o } = arguments;
    for (let e = 0, n = o; e < n; e++) {
      let n = arguments[e];
      if (typeof n == `function` || (typeof n == `object` && n)) {
        let e = t.o;
        e === null && (t.o = e = new WeakMap());
        let r = e.get(n);
        r === void 0 ? ((t = x()), e.set(n, t)) : (t = r);
      } else {
        let e = t.p;
        e === null && (t.p = e = new Map());
        let r = e.get(n);
        r === void 0 ? ((t = x()), e.set(n, t)) : (t = r);
      }
    }
    let s = t,
      c;
    if (t.s === b) c = t.v;
    else if (((c = e.apply(null, arguments)), a++, r)) {
      let e = S(i);
      (e != null && r(e, c) && ((c = e), a !== 0 && a--),
        (i =
          (typeof c == `object` && c) || typeof c == `function`
            ? new v(c)
            : c));
    }
    return ((s.s = b), (s.v = c), c);
  }
  return (
    (o.clearCache = () => {
      ((n = x()), o.resetResultsCount());
    }),
    (o.resultsCount = () => a),
    (o.resetResultsCount = () => {
      a = 0;
    }),
    o
  );
}
function w(e, ...t) {
  let n = typeof e == `function` ? { memoize: e, memoizeOptions: t } : e,
    r = (...e) => {
      let t = 0,
        r = 0,
        i,
        a = {},
        o = e.pop();
      (typeof o == `object` && ((a = o), (o = e.pop())),
        f(
          o,
          `createSelector expects an output function after the inputs, but received: [${typeof o}]`,
        ));
      let {
          memoize: s,
          memoizeOptions: c = [],
          argsMemoize: l = C,
          argsMemoizeOptions: u = [],
        } = { ...n, ...a },
        d = m(c),
        p = m(u),
        _ = h(e),
        v = s(
          function () {
            return (t++, o.apply(null, arguments));
          },
          ...d,
        ),
        y = l(
          function () {
            r++;
            let e = g(_, arguments);
            return ((i = v.apply(null, e)), i);
          },
          ...p,
        );
      return Object.assign(y, {
        resultFunc: o,
        memoizedResultFunc: v,
        dependencies: _,
        dependencyRecomputations: () => r,
        resetDependencyRecomputations: () => {
          r = 0;
        },
        lastResult: () => i,
        recomputations: () => t,
        resetRecomputations: () => {
          t = 0;
        },
        memoize: s,
        argsMemoize: l,
      });
    };
  return (Object.assign(r, { withTypes: () => r }), r);
}
var T = w(C),
  E =
    `dangerouslySetInnerHTML.onCopy.onCopyCapture.onCut.onCutCapture.onPaste.onPasteCapture.onCompositionEnd.onCompositionEndCapture.onCompositionStart.onCompositionStartCapture.onCompositionUpdate.onCompositionUpdateCapture.onFocus.onFocusCapture.onBlur.onBlurCapture.onChange.onChangeCapture.onBeforeInput.onBeforeInputCapture.onInput.onInputCapture.onReset.onResetCapture.onSubmit.onSubmitCapture.onInvalid.onInvalidCapture.onLoad.onLoadCapture.onError.onErrorCapture.onKeyDown.onKeyDownCapture.onKeyPress.onKeyPressCapture.onKeyUp.onKeyUpCapture.onAbort.onAbortCapture.onCanPlay.onCanPlayCapture.onCanPlayThrough.onCanPlayThroughCapture.onDurationChange.onDurationChangeCapture.onEmptied.onEmptiedCapture.onEncrypted.onEncryptedCapture.onEnded.onEndedCapture.onLoadedData.onLoadedDataCapture.onLoadedMetadata.onLoadedMetadataCapture.onLoadStart.onLoadStartCapture.onPause.onPauseCapture.onPlay.onPlayCapture.onPlaying.onPlayingCapture.onProgress.onProgressCapture.onRateChange.onRateChangeCapture.onSeeked.onSeekedCapture.onSeeking.onSeekingCapture.onStalled.onStalledCapture.onSuspend.onSuspendCapture.onTimeUpdate.onTimeUpdateCapture.onVolumeChange.onVolumeChangeCapture.onWaiting.onWaitingCapture.onAuxClick.onAuxClickCapture.onClick.onClickCapture.onContextMenu.onContextMenuCapture.onDoubleClick.onDoubleClickCapture.onDrag.onDragCapture.onDragEnd.onDragEndCapture.onDragEnter.onDragEnterCapture.onDragExit.onDragExitCapture.onDragLeave.onDragLeaveCapture.onDragOver.onDragOverCapture.onDragStart.onDragStartCapture.onDrop.onDropCapture.onMouseDown.onMouseDownCapture.onMouseEnter.onMouseLeave.onMouseMove.onMouseMoveCapture.onMouseOut.onMouseOutCapture.onMouseOver.onMouseOverCapture.onMouseUp.onMouseUpCapture.onSelect.onSelectCapture.onTouchCancel.onTouchCancelCapture.onTouchEnd.onTouchEndCapture.onTouchMove.onTouchMoveCapture.onTouchStart.onTouchStartCapture.onPointerDown.onPointerDownCapture.onPointerMove.onPointerMoveCapture.onPointerUp.onPointerUpCapture.onPointerCancel.onPointerCancelCapture.onPointerEnter.onPointerEnterCapture.onPointerLeave.onPointerLeaveCapture.onPointerOver.onPointerOverCapture.onPointerOut.onPointerOutCapture.onGotPointerCapture.onGotPointerCaptureCapture.onLostPointerCapture.onLostPointerCaptureCapture.onScroll.onScrollCapture.onWheel.onWheelCapture.onAnimationStart.onAnimationStartCapture.onAnimationEnd.onAnimationEndCapture.onAnimationIteration.onAnimationIterationCapture.onTransitionEnd.onTransitionEndCapture`.split(
      `.`,
    );
function D(e) {
  return typeof e == `string` ? E.includes(e) : !1;
}
var O = i(r()),
  k = new Set(
    `aria-activedescendant.aria-atomic.aria-autocomplete.aria-busy.aria-checked.aria-colcount.aria-colindex.aria-colspan.aria-controls.aria-current.aria-describedby.aria-details.aria-disabled.aria-errormessage.aria-expanded.aria-flowto.aria-haspopup.aria-hidden.aria-invalid.aria-keyshortcuts.aria-label.aria-labelledby.aria-level.aria-live.aria-modal.aria-multiline.aria-multiselectable.aria-orientation.aria-owns.aria-placeholder.aria-posinset.aria-pressed.aria-readonly.aria-relevant.aria-required.aria-roledescription.aria-rowcount.aria-rowindex.aria-rowspan.aria-selected.aria-setsize.aria-sort.aria-valuemax.aria-valuemin.aria-valuenow.aria-valuetext.className.color.height.id.lang.max.media.method.min.name.style.target.width.role.tabIndex.accentHeight.accumulate.additive.alignmentBaseline.allowReorder.alphabetic.amplitude.arabicForm.ascent.attributeName.attributeType.autoReverse.azimuth.baseFrequency.baselineShift.baseProfile.bbox.begin.bias.by.calcMode.capHeight.clip.clipPath.clipPathUnits.clipRule.colorInterpolation.colorInterpolationFilters.colorProfile.colorRendering.contentScriptType.contentStyleType.cursor.cx.cy.d.decelerate.descent.diffuseConstant.direction.display.divisor.dominantBaseline.dur.dx.dy.edgeMode.elevation.enableBackground.end.exponent.externalResourcesRequired.fill.fillOpacity.fillRule.filter.filterRes.filterUnits.floodColor.floodOpacity.focusable.fontFamily.fontSize.fontSizeAdjust.fontStretch.fontStyle.fontVariant.fontWeight.format.from.fx.fy.g1.g2.glyphName.glyphOrientationHorizontal.glyphOrientationVertical.glyphRef.gradientTransform.gradientUnits.hanging.horizAdvX.horizOriginX.href.ideographic.imageRendering.in2.in.intercept.k1.k2.k3.k4.k.kernelMatrix.kernelUnitLength.kerning.keyPoints.keySplines.keyTimes.lengthAdjust.letterSpacing.lightingColor.limitingConeAngle.local.markerEnd.markerHeight.markerMid.markerStart.markerUnits.markerWidth.mask.maskContentUnits.maskUnits.mathematical.mode.numOctaves.offset.opacity.operator.order.orient.orientation.origin.overflow.overlinePosition.overlineThickness.paintOrder.panose1.pathLength.patternContentUnits.patternTransform.patternUnits.pointerEvents.pointsAtX.pointsAtY.pointsAtZ.preserveAlpha.preserveAspectRatio.primitiveUnits.r.radius.refX.refY.renderingIntent.repeatCount.repeatDur.requiredExtensions.requiredFeatures.restart.result.rotate.rx.ry.seed.shapeRendering.slope.spacing.specularConstant.specularExponent.speed.spreadMethod.startOffset.stdDeviation.stemh.stemv.stitchTiles.stopColor.stopOpacity.strikethroughPosition.strikethroughThickness.string.stroke.strokeDasharray.strokeDashoffset.strokeLinecap.strokeLinejoin.strokeMiterlimit.strokeOpacity.strokeWidth.surfaceScale.systemLanguage.tableValues.targetX.targetY.textAnchor.textDecoration.textLength.textRendering.to.transform.u1.u2.underlinePosition.underlineThickness.unicode.unicodeBidi.unicodeRange.unitsPerEm.vAlphabetic.values.vectorEffect.version.vertAdvY.vertOriginX.vertOriginY.vHanging.vIdeographic.viewTarget.visibility.vMathematical.widths.wordSpacing.writingMode.x1.x2.x.xChannelSelector.xHeight.xlinkActuate.xlinkArcrole.xlinkHref.xlinkRole.xlinkShow.xlinkTitle.xlinkType.xmlBase.xmlLang.xmlns.xmlnsXlink.xmlSpace.y1.y2.y.yChannelSelector.z.zoomAndPan.ref.key.angle`.split(
      `.`,
    ),
  );
function A(e) {
  return typeof e == `string` ? k.has(e) : !1;
}
function j(e) {
  return typeof e == `string` && e.startsWith(`data-`);
}
function M(e) {
  if (typeof e != `object` || !e) return {};
  var t = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      (A(n) || j(n)) &&
      (t[n] = e[n]);
  return t;
}
function N(e) {
  if (e == null) return null;
  if (
    (0, O.isValidElement)(e) &&
    typeof e.props == `object` &&
    e.props !== null
  ) {
    var t = e.props;
    return M(t);
  }
  return typeof e == `object` && !Array.isArray(e) ? M(e) : null;
}
function ee(e) {
  var t = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      (A(n) || j(n) || D(n)) &&
      (t[n] = e[n]);
  return t;
}
var te = [
  `children`,
  `width`,
  `height`,
  `viewBox`,
  `className`,
  `style`,
  `title`,
  `desc`,
];
function ne() {
  return (
    (ne = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ne.apply(null, arguments)
  );
}
function re(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = ie(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function ie(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var ae = (0, O.forwardRef)((t, n) => {
    var r = t.children,
      i = t.width,
      a = t.height,
      o = t.viewBox,
      s = t.className,
      c = t.style,
      l = t.title,
      u = t.desc,
      d = re(t, te),
      f = o || { width: i, height: a, x: 0, y: 0 },
      p = e(`recharts-surface`, s);
    return O.createElement(
      `svg`,
      ne({}, ee(d), {
        className: p,
        width: i,
        height: a,
        style: c,
        viewBox: `${f.x} ${f.y} ${f.width} ${f.height}`,
        ref: n,
      }),
      O.createElement(`title`, null, l),
      O.createElement(`desc`, null, u),
      r,
    );
  }),
  oe = [`children`, `className`];
function se() {
  return (
    (se = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    se.apply(null, arguments)
  );
}
function ce(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = le(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function le(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var ue = O.forwardRef((t, n) => {
    var r = t.children,
      i = t.className,
      a = ce(t, oe),
      o = e(`recharts-layer`, i);
    return O.createElement(`g`, se({ className: o }, ee(a), { ref: n }), r);
  }),
  de = (0, O.createContext)(null),
  fe = () => (0, O.useContext)(de);
function P(e) {
  return function () {
    return e;
  };
}
var pe = Math.cos,
  me = Math.sin,
  he = Math.sqrt,
  ge = Math.PI;
ge / 2;
var _e = 2 * ge,
  ve = Math.PI,
  ye = 2 * ve,
  be = 1e-6,
  xe = ye - be;
function Se(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t) this._ += arguments[t] + e[t];
}
function Ce(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw Error(`invalid digits: ${e}`);
  if (t > 15) return Se;
  let n = 10 ** t;
  return function (e) {
    this._ += e[0];
    for (let t = 1, r = e.length; t < r; ++t)
      this._ += Math.round(arguments[t] * n) / n + e[t];
  };
}
var we = class {
  constructor(e) {
    ((this._x0 = this._y0 = this._x1 = this._y1 = null),
      (this._ = ``),
      (this._append = e == null ? Se : Ce(e)));
  }
  moveTo(e, t) {
    this._append`M${(this._x0 = this._x1 = +e)},${(this._y0 = this._y1 = +t)}`;
  }
  closePath() {
    this._x1 !== null &&
      ((this._x1 = this._x0), (this._y1 = this._y0), this._append`Z`);
  }
  lineTo(e, t) {
    this._append`L${(this._x1 = +e)},${(this._y1 = +t)}`;
  }
  quadraticCurveTo(e, t, n, r) {
    this._append`Q${+e},${+t},${(this._x1 = +n)},${(this._y1 = +r)}`;
  }
  bezierCurveTo(e, t, n, r, i, a) {
    this
      ._append`C${+e},${+t},${+n},${+r},${(this._x1 = +i)},${(this._y1 = +a)}`;
  }
  arcTo(e, t, n, r, i) {
    if (((e = +e), (t = +t), (n = +n), (r = +r), (i = +i), i < 0))
      throw Error(`negative radius: ${i}`);
    let a = this._x1,
      o = this._y1,
      s = n - e,
      c = r - t,
      l = a - e,
      u = o - t,
      d = l * l + u * u;
    if (this._x1 === null) this._append`M${(this._x1 = e)},${(this._y1 = t)}`;
    else if (d > be)
      if (!(Math.abs(u * s - c * l) > be) || !i)
        this._append`L${(this._x1 = e)},${(this._y1 = t)}`;
      else {
        let f = n - a,
          p = r - o,
          m = s * s + c * c,
          h = f * f + p * p,
          g = Math.sqrt(m),
          _ = Math.sqrt(d),
          v = i * Math.tan((ve - Math.acos((m + d - h) / (2 * g * _))) / 2),
          y = v / _,
          b = v / g;
        (Math.abs(y - 1) > be && this._append`L${e + y * l},${t + y * u}`,
          this
            ._append`A${i},${i},0,0,${+(u * f > l * p)},${(this._x1 = e + b * s)},${(this._y1 = t + b * c)}`);
      }
  }
  arc(e, t, n, r, i, a) {
    if (((e = +e), (t = +t), (n = +n), (a = !!a), n < 0))
      throw Error(`negative radius: ${n}`);
    let o = n * Math.cos(r),
      s = n * Math.sin(r),
      c = e + o,
      l = t + s,
      u = 1 ^ a,
      d = a ? r - i : i - r;
    (this._x1 === null
      ? this._append`M${c},${l}`
      : (Math.abs(this._x1 - c) > be || Math.abs(this._y1 - l) > be) &&
        this._append`L${c},${l}`,
      n &&
        (d < 0 && (d = (d % ye) + ye),
        d > xe
          ? this
              ._append`A${n},${n},0,1,${u},${e - o},${t - s}A${n},${n},0,1,${u},${(this._x1 = c)},${(this._y1 = l)}`
          : d > be &&
            this
              ._append`A${n},${n},0,${+(d >= ve)},${u},${(this._x1 = e + n * Math.cos(i))},${(this._y1 = t + n * Math.sin(i))}`));
  }
  rect(e, t, n, r) {
    this
      ._append`M${(this._x0 = this._x1 = +e)},${(this._y0 = this._y1 = +t)}h${(n = +n)}v${+r}h${-n}Z`;
  }
  toString() {
    return this._;
  }
};
function Te() {
  return new we();
}
Te.prototype = we.prototype;
function Ee(e) {
  let t = 3;
  return (
    (e.digits = function (n) {
      if (!arguments.length) return t;
      if (n == null) t = null;
      else {
        let e = Math.floor(n);
        if (!(e >= 0)) throw RangeError(`invalid digits: ${n}`);
        t = e;
      }
      return e;
    }),
    () => new we(t)
  );
}
Array.prototype.slice;
function De(e) {
  return typeof e == `object` && `length` in e ? e : Array.from(e);
}
function Oe(e) {
  this._context = e;
}
Oe.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    ((this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        ((this._point = 1),
          this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t));
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(e, t);
        break;
    }
  },
};
function ke(e) {
  return new Oe(e);
}
function Ae(e) {
  return e[0];
}
function je(e) {
  return e[1];
}
function Me(e, t) {
  var n = P(!0),
    r = null,
    i = ke,
    a = null,
    o = Ee(s);
  ((e = typeof e == `function` ? e : e === void 0 ? Ae : P(e)),
    (t = typeof t == `function` ? t : t === void 0 ? je : P(t)));
  function s(s) {
    var c,
      l = (s = De(s)).length,
      u,
      d = !1,
      f;
    for (r ?? (a = i((f = o()))), c = 0; c <= l; ++c)
      (!(c < l && n((u = s[c]), c, s)) === d &&
        ((d = !d) ? a.lineStart() : a.lineEnd()),
        d && a.point(+e(u, c, s), +t(u, c, s)));
    if (f) return ((a = null), f + `` || null);
  }
  return (
    (s.x = function (t) {
      return arguments.length
        ? ((e = typeof t == `function` ? t : P(+t)), s)
        : e;
    }),
    (s.y = function (e) {
      return arguments.length
        ? ((t = typeof e == `function` ? e : P(+e)), s)
        : t;
    }),
    (s.defined = function (e) {
      return arguments.length
        ? ((n = typeof e == `function` ? e : P(!!e)), s)
        : n;
    }),
    (s.curve = function (e) {
      return arguments.length ? ((i = e), r != null && (a = i(r)), s) : i;
    }),
    (s.context = function (e) {
      return arguments.length
        ? (e == null ? (r = a = null) : (a = i((r = e))), s)
        : r;
    }),
    s
  );
}
function Ne(e, t, n) {
  var r = null,
    i = P(!0),
    a = null,
    o = ke,
    s = null,
    c = Ee(l);
  ((e = typeof e == `function` ? e : e === void 0 ? Ae : P(+e)),
    (t = typeof t == `function` ? t : P(t === void 0 ? 0 : +t)),
    (n = typeof n == `function` ? n : n === void 0 ? je : P(+n)));
  function l(l) {
    var u,
      d,
      f,
      p = (l = De(l)).length,
      m,
      h = !1,
      g,
      _ = Array(p),
      v = Array(p);
    for (a ?? (s = o((g = c()))), u = 0; u <= p; ++u) {
      if (!(u < p && i((m = l[u]), u, l)) === h)
        if ((h = !h)) ((d = u), s.areaStart(), s.lineStart());
        else {
          for (s.lineEnd(), s.lineStart(), f = u - 1; f >= d; --f)
            s.point(_[f], v[f]);
          (s.lineEnd(), s.areaEnd());
        }
      h &&
        ((_[u] = +e(m, u, l)),
        (v[u] = +t(m, u, l)),
        s.point(r ? +r(m, u, l) : _[u], n ? +n(m, u, l) : v[u]));
    }
    if (g) return ((s = null), g + `` || null);
  }
  function u() {
    return Me().defined(i).curve(o).context(a);
  }
  return (
    (l.x = function (t) {
      return arguments.length
        ? ((e = typeof t == `function` ? t : P(+t)), (r = null), l)
        : e;
    }),
    (l.x0 = function (t) {
      return arguments.length
        ? ((e = typeof t == `function` ? t : P(+t)), l)
        : e;
    }),
    (l.x1 = function (e) {
      return arguments.length
        ? ((r = e == null ? null : typeof e == `function` ? e : P(+e)), l)
        : r;
    }),
    (l.y = function (e) {
      return arguments.length
        ? ((t = typeof e == `function` ? e : P(+e)), (n = null), l)
        : t;
    }),
    (l.y0 = function (e) {
      return arguments.length
        ? ((t = typeof e == `function` ? e : P(+e)), l)
        : t;
    }),
    (l.y1 = function (e) {
      return arguments.length
        ? ((n = e == null ? null : typeof e == `function` ? e : P(+e)), l)
        : n;
    }),
    (l.lineX0 = l.lineY0 =
      function () {
        return u().x(e).y(t);
      }),
    (l.lineY1 = function () {
      return u().x(e).y(n);
    }),
    (l.lineX1 = function () {
      return u().x(r).y(t);
    }),
    (l.defined = function (e) {
      return arguments.length
        ? ((i = typeof e == `function` ? e : P(!!e)), l)
        : i;
    }),
    (l.curve = function (e) {
      return arguments.length ? ((o = e), a != null && (s = o(a)), l) : o;
    }),
    (l.context = function (e) {
      return arguments.length
        ? (e == null ? (a = s = null) : (s = o((a = e))), l)
        : a;
    }),
    l
  );
}
var Pe = class {
  constructor(e, t) {
    ((this._context = e), (this._x = t));
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    ((this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line));
  }
  point(e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        ((this._point = 1),
          this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t));
        break;
      case 1:
        this._point = 2;
      default:
        this._x
          ? this._context.bezierCurveTo(
              (this._x0 = (this._x0 + e) / 2),
              this._y0,
              this._x0,
              t,
              e,
              t,
            )
          : this._context.bezierCurveTo(
              this._x0,
              (this._y0 = (this._y0 + t) / 2),
              e,
              this._y0,
              e,
              t,
            );
        break;
    }
    ((this._x0 = e), (this._y0 = t));
  }
};
function Fe(e) {
  return new Pe(e, !0);
}
function Ie(e) {
  return new Pe(e, !1);
}
var Le = {
    draw(e, t) {
      let n = he(t / ge);
      (e.moveTo(n, 0), e.arc(0, 0, n, 0, _e));
    },
  },
  Re = {
    draw(e, t) {
      let n = he(t / 5) / 2;
      (e.moveTo(-3 * n, -n),
        e.lineTo(-n, -n),
        e.lineTo(-n, -3 * n),
        e.lineTo(n, -3 * n),
        e.lineTo(n, -n),
        e.lineTo(3 * n, -n),
        e.lineTo(3 * n, n),
        e.lineTo(n, n),
        e.lineTo(n, 3 * n),
        e.lineTo(-n, 3 * n),
        e.lineTo(-n, n),
        e.lineTo(-3 * n, n),
        e.closePath());
    },
  },
  ze = he(1 / 3),
  Be = ze * 2,
  Ve = {
    draw(e, t) {
      let n = he(t / Be),
        r = n * ze;
      (e.moveTo(0, -n),
        e.lineTo(r, 0),
        e.lineTo(0, n),
        e.lineTo(-r, 0),
        e.closePath());
    },
  },
  He = {
    draw(e, t) {
      let n = he(t),
        r = -n / 2;
      e.rect(r, r, n, n);
    },
  },
  Ue = 0.8908130915292852,
  We = me(ge / 10) / me((7 * ge) / 10),
  Ge = me(_e / 10) * We,
  Ke = -pe(_e / 10) * We,
  qe = {
    draw(e, t) {
      let n = he(t * Ue),
        r = Ge * n,
        i = Ke * n;
      (e.moveTo(0, -n), e.lineTo(r, i));
      for (let t = 1; t < 5; ++t) {
        let a = (_e * t) / 5,
          o = pe(a),
          s = me(a);
        (e.lineTo(s * n, -o * n), e.lineTo(o * r - s * i, s * r + o * i));
      }
      e.closePath();
    },
  },
  Je = he(3),
  Ye = {
    draw(e, t) {
      let n = -he(t / (Je * 3));
      (e.moveTo(0, n * 2),
        e.lineTo(-Je * n, -n),
        e.lineTo(Je * n, -n),
        e.closePath());
    },
  },
  Xe = -0.5,
  Ze = he(3) / 2,
  Qe = 1 / he(12),
  $e = (Qe / 2 + 1) * 3,
  et = {
    draw(e, t) {
      let n = he(t / $e),
        r = n / 2,
        i = n * Qe,
        a = r,
        o = n * Qe + n,
        s = -a,
        c = o;
      (e.moveTo(r, i),
        e.lineTo(a, o),
        e.lineTo(s, c),
        e.lineTo(Xe * r - Ze * i, Ze * r + Xe * i),
        e.lineTo(Xe * a - Ze * o, Ze * a + Xe * o),
        e.lineTo(Xe * s - Ze * c, Ze * s + Xe * c),
        e.lineTo(Xe * r + Ze * i, Xe * i - Ze * r),
        e.lineTo(Xe * a + Ze * o, Xe * o - Ze * a),
        e.lineTo(Xe * s + Ze * c, Xe * c - Ze * s),
        e.closePath());
    },
  };
function tt(e, t) {
  let n = null,
    r = Ee(i);
  ((e = typeof e == `function` ? e : P(e || Le)),
    (t = typeof t == `function` ? t : P(t === void 0 ? 64 : +t)));
  function i() {
    let i;
    if (
      ((n ||= i = r()),
      e.apply(this, arguments).draw(n, +t.apply(this, arguments)),
      i)
    )
      return ((n = null), i + `` || null);
  }
  return (
    (i.type = function (t) {
      return arguments.length
        ? ((e = typeof t == `function` ? t : P(t)), i)
        : e;
    }),
    (i.size = function (e) {
      return arguments.length
        ? ((t = typeof e == `function` ? e : P(+e)), i)
        : t;
    }),
    (i.context = function (e) {
      return arguments.length ? ((n = e ?? null), i) : n;
    }),
    i
  );
}
function nt() {}
function rt(e, t, n) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + n) / 6,
  );
}
function it(e) {
  this._context = e;
}
it.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0));
  },
  lineEnd: function () {
    switch (this._point) {
      case 3:
        rt(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    ((this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        ((this._point = 1),
          this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t));
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        ((this._point = 3),
          this._context.lineTo(
            (5 * this._x0 + this._x1) / 6,
            (5 * this._y0 + this._y1) / 6,
          ));
      default:
        rt(this, e, t);
        break;
    }
    ((this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t));
  },
};
function at(e) {
  return new it(e);
}
function ot(e) {
  this._context = e;
}
ot.prototype = {
  areaStart: nt,
  areaEnd: nt,
  lineStart: function () {
    ((this._x0 =
      this._x1 =
      this._x2 =
      this._x3 =
      this._x4 =
      this._y0 =
      this._y1 =
      this._y2 =
      this._y3 =
      this._y4 =
        NaN),
      (this._point = 0));
  },
  lineEnd: function () {
    switch (this._point) {
      case 1:
        (this._context.moveTo(this._x2, this._y2), this._context.closePath());
        break;
      case 2:
        (this._context.moveTo(
          (this._x2 + 2 * this._x3) / 3,
          (this._y2 + 2 * this._y3) / 3,
        ),
          this._context.lineTo(
            (this._x3 + 2 * this._x2) / 3,
            (this._y3 + 2 * this._y2) / 3,
          ),
          this._context.closePath());
        break;
      case 3:
        (this.point(this._x2, this._y2),
          this.point(this._x3, this._y3),
          this.point(this._x4, this._y4));
        break;
    }
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        ((this._point = 1), (this._x2 = e), (this._y2 = t));
        break;
      case 1:
        ((this._point = 2), (this._x3 = e), (this._y3 = t));
        break;
      case 2:
        ((this._point = 3),
          (this._x4 = e),
          (this._y4 = t),
          this._context.moveTo(
            (this._x0 + 4 * this._x1 + e) / 6,
            (this._y0 + 4 * this._y1 + t) / 6,
          ));
        break;
      default:
        rt(this, e, t);
        break;
    }
    ((this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t));
  },
};
function st(e) {
  return new ot(e);
}
function ct(e) {
  this._context = e;
}
ct.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0));
  },
  lineEnd: function () {
    ((this._line || (this._line !== 0 && this._point === 3)) &&
      this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var n = (this._x0 + 4 * this._x1 + e) / 6,
          r = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(n, r) : this._context.moveTo(n, r);
        break;
      case 3:
        this._point = 4;
      default:
        rt(this, e, t);
        break;
    }
    ((this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t));
  },
};
function lt(e) {
  return new ct(e);
}
function ut(e) {
  this._context = e;
}
ut.prototype = {
  areaStart: nt,
  areaEnd: nt,
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    this._point && this._context.closePath();
  },
  point: function (e, t) {
    ((e = +e),
      (t = +t),
      this._point
        ? this._context.lineTo(e, t)
        : ((this._point = 1), this._context.moveTo(e, t)));
  },
};
function dt(e) {
  return new ut(e);
}
function ft(e) {
  return e < 0 ? -1 : 1;
}
function pt(e, t, n) {
  var r = e._x1 - e._x0,
    i = t - e._x1,
    a = (e._y1 - e._y0) / (r || (i < 0 && -0)),
    o = (n - e._y1) / (i || (r < 0 && -0)),
    s = (a * i + o * r) / (r + i);
  return (
    (ft(a) + ft(o)) * Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(s)) || 0
  );
}
function mt(e, t) {
  var n = e._x1 - e._x0;
  return n ? ((3 * (e._y1 - e._y0)) / n - t) / 2 : t;
}
function ht(e, t, n) {
  var r = e._x0,
    i = e._y0,
    a = e._x1,
    o = e._y1,
    s = (a - r) / 3;
  e._context.bezierCurveTo(r + s, i + s * t, a - s, o - s * n, a, o);
}
function gt(e) {
  this._context = e;
}
gt.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
      (this._point = 0));
  },
  lineEnd: function () {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        ht(this, this._t0, mt(this, this._t0));
        break;
    }
    ((this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (e, t) {
    var n = NaN;
    if (((e = +e), (t = +t), !(e === this._x1 && t === this._y1))) {
      switch (this._point) {
        case 0:
          ((this._point = 1),
            this._line
              ? this._context.lineTo(e, t)
              : this._context.moveTo(e, t));
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          ((this._point = 3), ht(this, mt(this, (n = pt(this, e, t))), n));
          break;
        default:
          ht(this, this._t0, (n = pt(this, e, t)));
          break;
      }
      ((this._x0 = this._x1),
        (this._x1 = e),
        (this._y0 = this._y1),
        (this._y1 = t),
        (this._t0 = n));
    }
  },
};
function _t(e) {
  this._context = new vt(e);
}
(_t.prototype = Object.create(gt.prototype)).point = function (e, t) {
  gt.prototype.point.call(this, t, e);
};
function vt(e) {
  this._context = e;
}
vt.prototype = {
  moveTo: function (e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function () {
    this._context.closePath();
  },
  lineTo: function (e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function (e, t, n, r, i, a) {
    this._context.bezierCurveTo(t, e, r, n, a, i);
  },
};
function yt(e) {
  return new gt(e);
}
function bt(e) {
  return new _t(e);
}
function xt(e) {
  this._context = e;
}
xt.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x = []), (this._y = []));
  },
  lineEnd: function () {
    var e = this._x,
      t = this._y,
      n = e.length;
    if (n)
      if (
        (this._line
          ? this._context.lineTo(e[0], t[0])
          : this._context.moveTo(e[0], t[0]),
        n === 2)
      )
        this._context.lineTo(e[1], t[1]);
      else
        for (var r = St(e), i = St(t), a = 0, o = 1; o < n; ++a, ++o)
          this._context.bezierCurveTo(
            r[0][a],
            i[0][a],
            r[1][a],
            i[1][a],
            e[o],
            t[o],
          );
    ((this._line || (this._line !== 0 && n === 1)) && this._context.closePath(),
      (this._line = 1 - this._line),
      (this._x = this._y = null));
  },
  point: function (e, t) {
    (this._x.push(+e), this._y.push(+t));
  },
};
function St(e) {
  var t,
    n = e.length - 1,
    r,
    i = Array(n),
    a = Array(n),
    o = Array(n);
  for (i[0] = 0, a[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < n - 1; ++t)
    ((i[t] = 1), (a[t] = 4), (o[t] = 4 * e[t] + 2 * e[t + 1]));
  for (
    i[n - 1] = 2, a[n - 1] = 7, o[n - 1] = 8 * e[n - 1] + e[n], t = 1;
    t < n;
    ++t
  )
    ((r = i[t] / a[t - 1]), (a[t] -= r), (o[t] -= r * o[t - 1]));
  for (i[n - 1] = o[n - 1] / a[n - 1], t = n - 2; t >= 0; --t)
    i[t] = (o[t] - i[t + 1]) / a[t];
  for (a[n - 1] = (e[n] + i[n - 1]) / 2, t = 0; t < n - 1; ++t)
    a[t] = 2 * e[t + 1] - i[t + 1];
  return [i, a];
}
function Ct(e) {
  return new xt(e);
}
function wt(e, t) {
  ((this._context = e), (this._t = t));
}
wt.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x = this._y = NaN), (this._point = 0));
  },
  lineEnd: function () {
    (0 < this._t &&
      this._t < 1 &&
      this._point === 2 &&
      this._context.lineTo(this._x, this._y),
      (this._line || (this._line !== 0 && this._point === 1)) &&
        this._context.closePath(),
      this._line >= 0 &&
        ((this._t = 1 - this._t), (this._line = 1 - this._line)));
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        ((this._point = 1),
          this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t));
        break;
      case 1:
        this._point = 2;
      default:
        if (this._t <= 0)
          (this._context.lineTo(this._x, t), this._context.lineTo(e, t));
        else {
          var n = this._x * (1 - this._t) + e * this._t;
          (this._context.lineTo(n, this._y), this._context.lineTo(n, t));
        }
        break;
    }
    ((this._x = e), (this._y = t));
  },
};
function Tt(e) {
  return new wt(e, 0.5);
}
function Et(e) {
  return new wt(e, 0);
}
function Dt(e) {
  return new wt(e, 1);
}
function Ot(e, t) {
  if ((o = e.length) > 1)
    for (var n = 1, r, i, a = e[t[0]], o, s = a.length; n < o; ++n)
      for (i = a, a = e[t[n]], r = 0; r < s; ++r)
        a[r][1] += a[r][0] = isNaN(i[r][1]) ? i[r][0] : i[r][1];
}
function kt(e) {
  for (var t = e.length, n = Array(t); --t >= 0;) n[t] = t;
  return n;
}
function At(e, t) {
  return e[t];
}
function jt(e) {
  let t = [];
  return ((t.key = e), t);
}
function Mt() {
  var e = P([]),
    t = kt,
    n = Ot,
    r = At;
  function i(i) {
    var a = Array.from(e.apply(this, arguments), jt),
      o,
      s = a.length,
      c = -1,
      l;
    for (let e of i)
      for (o = 0, ++c; o < s; ++o)
        (a[o][c] = [0, +r(e, a[o].key, c, i)]).data = e;
    for (o = 0, l = De(t(a)); o < s; ++o) a[l[o]].index = o;
    return (n(a, l), a);
  }
  return (
    (i.keys = function (t) {
      return arguments.length
        ? ((e = typeof t == `function` ? t : P(Array.from(t))), i)
        : e;
    }),
    (i.value = function (e) {
      return arguments.length
        ? ((r = typeof e == `function` ? e : P(+e)), i)
        : r;
    }),
    (i.order = function (e) {
      return arguments.length
        ? ((t = e == null ? kt : typeof e == `function` ? e : P(Array.from(e))),
          i)
        : t;
    }),
    (i.offset = function (e) {
      return arguments.length ? ((n = e ?? Ot), i) : n;
    }),
    i
  );
}
function Nt(e, t) {
  if ((r = e.length) > 0) {
    for (var n, r, i = 0, a = e[0].length, o; i < a; ++i) {
      for (o = n = 0; n < r; ++n) o += e[n][i][1] || 0;
      if (o) for (n = 0; n < r; ++n) e[n][i][1] /= o;
    }
    Ot(e, t);
  }
}
function Pt(e, t) {
  if ((i = e.length) > 0) {
    for (var n = 0, r = e[t[0]], i, a = r.length; n < a; ++n) {
      for (var o = 0, s = 0; o < i; ++o) s += e[o][n][1] || 0;
      r[n][1] += r[n][0] = -s / 2;
    }
    Ot(e, t);
  }
}
function Ft(e, t) {
  if (!(!((o = e.length) > 0) || !((a = (i = e[t[0]]).length) > 0))) {
    for (var n = 0, r = 1, i, a, o; r < a; ++r) {
      for (var s = 0, c = 0, l = 0; s < o; ++s) {
        for (
          var u = e[t[s]],
            d = u[r][1] || 0,
            f = (d - (u[r - 1][1] || 0)) / 2,
            p = 0;
          p < s;
          ++p
        ) {
          var m = e[t[p]],
            h = m[r][1] || 0,
            g = m[r - 1][1] || 0;
          f += h - g;
        }
        ((c += d), (l += f * d));
      }
      ((i[r - 1][1] += i[r - 1][0] = n), c && (n -= l / c));
    }
    ((i[r - 1][1] += i[r - 1][0] = n), Ot(e, t));
  }
}
function It(e) {
  return e === `__proto__`;
}
function Lt(e) {
  switch (typeof e) {
    case `number`:
    case `symbol`:
      return !1;
    case `string`:
      return e.includes(`.`) || e.includes(`[`) || e.includes(`]`);
  }
}
function Rt(e) {
  return typeof e == `string` || typeof e == `symbol`
    ? e
    : Object.is(e?.valueOf?.(), -0)
      ? `-0`
      : String(e);
}
function zt(e) {
  if (e == null) return ``;
  if (typeof e == `string`) return e;
  if (Array.isArray(e)) return e.map(zt).join(`,`);
  let t = String(e);
  return t === `0` && Object.is(Number(e), -0) ? `-0` : t;
}
function Bt(e) {
  if (Array.isArray(e)) return e.map(Rt);
  if (typeof e == `symbol`) return [e];
  e = zt(e);
  let t = [],
    n = e.length;
  if (n === 0) return t;
  let r = 0,
    i = ``,
    a = ``,
    o = !1;
  for (e.charCodeAt(0) === 46 && t.push(``); r < n;) {
    let s = e[r];
    if (a)
      s === `\\` && r + 1 < n
        ? (r++, (i += e[r]))
        : s === a
          ? (a = ``)
          : (i += s);
    else if (o)
      s === `"` || s === `'`
        ? (a = s)
        : s === `]`
          ? ((o = !1), t.push(i), (i = ``))
          : (i += s);
    else if (s === `[`) ((o = !0), (i &&= (t.push(i), ``)));
    else if (s === `.`) {
      i &&= (t.push(i), ``);
      let n = e[r + 1];
      (n === void 0 || n === `.`) && t.push(``);
    } else i += s;
    r++;
  }
  return (i && t.push(i), t);
}
function Vt(e, t, n) {
  if (e == null) return n;
  switch (typeof t) {
    case `string`: {
      if (It(t)) return n;
      let r = e[t];
      return r === void 0
        ? Lt(t) && !Object.hasOwn(e, t)
          ? Vt(e, Bt(t), n)
          : n
        : r;
    }
    case `number`:
    case `symbol`: {
      typeof t == `number` && (t = Rt(t));
      let r = e[t];
      return r === void 0 ? n : r;
    }
    default: {
      if (Array.isArray(t)) return Ht(e, t, n);
      if (((t = Object.is(t?.valueOf(), -0) ? `-0` : String(t)), It(t)))
        return n;
      let r = e[t];
      return r === void 0 ? n : r;
    }
  }
}
function Ht(e, t, n) {
  if (t.length === 0) return n;
  let r = e;
  for (let e = 0; e < t.length; e++) {
    if (r == null || It(t[e])) return n;
    r = r[t[e]];
  }
  return r === void 0 ? n : r;
}
var Ut = 4;
function Wt(e) {
  var t =
      10 **
      (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ut),
    n = Math.round(e * t) / t;
  return Object.is(n, -0) ? 0 : n;
}
function Gt(e) {
  var t = [...arguments].slice(1);
  return e.reduce((e, n, r) => {
    var i = t[r - 1];
    return typeof i == `string`
      ? e + i + n
      : i === void 0
        ? e + n
        : e + Wt(i) + n;
  }, ``);
}
var Kt = (e) => (e === 0 ? 0 : e > 0 ? 1 : -1),
  qt = (e) => typeof e == `number` && e != +e,
  Jt = (e) =>
    typeof e == `string` && e.length > 1 && e.indexOf(`%`) === e.length - 1,
  F = (e) => (typeof e == `number` || e instanceof Number) && !qt(e),
  Yt = (e) => F(e) || typeof e == `string`,
  Xt = 0,
  Zt = (e) => {
    var t = ++Xt;
    return `${e || ``}${t}`;
  },
  Qt = function (e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0,
      r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
    if (!F(e) && typeof e != `string`) return n;
    var i;
    if (Jt(e)) {
      if (t == null) return n;
      var a = e.indexOf(`%`);
      i = (t * parseFloat(e.slice(0, a))) / 100;
    } else i = +e;
    return (qt(i) && (i = n), r && t != null && i > t && (i = t), i);
  },
  $t = (e) => {
    if (!Array.isArray(e)) return !1;
    for (var t = e.length, n = {}, r = 0; r < t; r++)
      if (!n[String(e[r])]) n[String(e[r])] = !0;
      else return !0;
    return !1;
  };
function en(e, t, n) {
  return F(e) && F(t) ? Wt(e + n * (t - e)) : t;
}
function tn(e, t, n) {
  if (!(!e || !e.length))
    return e.find((e) => e && (typeof t == `function` ? t(e) : Vt(e, t)) === n);
}
var I = (e) => e == null,
  nn = (e) => (I(e) ? e : `${e.charAt(0).toUpperCase()}${e.slice(1)}`);
function rn(e) {
  return e != null;
}
function an() {}
var on = [`type`, `size`, `sizeType`];
function sn() {
  return (
    (sn = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    sn.apply(null, arguments)
  );
}
function cn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function ln(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? cn(Object(n), !0).forEach(function (t) {
          un(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : cn(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function un(e, t, n) {
  return (
    (t = dn(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function dn(e) {
  var t = fn(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function fn(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function pn(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = mn(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function mn(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var hn = {
    symbolCircle: Le,
    symbolCross: Re,
    symbolDiamond: Ve,
    symbolSquare: He,
    symbolStar: qe,
    symbolTriangle: Ye,
    symbolWye: et,
  },
  gn = Math.PI / 180,
  _n = (e) => hn[`symbol${nn(e)}`] || Le,
  vn = (e, t, n) => {
    if (t === `area`) return e;
    switch (n) {
      case `cross`:
        return (5 * e * e) / 9;
      case `diamond`:
        return (0.5 * e * e) / Math.sqrt(3);
      case `square`:
        return e * e;
      case `star`:
        var r = 18 * gn;
        return (
          1.25 * e * e * (Math.tan(r) - Math.tan(r * 2) * Math.tan(r) ** 2)
        );
      case `triangle`:
        return (Math.sqrt(3) * e * e) / 4;
      case `wye`:
        return ((21 - 10 * Math.sqrt(3)) * e * e) / 8;
      default:
        return (Math.PI * e * e) / 4;
    }
  },
  yn = (e, t) => {
    hn[`symbol${nn(e)}`] = t;
  },
  bn = (t) => {
    var n = t.type,
      r = n === void 0 ? `circle` : n,
      i = t.size,
      a = i === void 0 ? 64 : i,
      o = t.sizeType,
      s = o === void 0 ? `area` : o,
      c = ln(ln({}, pn(t, on)), {}, { type: r, size: a, sizeType: s }),
      l = `circle`;
    typeof r == `string` && (l = r);
    var u = () => {
        var e = _n(l),
          t = tt()
            .type(e)
            .size(vn(a, s, l))();
        if (t !== null) return t;
      },
      d = c.className,
      f = c.cx,
      p = c.cy,
      m = ee(c);
    return F(f) && F(p) && F(a)
      ? O.createElement(
          `path`,
          sn({}, m, {
            className: e(`recharts-symbols`, d),
            transform: `translate(${f}, ${p})`,
            d: u(),
          }),
        )
      : null;
  };
bn.registerSymbol = yn;
var xn = (e) => `radius` in e && `startAngle` in e && `endAngle` in e,
  Sn = (e, t) => {
    if (!e || typeof e == `function` || typeof e == `boolean`) return null;
    var n = e;
    if (
      ((0, O.isValidElement)(e) && (n = e.props),
      typeof n != `object` && typeof n != `function`)
    )
      return null;
    var r = {};
    return (
      Object.keys(n).forEach((e) => {
        D(e) && typeof n[e] == `function` && (r[e] = t || ((t) => n[e](n, t)));
      }),
      r
    );
  },
  Cn = (e, t, n) => (r) => (e(t, n, r), null),
  wn = (e, t, n) => {
    if (e === null || (typeof e != `object` && typeof e != `function`))
      return null;
    var r = null;
    return (
      Object.keys(e).forEach((i) => {
        var a = e[i];
        D(i) && typeof a == `function` && ((r ||= {}), (r[i] = Cn(a, t, n)));
      }),
      r
    );
  };
function Tn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function En(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Tn(Object(n), !0).forEach(function (t) {
          Dn(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Tn(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Dn(e, t, n) {
  return (
    (t = On(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function On(e) {
  var t = kn(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function kn(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function An(e, t) {
  var n = En({}, e),
    r = t;
  return Object.keys(t).reduce(
    (e, t) => (e[t] === void 0 && r[t] !== void 0 && (e[t] = r[t]), e),
    n,
  );
}
function jn() {
  return (
    (jn = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    jn.apply(null, arguments)
  );
}
function Mn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Nn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Mn(Object(n), !0).forEach(function (t) {
          Pn(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Mn(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Pn(e, t, n) {
  return (
    (t = Fn(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Fn(e) {
  var t = In(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function In(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var Ln = 32,
  Rn = {
    align: `center`,
    iconSize: 14,
    inactiveColor: `#ccc`,
    layout: `horizontal`,
    verticalAlign: `middle`,
    labelStyle: {},
  };
function zn(e) {
  if (typeof e == `object` && e && `strokeDasharray` in e)
    return String(e.strokeDasharray);
}
function Bn(e) {
  var t = e.data,
    n = e.iconType,
    r = e.inactiveColor,
    i = Ln / 2,
    a = Ln / 6,
    o = Ln / 3,
    s = t.inactive ? r : t.color,
    c = n ?? t.type;
  if (c === `none`) return null;
  if (c === `plainline`)
    return O.createElement(`line`, {
      strokeWidth: 4,
      fill: `none`,
      stroke: s,
      strokeDasharray: zn(t.payload),
      x1: 0,
      y1: i,
      x2: Ln,
      y2: i,
      className: `recharts-legend-icon`,
    });
  if (c === `line`)
    return O.createElement(`path`, {
      strokeWidth: 4,
      fill: `none`,
      stroke: s,
      d: `M0,${i}h${o}
            A${a},${a},0,1,1,${2 * o},${i}
            H${Ln}M${2 * o},${i}
            A${a},${a},0,1,1,${o},${i}`,
      className: `recharts-legend-icon`,
    });
  if (c === `rect`)
    return O.createElement(`path`, {
      stroke: `none`,
      fill: s,
      d: `M0,${Ln / 8}h${Ln}v${(Ln * 3) / 4}h${-Ln}z`,
      className: `recharts-legend-icon`,
    });
  if (O.isValidElement(t.legendIcon)) {
    var l = Nn({}, t);
    return (delete l.legendIcon, O.cloneElement(t.legendIcon, l));
  }
  return O.createElement(bn, {
    fill: s,
    cx: i,
    cy: i,
    size: Ln,
    sizeType: `diameter`,
    type: c,
  });
}
function Vn(t) {
  var n = t.payload,
    r = t.iconSize,
    i = t.layout,
    a = t.formatter,
    o = t.inactiveColor,
    s = t.iconType,
    c = t.labelStyle,
    l = { x: 0, y: 0, width: Ln, height: Ln },
    u = {
      display: i === `horizontal` ? `inline-block` : `block`,
      marginRight: 10,
    },
    d = { display: `inline-block`, verticalAlign: `middle`, marginRight: 4 };
  return n.map((n, i) => {
    var f = n.formatter || a,
      p = e({
        "recharts-legend-item": !0,
        [`legend-item-${i}`]: !0,
        inactive: n.inactive,
      });
    if (n.type === `none`) return null;
    var m = typeof c == `object` ? Nn({}, c) : {};
    m.color = n.inactive ? o : m.color || n.color;
    var h = f ? f(n.value, n, i) : n.value;
    return O.createElement(
      `li`,
      jn({ className: p, style: u, key: `legend-item-${i}` }, wn(t, n, i)),
      O.createElement(
        ae,
        {
          width: r,
          height: r,
          viewBox: l,
          style: d,
          "aria-label":
            n.value == null ? `legend icon` : `${n.value} legend icon`,
        },
        O.createElement(Bn, { data: n, iconType: s, inactiveColor: o }),
      ),
      O.createElement(
        `span`,
        { className: `recharts-legend-item-text`, style: m },
        h,
      ),
    );
  });
}
var Hn = (e) => {
  var t = An(e, Rn),
    n = t.payload,
    r = t.layout,
    i = t.align;
  if (!n || !n.length) return null;
  var a = { padding: 0, margin: 0, textAlign: r === `horizontal` ? i : `left` };
  return O.createElement(
    `ul`,
    { className: `recharts-default-legend`, style: a },
    O.createElement(Vn, jn({}, t, { payload: n })),
  );
};
function Un(e, t) {
  let n = new Map();
  for (let r = 0; r < e.length; r++) {
    let i = e[r],
      a = t(i, r, e);
    n.has(a) || n.set(a, i);
  }
  return Array.from(n.values());
}
function Wn(e, t) {
  return function (...n) {
    return e.apply(this, n.slice(0, t));
  };
}
function Gn(e) {
  return e;
}
function Kn(e) {
  return function (t) {
    return Vt(t, e);
  };
}
function qn(e) {
  return e == null || (typeof e != `object` && typeof e != `function`);
}
function Jn(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Yn(e) {
  return Object.getOwnPropertySymbols(e).filter((t) =>
    Object.prototype.propertyIsEnumerable.call(e, t),
  );
}
function Xn(e) {
  return e == null
    ? e === void 0
      ? `[object Undefined]`
      : `[object Null]`
    : Object.prototype.toString.call(e);
}
var Zn = `[object RegExp]`,
  Qn = `[object String]`,
  $n = `[object Number]`,
  er = `[object Boolean]`,
  tr = `[object Arguments]`,
  nr = `[object Symbol]`,
  rr = `[object Date]`,
  ir = `[object Map]`,
  ar = `[object Set]`,
  or = `[object Array]`,
  sr = `[object ArrayBuffer]`,
  cr = `[object Object]`,
  lr = `[object DataView]`,
  ur = `[object Uint8Array]`,
  dr = `[object Uint8ClampedArray]`,
  fr = `[object Uint16Array]`,
  pr = `[object Uint32Array]`,
  mr = `[object Int8Array]`,
  hr = `[object Int16Array]`,
  gr = `[object Int32Array]`,
  _r = `[object Float32Array]`,
  vr = `[object Float64Array]`,
  yr =
    (typeof globalThis == `object` && globalThis) ||
    (typeof window == `object` && window) ||
    (typeof self == `object` && self) ||
    (typeof global == `object` && global) ||
    (function () {
      return this;
    })();
function br(e) {
  return yr.Buffer !== void 0 && yr.Buffer.isBuffer(e);
}
function xr(e, t) {
  return Sr(e, void 0, e, new Map(), t);
}
function Sr(e, t, n, r = new Map(), i = void 0) {
  let a = i?.(e, t, n, r);
  if (a !== void 0) return a;
  if (qn(e)) return e;
  if (r.has(e)) return r.get(e);
  if (Array.isArray(e)) {
    let t = Array(e.length);
    r.set(e, t);
    for (let a = 0; a < e.length; a++) t[a] = Sr(e[a], a, n, r, i);
    return (
      Object.hasOwn(e, `index`) && (t.index = e.index),
      Object.hasOwn(e, `input`) && (t.input = e.input),
      t
    );
  }
  if (e instanceof Date) return new Date(e.getTime());
  if (e instanceof RegExp) {
    let t = new RegExp(e.source, e.flags);
    return ((t.lastIndex = e.lastIndex), t);
  }
  if (e instanceof Map) {
    let t = new Map();
    r.set(e, t);
    for (let [a, o] of e) t.set(a, Sr(o, a, n, r, i));
    return t;
  }
  if (e instanceof Set) {
    let t = new Set();
    r.set(e, t);
    for (let a of e) t.add(Sr(a, void 0, n, r, i));
    return t;
  }
  if (br(e)) return e.subarray();
  if (Jn(e)) {
    let t = new (Object.getPrototypeOf(e).constructor)(e.length);
    r.set(e, t);
    for (let a = 0; a < e.length; a++) t[a] = Sr(e[a], a, n, r, i);
    return t;
  }
  if (
    e instanceof ArrayBuffer ||
    (typeof SharedArrayBuffer < `u` && e instanceof SharedArrayBuffer)
  )
    return e.slice(0);
  if (e instanceof DataView) {
    let t = new DataView(e.buffer.slice(0), e.byteOffset, e.byteLength);
    return (r.set(e, t), Cr(t, e, n, r, i), t);
  }
  if (typeof File < `u` && e instanceof File) {
    let t = new File([e], e.name, { type: e.type });
    return (r.set(e, t), Cr(t, e, n, r, i), t);
  }
  if (typeof Blob < `u` && e instanceof Blob) {
    let t = new Blob([e], { type: e.type });
    return (r.set(e, t), Cr(t, e, n, r, i), t);
  }
  if (e instanceof Error) {
    let t = structuredClone(e);
    return (
      r.set(e, t),
      (t.message = e.message),
      (t.name = e.name),
      (t.stack = e.stack),
      (t.cause = e.cause),
      (t.constructor = e.constructor),
      Cr(t, e, n, r, i),
      t
    );
  }
  if (e instanceof Boolean) {
    let t = new Boolean(e.valueOf());
    return (r.set(e, t), Cr(t, e, n, r, i), t);
  }
  if (e instanceof Number) {
    let t = new Number(e.valueOf());
    return (r.set(e, t), Cr(t, e, n, r, i), t);
  }
  if (e instanceof String) {
    let t = new String(e.valueOf());
    return (r.set(e, t), Cr(t, e, n, r, i), t);
  }
  if (typeof e == `object` && wr(e)) {
    let t = Object.create(Object.getPrototypeOf(e));
    return (r.set(e, t), Cr(t, e, n, r, i), t);
  }
  return e;
}
function Cr(e, t, n = e, r, i) {
  let a = [...Object.keys(t), ...Yn(t)];
  for (let o = 0; o < a.length; o++) {
    let s = a[o],
      c = Object.getOwnPropertyDescriptor(e, s);
    (c == null || c.writable) && (e[s] = Sr(t[s], s, n, r, i));
  }
}
function wr(e) {
  switch (Xn(e)) {
    case tr:
    case or:
    case sr:
    case lr:
    case er:
    case rr:
    case _r:
    case vr:
    case mr:
    case hr:
    case gr:
    case ir:
    case $n:
    case cr:
    case Zn:
    case ar:
    case Qn:
    case nr:
    case ur:
    case dr:
    case fr:
    case pr:
      return !0;
    default:
      return !1;
  }
}
function Tr(e) {
  return Sr(e, void 0, e, new Map(), void 0);
}
function Er(e, t) {
  return e === t || (Number.isNaN(e) && Number.isNaN(t));
}
function Dr(e) {
  return e !== null && (typeof e == `object` || typeof e == `function`);
}
function Or(e, t, n) {
  return typeof n == `function`
    ? kr(
        e,
        t,
        function e(t, r, i, a, o, s) {
          let c = n(t, r, i, a, o, s);
          return c === void 0 ? kr(t, r, e, s, !1) : !!c;
        },
        new Map(),
        !0,
      )
    : Or(e, t, () => void 0);
}
function kr(e, t, n, r, i = !1) {
  if (t === e) return !0;
  switch (typeof t) {
    case `object`:
      return Ar(e, t, n, r);
    case `function`:
      return Object.keys(t).length > 0 ? kr(e, { ...t }, n, r, i) : Er(e, t);
    default:
      return Dr(e) && i ? (typeof t == `string` ? t === `` : !0) : Er(e, t);
  }
}
function Ar(e, t, n, r) {
  if (t == null) return !0;
  if (Array.isArray(t)) return Mr(e, t, n, r);
  if (t instanceof Map) return jr(e, t, n, r);
  if (t instanceof Set) return Nr(e, t, n, r);
  let i = Object.keys(t);
  if (e == null || qn(e)) return i.length === 0;
  if (i.length === 0) return !0;
  if (r?.has(t)) return r.get(t) === e;
  r?.set(t, e);
  try {
    for (let a = 0; a < i.length; a++) {
      let o = i[a];
      if (
        (!qn(e) && !(o in e)) ||
        (t[o] === void 0 && e[o] !== void 0) ||
        (t[o] === null && e[o] !== null) ||
        !n(e[o], t[o], o, e, t, r)
      )
        return !1;
    }
    return !0;
  } finally {
    r?.delete(t);
  }
}
function jr(e, t, n, r) {
  if (t.size === 0) return !0;
  if (!(e instanceof Map)) return !1;
  for (let [i, a] of t.entries())
    if (n(e.get(i), a, i, e, t, r) === !1) return !1;
  return !0;
}
function Mr(e, t, n, r) {
  if (t.length === 0) return !0;
  if (!Array.isArray(e)) return !1;
  let i = new Set();
  for (let a = 0; a < t.length; a++) {
    let o = t[a],
      s = !1;
    for (let c = 0; c < e.length; c++) {
      if (i.has(c)) continue;
      let l = e[c],
        u = !1;
      if ((n(l, o, a, e, t, r) && (u = !0), u)) {
        (i.add(c), (s = !0));
        break;
      }
    }
    if (!s) return !1;
  }
  return !0;
}
function Nr(e, t, n, r) {
  return t.size === 0 ? !0 : e instanceof Set ? Mr([...e], [...t], n, r) : !1;
}
function Pr(e, t) {
  return Or(e, t, () => void 0);
}
function Fr(e) {
  return ((e = Tr(e)), (t) => Pr(t, e));
}
function Ir(e, t) {
  return xr(e, (n, r, i, a) => {
    let o = t?.(n, r, i, a);
    if (o !== void 0) return o;
    if (typeof e == `object`) {
      if (Xn(e) === `[object Object]` && typeof e.constructor != `function`) {
        let t = {};
        return (a.set(e, t), Cr(t, e, i, a), t);
      }
      switch (Object.prototype.toString.call(e)) {
        case $n:
        case Qn:
        case er: {
          let t = new e.constructor(e?.valueOf());
          return (Cr(t, e), t);
        }
        case tr: {
          let t = {};
          return (
            Cr(t, e),
            (t.length = e.length),
            (t[Symbol.iterator] = e[Symbol.iterator]),
            t
          );
        }
        default:
          return;
      }
    }
  });
}
function Lr(e) {
  return Ir(e);
}
var Rr = /^(?:0|[1-9]\d*)$/;
function zr(e, t = 2 ** 53 - 1) {
  switch (typeof e) {
    case `number`:
      return Number.isInteger(e) && e >= 0 && e < t;
    case `symbol`:
      return !1;
    case `string`:
      return Rr.test(e);
  }
}
function Br(e) {
  return typeof e == `object` && !!e && Xn(e) === `[object Arguments]`;
}
function Vr(e, t) {
  let n;
  if (
    ((n = Array.isArray(t)
      ? t
      : typeof t == `string` && Lt(t) && e?.[t] == null
        ? Bt(t)
        : [t]),
    n.length === 0)
  )
    return !1;
  let r = e;
  for (let e = 0; e < n.length; e++) {
    let t = n[e];
    if (
      (r == null || !Object.hasOwn(r, t)) &&
      !((Array.isArray(r) || Br(r)) && zr(t) && t < r.length)
    )
      return !1;
    r = r[t];
  }
  return !0;
}
function Hr(e, t) {
  switch (typeof e) {
    case `object`:
      Object.is(e?.valueOf(), -0) && (e = `-0`);
      break;
    case `number`:
      e = Rt(e);
      break;
  }
  return (
    (t = Lr(t)),
    function (n) {
      let r = Vt(n, e);
      return r === void 0 ? Vr(n, e) : t === void 0 ? r === void 0 : Pr(r, t);
    }
  );
}
function Ur(e) {
  if (e == null) return Gn;
  switch (typeof e) {
    case `function`:
      return e;
    case `object`:
      return Array.isArray(e) && e.length === 2 ? Hr(e[0], e[1]) : Fr(e);
    case `string`:
    case `symbol`:
    case `number`:
      return Kn(e);
  }
}
function Wr(e) {
  return Number.isSafeInteger(e) && e >= 0;
}
function Gr(e) {
  return e != null && typeof e != `function` && Wr(e.length);
}
function Kr(e) {
  return typeof e == `object` && !!e;
}
function qr(e) {
  return Kr(e) && Gr(e);
}
function Jr(e, t = Gn) {
  return qr(e) ? Un(Array.from(e), Wn(Ur(t), 1)) : [];
}
function Yr(e, t, n) {
  return t === !0 ? Jr(e, n) : typeof t == `function` ? Jr(e, t) : e;
}
var Xr = (0, O.createContext)(null),
  Zr = d(),
  Qr = (e) => e,
  L = () => {
    var e = (0, O.useContext)(Xr);
    return e ? e.store.dispatch : Qr;
  },
  $r = () => {},
  ei = () => $r,
  ti = (e, t) => e === t;
function R(e) {
  var t = (0, O.useContext)(Xr),
    n = (0, O.useMemo)(
      () =>
        t
          ? (t) => {
              if (t != null) return e(t);
            }
          : $r,
      [t, e],
    );
  return (0, Zr.useSyncExternalStoreWithSelector)(
    t ? t.subscription.addNestedSub : ei,
    t ? t.store.getState : $r,
    t ? t.store.getState : $r,
    n,
    ti,
  );
}
function ni(e, t = 1) {
  let n = [],
    r = Math.floor(t),
    i = (e, t) => {
      for (let a = 0; a < e.length; a++) {
        let o = e[a];
        Array.isArray(o) && t < r ? i(o, t + 1) : n.push(o);
      }
    };
  return (i(e, 0), n);
}
function ri(e, t, n) {
  return Dr(n) &&
    ((typeof t == `number` && Gr(n) && zr(t) && t < n.length) ||
      (typeof t == `string` && t in n))
    ? Er(n[t], e)
    : !1;
}
function ii(e) {
  return typeof e == `symbol`
    ? 1
    : e === null
      ? 2
      : e === void 0
        ? 3
        : e === e
          ? 0
          : 4;
}
var ai = (e, t, n) => {
  if (e !== t) {
    let r = ii(e),
      i = ii(t);
    if (r === i && r === 0) {
      if (e < t) return n === `desc` ? 1 : -1;
      if (e > t) return n === `desc` ? -1 : 1;
    }
    return n === `desc` ? i - r : r - i;
  }
  return 0;
};
function oi(e) {
  return typeof e == `symbol` || e instanceof Symbol;
}
var si = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  ci = /^\w*$/;
function li(e, t) {
  return Array.isArray(e)
    ? !1
    : typeof e == `number` || typeof e == `boolean` || e == null || oi(e)
      ? !0
      : (typeof e == `string` && (ci.test(e) || !si.test(e))) ||
        (t != null && Object.hasOwn(t, e));
}
function ui(e, t, n, r) {
  if (e == null) return [];
  ((n = r ? void 0 : n),
    Array.isArray(e) || (e = Object.values(e)),
    Array.isArray(t) || (t = t == null ? [null] : [t]),
    t.length === 0 && (t = [null]),
    Array.isArray(n) || (n = n == null ? [] : [n]),
    (n = n.map((e) => String(e))));
  let i = (e, t) => {
      let n = e;
      for (let e = 0; e < t.length && n != null; ++e) n = n[t[e]];
      return n;
    },
    a = (e, t) =>
      t == null || e == null
        ? t
        : typeof e == `object` && `key` in e
          ? Object.hasOwn(t, e.key)
            ? t[e.key]
            : i(t, e.path)
          : typeof e == `function`
            ? e(t)
            : Array.isArray(e)
              ? i(t, e)
              : typeof t == `object`
                ? t[e]
                : t,
    o = t.map(
      (e) => (
        Array.isArray(e) && e.length === 1 && (e = e[0]),
        e == null || typeof e == `function` || Array.isArray(e) || li(e)
          ? e
          : { key: e, path: Bt(e) }
      ),
    );
  return e
    .map((e) => ({ original: e, criteria: o.map((t) => a(t, e)) }))
    .slice()
    .sort((e, t) => {
      for (let r = 0; r < o.length; r++) {
        let i = ai(e.criteria[r], t.criteria[r], n[r]);
        if (i !== 0) return i;
      }
      return 0;
    })
    .map((e) => e.original);
}
function di(e, ...t) {
  let n = t.length;
  return (
    n > 1 && ri(e, t[0], t[1])
      ? (t = [])
      : n > 2 && ri(t[0], t[1], t[2]) && (t = [t[0]]),
    ui(e, ni(t), [`asc`])
  );
}
var fi = (e) => e.legend.settings,
  pi = (e) => e.legend.size,
  mi = T([(e) => e.legend.payload, fi], (e, t) => {
    var n = t.itemSorter,
      r = e.flat(1);
    return n ? di(r, n) : r;
  });
function hi() {
  return R(mi);
}
function gi(e, t) {
  return xi(e) || bi(e, t) || vi(e, t) || _i();
}
function _i() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vi(e, t) {
  if (e) {
    if (typeof e == `string`) return yi(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? yi(e, t)
          : void 0
    );
  }
}
function yi(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function bi(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n != null) {
    var r,
      i,
      a,
      o,
      s = [],
      c = !0,
      l = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        c = !1;
      } else
        for (
          ;
          !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t);
          c = !0
        );
    } catch (e) {
      ((l = !0), (i = e));
    } finally {
      try {
        if (!c && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return s;
  }
}
function xi(e) {
  if (Array.isArray(e)) return e;
}
var Si = 1;
function Ci(e, t) {
  return (
    Math.abs(e.height - t.height) > Si ||
    Math.abs(e.left - t.left) > Si ||
    Math.abs(e.top - t.top) > Si ||
    Math.abs(e.width - t.width) > Si
  );
}
function wi(e) {
  var t = e.getBoundingClientRect();
  return { height: t.height, left: t.left, top: t.top, width: t.width };
}
function Ti() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
    t = gi((0, O.useState)({ height: 0, left: 0, top: 0, width: 0 }), 2),
    n = t[0],
    r = t[1],
    i = (0, O.useRef)(null),
    a = (0, O.useRef)(n);
  a.current = n;
  var o = (0, O.useCallback)(
    (e) => {
      if (
        (i.current != null && (i.current.disconnect(), (i.current = null)),
        e != null)
      ) {
        var t = wi(e);
        if ((Ci(t, a.current) && r(t), typeof ResizeObserver < `u`)) {
          var n = new ResizeObserver(() => {
            var t = wi(e);
            Ci(t, a.current) && r(t);
          });
          (n.observe(e), (i.current = n));
        }
      }
    },
    [...e],
  );
  return (
    (0, O.useEffect)(
      () => () => {
        var e;
        (e = i.current) == null || e.disconnect();
      },
      [],
    ),
    [n, o]
  );
}
function Ei(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Di = (typeof Symbol == `function` && Symbol.observable) || `@@observable`,
  Oi = () => Math.random().toString(36).substring(7).split(``).join(`.`),
  ki = {
    INIT: `@@redux/INIT${Oi()}`,
    REPLACE: `@@redux/REPLACE${Oi()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Oi()}`,
  };
function Ai(e) {
  if (typeof e != `object` || !e) return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null;) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function ji(e, t, n) {
  if (typeof e != `function`) throw Error(Ei(2));
  if (
    (typeof t == `function` && typeof n == `function`) ||
    (typeof n == `function` && typeof arguments[3] == `function`)
  )
    throw Error(Ei(0));
  if (
    (typeof t == `function` && n === void 0 && ((n = t), (t = void 0)),
    n !== void 0)
  ) {
    if (typeof n != `function`) throw Error(Ei(1));
    return n(ji)(e, t);
  }
  let r = e,
    i = t,
    a = new Map(),
    o = a,
    s = 0,
    c = !1;
  function l() {
    o === a &&
      ((o = new Map()),
      a.forEach((e, t) => {
        o.set(t, e);
      }));
  }
  function u() {
    if (c) throw Error(Ei(3));
    return i;
  }
  function d(e) {
    if (typeof e != `function`) throw Error(Ei(4));
    if (c) throw Error(Ei(5));
    let t = !0;
    l();
    let n = s++;
    return (
      o.set(n, e),
      function () {
        if (t) {
          if (c) throw Error(Ei(6));
          ((t = !1), l(), o.delete(n), (a = null));
        }
      }
    );
  }
  function f(e) {
    if (!Ai(e)) throw Error(Ei(7));
    if (e.type === void 0) throw Error(Ei(8));
    if (typeof e.type != `string`) throw Error(Ei(17));
    if (c) throw Error(Ei(9));
    try {
      ((c = !0), (i = r(i, e)));
    } finally {
      c = !1;
    }
    return (
      (a = o).forEach((e) => {
        e();
      }),
      e
    );
  }
  function p(e) {
    if (typeof e != `function`) throw Error(Ei(10));
    ((r = e), f({ type: ki.REPLACE }));
  }
  function m() {
    let e = d;
    return {
      subscribe(t) {
        if (typeof t != `object` || !t) throw Error(Ei(11));
        function n() {
          let e = t;
          e.next && e.next(u());
        }
        return (n(), { unsubscribe: e(n) });
      },
      [Di]() {
        return this;
      },
    };
  }
  return (
    f({ type: ki.INIT }),
    { dispatch: f, subscribe: d, getState: u, replaceReducer: p, [Di]: m }
  );
}
function Mi(e) {
  Object.keys(e).forEach((t) => {
    let n = e[t];
    if (n(void 0, { type: ki.INIT }) === void 0) throw Error(Ei(12));
    if (n(void 0, { type: ki.PROBE_UNKNOWN_ACTION() }) === void 0)
      throw Error(Ei(13));
  });
}
function Ni(e) {
  let t = Object.keys(e),
    n = {};
  for (let r = 0; r < t.length; r++) {
    let i = t[r];
    typeof e[i] == `function` && (n[i] = e[i]);
  }
  let r = Object.keys(n),
    i;
  try {
    Mi(n);
  } catch (e) {
    i = e;
  }
  return function (e = {}, t) {
    if (i) throw i;
    let a = !1,
      o = {};
    for (let i = 0; i < r.length; i++) {
      let s = r[i],
        c = n[s],
        l = e[s],
        u = c(l, t);
      if (u === void 0) throw (t && t.type, Error(Ei(14)));
      ((o[s] = u), (a ||= u !== l));
    }
    return ((a ||= r.length !== Object.keys(e).length), a ? o : e);
  };
}
function Pi(...e) {
  return e.length === 0
    ? (e) => e
    : e.length === 1
      ? e[0]
      : e.reduce(
          (e, t) =>
            (...n) =>
              e(t(...n)),
        );
}
function Fi(...e) {
  return (t) => (n, r) => {
    let i = t(n, r),
      a = () => {
        throw Error(Ei(15));
      },
      o = { getState: i.getState, dispatch: (e, ...t) => a(e, ...t) };
    return ((a = Pi(...e.map((e) => e(o)))(i.dispatch)), { ...i, dispatch: a });
  };
}
function Ii(e) {
  return Ai(e) && `type` in e && typeof e.type == `string`;
}
var Li = Symbol.for(`immer-nothing`),
  Ri = Symbol.for(`immer-draftable`),
  zi = Symbol.for(`immer-state`);
function Bi(e, ...t) {
  throw Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`,
  );
}
var Vi = Object,
  Hi = Vi.getPrototypeOf,
  Ui = `constructor`,
  Wi = `prototype`,
  Gi = `configurable`,
  Ki = `enumerable`,
  qi = `writable`,
  Ji = `value`,
  Yi = (e) => !!e && !!e[zi];
function Xi(e) {
  return e ? $i(e) || oa(e) || !!e[Ri] || !!e[Ui]?.[Ri] || sa(e) || ca(e) : !1;
}
var Zi = Vi[Wi][Ui].toString(),
  Qi = new WeakMap();
function $i(e) {
  if (!e || !la(e)) return !1;
  let t = Hi(e);
  if (t === null || t === Vi[Wi]) return !0;
  let n = Vi.hasOwnProperty.call(t, Ui) && t[Ui];
  if (n === Object) return !0;
  if (!ua(n)) return !1;
  let r = Qi.get(n);
  return (
    r === void 0 && ((r = Function.toString.call(n)), Qi.set(n, r)),
    r === Zi
  );
}
function ea(e, t, n = !0) {
  ta(e) === 0
    ? (n ? Reflect.ownKeys(e) : Vi.keys(e)).forEach((n) => {
        t(n, e[n], e);
      })
    : e.forEach((n, r) => t(r, n, e));
}
function ta(e) {
  let t = e[zi];
  return t ? t.type_ : oa(e) ? 1 : sa(e) ? 2 : ca(e) ? 3 : 0;
}
var na = (e, t, n = ta(e)) =>
    n === 2 ? e.has(t) : Vi[Wi].hasOwnProperty.call(e, t),
  ra = (e, t, n = ta(e)) => (n === 2 ? e.get(t) : e[t]),
  ia = (e, t, n, r = ta(e)) => {
    r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
  };
function aa(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e !== e && t !== t;
}
var oa = Array.isArray,
  sa = (e) => e instanceof Map,
  ca = (e) => e instanceof Set,
  la = (e) => typeof e == `object`,
  ua = (e) => typeof e == `function`,
  da = (e) => typeof e == `boolean`;
function fa(e) {
  let t = +e;
  return Number.isInteger(t) && String(t) === e;
}
var pa = (e) => e.copy_ || e.base_,
  ma = (e) => (e.modified_ ? e.copy_ : e.base_);
function ha(e, t) {
  if (sa(e)) return new Map(e);
  if (ca(e)) return new Set(e);
  if (oa(e)) return Array[Wi].slice.call(e);
  let n = $i(e);
  if (t === !0 || (t === `class_only` && !n)) {
    let t = Vi.getOwnPropertyDescriptors(e);
    delete t[zi];
    let n = Reflect.ownKeys(t);
    for (let r = 0; r < n.length; r++) {
      let i = n[r],
        a = t[i];
      (a[qi] === !1 && ((a[qi] = !0), (a[Gi] = !0)),
        (a.get || a.set) &&
          (t[i] = { [Gi]: !0, [qi]: !0, [Ki]: a[Ki], [Ji]: e[i] }));
    }
    return Vi.create(Hi(e), t);
  } else {
    let t = Hi(e);
    if (t !== null && n) return { ...e };
    let r = Vi.create(t);
    return Vi.assign(r, e);
  }
}
function ga(e, t = !1) {
  return ya(e) || Yi(e) || !Xi(e)
    ? e
    : (ta(e) > 1 &&
        Vi.defineProperties(e, { set: va, add: va, clear: va, delete: va }),
      Vi.freeze(e),
      t &&
        ea(
          e,
          (e, t) => {
            ga(t, !0);
          },
          !1,
        ),
      e);
}
function _a() {
  Bi(2);
}
var va = { [Ji]: _a };
function ya(e) {
  return e === null || !la(e) ? !0 : Vi.isFrozen(e);
}
var ba = `MapSet`,
  xa = `Patches`,
  Sa = `ArrayMethods`,
  Ca = {};
function wa(e) {
  let t = Ca[e];
  return (t || Bi(0, e), t);
}
var Ta = (e) => !!Ca[e],
  Ea,
  Da = () => Ea,
  Oa = (e, t) => ({
    drafts_: [],
    parent_: e,
    immer_: t,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
    handledSet_: new Set(),
    processedForPatches_: new Set(),
    mapSetPlugin_: Ta(ba) ? wa(ba) : void 0,
    arrayMethodsPlugin_: Ta(Sa) ? wa(Sa) : void 0,
  });
function ka(e, t) {
  t &&
    ((e.patchPlugin_ = wa(xa)),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = t));
}
function Aa(e) {
  (ja(e), e.drafts_.forEach(Na), (e.drafts_ = null));
}
function ja(e) {
  e === Ea && (Ea = e.parent_);
}
var Ma = (e) => (Ea = Oa(Ea, e));
function Na(e) {
  let t = e[zi];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function Pa(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  let n = t.drafts_[0];
  if (e !== void 0 && e !== n) {
    (n[zi].modified_ && (Aa(t), Bi(4)), Xi(e) && (e = Fa(t, e)));
    let { patchPlugin_: r } = t;
    r && r.generateReplacementPatches_(n[zi].base_, e, t);
  } else e = Fa(t, n);
  return (
    Ia(t, e, !0),
    Aa(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e === Li ? void 0 : e
  );
}
function Fa(e, t) {
  if (ya(t)) return t;
  let n = t[zi];
  if (!n) return Wa(t, e.handledSet_, e);
  if (!Ra(n, e)) return t;
  if (!n.modified_) return n.base_;
  if (!n.finalized_) {
    let { callbacks_: t } = n;
    if (t) for (; t.length > 0;) t.pop()(e);
    Ha(n, e);
  }
  return n.copy_;
}
function Ia(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && ga(t, n);
}
function La(e) {
  ((e.finalized_ = !0), e.scope_.unfinalizedDrafts_--);
}
var Ra = (e, t) => e.scope_ === t,
  za = [];
function Ba(e, t, n, r) {
  let i = pa(e),
    a = e.type_;
  if (r !== void 0 && ra(i, r, a) === t) {
    ia(i, r, n, a);
    return;
  }
  if (!e.draftLocations_) {
    let t = (e.draftLocations_ = new Map());
    ea(i, (e, n) => {
      if (Yi(n)) {
        let r = t.get(n) || [];
        (r.push(e), t.set(n, r));
      }
    });
  }
  let o = e.draftLocations_.get(t) ?? za;
  for (let e of o) ia(i, e, n, a);
}
function Va(e, t, n) {
  e.callbacks_.push(function (r) {
    let i = t;
    if (!i || !Ra(i, r)) return;
    r.mapSetPlugin_?.fixSetContents(i);
    let a = ma(i);
    (Ba(e, i.draft_ ?? i, a, n), Ha(i, r));
  });
}
function Ha(e, t) {
  if (
    e.modified_ &&
    !e.finalized_ &&
    (e.type_ === 3 ||
      (e.type_ === 1 && e.allIndicesReassigned_) ||
      (e.assigned_?.size ?? 0) > 0)
  ) {
    let { patchPlugin_: n } = t;
    if (n) {
      let r = n.getPath(e);
      r && n.generatePatches_(e, r, t);
    }
    La(e);
  }
}
function Ua(e, t, n) {
  let { scope_: r } = e;
  if (Yi(n)) {
    let i = n[zi];
    Ra(i, r) &&
      i.callbacks_.push(function () {
        (Qa(e), Ba(e, n, ma(i), t));
      });
  } else
    Xi(n) &&
      e.callbacks_.push(function () {
        let i = pa(e);
        e.type_ === 3
          ? i.has(n) && Wa(n, r.handledSet_, r)
          : ra(i, t, e.type_) === n &&
            r.drafts_.length > 1 &&
            (e.assigned_.get(t) ?? !1) === !0 &&
            e.copy_ &&
            Wa(ra(e.copy_, t, e.type_), r.handledSet_, r);
      });
}
function Wa(e, t, n) {
  return (!n.immer_.autoFreeze_ && n.unfinalizedDrafts_ < 1) ||
    Yi(e) ||
    t.has(e) ||
    !Xi(e) ||
    ya(e)
    ? e
    : (t.add(e),
      ea(e, (r, i) => {
        if (Yi(i)) {
          let t = i[zi];
          Ra(t, n) && (ia(e, r, ma(t), e.type_), La(t));
        } else Xi(i) && Wa(i, t, n);
      }),
      e);
}
function Ga(e, t) {
  let n = oa(e),
    r = {
      type_: +!!n,
      scope_: t ? t.scope_ : Da(),
      modified_: !1,
      finalized_: !1,
      assigned_: void 0,
      parent_: t,
      base_: e,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
      callbacks_: void 0,
    },
    i = r,
    a = Ka;
  n && ((i = [r]), (a = qa));
  let { revoke: o, proxy: s } = Proxy.revocable(i, a);
  return ((r.draft_ = s), (r.revoke_ = o), [s, r]);
}
var Ka = {
    get(e, t) {
      if (t === zi) return e;
      if (t === `constructor` || t === `__proto__`) {
        let n = pa(e)[t];
        return new Proxy(n || {}, {
          get: (e, t) =>
            t === `__proto__` || t === `prototype`
              ? Object.freeze(Object.create(null))
              : Reflect.get(e, t),
          set: () => !0,
          apply: (e, t, n) => Reflect.apply(e, t, n),
        });
      }
      let n = e.scope_.arrayMethodsPlugin_,
        r = e.type_ === 1 && typeof t == `string`;
      if (r && n?.isArrayOperationMethod(t))
        return n.createMethodInterceptor(e, t);
      let i = pa(e);
      if (!na(i, t, e.type_)) return Ya(e, i, t);
      let a = i[t];
      if (
        e.finalized_ ||
        !Xi(a) ||
        (r &&
          e.operationMethod &&
          n?.isMutatingArrayMethod(e.operationMethod) &&
          fa(t))
      )
        return a;
      if (a === Ja(e.base_, t)) {
        Qa(e);
        let n = e.type_ === 1 ? +t : t,
          r = eo(e.scope_, a, e, n);
        return (e.copy_[n] = r);
      }
      return a;
    },
    has(e, t) {
      return t === `constructor` || t === `__proto__` || t === `prototype`
        ? !1
        : t in pa(e);
    },
    ownKeys(e) {
      return Reflect.ownKeys(pa(e));
    },
    set(e, t, n) {
      if (t === `constructor` || t === `__proto__` || t === `prototype`)
        return !0;
      let r = Xa(pa(e), t);
      if (r?.set) return (r.set.call(e.draft_, n), !0);
      if (!e.modified_) {
        let r = Ja(pa(e), t),
          i = r?.[zi];
        if (i && i.base_ === n)
          return ((e.copy_[t] = n), e.assigned_.set(t, !1), !0);
        if (aa(n, r) && (n !== void 0 || na(e.base_, t, e.type_))) return !0;
        (Qa(e), Za(e));
      }
      return (e.copy_[t] === n && (n !== void 0 || na(e.copy_, t, e.type_))) ||
        (Number.isNaN(n) && Number.isNaN(e.copy_[t]))
        ? !0
        : ((e.copy_[t] = n), e.assigned_.set(t, !0), Ua(e, t, n), !0);
    },
    deleteProperty(e, t) {
      return (
        Qa(e),
        Ja(e.base_, t) !== void 0 || t in e.base_
          ? (e.assigned_.set(t, !1), Za(e))
          : e.assigned_.delete(t),
        e.copy_ && delete e.copy_[t],
        !0
      );
    },
    getOwnPropertyDescriptor(e, t) {
      let n = pa(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return (
        r && {
          [qi]: !0,
          [Gi]: e.type_ !== 1 || t !== `length`,
          [Ki]: r[Ki],
          [Ji]: n[t],
        }
      );
    },
    defineProperty() {
      Bi(11);
    },
    getPrototypeOf(e) {
      return Hi(e.base_);
    },
    setPrototypeOf() {
      Bi(12);
    },
  },
  qa = {};
for (let e in Ka) {
  let t = Ka[e];
  qa[e] = function () {
    let e = arguments;
    return ((e[0] = e[0][0]), t.apply(this, e));
  };
}
((qa.deleteProperty = function (e, t) {
  return qa.set.call(this, e, t, void 0);
}),
  (qa.set = function (e, t, n) {
    return Ka.set.call(this, e[0], t, n, e[0]);
  }));
function Ja(e, t) {
  let n = e[zi];
  return (n ? pa(n) : e)[t];
}
function Ya(e, t, n) {
  let r = Xa(t, n);
  return r ? (Ji in r ? r[Ji] : r.get?.call(e.draft_)) : void 0;
}
function Xa(e, t) {
  if (!(t in e)) return;
  let n = Hi(e);
  for (; n;) {
    let e = Object.getOwnPropertyDescriptor(n, t);
    if (e) return e;
    n = Hi(n);
  }
}
function Za(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && Za(e.parent_));
}
function Qa(e) {
  e.copy_ ||=
    ((e.assigned_ = new Map()),
    ha(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var $a = class {
  constructor(e) {
    ((this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.useStrictIteration_ = !1),
      (this.produce = (e, t, n) => {
        if (ua(e) && !ua(t)) {
          let n = t;
          t = e;
          let r = this;
          return function (e = n, ...i) {
            return r.produce(e, (e) => t.call(this, e, ...i));
          };
        }
        (ua(t) || Bi(6), n !== void 0 && !ua(n) && Bi(7));
        let r;
        if (Xi(e)) {
          let i = Ma(this),
            a = eo(i, e, void 0),
            o = !0;
          try {
            ((r = t(a)), (o = !1));
          } finally {
            o ? Aa(i) : ja(i);
          }
          return (ka(i, n), Pa(r, i));
        } else if (!e || !la(e)) {
          if (
            ((r = t(e)),
            r === void 0 && (r = e),
            r === Li && (r = void 0),
            this.autoFreeze_ && ga(r, !0),
            n)
          ) {
            let t = [],
              i = [];
            (wa(xa).generateReplacementPatches_(e, r, {
              patches_: t,
              inversePatches_: i,
            }),
              n(t, i));
          }
          return r;
        } else Bi(1, e);
      }),
      (this.produceWithPatches = (e, t) => {
        if (ua(e))
          return (t, ...n) => this.produceWithPatches(t, (t) => e(t, ...n));
        let n, r;
        return [
          this.produce(e, t, (e, t) => {
            ((n = e), (r = t));
          }),
          n,
          r,
        ];
      }),
      da(e?.autoFreeze) && this.setAutoFreeze(e.autoFreeze),
      da(e?.useStrictShallowCopy) &&
        this.setUseStrictShallowCopy(e.useStrictShallowCopy),
      da(e?.useStrictIteration) &&
        this.setUseStrictIteration(e.useStrictIteration));
  }
  createDraft(e) {
    (Xi(e) || Bi(8), Yi(e) && (e = to(e)));
    let t = Ma(this),
      n = eo(t, e, void 0);
    return ((n[zi].isManual_ = !0), ja(t), n);
  }
  finishDraft(e, t) {
    let n = e && e[zi];
    (!n || !n.isManual_) && Bi(9);
    let { scope_: r } = n;
    return (ka(r, t), Pa(void 0, r));
  }
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  setUseStrictIteration(e) {
    this.useStrictIteration_ = e;
  }
  shouldUseStrictIteration() {
    return this.useStrictIteration_;
  }
  applyPatches(e, t) {
    let n;
    for (n = t.length - 1; n >= 0; n--) {
      let r = t[n];
      if (r.path.length === 0 && r.op === `replace`) {
        e = r.value;
        break;
      }
    }
    n > -1 && (t = t.slice(n + 1));
    let r = wa(xa).applyPatches_;
    return Yi(e) ? r(e, t) : this.produce(e, (e) => r(e, t));
  }
};
function eo(e, t, n, r) {
  let [i, a] = sa(t)
    ? wa(ba).proxyMap_(t, n)
    : ca(t)
      ? wa(ba).proxySet_(t, n)
      : Ga(t, n);
  return (
    (n?.scope_ ?? Da()).drafts_.push(i),
    (a.callbacks_ = n?.callbacks_ ?? []),
    (a.key_ = r),
    n && r !== void 0
      ? Va(n, a, r)
      : a.callbacks_.push(function (e) {
          e.mapSetPlugin_?.fixSetContents(a);
          let { patchPlugin_: t } = e;
          a.modified_ && t && t.generatePatches_(a, [], e);
        }),
    i
  );
}
function to(e) {
  return (Yi(e) || Bi(10, e), no(e));
}
function no(e) {
  if (!Xi(e) || ya(e)) return e;
  let t = e[zi],
    n,
    r = !0;
  if (t) {
    if (!t.modified_) return t.base_;
    ((t.finalized_ = !0),
      (n = ha(e, t.scope_.immer_.useStrictShallowCopy_)),
      (r = t.scope_.immer_.shouldUseStrictIteration()));
  } else n = ha(e, !0);
  return (
    ea(
      n,
      (e, t) => {
        ia(n, e, no(t));
      },
      r,
    ),
    t && (t.finalized_ = !1),
    n
  );
}
var ro = new $a().produce,
  z = (e) => e;
function io(e) {
  return ({ dispatch: t, getState: n }) =>
    (r) =>
    (i) =>
      typeof i == `function` ? i(t, n, e) : r(i);
}
var ao = io(),
  oo = io,
  so =
    typeof window < `u` && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == `object`
              ? Pi
              : Pi.apply(null, arguments);
        };
typeof window < `u` &&
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__;
function co(e, t) {
  function n(...n) {
    if (t) {
      let r = t(...n);
      if (!r) throw Error(_s(0));
      return {
        type: e,
        payload: r.payload,
        ...(`meta` in r && { meta: r.meta }),
        ...(`error` in r && { error: r.error }),
      };
    }
    return { type: e, payload: n[0] };
  }
  return (
    (n.toString = () => `${e}`),
    (n.type = e),
    (n.match = (t) => Ii(t) && t.type === e),
    n
  );
}
var lo = class e extends Array {
  constructor(...t) {
    (super(...t), Object.setPrototypeOf(this, e.prototype));
  }
  static get [Symbol.species]() {
    return e;
  }
  concat(...e) {
    return super.concat.apply(this, e);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0])
      ? new e(...t[0].concat(this))
      : new e(...t.concat(this));
  }
};
function uo(e) {
  return Xi(e) ? ro(e, () => {}) : e;
}
function fo(e, t, n) {
  return e.has(t) ? e.get(t) : e.set(t, n(t)).get(t);
}
function po(e) {
  return typeof e == `boolean`;
}
var mo = () =>
    function (e) {
      let {
          thunk: t = !0,
          immutableCheck: n = !0,
          serializableCheck: r = !0,
          actionCreatorCheck: i = !0,
        } = e ?? {},
        a = new lo();
      return (t && (po(t) ? a.push(ao) : a.push(oo(t.extraArgument))), a);
    },
  ho = `RTK_autoBatch`,
  B = () => (e) => ({ payload: e, meta: { [ho]: !0 } }),
  go = (e) => (t) => {
    setTimeout(t, e);
  },
  _o = (e, t) => (n) => {
    let r = !1,
      i = () => {
        r || ((r = !0), cancelAnimationFrame(a), clearTimeout(o), n());
      },
      a = e(i),
      o = setTimeout(i, t);
  },
  vo =
    (e = { type: `raf` }) =>
    (t) =>
    (...n) => {
      let r = t(...n),
        i = !0,
        a = !1,
        o = !1,
        s = new Set(),
        c =
          e.type === `tick`
            ? queueMicrotask
            : e.type === `raf`
              ? typeof window < `u` && window.requestAnimationFrame
                ? _o(window.requestAnimationFrame, 100)
                : go(10)
              : e.type === `callback`
                ? e.queueNotification
                : go(e.timeout),
        l = () => {
          ((o = !1), a && ((a = !1), s.forEach((e) => e())));
        };
      return Object.assign({}, r, {
        subscribe(e) {
          let t = r.subscribe(() => i && e());
          return (
            s.add(e),
            () => {
              (t(), s.delete(e));
            }
          );
        },
        dispatch(e) {
          try {
            return (
              (i = !e?.meta?.[ho]),
              (a = !i),
              a && (o || ((o = !0), c(l))),
              r.dispatch(e)
            );
          } finally {
            i = !0;
          }
        },
      });
    },
  yo = (e) =>
    function (t) {
      let { autoBatch: n = !0 } = t ?? {},
        r = new lo(e);
      return (n && r.push(vo(typeof n == `object` ? n : void 0)), r);
    };
function bo(e) {
  let t = mo(),
    {
      reducer: n = void 0,
      middleware: r,
      devTools: i = !0,
      duplicateMiddlewareCheck: a = !0,
      preloadedState: o = void 0,
      enhancers: s = void 0,
    } = e || {},
    c;
  if (typeof n == `function`) c = n;
  else if (Ai(n)) c = Ni(n);
  else throw Error(_s(1));
  let l;
  l = typeof r == `function` ? r(t) : t();
  let u = Pi;
  i && (u = so({ trace: !1, ...(typeof i == `object` && i) }));
  let d = yo(Fi(...l)),
    f = typeof s == `function` ? s(d) : d(),
    p = u(...f);
  return ji(c, o, p);
}
function xo(e) {
  let t = {},
    n = [],
    r,
    i = {
      addCase(e, n) {
        let r = typeof e == `string` ? e : e.type;
        if (!r) throw Error(_s(28));
        if (r in t) throw Error(_s(29));
        return ((t[r] = n), i);
      },
      addAsyncThunk(e, r) {
        return (
          r.pending && (t[e.pending.type] = r.pending),
          r.rejected && (t[e.rejected.type] = r.rejected),
          r.fulfilled && (t[e.fulfilled.type] = r.fulfilled),
          r.settled && n.push({ matcher: e.settled, reducer: r.settled }),
          i
        );
      },
      addMatcher(e, t) {
        return (n.push({ matcher: e, reducer: t }), i);
      },
      addDefaultCase(e) {
        return ((r = e), i);
      },
    };
  return (e(i), [t, n, r]);
}
function So(e) {
  return typeof e == `function`;
}
function Co(e, t) {
  let [n, r, i] = xo(t),
    a;
  if (So(e)) a = () => uo(e());
  else {
    let t = uo(e);
    a = () => t;
  }
  function o(e = a(), t) {
    let o = [
      n[t.type],
      ...r.filter(({ matcher: e }) => e(t)).map(({ reducer: e }) => e),
    ];
    return (
      o.filter((e) => !!e).length === 0 && (o = [i]),
      o.reduce((e, n) => {
        if (n)
          if (Yi(e)) {
            let r = n(e, t);
            return r === void 0 ? e : r;
          } else if (Xi(e)) return ro(e, (e) => n(e, t));
          else {
            let r = n(e, t);
            if (r === void 0) {
              if (e === null) return e;
              throw Error(
                `A case reducer on a non-draftable value must not return undefined`,
              );
            }
            return r;
          }
        return e;
      }, e)
    );
  }
  return ((o.getInitialState = a), o);
}
var wo = `ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW`,
  To = (e = 21) => {
    let t = ``,
      n = e;
    for (; n--;) t += wo[(Math.random() * 64) | 0];
    return t;
  },
  Eo = Symbol.for(`rtk-slice-createasyncthunk`);
function Do(e, t) {
  return `${e}/${t}`;
}
function Oo({ creators: e } = {}) {
  let t = e?.asyncThunk?.[Eo];
  return function (e) {
    let { name: n, reducerPath: r = n } = e;
    if (!n) throw Error(_s(11));
    let i =
        (typeof e.reducers == `function` ? e.reducers(jo()) : e.reducers) || {},
      a = Object.keys(i),
      o = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      s = {
        addCase(e, t) {
          let n = typeof e == `string` ? e : e.type;
          if (!n) throw Error(_s(12));
          if (n in o.sliceCaseReducersByType) throw Error(_s(13));
          return ((o.sliceCaseReducersByType[n] = t), s);
        },
        addMatcher(e, t) {
          return (o.sliceMatchers.push({ matcher: e, reducer: t }), s);
        },
        exposeAction(e, t) {
          return ((o.actionCreators[e] = t), s);
        },
        exposeCaseReducer(e, t) {
          return ((o.sliceCaseReducersByName[e] = t), s);
        },
      };
    a.forEach((r) => {
      let a = i[r],
        o = {
          reducerName: r,
          type: Do(n, r),
          createNotation: typeof e.reducers == `function`,
        };
      No(a) ? Fo(o, a, s, t) : Mo(o, a, s);
    });
    function c() {
      let [t = {}, n = [], r = void 0] =
          typeof e.extraReducers == `function`
            ? xo(e.extraReducers)
            : [e.extraReducers],
        i = { ...t, ...o.sliceCaseReducersByType };
      return Co(e.initialState, (e) => {
        for (let t in i) e.addCase(t, i[t]);
        for (let t of o.sliceMatchers) e.addMatcher(t.matcher, t.reducer);
        for (let t of n) e.addMatcher(t.matcher, t.reducer);
        r && e.addDefaultCase(r);
      });
    }
    let l = (e) => e,
      u = new Map(),
      d = new WeakMap(),
      f;
    function p(e, t) {
      return ((f ||= c()), f(e, t));
    }
    function m() {
      return ((f ||= c()), f.getInitialState());
    }
    function h(t, n = !1) {
      function r(e) {
        let i = e[t];
        return (i === void 0 && n && (i = fo(d, r, m)), i);
      }
      function i(t = l) {
        return fo(
          fo(u, n, () => new WeakMap()),
          t,
          () => {
            let r = {};
            for (let [i, a] of Object.entries(e.selectors ?? {}))
              r[i] = ko(a, t, () => fo(d, t, m), n);
            return r;
          },
        );
      }
      return {
        reducerPath: t,
        getSelectors: i,
        get selectors() {
          return i(r);
        },
        selectSlice: r,
      };
    }
    let g = {
      name: n,
      reducer: p,
      actions: o.actionCreators,
      caseReducers: o.sliceCaseReducersByName,
      getInitialState: m,
      ...h(r),
      injectInto(e, { reducerPath: t, ...n } = {}) {
        let i = t ?? r;
        return (
          e.inject({ reducerPath: i, reducer: p }, n),
          { ...g, ...h(i, !0) }
        );
      },
    };
    return g;
  };
}
function ko(e, t, n, r) {
  function i(i, ...a) {
    let o = t(i);
    return (o === void 0 && r && (o = n()), e(o, ...a));
  }
  return ((i.unwrapped = e), i);
}
var Ao = Oo();
function jo() {
  function e(e, t) {
    return { _reducerDefinitionType: `asyncThunk`, payloadCreator: e, ...t };
  }
  return (
    (e.withTypes = () => e),
    {
      reducer(e) {
        return Object.assign(
          {
            [e.name](...t) {
              return e(...t);
            },
          }[e.name],
          { _reducerDefinitionType: `reducer` },
        );
      },
      preparedReducer(e, t) {
        return {
          _reducerDefinitionType: `reducerWithPrepare`,
          prepare: e,
          reducer: t,
        };
      },
      asyncThunk: e,
    }
  );
}
function Mo({ type: e, reducerName: t, createNotation: n }, r, i) {
  let a, o;
  if (`reducer` in r) {
    if (n && !Po(r)) throw Error(_s(17));
    ((a = r.reducer), (o = r.prepare));
  } else a = r;
  i.addCase(e, a)
    .exposeCaseReducer(t, a)
    .exposeAction(t, o ? co(e, o) : co(e));
}
function No(e) {
  return e._reducerDefinitionType === `asyncThunk`;
}
function Po(e) {
  return e._reducerDefinitionType === `reducerWithPrepare`;
}
function Fo({ type: e, reducerName: t }, n, r, i) {
  if (!i) throw Error(_s(18));
  let {
      payloadCreator: a,
      fulfilled: o,
      pending: s,
      rejected: c,
      settled: l,
      options: u,
    } = n,
    d = i(e, a, u);
  (r.exposeAction(t, d),
    o && r.addCase(d.fulfilled, o),
    s && r.addCase(d.pending, s),
    c && r.addCase(d.rejected, c),
    l && r.addMatcher(d.settled, l),
    r.exposeCaseReducer(t, {
      fulfilled: o || Io,
      pending: s || Io,
      rejected: c || Io,
      settled: l || Io,
    }));
}
function Io() {}
var Lo = `task`,
  Ro = `listener`,
  zo = `completed`,
  Bo = `cancelled`,
  Vo = `task-${Bo}`,
  Ho = `task-${zo}`,
  Uo = `${Ro}-${Bo}`,
  Wo = `${Ro}-${zo}`,
  Go = class {
    constructor(e) {
      ((this.code = e), (this.message = `${Lo} ${Bo} (reason: ${e})`));
    }
    code;
    name = `TaskAbortError`;
    message;
  },
  Ko = (e, t) => {
    if (typeof e != `function`) throw TypeError(_s(32));
  },
  qo = () => {},
  Jo = (e, t = qo) => (e.catch(t), e),
  Yo = (e, t) => (
    e.addEventListener(`abort`, t, { once: !0 }),
    () => e.removeEventListener(`abort`, t)
  ),
  Xo = (e) => {
    if (e.aborted) throw new Go(e.reason);
  };
function Zo(e, t) {
  let n = qo;
  return new Promise((r, i) => {
    let a = () => i(new Go(e.reason));
    if (e.aborted) {
      a();
      return;
    }
    ((n = Yo(e, a)), t.finally(() => n()).then(r, i));
  }).finally(() => {
    n = qo;
  });
}
var Qo = async (e, t) => {
    try {
      return (await Promise.resolve(), { status: `ok`, value: await e() });
    } catch (e) {
      return { status: e instanceof Go ? `cancelled` : `rejected`, error: e };
    } finally {
      t?.();
    }
  },
  $o = (e) => (t) => Jo(Zo(e, t).then((t) => (Xo(e), t))),
  es = (e) => {
    let t = $o(e);
    return (e) => t(new Promise((t) => setTimeout(t, e)));
  },
  { assign: ts } = Object,
  ns = {},
  rs = `listenerMiddleware`,
  is = (e, t) => {
    let n = (t) => Yo(e, () => t.abort(e.reason));
    return (r, i) => {
      Ko(r, `taskExecutor`);
      let a = new AbortController();
      n(a);
      let o = Qo(
        async () => {
          (Xo(e), Xo(a.signal));
          let t = await r({
            pause: $o(a.signal),
            delay: es(a.signal),
            signal: a.signal,
          });
          return (Xo(a.signal), t);
        },
        () => a.abort(Ho),
      );
      return (
        i?.autoJoin && t.push(o.catch(qo)),
        {
          result: $o(e)(o),
          cancel() {
            a.abort(Vo);
          },
        }
      );
    };
  },
  as = (e, t) => {
    let n = async (n, r) => {
      Xo(t);
      let i = () => {},
        a = [
          new Promise((t, r) => {
            let a = e({
              predicate: n,
              effect: (e, n) => {
                (n.unsubscribe(), t([e, n.getState(), n.getOriginalState()]));
              },
            });
            i = () => {
              (a(), r());
            };
          }),
        ];
      r != null && a.push(new Promise((e) => setTimeout(e, r, null)));
      try {
        let e = await Zo(t, Promise.race(a));
        return (Xo(t), e);
      } finally {
        i();
      }
    };
    return (e, t) => Jo(n(e, t));
  },
  os = (e) => {
    let { type: t, actionCreator: n, matcher: r, predicate: i, effect: a } = e;
    if (t) i = co(t).match;
    else if (n) ((t = n.type), (i = n.match));
    else if (r) i = r;
    else if (!i) throw Error(_s(21));
    return (Ko(a, `options.listener`), { predicate: i, type: t, effect: a });
  },
  ss = ts(
    (e) => {
      let { type: t, predicate: n, effect: r } = os(e);
      return {
        id: To(),
        effect: r,
        type: t,
        predicate: n,
        pending: new Set(),
        unsubscribe: () => {
          throw Error(_s(22));
        },
      };
    },
    { withTypes: () => ss },
  ),
  cs = (e, t) => {
    let { type: n, effect: r, predicate: i } = os(t);
    return Array.from(e.values()).find(
      (e) =>
        (typeof n == `string` ? e.type === n : e.predicate === i) &&
        e.effect === r,
    );
  },
  ls = (e) => {
    e.pending.forEach((e) => {
      e.abort(Uo);
    });
  },
  us = (e, t) => () => {
    for (let e of t.keys()) ls(e);
    e.clear();
  },
  ds = (e, t, n) => {
    try {
      e(t, n);
    } catch (e) {
      setTimeout(() => {
        throw e;
      }, 0);
    }
  },
  fs = ts(co(`${rs}/add`), { withTypes: () => fs }),
  ps = co(`${rs}/removeAll`),
  ms = ts(co(`${rs}/remove`), { withTypes: () => ms }),
  hs = (...e) => {
    console.error(`${rs}/error`, ...e);
  },
  gs = (e = {}) => {
    let t = new Map(),
      n = new Map(),
      r = (e) => {
        let t = n.get(e) ?? 0;
        n.set(e, t + 1);
      },
      i = (e) => {
        let t = n.get(e) ?? 1;
        t === 1 ? n.delete(e) : n.set(e, t - 1);
      },
      { extra: a, onError: o = hs } = e;
    Ko(o, `onError`);
    let s = (e) => (
        (e.unsubscribe = () => t.delete(e.id)),
        t.set(e.id, e),
        (t) => {
          (e.unsubscribe(), t?.cancelActive && ls(e));
        }
      ),
      c = (e) => {
        let n = cs(t, e) ?? ss(e);
        return s(n);
      };
    ts(c, { withTypes: () => c });
    let l = (e) => {
      let n = cs(t, e);
      return (n && (n.unsubscribe(), e.cancelActive && ls(n)), !!n);
    };
    ts(l, { withTypes: () => l });
    let u = async (e, n, s, l) => {
        let u = new AbortController(),
          d = as(c, u.signal),
          f = [];
        try {
          (e.pending.add(u),
            r(e),
            await Promise.resolve(
              e.effect(
                n,
                ts({}, s, {
                  getOriginalState: l,
                  condition: (e, t) => d(e, t).then(Boolean),
                  take: d,
                  delay: es(u.signal),
                  pause: $o(u.signal),
                  extra: a,
                  signal: u.signal,
                  fork: is(u.signal, f),
                  unsubscribe: e.unsubscribe,
                  subscribe: () => {
                    t.set(e.id, e);
                  },
                  cancelActiveListeners: () => {
                    e.pending.forEach((e, t, n) => {
                      e !== u && (e.abort(Uo), n.delete(e));
                    });
                  },
                  cancel: () => {
                    (u.abort(Uo), e.pending.delete(u));
                  },
                  throwIfCancelled: () => {
                    Xo(u.signal);
                  },
                }),
              ),
            ));
        } catch (e) {
          e instanceof Go || ds(o, e, { raisedBy: `effect` });
        } finally {
          (await Promise.all(f), u.abort(Wo), i(e), e.pending.delete(u));
        }
      },
      d = us(t, n);
    return {
      middleware: (e) => (n) => (r) => {
        if (!Ii(r)) return n(r);
        if (fs.match(r)) return c(r.payload);
        if (ps.match(r)) {
          d();
          return;
        }
        if (ms.match(r)) return l(r.payload);
        let i = e.getState(),
          a = () => {
            if (i === ns) throw Error(_s(23));
            return i;
          },
          s;
        try {
          if (((s = n(r)), t.size > 0)) {
            let n = e.getState(),
              s = Array.from(t.values());
            for (let t of s) {
              let s = !1;
              try {
                s = t.predicate(r, n, i);
              } catch (e) {
                ((s = !1), ds(o, e, { raisedBy: `predicate` }));
              }
              s && u(t, r, e, a);
            }
          }
        } finally {
          i = ns;
        }
        return s;
      },
      startListening: c,
      stopListening: l,
      clearListeners: d,
    };
  };
function _s(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var vs = Ao({
    name: `chartLayout`,
    initialState: {
      layoutType: `horizontal`,
      width: 0,
      height: 0,
      margin: { top: 5, right: 5, bottom: 5, left: 5 },
      scale: 1,
    },
    reducers: {
      setLayout(e, t) {
        e.layoutType = t.payload;
      },
      setChartSize(e, t) {
        ((e.width = t.payload.width), (e.height = t.payload.height));
      },
      setMargin(e, t) {
        ((e.margin.top = t.payload.top ?? 0),
          (e.margin.right = t.payload.right ?? 0),
          (e.margin.bottom = t.payload.bottom ?? 0),
          (e.margin.left = t.payload.left ?? 0));
      },
      setScale(e, t) {
        e.scale = t.payload;
      },
    },
  }),
  ys = vs.actions,
  bs = ys.setMargin,
  xs = ys.setLayout,
  Ss = ys.setChartSize,
  Cs = ys.setScale,
  ws = vs.reducer;
function Ts(e, t, n) {
  return Array.isArray(e) && e && t + n !== 0 ? e.slice(t, n + 1) : e;
}
function V(e) {
  return Number.isFinite(e);
}
function Es(e) {
  return typeof e == `number` && e > 0 && Number.isFinite(e);
}
function Ds(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Os(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Ds(Object(n), !0).forEach(function (t) {
          ks(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Ds(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function ks(e, t, n) {
  return (
    (t = As(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function As(e) {
  var t = js(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function js(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function H(e, t, n) {
  return I(e) || I(t)
    ? n
    : Yt(t)
      ? Vt(e, t, n)
      : typeof t == `function`
        ? t(e)
        : n;
}
var Ms = (e, t, n) => {
    if (t && n) {
      var r = n.width,
        i = n.height,
        a = t.align,
        o = t.verticalAlign,
        s = t.layout;
      if (
        (s === `vertical` || (s === `horizontal` && o === `middle`)) &&
        a !== `center` &&
        F(e[a])
      )
        return Os(Os({}, e), {}, { [a]: e[a] + (r || 0) });
      if (
        (s === `horizontal` || (s === `vertical` && a === `center`)) &&
        o !== `middle` &&
        F(e[o])
      )
        return Os(Os({}, e), {}, { [o]: e[o] + (i || 0) });
    }
    return e;
  },
  Ns = (e, t) =>
    (e === `horizontal` && t === `xAxis`) ||
    (e === `vertical` && t === `yAxis`) ||
    (e === `centric` && t === `angleAxis`) ||
    (e === `radial` && t === `radiusAxis`),
  Ps = (e, t, n, r) => {
    if (r) return e.map((e) => e.coordinate);
    var i,
      a,
      o = e.map(
        (e) => (
          e.coordinate === t && (i = !0),
          e.coordinate === n && (a = !0),
          e.coordinate
        ),
      );
    return (i || o.push(t), a || o.push(n), o);
  },
  Fs = (e, t, n) => {
    if (!e) return null;
    var r = e.duplicateDomain,
      i = e.type,
      a = e.range,
      o = e.scale,
      s = e.realScaleType,
      c = e.isCategorical,
      l = e.categoricalDomain,
      u = e.tickCount,
      d = e.ticks,
      f = e.niceTicks,
      p = e.axisType;
    if (!o) return null;
    var m = s === `scaleBand` && o.bandwidth ? o.bandwidth() / 2 : 2,
      h = (t || n) && i === `category` && o.bandwidth ? o.bandwidth() / m : 0;
    return (
      (h =
        p === `angleAxis` && a && a.length >= 2 ? Kt(a[0] - a[1]) * 2 * h : h),
      t && (d || f)
        ? (d || f || [])
            .map((e, t) => {
              var n = r ? r.indexOf(e) : e,
                i = o.map(n);
              return V(i)
                ? { coordinate: i + h, value: e, offset: h, index: t }
                : null;
            })
            .filter(rn)
        : c && l
          ? l
              .map((e, t) => {
                var n = o.map(e);
                return V(n)
                  ? { coordinate: n + h, value: e, index: t, offset: h }
                  : null;
              })
              .filter(rn)
          : o.ticks && !n && u != null
            ? o
                .ticks(u)
                .map((e, t) => {
                  var n = o.map(e);
                  return V(n)
                    ? { coordinate: n + h, value: e, index: t, offset: h }
                    : null;
                })
                .filter(rn)
            : o
                .domain()
                .map((e, t) => {
                  var n = o.map(e);
                  return V(n)
                    ? {
                        coordinate: n + h,
                        value: r ? r[e] : e,
                        index: t,
                        offset: h,
                      }
                    : null;
                })
                .filter(rn)
    );
  },
  Is = (e, t) => {
    if (!t || t.length !== 2 || !F(t[0]) || !F(t[1])) return e;
    var n = Math.min(t[0], t[1]),
      r = Math.max(t[0], t[1]),
      i = [e[0], e[1]];
    return (
      (!F(e[0]) || e[0] < n) && (i[0] = n),
      (!F(e[1]) || e[1] > r) && (i[1] = r),
      i[0] > r && (i[0] = r),
      i[1] < n && (i[1] = n),
      i
    );
  },
  Ls = {
    sign: (e) => {
      var t = e.length;
      if (!(t <= 0)) {
        var n = e[0]?.length;
        if (!(n == null || n <= 0))
          for (var r = 0; r < n; ++r)
            for (var i = 0, a = 0, o = 0; o < t; ++o) {
              var s = e[o]?.[r];
              if (s != null) {
                var c = s[1],
                  l = s[0],
                  u = qt(c) ? l : c;
                u >= 0
                  ? ((s[0] = i), (i += u), (s[1] = i))
                  : ((s[0] = a), (a += u), (s[1] = a));
              }
            }
      }
    },
    expand: Nt,
    none: Ot,
    silhouette: Pt,
    wiggle: Ft,
    positive: (e) => {
      var t = e.length;
      if (!(t <= 0)) {
        var n = e[0]?.length;
        if (!(n == null || n <= 0))
          for (var r = 0; r < n; ++r)
            for (var i = 0, a = 0; a < t; ++a) {
              var o = e[a]?.[r];
              if (o != null) {
                var s = qt(o[1]) ? o[0] : o[1];
                s >= 0
                  ? ((o[0] = i), (i += s), (o[1] = i))
                  : ((o[0] = 0), (o[1] = 0));
              }
            }
      }
    },
  },
  Rs = (e, t, n) => {
    var r = Ls[n] ?? Ot,
      i = Mt()
        .keys(t)
        .value((e, t) => Number(H(e, t, 0)))
        .order(kt)
        .offset(r)(e);
    return (
      i.forEach((n, r) => {
        n.forEach((n, i) => {
          var a = H(e[i], t[r], 0);
          Array.isArray(a) &&
            a.length === 2 &&
            F(a[0]) &&
            F(a[1]) &&
            ((n[0] = a[0]), (n[1] = a[1]));
        });
      }),
      i
    );
  };
function zs(e) {
  return e == null ? void 0 : String(e);
}
var Bs = (e) => {
    var t = e.axis,
      n = e.ticks,
      r = e.offset,
      i = e.bandSize,
      a = e.entry,
      o = e.index;
    if (t.type === `category`) return n[o] ? n[o].coordinate + r : null;
    var s = H(a, t.dataKey, t.scale.domain()[o]);
    if (I(s)) return null;
    var c = t.scale.map(s);
    return F(c) ? c - i / 2 + r : null;
  },
  Vs = (e) => {
    var t = e.numericAxis,
      n = t.scale.domain();
    if (t.type === `number`) {
      var r = Math.min(n[0], n[1]),
        i = Math.max(n[0], n[1]);
      return r <= 0 && i >= 0 ? 0 : i < 0 ? i : r;
    }
    return n[0];
  },
  Hs = (e) => {
    var t = e.flat(2).filter(F);
    return [Math.min(...t), Math.max(...t)];
  },
  Us = (e) => [e[0] === 1 / 0 ? 0 : e[0], e[1] === -1 / 0 ? 0 : e[1]],
  Ws = (e, t, n) => {
    if (!(e == null || Object.keys(e).length === 0))
      return Us(
        Object.keys(e).reduce(
          (r, i) => {
            var a = e[i];
            if (!a) return r;
            var o = a.stackedData.reduce(
              (e, r) => {
                var i = Hs(Ts(r, t, n));
                return !V(i[0]) || !V(i[1])
                  ? e
                  : [Math.min(e[0], i[0]), Math.max(e[1], i[1])];
              },
              [1 / 0, -1 / 0],
            );
            return [Math.min(o[0], r[0]), Math.max(o[1], r[1])];
          },
          [1 / 0, -1 / 0],
        ),
      );
  },
  Gs = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  Ks = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  qs = (e, t, n) => {
    if (e && e.scale && e.scale.bandwidth) {
      var r = e.scale.bandwidth();
      if (!n || r > 0) return r;
    }
    if (e && t && t.length >= 2) {
      for (
        var i = di(t, (e) => e.coordinate), a = 1 / 0, o = 1, s = i.length;
        o < s;
        o++
      ) {
        var c = i[o],
          l = i[o - 1];
        a = Math.min((c?.coordinate || 0) - (l?.coordinate || 0), a);
      }
      return a === 1 / 0 ? 0 : a;
    }
    return n ? void 0 : 0;
  };
function Js(e) {
  var t = e.tooltipEntrySettings,
    n = e.dataKey,
    r = e.payload,
    i = e.value,
    a = e.name;
  return Os(Os({}, t), {}, { dataKey: n, payload: r, value: i, name: a });
}
function Ys(e, t) {
  if (e != null) return String(e);
  if (typeof t == `string`) return t;
}
var Xs = (e, t) => {
    if (t === `horizontal`) return e.relativeX;
    if (t === `vertical`) return e.relativeY;
  },
  Zs = (e, t) => (t === `centric` ? e.angle : e.radius),
  Qs = (e) => e.layout.width,
  $s = (e) => e.layout.height,
  ec = (e) => e.layout.scale,
  tc = (e) => e.layout.margin,
  nc = T(
    (e) => e.cartesianAxis.xAxis,
    (e) => Object.values(e),
  ),
  rc = T(
    (e) => e.cartesianAxis.yAxis,
    (e) => Object.values(e),
  ),
  ic = `data-recharts-item-index`;
function ac(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function oc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? ac(Object(n), !0).forEach(function (t) {
          sc(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ac(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function sc(e, t, n) {
  return (
    (t = cc(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function cc(e) {
  var t = lc(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function lc(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var uc = (e) => e.brush.height;
function dc(e) {
  return rc(e).reduce(
    (e, t) =>
      t.orientation === `left` && !t.mirror && !t.hide
        ? e + (typeof t.width == `number` ? t.width : 60)
        : e,
    0,
  );
}
function fc(e) {
  return rc(e).reduce(
    (e, t) =>
      t.orientation === `right` && !t.mirror && !t.hide
        ? e + (typeof t.width == `number` ? t.width : 60)
        : e,
    0,
  );
}
function pc(e) {
  return nc(e).reduce(
    (e, t) =>
      t.orientation === `top` && !t.mirror && !t.hide ? e + t.height : e,
    0,
  );
}
function mc(e) {
  return nc(e).reduce(
    (e, t) =>
      t.orientation === `bottom` && !t.mirror && !t.hide ? e + t.height : e,
    0,
  );
}
var U = T(
    [Qs, $s, tc, uc, dc, fc, pc, mc, fi, pi],
    (e, t, n, r, i, a, o, s, c, l) => {
      var u = { left: (n.left || 0) + i, right: (n.right || 0) + a },
        d = oc(
          oc({}, { top: (n.top || 0) + o, bottom: (n.bottom || 0) + s }),
          u,
        ),
        f = d.bottom;
      ((d.bottom += r), (d = Ms(d, c, l)));
      var p = e - d.left - d.right,
        m = t - d.top - d.bottom;
      return oc(
        oc({ brushBottom: f }, d),
        {},
        { width: Math.max(p, 0), height: Math.max(m, 0) },
      );
    },
  ),
  hc = T(U, (e) => ({ x: e.left, y: e.top, width: e.width, height: e.height })),
  gc = T(Qs, $s, (e, t) => ({ x: 0, y: 0, width: e, height: t })),
  _c = (0, O.createContext)(null),
  vc = () => (0, O.useContext)(_c) != null,
  yc = (e) => e.brush,
  bc = T([yc, U, tc], (e, t, n) => ({
    height: e.height,
    x: F(e.x) ? e.x : t.left,
    y: F(e.y) ? e.y : t.top + t.height + t.brushBottom - (n?.bottom || 0),
    width: F(e.width) ? e.width : t.width,
  }));
function xc(e, t, { signal: n, edges: r } = {}) {
  let i,
    a = null,
    o = r != null && r.includes(`leading`),
    s = r == null || r.includes(`trailing`),
    c = () => {
      a !== null && (e.apply(i, a), (i = void 0), (a = null));
    },
    l = () => {
      (s && c(), p());
    },
    u = null,
    d = () => {
      (u != null && clearTimeout(u),
        (u = setTimeout(() => {
          ((u = null), l());
        }, t)));
    },
    f = () => {
      u !== null && (clearTimeout(u), (u = null));
    },
    p = () => {
      (f(), (i = void 0), (a = null));
    },
    m = () => {
      c();
    },
    h = function (...e) {
      if (n?.aborted) return;
      ((i = this), (a = e));
      let t = u == null;
      (d(), o && t && c());
    };
  return (
    (h.schedule = d),
    (h.cancel = p),
    (h.flush = m),
    n?.addEventListener(`abort`, p, { once: !0 }),
    h
  );
}
function Sc(e, t = 0, n = {}) {
  typeof n != `object` && (n = {});
  let { leading: r = !1, trailing: i = !0, maxWait: a } = n,
    o = [, ,];
  (r && (o[0] = `leading`), i && (o[1] = `trailing`));
  let s,
    c = null,
    l = xc(
      function (...t) {
        ((s = e.apply(this, t)), (c = null));
      },
      t,
      { edges: o },
    ),
    u = function (...t) {
      return a != null && (c === null && (c = Date.now()), Date.now() - c >= a)
        ? ((s = e.apply(this, t)),
          (c = Date.now()),
          l.cancel(),
          l.schedule(),
          s)
        : (l.apply(this, t), s);
    };
  return ((u.cancel = l.cancel), (u.flush = () => (l.flush(), s)), u);
}
function Cc(e, t = 0, n = {}) {
  let { leading: r = !0, trailing: i = !0 } = n;
  return Sc(e, t, { leading: r, maxWait: t, trailing: i });
}
var wc = function (e, t) {
    var n = [...arguments].slice(2);
    if (
      typeof console < `u` &&
      console.warn &&
      (t === void 0 &&
        console.warn(`LogUtils requires an error message argument`),
      !e)
    )
      if (t === void 0)
        console.warn(
          `Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.`,
        );
      else {
        var r = 0;
        console.warn(t.replace(/%s/g, () => n[r++]));
      }
  },
  Tc = {
    width: `100%`,
    height: `100%`,
    debounce: 0,
    minWidth: 0,
    initialDimension: { width: -1, height: -1 },
  },
  Ec = (e, t, n) => {
    var r = n.width,
      i = r === void 0 ? Tc.width : r,
      a = n.height,
      o = a === void 0 ? Tc.height : a,
      s = n.aspect,
      c = n.maxHeight,
      l = Jt(i) ? e : Number(i),
      u = Jt(o) ? t : Number(o);
    return (
      s &&
        s > 0 &&
        (l ? (u = l / s) : u && (l = u * s),
        c && u != null && u > c && (u = c)),
      { calculatedWidth: l, calculatedHeight: u }
    );
  },
  Dc = { width: 0, height: 0, overflow: `visible` },
  Oc = { width: 0, overflowX: `visible` },
  kc = { height: 0, overflowY: `visible` },
  Ac = {},
  jc = (e) => {
    var t = e.width,
      n = e.height,
      r = Jt(t),
      i = Jt(n);
    return r && i ? Dc : r ? Oc : i ? kc : Ac;
  };
function Mc(e) {
  var t = e.width,
    n = e.height,
    r = e.aspect,
    i = t,
    a = n;
  return (
    i === void 0 && a === void 0
      ? ((i = Tc.width), (a = Tc.height))
      : i === void 0
        ? (i = r && r > 0 ? void 0 : Tc.width)
        : a === void 0 && (a = r && r > 0 ? void 0 : Tc.height),
    { width: i, height: a }
  );
}
var Nc = [
  `aspect`,
  `initialDimension`,
  `width`,
  `height`,
  `minWidth`,
  `minHeight`,
  `maxHeight`,
  `children`,
  `debounce`,
  `id`,
  `className`,
  `onResize`,
  `style`,
];
function Pc() {
  return (
    (Pc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Pc.apply(null, arguments)
  );
}
function Fc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Ic(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Fc(Object(n), !0).forEach(function (t) {
          Lc(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Fc(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Lc(e, t, n) {
  return (
    (t = Rc(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Rc(e) {
  var t = zc(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function zc(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Bc(e, t) {
  return Gc(e) || Wc(e, t) || Hc(e, t) || Vc();
}
function Vc() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Hc(e, t) {
  if (e) {
    if (typeof e == `string`) return Uc(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? Uc(e, t)
          : void 0
    );
  }
}
function Uc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Wc(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n != null) {
    var r,
      i,
      a,
      o,
      s = [],
      c = !0,
      l = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        c = !1;
      } else
        for (
          ;
          !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t);
          c = !0
        );
    } catch (e) {
      ((l = !0), (i = e));
    } finally {
      try {
        if (!c && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return s;
  }
}
function Gc(e) {
  if (Array.isArray(e)) return e;
}
function Kc(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = qc(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function qc(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var Jc = (0, O.createContext)(Tc.initialDimension);
function Yc(e) {
  return Es(e.width) && Es(e.height);
}
function Xc(e) {
  var t = e.children,
    n = e.width,
    r = e.height,
    i = (0, O.useMemo)(() => ({ width: n, height: r }), [n, r]);
  return Yc(i) ? O.createElement(Jc.Provider, { value: i }, t) : null;
}
var Zc = () => (0, O.useContext)(Jc),
  Qc = (0, O.forwardRef)((t, n) => {
    var r = t.aspect,
      i = t.initialDimension,
      a = i === void 0 ? Tc.initialDimension : i,
      o = t.width,
      s = t.height,
      c = t.minWidth,
      l = c === void 0 ? Tc.minWidth : c,
      u = t.minHeight,
      d = t.maxHeight,
      f = t.children,
      p = t.debounce,
      m = p === void 0 ? Tc.debounce : p,
      h = t.id,
      g = t.className,
      _ = t.onResize,
      v = t.style,
      y = v === void 0 ? {} : v,
      b = Kc(t, Nc),
      x = (0, O.useRef)(null),
      S = (0, O.useRef)();
    ((S.current = _), (0, O.useImperativeHandle)(n, () => x.current));
    var C = Bc(
        (0, O.useState)({ containerWidth: a.width, containerHeight: a.height }),
        2,
      ),
      w = C[0],
      T = C[1],
      E = (0, O.useCallback)((e, t) => {
        T((n) => {
          var r = Math.round(e),
            i = Math.round(t);
          return n.containerWidth === r && n.containerHeight === i
            ? n
            : { containerWidth: r, containerHeight: i };
        });
      }, []);
    (0, O.useEffect)(() => {
      if (x.current == null || typeof ResizeObserver > `u`) return an;
      var e = (e) => {
        var t,
          n = e[0];
        if (n != null) {
          var r = n.contentRect,
            i = r.width,
            a = r.height;
          (E(i, a), (t = S.current) == null || t.call(S, i, a));
        }
      };
      m > 0 && (e = Cc(e, m, { trailing: !0, leading: !1 }));
      var t = new ResizeObserver(e),
        n = x.current.getBoundingClientRect(),
        r = n.width,
        i = n.height;
      return (
        E(r, i),
        t.observe(x.current),
        () => {
          t.disconnect();
        }
      );
    }, [E, m]);
    var D = w.containerWidth,
      k = w.containerHeight;
    wc(!r || r > 0, `The aspect(%s) must be greater than zero.`, r);
    var A = Ec(D, k, { width: o, height: s, aspect: r, maxHeight: d }),
      j = A.calculatedWidth,
      M = A.calculatedHeight;
    return (
      wc(
        D < 0 || k < 0 || (j != null && j > 0) || (M != null && M > 0),
        `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`,
        j,
        M,
        o,
        s,
        l,
        u,
        r,
      ),
      O.createElement(
        `div`,
        Pc(
          {
            id: h ? `${h}` : void 0,
            className: e(`recharts-responsive-container`, g),
            style: Ic(
              Ic({}, y),
              {},
              { width: o, height: s, minWidth: l, minHeight: u, maxHeight: d },
            ),
            ref: x,
          },
          b,
        ),
        O.createElement(
          `div`,
          { style: jc({ width: o, height: s }) },
          O.createElement(Xc, { width: j, height: M }, f),
        ),
      )
    );
  }),
  $c = (0, O.forwardRef)((e, t) => {
    var n = Zc();
    if (Es(n.width) && Es(n.height)) return e.children;
    var r = Mc({ width: e.width, height: e.height, aspect: e.aspect }),
      i = r.width,
      a = r.height,
      o = Ec(void 0, void 0, {
        width: i,
        height: a,
        aspect: e.aspect,
        maxHeight: e.maxHeight,
      }),
      s = o.calculatedWidth,
      c = o.calculatedHeight;
    return F(s) && F(c)
      ? O.createElement(Xc, { width: s, height: c }, e.children)
      : O.createElement(Qc, Pc({}, e, { width: i, height: a, ref: t }));
  });
function el(e) {
  if (e)
    return {
      x: e.x,
      y: e.y,
      upperWidth: `upperWidth` in e ? e.upperWidth : e.width,
      lowerWidth: `lowerWidth` in e ? e.lowerWidth : e.width,
      width: e.width,
      height: e.height,
    };
}
var tl = () => {
    var e = vc(),
      t = R(hc),
      n = R(bc),
      r = R(yc)?.padding;
    return !e || !n || !r
      ? t
      : {
          width: n.width - r.left - r.right,
          height: n.height - r.top - r.bottom,
          x: r.left,
          y: r.top,
        };
  },
  nl = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: 0,
    height: 0,
    brushBottom: 0,
  },
  rl = () => R(U) ?? nl,
  il = () => R(Qs),
  al = () => R($s),
  ol = () => R((e) => e.layout.margin),
  W = (e) => e.layout.layoutType,
  sl = () => R(W),
  cl = () => {
    var e = sl();
    if (e === `horizontal` || e === `vertical`) return e;
  },
  ll = (e) => {
    var t = e.layout.layoutType;
    if (t === `centric` || t === `radial`) return t;
  },
  ul = () => sl() !== void 0,
  dl = (e) => {
    var t = L(),
      n = vc(),
      r = e.width,
      i = e.height,
      a = Zc(),
      o = r,
      s = i;
    return (
      a && ((o = a.width > 0 ? a.width : r), (s = a.height > 0 ? a.height : i)),
      (0, O.useEffect)(() => {
        !n && Es(o) && Es(s) && t(Ss({ width: o, height: s }));
      }, [t, n, o, s]),
      null
    );
  },
  fl = Ao({
    name: `legend`,
    initialState: {
      settings: {
        layout: `horizontal`,
        align: `center`,
        verticalAlign: `bottom`,
        itemSorter: `value`,
      },
      size: { width: 0, height: 0 },
      payload: [],
    },
    reducers: {
      setLegendSize(e, t) {
        ((e.size.width = t.payload.width), (e.size.height = t.payload.height));
      },
      setLegendSettings(e, t) {
        ((e.settings.align = t.payload.align),
          (e.settings.layout = t.payload.layout),
          (e.settings.verticalAlign = t.payload.verticalAlign),
          (e.settings.itemSorter = t.payload.itemSorter));
      },
      addLegendPayload: {
        reducer(e, t) {
          e.payload.push(z(t.payload));
        },
        prepare: B(),
      },
      replaceLegendPayload: {
        reducer(e, t) {
          var n = t.payload,
            r = n.prev,
            i = n.next,
            a = to(e).payload.indexOf(z(r));
          a > -1 && (e.payload[a] = z(i));
        },
        prepare: B(),
      },
      removeLegendPayload: {
        reducer(e, t) {
          var n = to(e).payload.indexOf(z(t.payload));
          n > -1 && e.payload.splice(n, 1);
        },
        prepare: B(),
      },
    },
  }),
  pl = fl.actions,
  ml = pl.setLegendSize,
  hl = pl.setLegendSettings,
  gl = pl.addLegendPayload,
  _l = pl.replaceLegendPayload,
  vl = pl.removeLegendPayload,
  yl = fl.reducer,
  bl = o((e) => {
    var t = r();
    (t.useSyncExternalStore, t.useRef, t.useEffect, t.useMemo, t.useDebugValue);
  });
o((e, t) => {
  t.exports = bl();
})();
function xl(e) {
  e();
}
function Sl() {
  let e = null,
    t = null;
  return {
    clear() {
      ((e = null), (t = null));
    },
    notify() {
      xl(() => {
        let t = e;
        for (; t;) (t.callback(), (t = t.next));
      });
    },
    get() {
      let t = [],
        n = e;
      for (; n;) (t.push(n), (n = n.next));
      return t;
    },
    subscribe(n) {
      let r = !0,
        i = (t = { callback: n, next: null, prev: t });
      return (
        i.prev ? (i.prev.next = i) : (e = i),
        function () {
          !r ||
            e === null ||
            ((r = !1),
            i.next ? (i.next.prev = i.prev) : (t = i.prev),
            i.prev ? (i.prev.next = i.next) : (e = i.next));
        }
      );
    },
  };
}
var Cl = { notify() {}, get: () => [] };
function wl(e, t) {
  let n,
    r = Cl,
    i = 0,
    a = !1;
  function o(e) {
    u();
    let t = r.subscribe(e),
      n = !1;
    return () => {
      n || ((n = !0), t(), d());
    };
  }
  function s() {
    r.notify();
  }
  function c() {
    m.onStateChange && m.onStateChange();
  }
  function l() {
    return a;
  }
  function u() {
    (i++, n || ((n = t ? t.addNestedSub(c) : e.subscribe(c)), (r = Sl())));
  }
  function d() {
    (i--, n && i === 0 && (n(), (n = void 0), r.clear(), (r = Cl)));
  }
  function f() {
    a || ((a = !0), u());
  }
  function p() {
    a && ((a = !1), d());
  }
  let m = {
    addNestedSub: o,
    notifyNestedSubs: s,
    handleChangeWrapper: c,
    isSubscribed: l,
    trySubscribe: f,
    tryUnsubscribe: p,
    getListeners: () => r,
  };
  return m;
}
var Tl =
    typeof window < `u` &&
    window.document !== void 0 &&
    window.document.createElement !== void 0,
  El = typeof navigator < `u` && navigator.product === `ReactNative`,
  Dl = Tl || El ? O.useLayoutEffect : O.useEffect;
function Ol(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e == 1 / t : e !== e && t !== t;
}
function kl(e, t) {
  if (Ol(e, t)) return !0;
  if (typeof e != `object` || !e || typeof t != `object` || !t) return !1;
  let n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (let r = 0; r < n.length; r++)
    if (!Object.prototype.hasOwnProperty.call(t, n[r]) || !Ol(e[n[r]], t[n[r]]))
      return !1;
  return !0;
}
var Al = Symbol.for(`react-redux-context`),
  jl = typeof globalThis < `u` ? globalThis : {};
function Ml() {
  if (!O.createContext) return {};
  let e = (jl[Al] ??= new Map()),
    t = e.get(O.createContext);
  return (t || ((t = O.createContext(null)), e.set(O.createContext, t)), t);
}
var Nl = Ml();
function Pl(e) {
  let { children: t, context: n, serverState: r, store: i } = e,
    a = O.useMemo(() => {
      let e = wl(i);
      return {
        store: i,
        subscription: e,
        getServerState: r ? () => r : void 0,
      };
    }, [i, r]),
    o = O.useMemo(() => i.getState(), [i]);
  Dl(() => {
    let { subscription: e } = a;
    return (
      (e.onStateChange = e.notifyNestedSubs),
      e.trySubscribe(),
      o !== i.getState() && e.notifyNestedSubs(),
      () => {
        (e.tryUnsubscribe(), (e.onStateChange = void 0));
      }
    );
  }, [a, o]);
  let s = n || Nl;
  return O.createElement(s.Provider, { value: a }, t);
}
var Fl = Pl,
  Il = new Set([
    `axisLine`,
    `tickLine`,
    `activeBar`,
    `activeDot`,
    `activeLabel`,
    `activeShape`,
    `allowEscapeViewBox`,
    `background`,
    `cursor`,
    `dot`,
    `label`,
    `line`,
    `margin`,
    `padding`,
    `position`,
    `shape`,
    `style`,
    `tick`,
    `wrapperStyle`,
    `radius`,
    `throttledEvents`,
  ]);
function Ll(e, t) {
  return e == null && t == null
    ? !0
    : typeof e == `number` && typeof t == `number`
      ? e === t || (e !== e && t !== t)
      : e === t;
}
function Rl(e, t) {
  for (var n of new Set([...Object.keys(e), ...Object.keys(t)]))
    if (Il.has(n)) {
      if (e[n] == null && t[n] == null) continue;
      if (!kl(e[n], t[n])) return !1;
    } else if (!Ll(e[n], t[n])) return !1;
  return !0;
}
var zl = i(l()),
  Bl = [`contextPayload`];
function Vl() {
  return (
    (Vl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Vl.apply(null, arguments)
  );
}
function Hl(e, t) {
  return ql(e) || Kl(e, t) || Wl(e, t) || Ul();
}
function Ul() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Wl(e, t) {
  if (e) {
    if (typeof e == `string`) return Gl(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? Gl(e, t)
          : void 0
    );
  }
}
function Gl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Kl(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n != null) {
    var r,
      i,
      a,
      o,
      s = [],
      c = !0,
      l = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        c = !1;
      } else
        for (
          ;
          !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t);
          c = !0
        );
    } catch (e) {
      ((l = !0), (i = e));
    } finally {
      try {
        if (!c && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return s;
  }
}
function ql(e) {
  if (Array.isArray(e)) return e;
}
function Jl(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Yl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Jl(Object(n), !0).forEach(function (t) {
          Xl(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Jl(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Xl(e, t, n) {
  return (
    (t = Zl(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Zl(e) {
  var t = Ql(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Ql(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function $l(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = eu(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function eu(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function tu(e) {
  return e.value;
}
function nu(e) {
  var t = e.contextPayload,
    n = $l(e, Bl),
    r = Yr(t, e.payloadUniqBy, tu),
    i = Yl(Yl({}, n), {}, { payload: r });
  return O.isValidElement(e.content)
    ? O.cloneElement(e.content, i)
    : typeof e.content == `function`
      ? O.createElement(e.content, i)
      : O.createElement(Hn, i);
}
function ru(e, t, n, r, i, a) {
  var o = t.layout,
    s = t.align,
    c = t.verticalAlign,
    l,
    u;
  return (
    (!e ||
      ((e.left === void 0 || e.left === null) &&
        (e.right === void 0 || e.right === null))) &&
      (l =
        s === `center` && o === `vertical`
          ? { left: ((r || 0) - a.width) / 2 }
          : s === `right`
            ? { right: (n && n.right) || 0 }
            : { left: (n && n.left) || 0 }),
    (!e ||
      ((e.top === void 0 || e.top === null) &&
        (e.bottom === void 0 || e.bottom === null))) &&
      (u =
        c === `middle`
          ? { top: ((i || 0) - a.height) / 2 }
          : c === `bottom`
            ? { bottom: (n && n.bottom) || 0 }
            : { top: (n && n.top) || 0 }),
    Yl(Yl({}, l), u)
  );
}
function iu(e) {
  var t = e.align,
    n = e.layout,
    r = e.verticalAlign,
    i = e.itemSorter,
    a = L();
  return (
    (0, O.useLayoutEffect)(() => {
      a(hl({ align: t, layout: n, verticalAlign: r, itemSorter: i }));
    }, [a, t, n, r, i]),
    null
  );
}
function au(e) {
  var t = e.width,
    n = e.height,
    r = L();
  return (
    (0, O.useLayoutEffect)(() => {
      r(ml({ width: t, height: n }));
    }, [r, t, n]),
    (0, O.useLayoutEffect)(
      () => () => {
        r(ml({ width: 0, height: 0 }));
      },
      [r],
    ),
    null
  );
}
function ou(e, t, n, r) {
  return e === `vertical` && t != null
    ? { height: t }
    : e === `horizontal`
      ? { width: n || r }
      : null;
}
var su = {
  align: `center`,
  iconSize: 14,
  inactiveColor: `#ccc`,
  itemSorter: `value`,
  labelStyle: {},
  layout: `horizontal`,
  verticalAlign: `bottom`,
};
function cu(e) {
  var t = An(e, su),
    n = hi(),
    r = fe(),
    i = ol(),
    a = t.width,
    o = t.height,
    s = t.wrapperStyle,
    c = t.portal,
    l = Hl(Ti([n]), 2),
    u = l[0],
    d = l[1],
    f = il(),
    p = al();
  if (f == null || p == null) return null;
  var m = f - (i?.left || 0) - (i?.right || 0),
    h = ou(t.layout, o, a, m),
    g = c
      ? s
      : Yl(
          Yl(
            {
              position: `absolute`,
              width: h?.width || a || `auto`,
              height: h?.height || o || `auto`,
            },
            ru(s, t, i, f, p, u),
          ),
          s,
        ),
    _ = c ?? r;
  return _ == null || n == null
    ? null
    : (0, zl.createPortal)(
        O.createElement(
          `div`,
          { className: `recharts-legend-wrapper`, style: g, ref: d },
          O.createElement(iu, {
            layout: t.layout,
            align: t.align,
            verticalAlign: t.verticalAlign,
            itemSorter: t.itemSorter,
          }),
          !c && O.createElement(au, { width: u.width, height: u.height }),
          O.createElement(
            nu,
            Vl({}, t, h, {
              margin: i,
              chartWidth: f,
              chartHeight: p,
              contextPayload: n,
            }),
          ),
        ),
        _,
      );
}
var lu = O.memo(cu, Rl);
lu.displayName = `Legend`;
function uu() {
  return (
    (uu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    uu.apply(null, arguments)
  );
}
function du(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function fu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? du(Object(n), !0).forEach(function (t) {
          pu(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : du(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function pu(e, t, n) {
  return (
    (t = mu(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function mu(e) {
  var t = hu(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function hu(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function gu(e, t) {
  return xu(e) || bu(e, t) || vu(e, t) || _u();
}
function _u() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vu(e, t) {
  if (e) {
    if (typeof e == `string`) return yu(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? yu(e, t)
          : void 0
    );
  }
}
function yu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function bu(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n != null) {
    var r,
      i,
      a,
      o,
      s = [],
      c = !0,
      l = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        c = !1;
      } else
        for (
          ;
          !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t);
          c = !0
        );
    } catch (e) {
      ((l = !0), (i = e));
    } finally {
      try {
        if (!c && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return s;
  }
}
function xu(e) {
  if (Array.isArray(e)) return e;
}
function Su(e) {
  return Array.isArray(e) && Yt(e[0]) && Yt(e[1]) ? e.join(` ~ `) : e;
}
var Cu = {
  separator: ` : `,
  contentStyle: {
    margin: 0,
    padding: 10,
    backgroundColor: `#fff`,
    border: `1px solid #ccc`,
    whiteSpace: `nowrap`,
  },
  itemStyle: {
    display: `block`,
    paddingTop: 4,
    paddingBottom: 4,
    color: `#000`,
  },
  labelStyle: {},
  accessibilityLayer: !1,
};
function wu(e, t) {
  return t == null ? e : di(e, t);
}
var Tu = (t) => {
    var n = t.separator,
      r = n === void 0 ? Cu.separator : n,
      i = t.contentStyle,
      a = t.itemStyle,
      o = t.labelStyle,
      s = o === void 0 ? Cu.labelStyle : o,
      c = t.payload,
      l = t.formatter,
      u = t.itemSorter,
      d = t.wrapperClassName,
      f = t.labelClassName,
      p = t.label,
      m = t.labelFormatter,
      h = t.accessibilityLayer,
      g = h === void 0 ? Cu.accessibilityLayer : h,
      _ = () => {
        if (c && c.length) {
          var e = { padding: 0, margin: 0 },
            t = wu(c, u).map((e, t) => {
              if (!e || e.type === `none`) return null;
              var n = e.formatter || l || Su,
                i = e.value,
                o = e.name,
                s = i,
                u = o;
              if (n) {
                var d = n(i, o, e, t, c);
                if (Array.isArray(d)) {
                  var f = gu(d, 2);
                  ((s = f[0]), (u = f[1]));
                } else if (d != null) s = d;
                else return null;
              }
              var p = fu(
                fu({}, Cu.itemStyle),
                {},
                { color: e.color || Cu.itemStyle.color },
                a,
              );
              return O.createElement(
                `li`,
                {
                  className: `recharts-tooltip-item`,
                  key: `tooltip-item-${t}`,
                  style: p,
                },
                Yt(u)
                  ? O.createElement(
                      `span`,
                      { className: `recharts-tooltip-item-name` },
                      u,
                    )
                  : null,
                Yt(u)
                  ? O.createElement(
                      `span`,
                      { className: `recharts-tooltip-item-separator` },
                      r,
                    )
                  : null,
                O.createElement(
                  `span`,
                  { className: `recharts-tooltip-item-value` },
                  s,
                ),
                O.createElement(
                  `span`,
                  { className: `recharts-tooltip-item-unit` },
                  e.unit || ``,
                ),
              );
            });
          return O.createElement(
            `ul`,
            { className: `recharts-tooltip-item-list`, style: e },
            t,
          );
        }
        return null;
      },
      v = fu(fu({}, Cu.contentStyle), i),
      y = fu({ margin: 0 }, s),
      b = !I(p),
      x = b ? p : ``,
      S = e(`recharts-default-tooltip`, d),
      C = e(`recharts-tooltip-label`, f);
    b && m && c != null && (x = m(p, c));
    var w = g ? { role: `status`, "aria-live": `assertive` } : {};
    return O.createElement(
      `div`,
      uu({ className: S, style: v }, w),
      O.createElement(
        `p`,
        { className: C, style: y },
        O.isValidElement(x) ? x : `${x}`,
      ),
      _(),
    );
  },
  Eu = `recharts-tooltip-wrapper`,
  Du = { visibility: `hidden` };
function Ou(t) {
  var n = t.coordinate,
    r = t.translateX,
    i = t.translateY;
  return e(Eu, {
    [`${Eu}-right`]: F(r) && n && F(n.x) && r >= n.x,
    [`${Eu}-left`]: F(r) && n && F(n.x) && r < n.x,
    [`${Eu}-bottom`]: F(i) && n && F(n.y) && i >= n.y,
    [`${Eu}-top`]: F(i) && n && F(n.y) && i < n.y,
  });
}
function ku(e) {
  var t = e.allowEscapeViewBox,
    n = e.coordinate,
    r = e.key,
    i = e.offset,
    a = e.position,
    o = e.reverseDirection,
    s = e.tooltipDimension,
    c = e.viewBox,
    l = e.viewBoxDimension;
  if (a && F(a[r])) return a[r];
  var u = n[r] - s - (i > 0 ? i : 0),
    d = n[r] + i;
  if (t[r]) return o[r] ? u : d;
  var f = c[r];
  return f == null
    ? 0
    : o[r]
      ? Math.max(u < f ? d : u, f)
      : l == null
        ? 0
        : d + s > f + l
          ? Math.max(u, f)
          : Math.max(d, f);
}
function Au(e) {
  var t = e.translateX,
    n = e.translateY;
  return {
    transform: e.useTranslate3d
      ? `translate3d(${t}px, ${n}px, 0)`
      : `translate(${t}px, ${n}px)`,
  };
}
function ju(e) {
  var t = e.allowEscapeViewBox,
    n = e.coordinate,
    r = e.offsetTop,
    i = e.offsetLeft,
    a = e.position,
    o = e.reverseDirection,
    s = e.tooltipBox,
    c = e.useTranslate3d,
    l = e.viewBox,
    u,
    d,
    f;
  return (
    s.height > 0 && s.width > 0 && n
      ? ((d = ku({
          allowEscapeViewBox: t,
          coordinate: n,
          key: `x`,
          offset: i,
          position: a,
          reverseDirection: o,
          tooltipDimension: s.width,
          viewBox: l,
          viewBoxDimension: l.width,
        })),
        (f = ku({
          allowEscapeViewBox: t,
          coordinate: n,
          key: `y`,
          offset: r,
          position: a,
          reverseDirection: o,
          tooltipDimension: s.height,
          viewBox: l,
          viewBoxDimension: l.height,
        })),
        (u = Au({ translateX: d, translateY: f, useTranslate3d: c })))
      : (u = Du),
    {
      cssProperties: u,
      cssClasses: Ou({ translateX: d, translateY: f, coordinate: n }),
    }
  );
}
var Mu = {
  devToolsEnabled: !0,
  isSsr: !(
    typeof window < `u` &&
    window.document &&
    window.document.createElement &&
    window.setTimeout
  ),
};
function Nu(e, t) {
  return Ru(e) || Lu(e, t) || Fu(e, t) || Pu();
}
function Pu() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Fu(e, t) {
  if (e) {
    if (typeof e == `string`) return Iu(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? Iu(e, t)
          : void 0
    );
  }
}
function Iu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Lu(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n != null) {
    var r,
      i,
      a,
      o,
      s = [],
      c = !0,
      l = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        c = !1;
      } else
        for (
          ;
          !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t);
          c = !0
        );
    } catch (e) {
      ((l = !0), (i = e));
    } finally {
      try {
        if (!c && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return s;
  }
}
function Ru(e) {
  if (Array.isArray(e)) return e;
}
function zu() {
  var e = Nu(
      (0, O.useState)(() =>
        Mu.isSsr || !window.matchMedia
          ? !1
          : window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,
      ),
      2,
    ),
    t = e[0],
    n = e[1];
  return (
    (0, O.useEffect)(() => {
      if (window.matchMedia) {
        var e = window.matchMedia(`(prefers-reduced-motion: reduce)`),
          t = () => {
            n(e.matches);
          };
        return (
          e.addEventListener(`change`, t),
          () => {
            e.removeEventListener(`change`, t);
          }
        );
      }
    }, []),
    t
  );
}
function Bu(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Vu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Bu(Object(n), !0).forEach(function (t) {
          Hu(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Bu(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Hu(e, t, n) {
  return (
    (t = Uu(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Uu(e) {
  var t = Wu(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Wu(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Gu(e, t) {
  return Xu(e) || Yu(e, t) || qu(e, t) || Ku();
}
function Ku() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function qu(e, t) {
  if (e) {
    if (typeof e == `string`) return Ju(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? Ju(e, t)
          : void 0
    );
  }
}
function Ju(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Yu(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n != null) {
    var r,
      i,
      a,
      o,
      s = [],
      c = !0,
      l = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        c = !1;
      } else
        for (
          ;
          !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t);
          c = !0
        );
    } catch (e) {
      ((l = !0), (i = e));
    } finally {
      try {
        if (!c && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return s;
  }
}
function Xu(e) {
  if (Array.isArray(e)) return e;
}
function Zu(e) {
  if (
    !(e.prefersReducedMotion && e.isAnimationActive === `auto`) &&
    e.isAnimationActive &&
    e.active
  ) {
    var t = typeof e.animationEasing == `string` ? e.animationEasing : `ease`;
    return `transform ${e.animationDuration}ms ${t}`;
  }
}
function Qu(e) {
  var t = zu(),
    n = Gu(
      O.useState(() => ({
        dismissed: !1,
        dismissedAtCoordinate: { x: 0, y: 0 },
      })),
      2,
    ),
    r = n[0],
    i = n[1];
  (O.useEffect(() => {
    var t = (t) => {
      t.key === `Escape` &&
        i({
          dismissed: !0,
          dismissedAtCoordinate: {
            x: e.coordinate?.x ?? 0,
            y: e.coordinate?.y ?? 0,
          },
        });
    };
    return (
      document.addEventListener(`keydown`, t),
      () => {
        document.removeEventListener(`keydown`, t);
      }
    );
  }, [e.coordinate?.x, e.coordinate?.y]),
    r.dismissed &&
      ((e.coordinate?.x ?? 0) !== r.dismissedAtCoordinate.x ||
        (e.coordinate?.y ?? 0) !== r.dismissedAtCoordinate.y) &&
      i(Vu(Vu({}, r), {}, { dismissed: !1 })));
  var a = ju({
      allowEscapeViewBox: e.allowEscapeViewBox,
      coordinate: e.coordinate,
      offsetLeft: typeof e.offset == `number` ? e.offset : e.offset.x,
      offsetTop: typeof e.offset == `number` ? e.offset : e.offset.y,
      position: e.position,
      reverseDirection: e.reverseDirection,
      tooltipBox: {
        height: e.lastBoundingBox.height,
        width: e.lastBoundingBox.width,
      },
      useTranslate3d: e.useTranslate3d,
      viewBox: e.viewBox,
    }),
    o = a.cssClasses,
    s = a.cssProperties,
    c = Vu(
      Vu(
        {},
        e.hasPortalFromProps
          ? {}
          : Vu(
              Vu(
                {
                  transition: Zu({
                    prefersReducedMotion: t,
                    isAnimationActive: e.isAnimationActive,
                    active: e.active,
                    animationDuration: e.animationDuration,
                    animationEasing: e.animationEasing,
                  }),
                },
                s,
              ),
              {},
              { pointerEvents: `none`, position: `absolute`, top: 0, left: 0 },
            ),
      ),
      {},
      {
        visibility:
          !r.dismissed && e.active && e.hasPayload ? `visible` : `hidden`,
      },
      e.wrapperStyle,
    );
  return O.createElement(
    `div`,
    {
      xmlns: `http://www.w3.org/1999/xhtml`,
      tabIndex: -1,
      className: o,
      style: c,
      ref: e.innerRef,
    },
    e.children,
  );
}
var $u = O.memo(Qu),
  ed = () => R((e) => e.rootProps.accessibilityLayer) ?? !0;
function td() {
  return (
    (td = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    td.apply(null, arguments)
  );
}
function nd(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function rd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? nd(Object(n), !0).forEach(function (t) {
          id(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : nd(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function id(e, t, n) {
  return (
    (t = ad(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function ad(e) {
  var t = od(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function od(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var sd = {
    curveBasisClosed: st,
    curveBasisOpen: lt,
    curveBasis: at,
    curveBumpX: Fe,
    curveBumpY: Ie,
    curveLinearClosed: dt,
    curveLinear: ke,
    curveMonotoneX: yt,
    curveMonotoneY: bt,
    curveNatural: Ct,
    curveStep: Tt,
    curveStepAfter: Dt,
    curveStepBefore: Et,
  },
  cd = (e) => V(e.x) && V(e.y),
  ld = (e) => e.base != null && cd(e.base) && cd(e),
  ud = (e) => e.x,
  dd = (e) => e.y,
  fd = (e, t) => {
    if (typeof e == `function`) return e;
    var n = `curve${nn(e)}`;
    if ((n === `curveMonotone` || n === `curveBump`) && t) {
      var r = sd[`${n}${t === `vertical` ? `Y` : `X`}`];
      if (r) return r;
    }
    return sd[n] || ke;
  },
  pd = { connectNulls: !1, type: `linear` },
  md = (e) => {
    var t = e.type,
      n = t === void 0 ? pd.type : t,
      r = e.points,
      i = r === void 0 ? [] : r,
      a = e.baseLine,
      o = e.layout,
      s = e.connectNulls,
      c = s === void 0 ? pd.connectNulls : s,
      l = fd(n, o),
      u = c ? i.filter(cd) : i;
    if (Array.isArray(a)) {
      var d,
        f = i.map((e, t) => rd(rd({}, e), {}, { base: a[t] }));
      return (
        (d =
          o === `vertical`
            ? Ne()
                .y(dd)
                .x1(ud)
                .x0((e) => e.base.x)
            : Ne()
                .x(ud)
                .y1(dd)
                .y0((e) => e.base.y)),
        d.defined(ld).curve(l)(c ? f.filter(ld) : f)
      );
    }
    return (
      o === `vertical` && F(a)
        ? Ne().y(dd).x1(ud).x0(a)
        : F(a)
          ? Ne().x(ud).y1(dd).y0(a)
          : Me().x(ud).y(dd)
    )
      .defined(cd)
      .curve(l)(u);
  },
  hd = (t) => {
    var n = t.className,
      r = t.points,
      i = t.path,
      a = t.pathRef,
      o = sl();
    if ((!r || !r.length) && !i) return null;
    var s = {
        type: t.type,
        points: t.points,
        baseLine: t.baseLine,
        layout: t.layout || o,
        connectNulls: t.connectNulls,
      },
      c = r && r.length ? md(s) : i;
    return O.createElement(
      `path`,
      td({}, M(t), Sn(t), {
        className: e(`recharts-curve`, n),
        d: c === null ? void 0 : c,
        ref: a,
      }),
    );
  },
  gd = [`x`, `y`, `top`, `left`, `width`, `height`, `className`];
function _d() {
  return (
    (_d = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    _d.apply(null, arguments)
  );
}
function vd(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function yd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? vd(Object(n), !0).forEach(function (t) {
          bd(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : vd(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function bd(e, t, n) {
  return (
    (t = xd(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function xd(e) {
  var t = Sd(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Sd(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Cd(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = wd(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function wd(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var Td = (e, t, n, r, i, a) => `M${e},${i}v${r}M${a},${t}h${n}`,
  Ed = (t) => {
    var n = t.x,
      r = n === void 0 ? 0 : n,
      i = t.y,
      a = i === void 0 ? 0 : i,
      o = t.top,
      s = o === void 0 ? 0 : o,
      c = t.left,
      l = c === void 0 ? 0 : c,
      u = t.width,
      d = u === void 0 ? 0 : u,
      f = t.height,
      p = f === void 0 ? 0 : f,
      m = t.className,
      h = Cd(t, gd),
      g = yd({ x: r, y: a, top: s, left: l, width: d, height: p }, h);
    return !F(r) || !F(a) || !F(d) || !F(p) || !F(s) || !F(l)
      ? null
      : O.createElement(
          `path`,
          _d({}, ee(g), {
            className: e(`recharts-cross`, m),
            d: Td(r, a, d, p, s, l),
          }),
        );
  };
function Dd(e, t, n, r) {
  var i = r / 2;
  return {
    stroke: `none`,
    fill: `#ccc`,
    x: e === `horizontal` ? t.x - i : n.left + 0.5,
    y: e === `horizontal` ? n.top + 0.5 : t.y - i,
    width: e === `horizontal` ? r : n.width - 1,
    height: e === `horizontal` ? n.height - 1 : r,
  };
}
var Od = (e, t) => [0, 3 * e, 3 * t - 6 * e, 3 * e - 3 * t + 1],
  kd = (e, t) => e.map((e, n) => e * t ** n).reduce((e, t) => e + t),
  Ad = (e, t) => (n) => kd(Od(e, t), n),
  jd = (e, t) => (n) =>
    kd(
      [
        ...Od(e, t)
          .map((e, t) => e * t)
          .slice(1),
        0,
      ],
      n,
    ),
  Md = (e) => {
    var t,
      n = e.split(`(`);
    if (n.length !== 2 || n[0] !== `cubic-bezier`) return null;
    var r =
      (t = n[1]) == null || (t = t.split(`)`)[0]) == null
        ? void 0
        : t.split(`,`);
    if (r == null || r.length !== 4) return null;
    var i = r.map((e) => parseFloat(e));
    return [i[0], i[1], i[2], i[3]];
  },
  Nd = function () {
    var e = [...arguments];
    if (e.length === 1)
      switch (e[0]) {
        case `linear`:
          return [0, 0, 1, 1];
        case `ease`:
          return [0.25, 0.1, 0.25, 1];
        case `ease-in`:
          return [0.42, 0, 1, 1];
        case `ease-out`:
          return [0.42, 0, 0.58, 1];
        case `ease-in-out`:
          return [0, 0, 0.58, 1];
        default:
          var t = Md(e[0]);
          if (t) return t;
      }
    return e.length === 4 ? e : [0, 0, 1, 1];
  },
  Pd = (e, t, n, r) => {
    var i = Ad(e, n),
      a = Ad(t, r),
      o = jd(e, n),
      s = (e) => (e > 1 ? 1 : e < 0 ? 0 : e),
      c = (e) => {
        for (var t = e > 1 ? 1 : e, n = t, r = 0; r < 8; ++r) {
          var c = i(n) - t,
            l = o(n);
          if (Math.abs(c - t) < 1e-4 || l < 1e-4) return a(n);
          n = s(n - c / l);
        }
        return a(n);
      };
    return ((c.isStepper = !1), c);
  },
  Fd = function () {
    return Pd(...Nd(...arguments));
  },
  Id = function () {
    for (
      var e =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        t = e.stiff,
        n = t === void 0 ? 100 : t,
        r = e.damping,
        i = r === void 0 ? 8 : r,
        a = e.dt,
        o = a === void 0 ? 16.67 : a,
        s = 1,
        c = [0],
        l = 0,
        u = 0,
        d = 1e4,
        f = 0;
      f < d;
    ) {
      var p = -(l - s) * n,
        m = u * i;
      if (
        ((u += ((p - m) * o) / 1e3),
        (l += (u * o) / 1e3),
        c.push(l),
        Math.abs(l - s) < 1e-4 && Math.abs(u) < 1e-4)
      )
        break;
      f++;
    }
    c[c.length - 1] = s;
    var h = c.length - 1;
    return (e) => {
      if (e <= 0) return 0;
      if (e >= 1) return s;
      var t = e * h,
        n = Math.floor(t),
        r = t - n;
      return (c[n] ?? 0) + ((c[n + 1] ?? 0) - (c[n] ?? 0)) * r;
    };
  },
  Ld = (e) => {
    if (typeof e == `string`)
      switch (e) {
        case `ease`:
        case `ease-in-out`:
        case `ease-out`:
        case `ease-in`:
        case `linear`:
          return Fd(e);
        case `spring`:
          return Id();
        default:
          if (e.split(`(`)[0] === `cubic-bezier`) return Fd(e);
      }
    return typeof e == `function` ? e : null;
  },
  Rd = (0, O.createContext)((e, t, n) => {
    var r,
      i = (a) => {
        var o = t.tick(a);
        if (t.getState() === `active`) {
          if ((n(t.getInterpolated()), t.getProgress() === 1)) {
            (t.complete(), (r = void 0));
            return;
          }
          r = e.setTimeout(i, o);
          return;
        }
        r = e.setTimeout(i, o);
      };
    return ((r = e.setTimeout(i, 0)), () => r?.());
  });
Rd.Provider;
function zd(e) {
  var t = (0, O.useContext)(Rd);
  return (0, O.useMemo)(() => e ?? t, [e, t]);
}
function Bd(e, t, n) {
  return (
    (t = Vd(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Vd(e) {
  var t = Hd(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Hd(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var Ud = `init`,
  Wd = `pending`,
  Gd = `active`,
  Kd = `completed`;
function qd(e) {
  return Math.max(0, e);
}
var Jd = class {
    getAnimationStartedTime() {
      return this.animationStartedTime;
    }
    getBeginStartedTime() {
      return this.beginStartedTime;
    }
    constructor(e) {
      var t;
      (Bd(this, `state`, Ud),
        (this.animationId = e.animationId),
        (this.onAnimationEnd = e.onAnimationEnd),
        (this.animationDuration = qd(e.animationDuration)),
        (this.animationBegin = qd(e.animationBegin)),
        (this.progress = 0),
        (this.from = e.from),
        (this.to = e.to),
        (this.easing = e.easing),
        (t = e.onAnimationStart) == null || t.call(e));
    }
    getState() {
      return this.state;
    }
    getEasing() {
      return this.easing;
    }
    getAnimationDuration() {
      return this.animationDuration;
    }
    tick(e) {
      if (this.getState() === Ud)
        return (
          (this.state = Wd),
          (this.beginStartedTime = e),
          this.animationBegin
        );
      if (this.getState() === Wd) {
        if (this.beginStartedTime == null) throw Error();
        var t = e - this.beginStartedTime;
        return t >= this.animationBegin
          ? ((this.state = Gd),
            (this.animationStartedTime = e),
            this.nextAnimationUpdate(0))
          : qd(this.animationBegin - t);
      }
      if (this.getState() === Gd) {
        if (this.animationStartedTime == null) throw Error();
        var n = e - this.animationStartedTime;
        return (
          this.setProgress(n / this.animationDuration),
          this.nextAnimationUpdate(n)
        );
      }
      return 0;
    }
    setProgress(e) {
      this.progress = Math.min(1, Math.max(0, e));
    }
    getProgress() {
      return this.progress;
    }
    complete() {
      if (((this.progress = 1), this.state === `active`)) {
        var e;
        (e = this.onAnimationEnd) == null || e.call(this);
      }
      this.state = Kd;
    }
    getFrom() {
      return this.from;
    }
    getTo() {
      return this.to;
    }
    getAnimationId() {
      return this.animationId;
    }
    getAnimationBegin() {
      return this.animationBegin;
    }
  },
  Yd = class extends Jd {
    nextAnimationUpdate() {
      return 0;
    }
    getInterpolated() {
      return this.easing(en(this.getFrom(), this.getTo(), this.getProgress()));
    }
  },
  Xd = class {
    setTimeout(e) {
      var t =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
        n = performance.now(),
        r = null,
        i = (a) => {
          a - n >= t ? e(a) : (r = requestAnimationFrame(i));
        };
      return (
        (r = requestAnimationFrame(i)),
        () => {
          r != null && cancelAnimationFrame(r);
        }
      );
    }
  };
function Zd(e, t) {
  return nf(e) || tf(e, t) || $d(e, t) || Qd();
}
function Qd() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $d(e, t) {
  if (e) {
    if (typeof e == `string`) return ef(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? ef(e, t)
          : void 0
    );
  }
}
function ef(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function tf(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n != null) {
    var r,
      i,
      a,
      o,
      s = [],
      c = !0,
      l = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        c = !1;
      } else
        for (
          ;
          !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t);
          c = !0
        );
    } catch (e) {
      ((l = !0), (i = e));
    } finally {
      try {
        if (!c && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return s;
  }
}
function nf(e) {
  if (Array.isArray(e)) return e;
}
var rf = {
    begin: 0,
    duration: 1e3,
    easing: `ease`,
    isActive: !0,
    canBegin: !0,
    onAnimationEnd: () => {},
    onAnimationStart: () => {},
  },
  af = 0,
  of = 1;
function sf(e) {
  var t = An(e, rf),
    n = t.animationId,
    r = t.isActive,
    i = t.canBegin,
    a = t.duration,
    o = t.easing,
    s = t.begin,
    c = t.onAnimationEnd,
    l = t.onAnimationStart,
    u = t.children,
    d = zu(),
    f = r === `auto` ? !Mu.isSsr && !d : r,
    p = zd(t.animationController),
    m = Zd((0, O.useState)(f ? af : of), 2),
    h = m[0],
    g = m[1];
  return (
    (0, O.useEffect)(() => {
      f || g(of);
    }, [f]),
    (0, O.useEffect)(() => {
      var e = Ld(o);
      return !f || !i || e == null
        ? an
        : p(
            new Xd(),
            new Yd({
              animationId: n,
              easing: e,
              animationDuration: a,
              animationBegin: s,
              onAnimationStart: l,
              onAnimationEnd: c,
              from: af,
              to: of,
            }),
            g,
          );
    }, [p, n, f, i, a, o, s, l, c]),
    u(Number(h))
  );
}
function cf(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : `animation-`,
    n = (0, O.useRef)(Zt(t)),
    r = (0, O.useRef)(e);
  return (r.current !== e && ((n.current = Zt(t)), (r.current = e)), n.current);
}
var lf = (e) => e.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`),
  uf = (e, t, n) => e.map((e) => `${lf(e)} ${t}ms ${n}`).join(`,`),
  df = [`radius`],
  ff = [`radius`],
  pf,
  mf,
  hf,
  gf,
  _f,
  vf,
  yf,
  bf,
  xf,
  Sf;
function Cf(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function wf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Cf(Object(n), !0).forEach(function (t) {
          Tf(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Cf(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Tf(e, t, n) {
  return (
    (t = Ef(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Ef(e) {
  var t = Df(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Df(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Of() {
  return (
    (Of = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Of.apply(null, arguments)
  );
}
function kf(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = Af(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function Af(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function jf(e, t) {
  return If(e) || Ff(e, t) || Nf(e, t) || Mf();
}
function Mf() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Nf(e, t) {
  if (e) {
    if (typeof e == `string`) return Pf(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? Pf(e, t)
          : void 0
    );
  }
}
function Pf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Ff(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n != null) {
    var r,
      i,
      a,
      o,
      s = [],
      c = !0,
      l = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        c = !1;
      } else
        for (
          ;
          !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t);
          c = !0
        );
    } catch (e) {
      ((l = !0), (i = e));
    } finally {
      try {
        if (!c && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return s;
  }
}
function If(e) {
  if (Array.isArray(e)) return e;
}
function Lf(e, t) {
  return (
    (t ||= e.slice(0)),
    Object.freeze(
      Object.defineProperties(e, { raw: { value: Object.freeze(t) } }),
    )
  );
}
var Rf = (e, t, n, r, i) => {
    var a = Wt(n),
      o = Wt(r),
      s = Math.min(Math.abs(a) / 2, Math.abs(o) / 2),
      c = o >= 0 ? 1 : -1,
      l = a >= 0 ? 1 : -1,
      u = +((o >= 0 && a >= 0) || (o < 0 && a < 0)),
      d;
    if (s > 0 && Array.isArray(i)) {
      for (var f = [0, 0, 0, 0], p = 0, m = 4; p < m; p++) {
        var h = i[p] ?? 0;
        f[p] = h > s ? s : h;
      }
      ((d = Gt((pf ||= Lf([`M`, `,`, ``])), e, t + c * f[0])),
        f[0] > 0 &&
          (d += Gt(
            (mf ||= Lf([`A `, `,`, `,0,0,`, `,`, `,`, ``])),
            f[0],
            f[0],
            u,
            e + l * f[0],
            t,
          )),
        (d += Gt((hf ||= Lf([`L `, `,`, ``])), e + n - l * f[1], t)),
        f[1] > 0 &&
          (d += Gt(
            (gf ||= Lf([
              `A `,
              `,`,
              `,0,0,`,
              `,
        `,
              `,`,
              ``,
            ])),
            f[1],
            f[1],
            u,
            e + n,
            t + c * f[1],
          )),
        (d += Gt((_f ||= Lf([`L `, `,`, ``])), e + n, t + r - c * f[2])),
        f[2] > 0 &&
          (d += Gt(
            (vf ||= Lf([
              `A `,
              `,`,
              `,0,0,`,
              `,
        `,
              `,`,
              ``,
            ])),
            f[2],
            f[2],
            u,
            e + n - l * f[2],
            t + r,
          )),
        (d += Gt((yf ||= Lf([`L `, `,`, ``])), e + l * f[3], t + r)),
        f[3] > 0 &&
          (d += Gt(
            (bf ||= Lf([
              `A `,
              `,`,
              `,0,0,`,
              `,
        `,
              `,`,
              ``,
            ])),
            f[3],
            f[3],
            u,
            e,
            t + r - c * f[3],
          )),
        (d += `Z`));
    } else if (s > 0 && i === +i && i > 0) {
      var g = Math.min(s, i);
      d = Gt(
        (xf ||= Lf(
          `M .,.
            A .,.,0,0,.,.,.
            L .,.
            A .,.,0,0,.,.,.
            L .,.
            A .,.,0,0,.,.,.
            L .,.
            A .,.,0,0,.,.,. Z`.split(`.`),
        )),
        e,
        t + c * g,
        g,
        g,
        u,
        e + l * g,
        t,
        e + n - l * g,
        t,
        g,
        g,
        u,
        e + n,
        t + c * g,
        e + n,
        t + r - c * g,
        g,
        g,
        u,
        e + n - l * g,
        t + r,
        e + l * g,
        t + r,
        g,
        g,
        u,
        e,
        t + r - c * g,
      );
    } else
      d = Gt(
        (Sf ||= Lf([`M `, `,`, ` h `, ` v `, ` h `, ` Z`])),
        e,
        t,
        n,
        r,
        -n,
      );
    return d;
  },
  zf = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    radius: 0,
    isAnimationActive: !1,
    isUpdateAnimationActive: !1,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: `ease`,
  },
  Bf = (t) => {
    var n = An(t, zf),
      r = (0, O.useRef)(null),
      i = jf((0, O.useState)(-1), 2),
      a = i[0],
      o = i[1];
    (0, O.useEffect)(() => {
      if (r.current && r.current.getTotalLength)
        try {
          var e = r.current.getTotalLength();
          e && o(e);
        } catch {}
    }, []);
    var s = n.x,
      c = n.y,
      l = n.width,
      u = n.height,
      d = n.radius,
      f = n.className,
      p = n.animationEasing,
      m = n.animationDuration,
      h = n.animationBegin,
      g = n.isAnimationActive,
      _ = n.isUpdateAnimationActive,
      v = (0, O.useRef)(l),
      y = (0, O.useRef)(u),
      b = (0, O.useRef)(s),
      x = (0, O.useRef)(c),
      S = cf(
        (0, O.useMemo)(
          () => ({ x: s, y: c, width: l, height: u, radius: d }),
          [s, c, l, u, d],
        ),
        `rectangle-`,
      );
    if (s !== +s || c !== +c || l !== +l || u !== +u || l === 0 || u === 0)
      return null;
    var C = e(`recharts-rectangle`, f);
    if (!_) {
      var w = ee(n);
      w.radius;
      var T = kf(w, df);
      return O.createElement(
        `path`,
        Of({}, T, {
          x: Wt(s),
          y: Wt(c),
          width: Wt(l),
          height: Wt(u),
          radius: typeof d == `number` ? d : void 0,
          className: C,
          d: Rf(s, c, l, u, d),
        }),
      );
    }
    var E = v.current,
      D = y.current,
      k = b.current,
      A = x.current,
      j = `0px ${a === -1 ? 1 : a}px`,
      M = `${a}px ${a}px`,
      N = uf(
        [`strokeDasharray`],
        m,
        typeof p == `string` ? p : zf.animationEasing,
      );
    return O.createElement(
      sf,
      {
        animationId: S,
        key: S,
        canBegin: a > 0,
        duration: m,
        easing: p,
        isActive: _,
        begin: h,
      },
      (e) => {
        var t = en(E, l, e),
          i = en(D, u, e),
          a = en(k, s, e),
          o = en(A, c, e);
        r.current &&
          ((v.current = t), (y.current = i), (b.current = a), (x.current = o));
        var f = g
            ? e > 0
              ? { transition: N, strokeDasharray: M }
              : { strokeDasharray: j }
            : { strokeDasharray: M },
          p = ee(n);
        p.radius;
        var m = kf(p, ff);
        return O.createElement(
          `path`,
          Of({}, m, {
            radius: typeof d == `number` ? d : void 0,
            className: C,
            d: Rf(a, o, t, i, d),
            ref: r,
            style: wf(wf({}, f), n.style),
          }),
        );
      },
    );
  };
function Vf(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Hf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Vf(Object(n), !0).forEach(function (t) {
          Uf(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Vf(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Uf(e, t, n) {
  return (
    (t = Wf(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Wf(e) {
  var t = Gf(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Gf(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var Kf = Math.PI / 180,
  qf = (e) => (e * 180) / Math.PI,
  Jf = (e, t, n, r) => ({
    x: e + Math.cos(-Kf * r) * n,
    y: t + Math.sin(-Kf * r) * n,
  }),
  Yf = function (e, t) {
    var n =
      arguments.length > 2 && arguments[2] !== void 0
        ? arguments[2]
        : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: 0,
            height: 0,
            brushBottom: 0,
          };
    return (
      Math.min(
        Math.abs(e - (n.left || 0) - (n.right || 0)),
        Math.abs(t - (n.top || 0) - (n.bottom || 0)),
      ) / 2
    );
  },
  Xf = (e, t) => {
    var n = e.x,
      r = e.y,
      i = t.x,
      a = t.y;
    return Math.sqrt((n - i) ** 2 + (r - a) ** 2);
  },
  Zf = (e, t) => {
    var n = e.x,
      r = e.y,
      i = t.cx,
      a = t.cy,
      o = Xf({ x: n, y: r }, { x: i, y: a });
    if (o <= 0) return { radius: o, angle: 0 };
    var s = (n - i) / o,
      c = Math.acos(s);
    return (
      r > a && (c = 2 * Math.PI - c),
      { radius: o, angle: qf(c), angleInRadian: c }
    );
  },
  Qf = (e) => {
    var t = e.startAngle,
      n = e.endAngle,
      r = Math.floor(t / 360),
      i = Math.floor(n / 360),
      a = Math.min(r, i);
    return { startAngle: t - a * 360, endAngle: n - a * 360 };
  },
  $f = (e, t) => {
    var n = t.startAngle,
      r = t.endAngle,
      i = Math.floor(n / 360),
      a = Math.floor(r / 360);
    return e + Math.min(i, a) * 360;
  },
  ep = (e, t) => {
    var n = e.relativeX,
      r = e.relativeY,
      i = Zf({ x: n, y: r }, t),
      a = i.radius,
      o = i.angle,
      s = t.innerRadius,
      c = t.outerRadius;
    if (a < s || a > c || a === 0) return null;
    var l = Qf(t),
      u = l.startAngle,
      d = l.endAngle,
      f = o,
      p;
    if (u <= d) {
      for (; f > d;) f -= 360;
      for (; f < u;) f += 360;
      p = f >= u && f <= d;
    } else {
      for (; f > u;) f -= 360;
      for (; f < d;) f += 360;
      p = f >= d && f <= u;
    }
    return p ? Hf(Hf({}, t), {}, { radius: a, angle: $f(f, t) }) : null;
  };
function tp(e) {
  var t = e.cx,
    n = e.cy,
    r = e.radius,
    i = e.startAngle,
    a = e.endAngle;
  return {
    points: [Jf(t, n, r, i), Jf(t, n, r, a)],
    cx: t,
    cy: n,
    radius: r,
    startAngle: i,
    endAngle: a,
  };
}
var np, rp, ip, ap, op, sp, cp;
function lp() {
  return (
    (lp = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    lp.apply(null, arguments)
  );
}
function up(e, t) {
  return (
    (t ||= e.slice(0)),
    Object.freeze(
      Object.defineProperties(e, { raw: { value: Object.freeze(t) } }),
    )
  );
}
var dp = (e, t) => Kt(t - e) * Math.min(Math.abs(t - e), 359.999),
  fp = (e) => {
    var t = e.cx,
      n = e.cy,
      r = e.radius,
      i = e.angle,
      a = e.sign,
      o = e.isExternal,
      s = e.cornerRadius,
      c = e.cornerIsExternal,
      l = s * (o ? 1 : -1) + r,
      u = Math.asin(s / l) / Kf,
      d = c ? i : i + a * u,
      f = Jf(t, n, l, d),
      p = Jf(t, n, r, d),
      m = c ? i - a * u : i;
    return {
      center: f,
      circleTangency: p,
      lineTangency: Jf(t, n, l * Math.cos(u * Kf), m),
      theta: u,
    };
  },
  pp = (e) => {
    var t = e.cx,
      n = e.cy,
      r = e.innerRadius,
      i = e.outerRadius,
      a = e.startAngle,
      o = e.endAngle,
      s = dp(a, o),
      c = a + s,
      l = Jf(t, n, i, a),
      u = Jf(t, n, i, c),
      d = Gt(
        (np ||= up([
          `M `,
          `,`,
          `
    A `,
          `,`,
          `,0,
    `,
          `,`,
          `,
    `,
          `,`,
          `
  `,
        ])),
        l.x,
        l.y,
        i,
        i,
        +(Math.abs(s) > 180),
        +(a > c),
        u.x,
        u.y,
      );
    if (r > 0) {
      var f = Jf(t, n, r, a),
        p = Jf(t, n, r, c);
      d += Gt(
        (rp ||= up([
          `L `,
          `,`,
          `
            A `,
          `,`,
          `,0,
            `,
          `,`,
          `,
            `,
          `,`,
          ` Z`,
        ])),
        p.x,
        p.y,
        r,
        r,
        +(Math.abs(s) > 180),
        +(a <= c),
        f.x,
        f.y,
      );
    } else d += Gt((ip ||= up([`L `, `,`, ` Z`])), t, n);
    return d;
  },
  mp = (e) => {
    var t = e.cx,
      n = e.cy,
      r = e.innerRadius,
      i = e.outerRadius,
      a = e.cornerRadius,
      o = e.forceCornerRadius,
      s = e.cornerIsExternal,
      c = e.startAngle,
      l = e.endAngle,
      u = Kt(l - c),
      d = fp({
        cx: t,
        cy: n,
        radius: i,
        angle: c,
        sign: u,
        cornerRadius: a,
        cornerIsExternal: s,
      }),
      f = d.circleTangency,
      p = d.lineTangency,
      m = d.theta,
      h = fp({
        cx: t,
        cy: n,
        radius: i,
        angle: l,
        sign: -u,
        cornerRadius: a,
        cornerIsExternal: s,
      }),
      g = h.circleTangency,
      _ = h.lineTangency,
      v = h.theta,
      y = s ? Math.abs(c - l) : Math.abs(c - l) - m - v;
    if (y < 0)
      return o
        ? Gt(
            (ap ||= up([
              `M `,
              `,`,
              `
        a`,
              `,`,
              `,0,0,1,`,
              `,0
        a`,
              `,`,
              `,0,0,1,`,
              `,0
      `,
            ])),
            p.x,
            p.y,
            a,
            a,
            a * 2,
            a,
            a,
            -a * 2,
          )
        : pp({
            cx: t,
            cy: n,
            innerRadius: r,
            outerRadius: i,
            startAngle: c,
            endAngle: l,
          });
    var b = Gt(
      (op ||= up([
        `M `,
        `,`,
        `
    A`,
        `,`,
        `,0,0,`,
        `,`,
        `,`,
        `
    A`,
        `,`,
        `,0,`,
        `,`,
        `,`,
        `,`,
        `
    A`,
        `,`,
        `,0,0,`,
        `,`,
        `,`,
        `
  `,
      ])),
      p.x,
      p.y,
      a,
      a,
      +(u < 0),
      f.x,
      f.y,
      i,
      i,
      +(y > 180),
      +(u < 0),
      g.x,
      g.y,
      a,
      a,
      +(u < 0),
      _.x,
      _.y,
    );
    if (r > 0) {
      var x = fp({
          cx: t,
          cy: n,
          radius: r,
          angle: c,
          sign: u,
          isExternal: !0,
          cornerRadius: a,
          cornerIsExternal: s,
        }),
        S = x.circleTangency,
        C = x.lineTangency,
        w = x.theta,
        T = fp({
          cx: t,
          cy: n,
          radius: r,
          angle: l,
          sign: -u,
          isExternal: !0,
          cornerRadius: a,
          cornerIsExternal: s,
        }),
        E = T.circleTangency,
        D = T.lineTangency,
        O = T.theta,
        k = s ? Math.abs(c - l) : Math.abs(c - l) - w - O;
      if (k < 0 && a === 0) return `${b}L${t},${n}Z`;
      b += Gt(
        (sp ||= up([
          `L`,
          `,`,
          `
      A`,
          `,`,
          `,0,0,`,
          `,`,
          `,`,
          `
      A`,
          `,`,
          `,0,`,
          `,`,
          `,`,
          `,`,
          `
      A`,
          `,`,
          `,0,0,`,
          `,`,
          `,`,
          `Z`,
        ])),
        D.x,
        D.y,
        a,
        a,
        +(u < 0),
        E.x,
        E.y,
        r,
        r,
        +(k > 180),
        +(u > 0),
        S.x,
        S.y,
        a,
        a,
        +(u < 0),
        C.x,
        C.y,
      );
    } else b += Gt((cp ||= up([`L`, `,`, `Z`])), t, n);
    return b;
  },
  hp = {
    cx: 0,
    cy: 0,
    innerRadius: 0,
    outerRadius: 0,
    startAngle: 0,
    endAngle: 0,
    cornerRadius: 0,
    forceCornerRadius: !1,
    cornerIsExternal: !1,
  },
  gp = (t) => {
    var n = An(t, hp),
      r = n.cx,
      i = n.cy,
      a = n.innerRadius,
      o = n.outerRadius,
      s = n.cornerRadius,
      c = n.forceCornerRadius,
      l = n.cornerIsExternal,
      u = n.startAngle,
      d = n.endAngle,
      f = n.className;
    if (o < a || u === d) return null;
    var p = e(`recharts-sector`, f),
      m = o - a,
      h = Qt(s, m, 0, !0),
      g =
        h > 0 && Math.abs(u - d) < 360
          ? mp({
              cx: r,
              cy: i,
              innerRadius: a,
              outerRadius: o,
              cornerRadius: Math.min(h, m / 2),
              forceCornerRadius: c,
              cornerIsExternal: l,
              startAngle: u,
              endAngle: d,
            })
          : pp({
              cx: r,
              cy: i,
              innerRadius: a,
              outerRadius: o,
              startAngle: u,
              endAngle: d,
            });
    return O.createElement(`path`, lp({}, ee(n), { className: p, d: g }));
  };
function _p(e, t, n) {
  if (e === `horizontal`)
    return [
      { x: t.x, y: n.top },
      { x: t.x, y: n.top + n.height },
    ];
  if (e === `vertical`)
    return [
      { x: n.left, y: t.y },
      { x: n.left + n.width, y: t.y },
    ];
  if (xn(t)) {
    if (e === `centric`) {
      var r = t.cx,
        i = t.cy,
        a = t.innerRadius,
        o = t.outerRadius,
        s = t.angle,
        c = Jf(r, i, a, s),
        l = Jf(r, i, o, s);
      return [
        { x: c.x, y: c.y },
        { x: l.x, y: l.y },
      ];
    }
    return tp(t);
  }
}
function vp(e) {
  return oi(e) ? NaN : Number(e);
}
function yp(e) {
  return e
    ? ((e = vp(e)),
      e === 1 / 0 || e === -1 / 0
        ? (e < 0 ? -1 : 1) * Number.MAX_VALUE
        : e === e
          ? e
          : 0)
    : e === 0
      ? e
      : 0;
}
function bp(e, t, n) {
  (n && typeof n != `number` && ri(e, t, n) && (t = n = void 0),
    (e = yp(e)),
    t === void 0 ? ((t = e), (e = 0)) : (t = yp(t)),
    (n = n === void 0 ? (e < t ? 1 : -1) : yp(n)));
  let r = Math.max(Math.ceil((t - e) / (n || 1)), 0),
    i = Array(r);
  for (let t = 0; t < r; t++) ((i[t] = e), (e += n));
  return i;
}
var xp = (e) => e.chartData,
  Sp = T([xp], (e) => {
    var t = e.chartData == null ? 0 : e.chartData.length - 1;
    return {
      chartData: e.chartData,
      computedData: e.computedData,
      dataEndIndex: t,
      dataStartIndex: 0,
    };
  }),
  Cp = (e, t, n, r) => (r ? Sp(e) : xp(e)),
  wp = (e, t, n) => (n ? Sp(e) : xp(e)),
  Tp = T([Cp], (e) => {
    var t = e.chartData,
      n = e.dataStartIndex,
      r = e.dataEndIndex;
    return t == null ? [] : t.slice(n, r + 1);
  });
T([Sp], (e) => {
  var t = e.chartData,
    n = e.dataStartIndex,
    r = e.dataEndIndex;
  return t == null ? [] : t.slice(n, r + 1);
});
var Ep = T([xp], (e) => {
  var t = e.chartData,
    n = e.dataStartIndex,
    r = e.dataEndIndex;
  return t == null ? [] : t.slice(n, r + 1);
});
function Dp(e, t) {
  return Mp(e) || jp(e, t) || kp(e, t) || Op();
}
function Op() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function kp(e, t) {
  if (e) {
    if (typeof e == `string`) return Ap(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? Ap(e, t)
          : void 0
    );
  }
}
function Ap(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function jp(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n != null) {
    var r,
      i,
      a,
      o,
      s = [],
      c = !0,
      l = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        c = !1;
      } else
        for (
          ;
          !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t);
          c = !0
        );
    } catch (e) {
      ((l = !0), (i = e));
    } finally {
      try {
        if (!c && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return s;
  }
}
function Mp(e) {
  if (Array.isArray(e)) return e;
}
function Np(e) {
  if (Array.isArray(e) && e.length === 2) {
    var t = Dp(e, 2),
      n = t[0],
      r = t[1];
    if (V(n) && V(r)) return !0;
  }
  return !1;
}
function Pp(e, t, n) {
  return n ? e : [Math.min(e[0], t[0]), Math.max(e[1], t[1])];
}
function Fp(e, t) {
  if (t && typeof e != `function` && Array.isArray(e) && e.length === 2) {
    var n = Dp(e, 2),
      r = n[0],
      i = n[1],
      a,
      o;
    if (V(r)) a = r;
    else if (typeof r == `function`) return;
    if (V(i)) o = i;
    else if (typeof i == `function`) return;
    var s = [a, o];
    if (Np(s)) return s;
  }
}
function Ip(e, t, n) {
  if (!(!n && t == null)) {
    if (typeof e == `function` && t != null)
      try {
        var r = e(t, n);
        if (Np(r)) return Pp(r, t, n);
      } catch {}
    if (Array.isArray(e) && e.length === 2) {
      var i = Dp(e, 2),
        a = i[0],
        o = i[1],
        s,
        c;
      if (a === `auto`) t != null && (s = Math.min(...t));
      else if (F(a)) s = a;
      else if (typeof a == `function`)
        try {
          t != null && (s = a(t?.[0]));
        } catch {}
      else if (typeof a == `string` && Gs.test(a)) {
        var l = Gs.exec(a);
        if (l == null || l[1] == null || t == null) s = void 0;
        else {
          var u = +l[1];
          s = t[0] - u;
        }
      } else s = t?.[0];
      if (o === `auto`) t != null && (c = Math.max(...t));
      else if (F(o)) c = o;
      else if (typeof o == `function`)
        try {
          t != null && (c = o(t?.[1]));
        } catch {}
      else if (typeof o == `string` && Ks.test(o)) {
        var d = Ks.exec(o);
        if (d == null || d[1] == null || t == null) c = void 0;
        else {
          var f = +d[1];
          c = t[1] + f;
        }
      } else c = t?.[1];
      var p = [s, c];
      if (Np(p)) return t == null ? p : Pp(p, t, n);
    }
  }
}
var G = i(
  o((e, t) => {
    (function (e) {
      var n = 1e9,
        r = {
          precision: 20,
          rounding: 4,
          toExpNeg: -7,
          toExpPos: 21,
          LN10: `2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286`,
        },
        i = !0,
        a = `[DecimalError] `,
        o = a + `Invalid argument: `,
        s = a + `Exponent out of range: `,
        c = Math.floor,
        l = Math.pow,
        u = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        d,
        f = 1e7,
        p = 7,
        m = 9007199254740991,
        h = c(m / p),
        g = {};
      ((g.absoluteValue = g.abs =
        function () {
          var e = new this.constructor(this);
          return ((e.s &&= 1), e);
        }),
        (g.comparedTo = g.cmp =
          function (e) {
            var t,
              n,
              r,
              i,
              a = this;
            if (((e = new a.constructor(e)), a.s !== e.s)) return a.s || -e.s;
            if (a.e !== e.e) return (a.e > e.e) ^ (a.s < 0) ? 1 : -1;
            for (
              r = a.d.length, i = e.d.length, t = 0, n = r < i ? r : i;
              t < n;
              ++t
            )
              if (a.d[t] !== e.d[t])
                return (a.d[t] > e.d[t]) ^ (a.s < 0) ? 1 : -1;
            return r === i ? 0 : (r > i) ^ (a.s < 0) ? 1 : -1;
          }),
        (g.decimalPlaces = g.dp =
          function () {
            var e = this,
              t = e.d.length - 1,
              n = (t - e.e) * p;
            if (((t = e.d[t]), t)) for (; t % 10 == 0; t /= 10) n--;
            return n < 0 ? 0 : n;
          }),
        (g.dividedBy = g.div =
          function (e) {
            return b(this, new this.constructor(e));
          }),
        (g.dividedToIntegerBy = g.idiv =
          function (e) {
            var t = this,
              n = t.constructor;
            return D(b(t, new n(e), 0, 1), n.precision);
          }),
        (g.equals = g.eq =
          function (e) {
            return !this.cmp(e);
          }),
        (g.exponent = function () {
          return S(this);
        }),
        (g.greaterThan = g.gt =
          function (e) {
            return this.cmp(e) > 0;
          }),
        (g.greaterThanOrEqualTo = g.gte =
          function (e) {
            return this.cmp(e) >= 0;
          }),
        (g.isInteger = g.isint =
          function () {
            return this.e > this.d.length - 2;
          }),
        (g.isNegative = g.isneg =
          function () {
            return this.s < 0;
          }),
        (g.isPositive = g.ispos =
          function () {
            return this.s > 0;
          }),
        (g.isZero = function () {
          return this.s === 0;
        }),
        (g.lessThan = g.lt =
          function (e) {
            return this.cmp(e) < 0;
          }),
        (g.lessThanOrEqualTo = g.lte =
          function (e) {
            return this.cmp(e) < 1;
          }),
        (g.logarithm = g.log =
          function (e) {
            var t,
              n = this,
              r = n.constructor,
              o = r.precision,
              s = o + 5;
            if (e === void 0) e = new r(10);
            else if (((e = new r(e)), e.s < 1 || e.eq(d)))
              throw Error(a + `NaN`);
            if (n.s < 1) throw Error(a + (n.s ? `NaN` : `-Infinity`));
            return n.eq(d)
              ? new r(0)
              : ((i = !1), (t = b(T(n, s), T(e, s), s)), (i = !0), D(t, o));
          }),
        (g.minus = g.sub =
          function (e) {
            var t = this;
            return (
              (e = new t.constructor(e)),
              t.s == e.s ? O(t, e) : _(t, ((e.s = -e.s), e))
            );
          }),
        (g.modulo = g.mod =
          function (e) {
            var t,
              n = this,
              r = n.constructor,
              o = r.precision;
            if (((e = new r(e)), !e.s)) throw Error(a + `NaN`);
            return n.s
              ? ((i = !1), (t = b(n, e, 0, 1).times(e)), (i = !0), n.minus(t))
              : D(new r(n), o);
          }),
        (g.naturalExponential = g.exp =
          function () {
            return x(this);
          }),
        (g.naturalLogarithm = g.ln =
          function () {
            return T(this);
          }),
        (g.negated = g.neg =
          function () {
            var e = new this.constructor(this);
            return ((e.s = -e.s || 0), e);
          }),
        (g.plus = g.add =
          function (e) {
            var t = this;
            return (
              (e = new t.constructor(e)),
              t.s == e.s ? _(t, e) : O(t, ((e.s = -e.s), e))
            );
          }),
        (g.precision = g.sd =
          function (e) {
            var t,
              n,
              r,
              i = this;
            if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
              throw Error(o + e);
            if (
              ((t = S(i) + 1),
              (r = i.d.length - 1),
              (n = r * p + 1),
              (r = i.d[r]),
              r)
            ) {
              for (; r % 10 == 0; r /= 10) n--;
              for (r = i.d[0]; r >= 10; r /= 10) n++;
            }
            return e && t > n ? t : n;
          }),
        (g.squareRoot = g.sqrt =
          function () {
            var e,
              t,
              n,
              r,
              o,
              s,
              l,
              u = this,
              d = u.constructor;
            if (u.s < 1) {
              if (!u.s) return new d(0);
              throw Error(a + `NaN`);
            }
            for (
              e = S(u),
                i = !1,
                o = Math.sqrt(+u),
                o == 0 || o == 1 / 0
                  ? ((t = y(u.d)),
                    (t.length + e) % 2 == 0 && (t += `0`),
                    (o = Math.sqrt(t)),
                    (e = c((e + 1) / 2) - (e < 0 || e % 2)),
                    o == 1 / 0
                      ? (t = `5e` + e)
                      : ((t = o.toExponential()),
                        (t = t.slice(0, t.indexOf(`e`) + 1) + e)),
                    (r = new d(t)))
                  : (r = new d(o.toString())),
                n = d.precision,
                o = l = n + 3;
              ;
            )
              if (
                ((s = r),
                (r = s.plus(b(u, s, l + 2)).times(0.5)),
                y(s.d).slice(0, l) === (t = y(r.d)).slice(0, l))
              ) {
                if (((t = t.slice(l - 3, l + 1)), o == l && t == `4999`)) {
                  if ((D(s, n + 1, 0), s.times(s).eq(u))) {
                    r = s;
                    break;
                  }
                } else if (t != `9999`) break;
                l += 4;
              }
            return ((i = !0), D(r, n));
          }),
        (g.times = g.mul =
          function (e) {
            var t,
              n,
              r,
              a,
              o,
              s,
              c,
              l,
              u,
              d = this,
              p = d.constructor,
              m = d.d,
              h = (e = new p(e)).d;
            if (!d.s || !e.s) return new p(0);
            for (
              e.s *= d.s,
                n = d.e + e.e,
                l = m.length,
                u = h.length,
                l < u && ((o = m), (m = h), (h = o), (s = l), (l = u), (u = s)),
                o = [],
                s = l + u,
                r = s;
              r--;
            )
              o.push(0);
            for (r = u; --r >= 0;) {
              for (t = 0, a = l + r; a > r;)
                ((c = o[a] + h[r] * m[a - r - 1] + t),
                  (o[a--] = (c % f) | 0),
                  (t = (c / f) | 0));
              o[a] = ((o[a] + t) % f) | 0;
            }
            for (; !o[--s];) o.pop();
            return (
              t ? ++n : o.shift(),
              (e.d = o),
              (e.e = n),
              i ? D(e, p.precision) : e
            );
          }),
        (g.toDecimalPlaces = g.todp =
          function (e, t) {
            var r = this,
              i = r.constructor;
            return (
              (r = new i(r)),
              e === void 0
                ? r
                : (v(e, 0, n),
                  t === void 0 ? (t = i.rounding) : v(t, 0, 8),
                  D(r, e + S(r) + 1, t))
            );
          }),
        (g.toExponential = function (e, t) {
          var r,
            i = this,
            a = i.constructor;
          return (
            e === void 0
              ? (r = k(i, !0))
              : (v(e, 0, n),
                t === void 0 ? (t = a.rounding) : v(t, 0, 8),
                (i = D(new a(i), e + 1, t)),
                (r = k(i, !0, e + 1))),
            r
          );
        }),
        (g.toFixed = function (e, t) {
          var r,
            i,
            a = this,
            o = a.constructor;
          return e === void 0
            ? k(a)
            : (v(e, 0, n),
              t === void 0 ? (t = o.rounding) : v(t, 0, 8),
              (i = D(new o(a), e + S(a) + 1, t)),
              (r = k(i.abs(), !1, e + S(i) + 1)),
              a.isneg() && !a.isZero() ? `-` + r : r);
        }),
        (g.toInteger = g.toint =
          function () {
            var e = this,
              t = e.constructor;
            return D(new t(e), S(e) + 1, t.rounding);
          }),
        (g.toNumber = function () {
          return +this;
        }),
        (g.toPower = g.pow =
          function (e) {
            var t,
              n,
              r,
              o,
              s,
              l,
              u = this,
              f = u.constructor,
              h = 12,
              g = +(e = new f(e));
            if (!e.s) return new f(d);
            if (((u = new f(u)), !u.s)) {
              if (e.s < 1) throw Error(a + `Infinity`);
              return u;
            }
            if (u.eq(d)) return u;
            if (((r = f.precision), e.eq(d))) return D(u, r);
            if (
              ((t = e.e), (n = e.d.length - 1), (l = t >= n), (s = u.s), !l)
            ) {
              if (s < 0) throw Error(a + `NaN`);
            } else if ((n = g < 0 ? -g : g) <= m) {
              for (
                o = new f(d), t = Math.ceil(r / p + 4), i = !1;
                n % 2 && ((o = o.times(u)), A(o.d, t)), (n = c(n / 2)), n !== 0;
              )
                ((u = u.times(u)), A(u.d, t));
              return ((i = !0), e.s < 0 ? new f(d).div(o) : D(o, r));
            }
            return (
              (s = s < 0 && e.d[Math.max(t, n)] & 1 ? -1 : 1),
              (u.s = 1),
              (i = !1),
              (o = e.times(T(u, r + h))),
              (i = !0),
              (o = x(o)),
              (o.s = s),
              o
            );
          }),
        (g.toPrecision = function (e, t) {
          var r,
            i,
            a = this,
            o = a.constructor;
          return (
            e === void 0
              ? ((r = S(a)), (i = k(a, r <= o.toExpNeg || r >= o.toExpPos)))
              : (v(e, 1, n),
                t === void 0 ? (t = o.rounding) : v(t, 0, 8),
                (a = D(new o(a), e, t)),
                (r = S(a)),
                (i = k(a, e <= r || r <= o.toExpNeg, e))),
            i
          );
        }),
        (g.toSignificantDigits = g.tosd =
          function (e, t) {
            var r = this,
              i = r.constructor;
            return (
              e === void 0
                ? ((e = i.precision), (t = i.rounding))
                : (v(e, 1, n), t === void 0 ? (t = i.rounding) : v(t, 0, 8)),
              D(new i(r), e, t)
            );
          }),
        (g.toString =
          g.valueOf =
          g.val =
          g.toJSON =
            function () {
              var e = this,
                t = S(e),
                n = e.constructor;
              return k(e, t <= n.toExpNeg || t >= n.toExpPos);
            }));
      function _(e, t) {
        var n,
          r,
          a,
          o,
          s,
          c,
          l,
          u,
          d = e.constructor,
          m = d.precision;
        if (!e.s || !t.s) return (t.s || (t = new d(e)), i ? D(t, m) : t);
        if (
          ((l = e.d),
          (u = t.d),
          (s = e.e),
          (a = t.e),
          (l = l.slice()),
          (o = s - a),
          o)
        ) {
          for (
            o < 0
              ? ((r = l), (o = -o), (c = u.length))
              : ((r = u), (a = s), (c = l.length)),
              s = Math.ceil(m / p),
              c = s > c ? s + 1 : c + 1,
              o > c && ((o = c), (r.length = 1)),
              r.reverse();
            o--;
          )
            r.push(0);
          r.reverse();
        }
        for (
          c = l.length,
            o = u.length,
            c - o < 0 && ((o = c), (r = u), (u = l), (l = r)),
            n = 0;
          o;
        )
          ((n = ((l[--o] = l[o] + u[o] + n) / f) | 0), (l[o] %= f));
        for (n && (l.unshift(n), ++a), c = l.length; l[--c] == 0;) l.pop();
        return ((t.d = l), (t.e = a), i ? D(t, m) : t);
      }
      function v(e, t, n) {
        if (e !== ~~e || e < t || e > n) throw Error(o + e);
      }
      function y(e) {
        var t,
          n,
          r,
          i = e.length - 1,
          a = ``,
          o = e[0];
        if (i > 0) {
          for (a += o, t = 1; t < i; t++)
            ((r = e[t] + ``), (n = p - r.length), n && (a += w(n)), (a += r));
          ((o = e[t]), (r = o + ``), (n = p - r.length), n && (a += w(n)));
        } else if (o === 0) return `0`;
        for (; o % 10 == 0;) o /= 10;
        return a + o;
      }
      var b = (function () {
        function e(e, t) {
          var n,
            r = 0,
            i = e.length;
          for (e = e.slice(); i--;)
            ((n = e[i] * t + r), (e[i] = (n % f) | 0), (r = (n / f) | 0));
          return (r && e.unshift(r), e);
        }
        function t(e, t, n, r) {
          var i, a;
          if (n != r) a = n > r ? 1 : -1;
          else
            for (i = a = 0; i < n; i++)
              if (e[i] != t[i]) {
                a = e[i] > t[i] ? 1 : -1;
                break;
              }
          return a;
        }
        function n(e, t, n) {
          for (var r = 0; n--;)
            ((e[n] -= r), (r = +(e[n] < t[n])), (e[n] = r * f + e[n] - t[n]));
          for (; !e[0] && e.length > 1;) e.shift();
        }
        return function (r, i, o, s) {
          var c,
            l,
            u,
            d,
            m,
            h,
            g,
            _,
            v,
            y,
            b,
            x,
            C,
            w,
            T,
            E,
            O,
            k,
            A = r.constructor,
            j = r.s == i.s ? 1 : -1,
            M = r.d,
            N = i.d;
          if (!r.s) return new A(r);
          if (!i.s) throw Error(a + `Division by zero`);
          for (
            l = r.e - i.e,
              O = N.length,
              T = M.length,
              g = new A(j),
              _ = g.d = [],
              u = 0;
            N[u] == (M[u] || 0);
          )
            ++u;
          if (
            (N[u] > (M[u] || 0) && --l,
            (x = o == null ? (o = A.precision) : s ? o + (S(r) - S(i)) + 1 : o),
            x < 0)
          )
            return new A(0);
          if (((x = (x / p + 2) | 0), (u = 0), O == 1))
            for (d = 0, N = N[0], x++; (u < T || d) && x--; u++)
              ((C = d * f + (M[u] || 0)),
                (_[u] = (C / N) | 0),
                (d = (C % N) | 0));
          else {
            for (
              d = (f / (N[0] + 1)) | 0,
                d > 1 &&
                  ((N = e(N, d)),
                  (M = e(M, d)),
                  (O = N.length),
                  (T = M.length)),
                w = O,
                v = M.slice(0, O),
                y = v.length;
              y < O;
            )
              v[y++] = 0;
            ((k = N.slice()), k.unshift(0), (E = N[0]), N[1] >= f / 2 && ++E);
            do
              ((d = 0),
                (c = t(N, v, O, y)),
                c < 0
                  ? ((b = v[0]),
                    O != y && (b = b * f + (v[1] || 0)),
                    (d = (b / E) | 0),
                    d > 1
                      ? (d >= f && (d = f - 1),
                        (m = e(N, d)),
                        (h = m.length),
                        (y = v.length),
                        (c = t(m, v, h, y)),
                        c == 1 && (d--, n(m, O < h ? k : N, h)))
                      : (d == 0 && (c = d = 1), (m = N.slice())),
                    (h = m.length),
                    h < y && m.unshift(0),
                    n(v, m, y),
                    c == -1 &&
                      ((y = v.length),
                      (c = t(N, v, O, y)),
                      c < 1 && (d++, n(v, O < y ? k : N, y))),
                    (y = v.length))
                  : c === 0 && (d++, (v = [0])),
                (_[u++] = d),
                c && v[0] ? (v[y++] = M[w] || 0) : ((v = [M[w]]), (y = 1)));
            while ((w++ < T || v[0] !== void 0) && x--);
          }
          return (_[0] || _.shift(), (g.e = l), D(g, s ? o + S(g) + 1 : o));
        };
      })();
      function x(e, t) {
        var n,
          r,
          a,
          o,
          c,
          u,
          f = 0,
          p = 0,
          m = e.constructor,
          h = m.precision;
        if (S(e) > 16) throw Error(s + S(e));
        if (!e.s) return new m(d);
        for (
          t == null ? ((i = !1), (u = h)) : (u = t), c = new m(0.03125);
          e.abs().gte(0.1);
        )
          ((e = e.times(c)), (p += 5));
        for (
          r = ((Math.log(l(2, p)) / Math.LN10) * 2 + 5) | 0,
            u += r,
            n = a = o = new m(d),
            m.precision = u;
          ;
        ) {
          if (
            ((a = D(a.times(e), u)),
            (n = n.times(++f)),
            (c = o.plus(b(a, n, u))),
            y(c.d).slice(0, u) === y(o.d).slice(0, u))
          ) {
            for (; p--;) o = D(o.times(o), u);
            return ((m.precision = h), t == null ? ((i = !0), D(o, h)) : o);
          }
          o = c;
        }
      }
      function S(e) {
        for (var t = e.e * p, n = e.d[0]; n >= 10; n /= 10) t++;
        return t;
      }
      function C(e, t, n) {
        if (t > e.LN10.sd())
          throw (
            (i = !0),
            n && (e.precision = n),
            Error(a + `LN10 precision limit exceeded`)
          );
        return D(new e(e.LN10), t);
      }
      function w(e) {
        for (var t = ``; e--;) t += `0`;
        return t;
      }
      function T(e, t) {
        var n,
          r,
          o,
          s,
          c,
          l,
          u,
          f,
          p,
          m = 1,
          h = 10,
          g = e,
          _ = g.d,
          v = g.constructor,
          x = v.precision;
        if (g.s < 1) throw Error(a + (g.s ? `NaN` : `-Infinity`));
        if (g.eq(d)) return new v(0);
        if ((t == null ? ((i = !1), (f = x)) : (f = t), g.eq(10)))
          return (t ?? (i = !0), C(v, f));
        if (
          ((f += h),
          (v.precision = f),
          (n = y(_)),
          (r = n.charAt(0)),
          (s = S(g)),
          Math.abs(s) < 0x5543df729c000)
        ) {
          for (; (r < 7 && r != 1) || (r == 1 && n.charAt(1) > 3);)
            ((g = g.times(e)), (n = y(g.d)), (r = n.charAt(0)), m++);
          ((s = S(g)),
            r > 1
              ? ((g = new v(`0.` + n)), s++)
              : (g = new v(r + `.` + n.slice(1))));
        } else
          return (
            (u = C(v, f + 2, x).times(s + ``)),
            (g = T(new v(r + `.` + n.slice(1)), f - h).plus(u)),
            (v.precision = x),
            t == null ? ((i = !0), D(g, x)) : g
          );
        for (
          l = c = g = b(g.minus(d), g.plus(d), f), p = D(g.times(g), f), o = 3;
          ;
        ) {
          if (
            ((c = D(c.times(p), f)),
            (u = l.plus(b(c, new v(o), f))),
            y(u.d).slice(0, f) === y(l.d).slice(0, f))
          )
            return (
              (l = l.times(2)),
              s !== 0 && (l = l.plus(C(v, f + 2, x).times(s + ``))),
              (l = b(l, new v(m), f)),
              (v.precision = x),
              t == null ? ((i = !0), D(l, x)) : l
            );
          ((l = u), (o += 2));
        }
      }
      function E(e, t) {
        var n, r, a;
        for (
          (n = t.indexOf(`.`)) > -1 && (t = t.replace(`.`, ``)),
            (r = t.search(/e/i)) > 0
              ? (n < 0 && (n = r),
                (n += +t.slice(r + 1)),
                (t = t.substring(0, r)))
              : n < 0 && (n = t.length),
            r = 0;
          t.charCodeAt(r) === 48;
        )
          ++r;
        for (a = t.length; t.charCodeAt(a - 1) === 48;) --a;
        if (((t = t.slice(r, a)), t)) {
          if (
            ((a -= r),
            (n = n - r - 1),
            (e.e = c(n / p)),
            (e.d = []),
            (r = (n + 1) % p),
            n < 0 && (r += p),
            r < a)
          ) {
            for (r && e.d.push(+t.slice(0, r)), a -= p; r < a;)
              e.d.push(+t.slice(r, (r += p)));
            ((t = t.slice(r)), (r = p - t.length));
          } else r -= a;
          for (; r--;) t += `0`;
          if ((e.d.push(+t), i && (e.e > h || e.e < -h))) throw Error(s + n);
        } else ((e.s = 0), (e.e = 0), (e.d = [0]));
        return e;
      }
      function D(e, t, n) {
        var r,
          a,
          o,
          u,
          d,
          m,
          g,
          _,
          v = e.d;
        for (u = 1, o = v[0]; o >= 10; o /= 10) u++;
        if (((r = t - u), r < 0)) ((r += p), (a = t), (g = v[(_ = 0)]));
        else {
          if (((_ = Math.ceil((r + 1) / p)), (o = v.length), _ >= o)) return e;
          for (g = o = v[_], u = 1; o >= 10; o /= 10) u++;
          ((r %= p), (a = r - p + u));
        }
        if (
          (n !== void 0 &&
            ((o = l(10, u - a - 1)),
            (d = ((g / o) % 10) | 0),
            (m = t < 0 || v[_ + 1] !== void 0 || g % o),
            (m =
              n < 4
                ? (d || m) && (n == 0 || n == (e.s < 0 ? 3 : 2))
                : d > 5 ||
                  (d == 5 &&
                    (n == 4 ||
                      m ||
                      (n == 6 &&
                        ((r > 0 ? (a > 0 ? g / l(10, u - a) : 0) : v[_ - 1]) %
                          10) &
                          1) ||
                      n == (e.s < 0 ? 8 : 7))))),
          t < 1 || !v[0])
        )
          return (
            m
              ? ((o = S(e)),
                (v.length = 1),
                (t = t - o - 1),
                (v[0] = l(10, (p - (t % p)) % p)),
                (e.e = c(-t / p) || 0))
              : ((v.length = 1), (v[0] = e.e = e.s = 0)),
            e
          );
        if (
          (r == 0
            ? ((v.length = _), (o = 1), _--)
            : ((v.length = _ + 1),
              (o = l(10, p - r)),
              (v[_] = a > 0 ? (((g / l(10, u - a)) % l(10, a)) | 0) * o : 0)),
          m)
        )
          for (;;)
            if (_ == 0) {
              (v[0] += o) == f && ((v[0] = 1), ++e.e);
              break;
            } else {
              if (((v[_] += o), v[_] != f)) break;
              ((v[_--] = 0), (o = 1));
            }
        for (r = v.length; v[--r] === 0;) v.pop();
        if (i && (e.e > h || e.e < -h)) throw Error(s + S(e));
        return e;
      }
      function O(e, t) {
        var n,
          r,
          a,
          o,
          s,
          c,
          l,
          u,
          d,
          m,
          h = e.constructor,
          g = h.precision;
        if (!e.s || !t.s)
          return (t.s ? (t.s = -t.s) : (t = new h(e)), i ? D(t, g) : t);
        if (
          ((l = e.d),
          (m = t.d),
          (r = t.e),
          (u = e.e),
          (l = l.slice()),
          (s = u - r),
          s)
        ) {
          for (
            d = s < 0,
              d
                ? ((n = l), (s = -s), (c = m.length))
                : ((n = m), (r = u), (c = l.length)),
              a = Math.max(Math.ceil(g / p), c) + 2,
              s > a && ((s = a), (n.length = 1)),
              n.reverse(),
              a = s;
            a--;
          )
            n.push(0);
          n.reverse();
        } else {
          for (
            a = l.length, c = m.length, d = a < c, d && (c = a), a = 0;
            a < c;
            a++
          )
            if (l[a] != m[a]) {
              d = l[a] < m[a];
              break;
            }
          s = 0;
        }
        for (
          d && ((n = l), (l = m), (m = n), (t.s = -t.s)),
            c = l.length,
            a = m.length - c;
          a > 0;
          --a
        )
          l[c++] = 0;
        for (a = m.length; a > s;) {
          if (l[--a] < m[a]) {
            for (o = a; o && l[--o] === 0;) l[o] = f - 1;
            (--l[o], (l[a] += f));
          }
          l[a] -= m[a];
        }
        for (; l[--c] === 0;) l.pop();
        for (; l[0] === 0; l.shift()) --r;
        return l[0] ? ((t.d = l), (t.e = r), i ? D(t, g) : t) : new h(0);
      }
      function k(e, t, n) {
        var r,
          i = S(e),
          a = y(e.d),
          o = a.length;
        return (
          t
            ? (n && (r = n - o) > 0
                ? (a = a.charAt(0) + `.` + a.slice(1) + w(r))
                : o > 1 && (a = a.charAt(0) + `.` + a.slice(1)),
              (a = a + (i < 0 ? `e` : `e+`) + i))
            : i < 0
              ? ((a = `0.` + w(-i - 1) + a),
                n && (r = n - o) > 0 && (a += w(r)))
              : i >= o
                ? ((a += w(i + 1 - o)),
                  n && (r = n - i - 1) > 0 && (a = a + `.` + w(r)))
                : ((r = i + 1) < o && (a = a.slice(0, r) + `.` + a.slice(r)),
                  n &&
                    (r = n - o) > 0 &&
                    (i + 1 === o && (a += `.`), (a += w(r)))),
          e.s < 0 ? `-` + a : a
        );
      }
      function A(e, t) {
        if (e.length > t) return ((e.length = t), !0);
      }
      function j(e) {
        var t, n, r;
        function i(e) {
          var t = this;
          if (!(t instanceof i)) return new i(e);
          if (((t.constructor = i), e instanceof i)) {
            ((t.s = e.s), (t.e = e.e), (t.d = (e = e.d) ? e.slice() : e));
            return;
          }
          if (typeof e == `number`) {
            if (e * 0 != 0) throw Error(o + e);
            if (e > 0) t.s = 1;
            else if (e < 0) ((e = -e), (t.s = -1));
            else {
              ((t.s = 0), (t.e = 0), (t.d = [0]));
              return;
            }
            if (e === ~~e && e < 1e7) {
              ((t.e = 0), (t.d = [e]));
              return;
            }
            return E(t, e.toString());
          } else if (typeof e != `string`) throw Error(o + e);
          if (
            (e.charCodeAt(0) === 45
              ? ((e = e.slice(1)), (t.s = -1))
              : (t.s = 1),
            u.test(e))
          )
            E(t, e);
          else throw Error(o + e);
        }
        if (
          ((i.prototype = g),
          (i.ROUND_UP = 0),
          (i.ROUND_DOWN = 1),
          (i.ROUND_CEIL = 2),
          (i.ROUND_FLOOR = 3),
          (i.ROUND_HALF_UP = 4),
          (i.ROUND_HALF_DOWN = 5),
          (i.ROUND_HALF_EVEN = 6),
          (i.ROUND_HALF_CEIL = 7),
          (i.ROUND_HALF_FLOOR = 8),
          (i.clone = j),
          (i.config = i.set = M),
          e === void 0 && (e = {}),
          e)
        )
          for (
            r = [`precision`, `rounding`, `toExpNeg`, `toExpPos`, `LN10`],
              t = 0;
            t < r.length;
          )
            e.hasOwnProperty((n = r[t++])) || (e[n] = this[n]);
        return (i.config(e), i);
      }
      function M(e) {
        if (!e || typeof e != `object`) throw Error(a + `Object expected`);
        var t,
          r,
          i,
          s = [
            `precision`,
            1,
            n,
            `rounding`,
            0,
            8,
            `toExpNeg`,
            -1 / 0,
            0,
            `toExpPos`,
            0,
            1 / 0,
          ];
        for (t = 0; t < s.length; t += 3)
          if ((i = e[(r = s[t])]) !== void 0)
            if (c(i) === i && i >= s[t + 1] && i <= s[t + 2]) this[r] = i;
            else throw Error(o + r + `: ` + i);
        if ((i = e[(r = `LN10`)]) !== void 0)
          if (i == Math.LN10) this[r] = new this(i);
          else throw Error(o + r + `: ` + i);
        return this;
      }
      ((r = j(r)),
        (r.default = r.Decimal = r),
        (d = new r(1)),
        typeof define == `function` && define.amd
          ? define(function () {
              return r;
            })
          : t !== void 0 && t.exports
            ? (t.exports = r)
            : ((e ||=
                typeof self < `u` && self && self.self == self
                  ? self
                  : Function(`return this`)()),
              (e.Decimal = r)));
    })(e);
  })(),
);
function Lp(e) {
  return e === 0
    ? 1
    : Math.floor(new G.default(e).abs().log(10).toNumber()) + 1;
}
function Rp(e, t, n) {
  for (var r = new G.default(e), i = 0, a = []; r.lt(t) && i < 1e5;)
    (a.push(r.toNumber()), (r = r.add(n)), i++);
  return a;
}
function zp(e, t) {
  return Wp(e) || Up(e, t) || Vp(e, t) || Bp();
}
function Bp() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Vp(e, t) {
  if (e) {
    if (typeof e == `string`) return Hp(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? Hp(e, t)
          : void 0
    );
  }
}
function Hp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Up(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n != null) {
    var r,
      i,
      a,
      o,
      s = [],
      c = !0,
      l = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        c = !1;
      } else
        for (
          ;
          !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t);
          c = !0
        );
    } catch (e) {
      ((l = !0), (i = e));
    } finally {
      try {
        if (!c && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return s;
  }
}
function Wp(e) {
  if (Array.isArray(e)) return e;
}
var Gp = (e) => {
    var t = zp(e, 2),
      n = t[0],
      r = t[1],
      i = n,
      a = r;
    return (n > r && ((i = r), (a = n)), [i, a]);
  },
  Kp = (e, t, n) => {
    if (e.lte(0)) return new G.default(0);
    var r = Lp(e.toNumber()),
      i = new G.default(10).pow(r),
      a = e.div(i),
      o = r === 1 ? 0.1 : 0.05,
      s = new G.default(Math.ceil(a.div(o).toNumber())).add(n).mul(o).mul(i);
    return t
      ? new G.default(s.toNumber())
      : new G.default(Math.ceil(s.toNumber()));
  },
  qp = (e, t, n) => {
    if (e.lte(0)) return new G.default(0);
    var r = [1, 2, 2.5, 5],
      i = e.toNumber(),
      a = Math.floor(new G.default(i).abs().log(10).toNumber()),
      o = new G.default(10).pow(a),
      s = e.div(o).toNumber(),
      c = r.findIndex((e) => e >= s - 1e-10);
    if ((c === -1 && ((o = o.mul(10)), (c = 0)), (c += n), c >= r.length)) {
      var l = Math.floor(c / r.length);
      ((c %= r.length), (o = o.mul(new G.default(10).pow(l))));
    }
    var u = new G.default(r[c] ?? 1).mul(o);
    return t ? u : new G.default(Math.ceil(u.toNumber()));
  },
  Jp = (e, t, n) => {
    var r = new G.default(1),
      i = new G.default(e);
    if (!i.isint() && n) {
      var a = Math.abs(e);
      a < 1
        ? ((r = new G.default(10).pow(Lp(e) - 1)),
          (i = new G.default(Math.floor(i.div(r).toNumber())).mul(r)))
        : a > 1 && (i = new G.default(Math.floor(e)));
    } else
      e === 0
        ? (i = new G.default(Math.floor((t - 1) / 2)))
        : n || (i = new G.default(Math.floor(e)));
    for (var o = Math.floor((t - 1) / 2), s = [], c = 0; c < t; c++)
      s.push(i.add(new G.default(c - o).mul(r)).toNumber());
    return s;
  },
  Yp = function (e, t, n, r) {
    var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0,
      a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : Kp;
    if (!Number.isFinite((t - e) / (n - 1)))
      return {
        step: new G.default(0),
        tickMin: new G.default(0),
        tickMax: new G.default(0),
      };
    var o = a(new G.default(t).sub(e).div(n - 1), r, i),
      s;
    e <= 0 && t >= 0
      ? (s = new G.default(0))
      : ((s = new G.default(e).add(t).div(2)),
        (s = s.sub(new G.default(s).mod(o))));
    var c = Math.ceil(s.sub(e).div(o).toNumber()),
      l = Math.ceil(new G.default(t).sub(s).div(o).toNumber()),
      u = c + l + 1;
    return u > n
      ? Yp(e, t, n, r, i + 1, a)
      : (u < n &&
          ((l = t > 0 ? l + (n - u) : l), (c = t > 0 ? c : c + (n - u))),
        {
          step: o,
          tickMin: s.sub(new G.default(c).mul(o)),
          tickMax: s.add(new G.default(l).mul(o)),
        });
  },
  Xp = function (e) {
    var t = zp(e, 2),
      n = t[0],
      r = t[1],
      i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6,
      a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
      o =
        arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : `auto`,
      s = Math.max(i, 2),
      c = zp(Gp([n, r]), 2),
      l = c[0],
      u = c[1];
    if (l === -1 / 0 || u === 1 / 0) {
      var d =
        u === 1 / 0
          ? [l, ...Array(i - 1).fill(1 / 0)]
          : [...Array(i - 1).fill(-1 / 0), u];
      return n > r ? d.reverse() : d;
    }
    if (l === u) return Jp(l, i, a);
    var f = Yp(l, u, s, a, 0, o === `snap125` ? qp : Kp),
      p = f.step,
      m = f.tickMin,
      h = f.tickMax,
      g = Rp(m, h.add(new G.default(0.1).mul(p)), p);
    return n > r ? g.reverse() : g;
  },
  Zp = function (e, t) {
    var n = zp(e, 2),
      r = n[0],
      i = n[1],
      a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
      o =
        arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : `auto`,
      s = zp(Gp([r, i]), 2),
      c = s[0],
      l = s[1];
    if (c === -1 / 0 || l === 1 / 0) return [r, i];
    if (c === l) return [c];
    var u = o === `snap125` ? qp : Kp,
      d = Math.max(t, 2),
      f = u(new G.default(l).sub(c).div(d - 1), a, 0),
      p = [...Rp(new G.default(c), new G.default(l), f), l];
    if (a === !1) {
      p = p.map((e) => Math.round(e));
      var m = p.length - 1;
      m > 0 && p[m] === p[m - 1] && (p = p.slice(0, m));
    }
    return r > i ? p.reverse() : p;
  },
  Qp = (e) => e.rootProps.maxBarSize,
  $p = (e) => e.rootProps.barGap,
  em = (e) => e.rootProps.barCategoryGap,
  tm = (e) => e.rootProps.barSize,
  nm = (e) => e.rootProps.stackOffset,
  rm = (e) => e.rootProps.reverseStackOrder,
  im = (e) => e.options.chartName,
  am = (e) => e.rootProps.syncId,
  om = (e) => e.rootProps.syncMethod,
  sm = (e) => e.options.eventEmitter,
  cm = {
    grid: -100,
    barBackground: -50,
    area: 100,
    cursorRectangle: 200,
    bar: 300,
    line: 400,
    axis: 500,
    scatter: 600,
    activeBar: 1e3,
    cursorLine: 1100,
    activeDot: 1200,
    label: 2e3,
  },
  lm = {
    allowDecimals: !1,
    allowDuplicatedCategory: !0,
    allowDataOverflow: !1,
    angle: 0,
    angleAxisId: 0,
    axisLine: !0,
    axisLineType: `polygon`,
    cx: 0,
    cy: 0,
    hide: !1,
    includeHidden: !1,
    label: !1,
    niceTicks: `auto`,
    orientation: `outer`,
    reversed: !1,
    scale: `auto`,
    tick: !0,
    tickLine: !0,
    tickSize: 8,
    type: `auto`,
    zIndex: cm.axis,
  },
  um = {
    allowDataOverflow: !1,
    allowDecimals: !1,
    allowDuplicatedCategory: !0,
    angle: 0,
    axisLine: !0,
    includeHidden: !1,
    hide: !1,
    niceTicks: `auto`,
    label: !1,
    orientation: `right`,
    radiusAxisId: 0,
    reversed: !1,
    scale: `auto`,
    stroke: `#ccc`,
    tick: !0,
    tickCount: 5,
    tickLine: !0,
    type: `auto`,
    zIndex: cm.axis,
  },
  dm = (e, t) => {
    if (!(!e || !t)) return e != null && e.reversed ? [t[1], t[0]] : t;
  };
function fm(e, t, n) {
  if (n !== `auto`) return n;
  if (e != null) return Ns(e, t) ? `category` : `number`;
}
function pm(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function mm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? pm(Object(n), !0).forEach(function (t) {
          hm(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : pm(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function hm(e, t, n) {
  return (
    (t = gm(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function gm(e) {
  var t = _m(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function _m(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var vm = {
    allowDataOverflow: lm.allowDataOverflow,
    allowDecimals: lm.allowDecimals,
    allowDuplicatedCategory: !1,
    dataKey: void 0,
    domain: void 0,
    id: lm.angleAxisId,
    includeHidden: !1,
    name: void 0,
    reversed: lm.reversed,
    scale: lm.scale,
    tick: lm.tick,
    tickCount: void 0,
    ticks: void 0,
    type: lm.type,
    unit: void 0,
    niceTicks: `auto`,
  },
  ym = {
    allowDataOverflow: um.allowDataOverflow,
    allowDecimals: um.allowDecimals,
    allowDuplicatedCategory: um.allowDuplicatedCategory,
    dataKey: void 0,
    domain: void 0,
    id: um.radiusAxisId,
    includeHidden: um.includeHidden,
    name: void 0,
    reversed: um.reversed,
    scale: um.scale,
    tick: um.tick,
    tickCount: um.tickCount,
    ticks: void 0,
    type: um.type,
    unit: void 0,
    niceTicks: `auto`,
  },
  bm = T(
    [
      (e, t) => {
        if (t != null) return e.polarAxis.angleAxis[t];
      },
      ll,
    ],
    (e, t) => {
      if (e != null) return e;
      var n = fm(t, `angleAxis`, vm.type) ?? `category`;
      return mm(mm({}, vm), {}, { type: n });
    },
  ),
  xm = T([(e, t) => e.polarAxis.radiusAxis[t], ll], (e, t) => {
    if (e != null) return e;
    var n = fm(t, `radiusAxis`, ym.type) ?? `category`;
    return mm(mm({}, ym), {}, { type: n });
  }),
  Sm = (e) => e.polarOptions,
  Cm = T([Qs, $s, U], Yf),
  wm = T([Sm, Cm], (e, t) => {
    if (e != null) return Qt(e.innerRadius, t, 0);
  }),
  Tm = T([Sm, Cm], (e, t) => {
    if (e != null) return Qt(e.outerRadius, t, t * 0.8);
  }),
  Em = T([Sm], (e) => (e == null ? [0, 0] : [e.startAngle, e.endAngle]));
T([bm, Em], dm);
var Dm = T([Cm, wm, Tm], (e, t, n) => {
  if (!(e == null || t == null || n == null)) return [t, n];
});
T([xm, Dm], dm);
var Om = T([W, Sm, wm, Tm, Qs, $s], (e, t, n, r, i, a) => {
    if (!(
      (e !== `centric` && e !== `radial`) ||
      t == null ||
      n == null ||
      r == null
    )) {
      var o = t.cx,
        s = t.cy,
        c = t.startAngle,
        l = t.endAngle;
      return {
        cx: Qt(o, i, i / 2),
        cy: Qt(s, a, a / 2),
        innerRadius: n,
        outerRadius: r,
        startAngle: c,
        endAngle: l,
        clockWise: !1,
      };
    }
  }),
  K = (e, t) => t,
  km = (e, t, n) => n;
function Am(e) {
  return e?.id;
}
function jm(e, t, n) {
  var r = t.chartData,
    i = r === void 0 ? [] : r,
    a = n.allowDuplicatedCategory,
    o = n.dataKey,
    s = new Map();
  return (
    e.forEach((e) => {
      var t = e.data ?? i;
      if (!(t == null || t.length === 0)) {
        var n = Am(e);
        t.forEach((t, r) => {
          var i = o == null || a ? r : String(H(t, o, null)),
            c = H(t, e.dataKey, 0),
            l = s.has(i) ? s.get(i) : {};
          (Object.assign(l, { [n]: c }), s.set(i, l));
        });
      }
    }),
    Array.from(s.values())
  );
}
function Mm(e) {
  return `stackId` in e && e.stackId != null && e.dataKey != null;
}
var Nm = (e, t) =>
  e === t ? !0 : e == null || t == null ? !1 : e[0] === t[0] && e[1] === t[1];
function Pm(e, t) {
  return Array.isArray(e) &&
    Array.isArray(t) &&
    e.length === 0 &&
    t.length === 0
    ? !0
    : e === t;
}
function Fm(e, t) {
  if (e.length === t.length) {
    for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
    return !0;
  }
  return !1;
}
var Im = (e) => {
    var t = W(e);
    return t === `horizontal`
      ? `xAxis`
      : t === `vertical`
        ? `yAxis`
        : t === `centric`
          ? `angleAxis`
          : `radiusAxis`;
  },
  Lm = (e) => e.tooltip.settings.axisId;
function Rm(e) {
  if (e != null) {
    var t = e.ticks,
      n = e.bandwidth,
      r = e.range(),
      i = [Math.min(...r), Math.max(...r)];
    return {
      domain: () => e.domain(),
      range: (function (e) {
        function t() {
          return e.apply(this, arguments);
        }
        return (
          (t.toString = function () {
            return e.toString();
          }),
          t
        );
      })(() => i),
      rangeMin: () => i[0],
      rangeMax: () => i[1],
      isInRange(e) {
        var t = i[0],
          n = i[1];
        return t <= n ? e >= t && e <= n : e >= n && e <= t;
      },
      bandwidth: n ? () => n.call(e) : void 0,
      ticks: t ? (n) => t.call(e, n) : void 0,
      map: (t, n) => {
        var r = e(t);
        if (r != null) {
          if (e.bandwidth && n != null && n.position) {
            var i = e.bandwidth();
            switch (n.position) {
              case `middle`:
                r += i / 2;
                break;
              case `end`:
                r += i;
                break;
              default:
                break;
            }
          }
          return r;
        }
      },
    };
  }
}
var zm = (e, t) => {
  if (t != null)
    switch (e) {
      case `linear`:
        if (!Np(t)) {
          for (var n, r, i = 0; i < t.length; i++) {
            var a = t[i];
            V(a) &&
              ((n === void 0 || a < n) && (n = a),
              (r === void 0 || a > r) && (r = a));
          }
          return n !== void 0 && r !== void 0 ? [n, r] : void 0;
        }
        return t;
      default:
        return t;
    }
};
function Bm(e, t) {
  return e == null || t == null
    ? NaN
    : e < t
      ? -1
      : e > t
        ? 1
        : e >= t
          ? 0
          : NaN;
}
function Vm(e, t) {
  return e == null || t == null
    ? NaN
    : t < e
      ? -1
      : t > e
        ? 1
        : t >= e
          ? 0
          : NaN;
}
function Hm(e) {
  let t, n, r;
  e.length === 2
    ? ((t = e === Bm || e === Vm ? e : Um), (n = e), (r = e))
    : ((t = Bm), (n = (t, n) => Bm(e(t), n)), (r = (t, n) => e(t) - n));
  function i(e, r, i = 0, a = e.length) {
    if (i < a) {
      if (t(r, r) !== 0) return a;
      do {
        let t = (i + a) >>> 1;
        n(e[t], r) < 0 ? (i = t + 1) : (a = t);
      } while (i < a);
    }
    return i;
  }
  function a(e, r, i = 0, a = e.length) {
    if (i < a) {
      if (t(r, r) !== 0) return a;
      do {
        let t = (i + a) >>> 1;
        n(e[t], r) <= 0 ? (i = t + 1) : (a = t);
      } while (i < a);
    }
    return i;
  }
  function o(e, t, n = 0, a = e.length) {
    let o = i(e, t, n, a - 1);
    return o > n && r(e[o - 1], t) > -r(e[o], t) ? o - 1 : o;
  }
  return { left: i, center: o, right: a };
}
function Um() {
  return 0;
}
function Wm(e) {
  return e === null ? NaN : +e;
}
function* Gm(e, t) {
  if (t === void 0) for (let t of e) t != null && (t = +t) >= t && (yield t);
  else {
    let n = -1;
    for (let r of e) (r = t(r, ++n, e)) != null && (r = +r) >= r && (yield r);
  }
}
var Km = Hm(Bm),
  qm = Km.right;
(Km.left, Hm(Wm).center);
var Jm = class extends Map {
  constructor(e, t = Qm) {
    if (
      (super(),
      Object.defineProperties(this, {
        _intern: { value: new Map() },
        _key: { value: t },
      }),
      e != null)
    )
      for (let [t, n] of e) this.set(t, n);
  }
  get(e) {
    return super.get(Ym(this, e));
  }
  has(e) {
    return super.has(Ym(this, e));
  }
  set(e, t) {
    return super.set(Xm(this, e), t);
  }
  delete(e) {
    return super.delete(Zm(this, e));
  }
};
function Ym({ _intern: e, _key: t }, n) {
  let r = t(n);
  return e.has(r) ? e.get(r) : n;
}
function Xm({ _intern: e, _key: t }, n) {
  let r = t(n);
  return e.has(r) ? e.get(r) : (e.set(r, n), n);
}
function Zm({ _intern: e, _key: t }, n) {
  let r = t(n);
  return (e.has(r) && ((n = e.get(r)), e.delete(r)), n);
}
function Qm(e) {
  return typeof e == `object` && e ? e.valueOf() : e;
}
function $m(e = Bm) {
  if (e === Bm) return eh;
  if (typeof e != `function`) throw TypeError(`compare is not a function`);
  return (t, n) => {
    let r = e(t, n);
    return r || r === 0 ? r : (e(n, n) === 0) - (e(t, t) === 0);
  };
}
function eh(e, t) {
  return (
    (e == null || !(e >= e)) - (t == null || !(t >= t)) ||
    (e < t ? -1 : +(e > t))
  );
}
var th = Math.sqrt(50),
  nh = Math.sqrt(10),
  rh = Math.sqrt(2);
function ih(e, t, n) {
  let r = (t - e) / Math.max(0, n),
    i = Math.floor(Math.log10(r)),
    a = r / 10 ** i,
    o = a >= th ? 10 : a >= nh ? 5 : a >= rh ? 2 : 1,
    s,
    c,
    l;
  return (
    i < 0
      ? ((l = 10 ** -i / o),
        (s = Math.round(e * l)),
        (c = Math.round(t * l)),
        s / l < e && ++s,
        c / l > t && --c,
        (l = -l))
      : ((l = 10 ** i * o),
        (s = Math.round(e / l)),
        (c = Math.round(t / l)),
        s * l < e && ++s,
        c * l > t && --c),
    c < s && 0.5 <= n && n < 2 ? ih(e, t, n * 2) : [s, c, l]
  );
}
function ah(e, t, n) {
  if (((t = +t), (e = +e), (n = +n), !(n > 0))) return [];
  if (e === t) return [e];
  let r = t < e,
    [i, a, o] = r ? ih(t, e, n) : ih(e, t, n);
  if (!(a >= i)) return [];
  let s = a - i + 1,
    c = Array(s);
  if (r)
    if (o < 0) for (let e = 0; e < s; ++e) c[e] = (a - e) / -o;
    else for (let e = 0; e < s; ++e) c[e] = (a - e) * o;
  else if (o < 0) for (let e = 0; e < s; ++e) c[e] = (i + e) / -o;
  else for (let e = 0; e < s; ++e) c[e] = (i + e) * o;
  return c;
}
function oh(e, t, n) {
  return ((t = +t), (e = +e), (n = +n), ih(e, t, n)[2]);
}
function sh(e, t, n) {
  ((t = +t), (e = +e), (n = +n));
  let r = t < e,
    i = r ? oh(t, e, n) : oh(e, t, n);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function ch(e, t) {
  let n;
  if (t === void 0)
    for (let t of e)
      t != null && (n < t || (n === void 0 && t >= t)) && (n = t);
  else {
    let r = -1;
    for (let i of e)
      (i = t(i, ++r, e)) != null &&
        (n < i || (n === void 0 && i >= i)) &&
        (n = i);
  }
  return n;
}
function lh(e, t) {
  let n;
  if (t === void 0)
    for (let t of e)
      t != null && (n > t || (n === void 0 && t >= t)) && (n = t);
  else {
    let r = -1;
    for (let i of e)
      (i = t(i, ++r, e)) != null &&
        (n > i || (n === void 0 && i >= i)) &&
        (n = i);
  }
  return n;
}
function uh(e, t, n = 0, r = 1 / 0, i) {
  if (
    ((t = Math.floor(t)),
    (n = Math.floor(Math.max(0, n))),
    (r = Math.floor(Math.min(e.length - 1, r))),
    !(n <= t && t <= r))
  )
    return e;
  for (i = i === void 0 ? eh : $m(i); r > n;) {
    if (r - n > 600) {
      let a = r - n + 1,
        o = t - n + 1,
        s = Math.log(a),
        c = 0.5 * Math.exp((2 * s) / 3),
        l = 0.5 * Math.sqrt((s * c * (a - c)) / a) * (o - a / 2 < 0 ? -1 : 1),
        u = Math.max(n, Math.floor(t - (o * c) / a + l)),
        d = Math.min(r, Math.floor(t + ((a - o) * c) / a + l));
      uh(e, t, u, d, i);
    }
    let a = e[t],
      o = n,
      s = r;
    for (dh(e, n, t), i(e[r], a) > 0 && dh(e, n, r); o < s;) {
      for (dh(e, o, s), ++o, --s; i(e[o], a) < 0;) ++o;
      for (; i(e[s], a) > 0;) --s;
    }
    (i(e[n], a) === 0 ? dh(e, n, s) : (++s, dh(e, s, r)),
      s <= t && (n = s + 1),
      t <= s && (r = s - 1));
  }
  return e;
}
function dh(e, t, n) {
  let r = e[t];
  ((e[t] = e[n]), (e[n] = r));
}
function fh(e, t, n) {
  if (
    ((e = Float64Array.from(Gm(e, n))), !(!(r = e.length) || isNaN((t = +t))))
  ) {
    if (t <= 0 || r < 2) return lh(e);
    if (t >= 1) return ch(e);
    var r,
      i = (r - 1) * t,
      a = Math.floor(i),
      o = ch(uh(e, a).subarray(0, a + 1));
    return o + (lh(e.subarray(a + 1)) - o) * (i - a);
  }
}
function ph(e, t, n = Wm) {
  if (!(!(r = e.length) || isNaN((t = +t)))) {
    if (t <= 0 || r < 2) return +n(e[0], 0, e);
    if (t >= 1) return +n(e[r - 1], r - 1, e);
    var r,
      i = (r - 1) * t,
      a = Math.floor(i),
      o = +n(e[a], a, e);
    return o + (+n(e[a + 1], a + 1, e) - o) * (i - a);
  }
}
function mh(e, t, n) {
  ((e = +e),
    (t = +t),
    (n = (i = arguments.length) < 2 ? ((t = e), (e = 0), 1) : i < 3 ? 1 : +n));
  for (
    var r = -1, i = Math.max(0, Math.ceil((t - e) / n)) | 0, a = Array(i);
    ++r < i;
  )
    a[r] = e + r * n;
  return a;
}
function hh(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
function gh(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      typeof e == `function` ? this.interpolator(e) : this.range(e);
      break;
    default:
      (this.domain(e),
        typeof t == `function` ? this.interpolator(t) : this.range(t));
      break;
  }
  return this;
}
var _h = Symbol(`implicit`);
function vh() {
  var e = new Jm(),
    t = [],
    n = [],
    r = _h;
  function i(i) {
    let a = e.get(i);
    if (a === void 0) {
      if (r !== _h) return r;
      e.set(i, (a = t.push(i) - 1));
    }
    return n[a % n.length];
  }
  return (
    (i.domain = function (n) {
      if (!arguments.length) return t.slice();
      ((t = []), (e = new Jm()));
      for (let r of n) e.has(r) || e.set(r, t.push(r) - 1);
      return i;
    }),
    (i.range = function (e) {
      return arguments.length ? ((n = Array.from(e)), i) : n.slice();
    }),
    (i.unknown = function (e) {
      return arguments.length ? ((r = e), i) : r;
    }),
    (i.copy = function () {
      return vh(t, n).unknown(r);
    }),
    hh.apply(i, arguments),
    i
  );
}
function yh() {
  var e = vh().unknown(void 0),
    t = e.domain,
    n = e.range,
    r = 0,
    i = 1,
    a,
    o,
    s = !1,
    c = 0,
    l = 0,
    u = 0.5;
  delete e.unknown;
  function d() {
    var e = t().length,
      d = i < r,
      f = d ? i : r,
      p = d ? r : i;
    ((a = (p - f) / Math.max(1, e - c + l * 2)),
      s && (a = Math.floor(a)),
      (f += (p - f - a * (e - c)) * u),
      (o = a * (1 - c)),
      s && ((f = Math.round(f)), (o = Math.round(o))));
    var m = mh(e).map(function (e) {
      return f + a * e;
    });
    return n(d ? m.reverse() : m);
  }
  return (
    (e.domain = function (e) {
      return arguments.length ? (t(e), d()) : t();
    }),
    (e.range = function (e) {
      return arguments.length
        ? (([r, i] = e), (r = +r), (i = +i), d())
        : [r, i];
    }),
    (e.rangeRound = function (e) {
      return (([r, i] = e), (r = +r), (i = +i), (s = !0), d());
    }),
    (e.bandwidth = function () {
      return o;
    }),
    (e.step = function () {
      return a;
    }),
    (e.round = function (e) {
      return arguments.length ? ((s = !!e), d()) : s;
    }),
    (e.padding = function (e) {
      return arguments.length ? ((c = Math.min(1, (l = +e))), d()) : c;
    }),
    (e.paddingInner = function (e) {
      return arguments.length ? ((c = Math.min(1, e)), d()) : c;
    }),
    (e.paddingOuter = function (e) {
      return arguments.length ? ((l = +e), d()) : l;
    }),
    (e.align = function (e) {
      return arguments.length ? ((u = Math.max(0, Math.min(1, e))), d()) : u;
    }),
    (e.copy = function () {
      return yh(t(), [r, i]).round(s).paddingInner(c).paddingOuter(l).align(u);
    }),
    hh.apply(d(), arguments)
  );
}
function bh(e) {
  var t = e.copy;
  return (
    (e.padding = e.paddingOuter),
    delete e.paddingInner,
    delete e.paddingOuter,
    (e.copy = function () {
      return bh(t());
    }),
    e
  );
}
function xh() {
  return bh(yh.apply(null, arguments).paddingInner(1));
}
function Sh(e, t, n) {
  ((e.prototype = t.prototype = n), (n.constructor = e));
}
function Ch(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function wh() {}
var Th = 0.7,
  Eh = 1 / Th,
  Dh = `\\s*([+-]?\\d+)\\s*`,
  Oh = `\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*`,
  kh = `\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*`,
  Ah = /^#([0-9a-f]{3,8})$/,
  jh = RegExp(`^rgb\\(${Dh},${Dh},${Dh}\\)$`),
  Mh = RegExp(`^rgb\\(${kh},${kh},${kh}\\)$`),
  Nh = RegExp(`^rgba\\(${Dh},${Dh},${Dh},${Oh}\\)$`),
  Ph = RegExp(`^rgba\\(${kh},${kh},${kh},${Oh}\\)$`),
  Fh = RegExp(`^hsl\\(${Oh},${kh},${kh}\\)$`),
  Ih = RegExp(`^hsla\\(${Oh},${kh},${kh},${Oh}\\)$`),
  Lh = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  };
Sh(wh, Hh, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Rh,
  formatHex: Rh,
  formatHex8: zh,
  formatHsl: Bh,
  formatRgb: Vh,
  toString: Vh,
});
function Rh() {
  return this.rgb().formatHex();
}
function zh() {
  return this.rgb().formatHex8();
}
function Bh() {
  return tg(this).formatHsl();
}
function Vh() {
  return this.rgb().formatRgb();
}
function Hh(e) {
  var t, n;
  return (
    (e = (e + ``).trim().toLowerCase()),
    (t = Ah.exec(e))
      ? ((n = t[1].length),
        (t = parseInt(t[1], 16)),
        n === 6
          ? Uh(t)
          : n === 3
            ? new qh(
                ((t >> 8) & 15) | ((t >> 4) & 240),
                ((t >> 4) & 15) | (t & 240),
                ((t & 15) << 4) | (t & 15),
                1,
              )
            : n === 8
              ? Wh(
                  (t >> 24) & 255,
                  (t >> 16) & 255,
                  (t >> 8) & 255,
                  (t & 255) / 255,
                )
              : n === 4
                ? Wh(
                    ((t >> 12) & 15) | ((t >> 8) & 240),
                    ((t >> 8) & 15) | ((t >> 4) & 240),
                    ((t >> 4) & 15) | (t & 240),
                    (((t & 15) << 4) | (t & 15)) / 255,
                  )
                : null)
      : (t = jh.exec(e))
        ? new qh(t[1], t[2], t[3], 1)
        : (t = Mh.exec(e))
          ? new qh(
              (t[1] * 255) / 100,
              (t[2] * 255) / 100,
              (t[3] * 255) / 100,
              1,
            )
          : (t = Nh.exec(e))
            ? Wh(t[1], t[2], t[3], t[4])
            : (t = Ph.exec(e))
              ? Wh(
                  (t[1] * 255) / 100,
                  (t[2] * 255) / 100,
                  (t[3] * 255) / 100,
                  t[4],
                )
              : (t = Fh.exec(e))
                ? eg(t[1], t[2] / 100, t[3] / 100, 1)
                : (t = Ih.exec(e))
                  ? eg(t[1], t[2] / 100, t[3] / 100, t[4])
                  : Lh.hasOwnProperty(e)
                    ? Uh(Lh[e])
                    : e === `transparent`
                      ? new qh(NaN, NaN, NaN, 0)
                      : null
  );
}
function Uh(e) {
  return new qh((e >> 16) & 255, (e >> 8) & 255, e & 255, 1);
}
function Wh(e, t, n, r) {
  return (r <= 0 && (e = t = n = NaN), new qh(e, t, n, r));
}
function Gh(e) {
  return (
    e instanceof wh || (e = Hh(e)),
    e ? ((e = e.rgb()), new qh(e.r, e.g, e.b, e.opacity)) : new qh()
  );
}
function Kh(e, t, n, r) {
  return arguments.length === 1 ? Gh(e) : new qh(e, t, n, r ?? 1);
}
function qh(e, t, n, r) {
  ((this.r = +e), (this.g = +t), (this.b = +n), (this.opacity = +r));
}
Sh(
  qh,
  Kh,
  Ch(wh, {
    brighter(e) {
      return (
        (e = e == null ? Eh : Eh ** +e),
        new qh(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? Th : Th ** +e),
        new qh(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    rgb() {
      return this;
    },
    clamp() {
      return new qh(Qh(this.r), Qh(this.g), Qh(this.b), Zh(this.opacity));
    },
    displayable() {
      return (
        -0.5 <= this.r &&
        this.r < 255.5 &&
        -0.5 <= this.g &&
        this.g < 255.5 &&
        -0.5 <= this.b &&
        this.b < 255.5 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    hex: Jh,
    formatHex: Jh,
    formatHex8: Yh,
    formatRgb: Xh,
    toString: Xh,
  }),
);
function Jh() {
  return `#${$h(this.r)}${$h(this.g)}${$h(this.b)}`;
}
function Yh() {
  return `#${$h(this.r)}${$h(this.g)}${$h(this.b)}${$h((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Xh() {
  let e = Zh(this.opacity);
  return `${e === 1 ? `rgb(` : `rgba(`}${Qh(this.r)}, ${Qh(this.g)}, ${Qh(this.b)}${e === 1 ? `)` : `, ${e})`}`;
}
function Zh(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Qh(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function $h(e) {
  return ((e = Qh(e)), (e < 16 ? `0` : ``) + e.toString(16));
}
function eg(e, t, n, r) {
  return (
    r <= 0
      ? (e = t = n = NaN)
      : n <= 0 || n >= 1
        ? (e = t = NaN)
        : t <= 0 && (e = NaN),
    new rg(e, t, n, r)
  );
}
function tg(e) {
  if (e instanceof rg) return new rg(e.h, e.s, e.l, e.opacity);
  if ((e instanceof wh || (e = Hh(e)), !e)) return new rg();
  if (e instanceof rg) return e;
  e = e.rgb();
  var t = e.r / 255,
    n = e.g / 255,
    r = e.b / 255,
    i = Math.min(t, n, r),
    a = Math.max(t, n, r),
    o = NaN,
    s = a - i,
    c = (a + i) / 2;
  return (
    s
      ? ((o =
          t === a
            ? (n - r) / s + (n < r) * 6
            : n === a
              ? (r - t) / s + 2
              : (t - n) / s + 4),
        (s /= c < 0.5 ? a + i : 2 - a - i),
        (o *= 60))
      : (s = c > 0 && c < 1 ? 0 : o),
    new rg(o, s, c, e.opacity)
  );
}
function ng(e, t, n, r) {
  return arguments.length === 1 ? tg(e) : new rg(e, t, n, r ?? 1);
}
function rg(e, t, n, r) {
  ((this.h = +e), (this.s = +t), (this.l = +n), (this.opacity = +r));
}
Sh(
  rg,
  ng,
  Ch(wh, {
    brighter(e) {
      return (
        (e = e == null ? Eh : Eh ** +e),
        new rg(this.h, this.s, this.l * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? Th : Th ** +e),
        new rg(this.h, this.s, this.l * e, this.opacity)
      );
    },
    rgb() {
      var e = (this.h % 360) + (this.h < 0) * 360,
        t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
        n = this.l,
        r = n + (n < 0.5 ? n : 1 - n) * t,
        i = 2 * n - r;
      return new qh(
        og(e >= 240 ? e - 240 : e + 120, i, r),
        og(e, i, r),
        og(e < 120 ? e + 240 : e - 120, i, r),
        this.opacity,
      );
    },
    clamp() {
      return new rg(ig(this.h), ag(this.s), ag(this.l), Zh(this.opacity));
    },
    displayable() {
      return (
        ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
        0 <= this.l &&
        this.l <= 1 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    formatHsl() {
      let e = Zh(this.opacity);
      return `${e === 1 ? `hsl(` : `hsla(`}${ig(this.h)}, ${ag(this.s) * 100}%, ${ag(this.l) * 100}%${e === 1 ? `)` : `, ${e})`}`;
    },
  }),
);
function ig(e) {
  return ((e = (e || 0) % 360), e < 0 ? e + 360 : e);
}
function ag(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function og(e, t, n) {
  return (
    (e < 60
      ? t + ((n - t) * e) / 60
      : e < 180
        ? n
        : e < 240
          ? t + ((n - t) * (240 - e)) / 60
          : t) * 255
  );
}
var sg = (e) => () => e;
function cg(e, t) {
  return function (n) {
    return e + n * t;
  };
}
function lg(e, t, n) {
  return (
    (e **= +n),
    (t = t ** +n - e),
    (n = 1 / n),
    function (r) {
      return (e + r * t) ** +n;
    }
  );
}
function ug(e) {
  return (e = +e) == 1
    ? dg
    : function (t, n) {
        return n - t ? lg(t, n, e) : sg(isNaN(t) ? n : t);
      };
}
function dg(e, t) {
  var n = t - e;
  return n ? cg(e, n) : sg(isNaN(e) ? t : e);
}
var fg = (function e(t) {
  var n = ug(t);
  function r(e, t) {
    var r = n((e = Kh(e)).r, (t = Kh(t)).r),
      i = n(e.g, t.g),
      a = n(e.b, t.b),
      o = dg(e.opacity, t.opacity);
    return function (t) {
      return (
        (e.r = r(t)),
        (e.g = i(t)),
        (e.b = a(t)),
        (e.opacity = o(t)),
        e + ``
      );
    };
  }
  return ((r.gamma = e), r);
})(1);
function pg(e, t) {
  t ||= [];
  var n = e ? Math.min(t.length, e.length) : 0,
    r = t.slice(),
    i;
  return function (a) {
    for (i = 0; i < n; ++i) r[i] = e[i] * (1 - a) + t[i] * a;
    return r;
  };
}
function mg(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function hg(e, t) {
  var n = t ? t.length : 0,
    r = e ? Math.min(n, e.length) : 0,
    i = Array(r),
    a = Array(n),
    o;
  for (o = 0; o < r; ++o) i[o] = wg(e[o], t[o]);
  for (; o < n; ++o) a[o] = t[o];
  return function (e) {
    for (o = 0; o < r; ++o) a[o] = i[o](e);
    return a;
  };
}
function gg(e, t) {
  var n = new Date();
  return (
    (e = +e),
    (t = +t),
    function (r) {
      return (n.setTime(e * (1 - r) + t * r), n);
    }
  );
}
function _g(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return e * (1 - n) + t * n;
    }
  );
}
function vg(e, t) {
  var n = {},
    r = {},
    i;
  for (i in ((typeof e != `object` || !e) && (e = {}),
  (typeof t != `object` || !t) && (t = {}),
  t))
    i in e ? (n[i] = wg(e[i], t[i])) : (r[i] = t[i]);
  return function (e) {
    for (i in n) r[i] = n[i](e);
    return r;
  };
}
var yg = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  bg = new RegExp(yg.source, `g`);
function xg(e) {
  return function () {
    return e;
  };
}
function Sg(e) {
  return function (t) {
    return e(t) + ``;
  };
}
function Cg(e, t) {
  var n = (yg.lastIndex = bg.lastIndex = 0),
    r,
    i,
    a,
    o = -1,
    s = [],
    c = [];
  for (e += ``, t += ``; (r = yg.exec(e)) && (i = bg.exec(t));)
    ((a = i.index) > n &&
      ((a = t.slice(n, a)), s[o] ? (s[o] += a) : (s[++o] = a)),
      (r = r[0]) === (i = i[0])
        ? s[o]
          ? (s[o] += i)
          : (s[++o] = i)
        : ((s[++o] = null), c.push({ i: o, x: _g(r, i) })),
      (n = bg.lastIndex));
  return (
    n < t.length && ((a = t.slice(n)), s[o] ? (s[o] += a) : (s[++o] = a)),
    s.length < 2
      ? c[0]
        ? Sg(c[0].x)
        : xg(t)
      : ((t = c.length),
        function (e) {
          for (var n = 0, r; n < t; ++n) s[(r = c[n]).i] = r.x(e);
          return s.join(``);
        })
  );
}
function wg(e, t) {
  var n = typeof t,
    r;
  return t == null || n === `boolean`
    ? sg(t)
    : (n === `number`
        ? _g
        : n === `string`
          ? (r = Hh(t))
            ? ((t = r), fg)
            : Cg
          : t instanceof Hh
            ? fg
            : t instanceof Date
              ? gg
              : mg(t)
                ? pg
                : Array.isArray(t)
                  ? hg
                  : (typeof t.valueOf != `function` &&
                        typeof t.toString != `function`) ||
                      isNaN(t)
                    ? vg
                    : _g)(e, t);
}
function Tg(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return Math.round(e * (1 - n) + t * n);
    }
  );
}
function Eg(e, t) {
  t === void 0 && ((t = e), (e = wg));
  for (var n = 0, r = t.length - 1, i = t[0], a = Array(r < 0 ? 0 : r); n < r;)
    a[n] = e(i, (i = t[++n]));
  return function (e) {
    var t = Math.max(0, Math.min(r - 1, Math.floor((e *= r))));
    return a[t](e - t);
  };
}
function Dg(e) {
  return function () {
    return e;
  };
}
function Og(e) {
  return +e;
}
var kg = [0, 1];
function Ag(e) {
  return e;
}
function jg(e, t) {
  return (t -= e = +e)
    ? function (n) {
        return (n - e) / t;
      }
    : Dg(isNaN(t) ? NaN : 0.5);
}
function Mg(e, t) {
  var n;
  return (
    e > t && ((n = e), (e = t), (t = n)),
    function (n) {
      return Math.max(e, Math.min(t, n));
    }
  );
}
function Ng(e, t, n) {
  var r = e[0],
    i = e[1],
    a = t[0],
    o = t[1];
  return (
    i < r ? ((r = jg(i, r)), (a = n(o, a))) : ((r = jg(r, i)), (a = n(a, o))),
    function (e) {
      return a(r(e));
    }
  );
}
function Pg(e, t, n) {
  var r = Math.min(e.length, t.length) - 1,
    i = Array(r),
    a = Array(r),
    o = -1;
  for (
    e[r] < e[0] && ((e = e.slice().reverse()), (t = t.slice().reverse()));
    ++o < r;
  )
    ((i[o] = jg(e[o], e[o + 1])), (a[o] = n(t[o], t[o + 1])));
  return function (t) {
    var n = qm(e, t, 1, r) - 1;
    return a[n](i[n](t));
  };
}
function Fg(e, t) {
  return t
    .domain(e.domain())
    .range(e.range())
    .interpolate(e.interpolate())
    .clamp(e.clamp())
    .unknown(e.unknown());
}
function Ig() {
  var e = kg,
    t = kg,
    n = wg,
    r,
    i,
    a,
    o = Ag,
    s,
    c,
    l;
  function u() {
    var n = Math.min(e.length, t.length);
    return (
      o !== Ag && (o = Mg(e[0], e[n - 1])),
      (s = n > 2 ? Pg : Ng),
      (c = l = null),
      d
    );
  }
  function d(i) {
    return i == null || isNaN((i = +i))
      ? a
      : (c ||= s(e.map(r), t, n))(r(o(i)));
  }
  return (
    (d.invert = function (n) {
      return o(i((l ||= s(t, e.map(r), _g))(n)));
    }),
    (d.domain = function (t) {
      return arguments.length ? ((e = Array.from(t, Og)), u()) : e.slice();
    }),
    (d.range = function (e) {
      return arguments.length ? ((t = Array.from(e)), u()) : t.slice();
    }),
    (d.rangeRound = function (e) {
      return ((t = Array.from(e)), (n = Tg), u());
    }),
    (d.clamp = function (e) {
      return arguments.length ? ((o = e ? !0 : Ag), u()) : o !== Ag;
    }),
    (d.interpolate = function (e) {
      return arguments.length ? ((n = e), u()) : n;
    }),
    (d.unknown = function (e) {
      return arguments.length ? ((a = e), d) : a;
    }),
    function (e, t) {
      return ((r = e), (i = t), u());
    }
  );
}
function Lg() {
  return Ig()(Ag, Ag);
}
function Rg(e) {
  return Math.abs((e = Math.round(e))) >= 1e21
    ? e.toLocaleString(`en`).replace(/,/g, ``)
    : e.toString(10);
}
function zg(e, t) {
  if (!isFinite(e) || e === 0) return null;
  var n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf(`e`),
    r = e.slice(0, n);
  return [r.length > 1 ? r[0] + r.slice(2) : r, +e.slice(n + 1)];
}
function Bg(e) {
  return ((e = zg(Math.abs(e))), e ? e[1] : NaN);
}
function Vg(e, t) {
  return function (n, r) {
    for (
      var i = n.length, a = [], o = 0, s = e[0], c = 0;
      i > 0 &&
      s > 0 &&
      (c + s + 1 > r && (s = Math.max(1, r - c)),
      a.push(n.substring((i -= s), i + s)),
      !((c += s + 1) > r));
    )
      s = e[(o = (o + 1) % e.length)];
    return a.reverse().join(t);
  };
}
function Hg(e) {
  return function (t) {
    return t.replace(/[0-9]/g, function (t) {
      return e[+t];
    });
  };
}
var Ug =
  /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Wg(e) {
  if (!(t = Ug.exec(e))) throw Error(`invalid format: ` + e);
  var t;
  return new Gg({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10],
  });
}
Wg.prototype = Gg.prototype;
function Gg(e) {
  ((this.fill = e.fill === void 0 ? ` ` : e.fill + ``),
    (this.align = e.align === void 0 ? `>` : e.align + ``),
    (this.sign = e.sign === void 0 ? `-` : e.sign + ``),
    (this.symbol = e.symbol === void 0 ? `` : e.symbol + ``),
    (this.zero = !!e.zero),
    (this.width = e.width === void 0 ? void 0 : +e.width),
    (this.comma = !!e.comma),
    (this.precision = e.precision === void 0 ? void 0 : +e.precision),
    (this.trim = !!e.trim),
    (this.type = e.type === void 0 ? `` : e.type + ``));
}
Gg.prototype.toString = function () {
  return (
    this.fill +
    this.align +
    this.sign +
    this.symbol +
    (this.zero ? `0` : ``) +
    (this.width === void 0 ? `` : Math.max(1, this.width | 0)) +
    (this.comma ? `,` : ``) +
    (this.precision === void 0 ? `` : `.` + Math.max(0, this.precision | 0)) +
    (this.trim ? `~` : ``) +
    this.type
  );
};
function Kg(e) {
  out: for (var t = e.length, n = 1, r = -1, i; n < t; ++n)
    switch (e[n]) {
      case `.`:
        r = i = n;
        break;
      case `0`:
        (r === 0 && (r = n), (i = n));
        break;
      default:
        if (!+e[n]) break out;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? e.slice(0, r) + e.slice(i + 1) : e;
}
var qg;
function Jg(e, t) {
  var n = zg(e, t);
  if (!n) return ((qg = void 0), e.toPrecision(t));
  var r = n[0],
    i = n[1],
    a = i - (qg = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1,
    o = r.length;
  return a === o
    ? r
    : a > o
      ? r + Array(a - o + 1).join(`0`)
      : a > 0
        ? r.slice(0, a) + `.` + r.slice(a)
        : `0.` + Array(1 - a).join(`0`) + zg(e, Math.max(0, t + a - 1))[0];
}
function Yg(e, t) {
  var n = zg(e, t);
  if (!n) return e + ``;
  var r = n[0],
    i = n[1];
  return i < 0
    ? `0.` + Array(-i).join(`0`) + r
    : r.length > i + 1
      ? r.slice(0, i + 1) + `.` + r.slice(i + 1)
      : r + Array(i - r.length + 2).join(`0`);
}
var Xg = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + ``,
  d: Rg,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => Yg(e * 100, t),
  r: Yg,
  s: Jg,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16),
};
function Zg(e) {
  return e;
}
var Qg = Array.prototype.map,
  $g = [
    `y`,
    `z`,
    `a`,
    `f`,
    `p`,
    `n`,
    `µ`,
    `m`,
    ``,
    `k`,
    `M`,
    `G`,
    `T`,
    `P`,
    `E`,
    `Z`,
    `Y`,
  ];
function e_(e) {
  var t =
      e.grouping === void 0 || e.thousands === void 0
        ? Zg
        : Vg(Qg.call(e.grouping, Number), e.thousands + ``),
    n = e.currency === void 0 ? `` : e.currency[0] + ``,
    r = e.currency === void 0 ? `` : e.currency[1] + ``,
    i = e.decimal === void 0 ? `.` : e.decimal + ``,
    a = e.numerals === void 0 ? Zg : Hg(Qg.call(e.numerals, String)),
    o = e.percent === void 0 ? `%` : e.percent + ``,
    s = e.minus === void 0 ? `−` : e.minus + ``,
    c = e.nan === void 0 ? `NaN` : e.nan + ``;
  function l(e, l) {
    e = Wg(e);
    var u = e.fill,
      d = e.align,
      f = e.sign,
      p = e.symbol,
      m = e.zero,
      h = e.width,
      g = e.comma,
      _ = e.precision,
      v = e.trim,
      y = e.type;
    (y === `n`
      ? ((g = !0), (y = `g`))
      : Xg[y] || (_ === void 0 && (_ = 12), (v = !0), (y = `g`)),
      (m || (u === `0` && d === `=`)) && ((m = !0), (u = `0`), (d = `=`)));
    var b =
        (l && l.prefix !== void 0 ? l.prefix : ``) +
        (p === `$`
          ? n
          : p === `#` && /[boxX]/.test(y)
            ? `0` + y.toLowerCase()
            : ``),
      x =
        (p === `$` ? r : /[%p]/.test(y) ? o : ``) +
        (l && l.suffix !== void 0 ? l.suffix : ``),
      S = Xg[y],
      C = /[defgprs%]/.test(y);
    _ =
      _ === void 0
        ? 6
        : /[gprs]/.test(y)
          ? Math.max(1, Math.min(21, _))
          : Math.max(0, Math.min(20, _));
    function w(e) {
      var n = b,
        r = x,
        o,
        l,
        p;
      if (y === `c`) ((r = S(e) + r), (e = ``));
      else {
        e = +e;
        var w = e < 0 || 1 / e < 0;
        if (
          ((e = isNaN(e) ? c : S(Math.abs(e), _)),
          v && (e = Kg(e)),
          w && +e == 0 && f !== `+` && (w = !1),
          (n = (w ? (f === `(` ? f : s) : f === `-` || f === `(` ? `` : f) + n),
          (r =
            (y === `s` && !isNaN(e) && qg !== void 0 ? $g[8 + qg / 3] : ``) +
            r +
            (w && f === `(` ? `)` : ``)),
          C)
        ) {
          for (o = -1, l = e.length; ++o < l;)
            if (((p = e.charCodeAt(o)), 48 > p || p > 57)) {
              ((r = (p === 46 ? i + e.slice(o + 1) : e.slice(o)) + r),
                (e = e.slice(0, o)));
              break;
            }
        }
      }
      g && !m && (e = t(e, 1 / 0));
      var T = n.length + e.length + r.length,
        E = T < h ? Array(h - T + 1).join(u) : ``;
      switch (
        (g && m && ((e = t(E + e, E.length ? h - r.length : 1 / 0)), (E = ``)),
        d)
      ) {
        case `<`:
          e = n + e + r + E;
          break;
        case `=`:
          e = n + E + e + r;
          break;
        case `^`:
          e = E.slice(0, (T = E.length >> 1)) + n + e + r + E.slice(T);
          break;
        default:
          e = E + n + e + r;
          break;
      }
      return a(e);
    }
    return (
      (w.toString = function () {
        return e + ``;
      }),
      w
    );
  }
  function u(e, t) {
    var n = Math.max(-8, Math.min(8, Math.floor(Bg(t) / 3))) * 3,
      r = 10 ** -n,
      i = l(((e = Wg(e)), (e.type = `f`), e), { suffix: $g[8 + n / 3] });
    return function (e) {
      return i(r * e);
    };
  }
  return { format: l, formatPrefix: u };
}
var t_, n_, r_;
i_({ thousands: `,`, grouping: [3], currency: [`$`, ``] });
function i_(e) {
  return ((t_ = e_(e)), (n_ = t_.format), (r_ = t_.formatPrefix), t_);
}
function a_(e) {
  return Math.max(0, -Bg(Math.abs(e)));
}
function o_(e, t) {
  return Math.max(
    0,
    Math.max(-8, Math.min(8, Math.floor(Bg(t) / 3))) * 3 - Bg(Math.abs(e)),
  );
}
function s_(e, t) {
  return (
    (e = Math.abs(e)),
    (t = Math.abs(t) - e),
    Math.max(0, Bg(t) - Bg(e)) + 1
  );
}
function c_(e, t, n, r) {
  var i = sh(e, t, n),
    a;
  switch (((r = Wg(r ?? `,f`)), r.type)) {
    case `s`:
      var o = Math.max(Math.abs(e), Math.abs(t));
      return (
        r.precision == null && !isNaN((a = o_(i, o))) && (r.precision = a),
        r_(r, o)
      );
    case ``:
    case `e`:
    case `g`:
    case `p`:
    case `r`:
      r.precision == null &&
        !isNaN((a = s_(i, Math.max(Math.abs(e), Math.abs(t))))) &&
        (r.precision = a - (r.type === `e`));
      break;
    case `f`:
    case `%`:
      r.precision == null &&
        !isNaN((a = a_(i))) &&
        (r.precision = a - (r.type === `%`) * 2);
      break;
  }
  return n_(r);
}
function l_(e) {
  var t = e.domain;
  return (
    (e.ticks = function (e) {
      var n = t();
      return ah(n[0], n[n.length - 1], e ?? 10);
    }),
    (e.tickFormat = function (e, n) {
      var r = t();
      return c_(r[0], r[r.length - 1], e ?? 10, n);
    }),
    (e.nice = function (n) {
      n ??= 10;
      var r = t(),
        i = 0,
        a = r.length - 1,
        o = r[i],
        s = r[a],
        c,
        l,
        u = 10;
      for (
        s < o && ((l = o), (o = s), (s = l), (l = i), (i = a), (a = l));
        u-- > 0;
      ) {
        if (((l = oh(o, s, n)), l === c)) return ((r[i] = o), (r[a] = s), t(r));
        if (l > 0) ((o = Math.floor(o / l) * l), (s = Math.ceil(s / l) * l));
        else if (l < 0)
          ((o = Math.ceil(o * l) / l), (s = Math.floor(s * l) / l));
        else break;
        c = l;
      }
      return e;
    }),
    e
  );
}
function u_() {
  var e = Lg();
  return (
    (e.copy = function () {
      return Fg(e, u_());
    }),
    hh.apply(e, arguments),
    l_(e)
  );
}
function d_(e) {
  var t;
  function n(e) {
    return e == null || isNaN((e = +e)) ? t : e;
  }
  return (
    (n.invert = n),
    (n.domain = n.range =
      function (t) {
        return arguments.length ? ((e = Array.from(t, Og)), n) : e.slice();
      }),
    (n.unknown = function (e) {
      return arguments.length ? ((t = e), n) : t;
    }),
    (n.copy = function () {
      return d_(e).unknown(t);
    }),
    (e = arguments.length ? Array.from(e, Og) : [0, 1]),
    l_(n)
  );
}
function f_(e, t) {
  e = e.slice();
  var n = 0,
    r = e.length - 1,
    i = e[n],
    a = e[r],
    o;
  return (
    a < i && ((o = n), (n = r), (r = o), (o = i), (i = a), (a = o)),
    (e[n] = t.floor(i)),
    (e[r] = t.ceil(a)),
    e
  );
}
function p_(e) {
  return Math.log(e);
}
function m_(e) {
  return Math.exp(e);
}
function h_(e) {
  return -Math.log(-e);
}
function g_(e) {
  return -Math.exp(-e);
}
function __(e) {
  return isFinite(e) ? +(`1e` + e) : e < 0 ? 0 : e;
}
function v_(e) {
  return e === 10 ? __ : e === Math.E ? Math.exp : (t) => e ** +t;
}
function y_(e) {
  return e === Math.E
    ? Math.log
    : (e === 10 && Math.log10) ||
        (e === 2 && Math.log2) ||
        ((e = Math.log(e)), (t) => Math.log(t) / e);
}
function b_(e) {
  return (t, n) => -e(-t, n);
}
function x_(e) {
  let t = e(p_, m_),
    n = t.domain,
    r = 10,
    i,
    a;
  function o() {
    return (
      (i = y_(r)),
      (a = v_(r)),
      n()[0] < 0 ? ((i = b_(i)), (a = b_(a)), e(h_, g_)) : e(p_, m_),
      t
    );
  }
  return (
    (t.base = function (e) {
      return arguments.length ? ((r = +e), o()) : r;
    }),
    (t.domain = function (e) {
      return arguments.length ? (n(e), o()) : n();
    }),
    (t.ticks = (e) => {
      let t = n(),
        o = t[0],
        s = t[t.length - 1],
        c = s < o;
      c && ([o, s] = [s, o]);
      let l = i(o),
        u = i(s),
        d,
        f,
        p = e == null ? 10 : +e,
        m = [];
      if (!(r % 1) && u - l < p) {
        if (((l = Math.floor(l)), (u = Math.ceil(u)), o > 0)) {
          for (; l <= u; ++l)
            for (d = 1; d < r; ++d)
              if (((f = l < 0 ? d / a(-l) : d * a(l)), !(f < o))) {
                if (f > s) break;
                m.push(f);
              }
        } else
          for (; l <= u; ++l)
            for (d = r - 1; d >= 1; --d)
              if (((f = l > 0 ? d / a(-l) : d * a(l)), !(f < o))) {
                if (f > s) break;
                m.push(f);
              }
        m.length * 2 < p && (m = ah(o, s, p));
      } else m = ah(l, u, Math.min(u - l, p)).map(a);
      return c ? m.reverse() : m;
    }),
    (t.tickFormat = (e, n) => {
      if (
        ((e ??= 10),
        (n ??= r === 10 ? `s` : `,`),
        typeof n != `function` &&
          (!(r % 1) && (n = Wg(n)).precision == null && (n.trim = !0),
          (n = n_(n))),
        e === 1 / 0)
      )
        return n;
      let o = Math.max(1, (r * e) / t.ticks().length);
      return (e) => {
        let t = e / a(Math.round(i(e)));
        return (t * r < r - 0.5 && (t *= r), t <= o ? n(e) : ``);
      };
    }),
    (t.nice = () =>
      n(
        f_(n(), {
          floor: (e) => a(Math.floor(i(e))),
          ceil: (e) => a(Math.ceil(i(e))),
        }),
      )),
    t
  );
}
function S_() {
  let e = x_(Ig()).domain([1, 10]);
  return (
    (e.copy = () => Fg(e, S_()).base(e.base())),
    hh.apply(e, arguments),
    e
  );
}
function C_(e) {
  return function (t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function w_(e) {
  return function (t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function T_(e) {
  var t = 1,
    n = e(C_(t), w_(t));
  return (
    (n.constant = function (n) {
      return arguments.length ? e(C_((t = +n)), w_(t)) : t;
    }),
    l_(n)
  );
}
function E_() {
  var e = T_(Ig());
  return (
    (e.copy = function () {
      return Fg(e, E_()).constant(e.constant());
    }),
    hh.apply(e, arguments)
  );
}
function D_(e) {
  return function (t) {
    return t < 0 ? -((-t) ** +e) : t ** +e;
  };
}
function O_(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function k_(e) {
  return e < 0 ? -e * e : e * e;
}
function A_(e) {
  var t = e(Ag, Ag),
    n = 1;
  function r() {
    return n === 1 ? e(Ag, Ag) : n === 0.5 ? e(O_, k_) : e(D_(n), D_(1 / n));
  }
  return (
    (t.exponent = function (e) {
      return arguments.length ? ((n = +e), r()) : n;
    }),
    l_(t)
  );
}
function j_() {
  var e = A_(Ig());
  return (
    (e.copy = function () {
      return Fg(e, j_()).exponent(e.exponent());
    }),
    hh.apply(e, arguments),
    e
  );
}
function M_() {
  return j_.apply(null, arguments).exponent(0.5);
}
function N_(e) {
  return Math.sign(e) * e * e;
}
function P_(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function F_() {
  var e = Lg(),
    t = [0, 1],
    n = !1,
    r;
  function i(t) {
    var i = P_(e(t));
    return isNaN(i) ? r : n ? Math.round(i) : i;
  }
  return (
    (i.invert = function (t) {
      return e.invert(N_(t));
    }),
    (i.domain = function (t) {
      return arguments.length ? (e.domain(t), i) : e.domain();
    }),
    (i.range = function (n) {
      return arguments.length
        ? (e.range((t = Array.from(n, Og)).map(N_)), i)
        : t.slice();
    }),
    (i.rangeRound = function (e) {
      return i.range(e).round(!0);
    }),
    (i.round = function (e) {
      return arguments.length ? ((n = !!e), i) : n;
    }),
    (i.clamp = function (t) {
      return arguments.length ? (e.clamp(t), i) : e.clamp();
    }),
    (i.unknown = function (e) {
      return arguments.length ? ((r = e), i) : r;
    }),
    (i.copy = function () {
      return F_(e.domain(), t).round(n).clamp(e.clamp()).unknown(r);
    }),
    hh.apply(i, arguments),
    l_(i)
  );
}
function I_() {
  var e = [],
    t = [],
    n = [],
    r;
  function i() {
    var r = 0,
      i = Math.max(1, t.length);
    for (n = Array(i - 1); ++r < i;) n[r - 1] = ph(e, r / i);
    return a;
  }
  function a(e) {
    return e == null || isNaN((e = +e)) ? r : t[qm(n, e)];
  }
  return (
    (a.invertExtent = function (r) {
      var i = t.indexOf(r);
      return i < 0
        ? [NaN, NaN]
        : [i > 0 ? n[i - 1] : e[0], i < n.length ? n[i] : e[e.length - 1]];
    }),
    (a.domain = function (t) {
      if (!arguments.length) return e.slice();
      e = [];
      for (let n of t) n != null && !isNaN((n = +n)) && e.push(n);
      return (e.sort(Bm), i());
    }),
    (a.range = function (e) {
      return arguments.length ? ((t = Array.from(e)), i()) : t.slice();
    }),
    (a.unknown = function (e) {
      return arguments.length ? ((r = e), a) : r;
    }),
    (a.quantiles = function () {
      return n.slice();
    }),
    (a.copy = function () {
      return I_().domain(e).range(t).unknown(r);
    }),
    hh.apply(a, arguments)
  );
}
function L_() {
  var e = 0,
    t = 1,
    n = 1,
    r = [0.5],
    i = [0, 1],
    a;
  function o(e) {
    return e != null && e <= e ? i[qm(r, e, 0, n)] : a;
  }
  function s() {
    var i = -1;
    for (r = Array(n); ++i < n;) r[i] = ((i + 1) * t - (i - n) * e) / (n + 1);
    return o;
  }
  return (
    (o.domain = function (n) {
      return arguments.length
        ? (([e, t] = n), (e = +e), (t = +t), s())
        : [e, t];
    }),
    (o.range = function (e) {
      return arguments.length
        ? ((n = (i = Array.from(e)).length - 1), s())
        : i.slice();
    }),
    (o.invertExtent = function (a) {
      var o = i.indexOf(a);
      return o < 0
        ? [NaN, NaN]
        : o < 1
          ? [e, r[0]]
          : o >= n
            ? [r[n - 1], t]
            : [r[o - 1], r[o]];
    }),
    (o.unknown = function (e) {
      return (arguments.length && (a = e), o);
    }),
    (o.thresholds = function () {
      return r.slice();
    }),
    (o.copy = function () {
      return L_().domain([e, t]).range(i).unknown(a);
    }),
    hh.apply(l_(o), arguments)
  );
}
function R_() {
  var e = [0.5],
    t = [0, 1],
    n,
    r = 1;
  function i(i) {
    return i != null && i <= i ? t[qm(e, i, 0, r)] : n;
  }
  return (
    (i.domain = function (n) {
      return arguments.length
        ? ((e = Array.from(n)), (r = Math.min(e.length, t.length - 1)), i)
        : e.slice();
    }),
    (i.range = function (n) {
      return arguments.length
        ? ((t = Array.from(n)), (r = Math.min(e.length, t.length - 1)), i)
        : t.slice();
    }),
    (i.invertExtent = function (n) {
      var r = t.indexOf(n);
      return [e[r - 1], e[r]];
    }),
    (i.unknown = function (e) {
      return arguments.length ? ((n = e), i) : n;
    }),
    (i.copy = function () {
      return R_().domain(e).range(t).unknown(n);
    }),
    hh.apply(i, arguments)
  );
}
var z_ = new Date(),
  B_ = new Date();
function q(e, t, n, r) {
  function i(t) {
    return (e((t = arguments.length === 0 ? new Date() : new Date(+t))), t);
  }
  return (
    (i.floor = (t) => (e((t = new Date(+t))), t)),
    (i.ceil = (n) => (e((n = new Date(n - 1))), t(n, 1), e(n), n)),
    (i.round = (e) => {
      let t = i(e),
        n = i.ceil(e);
      return e - t < n - e ? t : n;
    }),
    (i.offset = (e, n) => (
      t((e = new Date(+e)), n == null ? 1 : Math.floor(n)),
      e
    )),
    (i.range = (n, r, a) => {
      let o = [];
      if (
        ((n = i.ceil(n)),
        (a = a == null ? 1 : Math.floor(a)),
        !(n < r) || !(a > 0))
      )
        return o;
      let s;
      do (o.push((s = new Date(+n))), t(n, a), e(n));
      while (s < n && n < r);
      return o;
    }),
    (i.filter = (n) =>
      q(
        (t) => {
          if (t >= t) for (; e(t), !n(t);) t.setTime(t - 1);
        },
        (e, r) => {
          if (e >= e)
            if (r < 0) for (; ++r <= 0;) for (; t(e, -1), !n(e););
            else for (; --r >= 0;) for (; t(e, 1), !n(e););
        },
      )),
    n &&
      ((i.count = (t, r) => (
        z_.setTime(+t),
        B_.setTime(+r),
        e(z_),
        e(B_),
        Math.floor(n(z_, B_))
      )),
      (i.every = (e) => (
        (e = Math.floor(e)),
        !isFinite(e) || !(e > 0)
          ? null
          : e > 1
            ? i.filter(
                r ? (t) => r(t) % e === 0 : (t) => i.count(0, t) % e === 0,
              )
            : i
      ))),
    i
  );
}
var V_ = q(
  () => {},
  (e, t) => {
    e.setTime(+e + t);
  },
  (e, t) => t - e,
);
((V_.every = (e) => (
  (e = Math.floor(e)),
  !isFinite(e) || !(e > 0)
    ? null
    : e > 1
      ? q(
          (t) => {
            t.setTime(Math.floor(t / e) * e);
          },
          (t, n) => {
            t.setTime(+t + n * e);
          },
          (t, n) => (n - t) / e,
        )
      : V_
)),
  V_.range);
var H_ = 1e3,
  U_ = H_ * 60,
  W_ = U_ * 60,
  G_ = W_ * 24,
  K_ = G_ * 7,
  q_ = G_ * 30,
  J_ = G_ * 365,
  Y_ = q(
    (e) => {
      e.setTime(e - e.getMilliseconds());
    },
    (e, t) => {
      e.setTime(+e + t * H_);
    },
    (e, t) => (t - e) / H_,
    (e) => e.getUTCSeconds(),
  );
Y_.range;
var X_ = q(
  (e) => {
    e.setTime(e - e.getMilliseconds() - e.getSeconds() * H_);
  },
  (e, t) => {
    e.setTime(+e + t * U_);
  },
  (e, t) => (t - e) / U_,
  (e) => e.getMinutes(),
);
X_.range;
var Z_ = q(
  (e) => {
    e.setUTCSeconds(0, 0);
  },
  (e, t) => {
    e.setTime(+e + t * U_);
  },
  (e, t) => (t - e) / U_,
  (e) => e.getUTCMinutes(),
);
Z_.range;
var Q_ = q(
  (e) => {
    e.setTime(
      e - e.getMilliseconds() - e.getSeconds() * H_ - e.getMinutes() * U_,
    );
  },
  (e, t) => {
    e.setTime(+e + t * W_);
  },
  (e, t) => (t - e) / W_,
  (e) => e.getHours(),
);
Q_.range;
var $_ = q(
  (e) => {
    e.setUTCMinutes(0, 0, 0);
  },
  (e, t) => {
    e.setTime(+e + t * W_);
  },
  (e, t) => (t - e) / W_,
  (e) => e.getUTCHours(),
);
$_.range;
var ev = q(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * U_) / G_,
  (e) => e.getDate() - 1,
);
ev.range;
var tv = q(
  (e) => {
    e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCDate(e.getUTCDate() + t);
  },
  (e, t) => (t - e) / G_,
  (e) => e.getUTCDate() - 1,
);
tv.range;
var nv = q(
  (e) => {
    e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCDate(e.getUTCDate() + t);
  },
  (e, t) => (t - e) / G_,
  (e) => Math.floor(e / G_),
);
nv.range;
function rv(e) {
  return q(
    (t) => {
      (t.setDate(t.getDate() - ((t.getDay() + 7 - e) % 7)),
        t.setHours(0, 0, 0, 0));
    },
    (e, t) => {
      e.setDate(e.getDate() + t * 7);
    },
    (e, t) =>
      (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * U_) / K_,
  );
}
var iv = rv(0),
  av = rv(1),
  ov = rv(2),
  sv = rv(3),
  cv = rv(4),
  lv = rv(5),
  uv = rv(6);
(iv.range, av.range, ov.range, sv.range, cv.range, lv.range, uv.range);
function dv(e) {
  return q(
    (t) => {
      (t.setUTCDate(t.getUTCDate() - ((t.getUTCDay() + 7 - e) % 7)),
        t.setUTCHours(0, 0, 0, 0));
    },
    (e, t) => {
      e.setUTCDate(e.getUTCDate() + t * 7);
    },
    (e, t) => (t - e) / K_,
  );
}
var fv = dv(0),
  pv = dv(1),
  mv = dv(2),
  hv = dv(3),
  gv = dv(4),
  _v = dv(5),
  vv = dv(6);
(fv.range, pv.range, mv.range, hv.range, gv.range, _v.range, vv.range);
var yv = q(
  (e) => {
    (e.setDate(1), e.setHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setMonth(e.getMonth() + t);
  },
  (e, t) =>
    t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12,
  (e) => e.getMonth(),
);
yv.range;
var bv = q(
  (e) => {
    (e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setUTCMonth(e.getUTCMonth() + t);
  },
  (e, t) =>
    t.getUTCMonth() -
    e.getUTCMonth() +
    (t.getUTCFullYear() - e.getUTCFullYear()) * 12,
  (e) => e.getUTCMonth(),
);
bv.range;
var xv = q(
  (e) => {
    (e.setMonth(0, 1), e.setHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setFullYear(e.getFullYear() + t);
  },
  (e, t) => t.getFullYear() - e.getFullYear(),
  (e) => e.getFullYear(),
);
((xv.every = (e) =>
  !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : q(
        (t) => {
          (t.setFullYear(Math.floor(t.getFullYear() / e) * e),
            t.setMonth(0, 1),
            t.setHours(0, 0, 0, 0));
        },
        (t, n) => {
          t.setFullYear(t.getFullYear() + n * e);
        },
      )),
  xv.range);
var Sv = q(
  (e) => {
    (e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setUTCFullYear(e.getUTCFullYear() + t);
  },
  (e, t) => t.getUTCFullYear() - e.getUTCFullYear(),
  (e) => e.getUTCFullYear(),
);
((Sv.every = (e) =>
  !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : q(
        (t) => {
          (t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e),
            t.setUTCMonth(0, 1),
            t.setUTCHours(0, 0, 0, 0));
        },
        (t, n) => {
          t.setUTCFullYear(t.getUTCFullYear() + n * e);
        },
      )),
  Sv.range);
function Cv(e, t, n, r, i, a) {
  let o = [
    [Y_, 1, H_],
    [Y_, 5, 5 * H_],
    [Y_, 15, 15 * H_],
    [Y_, 30, 30 * H_],
    [a, 1, U_],
    [a, 5, 5 * U_],
    [a, 15, 15 * U_],
    [a, 30, 30 * U_],
    [i, 1, W_],
    [i, 3, 3 * W_],
    [i, 6, 6 * W_],
    [i, 12, 12 * W_],
    [r, 1, G_],
    [r, 2, 2 * G_],
    [n, 1, K_],
    [t, 1, q_],
    [t, 3, 3 * q_],
    [e, 1, J_],
  ];
  function s(e, t, n) {
    let r = t < e;
    r && ([e, t] = [t, e]);
    let i = n && typeof n.range == `function` ? n : c(e, t, n),
      a = i ? i.range(e, +t + 1) : [];
    return r ? a.reverse() : a;
  }
  function c(t, n, r) {
    let i = Math.abs(n - t) / r,
      a = Hm(([, , e]) => e).right(o, i);
    if (a === o.length) return e.every(sh(t / J_, n / J_, r));
    if (a === 0) return V_.every(Math.max(sh(t, n, r), 1));
    let [s, c] = o[i / o[a - 1][2] < o[a][2] / i ? a - 1 : a];
    return s.every(c);
  }
  return [s, c];
}
var [wv, Tv] = Cv(Sv, bv, fv, nv, $_, Z_),
  [Ev, Dv] = Cv(xv, yv, iv, ev, Q_, X_);
function Ov(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return (t.setFullYear(e.y), t);
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function kv(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return (t.setUTCFullYear(e.y), t);
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Av(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function jv(e) {
  var t = e.dateTime,
    n = e.date,
    r = e.time,
    i = e.periods,
    a = e.days,
    o = e.shortDays,
    s = e.months,
    c = e.shortMonths,
    l = Lv(i),
    u = Rv(i),
    d = Lv(a),
    f = Rv(a),
    p = Lv(o),
    m = Rv(o),
    h = Lv(s),
    g = Rv(s),
    _ = Lv(c),
    v = Rv(c),
    y = {
      a: N,
      A: ee,
      b: te,
      B: ne,
      c: null,
      d: ay,
      e: ay,
      f: uy,
      g: xy,
      G: Cy,
      H: oy,
      I: sy,
      j: cy,
      L: ly,
      m: dy,
      M: fy,
      p: re,
      q: ie,
      Q: Ky,
      s: qy,
      S: py,
      u: my,
      U: hy,
      V: _y,
      w: vy,
      W: yy,
      x: null,
      X: null,
      y: by,
      Y: Sy,
      Z: wy,
      "%": Gy,
    },
    b = {
      a: ae,
      A: oe,
      b: se,
      B: ce,
      c: null,
      d: Ty,
      e: Ty,
      f: Ay,
      g: Vy,
      G: Uy,
      H: Ey,
      I: Dy,
      j: Oy,
      L: ky,
      m: jy,
      M: My,
      p: le,
      q: ue,
      Q: Ky,
      s: qy,
      S: Ny,
      u: Py,
      U: Fy,
      V: Ly,
      w: Ry,
      W: zy,
      x: null,
      X: null,
      y: By,
      Y: Hy,
      Z: Wy,
      "%": Gy,
    },
    x = {
      a: E,
      A: D,
      b: O,
      B: k,
      c: A,
      d: Yv,
      e: Yv,
      f: ty,
      g: Gv,
      G: Wv,
      H: Zv,
      I: Zv,
      j: Xv,
      L: ey,
      m: Jv,
      M: Qv,
      p: T,
      q: qv,
      Q: ry,
      s: iy,
      S: $v,
      u: Bv,
      U: Vv,
      V: Hv,
      w: zv,
      W: Uv,
      x: j,
      X: M,
      y: Gv,
      Y: Wv,
      Z: Kv,
      "%": ny,
    };
  ((y.x = S(n, y)),
    (y.X = S(r, y)),
    (y.c = S(t, y)),
    (b.x = S(n, b)),
    (b.X = S(r, b)),
    (b.c = S(t, b)));
  function S(e, t) {
    return function (n) {
      var r = [],
        i = -1,
        a = 0,
        o = e.length,
        s,
        c,
        l;
      for (n instanceof Date || (n = new Date(+n)); ++i < o;)
        e.charCodeAt(i) === 37 &&
          (r.push(e.slice(a, i)),
          (c = Mv[(s = e.charAt(++i))]) == null
            ? (c = s === `e` ? ` ` : `0`)
            : (s = e.charAt(++i)),
          (l = t[s]) && (s = l(n, c)),
          r.push(s),
          (a = i + 1));
      return (r.push(e.slice(a, i)), r.join(``));
    };
  }
  function C(e, t) {
    return function (n) {
      var r = Av(1900, void 0, 1),
        i = w(r, e, (n += ``), 0),
        a,
        o;
      if (i != n.length) return null;
      if (`Q` in r) return new Date(r.Q);
      if (`s` in r) return new Date(r.s * 1e3 + (`L` in r ? r.L : 0));
      if (
        (t && !(`Z` in r) && (r.Z = 0),
        `p` in r && (r.H = (r.H % 12) + r.p * 12),
        r.m === void 0 && (r.m = `q` in r ? r.q : 0),
        `V` in r)
      ) {
        if (r.V < 1 || r.V > 53) return null;
        (`w` in r || (r.w = 1),
          `Z` in r
            ? ((a = kv(Av(r.y, 0, 1))),
              (o = a.getUTCDay()),
              (a = o > 4 || o === 0 ? pv.ceil(a) : pv(a)),
              (a = tv.offset(a, (r.V - 1) * 7)),
              (r.y = a.getUTCFullYear()),
              (r.m = a.getUTCMonth()),
              (r.d = a.getUTCDate() + ((r.w + 6) % 7)))
            : ((a = Ov(Av(r.y, 0, 1))),
              (o = a.getDay()),
              (a = o > 4 || o === 0 ? av.ceil(a) : av(a)),
              (a = ev.offset(a, (r.V - 1) * 7)),
              (r.y = a.getFullYear()),
              (r.m = a.getMonth()),
              (r.d = a.getDate() + ((r.w + 6) % 7))));
      } else
        (`W` in r || `U` in r) &&
          (`w` in r || (r.w = `u` in r ? r.u % 7 : +(`W` in r)),
          (o =
            `Z` in r
              ? kv(Av(r.y, 0, 1)).getUTCDay()
              : Ov(Av(r.y, 0, 1)).getDay()),
          (r.m = 0),
          (r.d =
            `W` in r
              ? ((r.w + 6) % 7) + r.W * 7 - ((o + 5) % 7)
              : r.w + r.U * 7 - ((o + 6) % 7)));
      return `Z` in r
        ? ((r.H += (r.Z / 100) | 0), (r.M += r.Z % 100), kv(r))
        : Ov(r);
    };
  }
  function w(e, t, n, r) {
    for (var i = 0, a = t.length, o = n.length, s, c; i < a;) {
      if (r >= o) return -1;
      if (((s = t.charCodeAt(i++)), s === 37)) {
        if (
          ((s = t.charAt(i++)),
          (c = x[s in Mv ? t.charAt(i++) : s]),
          !c || (r = c(e, n, r)) < 0)
        )
          return -1;
      } else if (s != n.charCodeAt(r++)) return -1;
    }
    return r;
  }
  function T(e, t, n) {
    var r = l.exec(t.slice(n));
    return r ? ((e.p = u.get(r[0].toLowerCase())), n + r[0].length) : -1;
  }
  function E(e, t, n) {
    var r = p.exec(t.slice(n));
    return r ? ((e.w = m.get(r[0].toLowerCase())), n + r[0].length) : -1;
  }
  function D(e, t, n) {
    var r = d.exec(t.slice(n));
    return r ? ((e.w = f.get(r[0].toLowerCase())), n + r[0].length) : -1;
  }
  function O(e, t, n) {
    var r = _.exec(t.slice(n));
    return r ? ((e.m = v.get(r[0].toLowerCase())), n + r[0].length) : -1;
  }
  function k(e, t, n) {
    var r = h.exec(t.slice(n));
    return r ? ((e.m = g.get(r[0].toLowerCase())), n + r[0].length) : -1;
  }
  function A(e, n, r) {
    return w(e, t, n, r);
  }
  function j(e, t, r) {
    return w(e, n, t, r);
  }
  function M(e, t, n) {
    return w(e, r, t, n);
  }
  function N(e) {
    return o[e.getDay()];
  }
  function ee(e) {
    return a[e.getDay()];
  }
  function te(e) {
    return c[e.getMonth()];
  }
  function ne(e) {
    return s[e.getMonth()];
  }
  function re(e) {
    return i[+(e.getHours() >= 12)];
  }
  function ie(e) {
    return 1 + ~~(e.getMonth() / 3);
  }
  function ae(e) {
    return o[e.getUTCDay()];
  }
  function oe(e) {
    return a[e.getUTCDay()];
  }
  function se(e) {
    return c[e.getUTCMonth()];
  }
  function ce(e) {
    return s[e.getUTCMonth()];
  }
  function le(e) {
    return i[+(e.getUTCHours() >= 12)];
  }
  function ue(e) {
    return 1 + ~~(e.getUTCMonth() / 3);
  }
  return {
    format: function (e) {
      var t = S((e += ``), y);
      return (
        (t.toString = function () {
          return e;
        }),
        t
      );
    },
    parse: function (e) {
      var t = C((e += ``), !1);
      return (
        (t.toString = function () {
          return e;
        }),
        t
      );
    },
    utcFormat: function (e) {
      var t = S((e += ``), b);
      return (
        (t.toString = function () {
          return e;
        }),
        t
      );
    },
    utcParse: function (e) {
      var t = C((e += ``), !0);
      return (
        (t.toString = function () {
          return e;
        }),
        t
      );
    },
  };
}
var Mv = { "-": ``, _: ` `, 0: `0` },
  Nv = /^\s*\d+/,
  Pv = /^%/,
  Fv = /[\\^$*+?|[\]().{}]/g;
function J(e, t, n) {
  var r = e < 0 ? `-` : ``,
    i = (r ? -e : e) + ``,
    a = i.length;
  return r + (a < n ? Array(n - a + 1).join(t) + i : i);
}
function Iv(e) {
  return e.replace(Fv, `\\$&`);
}
function Lv(e) {
  return RegExp(`^(?:` + e.map(Iv).join(`|`) + `)`, `i`);
}
function Rv(e) {
  return new Map(e.map((e, t) => [e.toLowerCase(), t]));
}
function zv(e, t, n) {
  var r = Nv.exec(t.slice(n, n + 1));
  return r ? ((e.w = +r[0]), n + r[0].length) : -1;
}
function Bv(e, t, n) {
  var r = Nv.exec(t.slice(n, n + 1));
  return r ? ((e.u = +r[0]), n + r[0].length) : -1;
}
function Vv(e, t, n) {
  var r = Nv.exec(t.slice(n, n + 2));
  return r ? ((e.U = +r[0]), n + r[0].length) : -1;
}
function Hv(e, t, n) {
  var r = Nv.exec(t.slice(n, n + 2));
  return r ? ((e.V = +r[0]), n + r[0].length) : -1;
}
function Uv(e, t, n) {
  var r = Nv.exec(t.slice(n, n + 2));
  return r ? ((e.W = +r[0]), n + r[0].length) : -1;
}
function Wv(e, t, n) {
  var r = Nv.exec(t.slice(n, n + 4));
  return r ? ((e.y = +r[0]), n + r[0].length) : -1;
}
function Gv(e, t, n) {
  var r = Nv.exec(t.slice(n, n + 2));
  return r ? ((e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3)), n + r[0].length) : -1;
}
function Kv(e, t, n) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return r
    ? ((e.Z = r[1] ? 0 : -(r[2] + (r[3] || `00`))), n + r[0].length)
    : -1;
}
function qv(e, t, n) {
  var r = Nv.exec(t.slice(n, n + 1));
  return r ? ((e.q = r[0] * 3 - 3), n + r[0].length) : -1;
}
function Jv(e, t, n) {
  var r = Nv.exec(t.slice(n, n + 2));
  return r ? ((e.m = r[0] - 1), n + r[0].length) : -1;
}
function Yv(e, t, n) {
  var r = Nv.exec(t.slice(n, n + 2));
  return r ? ((e.d = +r[0]), n + r[0].length) : -1;
}
function Xv(e, t, n) {
  var r = Nv.exec(t.slice(n, n + 3));
  return r ? ((e.m = 0), (e.d = +r[0]), n + r[0].length) : -1;
}
function Zv(e, t, n) {
  var r = Nv.exec(t.slice(n, n + 2));
  return r ? ((e.H = +r[0]), n + r[0].length) : -1;
}
function Qv(e, t, n) {
  var r = Nv.exec(t.slice(n, n + 2));
  return r ? ((e.M = +r[0]), n + r[0].length) : -1;
}
function $v(e, t, n) {
  var r = Nv.exec(t.slice(n, n + 2));
  return r ? ((e.S = +r[0]), n + r[0].length) : -1;
}
function ey(e, t, n) {
  var r = Nv.exec(t.slice(n, n + 3));
  return r ? ((e.L = +r[0]), n + r[0].length) : -1;
}
function ty(e, t, n) {
  var r = Nv.exec(t.slice(n, n + 6));
  return r ? ((e.L = Math.floor(r[0] / 1e3)), n + r[0].length) : -1;
}
function ny(e, t, n) {
  var r = Pv.exec(t.slice(n, n + 1));
  return r ? n + r[0].length : -1;
}
function ry(e, t, n) {
  var r = Nv.exec(t.slice(n));
  return r ? ((e.Q = +r[0]), n + r[0].length) : -1;
}
function iy(e, t, n) {
  var r = Nv.exec(t.slice(n));
  return r ? ((e.s = +r[0]), n + r[0].length) : -1;
}
function ay(e, t) {
  return J(e.getDate(), t, 2);
}
function oy(e, t) {
  return J(e.getHours(), t, 2);
}
function sy(e, t) {
  return J(e.getHours() % 12 || 12, t, 2);
}
function cy(e, t) {
  return J(1 + ev.count(xv(e), e), t, 3);
}
function ly(e, t) {
  return J(e.getMilliseconds(), t, 3);
}
function uy(e, t) {
  return ly(e, t) + `000`;
}
function dy(e, t) {
  return J(e.getMonth() + 1, t, 2);
}
function fy(e, t) {
  return J(e.getMinutes(), t, 2);
}
function py(e, t) {
  return J(e.getSeconds(), t, 2);
}
function my(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function hy(e, t) {
  return J(iv.count(xv(e) - 1, e), t, 2);
}
function gy(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? cv(e) : cv.ceil(e);
}
function _y(e, t) {
  return ((e = gy(e)), J(cv.count(xv(e), e) + (xv(e).getDay() === 4), t, 2));
}
function vy(e) {
  return e.getDay();
}
function yy(e, t) {
  return J(av.count(xv(e) - 1, e), t, 2);
}
function by(e, t) {
  return J(e.getFullYear() % 100, t, 2);
}
function xy(e, t) {
  return ((e = gy(e)), J(e.getFullYear() % 100, t, 2));
}
function Sy(e, t) {
  return J(e.getFullYear() % 1e4, t, 4);
}
function Cy(e, t) {
  var n = e.getDay();
  return (
    (e = n >= 4 || n === 0 ? cv(e) : cv.ceil(e)),
    J(e.getFullYear() % 1e4, t, 4)
  );
}
function wy(e) {
  var t = e.getTimezoneOffset();
  return (
    (t > 0 ? `-` : ((t *= -1), `+`)) +
    J((t / 60) | 0, `0`, 2) +
    J(t % 60, `0`, 2)
  );
}
function Ty(e, t) {
  return J(e.getUTCDate(), t, 2);
}
function Ey(e, t) {
  return J(e.getUTCHours(), t, 2);
}
function Dy(e, t) {
  return J(e.getUTCHours() % 12 || 12, t, 2);
}
function Oy(e, t) {
  return J(1 + tv.count(Sv(e), e), t, 3);
}
function ky(e, t) {
  return J(e.getUTCMilliseconds(), t, 3);
}
function Ay(e, t) {
  return ky(e, t) + `000`;
}
function jy(e, t) {
  return J(e.getUTCMonth() + 1, t, 2);
}
function My(e, t) {
  return J(e.getUTCMinutes(), t, 2);
}
function Ny(e, t) {
  return J(e.getUTCSeconds(), t, 2);
}
function Py(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function Fy(e, t) {
  return J(fv.count(Sv(e) - 1, e), t, 2);
}
function Iy(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? gv(e) : gv.ceil(e);
}
function Ly(e, t) {
  return ((e = Iy(e)), J(gv.count(Sv(e), e) + (Sv(e).getUTCDay() === 4), t, 2));
}
function Ry(e) {
  return e.getUTCDay();
}
function zy(e, t) {
  return J(pv.count(Sv(e) - 1, e), t, 2);
}
function By(e, t) {
  return J(e.getUTCFullYear() % 100, t, 2);
}
function Vy(e, t) {
  return ((e = Iy(e)), J(e.getUTCFullYear() % 100, t, 2));
}
function Hy(e, t) {
  return J(e.getUTCFullYear() % 1e4, t, 4);
}
function Uy(e, t) {
  var n = e.getUTCDay();
  return (
    (e = n >= 4 || n === 0 ? gv(e) : gv.ceil(e)),
    J(e.getUTCFullYear() % 1e4, t, 4)
  );
}
function Wy() {
  return `+0000`;
}
function Gy() {
  return `%`;
}
function Ky(e) {
  return +e;
}
function qy(e) {
  return Math.floor(e / 1e3);
}
var Jy, Yy, Xy;
Zy({
  dateTime: `%x, %X`,
  date: `%-m/%-d/%Y`,
  time: `%-I:%M:%S %p`,
  periods: [`AM`, `PM`],
  days: [
    `Sunday`,
    `Monday`,
    `Tuesday`,
    `Wednesday`,
    `Thursday`,
    `Friday`,
    `Saturday`,
  ],
  shortDays: [`Sun`, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`],
  months: [
    `January`,
    `February`,
    `March`,
    `April`,
    `May`,
    `June`,
    `July`,
    `August`,
    `September`,
    `October`,
    `November`,
    `December`,
  ],
  shortMonths: [
    `Jan`,
    `Feb`,
    `Mar`,
    `Apr`,
    `May`,
    `Jun`,
    `Jul`,
    `Aug`,
    `Sep`,
    `Oct`,
    `Nov`,
    `Dec`,
  ],
});
function Zy(e) {
  return (
    (Jy = jv(e)),
    (Yy = Jy.format),
    Jy.parse,
    (Xy = Jy.utcFormat),
    Jy.utcParse,
    Jy
  );
}
function Qy(e) {
  return new Date(e);
}
function $y(e) {
  return e instanceof Date ? +e : +new Date(+e);
}
function eb(e, t, n, r, i, a, o, s, c, l) {
  var u = Lg(),
    d = u.invert,
    f = u.domain,
    p = l(`.%L`),
    m = l(`:%S`),
    h = l(`%I:%M`),
    g = l(`%I %p`),
    _ = l(`%a %d`),
    v = l(`%b %d`),
    y = l(`%B`),
    b = l(`%Y`);
  function x(e) {
    return (
      c(e) < e
        ? p
        : s(e) < e
          ? m
          : o(e) < e
            ? h
            : a(e) < e
              ? g
              : r(e) < e
                ? i(e) < e
                  ? _
                  : v
                : n(e) < e
                  ? y
                  : b
    )(e);
  }
  return (
    (u.invert = function (e) {
      return new Date(d(e));
    }),
    (u.domain = function (e) {
      return arguments.length ? f(Array.from(e, $y)) : f().map(Qy);
    }),
    (u.ticks = function (t) {
      var n = f();
      return e(n[0], n[n.length - 1], t ?? 10);
    }),
    (u.tickFormat = function (e, t) {
      return t == null ? x : l(t);
    }),
    (u.nice = function (e) {
      var n = f();
      return (
        (!e || typeof e.range != `function`) &&
          (e = t(n[0], n[n.length - 1], e ?? 10)),
        e ? f(f_(n, e)) : u
      );
    }),
    (u.copy = function () {
      return Fg(u, eb(e, t, n, r, i, a, o, s, c, l));
    }),
    u
  );
}
function tb() {
  return hh.apply(
    eb(Ev, Dv, xv, yv, iv, ev, Q_, X_, Y_, Yy).domain([
      new Date(2e3, 0, 1),
      new Date(2e3, 0, 2),
    ]),
    arguments,
  );
}
function nb() {
  return hh.apply(
    eb(wv, Tv, Sv, bv, fv, tv, $_, Z_, Y_, Xy).domain([
      Date.UTC(2e3, 0, 1),
      Date.UTC(2e3, 0, 2),
    ]),
    arguments,
  );
}
function rb() {
  var e = 0,
    t = 1,
    n,
    r,
    i,
    a,
    o = Ag,
    s = !1,
    c;
  function l(e) {
    return e == null || isNaN((e = +e))
      ? c
      : o(
          i === 0
            ? 0.5
            : ((e = (a(e) - n) * i), s ? Math.max(0, Math.min(1, e)) : e),
        );
  }
  ((l.domain = function (o) {
    return arguments.length
      ? (([e, t] = o),
        (n = a((e = +e))),
        (r = a((t = +t))),
        (i = n === r ? 0 : 1 / (r - n)),
        l)
      : [e, t];
  }),
    (l.clamp = function (e) {
      return arguments.length ? ((s = !!e), l) : s;
    }),
    (l.interpolator = function (e) {
      return arguments.length ? ((o = e), l) : o;
    }));
  function u(e) {
    return function (t) {
      var n, r;
      return arguments.length ? (([n, r] = t), (o = e(n, r)), l) : [o(0), o(1)];
    };
  }
  return (
    (l.range = u(wg)),
    (l.rangeRound = u(Tg)),
    (l.unknown = function (e) {
      return arguments.length ? ((c = e), l) : c;
    }),
    function (o) {
      return (
        (a = o),
        (n = o(e)),
        (r = o(t)),
        (i = n === r ? 0 : 1 / (r - n)),
        l
      );
    }
  );
}
function ib(e, t) {
  return t
    .domain(e.domain())
    .interpolator(e.interpolator())
    .clamp(e.clamp())
    .unknown(e.unknown());
}
function ab() {
  var e = l_(rb()(Ag));
  return (
    (e.copy = function () {
      return ib(e, ab());
    }),
    gh.apply(e, arguments)
  );
}
function ob() {
  var e = x_(rb()).domain([1, 10]);
  return (
    (e.copy = function () {
      return ib(e, ob()).base(e.base());
    }),
    gh.apply(e, arguments)
  );
}
function sb() {
  var e = T_(rb());
  return (
    (e.copy = function () {
      return ib(e, sb()).constant(e.constant());
    }),
    gh.apply(e, arguments)
  );
}
function cb() {
  var e = A_(rb());
  return (
    (e.copy = function () {
      return ib(e, cb()).exponent(e.exponent());
    }),
    gh.apply(e, arguments)
  );
}
function lb() {
  return cb.apply(null, arguments).exponent(0.5);
}
function ub() {
  var e = [],
    t = Ag;
  function n(n) {
    if (n != null && !isNaN((n = +n)))
      return t((qm(e, n, 1) - 1) / (e.length - 1));
  }
  return (
    (n.domain = function (t) {
      if (!arguments.length) return e.slice();
      e = [];
      for (let n of t) n != null && !isNaN((n = +n)) && e.push(n);
      return (e.sort(Bm), n);
    }),
    (n.interpolator = function (e) {
      return arguments.length ? ((t = e), n) : t;
    }),
    (n.range = function () {
      return e.map((n, r) => t(r / (e.length - 1)));
    }),
    (n.quantiles = function (t) {
      return Array.from({ length: t + 1 }, (n, r) => fh(e, r / t));
    }),
    (n.copy = function () {
      return ub(t).domain(e);
    }),
    gh.apply(n, arguments)
  );
}
function db() {
  var e = 0,
    t = 0.5,
    n = 1,
    r = 1,
    i,
    a,
    o,
    s,
    c,
    l = Ag,
    u,
    d = !1,
    f;
  function p(e) {
    return isNaN((e = +e))
      ? f
      : ((e = 0.5 + ((e = +u(e)) - a) * (r * e < r * a ? s : c)),
        l(d ? Math.max(0, Math.min(1, e)) : e));
  }
  ((p.domain = function (l) {
    return arguments.length
      ? (([e, t, n] = l),
        (i = u((e = +e))),
        (a = u((t = +t))),
        (o = u((n = +n))),
        (s = i === a ? 0 : 0.5 / (a - i)),
        (c = a === o ? 0 : 0.5 / (o - a)),
        (r = a < i ? -1 : 1),
        p)
      : [e, t, n];
  }),
    (p.clamp = function (e) {
      return arguments.length ? ((d = !!e), p) : d;
    }),
    (p.interpolator = function (e) {
      return arguments.length ? ((l = e), p) : l;
    }));
  function m(e) {
    return function (t) {
      var n, r, i;
      return arguments.length
        ? (([n, r, i] = t), (l = Eg(e, [n, r, i])), p)
        : [l(0), l(0.5), l(1)];
    };
  }
  return (
    (p.range = m(wg)),
    (p.rangeRound = m(Tg)),
    (p.unknown = function (e) {
      return arguments.length ? ((f = e), p) : f;
    }),
    function (l) {
      return (
        (u = l),
        (i = l(e)),
        (a = l(t)),
        (o = l(n)),
        (s = i === a ? 0 : 0.5 / (a - i)),
        (c = a === o ? 0 : 0.5 / (o - a)),
        (r = a < i ? -1 : 1),
        p
      );
    }
  );
}
function fb() {
  var e = l_(db()(Ag));
  return (
    (e.copy = function () {
      return ib(e, fb());
    }),
    gh.apply(e, arguments)
  );
}
function pb() {
  var e = x_(db()).domain([0.1, 1, 10]);
  return (
    (e.copy = function () {
      return ib(e, pb()).base(e.base());
    }),
    gh.apply(e, arguments)
  );
}
function mb() {
  var e = T_(db());
  return (
    (e.copy = function () {
      return ib(e, mb()).constant(e.constant());
    }),
    gh.apply(e, arguments)
  );
}
function hb() {
  var e = A_(db());
  return (
    (e.copy = function () {
      return ib(e, hb()).exponent(e.exponent());
    }),
    gh.apply(e, arguments)
  );
}
function gb() {
  return hb.apply(null, arguments).exponent(0.5);
}
var _b = u({
  scaleBand: () => yh,
  scaleDiverging: () => fb,
  scaleDivergingLog: () => pb,
  scaleDivergingPow: () => hb,
  scaleDivergingSqrt: () => gb,
  scaleDivergingSymlog: () => mb,
  scaleIdentity: () => d_,
  scaleImplicit: () => _h,
  scaleLinear: () => u_,
  scaleLog: () => S_,
  scaleOrdinal: () => vh,
  scalePoint: () => xh,
  scalePow: () => j_,
  scaleQuantile: () => I_,
  scaleQuantize: () => L_,
  scaleRadial: () => F_,
  scaleSequential: () => ab,
  scaleSequentialLog: () => ob,
  scaleSequentialPow: () => cb,
  scaleSequentialQuantile: () => ub,
  scaleSequentialSqrt: () => lb,
  scaleSequentialSymlog: () => sb,
  scaleSqrt: () => M_,
  scaleSymlog: () => E_,
  scaleThreshold: () => R_,
  scaleTime: () => tb,
  scaleUtc: () => nb,
  tickFormat: () => c_,
});
function vb(e) {
  var t = _b;
  if (e in t && typeof t[e] == `function`) return t[e]();
  var n = `scale${nn(e)}`;
  if (n in t && typeof t[n] == `function`) return t[n]();
}
function yb(e, t, n) {
  if (typeof e == `function`) return e.copy().domain(t).range(n);
  if (e != null) {
    var r = vb(e);
    if (r != null) return (r.domain(t).range(n), r);
  }
}
function bb(e, t, n, r) {
  if (!(n == null || r == null))
    return typeof e.scale == `function` ? yb(e.scale, n, r) : yb(t, n, r);
}
function xb(e) {
  return `scale${nn(e)}`;
}
function Sb(e) {
  return xb(e) in _b;
}
var Cb = (e, t, n) => {
  if (e != null) {
    var r = e.scale,
      i = e.type;
    if (r === `auto`)
      return i === `category` &&
        n &&
        (n.indexOf(`LineChart`) >= 0 ||
          n.indexOf(`AreaChart`) >= 0 ||
          (n.indexOf(`ComposedChart`) >= 0 && !t))
        ? `point`
        : i === `category`
          ? `band`
          : `linear`;
    if (typeof r == `string`) return Sb(r) ? r : `point`;
  }
};
function wb(e, t) {
  for (var n = 0, r = e.length, i = e[0] < e[e.length - 1]; n < r;) {
    var a = Math.floor((n + r) / 2);
    (i ? e[a] < t : e[a] > t) ? (n = a + 1) : (r = a);
  }
  return n;
}
function Tb(e, t) {
  if (e) {
    var n = t ?? e.domain(),
      r = n.map((t) => e(t) ?? 0),
      i = e.range();
    if (!(n.length === 0 || i.length < 2))
      return (e) => {
        var t = wb(r, e);
        if (t <= 0) return n[0];
        if (t >= n.length) return n[n.length - 1];
        var i = r[t - 1] ?? 0,
          a = r[t] ?? 0;
        return Math.abs(e - i) <= Math.abs(e - a) ? n[t - 1] : n[t];
      };
  }
}
function Eb(e) {
  if (e != null)
    return `invert` in e && typeof e.invert == `function`
      ? e.invert.bind(e)
      : Tb(e, void 0);
}
function Db(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Ob(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Db(Object(n), !0).forEach(function (t) {
          kb(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Db(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function kb(e, t, n) {
  return (
    (t = Ab(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Ab(e) {
  var t = jb(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function jb(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Mb(e, t) {
  return Lb(e) || Ib(e, t) || Pb(e, t) || Nb();
}
function Nb() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Pb(e, t) {
  if (e) {
    if (typeof e == `string`) return Fb(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? Fb(e, t)
          : void 0
    );
  }
}
function Fb(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Ib(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n != null) {
    var r,
      i,
      a,
      o,
      s = [],
      c = !0,
      l = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        c = !1;
      } else
        for (
          ;
          !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t);
          c = !0
        );
    } catch (e) {
      ((l = !0), (i = e));
    } finally {
      try {
        if (!c && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return s;
  }
}
function Lb(e) {
  if (Array.isArray(e)) return e;
}
var Rb = [0, `auto`],
  Y = {
    allowDataOverflow: !1,
    allowDecimals: !0,
    allowDuplicatedCategory: !0,
    angle: 0,
    dataKey: void 0,
    domain: void 0,
    height: 30,
    hide: !0,
    id: 0,
    includeHidden: !1,
    interval: `preserveEnd`,
    minTickGap: 5,
    mirror: !1,
    name: void 0,
    orientation: `bottom`,
    padding: { left: 0, right: 0 },
    reversed: !1,
    scale: `auto`,
    tick: !0,
    tickCount: 5,
    tickFormatter: void 0,
    ticks: void 0,
    type: `category`,
    unit: void 0,
    niceTicks: `auto`,
  },
  zb = (e, t) => e.cartesianAxis.xAxis[t],
  Bb = (e, t) => zb(e, t) ?? Y,
  Vb = {
    allowDataOverflow: !1,
    allowDecimals: !0,
    allowDuplicatedCategory: !0,
    angle: 0,
    dataKey: void 0,
    domain: Rb,
    hide: !0,
    id: 0,
    includeHidden: !1,
    interval: `preserveEnd`,
    minTickGap: 5,
    mirror: !1,
    name: void 0,
    orientation: `left`,
    padding: { top: 0, bottom: 0 },
    reversed: !1,
    scale: `auto`,
    tick: !0,
    tickCount: 5,
    tickFormatter: void 0,
    ticks: void 0,
    type: `number`,
    unit: void 0,
    niceTicks: `auto`,
    width: 60,
  },
  Hb = (e, t) => e.cartesianAxis.yAxis[t],
  Ub = (e, t) => Hb(e, t) ?? Vb,
  Wb = {
    domain: [0, `auto`],
    includeHidden: !1,
    reversed: !1,
    allowDataOverflow: !1,
    allowDuplicatedCategory: !1,
    dataKey: void 0,
    id: 0,
    name: ``,
    range: [64, 64],
    scale: `auto`,
    type: `number`,
    unit: ``,
  },
  Gb = (e, t) => e.cartesianAxis.zAxis[t] ?? Wb,
  Kb = (e, t, n) => {
    switch (t) {
      case `xAxis`:
        return Bb(e, n);
      case `yAxis`:
        return Ub(e, n);
      case `zAxis`:
        return Gb(e, n);
      case `angleAxis`:
        return bm(e, n);
      case `radiusAxis`:
        return xm(e, n);
      default:
        throw Error(`Unexpected axis type: ${t}`);
    }
  },
  qb = (e, t, n) => {
    switch (t) {
      case `xAxis`:
        return Bb(e, n);
      case `yAxis`:
        return Ub(e, n);
      default:
        throw Error(`Unexpected axis type: ${t}`);
    }
  },
  Jb = (e, t, n) => {
    switch (t) {
      case `xAxis`:
        return Bb(e, n);
      case `yAxis`:
        return Ub(e, n);
      case `angleAxis`:
        return bm(e, n);
      case `radiusAxis`:
        return xm(e, n);
      default:
        throw Error(`Unexpected axis type: ${t}`);
    }
  },
  Yb = (e) =>
    e.graphicalItems.cartesianItems.some((e) => e.type === `bar`) ||
    e.graphicalItems.polarItems.some((e) => e.type === `radialBar`);
function Xb(e, t) {
  return (n) => {
    switch (e) {
      case `xAxis`:
        return `xAxisId` in n && n.xAxisId === t;
      case `yAxis`:
        return `yAxisId` in n && n.yAxisId === t;
      case `zAxis`:
        return `zAxisId` in n && n.zAxisId === t;
      case `angleAxis`:
        return `angleAxisId` in n && n.angleAxisId === t;
      case `radiusAxis`:
        return `radiusAxisId` in n && n.radiusAxisId === t;
      default:
        return !1;
    }
  };
}
var Zb = (e) => e.graphicalItems.cartesianItems,
  Qb = T([K, km], Xb),
  $b = (e, t, n) =>
    e.filter(n).filter((e) => (t?.includeHidden === !0 ? !0 : !e.hide)),
  ex = T([Zb, Kb, Qb], $b, { memoizeOptions: { resultEqualityCheck: Pm } }),
  tx = T([ex], (e) =>
    e.filter((e) => e.type === `area` || e.type === `bar`).filter(Mm),
  ),
  nx = (e) => e.filter((e) => !(`stackId` in e) || e.stackId === void 0),
  rx = T([ex], nx),
  ix = (e) =>
    e
      .map((e) => e.data)
      .filter(Boolean)
      .flat(1),
  ax = T([ex], (e) => e.some((e) => !e.data)),
  ox = T([ex], ix, { memoizeOptions: { resultEqualityCheck: Pm } }),
  sx = (e, t) => {
    var n = t.chartData,
      r = n === void 0 ? [] : n,
      i = t.dataStartIndex,
      a = t.dataEndIndex;
    return e.length > 0 ? e : r.slice(i, a + 1);
  },
  cx = T([ox, Cp], sx),
  lx = (e, t, n) =>
    t?.dataKey == null
      ? n.length > 0
        ? n
            .map((e) => e.dataKey)
            .flatMap((t) => e.map((e) => ({ value: H(e, t) })))
        : e.map((e) => ({ value: e }))
      : e.map((e) => ({ value: H(e, t.dataKey) })),
  ux = (e, t, n, r, i, a) => {
    var o = r.chartData,
      s = o === void 0 ? [] : o,
      c = r.dataStartIndex,
      l = r.dataEndIndex,
      u = lx(e, t, n);
    return i && t?.dataKey != null && a.length > 0
      ? [
          ...s
            .slice(c, l + 1)
            .map((e) => ({ value: H(e, t.dataKey) }))
            .filter((e) => e.value != null),
          ...u,
        ]
      : u;
  },
  dx = T([cx, Kb, ex, Cp, ax, ox], ux);
function fx(e) {
  if (Yt(e) || e instanceof Date) {
    var t = Number(e);
    if (V(t)) return t;
  }
}
function px(e) {
  if (Array.isArray(e)) {
    var t = [fx(e[0]), fx(e[1])];
    return Np(t) ? t : void 0;
  }
  var n = fx(e);
  if (n != null) return [n, n];
}
function mx(e) {
  return e.map(fx).filter(rn);
}
function hx(e, t) {
  var n = fx(e),
    r = fx(t);
  return n == null && r == null ? 0 : n == null ? -1 : r == null ? 1 : n - r;
}
var gx = T([dx], (e) => e?.map((e) => e.value).sort(hx));
function _x(e, t) {
  switch (e) {
    case `xAxis`:
      return t.direction === `x`;
    case `yAxis`:
      return t.direction === `y`;
    default:
      return !1;
  }
}
function vx(e, t, n) {
  if (!n || !n.length) return [];
  var r;
  if (typeof t == `number` && !qt(t)) r = t;
  else if (Array.isArray(t)) {
    var i = mx(t);
    i.length > 0 && (r = Math.max(...i));
  }
  return r == null
    ? []
    : mx(
        n.flatMap((t) => {
          var n = H(e, t.dataKey),
            i,
            a;
          if (Array.isArray(n)) {
            var o = Mb(n, 2);
            ((i = o[0]), (a = o[1]));
          } else i = a = n;
          if (!(!V(i) || !V(a))) return [r - i, r + a];
        }),
      );
}
var X = (e) => Jb(e, Im(e), Lm(e)),
  yx = T([X], (e) => e?.dataKey),
  bx = T([tx, Cp, X], jm),
  xx = (e, t, n, r) => {
    var i = t.reduce((e, t) => {
      if (t.stackId == null) return e;
      var n = e[t.stackId];
      return ((n ??= []), n.push(t), (e[t.stackId] = n), e);
    }, {});
    return Object.fromEntries(
      Object.entries(i).map((t) => {
        var i = Mb(t, 2),
          a = i[0],
          o = i[1],
          s = r ? [...o].reverse() : o;
        return [a, { stackedData: Rs(e, s.map(Am), n), graphicalItems: s }];
      }),
    );
  },
  Sx = T([bx, tx, nm, rm], xx),
  Cx = (e, t, n, r) => {
    var i = t.dataStartIndex,
      a = t.dataEndIndex;
    if (r == null && n !== `zAxis`) return Ws(e, i, a);
  },
  wx = T([Kb], (e) => e.allowDataOverflow),
  Tx = (e) => {
    if (e == null || !(`domain` in e)) return Rb;
    if (e.domain != null) return e.domain;
    if (`ticks` in e && e.ticks != null) {
      if (e.type === `number`) {
        var t = mx(e.ticks);
        return [Math.min(...t), Math.max(...t)];
      }
      if (e.type === `category`) return e.ticks.map(String);
    }
    return e?.domain ?? Rb;
  },
  Ex = T([Kb], Tx),
  Dx = T([Ex, wx], Fp),
  Ox = T([Sx, xp, K, Dx], Cx, { memoizeOptions: { resultEqualityCheck: Nm } }),
  kx = (e) => e.errorBars,
  Ax = (e, t, n) =>
    e
      .flatMap((e) => t[e.id])
      .filter(Boolean)
      .filter((e) => _x(n, e)),
  jx = function () {
    var e = [...arguments].filter(Boolean);
    if (e.length !== 0) {
      var t = e.flat();
      return [Math.min(...t), Math.max(...t)];
    }
  },
  Mx = function (e, t, n, r, i) {
    var a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : [],
      o,
      s;
    if (
      (n.length > 0 &&
        n.forEach((e) => {
          var n = e.data == null ? a : [...e.data],
            c = r[e.id]?.filter((e) => _x(i, e));
          n.forEach((n) => {
            var r = H(n, t.dataKey ?? e.dataKey),
              i = vx(n, r, c);
            if (i.length >= 2) {
              var a = Math.min(...i),
                l = Math.max(...i);
              ((o == null || a < o) && (o = a),
                (s == null || l > s) && (s = l));
            }
            var u = px(r);
            u != null &&
              ((o = o == null ? u[0] : Math.min(o, u[0])),
              (s = s == null ? u[1] : Math.max(s, u[1])));
          });
        }),
      t?.dataKey != null &&
        n.length === 0 &&
        e.forEach((e) => {
          var n = px(H(e, t.dataKey));
          n != null &&
            ((o = o == null ? n[0] : Math.min(o, n[0])),
            (s = s == null ? n[1] : Math.max(s, n[1])));
        }),
      V(o) && V(s))
    )
      return [o, s];
  },
  Nx = T([cx, Kb, rx, kx, K, Tp], Mx, {
    memoizeOptions: { resultEqualityCheck: Nm },
  });
function Px(e) {
  var t = e.value;
  if (Yt(t) || t instanceof Date) return t;
}
var Fx = (e, t, n) => {
    var r = e.map(Px).filter((e) => e != null);
    return n && (t.dataKey == null || (t.allowDuplicatedCategory && $t(r)))
      ? bp(0, e.length)
      : t.allowDuplicatedCategory
        ? r
        : Array.from(new Set(r));
  },
  Ix = (e) => e.referenceElements.dots,
  Lx = (e, t, n) =>
    e
      .filter((e) => e.ifOverflow === `extendDomain`)
      .filter((e) => (t === `xAxis` ? e.xAxisId === n : e.yAxisId === n)),
  Rx = T([Ix, K, km], Lx),
  zx = (e) => e.referenceElements.areas,
  Bx = T([zx, K, km], Lx),
  Vx = (e) => e.referenceElements.lines,
  Hx = T([Vx, K, km], Lx),
  Ux = (e, t) => {
    if (e != null) {
      var n = mx(e.map((e) => (t === `xAxis` ? e.x : e.y)));
      if (n.length !== 0) return [Math.min(...n), Math.max(...n)];
    }
  },
  Wx = T(Rx, K, Ux),
  Gx = (e, t) => {
    if (e != null) {
      var n = mx(
        e.flatMap((e) => [
          t === `xAxis` ? e.x1 : e.y1,
          t === `xAxis` ? e.x2 : e.y2,
        ]),
      );
      if (n.length !== 0) return [Math.min(...n), Math.max(...n)];
    }
  },
  Kx = T([Bx, K], Gx);
function qx(e) {
  if (e.x != null) return mx([e.x]);
  var t = e.segment?.map((e) => e.x);
  return t == null || t.length === 0 ? [] : mx(t);
}
function Jx(e) {
  if (e.y != null) return mx([e.y]);
  var t = e.segment?.map((e) => e.y);
  return t == null || t.length === 0 ? [] : mx(t);
}
var Yx = (e, t) => {
    if (e != null) {
      var n = e.flatMap((e) => (t === `xAxis` ? qx(e) : Jx(e)));
      if (n.length !== 0) return [Math.min(...n), Math.max(...n)];
    }
  },
  Xx = T(Wx, T([Hx, K], Yx), Kx, (e, t, n) => jx(e, n, t)),
  Zx = (e, t, n, r, i, a, o, s, c) => {
    if (n != null) return n;
    var l =
        (o === `vertical` && s === `xAxis`) ||
        (o === `horizontal` && s === `yAxis`)
          ? jx(r, a, i)
          : jx(a, i),
      u = Ip(t, l, e.allowDataOverflow);
    return u == null && e.allowDataOverflow && l == null && c != null ? c : u;
  },
  Qx = T(
    [
      Kb,
      Ex,
      Dx,
      Ox,
      Nx,
      Xx,
      W,
      K,
      T(
        [Kb],
        (e) => {
          if (!(
            e == null ||
            e.type !== `number` ||
            !(`ticks` in e) ||
            e.ticks == null
          )) {
            var t = mx(e.ticks);
            if (t.length !== 0) return [Math.min(...t), Math.max(...t)];
          }
        },
        { memoizeOptions: { resultEqualityCheck: Nm } },
      ),
    ],
    Zx,
    { memoizeOptions: { resultEqualityCheck: Nm } },
  ),
  $x = [0, 1],
  eS = (e, t, n, r, i, a, o) => {
    if (!((e == null || n == null || n.length === 0) && o === void 0)) {
      var s = e.dataKey,
        c = e.type,
        l = Ns(t, a);
      return l && s == null
        ? bp(0, n?.length ?? 0)
        : c === `category`
          ? Fx(r, e, l)
          : i === `expand` && !l
            ? $x
            : o;
    }
  },
  tS = T([Kb, W, cx, dx, nm, K, Qx], eS),
  nS = T([Kb, Yb, im], Cb),
  rS = (e, t, n) => {
    var r = t.niceTicks;
    if (r !== `none`) {
      var i = Tx(t),
        a = Array.isArray(i) && (i[0] === `auto` || i[1] === `auto`);
      if (
        (r === `snap125` || r === `adaptive`) &&
        t != null &&
        t.tickCount &&
        Np(e)
      ) {
        if (a) return Xp(e, t.tickCount, t.allowDecimals, r);
        if (t.type === `number`) return Zp(e, t.tickCount, t.allowDecimals, r);
      }
      if (r === `auto` && n === `linear` && t != null && t.tickCount) {
        if (a && Np(e)) return Xp(e, t.tickCount, t.allowDecimals, `adaptive`);
        if (t.type === `number` && Np(e))
          return Zp(e, t.tickCount, t.allowDecimals, `adaptive`);
      }
    }
  },
  iS = T([tS, Jb, nS], rS),
  aS = (e, t, n, r) => {
    if (
      r !== `angleAxis` &&
      e?.type === `number` &&
      Np(t) &&
      Array.isArray(n) &&
      n.length > 0
    ) {
      var i = t[0],
        a = n[0] ?? 0,
        o = t[1],
        s = n[n.length - 1] ?? 0;
      return [Math.min(i, a), Math.max(o, s)];
    }
    return t;
  },
  oS = T([Kb, tS, iS, K], aS),
  sS = T(
    T(dx, Kb, (e, t) => {
      if (!(!t || t.type !== `number`)) {
        var n = 1 / 0,
          r = Array.from(mx(e.map((e) => e.value))).sort((e, t) => e - t),
          i = r[0],
          a = r[r.length - 1];
        if (i == null || a == null) return 1 / 0;
        var o = a - i;
        if (o === 0) return 1 / 0;
        for (var s = 0; s < r.length - 1; s++) {
          var c = r[s],
            l = r[s + 1];
          if (!(c == null || l == null)) {
            var u = l - c;
            n = Math.min(n, u);
          }
        }
        return n / o;
      }
    }),
    W,
    em,
    U,
    (e, t, n, r, i) => i,
    (e, t, n, r, i) => {
      if (!V(e)) return 0;
      var a = t === `vertical` ? r.height : r.width;
      if (i === `gap`) return (e * a) / 2;
      if (i === `no-gap`) {
        var o = Qt(n, e * a),
          s = (e * a) / 2;
        return s - o - ((s - o) / a) * o;
      }
      return 0;
    },
  ),
  cS = (e, t, n) => {
    var r = Bb(e, t);
    return r == null || typeof r.padding != `string`
      ? 0
      : sS(e, `xAxis`, t, n, r.padding);
  },
  lS = (e, t, n) => {
    var r = Ub(e, t);
    return r == null || typeof r.padding != `string`
      ? 0
      : sS(e, `yAxis`, t, n, r.padding);
  },
  uS = T(Bb, cS, (e, t) => {
    if (e == null) return { left: 0, right: 0 };
    var n = e.padding;
    return typeof n == `string`
      ? { left: t, right: t }
      : { left: (n.left ?? 0) + t, right: (n.right ?? 0) + t };
  }),
  dS = T(Ub, lS, (e, t) => {
    if (e == null) return { top: 0, bottom: 0 };
    var n = e.padding;
    return typeof n == `string`
      ? { top: t, bottom: t }
      : { top: (n.top ?? 0) + t, bottom: (n.bottom ?? 0) + t };
  }),
  fS = T([U, uS, bc, yc, (e, t, n) => n], (e, t, n, r, i) => {
    var a = r.padding;
    return i
      ? [a.left, n.width - a.right]
      : [e.left + t.left, e.left + e.width - t.right];
  }),
  pS = T([U, W, dS, bc, yc, (e, t, n) => n], (e, t, n, r, i, a) => {
    var o = i.padding;
    return a
      ? [r.height - o.bottom, o.top]
      : t === `horizontal`
        ? [e.top + e.height - n.bottom, e.top + n.top]
        : [e.top + n.top, e.top + e.height - n.bottom];
  }),
  mS = (e, t, n, r) => {
    switch (t) {
      case `xAxis`:
        return fS(e, n, r);
      case `yAxis`:
        return pS(e, n, r);
      case `zAxis`:
        return Gb(e, n)?.range;
      case `angleAxis`:
        return Em(e);
      case `radiusAxis`:
        return Dm(e, n);
      default:
        return;
    }
  },
  hS = T([Kb, mS], dm),
  gS = T([Kb, nS, T([nS, oS], zm), hS], bb),
  _S = (e, t, n, r) => {
    if (!(n == null || n.dataKey == null)) {
      var i = n.type,
        a = n.scale;
      if (Ns(e, r) && (i === `number` || a !== `auto`))
        return t.map((e) => e.value);
    }
  },
  vS = T([W, dx, Jb, K], _S),
  yS = T([gS], Rm);
(T([gS], Eb), T([gS, gx], Tb), T([ex, kx, K], Ax));
function bS(e, t) {
  return e.id < t.id ? -1 : +(e.id > t.id);
}
var xS = (e, t) => t,
  SS = (e, t, n) => n,
  CS = T(nc, xS, SS, (e, t, n) =>
    e
      .filter((e) => e.orientation === t)
      .filter((e) => e.mirror === n)
      .sort(bS),
  ),
  wS = T(rc, xS, SS, (e, t, n) =>
    e
      .filter((e) => e.orientation === t)
      .filter((e) => e.mirror === n)
      .sort(bS),
  ),
  TS = (e, t) => ({ width: e.width, height: t.height }),
  ES = (e, t) => ({
    width: typeof t.width == `number` ? t.width : 60,
    height: e.height,
  }),
  DS = T(U, Bb, TS),
  OS = (e, t, n) => {
    switch (t) {
      case `top`:
        return e.top;
      case `bottom`:
        return n - e.bottom;
      default:
        return 0;
    }
  },
  kS = (e, t, n) => {
    switch (t) {
      case `left`:
        return e.left;
      case `right`:
        return n - e.right;
      default:
        return 0;
    }
  },
  AS = T($s, U, CS, xS, SS, (e, t, n, r, i) => {
    var a = {},
      o;
    return (
      n.forEach((n) => {
        var s = TS(t, n);
        o ??= OS(t, r, e);
        var c = (r === `top` && !i) || (r === `bottom` && i);
        ((a[n.id] = o - Number(c) * s.height), (o += (c ? -1 : 1) * s.height));
      }),
      a
    );
  }),
  jS = T(Qs, U, wS, xS, SS, (e, t, n, r, i) => {
    var a = {},
      o;
    return (
      n.forEach((n) => {
        var s = ES(t, n);
        o ??= kS(t, r, e);
        var c = (r === `left` && !i) || (r === `right` && i);
        ((a[n.id] = o - Number(c) * s.width), (o += (c ? -1 : 1) * s.width));
      }),
      a
    );
  }),
  MS = T(
    [
      U,
      Bb,
      (e, t) => {
        var n = Bb(e, t);
        if (n != null) return AS(e, n.orientation, n.mirror);
      },
      (e, t) => t,
    ],
    (e, t, n, r) => {
      if (t != null) {
        var i = n?.[r];
        return i == null ? { x: e.left, y: 0 } : { x: e.left, y: i };
      }
    },
  );
T(
  [
    U,
    Ub,
    (e, t) => {
      var n = Ub(e, t);
      if (n != null) return jS(e, n.orientation, n.mirror);
    },
    (e, t) => t,
  ],
  (e, t, n, r) => {
    if (t != null) {
      var i = n?.[r];
      return i == null ? { x: 0, y: e.top } : { x: i, y: e.top };
    }
  },
);
var NS = T(U, Ub, (e, t) => ({
    width: typeof t.width == `number` ? t.width : 60,
    height: e.height,
  })),
  PS = (e, t, n) => {
    switch (t) {
      case `xAxis`:
        return DS(e, n).width;
      case `yAxis`:
        return NS(e, n).height;
      default:
        return;
    }
  },
  FS = (e, t, n, r) => {
    if (n != null) {
      var i = n.allowDuplicatedCategory,
        a = n.type,
        o = n.dataKey,
        s = Ns(e, r),
        c = t.map((e) => e.value),
        l = c.filter((e) => e != null);
      if (o && s && a === `category` && i && $t(l)) return c;
    }
  },
  IS = T([W, dx, Kb, K], FS),
  LS = T([W, qb, nS, yS, IS, vS, mS, iS, K], (e, t, n, r, i, a, o, s, c) => {
    if (t != null) {
      var l = Ns(e, c);
      return {
        angle: t.angle,
        interval: t.interval,
        minTickGap: t.minTickGap,
        orientation: t.orientation,
        tick: t.tick,
        tickCount: t.tickCount,
        tickFormatter: t.tickFormatter,
        ticks: t.ticks,
        type: t.type,
        unit: t.unit,
        axisType: c,
        categoricalDomain: a,
        duplicateDomain: i,
        isCategorical: l,
        niceTicks: s,
        range: o,
        realScaleType: n,
        scale: r,
      };
    }
  }),
  RS = T([W, Jb, nS, yS, iS, mS, IS, vS, K], (e, t, n, r, i, a, o, s, c) => {
    if (!(t == null || r == null)) {
      var l = Ns(e, c),
        u = t.type,
        d = t.ticks,
        f = t.tickCount,
        p =
          n === `scaleBand` && typeof r.bandwidth == `function`
            ? r.bandwidth() / 2
            : 2,
        m = u === `category` && r.bandwidth ? r.bandwidth() / p : 0;
      m =
        c === `angleAxis` && a != null && a.length >= 2
          ? Kt(a[0] - a[1]) * 2 * m
          : m;
      var h = d || i;
      return h
        ? h
            .map((e, t) => {
              var n = o ? o.indexOf(e) : e,
                i = r.map(n);
              return V(i)
                ? { index: t, coordinate: i + m, value: e, offset: m }
                : null;
            })
            .filter(rn)
        : l && s
          ? s
              .map((e, t) => {
                var n = r.map(e);
                return V(n)
                  ? { coordinate: n + m, value: e, index: t, offset: m }
                  : null;
              })
              .filter(rn)
          : r.ticks
            ? r
                .ticks(f)
                .map((e, t) => {
                  var n = r.map(e);
                  return V(n)
                    ? { coordinate: n + m, value: e, index: t, offset: m }
                    : null;
                })
                .filter(rn)
            : r
                .domain()
                .map((e, t) => {
                  var n = r.map(e);
                  return V(n)
                    ? {
                        coordinate: n + m,
                        value: o ? o[e] : e,
                        index: t,
                        offset: m,
                      }
                    : null;
                })
                .filter(rn);
    }
  }),
  zS = T([W, Jb, yS, mS, IS, vS, K], (e, t, n, r, i, a, o) => {
    if (!(t == null || n == null || r == null || r[0] === r[1])) {
      var s = Ns(e, o),
        c = t.tickCount,
        l = 0;
      return (
        (l = o === `angleAxis` && r?.length >= 2 ? Kt(r[0] - r[1]) * 2 * l : l),
        s && a
          ? a
              .map((e, t) => {
                var r = n.map(e);
                return V(r)
                  ? { coordinate: r + l, value: e, index: t, offset: l }
                  : null;
              })
              .filter(rn)
          : n.ticks
            ? n
                .ticks(c)
                .map((e, t) => {
                  var r = n.map(e);
                  return V(r)
                    ? { coordinate: r + l, value: e, index: t, offset: l }
                    : null;
                })
                .filter(rn)
            : n
                .domain()
                .map((e, t) => {
                  var r = n.map(e);
                  return V(r)
                    ? {
                        coordinate: r + l,
                        value: i ? i[e] : e,
                        index: t,
                        offset: l,
                      }
                    : null;
                })
                .filter(rn)
      );
    }
  }),
  BS = T(Kb, yS, (e, t) => {
    if (!(e == null || t == null)) return Ob(Ob({}, e), {}, { scale: t });
  });
T(
  (e, t, n) => Gb(e, n),
  T([T([Kb, nS, tS, hS], bb)], Rm),
  (e, t) => {
    if (!(e == null || t == null)) return Ob(Ob({}, e), {}, { scale: t });
  },
);
var VS = T([W, nc, rc], (e, t, n) => {
  switch (e) {
    case `horizontal`:
      return t.some((e) => e.reversed) ? `right-to-left` : `left-to-right`;
    case `vertical`:
      return n.some((e) => e.reversed) ? `bottom-to-top` : `top-to-bottom`;
    case `centric`:
    case `radial`:
      return `left-to-right`;
    default:
      return;
  }
});
T([(e, t, n) => e.renderedTicks[t]?.[n]], (e) => {
  if (!(!e || e.length === 0))
    return (t) => {
      var n = 1 / 0,
        r = e[0];
      for (var i of e) {
        var a = Math.abs(i.coordinate - t);
        a < n && ((n = a), (r = i));
      }
      return r?.value;
    };
});
var HS = (e) => e.options.defaultTooltipEventType,
  US = (e) => e.options.validateTooltipEventTypes;
function WS(e, t, n) {
  if (e == null) return t;
  var r = e ? `axis` : `item`;
  return n == null ? t : n.includes(r) ? r : t;
}
function GS(e, t) {
  return WS(t, HS(e), US(e));
}
function KS(e) {
  return R((t) => GS(t, e));
}
var qS = (e, t) => {
    var n,
      r = Number(t);
    if (!(qt(r) || t == null))
      return r >= 0
        ? e == null || (n = e[r]) == null
          ? void 0
          : n.value
        : void 0;
  },
  JS = (e) => e.tooltip.settings,
  YS = {
    active: !1,
    index: null,
    dataKey: void 0,
    graphicalItemId: void 0,
    coordinate: void 0,
  },
  XS = Ao({
    name: `tooltip`,
    initialState: {
      itemInteraction: { click: YS, hover: YS },
      axisInteraction: { click: YS, hover: YS },
      keyboardInteraction: YS,
      syncInteraction: {
        active: !1,
        index: null,
        dataKey: void 0,
        label: void 0,
        coordinate: void 0,
        sourceViewBox: void 0,
        graphicalItemId: void 0,
      },
      tooltipItemPayloads: [],
      settings: {
        shared: void 0,
        trigger: `hover`,
        axisId: 0,
        active: !1,
        defaultIndex: void 0,
      },
    },
    reducers: {
      addTooltipEntrySettings: {
        reducer(e, t) {
          e.tooltipItemPayloads.push(z(t.payload));
        },
        prepare: B(),
      },
      replaceTooltipEntrySettings: {
        reducer(e, t) {
          var n = t.payload,
            r = n.prev,
            i = n.next,
            a = to(e).tooltipItemPayloads.indexOf(z(r));
          a > -1 && (e.tooltipItemPayloads[a] = z(i));
        },
        prepare: B(),
      },
      removeTooltipEntrySettings: {
        reducer(e, t) {
          var n = to(e).tooltipItemPayloads.indexOf(z(t.payload));
          n > -1 && e.tooltipItemPayloads.splice(n, 1);
        },
        prepare: B(),
      },
      setTooltipSettingsState(e, t) {
        e.settings = t.payload;
      },
      setActiveMouseOverItemIndex(e, t) {
        ((e.syncInteraction.active = !1),
          (e.syncInteraction.sourceViewBox = void 0),
          (e.keyboardInteraction.active = !1),
          (e.itemInteraction.hover.active = !0),
          (e.itemInteraction.hover.index = t.payload.activeIndex),
          (e.itemInteraction.hover.dataKey = t.payload.activeDataKey),
          (e.itemInteraction.hover.graphicalItemId =
            t.payload.activeGraphicalItemId),
          (e.itemInteraction.hover.coordinate = t.payload.activeCoordinate));
      },
      mouseLeaveChart(e) {
        ((e.itemInteraction.hover.active = !1),
          (e.axisInteraction.hover.active = !1));
      },
      mouseLeaveItem(e) {
        e.itemInteraction.hover.active = !1;
      },
      setActiveClickItemIndex(e, t) {
        ((e.syncInteraction.active = !1),
          (e.syncInteraction.sourceViewBox = void 0),
          (e.itemInteraction.click.active = !0),
          (e.keyboardInteraction.active = !1),
          (e.itemInteraction.click.index = t.payload.activeIndex),
          (e.itemInteraction.click.dataKey = t.payload.activeDataKey),
          (e.itemInteraction.click.graphicalItemId =
            t.payload.activeGraphicalItemId),
          (e.itemInteraction.click.coordinate = t.payload.activeCoordinate));
      },
      setMouseOverAxisIndex(e, t) {
        ((e.syncInteraction.active = !1),
          (e.syncInteraction.sourceViewBox = void 0),
          (e.axisInteraction.hover.active = !0),
          (e.keyboardInteraction.active = !1),
          (e.axisInteraction.hover.index = t.payload.activeIndex),
          (e.axisInteraction.hover.dataKey = t.payload.activeDataKey),
          (e.axisInteraction.hover.coordinate = t.payload.activeCoordinate));
      },
      setMouseClickAxisIndex(e, t) {
        ((e.syncInteraction.active = !1),
          (e.syncInteraction.sourceViewBox = void 0),
          (e.keyboardInteraction.active = !1),
          (e.axisInteraction.click.active = !0),
          (e.axisInteraction.click.index = t.payload.activeIndex),
          (e.axisInteraction.click.dataKey = t.payload.activeDataKey),
          (e.axisInteraction.click.coordinate = t.payload.activeCoordinate));
      },
      setSyncInteraction(e, t) {
        e.syncInteraction = t.payload;
      },
      setKeyboardInteraction(e, t) {
        ((e.keyboardInteraction.active = t.payload.active),
          (e.keyboardInteraction.index = t.payload.activeIndex),
          (e.keyboardInteraction.coordinate = t.payload.activeCoordinate));
      },
    },
  }),
  ZS = XS.actions,
  QS = ZS.addTooltipEntrySettings,
  $S = ZS.replaceTooltipEntrySettings,
  eC = ZS.removeTooltipEntrySettings,
  tC = ZS.setTooltipSettingsState,
  nC = ZS.setActiveMouseOverItemIndex,
  rC = ZS.mouseLeaveItem,
  iC = ZS.mouseLeaveChart,
  aC = ZS.setActiveClickItemIndex,
  oC = ZS.setMouseOverAxisIndex,
  sC = ZS.setMouseClickAxisIndex,
  cC = ZS.setSyncInteraction,
  lC = ZS.setKeyboardInteraction,
  uC = XS.reducer;
function dC(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function fC(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? dC(Object(n), !0).forEach(function (t) {
          pC(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : dC(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function pC(e, t, n) {
  return (
    (t = mC(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function mC(e) {
  var t = hC(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function hC(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function gC(e, t, n) {
  return t === `axis`
    ? n === `click`
      ? e.axisInteraction.click
      : e.axisInteraction.hover
    : n === `click`
      ? e.itemInteraction.click
      : e.itemInteraction.hover;
}
function _C(e) {
  return e.index != null;
}
var vC = (e, t, n, r) => {
  if (t == null) return YS;
  var i = gC(e, t, n);
  if (i == null) return YS;
  if (i.active) return i;
  if (e.keyboardInteraction.active) return e.keyboardInteraction;
  if (e.syncInteraction.active && e.syncInteraction.index != null)
    return e.syncInteraction;
  var a = e.settings.active === !0;
  if (_C(i)) {
    if (a) return fC(fC({}, i), {}, { active: !0 });
  } else if (r != null)
    return {
      active: !0,
      coordinate: void 0,
      dataKey: void 0,
      index: r,
      graphicalItemId: void 0,
    };
  return fC(fC({}, YS), {}, { coordinate: i.coordinate });
};
function yC(e) {
  if (typeof e == `number`) return Number.isFinite(e) ? e : void 0;
  if (e instanceof Date) {
    var t = e.valueOf();
    return Number.isFinite(t) ? t : void 0;
  }
  var n = Number(e);
  return Number.isFinite(n) ? n : void 0;
}
function bC(e, t) {
  var n = yC(e),
    r = t[0],
    i = t[1];
  return n === void 0 ? !1 : n >= Math.min(r, i) && n <= Math.max(r, i);
}
function xC(e, t, n) {
  if (n == null || t == null) return !0;
  var r = H(e, t);
  return r == null || !Np(n) ? !0 : bC(r, n);
}
var SC = (e, t, n, r) => {
    var i = e?.index;
    if (i == null) return null;
    var a = Number(i);
    if (!V(a)) return i;
    var o = 0,
      s = 1 / 0;
    t.length > 0 && (s = t.length - 1);
    var c = Math.max(o, Math.min(a, s)),
      l = t[c];
    return l == null || xC(l, n, r) ? String(c) : null;
  },
  CC = (e, t, n, r, i, a, o) => {
    if (a != null) {
      var s = o[0]?.getPosition(a);
      if (s != null) return s;
      var c = i?.[Number(a)];
      if (c)
        switch (n) {
          case `horizontal`:
            return { x: c.coordinate, y: (r.top + t) / 2 };
          default:
            return { x: (r.left + e) / 2, y: c.coordinate };
        }
    }
  },
  wC = (e, t, n, r) => {
    if (t === `axis`) return e.tooltipItemPayloads;
    if (e.tooltipItemPayloads.length === 0) return [];
    var i =
      n === `hover`
        ? e.itemInteraction.hover.graphicalItemId
        : e.itemInteraction.click.graphicalItemId;
    if (e.syncInteraction.active && i == null) return e.tooltipItemPayloads;
    if (i == null && (r != null || e.keyboardInteraction.active)) {
      var a = e.tooltipItemPayloads[0];
      return a == null ? [] : [a];
    }
    return e.tooltipItemPayloads.filter(
      (e) => e.settings?.graphicalItemId === i,
    );
  },
  TC = (e) => e.options.tooltipPayloadSearcher,
  EC = (e) => e.tooltip;
function DC(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function OC(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? DC(Object(n), !0).forEach(function (t) {
          kC(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : DC(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function kC(e, t, n) {
  return (
    (t = AC(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function AC(e) {
  var t = jC(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function jC(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function MC(e) {
  if (typeof e == `string` || typeof e == `number`) return e;
}
function NC(e) {
  if (typeof e == `string` || typeof e == `number` || typeof e == `boolean`)
    return e;
}
function PC(e) {
  if (typeof e == `string` || typeof e == `number`) return e;
  if (typeof e == `function`) return (t) => e(t);
}
function FC(e) {
  if (typeof e == `string`) return e;
}
function IC(e) {
  if (!(typeof e != `object` || !e))
    return {
      name: `name` in e ? MC(e.name) : void 0,
      unit: `unit` in e ? NC(e.unit) : void 0,
      dataKey: `dataKey` in e ? PC(e.dataKey) : void 0,
      payload: `payload` in e ? e.payload : void 0,
      color: `color` in e ? FC(e.color) : void 0,
      fill: `fill` in e ? FC(e.fill) : void 0,
    };
}
function LC(e, t) {
  return e ?? t;
}
var RC = (e, t, n, r, i, a, o) => {
    if (!(t == null || a == null)) {
      var s = n.chartData,
        c = n.computedData,
        l = n.dataStartIndex,
        u = n.dataEndIndex;
      return e.reduce((e, n) => {
        var d = n.dataDefinedOnItem,
          f = n.settings,
          p = LC(d, s),
          m = Array.isArray(p) ? Ts(p, l, u) : p,
          h = f?.dataKey ?? r,
          g = f?.nameKey,
          _ =
            r && Array.isArray(m) && !Array.isArray(m[0]) && o === `axis`
              ? tn(m, r, i)
              : a(m, t, c, g);
        return (
          Array.isArray(_)
            ? _.forEach((t) => {
                var n = IC(t),
                  r = n?.name,
                  i = n?.dataKey,
                  a = n?.payload,
                  o = OC(
                    OC({}, f),
                    {},
                    {
                      name: r,
                      unit: n?.unit,
                      color: n?.color ?? f?.color,
                      fill: n?.fill ?? f?.fill,
                    },
                  );
                e.push(
                  Js({
                    tooltipEntrySettings: o,
                    dataKey: i,
                    payload: a,
                    value: H(a, i),
                    name: r == null ? void 0 : String(r),
                  }),
                );
              })
            : e.push(
                Js({
                  tooltipEntrySettings: f,
                  dataKey: h,
                  payload: _,
                  value: H(_, h),
                  name: H(_, g) ?? f?.name,
                }),
              ),
          e
        );
      }, []);
    }
  },
  zC = T([X, Yb, im], Cb),
  BC = T(
    [
      T(
        [
          (e) => e.graphicalItems.cartesianItems,
          (e) => e.graphicalItems.polarItems,
        ],
        (e, t) => [...e, ...t],
      ),
      X,
      T([Im, Lm], Xb),
    ],
    $b,
    { memoizeOptions: { resultEqualityCheck: Pm } },
  ),
  VC = T([BC], (e) => e.filter(Mm)),
  HC = T([BC], ix, { memoizeOptions: { resultEqualityCheck: Pm } }),
  UC = T([BC], (e) => e.some((e) => !e.data)),
  WC = T([HC, xp], sx),
  GC = T([VC, xp, X], jm),
  KC = T([WC, X, BC, xp, UC, HC], ux),
  qC = T([X], Tx),
  JC = T([qC, T([X], (e) => e.allowDataOverflow)], Fp),
  YC = T([T([GC, T([BC], (e) => e.filter(Mm)), nm, rm], xx), xp, Im, JC], Cx),
  XC = T([WC, X, T([BC], nx), kx, Im, Ep], Mx, {
    memoizeOptions: { resultEqualityCheck: Nm },
  }),
  ZC = T([T([Ix, Im, Lm], Lx), Im], Ux),
  QC = T([T([zx, Im, Lm], Lx), Im], Gx),
  $C = T(
    [
      X,
      W,
      WC,
      KC,
      nm,
      Im,
      T(
        [
          X,
          qC,
          JC,
          YC,
          XC,
          T([ZC, T([T([Vx, Im, Lm], Lx), Im], Yx), QC], jx),
          W,
          Im,
        ],
        Zx,
      ),
    ],
    eS,
  ),
  ew = T([X, $C, T([$C, X, zC], rS), Im], aS),
  tw = (e) => mS(e, Im(e), Lm(e), !1),
  nw = T([X, tw], dm),
  rw = T([T([X, zC, ew, nw], bb)], Rm),
  iw = T(
    [W, X, zC, rw, tw, T([W, KC, X, Im], FS), T([W, KC, X, Im], _S), Im],
    (e, t, n, r, i, a, o, s) => {
      if (t) {
        var c = t.type,
          l = Ns(e, s);
        if (r) {
          var u = n === `scaleBand` && r.bandwidth ? r.bandwidth() / 2 : 2,
            d = c === `category` && r.bandwidth ? r.bandwidth() / u : 0;
          return (
            (d =
              s === `angleAxis` && i != null && i?.length >= 2
                ? Kt(i[0] - i[1]) * 2 * d
                : d),
            l && o
              ? o
                  .map((e, t) => {
                    var n = r.map(e);
                    return V(n)
                      ? { coordinate: n + d, value: e, index: t, offset: d }
                      : null;
                  })
                  .filter(rn)
              : r
                  .domain()
                  .map((e, t) => {
                    var n = r.map(e);
                    return V(n)
                      ? {
                          coordinate: n + d,
                          value: a ? a[e] : e,
                          index: t,
                          offset: d,
                        }
                      : null;
                  })
                  .filter(rn)
          );
        }
      }
    },
  ),
  aw = T([HS, US, JS], (e, t, n) => WS(n.shared, e, t)),
  ow = (e) => e.tooltip.settings.trigger,
  sw = (e) => e.tooltip.settings.defaultIndex,
  cw = T([EC, aw, ow, sw], vC),
  lw = T([cw, WC, yx, $C], SC),
  uw = T([iw, lw], qS),
  dw = T([cw], (e) => {
    if (e) return e.dataKey;
  }),
  fw = T([cw], (e) => {
    if (e) return e.graphicalItemId;
  }),
  pw = T([EC, aw, ow, sw], wC),
  mw = T([cw, T([Qs, $s, W, U, iw, sw, pw], CC)], (e, t) =>
    e != null && e.coordinate ? e.coordinate : t,
  ),
  hw = T([cw], (e) => e?.active ?? !1);
T([T([pw, lw, xp, yx, uw, TC, aw], RC)], (e) => {
  if (e != null) {
    var t = e.map((e) => e.payload).filter((e) => e != null);
    return Array.from(new Set(t));
  }
});
function gw(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function _w(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? gw(Object(n), !0).forEach(function (t) {
          vw(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : gw(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function vw(e, t, n) {
  return (
    (t = yw(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function yw(e) {
  var t = bw(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function bw(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var xw = () => R(X),
  Sw = () => {
    var e = xw(),
      t = R(iw),
      n = R(rw);
    return qs(!e || !n ? void 0 : _w(_w({}, e), {}, { scale: n }), t);
  };
function Cw(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function ww(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Cw(Object(n), !0).forEach(function (t) {
          Tw(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Cw(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Tw(e, t, n) {
  return (
    (t = Ew(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Ew(e) {
  var t = Dw(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Dw(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var Ow = (e, t, n, r) => {
    var i = t.find((e) => e && e.index === n);
    if (i) {
      if (e === `horizontal`) return { x: i.coordinate, y: r.relativeY };
      if (e === `vertical`) return { x: r.relativeX, y: i.coordinate };
    }
    return { x: 0, y: 0 };
  },
  kw = (e, t, n, r) => {
    var i = t.find((e) => e && e.index === n);
    if (i) {
      if (e === `centric`) {
        var a = i.coordinate,
          o = r.radius;
        return ww(
          ww(ww({}, r), Jf(r.cx, r.cy, o, a)),
          {},
          { angle: a, radius: o },
        );
      }
      var s = i.coordinate,
        c = r.angle;
      return ww(
        ww(ww({}, r), Jf(r.cx, r.cy, s, c)),
        {},
        { angle: c, radius: s },
      );
    }
    return {
      angle: 0,
      clockWise: !1,
      cx: 0,
      cy: 0,
      endAngle: 0,
      innerRadius: 0,
      outerRadius: 0,
      radius: 0,
      startAngle: 0,
      x: 0,
      y: 0,
    };
  };
function Aw(e, t) {
  var n = e.relativeX,
    r = e.relativeY;
  return (
    n >= t.left && n <= t.left + t.width && r >= t.top && r <= t.top + t.height
  );
}
var jw = (e, t, n, r, i) => {
    var a = t?.length ?? 0;
    if (a <= 1 || e == null) return 0;
    if (
      r === `angleAxis` &&
      i != null &&
      Math.abs(Math.abs(i[1] - i[0]) - 360) <= 1e-6
    )
      for (var o = 0; o < a; o++) {
        var s = o > 0 ? n[o - 1]?.coordinate : n[a - 1]?.coordinate,
          c = n[o]?.coordinate,
          l = o >= a - 1 ? n[0]?.coordinate : n[o + 1]?.coordinate,
          u = void 0;
        if (!(s == null || c == null || l == null))
          if (Kt(c - s) !== Kt(l - c)) {
            var d = [];
            if (Kt(l - c) === Kt(i[1] - i[0])) {
              u = l;
              var f = c + i[1] - i[0];
              ((d[0] = Math.min(f, (f + s) / 2)),
                (d[1] = Math.max(f, (f + s) / 2)));
            } else {
              u = s;
              var p = l + i[1] - i[0];
              ((d[0] = Math.min(c, (p + c) / 2)),
                (d[1] = Math.max(c, (p + c) / 2)));
            }
            var m = [Math.min(c, (u + c) / 2), Math.max(c, (u + c) / 2)];
            if ((e > m[0] && e <= m[1]) || (e >= d[0] && e <= d[1]))
              return n[o]?.index;
          } else {
            var h = Math.min(s, l),
              g = Math.max(s, l);
            if (e > (h + c) / 2 && e <= (g + c) / 2) return n[o]?.index;
          }
      }
    else if (t)
      for (var _ = 0; _ < a; _++) {
        var v = t[_];
        if (v != null) {
          var y = t[_ + 1],
            b = t[_ - 1];
          if (
            (_ === 0 && y != null && e <= (v.coordinate + y.coordinate) / 2) ||
            (_ === a - 1 &&
              b != null &&
              e > (v.coordinate + b.coordinate) / 2) ||
            (_ > 0 &&
              _ < a - 1 &&
              b != null &&
              y != null &&
              e > (v.coordinate + b.coordinate) / 2 &&
              e <= (v.coordinate + y.coordinate) / 2)
          )
            return v.index;
        }
      }
    return -1;
  },
  Mw = () => R(im),
  Nw = (e, t) => t,
  Pw = (e, t, n) => n,
  Fw = (e, t, n, r) => r,
  Iw = T(iw, (e) => di(e, (e) => e.coordinate)),
  Lw = T([EC, Nw, Pw, Fw], vC),
  Rw = T([Lw, WC, yx, $C], SC),
  zw = (e, t, n) => {
    if (t != null) {
      var r = EC(e);
      return t === `axis`
        ? n === `hover`
          ? r.axisInteraction.hover.dataKey
          : r.axisInteraction.click.dataKey
        : n === `hover`
          ? r.itemInteraction.hover.dataKey
          : r.itemInteraction.click.dataKey;
    }
  },
  Bw = T([EC, Nw, Pw, Fw], wC),
  Vw = T([Qs, $s, W, U, iw, Fw, Bw], CC),
  Hw = T([Lw, Vw], (e, t) => e.coordinate ?? t),
  Uw = T([iw, Rw], qS),
  Ww = T([Bw, Rw, xp, yx, Uw, TC, Nw], RC),
  Gw = T([Lw, Rw], (e, t) => ({
    isActive: e.active && t != null,
    activeIndex: t,
  })),
  Kw = (e, t, n, r, i, a, o) => {
    if (!(!e || !n || !r || !i) && Aw(e, o)) {
      var s = jw(Xs(e, t), a, i, n, r),
        c = Ow(t, i, s, e);
      return { activeIndex: String(s), activeCoordinate: c };
    }
  },
  qw = (e, t, n, r, i, a, o) => {
    if (!(!e || !r || !i || !a || !n)) {
      var s = ep(e, n);
      if (s) {
        var c = jw(Zs(s, t), o, a, r, i),
          l = kw(t, a, c, s);
        return { activeIndex: String(c), activeCoordinate: l };
      }
    }
  },
  Jw = (e, t, n, r, i, a, o, s) => {
    if (!(!e || !t || !r || !i || !a))
      return t === `horizontal` || t === `vertical`
        ? Kw(e, t, r, i, a, o, s)
        : qw(e, t, n, r, i, a, o);
  },
  Yw = T(
    (e) => e.zIndex.zIndexMap,
    (e, t) => t,
    (e, t, n) => n,
    (e, t, n) => {
      if (t != null) {
        var r = e[t];
        if (r != null) return n ? r.panoramaElement : r.element;
      }
    },
  ),
  Xw = T(
    (e) => e.zIndex.zIndexMap,
    (e) => {
      var t = Object.keys(e)
        .map((e) => parseInt(e, 10))
        .concat(Object.values(cm));
      return Array.from(new Set(t)).sort((e, t) => e - t);
    },
    { memoizeOptions: { resultEqualityCheck: Fm } },
  );
function Zw(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Qw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Zw(Object(n), !0).forEach(function (t) {
          $w(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Zw(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function $w(e, t, n) {
  return (
    (t = eT(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function eT(e) {
  var t = tT(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function tT(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var nT = {
    zIndexMap: Object.values(cm).reduce(
      (e, t) =>
        Qw(
          Qw({}, e),
          {},
          { [t]: { element: void 0, panoramaElement: void 0, consumers: 0 } },
        ),
      {},
    ),
  },
  rT = new Set(Object.values(cm));
function iT(e) {
  return rT.has(e);
}
var aT = Ao({
    name: `zIndex`,
    initialState: nT,
    reducers: {
      registerZIndexPortal: {
        reducer: (e, t) => {
          var n = t.payload.zIndex;
          e.zIndexMap[n]
            ? (e.zIndexMap[n].consumers += 1)
            : (e.zIndexMap[n] = {
                consumers: 1,
                element: void 0,
                panoramaElement: void 0,
              });
        },
        prepare: B(),
      },
      unregisterZIndexPortal: {
        reducer: (e, t) => {
          var n = t.payload.zIndex;
          e.zIndexMap[n] &&
            (--e.zIndexMap[n].consumers,
            e.zIndexMap[n].consumers <= 0 && !iT(n) && delete e.zIndexMap[n]);
        },
        prepare: B(),
      },
      registerZIndexPortalElement: {
        reducer: (e, t) => {
          var n = t.payload,
            r = n.zIndex,
            i = n.element,
            a = n.isPanorama;
          e.zIndexMap[r]
            ? a
              ? (e.zIndexMap[r].panoramaElement = z(i))
              : (e.zIndexMap[r].element = z(i))
            : (e.zIndexMap[r] = {
                consumers: 0,
                element: a ? void 0 : z(i),
                panoramaElement: a ? z(i) : void 0,
              });
        },
        prepare: B(),
      },
      unregisterZIndexPortalElement: {
        reducer: (e, t) => {
          var n = t.payload.zIndex;
          e.zIndexMap[n] &&
            (t.payload.isPanorama
              ? (e.zIndexMap[n].panoramaElement = void 0)
              : (e.zIndexMap[n].element = void 0));
        },
        prepare: B(),
      },
    },
  }),
  oT = aT.actions,
  sT = oT.registerZIndexPortal,
  cT = oT.unregisterZIndexPortal,
  lT = oT.registerZIndexPortalElement,
  uT = oT.unregisterZIndexPortalElement,
  dT = aT.reducer;
function fT(e) {
  var t = e.zIndex,
    n = e.children,
    r = ul() && t !== void 0 && t !== 0,
    i = vc(),
    a = (0, O.useRef)(void 0),
    o = (0, O.useRef)(new Set()),
    s = L(),
    c = R((e) => Yw(e, t, i));
  if (
    ((0, O.useLayoutEffect)(() => {
      if (!r) {
        var e = o.current;
        (e.forEach((e) => {
          s(cT({ zIndex: e }));
        }),
          e.clear(),
          (a.current = void 0));
        return;
      }
      if ((o.current.has(t) || (s(sT({ zIndex: t })), o.current.add(t)), c)) {
        a.current = c;
        var n = o.current;
        n.forEach((e) => {
          e !== t && (s(cT({ zIndex: e })), n.delete(e));
        });
      }
    }, [s, t, r, c]),
    (0, O.useLayoutEffect)(() => {
      var e = o.current;
      return () => {
        (e.forEach((e) => {
          s(cT({ zIndex: e }));
        }),
          e.clear());
      };
    }, [s]),
    !r)
  )
    return n;
  var l = c ?? a.current;
  return l ? (0, zl.createPortal)(n, l) : null;
}
function pT() {
  return (
    (pT = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    pT.apply(null, arguments)
  );
}
function mT(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function hT(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? mT(Object(n), !0).forEach(function (t) {
          gT(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : mT(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function gT(e, t, n) {
  return (
    (t = _T(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function _T(e) {
  var t = vT(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function vT(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function yT(e) {
  var t = e.cursor,
    n = e.cursorComp,
    r = e.cursorProps;
  return (0, O.isValidElement)(t)
    ? (0, O.cloneElement)(t, r)
    : (0, O.createElement)(n, r);
}
function bT(t) {
  var n = t.coordinate,
    r = t.payload,
    i = t.index,
    a = t.offset,
    o = t.tooltipAxisBandSize,
    s = t.layout,
    c = t.cursor,
    l = t.tooltipEventType,
    u = t.chartName,
    d = n,
    f = r,
    p = i;
  if (!c || !d || (u !== `ScatterChart` && l !== `axis`)) return null;
  var m, h, g;
  if (u === `ScatterChart`) ((m = d), (h = Ed), (g = cm.cursorLine));
  else if (u === `BarChart`)
    ((m = Dd(s, d, a, o)), (h = Bf), (g = cm.cursorRectangle));
  else if (s === `radial` && xn(d)) {
    var _ = tp(d),
      v = _.cx,
      y = _.cy,
      b = _.radius;
    ((m = {
      cx: v,
      cy: y,
      startAngle: _.startAngle,
      endAngle: _.endAngle,
      innerRadius: b,
      outerRadius: b,
    }),
      (h = gp),
      (g = cm.cursorLine));
  } else ((m = { points: _p(s, d, a) }), (h = hd), (g = cm.cursorLine));
  var x = typeof c == `object` && `className` in c ? c.className : void 0,
    S = hT(
      hT(hT(hT({ stroke: `#ccc`, pointerEvents: `none` }, a), m), N(c)),
      {},
      {
        payload: f,
        payloadIndex: p,
        className: e(`recharts-tooltip-cursor`, x),
      },
    );
  return O.createElement(
    fT,
    { zIndex: t.zIndex ?? g },
    O.createElement(yT, { cursor: c, cursorComp: h, cursorProps: S }),
  );
}
function xT(e) {
  var t = Sw(),
    n = rl(),
    r = sl(),
    i = Mw();
  return t == null || n == null || r == null || i == null
    ? null
    : O.createElement(
        bT,
        pT({}, e, {
          offset: n,
          layout: r,
          tooltipAxisBandSize: t,
          chartName: i,
        }),
      );
}
var ST = (0, O.createContext)(null),
  CT = () => (0, O.useContext)(ST),
  wT = i(
    o((e, t) => {
      var n = Object.prototype.hasOwnProperty,
        r = `~`;
      function i() {}
      Object.create &&
        ((i.prototype = Object.create(null)), new i().__proto__ || (r = !1));
      function a(e, t, n) {
        ((this.fn = e), (this.context = t), (this.once = n || !1));
      }
      function o(e, t, n, i, o) {
        if (typeof n != `function`)
          throw TypeError(`The listener must be a function`);
        var s = new a(n, i || e, o),
          c = r ? r + t : t;
        return (
          e._events[c]
            ? e._events[c].fn
              ? (e._events[c] = [e._events[c], s])
              : e._events[c].push(s)
            : ((e._events[c] = s), e._eventsCount++),
          e
        );
      }
      function s(e, t) {
        --e._eventsCount === 0 ? (e._events = new i()) : delete e._events[t];
      }
      function c() {
        ((this._events = new i()), (this._eventsCount = 0));
      }
      ((c.prototype.eventNames = function () {
        var e = [],
          t,
          i;
        if (this._eventsCount === 0) return e;
        for (i in (t = this._events))
          n.call(t, i) && e.push(r ? i.slice(1) : i);
        return Object.getOwnPropertySymbols
          ? e.concat(Object.getOwnPropertySymbols(t))
          : e;
      }),
        (c.prototype.listeners = function (e) {
          var t = r ? r + e : e,
            n = this._events[t];
          if (!n) return [];
          if (n.fn) return [n.fn];
          for (var i = 0, a = n.length, o = Array(a); i < a; i++)
            o[i] = n[i].fn;
          return o;
        }),
        (c.prototype.listenerCount = function (e) {
          var t = r ? r + e : e,
            n = this._events[t];
          return n ? (n.fn ? 1 : n.length) : 0;
        }),
        (c.prototype.emit = function (e, t, n, i, a, o) {
          var s = r ? r + e : e;
          if (!this._events[s]) return !1;
          var c = this._events[s],
            l = arguments.length,
            u,
            d;
          if (c.fn) {
            switch ((c.once && this.removeListener(e, c.fn, void 0, !0), l)) {
              case 1:
                return (c.fn.call(c.context), !0);
              case 2:
                return (c.fn.call(c.context, t), !0);
              case 3:
                return (c.fn.call(c.context, t, n), !0);
              case 4:
                return (c.fn.call(c.context, t, n, i), !0);
              case 5:
                return (c.fn.call(c.context, t, n, i, a), !0);
              case 6:
                return (c.fn.call(c.context, t, n, i, a, o), !0);
            }
            for (d = 1, u = Array(l - 1); d < l; d++) u[d - 1] = arguments[d];
            c.fn.apply(c.context, u);
          } else {
            var f = c.length,
              p;
            for (d = 0; d < f; d++)
              switch (
                (c[d].once && this.removeListener(e, c[d].fn, void 0, !0), l)
              ) {
                case 1:
                  c[d].fn.call(c[d].context);
                  break;
                case 2:
                  c[d].fn.call(c[d].context, t);
                  break;
                case 3:
                  c[d].fn.call(c[d].context, t, n);
                  break;
                case 4:
                  c[d].fn.call(c[d].context, t, n, i);
                  break;
                default:
                  if (!u)
                    for (p = 1, u = Array(l - 1); p < l; p++)
                      u[p - 1] = arguments[p];
                  c[d].fn.apply(c[d].context, u);
              }
          }
          return !0;
        }),
        (c.prototype.on = function (e, t, n) {
          return o(this, e, t, n, !1);
        }),
        (c.prototype.once = function (e, t, n) {
          return o(this, e, t, n, !0);
        }),
        (c.prototype.removeListener = function (e, t, n, i) {
          var a = r ? r + e : e;
          if (!this._events[a]) return this;
          if (!t) return (s(this, a), this);
          var o = this._events[a];
          if (o.fn)
            o.fn === t &&
              (!i || o.once) &&
              (!n || o.context === n) &&
              s(this, a);
          else {
            for (var c = 0, l = [], u = o.length; c < u; c++)
              (o[c].fn !== t ||
                (i && !o[c].once) ||
                (n && o[c].context !== n)) &&
                l.push(o[c]);
            l.length
              ? (this._events[a] = l.length === 1 ? l[0] : l)
              : s(this, a);
          }
          return this;
        }),
        (c.prototype.removeAllListeners = function (e) {
          var t;
          return (
            e
              ? ((t = r ? r + e : e), this._events[t] && s(this, t))
              : ((this._events = new i()), (this._eventsCount = 0)),
            this
          );
        }),
        (c.prototype.off = c.prototype.removeListener),
        (c.prototype.addListener = c.prototype.on),
        (c.prefixed = r),
        (c.EventEmitter = c),
        t !== void 0 && (t.exports = c));
    })(),
    1,
  ).default,
  TT = new wT(),
  ET = `recharts.syncEvent.tooltip`,
  DT = `recharts.syncEvent.brush`,
  OT = (e, t) => {
    if (t && Array.isArray(e)) {
      var n = Number.parseInt(t, 10);
      if (!qt(n)) return e[n];
    }
  },
  kT = Ao({
    name: `options`,
    initialState: {
      chartName: ``,
      tooltipPayloadSearcher: () => void 0,
      eventEmitter: void 0,
      defaultTooltipEventType: `axis`,
    },
    reducers: {
      createEventEmitter: (e) => {
        e.eventEmitter ??= Symbol(`rechartsEventEmitter`);
      },
    },
  }),
  AT = kT.reducer,
  jT = kT.actions.createEventEmitter;
function MT(e) {
  return e.tooltip.syncInteraction;
}
var NT = Ao({
    name: `chartData`,
    initialState: {
      chartData: void 0,
      computedData: void 0,
      dataStartIndex: 0,
      dataEndIndex: 0,
    },
    reducers: {
      setChartData(e, t) {
        if (((e.chartData = z(t.payload)), t.payload == null)) {
          ((e.dataStartIndex = 0), (e.dataEndIndex = 0));
          return;
        }
        t.payload.length > 0 &&
          e.dataEndIndex !== t.payload.length - 1 &&
          (e.dataEndIndex = t.payload.length - 1);
      },
      setComputedData(e, t) {
        e.computedData = t.payload;
      },
      setDataStartEndIndexes(e, t) {
        var n = t.payload,
          r = n.startIndex,
          i = n.endIndex;
        (r != null && (e.dataStartIndex = r),
          i != null && (e.dataEndIndex = i));
      },
    },
  }),
  PT = NT.actions,
  FT = PT.setChartData,
  IT = PT.setDataStartEndIndexes;
PT.setComputedData;
var LT = NT.reducer,
  RT = [`x`, `y`];
function zT(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function BT(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? zT(Object(n), !0).forEach(function (t) {
          VT(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : zT(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function VT(e, t, n) {
  return (
    (t = HT(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function HT(e) {
  var t = UT(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function UT(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function WT(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = GT(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function GT(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function KT() {
  var e = R(am),
    t = R(sm),
    n = L(),
    r = R(om),
    i = R(iw),
    a = sl(),
    o = tl();
  (0, O.useEffect)(() => {
    if (e == null) return an;
    var s = (s, c, l) => {
      if (t !== l && e === s) {
        if (c.payload.active === !1) {
          n(
            cC({
              active: !1,
              coordinate: void 0,
              dataKey: void 0,
              index: null,
              label: void 0,
              sourceViewBox: void 0,
              graphicalItemId: void 0,
            }),
          );
          return;
        }
        if (r === `index`) {
          var u;
          if (
            o &&
            c != null &&
            (u = c.payload) != null &&
            u.coordinate &&
            c.payload.sourceViewBox
          ) {
            var d = c.payload.coordinate,
              f = d.x,
              p = d.y,
              m = WT(d, RT),
              h = c.payload.sourceViewBox,
              g = h.x,
              _ = h.y,
              v = h.width,
              y = h.height,
              b = BT(
                BT({}, m),
                {},
                {
                  x: o.x + (v ? (f - g) / v : 0) * o.width,
                  y: o.y + (y ? (p - _) / y : 0) * o.height,
                },
              );
            n(
              BT(
                BT({}, c),
                {},
                { payload: BT(BT({}, c.payload), {}, { coordinate: b }) },
              ),
            );
          } else n(c);
          return;
        }
        if (i != null) {
          var x;
          typeof r == `function`
            ? (x =
                i[
                  r(i, {
                    activeTooltipIndex:
                      c.payload.index == null
                        ? void 0
                        : Number(c.payload.index),
                    isTooltipActive: c.payload.active,
                    activeIndex:
                      c.payload.index == null
                        ? void 0
                        : Number(c.payload.index),
                    activeLabel: c.payload.label,
                    activeDataKey: c.payload.dataKey,
                    activeCoordinate: c.payload.coordinate,
                  })
                ])
            : r === `value` &&
              (x = i.find((e) => String(e.value) === c.payload.label));
          var S = c.payload.coordinate;
          if (S == null || o == null) {
            n(
              cC({
                active: !1,
                coordinate: void 0,
                dataKey: void 0,
                index: null,
                label: void 0,
                sourceViewBox: void 0,
                graphicalItemId: void 0,
              }),
            );
            return;
          }
          if (x == null) {
            n(
              cC({
                active: !1,
                coordinate: void 0,
                dataKey: void 0,
                index: null,
                label: void 0,
                sourceViewBox: c.payload.sourceViewBox,
                graphicalItemId: void 0,
              }),
            );
            return;
          }
          var C = S.x,
            w = S.y,
            T = Math.min(C, o.x + o.width),
            E = Math.min(w, o.y + o.height),
            D = {
              x: a === `horizontal` ? x.coordinate : T,
              y: a === `horizontal` ? E : x.coordinate,
            };
          n(
            cC({
              active: c.payload.active,
              coordinate: D,
              dataKey: c.payload.dataKey,
              index: String(x.index),
              label: c.payload.label,
              sourceViewBox: c.payload.sourceViewBox,
              graphicalItemId: c.payload.graphicalItemId,
            }),
          );
        }
      }
    };
    return (
      TT.on(ET, s),
      () => {
        TT.off(ET, s);
      }
    );
  }, [R((e) => e.rootProps.className), n, t, e, r, i, a, o]);
}
function qT() {
  var e = R(am),
    t = R(sm),
    n = L();
  (0, O.useEffect)(() => {
    if (e == null) return an;
    var r = (r, i, a) => {
      t !== a && e === r && n(IT(i));
    };
    return (
      TT.on(DT, r),
      () => {
        TT.off(DT, r);
      }
    );
  }, [n, t, e]);
}
function JT() {
  var e = L();
  ((0, O.useEffect)(() => {
    e(jT());
  }, [e]),
    KT(),
    qT());
}
function YT(e, t, n, r, i, a) {
  var o = R((n) => zw(n, e, t)),
    s = R(fw),
    c = R(sm),
    l = R(am),
    u = R(om),
    d = R(MT)?.sourceViewBox != null,
    f = tl();
  (0, O.useEffect)(() => {
    if (!d && l != null && c != null) {
      var e = cC({
        active: a,
        coordinate: n,
        dataKey: o,
        index: i,
        label: typeof r == `number` ? String(r) : r,
        sourceViewBox: f,
        graphicalItemId: s,
      });
      TT.emit(ET, l, e, c);
    }
  }, [d, n, o, s, i, r, c, l, u, a, f]);
}
function XT(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function ZT(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? XT(Object(n), !0).forEach(function (t) {
          QT(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : XT(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function QT(e, t, n) {
  return (
    (t = $T(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function $T(e) {
  var t = eE(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function eE(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function tE(e, t) {
  return oE(e) || aE(e, t) || rE(e, t) || nE();
}
function nE() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function rE(e, t) {
  if (e) {
    if (typeof e == `string`) return iE(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? iE(e, t)
          : void 0
    );
  }
}
function iE(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function aE(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n != null) {
    var r,
      i,
      a,
      o,
      s = [],
      c = !0,
      l = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        c = !1;
      } else
        for (
          ;
          !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t);
          c = !0
        );
    } catch (e) {
      ((l = !0), (i = e));
    } finally {
      try {
        if (!c && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return s;
  }
}
function oE(e) {
  if (Array.isArray(e)) return e;
}
function sE(e) {
  return e.dataKey;
}
function cE(e, t) {
  return O.isValidElement(e)
    ? O.cloneElement(e, t)
    : typeof e == `function`
      ? O.createElement(e, t)
      : O.createElement(Tu, t);
}
var lE = [],
  uE = {
    allowEscapeViewBox: { x: !1, y: !1 },
    animationDuration: 400,
    animationEasing: `ease`,
    axisId: 0,
    contentStyle: {},
    cursor: !0,
    filterNull: !0,
    includeHidden: !1,
    isAnimationActive: `auto`,
    itemSorter: `name`,
    itemStyle: {},
    labelStyle: {},
    offset: 10,
    reverseDirection: { x: !1, y: !1 },
    separator: ` : `,
    trigger: `hover`,
    useTranslate3d: !1,
    wrapperStyle: {},
  };
function dE(e) {
  var t = An(e, uE),
    n = t.active,
    r = t.allowEscapeViewBox,
    i = t.animationDuration,
    a = t.animationEasing,
    o = t.content,
    s = t.filterNull,
    c = t.isAnimationActive,
    l = t.offset,
    u = t.payloadUniqBy,
    d = t.position,
    f = t.reverseDirection,
    p = t.useTranslate3d,
    m = t.wrapperStyle,
    h = t.cursor,
    g = t.shared,
    _ = t.trigger,
    v = t.defaultIndex,
    y = t.portal,
    b = t.axisId,
    x = L(),
    S = typeof v == `number` ? String(v) : v;
  (0, O.useEffect)(() => {
    x(tC({ shared: g, trigger: _, axisId: b, active: n, defaultIndex: S }));
  }, [x, g, _, b, n, S]);
  var C = tl(),
    w = ed(),
    T = KS(g),
    E = R((e) => Gw(e, T, _, S)) ?? {},
    D = E.activeIndex,
    k = E.isActive,
    A = R((e) => Ww(e, T, _, S)),
    j = R((e) => Uw(e, T, _, S)),
    M = R((e) => Hw(e, T, _, S)),
    N = A,
    ee = CT(),
    te = n ?? k ?? !1,
    ne = tE(Ti([N, te]), 2),
    re = ne[0],
    ie = ne[1],
    ae = T === `axis` ? j : void 0;
  YT(T, _, M, ae, D, te);
  var oe = y ?? ee;
  if (oe == null || C == null || T == null) return null;
  var se = N ?? lE;
  (te || (se = lE),
    s &&
      se.length &&
      (se = Yr(
        se.filter((e) => e.value != null && (e.hide !== !0 || t.includeHidden)),
        u,
        sE,
      )));
  var ce = se.length > 0,
    le = ZT(
      ZT({}, t),
      {},
      {
        payload: se,
        label: ae,
        active: te,
        activeIndex: D,
        coordinate: M,
        accessibilityLayer: w,
      },
    ),
    ue = O.createElement(
      $u,
      {
        allowEscapeViewBox: r,
        animationDuration: i,
        animationEasing: a,
        isAnimationActive: c,
        active: te,
        coordinate: M,
        hasPayload: ce,
        offset: l,
        position: d,
        reverseDirection: f,
        useTranslate3d: p,
        viewBox: C,
        wrapperStyle: m,
        lastBoundingBox: re,
        innerRef: ie,
        hasPortalFromProps: !!y,
      },
      cE(o, le),
    );
  return O.createElement(
    O.Fragment,
    null,
    (0, zl.createPortal)(ue, oe),
    te &&
      O.createElement(xT, {
        cursor: h,
        tooltipEventType: T,
        coordinate: M,
        payload: se,
        index: D,
      }),
  );
}
var fE = (e) => null;
fE.displayName = `Cell`;
function pE(e, t, n) {
  return (
    (t = mE(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function mE(e) {
  var t = hE(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function hE(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var gE = class {
  constructor(e) {
    (pE(this, `cache`, new Map()), (this.maxSize = e));
  }
  get(e) {
    var t = this.cache.get(e);
    return (t !== void 0 && (this.cache.delete(e), this.cache.set(e, t)), t);
  }
  set(e, t) {
    if (this.cache.has(e)) this.cache.delete(e);
    else if (this.cache.size >= this.maxSize) {
      var n = this.cache.keys().next().value;
      n != null && this.cache.delete(n);
    }
    this.cache.set(e, t);
  }
  clear() {
    this.cache.clear();
  }
  size() {
    return this.cache.size;
  }
};
function _E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function vE(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? _E(Object(n), !0).forEach(function (t) {
          yE(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : _E(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function yE(e, t, n) {
  return (
    (t = bE(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function bE(e) {
  var t = xE(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function xE(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var SE = vE({}, { cacheSize: 2e3, enableCache: !0 }),
  CE = new gE(SE.cacheSize),
  wE = {
    position: `absolute`,
    top: `-20000px`,
    left: 0,
    padding: 0,
    margin: 0,
    border: `none`,
    whiteSpace: `pre`,
  },
  TE = `recharts_measurement_span`;
function EE(e, t) {
  return `${e}|${t.fontSize || ``}|${t.fontFamily || ``}|${t.fontWeight || ``}|${t.fontStyle || ``}|${t.letterSpacing || ``}|${t.textTransform || ``}`;
}
var DE = (e, t) => {
    try {
      var n = document.getElementById(TE);
      (n ||
        ((n = document.createElement(`span`)),
        n.setAttribute(`id`, TE),
        n.setAttribute(`aria-hidden`, `true`),
        document.body.appendChild(n)),
        Object.assign(n.style, wE, t),
        (n.textContent = `${e}`));
      var r = n.getBoundingClientRect();
      return { width: r.width, height: r.height };
    } catch {
      return { width: 0, height: 0 };
    }
  },
  OE = function (e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (e == null || Mu.isSsr) return { width: 0, height: 0 };
    if (!SE.enableCache) return DE(e, t);
    var n = EE(e, t),
      r = CE.get(n);
    if (r) return r;
    var i = DE(e, t);
    return (CE.set(n, i), i);
  },
  kE;
function AE(e, t) {
  return FE(e) || PE(e, t) || ME(e, t) || jE();
}
function jE() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ME(e, t) {
  if (e) {
    if (typeof e == `string`) return NE(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? NE(e, t)
          : void 0
    );
  }
}
function NE(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function PE(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n != null) {
    var r,
      i,
      a,
      o,
      s = [],
      c = !0,
      l = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        c = !1;
      } else
        for (
          ;
          !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t);
          c = !0
        );
    } catch (e) {
      ((l = !0), (i = e));
    } finally {
      try {
        if (!c && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return s;
  }
}
function FE(e) {
  if (Array.isArray(e)) return e;
}
function IE(e, t, n) {
  return (
    (t = LE(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function LE(e) {
  var t = RE(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function RE(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var zE = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  BE = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  VE = /^(px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q)$/,
  HE = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
  UE = {
    cm: 96 / 2.54,
    mm: 96 / 25.4,
    pt: 96 / 72,
    pc: 96 / 6,
    in: 96,
    Q: 96 / (2.54 * 40),
    px: 1,
  },
  WE = [`cm`, `mm`, `pt`, `pc`, `in`, `Q`, `px`];
function GE(e) {
  return WE.includes(e);
}
var KE = `NaN`;
function qE(e, t) {
  return e * UE[t];
}
var JE = class e {
  static parse(t) {
    var n = AE(HE.exec(t) ?? [], 3),
      r = n[1],
      i = n[2];
    return r == null ? e.NaN : new e(parseFloat(r), i ?? ``);
  }
  constructor(e, t) {
    ((this.num = e),
      (this.unit = t),
      (this.num = e),
      (this.unit = t),
      qt(e) && (this.unit = ``),
      t !== `` && !VE.test(t) && ((this.num = NaN), (this.unit = ``)),
      GE(t) && ((this.num = qE(e, t)), (this.unit = `px`)));
  }
  add(t) {
    return this.unit === t.unit
      ? new e(this.num + t.num, this.unit)
      : new e(NaN, ``);
  }
  subtract(t) {
    return this.unit === t.unit
      ? new e(this.num - t.num, this.unit)
      : new e(NaN, ``);
  }
  multiply(t) {
    return this.unit !== `` && t.unit !== `` && this.unit !== t.unit
      ? new e(NaN, ``)
      : new e(this.num * t.num, this.unit || t.unit);
  }
  divide(t) {
    return this.unit !== `` && t.unit !== `` && this.unit !== t.unit
      ? new e(NaN, ``)
      : new e(this.num / t.num, this.unit || t.unit);
  }
  toString() {
    return `${this.num}${this.unit}`;
  }
  isNaN() {
    return qt(this.num);
  }
};
((kE = JE), IE(JE, `NaN`, new kE(NaN, ``)));
function YE(e) {
  if (e == null || e.includes(KE)) return KE;
  for (var t = e; t.includes(`*`) || t.includes(`/`);) {
    var n = AE(zE.exec(t) ?? [], 4),
      r = n[1],
      i = n[2],
      a = n[3],
      o = JE.parse(r ?? ``),
      s = JE.parse(a ?? ``),
      c = i === `*` ? o.multiply(s) : o.divide(s);
    if (c.isNaN()) return KE;
    t = t.replace(zE, c.toString());
  }
  for (; t.includes(`+`) || /.-\d+(?:\.\d+)?/.test(t);) {
    var l = AE(BE.exec(t) ?? [], 4),
      u = l[1],
      d = l[2],
      f = l[3],
      p = JE.parse(u ?? ``),
      m = JE.parse(f ?? ``),
      h = d === `+` ? p.add(m) : p.subtract(m);
    if (h.isNaN()) return KE;
    t = t.replace(BE, h.toString());
  }
  return t;
}
var XE = /\(([^()]*)\)/;
function ZE(e) {
  for (var t = e, n; (n = XE.exec(t)) != null;) {
    var r = AE(n, 2)[1];
    t = t.replace(XE, YE(r));
  }
  return t;
}
function QE(e) {
  var t = e.replace(/\s+/g, ``);
  return ((t = ZE(t)), (t = YE(t)), t);
}
function $E(e) {
  try {
    return QE(e);
  } catch {
    return KE;
  }
}
function eD(e) {
  var t = $E(e.slice(5, -1));
  return t === KE ? `` : t;
}
var tD = [
    `x`,
    `y`,
    `lineHeight`,
    `capHeight`,
    `fill`,
    `scaleToFit`,
    `textAnchor`,
    `verticalAnchor`,
  ],
  nD = [`dx`, `dy`, `angle`, `className`, `breakAll`];
function rD() {
  return (
    (rD = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    rD.apply(null, arguments)
  );
}
function iD(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = aD(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function aD(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function oD(e, t) {
  return dD(e) || uD(e, t) || cD(e, t) || sD();
}
function sD() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function cD(e, t) {
  if (e) {
    if (typeof e == `string`) return lD(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? lD(e, t)
          : void 0
    );
  }
}
function lD(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function uD(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n != null) {
    var r,
      i,
      a,
      o,
      s = [],
      c = !0,
      l = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        c = !1;
      } else
        for (
          ;
          !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t);
          c = !0
        );
    } catch (e) {
      ((l = !0), (i = e));
    } finally {
      try {
        if (!c && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return s;
  }
}
function dD(e) {
  if (Array.isArray(e)) return e;
}
var fD = /[ \f\n\r\t\v\u2028\u2029]+/,
  pD = (e) => {
    var t = e.children,
      n = e.breakAll,
      r = e.style;
    try {
      var i = [];
      return (
        I(t) || (i = n ? t.toString().split(``) : t.toString().split(fD)),
        {
          wordsWithComputedWidth: i.map((e) => ({
            word: e,
            width: OE(e, r).width,
          })),
          spaceWidth: n ? 0 : OE(`\xA0`, r).width,
        }
      );
    } catch {
      return null;
    }
  };
function mD(e) {
  return e === `start` || e === `middle` || e === `end` || e === `inherit`;
}
function hD(e) {
  return (
    I(e) ||
    typeof e == `string` ||
    typeof e == `number` ||
    typeof e == `boolean`
  );
}
var gD = (e, t, n, r) =>
    e.reduce((e, i) => {
      var a = i.word,
        o = i.width,
        s = e[e.length - 1];
      if (s && o != null && (t == null || r || s.width + o + n < Number(t)))
        (s.words.push(a), (s.width += o + n));
      else {
        var c = { words: [a], width: o };
        e.push(c);
      }
      return e;
    }, []),
  _D = (e) => e.reduce((e, t) => (e.width > t.width ? e : t)),
  vD = `…`,
  yD = (e, t, n, r, i, a, o, s) => {
    var c = pD({ breakAll: n, style: r, children: e.slice(0, t) + vD });
    if (!c) return [!1, []];
    var l = gD(c.wordsWithComputedWidth, a, o, s);
    return [l.length > i || _D(l).width > Number(a), l];
  },
  bD = (e, t, n, r, i) => {
    var a = e.maxLines,
      o = e.children,
      s = e.style,
      c = e.breakAll,
      l = F(a),
      u = String(o),
      d = gD(t, r, n, i);
    if (!l || i || !(d.length > a || _D(d).width > Number(r))) return d;
    for (var f = 0, p = u.length - 1, m = 0, h; f <= p && m <= u.length - 1;) {
      var g = Math.floor((f + p) / 2),
        _ = oD(yD(u, g - 1, c, s, a, r, n, i), 2),
        v = _[0],
        y = _[1],
        b = oD(yD(u, g, c, s, a, r, n, i), 1)[0];
      if ((!v && !b && (f = g + 1), v && b && (p = g - 1), !v && b)) {
        h = y;
        break;
      }
      m++;
    }
    return h || d;
  },
  xD = (e) => [{ words: I(e) ? [] : e.toString().split(fD), width: void 0 }],
  SD = (e) => {
    var t = e.width,
      n = e.scaleToFit,
      r = e.children,
      i = e.style,
      a = e.breakAll,
      o = e.maxLines;
    if ((t || n) && !Mu.isSsr) {
      var s,
        c,
        l = pD({ breakAll: a, children: r, style: i });
      if (l) {
        var u = l.wordsWithComputedWidth,
          d = l.spaceWidth;
        ((s = u), (c = d));
      } else return xD(r);
      return bD(
        { breakAll: a, children: r, maxLines: o, style: i },
        s,
        c,
        t,
        !!n,
      );
    }
    return xD(r);
  },
  CD = `#808080`,
  wD = {
    angle: 0,
    breakAll: !1,
    capHeight: `0.71em`,
    fill: CD,
    lineHeight: `1em`,
    scaleToFit: !1,
    textAnchor: `start`,
    verticalAnchor: `end`,
    x: 0,
    y: 0,
  },
  TD = (0, O.forwardRef)((t, n) => {
    var r = An(t, wD),
      i = r.x,
      a = r.y,
      o = r.lineHeight,
      s = r.capHeight,
      c = r.fill,
      l = r.scaleToFit,
      u = r.textAnchor,
      d = r.verticalAnchor,
      f = iD(r, tD),
      p = (0, O.useMemo)(
        () =>
          SD({
            breakAll: f.breakAll,
            children: f.children,
            maxLines: f.maxLines,
            scaleToFit: l,
            style: f.style,
            width: f.width,
          }),
        [f.breakAll, f.children, f.maxLines, l, f.style, f.width],
      ),
      m = f.dx,
      h = f.dy,
      g = f.angle,
      _ = f.className,
      v = f.breakAll,
      y = iD(f, nD);
    if (!Yt(i) || !Yt(a) || p.length === 0) return null;
    var b = Number(i) + (F(m) ? m : 0),
      x = Number(a) + (F(h) ? h : 0);
    if (!V(b) || !V(x)) return null;
    var S;
    switch (d) {
      case `start`:
        S = eD(`calc(${s})`);
        break;
      case `middle`:
        S = eD(`calc(${(p.length - 1) / 2} * -${o} + (${s} / 2))`);
        break;
      default:
        S = eD(`calc(${p.length - 1} * -${o})`);
        break;
    }
    var C = [],
      w = p[0];
    if (l && w != null) {
      var T = w.width,
        E = f.width;
      C.push(`scale(${F(E) && F(T) ? E / T : 1})`);
    }
    return (
      g && C.push(`rotate(${g}, ${b}, ${x})`),
      C.length && (y.transform = C.join(` `)),
      O.createElement(
        `text`,
        rD({}, ee(y), {
          ref: n,
          x: b,
          y: x,
          className: e(`recharts-text`, _),
          textAnchor: u,
          fill: c.includes(`url`) ? CD : c,
        }),
        p.map((e, t) => {
          var n = e.words.join(v ? `` : ` `);
          return O.createElement(
            `tspan`,
            { x: b, dy: t === 0 ? S : o, key: `${n}-${t}` },
            n,
          );
        }),
      )
    );
  });
TD.displayName = `Text`;
function ED(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function DD(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? ED(Object(n), !0).forEach(function (t) {
          OD(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ED(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function OD(e, t, n) {
  return (
    (t = kD(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function kD(e) {
  var t = AD(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function AD(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var jD = (e) => {
    var t = e.viewBox,
      n = e.position,
      r = e.offset,
      i = r === void 0 ? 0 : r,
      a = e.parentViewBox,
      o = e.clamp,
      s = el(t),
      c = s.x,
      l = s.y,
      u = s.height,
      d = s.upperWidth,
      f = s.lowerWidth,
      p = c,
      m = c + (d - f) / 2,
      h = (p + m) / 2,
      g = (d + f) / 2,
      _ = p + d / 2,
      v = u >= 0 ? 1 : -1,
      y = v * i,
      b = v > 0 ? `end` : `start`,
      x = v > 0 ? `start` : `end`,
      S = d >= 0 ? 1 : -1,
      C = S * i,
      w = S > 0 ? `end` : `start`,
      T = S > 0 ? `start` : `end`,
      E = a;
    if (n === `top`) {
      var D = {
        x: p + d / 2,
        y: l - y,
        horizontalAnchor: `middle`,
        verticalAnchor: b,
      };
      return (o && E && ((D.height = Math.max(l - E.y, 0)), (D.width = d)), D);
    }
    if (n === `bottom`) {
      var O = {
        x: m + f / 2,
        y: l + u + y,
        horizontalAnchor: `middle`,
        verticalAnchor: x,
      };
      return (
        o &&
          E &&
          ((O.height = Math.max(E.y + E.height - (l + u), 0)), (O.width = f)),
        O
      );
    }
    if (n === `left`) {
      var k = {
        x: h - C,
        y: l + u / 2,
        horizontalAnchor: w,
        verticalAnchor: `middle`,
      };
      return (
        o && E && ((k.width = Math.max(k.x - E.x, 0)), (k.height = u)),
        k
      );
    }
    if (n === `right`) {
      var A = {
        x: h + g + C,
        y: l + u / 2,
        horizontalAnchor: T,
        verticalAnchor: `middle`,
      };
      return (
        o &&
          E &&
          ((A.width = Math.max(E.x + E.width - A.x, 0)), (A.height = u)),
        A
      );
    }
    var j = o && E ? { width: g, height: u } : {};
    return n === `insideLeft`
      ? DD(
          {
            x: h + C,
            y: l + u / 2,
            horizontalAnchor: T,
            verticalAnchor: `middle`,
          },
          j,
        )
      : n === `insideRight`
        ? DD(
            {
              x: h + g - C,
              y: l + u / 2,
              horizontalAnchor: w,
              verticalAnchor: `middle`,
            },
            j,
          )
        : n === `insideTop`
          ? DD(
              {
                x: p + d / 2,
                y: l + y,
                horizontalAnchor: `middle`,
                verticalAnchor: x,
              },
              j,
            )
          : n === `insideBottom`
            ? DD(
                {
                  x: m + f / 2,
                  y: l + u - y,
                  horizontalAnchor: `middle`,
                  verticalAnchor: b,
                },
                j,
              )
            : n === `insideTopLeft`
              ? DD(
                  {
                    x: p + C,
                    y: l + y,
                    horizontalAnchor: T,
                    verticalAnchor: x,
                  },
                  j,
                )
              : n === `insideTopRight`
                ? DD(
                    {
                      x: p + d - C,
                      y: l + y,
                      horizontalAnchor: w,
                      verticalAnchor: x,
                    },
                    j,
                  )
                : n === `insideBottomLeft`
                  ? DD(
                      {
                        x: m + C,
                        y: l + u - y,
                        horizontalAnchor: T,
                        verticalAnchor: b,
                      },
                      j,
                    )
                  : n === `insideBottomRight`
                    ? DD(
                        {
                          x: m + f - C,
                          y: l + u - y,
                          horizontalAnchor: w,
                          verticalAnchor: b,
                        },
                        j,
                      )
                    : n &&
                        typeof n == `object` &&
                        (F(n.x) || Jt(n.x)) &&
                        (F(n.y) || Jt(n.y))
                      ? DD(
                          {
                            x: c + Qt(n.x, g),
                            y: l + Qt(n.y, u),
                            horizontalAnchor: `end`,
                            verticalAnchor: `end`,
                          },
                          j,
                        )
                      : DD(
                          {
                            x: _,
                            y: l + u / 2,
                            horizontalAnchor: `middle`,
                            verticalAnchor: `middle`,
                          },
                          j,
                        );
  },
  MD = [`labelRef`],
  ND = [`content`];
function PD(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = FD(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function FD(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function ID(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function LD(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? ID(Object(n), !0).forEach(function (t) {
          RD(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ID(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function RD(e, t, n) {
  return (
    (t = zD(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function zD(e) {
  var t = BD(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function BD(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function VD() {
  return (
    (VD = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    VD.apply(null, arguments)
  );
}
var HD = (0, O.createContext)(null),
  UD = (e) => {
    var t = e.x,
      n = e.y,
      r = e.upperWidth,
      i = e.lowerWidth,
      a = e.width,
      o = e.height,
      s = e.children,
      c = (0, O.useMemo)(
        () => ({
          x: t,
          y: n,
          upperWidth: r,
          lowerWidth: i,
          width: a,
          height: o,
        }),
        [t, n, r, i, a, o],
      );
    return O.createElement(HD.Provider, { value: c }, s);
  },
  WD = () => {
    var e = (0, O.useContext)(HD),
      t = tl();
    return e || (t ? el(t) : void 0);
  },
  GD = (0, O.createContext)(null),
  KD = () => {
    var e = (0, O.useContext)(GD),
      t = R(Om);
    return e || t;
  },
  qD = (e) => {
    var t = e.value,
      n = e.formatter,
      r = I(e.children) ? t : e.children;
    return typeof n == `function` ? n(r) : r;
  },
  JD = (e) => e != null && typeof e == `function`,
  YD = (e, t) => Kt(t - e) * Math.min(Math.abs(t - e), 360),
  XD = (t, n, r, i, a) => {
    var o = t.offset,
      s = t.className,
      c = a.cx,
      l = a.cy,
      u = a.innerRadius,
      d = a.outerRadius,
      f = a.startAngle,
      p = a.endAngle,
      m = a.clockWise,
      h = (u + d) / 2,
      g = YD(f, p),
      _ = g >= 0 ? 1 : -1,
      v,
      y;
    switch (n) {
      case `insideStart`:
        ((v = f + _ * o), (y = m));
        break;
      case `insideEnd`:
        ((v = p - _ * o), (y = !m));
        break;
      case `end`:
        ((v = p + _ * o), (y = m));
        break;
      default:
        throw Error(`Unsupported position ${n}`);
    }
    y = g <= 0 ? y : !y;
    var b = Jf(c, l, h, v),
      x = Jf(c, l, h, v + (y ? 1 : -1) * 359),
      S = `M${b.x},${b.y}
    A${h},${h},0,1,${+!y},
    ${x.x},${x.y}`,
      C = I(t.id) ? Zt(`recharts-radial-line-`) : t.id;
    return O.createElement(
      `text`,
      VD({}, i, {
        dominantBaseline: `central`,
        className: e(`recharts-radial-bar-label`, s),
      }),
      O.createElement(`defs`, null, O.createElement(`path`, { id: C, d: S })),
      O.createElement(`textPath`, { xlinkHref: `#${C}` }, r),
    );
  },
  ZD = (e, t, n) => {
    var r = e.cx,
      i = e.cy,
      a = e.innerRadius,
      o = e.outerRadius,
      s = (e.startAngle + e.endAngle) / 2;
    if (n === `outside`) {
      var c = Jf(r, i, o + t, s),
        l = c.x;
      return {
        x: l,
        y: c.y,
        textAnchor: l >= r ? `start` : `end`,
        verticalAnchor: `middle`,
      };
    }
    if (n === `center`)
      return { x: r, y: i, textAnchor: `middle`, verticalAnchor: `middle` };
    if (n === `centerTop`)
      return { x: r, y: i, textAnchor: `middle`, verticalAnchor: `start` };
    if (n === `centerBottom`)
      return { x: r, y: i, textAnchor: `middle`, verticalAnchor: `end` };
    var u = Jf(r, i, (a + o) / 2, s);
    return { x: u.x, y: u.y, textAnchor: `middle`, verticalAnchor: `middle` };
  },
  QD = (e) => e != null && `cx` in e && F(e.cx),
  $D = {
    angle: 0,
    offset: 5,
    zIndex: cm.label,
    position: `middle`,
    textBreakAll: !1,
  };
function eO(e) {
  if (!QD(e)) return e;
  var t = e.cx,
    n = e.cy,
    r = e.outerRadius,
    i = r * 2;
  return {
    x: t - r,
    y: n - r,
    width: i,
    upperWidth: i,
    lowerWidth: i,
    height: i,
  };
}
function tO(t) {
  var n = An(t, $D),
    r = n.viewBox,
    i = n.parentViewBox,
    a = n.position,
    o = n.value,
    s = n.children,
    c = n.content,
    l = n.className,
    u = l === void 0 ? `` : l,
    d = n.textBreakAll,
    f = n.labelRef,
    p = KD(),
    m = WD(),
    h = r == null ? (a === `center` ? m : (p ?? m)) : QD(r) ? r : el(r),
    g,
    _,
    v = eO(h);
  if (
    !h ||
    (I(o) && I(s) && !(0, O.isValidElement)(c) && typeof c != `function`)
  )
    return null;
  var y = LD(LD({}, n), {}, { viewBox: h });
  if ((0, O.isValidElement)(c))
    return (y.labelRef, (0, O.cloneElement)(c, PD(y, MD)));
  if (typeof c == `function`) {
    if (
      (y.content,
      (g = (0, O.createElement)(c, PD(y, ND))),
      (0, O.isValidElement)(g))
    )
      return g;
  } else g = qD(n);
  var b = ee(n);
  if (QD(h)) {
    if (a === `insideStart` || a === `insideEnd` || a === `end`)
      return XD(n, a, g, b, h);
    _ = ZD(h, n.offset, n.position);
  } else {
    if (!v) return null;
    var x = jD({
      viewBox: v,
      position: a,
      offset: n.offset,
      parentViewBox: QD(i) ? void 0 : i,
      clamp: !0,
    });
    _ = LD(
      LD(
        {
          x: x.x,
          y: x.y,
          textAnchor: x.horizontalAnchor,
          verticalAnchor: x.verticalAnchor,
        },
        x.width === void 0 ? {} : { width: x.width },
      ),
      x.height === void 0 ? {} : { height: x.height },
    );
  }
  return O.createElement(
    fT,
    { zIndex: n.zIndex },
    O.createElement(
      TD,
      VD({ ref: f, className: e(`recharts-label`, u) }, b, _, {
        textAnchor: mD(b.textAnchor) ? b.textAnchor : _.textAnchor,
        breakAll: d,
      }),
      g,
    ),
  );
}
tO.displayName = `Label`;
var nO = (e, t, n) => {
  if (!e) return null;
  var r = { viewBox: t, labelRef: n };
  return e === !0
    ? O.createElement(tO, VD({ key: `label-implicit` }, r))
    : Yt(e)
      ? O.createElement(tO, VD({ key: `label-implicit`, value: e }, r))
      : (0, O.isValidElement)(e)
        ? e.type === tO
          ? (0, O.cloneElement)(e, LD({ key: `label-implicit` }, r))
          : O.createElement(tO, VD({ key: `label-implicit`, content: e }, r))
        : JD(e)
          ? O.createElement(tO, VD({ key: `label-implicit`, content: e }, r))
          : e && typeof e == `object`
            ? O.createElement(tO, VD({}, e, { key: `label-implicit` }, r))
            : null;
};
function rO(e) {
  var t = e.label,
    n = e.labelRef;
  return nO(t, WD(), n) || null;
}
var iO = [`valueAccessor`],
  aO = [`dataKey`, `clockWise`, `id`, `textBreakAll`, `zIndex`];
function oO() {
  return (
    (oO = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    oO.apply(null, arguments)
  );
}
function sO(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = cO(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function cO(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var lO = (e) => {
    var t = Array.isArray(e.value) ? e.value[e.value.length - 1] : e.value;
    if (hD(t)) return t;
  },
  uO = (0, O.createContext)(void 0),
  dO = uO.Provider,
  fO = (0, O.createContext)(void 0);
fO.Provider;
function pO() {
  return (0, O.useContext)(uO);
}
function mO() {
  return (0, O.useContext)(fO);
}
function hO(e) {
  var t = e.valueAccessor,
    n = t === void 0 ? lO : t,
    r = sO(e, iO),
    i = r.dataKey;
  r.clockWise;
  var a = r.id,
    o = r.textBreakAll,
    s = r.zIndex,
    c = sO(r, aO),
    l = pO(),
    u = mO(),
    d = l || u;
  return !d || !d.length
    ? null
    : O.createElement(
        fT,
        { zIndex: s ?? cm.label },
        O.createElement(
          ue,
          { className: `recharts-label-list` },
          d.map((e, t) => {
            var s = I(i) ? n(e, t) : H(e.payload, i),
              l = I(a) ? {} : { id: `${a}-${t}` };
            return O.createElement(
              tO,
              oO({ key: `label-${t}` }, ee(e), c, l, {
                fill: r.fill ?? e.fill,
                parentViewBox: e.parentViewBox,
                value: s,
                textBreakAll: o,
                viewBox: e.viewBox,
                index: t,
                zIndex: 0,
              }),
            );
          }),
        ),
      );
}
hO.displayName = `LabelList`;
function gO(e) {
  var t = e.label;
  return t
    ? t === !0
      ? O.createElement(hO, { key: `labelList-implicit` })
      : O.isValidElement(t) || JD(t)
        ? O.createElement(hO, { key: `labelList-implicit`, content: t })
        : typeof t == `object`
          ? O.createElement(
              hO,
              oO({ key: `labelList-implicit` }, t, { type: String(t.type) }),
            )
          : null
    : null;
}
var _O = Ao({
    name: `polarAxis`,
    initialState: { radiusAxis: {}, angleAxis: {} },
    reducers: {
      addRadiusAxis(e, t) {
        e.radiusAxis[t.payload.id] = z(t.payload);
      },
      removeRadiusAxis(e, t) {
        delete e.radiusAxis[t.payload.id];
      },
      addAngleAxis(e, t) {
        e.angleAxis[t.payload.id] = z(t.payload);
      },
      removeAngleAxis(e, t) {
        delete e.angleAxis[t.payload.id];
      },
    },
  }),
  vO = _O.actions;
(vO.addRadiusAxis, vO.removeRadiusAxis, vO.addAngleAxis, vO.removeAngleAxis);
var yO = _O.reducer;
function bO(e) {
  return e &&
    typeof e == `object` &&
    `className` in e &&
    typeof e.className == `string`
    ? e.className
    : ``;
}
var xO = n(),
  SO = (e) =>
    typeof e == `string` ? e : e ? e.displayName || e.name || `Component` : ``,
  CO = null,
  wO = null,
  TO = (e) => {
    if (e === CO && Array.isArray(wO)) return wO;
    var t = [];
    return (
      O.Children.forEach(e, (e) => {
        I(e) ||
          ((0, xO.isFragment)(e)
            ? (t = t.concat(TO(e.props.children)))
            : t.push(e));
      }),
      (wO = t),
      (CO = e),
      t
    );
  };
function EO(e, t) {
  var n = [],
    r = [];
  return (
    (r = Array.isArray(t) ? t.map((e) => SO(e)) : [SO(t)]),
    TO(e).forEach((e) => {
      var t = Vt(e, `type.displayName`) || Vt(e, `type.name`);
      t && r.indexOf(t) !== -1 && n.push(e);
    }),
    n
  );
}
function DO(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function OO(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? DO(Object(n), !0).forEach(function (t) {
          kO(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : DO(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function kO(e, t, n) {
  return (
    (t = AO(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function AO(e) {
  var t = jO(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function jO(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function MO(e, t) {
  return OO(OO({}, t), e);
}
function NO(e) {
  return (0, O.isValidElement)(e) ? e.props : e;
}
function PO(e, t) {
  return (0, O.cloneElement)(e, MO(NO(e), t));
}
function FO(e) {
  if (`index` in e) {
    var t = e.index;
    return typeof t == `number` || typeof t == `string` ? t : void 0;
  }
}
function IO(e) {
  return `isActive` in e && e.isActive === !0;
}
function LO(e) {
  var t = e.option,
    n = e.DefaultShape,
    r = e.shapeProps,
    i = e.activeClassName,
    a = i === void 0 ? `recharts-active-shape` : i,
    o = e.inActiveClassName,
    s = o === void 0 ? `recharts-shape` : o,
    c = FO(r),
    l = (0, O.isValidElement)(t)
      ? PO(t, r)
      : t === n
        ? O.createElement(n, r)
        : typeof t == `function`
          ? t(r, c)
          : typeof t == `object`
            ? O.createElement(n, MO(t, r))
            : O.createElement(n, r);
  return IO(r)
    ? O.createElement(ue, { className: a }, l)
    : O.createElement(ue, { className: s }, l);
}
var RO = (e, t, n) => {
    var r = L();
    return (i, a) => (o) => {
      (e?.(i, a, o),
        r(
          nC({
            activeIndex: String(a),
            activeDataKey: t,
            activeCoordinate: i.tooltipPosition,
            activeGraphicalItemId: n,
          }),
        ));
    };
  },
  zO = (e) => {
    var t = L();
    return (n, r) => (i) => {
      (e?.(n, r, i), t(rC()));
    };
  },
  BO = (e, t, n) => {
    var r = L();
    return (i, a) => (o) => {
      (e?.(i, a, o),
        r(
          aC({
            activeIndex: String(a),
            activeDataKey: t,
            activeCoordinate: i.tooltipPosition,
            activeGraphicalItemId: n,
          }),
        ));
    };
  };
function VO(e) {
  var t = e.tooltipEntrySettings,
    n = L(),
    r = vc(),
    i = (0, O.useRef)(null);
  return (
    (0, O.useLayoutEffect)(() => {
      r ||
        (i.current === null
          ? n(QS(t))
          : i.current !== t && n($S({ prev: i.current, next: t })),
        (i.current = t));
    }, [t, n, r]),
    (0, O.useLayoutEffect)(
      () => () => {
        i.current &&= (n(eC(i.current)), null);
      },
      [n],
    ),
    null
  );
}
function HO(e) {
  var t = e.legendPayload,
    n = L(),
    r = vc(),
    i = (0, O.useRef)(null);
  return (
    (0, O.useLayoutEffect)(() => {
      r ||
        (i.current === null
          ? n(gl(t))
          : i.current !== t && n(_l({ prev: i.current, next: t })),
        (i.current = t));
    }, [n, r, t]),
    (0, O.useLayoutEffect)(
      () => () => {
        i.current &&= (n(vl(i.current)), null);
      },
      [n],
    ),
    null
  );
}
function UO(e, t) {
  return JO(e) || qO(e, t) || GO(e, t) || WO();
}
function WO() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function GO(e, t) {
  if (e) {
    if (typeof e == `string`) return KO(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? KO(e, t)
          : void 0
    );
  }
}
function KO(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function qO(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n != null) {
    var r,
      i,
      a,
      o,
      s = [],
      c = !0,
      l = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        c = !1;
      } else
        for (
          ;
          !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t);
          c = !0
        );
    } catch (e) {
      ((l = !0), (i = e));
    } finally {
      try {
        if (!c && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return s;
  }
}
function JO(e) {
  if (Array.isArray(e)) return e;
}
var YO = `index`,
  XO = `append`;
function ZO(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [],
    r = [];
  for (var i of n) r.push({ status: `removed`, prev: i });
  for (var a = 0; a < t.length; a++) {
    var o = e[a],
      s = t[a];
    o == null
      ? r.push({ status: `added`, next: s })
      : r.push({ status: `matched`, prev: o, next: s });
  }
  return r;
}
function QO(e, t) {
  var n = e.length / t.length;
  return ZO(
    t.map((t, r) => e[Math.floor(r * n)]),
    t,
  );
}
function $O(e, t) {
  return ZO(
    t.map((t, n) => e[n]),
    t,
  );
}
function ek(e, t) {
  for (var n = new Map(), r = 0; r < e.length; r++) {
    var i = e[r];
    if (i != null) {
      var a = t(i, r);
      a != null && !n.has(a) && n.set(a, i);
    }
  }
  return n;
}
function tk(e, t, n) {
  var r = ek(e, n),
    i = new Set(),
    a = t.map((e, t) => {
      var a = n(e, t);
      if (a != null) {
        var o = r.get(a);
        if (o !== void 0) return (i.add(a), o);
      }
    }),
    o = [];
  for (var s of r) {
    var c = UO(s, 2),
      l = c[0],
      u = c[1];
    i.has(l) || o.push(u);
  }
  return ZO(a, t, o);
}
function nk(e, t, n) {
  return t == null
    ? null
    : e == null
      ? t.map((e) => ({ status: `added`, next: e }))
      : n === `index`
        ? QO(e, t)
        : n === `append`
          ? $O(e, t)
          : tk(e, t, n);
}
function rk(e, t) {
  var n = (0, O.useRef)(e),
    r = (0, O.useRef)(t.current),
    i = (0, O.useRef)(!0);
  n.current !== e &&
    ((n.current = e), (r.current = t.current), (i.current = !1));
  var a = (0, O.useCallback)(
    function (e, n) {
      var a =
        arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
      if (n === 0) {
        i.current = !0;
        return;
      }
      (n === 1 && (r.current = e), n > 0 && i.current && a && (t.current = e));
    },
    [t],
  );
  return { startValue: r.current, syncStepValue: a };
}
function ik(e, t) {
  return lk(e) || ck(e, t) || ok(e, t) || ak();
}
function ak() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ok(e, t) {
  if (e) {
    if (typeof e == `string`) return sk(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? sk(e, t)
          : void 0
    );
  }
}
function sk(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function ck(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n != null) {
    var r,
      i,
      a,
      o,
      s = [],
      c = !0,
      l = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        c = !1;
      } else
        for (
          ;
          !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t);
          c = !0
        );
    } catch (e) {
      ((l = !0), (i = e));
    } finally {
      try {
        if (!c && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return s;
  }
}
function lk(e) {
  if (Array.isArray(e)) return e;
}
function uk(e, t) {
  var n = ik((0, O.useState)(!1), 2),
    r = n[0],
    i = n[1];
  return {
    isAnimating: r,
    handleAnimationStart: (0, O.useCallback)(() => {
      (typeof e == `function` && e(), i(!0));
    }, [e]),
    handleAnimationEnd: (0, O.useCallback)(() => {
      (typeof t == `function` && t(), i(!1));
    }, [t]),
  };
}
function dk(e) {
  var t = e.animationInput,
    n = e.animationIdPrefix,
    r = e.items,
    i = e.previousItemsRef,
    a = e.isAnimationActive,
    o = e.animationBegin,
    s = e.animationDuration,
    c = e.animationEasing,
    l = e.onAnimationStart,
    u = e.onAnimationEnd,
    d = e.animationInterpolateFn,
    f = e.animationMatchBy,
    p = e.shouldUpdatePreviousRef,
    m = e.children,
    h = e.layout,
    g = cf(t, n),
    _ = rk(g, i),
    v = _.startValue ?? null,
    y = nk(v, r, f ?? YO);
  return O.createElement(
    sf,
    {
      animationId: g,
      begin: o,
      duration: s,
      isActive: a,
      easing: c,
      onAnimationEnd: u,
      onAnimationStart: l,
      key: g,
    },
    (e) => {
      var t = v == null,
        n = r == null ? r : d(y, e, h),
        i = p ? p(e) : e > 0;
      return (_.syncStepValue(n, e, i), n == null ? null : m(n, e, t));
    },
  );
}
function fk(e, t) {
  return _k(e) || gk(e, t) || mk(e, t) || pk();
}
function pk() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function mk(e, t) {
  if (e) {
    if (typeof e == `string`) return hk(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? hk(e, t)
          : void 0
    );
  }
}
function hk(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function gk(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n != null) {
    var r,
      i,
      a,
      o,
      s = [],
      c = !0,
      l = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        c = !1;
      } else
        for (
          ;
          !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t);
          c = !0
        );
    } catch (e) {
      ((l = !0), (i = e));
    } finally {
      try {
        if (!c && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return s;
  }
}
function _k(e) {
  if (Array.isArray(e)) return e;
}
var vk =
  O.useId ??
  (() =>
    fk(
      O.useState(() => Zt(`uid-`)),
      1,
    )[0]);
function yk(e, t) {
  var n = vk();
  return t || (e ? `${e}-${n}` : n);
}
var bk = (0, O.createContext)(void 0),
  xk = (e) => {
    var t = e.id,
      n = e.type,
      r = e.children,
      i = yk(`recharts-${n}`, t);
    return O.createElement(bk.Provider, { value: i }, r(i));
  },
  Sk = Ao({
    name: `graphicalItems`,
    initialState: { cartesianItems: [], polarItems: [] },
    reducers: {
      addCartesianGraphicalItem: {
        reducer(e, t) {
          e.cartesianItems.push(z(t.payload));
        },
        prepare: B(),
      },
      replaceCartesianGraphicalItem: {
        reducer(e, t) {
          var n = t.payload,
            r = n.prev,
            i = n.next,
            a = to(e).cartesianItems.indexOf(z(r));
          a > -1 && (e.cartesianItems[a] = z(i));
        },
        prepare: B(),
      },
      removeCartesianGraphicalItem: {
        reducer(e, t) {
          var n = to(e).cartesianItems.indexOf(z(t.payload));
          n > -1 && e.cartesianItems.splice(n, 1);
        },
        prepare: B(),
      },
      addPolarGraphicalItem: {
        reducer(e, t) {
          e.polarItems.push(z(t.payload));
        },
        prepare: B(),
      },
      removePolarGraphicalItem: {
        reducer(e, t) {
          var n = to(e).polarItems.indexOf(z(t.payload));
          n > -1 && e.polarItems.splice(n, 1);
        },
        prepare: B(),
      },
      replacePolarGraphicalItem: {
        reducer(e, t) {
          var n = t.payload,
            r = n.prev,
            i = n.next,
            a = to(e).polarItems.indexOf(z(r));
          a > -1 && (e.polarItems[a] = z(i));
        },
        prepare: B(),
      },
    },
  }),
  Ck = Sk.actions,
  wk = Ck.addCartesianGraphicalItem,
  Tk = Ck.replaceCartesianGraphicalItem,
  Ek = Ck.removeCartesianGraphicalItem;
(Ck.addPolarGraphicalItem,
  Ck.removePolarGraphicalItem,
  Ck.replacePolarGraphicalItem);
var Dk = Sk.reducer,
  Ok = (0, O.memo)((e) => {
    var t = L(),
      n = (0, O.useRef)(null);
    return (
      (0, O.useLayoutEffect)(() => {
        (n.current === null
          ? t(wk(e))
          : n.current !== e && t(Tk({ prev: n.current, next: e })),
          (n.current = e));
      }, [t, e]),
      (0, O.useLayoutEffect)(
        () => () => {
          n.current &&= (t(Ek(n.current)), null);
        },
        [t],
      ),
      null
    );
  });
function kk(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Ak(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? kk(Object(n), !0).forEach(function (t) {
          jk(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : kk(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function jk(e, t, n) {
  return (
    (t = Mk(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Mk(e) {
  var t = Nk(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Nk(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var Pk = Ao({
    name: `cartesianAxis`,
    initialState: { xAxis: {}, yAxis: {}, zAxis: {} },
    reducers: {
      addXAxis: {
        reducer(e, t) {
          e.xAxis[t.payload.id] = z(t.payload);
        },
        prepare: B(),
      },
      replaceXAxis: {
        reducer(e, t) {
          var n = t.payload,
            r = n.prev,
            i = n.next;
          e.xAxis[r.id] !== void 0 &&
            (r.id !== i.id && delete e.xAxis[r.id], (e.xAxis[i.id] = z(i)));
        },
        prepare: B(),
      },
      removeXAxis: {
        reducer(e, t) {
          delete e.xAxis[t.payload.id];
        },
        prepare: B(),
      },
      addYAxis: {
        reducer(e, t) {
          e.yAxis[t.payload.id] = z(t.payload);
        },
        prepare: B(),
      },
      replaceYAxis: {
        reducer(e, t) {
          var n = t.payload,
            r = n.prev,
            i = n.next;
          e.yAxis[r.id] !== void 0 &&
            (r.id !== i.id && delete e.yAxis[r.id], (e.yAxis[i.id] = z(i)));
        },
        prepare: B(),
      },
      removeYAxis: {
        reducer(e, t) {
          delete e.yAxis[t.payload.id];
        },
        prepare: B(),
      },
      addZAxis: {
        reducer(e, t) {
          e.zAxis[t.payload.id] = z(t.payload);
        },
        prepare: B(),
      },
      replaceZAxis: {
        reducer(e, t) {
          var n = t.payload,
            r = n.prev,
            i = n.next;
          e.zAxis[r.id] !== void 0 &&
            (r.id !== i.id && delete e.zAxis[r.id], (e.zAxis[i.id] = z(i)));
        },
        prepare: B(),
      },
      removeZAxis: {
        reducer(e, t) {
          delete e.zAxis[t.payload.id];
        },
        prepare: B(),
      },
      updateYAxisWidth(e, t) {
        var n = t.payload,
          r = n.id,
          i = n.width,
          a = e.yAxis[r];
        if (a) {
          var o = a.widthHistory || [];
          if (
            o.length === 3 &&
            o[0] === o[2] &&
            i === o[1] &&
            i !== a.width &&
            Math.abs(i - (o[0] ?? 0)) <= 1
          )
            return;
          var s = [...o, i].slice(-3);
          e.yAxis[r] = Ak(Ak({}, a), {}, { width: i, widthHistory: s });
        }
      },
    },
  }),
  Fk = Pk.actions,
  Ik = Fk.addXAxis,
  Lk = Fk.replaceXAxis,
  Rk = Fk.removeXAxis;
(Fk.addYAxis,
  Fk.replaceYAxis,
  Fk.removeYAxis,
  Fk.addZAxis,
  Fk.replaceZAxis,
  Fk.removeZAxis,
  Fk.updateYAxisWidth);
var zk = Pk.reducer,
  Bk = T(
    [
      T([U], (e) => ({
        top: e.top,
        bottom: e.bottom,
        left: e.left,
        right: e.right,
      })),
      Qs,
      $s,
    ],
    (e, t, n) => {
      if (!(!e || t == null || n == null))
        return {
          x: e.left,
          y: e.top,
          width: Math.max(0, t - e.left - e.right),
          height: Math.max(0, n - e.top - e.bottom),
        };
    },
  ),
  Vk = () => R(Bk);
function Hk(e, t) {
  return qk(e) || Kk(e, t) || Wk(e, t) || Uk();
}
function Uk() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Wk(e, t) {
  if (e) {
    if (typeof e == `string`) return Gk(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? Gk(e, t)
          : void 0
    );
  }
}
function Gk(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Kk(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n != null) {
    var r,
      i,
      a,
      o,
      s = [],
      c = !0,
      l = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        c = !1;
      } else
        for (
          ;
          !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t);
          c = !0
        );
    } catch (e) {
      ((l = !0), (i = e));
    } finally {
      try {
        if (!c && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return s;
  }
}
function qk(e) {
  if (Array.isArray(e)) return e;
}
var Jk = (e, t, n) => {
    var r = n ?? e;
    if (!I(r)) return Qt(r, t, 0);
  },
  Yk = (e, t, n) => {
    var r = {},
      i = e.filter(Mm),
      a = e.filter((e) => e.stackId == null),
      o = i.reduce((e, t) => {
        var n = e[t.stackId];
        return ((n ??= []), n.push(t), (e[t.stackId] = n), e);
      }, r),
      s = Object.entries(o).map((e) => {
        var r = Hk(e, 2),
          i = r[0],
          a = r[1];
        return {
          stackId: i,
          dataKeys: a.map((e) => e.dataKey),
          barSize: Jk(t, n, a[0]?.barSize),
        };
      }),
      c = a.map((e) => ({
        stackId: void 0,
        dataKeys: [e.dataKey].filter((e) => e != null),
        barSize: Jk(t, n, e.barSize),
      }));
    return [...s, ...c];
  };
function Xk(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Zk(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Xk(Object(n), !0).forEach(function (t) {
          Qk(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Xk(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Qk(e, t, n) {
  return (
    (t = $k(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function $k(e) {
  var t = eA(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function eA(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function tA(e, t, n, r, i) {
  var a = r.length;
  if (!(a < 1)) {
    var o = Qt(e, n, 0, !0),
      s,
      c = [];
    if (V(r[0]?.barSize)) {
      var l = !1,
        u = n / a,
        d = r.reduce((e, t) => e + (t.barSize || 0), 0);
      ((d += (a - 1) * o),
        d >= n && ((d -= (a - 1) * o), (o = 0)),
        d >= n && u > 0 && ((l = !0), (u *= 0.9), (d = a * u)));
      var f = { offset: Math.round((n - d) / 2) - o, size: 0 };
      s = r.reduce((e, t) => {
        var n = {
            stackId: t.stackId,
            dataKeys: t.dataKeys,
            position: {
              offset: f.offset + f.size + o,
              size: l ? u : (t.barSize ?? 0),
            },
          },
          r = [...e, n];
        return ((f = n.position), r);
      }, c);
    } else {
      var p = Qt(t, n, 0, !0);
      n - 2 * p - (a - 1) * o <= 0 && (o = 0);
      var m = (n - 2 * p - (a - 1) * o) / a;
      m > 1 && (m = Math.round(m));
      var h = V(i) ? Math.min(m, i) : m;
      s = r.reduce(
        (e, t, n) => [
          ...e,
          {
            stackId: t.stackId,
            dataKeys: t.dataKeys,
            position: { offset: p + (m + o) * n + (m - h) / 2, size: h },
          },
        ],
        c,
      );
    }
    return s;
  }
}
var nA = (e, t, n, r, i, a, o) => {
    var s = I(o) ? t : o,
      c = tA(n, r, i === a ? a : i, e, s);
    return (
      i !== a &&
        c != null &&
        (c = c.map((e) =>
          Zk(
            Zk({}, e),
            {},
            {
              position: Zk(
                Zk({}, e.position),
                {},
                { offset: e.position.offset - i / 2 },
              ),
            },
          ),
        )),
      c
    );
  },
  rA = (e, t) => {
    var n = Am(t);
    if (!(!e || n == null || t == null)) {
      var r = t.stackId;
      if (r != null) {
        var i = e[r];
        if (i) {
          var a = i.stackedData;
          if (a) return a.find((e) => e.key === n);
        }
      }
    }
  },
  iA = (e, t) => {
    if (!(e == null || t == null)) {
      var n = e.find(
        (e) =>
          e.stackId === t.stackId &&
          t.dataKey != null &&
          e.dataKeys.includes(t.dataKey),
      );
      if (n != null) return n.position;
    }
  };
function aA(e, t) {
  return e &&
    typeof e == `object` &&
    `zIndex` in e &&
    typeof e.zIndex == `number` &&
    V(e.zIndex)
    ? e.zIndex
    : t;
}
var oA = (e) => {
    var t = e.chartData,
      n = L(),
      r = vc();
    return (
      (0, O.useEffect)(
        () =>
          r
            ? () => {}
            : (n(FT(t)),
              () => {
                n(FT(void 0));
              }),
        [t, n, r],
      ),
      null
    );
  },
  sA = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
  },
  cA = Ao({
    name: `brush`,
    initialState: sA,
    reducers: {
      setBrushSettings(e, t) {
        return t.payload == null ? sA : t.payload;
      },
    },
  });
cA.actions.setBrushSettings;
var lA = cA.reducer;
function uA(e) {
  return ((e % 180) + 180) % 180;
}
var dA = function (e) {
    var t = e.width,
      n = e.height,
      r =
        (uA(
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
        ) *
          Math.PI) /
        180,
      i = Math.atan(n / t),
      a = r > i && r < Math.PI - i ? n / Math.sin(r) : t / Math.cos(r);
    return Math.abs(a);
  },
  fA = Ao({
    name: `referenceElements`,
    initialState: { dots: [], areas: [], lines: [] },
    reducers: {
      addDot: (e, t) => {
        e.dots.push(t.payload);
      },
      removeDot: (e, t) => {
        var n = to(e).dots.findIndex((e) => e === t.payload);
        n !== -1 && e.dots.splice(n, 1);
      },
      addArea: (e, t) => {
        e.areas.push(t.payload);
      },
      removeArea: (e, t) => {
        var n = to(e).areas.findIndex((e) => e === t.payload);
        n !== -1 && e.areas.splice(n, 1);
      },
      addLine: (e, t) => {
        e.lines.push(z(t.payload));
      },
      removeLine: (e, t) => {
        var n = to(e).lines.findIndex((e) => e === t.payload);
        n !== -1 && e.lines.splice(n, 1);
      },
    },
  }),
  pA = fA.actions;
(pA.addDot, pA.removeDot, pA.addArea, pA.removeArea, pA.addLine, pA.removeLine);
var mA = fA.reducer;
function hA(e, t) {
  return bA(e) || yA(e, t) || _A(e, t) || gA();
}
function gA() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _A(e, t) {
  if (e) {
    if (typeof e == `string`) return vA(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? vA(e, t)
          : void 0
    );
  }
}
function vA(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function yA(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n != null) {
    var r,
      i,
      a,
      o,
      s = [],
      c = !0,
      l = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        c = !1;
      } else
        for (
          ;
          !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t);
          c = !0
        );
    } catch (e) {
      ((l = !0), (i = e));
    } finally {
      try {
        if (!c && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return s;
  }
}
function bA(e) {
  if (Array.isArray(e)) return e;
}
var xA = (0, O.createContext)(void 0),
  SA = (e) => {
    var t = e.children,
      n = hA((0, O.useState)(`${Zt(`recharts`)}-clip`), 1)[0],
      r = Vk();
    if (r == null) return null;
    var i = r.x,
      a = r.y,
      o = r.width,
      s = r.height;
    return O.createElement(
      xA.Provider,
      { value: n },
      O.createElement(
        `defs`,
        null,
        O.createElement(
          `clipPath`,
          { id: n },
          O.createElement(`rect`, { x: i, y: a, height: s, width: o }),
        ),
      ),
      t,
    );
  };
function CA(e, t) {
  if (t < 1) return [];
  if (t === 1) return e;
  for (var n = [], r = 0; r < e.length; r += t) {
    var i = e[r];
    i !== void 0 && n.push(i);
  }
  return n;
}
function wA(e, t, n) {
  return dA({ width: e.width + t.width, height: e.height + t.height }, n);
}
function TA(e, t, n) {
  var r = n === `width`,
    i = e.x,
    a = e.y,
    o = e.width,
    s = e.height;
  return t === 1
    ? { start: r ? i : a, end: r ? i + o : a + s }
    : { start: r ? i + o : a + s, end: r ? i : a };
}
function EA(e, t, n, r, i) {
  if (e * t < e * r || e * t > e * i) return !1;
  var a = n();
  return e * (t - (e * a) / 2 - r) >= 0 && e * (t + (e * a) / 2 - i) <= 0;
}
function DA(e, t) {
  return CA(e, t + 1);
}
function OA(e, t, n, r, i) {
  for (
    var a = (r || []).slice(),
      o = t.start,
      s = t.end,
      c = 0,
      l = 1,
      u = o,
      d = function () {
        var t = r?.[c];
        if (t === void 0) return { v: CA(r, l) };
        var a = c,
          d,
          f = () => (d === void 0 && (d = n(t, a)), d),
          p = t.coordinate,
          m = c === 0 || EA(e, p, f, u, s);
        (m || ((c = 0), (u = o), (l += 1)),
          m && ((u = p + e * (f() / 2 + i)), (c += l)));
      },
      f;
    l <= a.length;
  )
    if (((f = d()), f)) return f.v;
  return [];
}
function kA(e, t, n, r, i) {
  var a = (r || []).slice().length;
  if (a === 0) return [];
  for (var o = t.start, s = t.end, c = 1; c <= a; c++) {
    for (
      var l = (a - 1) % c,
        u = o,
        d = !0,
        f = function () {
          var t = r[m];
          if (t == null) return 0;
          var a = m,
            o,
            c = () => (o === void 0 && (o = n(t, a)), o),
            f = t.coordinate,
            p = m === l || EA(e, f, c, u, s);
          if (!p) return ((d = !1), 1);
          p && (u = f + e * (c() / 2 + i));
        },
        p,
        m = l;
      m < a && ((p = f()), !(p !== 0 && p === 1));
      m += c
    );
    if (d) {
      for (var h = [], g = l; g < a; g += c) {
        var _ = r[g];
        _ != null && h.push(_);
      }
      return h;
    }
  }
  return [];
}
function AA(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function jA(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? AA(Object(n), !0).forEach(function (t) {
          MA(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : AA(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function MA(e, t, n) {
  return (
    (t = NA(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function NA(e) {
  var t = PA(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function PA(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function FA(e, t, n, r, i) {
  for (
    var a = (r || []).slice(),
      o = a.length,
      s = t.start,
      c = t.end,
      l = function (t) {
        var r = a[t];
        if (r == null) return 1;
        var l = r,
          u,
          d = () => (u === void 0 && (u = n(r, t)), u);
        if (t === o - 1) {
          var f = e * (l.coordinate + (e * d()) / 2 - c);
          a[t] = l = jA(
            jA({}, l),
            {},
            { tickCoord: f > 0 ? l.coordinate - f * e : l.coordinate },
          );
        } else a[t] = l = jA(jA({}, l), {}, { tickCoord: l.coordinate });
        l.tickCoord != null &&
          EA(e, l.tickCoord, d, s, c) &&
          ((c = l.tickCoord - e * (d() / 2 + i)),
          (a[t] = jA(jA({}, l), {}, { isShow: !0 })));
      },
      u = o - 1;
    u >= 0;
    u--
  )
    if (l(u)) continue;
  return a;
}
function IA(e, t, n, r, i, a) {
  var o = (r || []).slice(),
    s = o.length,
    c = t.start,
    l = t.end;
  if (a) {
    var u = r[s - 1];
    if (u != null) {
      var d = n(u, s - 1),
        f = e * (u.coordinate + (e * d) / 2 - l);
      ((o[s - 1] = u =
        jA(
          jA({}, u),
          {},
          { tickCoord: f > 0 ? u.coordinate - f * e : u.coordinate },
        )),
        u.tickCoord != null &&
          EA(e, u.tickCoord, () => d, c, l) &&
          ((l = u.tickCoord - e * (d / 2 + i)),
          (o[s - 1] = jA(jA({}, u), {}, { isShow: !0 }))));
    }
  }
  for (
    var p = a ? s - 1 : s,
      m = function (t) {
        var r = o[t];
        if (r == null) return 1;
        var a = r,
          s,
          u = () => (s === void 0 && (s = n(r, t)), s);
        if (t === 0) {
          var d = e * (a.coordinate - (e * u()) / 2 - c);
          o[t] = a = jA(
            jA({}, a),
            {},
            { tickCoord: d < 0 ? a.coordinate - d * e : a.coordinate },
          );
        } else o[t] = a = jA(jA({}, a), {}, { tickCoord: a.coordinate });
        a.tickCoord != null &&
          EA(e, a.tickCoord, u, c, l) &&
          ((c = a.tickCoord + e * (u() / 2 + i)),
          (o[t] = jA(jA({}, a), {}, { isShow: !0 })));
      },
      h = 0;
    h < p;
    h++
  )
    if (m(h)) continue;
  return o;
}
function LA(e, t, n) {
  var r = e.tick,
    i = e.ticks,
    a = e.viewBox,
    o = e.minTickGap,
    s = e.orientation,
    c = e.interval,
    l = e.tickFormatter,
    u = e.unit,
    d = e.angle;
  if (!i || !i.length || !r) return [];
  if (F(c) || Mu.isSsr) return DA(i, F(c) ? c : 0) ?? [];
  var f = [],
    p = s === `top` || s === `bottom` ? `width` : `height`,
    m =
      u && p === `width`
        ? OE(u, { fontSize: t, letterSpacing: n })
        : { width: 0, height: 0 },
    h = (e, r) => {
      var i = typeof l == `function` ? l(e.value, r) : e.value;
      return p === `width`
        ? wA(OE(i, { fontSize: t, letterSpacing: n }), m, d)
        : OE(i, { fontSize: t, letterSpacing: n })[p];
    },
    g = i[0],
    _ = i[1],
    v =
      i.length >= 2 && g != null && _ != null
        ? Kt(_.coordinate - g.coordinate)
        : 1,
    y = TA(a, v, p);
  return c === `equidistantPreserveStart`
    ? OA(v, y, h, i, o)
    : c === `equidistantPreserveEnd`
      ? kA(v, y, h, i, o)
      : ((f =
          c === `preserveStart` || c === `preserveStartEnd`
            ? IA(v, y, h, i, o, c === `preserveStartEnd`)
            : FA(v, y, h, i, o)),
        f.filter((e) => e.isShow));
}
var RA = (e) => {
    var t = e.ticks,
      n = e.label,
      r = e.labelGapWithTick,
      i = r === void 0 ? 5 : r,
      a = e.tickSize,
      o = a === void 0 ? 0 : a,
      s = e.tickMargin,
      c = s === void 0 ? 0 : s,
      l = 0;
    if (t) {
      Array.from(t).forEach((e) => {
        if (e) {
          var t = e.getBoundingClientRect();
          t.width > l && (l = t.width);
        }
      });
      var u = n ? n.getBoundingClientRect().width : 0,
        d = o + c,
        f = l + d + u + (n ? i : 0);
      return Math.round(f);
    }
    return 0;
  },
  zA = Ao({
    name: `renderedTicks`,
    initialState: { xAxis: {}, yAxis: {} },
    reducers: {
      setRenderedTicks: (e, t) => {
        var n = t.payload,
          r = n.axisType,
          i = n.axisId,
          a = n.ticks;
        e[r][i] = z(a);
      },
      removeRenderedTicks: (e, t) => {
        var n = t.payload,
          r = n.axisType,
          i = n.axisId;
        delete e[r][i];
      },
    },
  }),
  BA = zA.actions,
  VA = BA.setRenderedTicks,
  HA = BA.removeRenderedTicks,
  UA = zA.reducer,
  WA = [
    `axisLine`,
    `width`,
    `height`,
    `className`,
    `hide`,
    `ticks`,
    `axisType`,
    `axisId`,
  ];
function GA(e, t) {
  return XA(e) || YA(e, t) || qA(e, t) || KA();
}
function KA() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function qA(e, t) {
  if (e) {
    if (typeof e == `string`) return JA(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? JA(e, t)
          : void 0
    );
  }
}
function JA(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function YA(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n != null) {
    var r,
      i,
      a,
      o,
      s = [],
      c = !0,
      l = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        c = !1;
      } else
        for (
          ;
          !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t);
          c = !0
        );
    } catch (e) {
      ((l = !0), (i = e));
    } finally {
      try {
        if (!c && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return s;
  }
}
function XA(e) {
  if (Array.isArray(e)) return e;
}
function ZA(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = QA(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function QA(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function $A() {
  return (
    ($A = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    $A.apply(null, arguments)
  );
}
function ej(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? ej(Object(n), !0).forEach(function (t) {
          tj(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ej(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function tj(e, t, n) {
  return (
    (t = nj(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function nj(e) {
  var t = rj(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function rj(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var ij = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  viewBox: { x: 0, y: 0, width: 0, height: 0 },
  orientation: `bottom`,
  ticks: [],
  stroke: `#666`,
  tickLine: !0,
  axisLine: !0,
  tick: !0,
  mirror: !1,
  minTickGap: 5,
  tickSize: 6,
  tickMargin: 2,
  interval: `preserveEnd`,
  zIndex: cm.axis,
};
function aj(t) {
  var n = t.x,
    r = t.y,
    i = t.width,
    a = t.height,
    o = t.orientation,
    s = t.mirror,
    c = t.axisLine,
    l = t.otherSvgProps;
  if (!c) return null;
  var u = Z(Z(Z({}, l), M(c)), {}, { fill: `none` });
  if (o === `top` || o === `bottom`) {
    var d = +((o === `top` && !s) || (o === `bottom` && s));
    u = Z(Z({}, u), {}, { x1: n, y1: r + d * a, x2: n + i, y2: r + d * a });
  } else {
    var f = +((o === `left` && !s) || (o === `right` && s));
    u = Z(Z({}, u), {}, { x1: n + f * i, y1: r, x2: n + f * i, y2: r + a });
  }
  return O.createElement(
    `line`,
    $A({}, u, {
      className: e(`recharts-cartesian-axis-line`, Vt(c, `className`)),
    }),
  );
}
function oj(e, t, n, r, i, a, o, s, c) {
  var l,
    u,
    d,
    f,
    p,
    m,
    h = s ? -1 : 1,
    g = e.tickSize || o,
    _ = F(e.tickCoord) ? e.tickCoord : e.coordinate;
  switch (a) {
    case `top`:
      ((l = u = e.coordinate),
        (f = n + +!s * i),
        (d = f - h * g),
        (m = d - h * c),
        (p = _));
      break;
    case `left`:
      ((d = f = e.coordinate),
        (u = t + +!s * r),
        (l = u - h * g),
        (p = l - h * c),
        (m = _));
      break;
    case `right`:
      ((d = f = e.coordinate),
        (u = t + +s * r),
        (l = u + h * g),
        (p = l + h * c),
        (m = _));
      break;
    default:
      ((l = u = e.coordinate),
        (f = n + +s * i),
        (d = f + h * g),
        (m = d + h * c),
        (p = _));
      break;
  }
  return { line: { x1: l, y1: d, x2: u, y2: f }, tick: { x: p, y: m } };
}
function sj(e, t) {
  switch (e) {
    case `left`:
      return t ? `start` : `end`;
    case `right`:
      return t ? `end` : `start`;
    default:
      return `middle`;
  }
}
function cj(e, t) {
  switch (e) {
    case `left`:
    case `right`:
      return `middle`;
    case `top`:
      return t ? `start` : `end`;
    default:
      return t ? `end` : `start`;
  }
}
function lj(t) {
  var n = t.option,
    r = t.tickProps,
    i = t.value,
    a,
    o = e(r.className, `recharts-cartesian-axis-tick-value`);
  if (O.isValidElement(n))
    a = O.cloneElement(n, Z(Z({}, r), {}, { className: o }));
  else if (typeof n == `function`) a = n(Z(Z({}, r), {}, { className: o }));
  else {
    var s = `recharts-cartesian-axis-tick-value`;
    (typeof n != `boolean` && (s = e(s, bO(n))),
      (a = O.createElement(TD, $A({}, r, { className: s }), i)));
  }
  return a;
}
function uj(e) {
  var t = e.ticks,
    n = e.axisType,
    r = e.axisId,
    i = L();
  return (
    (0, O.useEffect)(
      () =>
        r == null || n == null
          ? an
          : (i(
              VA({
                ticks: t.map((e) => ({
                  value: e.value,
                  coordinate: e.coordinate,
                  offset: e.offset,
                  index: e.index,
                })),
                axisId: r,
                axisType: n,
              }),
            ),
            () => {
              i(HA({ axisId: r, axisType: n }));
            }),
      [i, t, r, n],
    ),
    null
  );
}
var dj = (0, O.forwardRef)((t, n) => {
    var r = t.ticks,
      i = r === void 0 ? [] : r,
      a = t.tick,
      o = t.tickLine,
      s = t.stroke,
      c = t.tickFormatter,
      l = t.unit,
      u = t.padding,
      d = t.tickTextProps,
      f = t.orientation,
      p = t.mirror,
      m = t.x,
      h = t.y,
      g = t.width,
      _ = t.height,
      v = t.tickSize,
      y = t.tickMargin,
      b = t.fontSize,
      x = t.letterSpacing,
      S = t.getTicksConfig,
      C = t.events,
      w = t.axisType,
      T = t.axisId,
      E = LA(Z(Z({}, S), {}, { ticks: i }), b, x),
      D = M(S),
      k = N(a),
      A = mD(D.textAnchor) ? D.textAnchor : sj(f, p),
      j = cj(f, p),
      ee = {};
    typeof o == `object` && (ee = o);
    var te = Z(Z({}, D), {}, { fill: `none` }, ee),
      ne = E.map((e) => Z({ entry: e }, oj(e, m, h, g, _, f, v, p, y))),
      re = ne.map((t) => {
        var n = t.entry,
          r = t.line;
        return O.createElement(
          ue,
          {
            className: `recharts-cartesian-axis-tick`,
            key: `tick-${n.value}-${n.coordinate}-${n.tickCoord}`,
          },
          o &&
            O.createElement(
              `line`,
              $A({}, te, r, {
                className: e(
                  `recharts-cartesian-axis-tick-line`,
                  Vt(o, `className`),
                ),
              }),
            ),
        );
      }),
      ie = ne.map((e, t) => {
        var n = e.entry,
          r = e.tick,
          i = Z(
            Z(
              {},
              Z(
                Z(
                  Z(
                    Z({ verticalAnchor: j }, D),
                    {},
                    { textAnchor: A, stroke: `none`, fill: s },
                    r,
                  ),
                  {},
                  {
                    index: t,
                    payload: n,
                    visibleTicksCount: E.length,
                    tickFormatter: c,
                    padding: u,
                  },
                  d,
                ),
                {},
                { angle: d?.angle ?? D.angle ?? 0 },
              ),
            ),
            k,
          );
        return O.createElement(
          ue,
          $A(
            {
              className: `recharts-cartesian-axis-tick-label`,
              key: `tick-label-${n.value}-${n.coordinate}-${n.tickCoord}`,
            },
            wn(C, n, t),
          ),
          a &&
            O.createElement(lj, {
              option: a,
              tickProps: i,
              value: `${typeof c == `function` ? c(n.value, t) : n.value}${l || ``}`,
            }),
        );
      });
    return O.createElement(
      `g`,
      { className: `recharts-cartesian-axis-ticks recharts-${w}-ticks` },
      O.createElement(uj, { ticks: E, axisId: T, axisType: w }),
      ie.length > 0 &&
        O.createElement(
          fT,
          { zIndex: cm.label },
          O.createElement(
            `g`,
            {
              className: `recharts-cartesian-axis-tick-labels recharts-${w}-tick-labels`,
              ref: n,
            },
            ie,
          ),
        ),
      re.length > 0 &&
        O.createElement(
          `g`,
          {
            className: `recharts-cartesian-axis-tick-lines recharts-${w}-tick-lines`,
          },
          re,
        ),
    );
  }),
  fj = (0, O.forwardRef)((t, n) => {
    var r = t.axisLine,
      i = t.width,
      a = t.height,
      o = t.className,
      s = t.hide,
      c = t.ticks,
      l = t.axisType,
      u = t.axisId,
      d = ZA(t, WA),
      f = GA((0, O.useState)(``), 2),
      p = f[0],
      m = f[1],
      h = GA((0, O.useState)(``), 2),
      g = h[0],
      _ = h[1],
      v = (0, O.useRef)(null);
    (0, O.useImperativeHandle)(n, () => ({
      getCalculatedWidth: () =>
        RA({
          ticks: v.current,
          label: t.labelRef?.current,
          labelGapWithTick: 5,
          tickSize: t.tickSize,
          tickMargin: t.tickMargin,
        }),
    }));
    var y = (0, O.useCallback)(
      (e) => {
        if (e) {
          var t = e.getElementsByClassName(
            `recharts-cartesian-axis-tick-value`,
          );
          v.current = t;
          var n = t[0];
          if (n) {
            var r = window.getComputedStyle(n),
              i = r.fontSize,
              a = r.letterSpacing;
            (i !== p || a !== g) && (m(i), _(a));
          }
        }
      },
      [p, g],
    );
    return s || (i != null && i <= 0) || (a != null && a <= 0)
      ? null
      : O.createElement(
          fT,
          { zIndex: t.zIndex },
          O.createElement(
            ue,
            { className: e(`recharts-cartesian-axis`, o) },
            O.createElement(aj, {
              x: t.x,
              y: t.y,
              width: i,
              height: a,
              orientation: t.orientation,
              mirror: t.mirror,
              axisLine: r,
              otherSvgProps: M(t),
            }),
            O.createElement(dj, {
              ref: y,
              axisType: l,
              events: d,
              fontSize: p,
              getTicksConfig: t,
              height: t.height,
              letterSpacing: g,
              mirror: t.mirror,
              orientation: t.orientation,
              padding: t.padding,
              stroke: t.stroke,
              tick: t.tick,
              tickFormatter: t.tickFormatter,
              tickLine: t.tickLine,
              tickMargin: t.tickMargin,
              tickSize: t.tickSize,
              tickTextProps: t.tickTextProps,
              ticks: c,
              unit: t.unit,
              width: t.width,
              x: t.x,
              y: t.y,
              axisId: u,
            }),
            O.createElement(
              UD,
              {
                x: t.x,
                y: t.y,
                width: t.width,
                height: t.height,
                lowerWidth: t.width,
                upperWidth: t.width,
              },
              O.createElement(rO, { label: t.label, labelRef: t.labelRef }),
              t.children,
            ),
          ),
        );
  }),
  pj = O.forwardRef((e, t) => {
    var n = An(e, ij);
    return O.createElement(fj, $A({}, n, { ref: t }));
  });
pj.displayName = `CartesianAxis`;
var mj = [`x1`, `y1`, `x2`, `y2`, `key`],
  hj = [`offset`],
  gj = [`xAxisId`, `yAxisId`],
  _j = [`xAxisId`, `yAxisId`];
function vj(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function yj(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? vj(Object(n), !0).forEach(function (t) {
          bj(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : vj(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function bj(e, t, n) {
  return (
    (t = xj(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function xj(e) {
  var t = Sj(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Sj(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Cj() {
  return (
    (Cj = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Cj.apply(null, arguments)
  );
}
function wj(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = Tj(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function Tj(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var Ej = (e) => {
  var t = e.fill;
  if (!t || t === `none`) return null;
  var n = e.fillOpacity,
    r = e.x,
    i = e.y,
    a = e.width,
    o = e.height,
    s = e.ry;
  return O.createElement(`rect`, {
    x: r,
    y: i,
    ry: s,
    width: a,
    height: o,
    stroke: `none`,
    fill: t,
    fillOpacity: n,
    className: `recharts-cartesian-grid-bg`,
  });
};
function Dj(e) {
  var t = e.option,
    n = e.lineItemProps,
    r;
  if (O.isValidElement(t)) r = O.cloneElement(t, n);
  else if (typeof t == `function`) r = t(n);
  else {
    var i = n.x1,
      a = n.y1,
      o = n.x2,
      s = n.y2,
      c = n.key,
      l = M(wj(n, mj)) ?? {};
    l.offset;
    var u = wj(l, hj);
    r = O.createElement(
      `line`,
      Cj({}, u, { x1: i, y1: a, x2: o, y2: s, fill: `none`, key: c }),
    );
  }
  return r;
}
function Oj(e) {
  var t = e.x,
    n = e.width,
    r = e.horizontal,
    i = r === void 0 ? !0 : r,
    a = e.horizontalPoints;
  if (!i || !a || !a.length) return null;
  (e.xAxisId, e.yAxisId);
  var o = wj(e, gj),
    s = a.map((e, r) => {
      var a = yj(
        yj({}, o),
        {},
        { x1: t, y1: e, x2: t + n, y2: e, key: `line-${r}`, index: r },
      );
      return O.createElement(Dj, {
        key: `line-${r}`,
        option: i,
        lineItemProps: a,
      });
    });
  return O.createElement(
    `g`,
    { className: `recharts-cartesian-grid-horizontal` },
    s,
  );
}
function kj(e) {
  var t = e.y,
    n = e.height,
    r = e.vertical,
    i = r === void 0 ? !0 : r,
    a = e.verticalPoints;
  if (!i || !a || !a.length) return null;
  (e.xAxisId, e.yAxisId);
  var o = wj(e, _j),
    s = a.map((e, r) => {
      var a = yj(
        yj({}, o),
        {},
        { x1: e, y1: t, x2: e, y2: t + n, key: `line-${r}`, index: r },
      );
      return O.createElement(Dj, {
        option: i,
        lineItemProps: a,
        key: `line-${r}`,
      });
    });
  return O.createElement(
    `g`,
    { className: `recharts-cartesian-grid-vertical` },
    s,
  );
}
function Aj(e) {
  var t = e.horizontalFill,
    n = e.fillOpacity,
    r = e.x,
    i = e.y,
    a = e.width,
    o = e.height,
    s = e.horizontalPoints,
    c = e.horizontal;
  if (!(c === void 0 || c) || !t || !t.length || s == null) return null;
  var l = s.map((e) => Math.round(e + i - i)).sort((e, t) => e - t);
  i !== l[0] && l.unshift(0);
  var u = l.map((e, s) => {
    var c = l[s + 1],
      u = c == null ? i + o - e : c - e;
    if (u <= 0) return null;
    var d = s % t.length;
    return O.createElement(`rect`, {
      key: `react-${s}`,
      y: e,
      x: r,
      height: u,
      width: a,
      stroke: `none`,
      fill: t[d],
      fillOpacity: n,
      className: `recharts-cartesian-grid-bg`,
    });
  });
  return O.createElement(
    `g`,
    { className: `recharts-cartesian-gridstripes-horizontal` },
    u,
  );
}
function jj(e) {
  var t = e.vertical,
    n = t === void 0 ? !0 : t,
    r = e.verticalFill,
    i = e.fillOpacity,
    a = e.x,
    o = e.y,
    s = e.width,
    c = e.height,
    l = e.verticalPoints;
  if (!n || !r || !r.length) return null;
  var u = l.map((e) => Math.round(e + a - a)).sort((e, t) => e - t);
  a !== u[0] && u.unshift(0);
  var d = u.map((e, t) => {
    var n = u[t + 1],
      l = n == null ? a + s - e : n - e;
    if (l <= 0) return null;
    var d = t % r.length;
    return O.createElement(`rect`, {
      key: `react-${t}`,
      x: e,
      y: o,
      width: l,
      height: c,
      stroke: `none`,
      fill: r[d],
      fillOpacity: i,
      className: `recharts-cartesian-grid-bg`,
    });
  });
  return O.createElement(
    `g`,
    { className: `recharts-cartesian-gridstripes-vertical` },
    d,
  );
}
var Mj = (e, t) => {
    var n = e.xAxis,
      r = e.width,
      i = e.height,
      a = e.offset;
    return Ps(
      LA(
        yj(
          yj(yj({}, ij), n),
          {},
          { ticks: Fs(n, !0), viewBox: { x: 0, y: 0, width: r, height: i } },
        ),
      ),
      a.left,
      a.left + a.width,
      t,
    );
  },
  Nj = (e, t) => {
    var n = e.yAxis,
      r = e.width,
      i = e.height,
      a = e.offset;
    return Ps(
      LA(
        yj(
          yj(yj({}, ij), n),
          {},
          { ticks: Fs(n, !0), viewBox: { x: 0, y: 0, width: r, height: i } },
        ),
      ),
      a.top,
      a.top + a.height,
      t,
    );
  },
  Pj = {
    horizontal: !0,
    vertical: !0,
    horizontalPoints: [],
    verticalPoints: [],
    stroke: `#ccc`,
    fill: `none`,
    verticalFill: [],
    horizontalFill: [],
    xAxisId: 0,
    yAxisId: 0,
    syncWithTicks: !1,
    zIndex: cm.grid,
  };
function Fj(e) {
  var t = il(),
    n = al(),
    r = rl(),
    i = yj(
      yj({}, An(e, Pj)),
      {},
      {
        x: F(e.x) ? e.x : r.left,
        y: F(e.y) ? e.y : r.top,
        width: F(e.width) ? e.width : r.width,
        height: F(e.height) ? e.height : r.height,
      },
    ),
    a = i.xAxisId,
    o = i.yAxisId,
    s = i.x,
    c = i.y,
    l = i.width,
    u = i.height,
    d = i.syncWithTicks,
    f = i.horizontalValues,
    p = i.verticalValues,
    m = vc(),
    h = R((e) => LS(e, `xAxis`, a, m)),
    g = R((e) => LS(e, `yAxis`, o, m));
  if (!Es(l) || !Es(u) || !F(s) || !F(c)) return null;
  var _ = i.verticalCoordinatesGenerator || Mj,
    v = i.horizontalCoordinatesGenerator || Nj,
    y = i.horizontalPoints,
    b = i.verticalPoints;
  if ((!y || !y.length) && typeof v == `function`) {
    var x = f && f.length,
      S = v(
        {
          yAxis: g ? yj(yj({}, g), {}, { ticks: x ? f : g.ticks }) : void 0,
          width: t ?? l,
          height: n ?? u,
          offset: r,
        },
        x ? !0 : d,
      );
    (wc(
      Array.isArray(S),
      `horizontalCoordinatesGenerator should return Array but instead it returned [${typeof S}]`,
    ),
      Array.isArray(S) && (y = S));
  }
  if ((!b || !b.length) && typeof _ == `function`) {
    var C = p && p.length,
      w = _(
        {
          xAxis: h ? yj(yj({}, h), {}, { ticks: C ? p : h.ticks }) : void 0,
          width: t ?? l,
          height: n ?? u,
          offset: r,
        },
        C ? !0 : d,
      );
    (wc(
      Array.isArray(w),
      `verticalCoordinatesGenerator should return Array but instead it returned [${typeof w}]`,
    ),
      Array.isArray(w) && (b = w));
  }
  return O.createElement(
    fT,
    { zIndex: i.zIndex },
    O.createElement(
      `g`,
      { className: `recharts-cartesian-grid` },
      O.createElement(Ej, {
        fill: i.fill,
        fillOpacity: i.fillOpacity,
        x: i.x,
        y: i.y,
        width: i.width,
        height: i.height,
        ry: i.ry,
      }),
      O.createElement(Aj, Cj({}, i, { horizontalPoints: y })),
      O.createElement(jj, Cj({}, i, { verticalPoints: b })),
      O.createElement(
        Oj,
        Cj({}, i, { offset: r, horizontalPoints: y, xAxis: h, yAxis: g }),
      ),
      O.createElement(
        kj,
        Cj({}, i, { offset: r, verticalPoints: b, xAxis: h, yAxis: g }),
      ),
    ),
  );
}
Fj.displayName = `CartesianGrid`;
var Ij = Ao({
    name: `errorBars`,
    initialState: {},
    reducers: {
      addErrorBar: (e, t) => {
        var n = t.payload,
          r = n.itemId,
          i = n.errorBar;
        (e[r] || (e[r] = []), e[r].push(i));
      },
      replaceErrorBar: (e, t) => {
        var n = t.payload,
          r = n.itemId,
          i = n.prev,
          a = n.next;
        e[r] &&
          (e[r] = e[r].map((e) =>
            e.dataKey === i.dataKey && e.direction === i.direction ? a : e,
          ));
      },
      removeErrorBar: (e, t) => {
        var n = t.payload,
          r = n.itemId,
          i = n.errorBar;
        e[r] &&
          (e[r] = e[r].filter(
            (e) => e.dataKey !== i.dataKey || e.direction !== i.direction,
          ));
      },
    },
  }),
  Lj = Ij.actions;
(Lj.addErrorBar, Lj.replaceErrorBar, Lj.removeErrorBar);
var Rj = Ij.reducer,
  zj = [`children`];
function Bj(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = Vj(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function Vj(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var Hj = (0, O.createContext)({
  data: [],
  xAxisId: `xAxis-0`,
  yAxisId: `yAxis-0`,
  dataPointFormatter: () => ({ x: 0, y: 0, value: 0 }),
  errorBarOffset: 0,
});
function Uj(e) {
  var t = e.children,
    n = Bj(e, zj);
  return O.createElement(Hj.Provider, { value: n }, t);
}
function Wj(e, t) {
  var n = R((t) => Bb(t, e)),
    r = R((e) => Ub(e, t)),
    i = n?.allowDataOverflow ?? Y.allowDataOverflow,
    a = r?.allowDataOverflow ?? Vb.allowDataOverflow;
  return { needClip: i || a, needClipX: i, needClipY: a };
}
function Gj(e) {
  var t = e.xAxisId,
    n = e.yAxisId,
    r = e.clipPathId,
    i = Vk(),
    a = Wj(t, n),
    o = a.needClipX,
    s = a.needClipY,
    c = a.needClip,
    l = R((e) => fS(e, t, !1)),
    u = R((e) => pS(e, n, !1));
  if (!c || !i) return null;
  var d = i.x,
    f = i.y,
    p = i.width,
    m = i.height,
    h = o && l ? Math.min(l[0], l[1]) : d - p / 2,
    g = s && u ? Math.min(u[0], u[1]) : f - m / 2,
    _ = o && l ? Math.abs(l[1] - l[0]) : p * 2,
    v = s && u ? Math.abs(u[1] - u[0]) : m * 2;
  return O.createElement(
    `clipPath`,
    { id: `clipPath-${r}` },
    O.createElement(`rect`, { x: h, y: g, width: _, height: v }),
  );
}
function Kj(e, t) {
  return e.graphicalItems.cartesianItems.find((e) => e.id === t)?.xAxisId ?? 0;
}
function qj(e, t) {
  return e.graphicalItems.cartesianItems.find((e) => e.id === t)?.yAxisId ?? 0;
}
var Jj = `Invariant failed`;
function Yj(e, t) {
  if (!e) throw Error(Jj);
}
var Xj = [`option`];
function Zj(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = Qj(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function Qj(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var $j = Bf;
function eM(e) {
  var t = e.option,
    n = Zj(e, Xj);
  return O.createElement(LO, {
    option: t,
    DefaultShape: $j,
    shapeProps: n,
    activeClassName: `recharts-active-bar`,
    inActiveClassName: `recharts-inactive-bar`,
  });
}
var tM = function (e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return (n, r) => {
      if (F(e)) return e;
      var i = F(n) || I(n);
      return i
        ? e(n, r)
        : (!i &&
            Yj(
              !1,
              `minPointSize callback function received a value with type of ${typeof n}. Currently only numbers or null/undefined are supported.`,
            ),
          t);
    };
  },
  nM = (e, t, n) => n,
  rM = T([Zb, (e, t) => t], (e, t) =>
    e.filter((e) => e.type === `bar`).find((e) => e.id === t),
  ),
  iM = T([rM], (e) => e?.maxBarSize),
  aM = (e, t, n, r) => r,
  oM = T([W, Zb, Kj, qj, nM], (e, t, n, r, i) =>
    t
      .filter((t) => (e === `horizontal` ? t.xAxisId === n : t.yAxisId === r))
      .filter((e) => e.isPanorama === i)
      .filter((e) => e.hide === !1)
      .filter((e) => e.type === `bar`),
  ),
  sM = (e, t, n) => {
    var r = W(e),
      i = Kj(e, t),
      a = qj(e, t);
    if (!(i == null || a == null))
      return r === `horizontal` ? Sx(e, `yAxis`, a, n) : Sx(e, `xAxis`, i, n);
  },
  cM = T(
    [
      oM,
      tm,
      (e, t) => {
        var n = W(e),
          r = Kj(e, t),
          i = qj(e, t);
        if (!(r == null || i == null))
          return n === `horizontal` ? PS(e, `xAxis`, r) : PS(e, `yAxis`, i);
      },
    ],
    Yk,
  ),
  lM = (e, t, n) => {
    var r = rM(e, t);
    if (r == null) return 0;
    var i = Kj(e, t),
      a = qj(e, t);
    if (i == null || a == null) return 0;
    var o = W(e),
      s = Qp(e),
      c = r.maxBarSize,
      l = I(c) ? s : c,
      u,
      d;
    return (
      o === `horizontal`
        ? ((u = BS(e, `xAxis`, i, n)), (d = zS(e, `xAxis`, i, n)))
        : ((u = BS(e, `yAxis`, a, n)), (d = zS(e, `yAxis`, a, n))),
      qs(u, d, !0) ?? l ?? 0
    );
  },
  uM = (e, t, n) => {
    var r = W(e),
      i = Kj(e, t),
      a = qj(e, t);
    if (!(i == null || a == null)) {
      var o, s;
      return (
        r === `horizontal`
          ? ((o = BS(e, `xAxis`, i, n)), (s = zS(e, `xAxis`, i, n)))
          : ((o = BS(e, `yAxis`, a, n)), (s = zS(e, `yAxis`, a, n))),
        qs(o, s)
      );
    }
  },
  dM = T(
    [
      U,
      gc,
      (e, t, n) => {
        var r = Kj(e, t);
        if (r != null) return BS(e, `xAxis`, r, n);
      },
      (e, t, n) => {
        var r = qj(e, t);
        if (r != null) return BS(e, `yAxis`, r, n);
      },
      (e, t, n) => {
        var r = Kj(e, t);
        if (r != null) return zS(e, `xAxis`, r, n);
      },
      (e, t, n) => {
        var r = qj(e, t);
        if (r != null) return zS(e, `yAxis`, r, n);
      },
      T([T([cM, Qp, $p, em, lM, uM, iM], nA), rM], iA),
      W,
      wp,
      uM,
      T([sM, rM], rA),
      rM,
      aM,
    ],
    (e, t, n, r, i, a, o, s, c, l, u, d, f) => {
      var p = c.chartData,
        m = c.dataStartIndex,
        h = c.dataEndIndex;
      if (!(
        d == null ||
        o == null ||
        t == null ||
        (s !== `horizontal` && s !== `vertical`) ||
        n == null ||
        r == null ||
        i == null ||
        a == null ||
        l == null
      )) {
        var g = d.data,
          _ = g != null && g.length > 0 ? g : p?.slice(m, h + 1);
        if (_ != null)
          return $M({
            layout: s,
            barSettings: d,
            pos: o,
            parentViewBox: t,
            bandSize: l,
            xAxis: n,
            yAxis: r,
            xAxisTicks: i,
            yAxisTicks: a,
            stackedData: u,
            displayedData: _,
            offset: e,
            cells: f,
            dataStartIndex: m,
          });
      }
    },
  ),
  fM = [`index`];
function pM() {
  return (
    (pM = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    pM.apply(null, arguments)
  );
}
function mM(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = hM(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function hM(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var gM = (0, O.createContext)(void 0),
  _M = (e) => {
    var t = (0, O.useContext)(gM);
    if (t != null) return t.stackId;
    if (e != null) return zs(e);
  },
  vM = (e, t) => `recharts-bar-stack-clip-path-${e}-${t}`,
  yM = (e) => {
    var t = (0, O.useContext)(gM);
    if (t != null) {
      var n = t.stackId;
      return `url(#${vM(n, e)})`;
    }
  },
  bM = (e) => {
    var t = e.index,
      n = mM(e, fM),
      r = yM(t);
    return O.createElement(
      ue,
      pM({ className: `recharts-bar-stack-layer`, clipPath: r }, n),
    );
  },
  xM = [`onMouseEnter`, `onMouseLeave`, `onClick`],
  SM = [`value`, `background`, `tooltipPosition`],
  CM = [`id`],
  wM = [`onMouseEnter`, `onClick`, `onMouseLeave`];
function TM(e, t) {
  return AM(e) || kM(e, t) || DM(e, t) || EM();
}
function EM() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function DM(e, t) {
  if (e) {
    if (typeof e == `string`) return OM(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? OM(e, t)
          : void 0
    );
  }
}
function OM(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function kM(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n != null) {
    var r,
      i,
      a,
      o,
      s = [],
      c = !0,
      l = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        c = !1;
      } else
        for (
          ;
          !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t);
          c = !0
        );
    } catch (e) {
      ((l = !0), (i = e));
    } finally {
      try {
        if (!c && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return s;
  }
}
function AM(e) {
  if (Array.isArray(e)) return e;
}
function jM() {
  return (
    (jM = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    jM.apply(null, arguments)
  );
}
function MM(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Q(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? MM(Object(n), !0).forEach(function (t) {
          NM(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : MM(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function NM(e, t, n) {
  return (
    (t = PM(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function PM(e) {
  var t = FM(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function FM(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function IM(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = LM(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function LM(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var RM = (e) => {
    var t = e.dataKey,
      n = e.name,
      r = e.fill,
      i = e.legendType;
    return [
      {
        inactive: e.hide,
        dataKey: t,
        type: i,
        color: r,
        value: Ys(n, t),
        payload: e,
      },
    ];
  },
  zM = O.memo((e) => {
    var t = e.dataKey,
      n = e.stroke,
      r = e.strokeWidth,
      i = e.fill,
      a = e.name,
      o = e.hide,
      s = e.unit,
      c = e.formatter,
      l = e.tooltipType,
      u = e.id,
      d = {
        dataDefinedOnItem: void 0,
        getPosition: an,
        settings: {
          stroke: n,
          strokeWidth: r,
          fill: i,
          dataKey: t,
          nameKey: void 0,
          name: Ys(a, t),
          hide: o,
          type: l,
          color: i,
          unit: s,
          formatter: c,
          graphicalItemId: u,
        },
      };
    return O.createElement(VO, { tooltipEntrySettings: d });
  });
function BM(e) {
  var t = R(lw),
    n = e.data,
    r = e.dataKey,
    i = e.background,
    a = e.allOtherBarProps,
    o = a.onMouseEnter,
    s = a.onMouseLeave,
    c = a.onClick,
    l = IM(a, xM),
    u = RO(o, r, a.id),
    d = zO(s),
    f = BO(c, r, a.id);
  if (!i || n == null) return null;
  var p = N(i);
  return O.createElement(
    fT,
    { zIndex: aA(i, cm.barBackground) },
    n.map((e, n) => {
      e.value;
      var a = e.background;
      e.tooltipPosition;
      var o = IM(e, SM);
      if (!a) return null;
      var s = u(e, e.originalDataIndex),
        c = d(e, e.originalDataIndex),
        m = f(e, e.originalDataIndex),
        h = Q(
          Q(
            Q(
              Q(
                Q(
                  { option: i, isActive: String(e.originalDataIndex) === t },
                  o,
                ),
                {},
                { fill: `#eee` },
                a,
              ),
              p,
            ),
            wn(l, e, n),
          ),
          {},
          {
            onMouseEnter: s,
            onMouseLeave: c,
            onClick: m,
            dataKey: r,
            index: n,
            className: `recharts-bar-background-rectangle`,
          },
        );
      return O.createElement(eM, jM({ key: `background-bar-${n}` }, h));
    }),
  );
}
function VM(e) {
  var t = e.showLabels,
    n = e.children,
    r = e.rects?.map((e) => {
      var t = {
        x: e.x,
        y: e.y,
        width: e.width,
        lowerWidth: e.width,
        upperWidth: e.width,
        height: e.height,
      };
      return Q(
        Q({}, t),
        {},
        {
          value: e.value,
          payload: e.payload,
          parentViewBox: e.parentViewBox,
          viewBox: t,
          fill: e.fill,
        },
      );
    });
  return O.createElement(dO, { value: t ? r : void 0 }, n);
}
function HM(e) {
  var t = e.shape,
    n = e.activeBar,
    r = e.baseProps,
    i = e.entry,
    a = e.index,
    o = e.dataKey,
    s = R(lw),
    c = R(dw),
    l = n && String(i.originalDataIndex) === s && (c == null || o === c),
    u = TM((0, O.useState)(!1), 2),
    d = u[0],
    f = u[1],
    p = TM((0, O.useState)(!1), 2),
    m = p[0],
    h = p[1];
  (0, O.useEffect)(() => {
    var e;
    return (
      l
        ? (f(!0),
          (e = requestAnimationFrame(() => {
            h(!0);
          })))
        : h(!1),
      () => {
        cancelAnimationFrame(e);
      }
    );
  }, [l]);
  var g = (0, O.useCallback)(() => {
      l || f(!1);
    }, [l]),
    _ = l && m,
    v = l || d,
    y = l ? (n === !0 ? t : n) : t,
    b = O.createElement(
      eM,
      jM({}, r, { name: String(r.name) }, i, {
        isActive: _,
        option: y,
        index: a,
        dataKey: o,
        animationElapsedTime: e.animationElapsedTime,
        isAnimating: e.isAnimating,
        isEntrance: e.isEntrance,
        onTransitionEnd: g,
      }),
    );
  return v
    ? O.createElement(
        fT,
        { zIndex: cm.activeBar },
        O.createElement(bM, { index: i.originalDataIndex }, b),
      )
    : b;
}
function UM(e) {
  var t = e.shape,
    n = e.baseProps,
    r = e.entry,
    i = e.index,
    a = e.dataKey;
  return O.createElement(
    eM,
    jM({}, n, { name: String(n.name) }, r, {
      isActive: !1,
      option: t,
      index: i,
      dataKey: a,
      animationElapsedTime: e.animationElapsedTime,
      isAnimating: e.isAnimating,
      isEntrance: e.isEntrance,
    }),
  );
}
function WM(e) {
  var t = e.data,
    n = e.props,
    r = e.animationElapsedTime,
    i = e.isAnimating,
    a = e.isEntrance,
    o = M(n) ?? {},
    s = o.id,
    c = IM(o, CM),
    l = n.shape,
    u = n.dataKey,
    d = n.activeBar,
    f = n.onMouseEnter,
    p = n.onClick,
    m = n.onMouseLeave,
    h = IM(n, wM),
    g = RO(f, u, s),
    _ = zO(m),
    v = BO(p, u, s);
  return t
    ? O.createElement(
        O.Fragment,
        null,
        t.map((e, t) =>
          O.createElement(
            bM,
            jM(
              {
                index: e.originalDataIndex,
                key: `rectangle-${e?.x}-${e?.y}-${e?.value}-${t}`,
                className: `recharts-bar-rectangle`,
              },
              wn(h, e, t),
              {
                onMouseEnter: g(e, e.originalDataIndex),
                onMouseLeave: _(e, e.originalDataIndex),
                onClick: v(e, e.originalDataIndex),
              },
            ),
            d
              ? O.createElement(HM, {
                  shape: l,
                  activeBar: d,
                  baseProps: c,
                  entry: e,
                  index: t,
                  dataKey: u,
                  animationElapsedTime: r,
                  isAnimating: i,
                  isEntrance: a,
                })
              : O.createElement(UM, {
                  shape: l,
                  baseProps: c,
                  entry: e,
                  index: t,
                  dataKey: u,
                  animationElapsedTime: r,
                  isAnimating: i,
                  isEntrance: a,
                }),
          ),
        ),
      )
    : null;
}
var GM = (e, t, n) =>
  e == null
    ? []
    : t === 1
      ? e.flatMap((e) => (e.status === `removed` ? [] : [e.next]))
      : e.flatMap((e) => {
          if (e.status === `removed`)
            return n === `horizontal`
              ? [
                  Q(
                    Q({}, e.prev),
                    {},
                    {
                      height: en(e.prev.height, 0, t),
                      y: en(e.prev.y, e.prev.y + e.prev.height, t),
                    },
                  ),
                ]
              : [Q(Q({}, e.prev), {}, { width: en(e.prev.width, 0, t) })];
          if (e.status === `matched`)
            return [
              Q(
                Q({}, e.next),
                {},
                {
                  x: en(e.prev.x, e.next.x, t),
                  y: en(e.prev.y, e.next.y, t),
                  width: en(e.prev.width, e.next.width, t),
                  height: en(e.prev.height, e.next.height, t),
                },
              ),
            ];
          var r = e.next;
          return n === `horizontal`
            ? [
                Q(
                  Q({}, r),
                  {},
                  {
                    height: en(0, r.height, t),
                    y: en(r.stackedBarStart, r.y, t),
                  },
                ),
              ]
            : [
                Q(
                  Q({}, r),
                  {},
                  {
                    width: en(0, r.width, t),
                    x: en(r.stackedBarStart, r.x, t),
                  },
                ),
              ];
        });
function KM(e) {
  var t = e.props,
    n = e.previousRectanglesRef,
    r = t.data,
    i = t.isAnimationActive,
    a = t.animationBegin,
    o = t.animationDuration,
    s = t.animationEasing,
    c = t.animationInterpolateFn,
    l = t.layout,
    u = uk(t.onAnimationStart, t.onAnimationEnd),
    d = u.isAnimating,
    f = u.handleAnimationStart,
    p = u.handleAnimationEnd;
  return O.createElement(
    VM,
    { showLabels: !d, rects: r },
    O.createElement(
      dk,
      {
        animationInput: r,
        animationIdPrefix: `recharts-bar-`,
        items: r,
        previousItemsRef: n,
        isAnimationActive: i,
        animationBegin: a,
        animationDuration: o,
        animationEasing: s,
        onAnimationStart: f,
        onAnimationEnd: p,
        animationInterpolateFn: c,
        animationMatchBy: t.animationMatchBy,
        layout: l,
      },
      (e, n, r) =>
        O.createElement(
          ue,
          null,
          O.createElement(WM, {
            props: t,
            data: e,
            animationElapsedTime: n,
            isAnimating: d || n < 1,
            isEntrance: r,
          }),
        ),
    ),
    O.createElement(gO, { label: t.label }),
    t.children,
  );
}
function qM(e) {
  var t = (0, O.useRef)(null);
  return O.createElement(KM, { previousRectanglesRef: t, props: e });
}
var JM = 0,
  YM = (e, t) => {
    var n = Array.isArray(e.value) ? e.value[1] : e.value;
    return { x: e.x, y: e.y, value: n, errorVal: H(e, t) };
  },
  XM = class extends O.PureComponent {
    render() {
      var t = this.props,
        n = t.hide,
        r = t.data,
        i = t.dataKey,
        a = t.className,
        o = t.xAxisId,
        s = t.yAxisId,
        c = t.needClip,
        l = t.background,
        u = t.id;
      if (n || r == null) return null;
      var d = e(`recharts-bar`, a),
        f = u;
      return O.createElement(
        ue,
        { className: d, id: u },
        c &&
          O.createElement(
            `defs`,
            null,
            O.createElement(Gj, { clipPathId: f, xAxisId: o, yAxisId: s }),
          ),
        O.createElement(
          ue,
          {
            className: `recharts-bar-rectangles`,
            clipPath: c ? `url(#clipPath-${f})` : void 0,
          },
          O.createElement(BM, {
            data: r,
            dataKey: i,
            background: l,
            allOtherBarProps: this.props,
          }),
          O.createElement(qM, this.props),
        ),
      );
    }
  },
  ZM = {
    activeBar: !1,
    animationBegin: 0,
    animationDuration: 400,
    animationEasing: `ease`,
    animationInterpolateFn: GM,
    animationMatchBy: XO,
    background: !1,
    hide: !1,
    isAnimationActive: `auto`,
    label: !1,
    legendType: `rect`,
    minPointSize: JM,
    shape: $j,
    xAxisId: 0,
    yAxisId: 0,
    zIndex: cm.bar,
  };
function QM(e) {
  var t = e.xAxisId,
    n = e.yAxisId,
    r = e.hide,
    i = e.legendType,
    a = e.minPointSize,
    o = e.activeBar,
    s = e.animationBegin,
    c = e.animationDuration,
    l = e.animationEasing,
    u = e.isAnimationActive,
    d = Wj(t, n).needClip,
    f = sl(),
    p = vc(),
    m = EO(e.children, fE),
    h = R((t) => dM(t, e.id, p, m));
  if (f !== `vertical` && f !== `horizontal`) return null;
  var g,
    _ = h?.[0];
  return (
    (g =
      _ == null || _.height == null || _.width == null
        ? 0
        : f === `vertical`
          ? _.height / 2
          : _.width / 2),
    O.createElement(
      Uj,
      {
        xAxisId: t,
        yAxisId: n,
        data: h,
        dataPointFormatter: YM,
        errorBarOffset: g,
      },
      O.createElement(
        XM,
        jM({}, e, {
          layout: f,
          needClip: d,
          data: h,
          xAxisId: t,
          yAxisId: n,
          hide: r,
          legendType: i,
          minPointSize: a,
          activeBar: o,
          animationBegin: s,
          animationDuration: c,
          animationEasing: l,
          isAnimationActive: u,
        }),
      ),
    )
  );
}
function $M(e) {
  var t = e.layout,
    n = e.barSettings,
    r = n.dataKey,
    i = n.minPointSize,
    a = n.hasCustomShape,
    o = e.pos,
    s = e.bandSize,
    c = e.xAxis,
    l = e.yAxis,
    u = e.xAxisTicks,
    d = e.yAxisTicks,
    f = e.stackedData,
    p = e.displayedData,
    m = e.offset,
    h = e.cells,
    g = e.parentViewBox,
    _ = e.dataStartIndex,
    v = t === `horizontal` ? l : c,
    y = f ? v.scale.domain() : null,
    b = Vs({ numericAxis: v }),
    x = v.scale.map(b);
  return p
    .map((e, n) => {
      var p, v, S, C, w, T;
      if (f) {
        var E = f[n + _];
        if (E == null) return null;
        p = Is(E, y);
      } else ((p = H(e, r)), Array.isArray(p) || (p = [b, p]));
      var D = tM(i, JM)(p[1], n);
      if (t === `horizontal`) {
        var O = l.scale.map(p[0]),
          k = l.scale.map(p[1]);
        if (O == null || k == null) return null;
        ((v = Bs({
          axis: c,
          ticks: u,
          bandSize: s,
          offset: o.offset,
          entry: e,
          index: n,
        })),
          (S = k ?? O ?? void 0),
          (C = o.size));
        var A = O - k;
        if (
          ((w = qt(A) ? 0 : A),
          (T = { x: v, y: m.top, width: C, height: m.height }),
          Math.abs(D) > 0 && Math.abs(w) < Math.abs(D))
        ) {
          var j = Kt(w || D) * (Math.abs(D) - Math.abs(w));
          ((S -= j), (w += j));
        }
      } else {
        var M = c.scale.map(p[0]),
          N = c.scale.map(p[1]);
        if (M == null || N == null) return null;
        if (
          ((v = M),
          (S = Bs({
            axis: l,
            ticks: d,
            bandSize: s,
            offset: o.offset,
            entry: e,
            index: n,
          })),
          (C = N - M),
          (w = o.size),
          (T = { x: m.left, y: S, width: m.width, height: w }),
          Math.abs(D) > 0 && Math.abs(C) < Math.abs(D))
        ) {
          var ee = Kt(C || D) * (Math.abs(D) - Math.abs(C));
          C += ee;
        }
      }
      return v == null ||
        S == null ||
        C == null ||
        w == null ||
        (!a && (C === 0 || w === 0))
        ? null
        : Q(
            Q({}, e),
            {},
            {
              stackedBarStart: x,
              x: v,
              y: S,
              width: C,
              height: w,
              value: f ? p : p[1],
              payload: e,
              background: T,
              tooltipPosition: { x: v + C / 2, y: S + w / 2 },
              parentViewBox: g,
              originalDataIndex: n,
            },
            h && h[n] && h[n].props,
          );
    })
    .filter(Boolean);
}
function eN(e) {
  var t = An(e, ZM),
    n = _M(t.stackId),
    r = vc();
  return O.createElement(xk, { id: t.id, type: `bar` }, (e) =>
    O.createElement(
      O.Fragment,
      null,
      O.createElement(HO, { legendPayload: RM(t) }),
      O.createElement(zM, {
        dataKey: t.dataKey,
        stroke: t.stroke,
        strokeWidth: t.strokeWidth,
        fill: t.fill,
        name: t.name,
        hide: t.hide,
        unit: t.unit,
        formatter: t.formatter,
        tooltipType: t.tooltipType,
        id: e,
      }),
      O.createElement(Ok, {
        type: `bar`,
        id: e,
        data: void 0,
        xAxisId: t.xAxisId,
        yAxisId: t.yAxisId,
        zAxisId: 0,
        dataKey: t.dataKey,
        stackId: n,
        hide: t.hide,
        barSize: t.barSize,
        minPointSize: t.minPointSize,
        maxBarSize: t.maxBarSize,
        isPanorama: r,
        hasCustomShape: t.shape != null && t.shape !== $j,
      }),
      O.createElement(
        fT,
        { zIndex: t.zIndex },
        O.createElement(QM, jM({}, t, { id: e })),
      ),
    ),
  );
}
var tN = O.memo(eN, Rl);
tN.displayName = `Bar`;
var nN = [`domain`, `range`],
  rN = [`domain`, `range`];
function iN(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = aN(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function aN(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function oN(e, t) {
  return e === t
    ? !0
    : Array.isArray(e) && e.length === 2 && Array.isArray(t) && t.length === 2
      ? e[0] === t[0] && e[1] === t[1]
      : !1;
}
function sN(e, t) {
  if (e === t) return !0;
  var n = e.domain,
    r = e.range,
    i = iN(e, nN),
    a = t.domain,
    o = t.range,
    s = iN(t, rN);
  return !oN(n, a) || !oN(r, o) ? !1 : Rl(i, s);
}
var cN = [`type`],
  lN = [`dangerouslySetInnerHTML`, `ticks`, `scale`],
  uN = [`id`, `scale`];
function dN() {
  return (
    (dN = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    dN.apply(null, arguments)
  );
}
function fN(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function pN(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? fN(Object(n), !0).forEach(function (t) {
          mN(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : fN(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function mN(e, t, n) {
  return (
    (t = hN(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function hN(e) {
  var t = gN(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function gN(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function _N(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = vN(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function vN(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function yN(e) {
  var t = L(),
    n = (0, O.useRef)(null),
    r = cl(),
    i = e.type,
    a = _N(e, cN),
    o = fm(r, `xAxis`, i),
    s = (0, O.useMemo)(() => {
      if (o != null) return pN(pN({}, a), {}, { type: o });
    }, [a, o]);
  return (
    (0, O.useLayoutEffect)(() => {
      s != null &&
        (n.current === null
          ? t(Ik(s))
          : n.current !== s && t(Lk({ prev: n.current, next: s })),
        (n.current = s));
    }, [s, t]),
    (0, O.useLayoutEffect)(
      () => () => {
        n.current &&= (t(Rk(n.current)), null);
      },
      [t],
    ),
    null
  );
}
var bN = (t) => {
    var n = t.xAxisId,
      r = t.className,
      i = R(gc),
      a = vc(),
      o = `xAxis`,
      s = R((e) => RS(e, o, n, a)),
      c = R((e) => DS(e, n)),
      l = R((e) => MS(e, n)),
      u = R((e) => zb(e, n));
    if (c == null || l == null || u == null) return null;
    (t.dangerouslySetInnerHTML, t.ticks, t.scale);
    var d = _N(t, lN);
    (u.id, u.scale);
    var f = _N(u, uN);
    return O.createElement(
      pj,
      dN({}, d, f, {
        x: l.x,
        y: l.y,
        width: c.width,
        height: c.height,
        className: e(`recharts-${o} ${o}`, r),
        viewBox: i,
        ticks: s,
        axisType: o,
        axisId: n,
      }),
    );
  },
  xN = {
    allowDataOverflow: Y.allowDataOverflow,
    allowDecimals: Y.allowDecimals,
    allowDuplicatedCategory: Y.allowDuplicatedCategory,
    angle: Y.angle,
    axisLine: ij.axisLine,
    height: Y.height,
    hide: !1,
    includeHidden: Y.includeHidden,
    interval: Y.interval,
    label: !1,
    minTickGap: Y.minTickGap,
    mirror: Y.mirror,
    orientation: Y.orientation,
    padding: Y.padding,
    reversed: Y.reversed,
    scale: Y.scale,
    tick: Y.tick,
    tickCount: Y.tickCount,
    tickLine: ij.tickLine,
    tickSize: ij.tickSize,
    type: Y.type,
    niceTicks: Y.niceTicks,
    xAxisId: 0,
  },
  SN = O.memo((e) => {
    var t = An(e, xN);
    return O.createElement(
      O.Fragment,
      null,
      O.createElement(yN, {
        allowDataOverflow: t.allowDataOverflow,
        allowDecimals: t.allowDecimals,
        allowDuplicatedCategory: t.allowDuplicatedCategory,
        angle: t.angle,
        dataKey: t.dataKey,
        domain: t.domain,
        height: t.height,
        hide: t.hide,
        id: t.xAxisId,
        includeHidden: t.includeHidden,
        interval: t.interval,
        minTickGap: t.minTickGap,
        mirror: t.mirror,
        name: t.name,
        orientation: t.orientation,
        padding: t.padding,
        reversed: t.reversed,
        scale: t.scale,
        tick: t.tick,
        tickCount: t.tickCount,
        tickFormatter: t.tickFormatter,
        ticks: t.ticks,
        type: t.type,
        unit: t.unit,
        niceTicks: t.niceTicks,
      }),
      O.createElement(bN, t),
    );
  }, sN);
SN.displayName = `XAxis`;
var CN = T([(e, t) => t, W, Om, Im, nw, iw, Iw, U], Jw);
function wN(e) {
  return (
    `getBBox` in e.currentTarget && typeof e.currentTarget.getBBox == `function`
  );
}
function TN(e) {
  var t = e.currentTarget.getBoundingClientRect(),
    n,
    r;
  if (wN(e)) {
    var i = e.currentTarget.getBBox();
    ((n = i.width > 0 ? t.width / i.width : 1),
      (r = i.height > 0 ? t.height / i.height : 1));
  } else {
    var a = e.currentTarget;
    ((n = a.offsetWidth > 0 ? t.width / a.offsetWidth : 1),
      (r = a.offsetHeight > 0 ? t.height / a.offsetHeight : 1));
  }
  var o = (e, i) => ({
    relativeX: Math.round((e - t.left) / n),
    relativeY: Math.round((i - t.top) / r),
  });
  return `touches` in e
    ? Array.from(e.touches).map((e) => o(e.clientX, e.clientY))
    : o(e.clientX, e.clientY);
}
var EN = co(`mouseClick`),
  DN = gs();
DN.startListening({
  actionCreator: EN,
  effect: (e, t) => {
    var n = e.payload,
      r = CN(t.getState(), TN(n));
    r?.activeIndex != null &&
      t.dispatch(
        sC({
          activeIndex: r.activeIndex,
          activeDataKey: void 0,
          activeCoordinate: r.activeCoordinate,
        }),
      );
  },
});
var ON = co(`mouseMove`),
  kN = gs(),
  AN = null,
  jN = null,
  MN = null;
kN.startListening({
  actionCreator: ON,
  effect: (e, t) => {
    var n = e.payload,
      r = t.getState().eventSettings,
      i = r.throttleDelay,
      a = r.throttledEvents,
      o = a === `all` || a?.includes(`mousemove`);
    (AN !== null && (cancelAnimationFrame(AN), (AN = null)),
      jN !== null &&
        (typeof i != `number` || !o) &&
        (clearTimeout(jN), (jN = null)),
      (MN = TN(n)));
    var s = () => {
      var e = t.getState(),
        n = GS(e, e.tooltip.settings.shared);
      if (!MN) {
        ((AN = null), (jN = null));
        return;
      }
      if (n === `axis`) {
        var r = CN(e, MN);
        r?.activeIndex == null
          ? t.dispatch(iC())
          : t.dispatch(
              oC({
                activeIndex: r.activeIndex,
                activeDataKey: void 0,
                activeCoordinate: r.activeCoordinate,
              }),
            );
      }
      ((AN = null), (jN = null));
    };
    if (!o) {
      s();
      return;
    }
    i === `raf`
      ? (AN = requestAnimationFrame(s))
      : typeof i == `number` && jN === null && (jN = setTimeout(s, i));
  },
});
function NN(e, t) {
  return t instanceof HTMLElement
    ? `HTMLElement <${t.tagName} class="${t.className}">`
    : t === window
      ? `global.window`
      : e === `children` && typeof t == `object` && t
        ? `<<CHILDREN>>`
        : t;
}
var PN = {
    accessibilityLayer: !0,
    barCategoryGap: `10%`,
    barGap: 4,
    barSize: void 0,
    className: void 0,
    maxBarSize: void 0,
    stackOffset: `none`,
    syncId: void 0,
    syncMethod: `index`,
    baseValue: void 0,
    reverseStackOrder: !1,
  },
  FN = Ao({
    name: `rootProps`,
    initialState: PN,
    reducers: {
      updateOptions: (e, t) => {
        ((e.accessibilityLayer = t.payload.accessibilityLayer),
          (e.barCategoryGap = t.payload.barCategoryGap),
          (e.barGap = t.payload.barGap ?? PN.barGap),
          (e.barSize = t.payload.barSize),
          (e.maxBarSize = t.payload.maxBarSize),
          (e.stackOffset = t.payload.stackOffset),
          (e.syncId = t.payload.syncId),
          (e.syncMethod = t.payload.syncMethod),
          (e.className = t.payload.className),
          (e.baseValue = t.payload.baseValue),
          (e.reverseStackOrder = t.payload.reverseStackOrder));
      },
    },
  }),
  IN = FN.reducer,
  LN = FN.actions.updateOptions,
  RN = Ao({
    name: `polarOptions`,
    initialState: null,
    reducers: {
      updatePolarOptions: (e, t) =>
        e === null
          ? t.payload
          : ((e.startAngle = t.payload.startAngle),
            (e.endAngle = t.payload.endAngle),
            (e.cx = t.payload.cx),
            (e.cy = t.payload.cy),
            (e.innerRadius = t.payload.innerRadius),
            (e.outerRadius = t.payload.outerRadius),
            e),
    },
  });
RN.actions.updatePolarOptions;
var zN = RN.reducer,
  BN = co(`keyDown`),
  VN = co(`focus`),
  HN = co(`blur`),
  UN = gs(),
  WN = null,
  GN = null,
  KN = null;
(UN.startListening({
  actionCreator: BN,
  effect: (e, t) => {
    ((KN = e.payload), WN !== null && (cancelAnimationFrame(WN), (WN = null)));
    var n = t.getState().eventSettings,
      r = n.throttleDelay,
      i = n.throttledEvents,
      a = i === `all` || i.includes(`keydown`);
    GN !== null &&
      (typeof r != `number` || !a) &&
      (clearTimeout(GN), (GN = null));
    var o = () => {
      try {
        var e = t.getState();
        if (e.rootProps.accessibilityLayer === !1) return;
        var n = e.tooltip.keyboardInteraction,
          r = KN;
        if (r !== `ArrowRight` && r !== `ArrowLeft` && r !== `Enter`) return;
        var i = SC(n, WC(e), yx(e), $C(e)),
          a = i == null ? -1 : Number(i),
          o = !Number.isFinite(a) || a < 0,
          s = iw(e),
          c = WC(e),
          l = GS(e, e.tooltip.settings.shared);
        if (r === `Enter`) {
          if (o) return;
          var u = Vw(e, l, `hover`, String(n.index));
          t.dispatch(
            lC({
              active: !n.active,
              activeIndex: n.index,
              activeCoordinate: u,
            }),
          );
          return;
        }
        var d = VS(e) === `left-to-right` ? 1 : -1,
          f = r === `ArrowRight` ? 1 : -1,
          p;
        if (o) {
          var m = yx(e),
            h = $C(e),
            g = f * d,
            _ = (e) => ({
              active: !1,
              index: String(e),
              dataKey: void 0,
              graphicalItemId: void 0,
              coordinate: void 0,
            });
          if (((p = -1), g > 0)) {
            for (var v = 0; v < c.length; v++)
              if (SC(_(v), c, m, h) != null) {
                p = v;
                break;
              }
          } else
            for (var y = c.length - 1; y >= 0; y--)
              if (SC(_(y), c, m, h) != null) {
                p = y;
                break;
              }
          if (p < 0) return;
        } else {
          p = a + f * d;
          var b = s?.length || c.length;
          if (b === 0 || p >= b || p < 0) return;
        }
        var x = Vw(e, l, `hover`, String(p));
        t.dispatch(
          lC({ active: !0, activeIndex: p.toString(), activeCoordinate: x }),
        );
      } finally {
        ((WN = null), (GN = null));
      }
    };
    if (!a) {
      o();
      return;
    }
    r === `raf`
      ? (WN = requestAnimationFrame(o))
      : typeof r == `number` &&
        GN === null &&
        (o(),
        (KN = null),
        (GN = setTimeout(() => {
          KN ? o() : ((GN = null), (WN = null));
        }, r)));
  },
}),
  UN.startListening({
    actionCreator: VN,
    effect: (e, t) => {
      var n = t.getState();
      if (n.rootProps.accessibilityLayer !== !1) {
        var r = n.tooltip.keyboardInteraction;
        if (!r.active && r.index == null) {
          var i = `0`,
            a = Vw(n, GS(n, n.tooltip.settings.shared), `hover`, String(i));
          t.dispatch(lC({ active: !0, activeIndex: i, activeCoordinate: a }));
        }
      }
    },
  }),
  UN.startListening({
    actionCreator: HN,
    effect: (e, t) => {
      var n = t.getState();
      if (n.rootProps.accessibilityLayer !== !1) {
        var r = n.tooltip.keyboardInteraction;
        r.active &&
          t.dispatch(
            lC({
              active: !1,
              activeIndex: r.index,
              activeCoordinate: r.coordinate,
            }),
          );
      }
    },
  }));
function qN(e) {
  e.persist();
  var t = e.currentTarget;
  return new Proxy(e, {
    get: (e, n) => {
      if (n === `currentTarget`) return t;
      var r = Reflect.get(e, n);
      return typeof r == `function` ? r.bind(e) : r;
    },
  });
}
var JN = co(`externalEvent`),
  YN = gs(),
  XN = new Map(),
  ZN = new Map(),
  QN = new Map();
YN.startListening({
  actionCreator: JN,
  effect: (e, t) => {
    var n = e.payload,
      r = n.handler,
      i = n.reactEvent;
    if (r != null) {
      var a = i.type,
        o = qN(i);
      QN.set(a, { handler: r, reactEvent: o });
      var s = XN.get(a);
      s !== void 0 && (cancelAnimationFrame(s), XN.delete(a));
      var c = t.getState().eventSettings,
        l = c.throttleDelay,
        u = c.throttledEvents,
        d = u === `all` || u?.includes(a),
        f = ZN.get(a);
      f !== void 0 &&
        (typeof l != `number` || !d) &&
        (clearTimeout(f), ZN.delete(a));
      var p = () => {
        var e = QN.get(a);
        try {
          if (!e) return;
          var n = e.handler,
            r = e.reactEvent,
            i = t.getState(),
            o = {
              activeCoordinate: mw(i),
              activeDataKey: dw(i),
              activeIndex: lw(i),
              activeLabel: uw(i),
              activeTooltipIndex: lw(i),
              isTooltipActive: hw(i),
            };
          n && n(o, r);
        } finally {
          (XN.delete(a), ZN.delete(a), QN.delete(a));
        }
      };
      if (!d) {
        p();
        return;
      }
      if (l === `raf`) {
        var m = requestAnimationFrame(p);
        XN.set(a, m);
      } else if (typeof l == `number`) {
        if (!ZN.has(a)) {
          p();
          var h = setTimeout(p, l);
          ZN.set(a, h);
        }
      } else p();
    }
  },
});
var $N = T(
    [T([EC], (e) => e.tooltipItemPayloads), (e, t) => t, (e, t, n) => n],
    (e, t, n) => {
      if (t != null) {
        var r = e.find((e) => e.settings.graphicalItemId === n);
        if (r != null) {
          var i = r.getPosition;
          if (i != null) return i(t);
        }
      }
    },
  ),
  eP = co(`touchMove`),
  tP = gs(),
  nP = null,
  rP = null,
  iP = null,
  aP = null;
tP.startListening({
  actionCreator: eP,
  effect: (e, t) => {
    var n = e.payload;
    if (!(n.touches == null || n.touches.length === 0)) {
      aP = qN(n);
      var r = t.getState().eventSettings,
        i = r.throttleDelay,
        a = r.throttledEvents,
        o = a === `all` || a.includes(`touchmove`);
      (nP !== null && (cancelAnimationFrame(nP), (nP = null)),
        rP !== null &&
          (typeof i != `number` || !o) &&
          (clearTimeout(rP), (rP = null)),
        (iP = Array.from(n.touches).map((e) =>
          TN({
            clientX: e.clientX,
            clientY: e.clientY,
            currentTarget: n.currentTarget,
          }),
        )));
      var s = () => {
        if (aP != null) {
          var e = t.getState(),
            n = GS(e, e.tooltip.settings.shared);
          if (n === `axis`) {
            var r = iP?.[0];
            if (r == null) {
              ((nP = null), (rP = null));
              return;
            }
            var i = CN(e, r);
            i?.activeIndex != null &&
              t.dispatch(
                oC({
                  activeIndex: i.activeIndex,
                  activeDataKey: void 0,
                  activeCoordinate: i.activeCoordinate,
                }),
              );
          } else if (n === `item`) {
            var a = aP.touches[0];
            if (document.elementFromPoint == null || a == null) return;
            var o = document.elementFromPoint(a.clientX, a.clientY);
            if (!o || !o.getAttribute) return;
            var s = o.getAttribute(ic),
              c = o.getAttribute(`data-recharts-item-id`) ?? void 0,
              l = BC(e).find((e) => e.id === c);
            if (s == null || l == null || c == null) return;
            var u = l.dataKey,
              d = $N(e, s, c);
            t.dispatch(
              nC({
                activeDataKey: u,
                activeIndex: s,
                activeCoordinate: d,
                activeGraphicalItemId: c,
              }),
            );
          }
          ((nP = null), (rP = null));
        }
      };
      if (!o) {
        s();
        return;
      }
      i === `raf`
        ? (nP = requestAnimationFrame(s))
        : typeof i == `number` &&
          rP === null &&
          (s(),
          (aP = null),
          (rP = setTimeout(() => {
            aP ? s() : ((rP = null), (nP = null));
          }, i)));
    }
  },
});
var oP = {
    throttleDelay: `raf`,
    throttledEvents: [
      `mousemove`,
      `touchmove`,
      `pointermove`,
      `scroll`,
      `wheel`,
    ],
  },
  sP = Ao({
    name: `eventSettings`,
    initialState: oP,
    reducers: {
      setEventSettings: (e, t) => {
        (t.payload.throttleDelay != null &&
          (e.throttleDelay = t.payload.throttleDelay),
          t.payload.throttledEvents != null &&
            (e.throttledEvents = z(t.payload.throttledEvents)));
      },
    },
  }),
  cP = sP.actions.setEventSettings,
  lP = sP.reducer,
  uP = Ni({
    brush: lA,
    cartesianAxis: zk,
    chartData: LT,
    errorBars: Rj,
    eventSettings: lP,
    graphicalItems: Dk,
    layout: ws,
    legend: yl,
    options: AT,
    polarAxis: yO,
    polarOptions: zN,
    referenceElements: mA,
    renderedTicks: UA,
    rootProps: IN,
    tooltip: uC,
    zIndex: dT,
  }),
  dP = function (e) {
    var t =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : `Chart`;
    return bo({
      reducer: uP,
      preloadedState: e,
      middleware: (e) =>
        e({
          serializableCheck: !1,
          immutableCheck: ![`commonjs`, `es6`, `production`].includes(`es6`),
        }).concat([
          DN.middleware,
          kN.middleware,
          UN.middleware,
          YN.middleware,
          tP.middleware,
        ]),
      enhancers: (e) => {
        var t = e;
        return (
          typeof e == `function` && (t = e()),
          t.concat(vo({ type: `raf` }))
        );
      },
      devTools: Mu.devToolsEnabled && {
        serialize: { replacer: NN },
        name: `recharts-${t}`,
      },
    });
  };
function fP(e) {
  var t = e.preloadedState,
    n = e.children,
    r = e.reduxStoreName,
    i = vc(),
    a = (0, O.useRef)(null);
  if (i) return n;
  a.current ??= dP(t, r);
  var o = Xr;
  return O.createElement(Fl, { context: o, store: a.current }, n);
}
function pP(e) {
  var t = e.layout,
    n = e.margin,
    r = L(),
    i = vc();
  return (
    (0, O.useEffect)(() => {
      i || (r(xs(t)), r(bs(n)));
    }, [r, i, t, n]),
    null
  );
}
var mP = (0, O.memo)(pP, Rl);
function hP(e) {
  var t = L();
  return (
    (0, O.useEffect)(() => {
      t(LN(e));
    }, [t, e]),
    null
  );
}
var gP = (0, O.memo)((e) => {
  var t = L();
  return (
    (0, O.useEffect)(() => {
      t(cP(e));
    }, [t, e]),
    null
  );
}, Rl);
function _P(e) {
  var t = e.zIndex,
    n = e.isPanorama,
    r = (0, O.useRef)(null),
    i = L();
  return (
    (0, O.useLayoutEffect)(
      () => (
        r.current && i(lT({ zIndex: t, element: r.current, isPanorama: n })),
        () => {
          i(uT({ zIndex: t, isPanorama: n }));
        }
      ),
      [i, t, n],
    ),
    O.createElement(`g`, {
      tabIndex: -1,
      ref: r,
      className: `recharts-zIndex-layer_${t}`,
    })
  );
}
function vP(e) {
  var t = e.children,
    n = e.isPanorama,
    r = R(Xw);
  if (!r || r.length === 0) return t;
  var i = r.filter((e) => e < 0),
    a = r.filter((e) => e > 0);
  return O.createElement(
    O.Fragment,
    null,
    i.map((e) => O.createElement(_P, { key: e, zIndex: e, isPanorama: n })),
    t,
    a.map((e) => O.createElement(_P, { key: e, zIndex: e, isPanorama: n })),
  );
}
var yP = [`children`];
function bP(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = xP(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function xP(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function SP() {
  return (
    (SP = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    SP.apply(null, arguments)
  );
}
var CP = { width: `100%`, height: `100%`, display: `block` },
  wP = (0, O.forwardRef)((e, t) => {
    var n = il(),
      r = al(),
      i = ed();
    if (!Es(n) || !Es(r)) return null;
    var a = e.children,
      o = e.otherAttributes,
      s = e.title,
      c = e.desc,
      l,
      u;
    return (
      o != null &&
        ((l = typeof o.tabIndex == `number` ? o.tabIndex : i ? 0 : void 0),
        (u = typeof o.role == `string` ? o.role : i ? `application` : void 0)),
      O.createElement(
        ae,
        SP({}, o, {
          title: s,
          desc: c,
          role: u,
          tabIndex: l,
          width: n,
          height: r,
          style: CP,
          ref: t,
        }),
        a,
      )
    );
  }),
  TP = (e) => {
    var t = e.children,
      n = R(bc);
    if (!n) return null;
    var r = n.width,
      i = n.height,
      a = n.y,
      o = n.x;
    return O.createElement(ae, { width: r, height: i, x: o, y: a }, t);
  },
  EP = (0, O.forwardRef)((e, t) => {
    var n = e.children,
      r = bP(e, yP);
    return vc()
      ? O.createElement(TP, null, O.createElement(vP, { isPanorama: !0 }, n))
      : O.createElement(
          wP,
          SP({ ref: t }, r),
          O.createElement(vP, { isPanorama: !1 }, n),
        );
  });
function DP(e, t) {
  return MP(e) || jP(e, t) || kP(e, t) || OP();
}
function OP() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function kP(e, t) {
  if (e) {
    if (typeof e == `string`) return AP(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? AP(e, t)
          : void 0
    );
  }
}
function AP(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function jP(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n != null) {
    var r,
      i,
      a,
      o,
      s = [],
      c = !0,
      l = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        c = !1;
      } else
        for (
          ;
          !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t);
          c = !0
        );
    } catch (e) {
      ((l = !0), (i = e));
    } finally {
      try {
        if (!c && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return s;
  }
}
function MP(e) {
  if (Array.isArray(e)) return e;
}
function NP() {
  var e = L(),
    t = DP((0, O.useState)(null), 2),
    n = t[0],
    r = t[1],
    i = R(ec);
  return (
    (0, O.useEffect)(() => {
      if (n != null) {
        var t = n.getBoundingClientRect().width / n.offsetWidth;
        V(t) && t !== i && e(Cs(t));
      }
    }, [n, e, i]),
    r
  );
}
function PP(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function FP(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? PP(Object(n), !0).forEach(function (t) {
          IP(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : PP(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function IP(e, t, n) {
  return (
    (t = LP(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function LP(e) {
  var t = RP(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function RP(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function zP() {
  return (
    (zP = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    zP.apply(null, arguments)
  );
}
function BP(e, t) {
  return GP(e) || WP(e, t) || HP(e, t) || VP();
}
function VP() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function HP(e, t) {
  if (e) {
    if (typeof e == `string`) return UP(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? UP(e, t)
          : void 0
    );
  }
}
function UP(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function WP(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n != null) {
    var r,
      i,
      a,
      o,
      s = [],
      c = !0,
      l = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        c = !1;
      } else
        for (
          ;
          !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t);
          c = !0
        );
    } catch (e) {
      ((l = !0), (i = e));
    } finally {
      try {
        if (!c && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return s;
  }
}
function GP(e) {
  if (Array.isArray(e)) return e;
}
var KP = () => (JT(), null);
function qP(e) {
  if (typeof e == `number`) return e;
  if (typeof e == `string`) {
    var t = parseFloat(e);
    if (!Number.isNaN(t)) return t;
  }
  return 0;
}
var JP = (0, O.forwardRef)((e, t) => {
    var n = (0, O.useRef)(null),
      r = BP(
        (0, O.useState)({
          containerWidth: qP(e.style?.width),
          containerHeight: qP(e.style?.height),
        }),
        2,
      ),
      i = r[0],
      a = r[1],
      o = (0, O.useCallback)((e, t) => {
        a((n) => {
          var r = Math.round(e),
            i = Math.round(t);
          return n.containerWidth === r && n.containerHeight === i
            ? n
            : { containerWidth: r, containerHeight: i };
        });
      }, []),
      s = (0, O.useCallback)(
        (e) => {
          if (
            (typeof t == `function` && t(e),
            n.current != null && (n.current.disconnect(), (n.current = null)),
            e != null && typeof ResizeObserver < `u`)
          ) {
            var r = e.getBoundingClientRect(),
              i = r.width,
              a = r.height;
            o(i, a);
            var s = new ResizeObserver((e) => {
              var t = e[0];
              if (t != null) {
                var n = t.contentRect,
                  r = n.width,
                  i = n.height;
                o(r, i);
              }
            });
            (s.observe(e), (n.current = s));
          }
        },
        [t, o],
      );
    return (
      (0, O.useEffect)(
        () => () => {
          n.current?.disconnect();
        },
        [o],
      ),
      O.createElement(
        O.Fragment,
        null,
        O.createElement(dl, {
          width: i.containerWidth,
          height: i.containerHeight,
        }),
        O.createElement(`div`, zP({ ref: s }, e)),
      )
    );
  }),
  YP = (0, O.forwardRef)((e, t) => {
    var n = e.width,
      r = e.height,
      i = BP(
        (0, O.useState)({ containerWidth: qP(n), containerHeight: qP(r) }),
        2,
      ),
      a = i[0],
      o = i[1],
      s = (0, O.useCallback)((e, t) => {
        o((n) => {
          var r = Math.round(e),
            i = Math.round(t);
          return n.containerWidth === r && n.containerHeight === i
            ? n
            : { containerWidth: r, containerHeight: i };
        });
      }, []),
      c = (0, O.useCallback)(
        (e) => {
          if ((typeof t == `function` && t(e), e != null)) {
            var n = e.getBoundingClientRect(),
              r = n.width,
              i = n.height;
            s(r, i);
          }
        },
        [t, s],
      );
    return O.createElement(
      O.Fragment,
      null,
      O.createElement(dl, {
        width: a.containerWidth,
        height: a.containerHeight,
      }),
      O.createElement(`div`, zP({ ref: c }, e)),
    );
  }),
  XP = (0, O.forwardRef)((e, t) => {
    var n = e.width,
      r = e.height;
    return O.createElement(
      O.Fragment,
      null,
      O.createElement(dl, { width: n, height: r }),
      O.createElement(`div`, zP({ ref: t }, e)),
    );
  }),
  ZP = (0, O.forwardRef)((e, t) => {
    var n = e.width,
      r = e.height;
    return typeof n == `string` || typeof r == `string`
      ? O.createElement(YP, zP({}, e, { ref: t }))
      : typeof n == `number` && typeof r == `number`
        ? O.createElement(XP, zP({}, e, { width: n, height: r, ref: t }))
        : O.createElement(
            O.Fragment,
            null,
            O.createElement(dl, { width: n, height: r }),
            O.createElement(`div`, zP({ ref: t }, e)),
          );
  });
function QP(e) {
  return e ? JP : ZP;
}
var $P = (0, O.forwardRef)((t, n) => {
    var r = t.children,
      i = t.className,
      a = t.height,
      o = t.onClick,
      s = t.onContextMenu,
      c = t.onDoubleClick,
      l = t.onMouseDown,
      u = t.onMouseEnter,
      d = t.onMouseLeave,
      f = t.onMouseMove,
      p = t.onMouseUp,
      m = t.onTouchEnd,
      h = t.onTouchMove,
      g = t.onTouchStart,
      _ = t.style,
      v = t.width,
      y = t.responsive,
      b = t.dispatchTouchEvents,
      x = b === void 0 ? !0 : b,
      S = (0, O.useRef)(null),
      C = L(),
      w = BP((0, O.useState)(null), 2),
      T = w[0],
      E = w[1],
      D = BP((0, O.useState)(null), 2),
      k = D[0],
      A = D[1],
      j = NP(),
      M = Zc(),
      N = M?.width > 0 ? M.width : v,
      ee = M?.height > 0 ? M.height : a,
      te = (0, O.useCallback)(
        (e) => {
          (j(e),
            typeof n == `function` && n(e),
            E(e),
            A(e),
            e != null && (S.current = e));
        },
        [j, n, E, A],
      ),
      ne = (0, O.useCallback)(
        (e) => {
          (C(EN(e)), C(JN({ handler: o, reactEvent: e })));
        },
        [C, o],
      ),
      re = (0, O.useCallback)(
        (e) => {
          (C(ON(e)), C(JN({ handler: u, reactEvent: e })));
        },
        [C, u],
      ),
      ie = (0, O.useCallback)(
        (e) => {
          (C(iC()), C(JN({ handler: d, reactEvent: e })));
        },
        [C, d],
      ),
      ae = (0, O.useCallback)(
        (e) => {
          (C(ON(e)), C(JN({ handler: f, reactEvent: e })));
        },
        [C, f],
      ),
      oe = (0, O.useCallback)(() => {
        C(VN());
      }, [C]),
      se = (0, O.useCallback)(() => {
        C(HN());
      }, [C]),
      ce = (0, O.useCallback)(
        (e) => {
          C(BN(e.key));
        },
        [C],
      ),
      le = (0, O.useCallback)(
        (e) => {
          C(JN({ handler: s, reactEvent: e }));
        },
        [C, s],
      ),
      ue = (0, O.useCallback)(
        (e) => {
          C(JN({ handler: c, reactEvent: e }));
        },
        [C, c],
      ),
      fe = (0, O.useCallback)(
        (e) => {
          C(JN({ handler: l, reactEvent: e }));
        },
        [C, l],
      ),
      P = (0, O.useCallback)(
        (e) => {
          C(JN({ handler: p, reactEvent: e }));
        },
        [C, p],
      ),
      pe = (0, O.useCallback)(
        (e) => {
          C(JN({ handler: g, reactEvent: e }));
        },
        [C, g],
      ),
      me = (0, O.useCallback)(
        (e) => {
          (x && C(eP(e)), C(JN({ handler: h, reactEvent: e })));
        },
        [C, x, h],
      ),
      he = (0, O.useCallback)(
        (e) => {
          C(JN({ handler: m, reactEvent: e }));
        },
        [C, m],
      ),
      ge = QP(y);
    return O.createElement(
      ST.Provider,
      { value: T },
      O.createElement(
        de.Provider,
        { value: k },
        O.createElement(
          ge,
          {
            width: N ?? _?.width,
            height: ee ?? _?.height,
            className: e(`recharts-wrapper`, i),
            style: FP(
              { position: `relative`, cursor: `default`, width: N, height: ee },
              _,
            ),
            onClick: ne,
            onContextMenu: le,
            onDoubleClick: ue,
            onFocus: oe,
            onBlur: se,
            onKeyDown: ce,
            onMouseDown: fe,
            onMouseEnter: re,
            onMouseLeave: ie,
            onMouseMove: ae,
            onMouseUp: P,
            onTouchEnd: he,
            onTouchMove: me,
            onTouchStart: pe,
            ref: te,
          },
          O.createElement(KP, null),
          r,
        ),
      ),
    );
  }),
  eF = [
    `width`,
    `height`,
    `responsive`,
    `children`,
    `className`,
    `style`,
    `compact`,
    `title`,
    `desc`,
  ];
function tF(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = nF(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function nF(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var rF = (0, O.forwardRef)((e, t) => {
  var n = e.width,
    r = e.height,
    i = e.responsive,
    a = e.children,
    o = e.className,
    s = e.style,
    c = e.compact,
    l = e.title,
    u = e.desc,
    d = M(tF(e, eF));
  return c
    ? O.createElement(
        O.Fragment,
        null,
        O.createElement(dl, { width: n, height: r }),
        O.createElement(EP, { otherAttributes: d, title: l, desc: u }, a),
      )
    : O.createElement(
        $P,
        {
          className: o,
          style: s,
          width: n,
          height: r,
          responsive: i ?? !1,
          onClick: e.onClick,
          onMouseLeave: e.onMouseLeave,
          onMouseEnter: e.onMouseEnter,
          onMouseMove: e.onMouseMove,
          onMouseDown: e.onMouseDown,
          onMouseUp: e.onMouseUp,
          onContextMenu: e.onContextMenu,
          onDoubleClick: e.onDoubleClick,
          onTouchStart: e.onTouchStart,
          onTouchMove: e.onTouchMove,
          onTouchEnd: e.onTouchEnd,
        },
        O.createElement(
          EP,
          { otherAttributes: d, title: l, desc: u, ref: t },
          O.createElement(SA, null, a),
        ),
      );
});
function iF() {
  return (
    (iF = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    iF.apply(null, arguments)
  );
}
function aF(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function oF(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? aF(Object(n), !0).forEach(function (t) {
          sF(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : aF(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function sF(e, t, n) {
  return (
    (t = cF(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function cF(e) {
  var t = lF(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function lF(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var uF = oF(
    {
      accessibilityLayer: !0,
      barCategoryGap: `10%`,
      barGap: 4,
      layout: `horizontal`,
      margin: { top: 5, right: 5, bottom: 5, left: 5 },
      responsive: !1,
      reverseStackOrder: !1,
      stackOffset: `none`,
      syncMethod: `index`,
    },
    oP,
  ),
  dF = (0, O.forwardRef)(function (e, t) {
    var n = An(e.categoricalChartProps, uF),
      r = e.chartName,
      i = e.defaultTooltipEventType,
      a = e.validateTooltipEventTypes,
      o = e.tooltipPayloadSearcher,
      s = e.categoricalChartProps,
      c = {
        chartName: r,
        defaultTooltipEventType: i,
        validateTooltipEventTypes: a,
        tooltipPayloadSearcher: o,
        eventEmitter: void 0,
      };
    return O.createElement(
      fP,
      { preloadedState: { options: c }, reduxStoreName: s.id ?? r },
      O.createElement(oA, { chartData: s.data }),
      O.createElement(mP, { layout: n.layout, margin: n.margin }),
      O.createElement(gP, {
        throttleDelay: n.throttleDelay,
        throttledEvents: n.throttledEvents,
      }),
      O.createElement(hP, {
        baseValue: n.baseValue,
        accessibilityLayer: n.accessibilityLayer,
        barCategoryGap: n.barCategoryGap,
        maxBarSize: n.maxBarSize,
        stackOffset: n.stackOffset,
        barGap: n.barGap,
        barSize: n.barSize,
        syncId: n.syncId,
        syncMethod: n.syncMethod,
        className: n.className,
        reverseStackOrder: n.reverseStackOrder,
      }),
      O.createElement(rF, iF({}, n, { ref: t })),
    );
  }),
  fF = [`axis`, `item`],
  pF = (0, O.forwardRef)((e, t) =>
    O.createElement(dF, {
      chartName: `BarChart`,
      defaultTooltipEventType: `axis`,
      validateTooltipEventTypes: fF,
      tooltipPayloadSearcher: OT,
      categoricalChartProps: e,
      ref: t,
    }),
  ),
  $ = t(),
  mF = { light: ``, dark: `.dark` },
  hF = { width: 320, height: 200 },
  gF = O.createContext(null);
function _F() {
  let e = O.useContext(gF);
  if (!e) throw Error(`useChart must be used within a <ChartContainer />`);
  return e;
}
function vF({
  id: e,
  className: t,
  children: n,
  config: r,
  initialDimension: i = hF,
  ...a
}) {
  let o = O.useId(),
    c = `chart-${e ?? o.replace(/:/g, ``)}`;
  return (0, $.jsx)(gF.Provider, {
    value: { config: r },
    children: (0, $.jsxs)(`div`, {
      "data-slot": `chart`,
      "data-chart": c,
      className: s(
        `group/chart @container/chart flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden`,
        t,
      ),
      ...a,
      children: [
        (0, $.jsx)(yF, { id: c, config: r }),
        (0, $.jsx)($c, { initialDimension: i, children: n }),
      ],
    }),
  });
}
var yF = ({ id: e, config: t }) => {
    let n = Object.entries(t).filter(([, e]) => e.theme ?? e.color);
    return n.length
      ? (0, $.jsx)(`style`, {
          dangerouslySetInnerHTML: {
            __html: Object.entries(mF).map(
              ([t, r]) => `
${r} [data-chart=${e}] {
${n.map(([e, n]) => {
  let r = n.theme?.[t] ?? n.color;
  return r ? `  --color-${e}: ${r};` : null;
}).join(`
`)}
}
`,
            ).join(`
`),
          },
        })
      : null;
  },
  bF = dE;
function xF({
  active: e,
  payload: t,
  className: n,
  indicator: r = `dot`,
  hideLabel: i = !1,
  hideIndicator: a = !1,
  label: o,
  labelFormatter: c,
  labelClassName: l,
  formatter: u,
  color: d,
  nameKey: f,
  labelKey: p,
}) {
  let { config: m } = _F(),
    h = O.useMemo(() => {
      if (i || !t?.length) return null;
      let [e] = t,
        n = `${p ?? e?.dataKey ?? e?.name ?? `value`}`,
        r = wF(m, e, n),
        a = !p && typeof o == `string` ? (m[o]?.label ?? o) : r?.label;
      return c
        ? (0, $.jsx)(`div`, {
            className: s(`font-medium`, l),
            children: c(a, t),
          })
        : a
          ? (0, $.jsx)(`div`, { className: s(`font-medium`, l), children: a })
          : null;
    }, [o, c, t, i, l, m, p]);
  if (!e || !t?.length) return null;
  let g = t.length === 1 && r !== `dot`;
  return (0, $.jsxs)(`div`, {
    className: s(
      `grid min-w-32 items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl`,
      n,
    ),
    children: [
      g ? null : h,
      (0, $.jsx)(`div`, {
        className: `grid gap-1.5`,
        children: t
          .filter((e) => e.type !== `none`)
          .map((e, t) => {
            let n = `${f ?? e.name ?? e.dataKey ?? `value`}`,
              i = wF(m, e, n),
              o = d ?? e.payload?.fill ?? e.color;
            return (0, $.jsx)(
              `div`,
              {
                className: s(
                  `flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground`,
                  r === `dot` && `items-center`,
                ),
                children:
                  u && e?.value !== void 0 && e.name
                    ? u(e.value, e.name, e, t, e.payload)
                    : (0, $.jsxs)($.Fragment, {
                        children: [
                          i?.icon
                            ? (0, $.jsx)(i.icon, {})
                            : !a &&
                              (0, $.jsx)(`div`, {
                                className: s(
                                  `shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)`,
                                  {
                                    "h-2.5 w-2.5": r === `dot`,
                                    "w-1": r === `line`,
                                    "w-0 border-[1.5px] border-dashed bg-transparent":
                                      r === `dashed`,
                                    "my-0.5": g && r === `dashed`,
                                  },
                                ),
                                style: { "--color-bg": o, "--color-border": o },
                              }),
                          (0, $.jsxs)(`div`, {
                            className: s(
                              `flex flex-1 justify-between leading-none`,
                              { "items-end": g, "items-center": !g },
                            ),
                            children: [
                              (0, $.jsxs)(`div`, {
                                className: `grid gap-1.5`,
                                children: [
                                  g ? h : null,
                                  (0, $.jsx)(`span`, {
                                    className: `text-muted-foreground`,
                                    children: i?.label ?? e.name,
                                  }),
                                ],
                              }),
                              e.value != null &&
                                (0, $.jsx)(`span`, {
                                  className: `font-mono font-medium text-foreground tabular-nums`,
                                  children:
                                    typeof e.value == `number`
                                      ? e.value.toLocaleString()
                                      : String(e.value),
                                }),
                            ],
                          }),
                        ],
                      }),
              },
              t,
            );
          }),
      }),
    ],
  });
}
var SF = lu;
function CF({
  className: e,
  hideIcon: t = !1,
  payload: n,
  verticalAlign: r = `bottom`,
  nameKey: i,
}) {
  let { config: a } = _F();
  return n?.length
    ? (0, $.jsx)(`div`, {
        className: s(
          `flex items-center justify-center gap-4`,
          { "pb-3": r === `top`, "pt-3": r !== `top` },
          e,
        ),
        children: n
          .filter((e) => e.type !== `none`)
          .map((e, n) => {
            let r = `${i ?? e.dataKey ?? `value`}`,
              o = wF(a, e, r);
            return (0, $.jsxs)(
              `div`,
              {
                className: s(
                  `flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground`,
                ),
                children: [
                  o?.icon && !t
                    ? (0, $.jsx)(o.icon, {})
                    : (0, $.jsx)(`div`, {
                        className: `h-2 w-2 shrink-0 rounded-[2px]`,
                        style: { backgroundColor: e.color },
                      }),
                  o?.label,
                ],
              },
              n,
            );
          }),
      })
    : null;
}
function wF(e, t, n) {
  if (typeof t != `object` || !t) return;
  let r =
      `payload` in t && typeof t.payload == `object` && t.payload !== null
        ? t.payload
        : void 0,
    i = n;
  return (
    n in t && typeof t[n] == `string`
      ? (i = t[n])
      : r && n in r && typeof r[n] == `string` && (i = r[n]),
    i in e ? e[i] : e[n]
  );
}
var TF = [
    { month: `January`, desktop: 186, mobile: 80 },
    { month: `February`, desktop: 305, mobile: 200 },
    { month: `March`, desktop: 237, mobile: 120 },
    { month: `April`, desktop: 73, mobile: 190 },
    { month: `May`, desktop: 209, mobile: 130 },
    { month: `June`, desktop: 214, mobile: 140 },
  ],
  EF = {
    desktop: { label: `Desktop`, color: `hsl(var(--chart-1))` },
    mobile: { label: `Mobile`, color: `hsl(var(--chart-2))` },
  };
function DF() {
  return (0, $.jsxs)(`div`, {
    className: `space-y-10`,
    children: [
      (0, $.jsx)(a, {
        title: `Chart`,
        description: `Biểu đồ đẹp và đáp ứng được xây dựng bằng Recharts.`,
      }),
      (0, $.jsx)(c, {
        label: `Bar Chart`,
        description: `Biểu đồ thanh đơn giản với chú giải công cụ và chú giải.`,
        children: (0, $.jsx)(vF, {
          config: EF,
          className: `min-h-[200px] w-full max-w-lg`,
          children: (0, $.jsxs)(pF, {
            accessibilityLayer: !0,
            data: TF,
            children: [
              (0, $.jsx)(Fj, { vertical: !1 }),
              (0, $.jsx)(SN, {
                dataKey: `month`,
                tickLine: !1,
                tickMargin: 10,
                axisLine: !1,
                tickFormatter: (e) => e.slice(0, 3),
              }),
              (0, $.jsx)(bF, { content: (0, $.jsx)(xF, {}) }),
              (0, $.jsx)(SF, { content: (0, $.jsx)(CF, {}) }),
              (0, $.jsx)(tN, {
                dataKey: `desktop`,
                fill: `var(--color-desktop)`,
                radius: 4,
              }),
              (0, $.jsx)(tN, {
                dataKey: `mobile`,
                fill: `var(--color-mobile)`,
                radius: 4,
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
export { DF as default };
