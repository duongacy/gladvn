import { f as formatErrorMessage } from './utils-Boq2ewKh.js';
import { r as reactExports } from './index-DN3kw-fw.js';

"use client";
const CheckboxGroupContext = /* @__PURE__ */ reactExports.createContext(void 0);
if (false) CheckboxGroupContext.displayName = "CheckboxGroupContext";
function useCheckboxGroupContext(optional = true) {
  const context = reactExports.useContext(CheckboxGroupContext);
  if (context === void 0 && !optional) {
    throw new Error(false ? "Base UI: CheckboxGroupContext is missing. CheckboxGroup parts must be placed within <CheckboxGroup>." : formatErrorMessage(3));
  }
  return context;
}

export { useCheckboxGroupContext as u };
//# sourceMappingURL=CheckboxGroupContext-CrMwEoUV.js.map
