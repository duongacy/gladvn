import { useState } from "react";
import { Calendar } from "../../index";
import { SectionHeader, ExampleSection, ExampleGrid } from "../components/showcase";
import type { DateRange } from "react-day-picker";

export default function CalendarShowcase() {
  const [singleDate, setSingleDate] = useState<Date | undefined>(new Date());
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(2026, 5, 15),
    to: new Date(2026, 5, 25),
  });

  return (
    <div className="space-y-10">
      <SectionHeader title="Calendar" description="A date field component that allows users to enter and edit date." />

      <ExampleGrid columns={2}>
        {/* ── Single Date ── */}
        <ExampleSection label="Single Date" description="Select a single date.">
          <div className="border rounded-xl inline-block bg-card p-3">
            <Calendar
              mode="single"
              selected={singleDate}
              onSelect={setSingleDate}
              className="w-full"
            />
          </div>
        </ExampleSection>

        {/* ── Date Range ── */}
        <ExampleSection label="Date Range" description="Select a range of dates.">
          <div className="border rounded-xl inline-block bg-card p-3">
            <Calendar
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
      <ExampleSection label="With Navigation" description="Calendar with dropdown navigation for month/year.">
        <div className="border rounded-xl inline-block bg-card p-3">
          <Calendar
            mode="single"
            captionLayout="dropdown"
            className="w-full"
          />
        </div>
      </ExampleSection>
    </div>
  );
}
