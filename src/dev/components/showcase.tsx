import React from "react"
import { cn } from "../../lib/utils"
import { COLORS, COLOR_INFO } from "../data"

/* ─────────────────────────────────────────────────────────────────
   SectionHeader  –  page‐level title bar
   Clean typography + subtle separator. No blobs, no gradients.
   ────────────────────────────────────────────────────────────── */
export function SectionHeader({
  title,
  description,
  children,
}: {
  title: string
  description?: string
  children?: React.ReactNode
}) {
  return (
    <div className="mb-8 flex flex-col gap-1">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
        {children && <div className="shrink-0 pb-0.5">{children}</div>}
      </div>
      {description && (
        <p className="text-[15px] text-muted-foreground">{description}</p>
      )}
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────────
   ExampleSection  –  a single demo block (replaces ComponentPreview)
   
   Inspired by shadcn docs:  
   ┌─ label ──────────────────────────────────────────────┐
   │                                                       │
   │            live component preview                     │
   │                                                       │
   └───────────────────────────────────────────────────────┘
   
   • Label sits *above* the card as a small muted caption
   • The card itself is a clean bordered rectangle
   • Component sits centered with generous padding
   • NO icon badges, NO dot‑grid, NO gradients inside
   ────────────────────────────────────────────────────────── */
export function ExampleSection({
  label,
  description,
  children,
  className,
  fullWidth = false,
}: {
  label?: string
  description?: string
  children: React.ReactNode
  className?: string
  fullWidth?: boolean
}) {
  return (
    <div className="flex flex-col gap-3">
      {(label || description) && (
        <div className="flex flex-col gap-0.5">
          {label && (
            <h3 className="text-sm font-semibold text-foreground">{label}</h3>
          )}
          {description && (
            <p className="text-[13px] text-muted-foreground">{description}</p>
          )}
        </div>
      )}
      <div
        className={cn(
          "relative flex items-center justify-center rounded-xl border bg-background p-8",
          "min-h-[120px]",
          fullWidth && "[&>*]:w-full",
          className,
        )}
      >
        {children}
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────────
   ExampleGrid  –  responsive columns for multiple examples
   ────────────────────────────────────────────────────────── */
export function ExampleGrid({
  children,
  columns = 2,
  className,
}: {
  children: React.ReactNode
  columns?: 1 | 2 | 3
  className?: string
}) {
  const colClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
  }
  return (
    <div className={cn("grid gap-6", colClasses[columns], className)}>
      {children}
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────────
   Legacy compat – keep old names working during migration
   ────────────────────────────────────────────────────────── */
export const ComponentGrid = ExampleGrid
export function ComponentPreview({
  title,
  description,
  children,
  className,
}: {
  title?: string
  description?: string
  icon?: React.ElementType
  color?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <ExampleSection
      label={title}
      description={description}
      className={className}
    >
      {children}
    </ExampleSection>
  )
}

/* ─────────────────────────────────────────────────────────────────
   ShowcaseBlock  –  legacy wrapper (still used by some pages)
   ────────────────────────────────────────────────────────── */
export function ShowcaseBlock({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <ExampleSection label={title}>
      {children}
    </ExampleSection>
  )
}

/* ─────────────────────────────────────────────────────────────────
   ColorSwatch  –  design‑token preview
   ────────────────────────────────────────────────────────── */
const bgColorMap: Record<typeof COLORS[number], string> = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  destructive: "bg-destructive",
  warning: "bg-warning",
  success: "bg-success",
  info: "bg-info",
  tertiary: "bg-tertiary",
}

export function ColorSwatch({ color }: { color: typeof COLORS[number] }) {
  const info = COLOR_INFO[color]
  return (
    <div className="flex flex-col gap-1.5 items-center">
      <div
        className={`h-10 w-10 rounded-lg border shadow-sm ${bgColorMap[color]}`}
      />
      <span className="text-[10px] font-medium text-muted-foreground">
        {info.label}
      </span>
    </div>
  )
}
