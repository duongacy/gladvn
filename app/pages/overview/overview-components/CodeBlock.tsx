import React from "react";
import { cn } from "@/lib/utils";

export function CodeBlock({
  type,
  title,
  className,
  children
}: {
  type: "success" | "destructive";
  title: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}) {
  const isSuccess = type === "success";
  return (
    <div
      className={cn(
        "rounded-xl overflow-hidden border shadow-sm",
        {
          "border-success/30 bg-success/5": isSuccess,
          "border-destructive/30 bg-destructive/5 opacity-80": !isSuccess,
        },
        className
      )}
    >
      <div
        className={cn(
          "px-4 py-2 font-semibold flex items-center gap-2",
          {
            "text-success": isSuccess,
            "text-destructive": !isSuccess,
          }
        )}
      >
        {isSuccess ? "✅" : "❌"} {title}
      </div>
      <div
        className={cn(
          "text-muted-foreground px-4 pb-3 leading-relaxed font-mono text-[11px] sm:text-xs"
        )}
      >
        {children}
      </div>
    </div>
  );
}
