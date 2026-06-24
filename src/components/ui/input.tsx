import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

const inputVariants = cva(
  "min-w-0 rounded-lg border border-input bg-transparent text-sm transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-primary/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:focus-visible:border-destructive aria-invalid:focus-visible:ring-destructive/30",
  {
    variants: {
      size: {
        sm: "h-7 px-2 text-xs",
        md: "h-8 px-2.5 py-1",
        lg: "h-9 px-3 py-1.5",
      },
    },
  }
)

function Input({
  className,
  size = "md",
  ...props
}: Omit<React.ComponentProps<typeof InputPrimitive>, "size"> &
  VariantProps<typeof inputVariants>) {
  return (
    <InputPrimitive
      data-slot="input"
      className={cn(inputVariants({ size, className }))}
      {...props}
    />
  )
}

export { Input }
