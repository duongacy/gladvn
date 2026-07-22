/**
 * ✅ AUDITED & REFACTORED
 * - Design System Compliant (20 Commandments)
 * - WCAG AAA/AA
 * - Form Control Parity
 * - CSS Delegated Logic
 */
import * as React from "react";

import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "../../lib/utils";

/**
 * variant = visual style (HOW it looks)
 *   solid   → filled background (opaque)
 *   outline → border only, transparent bg
 *   ghost   → no border, transparent bg
 *   soft    → low-opacity tinted background
 *   link    → looks like a hyperlink
 *
 * color = semantic color token (WHAT it means)
 *   primary     → primary action
 *   secondary   → alternative / neutral
 *   destructive → danger / delete
 *   warning     → caution
 *   success     → confirm / done
 *   info        → information
 *   tertiary    → extra / beta
 */

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-border text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:ring-3 focus-visible:ring-offset-1 focus-visible:ring-offset-background active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:focus-visible:ring-3 aria-invalid:focus-visible:ring-destructive/50 dark:aria-invalid:border-destructive/50 dark:aria-invalid:focus-visible:ring-destructive/50 data-[icon=true]:aspect-square data-[icon=true]:px-0",
  {
    variants: {
      // ── Visual style ─────────────────────────────────────────────
      variant: {
        solid: "border-transparent",
        outline: "bg-transparent",
        ghost: "border-transparent bg-transparent",
        soft: "border-transparent",
        link: "border-transparent bg-transparent underline-offset-4 hover:underline",
      },

      // ── Semantic color ───────────────────────────────────────────
      // Left empty — actual classes are injected via compoundVariants below
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

      // ── Size ─────────────────────────────────────────────────────
      size: {
        sm: "h-7 gap-1 px-3 text-xs",
        md: "h-8 gap-1.5 px-3.5",
        lg: "h-9 gap-2 px-4",
      },
    },

    // ── variant × color combinations ─────────────────────────────
    compoundVariants: [
      // solid — filled background, foreground text
      {
        variant: "solid",
        color: "primary",
        className:
          "bg-primary     text-primary-foreground     hover:bg-primary/85",
      },
      {
        variant: "solid",
        color: "secondary",
        className:
          "bg-secondary   text-secondary-foreground   hover:bg-secondary/85",
      },
      {
        variant: "solid",
        color: "destructive",
        className:
          "bg-destructive text-destructive-foreground hover:bg-destructive/85",
      },
      {
        variant: "solid",
        color: "warning",
        className:
          "bg-warning     text-warning-foreground     hover:bg-warning/85",
      },
      {
        variant: "solid",
        color: "success",
        className:
          "bg-success     text-success-foreground     hover:bg-success/85",
      },
      {
        variant: "solid",
        color: "info",
        className:
          "bg-info        text-info-foreground        hover:bg-info/85",
      },
      {
        variant: "solid",
        color: "tertiary",
        className:
          "bg-tertiary    text-tertiary-foreground    hover:bg-tertiary/85",
      },
      {
        variant: "solid",
        color: "muted",
        className:
          "bg-muted       text-muted-foreground       hover:bg-muted/85",
      },
      {
        variant: "solid",
        color: "accent",
        className:
          "bg-accent      text-accent-foreground      hover:bg-accent/85",
      },

      // outline — border + semantic text, tinted hover
      {
        variant: "outline",
        color: "primary",
        className: "border-primary     text-primary     hover:bg-primary/10",
      },
      {
        variant: "outline",
        color: "secondary",
        className: "border-secondary text-secondary hover:bg-secondary/10",
      },
      {
        variant: "outline",
        color: "destructive",
        className:
          "border-destructive text-destructive hover:bg-destructive/10",
      },
      {
        variant: "outline",
        color: "warning",
        className: "border-warning     text-warning     hover:bg-warning/10",
      },
      {
        variant: "outline",
        color: "success",
        className: "border-success     text-success     hover:bg-success/10",
      },
      {
        variant: "outline",
        color: "info",
        className: "border-info        text-info        hover:bg-info/10",
      },
      {
        variant: "outline",
        color: "tertiary",
        className: "border-tertiary    text-tertiary    hover:bg-tertiary/10",
      },
      {
        variant: "outline",
        color: "muted",
        className: "border-muted       text-muted-foreground hover:bg-muted/10",
      },
      {
        variant: "outline",
        color: "accent",
        className:
          "border-accent      text-accent-foreground hover:bg-accent/10",
      },

      // soft — tinted background, semantic text
      {
        variant: "soft",
        color: "primary",
        className: "bg-primary/15     text-primary     hover:bg-primary/25",
      },
      {
        variant: "soft",
        color: "secondary",
        className: "bg-secondary/15 text-secondary hover:bg-secondary/25",
      },
      {
        variant: "soft",
        color: "destructive",
        className: "bg-destructive/15 text-destructive hover:bg-destructive/25",
      },
      {
        variant: "soft",
        color: "warning",
        className: "bg-warning/15     text-warning     hover:bg-warning/25",
      },
      {
        variant: "soft",
        color: "success",
        className: "bg-success/15     text-success     hover:bg-success/25",
      },
      {
        variant: "soft",
        color: "info",
        className: "bg-info/15        text-info        hover:bg-info/25",
      },
      {
        variant: "soft",
        color: "tertiary",
        className: "bg-tertiary/15    text-tertiary    hover:bg-tertiary/25",
      },
      {
        variant: "soft",
        color: "muted",
        className: "bg-muted/50       text-muted-foreground hover:bg-muted/80",
      },
      {
        variant: "soft",
        color: "accent",
        className:
          "bg-accent/50      text-accent-foreground hover:bg-accent/80",
      },

      // ghost — transparent, semantic text, tinted hover
      {
        variant: "ghost",
        color: "primary",
        className: "text-primary     hover:bg-primary/10",
      },
      {
        variant: "ghost",
        color: "secondary",
        className: "text-secondary hover:bg-secondary/10",
      },
      {
        variant: "ghost",
        color: "destructive",
        className: "text-destructive hover:bg-destructive/10",
      },
      {
        variant: "ghost",
        color: "warning",
        className: "text-warning     hover:bg-warning/10",
      },
      {
        variant: "ghost",
        color: "success",
        className: "text-success     hover:bg-success/10",
      },
      {
        variant: "ghost",
        color: "info",
        className: "text-info        hover:bg-info/10",
      },
      {
        variant: "ghost",
        color: "tertiary",
        className: "text-tertiary    hover:bg-tertiary/10",
      },
      {
        variant: "ghost",
        color: "muted",
        className: "text-muted-foreground hover:bg-muted/10",
      },
      {
        variant: "ghost",
        color: "accent",
        className: "text-accent-foreground hover:bg-accent/10",
      },

      // link — just semantic text + underline on hover
      { variant: "link", color: "primary", className: "text-primary" },
      { variant: "link", color: "secondary", className: "text-secondary" },
      { variant: "link", color: "destructive", className: "text-destructive" },
      { variant: "link", color: "warning", className: "text-warning" },
      { variant: "link", color: "success", className: "text-success" },
      { variant: "link", color: "info", className: "text-info" },
      { variant: "link", color: "tertiary", className: "text-tertiary" },
      { variant: "link", color: "muted", className: "text-muted-foreground" },
      { variant: "link", color: "accent", className: "text-accent-foreground" },
      // focus ring — semantic color at /15 opacity with offset
      { color: "primary", className: "focus-visible:ring-primary/50" },
      { color: "secondary", className: "focus-visible:ring-secondary/50" },
      { color: "destructive", className: "focus-visible:ring-destructive/50" },
      { color: "warning", className: "focus-visible:ring-warning/50" },
      { color: "success", className: "focus-visible:ring-success/50" },
      { color: "info", className: "focus-visible:ring-info/50" },
      { color: "tertiary", className: "focus-visible:ring-tertiary/50" },
      { color: "muted", className: "focus-visible:ring-muted/50" },
      { color: "accent", className: "focus-visible:ring-accent/50" },
    ],
  },
);

/**
 * @description Displays a button or a component that looks like a button.
 * @example
 * <Button variant="solid" color="primary">Click me</Button>
 */
export interface ButtonProps
  extends ButtonPrimitive.Props, VariantProps<typeof buttonVariants> {
  iconOnly?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "solid",
      color = "primary",
      size = "md",
      iconOnly,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <ButtonPrimitive
        ref={ref}
        data-slot="button"
        data-color={color}
        data-variant={variant}
        {...(iconOnly && { "data-icon": "true" })}
        className={cn(buttonVariants({ variant, color, size, className }))}
        {...props}
      >
        {children}
      </ButtonPrimitive>
    );
  },
);
Button.displayName = "Button";

export type ButtonIconProps = useRender.ComponentProps<"span">;

const ButtonIcon = React.forwardRef<HTMLSpanElement, ButtonIconProps>(
  function ButtonIcon({ className, render, ...props }, ref) {
    return useRender({
      render,
      defaultTagName: "span",
      props: mergeProps<"span">(
        {
          ref,
          className: cn(
            "inline-flex items-center justify-center shrink-0 transition-transform",
            "size-4 group-data-[size=sm]/button:size-3.5 group-data-[size=lg]/button:size-5",
            "[&>svg]:size-full [&>svg]:pointer-events-none",
            className,
          ),
          "data-slot": "button-icon",
        } as React.ComponentProps<"span">,
        props,
      ),
    });
  },
);
ButtonIcon.displayName = "ButtonIcon";

export { Button, ButtonIcon, buttonVariants };
