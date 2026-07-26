import { cn } from "../../../lib/utils";
import React from "react";

export function CodeBlock({
  type,
  title,
  className,
  children
}: {
  type: "success" | "destructive";
  title: string;
  className?: string;
  children: React.ReactNode;
}) {
  const isSuccess = type === "success";
  return (
    <div
      className={cn(
        "rounded-xl overflow-hidden border shadow-sm",
        isSuccess
          ? "border-success/30 bg-success/5"
          : "border-destructive/30 bg-destructive/5 opacity-80",
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
          "text-muted-foreground pl-3 border-l-2 leading-relaxed",
          {
            "border-success/50": isSuccess,
            "border-destructive/50": !isSuccess,
          }
        )}
      >
        {children}
      </div>
    </div>
  );
}
