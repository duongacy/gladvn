import React from "react";
import { cn } from "@/lib/utils";

export function CodeBlock({
  type,
  title,
  className,
  preview,
  children
}: {
  type: "success" | "destructive";
  title: React.ReactNode;
  className?: string;
  preview?: React.ReactNode;
  children: React.ReactNode;
}) {
  const isSuccess = type === "success";
  return (
    <div
      className={cn(
        "rounded-sm overflow-hidden border shadow-sm bg-background",
        {
          "border-l-[4px] border-l-success": isSuccess,
          "border-l-[4px] border-l-destructive": !isSuccess,
        },
        className
      )}
    >
      <div
        className={cn(
          "px-4 py-2 font-semibold flex items-center gap-2 border-b border-border/50 bg-muted/20",
          {
            "text-success": isSuccess,
            "text-destructive": !isSuccess,
          }
        )}
      >
        {isSuccess ? "✅" : "❌"} {title}
      </div>

      {preview && (
        <div className="p-8 flex items-center justify-center border-b border-border/50 bg-background overflow-x-auto">
          {preview}
        </div>
      )}

      <div
        className={cn(
          "text-muted-foreground px-4 py-3 leading-relaxed font-mono text-[11px] sm:text-xs overflow-x-auto"
        )}
      >
        {children}
      </div>
    </div>
  );
}
