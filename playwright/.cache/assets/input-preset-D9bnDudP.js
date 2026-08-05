import { c as cva, j as jsxRuntimeExports, a as cn } from './utils-Boq2ewKh.js';
import { r as reactExports, R as React } from './index-DN3kw-fw.js';
import { EyeOff, Eye } from './lucide-react-Bncip4ky.js';
import { Input } from './input-CPZKYufF.js';
import { F as FieldPreset } from './field-preset-CU9wWW3W.js';
import './createBaseUIEventDetails-CHsRwCdV.js';
import './FieldsetRootContext-mS-UnoeU.js';
import './useAriaLabelledBy-B_r2e7Lf.js';
import './useLabelableId-I_W0ho2y.js';
import './useLabel-Kzfup0HB.js';
import './utils-D8p5eZrR.js';
import './useAnimationFrame-CQoe1Qb8.js';
import './useTransitionStatus-APX8IVyJ.js';
import './CheckboxGroupContext-CrMwEoUV.js';
import './field-OELQ2VRL.js';

"use client";
const inputGroupVariants = cva(
  [
    "group/input-group relative flex min-w-0 items-center overflow-hidden rounded-lg border border-input transition-colors outline-none",
    "has-disabled:bg-input/50 has-disabled:opacity-50 has-disabled:cursor-not-allowed dark:has-disabled:bg-input/80",
    "has-[[data-slot=input-group-control]:focus-visible]:border-ring",
    "has-[[data-slot=input-group-control]:focus-visible]:ring-3",
    "has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50",
    "has-[[data-slot=input-group-control]:focus-visible]:ring-offset-1",
    "has-[[data-slot=input-group-control]:focus-visible]:ring-offset-background",
    "has-[[data-slot][aria-invalid=true]]:border-destructive",
    "has-[[data-slot][aria-invalid=true]:focus-visible]:ring-3",
    "has-[[data-slot][aria-invalid=true]:focus-visible]:ring-destructive/50",
    "has-[[data-slot][aria-invalid=true]:focus-visible]:border-destructive",
    "dark:bg-input/30"
  ],
  {
    variants: {
      size: {
        sm: "min-h-7 text-xs",
        md: "min-h-8 text-sm",
        lg: "min-h-9 text-sm"
      }
    }
  }
);
const InputGroup = reactExports.forwardRef(function InputGroup2({ className, size = "md", ...props }, ref) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      "data-slot": "input-group",
      "data-size": size,
      role: "group",
      className: cn(inputGroupVariants({ size }), className),
      ...props
    }
  );
});
InputGroup.displayName = "InputGroup";
const inputGroupAddonVariants = cva(
  [
    "flex h-auto cursor-text items-center justify-center gap-2 font-medium text-muted-foreground select-none",
    "group-has-[[data-slot][aria-invalid=true]]/input-group:text-destructive",
    "group-data-[size=sm]/input-group:py-0.5",
    "group-data-[size=md]/input-group:py-1.5",
    "group-data-[size=lg]/input-group:py-1.5",
    "[&>svg:not([class*='size-'])]:size-4",
    "group-data-[size=sm]/input-group:[&>svg:not([class*='size-'])]:size-3.5"
  ],
  {
    variants: {
      align: {
        start: "order-first pl-2 pr-1",
        end: "order-last pl-1 pr-2"
      }
    }
  }
);
const InputGroupAddon = reactExports.forwardRef(function InputGroupAddon2({ className, align = "start", ...props }, ref) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      "data-slot": "input-group-addon",
      "data-align": align,
      className: cn(inputGroupAddonVariants({ align }), className),
      onClick: (e) => {
        if (e.target.closest("button")) return;
        e.currentTarget.parentElement?.querySelector("input, textarea")?.focus();
      },
      ...props
    }
  );
});
InputGroupAddon.displayName = "InputGroupAddon";
const InputGroupText = reactExports.forwardRef(function InputGroupText2({ className, ...props }, ref) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      ref,
      className: cn(
        "flex items-center gap-2 text-muted-foreground",
        "[&>svg]:pointer-events-none [&>svg:not([class*='size-'])]:size-4",
        "group-data-[size=sm]/input-group:[&>svg:not([class*='size-'])]:size-3.5",
        className
      ),
      ...props
    }
  );
});
InputGroupText.displayName = "InputGroupText";
const inputGroupButtonVariants = cva(
  [
    "inline-flex shrink-0 self-stretch cursor-pointer items-center justify-center gap-1.5 font-medium whitespace-nowrap transition-colors duration-150 select-none",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-1 focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&:not(:first-child)]:border-l [&:not(:last-child)]:border-r border-border",
    "[&>svg:not([class*='size-'])]:size-4",
    "group-data-[size=sm]/input-group:[&>svg:not([class*='size-'])]:size-3.5"
  ],
  {
    variants: {
      variant: {
        ghost: "bg-transparent text-muted-foreground hover:bg-muted hover:text-foreground",
        solid: "bg-primary text-primary-foreground hover:bg-primary/90",
        soft: "bg-muted text-foreground hover:bg-muted/80",
        outline: "border border-input bg-transparent text-foreground hover:bg-muted/50"
      },
      icon: {
        true: [
          "group-data-[size=sm]/input-group:w-7",
          "group-data-[size=md]/input-group:w-8",
          "group-data-[size=lg]/input-group:w-9"
        ],
        false: [
          "group-data-[size=sm]/input-group:px-2 group-data-[size=sm]/input-group:text-xs",
          "group-data-[size=md]/input-group:px-2.5 group-data-[size=md]/input-group:text-sm",
          "group-data-[size=lg]/input-group:px-3 group-data-[size=lg]/input-group:text-sm"
        ]
      }
    }
  }
);
const InputGroupButton = reactExports.forwardRef(function InputGroupButton2({ className, type = "button", variant = "ghost", icon = false, ...props }, ref) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      ref,
      type,
      "data-slot": "input-group-button",
      className: cn(inputGroupButtonVariants({ variant, icon }), className),
      ...props
    }
  );
});
InputGroupButton.displayName = "InputGroupButton";
const InputGroupInput = reactExports.forwardRef(function InputGroupInput2({ className, ...props }, ref) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "input",
    {
      ref,
      "data-slot": "input-group-control",
      className: cn(
        "min-w-0 flex-1 bg-transparent outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed",
        "group-data-[size=sm]/input-group:px-2 group-data-[size=sm]/input-group:py-0.5 group-data-[size=sm]/input-group:text-xs",
        "group-data-[size=md]/input-group:px-2.5 group-data-[size=md]/input-group:py-1 group-data-[size=md]/input-group:text-sm",
        "group-data-[size=lg]/input-group:px-3 group-data-[size=lg]/input-group:py-1.5 group-data-[size=lg]/input-group:text-sm",
        className
      ),
      ...props
    }
  );
});
InputGroupInput.displayName = "InputGroupInput";
const InputGroupTextarea = reactExports.forwardRef(function InputGroupTextarea2({ className, ...props }, ref) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "textarea",
    {
      ref,
      "data-slot": "input-group-control",
      className: cn(
        "min-w-0 flex-1 resize-none bg-transparent py-2 outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed",
        "group-data-[size=sm]/input-group:px-2 group-data-[size=sm]/input-group:text-xs",
        "group-data-[size=md]/input-group:px-2.5 group-data-[size=md]/input-group:text-sm",
        "group-data-[size=lg]/input-group:px-3 group-data-[size=lg]/input-group:text-sm",
        className
      ),
      ...props
    }
  );
});
InputGroupTextarea.displayName = "InputGroupTextarea";

"use client";
const InputPreset = React.forwardRef(
  ({
    label,
    description,
    errorMessage,
    showError = true,
    className,
    size,
    id,
    startAdornment,
    endAdornment,
    type,
    ...props
  }, ref) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;
    const isInvalid = !!errorMessage;
    const isPasswordType = type === "password";
    const [showPassword, setShowPassword] = reactExports.useState(false);
    const actualType = isPasswordType ? showPassword ? "text" : "password" : type;
    const passwordToggleAdornment = isPasswordType ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      InputGroupButton,
      {
        type: "button",
        variant: "ghost",
        icon: true,
        onClick: () => setShowPassword((prev) => !prev),
        "aria-label": showPassword ? "Hide password" : "Show password",
        "aria-pressed": showPassword,
        className: "text-muted-foreground hover:text-foreground",
        children: showPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "size-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "size-4" })
      }
    ) : null;
    const combinedEndAdornment = endAdornment || passwordToggleAdornment ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      endAdornment && (typeof endAdornment === "string" ? /* @__PURE__ */ jsxRuntimeExports.jsx(InputGroupText, { children: endAdornment }) : endAdornment),
      passwordToggleAdornment
    ] }) : null;
    const hasAdornments = !!startAdornment || !!combinedEndAdornment;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      FieldPreset,
      {
        label,
        description,
        errorMessage,
        showError,
        className,
        size,
        htmlFor: inputId,
        children: hasAdornments ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "@container/input-group w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(InputGroup, { size, className: "w-full", children: [
          startAdornment && /* @__PURE__ */ jsxRuntimeExports.jsx(InputGroupAddon, { align: "start", children: typeof startAdornment === "string" ? /* @__PURE__ */ jsxRuntimeExports.jsx(InputGroupText, { children: startAdornment }) : startAdornment }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            InputGroupInput,
            {
              ref,
              id: inputId,
              "aria-invalid": isInvalid,
              type: actualType,
              ...props
            }
          ),
          combinedEndAdornment && /* @__PURE__ */ jsxRuntimeExports.jsx(InputGroupAddon, { align: "end", children: combinedEndAdornment })
        ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            ref,
            id: inputId,
            size,
            type: actualType,
            "aria-invalid": isInvalid,
            ...props
          }
        )
      }
    );
  }
);
InputPreset.displayName = "InputPreset";

export { InputPreset };
//# sourceMappingURL=input-preset-D9bnDudP.js.map
