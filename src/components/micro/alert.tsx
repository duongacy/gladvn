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
import { mergeProps } from "@base-ui/react/merge-props";

import { cn } from "@/lib/utils";

// CSS Delegated Logic:
// - has-data-[slot=alert-icon]: Tự động chuyển layout grid 2 cột nếu phát hiện Icon được truyền vào
// - has-data-[slot=alert-action]: Tạo khoảng padding phải (pr-18) khi có chứa Action component
const alertVariants = cva(
  "group/alert relative grid gap-0.5 rounded-lg border text-left has-data-[slot=alert-action]:pr-8 has-data-[slot=alert-icon]:grid-cols-[auto_1fr] bg-card text-card-foreground",
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

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  function Alert({ className, color = "info", size = "md", ...props }, ref) {
    return (
      <div
        ref={ref}
        data-slot="alert"
        data-size={size}
        role="alert"
        className={cn(alertVariants({ color, size }), className)}
        {...props}
      />
    );
  }
);
Alert.displayName = "Alert";

export type AlertTitleProps = React.ComponentProps<"div">;

const AlertTitle = React.forwardRef<HTMLDivElement, AlertTitleProps>(
  function AlertTitle({ className, ...props }, ref) {
    return (
      <div
        ref={ref}
        data-slot="alert-title"
        className={cn(
          "font-medium group-has-data-[slot=alert-icon]/alert:col-start-2",
          className,
        )}
        {...props}
      />
    );
  }
);
AlertTitle.displayName = "AlertTitle";

export type AlertDescriptionProps = React.ComponentProps<"div">;

const AlertDescription = React.forwardRef<HTMLDivElement, AlertDescriptionProps>(
  function AlertDescription({ className, ...props }, ref) {
    return (
      <div
        ref={ref}
        data-slot="alert-description"
        className={cn(
          "text-balance text-muted-foreground md:text-pretty [&_p]:leading-relaxed",
          className,
        )}
        {...props}
      />
    );
  }
);
AlertDescription.displayName = "AlertDescription";

export type AlertActionProps = React.ComponentProps<"div">;

const AlertAction = React.forwardRef<HTMLDivElement, AlertActionProps>(
  function AlertAction({ className, ...props }, ref) {
    return (
      <div
        ref={ref}
        data-slot="alert-action"
        className={cn(
          "absolute right-2.5 top-2 group-data-[size=sm]/alert:right-2 group-data-[size=sm]/alert:top-1.5 group-data-[size=lg]/alert:right-3 group-data-[size=lg]/alert:top-2.5",
          className
        )}
        {...props}
      />
    );
  }
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
);
AlertIcon.displayName = "AlertIcon";

export { Alert, AlertIcon, AlertTitle, AlertDescription, AlertAction };
