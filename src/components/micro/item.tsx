/**
 * ✅ AUDITED & REFACTORED
 * - Design System Compliant (22 Commandments)
 * - WCAG AAA/AA
 * - Form Control Parity
 * - Zero-Specificity Contextual Sizing Architecture
 * - Defensive Context Pattern
 */
import * as React from "react";

import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva } from "class-variance-authority";

import { Separator } from "../../components/micro/separator";
import { type Size } from "../../lib/types";
import { cn } from "../../lib/utils";

// ---------------------------------------------------------------------------
// Defensive Context
// ---------------------------------------------------------------------------

const ItemContext = React.createContext(false);

function useItemContext(componentName: string) {
  const isInsideItem = React.useContext(ItemContext);
  if (!isInsideItem && process.env.NODE_ENV !== "production") {
    console.warn(
      `[gladvn] <${componentName}> phải được dùng bên trong <Item>.`,
    );
  }
}

// ---------------------------------------------------------------------------
// ItemGroup
// ---------------------------------------------------------------------------

/**
 * @description Base flex container for listing items consistently.
 */
function ItemGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      role="list"
      data-slot="item-group"
      className={cn(
        "group/item-group flex w-full flex-col gap-4 has-data-[size=sm]:gap-2.5 has-data-[size=xs]:gap-2",
        className,
      )}
      {...props}
    />
  );
}

// ---------------------------------------------------------------------------
// ItemSeparator
// ---------------------------------------------------------------------------

function ItemSeparator({
  className,
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="item-separator"
      orientation="horizontal"
      className={cn("my-2", className)}
      {...props}
    />
  );
}

// ---------------------------------------------------------------------------
// Item Root
// ---------------------------------------------------------------------------

const itemVariants = cva(
  "flex w-full flex-wrap items-center rounded-lg border text-sm transition-colors duration-100 outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:ring-offset-1 focus-visible:ring-offset-background [&_a]:transition-colors [&_a]:hover:bg-muted border-transparent",
  {
    variants: {
      variant: {
        outline: "border-border",
        muted: "border-transparent bg-muted/50",
      },
      size: {
        sm: "gap-1 px-2.5 py-2 in-data-[slot=dropdown-menu-content]:p-0",
        md: "gap-1.5 px-3 py-2.5",
        lg: "gap-2 px-3.5 py-2.5",
      },
    },
  },
);

function Item({
  className,
  variant,
  size = "md",
  render,
  children,
  ...props
}: useRender.ComponentProps<"div"> & {
  variant?: "outline" | "muted";
  size?: Size;
}) {
  return useRender({
    defaultTagName: "div",
    props: mergeProps<"div">(
      {
        "data-slot": "item",
        "data-size": size,
        className: cn(itemVariants({ variant, size, className })),
        children: (
          <ItemContext.Provider value={true}>{children}</ItemContext.Provider>
        ),
      } as React.ComponentProps<"div">,
      props,
    ),
    render,
    state: {
      slot: "item",
      variant,
      size,
    },
  });
}

// ---------------------------------------------------------------------------
// ItemMedia
// ---------------------------------------------------------------------------

const itemMediaVariants = cva(
  // ⚠️ ZERO-SPECIFICITY TRAP: Removed hardcoded `size-10` from image variant base.
  // All sizing is now done via :where() contextual selectors below.
  "flex shrink-0 items-center justify-center gap-2 group-has-data-[slot=item-description]/item:translate-y-0.5 group-has-data-[slot=item-description]/item:self-start [&>svg]:pointer-events-none bg-transparent",
  {
    variants: {
      variant: {
        icon: "[&_svg:not([class*='size-'])]:size-4",
        image:
          // ⚠️ size-10 removed from base — moved entirely into :where() below
          "overflow-hidden rounded-sm [&>img]:size-full [&>img]:object-cover",
      },
    },
  },
);

function ItemMedia({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & { variant?: "icon" | "image" }) {
  useItemContext("ItemMedia");
  return (
    <div
      data-slot="item-media"
      data-variant={variant}
      className={cn(
        itemMediaVariants({ variant, className }),
        // ── Contextual Sizing for image variant (specificity = 0) ──────────
        variant === "image" && [
          "[:where([data-slot=item][data-size=sm]_&)]:size-8",
          "[:where([data-slot=item][data-size=md]_&)]:size-10",
          "[:where([data-slot=item][data-size=lg]_&)]:size-12",
        ],
      )}
      {...props}
    />
  );
}

// ---------------------------------------------------------------------------
// ItemContent
// ---------------------------------------------------------------------------

function ItemContent({ className, ...props }: React.ComponentProps<"div">) {
  useItemContext("ItemContent");
  return (
    <div
      data-slot="item-content"
      className={cn(
        // ⚠️ ZERO-SPECIFICITY TRAP: Removed hardcoded `gap-1` from base.
        "flex flex-1 flex-col [&+[data-slot=item-content]]:flex-none",
        // ── Contextual Sizing (specificity = 0) ──────────────────────────
        "[:where([data-slot=item][data-size=sm]_&)]:gap-0.5",
        "[:where([data-slot=item][data-size=md]_&)]:gap-1",
        "[:where([data-slot=item][data-size=lg]_&)]:gap-1.5",
        className,
      )}
      {...props}
    />
  );
}

// ---------------------------------------------------------------------------
// ItemTitle
// ---------------------------------------------------------------------------

function ItemTitle({ className, ...props }: React.ComponentProps<"div">) {
  useItemContext("ItemTitle");
  return (
    <div
      data-slot="item-title"
      className={cn(
        "line-clamp-1 flex w-fit items-center gap-2 leading-snug font-medium underline-offset-4",
        // ── Contextual Sizing (specificity = 0) ──────────────────────────
        "[:where([data-slot=item][data-size=sm]_&)]:text-xs",
        "[:where([data-slot=item][data-size=md]_&)]:text-sm",
        "[:where([data-slot=item][data-size=lg]_&)]:text-base",
        className,
      )}
      {...props}
    />
  );
}

// ---------------------------------------------------------------------------
// ItemDescription
// ---------------------------------------------------------------------------

function ItemDescription({ className, ...props }: React.ComponentProps<"p">) {
  useItemContext("ItemDescription");
  return (
    <p
      data-slot="item-description"
      className={cn(
        // ⚠️ ZERO-SPECIFICITY TRAP: Removed hardcoded `text-sm` from base.
        "line-clamp-2 text-left leading-normal font-normal text-muted-foreground [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",
        // ── Contextual Sizing (specificity = 0) ──────────────────────────
        "[:where([data-slot=item][data-size=sm]_&)]:text-xs",
        "[:where([data-slot=item][data-size=md]_&)]:text-sm",
        "[:where([data-slot=item][data-size=lg]_&)]:text-base",
        className,
      )}
      {...props}
    />
  );
}

// ---------------------------------------------------------------------------
// ItemActions
// ---------------------------------------------------------------------------

function ItemActions({ className, ...props }: React.ComponentProps<"div">) {
  useItemContext("ItemActions");
  return (
    <div
      data-slot="item-actions"
      className={cn("flex items-center gap-2", className)}
      {...props}
    />
  );
}

// ---------------------------------------------------------------------------
// ItemHeader
// ---------------------------------------------------------------------------

function ItemHeader({ className, ...props }: React.ComponentProps<"div">) {
  useItemContext("ItemHeader");
  return (
    <div
      data-slot="item-header"
      className={cn(
        "flex basis-full items-center justify-between gap-2",
        className,
      )}
      {...props}
    />
  );
}

// ---------------------------------------------------------------------------
// ItemFooter
// ---------------------------------------------------------------------------

function ItemFooter({ className, ...props }: React.ComponentProps<"div">) {
  useItemContext("ItemFooter");
  return (
    <div
      data-slot="item-footer"
      className={cn(
        "flex basis-full items-center justify-between gap-2",
        className,
      )}
      {...props}
    />
  );
}

export {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
};
