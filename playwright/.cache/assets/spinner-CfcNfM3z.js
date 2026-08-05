import { j as jsxRuntimeExports } from './jsx-runtime-B7ZaO6Q_.js';
import { c as cva } from './index-CO0T2jO4.js';
import { Loader2 as LoaderCircle } from './lucide-react-Bx1hgLrA.js';
import './index-CxfbUVL5.js';
import './clsx-ChV9xqsO.js';

const spinnerVariants = cva("animate-spin motion-reduce:animate-none", {
  variants: {
    size: {
      sm: "size-3.5",
      md: "size-4",
      lg: "size-5"
    }
  }
});
function Spinner({ className, size = "md", ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    LoaderCircle,
    {
      "data-slot": "spinner",
      role: "status",
      "aria-label": "Loading",
      className: spinnerVariants({ size, className }),
      ...props
    }
  );
}

export { Spinner };
//# sourceMappingURL=spinner-CfcNfM3z.js.map
