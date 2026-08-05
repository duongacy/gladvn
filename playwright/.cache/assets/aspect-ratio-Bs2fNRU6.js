import { j as jsxRuntimeExports } from './jsx-runtime-B7ZaO6Q_.js';
import { r as reactExports } from './index-CxfbUVL5.js';
import { c as cn } from './utils-BEvUJWKs.js';
import './clsx-ChV9xqsO.js';

const AspectRatio = reactExports.forwardRef(({ ratio, className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      "data-slot": "aspect-ratio",
      style: {
        "--ratio": ratio
      },
      className: cn("relative aspect-(--ratio)", className),
      ...props
    }
  );
});
AspectRatio.displayName = "AspectRatio";

export { AspectRatio };
//# sourceMappingURL=aspect-ratio-Bs2fNRU6.js.map
