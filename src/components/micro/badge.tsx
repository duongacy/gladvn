/**
 * ✅ AUDITED & REFACTORED
 * - Design System Compliant (20 Commandments)
 * - WCAG AAA/AA
 * - Form Control Parity
 * - CSS Delegated Logic
 */
import * as React from "react";

import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "../../lib/utils";

const badgeVariants = cva(
  "group/badge inline-flex h-6 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2.5 py-0.5 text-xs font-medium whitespace-nowrap transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:ring-offset-1 focus-visible:ring-offset-background",
  {
    variants: {
      variant: {
        solid: "border-transparent",
        outline: "bg-transparent",
        soft: "border-transparent",
      },
      color: {
        primary: "",
        secondary: "",
        destructive: "",
        warning: "",
        success: "",
        info: "",
        tertiary: "",
        muted: "",
        accent: "",
      },
    },
    compoundVariants: [
      // Solid
      {
        variant: "solid",
        color: "primary",
        className: "bg-primary text-primary-foreground",
      },
      {
        variant: "solid",
        color: "secondary",
        className: "bg-secondary text-secondary-foreground",
      },
      {
        variant: "solid",
        color: "destructive",
        className: "bg-destructive text-destructive-foreground",
      },
      {
        variant: "solid",
        color: "warning",
        className: "bg-warning text-warning-foreground",
      },
      {
        variant: "solid",
        color: "success",
        className: "bg-success text-success-foreground",
      },
      {
        variant: "solid",
        color: "info",
        className: "bg-info text-info-foreground",
      },
      {
        variant: "solid",
        color: "tertiary",
        className: "bg-tertiary text-tertiary-foreground",
      },
      {
        variant: "solid",
        color: "muted",
        className: "bg-muted text-muted-foreground",
      },
      {
        variant: "solid",
        color: "accent",
        className: "bg-accent text-accent-foreground",
      },

      // Outline
      {
        variant: "outline",
        color: "primary",
        className: "border-primary text-primary",
      },
      {
        variant: "outline",
        color: "secondary",
        className: "border-secondary text-secondary",
      },
      {
        variant: "outline",
        color: "destructive",
        className: "border-destructive text-destructive",
      },
      {
        variant: "outline",
        color: "warning",
        className: "border-warning text-warning",
      },
      {
        variant: "outline",
        color: "success",
        className: "border-success text-success",
      },
      { variant: "outline", color: "info", className: "border-info text-info" },
      {
        variant: "outline",
        color: "tertiary",
        className: "border-tertiary text-tertiary",
      },
      {
        variant: "outline",
        color: "muted",
        className: "border-muted text-muted-foreground",
      },
      {
        variant: "outline",
        color: "accent",
        className: "border-accent text-accent-foreground",
      },

      // Soft
      {
        variant: "soft",
        color: "primary",
        className: "bg-primary/15 text-primary",
      },
      {
        variant: "soft",
        color: "secondary",
        className: "bg-secondary/15 text-secondary",
      },
      {
        variant: "soft",
        color: "destructive",
        className: "bg-destructive/15 text-destructive",
      },
      {
        variant: "soft",
        color: "warning",
        className: "bg-warning/15 text-warning",
      },
      {
        variant: "soft",
        color: "success",
        className: "bg-success/15 text-success",
      },
      { variant: "soft", color: "info", className: "bg-info/15 text-info" },
      {
        variant: "soft",
        color: "tertiary",
        className: "bg-tertiary/15 text-tertiary",
      },
      {
        variant: "soft",
        color: "muted",
        className: "bg-muted/50 text-muted-foreground",
      },
      {
        variant: "soft",
        color: "accent",
        className: "bg-accent/50 text-accent-foreground",
      },
    ],
  },
);

/**
 * @description Displays a badge or a component that looks like a badge.
 * @example
 * <Badge variant="outline">Badge</Badge>
 */
export type BadgeProps = useRender.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants>;

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    { className, variant = "solid", color = "primary", render, ...props },
    ref,
  ) => {
    return useRender({
      defaultTagName: "span",
      props: mergeProps<"span">(
        {
          ref,
          className: cn(badgeVariants({ variant, color }), className),
        },
        props,
      ),
      render,
      state: {
        slot: "badge",
        variant,
        color,
      },
    });
  },
);
Badge.displayName = "Badge";

export { Badge, badgeVariants };
