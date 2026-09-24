"use client";

import * as React from "react";

import { AlertDialog as AlertDialogPrimitive } from "@base-ui/react/alert-dialog";

import { cn } from "../../lib/utils";
import { ThemeWrapper } from "./theme-provider";

/**
 * @description A modal dialog that interrupts the user with important content and expects a response.
 * @requires ConfirmContent, ConfirmHeader, ConfirmFooter
 * @example
 * <Confirm>
 *   <ConfirmContent>
 *     <ConfirmHeader><ConfirmTitle>Are you sure?</ConfirmTitle></ConfirmHeader>
 *     <ConfirmFooter>...</ConfirmFooter>
 *   </ConfirmContent>
 * </Confirm>
 */
function Confirm({ ...props }: AlertDialogPrimitive.Root.Props) {
  return <AlertDialogPrimitive.Root data-slot="confirm" {...props} />;
}

function ConfirmTrigger({
  ...props
}: AlertDialogPrimitive.Trigger.Props) {
  return <AlertDialogPrimitive.Trigger data-slot="confirm-trigger" {...props} />;
}

function ConfirmOverlay({
  className,
  ...props
}: AlertDialogPrimitive.Backdrop.Props) {
  return (
    <AlertDialogPrimitive.Backdrop
      data-slot="confirm-overlay"
      className={cn(
        "fixed inset-0 isolate z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",
        className,
      )}
      {...props}
    />
  );
}

const ConfirmContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Popup> & {
    container?: React.ComponentProps<typeof AlertDialogPrimitive.Portal>["container"];
  }
>(({ className, children, container, ...props }, ref) => (
  <AlertDialogPrimitive.Portal container={container}>
    <ThemeWrapper>
      <ConfirmOverlay />
      <AlertDialogPrimitive.Popup
        ref={ref}
        data-slot="confirm-content"
        className={cn(
          "fixed top-1/2 left-1/2 z-50 grid w-full -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-popover p-4 text-popover-foreground ring-1 ring-foreground/10 duration-100 outline-none",
          "data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
          className,
        )}
        {...props}
      >
        {children}
      </AlertDialogPrimitive.Popup>
    </ThemeWrapper>
  </AlertDialogPrimitive.Portal>
));
ConfirmContent.displayName = "ConfirmContent";

function ConfirmHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="confirm-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  );
}

function ConfirmFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="confirm-footer"
      className={cn(
        "-mx-4 -mb-4 flex flex-col-reverse gap-2 rounded-b-xl border-t border-t-border bg-muted/50 p-4 sm:flex-row sm:justify-end",
        className,
      )}
      {...props}
    />
  );
}

function ConfirmMedia({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="confirm-media"
      className={cn(
        "inline-flex size-10 items-center justify-center [:where(&>svg)]:size-6",
        className,
      )}
      {...props}
    />
  );
}

function ConfirmTitle({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Title>) {
  return (
    <AlertDialogPrimitive.Title
      data-slot="confirm-title"
      className={cn("font-heading text-base font-medium", className)}
      {...props}
    />
  );
}

function ConfirmDescription({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Description>) {
  return (
    <AlertDialogPrimitive.Description
      data-slot="confirm-description"
      className={cn("text-sm text-balance text-muted-foreground md:text-pretty", className)}
      {...props}
    />
  );
}

export {
  Confirm,
  ConfirmContent,
  ConfirmDescription,
  ConfirmFooter,
  ConfirmHeader,
  ConfirmMedia,
  ConfirmOverlay,
  ConfirmTitle,
  ConfirmTrigger,
};
