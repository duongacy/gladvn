/**
 * ✅ AUDITED & REFACTORED
 * - Design System Compliant (22 Commandments)
 * - WCAG AAA/AA
 * - Form Control Parity
 * - CSS Delegated Logic
 */
"use client";

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "../../lib/utils";

const Tabs = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  TabsPrimitive.Root.Props
>(({ className, orientation = "horizontal", ...props }, ref) => {
  return (
    <TabsPrimitive.Root
      ref={ref}
      data-slot="tabs"
      data-orientation={orientation}
      data-horizontal={orientation === "horizontal" ? "" : undefined}
      data-vertical={orientation === "vertical" ? "" : undefined}
      className={cn(
        "group/tabs flex gap-2 data-horizontal:flex-col",
        className,
      )}
      {...props}
    />
  );
});
Tabs.displayName = "Tabs";

const tabsListVariants = cva(
  "group/tabs-list inline-flex w-fit items-center justify-center rounded-lg p-[3px] text-muted-foreground h-fit group-data-vertical/tabs:flex-col data-[variant=line]:rounded-none bg-muted",
  {
    variants: {
      variant: {
        line: "gap-1 bg-transparent",
      },
    },
  },
);

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  TabsPrimitive.List.Props & VariantProps<typeof tabsListVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <TabsPrimitive.List
      ref={ref}
      data-slot="tabs-list"
      data-variant={variant}
      className={cn(tabsListVariants({ variant }), className)}
      {...props}
    />
  );
});
TabsList.displayName = "TabsList";

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Tab>,
  TabsPrimitive.Tab.Props
>(({ className, ...props }, ref) => {
  return (
    <TabsPrimitive.Tab
      ref={ref}
      data-slot="tabs-trigger"
      className={cn(
        "relative inline-flex flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2.5 py-1.5 text-sm font-medium whitespace-nowrap text-foreground/60 transition-all group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 has-[[data-icon=inline-end]]:pr-1 has-[[data-icon=inline-start]]:pl-1 aria-disabled:pointer-events-none aria-disabled:opacity-50 dark:text-muted-foreground dark:hover:text-foreground data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none [&>svg]:pointer-events-none [&>svg]:shrink-0 [&>svg:not([class*='size-'])]:size-4",
        "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent",
        "data-active:bg-background data-active:text-foreground dark:data-active:border-input dark:data-active:bg-input/30 dark:data-active:text-foreground",
        "after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:bottom-[-5px] group-data-horizontal/tabs:after:h-0.5 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-active:after:opacity-100",
        className,
      )}
      {...props}
    />
  );
});
TabsTrigger.displayName = "TabsTrigger";

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Panel>,
  TabsPrimitive.Panel.Props
>(({ className, ...props }, ref) => {
  return (
    <TabsPrimitive.Panel
      ref={ref}
      data-slot="tabs-content"
      className={cn("flex-1 text-sm outline-none", className)}
      {...props}
    />
  );
});
TabsContent.displayName = "TabsContent";

export { Tabs, TabsContent, TabsList, tabsListVariants, TabsTrigger };
