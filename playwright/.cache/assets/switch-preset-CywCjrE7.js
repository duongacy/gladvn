import { j as jsxRuntimeExports, a as cn } from './utils-Boq2ewKh.js';
import { r as reactExports } from './index-DN3kw-fw.js';
import { F as Field, a as FieldLabel, b as FieldDescription, c as FieldError } from './field-OELQ2VRL.js';
import { Switch, SwitchThumb } from './switch-C4OBRav3.js';
import './lucide-react-Bncip4ky.js';
import './createBaseUIEventDetails-CHsRwCdV.js';
import './useValueChanged-BCnrh8Dv.js';
import './index-6mpbiNdg.js';
import './useButton-CAPP_3d9.js';
import './useAriaLabelledBy-B_r2e7Lf.js';
import './useLabelableId-I_W0ho2y.js';

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
//# sourceMappingURL=switch-preset-CywCjrE7.js.map
