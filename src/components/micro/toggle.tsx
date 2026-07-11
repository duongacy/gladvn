/**
 * ✅ AUDITED & REFACTORED
 * - Design System Compliant (22 Commandments)
 * - WCAG AAA/AA
 * - Form Control Parity
 * - CSS Delegated Logic
 */
"use client";

import { Toggle as TogglePrimitive } from "@base-ui/react/toggle";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const toggleVariants = cva(
  "group/toggle inline-flex items-center justify-center rounded-lg text-sm font-medium whitespace-nowrap transition-all outline-none hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:focus-visible:border-destructive aria-invalid:focus-visible:ring-3 aria-invalid:focus-visible:ring-destructive/50 dark:aria-invalid:focus-visible:ring-destructive/50 aria-pressed:bg-muted aria-pressed:text-foreground data-[state=on]:bg-muted data-[state=on]:text-foreground [&>svg]:pointer-events-none [&>svg]:shrink-0 [&>svg:not([class*='size-'])]:size-4 bg-transparent",
  {
    variants: {
      variant: {
        default: "",
        outline:
          "border border-input bg-transparent hover:bg-muted hover:text-foreground",
      },
      size: {
        sm: "h-7 min-w-7 gap-1 px-2.5 text-xs [&>svg:not([class*='size-'])]:size-3.5",
        md: "h-8 min-w-8 gap-1.5 px-3 text-sm",
        lg: "h-9 min-w-9 gap-2 px-4 text-sm",
      },
    },
  },
);

/**
 * @description A two-state button that can be either on or off.
 * @example
 * <Toggle aria-label="Toggle italic">
 *   <ItalicIcon />
 * </Toggle>
 */
function Toggle({
  className,
  variant = "default",
  size = "md",
  ...props
}: TogglePrimitive.Props & VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive
      data-slot="toggle"
      className={toggleVariants({ variant, size, className })}
      {...props}
    />
  );
}

export { Toggle, toggleVariants };
