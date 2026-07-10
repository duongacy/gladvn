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
 * @description Use to show a placeholder while content is loading.
 * @example
 * <Skeleton className="w-[100px] h-[20px] rounded-full" />
 */
const Skeleton = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="skeleton"
    className={cn("animate-pulse rounded-lg bg-muted", className)}
    {...props}
  />
));
Skeleton.displayName = "Skeleton";

export { Skeleton };
