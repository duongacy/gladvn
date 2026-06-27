/**
 * ✅ AUDITED & REFACTORED
 * - Design System Compliant (20 Commandments)
 * - WCAG AAA/AA
 * - Form Control Parity
 * - CSS Delegated Logic
 */
"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"
import { Button } from "./button"
import { Input } from "./input"
import { Textarea } from "./textarea"

const inputGroupVariants = cva(
  [
    // Base layout
    "group/input-group relative flex min-w-0 items-center rounded-lg border border-input transition-colors outline-none",
    // Combobox focus delegation
    "in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0",
    // Disabled state
    "has-disabled:bg-input/50 has-disabled:opacity-50 has-disabled:cursor-not-allowed dark:has-disabled:bg-input/80",
    // Focus state (delegated from inner input)
    "has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50",
    // Invalid state (delegated from inner input)
    "has-[[data-slot][aria-invalid=true]]:border-destructive",
    "has-[[data-slot][aria-invalid=true]:focus-visible]:border-destructive has-[[data-slot][aria-invalid=true]:focus-visible]:ring-3 has-[[data-slot][aria-invalid=true]:focus-visible]:ring-destructive/20 dark:has-[[data-slot][aria-invalid=true]:focus-visible]:ring-destructive/40",
    // Auto-height for block addons and textarea
    "has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col",
    "has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col",
    "has-[>textarea]:h-auto",
    // Padding adjustments for different addon alignments
    "has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-start]]:[&>input]:pb-3",
    "has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5",
    // Dark mode background
    "dark:bg-input/30",
  ],
  {
    variants: {
      size: {
        sm: "input-group-sm min-h-7 text-xs",
        md: "input-group-md min-h-8 text-sm",
        lg: "input-group-lg min-h-9 text-sm",
      },
    },
  }
)

function InputGroup({
  className,
  size = "md",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof inputGroupVariants>) {
  return (
    <div
      data-slot="input-group"
      role="group"
      className={cn(inputGroupVariants({ size }), className)}
      {...props}
    />
  )
}

const inputGroupAddonVariants = cva(
  [
    // Base styling
    "flex h-auto cursor-text items-center justify-center gap-2 font-medium text-muted-foreground select-none",
    // Disabled state (delegated from wrapper)
    "group-data-[disabled=true]/input-group:opacity-50",
    // Padding based on wrapper size
    "group-[.input-group-sm]/input-group:py-0.5 group-[.input-group-md]/input-group:py-1.5 group-[.input-group-lg]/input-group:py-1.5",
    // Inner elements styling
    "[&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4 group-[.input-group-sm]/input-group:[&>svg:not([class*='size-'])]:size-3.5",
  ],
  {
    variants: {
      align: {
        "inline-start":
          "order-first pl-2 has-[>button]:ml-[-0.3rem] has-[>kbd]:ml-[-0.15rem]",
        "inline-end":
          "order-last pr-2 has-[>button]:mr-[-0.3rem] has-[>kbd]:mr-[-0.15rem]",
        "block-start":
          "order-first w-full justify-start px-2.5 pt-2 group-has-[>input]/input-group:pt-2 [.border-b]:pb-2",
        "block-end":
          "order-last w-full justify-start px-2.5 pb-2 group-has-[>input]/input-group:pb-2 [.border-t]:pt-2",
      },
    },
  }
)

function InputGroupAddon({
  className,
  align = "inline-start",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof inputGroupAddonVariants>) {
  return (
    <div
      role="group"
      data-slot="input-group-addon"
      data-align={align}
      className={cn(inputGroupAddonVariants({ align }), className)}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("button")) {
          return
        }
        e.currentTarget.parentElement?.querySelector("input")?.focus()
      }}
      {...props}
    />
  )
}

const inputGroupButtonVariants = cva(
  "flex items-center gap-2 text-sm shadow-none",
  {
    variants: {
      size: {
        xs: "h-6 gap-1 rounded-[calc(var(--radius)-3px)] px-1.5 [&>svg:not([class*='size-'])]:size-3.5",
        sm: "",
        "icon-xs":
          "size-6 rounded-[calc(var(--radius)-3px)] p-0 has-[>svg]:p-0",
        "icon-sm": "size-8 p-0 has-[>svg]:p-0",
      },
    },
  }
)

function InputGroupButton({
  className,
  type = "button",
  variant = "ghost",
  size = "xs",
  ...props
}: Omit<React.ComponentProps<typeof Button>, "size" | "type"> &
  VariantProps<typeof inputGroupButtonVariants> & {
    type?: "button" | "submit" | "reset"
  }) {
  return (
    <Button
      type={type}
      data-size={size}
      variant={variant}
      className={cn(inputGroupButtonVariants({ size }), className)}
      {...props}
    />
  )
}

function InputGroupText({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "flex items-center gap-2 text-muted-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 group-[.input-group-sm]/input-group:[&>svg:not([class*='size-'])]:size-3.5",
        className
      )}
      {...props}
    />
  )
}

function InputGroupInput({
  className,
  ...props
}: React.ComponentProps<typeof Input>) {
  return (
    <Input
      data-slot="input-group-control"
      className={cn(
        "flex-1 rounded-none border-0 bg-transparent shadow-none ring-0 focus-visible:ring-0 disabled:bg-transparent disabled:opacity-100 aria-invalid:ring-0 aria-invalid:focus-visible:ring-0 dark:bg-transparent dark:disabled:bg-transparent",
        "group-[.input-group-sm]/input-group:h-7 group-[.input-group-sm]/input-group:px-2 group-[.input-group-sm]/input-group:py-0.5 group-[.input-group-sm]/input-group:text-xs",
        "group-[.input-group-md]/input-group:h-8 group-[.input-group-md]/input-group:px-2.5 group-[.input-group-md]/input-group:py-1 group-[.input-group-md]/input-group:text-sm",
        "group-[.input-group-lg]/input-group:h-9 group-[.input-group-lg]/input-group:px-3 group-[.input-group-lg]/input-group:py-1.5 group-[.input-group-lg]/input-group:text-sm",
        className
      )}
      {...props}
    />
  )
}

function InputGroupTextarea({
  className,
  ...props
}: React.ComponentProps<typeof Textarea>) {
  return (
    <Textarea
      data-slot="input-group-control"
      className={cn(
        "flex-1 resize-none rounded-none border-0 bg-transparent py-2 shadow-none ring-0 focus-visible:ring-0 disabled:bg-transparent disabled:opacity-100 aria-invalid:ring-0 aria-invalid:focus-visible:ring-0 dark:bg-transparent dark:disabled:bg-transparent",
        "group-[.input-group-sm]/input-group:text-xs group-[.input-group-sm]/input-group:px-2",
        "group-[.input-group-md]/input-group:text-sm group-[.input-group-md]/input-group:px-2.5",
        "group-[.input-group-lg]/input-group:text-sm group-[.input-group-lg]/input-group:px-3",
        className
      )}
      {...props}
    />
  )
}

export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
  InputGroupTextarea,
}
