/**
 * ✅ AUDITED & REFACTORED
 * - Design System Compliant (22 Commandments)
 * - WCAG AAA/AA
 * - Form Control Parity
 * - CSS Delegated Logic
 */
"use client";

import * as React from "react";

import { PreviewCard as PreviewCardPrimitive } from "@base-ui/react/preview-card";

import { cn } from "../../lib/utils";
import { ThemeWrapper } from "./theme-provider";

/**
 * @description For sighted users to preview content available behind a link.
 * @requires HoverCardTrigger, HoverCardContent
 * @example
 * <HoverCard>
 *   <HoverCardTrigger>Hover me</HoverCardTrigger>
 *   <HoverCardContent>Details</HoverCardContent>
 * </HoverCard>
 */
function HoverCard({ ...props }: PreviewCardPrimitive.Root.Props) {
  return <PreviewCardPrimitive.Root data-slot="hover-card" {...props} />;
}

const HoverCardTrigger = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<typeof PreviewCardPrimitive.Trigger>
>(({ ...props }, ref) => (
  <PreviewCardPrimitive.Trigger
    ref={ref}
    data-slot="hover-card-trigger"
    {...props}
  />
));
HoverCardTrigger.displayName = "HoverCardTrigger";



const HoverCardContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof PreviewCardPrimitive.Popup> &
    Pick<
      React.ComponentPropsWithoutRef<typeof PreviewCardPrimitive.Positioner>,
      "align" | "alignOffset" | "side" | "sideOffset"
    > & {
      container?: React.ComponentProps<typeof PreviewCardPrimitive.Portal>["container"];
    }
>(
  (
    {
      className,
      side = "bottom",
      sideOffset = 4,
      align = "center",
      alignOffset = 4,
      container,
      ...props
    },
    ref,
  ) => {
    return (
      <PreviewCardPrimitive.Portal container={container}>
        <ThemeWrapper>
          <PreviewCardPrimitive.Positioner
            align={align}
            alignOffset={alignOffset}
            side={side}
            sideOffset={sideOffset}
            className="isolate"
          >
            <PreviewCardPrimitive.Popup
              ref={ref}
              data-slot="hover-card-content"
              className={cn(
                "z-50 w-64 origin-(--transform-origin) rounded-lg bg-popover p-2.5 text-sm text-popover-foreground shadow-md ring-1 ring-foreground/10 outline-hidden duration-100",
                "data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                "data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 motion-reduce:animate-none motion-reduce:transition-none",
                className,
              )}
              {...props}
            />
          </PreviewCardPrimitive.Positioner>
        </ThemeWrapper>
      </PreviewCardPrimitive.Portal>
    );
  },
);
HoverCardContent.displayName = "HoverCardContent";

export { HoverCard, HoverCardContent, HoverCardTrigger };
