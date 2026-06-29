/**
 * ✅ AUDITED & REFACTORED
 * - Design System Compliant (20 Commandments)
 * - WCAG AAA/AA
 * - Form Control Parity
 * - CSS Delegated Logic
 */
import * as React from "react";
import { Slider as SliderPrimitive } from "@base-ui/react/slider";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const sliderVariants = cva(
  "peer group/slider data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full",
);

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
  },
);

const thumbVariants = cva(
  "relative block shrink-0 rounded-full border border-ring bg-background ring-ring/50 transition-[color,box-shadow] select-none after:absolute after:-inset-2 focus-visible:ring-3 focus-visible:ring-offset-1 focus-visible:ring-offset-background has-[:focus-visible]:ring-3 has-[:focus-visible]:ring-offset-1 has-[:focus-visible]:ring-offset-background focus-visible:outline-none has-[:focus-visible]:outline-none disabled:pointer-events-none group-aria-invalid/slider:border-destructive group-aria-invalid/slider:focus-visible:border-destructive group-aria-invalid/slider:has-[:focus-visible]:border-destructive group-aria-invalid/slider:focus-visible:ring-destructive/50 group-aria-invalid/slider:has-[:focus-visible]:ring-destructive/50 dark:group-aria-invalid/slider:focus-visible:ring-destructive/50 dark:group-aria-invalid/slider:has-[:focus-visible]:ring-destructive/50",
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
  },
);

const SliderContext = React.createContext<{ size: "sm" | "md" | "lg" }>({
  size: "md",
});

function Slider({
  className,
  size = "md",
  ...props
}: SliderPrimitive.Root.Props & { size?: "sm" | "md" | "lg" }) {
  return (
    <SliderContext.Provider value={{ size }}>
      <SliderPrimitive.Root
        className={cn(sliderVariants({ className }))}
        data-slot="slider"
        thumbAlignment="edge"
        {...props}
      />
    </SliderContext.Provider>
  );
}

function SliderControl({ className, ...props }: SliderPrimitive.Control.Props) {
  return (
    <SliderPrimitive.Control
      data-slot="slider-control"
      className={cn(
        "relative flex w-full touch-none items-center select-none data-disabled:opacity-50 data-disabled:cursor-not-allowed data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-40 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        className,
      )}
      {...props}
    />
  );
}

function SliderTrack({ className, ...props }: SliderPrimitive.Track.Props) {
  const { size } = React.useContext(SliderContext);
  return (
    <SliderPrimitive.Track
      data-slot="slider-track"
      className={cn(trackVariants({ size }), className)}
      {...props}
    />
  );
}

function SliderIndicator({
  className,
  ...props
}: SliderPrimitive.Indicator.Props) {
  return (
    <SliderPrimitive.Indicator
      data-slot="slider-indicator"
      className={cn(
        "group-aria-invalid/slider:bg-destructive bg-primary select-none data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full",
        className,
      )}
      {...props}
    />
  );
}

function SliderThumb({ className, ...props }: SliderPrimitive.Thumb.Props) {
  const { size } = React.useContext(SliderContext);
  return (
    <SliderPrimitive.Thumb
      data-slot="slider-thumb"
      className={cn(thumbVariants({ size }), className)}
      {...props}
    />
  );
}

export { Slider, SliderControl, SliderTrack, SliderIndicator, SliderThumb };
