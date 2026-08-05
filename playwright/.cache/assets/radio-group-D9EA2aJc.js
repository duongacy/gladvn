import { j as jsxRuntimeExports } from './jsx-runtime-B7ZaO6Q_.js';
import { r as reactExports } from './index-CxfbUVL5.js';
import { b as useMergedRefs, E as EMPTY_OBJECT, c as EMPTY_ARRAY$1, u as useRenderElement, f as formatErrorMessage, N as NOOP } from './useRenderElement-CBh4CqIk.js';
import { a as useStableCallback, u as useIsoLayoutEffect } from './useIsoLayoutEffect-DYGwUf-I.js';
import { v as visuallyHiddenInput, a as visuallyHidden, u as useValueChanged } from './useValueChanged-DC3oRYWc.js';
import { f as fieldValidityMapping, a as useFieldRootContext, b as useLabelableContext, c as useBaseUiId, g as createChangeEventDetails, n as none, u as useFormContext, d as useControlled, e as useRegisterFieldControl } from './createBaseUIEventDetails-BVY0zsWT.js';
import './noop-D1rYtPi8.js';
import { t as transitionStatusMapping, u as useTransitionStatus, a as useOpenChangeComplete } from './useTransitionStatus-Td1Imt8w.js';
import './index-Bg6MWjzY.js';
import { a as useCompositeRootContext, u as useButton, C as CompositeRootContext } from './useButton-DXihKi_N.js';
import { u as useCompositeListItem, s as scrollIntoViewIfNeeded, C as COMPOSITE_KEYS, A as ARROW_KEYS, a as ARROW_LEFT, b as ARROW_RIGHT, c as ARROW_DOWN, d as ARROW_UP, i as isNativeInput, V as VERTICAL_KEYS_WITH_EXTRA_KEYS, e as VERTICAL_KEYS, H as HORIZONTAL_KEYS_WITH_EXTRA_KEYS, f as HORIZONTAL_KEYS, g as HOME, E as END, M as MODIFIER_KEYS$1, h as useDirection, j as CompositeList, S as SHIFT } from './DirectionContext-CFNfCIwa.js';
import { u as useFieldItemContext } from './FieldItemContext-CkWlmw4u.js';
import { u as useAriaLabelledBy } from './useAriaLabelledBy-BdH1_PlI.js';
import { u as useLabelableId } from './useLabelableId-BojUVp-D.js';
import { g as getWindow } from './error-eXSmbXjy.js';
import { i as isListIndexDisabled, f as findNonDisabledListIndex, b as isIndexOutOfListBounds, g as getTarget, c as getMinListIndex, d as getMaxListIndex, e as contains } from './utils-BWTU_UV9.js';
import { u as useFieldsetRootContext } from './FieldsetRootContext-EBDuaG1o.js';
import { c as cva } from './index-CO0T2jO4.js';
import { c as cn } from './utils-BEvUJWKs.js';
import './useAnimationFrame-BapKY_Lh.js';
import './clsx-ChV9xqsO.js';

let RadioRootDataAttributes = /*#__PURE__*/function (RadioRootDataAttributes) {
  /**
   * Present when the radio is checked.
   */
  RadioRootDataAttributes["checked"] = "data-checked";
  /**
   * Present when the radio is not checked.
   */
  RadioRootDataAttributes["unchecked"] = "data-unchecked";
  /**
   * Present when the radio is disabled.
   */
  RadioRootDataAttributes["disabled"] = "data-disabled";
  /**
   * Present when the radio is readonly.
   */
  RadioRootDataAttributes["readonly"] = "data-readonly";
  /**
   * Present when the radio is required.
   */
  RadioRootDataAttributes["required"] = "data-required";
  /**
   * Present when the radio is in a valid state (when wrapped in Field.Root).
   */
  RadioRootDataAttributes["valid"] = "data-valid";
  /**
   * Present when the radio is in an invalid state (when wrapped in Field.Root).
   */
  RadioRootDataAttributes["invalid"] = "data-invalid";
  /**
   * Present when the radio has been touched (when wrapped in Field.Root).
   */
  RadioRootDataAttributes["touched"] = "data-touched";
  /**
   * Present when the radio's value has changed (when wrapped in Field.Root).
   */
  RadioRootDataAttributes["dirty"] = "data-dirty";
  /**
   * Present when the radio is checked (when wrapped in Field.Root).
   */
  RadioRootDataAttributes["filled"] = "data-filled";
  /**
   * Present when the radio is focused (when wrapped in Field.Root).
   */
  RadioRootDataAttributes["focused"] = "data-focused";
  return RadioRootDataAttributes;
}({});

const stateAttributesMapping = {
  checked(value) {
    if (value) {
      return {
        [RadioRootDataAttributes.checked]: ''
      };
    }
    return {
      [RadioRootDataAttributes.unchecked]: ''
    };
  },
  ...transitionStatusMapping,
  ...fieldValidityMapping
};

const ACTIVE_COMPOSITE_ITEM = 'data-composite-item-active';

'use client';
function useCompositeItem(params = {}) {
  const {
    highlightItemOnHover,
    highlightedIndex,
    onHighlightedIndexChange
  } = useCompositeRootContext();
  const {
    ref,
    index
  } = useCompositeListItem(params);
  const isHighlighted = highlightedIndex === index;
  const itemRef = reactExports.useRef(null);
  const mergedRef = useMergedRefs(ref, itemRef);
  const compositeProps = {
    tabIndex: isHighlighted ? 0 : -1,
    onFocus() {
      onHighlightedIndexChange(index);
    },
    onMouseMove() {
      const item = itemRef.current;
      if (!highlightItemOnHover || !item) {
        return;
      }
      const disabled = item.hasAttribute('disabled') || item.ariaDisabled === 'true';
      if (!isHighlighted && !disabled) {
        item.focus();
      }
    }
  };
  return {
    compositeProps,
    compositeRef: mergedRef,
    index
  };
}

'use client';
/**
 * @internal
 */
function CompositeItem(componentProps) {
  const {
    render,
    className,
    style,
    state = EMPTY_OBJECT,
    props = EMPTY_ARRAY$1,
    refs = EMPTY_ARRAY$1,
    metadata,
    stateAttributesMapping,
    tag = 'div',
    ...elementProps
  } = componentProps;
  const {
    compositeProps,
    compositeRef
  } = useCompositeItem({
    metadata
  });
  return useRenderElement(tag, componentProps, {
    state,
    ref: [...refs, compositeRef],
    props: [compositeProps, ...props, elementProps],
    stateAttributesMapping
  });
}

"use client";
const RadioGroupContext = /* @__PURE__ */ reactExports.createContext(void 0);
if (false) RadioGroupContext.displayName = "RadioGroupContext";
function useRadioGroupContext() {
  return reactExports.useContext(RadioGroupContext);
}

function serializeValue(value) {
  if (value == null) {
    return '';
  }
  if (typeof value === 'string') {
    return value;
  }
  try {
    return JSON.stringify(value);
  } catch {
    return String(value);
  }
}

"use client";
const RadioRootContext = /* @__PURE__ */ reactExports.createContext(void 0);
if (false) RadioRootContext.displayName = "RadioRootContext";
function useRadioRootContext() {
  const value = reactExports.useContext(RadioRootContext);
  if (value === void 0) {
    throw new Error(false ? "Base UI: RadioRootContext is missing. Radio parts must be placed within <Radio.Root>." : formatErrorMessage(52));
  }
  return value;
}

"use client";
const RadioRoot = /* @__PURE__ */ reactExports.forwardRef(function RadioRoot2(componentProps, forwardedRef) {
  const {
    render,
    className,
    disabled: disabledProp = false,
    readOnly: readOnlyProp = false,
    required: requiredProp = false,
    "aria-labelledby": ariaLabelledByProp,
    value,
    inputRef: inputRefProp,
    nativeButton = false,
    id: idProp,
    style,
    ...elementProps
  } = componentProps;
  const groupContext = useRadioGroupContext();
  const {
    disabled: disabledGroup,
    readOnly: readOnlyGroup,
    required: requiredGroup,
    form: formGroup,
    checkedValue,
    touched = false,
    validation,
    name
  } = groupContext ?? {};
  const setCheckedValue = groupContext?.setCheckedValue ?? NOOP;
  const setTouched = groupContext?.setTouched ?? NOOP;
  const registerControlRef = groupContext?.registerControlRef ?? NOOP;
  const registerInputRef = groupContext?.registerInputRef ?? NOOP;
  const {
    setTouched: setFieldTouched,
    setFilled,
    state: fieldState,
    disabled: fieldDisabled
  } = useFieldRootContext();
  const fieldItemContext = useFieldItemContext();
  const {
    labelId,
    getDescriptionProps
  } = useLabelableContext();
  const disabled = fieldDisabled || fieldItemContext.disabled || disabledGroup || disabledProp;
  const readOnly = readOnlyGroup || readOnlyProp;
  const required = requiredGroup || requiredProp;
  const form = formGroup;
  const checked = groupContext ? checkedValue === value : value === "";
  const radioRef = reactExports.useRef(null);
  const inputRef = reactExports.useRef(null);
  const handleControlRef = useStableCallback((element2) => {
    if (!element2) {
      return;
    }
    registerControlRef(element2, disabled);
  });
  const mergedInputRef = useMergedRefs(inputRefProp, inputRef, registerInputRef);
  useIsoLayoutEffect(() => {
    if (inputRef.current?.checked) {
      setFilled(true);
    }
  }, [setFilled]);
  useIsoLayoutEffect(() => {
    if (!inputRef.current) {
      return;
    }
    if (disabled && checked) {
      registerInputRef(null);
      return;
    }
    if (radioRef.current) {
      registerControlRef(radioRef.current, disabled);
    }
    registerInputRef(inputRef.current);
  }, [checked, disabled, registerControlRef, registerInputRef]);
  const id = useBaseUiId();
  const inputId = useLabelableId({
    id: idProp,
    implicit: false,
    controlRef: radioRef
  });
  const hiddenInputId = nativeButton ? void 0 : inputId;
  const ariaLabelledBy = useAriaLabelledBy(ariaLabelledByProp, labelId, inputRef, !nativeButton, hiddenInputId);
  const rootProps = {
    role: "radio",
    "aria-checked": checked,
    "aria-required": required || void 0,
    "aria-readonly": readOnly || void 0,
    "aria-labelledby": ariaLabelledBy,
    [ACTIVE_COMPOSITE_ITEM]: checked ? "" : void 0,
    id: nativeButton ? inputId : id,
    onKeyDown(event) {
      if (event.key === "Enter") {
        event.preventDefault();
      }
    },
    onClick(event) {
      if (event.defaultPrevented || disabled || readOnly) {
        return;
      }
      event.preventDefault();
      const input = inputRef.current;
      if (!input) {
        return;
      }
      input.dispatchEvent(new (getWindow(input)).PointerEvent("click", {
        bubbles: true,
        shiftKey: event.shiftKey,
        ctrlKey: event.ctrlKey,
        altKey: event.altKey,
        metaKey: event.metaKey
      }));
    },
    onFocus(event) {
      if (event.defaultPrevented || disabled || readOnly || !touched) {
        return;
      }
      inputRef.current?.click();
      setTouched(false);
    }
  };
  const {
    getButtonProps,
    buttonRef
  } = useButton({
    disabled,
    native: nativeButton,
    composite: false
  });
  const inputProps = {
    type: "radio",
    ref: mergedInputRef,
    form,
    id: hiddenInputId,
    name,
    tabIndex: -1,
    style: name ? visuallyHiddenInput : visuallyHidden,
    "aria-hidden": true,
    ...value !== void 0 ? {
      value: serializeValue(value)
    } : EMPTY_OBJECT,
    disabled,
    checked,
    required,
    readOnly,
    onChange(event) {
      if (event.nativeEvent.defaultPrevented) {
        return;
      }
      if (disabled || readOnly || value === void 0) {
        return;
      }
      const details = createChangeEventDetails(none, event.nativeEvent);
      setCheckedValue(value, details);
      if (details.isCanceled) {
        return;
      }
      setFieldTouched(true);
    },
    onFocus() {
      radioRef.current?.focus();
    }
  };
  const state = reactExports.useMemo(() => ({
    ...fieldState,
    required,
    disabled,
    readOnly,
    checked
  }), [fieldState, disabled, readOnly, checked, required]);
  const contextValue = state;
  const isRadioGroup = groupContext !== void 0;
  const refs = [forwardedRef, radioRef, buttonRef, handleControlRef];
  const props = [rootProps, elementProps, getButtonProps, getDescriptionProps, validation ? (validationProps) => validation.getValidationProps(disabled, validationProps) : EMPTY_OBJECT];
  const element = useRenderElement("span", componentProps, {
    enabled: !isRadioGroup,
    state,
    ref: refs,
    props,
    stateAttributesMapping
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(RadioRootContext.Provider, {
    value: contextValue,
    children: [isRadioGroup ? /* @__PURE__ */ jsxRuntimeExports.jsx(CompositeItem, {
      tag: "span",
      render,
      className,
      style,
      state,
      refs,
      props,
      stateAttributesMapping
    }) : element, /* @__PURE__ */ jsxRuntimeExports.jsx("input", {
      ...inputProps,
      suppressHydrationWarning: true
    })]
  });
});
if (false) RadioRoot.displayName = "RadioRoot";

"use client";
const RadioIndicator = /* @__PURE__ */ reactExports.forwardRef(function RadioIndicator2(componentProps, forwardedRef) {
  const {
    render,
    className,
    style,
    keepMounted = false,
    ...elementProps
  } = componentProps;
  const rootState = useRadioRootContext();
  const rendered = rootState.checked;
  const {
    mounted,
    transitionStatus,
    setMounted
  } = useTransitionStatus(rendered);
  const state = {
    ...rootState,
    transitionStatus
  };
  const indicatorRef = reactExports.useRef(null);
  const shouldRender = keepMounted || mounted;
  const element = useRenderElement("span", componentProps, {
    ref: [forwardedRef, indicatorRef],
    state,
    props: elementProps,
    stateAttributesMapping
  });
  useOpenChangeComplete({
    open: rendered,
    ref: indicatorRef,
    onComplete() {
      if (!rendered) {
        setMounted(false);
      }
    }
  });
  if (!shouldRender) {
    return null;
  }
  return element;
});
if (false) RadioIndicator.displayName = "RadioIndicator";

const index_parts = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Indicator: RadioIndicator,
  Root: RadioRoot
}, Symbol.toStringTag, { value: 'Module' }));

function isElementDisabled(element) {
  return element == null || element.hasAttribute('disabled') || element.getAttribute('aria-disabled') === 'true';
}

'use client';
const EMPTY_ARRAY = [];
function useCompositeRoot(params) {
  const {
    loopFocus = true,
    orientation = 'both',
    grid,
    onLoop,
    direction,
    highlightedIndex: externalHighlightedIndex,
    onHighlightedIndexChange: externalSetHighlightedIndex,
    rootRef: externalRef,
    enableHomeAndEndKeys = false,
    stopEventPropagation = false,
    disabledIndices,
    modifierKeys = EMPTY_ARRAY
  } = params;
  const [internalHighlightedIndex, internalSetHighlightedIndex] = reactExports.useState(0);
  const isGrid = grid != null;
  const rootRef = reactExports.useRef(null);
  const mergedRef = useMergedRefs(rootRef, externalRef);
  const elementsRef = reactExports.useRef([]);
  const hasSetDefaultIndexRef = reactExports.useRef(false);
  const highlightedIndex = externalHighlightedIndex ?? internalHighlightedIndex;
  const onHighlightedIndexChange = useStableCallback((index, shouldScrollIntoView = false) => {
    (externalSetHighlightedIndex ?? internalSetHighlightedIndex)(index);
    if (shouldScrollIntoView) {
      const newActiveItem = elementsRef.current[index];
      scrollIntoViewIfNeeded(rootRef.current, newActiveItem, direction, orientation);
    }
  });
  const onMapChange = useStableCallback(map => {
    if (map.size === 0 || hasSetDefaultIndexRef.current) {
      return;
    }
    hasSetDefaultIndexRef.current = true;
    const sortedElements = Array.from(map.keys());
    const activeItem = sortedElements.find(compositeElement => compositeElement?.hasAttribute(ACTIVE_COMPOSITE_ITEM)) ?? null;
    // Set the default highlighted index of an arbitrary composite item.
    const activeIndex = activeItem ? sortedElements.indexOf(activeItem) : -1;
    if (activeIndex !== -1) {
      onHighlightedIndexChange(activeIndex);
    } else if (isListIndexDisabled(sortedElements, highlightedIndex, disabledIndices)) {
      // The default highlighted item is disabled, so it should not hold the single
      // roving tab stop: a natively disabled element is removed from the tab order,
      // and an aria-disabled one should not be the entry point. Move the tab stop
      // to the first enabled item. If every item is disabled, keep the current
      // highlighted index.
      const firstEnabledIndex = findNonDisabledListIndex(sortedElements, {
        disabledIndices
      });
      if (!isIndexOutOfListBounds(sortedElements, firstEnabledIndex)) {
        onHighlightedIndexChange(firstEnabledIndex);
      }
    }
    scrollIntoViewIfNeeded(rootRef.current, activeItem, direction, orientation);
  });
  useIsoLayoutEffect(() => {
    // `disabledIndices` can resolve a render after the initial map population
    // (e.g. Toolbar derives it from item metadata through a state update), so the
    // default tab stop at index 0 may now point at a disabled item, leaving the
    // composite without a reachable tab stop. Re-validate and move it to the first
    // enabled item. Gated on `disabledIndices` being provided so composites that
    // rely on the DOM disabled fallback keep their existing behavior.
    if (disabledIndices == null || externalHighlightedIndex != null || !hasSetDefaultIndexRef.current) {
      return;
    }
    const elements = elementsRef.current;
    if (isListIndexDisabled(elements, highlightedIndex, disabledIndices)) {
      const firstEnabledIndex = findNonDisabledListIndex(elements, {
        disabledIndices
      });
      if (!isIndexOutOfListBounds(elements, firstEnabledIndex)) {
        onHighlightedIndexChange(firstEnabledIndex);
      }
    }
  }, [disabledIndices, externalHighlightedIndex, highlightedIndex, elementsRef, onHighlightedIndexChange]);
  const wrappedOnLoop = useStableCallback((event, prevIndex, nextIndex) => {
    if (!onLoop) {
      return nextIndex;
    }
    return onLoop(event, prevIndex, nextIndex, elementsRef);
  });

  // Stable so that `relayKeyboardEvent` does not invalidate identity-sensitive
  // consumers (the `CompositeRootContext` value and trigger data forwarding).
  const onKeyDown = useStableCallback(event => {
    const RELEVANT_KEYS = enableHomeAndEndKeys ? COMPOSITE_KEYS : ARROW_KEYS;
    if (!RELEVANT_KEYS.has(event.key)) {
      return;
    }
    if (isModifierKeySet(event, modifierKeys)) {
      return;
    }
    const element = rootRef.current;
    if (!element) {
      return;
    }
    const isRtl = direction === 'rtl';
    const horizontalForwardKey = isRtl ? ARROW_LEFT : ARROW_RIGHT;
    const forwardKey = {
      horizontal: horizontalForwardKey,
      vertical: ARROW_DOWN,
      both: horizontalForwardKey
    }[orientation];
    const horizontalBackwardKey = isRtl ? ARROW_RIGHT : ARROW_LEFT;
    const backwardKey = {
      horizontal: horizontalBackwardKey,
      vertical: ARROW_UP,
      both: horizontalBackwardKey
    }[orientation];
    const target = getTarget(event.nativeEvent);
    if (target != null && isNativeInput(target) && !isElementDisabled(target)) {
      const selectionStart = target.selectionStart;
      const selectionEnd = target.selectionEnd;
      const textContent = target.value ?? '';
      // return to native textbox behavior when
      // 1 - Shift is held to make a text selection, or if there already is a text selection
      if (selectionStart == null || event.shiftKey || selectionStart !== selectionEnd) {
        return;
      }
      // 2 - arrow-ing forward and not in the last position of the text
      if (event.key !== backwardKey && selectionStart < textContent.length) {
        return;
      }
      // 3 -arrow-ing backward and not in the first position of the text
      if (event.key !== forwardKey && selectionStart > 0) {
        return;
      }
    }
    let nextIndex = highlightedIndex;
    const minIndex = getMinListIndex(elementsRef, disabledIndices);
    const maxIndex = getMaxListIndex(elementsRef, disabledIndices);
    if (grid != null) {
      nextIndex = grid({
        disabledIndices,
        elementsRef,
        event,
        highlightedIndex,
        loopFocus,
        maxIndex,
        minIndex,
        onLoop: wrappedOnLoop,
        orientation,
        rtl: isRtl
      });
    }
    const forwardKeys = {
      horizontal: [horizontalForwardKey],
      vertical: [ARROW_DOWN],
      both: [horizontalForwardKey, ARROW_DOWN]
    }[orientation];
    const backwardKeys = {
      horizontal: [horizontalBackwardKey],
      vertical: [ARROW_UP],
      both: [horizontalBackwardKey, ARROW_UP]
    }[orientation];
    const preventedKeys = isGrid ? RELEVANT_KEYS : {
      horizontal: enableHomeAndEndKeys ? HORIZONTAL_KEYS_WITH_EXTRA_KEYS : HORIZONTAL_KEYS,
      vertical: enableHomeAndEndKeys ? VERTICAL_KEYS_WITH_EXTRA_KEYS : VERTICAL_KEYS,
      both: RELEVANT_KEYS
    }[orientation];
    if (enableHomeAndEndKeys) {
      if (event.key === HOME) {
        nextIndex = minIndex;
      } else if (event.key === END) {
        nextIndex = maxIndex;
      }
    }
    if (nextIndex === highlightedIndex && (forwardKeys.includes(event.key) || backwardKeys.includes(event.key))) {
      if (loopFocus && nextIndex === maxIndex && forwardKeys.includes(event.key)) {
        nextIndex = minIndex;
        if (onLoop) {
          nextIndex = onLoop(event, highlightedIndex, nextIndex, elementsRef);
        }
      } else if (loopFocus && nextIndex === minIndex && backwardKeys.includes(event.key)) {
        nextIndex = maxIndex;
        if (onLoop) {
          nextIndex = onLoop(event, highlightedIndex, nextIndex, elementsRef);
        }
      } else {
        nextIndex = findNonDisabledListIndex(elementsRef.current, {
          startingIndex: nextIndex,
          decrement: backwardKeys.includes(event.key),
          disabledIndices
        });
      }
    }
    if (nextIndex !== highlightedIndex && !isIndexOutOfListBounds(elementsRef.current, nextIndex)) {
      if (stopEventPropagation) {
        event.stopPropagation();
      }
      if (preventedKeys.has(event.key)) {
        event.preventDefault();
      }
      onHighlightedIndexChange(nextIndex, true);

      // Wait for FocusManager `returnFocus` to execute.
      queueMicrotask(() => {
        elementsRef.current[nextIndex]?.focus();
      });
    }
  });
  const props = {
    ref: mergedRef,
    onFocus(event) {
      const element = rootRef.current;
      const target = getTarget(event.nativeEvent);
      if (!element || target == null || !isNativeInput(target)) {
        return;
      }
      target.setSelectionRange(0, target.value.length ?? 0);
    },
    onKeyDown
  };
  return {
    props,
    highlightedIndex,
    onHighlightedIndexChange,
    elementsRef,
    disabledIndices,
    onMapChange,
    relayKeyboardEvent: onKeyDown
  };
}
function isModifierKeySet(event, ignoredModifierKeys) {
  for (const key of MODIFIER_KEYS$1.values()) {
    if (ignoredModifierKeys.includes(key)) {
      continue;
    }
    if (event.getModifierState(key)) {
      return true;
    }
  }
  return false;
}

'use client';
/**
 * @internal
 */
function CompositeRoot(componentProps) {
  const {
    render,
    className,
    style,
    refs = EMPTY_ARRAY$1,
    props = EMPTY_ARRAY$1,
    state = EMPTY_OBJECT,
    stateAttributesMapping,
    highlightedIndex: highlightedIndexProp,
    onHighlightedIndexChange: onHighlightedIndexChangeProp,
    orientation,
    grid,
    loopFocus,
    onLoop,
    enableHomeAndEndKeys,
    onMapChange: onMapChangeProp,
    stopEventPropagation = true,
    rootRef,
    disabledIndices,
    modifierKeys,
    highlightItemOnHover = false,
    tag = 'div',
    ...elementProps
  } = componentProps;
  const direction = useDirection();
  const {
    props: defaultProps,
    highlightedIndex,
    onHighlightedIndexChange,
    elementsRef,
    onMapChange: onMapChangeUnwrapped,
    relayKeyboardEvent
  } = useCompositeRoot({
    grid,
    loopFocus,
    onLoop,
    orientation,
    highlightedIndex: highlightedIndexProp,
    onHighlightedIndexChange: onHighlightedIndexChangeProp,
    rootRef,
    stopEventPropagation,
    enableHomeAndEndKeys,
    direction,
    disabledIndices,
    modifierKeys
  });
  const element = useRenderElement(tag, componentProps, {
    state,
    ref: refs,
    props: [defaultProps, ...props, elementProps],
    stateAttributesMapping
  });
  const contextValue = reactExports.useMemo(() => ({
    highlightedIndex,
    onHighlightedIndexChange,
    highlightItemOnHover,
    relayKeyboardEvent
  }), [highlightedIndex, onHighlightedIndexChange, highlightItemOnHover, relayKeyboardEvent]);
  return /*#__PURE__*/jsxRuntimeExports.jsx(CompositeRootContext.Provider, {
    value: contextValue,
    children: /*#__PURE__*/jsxRuntimeExports.jsx(CompositeList, {
      elementsRef: elementsRef,
      onMapChange: newMap => {
        onMapChangeProp?.(newMap);
        onMapChangeUnwrapped(newMap);
      },
      children: element
    })
  });
}

"use client";
const MODIFIER_KEYS = [SHIFT];
const RadioGroup$1 = /* @__PURE__ */ reactExports.forwardRef(function RadioGroup2(componentProps, forwardedRef) {
  const {
    render,
    className,
    disabled: disabledProp,
    readOnly,
    required,
    onValueChange: onValueChangeProp,
    value: externalValue,
    defaultValue,
    form,
    name: nameProp,
    inputRef: inputRefProp,
    id: idProp,
    style,
    ...elementProps
  } = componentProps;
  const {
    setTouched: setFieldTouched,
    setFocused,
    validationMode,
    name: fieldName,
    disabled: fieldDisabled,
    state: fieldState,
    validation,
    setDirty,
    setFilled,
    validityData
  } = useFieldRootContext();
  const {
    labelId
  } = useLabelableContext();
  const {
    clearErrors
  } = useFormContext();
  const fieldsetContext = useFieldsetRootContext(true);
  const disabled = fieldDisabled || disabledProp;
  const name = fieldName ?? nameProp;
  const id = useBaseUiId(idProp);
  const [checkedValue, setCheckedValueUnwrapped] = useControlled({
    controlled: externalValue,
    default: defaultValue,
    name: "RadioGroup",
    state: "value"
  });
  const [touched, setTouched] = reactExports.useState(false);
  const setCheckedValue = useStableCallback((value, eventDetails) => {
    onValueChangeProp?.(value, eventDetails);
    if (eventDetails.isCanceled) {
      return;
    }
    setCheckedValueUnwrapped(value);
  });
  const controlRef = reactExports.useRef(null);
  const groupInputRef = reactExports.useRef(null);
  const firstEnabledInputRef = reactExports.useRef(null);
  function setInputRef(hiddenInput) {
    let cleanup = void 0;
    if (inputRefProp) {
      if (typeof inputRefProp === "function") {
        cleanup = inputRefProp(hiddenInput);
      } else {
        inputRefProp.current = hiddenInput;
      }
    }
    groupInputRef.current = hiddenInput;
    validation.inputRef.current = hiddenInput;
    return cleanup;
  }
  const registerControlRef = useStableCallback((element, isDisabled = false) => {
    if (!element) {
      return;
    }
    if (isDisabled) {
      if (controlRef.current === element) {
        controlRef.current = null;
      }
      return;
    }
    if (controlRef.current == null) {
      controlRef.current = element;
    }
  });
  const registerInputRef = useStableCallback((input) => {
    if (!input || input.disabled) {
      return void 0;
    }
    if (!firstEnabledInputRef.current) {
      firstEnabledInputRef.current = input;
    }
    const currentInput = groupInputRef.current;
    if (input.checked || currentInput == null || currentInput.disabled) {
      return setInputRef(input);
    }
    return void 0;
  });
  const getFormValue = useStableCallback(() => {
    const input = groupInputRef.current;
    if (!input || input.disabled || !input.checked) {
      return null;
    }
    return checkedValue ?? null;
  });
  useRegisterFieldControl(controlRef, id, checkedValue ?? null, getFormValue, !disabled, nameProp);
  useValueChanged(checkedValue, () => {
    clearErrors(name);
    setDirty(checkedValue !== validityData.initialValue);
    setFilled(checkedValue != null);
    validation.change(checkedValue);
    const fallbackInput = firstEnabledInputRef.current;
    if (checkedValue == null && fallbackInput && !fallbackInput.disabled) {
      setInputRef(fallbackInput);
    }
  });
  const ariaLabelledby = elementProps["aria-labelledby"] ?? labelId ?? fieldsetContext?.legendId;
  const state = {
    ...fieldState,
    disabled: disabled ?? false,
    required: required ?? false,
    readOnly: readOnly ?? false
  };
  const contextValue = reactExports.useMemo(() => ({
    ...fieldState,
    checkedValue,
    disabled,
    form,
    validation,
    name,
    readOnly,
    registerControlRef,
    registerInputRef,
    required,
    setCheckedValue,
    setTouched,
    touched
  }), [checkedValue, disabled, form, validation, fieldState, name, readOnly, registerControlRef, registerInputRef, required, setCheckedValue, setTouched, touched]);
  const defaultProps = {
    id: idProp,
    role: "radiogroup",
    "aria-required": required || void 0,
    "aria-disabled": disabled || void 0,
    "aria-readonly": readOnly || void 0,
    "aria-labelledby": ariaLabelledby,
    onFocus() {
      setFocused(true);
    },
    onBlur(event) {
      if (!contains(event.currentTarget, event.relatedTarget)) {
        setFieldTouched(true);
        setFocused(false);
        if (validationMode === "onBlur") {
          validation.commit(checkedValue);
        }
      }
    },
    onKeyDownCapture(event) {
      if (event.key.startsWith("Arrow")) {
        setTouched(true);
        setFocused(true);
      }
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroupContext.Provider, {
    value: contextValue,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(CompositeRoot, {
      render,
      className,
      style,
      state,
      props: [defaultProps, elementProps, (props) => validation.getValidationProps(disabled ?? false, props)],
      refs: [forwardedRef],
      stateAttributesMapping: fieldValidityMapping,
      enableHomeAndEndKeys: false,
      modifierKeys: MODIFIER_KEYS
    })
  });
});
if (false) RadioGroup$1.displayName = "RadioGroup";

"use client";
const RadioGroup = reactExports.forwardRef(function RadioGroup2({ className, ...props }, ref) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    RadioGroup$1,
    {
      ref,
      "data-slot": "radio-group",
      className: cn("grid gap-2", className),
      ...props
    }
  );
});
RadioGroup.displayName = "RadioGroup";
const radioGroupItemVariants = cva(
  "group/radio peer relative flex aspect-square shrink-0 rounded-full border border-input after:absolute after:content-[''] outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:focus-visible:border-destructive aria-invalid:focus-visible:ring-3 aria-invalid:focus-visible:ring-destructive/50 aria-invalid:aria-checked:border-primary dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:focus-visible:ring-destructive/50 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary",
  {
    variants: {
      size: {
        sm: "size-3.5 after:-inset-x-2.5 after:-inset-y-2.5",
        md: "size-4 after:-inset-x-3 after:-inset-y-2",
        lg: "size-5 after:-inset-x-4 after:-inset-y-3"
      }
    }
  }
);
const RadioGroupItem = reactExports.forwardRef(function RadioGroupItem2({ className, size = "md", ...props }, ref) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    RadioRoot,
    {
      ref,
      "data-slot": "radio-group-item",
      "data-size": size,
      className: cn(radioGroupItemVariants({ size, className })),
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        RadioIndicator,
        {
          "data-slot": "radio-group-indicator",
          className: "flex items-center justify-center size-4 group-data-[size=sm]/radio:size-3.5 group-data-[size=lg]/radio:size-5",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-foreground size-2 group-data-[size=sm]/radio:size-1.5 group-data-[size=lg]/radio:size-2.5" })
        }
      )
    }
  );
});
RadioGroupItem.displayName = "RadioGroupItem";

export { RadioGroup, RadioGroupItem };
//# sourceMappingURL=radio-group-D9EA2aJc.js.map
