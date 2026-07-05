/**
 * ✅ AUDITED & REFACTORED
 * - Design System Compliant (20 Commandments)
 * - WCAG AAA/AA
 * - Form Control Parity
 * - CSS Delegated Logic
 */
"use client";

import * as React from "react";
import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { type Size } from "@/lib/types";

const checkboxVariants = cva(
  "group/checkbox peer relative flex shrink-0 items-center justify-center rounded-sm border border-input after:absolute after:content-[''] transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:focus-visible:border-destructive aria-invalid:focus-visible:ring-3 aria-invalid:focus-visible:ring-destructive/50 aria-invalid:data-checked:border-destructive aria-invalid:data-checked:bg-destructive aria-invalid:data-checked:text-destructive-foreground dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:focus-visible:ring-destructive/50 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary",
  {
    variants: {
      size: {
        sm: "size-3.5 after:-inset-x-2.5 after:-inset-y-2.5",
        md: "size-4 after:-inset-x-3 after:-inset-y-2",
        lg: "size-5 after:-inset-x-4 after:-inset-y-3",
      },
    },
  },
);

/**
 * @description A control that allows the user to toggle between checked and not checked.
 * @example
 * <Checkbox id="terms" />
 * <label htmlFor="terms">Accept terms</label>
 */
const Checkbox = React.forwardRef<
  React.ComponentRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> &
  Omit<VariantProps<typeof checkboxVariants>, "size"> & {
    size?: Size;
  }
>(function Checkbox({ className, size = "md", ...props }, ref) {
  return (
    <CheckboxPrimitive.Root
      ref={ref}
      data-slot="checkbox"
      data-size={size}
      className={cn(checkboxVariants({ size }), className)}
      {...props}
    />
  );
});
Checkbox.displayName = "Checkbox";

const CheckboxIndicator = React.forwardRef<
  React.ComponentRef<typeof CheckboxPrimitive.Indicator>,
  React.ComponentProps<typeof CheckboxPrimitive.Indicator>
>(function CheckboxIndicator({ className, ...props }, ref) {
  return (
    <CheckboxPrimitive.Indicator
      ref={ref}
      data-slot="checkbox-indicator"
      className={cn(
        "grid place-content-center text-current transition-none [&>svg]:size-3.5 group-data-[size=sm]/checkbox:[&>svg]:size-3 group-data-[size=lg]/checkbox:[&>svg]:size-4",
        className,
      )}
      {...props}
    />
  );
});
CheckboxIndicator.displayName = "CheckboxIndicator";

export { Checkbox, CheckboxIndicator };
