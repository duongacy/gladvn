import { f as formatErrorMessage, e as useMergedRefs, d as useIsoLayoutEffect, g as getWindow, m as mergeProps, E as EMPTY_OBJECT, u as useRenderElement, j as jsxRuntimeExports, c as cva, a as cn } from './utils-Boq2ewKh.js';
import { r as reactExports } from './index-DN3kw-fw.js';
import { f as fieldValidityMapping, u as useFormContext, a as useFieldRootContext, b as useLabelableContext, c as useBaseUiId, d as useControlled, e as useRegisterFieldControl, g as createChangeEventDetails, n as none } from './createBaseUIEventDetails-CHsRwCdV.js';
import { u as useValueChanged, v as visuallyHiddenInput, a as visuallyHidden } from './useValueChanged-BCnrh8Dv.js';
import './index-6mpbiNdg.js';
import { u as useAriaLabelledBy } from './useAriaLabelledBy-B_r2e7Lf.js';
import { u as useLabelableId } from './useLabelableId-I_W0ho2y.js';
import { u as useButton } from './useButton-CAPP_3d9.js';

"use client";
const SwitchRootContext = /* @__PURE__ */ reactExports.createContext(void 0);
if (false) SwitchRootContext.displayName = "SwitchRootContext";
function useSwitchRootContext() {
  const context = reactExports.useContext(SwitchRootContext);
  if (context === void 0) {
    throw new Error(false ? "Base UI: SwitchRootContext is missing. Switch parts must be placed within <Switch.Root>." : formatErrorMessage(63));
  }
  return context;
}

let SwitchRootDataAttributes = /*#__PURE__*/function (SwitchRootDataAttributes) {
  /**
   * Present when the switch is checked.
   */
  SwitchRootDataAttributes["checked"] = "data-checked";
  /**
   * Present when the switch is not checked.
   */
  SwitchRootDataAttributes["unchecked"] = "data-unchecked";
  /**
   * Present when the switch is disabled.
   */
  SwitchRootDataAttributes["disabled"] = "data-disabled";
  /**
   * Present when the switch is readonly.
   */
  SwitchRootDataAttributes["readonly"] = "data-readonly";
  /**
   * Present when the switch is required.
   */
  SwitchRootDataAttributes["required"] = "data-required";
  /**
   * Present when the switch is in a valid state (when wrapped in Field.Root).
   */
  SwitchRootDataAttributes["valid"] = "data-valid";
  /**
   * Present when the switch is in an invalid state (when wrapped in Field.Root).
   */
  SwitchRootDataAttributes["invalid"] = "data-invalid";
  /**
   * Present when the switch has been touched (when wrapped in Field.Root).
   */
  SwitchRootDataAttributes["touched"] = "data-touched";
  /**
   * Present when the switch's value has changed (when wrapped in Field.Root).
   */
  SwitchRootDataAttributes["dirty"] = "data-dirty";
  /**
   * Present when the switch is active (when wrapped in Field.Root).
   */
  SwitchRootDataAttributes["filled"] = "data-filled";
  /**
   * Present when the switch is focused (when wrapped in Field.Root).
   */
  SwitchRootDataAttributes["focused"] = "data-focused";
  return SwitchRootDataAttributes;
}({});

const stateAttributesMapping = {
  ...fieldValidityMapping,
  checked(value) {
    if (value) {
      return {
        [SwitchRootDataAttributes.checked]: ''
      };
    }
    return {
      [SwitchRootDataAttributes.unchecked]: ''
    };
  }
};

"use client";
const SwitchRoot = /* @__PURE__ */ reactExports.forwardRef(function SwitchRoot2(componentProps, forwardedRef) {
  const {
    checked: checkedProp,
    className,
    defaultChecked,
    "aria-labelledby": ariaLabelledByProp,
    form,
    id: idProp,
    inputRef: externalInputRef,
    name: nameProp,
    nativeButton = false,
    onCheckedChange,
    readOnly = false,
    required = false,
    disabled: disabledProp = false,
    render,
    uncheckedValue,
    value,
    style,
    ...elementProps
  } = componentProps;
  const {
    clearErrors
  } = useFormContext();
  const {
    state: fieldState,
    setTouched,
    setDirty,
    validityData,
    setFilled,
    setFocused,
    validationMode,
    disabled: fieldDisabled,
    name: fieldName,
    validation
  } = useFieldRootContext();
  const {
    labelId
  } = useLabelableContext();
  const disabled = fieldDisabled || disabledProp;
  const name = fieldName ?? nameProp;
  const inputRef = reactExports.useRef(null);
  const handleInputRef = useMergedRefs(inputRef, externalInputRef, validation.inputRef);
  const switchRef = reactExports.useRef(null);
  const id = useBaseUiId();
  const controlId = useLabelableId({
    id: idProp,
    implicit: false,
    controlRef: switchRef
  });
  const hiddenInputId = nativeButton ? void 0 : controlId;
  const [checked, setCheckedState] = useControlled({
    controlled: checkedProp,
    default: Boolean(defaultChecked),
    name: "Switch",
    state: "checked"
  });
  useRegisterFieldControl(switchRef, id, checked, void 0, !disabled, nameProp);
  useIsoLayoutEffect(() => {
    if (inputRef.current) {
      setFilled(inputRef.current.checked);
    }
  }, [inputRef, setFilled]);
  useValueChanged(checked, () => {
    clearErrors(name);
    setDirty(checked !== validityData.initialValue);
    setFilled(checked);
    validation.change(checked);
  });
  const {
    getButtonProps,
    buttonRef
  } = useButton({
    disabled,
    native: nativeButton
  });
  const ariaLabelledBy = useAriaLabelledBy(ariaLabelledByProp, labelId, inputRef, !nativeButton, hiddenInputId);
  const rootProps = {
    id: nativeButton ? controlId : id,
    role: "switch",
    "aria-checked": checked,
    "aria-readonly": readOnly || void 0,
    "aria-required": required || void 0,
    "aria-labelledby": ariaLabelledBy,
    onFocus() {
      if (!disabled) {
        setFocused(true);
      }
    },
    onBlur() {
      const element2 = inputRef.current;
      if (!element2 || disabled) {
        return;
      }
      setTouched(true);
      setFocused(false);
      if (validationMode === "onBlur") {
        validation.commit(element2.checked);
      }
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
  };
  const inputProps = mergeProps(
    {
      checked,
      disabled,
      form,
      id: hiddenInputId,
      name,
      required,
      style: name ? visuallyHiddenInput : visuallyHidden,
      tabIndex: -1,
      type: "checkbox",
      "aria-hidden": true,
      ref: handleInputRef,
      onChange(event) {
        if (event.nativeEvent.defaultPrevented) {
          return;
        }
        if (readOnly) {
          event.preventDefault();
          return;
        }
        const nextChecked = event.currentTarget.checked;
        const eventDetails = createChangeEventDetails(none, event.nativeEvent);
        onCheckedChange?.(nextChecked, eventDetails);
        if (eventDetails.isCanceled) {
          return;
        }
        setCheckedState(nextChecked);
      },
      onFocus() {
        switchRef.current?.focus();
      }
    },
    (props) => validation.getValidationProps(disabled, props),
    // React <19 sets an empty value if `undefined` is passed explicitly
    // To avoid this, we only set the value if it's defined
    value !== void 0 ? {
      value
    } : EMPTY_OBJECT
  );
  const state = reactExports.useMemo(() => ({
    ...fieldState,
    checked,
    disabled,
    readOnly,
    required
  }), [fieldState, checked, disabled, readOnly, required]);
  const element = useRenderElement("span", componentProps, {
    state,
    ref: [forwardedRef, switchRef, buttonRef],
    props: [rootProps, elementProps, getButtonProps, (props) => validation.getValidationProps(disabled, props)],
    stateAttributesMapping
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SwitchRootContext.Provider, {
    value: state,
    children: [element, !checked && name && uncheckedValue !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("input", {
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
if (false) SwitchRoot.displayName = "SwitchRoot";

"use client";
const SwitchThumb$1 = /* @__PURE__ */ reactExports.forwardRef(function SwitchThumb2(componentProps, forwardedRef) {
  const {
    render,
    className,
    style,
    ...elementProps
  } = componentProps;
  const state = useSwitchRootContext();
  return useRenderElement("span", componentProps, {
    state,
    ref: forwardedRef,
    stateAttributesMapping,
    props: elementProps
  });
});
if (false) SwitchThumb$1.displayName = "SwitchThumb";

const index_parts = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Root: SwitchRoot,
  Thumb: SwitchThumb$1
}, Symbol.toStringTag, { value: 'Module' }));

"use client";
const switchVariants = cva(
  "group/switch peer relative inline-flex shrink-0 items-center rounded-full border border-transparent p-px after:absolute after:content-[''] transition-all outline-none focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:ring-offset-1 focus-visible:ring-offset-background aria-invalid:focus-visible:ring-destructive/50 dark:aria-invalid:focus-visible:ring-destructive/50 data-checked:bg-primary data-unchecked:bg-input dark:data-unchecked:bg-secondary data-disabled:pointer-events-none data-disabled:cursor-not-allowed data-disabled:opacity-50",
  {
    variants: {
      size: {
        sm: "switch-sm h-4 w-7 after:-inset-x-2.5 after:-inset-y-2.5",
        md: "switch-md h-5 w-9 after:-inset-x-3 after:-inset-y-2",
        lg: "switch-lg h-6 w-11 after:-inset-x-4 after:-inset-y-3"
      }
    }
  }
);
const Switch$1 = reactExports.forwardRef(function Switch2({ className, size = "md", ...props }, ref) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    SwitchRoot,
    {
      ref,
      "data-slot": "switch",
      className: cn(switchVariants({ size, className })),
      ...props
    }
  );
});
Switch$1.displayName = "Switch";
const SwitchThumb = reactExports.forwardRef(function SwitchThumb2({ className, ...props }, ref) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    SwitchThumb$1,
    {
      ref,
      "data-slot": "switch-thumb",
      className: cn(
        "pointer-events-none block rounded-full bg-background shadow-sm shadow-black/10 ring-0 transition-transform data-unchecked:translate-x-0 dark:data-checked:bg-primary-foreground dark:data-unchecked:bg-foreground size-4 data-checked:translate-x-4 group-[.switch-sm]/switch:size-3 group-[.switch-sm]/switch:data-checked:translate-x-3 group-[.switch-lg]/switch:size-5 group-[.switch-lg]/switch:data-checked:translate-x-5",
        className
      ),
      ...props
    }
  );
});
SwitchThumb.displayName = "SwitchThumb";

export { Switch$1 as Switch, SwitchThumb };
//# sourceMappingURL=switch-C4OBRav3.js.map
