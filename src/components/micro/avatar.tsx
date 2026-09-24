/**
 * ✅ AUDITED & REFACTORED
 * - Design System Compliant (22 Commandments)
 * - WCAG AAA/AA
 * - Form Control Parity
 * - CSS Delegated Logic
 * - Zero-Specificity Contextual Sizing (:where)
 * - Defensive Context (AvatarContext)
 */
"use client";

import * as React from "react";

import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar";

import { type Size } from "../../lib/types";
import { cn } from "../../lib/utils";

const AvatarContext = React.createContext(false);

function useAvatarContext(componentName: string) {
  const isInsideAvatar = React.useContext(AvatarContext);
  if (process.env.NODE_ENV !== "production" && !isInsideAvatar) {
    console.warn(
      `[gladvn] <${componentName}> phải được dùng bên trong <Avatar>. ` +
        `Nếu dùng bên ngoài, contextual sizing sẽ không hoạt động.`,
    );
  }
}

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
>(({ className, size = "md", children, ...props }, ref) => {
  return (
    <AvatarPrimitive.Root
      ref={ref}
      data-slot="avatar"
      data-size={size}
      className={cn(
        "relative flex shrink-0 rounded-full select-none after:absolute after:inset-0 after:rounded-full after:border after:border-border after:mix-blend-darken dark:after:mix-blend-lighten",
        "[:where([data-slot=avatar][data-size=sm]_&)]:size-6",
        "[:where([data-slot=avatar][data-size=md]_&)]:size-8",
        "[:where([data-slot=avatar][data-size=lg]_&)]:size-10",
        "group-data-[slot=avatar-group]/avatar-group:ring-2 group-data-[slot=avatar-group]/avatar-group:ring-background",
        className,
      )}
      {...props}
    >
      <AvatarContext value={true}>{children}</AvatarContext>
    </AvatarPrimitive.Root>
  );
});
Avatar.displayName = "Avatar";

const AvatarImage = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Image>,
  AvatarPrimitive.Image.Props
>(({ className, ...props }, ref) => {
  useAvatarContext("AvatarImage");
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
  useAvatarContext("AvatarFallback");
  return (
    <AvatarPrimitive.Fallback
      ref={ref}
      data-slot="avatar-fallback"
      className={cn(
        "flex size-full items-center justify-center rounded-full bg-muted text-muted-foreground",
        "[:where([data-slot=avatar][data-size=sm]_&)]:text-xs",
        "[:where([data-slot=avatar][data-size=md]_&)]:text-sm",
        "[:where([data-slot=avatar][data-size=lg]_&)]:text-base",
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
  useAvatarContext("AvatarBadge");
  return (
    <span
      ref={ref}
      data-slot="avatar-badge"
      className={cn(
        "rounded-full bg-primary ring-2 ring-background",
        "[:where([data-slot=avatar][data-size=sm]_&)]:size-2",
        "[:where([data-slot=avatar][data-size=md]_&)]:size-2.5",
        "[:where([data-slot=avatar][data-size=lg]_&)]:size-3",
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
        "relative flex shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground ring-2 ring-background",
        "data-[size=sm]:size-6 data-[size=sm]:text-xs",
        "data-[size=md]:size-8 data-[size=md]:text-sm",
        "data-[size=lg]:size-10 data-[size=lg]:text-base",
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
  AvatarImage,
};
