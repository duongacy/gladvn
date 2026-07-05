import { useState } from "react";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";
import { type DateRange } from "react-day-picker";

import { type Size } from "@/lib/types";
import { Calendar } from "@/components/micro/calendar";
import { SelectPreset } from "@/components/macro/select-preset";

export default function CalendarShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");
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
    <div className="space-y-10">
      <SectionHeader
        title="Calendar"
        description="Thành phần trường ngày cho phép người dùng nhập và chỉnh sửa ngày."
      >
        <SelectPreset
          value={globalSize}
          onValueChange={(v) => setGlobalSize(v as Size)}
          options={[
            { value: "sm", label: "Size: sm" },
            { value: "md", label: "Size: md" },
            { value: "lg", label: "Size: lg" },
          ]}
          className="w-[120px] h-8 text-xs bg-background"
        />
      </SectionHeader>

      <ExampleGrid columns={2}>
        {/* ── Single Date ── */}
        <ExampleSection label="Single Date" description="Chọn một ngày duy nhất.">
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

      <ExampleGrid columns={2}>
        {/* ── Multiple Dates ── */}
        <ExampleSection
          label="Multiple Dates"
          description="Chọn nhiều ngày rời rạc (mode='multiple')."
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
