import { j as jsxRuntimeExports } from './jsx-runtime-B7ZaO6Q_.js';
import { r as reactExports } from './index-CxfbUVL5.js';
import { F as Field, a as FieldLabel, d as FieldContent, b as FieldDescription, c as FieldError } from './field-Brh5XK2L.js';

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
//# sourceMappingURL=field-preset-CHYlaesg.js.map
