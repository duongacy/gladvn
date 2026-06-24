import React from "react"
import { COLORS, COLOR_INFO } from "../data"

export function SectionHeader({ title, description }: { title: string; description?: string }) {
  return (
    <div className="mb-6 border-b pb-4">
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      {description && <p className="mt-1 text-sm text-muted-foreground">{description}</p>}
    </div>
  )
}

export function ShowcaseBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border bg-card">
      <div className="border-b px-4 py-2.5">
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{title}</span>
      </div>
      <div className="p-5">{children}</div>
    </div>
  )
}

export function ColorSwatch({ color }: { color: typeof COLORS[number] }) {
  const info = COLOR_INFO[color]
  return (
    <div className="flex flex-col gap-1.5 items-center">
      <div
        className="h-10 w-10 rounded-lg border shadow-sm"
        style={{ background: `var(--color-${color})` }}
      />
      <span className="text-[10px] font-medium text-muted-foreground">{info.label}</span>
    </div>
  )
}

