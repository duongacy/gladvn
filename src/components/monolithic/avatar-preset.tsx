import * as React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

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

export function AvatarPreset({ src, alt = "", fallback, ...props }: AvatarPresetProps) {
  const generatedFallback = fallback ?? getInitials(alt);

  return (
    <Avatar {...props}>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>{generatedFallback}</AvatarFallback>
    </Avatar>
  );
}
