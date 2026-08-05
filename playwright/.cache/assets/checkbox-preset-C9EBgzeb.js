import { j as jsxRuntimeExports } from './jsx-runtime-B7ZaO6Q_.js';
import { r as reactExports } from './index-CxfbUVL5.js';
import { Check } from './lucide-react-Bx1hgLrA.js';
import { Checkbox, CheckboxIndicator } from './checkbox-BSuroQtQ.js';
import { F as Field, a as FieldLabel, b as FieldDescription, c as FieldError } from './field-Brh5XK2L.js';
import { c as cn } from './utils-BEvUJWKs.js';
import './useRenderElement-CBh4CqIk.js';
import './createBaseUIEventDetails-BVY0zsWT.js';
import './error-eXSmbXjy.js';
import './useIsoLayoutEffect-DYGwUf-I.js';
import './noop-D1rYtPi8.js';
import './useValueChanged-DC3oRYWc.js';
import './useButton-DXihKi_N.js';
import './FieldItemContext-CkWlmw4u.js';
import './useAriaLabelledBy-BdH1_PlI.js';
import './CheckboxGroupContext-BBn5EAKH.js';
import './useTransitionStatus-Td1Imt8w.js';
import './useAnimationFrame-BapKY_Lh.js';
import './index-CO0T2jO4.js';
import './clsx-ChV9xqsO.js';
import './label-CWZYnIUA.js';
import './separator-BGMV3A5v.js';

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
//# sourceMappingURL=checkbox-preset-C9EBgzeb.js.map
