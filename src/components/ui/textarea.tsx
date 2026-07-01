/**
 * ✅ AUDITED & REFACTORED
 * - Design System Compliant (22 Commandments)
 * - WCAG AAA/AA
 * - Form Control Parity
 * - CSS Delegated Logic
 */
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const textareaVariants = cva(
  "flex field-sizing-content min-h-16 min-w-0 rounded-lg border border-input bg-transparent text-sm transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:focus-visible:ring-3 aria-invalid:focus-visible:ring-destructive/50 dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:focus-visible:ring-destructive/50",
  {
    variants: {
      size: {
        sm: "px-2 py-1.5 text-xs",
        md: "px-2.5 py-2",
        lg: "px-3 py-2.5",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

function Textarea({
  className,
  size = "md",
  ...props
}: React.ComponentProps<"textarea"> & VariantProps<typeof textareaVariants>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(textareaVariants({ size, className }))}
      {...props}
    />
  );
}

export { Textarea };
