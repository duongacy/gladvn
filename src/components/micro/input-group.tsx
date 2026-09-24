/**
 * ✅ AUDITED & REFACTORED
 * - Self-contained: no imports from @/components/micro/*
 * - InputGroupButton, InputGroupInput, InputGroupTextarea render native HTML
 * - Zero-Specificity Contextual Sizing Architecture
 * - Defensive Context Pattern
 */
"use client";

import * as React from "react";

import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "../../lib/utils";

// ---------------------------------------------------------------------------
// Defensive Context
// ---------------------------------------------------------------------------

const InputGroupContext = React.createContext(false);

function useInputGroupContext(componentName: string) {
  const isInsideInputGroup = React.useContext(InputGroupContext);
  if (!isInsideInputGroup && process.env.NODE_ENV !== "production") {
    console.warn(
      `[gladvn] <${componentName}> phải được dùng bên trong <InputGroup>.`,
    );
  }
}

// ---------------------------------------------------------------------------
// InputGroup Root
// ---------------------------------------------------------------------------

const inputGroupVariants = cva(
  [
    "relative flex min-w-0 items-center overflow-hidden rounded-lg border border-input transition-colors outline-none",

    "has-disabled:bg-input/50 has-disabled:opacity-50 has-disabled:cursor-not-allowed dark:has-disabled:bg-input/80",

    "has-[[data-slot=input-group-control]:focus-visible]:border-ring",
    "has-[[data-slot=input-group-control]:focus-visible]:ring-3",
    "has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50",
    "has-[[data-slot=input-group-control]:focus-visible]:ring-offset-1",
    "has-[[data-slot=input-group-control]:focus-visible]:ring-offset-background",

    "has-[[data-slot][aria-invalid=true]]:border-destructive",
    "has-[[data-slot][aria-invalid=true]:focus-visible]:ring-3",
    "has-[[data-slot][aria-invalid=true]:focus-visible]:ring-destructive/50",
    "has-[[data-slot][aria-invalid=true]:focus-visible]:border-destructive",

    "dark:bg-input/30",
  ],
  {
    variants: {
      size: {
        // ⚠️ ZERO-SPECIFICITY TRAP: text-xs/text-sm removed from here.
        // Children define their own text size via :where() selectors.
        // min-h is structural (on root only), safe to keep.
        sm: "min-h-7",
        md: "min-h-8",
        lg: "min-h-9",
      },
    },
  },
);

const InputGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div"> &
    VariantProps<typeof inputGroupVariants>
>(function InputGroup({ className, size = "md", children, ...props }, ref) {
  return (
    <div
      ref={ref}
      data-slot="input-group"
      data-size={size}
      role="group"
      className={cn(inputGroupVariants({ size }), className)}
      {...props}
    >
      <InputGroupContext.Provider value={true}>
        {children}
      </InputGroupContext.Provider>
    </div>
  );
});
InputGroup.displayName = "InputGroup";

// ---------------------------------------------------------------------------
// InputGroupAddon
// ---------------------------------------------------------------------------

const inputGroupAddonVariants = cva(
  [
    "flex h-auto cursor-text items-center justify-center gap-2 font-medium text-muted-foreground select-none",
    "group-has-[[data-slot][aria-invalid=true]]/input-group:text-destructive",
    // ── Contextual Sizing (specificity = 0) ──────────────────────────────
    "[:where([data-slot=input-group][data-size=sm]_&)]:py-0.5",
    "[:where([data-slot=input-group][data-size=md]_&)]:py-1.5",
    "[:where([data-slot=input-group][data-size=lg]_&)]:py-1.5",
    // Icon sizing via :where() — overrideable by consumer
    "[:where(&>svg)]:pointer-events-none",
    "[:where([data-slot=input-group][data-size=sm]_&>svg)]:size-3.5",
    "[:where([data-slot=input-group][data-size=md]_&>svg)]:size-4",
    "[:where([data-slot=input-group][data-size=lg]_&>svg)]:size-4",
  ],
  {
    variants: {
      align: {
        start: "order-first pl-2 pr-1",
        end: "order-last pl-1 pr-2",
      },
    },
  },
);

const InputGroupAddon = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div"> &
    VariantProps<typeof inputGroupAddonVariants>
>(function InputGroupAddon({ className, align = "start", ...props }, ref) {
  useInputGroupContext("InputGroupAddon");
  return (
    <div
      ref={ref}
      data-slot="input-group-addon"
      data-align={align}
      className={cn(inputGroupAddonVariants({ align }), className)}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("button")) return;
        e.currentTarget.parentElement
          ?.querySelector<HTMLElement>("input, textarea")
          ?.focus();
      }}
      {...props}
    />
  );
});
InputGroupAddon.displayName = "InputGroupAddon";

// ---------------------------------------------------------------------------
// InputGroupText
// ---------------------------------------------------------------------------

const InputGroupText = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span">
>(function InputGroupText({ className, ...props }, ref) {
  useInputGroupContext("InputGroupText");
  return (
    <span
      ref={ref}
      className={cn(
        "flex items-center gap-2 text-muted-foreground",
        // Icon sizing via :where() — overrideable by consumer
        "[:where(&>svg)]:pointer-events-none",
        "[:where([data-slot=input-group][data-size=sm]_&>svg)]:size-3.5",
        "[:where([data-slot=input-group][data-size=md]_&>svg)]:size-4",
        "[:where([data-slot=input-group][data-size=lg]_&>svg)]:size-4",
        className,
      )}
      {...props}
    />
  );
});
InputGroupText.displayName = "InputGroupText";

// ---------------------------------------------------------------------------
// InputGroupButton
// ---------------------------------------------------------------------------

const inputGroupButtonVariants = cva(
  [
    "inline-flex shrink-0 self-stretch cursor-pointer items-center justify-center gap-1.5 font-medium whitespace-nowrap transition-colors duration-150 select-none",

    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-1 focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-50",

    "[&:not(:first-child)]:border-l [&:not(:last-child)]:border-r border-border",

    // Icon sizing via :where() — overrideable by consumer
    "[:where([data-slot=input-group][data-size=sm]_&>svg)]:size-3.5",
    "[:where([data-slot=input-group][data-size=md]_&>svg)]:size-4",
    "[:where([data-slot=input-group][data-size=lg]_&>svg)]:size-4",
  ],
  {
    variants: {
      variant: {
        ghost:
          "bg-transparent text-muted-foreground hover:bg-muted hover:text-foreground",
        solid: "bg-primary text-primary-foreground hover:bg-primary/90",
        soft: "bg-muted text-foreground hover:bg-muted/80",
        outline:
          "border border-input bg-transparent text-foreground hover:bg-muted/50",
      },
      icon: {
        true: [
          // ── Contextual Sizing (specificity = 0) ──────────────────────
          "[:where([data-slot=input-group][data-size=sm]_&)]:w-7",
          "[:where([data-slot=input-group][data-size=md]_&)]:w-8",
          "[:where([data-slot=input-group][data-size=lg]_&)]:w-9",
        ],
        false: [
          // ── Contextual Sizing (specificity = 0) ──────────────────────
          "[:where([data-slot=input-group][data-size=sm]_&)]:px-2",
          "[:where([data-slot=input-group][data-size=sm]_&)]:text-xs",
          "[:where([data-slot=input-group][data-size=md]_&)]:px-2.5",
          "[:where([data-slot=input-group][data-size=md]_&)]:text-sm",
          "[:where([data-slot=input-group][data-size=lg]_&)]:px-3",
          "[:where([data-slot=input-group][data-size=lg]_&)]:text-sm",
        ],
      },
    },
  },
);

type InputGroupButtonProps = React.ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof inputGroupButtonVariants>;

const InputGroupButton = React.forwardRef<
  HTMLButtonElement,
  InputGroupButtonProps
>(function InputGroupButton(
  { className, type = "button", variant = "ghost", icon = false, ...props },
  ref,
) {
  useInputGroupContext("InputGroupButton");
  return (
    <button
      ref={ref}
      type={type}
      data-slot="input-group-button"
      className={cn(inputGroupButtonVariants({ variant, icon }), className)}
      {...props}
    />
  );
});
InputGroupButton.displayName = "InputGroupButton";

// ---------------------------------------------------------------------------
// InputGroupInput
// ---------------------------------------------------------------------------

const InputGroupInput = React.forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithoutRef<"input">
>(function InputGroupInput({ className, ...props }, ref) {
  useInputGroupContext("InputGroupInput");
  return (
    <input
      ref={ref}
      data-slot="input-group-control"
      className={cn(
        "min-w-0 flex-1 bg-transparent outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed",
        // ── Contextual Sizing (specificity = 0) ──────────────────────────
        "[:where([data-slot=input-group][data-size=sm]_&)]:px-2",
        "[:where([data-slot=input-group][data-size=sm]_&)]:py-0.5",
        "[:where([data-slot=input-group][data-size=sm]_&)]:text-xs",
        "[:where([data-slot=input-group][data-size=md]_&)]:px-2.5",
        "[:where([data-slot=input-group][data-size=md]_&)]:py-1",
        "[:where([data-slot=input-group][data-size=md]_&)]:text-sm",
        "[:where([data-slot=input-group][data-size=lg]_&)]:px-3",
        "[:where([data-slot=input-group][data-size=lg]_&)]:py-1.5",
        "[:where([data-slot=input-group][data-size=lg]_&)]:text-sm",
        className,
      )}
      {...props}
    />
  );
});
InputGroupInput.displayName = "InputGroupInput";

// ---------------------------------------------------------------------------
// InputGroupTextarea
// ---------------------------------------------------------------------------

const InputGroupTextarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentPropsWithoutRef<"textarea">
>(function InputGroupTextarea({ className, ...props }, ref) {
  useInputGroupContext("InputGroupTextarea");
  return (
    <textarea
      ref={ref}
      data-slot="input-group-control"
      className={cn(
        "min-w-0 flex-1 resize-none bg-transparent py-2 outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed",
        // ── Contextual Sizing (specificity = 0) ──────────────────────────
        "[:where([data-slot=input-group][data-size=sm]_&)]:px-2",
        "[:where([data-slot=input-group][data-size=sm]_&)]:text-xs",
        "[:where([data-slot=input-group][data-size=md]_&)]:px-2.5",
        "[:where([data-slot=input-group][data-size=md]_&)]:text-sm",
        "[:where([data-slot=input-group][data-size=lg]_&)]:px-3",
        "[:where([data-slot=input-group][data-size=lg]_&)]:text-sm",
        className,
      )}
      {...props}
    />
  );
});
InputGroupTextarea.displayName = "InputGroupTextarea";

export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
};
