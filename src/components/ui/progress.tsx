"use client"

import * as React from "react"
import { Progress as ProgressPrimitive } from "@base-ui/react/progress"

import { cn } from "../../lib/utils"

type ProgressSize = "sm" | "md" | "lg"

const ProgressContext = React.createContext<{ size: ProgressSize }>({
  size: "md",
})

export interface ProgressProps extends ProgressPrimitive.Root.Props {
  label?: React.ReactNode
  showValue?: boolean
  size?: ProgressSize
}

function Progress({
  className,
  children,
  label,
  showValue = true,
  size = "md",
  ...props
}: ProgressProps) {
  const isMonolithic = !children

  return (
    <ProgressContext.Provider value={{ size }}>
      <ProgressPrimitive.Root
        data-slot="progress"
        className={cn("flex flex-wrap gap-x-3 gap-y-1.5", className)}
        {...props}
      >
        {isMonolithic ? (
          <>
            {label && <ProgressLabel>{label}</ProgressLabel>}
            {label && showValue && <ProgressValue />}
            <ProgressTrack>
              <ProgressIndicator />
            </ProgressTrack>
          </>
        ) : (
          children
        )}
      </ProgressPrimitive.Root>
    </ProgressContext.Provider>
  )
}

function ProgressTrack({ className, ...props }: ProgressPrimitive.Track.Props) {
  const { size } = React.useContext(ProgressContext)
  
  const sizeClasses = {
    sm: "h-1",
    md: "h-1.5",
    lg: "h-2",
  }

  return (
    <ProgressPrimitive.Track
      className={cn(
        "relative flex w-full items-center overflow-x-hidden rounded-full bg-muted",
        sizeClasses[size],
        className
      )}
      data-slot="progress-track"
      {...props}
    />
  )
}

function ProgressIndicator({
  className,
  ...props
}: ProgressPrimitive.Indicator.Props) {
  return (
    <ProgressPrimitive.Indicator
      data-slot="progress-indicator"
      className={cn("h-full bg-primary transition-all", className)}
      {...props}
    />
  )
}

function ProgressLabel({ className, ...props }: ProgressPrimitive.Label.Props) {
  const { size } = React.useContext(ProgressContext)
  const textSizes = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  }

  return (
    <ProgressPrimitive.Label
      className={cn(textSizes[size], "font-medium", className)}
      data-slot="progress-label"
      {...props}
    />
  )
}

function ProgressValue({ className, ...props }: ProgressPrimitive.Value.Props) {
  const { size } = React.useContext(ProgressContext)
  const textSizes = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  }

  return (
    <ProgressPrimitive.Value
      className={cn(
        "ml-auto text-muted-foreground tabular-nums",
        textSizes[size],
        className
      )}
      data-slot="progress-value"
      {...props}
    />
  )
}

export {
  Progress,
  ProgressTrack,
  ProgressIndicator,
  ProgressLabel,
  ProgressValue,
}
