import { cn } from "../../lib/utils";

interface GladcnLogoProps {
  className?: string;
  /** Size of the icon SVG */
  iconSize?: string;
  /** Show icon only (default) or icon + wordmark */
  variant?: "icon" | "wordmark";
}

export function GladcnLogo({
  className,
  iconSize = "size-7",
  variant = "icon",
}: GladcnLogoProps) {
  const icon = (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(iconSize, variant === "icon" && className)}
      aria-hidden="true"
    >
      {/* Macro layer — outer rounded square, primary fill */}
      <rect
        x="1"
        y="1"
        width="30"
        height="30"
        rx="7"
        className="fill-primary"
      />
      {/* Micro layer — inner square, offset top-right, semi-transparent white */}
      <rect
        x="11"
        y="5"
        width="16"
        height="16"
        rx="4"
        fill="white"
        fillOpacity="0.25"
      />
      {/* Micro inner highlight — brighter corner */}
      <rect
        x="15"
        y="5"
        width="12"
        height="12"
        rx="3"
        fill="white"
        fillOpacity="0.2"
      />
      {/* Token dot — bottom left, CSS token representation */}
      <circle cx="8" cy="24" r="3" fill="white" fillOpacity="0.7" />
      {/* Macro bottom bar — connects Macro to token */}
      <rect
        x="6"
        y="17"
        width="12"
        height="9"
        rx="3"
        fill="white"
        fillOpacity="0.18"
      />
    </svg>
  );

  if (variant === "wordmark") {
    return (
      <div className={cn("flex items-center gap-2.5", className)}>
        {icon}
        <span className="font-bold text-[15px] tracking-tight leading-none">
          gladcn
        </span>
      </div>
    );
  }

  return icon;
}
