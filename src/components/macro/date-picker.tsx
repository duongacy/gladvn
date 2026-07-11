"use client";

import { CalendarIcon } from "lucide-react";
import * as React from "react";
import { type DateRange, type Locale, type Matcher } from "react-day-picker";

import { Button } from "@/components/micro/button";
import { Calendar } from "@/components/micro/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/micro/popover";
import { type Size } from "@/lib/types";
import { cn } from "@/lib/utils";
import { FieldPreset } from "./field-preset";

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

type DatePickerBaseProps = {
  /** Visual mode. "single" selects one date, "range" selects a start–end span. */
  mode?: "single" | "range";
  /** Size passed to the trigger Button and Calendar. */
  size?: Size;
  /** Placeholder shown in the trigger when no date is selected. */
  placeholder?: string;
  /** Disable the trigger button and the calendar. */
  disabled?: boolean;
  /** Label rendered above the trigger via FieldPreset. */
  label?: React.ReactNode;
  /** Helper text rendered below the trigger via FieldPreset. */
  description?: React.ReactNode;
  /** When set, the trigger renders with error styling and this message appears below. */
  errorMessage?: React.ReactNode;
  /** Whether to render the error message. Defaults to true. */
  showError?: boolean;
  /** HTML id forwarded to the trigger button; also used as htmlFor on the FieldLabel. */
  id?: string;
  /** className applied to the outermost FieldPreset wrapper. */
  className?: string;
  // ─── Calendar passthrough ───────────────────────────────────────────────
  /** Number of calendar months to display. */
  numberOfMonths?: number;
  /** Navigation control style. */
  captionLayout?: "label" | "dropdown";
  /** Locale for react-day-picker date formatting. */
  locale?: Partial<Locale>;
  /** Dates to disable in the calendar. */
  disabledDates?: Matcher | Matcher[];
  /** Earliest month the user can navigate to. */
  startMonth?: Date;
  /** Latest month the user can navigate to. */
  endMonth?: Date;
  /** Month shown on first render (uncontrolled default). */
  defaultMonth?: Date;
};

type DatePickerSingleProps = DatePickerBaseProps & {
  mode?: "single";
  /** Controlled selected date (single mode). */
  value?: Date;
  /** Called when the user selects or clears a date (single mode). */
  onValueChange?: (date: Date | undefined) => void;
  rangeValue?: never;
  onRangeChange?: never;
};

type DatePickerRangeProps = DatePickerBaseProps & {
  mode: "range";
  /** Controlled selected date range (range mode). */
  rangeValue?: DateRange;
  /** Called when the user changes the date range (range mode). */
  onRangeChange?: (range: DateRange | undefined) => void;
  value?: never;
  onValueChange?: never;
};

type DatePickerProps = DatePickerSingleProps | DatePickerRangeProps;

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

const fmt = (date: Date, opts: Intl.DateTimeFormatOptions, localeCode?: string) =>
  new Intl.DateTimeFormat(localeCode ?? "en-US", opts).format(date);

function formatTriggerLabel(
  mode: "single" | "range",
  value: Date | undefined,
  rangeValue: DateRange | undefined,
  placeholder: string,
  localeCode?: string,
): string {
  if (mode === "single") {
    return value
      ? fmt(value, { month: "short", day: "numeric", year: "numeric" }, localeCode)
      : placeholder;
  }
  if (!rangeValue?.from) return placeholder;
  const fromStr = fmt(rangeValue.from, { month: "short", day: "numeric" }, localeCode);
  if (!rangeValue.to) return `${fromStr} – ...`;
  const toStr = fmt(rangeValue.to, { month: "short", day: "numeric", year: "numeric" }, localeCode);
  return `${fromStr} – ${toStr}`;
}

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

const DatePicker = React.forwardRef<HTMLButtonElement, DatePickerProps>(
  (
    {
      mode = "single",
      value,
      onValueChange,
      rangeValue,
      onRangeChange,
      size,
      placeholder,
      disabled,
      label,
      description,
      errorMessage,
      showError = true,
      id,
      className,
      numberOfMonths,
      captionLayout,
      locale,
      disabledDates,
      startMonth,
      endMonth,
      defaultMonth,
    },
    ref,
  ) => {
    const generatedId = React.useId();
    const triggerId = id ?? generatedId;
    const isInvalid = !!errorMessage;

    const [open, setOpen] = React.useState(false);

    const defaultPlaceholder =
      placeholder ?? (mode === "range" ? "Pick a date range" : "Pick a date");

    const triggerLabel = formatTriggerLabel(
      mode,
      value,
      rangeValue,
      defaultPlaceholder,
      locale?.code,
    );

    const hasValue =
      mode === "single" ? !!value : !!(rangeValue?.from ?? rangeValue?.to);

    return (
      <FieldPreset
        label={label}
        description={description}
        errorMessage={errorMessage}
        showError={showError}
        className={className}
        orientation="vertical"
        htmlFor={triggerId}
        size={size}
      >
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger
            render={
              <Button
                ref={ref}
                id={triggerId}
                variant="outline"
                color="secondary"
                size={size}
                disabled={disabled}
                aria-invalid={isInvalid || undefined}
                aria-haspopup="dialog"
                aria-expanded={open}
                className={cn(
                  "w-full justify-start font-normal",
                  !hasValue && "text-muted-foreground",
                )}
              >
                <CalendarIcon />
                {triggerLabel}
              </Button>
            }
          />
          <PopoverContent
            side="bottom"
            align="start"
            sideOffset={4}
            className="p-0 w-auto"
          >
            {mode === "single" ? (
              <Calendar
                mode="single"
                size={size}
                locale={locale}
                numberOfMonths={numberOfMonths}
                captionLayout={captionLayout}
                disabled={disabledDates}
                startMonth={startMonth}
                endMonth={endMonth}
                defaultMonth={defaultMonth ?? value}
                selected={value}
                onSelect={(date) => {
                  onValueChange?.(date);
                  setOpen(false);
                }}
              />
            ) : (
              <Calendar
                mode="range"
                size={size}
                locale={locale}
                numberOfMonths={numberOfMonths ?? 1}
                captionLayout={captionLayout}
                disabled={disabledDates}
                startMonth={startMonth}
                endMonth={endMonth}
                defaultMonth={defaultMonth ?? rangeValue?.from}
                selected={rangeValue}
                onSelect={(range) => {
                  onRangeChange?.(range);
                  // Keep open until both from and to are selected
                  if (range?.from && range?.to) setOpen(false);
                }}
              />
            )}
          </PopoverContent>
        </Popover>
      </FieldPreset>
    );
  },
);
DatePicker.displayName = "DatePicker";

export { DatePicker };
export type { DatePickerProps };
