/**
 * ✅ AUDITED & REFACTORED
 * - Design System Compliant (22 Commandments)
 * - WCAG AAA/AA
 * - Form Control Parity
 * - CSS Delegated Logic
 */
import { cn } from "@/lib/utils";
import * as React from "react";

/**
 * @description Displays content within a desired ratio.
 * @example
 * <AspectRatio ratio={16 / 9}>
 *   <img src="..." alt="..." />
 * </AspectRatio>
 */
const AspectRatio = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & { ratio: number }
>(({ ratio, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-slot="aspect-ratio"
      style={
        {
          "--ratio": ratio,
        } as React.CSSProperties
      }
      className={cn("relative aspect-(--ratio)", className)}
      {...props}
    />
  );
});
AspectRatio.displayName = "AspectRatio";

export { AspectRatio };
