import { useState } from "react";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";
import type { DateRange } from "react-day-picker";

import { type Size } from "@/lib/types";
import { Calendar } from "@/components/micro/calendar";
import { SelectPreset } from "@/components/macro/select-preset";

export default function CalendarShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");
  const [singleDate, setSingleDate] = useState<Date | undefined>(new Date());
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(2026, 5, 15),
    to: new Date(2026, 5, 25),
  });

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Calendar"
        description="A date field component that allows users to enter and edit date."
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
        <ExampleSection label="Single Date" description="Select a single date.">
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
          description="Select a range of dates."
        >
          <div className="border rounded-xl inline-block bg-card p-3">
            <Calendar
              size={globalSize}
              mode="range"
              selected={dateRange}
              onSelect={setDateRange}
              numberOfMonths={1}
              className="w-full"
            />
          </div>
        </ExampleSection>
      </ExampleGrid>

      {/* ── With Navigation Dropdown ── */}
      <ExampleSection
        label="With Navigation"
        description="Calendar with dropdown navigation for month/year."
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
