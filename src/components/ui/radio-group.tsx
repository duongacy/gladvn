/**
 * ✅ AUDITED & REFACTORED
 * - Design System Compliant (20 Commandments)
 * - WCAG AAA/AA
 * - Form Control Parity
 * - CSS Delegated Logic
 */
"use client"

import { Radio as RadioPrimitive } from "@base-ui/react/radio"
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group"

import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

function RadioGroup({ className, ...props }: RadioGroupPrimitive.Props) {
  return (
    <RadioGroupPrimitive
      data-slot="radio-group"
      className={cn("grid gap-2", className)}
      {...props}
    />
  )
}

const radioGroupItemVariants = cva(
  "group/radio peer relative flex aspect-square shrink-0 rounded-full border border-input outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:focus-visible:border-destructive aria-invalid:focus-visible:ring-3 aria-invalid:focus-visible:ring-destructive/20 aria-invalid:aria-checked:border-primary dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:focus-visible:ring-destructive/40 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary",
  {
    variants: {
      size: {
        sm: "radio-sm size-3.5 after:-inset-x-2.5 after:-inset-y-2.5",
        md: "radio-md size-4 after:-inset-x-3 after:-inset-y-2",
        lg: "radio-lg size-5 after:-inset-x-4 after:-inset-y-3",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

function RadioGroupItem({
  className,
  size = "md",
  ...props
}: RadioPrimitive.Root.Props & VariantProps<typeof radioGroupItemVariants>) {
  return (
    <RadioPrimitive.Root
      data-slot="radio-group-item"
      className={cn(radioGroupItemVariants({ size, className }))}
      {...props}
    >
      <RadioPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="flex items-center justify-center size-4 group-[.radio-sm]/radio:size-3.5 group-[.radio-lg]/radio:size-5"
      >
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-foreground size-2 group-[.radio-sm]/radio:size-1.5 group-[.radio-lg]/radio:size-2.5" />
      </RadioPrimitive.Indicator>
    </RadioPrimitive.Root>
  )
}

export { RadioGroup, RadioGroupItem }
