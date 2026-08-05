import { f as formatErrorMessage } from './useRenderElement-CBh4CqIk.js';
import { r as reactExports } from './index-CxfbUVL5.js';

"use client";
const FieldsetRootContext = /* @__PURE__ */ reactExports.createContext(void 0);
if (false) FieldsetRootContext.displayName = "FieldsetRootContext";
function useFieldsetRootContext(optional = false) {
  const context = reactExports.useContext(FieldsetRootContext);
  if (!context && !optional) {
    throw new Error(false ? "Base UI: FieldsetRootContext is missing. Fieldset parts must be placed within <Fieldset.Root>." : formatErrorMessage(86));
  }
  return context;
}

export { useFieldsetRootContext as u };
//# sourceMappingURL=FieldsetRootContext-EBDuaG1o.js.map
