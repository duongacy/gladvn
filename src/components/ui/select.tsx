/**
 * ✅ AUDITED & REFACTORED
 * - Design System Compliant (20 Commandments)
 * - WCAG AAA/AA
 * - Form Control Parity
 * - CSS Delegated Logic
 */
"use client"

import * as React from "react"
import { Select as SelectPrimitive } from "@base-ui/react/select"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"
import { ThemeWrapper } from "./theme-provider"
import { ChevronDownIcon, CheckIcon, ChevronUpIcon } from "lucide-react"

const Select = SelectPrimitive.Root

function SelectGroup({ className, ...props }: SelectPrimitive.Group.Props) {
  return (
    <SelectPrimitive.Group
      data-slot="select-group"
      className={cn("scroll-my-1", className)}
      {...props}
    />
  )
}

function SelectValue({ className, ...props }: SelectPrimitive.Value.Props) {
  return (
    <SelectPrimitive.Value
      data-slot="select-value"
      className={cn("flex flex-1 text-left", className)}
      {...props}
    />
  )
}

const selectTriggerVariants = cva(
  "inline-flex items-center justify-between gap-1.5 rounded-lg border border-input bg-transparent text-sm whitespace-nowrap transition-colors outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:focus-visible:ring-3 aria-invalid:focus-visible:ring-destructive/50 data-placeholder:text-muted-foreground *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-1.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:focus-visible:ring-destructive/50",
  {
    variants: {
      size: {
        sm: "h-7 px-2 py-0.5 text-xs",
        md: "h-8 px-2.5 py-1",
        lg: "h-9 px-3 py-1.5",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

function SelectTrigger({
  className,
  size = "md",
  children,
  ...props
}: SelectPrimitive.Trigger.Props & VariantProps<typeof selectTriggerVariants>) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      className={cn(selectTriggerVariants({ size, className }))}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon
        render={
          <ChevronDownIcon className="pointer-events-none size-4 text-muted-foreground" />
        }
      />
    </SelectPrimitive.Trigger>
  )
}

function SelectContent({
  className,
  children,
  side = "bottom",
  sideOffset = 0,
  align = "center",
  alignOffset = 0,
  alignItemWithTrigger = false,
  ...props
}: SelectPrimitive.Popup.Props &
  Pick<
    SelectPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset" | "alignItemWithTrigger"
  >) {
  return (
    <SelectPrimitive.Portal>
      <ThemeWrapper>
        <SelectPrimitive.Positioner
          side={side}
          sideOffset={sideOffset}
          align={align}
          alignOffset={alignOffset}
          alignItemWithTrigger={alignItemWithTrigger}
          className="isolate z-50"
        >
          <SelectPrimitive.Popup
            data-slot="select-content"
            data-align-trigger={alignItemWithTrigger}
            className={cn(
              "relative isolate z-50 max-h-(--available-height) overflow-x-hidden overflow-y-auto rounded-lg bg-popover text-popover-foreground shadow-md ring-1 ring-foreground/10 data-[align-trigger=true]:animate-none data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
              !alignItemWithTrigger &&
              "mt-[calc(-1*var(--anchor-height)-4px)] w-[calc(var(--anchor-width)+8px)] p-1",
              alignItemWithTrigger &&
              "w-[calc(var(--anchor-width)+8px)] origin-(--transform-origin) p-1",
              className
            )}
            {...props}
          >
            <SelectScrollUpButton />
            <SelectPrimitive.List>{children}</SelectPrimitive.List>
            <SelectScrollDownButton />
          </SelectPrimitive.Popup>
        </SelectPrimitive.Positioner>
      </ThemeWrapper>
    </SelectPrimitive.Portal>
  )
}

function SelectLabel({
  className,
  ...props
}: SelectPrimitive.GroupLabel.Props) {
  return (
    <SelectPrimitive.GroupLabel
      data-slot="select-label"
      className={cn("px-1.5 py-1 text-xs text-muted-foreground", className)}
      {...props}
    />
  )
}

function SelectItem({
  className,
  children,
  ...props
}: SelectPrimitive.Item.Props) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "relative flex w-full cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      )}
      {...props}
    >
      <SelectPrimitive.ItemText className="flex flex-1 shrink-0 gap-2 whitespace-nowrap">
        {children}
      </SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator
        render={
          <span className="pointer-events-none absolute right-2 flex size-4 items-center justify-center" />
        }
      >
        <CheckIcon className="pointer-events-none" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  )
}

function SelectSeparator({
  className,
  ...props
}: SelectPrimitive.Separator.Props) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("pointer-events-none -mx-1 my-1 h-px bg-border", className)}
      {...props}
    />
  )
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpArrow>) {
  return (
    <SelectPrimitive.ScrollUpArrow
      data-slot="select-scroll-up-button"
      className={cn(
        "top-0 z-10 flex cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <ChevronUpIcon />
    </SelectPrimitive.ScrollUpArrow>
  )
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownArrow>) {
  return (
    <SelectPrimitive.ScrollDownArrow
      data-slot="select-scroll-down-button"
      className={cn(
        "bottom-0 z-10 flex cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <ChevronDownIcon />
    </SelectPrimitive.ScrollDownArrow>
  )
}

// ─── MonoSelect (monolithic) ──────────────────────────────────────────────

interface MonoSelectOption {
  value: string
  label: string
  /** Optional label to display inside the dropdown menu (if different from the trigger label) */
  dropdownLabel?: React.ReactNode
  disabled?: boolean
  group?: string
}

interface MonoSelectProps {
  /** Flat list of options. Use the `group` field to group items. */
  options: MonoSelectOption[]
  /** Placeholder text when no value is selected. */
  placeholder?: string
  /** Controlled value. */
  value?: string
  /** Uncontrolled default value. */
  defaultValue?: string
  /** Called when the value changes. */
  onValueChange?: (value: string) => void
  /** Trigger size variant. */
  size?: VariantProps<typeof selectTriggerVariants>["size"]
  /** Mark as invalid. */
  invalid?: boolean
  /** Disable the select. */
  disabled?: boolean
  /** Additional className for the trigger. */
  className?: string
}

/**
 * MonoSelect — A monolithic select for simple use cases.
 * Wraps the composition-based Select parts into a single component
 * driven by an `options` prop. Supports flat and grouped options.
 *
 * @example
 * ```tsx
 * <MonoSelect
 *   placeholder="Pick a framework..."
 *   options={[
 *     { value: "next", label: "Next.js" },
 *     { value: "vite", label: "Vite" },
 *   ]}
 * />
 * ```
 */
function MonoSelect({
  options,
  placeholder,
  value,
  defaultValue,
  onValueChange,
  size,
  invalid,
  disabled,
  className,
}: MonoSelectProps) {
  return (
    <Select
      value={value}
      defaultValue={defaultValue}
      onValueChange={
        onValueChange && ((v: string | null) => { if (v !== null) onValueChange(v) })
      }
      disabled={disabled}
      items={Object.fromEntries(options.map((opt) => [opt.value, opt.label]))}
    >
      <SelectTrigger
        className={className}
        size={size}
        aria-invalid={invalid || undefined}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {(() => {
          const groups = new Map<string | undefined, MonoSelectOption[]>()
          options.forEach((opt) => {
            const key = opt.group
            if (!groups.has(key)) {
              groups.set(key, [])
            }
            groups.get(key)!.push(opt)
          })

          return Array.from(groups.entries()).map(([groupLabel, opts]) => {
            if (groupLabel) {
              return (
                <SelectGroup key={groupLabel}>
                  <SelectLabel>{groupLabel}</SelectLabel>
                  {opts.map((opt) => (
                    <SelectItem
                      key={opt.value}
                      value={opt.value}
                      disabled={opt.disabled}
                    >
                      {opt.dropdownLabel || opt.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              )
            }
            // Items without a group
            return opts.map((opt) => (
              <SelectItem
                key={opt.value}
                value={opt.value}
                disabled={opt.disabled}
              >
                {opt.dropdownLabel || opt.label}
              </SelectItem>
            ))
          })
        })()}
      </SelectContent>
    </Select>
  )
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  selectTriggerVariants,
  MonoSelect,
}

export type { MonoSelectProps, MonoSelectOption }
