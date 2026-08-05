import { j as jsxRuntimeExports } from './jsx-runtime-B7ZaO6Q_.js';
import { r as reactExports } from './index-CxfbUVL5.js';
import { c as cva } from './index-CO0T2jO4.js';
import { c as cn } from './utils-BEvUJWKs.js';
import './clsx-ChV9xqsO.js';

const Empty = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "div",
  {
    ref,
    "data-slot": "empty",
    className: cn(
      "flex w-full min-w-0 flex-1 flex-col items-center justify-center gap-4 rounded-xl border-dashed p-6 text-center text-balance",
      className
    ),
    ...props
  }
));
Empty.displayName = "Empty";
const EmptyHeader = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "div",
  {
    ref,
    "data-slot": "empty-header",
    className: cn("flex max-w-sm flex-col items-center gap-2", className),
    ...props
  }
));
EmptyHeader.displayName = "EmptyHeader";
const emptyMediaVariants = cva(
  "flex shrink-0 items-center justify-center *:pointer-events-none *:shrink-0",
  {
    variants: {
      variant: {
        icon: "flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground **:[svg:not([class*='size-'])]:size-4"
      }
    }
  }
);
const EmptyMedia = reactExports.forwardRef(({ className, variant, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "div",
  {
    ref,
    "data-slot": "empty-icon",
    "data-variant": variant,
    className: cn(emptyMediaVariants({ variant, className })),
    ...props
  }
));
EmptyMedia.displayName = "EmptyMedia";
const EmptyTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "h3",
  {
    ref,
    "data-slot": "empty-title",
    className: cn("font-heading text-sm font-medium tracking-tight", className),
    ...props
  }
));
EmptyTitle.displayName = "EmptyTitle";
const EmptyDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "p",
  {
    ref,
    "data-slot": "empty-description",
    className: cn(
      "text-sm/relaxed text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-primary",
      className
    ),
    ...props
  }
));
EmptyDescription.displayName = "EmptyDescription";
const EmptyContent = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "div",
  {
    ref,
    "data-slot": "empty-content",
    className: cn(
      "flex w-full max-w-sm min-w-0 flex-col items-center gap-2.5 text-sm text-balance",
      className
    ),
    ...props
  }
));
EmptyContent.displayName = "EmptyContent";
const EmptyAction = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "div",
  {
    ref,
    "data-slot": "empty-action",
    className: cn("flex flex-col items-center gap-2", className),
    ...props
  }
));
EmptyAction.displayName = "EmptyAction";

export { Empty, EmptyAction, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle };
//# sourceMappingURL=empty-CC4B2Sco.js.map
