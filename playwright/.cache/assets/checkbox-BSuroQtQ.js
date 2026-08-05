import { j as jsxRuntimeExports } from './jsx-runtime-B7ZaO6Q_.js';
import { r as reactExports } from './index-CxfbUVL5.js';
import { f as formatErrorMessage, a as useRefWithInit, N as NOOP, b as useMergedRefs, m as mergeProps, E as EMPTY_OBJECT, u as useRenderElement } from './useRenderElement-CBh4CqIk.js';
import { f as fieldValidityMapping, u as useFormContext, a as useFieldRootContext, b as useLabelableContext, c as useBaseUiId, d as useControlled, e as useRegisterFieldControl, g as createChangeEventDetails, n as none } from './createBaseUIEventDetails-BVY0zsWT.js';
import { u as useIsoLayoutEffect } from './useIsoLayoutEffect-DYGwUf-I.js';
import { u as useValueChanged, v as visuallyHiddenInput, a as visuallyHidden } from './useValueChanged-DC3oRYWc.js';
import './noop-D1rYtPi8.js';
import { u as useButton } from './useButton-DXihKi_N.js';
import { u as useFieldItemContext } from './FieldItemContext-CkWlmw4u.js';
import { u as useAriaLabelledBy } from './useAriaLabelledBy-BdH1_PlI.js';
import { u as useCheckboxGroupContext } from './CheckboxGroupContext-BBn5EAKH.js';
import { g as getWindow } from './error-eXSmbXjy.js';
import { u as useTransitionStatus, a as useOpenChangeComplete, t as transitionStatusMapping } from './useTransitionStatus-Td1Imt8w.js';
import { c as cva } from './index-CO0T2jO4.js';
import { c as cn } from './utils-BEvUJWKs.js';
import './useAnimationFrame-BapKY_Lh.js';
import './clsx-ChV9xqsO.js';

/**
 * Returns the default button a browser uses for implicit form submission.
 *
 * This is useful for custom form controls that need to mirror native Enter key behavior.
 * Clicking the returned submitter preserves browser semantics such as the submitter's click
 * event, `SubmitEvent.submitter`, and submitter-specific attributes.
 *
 * The function follows the controls exposed by `form.elements`, which includes controls associated
 * through the `form` attribute. Disabled submitters can be returned because the default button is
 * determined before disabled state is considered; clicking a disabled submitter is a no-op.
 */
function getDefaultFormSubmitter(form) {
  if (!form) {
    return null;
  }
  for (const candidate of form.elements) {
    const tagName = candidate.tagName;
    if (tagName === 'BUTTON' || tagName === 'INPUT') {
      const button = candidate;

      // Intentionally excludes input[type="image"]: Chromium omits it from form.elements,
      // so supporting it would require separate traversal for an exotic submitter type.
      if (button.type === 'submit') {
        return button;
      }
    }
  }
  return null;
}

let CheckboxRootDataAttributes = /*#__PURE__*/function (CheckboxRootDataAttributes) {
  /**
   * Present when the checkbox is checked.
   */
  CheckboxRootDataAttributes["checked"] = "data-checked";
  /**
   * Present when the checkbox is not checked.
   */
  CheckboxRootDataAttributes["unchecked"] = "data-unchecked";
  /**
   * Present when the checkbox is in an indeterminate state.
   */
  CheckboxRootDataAttributes["indeterminate"] = "data-indeterminate";
  /**
   * Present when the checkbox is disabled.
   */
  CheckboxRootDataAttributes["disabled"] = "data-disabled";
  /**
   * Present when the checkbox is readonly.
   */
  CheckboxRootDataAttributes["readonly"] = "data-readonly";
  /**
   * Present when the checkbox is required.
   */
  CheckboxRootDataAttributes["required"] = "data-required";
  /**
   * Present when the checkbox is in a valid state (when wrapped in Field.Root).
   */
  CheckboxRootDataAttributes["valid"] = "data-valid";
  /**
   * Present when the checkbox is in an invalid state (when wrapped in Field.Root).
   */
  CheckboxRootDataAttributes["invalid"] = "data-invalid";
  /**
   * Present when the checkbox has been touched (when wrapped in Field.Root).
   */
  CheckboxRootDataAttributes["touched"] = "data-touched";
  /**
   * Present when the checkbox's value has changed (when wrapped in Field.Root).
   */
  CheckboxRootDataAttributes["dirty"] = "data-dirty";
  /**
   * Present when the checkbox is checked (when wrapped in Field.Root).
   */
  CheckboxRootDataAttributes["filled"] = "data-filled";
  /**
   * Present when the checkbox is focused (when wrapped in Field.Root).
   */
  CheckboxRootDataAttributes["focused"] = "data-focused";
  return CheckboxRootDataAttributes;
}({});

'use client';
function useStateAttributesMapping(state) {
  return reactExports.useMemo(() => ({
    checked(value) {
      if (state.indeterminate) {
        // `data-indeterminate` is already handled by the `indeterminate` prop.
        return {};
      }
      if (value) {
        return {
          [CheckboxRootDataAttributes.checked]: ''
        };
      }
      return {
        [CheckboxRootDataAttributes.unchecked]: ''
      };
    },
    ...fieldValidityMapping
  }), [state.indeterminate]);
}

"use client";
const CheckboxRootContext = /* @__PURE__ */ reactExports.createContext(void 0);
if (false) CheckboxRootContext.displayName = "CheckboxRootContext";
function useCheckboxRootContext() {
  const context = reactExports.useContext(CheckboxRootContext);
  if (context === void 0) {
    throw new Error(false ? "Base UI: CheckboxRootContext is missing. Checkbox parts must be placed within <Checkbox.Root>." : formatErrorMessage(14));
  }
  return context;
}

"use client";
const PARENT_CHECKBOX = "data-parent";
const CheckboxRoot = /* @__PURE__ */ reactExports.forwardRef(function CheckboxRoot2(componentProps, forwardedRef) {
  const {
    checked: checkedProp,
    className,
    defaultChecked = false,
    "aria-labelledby": ariaLabelledByProp,
    disabled: disabledProp = false,
    form,
    id: idProp,
    indeterminate = false,
    inputRef: inputRefProp,
    name: nameProp,
    onCheckedChange,
    parent = false,
    readOnly = false,
    render,
    required = false,
    uncheckedValue,
    value: valueProp,
    nativeButton = false,
    style,
    ...elementProps
  } = componentProps;
  const {
    clearErrors
  } = useFormContext();
  const {
    disabled: rootDisabled,
    name: fieldName,
    setDirty,
    setFilled,
    setFocused,
    setTouched,
    state: fieldState,
    validationMode,
    validityData,
    validation: localValidation
  } = useFieldRootContext();
  const fieldItemContext = useFieldItemContext();
  const {
    labelId,
    controlId,
    registerControlId,
    getDescriptionProps
  } = useLabelableContext();
  const groupContext = useCheckboxGroupContext();
  const parentContext = groupContext?.parent;
  const isGroupedWithParent = parentContext && groupContext.allValues;
  const disabled = rootDisabled || fieldItemContext.disabled || groupContext?.disabled || disabledProp;
  const name = fieldName ?? nameProp;
  const value = valueProp ?? name;
  const id = useBaseUiId();
  const parentId = useBaseUiId();
  let inputId = controlId;
  if (isGroupedWithParent) {
    inputId = parent ? parentId : `${parentContext.id}-${value}`;
  } else if (idProp) {
    inputId = idProp;
  }
  let groupProps = {};
  if (isGroupedWithParent) {
    if (parent) {
      groupProps = groupContext.parent.getParentProps();
    } else if (value) {
      groupProps = groupContext.parent.getChildProps(value);
    }
  }
  const {
    checked: groupChecked = checkedProp,
    indeterminate: groupIndeterminate = indeterminate,
    onCheckedChange: groupOnChange,
    ...otherGroupProps
  } = groupProps;
  const groupValue = groupContext?.value;
  const setGroupValue = groupContext?.setValue;
  const defaultGroupValue = groupContext?.defaultValue;
  const controlRef = reactExports.useRef(null);
  const controlSourceRef = useRefWithInit(() => Symbol("checkbox-control"));
  const hasRegisteredRef = reactExports.useRef(false);
  const {
    getButtonProps,
    buttonRef
  } = useButton({
    disabled,
    native: nativeButton
  });
  const validation = groupContext?.validation ?? localValidation;
  const [checked, setCheckedState] = useControlled({
    controlled: value && groupValue && !parent ? groupValue.includes(value) : groupChecked,
    default: value && defaultGroupValue && !parent ? defaultGroupValue.includes(value) : defaultChecked,
    name: "Checkbox",
    state: "checked"
  });
  const computedChecked = isGroupedWithParent ? Boolean(groupChecked) : checked;
  const computedIndeterminate = isGroupedWithParent ? groupIndeterminate || indeterminate : indeterminate;
  useIsoLayoutEffect(() => {
    if (registerControlId === NOOP) {
      return void 0;
    }
    hasRegisteredRef.current = true;
    registerControlId(controlSourceRef.current, inputId);
    return void 0;
  }, [inputId, registerControlId, controlSourceRef]);
  reactExports.useEffect(() => {
    const controlSource = controlSourceRef.current;
    return () => {
      if (!hasRegisteredRef.current || registerControlId === NOOP) {
        return;
      }
      hasRegisteredRef.current = false;
      registerControlId(controlSource, void 0);
    };
  }, [registerControlId, controlSourceRef]);
  useRegisterFieldControl(controlRef, id, checked, void 0, !groupContext && !disabled, nameProp);
  const inputRef = reactExports.useRef(null);
  const mergedInputRef = useMergedRefs(inputRefProp, inputRef, validation.inputRef, validation.registerInput);
  const ariaLabelledBy = useAriaLabelledBy(ariaLabelledByProp, labelId, inputRef, !nativeButton, inputId ?? void 0);
  useIsoLayoutEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = computedIndeterminate;
      if (checked) {
        setFilled(true);
      }
    }
  }, [checked, computedIndeterminate, setFilled]);
  useValueChanged(checked, () => {
    if (groupContext) {
      return;
    }
    clearErrors(name);
    setFilled(checked);
    setDirty(checked !== validityData.initialValue);
    validation.change(checked);
  });
  const inputProps = mergeProps(
    {
      checked,
      disabled,
      form,
      // parent checkboxes unset `name` to be excluded from form submission
      name: parent ? void 0 : name,
      // Set `id` to stop Chrome warning about an unassociated input.
      // When using a native button, the `id` is applied to the button instead.
      id: nativeButton ? void 0 : inputId ?? void 0,
      required,
      ref: mergedInputRef,
      style: name ? visuallyHiddenInput : visuallyHidden,
      tabIndex: -1,
      type: "checkbox",
      "aria-hidden": true,
      onChange(event) {
        if (event.nativeEvent.defaultPrevented) {
          return;
        }
        if (readOnly) {
          event.preventDefault();
          return;
        }
        const nextChecked = event.currentTarget.checked;
        const details = createChangeEventDetails(none, event.nativeEvent);
        onCheckedChange?.(nextChecked, details);
        if (details.isCanceled) {
          return;
        }
        groupOnChange?.(nextChecked, details);
        if (details.isCanceled) {
          return;
        }
        setCheckedState(nextChecked);
        if (value && groupValue && setGroupValue && !parent && !isGroupedWithParent) {
          const nextGroupValue = nextChecked ? [...groupValue, value] : groupValue.filter((item) => item !== value);
          setGroupValue(nextGroupValue, details);
        }
      },
      onFocus() {
        controlRef.current?.focus();
      }
    },
    // React <19 sets an empty value if `undefined` is passed explicitly
    // To avoid this, we only set the value if it's defined
    valueProp !== void 0 ? {
      value: (groupContext ? checked && valueProp : valueProp) || ""
    } : EMPTY_OBJECT,
    getDescriptionProps,
    (props) => validation.getValidationProps(disabled, props)
  );
  reactExports.useEffect(() => {
    if (!parentContext || !value) {
      return void 0;
    }
    const disabledStates = parentContext.disabledStatesRef.current;
    disabledStates.set(value, disabled);
    return () => {
      disabledStates.delete(value);
    };
  }, [parentContext, disabled, value]);
  const state = reactExports.useMemo(() => ({
    ...fieldState,
    checked: computedChecked,
    disabled,
    readOnly,
    required,
    indeterminate: computedIndeterminate
  }), [fieldState, computedChecked, disabled, readOnly, required, computedIndeterminate]);
  const stateAttributesMapping = useStateAttributesMapping(state);
  const element = useRenderElement("span", componentProps, {
    state,
    ref: [buttonRef, controlRef, forwardedRef, groupContext?.registerControlRef],
    props: [{
      id: nativeButton ? inputId ?? void 0 : id,
      role: "checkbox",
      "aria-checked": computedIndeterminate ? "mixed" : computedChecked,
      "aria-readonly": readOnly || void 0,
      "aria-required": required || void 0,
      "aria-labelledby": ariaLabelledBy,
      [PARENT_CHECKBOX]: parent ? "" : void 0,
      onFocus() {
        if (!disabled) {
          setFocused(true);
        }
      },
      onBlur() {
        const inputEl = inputRef.current;
        if (!inputEl) {
          return;
        }
        setTouched(true);
        setFocused(false);
        if (validationMode === "onBlur") {
          validation.commit(groupContext ? groupValue : inputEl.checked);
        }
      },
      onKeyDown(event) {
        if (event.key !== "Enter") {
          return;
        }
        event.preventBaseUIHandler();
        if (event.defaultPrevented) {
          return;
        }
        const formToSubmit = inputRef.current?.form ?? null;
        const currentTarget = event.currentTarget;
        const nativeEvent = event.nativeEvent;
        const originalPreventDefault = event.preventDefault;
        const originalNativePreventDefault = nativeEvent.preventDefault;
        let preventDefaultCalledAfterPropagation = false;
        event.preventDefault = () => {
          preventDefaultCalledAfterPropagation = true;
          originalPreventDefault.call(event);
        };
        nativeEvent.preventDefault = () => {
          preventDefaultCalledAfterPropagation = true;
          originalNativePreventDefault.call(nativeEvent);
        };
        originalNativePreventDefault.call(nativeEvent);
        getWindow(currentTarget).queueMicrotask(() => {
          event.preventDefault = originalPreventDefault;
          nativeEvent.preventDefault = originalNativePreventDefault;
          if (!preventDefaultCalledAfterPropagation) {
            getDefaultFormSubmitter(formToSubmit)?.click();
          }
        });
      },
      onClick(event) {
        if (readOnly || disabled) {
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
      }
    }, elementProps, otherGroupProps, getButtonProps, getDescriptionProps, (props) => validation.getValidationProps(disabled, props)],
    stateAttributesMapping
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(CheckboxRootContext.Provider, {
    value: state,
    children: [element, !checked && !groupContext && name && !parent && uncheckedValue !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("input", {
      type: "hidden",
      form,
      name,
      value: uncheckedValue,
      disabled
    }), /* @__PURE__ */ jsxRuntimeExports.jsx("input", {
      ...inputProps,
      suppressHydrationWarning: true
    })]
  });
});
if (false) CheckboxRoot.displayName = "CheckboxRoot";

"use client";
const CheckboxIndicator$1 = /* @__PURE__ */ reactExports.forwardRef(function CheckboxIndicator2(componentProps, forwardedRef) {
  const {
    render,
    className,
    style,
    keepMounted = false,
    ...elementProps
  } = componentProps;
  const rootState = useCheckboxRootContext();
  const rendered = rootState.checked || rootState.indeterminate;
  const {
    mounted,
    transitionStatus,
    setMounted
  } = useTransitionStatus(rendered);
  const indicatorRef = reactExports.useRef(null);
  const state = {
    ...rootState,
    transitionStatus
  };
  useOpenChangeComplete({
    open: rendered,
    ref: indicatorRef,
    onComplete() {
      if (!rendered) {
        setMounted(false);
      }
    }
  });
  const baseStateAttributesMapping = useStateAttributesMapping(rootState);
  const stateAttributesMapping = {
    ...baseStateAttributesMapping,
    ...transitionStatusMapping,
    ...fieldValidityMapping
  };
  const shouldRender = keepMounted || mounted;
  const element = useRenderElement("span", componentProps, {
    ref: [forwardedRef, indicatorRef],
    state,
    stateAttributesMapping,
    props: elementProps
  });
  if (!shouldRender) {
    return null;
  }
  return element;
});
if (false) CheckboxIndicator$1.displayName = "CheckboxIndicator";

const index_parts = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Indicator: CheckboxIndicator$1,
  Root: CheckboxRoot
}, Symbol.toStringTag, { value: 'Module' }));

"use client";
const checkboxVariants = cva(
  "group/checkbox peer relative flex shrink-0 items-center justify-center rounded-sm border border-input after:absolute after:content-[''] transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:focus-visible:border-destructive aria-invalid:focus-visible:ring-3 aria-invalid:focus-visible:ring-destructive/50 aria-invalid:data-checked:border-destructive aria-invalid:data-checked:bg-destructive aria-invalid:data-checked:text-destructive-foreground dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:focus-visible:ring-destructive/50 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary",
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
const Checkbox$1 = reactExports.forwardRef(function Checkbox2({ className, size = "md", ...props }, ref) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CheckboxRoot,
    {
      ref,
      "data-slot": "checkbox",
      "data-size": size,
      className: cn(checkboxVariants({ size }), className),
      ...props
    }
  );
});
Checkbox$1.displayName = "Checkbox";
const CheckboxIndicator = reactExports.forwardRef(function CheckboxIndicator2({ className, ...props }, ref) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CheckboxIndicator$1,
    {
      ref,
      "data-slot": "checkbox-indicator",
      className: cn(
        "grid place-content-center text-current transition-none [&>svg]:size-3.5 group-data-[size=sm]/checkbox:[&>svg]:size-3 group-data-[size=lg]/checkbox:[&>svg]:size-4",
        className
      ),
      ...props
    }
  );
});
CheckboxIndicator.displayName = "CheckboxIndicator";

export { Checkbox$1 as Checkbox, CheckboxIndicator };
//# sourceMappingURL=checkbox-BSuroQtQ.js.map
