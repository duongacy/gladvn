/**
 * ✅ AUDITED & REFACTORED
 * - Design System Compliant (22 Commandments)
 * - WCAG AAA/AA
 * - Form Control Parity
 * - CSS Delegated Logic
 */
"use client";

import * as React from "react";

import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip";

import { cn } from "../../lib/utils";
import { ThemeWrapper } from "./theme-provider";

/**
 * @description A popup that displays information related to an element.
 * @requires TooltipTrigger, TooltipContent, TooltipProvider
 * @example
 * <TooltipProvider>
 *   <Tooltip>
 *     <TooltipTrigger>Hover</TooltipTrigger>
 *     <TooltipContent>Add to library</TooltipContent>
 *   </Tooltip>
 * </TooltipProvider>
 */
function TooltipProvider({
  delay = 0,
  ...props
}: TooltipPrimitive.Provider.Props) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delay={delay}
      {...props}
    />
  );
}

function Tooltip({ ...props }: TooltipPrimitive.Root.Props) {
  return <TooltipPrimitive.Root data-slot="tooltip" {...props} />;
}

const TooltipTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Trigger>
>((props, ref) => {
  return (
    <TooltipPrimitive.Trigger
      ref={ref}
      data-slot="tooltip-trigger"
      {...props}
    />
  );
});
TooltipTrigger.displayName = "TooltipTrigger";

const TooltipPortal = ({
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Portal>) => (
  <TooltipPrimitive.Portal {...props}>
    <ThemeWrapper>{children}</ThemeWrapper>
  </TooltipPrimitive.Portal>
);
TooltipPortal.displayName = "TooltipPortal";

const TooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Popup> &
    Pick<
      React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Positioner>,
      "align" | "alignOffset" | "side" | "sideOffset"
    >
>(
  (
    {
      className,
      side = "top",
      sideOffset = 4,
      align = "center",
      alignOffset = 0,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <TooltipPrimitive.Positioner
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
        className="isolate z-50"
      >
        <TooltipPrimitive.Popup
          ref={ref}
          data-slot="tooltip-content"
          className={cn(
            "z-50 inline-flex w-fit max-w-xs origin-(--transform-origin) items-center gap-1.5 rounded-md bg-foreground px-3 py-1.5 text-xs text-background data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
            className,
          )}
          {...props}
        >
          {children}
        </TooltipPrimitive.Popup>
      </TooltipPrimitive.Positioner>
    );
  },
);
TooltipContent.displayName = "TooltipContent";

export {
  Tooltip,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipTrigger,
};
