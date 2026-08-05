import { b as useRefWithInit, d as useIsoLayoutEffect, f as formatErrorMessage, h as useStableCallback, w as warn, u as useRenderElement, j as jsxRuntimeExports, l as isHTMLElement, g as getWindow, n as isElement, N as NOOP, m as mergeProps, e as useMergedRefs, c as cva, a as cn } from './utils-Boq2ewKh.js';
import { r as reactExports, b as requireReact, g as getDefaultExportFromCjs } from './index-DN3kw-fw.js';
import { f as fieldValidityMapping, k as keyboard, i as inputChange, c as useBaseUiId, u as useFormContext, a as useFieldRootContext, b as useLabelableContext, d as useControlled, e as useRegisterFieldControl, g as createChangeEventDetails, n as none, h as createGenericEventDetails, o as ownerDocument, j as drag, t as trackPress } from './createBaseUIEventDetails-CHsRwCdV.js';
import { u as useValueChanged, a as visuallyHidden } from './useValueChanged-BCnrh8Dv.js';
import { a as activeElement, e as contains, g as getTarget, m as matchesFocusVisible } from './utils-D8p5eZrR.js';
import { j as CompositeList, h as useDirection, C as COMPOSITE_KEYS, P as PAGE_UP, k as PAGE_DOWN, u as useCompositeListItem, g as HOME, E as END, a as ARROW_LEFT, c as ARROW_DOWN, b as ARROW_RIGHT, d as ARROW_UP } from './DirectionContext-BAzFkpam.js';
import { f as focusElementWithVisible, u as useLabel } from './useLabel-Kzfup0HB.js';
import { a as useAnimationFrame } from './useAnimationFrame-CQoe1Qb8.js';
import { u as useLabelableId } from './useLabelableId-I_W0ho2y.js';

'use client';

/**
 * Untracks the provided value by turning it into a ref to remove its reactivity.
 *
 * Used to access the passed value inside `React.useEffect` without causing the effect to re-run when the value changes.
 */
function useValueAsRef(value) {
  const latest = useRefWithInit(createLatestRef, value).current;
  latest.next = value;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useIsoLayoutEffect(latest.effect);
  return latest;
}
function createLatestRef(value) {
  const latest = {
    current: value,
    next: value,
    effect: () => {
      latest.current = latest.next;
    }
  };
  return latest;
}

function clamp(val, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
  return Math.max(min, Math.min(val, max));
}

function areArraysEqual(array1, array2, itemComparer = (a, b) => a === b) {
  return array1.length === array2.length && array1.every((value, index) => itemComparer(value, array2[index]));
}

'use client';

function getDefaultLabelId(id) {
  return id == null ? undefined : `${id}-label`;
}
function resolveAriaLabelledBy(fieldLabelId, localLabelId) {
  return fieldLabelId ?? localLabelId;
}

function asc(a, b) {
  return a - b;
}

function replaceArrayItemAtIndex(array, index, newValue) {
  const output = array.slice();
  output[index] = newValue;
  return output.sort(asc);
}

function getSliderValue(valueInput, index, min, max, range, values) {
  let newValue = valueInput;
  newValue = clamp(newValue, min, max);
  if (range) {
    newValue = replaceArrayItemAtIndex(values, index,
    // Bound the new value to the thumb's neighbours.
    clamp(newValue, values[index - 1] ?? -Infinity, values[index + 1] ?? Infinity));
  }
  return newValue;
}

function validateMinimumDistance(values, step, minStepsBetweenValues) {
  if (!Array.isArray(values)) {
    return true;
  }
  const distances = values.reduce((acc, val, index, vals) => {
    if (index === vals.length - 1) {
      return acc;
    }
    acc.push(Math.abs(val - vals[index + 1]));
    return acc;
  }, []);
  return Math.min(...distances) >= step * minStepsBetweenValues;
}

const sliderStateAttributesMapping = {
  activeThumbIndex: () => null,
  max: () => null,
  min: () => null,
  minStepsBetweenValues: () => null,
  step: () => null,
  values: () => null,
  ...fieldValidityMapping
};

"use client";
const SliderRootContext = /* @__PURE__ */ reactExports.createContext(void 0);
if (false) SliderRootContext.displayName = "SliderRootContext";
function useSliderRootContext() {
  const context = reactExports.useContext(SliderRootContext);
  if (context === void 0) {
    throw new Error(false ? "Base UI: SliderRootContext is missing. Slider parts must be placed within <Slider.Root>." : formatErrorMessage(62));
  }
  return context;
}

"use client";
function getSliderChangeEventReason(event) {
  return "key" in event ? keyboard : inputChange;
}
function areValuesEqual(newValue, oldValue) {
  if (typeof newValue === "number" && typeof oldValue === "number") {
    return newValue === oldValue;
  }
  if (Array.isArray(newValue) && Array.isArray(oldValue)) {
    return areArraysEqual(newValue, oldValue);
  }
  return false;
}
const SliderRoot = /* @__PURE__ */ reactExports.forwardRef(function SliderRoot2(componentProps, forwardedRef) {
  const {
    "aria-labelledby": ariaLabelledByProp,
    className,
    defaultValue,
    disabled: disabledProp = false,
    id: idProp,
    format,
    largeStep = 10,
    locale,
    render,
    max = 100,
    min = 0,
    minStepsBetweenValues = 0,
    form,
    name: nameProp,
    onValueChange: onValueChangeProp,
    onValueCommitted: onValueCommittedProp,
    orientation = "horizontal",
    step = 1,
    thumbCollisionBehavior = "push",
    thumbAlignment = "center",
    value: valueProp,
    style,
    ...elementProps
  } = componentProps;
  const id = useBaseUiId(idProp);
  const defaultLabelId = getDefaultLabelId(id);
  const onValueChange = useStableCallback(onValueChangeProp);
  const onValueCommitted = useStableCallback(onValueCommittedProp);
  const {
    clearErrors
  } = useFormContext();
  const {
    state: fieldState,
    disabled: fieldDisabled,
    name: fieldName,
    setTouched,
    setDirty,
    validityData,
    validation
  } = useFieldRootContext();
  const {
    labelId: fieldLabelId
  } = useLabelableContext();
  const [labelId, setLabelId] = reactExports.useState();
  const ariaLabelledby = ariaLabelledByProp ?? resolveAriaLabelledBy(fieldLabelId, labelId);
  const disabled = fieldDisabled || disabledProp;
  const name = fieldName ?? nameProp;
  const [valueUnwrapped, setValueUnwrapped] = useControlled({
    controlled: valueProp,
    default: defaultValue ?? min,
    name: "Slider"
  });
  const sliderRef = reactExports.useRef(null);
  const controlRef = reactExports.useRef(null);
  const thumbRefs = reactExports.useRef([]);
  const pressedInputRef = reactExports.useRef(null);
  const pressedThumbCenterOffsetRef = reactExports.useRef(null);
  const pressedThumbIndexRef = reactExports.useRef(-1);
  const pressedValuesRef = reactExports.useRef(null);
  const lastChangeReasonRef = reactExports.useRef("none");
  const formatOptionsRef = useValueAsRef(format);
  const [active, setActiveState] = reactExports.useState(-1);
  const [lastUsedThumbIndex, setLastUsedThumbIndex] = reactExports.useState(-1);
  const [dragging, setDragging] = reactExports.useState(false);
  const [thumbMap, setThumbMap] = reactExports.useState(() => /* @__PURE__ */ new Map());
  const [indicatorPosition, setIndicatorPosition] = reactExports.useState([void 0, void 0]);
  const setActive = useStableCallback((value) => {
    setActiveState(value);
    if (value !== -1) {
      setLastUsedThumbIndex(value);
    }
  });
  useRegisterFieldControl(validation.inputRef, id, valueUnwrapped, void 0, !disabled, nameProp);
  useValueChanged(valueUnwrapped, () => {
    clearErrors(name);
    validation.change(valueUnwrapped);
    const initialValue = validityData.initialValue;
    let isDirty;
    if (Array.isArray(valueUnwrapped) && Array.isArray(initialValue)) {
      isDirty = !areArraysEqual(valueUnwrapped, initialValue);
    } else {
      isDirty = valueUnwrapped !== initialValue;
    }
    setDirty(isDirty);
  });
  const registerFieldControlRef = useStableCallback((element2) => {
    if (element2) {
      controlRef.current = element2;
    }
  });
  const range = Array.isArray(valueUnwrapped);
  const values = reactExports.useMemo(() => {
    if (!range) {
      return [clamp(valueUnwrapped, min, max)];
    }
    return valueUnwrapped.slice().sort(asc);
  }, [max, min, range, valueUnwrapped]);
  const setValue = useStableCallback((newValue, details) => {
    if (Number.isNaN(newValue) || areValuesEqual(newValue, valueUnwrapped)) {
      return false;
    }
    const changeDetails = details ?? createChangeEventDetails(none, void 0, void 0, {
      activeThumbIndex: -1
    });
    const nativeEvent = changeDetails.event;
    const EventConstructor = nativeEvent.constructor ?? Event;
    const clonedEvent = new EventConstructor(nativeEvent.type, nativeEvent);
    Object.defineProperty(clonedEvent, "target", {
      writable: true,
      value: {
        value: newValue,
        name
      }
    });
    changeDetails.event = clonedEvent;
    onValueChange(newValue, changeDetails);
    if (changeDetails.isCanceled) {
      return false;
    }
    lastChangeReasonRef.current = changeDetails.reason;
    setValueUnwrapped(newValue);
    return true;
  });
  const handleInputChange = useStableCallback((valueInput, index, event) => {
    const newValue = getSliderValue(valueInput, index, min, max, range, values);
    if (validateMinimumDistance(newValue, step, minStepsBetweenValues)) {
      const reason = getSliderChangeEventReason(event);
      const applied = setValue(newValue, createChangeEventDetails(reason, event.nativeEvent, void 0, {
        activeThumbIndex: index
      }));
      setTouched(true);
      if (applied) {
        onValueCommitted(newValue, createGenericEventDetails(reason, event.nativeEvent));
      }
    }
  });
  if (false) {
    if (min >= max) {
      warn("Slider `max` must be greater than `min`.");
    }
  }
  useIsoLayoutEffect(() => {
    const activeEl = activeElement(ownerDocument(sliderRef.current));
    if (disabled && contains(sliderRef.current, activeEl)) {
      activeEl.blur();
    }
  }, [disabled]);
  if (disabled && active !== -1) {
    setActive(-1);
  }
  const state = reactExports.useMemo(() => ({
    ...fieldState,
    activeThumbIndex: active,
    disabled,
    dragging,
    orientation,
    max,
    min,
    minStepsBetweenValues,
    step,
    values
  }), [fieldState, active, disabled, dragging, max, min, minStepsBetweenValues, orientation, step, values]);
  const contextValue = reactExports.useMemo(() => ({
    active,
    controlRef,
    disabled,
    dragging,
    validation,
    formatOptionsRef,
    handleInputChange,
    indicatorPosition,
    inset: thumbAlignment !== "center",
    labelId: ariaLabelledby,
    rootLabelId: defaultLabelId,
    largeStep,
    lastUsedThumbIndex,
    lastChangeReasonRef,
    form,
    locale,
    max,
    min,
    minStepsBetweenValues,
    name,
    onValueCommitted,
    orientation,
    pressedInputRef,
    pressedThumbCenterOffsetRef,
    pressedThumbIndexRef,
    pressedValuesRef,
    registerFieldControlRef,
    renderBeforeHydration: thumbAlignment === "edge",
    setActive,
    setDragging,
    setIndicatorPosition,
    setLabelId,
    setValue,
    state,
    step,
    thumbCollisionBehavior,
    thumbMap,
    thumbRefs,
    values
  }), [active, controlRef, ariaLabelledby, defaultLabelId, disabled, dragging, validation, formatOptionsRef, handleInputChange, indicatorPosition, largeStep, lastUsedThumbIndex, lastChangeReasonRef, form, locale, max, min, minStepsBetweenValues, name, onValueCommitted, orientation, pressedInputRef, pressedThumbCenterOffsetRef, pressedThumbIndexRef, pressedValuesRef, registerFieldControlRef, setActive, setDragging, setIndicatorPosition, setLabelId, setValue, state, step, thumbCollisionBehavior, thumbAlignment, thumbMap, thumbRefs, values]);
  const element = useRenderElement("div", componentProps, {
    state,
    ref: [forwardedRef, sliderRef],
    props: [{
      "aria-labelledby": ariaLabelledby,
      id,
      role: "group"
    }, elementProps, (props) => validation.getValidationProps(disabled, props)],
    stateAttributesMapping: sliderStateAttributesMapping
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SliderRootContext.Provider, {
    value: contextValue,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(CompositeList, {
      elementsRef: thumbRefs,
      onMapChange: setThumbMap,
      children: element
    })
  });
});
if (false) SliderRoot.displayName = "SliderRoot";

"use client";
const SliderLabel = /* @__PURE__ */ reactExports.forwardRef(function SliderLabel2(componentProps, forwardedRef) {
  const {
    render,
    className,
    style,
    ...elementProps
  } = componentProps;
  const elementPropsWithoutId = elementProps;
  delete elementPropsWithoutId.id;
  const {
    state,
    setLabelId,
    controlRef,
    rootLabelId
  } = useSliderRootContext();
  function focusControl(event, controlId) {
    if (controlId) {
      const controlElement = ownerDocument(event.currentTarget).getElementById(controlId);
      if (isHTMLElement(controlElement)) {
        focusElementWithVisible(controlElement);
        return;
      }
    }
    const fallbackInputs = controlRef.current?.querySelectorAll('input[type="range"]');
    const fallbackInput = fallbackInputs?.length === 1 ? fallbackInputs[0] : null;
    if (isHTMLElement(fallbackInput)) {
      focusElementWithVisible(fallbackInput);
    }
  }
  const labelProps = useLabel({
    id: rootLabelId,
    setLabelId,
    focusControl
  });
  return useRenderElement("div", componentProps, {
    ref: forwardedRef,
    state,
    props: [labelProps, elementProps],
    stateAttributesMapping: sliderStateAttributesMapping
  });
});
if (false) SliderLabel.displayName = "SliderLabel";

function stringifyLocale(locale) {
  if (Array.isArray(locale)) {
    return locale.map(value => stringifyLocale(value)).join(',');
  }
  if (locale == null) {
    return '';
  }
  return String(locale);
}

const cache = new Map();
function getFormatter(locale, options) {
  const optionsString = JSON.stringify({
    locale: stringifyLocale(locale),
    options
  });
  const cachedFormatter = cache.get(optionsString);
  if (cachedFormatter) {
    return cachedFormatter;
  }
  const formatter = new Intl.NumberFormat(locale, options);
  cache.set(optionsString, formatter);
  return formatter;
}
function formatNumber(value, locale, options) {
  if (value == null) {
    return '';
  }
  return getFormatter(locale, options).format(value);
}
function formatNumberValue(value, locale, format) {
  if (value == null) {
    return '';
  }
  if (!format) {
    return formatNumber(value / 100, locale, {
      style: 'percent'
    });
  }
  return formatNumber(value, locale, format);
}

"use client";
const SliderValue = /* @__PURE__ */ reactExports.forwardRef(function SliderValue2(componentProps, forwardedRef) {
  const {
    "aria-live": ariaLive = "off",
    render,
    className,
    children,
    style,
    ...elementProps
  } = componentProps;
  const {
    thumbMap,
    state,
    values,
    formatOptionsRef,
    locale
  } = useSliderRootContext();
  let htmlFor = "";
  for (const thumbMetadata of thumbMap.values()) {
    if (thumbMetadata?.inputId) {
      htmlFor += `${thumbMetadata.inputId} `;
    }
  }
  const outputFor = htmlFor.trim() === "" ? void 0 : htmlFor.trim();
  const formattedValues = reactExports.useMemo(() => {
    const arr = [];
    for (let i = 0; i < values.length; i += 1) {
      arr.push(formatNumber(values[i], locale, formatOptionsRef.current ?? void 0));
    }
    return arr;
  }, [formatOptionsRef, locale, values]);
  const defaultDisplayValue = values.map((v, i) => formattedValues[i] || v).join(" – ");
  const element = useRenderElement("output", componentProps, {
    state,
    ref: forwardedRef,
    props: [{
      // off by default because it will keep announcing when the slider is being dragged
      // and also when the value is changing (but not yet committed)
      "aria-live": ariaLive,
      children: typeof children === "function" ? children(formattedValues, values) : defaultDisplayValue,
      htmlFor: outputFor
    }, elementProps],
    stateAttributesMapping: sliderStateAttributesMapping
  });
  return element;
});
if (false) SliderValue.displayName = "SliderValue";

/**
 * Adds an event listener and returns a cleanup function to remove it.
 */

function addEventListener(target, type, listener, options) {
  target.addEventListener(type, listener, options);
  return () => {
    target.removeEventListener(type, listener, options);
  };
}

function getMidpoint(element) {
  const rect = element.getBoundingClientRect();
  return {
    x: (rect.left + rect.right) / 2,
    y: (rect.top + rect.bottom) / 2
  };
}

function getDecimalPrecision(num) {
  if (num === 0) {
    return 0;
  }

  // This handles the case when num is very small (0.00000001), js will turn this into 1e-8.
  // When num is bigger than 1 or less than -1 it won't get converted to this notation so it's fine.
  if (Math.abs(num) < 1) {
    const parts = num.toExponential().split('e-');
    const matissaDecimalPart = parts[0].split('.')[1];
    return (matissaDecimalPart ? matissaDecimalPart.length : 0) + parseInt(parts[1], 10);
  }
  const decimalPart = num.toString().split('.')[1];
  return decimalPart ? decimalPart.length : 0;
}
function roundValueToStep(value, step, min) {
  const nearest = Math.round((value - min) / step) * step + min;
  return Number(nearest.toFixed(Math.max(getDecimalPrecision(step), getDecimalPrecision(min))));
}

/**
 * Returns a new array of slider values where attempting to move the thumb at `index`
 * beyond its neighbours "pushes" them while respecting `minStepsBetweenValues`.
 */
function getPushedThumbValues({
  values,
  index,
  nextValue,
  min,
  max,
  step,
  minStepsBetweenValues,
  initialValues
}) {
  if (values.length === 0) {
    return [];
  }
  const nextValues = values.slice();
  const minValueDifference = step * minStepsBetweenValues;
  const lastIndex = nextValues.length - 1;
  const baseInitialValues = initialValues ?? values;
  const indexMin = min + index * minValueDifference;
  const indexMax = max - (lastIndex - index) * minValueDifference;
  nextValues[index] = clamp(nextValue, indexMin, indexMax);
  for (let i = index + 1; i <= lastIndex; i += 1) {
    const minAllowed = nextValues[i - 1] + minValueDifference;
    const maxAllowed = max - (lastIndex - i) * minValueDifference;
    const initialValue = baseInitialValues[i] ?? nextValues[i];
    let candidate = Math.max(nextValues[i], minAllowed);
    if (initialValue < candidate) {
      candidate = Math.max(initialValue, minAllowed);
    }
    nextValues[i] = clamp(candidate, minAllowed, maxAllowed);
  }
  for (let i = index - 1; i >= 0; i -= 1) {
    const maxAllowed = nextValues[i + 1] - minValueDifference;
    const minAllowed = min + i * minValueDifference;
    const initialValue = baseInitialValues[i] ?? nextValues[i];
    let candidate = Math.min(nextValues[i], maxAllowed);
    if (initialValue > candidate) {
      candidate = Math.min(initialValue, maxAllowed);
    }
    nextValues[i] = clamp(candidate, minAllowed, maxAllowed);
  }
  for (let i = 0; i <= lastIndex; i += 1) {
    nextValues[i] = Number(nextValues[i].toFixed(12));
  }
  return nextValues;
}

function resolveThumbCollision({
  behavior,
  values,
  currentValues,
  initialValues,
  pressedIndex,
  nextValue,
  min,
  max,
  step,
  minStepsBetweenValues
}) {
  const activeValues = currentValues ?? values;
  const baselineValues = initialValues ?? values;
  const range = activeValues.length > 1;
  if (!range) {
    return {
      value: nextValue,
      thumbIndex: 0,
      didSwap: false
    };
  }
  const minValueDifference = step * minStepsBetweenValues;
  switch (behavior) {
    case 'swap':
      {
        const pressedInitialValue = activeValues[pressedIndex];
        const epsilon = 1e-7;
        const candidateValues = activeValues.slice();
        const previousNeighbor = candidateValues[pressedIndex - 1];
        const nextNeighbor = candidateValues[pressedIndex + 1];
        const lowerBound = previousNeighbor != null ? previousNeighbor + minValueDifference : min;
        const upperBound = nextNeighbor != null ? nextNeighbor - minValueDifference : max;
        const constrainedValue = clamp(nextValue, lowerBound, upperBound);
        const pressedValueAfterClamp = Number(constrainedValue.toFixed(12));
        candidateValues[pressedIndex] = pressedValueAfterClamp;
        const movingForward = nextValue > pressedInitialValue;
        const movingBackward = nextValue < pressedInitialValue;
        const shouldSwapForward = movingForward && nextNeighbor != null && nextValue >= nextNeighbor - epsilon;
        const shouldSwapBackward = movingBackward && previousNeighbor != null && nextValue <= previousNeighbor + epsilon;
        if (!shouldSwapForward && !shouldSwapBackward) {
          return {
            value: candidateValues,
            thumbIndex: pressedIndex,
            didSwap: false
          };
        }
        const targetIndex = shouldSwapForward ? pressedIndex + 1 : pressedIndex - 1;
        const initialValuesForPush = candidateValues.map((_, index) => {
          if (index === pressedIndex) {
            return pressedValueAfterClamp;
          }
          const baseline = baselineValues[index];
          if (baseline != null) {
            return baseline;
          }
          return activeValues[index];
        });
        let nextValueForTarget = nextValue;
        if (shouldSwapForward) {
          nextValueForTarget = Math.max(nextValue, candidateValues[targetIndex]);
        } else {
          nextValueForTarget = Math.min(nextValue, candidateValues[targetIndex]);
        }
        const adjustedValues = getPushedThumbValues({
          values: candidateValues,
          index: targetIndex,
          nextValue: nextValueForTarget,
          min,
          max,
          step,
          minStepsBetweenValues,
          initialValues: initialValuesForPush
        });
        const neighborIndex = shouldSwapForward ? targetIndex - 1 : targetIndex + 1;
        if (neighborIndex >= 0 && neighborIndex < adjustedValues.length) {
          const previousValue = adjustedValues[neighborIndex - 1];
          const nextValueAfter = adjustedValues[neighborIndex + 1];
          let neighborLowerBound = previousValue != null ? previousValue + minValueDifference : min;
          neighborLowerBound = Math.max(neighborLowerBound, min + neighborIndex * minValueDifference);
          let neighborUpperBound = nextValueAfter != null ? nextValueAfter - minValueDifference : max;
          neighborUpperBound = Math.min(neighborUpperBound, max - (adjustedValues.length - 1 - neighborIndex) * minValueDifference);
          const restoredValue = clamp(pressedValueAfterClamp, neighborLowerBound, neighborUpperBound);
          adjustedValues[neighborIndex] = Number(restoredValue.toFixed(12));
        }
        return {
          value: adjustedValues,
          thumbIndex: targetIndex,
          didSwap: true
        };
      }
    case 'push':
      {
        const nextValues = getPushedThumbValues({
          values: activeValues,
          index: pressedIndex,
          nextValue,
          min,
          max,
          step,
          minStepsBetweenValues
        });
        return {
          value: nextValues,
          thumbIndex: pressedIndex,
          didSwap: false
        };
      }
    case 'none':
    default:
      {
        const candidateValues = activeValues.slice();
        const previousNeighbor = candidateValues[pressedIndex - 1];
        const nextNeighbor = candidateValues[pressedIndex + 1];
        const lowerBound = previousNeighbor != null ? previousNeighbor + minValueDifference : min;
        const upperBound = nextNeighbor != null ? nextNeighbor - minValueDifference : max;
        const constrainedValue = clamp(nextValue, lowerBound, upperBound);
        candidateValues[pressedIndex] = Number(constrainedValue.toFixed(12));
        return {
          value: candidateValues,
          thumbIndex: pressedIndex,
          didSwap: false
        };
      }
  }
}

"use client";
const INTENTIONAL_DRAG_COUNT_THRESHOLD = 2;
function getControlOffset(styles, vertical) {
  if (!styles) {
    return {
      start: 0,
      end: 0
    };
  }
  function parseSize(value) {
    const parsed = value != null ? parseFloat(value) : 0;
    return Number.isNaN(parsed) ? 0 : parsed;
  }
  const start = !vertical ? "InlineStart" : "Top";
  const end = !vertical ? "InlineEnd" : "Bottom";
  return {
    start: parseSize(styles[`border${start}Width`]) + parseSize(styles[`padding${start}`]),
    end: parseSize(styles[`border${end}Width`]) + parseSize(styles[`padding${end}`])
  };
}
function getFingerCoords(event, touchIdRef) {
  if (touchIdRef.current != null && event.changedTouches) {
    const touchEvent = event;
    for (let i = 0; i < touchEvent.changedTouches.length; i += 1) {
      const touch = touchEvent.changedTouches[i];
      if (touch.identifier === touchIdRef.current) {
        return {
          x: touch.clientX,
          y: touch.clientY
        };
      }
    }
    return null;
  }
  return {
    x: event.clientX,
    y: event.clientY
  };
}
const SliderControl$1 = /* @__PURE__ */ reactExports.forwardRef(function SliderControl2(componentProps, forwardedRef) {
  const {
    render: renderProp,
    className,
    style,
    ...elementProps
  } = componentProps;
  const {
    disabled,
    dragging,
    inset,
    lastChangeReasonRef,
    max,
    min,
    minStepsBetweenValues,
    onValueCommitted,
    orientation,
    pressedInputRef,
    pressedThumbCenterOffsetRef,
    pressedThumbIndexRef,
    pressedValuesRef,
    registerFieldControlRef,
    renderBeforeHydration,
    setActive,
    setDragging,
    setValue,
    state,
    step,
    thumbCollisionBehavior,
    thumbRefs,
    values
  } = useSliderRootContext();
  const direction = useDirection();
  const range = values.length > 1;
  const vertical = orientation === "vertical";
  const controlRef = reactExports.useRef(null);
  const stylesRef = reactExports.useRef(null);
  const setStylesRef = useStableCallback((element2) => {
    if (element2 && stylesRef.current == null) {
      stylesRef.current = getWindow(element2).getComputedStyle(element2);
    }
  });
  const touchIdRef = reactExports.useRef(null);
  const moveCountRef = reactExports.useRef(0);
  const insetThumbOffsetRef = reactExports.useRef(0);
  const currentInteractionValueRef = reactExports.useRef(null);
  const latestValuesRef = useValueAsRef(values);
  function updatePressedThumb(nextIndex) {
    if (pressedThumbIndexRef.current !== nextIndex) {
      pressedThumbIndexRef.current = nextIndex;
    }
    const thumbElement = thumbRefs.current[nextIndex];
    if (!thumbElement) {
      pressedThumbCenterOffsetRef.current = null;
      pressedInputRef.current = null;
      return;
    }
    pressedInputRef.current = thumbElement.querySelector('input[type="range"]');
  }
  function resetPressedThumb() {
    pressedThumbIndexRef.current = -1;
    pressedThumbCenterOffsetRef.current = null;
    pressedInputRef.current = null;
  }
  function isTargetDisabledThumb(target) {
    if (!isElement(target)) {
      return false;
    }
    return thumbRefs.current.some((thumbEl) => {
      if (!isElement(thumbEl) || !contains(thumbEl, target)) {
        return false;
      }
      return thumbEl.querySelector('input[type="range"]')?.disabled === true;
    });
  }
  function getFingerState(fingerCoords) {
    const control = controlRef.current;
    const thumbIndex = pressedThumbIndexRef.current;
    if (!control || !range && (thumbIndex < 0 || thumbIndex >= values.length)) {
      return null;
    }
    const {
      width,
      height,
      bottom,
      left,
      right
    } = control.getBoundingClientRect();
    const controlOffset = getControlOffset(stylesRef.current, vertical);
    const insetThumbOffset = insetThumbOffsetRef.current;
    const controlSize = (vertical ? height : width) - controlOffset.start - controlOffset.end - insetThumbOffset * 2;
    const thumbCenterOffset = pressedThumbCenterOffsetRef.current ?? 0;
    const fingerX = fingerCoords.x - thumbCenterOffset;
    const fingerY = fingerCoords.y - thumbCenterOffset;
    const valueSize = vertical ? bottom - fingerY - controlOffset.end : (direction === "rtl" ? right - fingerX : fingerX - left) - controlOffset.start;
    const valueRescaled = clamp((valueSize - insetThumbOffset) / controlSize, 0, 1);
    let newValue = (max - min) * valueRescaled + min;
    newValue = roundValueToStep(newValue, step, min);
    newValue = clamp(newValue, min, max);
    if (!range) {
      return {
        value: newValue,
        thumbIndex,
        didSwap: false
      };
    }
    if (thumbIndex < 0) {
      return null;
    }
    const collisionResult = resolveThumbCollision({
      behavior: thumbCollisionBehavior,
      values,
      currentValues: latestValuesRef.current ?? values,
      initialValues: pressedValuesRef.current,
      pressedIndex: thumbIndex,
      nextValue: newValue,
      min,
      max,
      step,
      minStepsBetweenValues
    });
    return collisionResult;
  }
  function startPressing(fingerCoords) {
    pressedValuesRef.current = range ? values.slice() : null;
    currentInteractionValueRef.current = null;
    latestValuesRef.current = values;
    const pressedThumbIndex = pressedThumbIndexRef.current;
    let closestThumbIndex = pressedThumbIndex;
    if (pressedThumbIndex > -1 && pressedThumbIndex < values.length) {
      if (values[pressedThumbIndex] === max) {
        let candidateIndex = pressedThumbIndex;
        while (candidateIndex > 0 && values[candidateIndex - 1] === max) {
          candidateIndex -= 1;
        }
        closestThumbIndex = candidateIndex;
      }
    } else {
      const axis = !vertical ? "x" : "y";
      let minDistance;
      closestThumbIndex = -1;
      for (let i = 0; i < thumbRefs.current.length; i += 1) {
        const thumbEl = thumbRefs.current[i];
        if (isElement(thumbEl) && !thumbEl.querySelector('input[type="range"]')?.disabled) {
          const midpoint = getMidpoint(thumbEl);
          const distance = Math.abs(fingerCoords[axis] - midpoint[axis]);
          if (minDistance === void 0 || distance <= minDistance) {
            closestThumbIndex = i;
            minDistance = distance;
          }
        }
      }
    }
    if (closestThumbIndex > -1 && closestThumbIndex !== pressedThumbIndex) {
      updatePressedThumb(closestThumbIndex);
    }
    if (inset) {
      const thumbEl = thumbRefs.current[closestThumbIndex];
      if (isElement(thumbEl)) {
        const thumbRect = thumbEl.getBoundingClientRect();
        const side = !vertical ? "width" : "height";
        insetThumbOffsetRef.current = thumbRect[side] / 2;
      }
    }
  }
  function focusThumb(thumbIndex) {
    const input = thumbRefs.current?.[thumbIndex]?.querySelector('input[type="range"]');
    if (!input) {
      return;
    }
    input.focus({
      preventScroll: true,
      // Prevent pointer-driven focus rings in browsers that support this option.
      // Supported in Chrome from 144+.
      focusVisible: false
    });
  }
  function setValueFromPointer(finger, reason, nativeEvent) {
    const applied = setValue(finger.value, createChangeEventDetails(reason, nativeEvent, void 0, {
      activeThumbIndex: finger.thumbIndex
    }));
    if (applied) {
      currentInteractionValueRef.current = finger.value;
      latestValuesRef.current = Array.isArray(finger.value) ? finger.value : [finger.value];
      if (finger.didSwap) {
        updatePressedThumb(finger.thumbIndex);
      }
    }
    return applied;
  }
  const handleTouchMove = useStableCallback((nativeEvent) => {
    const fingerCoords = getFingerCoords(nativeEvent, touchIdRef);
    if (fingerCoords == null) {
      return;
    }
    moveCountRef.current += 1;
    if (nativeEvent.type === "pointermove" && nativeEvent.buttons === 0) {
      handleTouchEnd(nativeEvent);
      return;
    }
    const finger = getFingerState(fingerCoords);
    if (finger == null) {
      return;
    }
    if (validateMinimumDistance(finger.value, step, minStepsBetweenValues)) {
      if (!dragging && moveCountRef.current > INTENTIONAL_DRAG_COUNT_THRESHOLD) {
        setDragging(true);
      }
      const applied = setValueFromPointer(finger, drag, nativeEvent);
      if (applied && finger.didSwap) {
        focusThumb(finger.thumbIndex);
      }
    }
  });
  const handleTouchEnd = useStableCallback((nativeEvent) => {
    setActive(-1);
    setDragging(false);
    pressedInputRef.current = null;
    pressedThumbCenterOffsetRef.current = null;
    if (currentInteractionValueRef.current != null) {
      const commitReason = lastChangeReasonRef.current;
      onValueCommitted(currentInteractionValueRef.current, createGenericEventDetails(commitReason, nativeEvent));
    }
    if ("pointerType" in nativeEvent && controlRef.current?.hasPointerCapture(nativeEvent.pointerId)) {
      controlRef.current?.releasePointerCapture(nativeEvent.pointerId);
    }
    pressedThumbIndexRef.current = -1;
    touchIdRef.current = null;
    pressedValuesRef.current = null;
    currentInteractionValueRef.current = null;
    stopListening();
  });
  const handleTouchStart = useStableCallback((nativeEvent) => {
    if (disabled) {
      return;
    }
    if (isTargetDisabledThumb(getTarget(nativeEvent))) {
      resetPressedThumb();
      return;
    }
    const touch = nativeEvent.changedTouches[0];
    if (touch != null) {
      touchIdRef.current = touch.identifier;
    }
    const fingerCoords = getFingerCoords(nativeEvent, touchIdRef);
    if (fingerCoords != null) {
      startPressing(fingerCoords);
      const finger = getFingerState(fingerCoords);
      if (finger == null) {
        return;
      }
      focusThumb(finger.thumbIndex);
      const applied = setValueFromPointer(finger, trackPress, nativeEvent);
      if (applied && finger.didSwap) {
        focusThumb(finger.thumbIndex);
      }
    }
    moveCountRef.current = 0;
    const doc = ownerDocument(controlRef.current);
    doc.addEventListener("touchmove", handleTouchMove, {
      passive: true
    });
    doc.addEventListener("touchend", handleTouchEnd, {
      passive: true
    });
  });
  const stopListening = useStableCallback(() => {
    const doc = ownerDocument(controlRef.current);
    doc.removeEventListener("pointermove", handleTouchMove);
    doc.removeEventListener("pointerup", handleTouchEnd);
    doc.removeEventListener("touchmove", handleTouchMove);
    doc.removeEventListener("touchend", handleTouchEnd);
    pressedValuesRef.current = null;
    currentInteractionValueRef.current = null;
  });
  const focusFrame = useAnimationFrame();
  reactExports.useEffect(() => {
    const control = controlRef.current;
    if (!control) {
      return () => stopListening();
    }
    const unsubscribeTouchStart = addEventListener(control, "touchstart", handleTouchStart, {
      passive: true
    });
    return () => {
      unsubscribeTouchStart();
      focusFrame.cancel();
      stopListening();
    };
  }, [stopListening, handleTouchStart, controlRef, focusFrame]);
  reactExports.useEffect(() => {
    if (disabled) {
      stopListening();
    }
  }, [disabled, stopListening]);
  const element = useRenderElement("div", componentProps, {
    state,
    ref: [forwardedRef, registerFieldControlRef, controlRef, setStylesRef],
    props: [{
      ["data-base-ui-slider-control"]: renderBeforeHydration ? "" : void 0,
      onPointerDown(event) {
        const control = controlRef.current;
        const target = getTarget(event.nativeEvent);
        if (!control || disabled || event.defaultPrevented || !isElement(target) || // Only handle left clicks
        event.button !== 0) {
          return;
        }
        if (isTargetDisabledThumb(target)) {
          resetPressedThumb();
          return;
        }
        const fingerCoords = getFingerCoords(event, touchIdRef);
        if (fingerCoords != null) {
          startPressing(fingerCoords);
          const finger = getFingerState(fingerCoords);
          if (finger == null) {
            return;
          }
          const pressedOnFocusedThumb = contains(thumbRefs.current[finger.thumbIndex], activeElement(ownerDocument(control)));
          if (pressedOnFocusedThumb) {
            event.preventDefault();
          } else {
            focusFrame.request(() => {
              focusThumb(finger.thumbIndex);
            });
          }
          setDragging(true);
          const pressedOnAnyThumb = pressedThumbCenterOffsetRef.current != null;
          if (!pressedOnAnyThumb) {
            const applied = setValueFromPointer(finger, trackPress, event.nativeEvent);
            if (applied && finger.didSwap) {
              focusThumb(finger.thumbIndex);
            }
          }
        }
        if (event.nativeEvent.pointerId) {
          control.setPointerCapture(event.nativeEvent.pointerId);
        }
        moveCountRef.current = 0;
        const doc = ownerDocument(controlRef.current);
        doc.addEventListener("pointermove", handleTouchMove, {
          passive: true
        });
        doc.addEventListener("pointerup", handleTouchEnd, {
          once: true
        });
      }
    }, elementProps],
    stateAttributesMapping: sliderStateAttributesMapping
  });
  return element;
});
if (false) SliderControl$1.displayName = "SliderControl";

"use client";
const SliderTrack$1 = /* @__PURE__ */ reactExports.forwardRef(function SliderTrack2(componentProps, forwardedRef) {
  const {
    render,
    className,
    style,
    ...elementProps
  } = componentProps;
  const {
    state
  } = useSliderRootContext();
  const element = useRenderElement("div", componentProps, {
    state,
    ref: forwardedRef,
    props: [{
      style: {
        position: "relative"
      }
    }, elementProps],
    stateAttributesMapping: sliderStateAttributesMapping
  });
  return element;
});
if (false) SliderTrack$1.displayName = "SliderTrack";

var shim$1 = {exports: {}};

var useSyncExternalStoreShim_production = {};

/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredUseSyncExternalStoreShim_production;

function requireUseSyncExternalStoreShim_production () {
	if (hasRequiredUseSyncExternalStoreShim_production) return useSyncExternalStoreShim_production;
	hasRequiredUseSyncExternalStoreShim_production = 1;
	"use strict";
	var React = requireReact();
	function is(x, y) {
	  return (x === y && (0 !== x || 1 / x === 1 / y)) || (x !== x && y !== y);
	}
	var objectIs = "function" === typeof Object.is ? Object.is : is,
	  useState = React.useState,
	  useEffect = React.useEffect,
	  useLayoutEffect = React.useLayoutEffect,
	  useDebugValue = React.useDebugValue;
	function useSyncExternalStore$2(subscribe, getSnapshot) {
	  var value = getSnapshot(),
	    _useState = useState({ inst: { value: value, getSnapshot: getSnapshot } }),
	    inst = _useState[0].inst,
	    forceUpdate = _useState[1];
	  useLayoutEffect(
	    function () {
	      inst.value = value;
	      inst.getSnapshot = getSnapshot;
	      checkIfSnapshotChanged(inst) && forceUpdate({ inst: inst });
	    },
	    [subscribe, value, getSnapshot]
	  );
	  useEffect(
	    function () {
	      checkIfSnapshotChanged(inst) && forceUpdate({ inst: inst });
	      return subscribe(function () {
	        checkIfSnapshotChanged(inst) && forceUpdate({ inst: inst });
	      });
	    },
	    [subscribe]
	  );
	  useDebugValue(value);
	  return value;
	}
	function checkIfSnapshotChanged(inst) {
	  var latestGetSnapshot = inst.getSnapshot;
	  inst = inst.value;
	  try {
	    var nextValue = latestGetSnapshot();
	    return !objectIs(inst, nextValue);
	  } catch (error) {
	    return !0;
	  }
	}
	function useSyncExternalStore$1(subscribe, getSnapshot) {
	  return getSnapshot();
	}
	var shim =
	  "undefined" === typeof window ||
	  "undefined" === typeof window.document ||
	  "undefined" === typeof window.document.createElement
	    ? useSyncExternalStore$1
	    : useSyncExternalStore$2;
	useSyncExternalStoreShim_production.useSyncExternalStore =
	  void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
	return useSyncExternalStoreShim_production;
}

var shim = shim$1.exports;

var hasRequiredShim;

function requireShim () {
	if (hasRequiredShim) return shim$1.exports;
	hasRequiredShim = 1;
	"use strict";
	if (true) {
	  shim$1.exports = requireUseSyncExternalStoreShim_production();
	} else {
	  module.exports = require("../cjs/use-sync-external-store-shim.development.js");
	}
	return shim$1.exports;
}

var shimExports = requireShim();
const index = /*@__PURE__*/getDefaultExportFromCjs(shimExports);

function subscribe() {
  return NOOP;
}
function getSnapshot() {
  return false;
}
function getServerSnapshot() {
  return true;
}

/**
 * Returns `true` while React is hydrating server-rendered markup and `false`
 * for fresh client-only mounts.
 */
function useIsHydrating() {
  return shimExports.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

function valueToPercent(value, min, max) {
  return (value - min) * 100 / (max - min);
}

"use client";
const CSPContext = /* @__PURE__ */ reactExports.createContext(void 0);
if (false) CSPContext.displayName = "CSPContext";
const DEFAULT_CSP_CONTEXT_VALUE = {
  disableStyleElements: false
};
function useCSPContext() {
  return reactExports.useContext(CSPContext) ?? DEFAULT_CSP_CONTEXT_VALUE;
}

let SliderThumbDataAttributes = /*#__PURE__*/function (SliderThumbDataAttributes) {
  /**
   * Indicates the index of the thumb in range sliders.
   */
  SliderThumbDataAttributes["index"] = "data-index";
  /**
   * Present while the user is dragging.
   */
  SliderThumbDataAttributes["dragging"] = "data-dragging";
  /**
   * Indicates the orientation of the slider.
   * @type {'horizontal' | 'vertical'}
   */
  SliderThumbDataAttributes["orientation"] = "data-orientation";
  /**
   * Present when the slider is disabled.
   */
  SliderThumbDataAttributes["disabled"] = "data-disabled";
  /**
   * Present when the slider is in a valid state (when wrapped in Field.Root).
   */
  SliderThumbDataAttributes["valid"] = "data-valid";
  /**
   * Present when the slider is in an invalid state (when wrapped in Field.Root).
   */
  SliderThumbDataAttributes["invalid"] = "data-invalid";
  /**
   * Present when the slider has been touched (when wrapped in Field.Root).
   */
  SliderThumbDataAttributes["touched"] = "data-touched";
  /**
   * Present when the slider's value has changed (when wrapped in Field.Root).
   */
  SliderThumbDataAttributes["dirty"] = "data-dirty";
  /**
   * Present when the slider is focused (when wrapped in Field.Root).
   */
  SliderThumbDataAttributes["focused"] = "data-focused";
  return SliderThumbDataAttributes;
}({});

// This file is autogenerated. Do not edit it directly.
// To update it, modify the corresponding source file and run `pnpm inline-scripts`.

// prettier-ignore
const script = '!function(){const t=document.currentScript?.parentElement;if(!t)return;const e=t.closest("[data-base-ui-slider-control]");if(!e)return;const r=e.querySelector("[data-base-ui-slider-indicator]"),i=e.getBoundingClientRect(),n="vertical"===e.getAttribute("data-orientation")?"height":"width",o=e.querySelectorAll(\'input[type="range"]\'),l=o.length>1,s=o.length-1;let a=null,u=null;for(let t=0;t<o.length;t+=1){const e=o[t],y=parseFloat(e.getAttribute("value")??"");if(Number.isNaN(y))return;const c=e.parentElement;if(!c)return;const p=parseFloat(e.getAttribute("max")??"100"),g=parseFloat(e.getAttribute("min")??"0"),b=c?.getBoundingClientRect(),d=i[n]-b[n],m=100*(y-g)/(p-g),v=(b[n]/2+d*m/100)/i[n]*100;c.style.setProperty("--position",`${v}%`),Number.isFinite(v)&&(c.style.removeProperty("visibility"),r&&(0===t?(a=v,r.style.setProperty("--start-position",`${v}%`),l||r.style.removeProperty("visibility")):t===s&&(u=v-(a??0),r.style.setProperty("--end-position",`${v}%`),r.style.setProperty("--relative-size",`${u}%`),r.style.removeProperty("visibility"))))}}();';

"use client";
const ALL_KEYS = /* @__PURE__ */ new Set([...COMPOSITE_KEYS, PAGE_UP, PAGE_DOWN]);
function getDefaultAriaValueText(values, index, format, locale) {
  if (index < 0) {
    return void 0;
  }
  if (values.length === 2) {
    if (index === 0) {
      return `${formatNumber(values[index], locale, format)} start range`;
    }
    return `${formatNumber(values[index], locale, format)} end range`;
  }
  return format ? formatNumber(values[index], locale, format) : void 0;
}
function getNewValue(thumbValue, increment, direction, min, max) {
  const value = direction === 1 ? thumbValue + increment : thumbValue - increment;
  const roundedValue = Number(value.toFixed(Math.max(getDecimalPrecision(thumbValue), getDecimalPrecision(increment), getDecimalPrecision(min))));
  return clamp(roundedValue, min, max);
}
const SliderThumb$1 = /* @__PURE__ */ reactExports.forwardRef(function SliderThumb2(componentProps, forwardedRef) {
  const {
    render,
    children: childrenProp,
    className,
    "aria-describedby": ariaDescribedByProp,
    "aria-label": ariaLabelProp,
    "aria-labelledby": ariaLabelledByProp,
    "aria-valuetext": ariaValueTextProp,
    disabled: disabledProp = false,
    getAriaLabel: getAriaLabelProp,
    getAriaValueText: getAriaValueTextProp,
    id: idProp,
    index: indexProp,
    inputRef: inputRefProp,
    onBlur: onBlurProp,
    onFocus: onFocusProp,
    onKeyDown: onKeyDownProp,
    tabIndex: tabIndexProp,
    style,
    ...elementProps
  } = componentProps;
  const {
    nonce
  } = useCSPContext();
  const id = useBaseUiId(idProp);
  const {
    active: activeIndex,
    lastUsedThumbIndex,
    controlRef,
    disabled: contextDisabled,
    validation,
    formatOptionsRef,
    handleInputChange,
    inset,
    labelId,
    largeStep,
    locale,
    max,
    min,
    minStepsBetweenValues,
    form,
    name,
    orientation,
    pressedInputRef,
    pressedThumbCenterOffsetRef,
    pressedThumbIndexRef,
    renderBeforeHydration,
    setActive,
    setIndicatorPosition,
    state,
    step,
    values: sliderValues
  } = useSliderRootContext();
  const direction = useDirection();
  const disabled = disabledProp || contextDisabled;
  const range = sliderValues.length > 1;
  const vertical = orientation === "vertical";
  const rtl = direction === "rtl";
  const {
    setTouched,
    setFocused,
    validationMode
  } = useFieldRootContext();
  const thumbRef = reactExports.useRef(null);
  const inputRef = reactExports.useRef(null);
  const restoringFocusVisibleRef = reactExports.useRef(false);
  const defaultInputId = useBaseUiId();
  const labelableId = useLabelableId();
  const inputId = range ? defaultInputId : labelableId;
  const thumbMetadata = reactExports.useMemo(() => ({
    inputId
  }), [inputId]);
  const {
    ref: listItemRef,
    index: compositeIndex
  } = useCompositeListItem({
    metadata: thumbMetadata
  });
  const index = !range ? 0 : indexProp ?? compositeIndex;
  const last = index === sliderValues.length - 1;
  const thumbValue = sliderValues[index];
  const thumbValuePercent = valueToPercent(thumbValue, min, max);
  const [positionPercent, setPositionPercent] = reactExports.useState();
  const isHydrating = useIsHydrating();
  const safeLastUsedThumbIndex = lastUsedThumbIndex >= 0 && lastUsedThumbIndex < sliderValues.length ? lastUsedThumbIndex : -1;
  const getInsetPosition = useStableCallback(() => {
    const control = controlRef.current;
    const thumb = thumbRef.current;
    if (!control || !thumb) {
      return;
    }
    const thumbRect = thumb.getBoundingClientRect();
    const controlRect = control.getBoundingClientRect();
    const side = vertical ? "height" : "width";
    const controlSize = controlRect[side] - thumbRect[side];
    const thumbOffsetFromControlEdge = thumbRect[side] / 2 + controlSize * thumbValuePercent / 100;
    const nextPositionPercent = thumbOffsetFromControlEdge / controlRect[side] * 100;
    const nextInsetPosition = Number.isFinite(nextPositionPercent) ? nextPositionPercent : void 0;
    setPositionPercent(nextInsetPosition);
    if (index === 0) {
      setIndicatorPosition((prevPosition) => [nextInsetPosition, prevPosition[1]]);
    } else if (last) {
      setIndicatorPosition((prevPosition) => [prevPosition[0], nextInsetPosition]);
    }
  });
  useIsoLayoutEffect(() => {
    if (inset) {
      queueMicrotask(getInsetPosition);
    }
  }, [getInsetPosition, inset]);
  useIsoLayoutEffect(() => {
    if (inset) {
      getInsetPosition();
    }
  }, [getInsetPosition, inset, thumbValuePercent]);
  useIsoLayoutEffect(() => {
    if (!inset) {
      return void 0;
    }
    const control = controlRef.current;
    const thumb = thumbRef.current;
    if (!control || !thumb) {
      return void 0;
    }
    const ResizeObserverCtor = getWindow(control).ResizeObserver;
    if (typeof ResizeObserverCtor !== "function") {
      return void 0;
    }
    const resizeObserver = new ResizeObserverCtor(getInsetPosition);
    resizeObserver.observe(control);
    resizeObserver.observe(thumb);
    return () => {
      resizeObserver.disconnect();
    };
  }, [controlRef, getInsetPosition, inset]);
  const startEdge = vertical ? "bottom" : "insetInlineStart";
  const crossOffsetProperty = vertical ? "left" : "top";
  let zIndex;
  if (range) {
    if (activeIndex === index) {
      zIndex = 2;
    } else if (safeLastUsedThumbIndex === index) {
      zIndex = 1;
    }
  } else if (activeIndex === index) {
    zIndex = 1;
  }
  let thumbStyle;
  if (inset) {
    thumbStyle = {
      ["--position"]: `${positionPercent ?? 0}%`,
      visibility: renderBeforeHydration && isHydrating || positionPercent === void 0 ? "hidden" : void 0,
      position: "absolute",
      [startEdge]: "var(--position)",
      [crossOffsetProperty]: "50%",
      translate: `${(vertical || !rtl ? -1 : 1) * 50}% ${(vertical ? 1 : -1) * 50}%`,
      zIndex
    };
  } else {
    thumbStyle = !Number.isFinite(thumbValuePercent) ? visuallyHidden : {
      position: "absolute",
      [startEdge]: `${thumbValuePercent}%`,
      [crossOffsetProperty]: "50%",
      translate: `${(vertical || !rtl ? -1 : 1) * 50}% ${(vertical ? 1 : -1) * 50}%`,
      zIndex
    };
  }
  let cssWritingMode;
  if (orientation === "vertical") {
    cssWritingMode = rtl ? "vertical-rl" : "vertical-lr";
  }
  const ariaLabel = typeof getAriaLabelProp === "function" ? getAriaLabelProp(index) : ariaLabelProp;
  const inputProps = mergeProps({
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledByProp ?? (ariaLabel == null ? labelId : void 0),
    "aria-describedby": ariaDescribedByProp,
    "aria-orientation": orientation,
    "aria-valuenow": thumbValue,
    "aria-valuetext": typeof getAriaValueTextProp === "function" ? getAriaValueTextProp(formatNumber(thumbValue, locale, formatOptionsRef.current ?? void 0), thumbValue, index) : ariaValueTextProp ?? getDefaultAriaValueText(sliderValues, index, formatOptionsRef.current ?? void 0, locale),
    disabled,
    form,
    id: inputId,
    max,
    min,
    name,
    onChange(event) {
      handleInputChange(event.currentTarget.valueAsNumber, index, event);
    },
    onFocus(event) {
      const isRestoringFocusVisible = restoringFocusVisibleRef.current;
      restoringFocusVisibleRef.current = false;
      setActive(index);
      setFocused(true);
      if (isRestoringFocusVisible) {
        event.stopPropagation();
      }
    },
    onBlur(event) {
      if (restoringFocusVisibleRef.current) {
        event.stopPropagation();
        return;
      }
      if (!thumbRef.current) {
        return;
      }
      setActive(-1);
      setTouched(true);
      setFocused(false);
      if (validationMode === "onBlur") {
        validation.commit(getSliderValue(thumbValue, index, min, max, range, sliderValues));
      }
    },
    onKeyDown(event) {
      if (event.defaultPrevented) {
        return;
      }
      if (!ALL_KEYS.has(event.key)) {
        return;
      }
      if (COMPOSITE_KEYS.has(event.key)) {
        event.stopPropagation();
      }
      let newValue = null;
      const roundedValue = roundValueToStep(thumbValue, step, min);
      switch (event.key) {
        case ARROW_UP:
          newValue = getNewValue(roundedValue, event.shiftKey ? largeStep : step, 1, min, max);
          break;
        case ARROW_RIGHT:
          newValue = getNewValue(roundedValue, event.shiftKey ? largeStep : step, rtl ? -1 : 1, min, max);
          break;
        case ARROW_DOWN:
          newValue = getNewValue(roundedValue, event.shiftKey ? largeStep : step, -1, min, max);
          break;
        case ARROW_LEFT:
          newValue = getNewValue(roundedValue, event.shiftKey ? largeStep : step, rtl ? 1 : -1, min, max);
          break;
        case PAGE_UP:
          newValue = getNewValue(roundedValue, largeStep, 1, min, max);
          break;
        case PAGE_DOWN:
          newValue = getNewValue(roundedValue, largeStep, -1, min, max);
          break;
        case END:
          newValue = max;
          if (range) {
            newValue = Number.isFinite(sliderValues[index + 1]) ? sliderValues[index + 1] - step * minStepsBetweenValues : max;
          }
          break;
        case HOME:
          newValue = min;
          if (range) {
            newValue = Number.isFinite(sliderValues[index - 1]) ? sliderValues[index - 1] + step * minStepsBetweenValues : min;
          }
          break;
        default:
          break;
      }
      if (newValue !== null) {
        const input = event.currentTarget;
        if (!matchesFocusVisible(input)) {
          restoringFocusVisibleRef.current = true;
          input.blur();
          input.focus({
            preventScroll: true,
            // Show `:focus-visible` after keyboard interaction, even if the
            // thumb was previously focused by a pointer.
            focusVisible: true
          });
        }
        handleInputChange(newValue, index, event);
        event.preventDefault();
      }
    },
    step,
    style: {
      ...visuallyHidden,
      // So that VoiceOver's focus indicator matches the thumb's dimensions
      width: "100%",
      height: "100%",
      writingMode: cssWritingMode
    },
    tabIndex: tabIndexProp ?? void 0,
    type: "range",
    value: thumbValue ?? ""
  }, (props) => validation.getValidationProps(disabled, props), {
    onKeyDown: onKeyDownProp
  });
  const mergedInputRef = useMergedRefs(inputRef, validation.inputRef, inputRefProp);
  const element = useRenderElement("div", componentProps, {
    state,
    ref: [forwardedRef, listItemRef, thumbRef],
    props: [{
      [SliderThumbDataAttributes.index]: index,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, {
        children: [childrenProp, /* @__PURE__ */ jsxRuntimeExports.jsx("input", {
          ref: mergedInputRef,
          ...inputProps,
          suppressHydrationWarning: true
        }), inset && isHydrating && renderBeforeHydration && // this must be rendered with the last thumb to ensure all
        // preceding thumbs are already rendered in the DOM
        last && /* @__PURE__ */ jsxRuntimeExports.jsx("script", {
          nonce,
          dangerouslySetInnerHTML: {
            __html: script
          },
          suppressHydrationWarning: true
        })]
      }),
      id,
      onBlur: onBlurProp,
      onFocus: onFocusProp,
      onPointerDown(event) {
        if (disabled) {
          return;
        }
        pressedThumbIndexRef.current = index;
        if (thumbRef.current != null) {
          const axis = orientation === "horizontal" ? "x" : "y";
          const midpoint = getMidpoint(thumbRef.current);
          const offset = (orientation === "horizontal" ? event.clientX : event.clientY) - midpoint[axis];
          pressedThumbCenterOffsetRef.current = offset;
        }
        if (inputRef.current != null && pressedInputRef.current !== inputRef.current) {
          pressedInputRef.current = inputRef.current;
        }
      },
      style: thumbStyle,
      suppressHydrationWarning: renderBeforeHydration || void 0
    }, elementProps],
    stateAttributesMapping: sliderStateAttributesMapping
  });
  return element;
});
if (false) SliderThumb$1.displayName = "SliderThumb";

"use client";
function getInsetStyles(vertical, range, start, end, renderBeforeHydration, hydrating) {
  const visibility = start === void 0 || range && end === void 0 ? "hidden" : void 0;
  const startEdge = vertical ? "bottom" : "insetInlineStart";
  const mainSide = vertical ? "height" : "width";
  const crossSide = vertical ? "width" : "height";
  const styles = {
    visibility: renderBeforeHydration && hydrating ? "hidden" : visibility,
    position: vertical ? "absolute" : "relative",
    [crossSide]: "inherit"
  };
  styles["--start-position"] = `${start ?? 0}%`;
  if (!range) {
    styles[startEdge] = 0;
    styles[mainSide] = "var(--start-position)";
    return styles;
  }
  styles["--relative-size"] = `${(end ?? 0) - (start ?? 0)}%`;
  styles[startEdge] = "var(--start-position)";
  styles[mainSide] = "var(--relative-size)";
  return styles;
}
function getCenteredStyles(vertical, range, start, end) {
  const startEdge = vertical ? "bottom" : "insetInlineStart";
  const mainSide = vertical ? "height" : "width";
  const crossSide = vertical ? "width" : "height";
  const styles = {
    position: vertical ? "absolute" : "relative",
    [crossSide]: "inherit"
  };
  if (!range) {
    styles[startEdge] = 0;
    styles[mainSide] = `${start}%`;
    return styles;
  }
  const size = end - start;
  styles[startEdge] = `${start}%`;
  styles[mainSide] = `${size}%`;
  return styles;
}
const SliderIndicator$1 = /* @__PURE__ */ reactExports.forwardRef(function SliderIndicator2(componentProps, forwardedRef) {
  const {
    render,
    className,
    style: styleProp,
    ...elementProps
  } = componentProps;
  const {
    indicatorPosition,
    inset,
    max,
    min,
    orientation,
    renderBeforeHydration,
    state,
    values
  } = useSliderRootContext();
  const isHydrating = useIsHydrating();
  const vertical = orientation === "vertical";
  const range = values.length > 1;
  const style = inset ? getInsetStyles(vertical, range, indicatorPosition[0], indicatorPosition[1], renderBeforeHydration, isHydrating) : getCenteredStyles(vertical, range, valueToPercent(values[0], min, max), valueToPercent(values[values.length - 1], min, max));
  const element = useRenderElement("div", componentProps, {
    state,
    ref: forwardedRef,
    props: [{
      ["data-base-ui-slider-indicator"]: renderBeforeHydration ? "" : void 0,
      style,
      suppressHydrationWarning: renderBeforeHydration || void 0
    }, elementProps],
    stateAttributesMapping: sliderStateAttributesMapping
  });
  return element;
});
if (false) SliderIndicator$1.displayName = "SliderIndicator";

const index_parts = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Control: SliderControl$1,
  Indicator: SliderIndicator$1,
  Label: SliderLabel,
  Root: SliderRoot,
  Thumb: SliderThumb$1,
  Track: SliderTrack$1,
  Value: SliderValue
}, Symbol.toStringTag, { value: 'Module' }));

"use client";
const sliderVariants = cva(
  "peer group/slider data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full"
);
const trackVariants = cva(
  "relative grow overflow-hidden rounded-full bg-muted select-none data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full",
  {
    variants: {
      size: {
        sm: "data-[orientation=horizontal]:h-1 data-[orientation=vertical]:w-1",
        md: "data-[orientation=horizontal]:h-1.5 data-[orientation=vertical]:w-1.5",
        lg: "data-[orientation=horizontal]:h-2 data-[orientation=vertical]:w-2"
      }
    }
  }
);
const thumbVariants = cva(
  "relative block shrink-0 rounded-full border border-ring bg-background ring-ring/50 transition-[color,box-shadow] select-none after:absolute after:-inset-2 focus-visible:ring-3 focus-visible:ring-offset-1 focus-visible:ring-offset-background has-[:focus-visible]:ring-3 has-[:focus-visible]:ring-offset-1 has-[:focus-visible]:ring-offset-background focus-visible:outline-none has-[:focus-visible]:outline-none disabled:pointer-events-none group-aria-invalid/slider:border-destructive group-aria-invalid/slider:focus-visible:border-destructive group-aria-invalid/slider:has-[:focus-visible]:border-destructive group-aria-invalid/slider:focus-visible:ring-destructive/50 group-aria-invalid/slider:has-[:focus-visible]:ring-destructive/50 dark:group-aria-invalid/slider:focus-visible:ring-destructive/50 dark:group-aria-invalid/slider:has-[:focus-visible]:ring-destructive/50",
  {
    variants: {
      size: {
        sm: "size-3",
        md: "size-4",
        lg: "size-5"
      }
    }
  }
);
const SliderContext = reactExports.createContext({
  size: "md"
});
const Slider$1 = reactExports.forwardRef(function Slider2({ className, size = "md", ...props }, ref) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SliderContext.Provider, { value: { size }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    SliderRoot,
    {
      ref,
      className: cn(sliderVariants({ className })),
      "data-slot": "slider",
      thumbAlignment: "edge",
      ...props
    }
  ) });
});
Slider$1.displayName = "Slider";
const SliderControl = reactExports.forwardRef(function SliderControl2({ className, ...props }, ref) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    SliderControl$1,
    {
      ref,
      "data-slot": "slider-control",
      className: cn(
        "relative flex w-full touch-none items-center select-none data-disabled:opacity-50 data-disabled:cursor-not-allowed data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-40 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        className
      ),
      ...props
    }
  );
});
SliderControl.displayName = "SliderControl";
const SliderTrack = reactExports.forwardRef(function SliderTrack2({ className, ...props }, ref) {
  const { size } = reactExports.useContext(SliderContext);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    SliderTrack$1,
    {
      ref,
      "data-slot": "slider-track",
      className: cn(trackVariants({ size }), className),
      ...props
    }
  );
});
SliderTrack.displayName = "SliderTrack";
const SliderIndicator = reactExports.forwardRef(function SliderIndicator2({ className, ...props }, ref) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    SliderIndicator$1,
    {
      ref,
      "data-slot": "slider-indicator",
      className: cn(
        "group-aria-invalid/slider:bg-destructive bg-primary select-none data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full",
        className
      ),
      ...props
    }
  );
});
SliderIndicator.displayName = "SliderIndicator";
const SliderThumb = reactExports.forwardRef(function SliderThumb2({ className, ...props }, ref) {
  const { size } = reactExports.useContext(SliderContext);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    SliderThumb$1,
    {
      ref,
      "data-slot": "slider-thumb",
      className: cn(thumbVariants({ size }), className),
      ...props
    }
  );
});
SliderThumb.displayName = "SliderThumb";

export { Slider$1 as Slider, SliderControl, SliderIndicator, SliderThumb, SliderTrack };
//# sourceMappingURL=slider-FRDMWfm3.js.map
