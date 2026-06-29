/**
 * ✅ AUDITED & REFACTORED
 * - Design System Compliant (20 Commandments)
 * - WCAG AAA/AA
 * - Form Control Parity
 * - CSS Delegated Logic
 */
"use client";

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const checkboxVariants = cva(
  "group/checkbox peer relative flex shrink-0 items-center justify-center rounded-sm border border-input transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:focus-visible:border-destructive aria-invalid:focus-visible:ring-3 aria-invalid:focus-visible:ring-destructive/50 aria-invalid:aria-checked:border-primary dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:focus-visible:ring-destructive/50 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary",
  {
    variants: {
      size: {
        sm: "checkbox-sm size-3.5 after:-inset-x-2.5 after:-inset-y-2.5",
        md: "checkbox-md size-4 after:-inset-x-3 after:-inset-y-2",
        lg: "checkbox-lg size-5 after:-inset-x-4 after:-inset-y-3",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

function Checkbox({
  className,
  size = "md",
  ...props
}: CheckboxPrimitive.Root.Props & VariantProps<typeof checkboxVariants>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(checkboxVariants({ size }), className)}
      {...props}
    />
  );
}

function CheckboxIndicator({
  className,
  ...props
}: CheckboxPrimitive.Indicator.Props) {
  return (
    <CheckboxPrimitive.Indicator
      data-slot="checkbox-indicator"
      className={cn(
        "grid place-content-center text-current transition-none [&>svg]:size-3.5 group-[.checkbox-sm]/checkbox:[&>svg]:size-3 group-[.checkbox-lg]/checkbox:[&>svg]:size-4",
        className,
      )}
      {...props}
    />
  );
}

export { Checkbox, CheckboxIndicator };
