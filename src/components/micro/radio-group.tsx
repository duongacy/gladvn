/**
 * ✅ AUDITED & REFACTORED
 * - Design System Compliant (22 Commandments)
 * - Zero-Specificity Contextual Sizing
 * - Defensive Context
 * - WCAG AAA/AA
 * - Form Control Parity
 */
"use client";

import * as React from "react";

import { Radio as RadioPrimitive } from "@base-ui/react/radio";
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group";

import { type Size } from "../../lib/types";
import { cn } from "../../lib/utils";

// ---------------------------------------------------------------------------
// Defensive Context
// ---------------------------------------------------------------------------

const RadioGroupContext = React.createContext(false);

function useRadioGroupContext(componentName: string) {
  const isInsideRadioGroup = React.useContext(RadioGroupContext);
  if (!isInsideRadioGroup && process.env.NODE_ENV !== "production") {
    console.warn(
      `[gladvn] <${componentName}> phải được dùng bên trong <RadioGroup>.`,
    );
  }
}

// ---------------------------------------------------------------------------
// RadioGroup (Root)
// ---------------------------------------------------------------------------

const RadioGroup = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive>,
  React.ComponentProps<typeof RadioGroupPrimitive> & {
    size?: Size;
  }
>(function RadioGroup({ className, size = "md", children, ...props }, ref) {
  return (
    <RadioGroupPrimitive
      ref={ref}
      data-slot="radio-group"
      data-size={size}
      className={cn("grid gap-2", className)}
      {...props}
    >
      <RadioGroupContext value={true}>{children}</RadioGroupContext>
    </RadioGroupPrimitive>
  );
});
RadioGroup.displayName = "RadioGroup";

// ---------------------------------------------------------------------------
// RadioGroupItem
// ---------------------------------------------------------------------------

const RadioGroupItem = React.forwardRef<
  React.ComponentRef<typeof RadioPrimitive.Root>,
  React.ComponentProps<typeof RadioPrimitive.Root>
>(function RadioGroupItem({ className, children, ...props }, ref) {
  useRadioGroupContext("RadioGroupItem");

  return (
    <RadioPrimitive.Root
      ref={ref}
      data-slot="radio-group-item"
      className={cn(
        // Layout & appearance — no hardcoded size values here
        "group/radio peer relative flex aspect-square shrink-0 rounded-full border border-input",
        // Hit area via ::after pseudo-element
        "after:absolute after:content-['']",
        // Focus-visible ring
        "outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:ring-offset-1 focus-visible:ring-offset-background",
        // Disabled state
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        // aria-invalid states
        "aria-invalid:border-destructive aria-invalid:focus-visible:border-destructive aria-invalid:focus-visible:ring-3 aria-invalid:focus-visible:ring-destructive/50",
        // Dark mode
        "dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:focus-visible:ring-destructive/50",
        // Checked states
        "data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary",
        // ── Contextual Sizing (specificity = 0) ──────────────────────────────
        // sm
        "[:where([data-slot=radio-group][data-size=sm]_&)]:size-3.5",
        "[:where([data-slot=radio-group][data-size=sm]_&)]:after:-inset-x-2.5",
        "[:where([data-slot=radio-group][data-size=sm]_&)]:after:-inset-y-2.5",
        // md
        "[:where([data-slot=radio-group][data-size=md]_&)]:size-4",
        "[:where([data-slot=radio-group][data-size=md]_&)]:after:-inset-x-3",
        "[:where([data-slot=radio-group][data-size=md]_&)]:after:-inset-y-2",
        // lg
        "[:where([data-slot=radio-group][data-size=lg]_&)]:size-5",
        "[:where([data-slot=radio-group][data-size=lg]_&)]:after:-inset-x-4",
        "[:where([data-slot=radio-group][data-size=lg]_&)]:after:-inset-y-3",
        className,
      )}
      {...props}
    >
      <RadioGroupContext value={true}>{children}</RadioGroupContext>
    </RadioPrimitive.Root>
  );
});
RadioGroupItem.displayName = "RadioGroupItem";

// ---------------------------------------------------------------------------
// RadioGroupIndicator
// ---------------------------------------------------------------------------

const RadioGroupIndicator = React.forwardRef<
  React.ComponentRef<typeof RadioPrimitive.Indicator>,
  React.ComponentProps<typeof RadioPrimitive.Indicator>
>(function RadioGroupIndicator({ className, children, ...props }, ref) {
  useRadioGroupContext("RadioGroupIndicator");

  return (
    <RadioPrimitive.Indicator
      ref={ref}
      data-slot="radio-group-indicator"
      className={cn(
        // No hardcoded size — all sizing via zero-specificity context below
        "flex items-center justify-center",
        // ── Contextual Sizing (specificity = 0) ──────────────────────────────
        // sm
        "[:where([data-slot=radio-group][data-size=sm]_&)]:size-3.5",
        // md
        "[:where([data-slot=radio-group][data-size=md]_&)]:size-4",
        // lg
        "[:where([data-slot=radio-group][data-size=lg]_&)]:size-5",
        className,
      )}
      {...props}
    >
      {children ?? (
        <span
          className={cn(
            // No hardcoded size — all sizing via zero-specificity context below
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-foreground",
            // ── Contextual Dot Sizing (specificity = 0) ──────────────────────
            // sm
            "[:where([data-slot=radio-group][data-size=sm]_&)]:size-1.5",
            // md
            "[:where([data-slot=radio-group][data-size=md]_&)]:size-2",
            // lg
            "[:where([data-slot=radio-group][data-size=lg]_&)]:size-2.5",
          )}
        />
      )}
    </RadioPrimitive.Indicator>
  );
});
RadioGroupIndicator.displayName = "RadioGroupIndicator";

export { RadioGroup, RadioGroupIndicator, RadioGroupItem };
