import { a as cn, j as jsxRuntimeExports } from './utils-Boq2ewKh.js';
import { r as reactExports } from './index-DN3kw-fw.js';
import { L as Label } from './field-OELQ2VRL.js';
import { RadioGroup, RadioGroupItem } from './radio-group-DhFDHFuj.js';
import { F as FieldPreset } from './field-preset-CU9wWW3W.js';
import './lucide-react-Bncip4ky.js';
import './useValueChanged-BCnrh8Dv.js';
import './createBaseUIEventDetails-CHsRwCdV.js';
import './useTransitionStatus-APX8IVyJ.js';
import './useAnimationFrame-CQoe1Qb8.js';
import './index-6mpbiNdg.js';
import './useButton-CAPP_3d9.js';
import './DirectionContext-BAzFkpam.js';
import './utils-D8p5eZrR.js';
import './useAriaLabelledBy-B_r2e7Lf.js';
import './useLabelableId-I_W0ho2y.js';
import './FieldsetRootContext-mS-UnoeU.js';

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
//# sourceMappingURL=radio-group-preset-BDUMW909.js.map
