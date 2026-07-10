/**
 * ✅ AUDITED & REFACTORED
 * - Self-contained: no imports from @/components/micro/*
 * - InputGroupButton, InputGroupInput, InputGroupTextarea render native HTML
 * - Size is always inherited from InputGroup wrapper via CSS group modifiers
 * - InputGroupButton placed directly in InputGroup (not inside InputGroupAddon)
 */
"use client";

import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

/* ── InputGroup ─────────────────────────────────────────────────
   Wrapper that groups inputs, addons, and action buttons.
   `size` is set once here and propagated to all children via
   CSS group modifiers: group-data-[size=sm|md|lg]/input-group:*
   ─────────────────────────────────────────────────────────────── */
const inputGroupVariants = cva(
  [
    "group/input-group relative flex min-w-0 items-center overflow-hidden rounded-lg border border-input transition-colors outline-none",
    // Disabled state delegated from inner elements
    "has-disabled:bg-input/50 has-disabled:opacity-50 has-disabled:cursor-not-allowed dark:has-disabled:bg-input/80",
    // Focus ring delegated from [data-slot=input-group-control]
    "has-[[data-slot=input-group-control]:focus-visible]:border-ring",
    "has-[[data-slot=input-group-control]:focus-visible]:ring-3",
    "has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50",
    "has-[[data-slot=input-group-control]:focus-visible]:ring-offset-1",
    "has-[[data-slot=input-group-control]:focus-visible]:ring-offset-background",
    // Error state delegated from aria-invalid on inner control
    "has-[[data-slot][aria-invalid=true]]:border-destructive",
    "has-[[data-slot][aria-invalid=true]:focus-visible]:ring-3",
    "has-[[data-slot][aria-invalid=true]:focus-visible]:ring-destructive/50",
    "has-[[data-slot][aria-invalid=true]:focus-visible]:border-destructive",
    // Dark mode base
    "dark:bg-input/30",
  ],
  {
    variants: {
      size: {
        sm: "min-h-7 text-xs",
        md: "min-h-8 text-sm",
        lg: "min-h-9 text-sm",
      },
    },
    defaultVariants: { size: "md" },
  },
);

const InputGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div"> &
    VariantProps<typeof inputGroupVariants>
>(function InputGroup({ className, size = "md", ...props }, ref) {
  return (
    <div
      ref={ref}
      data-slot="input-group"
      data-size={size}
      role="group"
      className={cn(inputGroupVariants({ size }), className)}
      {...props}
    />
  );
});
InputGroup.displayName = "InputGroup";

/* ── InputGroupAddon ─────────────────────────────────────────────
   Decorative slot for text/icon labels only (non-interactive).
   Clicking the addon area focuses the nearest input/textarea.
   Use `align="start"` (default) or `align="end"`.
   ─────────────────────────────────────────────────────────────── */
const inputGroupAddonVariants = cva(
  [
    "flex h-auto cursor-text items-center justify-center gap-2 font-medium text-muted-foreground select-none",
    "group-has-[[data-slot][aria-invalid=true]]/input-group:text-destructive",
    "group-data-[size=sm]/input-group:py-0.5",
    "group-data-[size=md]/input-group:py-1.5",
    "group-data-[size=lg]/input-group:py-1.5",
    "[&>svg:not([class*='size-'])]:size-4",
    "group-data-[size=sm]/input-group:[&>svg:not([class*='size-'])]:size-3.5",
  ],
  {
    variants: {
      align: {
        start: "order-first pl-2 pr-1",
        end: "order-last pl-1 pr-2",
      },
    },
    defaultVariants: { align: "start" },
  },
);

const InputGroupAddon = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div"> &
    VariantProps<typeof inputGroupAddonVariants>
>(function InputGroupAddon({ className, align = "start", ...props }, ref) {
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

/* ── InputGroupText ──────────────────────────────────────────────
   Inline label text or icon+text combo inside an InputGroupAddon.
   @note Decorative icons placed here should include `aria-hidden="true"`
   to prevent screen readers from announcing them, e.g.:
   <InputGroupText><SearchIcon aria-hidden="true" /></InputGroupText>
   ─────────────────────────────────────────────────────────────── */
const InputGroupText = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span">
>(function InputGroupText({ className, ...props }, ref) {
  return (
    <span
      ref={ref}
      className={cn(
        "flex items-center gap-2 text-muted-foreground",
        "[&>svg]:pointer-events-none [&>svg:not([class*='size-'])]:size-4",
        "group-data-[size=sm]/input-group:[&>svg:not([class*='size-'])]:size-3.5",
        className,
      )}
      {...props}
    />
  );
});
InputGroupText.displayName = "InputGroupText";

/* ── InputGroupButton ────────────────────────────────────────────
   Self-contained native <button>. Place directly inside InputGroup
   (not inside InputGroupAddon). Size is always inherited from the
   parent InputGroup via CSS group modifiers — no `size` prop.

   Separator borders (border-l / border-r) are applied automatically
   based on DOM position within the flex container.

   icon={true}  → square icon-only button (width = row height)
   icon={false} → text button with horizontal padding (default)
   ─────────────────────────────────────────────────────────────── */
const inputGroupButtonVariants = cva(
  [
    "inline-flex shrink-0 self-stretch cursor-pointer items-center justify-center gap-1.5 font-medium whitespace-nowrap transition-colors duration-150 select-none",
    // Self-managed focus ring (separate from wrapper delegation)
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-1 focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-50",
    // Auto separator borders based on sibling position
    "[&:not(:first-child)]:border-l [&:not(:last-child)]:border-r border-border",
    // Icon sizing — base (md/lg), overridden for sm. Shared by both icon and text modes.
    "[&>svg:not([class*='size-'])]:size-4",
    "group-data-[size=sm]/input-group:[&>svg:not([class*='size-'])]:size-3.5",
  ],
  {
    variants: {
      variant: {
        ghost:
          "bg-transparent text-muted-foreground hover:bg-muted hover:text-foreground",
        solid: "bg-primary text-primary-foreground hover:bg-primary/90",
        soft: "bg-muted text-foreground hover:bg-muted/80",
        outline: "border border-input bg-transparent text-foreground hover:bg-muted/50",
      },
      icon: {
        true: [
          // Square: width = min-h of wrapper
          "group-data-[size=sm]/input-group:w-7",
          "group-data-[size=md]/input-group:w-8",
          "group-data-[size=lg]/input-group:w-9",
        ],
        false: [
          // Text button: horizontal padding + font size from group
          "group-data-[size=sm]/input-group:px-2 group-data-[size=sm]/input-group:text-xs",
          "group-data-[size=md]/input-group:px-3 group-data-[size=md]/input-group:text-sm",
          "group-data-[size=lg]/input-group:px-4 group-data-[size=lg]/input-group:text-sm",
        ],
      },
    },
    defaultVariants: {
      variant: "ghost",
      icon: false,
    },
  },
);

type InputGroupButtonProps = React.ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof inputGroupButtonVariants>;

const InputGroupButton = React.forwardRef<
  HTMLButtonElement,
  InputGroupButtonProps
>(function InputGroupButton(
  { className, type = "button", variant, icon, ...props },
  ref,
) {
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

/* ── InputGroupInput ─────────────────────────────────────────────
   Self-contained native <input>. Size inherited from InputGroup.
   ─────────────────────────────────────────────────────────────── */
const InputGroupInput = React.forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithoutRef<"input">
>(function InputGroupInput({ className, ...props }, ref) {
  return (
    <input
      ref={ref}
      data-slot="input-group-control"
      className={cn(
        "min-w-0 flex-1 bg-transparent outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed",
        "group-data-[size=sm]/input-group:h-7 group-data-[size=sm]/input-group:px-2 group-data-[size=sm]/input-group:py-0.5 group-data-[size=sm]/input-group:text-xs",
        "group-data-[size=md]/input-group:h-8 group-data-[size=md]/input-group:px-2.5 group-data-[size=md]/input-group:py-1 group-data-[size=md]/input-group:text-sm",
        "group-data-[size=lg]/input-group:h-9 group-data-[size=lg]/input-group:px-3 group-data-[size=lg]/input-group:py-1.5 group-data-[size=lg]/input-group:text-sm",
        className,
      )}
      {...props}
    />
  );
});
InputGroupInput.displayName = "InputGroupInput";

/* ── InputGroupTextarea ──────────────────────────────────────────
   Self-contained native <textarea>. Size inherited from InputGroup.
   ─────────────────────────────────────────────────────────────── */
const InputGroupTextarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentPropsWithoutRef<"textarea">
>(function InputGroupTextarea({ className, ...props }, ref) {
  return (
    <textarea
      ref={ref}
      data-slot="input-group-control"
      className={cn(
        "min-w-0 flex-1 resize-none bg-transparent py-2 outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed",
        "group-data-[size=sm]/input-group:px-2 group-data-[size=sm]/input-group:text-xs",
        "group-data-[size=md]/input-group:px-2.5 group-data-[size=md]/input-group:text-sm",
        "group-data-[size=lg]/input-group:px-3 group-data-[size=lg]/input-group:text-sm",
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
