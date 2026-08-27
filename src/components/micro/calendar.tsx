/**
 * ✅ AUDITED
 * - Design System Compliant (22 Commandments)
 * - WCAG AAA/AA
 * - Form Control Parity
 * - CSS Delegated Logic
 */
"use client";

import * as React from "react";

import { type VariantProps, cva } from "class-variance-authority";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import {
  type DayButton,
  DayPicker,
  type Locale,
  getDefaultClassNames,
} from "react-day-picker";

import { buttonVariants } from "../../components/micro/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "../../components/micro/select";
import { type Size } from "../../lib/types";
import { cn } from "../../lib/utils";

function getDropdownLabel(
  options: Array<{ value: number | string; label: string }> | undefined,
  value: number | string | readonly string[] | undefined,
  locale?: Partial<Locale>,
): string {
  const valueStr = Array.isArray(value)
    ? (value as string[])[0]
    : value?.toString();
  const selected = options?.find((o) => o.value.toString() === valueStr);
  if (!selected) return "";
  const isMonth = options?.length === 12;
  if (isMonth && selected.value !== undefined) {
    return new Date(2000, Number(selected.value), 1).toLocaleString(
      locale?.code ?? "en-US",
      { month: "short" },
    );
  }
  return selected.label;
}

const calendarVariants = cva(
  "group/calendar bg-background p-2 in-data-[slot=card-content]:bg-transparent in-data-[slot=popover-content]:bg-transparent",
  {
    variants: {
      size: {
        sm: "calendar-sm",
        md: "calendar-md",
        lg: "calendar-lg",
      },
    },
  },
);

/**
 * @description A date field component that allows users to enter and edit date.
 * @example
 * <Calendar mode="single" selected={date} onSelect={setDate} />
 */
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  locale,
  formatters,
  components,
  size = "md",
  ...props
}: React.ComponentProps<typeof DayPicker> &
  Omit<VariantProps<typeof calendarVariants>, "size"> & {
    size?: Size;
    buttonVariant?: VariantProps<typeof buttonVariants>["variant"];
  }) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(calendarVariants({ size }), className)}
      captionLayout={captionLayout}
      locale={locale}
      formatters={{
        formatMonthDropdown: (month) =>
          month.toLocaleString(locale?.code ?? "en-US", { month: "long" }),
        ...formatters,
      }}
      classNames={{
        root: cn("w-fit", defaultClassNames.root),
        months: cn(
          "relative flex flex-col gap-4 md:flex-row",
          defaultClassNames.months,
        ),
        month: cn("flex w-full flex-col gap-4", defaultClassNames.month),
        nav: cn(
          "absolute inset-x-0 top-0 flex items-center justify-between pointer-events-none",
          "h-8 group-[.calendar-sm]/calendar:h-7 group-[.calendar-lg]/calendar:h-9",
          defaultClassNames.nav,
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant, color: "secondary", size }),
          "p-0 aspect-square select-none pointer-events-auto aria-disabled:pointer-events-none aria-disabled:opacity-50",
          defaultClassNames.button_previous,
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant, color: "secondary", size }),
          "p-0 aspect-square select-none pointer-events-auto aria-disabled:pointer-events-none aria-disabled:opacity-50",
          defaultClassNames.button_next,
        ),
        month_caption: cn(
          "flex w-full items-center justify-center",
          "h-8 px-8 group-[.calendar-sm]/calendar:h-7 group-[.calendar-sm]/calendar:px-7 group-[.calendar-lg]/calendar:h-9 group-[.calendar-lg]/calendar:px-9",
          defaultClassNames.month_caption,
        ),
        dropdowns: cn(
          "flex h-7 group-[.calendar-sm]/calendar:h-6 group-[.calendar-lg]/calendar:h-8 items-center justify-center gap-0",
          defaultClassNames.dropdowns,
        ),
        dropdown_root: cn(
          "relative flex items-center justify-center",
          defaultClassNames.dropdown_root,
        ),
        dropdown: cn(defaultClassNames.dropdown),
        caption_label: cn(
          "px-2 font-bold select-none",
          {
            "text-sm group-[.calendar-sm]/calendar:text-xs group-[.calendar-lg]/calendar:text-base":
              captionLayout === "label",
            "flex items-center gap-1 rounded-md text-sm group-[.calendar-sm]/calendar:text-xs group-[.calendar-lg]/calendar:text-base [&>svg]:size-3.5 [&>svg]:text-muted-foreground":
              captionLayout !== "label",
          },
          defaultClassNames.caption_label,
        ),
        month_grid: cn("w-full border-collapse", defaultClassNames.month_grid),
        weekdays: cn("flex gap-1", defaultClassNames.weekdays),
        weekday: cn(
          "flex-1 rounded-md text-xs font-medium text-muted-foreground select-none group-[.calendar-sm]/calendar:text-[10px] group-[.calendar-lg]/calendar:text-sm",
          defaultClassNames.weekday,
        ),
        week: cn("mt-2 flex w-full gap-1", defaultClassNames.week),
        week_number_header: cn(
          "w-7 group-[.calendar-sm]/calendar:w-6 group-[.calendar-lg]/calendar:w-8 select-none",
          defaultClassNames.week_number_header,
        ),
        week_number: cn(
          "text-xs text-muted-foreground select-none group-[.calendar-sm]/calendar:text-[10px] group-[.calendar-lg]/calendar:text-sm",
          defaultClassNames.week_number,
        ),
        day: cn(
          "group/day relative aspect-square h-full w-full rounded-md p-0 text-center select-none",
          defaultClassNames.day,
        ),
        day_button: cn(defaultClassNames.day_button),
        range_start: cn(
          "relative isolate z-0 rounded-md bg-muted",
          defaultClassNames.range_start,
        ),
        range_middle: cn("rounded-md bg-muted", defaultClassNames.range_middle),
        range_end: cn(
          "relative isolate z-0 rounded-md bg-muted",
          defaultClassNames.range_end,
        ),
        today: cn(
          "rounded-md bg-muted text-foreground",
          defaultClassNames.today,
        ),
        outside: cn(
          "text-muted-foreground aria-selected:text-muted-foreground",
          defaultClassNames.outside,
        ),
        disabled: cn(
          "text-muted-foreground opacity-50",
          defaultClassNames.disabled,
        ),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return (
            <div
              data-slot="calendar"
              ref={rootRef}
              className={cn(className)}
              {...props}
            />
          );
        },
        Dropdown: ({
          value,
          onChange,
          options,
          disabled,
          "aria-label": ariaLabel,
          name,
        }) => {
          return (
            <Select
              value={value?.toString()}
              disabled={disabled}
              onValueChange={(newVal) => {
                const event = {
                  target: { value: newVal, name },
                } as React.ChangeEvent<HTMLSelectElement>;
                onChange?.(event);
              }}
            >
              <SelectTrigger
                size={size}
                aria-label={ariaLabel}
                className="w-fit min-w-0 px-1 border-none bg-transparent font-medium shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 [&_[data-slot=select-value]]:w-auto"
              >
                <span
                  data-slot="select-value"
                  className="flex flex-1 text-left"
                >
                  {getDropdownLabel(options, value, locale)}
                </span>
              </SelectTrigger>
              <SelectContent>
                {options?.map((option) => {
                  const isMonth = options?.length === 12;
                  let shortLabel = option.label;
                  if (isMonth && option.value !== undefined) {
                    const monthDate = new Date(2000, Number(option.value), 1);
                    shortLabel = monthDate.toLocaleString(
                      locale?.code ?? "en-US",
                      {
                        month: "short",
                      },
                    );
                  }
                  return (
                    <SelectItem
                      key={option.value}
                      value={option.value.toString()}
                      disabled={option.disabled}
                    >
                      {shortLabel}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          );
        },
        Chevron: ({ className, orientation, ...props }) => {
          const sizeClasses =
            "size-4 group-[.calendar-sm]/calendar:size-3.5 group-[.calendar-lg]/calendar:size-5";

          if (orientation === "left") {
            return (
              <ChevronLeftIcon
                className={cn(
                  "size-5 group-[.calendar-sm]/calendar:size-4 group-[.calendar-lg]/calendar:size-6 rtl:rotate-180",
                  className,
                )}
                strokeWidth={3}
                {...props}
              />
            );
          }

          if (orientation === "right") {
            return (
              <ChevronRightIcon
                className={cn(
                  "size-5 group-[.calendar-sm]/calendar:size-4 group-[.calendar-lg]/calendar:size-6 rtl:rotate-180",
                  className,
                )}
                strokeWidth={3}
                {...props}
              />
            );
          }

          return (
            <ChevronDownIcon
              className={cn(sizeClasses, className)}
              strokeWidth={2.5}
              {...props}
            />
          );
        },
        DayButton: ({ ...props }) => (
          <CalendarDayButton locale={locale} {...props} />
        ),
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="flex size-7 group-[.calendar-sm]/calendar:size-6 group-[.calendar-lg]/calendar:size-8 items-center justify-center text-center">
                {children}
              </div>
            </td>
          );
        },
        ...components,
      }}
      {...props}
    />
  );
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  locale,
  ...props
}: React.ComponentProps<typeof DayButton> & { locale?: Partial<Locale> }) {
  const defaultClassNames = getDefaultClassNames();

  const ref = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);

  return (
    <button
      ref={ref}
      type="button"
      data-slot="calendar-day-button"
      data-day={day.date.toLocaleDateString(locale?.code)}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        
        "relative isolate z-10 flex aspect-square size-7 flex-col items-center justify-center gap-1 rounded-md font-normal leading-none transition-colors outline-none select-none",
        "group-[.calendar-sm]/calendar:size-6 group-[.calendar-lg]/calendar:size-8",
        
        "text-sm group-[.calendar-sm]/calendar:text-xs",
        
        "hover:bg-accent hover:text-accent-foreground",
        
        "focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:ring-offset-1 focus-visible:ring-offset-background",
        
        "disabled:pointer-events-none disabled:opacity-50",
        
        "group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-3 group-data-[focused=true]/day:ring-ring/50",
        
        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[selected-single=true]:hover:bg-primary/90",
        
        "data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground",
        
        "data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground",
        
        "data-[range-middle=true]:bg-muted data-[range-middle=true]:text-foreground",

        "dark:hover:text-foreground",
        className,
      )}
      {...props}
    />
  );
}

Calendar.displayName = "Calendar";
CalendarDayButton.displayName = "CalendarDayButton";

export { Calendar, CalendarDayButton };
