import React, { useState } from "react";
import { type DateRange } from "react-day-picker";

import { DatePicker } from "@/components/macro/date-picker";
import { Calendar } from "@/components/micro/calendar";
import { useDevContext, useI18n } from "~app/components/dev-context";
import {
  ConfigurableShowcase,
  ShowcaseDocs,
  DocsP,
} from "~app/components/showcase";
import { Size } from "@/lib/types";

function SingleDatePreview({ globalSize }: { globalSize: Size }) {
  const [singleDate, setSingleDate] = useState<Date | undefined>(new Date(2026, 5, 10));
  return (
    <div className="border border-border rounded-xl inline-block bg-card p-3">
      <Calendar
        size={globalSize}
        mode="single"
        selected={singleDate}
        onSelect={setSingleDate}
        defaultMonth={new Date(2026, 5, 10)}
        className="w-full"
      />
    </div>
  );
}

function SingleDateMacroPreview({ globalSize }: { globalSize: Size }) {
  const [singleDate, setSingleDate] = useState<Date | undefined>(undefined);
  return (
    <DatePicker
      className="w-64"
      size={globalSize}
      label="Date"
      value={singleDate}
      onValueChange={setSingleDate}
    />
  );
}

function DateRangePreview({ globalSize }: { globalSize: Size }) {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(2026, 5, 15),
    to: new Date(2026, 5, 25),
  });
  return (
    <div className="border border-border rounded-xl inline-block bg-card p-3">
      <Calendar
        size={globalSize}
        mode="range"
        selected={dateRange}
        onSelect={setDateRange}
        defaultMonth={new Date(2026, 5, 15)}
        className="w-full"
      />
    </div>
  );
}

function DateRangeMacroPreview({ globalSize }: { globalSize: Size }) {
  const [rangeDate, setRangeDate] = useState<DateRange | undefined>(undefined);
  return (
    <DatePicker
      className="w-64"
      mode="range"
      size={globalSize}
      label="Date Range"
      rangeValue={rangeDate}
      onRangeChange={setRangeDate}
    />
  );
}

function MultipleDatesPreview({ globalSize }: { globalSize: Size }) {
  const [multipleDates, setMultipleDates] = useState<Date[] | undefined>([
    new Date(2026, 5, 10),
    new Date(2026, 5, 15),
    new Date(2026, 5, 20),
  ]);
  return (
    <div className="border border-border rounded-xl inline-block bg-card p-3">
      <Calendar
        size={globalSize}
        mode="multiple"
        selected={multipleDates}
        onSelect={setMultipleDates}
        defaultMonth={new Date(2026, 5, 10)}
        className="w-full"
      />
    </div>
  );
}

function DisabledDatesPreview({ globalSize }: { globalSize: Size }) {
  return (
    <div className="border border-border rounded-xl inline-block bg-card p-3">
      <Calendar
        size={globalSize}
        mode="single"
        disabled={(date) => date < new Date(2026, 5, 15)}
        defaultMonth={new Date(2026, 5, 15)}
        className="w-full"
      />
    </div>
  );
}

function TwoMonthsPreview({ globalSize }: { globalSize: Size }) {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(2026, 5, 15),
    to: new Date(2026, 5, 25),
  });
  return (
    <div className="border border-border rounded-xl inline-block bg-card p-3 overflow-x-auto max-w-full">
      <Calendar
        size={globalSize}
        mode="range"
        selected={dateRange}
        onSelect={setDateRange}
        numberOfMonths={2}
        defaultMonth={new Date(2026, 5, 15)}
        className="w-full"
      />
    </div>
  );
}

function NavigationPreview({ globalSize }: { globalSize: Size }) {
  return (
    <div className="border border-border rounded-xl inline-block bg-card p-3">
      <Calendar
        size={globalSize}
        mode="single"
        captionLayout="dropdown"
        className="w-full"
      />
    </div>
  );
}

function SingleDropdownMacroPreview({ globalSize }: { globalSize: Size }) {
  const [singleDate, setSingleDate] = useState<Date | undefined>(undefined);
  return (
    <DatePicker
      className="w-64"
      size={globalSize}
      label="Birthday"
      captionLayout="dropdown"
      startMonth={new Date(1900, 0)}
      endMonth={new Date()}
      value={singleDate}
      onValueChange={setSingleDate}
    />
  );
}

function RangeDropdownMacroPreview({ globalSize }: { globalSize: Size }) {
  const [rangeDate, setRangeDate] = useState<DateRange | undefined>(undefined);
  return (
    <DatePicker
      className="w-fit"
      mode="range"
      size={globalSize}
      label="Date Range with Dropdowns"
      captionLayout="dropdown"
      numberOfMonths={2}
      startMonth={new Date(2020, 0)}
      endMonth={new Date(2030, 11)}
      rangeValue={rangeDate}
      onRangeChange={setRangeDate}
    />
  );
}

function LabelDescMacroPreview({ globalSize }: { globalSize: Size }) {
  const [date, setDate] = useState<Date | undefined>(undefined);
  return (
    <DatePicker
      className="w-64"
      size={globalSize}
      label="Start Date"
      description="Select project start date."
      placeholder="Select date"
      value={date}
      onValueChange={setDate}
    />
  );
}

function ErrorMacroPreview({ globalSize }: { globalSize: Size }) {
  const [date, setDate] = useState<Date | undefined>(undefined);
  return (
    <DatePicker
      className="w-64"
      size={globalSize}
      label="Due Date"
      errorMessage="Due date is required."
      value={date}
      onValueChange={setDate}
    />
  );
}

function DisabledMacroPreview({ globalSize }: { globalSize: Size }) {
  const [date, setDate] = useState<Date | undefined>(undefined);
  return (
    <DatePicker
      className="w-64"
      size={globalSize}
      label="Date"
      disabled
      value={date}
      onValueChange={setDate}
    />
  );
}


function useCalendarExamples() {
  const t = useI18n();
  const { size: globalSize } = useDevContext();

  return React.useMemo(
    () => [
      {
        title: t("Ngày đơn", "Single Date"),
        description: t(
          "Chọn một ngày duy nhất. Component Macro hiển thị dưới dạng DatePicker.",
          "Select a single date. Macro component displays as a DatePicker."
        ),
        macroCode: `const [date, setDate] = React.useState<Date | undefined>()

<DatePicker className="w-64"
  label="Date"
  value={date}
  onValueChange={setDate}
/>`,
        macroPreview: <SingleDateMacroPreview globalSize={globalSize} />,
        microCode: `const [date, setDate] = React.useState<Date | undefined>(new Date())

<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  className="rounded-xl border border-border shadow"
/>`,
        microPreview: <SingleDatePreview globalSize={globalSize} />,
      },
      {
        title: t("Phạm vi ngày", "Date Range"),
        description: t(
          "Chọn một phạm vi ngày. Component Macro xử lý chọn khoảng thời gian.",
          "Select a date range. Macro component handles date range selection."
        ),
        macroCode: `const [range, setRange] = React.useState<DateRange | undefined>()

<DatePicker className="w-64"
  mode="range"
  label="Date Range"
  rangeValue={range}
  onRangeChange={setRange}
/>`,
        macroPreview: <DateRangeMacroPreview globalSize={globalSize} />,
        microCode: `const [date, setDate] = React.useState<DateRange | undefined>({
  from: new Date(2026, 5, 15),
  to: new Date(2026, 5, 25) 
})

<Calendar
  mode="range"
  selected={date}
  onSelect={setDate}
  className="rounded-xl border border-border shadow"
/>`,
        microPreview: <DateRangePreview globalSize={globalSize} />,
      },
      {
        title: t("Điều hướng nhanh", "Quick Navigation"),
        description: t(
          "Sổ danh sách để chọn tháng và năm nhanh chóng thay vì click qua lại liên tục.",
          "Dropdown to quickly select month and year instead of clicking repeatedly."
        ),
        macroCode: `// Single Dropdown
<DatePicker
  className="w-64"
  label="Birthday"
  captionLayout="dropdown"
  startMonth={new Date(1900, 0)}
  endMonth={new Date()}
/>

// Range Dropdown
<DatePicker
  className="w-fit"
  mode="range"
  label="Date Range with Dropdowns"
  captionLayout="dropdown"
  numberOfMonths={2}
  startMonth={new Date(2020, 0)}
  endMonth={new Date(2030, 11)}
/>`,
        macroPreview: (
          <div className="flex flex-wrap gap-4 items-start">
            <SingleDropdownMacroPreview globalSize={globalSize} />
            <RangeDropdownMacroPreview globalSize={globalSize} />
          </div>
        ),
        microCode: `<Calendar
  mode="single"
  captionLayout="dropdown"
  className="rounded-xl border border-border shadow"
/>`,
        microPreview: <NavigationPreview globalSize={globalSize} />,
      },
      {
        title: t("Nhiều ngày", "Multiple Dates"),
        description: t(
          "Chọn nhiều ngày rời rạc (mode='multiple').",
          "Select multiple discrete dates (mode='multiple')."
        ),
        microCode: `const [dates, setDates] = React.useState<Date[] | undefined>([])

<Calendar
  mode="multiple"
  selected={dates}
  onSelect={setDates}
  className="rounded-xl border border-border shadow"
/>`,
        microPreview: <MultipleDatesPreview globalSize={globalSize} />,
      },
      {
        title: t("Vô hiệu hóa ngày", "Disabled Dates"),
        description: t(
          "Vô hiệu hóa chọn ngày (VD: ngày trong quá khứ).",
          "Disable date selection (e.g., past dates)."
        ),
        microCode: `<Calendar
  mode="single"
  disabled={(date) => date < new Date()}
  className="rounded-xl border border-border shadow"
/>`,
        microPreview: <DisabledDatesPreview globalSize={globalSize} />,
      },
      {
        title: t("Hai tháng", "Two Months"),
        description: t(
          "Hiển thị 2 tháng liền kề (numberOfMonths=2) thường dùng cho Date Range.",
          "Displays 2 adjacent months (numberOfMonths=2), typically used for Date Range."
        ),
        microCode: `<Calendar
  mode="range"
  selected={date}
  onSelect={setDate}
  numberOfMonths={2}
  className="rounded-xl border border-border shadow"
/>`,
        microPreview: <TwoMonthsPreview globalSize={globalSize} />,
      },
      {
        title: t("Có nhãn & mô tả", "With Label & Description"),
        description: t(
          "Hiển thị label và mô tả bên dưới trigger (Macro).",
          "Displays a label and description below the trigger (Macro)."
        ),
        macroCode: `<DatePicker
  className="w-64"
  label="Start Date"
  description="Select project start date."
  placeholder="Select date"
/>`,
        macroPreview: <LabelDescMacroPreview globalSize={globalSize} />,
      },
      {
        title: t("Trạng thái lỗi", "Error State"),
        description: t(
          "Trigger hiển thị viền đỏ khi có errorMessage (Macro).",
          "Trigger displays a red border when errorMessage is present (Macro)."
        ),
        macroCode: `<DatePicker
  className="w-64"
  label="Due Date"
  errorMessage="Due date is required."
/>`,
        macroPreview: <ErrorMacroPreview globalSize={globalSize} />,
      },
      {
        title: t("Vô hiệu hoá", "Disabled"),
        description: t(
          "Trigger bị vô hiệu hoá, người dùng không thể mở calendar.",
          "Trigger is disabled, user cannot open the calendar."
        ),
        macroCode: `<DatePicker className="w-64" label="Date" disabled />`,
        macroPreview: <DisabledMacroPreview globalSize={globalSize} />,
      },
    ],
    [globalSize, t]
  );
}

export default function CalendarShowcase() {
  const t = useI18n();
  const examples = useCalendarExamples();

  return (
    <ConfigurableShowcase
      title={t("Lịch", "Calendar")}
      description={t(
        "Thành phần chọn ngày, khoảng thời gian hoặc nhiều ngày.",
        "A component to select a single date, multiple dates, or a date range."
      )}
      guideline={
        <ShowcaseDocs>
          <DocsP>
            {t(
              "Dùng để hiển thị lịch và cho phép người dùng chọn một ngày, nhiều ngày hoặc một khoảng thời gian. Thường được sử dụng kết hợp với Popover để tạo thành DatePicker.",
              "Used to display a calendar and allow the user to select a single date, multiple dates, or a date range. Commonly used in combination with Popover to create a DatePicker."
            )}
          </DocsP>
        </ShowcaseDocs>
      }
      examples={examples}
    />
  );
}
