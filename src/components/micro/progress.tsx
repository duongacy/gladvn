/**
 * ✅ AUDITED & REFACTORED
 * - Design System Compliant (22 Commandments)
 * - WCAG AAA/AA
 * - Form Control Parity
 * - CSS Delegated Logic
 */
"use client";

import { Progress as ProgressPrimitive } from "@base-ui/react/progress";
import * as React from "react";

import { type Color, type Size } from "@/lib/types";
import { cn } from "@/lib/utils";

const ProgressContext = React.createContext<{ size: Size; color: Color }>({
  size: "md",
  color: "primary",
});

export interface ProgressProps extends ProgressPrimitive.Root.Props {
  size?: Size;
  color?: Color;
}

/**
 * @description Displays an indicator showing the completion progress of a task.
 * @example
 * <Progress value={33} />
 */
function Progress({
  className,
  children,
  size = "md",
  color = "primary",
  ...props
}: ProgressProps) {
  return (
    <ProgressContext.Provider value={{ size, color }}>
      <ProgressPrimitive.Root
        data-slot="progress"
        className={cn("flex flex-wrap gap-x-3 gap-y-1.5", className)}
        {...props}
      >
        {children}
      </ProgressPrimitive.Root>
    </ProgressContext.Provider>
  );
}

function ProgressTrack({ className, ...props }: ProgressPrimitive.Track.Props) {
  const { size } = React.useContext(ProgressContext);

  const sizeClasses: Partial<Record<Size, string>> = {
    sm: "h-1",
    md: "h-1.5",
    lg: "h-2",
  };

  return (
    <ProgressPrimitive.Track
      className={cn(
        "relative flex w-full items-center overflow-x-hidden rounded-full bg-muted",
        size ? sizeClasses[size] : "",
        className,
      )}
      data-slot="progress-track"
      {...props}
    />
  );
}

function ProgressIndicator({
  className,
  ...props
}: ProgressPrimitive.Indicator.Props) {
  const { color } = React.useContext(ProgressContext);

  const bgColors: Record<Color, string> = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    destructive: "bg-destructive",
    success: "bg-success",
    warning: "bg-warning",
    info: "bg-info",
    tertiary: "bg-tertiary",
    muted: "bg-muted",
    accent: "bg-accent",
  };

  return (
    <ProgressPrimitive.Indicator
      data-slot="progress-indicator"
      className={cn("h-full transition-all", bgColors[color], className)}
      {...props}
    />
  );
}

function ProgressLabel({ className, ...props }: ProgressPrimitive.Label.Props) {
  const { size } = React.useContext(ProgressContext);
  const textSizes = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  return (
    <ProgressPrimitive.Label
      className={cn(textSizes[size], "font-medium", className)}
      data-slot="progress-label"
      {...props}
    />
  );
}

function ProgressValue({ className, ...props }: ProgressPrimitive.Value.Props) {
  const { size } = React.useContext(ProgressContext);
  const textSizes = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  return (
    <ProgressPrimitive.Value
      className={cn(
        "ml-auto text-muted-foreground tabular-nums",
        textSizes[size],
        className,
      )}
      data-slot="progress-value"
      {...props}
    />
  );
}

export {
  Progress,
  ProgressIndicator,
  ProgressLabel,
  ProgressTrack,
  ProgressValue,
};
