import { j as jsxRuntimeExports, a as cn } from './utils-Boq2ewKh.js';
import { r as reactExports } from './index-DN3kw-fw.js';
import { Check } from './lucide-react-Bncip4ky.js';
import { Checkbox, CheckboxIndicator } from './checkbox-DLx48iOu.js';
import { F as Field, a as FieldLabel, b as FieldDescription, c as FieldError } from './field-OELQ2VRL.js';
import './createBaseUIEventDetails-CHsRwCdV.js';
import './useValueChanged-BCnrh8Dv.js';
import './useButton-CAPP_3d9.js';
import './useTransitionStatus-APX8IVyJ.js';
import './useAnimationFrame-CQoe1Qb8.js';
import './useAriaLabelledBy-B_r2e7Lf.js';
import './CheckboxGroupContext-CrMwEoUV.js';

"use client";
const CheckboxPreset = reactExports.forwardRef(
  ({
    label,
    description,
    errorMessage,
    showError = true,
    className,
    id,
    size = "md",
    ...checkboxProps
  }, ref) => {
    const generatedId = reactExports.useId();
    const inputId = id || generatedId;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Field,
      {
        className: cn("flex flex-row items-start gap-3", className),
        "data-size": size,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center text-sm leading-snug group-data-[size=sm]/field:text-xs group-data-[size=lg]/field:text-base", children: [
            "​",
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Checkbox,
              {
                ref,
                id: inputId,
                "aria-invalid": !!errorMessage,
                size,
                ...checkboxProps,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(CheckboxIndicator, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, {}) })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-1.5 leading-none", children: [
            label && /* @__PURE__ */ jsxRuntimeExports.jsx(
              FieldLabel,
              {
                htmlFor: inputId,
                className: "font-medium cursor-pointer",
                children: label
              }
            ),
            description && /* @__PURE__ */ jsxRuntimeExports.jsx(FieldDescription, { children: description }),
            showError && errorMessage && /* @__PURE__ */ jsxRuntimeExports.jsx(FieldError, { children: errorMessage })
          ] })
        ]
      }
    );
  }
);
CheckboxPreset.displayName = "CheckboxPreset";

export { CheckboxPreset };
//# sourceMappingURL=checkbox-preset-DAqPvfgk.js.map
