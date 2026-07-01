/**
 * ✅ AUDITED & REFACTORED
 * - Design System Compliant (22 Commandments)
 * - WCAG AAA/AA
 * - Form Control Parity
 * - CSS Delegated Logic
 */
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { useRender } from "@base-ui/react/use-render";

import { cn } from "@/lib/utils";

// CSS Delegated Logic:
// - has-data-[slot=alert-icon]: Tự động chuyển layout grid 2 cột nếu phát hiện Icon được truyền vào
// - has-data-[slot=alert-action]: Tạo khoảng padding phải (pr-18) khi có chứa Action component
const alertVariants = cva(
  "group/alert relative grid gap-0.5 rounded-lg border text-left has-data-[slot=alert-action]:pr-18 has-data-[slot=alert-icon]:grid-cols-[auto_1fr] bg-card text-card-foreground",
  {
    variants: {
      color: {
        info: "border-info/15 bg-info/5 text-info [&>[data-slot=alert-description]]:text-info/90",
        destructive:
          "border-destructive/15 bg-destructive/5 text-destructive [&>[data-slot=alert-description]]:text-destructive/90",
        success:
          "border-success/15 bg-success/5 text-success [&>[data-slot=alert-description]]:text-success/90",
        warning:
          "border-warning/15 bg-warning/5 text-warning [&>[data-slot=alert-description]]:text-warning/90",
      },
      size: {
        sm: "px-2 py-1.5 text-xs gap-x-1.5",
        md: "px-2.5 py-2 text-sm gap-x-2",
        lg: "px-3 py-2.5 text-base gap-x-2.5",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

function Alert({
  className,
  color,
  size,
  ...props
}: Omit<React.ComponentProps<"div">, "color"> &
  VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      data-size={size || "md"}
      role="alert"
      className={cn(alertVariants({ color, size }), className)}
      {...props}
    />
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "font-medium group-has-data-[slot=alert-icon]/alert:col-start-2",
        className,
      )}
      {...props}
    />
  );
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-sm text-balance text-muted-foreground md:text-pretty",
        className,
      )}
      {...props}
    />
  );
}

function AlertAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-action"
      className={cn("absolute top-2 right-2", className)}
      {...props}
    />
  );
}



import { mergeProps } from "@base-ui/react/merge-props";

function AlertIcon({
  className,
  render,
  ...props
}: useRender.ComponentProps<"div">) {
  return useRender({
    render,
    defaultTagName: "div",
    props: mergeProps<"div">(
      {
        className: cn(
          "col-start-1 row-span-2 translate-y-0.5 text-current",
          "size-4 group-data-[size=sm]/alert:size-3.5 group-data-[size=lg]/alert:size-5",
          className,
        ),
        "data-slot": "alert-icon",
      } as React.ComponentProps<"div">,
      props,
    ),
  });
}

export { Alert, AlertIcon, AlertTitle, AlertDescription, AlertAction };
