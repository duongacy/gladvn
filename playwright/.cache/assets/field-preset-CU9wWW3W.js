import { j as jsxRuntimeExports } from './utils-Boq2ewKh.js';
import { r as reactExports } from './index-DN3kw-fw.js';
import { F as Field, a as FieldLabel, d as FieldContent, b as FieldDescription, c as FieldError } from './field-OELQ2VRL.js';

const FieldPreset = reactExports.forwardRef(
  ({
    label,
    description,
    errorMessage,
    showError = true,
    htmlFor,
    children,
    className,
    size,
    ...fieldProps
  }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Field,
      {
        ref,
        className,
        error: !!errorMessage,
        size,
        ...fieldProps,
        children: [
          label && /* @__PURE__ */ jsxRuntimeExports.jsx(FieldLabel, { htmlFor, children: label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FieldContent, { children }),
          description && /* @__PURE__ */ jsxRuntimeExports.jsx(FieldDescription, { children: description }),
          showError && errorMessage && /* @__PURE__ */ jsxRuntimeExports.jsx(FieldError, { children: errorMessage })
        ]
      }
    );
  }
);
FieldPreset.displayName = "FieldPreset";

export { FieldPreset as F };
//# sourceMappingURL=field-preset-CU9wWW3W.js.map
