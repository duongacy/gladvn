import { c as cva, j as jsxRuntimeExports, a as cn, u as useRenderElement } from './utils-Boq2ewKh.js';
import { r as reactExports } from './index-DN3kw-fw.js';
import { AlertCircle as CircleAlert } from './lucide-react-Bncip4ky.js';

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

"use client";
const FieldSet = reactExports.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "fieldset",
    {
      ref,
      "data-slot": "field-set",
      className: cn("flex flex-col gap-4", className),
      ...props
    }
  );
});
FieldSet.displayName = "FieldSet";
const FieldLegend = reactExports.forwardRef(({ className, variant = "legend", ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "legend",
    {
      ref,
      "data-slot": "field-legend",
      "data-variant": variant,
      className: cn(
        "mb-1.5 font-medium data-[variant=label]:text-sm data-[variant=legend]:text-base",
        className
      ),
      ...props
    }
  );
});
FieldLegend.displayName = "FieldLegend";
const FieldGroup = reactExports.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      "data-slot": "field-group",
      className: cn(
        "group/field-group flex flex-col gap-5 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4",
        className
      ),
      ...props
    }
  );
});
FieldGroup.displayName = "FieldGroup";
const fieldVariants = cva("group/field flex min-w-fit", {
  variants: {
    orientation: {
      vertical: "flex-col [&>.sr-only]:w-auto",
      horizontal: "flex-row items-center [&>[data-slot=field-label]]:flex-auto",
      responsive: "flex-col @md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>[data-slot=field-label]]:flex-auto [&>.sr-only]:w-auto"
    },
    size: {
      sm: "",
      md: "",
      lg: ""
    }
  },
  compoundVariants: [
    { orientation: "vertical", size: "sm", className: "gap-0.5" },
    { orientation: "vertical", size: "md", className: "gap-0.5" },
    { orientation: "vertical", size: "lg", className: "gap-0.5" },
    { orientation: "horizontal", size: "sm", className: "gap-1" },
    { orientation: "horizontal", size: "md", className: "gap-1.5" },
    { orientation: "horizontal", size: "lg", className: "gap-2" },
    {
      orientation: "responsive",
      size: "sm",
      className: "gap-0.5 @md/field-group:gap-1"
    },
    {
      orientation: "responsive",
      size: "md",
      className: "gap-0.5 @md/field-group:gap-1.5"
    },
    {
      orientation: "responsive",
      size: "lg",
      className: "gap-0.5 @md/field-group:gap-2"
    }
  ]
});
const Field = reactExports.forwardRef(
  ({ className, orientation = "vertical", size = "md", error, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref,
        role: "group",
        "data-slot": "field",
        "data-orientation": orientation,
        "data-size": size,
        "data-invalid": !!error,
        className: cn(fieldVariants({ orientation, size }), className),
        ...props
      }
    );
  }
);
Field.displayName = "Field";
const FieldContent = reactExports.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      "data-slot": "field-content",
      className: cn(
        "group/field-content flex flex-1 flex-col gap-0.5 leading-snug",
        className
      ),
      ...props
    }
  );
});
FieldContent.displayName = "FieldContent";
const FieldLabel = reactExports.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Label,
    {
      ref,
      "data-slot": "field-label",
      className: cn(
        "group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50",
        "text-sm group-data-[size=sm]/field:text-xs",
        className
      ),
      ...props
    }
  );
});
FieldLabel.displayName = "FieldLabel";
const FieldTitle = reactExports.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      "data-slot": "field-title",
      className: cn(
        "flex w-fit items-center gap-2 font-medium group-data-[disabled=true]/field:opacity-50",
        "text-sm group-data-[size=sm]/field:text-xs",
        className
      ),
      ...props
    }
  );
});
FieldTitle.displayName = "FieldTitle";
const FieldDescription = reactExports.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "p",
    {
      ref,
      "data-slot": "field-description",
      className: cn(
        "text-left leading-normal font-normal text-muted-foreground group-data-[orientation=horizontal]/field:text-balance [[data-variant=legend]+&]:-mt-1.5",
        "last:mt-0 nth-last-2:-mt-1",
        "[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",
        "text-sm group-data-[size=sm]/field:text-xs",
        className
      ),
      ...props
    }
  );
});
FieldDescription.displayName = "FieldDescription";
const FieldSeparator = reactExports.forwardRef(({ children, className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref,
      "data-slot": "field-separator",
      "data-content": !!children,
      className: cn(
        "relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "absolute inset-0 top-1/2" }),
        children && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "relative mx-auto block w-fit bg-background px-2 text-muted-foreground",
            "data-slot": "field-separator-content",
            children
          }
        )
      ]
    }
  );
});
FieldSeparator.displayName = "FieldSeparator";
const FieldError = reactExports.forwardRef(({ className, children, errors, ...props }, ref) => {
  const content = reactExports.useMemo(() => {
    if (children) {
      return children;
    }
    if (!errors?.length) {
      return null;
    }
    const uniqueErrors = [
      ...new Map(errors.map((error) => [error?.message, error])).values()
    ];
    if (uniqueErrors?.length == 1) {
      return uniqueErrors[0]?.message;
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "ml-4 flex list-disc flex-col gap-1", children: uniqueErrors.map(
      (error, index) => error?.message && /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: error.message }, index)
    ) });
  }, [children, errors]);
  if (!content) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref,
      role: "alert",
      "data-slot": "field-error",
      className: cn(
        "text-sm font-medium text-destructive flex items-start gap-1.5 animate-in fade-in-0 slide-in-from-top-1",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "size-4 shrink-0 mt-0.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", children: content })
      ]
    }
  );
});
FieldError.displayName = "FieldError";

export { Field as F, Label as L, FieldLabel as a, FieldDescription as b, FieldError as c, FieldContent as d };
//# sourceMappingURL=field-OELQ2VRL.js.map
