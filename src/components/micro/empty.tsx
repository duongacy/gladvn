/**
 * ✅ AUDITED & REFACTORED
 * - Design System Compliant (22 Commandments)
 * - WCAG AAA/AA
 * - Form Control Parity
 * - CSS Delegated Logic
 */
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "../../lib/utils";

/**
 * @description A placeholder state component for empty data.
 * @requires EmptyHeader, EmptyTitle, EmptyDescription, EmptyMedia, EmptyContent, EmptyAction
 * @example
 * <Empty>
 *   <EmptyHeader>
 *     <EmptyTitle>No data</EmptyTitle>
 *   </EmptyHeader>
 * </Empty>
 */
const Empty = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="empty"
    className={cn(
      "flex w-full min-w-0 flex-1 flex-col items-center justify-center gap-4 rounded-xl border-dashed p-6 text-center text-balance",
      className,
    )}
    {...props}
  />
));
Empty.displayName = "Empty";

const EmptyHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="empty-header"
    className={cn("flex max-w-sm flex-col items-center gap-2", className)}
    {...props}
  />
));
EmptyHeader.displayName = "EmptyHeader";

const emptyMediaVariants = cva(
  "flex shrink-0 items-center justify-center *:pointer-events-none *:shrink-0",
  {
    variants: {
      variant: {
        icon: "flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground **:[svg:not([class*='size-'])]:size-4",
      },
    },
  },
);

const EmptyMedia = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div"> &
    VariantProps<typeof emptyMediaVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="empty-icon"
    data-variant={variant}
    className={cn(emptyMediaVariants({ variant, className }))}
    {...props}
  />
));
EmptyMedia.displayName = "EmptyMedia";

const EmptyTitle = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<"h3">
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    data-slot="empty-title"
    className={cn("font-heading text-sm font-medium tracking-tight", className)}
    {...props}
  />
));
EmptyTitle.displayName = "EmptyTitle";

const EmptyDescription = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentPropsWithoutRef<"p">
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    data-slot="empty-description"
    className={cn(
      "text-sm/relaxed text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-primary",
      className,
    )}
    {...props}
  />
));
EmptyDescription.displayName = "EmptyDescription";

const EmptyContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="empty-content"
    className={cn(
      "flex w-full max-w-sm min-w-0 flex-col items-center gap-2.5 text-sm text-balance",
      className,
    )}
    {...props}
  />
));
EmptyContent.displayName = "EmptyContent";

const EmptyAction = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="empty-action"
    className={cn("flex flex-col items-center gap-2", className)}
    {...props}
  />
));
EmptyAction.displayName = "EmptyAction";

export {
  Empty,
  EmptyAction,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
};
