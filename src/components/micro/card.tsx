/**
 * ✅ AUDITED & REFACTORED
 * - Design System Compliant (22 Commandments)
 * - WCAG AAA/AA
 * - Form Control Parity
 * - CSS Delegated Logic
 */
import * as React from "react";

import { cn } from "@/lib/utils";
import { type Size } from "@/lib/types";

/**
 * @description Displays a card with header, content, and footer.
 * @requires CardHeader, CardTitle, CardDescription, CardContent, CardFooter
 * @example
 * <Card>
 *   <CardHeader><CardTitle>Title</CardTitle></CardHeader>
 *   <CardContent>Content here</CardContent>
 * </Card>
 */
const Card = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & { size?: Size }
>(({ className, size = "md", ...props }, ref) => (
  <div
    ref={ref}
    data-slot="card"
    data-size={size}
    className={cn(
      "group/card @container/card flex flex-col overflow-hidden rounded-xl bg-card text-sm text-card-foreground ring-1 ring-foreground/10",
      "p-6 gap-5 data-[size=sm]:p-4 data-[size=sm]:gap-4 data-[size=lg]:p-8 data-[size=lg]:gap-6",
      className,
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="card-header"
      className={cn(
        "flex flex-col gap-1.5",
        className,
      )}
      {...props}
    />
  )
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="card-title"
      className={cn(
        "font-heading text-base leading-snug font-medium group-data-[size=sm]/card:text-sm group-data-[size=lg]/card:text-lg",
        className,
      )}
      {...props}
    />
  )
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="card-description"
      className={cn(
        "text-sm text-muted-foreground group-data-[size=sm]/card:text-xs group-data-[size=lg]/card:text-base",
        className
      )}
      {...props}
    />
  )
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="card-content"
      className={className}
      {...props}
    />
  )
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="card-footer"
      className={cn(
        "flex items-center",
        className,
      )}
      {...props}
    />
  )
);
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
