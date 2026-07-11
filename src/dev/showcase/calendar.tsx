import { useDevContext } from "@/dev/components/dev-context";
import {
  DocsP,
  ExampleGrid,
  ExampleSection,
  Showcase,
  ShowcaseDocs,
} from "@/dev/components/showcase";
import { useState } from "react";
import { type DateRange } from "react-day-picker";

import { Calendar } from "@/components/micro/calendar";
import { type Size } from "@/lib/types";

function CalendarMicroShowcase({ globalSize }: { globalSize: Size }) {
  const [singleDate, setSingleDate] = useState<Date | undefined>(new Date());
  const [multipleDates, setMultipleDates] = useState<Date[] | undefined>([
    new Date(2026, 5, 10),
    new Date(2026, 5, 15),
    new Date(2026, 5, 20),
  ]);
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(2026, 5, 15),
    to: new Date(2026, 5, 25),
  });

  return (
    <div className="space-y-10 mt-6">
      <ExampleGrid>
        {/* ── Single Date ── */}
        <ExampleSection
          label="Single Date"
          description="Chọn một ngày duy nhất."
          codeString={`const [date, setDate] = React.useState<Date | undefined>(new Date())

<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  className="rounded-xl border shadow"
/>`}
        >
          <div className="border rounded-xl inline-block bg-card p-3">
            <Calendar
              size={globalSize}
              mode="single"
              selected={singleDate}
              onSelect={setSingleDate}
              className="w-full"
            />
          </div>
        </ExampleSection>

        {/* ── Date Range ── */}
        <ExampleSection
          label="Date Range"
          description="Chọn một phạm vi ngày."
          codeString={`const [date, setDate] = React.useState<DateRange | undefined>({
  from: new Date(2026, 5, 15),
  to: new Date(2026, 5, 25),
})

<Calendar
  mode="range"
  selected={date}
  onSelect={setDate}
  className="rounded-xl border shadow"
/>`}
        >
          <div className="border rounded-xl inline-block bg-card p-3">
            <Calendar
              size={globalSize}
              mode="range"
              selected={dateRange}
              onSelect={setDateRange}
              className="w-full"
            />
          </div>
        </ExampleSection>
      </ExampleGrid>

      <ExampleGrid>
        {/* ── Multiple Dates ── */}
        <ExampleSection
          label="Multiple Dates"
          description="Chọn nhiều ngày rời rạc (mode='multiple')."
          codeString={`const [dates, setDates] = React.useState<Date[] | undefined>([])

<Calendar
  mode="multiple"
  selected={dates}
  onSelect={setDates}
  className="rounded-xl border shadow"
/>`}
        >
          <div className="border rounded-xl inline-block bg-card p-3">
            <Calendar
              size={globalSize}
              mode="multiple"
              selected={multipleDates}
              onSelect={setMultipleDates}
              className="w-full"
            />
          </div>
        </ExampleSection>

        {/* ── Disabled Dates ── */}
        <ExampleSection
          label="Disabled Dates"
          description="Vô hiệu hóa chọn ngày (VD: ngày trong quá khứ)."
          codeString={`<Calendar
  mode="single"
  disabled={(date) => date < new Date()}
  className="rounded-xl border shadow"
/>`}
        >
          <div className="border rounded-xl inline-block bg-card p-3">
            <Calendar
              size={globalSize}
              mode="single"
              disabled={(date) => date < new Date(2026, 5, 15)}
              defaultMonth={new Date(2026, 5, 15)}
              className="w-full"
            />
          </div>
        </ExampleSection>
      </ExampleGrid>

      {/* ── Two Months ── */}
      <ExampleSection
        label="Two Months"
        description="Hiển thị 2 tháng liền kề (numberOfMonths=2) thường dùng cho Date Range."
        codeString={`<Calendar
  mode="range"
  selected={date}
  onSelect={setDate}
  numberOfMonths={2}
  className="rounded-xl border shadow"
/>`}
      >
        <div className="border rounded-xl inline-block bg-card p-3 overflow-x-auto max-w-full">
          <Calendar
            size={globalSize}
            mode="range"
            selected={dateRange}
            onSelect={setDateRange}
            numberOfMonths={2}
            className="w-full"
          />
        </div>
      </ExampleSection>

      {/* ── With Navigation Dropdown ── */}
      <ExampleSection
        label="With Navigation"
        description="Lịch với điều hướng thả xuống cho tháng/năm."
        codeString={`<Calendar
  mode="single"
  captionLayout="dropdown"
  className="rounded-xl border shadow"
/>`}
      >
        <div className="border rounded-xl inline-block bg-card p-3">
          <Calendar
            size={globalSize}
            mode="single"
            captionLayout="dropdown"
            className="w-full"
          />
        </div>
      </ExampleSection>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 3: Entry point
// ──────────────────────────────────────────────────────────
export default function CalendarShowcase() {
  const { size: globalSize } = useDevContext();
  return (
    <Showcase
      title="Calendar"
      description="Thành phần trường ngày cho phép người dùng nhập và chỉnh sửa ngày."
      generalConcept={
        <ShowcaseDocs>
          <DocsP>
            Dùng để hiển thị lịch và cho phép người dùng chọn một ngày, nhiều
            ngày hoặc một khoảng thời gian. Thường được sử dụng kết hợp với
            Popover để tạo thành DatePicker.
          </DocsP>
        </ShowcaseDocs>
      }
      tabs={[
        {
          label: "Micro (Primitive)",
          content: <CalendarMicroShowcase globalSize={globalSize} />,
        },
      ]}
    />
  );
}
