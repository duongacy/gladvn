import { j as jsxRuntimeExports } from './jsx-runtime-B7ZaO6Q_.js';
import { r as reactExports } from './index-CxfbUVL5.js';
import { c as cva } from './index-CO0T2jO4.js';
import { c as cn } from './utils-BEvUJWKs.js';
import './clsx-ChV9xqsO.js';

"use client";
const labelVariants = cva(
  "flex items-center gap-2 leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 group-data-[invalid=true]:text-destructive",
  {
    variants: {
      size: {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-sm"
      }
    }
  }
);
const Label = reactExports.forwardRef(({ className, size = "md", ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "label",
    {
      ref,
      "data-slot": "label",
      className: cn(labelVariants({ size, className })),
      ...props
    }
  );
});
Label.displayName = "Label";

export { Label, labelVariants };
//# sourceMappingURL=label-CWZYnIUA.js.map
