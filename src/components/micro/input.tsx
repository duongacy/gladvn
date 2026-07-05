/**
 * ✅ AUDITED & REFACTORED
 * - Design System Compliant (20 Commandments)
 * - WCAG AAA/AA
 * - Form Control Parity
 * - CSS Delegated Logic
 */
import * as React from "react";
import { Input as InputPrimitive } from "@base-ui/react/input";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { type Size } from "@/lib/types";

const inputVariants = cva(
  "min-w-0 rounded-lg border border-input bg-transparent text-sm transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:focus-visible:ring-3 aria-invalid:focus-visible:ring-destructive/50 dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:focus-visible:ring-destructive/50",
  {
    variants: {
      size: {
        sm: "h-7 px-2 py-0.5 text-xs",
        md: "h-8 px-2.5 py-1 text-sm",
        lg: "h-9 px-3 py-1.5 text-sm",
      },
    },
  },
);

export type InputProps = Omit<React.ComponentPropsWithoutRef<typeof InputPrimitive>, "size"> &
  Omit<VariantProps<typeof inputVariants>, "size"> & {
    size?: Size;
  };

/**
 * @description Displays a form input field or a component that looks like an input field.
 * @example
 * <Input type="email" placeholder="Email" />
 */
const Input = React.forwardRef<React.ComponentRef<typeof InputPrimitive>, InputProps>(
  function Input({ className, size = "md", ...props }, ref) {
    return (
      <InputPrimitive
        ref={ref}
        data-slot="input"
        className={cn(inputVariants({ size, className }))}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
