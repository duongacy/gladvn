import { j as jsxRuntimeExports } from './jsx-runtime-B7ZaO6Q_.js';
import { r as reactExports } from './index-CxfbUVL5.js';
import { u as useRenderElement } from './useRenderElement-CBh4CqIk.js';
import { c as cn } from './utils-BEvUJWKs.js';
import './clsx-ChV9xqsO.js';

"use client";
const Separator$1 = /* @__PURE__ */ reactExports.forwardRef(function SeparatorComponent(componentProps, forwardedRef) {
  const {
    className,
    render,
    orientation = "horizontal",
    style,
    ...elementProps
  } = componentProps;
  const state = {
    orientation
  };
  const element = useRenderElement("div", componentProps, {
    state,
    ref: forwardedRef,
    props: [{
      role: "separator",
      "aria-orientation": orientation
    }, elementProps]
  });
  return element;
});
if (false) Separator$1.displayName = "Separator";

"use client";
function Separator({
  className,
  orientation = "horizontal",
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Separator$1,
    {
      "data-slot": "separator",
      orientation,
      className: cn(
        "shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=vertical]:w-px",
        className
      ),
      ...props
    }
  );
}

export { Separator };
//# sourceMappingURL=separator-BGMV3A5v.js.map
