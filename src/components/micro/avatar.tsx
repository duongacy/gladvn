/**
 * ✅ AUDITED & REFACTORED
 * - Design System Compliant (20 Commandments)
 * - WCAG AAA/AA
 * - Form Control Parity
 * - CSS Delegated Logic
 */
"use client";

import * as React from "react";

import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar";

import { type Size } from "../../lib/types";
import { cn } from "../../lib/utils";

/**
 * @description An image element with a fallback for representing the user.
 * @requires AvatarImage, AvatarFallback
 * @example
 * <Avatar>
 *   <AvatarImage src="https://github.com/shadcn.png" />
 *   <AvatarFallback>CN</AvatarFallback>
 * </Avatar>
 */
const Avatar = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Root>,
  AvatarPrimitive.Root.Props & { size?: Size }
>(({ className, size = "md", ...props }, ref) => {
  return (
    <AvatarPrimitive.Root
      ref={ref}
      data-slot="avatar"
      data-size={size}
      className={cn(
        "group/avatar relative flex size-8 shrink-0 rounded-full select-none after:absolute after:inset-0 after:rounded-full after:border after:border-border after:mix-blend-darken data-[size=lg]:size-10 data-[size=sm]:size-6 dark:after:mix-blend-lighten",
        "group-data-[slot=avatar-group]/avatar-group:ring-2 group-data-[slot=avatar-group]/avatar-group:ring-background",
        className,
      )}
      {...props}
    />
  );
});
Avatar.displayName = "Avatar";

const AvatarImage = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Image>,
  AvatarPrimitive.Image.Props
>(({ className, ...props }, ref) => {
  return (
    <AvatarPrimitive.Image
      ref={ref}
      data-slot="avatar-image"
      className={cn(
        "aspect-square size-full rounded-full object-cover",
        className,
      )}
      {...props}
    />
  );
});
AvatarImage.displayName = "AvatarImage";

const AvatarFallback = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Fallback>,
  AvatarPrimitive.Fallback.Props
>(({ className, ...props }, ref) => {
  return (
    <AvatarPrimitive.Fallback
      ref={ref}
      data-slot="avatar-fallback"
      className={cn(
        "flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground group-data-[size=sm]/avatar:text-xs group-data-[size=lg]/avatar:text-base",
        className,
      )}
      {...props}
    />
  );
});
AvatarFallback.displayName = "AvatarFallback";

const AvatarBadge = React.forwardRef<
  HTMLSpanElement,
  React.ComponentProps<"span">
>(({ className, ...props }, ref) => {
  return (
    <span
      ref={ref}
      data-slot="avatar-badge"
      className={cn(
        "rounded-full bg-primary ring-2 ring-background",
        "group-data-[size=sm]/avatar:size-2",
        "group-data-[size=md]/avatar:size-2.5",
        "group-data-[size=lg]/avatar:size-3",
        className,
      )}
      {...props}
    />
  );
});
AvatarBadge.displayName = "AvatarBadge";

const AvatarGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-slot="avatar-group"
      className={cn("group/avatar-group flex -space-x-2", className)}
      {...props}
    />
  );
});
AvatarGroup.displayName = "AvatarGroup";

const AvatarGroupCount = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & { size?: Size }
>(({ className, size = "md", ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-slot="avatar-group-count"
      data-size={size}
      className={cn(
        "relative flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm text-muted-foreground ring-2 ring-background data-[size=lg]:size-10 data-[size=sm]:size-6",
        className,
      )}
      {...props}
    />
  );
});
AvatarGroupCount.displayName = "AvatarGroupCount";

export type AvatarProps = AvatarPrimitive.Root.Props & { size?: Size };
export type AvatarImageProps = AvatarPrimitive.Image.Props;
export type AvatarFallbackProps = AvatarPrimitive.Fallback.Props;
export type AvatarBadgeProps = React.ComponentProps<"span">;
export type AvatarGroupProps = React.ComponentProps<"div">;
export type AvatarGroupCountProps = React.ComponentProps<"div"> & { size?: Size };

export {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage
};
