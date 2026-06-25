"use client"

import { Switch as SwitchPrimitive } from "@base-ui/react/switch"

import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

const switchVariants = cva(
  "group/switch peer relative inline-flex shrink-0 items-center rounded-full border-2 border-transparent transition-all outline-none focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:focus-visible:ring-3 aria-invalid:focus-visible:ring-destructive/20 dark:aria-invalid:focus-visible:ring-destructive/40 data-checked:bg-primary data-unchecked:bg-input dark:data-unchecked:bg-input/80 data-disabled:cursor-not-allowed data-disabled:opacity-50",
  {
    variants: {
      size: {
        sm: "switch-sm h-4 w-7 after:-inset-x-2.5 after:-inset-y-2.5",
        md: "switch-md h-5 w-9 after:-inset-x-3 after:-inset-y-2",
        lg: "switch-lg h-6 w-11 after:-inset-x-4 after:-inset-y-3",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

function Switch({
  className,
  size = "md",
  ...props
}: SwitchPrimitive.Root.Props & VariantProps<typeof switchVariants>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(switchVariants({ size, className }))}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className="pointer-events-none block rounded-full bg-background ring-0 transition-transform data-unchecked:translate-x-0 dark:data-checked:bg-primary-foreground dark:data-unchecked:bg-foreground size-4 data-checked:translate-x-4 group-[.switch-sm]/switch:size-3 group-[.switch-sm]/switch:data-checked:translate-x-3 group-[.switch-lg]/switch:size-5 group-[.switch-lg]/switch:data-checked:translate-x-5"
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
