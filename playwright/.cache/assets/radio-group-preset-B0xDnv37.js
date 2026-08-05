import { j as jsxRuntimeExports } from './jsx-runtime-B7ZaO6Q_.js';
import { r as reactExports } from './index-CxfbUVL5.js';
import { Label } from './label-CWZYnIUA.js';
import { RadioGroup, RadioGroupItem } from './radio-group-D9EA2aJc.js';
import { c as cn } from './utils-BEvUJWKs.js';
import { F as FieldPreset } from './field-preset-CHYlaesg.js';
import './index-CO0T2jO4.js';
import './clsx-ChV9xqsO.js';
import './useRenderElement-CBh4CqIk.js';
import './useIsoLayoutEffect-DYGwUf-I.js';
import './useValueChanged-DC3oRYWc.js';
import './createBaseUIEventDetails-BVY0zsWT.js';
import './error-eXSmbXjy.js';
import './noop-D1rYtPi8.js';
import './useTransitionStatus-Td1Imt8w.js';
import './useAnimationFrame-BapKY_Lh.js';
import './index-Bg6MWjzY.js';
import './useButton-DXihKi_N.js';
import './DirectionContext-CFNfCIwa.js';
import './utils-BWTU_UV9.js';
import './FieldItemContext-CkWlmw4u.js';
import './useAriaLabelledBy-BdH1_PlI.js';
import './useLabelableId-BojUVp-D.js';
import './FieldsetRootContext-EBDuaG1o.js';
import './field-Brh5XK2L.js';
import './lucide-react-Bx1hgLrA.js';
import './separator-BGMV3A5v.js';

"use client";
const RadioGroupPreset = reactExports.forwardRef(
  ({
    options,
    orientation = "vertical",
    label,
    description,
    errorMessage,
    showError = true,
    className,
    id,
    size = "md",
    ...radioGroupProps
  }, ref) => {
    const generatedId = reactExports.useId();
    const inputId = id || generatedId;
    const textSizeClass = cn({
      "text-xs": size === "sm",
      "text-sm": size === "md",
      "text-base": size === "lg"
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      FieldPreset,
      {
        size,
        label,
        description,
        errorMessage,
        showError,
        className,
        htmlFor: inputId,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          RadioGroup,
          {
            ref,
            id: inputId,
            className: cn("flex", {
              "flex-col gap-2": orientation === "vertical",
              "flex-row gap-4 flex-wrap": orientation !== "vertical"
            }),
            "aria-invalid": !!errorMessage,
            ...radioGroupProps,
            children: options.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: cn("flex items-center leading-snug", textSizeClass),
                  children: [
                    "​",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      RadioGroupItem,
                      {
                        value: option.value,
                        id: `${inputId}-${option.value}`,
                        disabled: option.disabled,
                        size
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Label,
                  {
                    htmlFor: `${inputId}-${option.value}`,
                    className: cn(
                      "font-normal cursor-pointer leading-snug",
                      textSizeClass,
                      { "opacity-50 cursor-not-allowed": option.disabled }
                    ),
                    children: option.label
                  }
                ),
                option.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: cn("text-muted-foreground", textSizeClass), children: option.description })
              ] })
            ] }, option.value))
          }
        )
      }
    );
  }
);
RadioGroupPreset.displayName = "RadioGroupPreset";

export { RadioGroupPreset };
//# sourceMappingURL=radio-group-preset-B0xDnv37.js.map
