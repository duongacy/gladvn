"use client";

import * as React from "react";

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";

import { type Size } from "../../lib/types";
import { cn } from "../../lib/utils";

// ---------------------------------------------------------------------------
// Defensive Context
// ---------------------------------------------------------------------------

const CheckboxContext = React.createContext(false);

function useCheckboxContext(componentName: string) {
  const isInsideCheckbox = React.useContext(CheckboxContext);
  if (!isInsideCheckbox && process.env.NODE_ENV !== "production") {
    console.warn(
      `[gladvn] <${componentName}> phải được dùng bên trong <Checkbox>.`,
    );
  }
}

// ---------------------------------------------------------------------------
// Checkbox (Root)
// ---------------------------------------------------------------------------

const Checkbox = React.forwardRef<
  React.ComponentRef<typeof CheckboxPrimitive.Root>,
  React.ComponentProps<typeof CheckboxPrimitive.Root> & {
    size?: Size;
  }
>(function Checkbox({ className, size = "md", children, ...props }, ref) {
  return (
    <CheckboxPrimitive.Root
      ref={ref}
      data-slot="checkbox"
      data-size={size}
      className={cn(
        // Layout & appearance — no size values here
        "peer relative flex shrink-0 items-center justify-center rounded-sm border border-input transition-colors outline-none",
        // Hit area via ::after pseudo-element
        "after:absolute after:content-['']",
        // Focus-visible ring
        "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:ring-offset-1 focus-visible:ring-offset-background",
        // Disabled state
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        // aria-invalid states
        "aria-invalid:border-destructive aria-invalid:focus-visible:border-destructive aria-invalid:focus-visible:ring-3 aria-invalid:focus-visible:ring-destructive/50 aria-invalid:data-checked:border-destructive aria-invalid:data-checked:bg-destructive aria-invalid:data-checked:text-destructive-foreground",
        // Dark mode
        "dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:focus-visible:ring-destructive/50",
        // Checked states
        "data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary",
        // ── Contextual Sizing (specificity = 0) ──────────────────────────────
        // sm
        "[:where([data-slot=checkbox][data-size=sm]_&)]:size-3.5",
        "[:where([data-slot=checkbox][data-size=sm]_&)]:after:-inset-x-2.5",
        "[:where([data-slot=checkbox][data-size=sm]_&)]:after:-inset-y-2.5",
        // md
        "[:where([data-slot=checkbox][data-size=md]_&)]:size-4",
        "[:where([data-slot=checkbox][data-size=md]_&)]:after:-inset-x-3",
        "[:where([data-slot=checkbox][data-size=md]_&)]:after:-inset-y-2",
        // lg
        "[:where([data-slot=checkbox][data-size=lg]_&)]:size-5",
        "[:where([data-slot=checkbox][data-size=lg]_&)]:after:-inset-x-4",
        "[:where([data-slot=checkbox][data-size=lg]_&)]:after:-inset-y-3",
        className,
      )}
      {...props}
    >
      <CheckboxContext value={true}>{children}</CheckboxContext>
    </CheckboxPrimitive.Root>
  );
});
Checkbox.displayName = "Checkbox";

// ---------------------------------------------------------------------------
// CheckboxIndicator
// ---------------------------------------------------------------------------

const CheckboxIndicator = React.forwardRef<
  React.ComponentRef<typeof CheckboxPrimitive.Indicator>,
  React.ComponentProps<typeof CheckboxPrimitive.Indicator>
>(function CheckboxIndicator({ className, ...props }, ref) {
  useCheckboxContext("CheckboxIndicator");

  return (
    <CheckboxPrimitive.Indicator
      ref={ref}
      data-slot="checkbox-indicator"
      className={cn(
        // No default icon size — all sizing via zero-specificity context below
        "grid place-content-center text-current transition-none",
        // ── Contextual Icon Sizing (specificity = 0) ─────────────────────────
        // sm
        "[:where([data-slot=checkbox][data-size=sm]_&>svg)]:size-3",
        // md
        "[:where([data-slot=checkbox][data-size=md]_&>svg)]:size-3.5",
        // lg
        "[:where([data-slot=checkbox][data-size=lg]_&>svg)]:size-4",
        className,
      )}
      {...props}
    />
  );
});
CheckboxIndicator.displayName = "CheckboxIndicator";

export { Checkbox, CheckboxIndicator };
