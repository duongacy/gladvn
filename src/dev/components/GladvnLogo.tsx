import { cn } from "../../lib/utils";

interface GladvnLogoProps {
  className?: string;
  /** Show icon only (default) or icon + wordmark */
  variant?: "icon" | "wordmark";
}

export function GladvnLogo({
  className,
  variant = "icon",
}: GladvnLogoProps) {
  const icon = (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-7", {
        [`${className}`]: variant === "icon" && !!className
      })}
      aria-hidden="true"
    >
      <rect
        x="1"
        y="1"
        width="30"
        height="30"
        rx="7"
        className="fill-primary"
      />
      <rect
        x="11"
        y="5"
        width="16"
        height="16"
        rx="4"
        fill="white"
        fillOpacity="0.25"
      />
      <rect
        x="15"
        y="5"
        width="12"
        height="12"
        rx="3"
        fill="white"
        fillOpacity="0.2"
      />
      <circle cx="8" cy="24" r="3" fill="white" fillOpacity="0.7" />
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
          gladvn
        </span>
      </div>
    );
  }

  return icon;
}
