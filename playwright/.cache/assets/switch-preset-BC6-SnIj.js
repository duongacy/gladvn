import { j as jsxRuntimeExports } from './jsx-runtime-B7ZaO6Q_.js';
import { r as reactExports } from './index-CxfbUVL5.js';
import { F as Field, a as FieldLabel, b as FieldDescription, c as FieldError } from './field-Brh5XK2L.js';
import { Switch, SwitchThumb } from './switch-uAPaWuX3.js';
import { c as cn } from './utils-BEvUJWKs.js';
import './index-CO0T2jO4.js';
import './clsx-ChV9xqsO.js';
import './lucide-react-Bx1hgLrA.js';
import './label-CWZYnIUA.js';
import './separator-BGMV3A5v.js';
import './useRenderElement-CBh4CqIk.js';
import './createBaseUIEventDetails-BVY0zsWT.js';
import './error-eXSmbXjy.js';
import './useIsoLayoutEffect-DYGwUf-I.js';
import './noop-D1rYtPi8.js';
import './useValueChanged-DC3oRYWc.js';
import './index-Bg6MWjzY.js';
import './useButton-DXihKi_N.js';
import './useAriaLabelledBy-BdH1_PlI.js';
import './useLabelableId-BojUVp-D.js';

"use client";
const SwitchPreset = reactExports.forwardRef(
  ({
    label,
    description,
    errorMessage,
    showError = true,
    className,
    id,
    size = "md",
    ...switchProps
  }, ref) => {
    const generatedId = reactExports.useId();
    const inputId = id || generatedId;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Field,
      {
        size,
        error: !!errorMessage,
        className: cn("gap-1.5", className),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-0.5", children: [
              label && /* @__PURE__ */ jsxRuntimeExports.jsx(FieldLabel, { htmlFor: inputId, children: label }),
              description && /* @__PURE__ */ jsxRuntimeExports.jsx(FieldDescription, { children: description })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Switch,
              {
                ref,
                id: inputId,
                "aria-invalid": !!errorMessage,
                size,
                ...switchProps,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(SwitchThumb, {})
              }
            )
          ] }),
          showError && errorMessage && /* @__PURE__ */ jsxRuntimeExports.jsx(FieldError, { children: errorMessage })
        ]
      }
    );
  }
);
SwitchPreset.displayName = "SwitchPreset";

export { SwitchPreset };
//# sourceMappingURL=switch-preset-BC6-SnIj.js.map
