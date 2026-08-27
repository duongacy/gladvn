import * as React from "react";

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage
} from "../../components/micro/avatar";
import { cn } from "../../lib/utils";

export type AvatarPresetProps = React.ComponentProps<typeof Avatar> & {
  src?: string;
  alt?: string;
  fallback?: React.ReactNode;
  status?: "online" | "offline" | "away" | "busy";
};

function getInitials(name: string) {
  const parts = name.split(" ").filter(Boolean);
  if (parts.length === 0) return "??";
  if (parts.length === 1)
    return parts[0]?.substring(0, 2).toUpperCase() ?? "??";
  return (
    (parts[0]?.charAt(0) ?? "") + (parts[parts.length - 1]?.charAt(0) ?? "")
  ).toUpperCase();
}

const AvatarPreset = React.forwardRef<
  React.ComponentRef<typeof Avatar>,
  AvatarPresetProps
>(({ src, alt = "", fallback, status, ...avatarProps }, ref) => {
  const generatedFallback = fallback ?? getInitials(alt);

  return (
    <Avatar ref={ref} {...avatarProps}>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>{generatedFallback}</AvatarFallback>
      {status && (
        <AvatarBadge
          className={cn(
            "absolute z-10 right-0 bottom-0",
            {
              "bg-success": status === "online",
              "bg-warning": status === "away",
              "bg-destructive": status === "busy",
              "bg-muted-foreground/50": status === "offline",
            }
          )}
        />
      )}
      {avatarProps.children}
    </Avatar>
  );
});
AvatarPreset.displayName = "AvatarPreset";

export { AvatarPreset };
