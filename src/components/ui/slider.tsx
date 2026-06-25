/**
 * ✅ AUDITED & REFACTORED
 * - Design System Compliant (19 Commandments)
 * - WCAG AAA/AA
 * - Form Control Parity
 * - CSS Delegated Logic
 */
import { Slider as SliderPrimitive } from "@base-ui/react/slider"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

const sliderVariants = cva(
  "peer group/slider data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full"
)

const trackVariants = cva(
  "relative grow overflow-hidden rounded-full bg-muted select-none data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full",
  {
    variants: {
      size: {
        sm: "data-[orientation=horizontal]:h-1 data-[orientation=vertical]:w-1",
        md: "data-[orientation=horizontal]:h-1.5 data-[orientation=vertical]:w-1.5",
        lg: "data-[orientation=horizontal]:h-2 data-[orientation=vertical]:w-2",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

const thumbVariants = cva(
  "relative block shrink-0 rounded-full border border-ring bg-background ring-ring/50 transition-[color,box-shadow] select-none after:absolute after:-inset-2 focus-visible:ring-3 has-[:focus-visible]:ring-3 focus-visible:outline-none has-[:focus-visible]:outline-none disabled:pointer-events-none group-aria-invalid/slider:border-destructive group-aria-invalid/slider:focus-visible:border-destructive group-aria-invalid/slider:has-[:focus-visible]:border-destructive group-aria-invalid/slider:focus-visible:ring-destructive/20 group-aria-invalid/slider:has-[:focus-visible]:ring-destructive/20 dark:group-aria-invalid/slider:focus-visible:ring-destructive/40 dark:group-aria-invalid/slider:has-[:focus-visible]:ring-destructive/40",
  {
    variants: {
      size: {
        sm: "size-3",
        md: "size-4",
        lg: "size-5",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  size = "md",
  ...props
}: SliderPrimitive.Root.Props & VariantProps<typeof thumbVariants>) {
  const _values = Array.isArray(value)
    ? value
    : Array.isArray(defaultValue)
      ? defaultValue
      : [min, max]

  return (
    <SliderPrimitive.Root
      className={cn(sliderVariants({ className }))}
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      thumbAlignment="edge"
      {...props}
    >
      <SliderPrimitive.Control className="relative flex w-full touch-none items-center select-none data-disabled:opacity-50 data-disabled:cursor-not-allowed data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-40 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col">
        <SliderPrimitive.Track
          data-slot="slider-track"
          className={cn(trackVariants({ size }))}
        >
          <SliderPrimitive.Indicator
            data-slot="slider-range"
            className="group-aria-invalid/slider:bg-destructive bg-primary select-none data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
          />
        </SliderPrimitive.Track>
        {Array.from({ length: _values.length }, (_, index) => (
          <SliderPrimitive.Thumb
            data-slot="slider-thumb"
            key={index}
            className={cn(thumbVariants({ size }))}
          />
        ))}
      </SliderPrimitive.Control>
    </SliderPrimitive.Root>
  )
}

export { Slider }
