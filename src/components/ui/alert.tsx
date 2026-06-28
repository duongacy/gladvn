import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

// CSS Delegated Logic:
// - has-[>svg]: Tự động chuyển layout grid 2 cột nếu phát hiện Icon được truyền vào
// - has-data-[slot=alert-action]: Tạo khoảng padding phải (pr-18) khi có chứa Action component
// - *:[svg:not([class*='size-'])]: Fallback kích thước size-4 cho Icon nếu người dùng không truyền size
const alertVariants = cva(
  "group/alert relative grid gap-0.5 rounded-lg border text-left has-data-[slot=alert-action]:pr-18 has-[>svg]:grid-cols-[auto_1fr] *:[svg]:row-span-2 *:[svg]:translate-y-0.5 *:[svg]:text-current",
  {
    variants: {
      color: {
        default: "bg-card text-card-foreground",
        info:
          "border-info/15 bg-info/5 text-info *:data-[slot=alert-description]:text-info/90 *:[svg]:text-current",
        destructive:
          "border-destructive/15 bg-destructive/5 text-destructive *:data-[slot=alert-description]:text-destructive/90 *:[svg]:text-current",
        success:
          "border-success/15 bg-success/5 text-success *:data-[slot=alert-description]:text-success/90 *:[svg]:text-current",
        warning:
          "border-warning/15 bg-warning/5 text-warning *:data-[slot=alert-description]:text-warning/90 *:[svg]:text-current",
      },
      size: {
        sm: "px-2 py-1.5 text-xs has-[>svg]:gap-x-1.5 *:[svg:not([class*='size-'])]:size-3.5",
        md: "px-2.5 py-2 text-sm has-[>svg]:gap-x-2 *:[svg:not([class*='size-'])]:size-4",
        lg: "px-3 py-2.5 text-base has-[>svg]:gap-x-2.5 *:[svg:not([class*='size-'])]:size-5",
      },
    },
    defaultVariants: {
      color: "default",
      size: "md",
    },
  }
)

function Alert({
  className,
  color,
  size,
  ...props
}: Omit<React.ComponentProps<"div">, "color"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ color, size }), className)}
      {...props}
    />
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "font-medium group-has-[>svg]/alert:col-start-2 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground",
        className
      )}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-sm text-balance text-muted-foreground md:text-pretty [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4",
        className
      )}
      {...props}
    />
  )
}

function AlertAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-action"
      className={cn("absolute top-2 right-2", className)}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription, AlertAction }
