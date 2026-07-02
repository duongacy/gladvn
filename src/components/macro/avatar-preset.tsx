import * as React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/micro/avatar";

export interface AvatarPresetProps extends React.ComponentProps<typeof Avatar> {
  src?: string;
  alt?: string;
  fallback?: React.ReactNode;
}

function getInitials(name: string) {
  const parts = name.split(" ").filter(Boolean);
  if (parts.length === 0) return "??";
  if (parts.length === 1) return parts[0]?.substring(0, 2).toUpperCase() ?? "??";
  return ((parts[0]?.charAt(0) ?? "") + (parts[parts.length - 1]?.charAt(0) ?? "")).toUpperCase();
}

const AvatarPreset = React.forwardRef<
  React.ElementRef<typeof Avatar>,
  AvatarPresetProps
>(({ src, alt = "", fallback, ...avatarProps }, ref) => {
  const generatedFallback = fallback ?? getInitials(alt);

  return (
    <Avatar ref={ref} {...avatarProps}>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>{generatedFallback}</AvatarFallback>
    </Avatar>
  );
});
AvatarPreset.displayName = "AvatarPreset";

export { AvatarPreset };
