"use client";

import * as React from "react";

import { cva } from "class-variance-authority";
import { CalendarIcon } from "lucide-react";
import { type DateRange, type Locale, type Matcher } from "react-day-picker";

import { Button } from "../../components/micro/button";
import { Calendar } from "../../components/micro/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "../../components/micro/popover";
import { type Size } from "../../lib/types";
import { cn } from "../../lib/utils";
import { FieldPreset } from "./field-preset";

type DatePickerLabels = {
  /** Placeholder for single date mode. @default "Pick a date" */
  placeholderSingle?: string;
  /** Placeholder for range date mode. @default "Pick a date range" */
  placeholderRange?: string;
  /** Cancel button label. @default "Cancel" */
  cancel?: string;
  /** Confirm button label. @default "Apply" */
  confirm?: string;
};

type DatePickerBaseProps = {
  /** Visual mode. "single" selects one date, "range" selects a start–end span. */
  mode?: "single" | "range";
  /** Size passed to the trigger button and Calendar. */
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

  /** Number of calendar months to display. */
  numberOfMonths?: number;
  /** Navigation control style. */
  captionLayout?: "label" | "dropdown" | "dropdown-months" | "dropdown-years";
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
  /** i18n labels to override default Vietnamese strings. */
  labels?: DatePickerLabels;
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
  value?: DateRange;
  /** Called when the user changes the selected value. */
  onValueChange?: (range: DateRange | undefined) => void;
};

type DatePickerProps = DatePickerSingleProps | DatePickerRangeProps;

const triggerVariants = cva(
  "inline-flex w-full items-center justify-start rounded-lg border border-input bg-transparent font-normal whitespace-nowrap transition-colors outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:focus-visible:ring-3 aria-invalid:focus-visible:ring-destructive/50 dark:bg-input/30 [:where(&>svg)]:size-[1.1em] [:where(&>svg)]:shrink-0",
  {
    variants: {
      size: {
        sm: "h-7 gap-1 px-2 py-0.5 text-xs",
        md: "h-8 gap-1.5 px-2.5 py-1 text-sm",
        lg: "h-9 gap-2 px-3 py-1.5 text-sm"
      }
    },
    defaultVariants: {
      size: "md"
    }
  },
);

const fmt = (
  date: Date,
  opts: Intl.DateTimeFormatOptions,
  localeCode?: string,
) => new Intl.DateTimeFormat(localeCode ?? "en-US", opts).format(date);

function formatTriggerLabel(
  mode: "single" | "range",
  value: Date | undefined,
  rangeValue: DateRange | undefined,
  placeholder: string,
  localeCode?: string,
): string {
  if (mode === "single") {
    return value
      ? fmt(
        value,
        { month: "short", day: "numeric", year: "numeric" },
        localeCode,
      )
      : placeholder;
  }
  if (!rangeValue?.from) return placeholder;
  const fromStr = fmt(
    rangeValue.from,
    { month: "short", day: "numeric" },
    localeCode,
  );
  if (!rangeValue.to) return `${fromStr} – ...`;
  const toStr = fmt(
    rangeValue.to,
    { month: "short", day: "numeric", year: "numeric" },
    localeCode,
  );
  return `${fromStr} – ${toStr}`;
}


const DatePicker = React.forwardRef<HTMLButtonElement, DatePickerProps>(
  (
    {
      mode = "single",
      value: valueProp,
      onValueChange,
      size = "md",
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
      labels },
    ref,
  ) => {
    const generatedId = React.useId();
    const triggerId = id ?? generatedId;
    const isInvalid = !!errorMessage;

    const singleValue = mode === "single" ? (valueProp as Date | undefined) : undefined;
    const rangeValue = mode === "range" ? (valueProp as DateRange | undefined) : undefined;

    const [open, setOpen] = React.useState(false);
    const [tempValue, setTempValue] = React.useState<Date | undefined>(singleValue);
    const [tempRange, setTempRange] = React.useState<DateRange | undefined>(rangeValue);

    // Sync temp state only when the popover opens.
    // Intentionally excludes singleValue/rangeValue from deps — resetting an
    // in-progress user selection when the controlled value changes mid-session
    // would cause a jarring UX.
    React.useEffect(() => {
      if (!open) return;
      setTempValue(singleValue);
      setTempRange(rangeValue);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open]);

    const defaultPlaceholder =
      placeholder ?? (mode === "range"
        ? (labels?.placeholderRange ?? "Pick a date range")
        : (labels?.placeholderSingle ?? "Pick a date"));

    const triggerLabel = formatTriggerLabel(
      mode,
      singleValue,
      rangeValue,
      defaultPlaceholder,
      locale?.code,
    );

    const hasValue =
      mode === "single" ? !!singleValue : !!(rangeValue?.from ?? rangeValue?.to);

    const handleCancel = React.useCallback(() => setOpen(false), []);

    const handleConfirm = React.useCallback(() => {
      if (mode === "single") {
        (onValueChange as ((date: Date | undefined) => void) | undefined)?.(tempValue);
      } else {
        (onValueChange as ((range: DateRange | undefined) => void) | undefined)?.(tempRange);
      }
      setOpen(false);
    }, [mode, onValueChange, tempValue, tempRange]);

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
            ref={ref}
            id={triggerId}
            disabled={disabled}
            aria-invalid={isInvalid || undefined}
            className={cn(triggerVariants({ size }), {
              "text-muted-foreground": !hasValue,
            })}
          >
            <CalendarIcon aria-hidden="true" />
            <span className="flex-1 truncate text-left min-w-0">
              {triggerLabel}
            </span>
          </PopoverTrigger>

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
                defaultMonth={defaultMonth ?? singleValue}
                selected={tempValue}
                onSelect={setTempValue}
              />
            ) : (
              <Calendar
                mode="range"
                size={size}
                locale={locale}
                numberOfMonths={numberOfMonths ?? 2}
                captionLayout={captionLayout}
                disabled={disabledDates}
                startMonth={startMonth}
                endMonth={endMonth}
                defaultMonth={defaultMonth ?? rangeValue?.from}
                selected={tempRange}
                onSelect={setTempRange}
              />
            )}
            <div className="flex items-center justify-end gap-2 px-3 pb-3 pt-1">
              <Button
                variant="outline"
                size={size}
                onClick={handleCancel}
              >
                {labels?.cancel ?? "Cancel"}
              </Button>
              <Button
                size={size}
                onClick={handleConfirm}
              >
                {labels?.confirm ?? "Apply"}
              </Button>
            </div>
          </PopoverContent>

        </Popover>
      </FieldPreset>
    );
  },
);
DatePicker.displayName = "DatePicker";

export { DatePicker };
export type { DatePickerProps };
