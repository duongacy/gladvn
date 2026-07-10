/**
 * ✅ AUDITED & REFACTORED
 * - Design System Compliant (22 Commandments)
 * - WCAG AAA/AA
 * - Form Control Parity
 * - CSS Delegated Logic
 */
"use client";

import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { Button } from "@/components/micro/button";
import { Input } from "@/components/micro/input";
import { Textarea } from "@/components/micro/textarea";
import { cn } from "@/lib/utils";

const inputGroupVariants = cva(
  [
    // Base layout
    "group/input-group relative flex min-w-0 items-center overflow-hidden rounded-lg border border-input transition-colors outline-none",
    // Combobox focus delegation
    "in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0",
    // Disabled state
    "has-disabled:bg-input/50 has-disabled:opacity-50 has-disabled:cursor-not-allowed dark:has-disabled:bg-input/80",
    // Focus state (delegated from inner input)
    "has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot=input-group-control]:focus-visible]:ring-offset-1 has-[[data-slot=input-group-control]:focus-visible]:ring-offset-background",
    // Invalid state (delegated from inner input)
    "has-[[data-slot][aria-invalid=true]]:border-destructive",
    "has-[[data-slot][aria-invalid=true]:focus-visible]:border-destructive has-[[data-slot][aria-invalid=true]:focus-visible]:ring-3 has-[[data-slot][aria-invalid=true]:focus-visible]:ring-destructive/50 dark:has-[[data-slot][aria-invalid=true]:focus-visible]:ring-destructive/50",
    // Dark mode background
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
  },
);

/**
 * @description Wrapper to group inputs and buttons seamlessly together.
 * @requires InputGroupText
 * @example
 * <InputGroup>
 *   <InputGroupText>$</InputGroupText>
 *   <Input />
 * </InputGroup>
 */
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

const inputGroupAddonVariants = cva(
  [
    // Base styling
    "flex h-auto cursor-text items-center justify-center gap-2 font-medium text-muted-foreground select-none",
    // Disabled state handled by has-disabled on wrapper
    // Invalid state (delegated from wrapper)
    "group-has-[[data-slot][aria-invalid=true]]/input-group:text-destructive",
    // Padding based on wrapper size
    "group-data-[size=sm]/input-group:py-0.5 group-data-[size=md]/input-group:py-1.5 group-data-[size=lg]/input-group:py-1.5",
    // Inner elements styling
    "[&>svg:not([class*='size-'])]:size-4 group-data-[size=sm]/input-group:[&>svg:not([class*='size-'])]:size-3.5",
  ],
  {
    variants: {
      align: {
        "inline-start": "order-first pl-2",
        "inline-end": "order-last pr-2",
        "block-start": "order-first w-full justify-start px-2.5 py-2",
        "block-end": "order-last w-full justify-start px-2.5 py-2",
      },
    },
  },
);

const InputGroupAddon = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div"> &
    VariantProps<typeof inputGroupAddonVariants>
>(function InputGroupAddon(
  { className, align = "inline-start", ...props },
  ref,
) {
  return (
    <div
      ref={ref}
      data-slot="input-group-addon"
      data-align={align}
      className={cn(inputGroupAddonVariants({ align }), className)}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("button")) {
          return;
        }
        e.currentTarget.parentElement?.querySelector("input")?.focus();
      }}
      {...props}
    />
  );
});
InputGroupAddon.displayName = "InputGroupAddon";

const inputGroupButtonVariants = cva(
  "flex items-center gap-2 text-sm shadow-none",
  {
    variants: {
      size: {
        sm: "h-7 gap-1.5 rounded-sm px-2 [&>svg:not([class*='size-'])]:size-3.5",
        md: "h-8 gap-2 rounded-md px-3 [&>svg:not([class*='size-'])]:size-4",
        lg: "h-9 gap-2 rounded-md px-4 [&>svg:not([class*='size-'])]:size-5",
        xs: "h-6 gap-1 rounded-sm px-1.5 [&>svg:not([class*='size-'])]:size-3.5",
        icon: "size-8 rounded-md p-0",
        "icon-sm": "size-8 p-0",
      },
    },
  },
);

const InputGroupButton = React.forwardRef<
  HTMLButtonElement,
  Omit<React.ComponentPropsWithoutRef<typeof Button>, "size" | "type"> &
    VariantProps<typeof inputGroupButtonVariants> & {
      type?: "button" | "submit" | "reset";
    }
>(function InputGroupButton(
  { className, type = "button", variant = "ghost", size = "xs", ...props },
  ref,
) {
  return (
    <Button
      ref={ref}
      type={type}
      data-size={size}
      variant={variant}
      className={cn(inputGroupButtonVariants({ size }), className)}
      {...props}
    />
  );
});
InputGroupButton.displayName = "InputGroupButton";

const InputGroupText = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span">
>(function InputGroupText({ className, ...props }, ref) {
  return (
    <span
      ref={ref}
      className={cn(
        "flex items-center gap-2 text-muted-foreground [&>svg]:pointer-events-none [&>svg:not([class*='size-'])]:size-4 group-data-[size=sm]/input-group:[&>svg:not([class*='size-'])]:size-3.5",
        className,
      )}
      {...props}
    />
  );
});
InputGroupText.displayName = "InputGroupText";

const InputGroupInput = React.forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithoutRef<typeof Input>
>(function InputGroupInput({ className, ...props }, ref) {
  return (
    <Input
      ref={ref}
      data-slot="input-group-control"
      className={cn(
        "flex-1 rounded-none border-0 bg-transparent shadow-none ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 disabled:bg-transparent disabled:opacity-100 aria-invalid:ring-0 aria-invalid:focus-visible:ring-0 aria-invalid:focus-visible:ring-offset-0 dark:bg-transparent dark:disabled:bg-transparent",
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

const InputGroupTextarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentPropsWithoutRef<typeof Textarea>
>(function InputGroupTextarea({ className, ...props }, ref) {
  return (
    <Textarea
      ref={ref}
      data-slot="input-group-control"
      className={cn(
        "flex-1 resize-none rounded-none border-0 bg-transparent py-2 shadow-none ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 disabled:bg-transparent disabled:opacity-100 aria-invalid:ring-0 aria-invalid:focus-visible:ring-0 aria-invalid:focus-visible:ring-offset-0 dark:bg-transparent dark:disabled:bg-transparent",
        "group-data-[size=sm]/input-group:text-xs group-data-[size=sm]/input-group:px-2",
        "group-data-[size=md]/input-group:text-sm group-data-[size=md]/input-group:px-2.5",
        "group-data-[size=lg]/input-group:text-sm group-data-[size=lg]/input-group:px-3",
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
