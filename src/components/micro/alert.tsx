/**
 * ✅ AUDITED & REFACTORED
 * - Design System Compliant (22 Commandments)
 * - WCAG AAA/AA
 * - Form Control Parity
 * - CSS Delegated Logic
 */
import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "../../lib/utils";

// CSS Delegated Logic:
// - KHÔNG CÒN MAGIC CSS: Mọi logic layout (như khoảng cách icon, padding action) đều được uỷ quyền cho Macro xử lý.
const alertVariants = cva(
  "group/alert relative rounded-lg border text-left bg-card text-card-foreground",
  {
    variants: {
      color: {
        info: "border-info/15 bg-info/5 text-info",
        destructive: "border-destructive/15 bg-destructive/5 text-destructive",
        success: "border-success/15 bg-success/5 text-success",
        warning: "border-warning/15 bg-warning/5 text-warning",
      },
      size: {
        sm: "px-2 py-1.5 text-xs gap-x-1.5",
        md: "px-2.5 py-2 text-sm gap-x-2",
        lg: "px-3 py-2.5 text-base gap-x-2.5",
      },
    },
  },
);

/**
 * @description Displays a callout for user attention.
 * @requires AlertTitle, AlertDescription
 * @example
 * <Alert variant="destructive">
 *   <AlertTitle>Error</AlertTitle>
 *   <AlertDescription>Something went wrong.</AlertDescription>
 * </Alert>
 */
export type AlertProps = Omit<React.ComponentProps<"div">, "color"> &
  VariantProps<typeof alertVariants>;

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  { className, color = "info", size = "md", ...props },
  ref,
) {
  return (
    <div
      ref={ref}
      data-slot="alert"
      data-size={size}
      data-color={color}
      role="alert"
      className={cn(alertVariants({ color, size }), className)}
      {...props}
    />
  );
});
Alert.displayName = "Alert";

export type AlertTitleProps = React.ComponentProps<"div">;

const AlertTitle = React.forwardRef<HTMLDivElement, AlertTitleProps>(
  function AlertTitle({ className, ...props }, ref) {
    return (
      <div
        ref={ref}
        data-slot="alert-title"
        className={cn("font-medium", className)}
        {...props}
      />
    );
  },
);
AlertTitle.displayName = "AlertTitle";

export type AlertDescriptionProps = React.ComponentProps<"div">;

const AlertDescription = React.forwardRef<
  HTMLDivElement,
  AlertDescriptionProps
>(function AlertDescription({ className, ...props }, ref) {
  return (
    <div
      ref={ref}
      data-slot="alert-description"
      className={cn(
        "text-balance text-muted-foreground md:text-pretty leading-relaxed",
        "group-data-[color=info]/alert:text-info/90",
        "group-data-[color=destructive]/alert:text-destructive/90",
        "group-data-[color=success]/alert:text-success/90",
        "group-data-[color=warning]/alert:text-warning/90",
        className,
      )}
      {...props}
    />
  );
});
AlertDescription.displayName = "AlertDescription";

export type AlertActionProps = React.ComponentProps<"div">;

const AlertAction = React.forwardRef<HTMLDivElement, AlertActionProps>(
  function AlertAction({ className, ...props }, ref) {
    return (
      <div
        ref={ref}
        data-slot="alert-action"
        className={cn(className)}
        {...props}
      />
    );
  },
);
AlertAction.displayName = "AlertAction";

export type AlertIconProps = useRender.ComponentProps<"div">;

const AlertIcon = React.forwardRef<HTMLDivElement, AlertIconProps>(
  function AlertIcon({ className, render, ...props }, ref) {
    return useRender({
      render,
      defaultTagName: "div",
      props: mergeProps<"div">(
        {
          ref,
          className: cn(
            "text-current",
            "size-4 group-data-[size=sm]/alert:size-3.5 group-data-[size=lg]/alert:size-5",
            className,
          ),
          "data-slot": "alert-icon",
        } as React.ComponentProps<"div">,
        props,
      ),
    });
  },
);
AlertIcon.displayName = "AlertIcon";

export { Alert, AlertAction, AlertDescription, AlertIcon, AlertTitle };
