import { useState } from "react";

import { type DateRange } from "react-day-picker";

import { DatePicker } from "../../components/macro/date-picker";
import { Calendar } from "../../components/micro/calendar";
import { useDevContext } from "../../dev/components/dev-context";
import {
  DocsP,
  ExampleGrid,
  ShowcaseExample,
  Showcase,
  ShowcaseDocs
} from "../../dev/components/showcase";
import { type Size } from "../../lib/types";

function CalendarMicroShowcase({ globalSize }: { globalSize: Size }) {
  const [singleDate, setSingleDate] = useState<Date | undefined>(new Date());
  const [multipleDates, setMultipleDates] = useState<Date[] | undefined>([
    new Date(2026, 5, 10),
    new Date(2026, 5, 15),
    new Date(2026, 5, 20),
  ]);
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(2026, 5, 15),
    to: new Date(2026, 5, 25) });

  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample title="Single Date" description="Chọn một ngày duy nhất." code={`const [date, setDate] = React.useState<Date | undefined>(new Date())

<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  className="rounded-xl border border-border shadow"
/>`} preview={
                      <>
              <div className="border border-border rounded-xl inline-block bg-card p-3">
                          <Calendar
                            size={globalSize}
                            mode="single"
                            selected={singleDate}
                            onSelect={setSingleDate}
                            className="w-full"
                          />
                        </div>
                      </>
                    } />

        <ShowcaseExample title="Date Range" description="Chọn một phạm vi ngày." code={`const [date, setDate] = React.useState<DateRange | undefined>({
  from: new Date(2026, 5, 15),
  to: new Date(2026, 5, 25) })

<Calendar
  mode="range"
  selected={date}
  onSelect={setDate}
  className="rounded-xl border border-border shadow"
/>`} preview={
                      <>
              <div className="border border-border rounded-xl inline-block bg-card p-3">
                          <Calendar
                            size={globalSize}
                            mode="range"
                            selected={dateRange}
                            onSelect={setDateRange}
                            className="w-full"
                          />
                        </div>
                      </>
                    } />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample title="Multiple Dates" description="Chọn nhiều ngày rời rạc (mode='multiple')." code={`const [dates, setDates] = React.useState<Date[] | undefined>([])

<Calendar
  mode="multiple"
  selected={dates}
  onSelect={setDates}
  className="rounded-xl border border-border shadow"
/>`} preview={
                      <>
              <div className="border border-border rounded-xl inline-block bg-card p-3">
                          <Calendar
                            size={globalSize}
                            mode="multiple"
                            selected={multipleDates}
                            onSelect={setMultipleDates}
                            className="w-full"
                          />
                        </div>
                      </>
                    } />

        <ShowcaseExample title="Disabled Dates" description="Vô hiệu hóa chọn ngày (VD: ngày trong quá khứ)." code={`<Calendar
    mode="single"
    disabled={(date) => date < new Date()}
    className="rounded-xl border border-border shadow"
  />`} preview={
                      <>
              <div className="border border-border rounded-xl inline-block bg-card p-3">
                          <Calendar
                            size={globalSize}
                            mode="single"
                            disabled={(date) => date < new Date(2026, 5, 15)}
                            defaultMonth={new Date(2026, 5, 15)}
                            className="w-full"
                          />
                        </div>
                      </>
                    } />
      </ExampleGrid>

      <ShowcaseExample title="Two Months" description="Hiển thị 2 tháng liền kề (numberOfMonths=2) thường dùng cho Date Range." code={`<Calendar
    mode="range"
    selected={date}
    onSelect={setDate}
    numberOfMonths={2}
    className="rounded-xl border border-border shadow"
  />`} preview={
                  <>
          <div className="border border-border rounded-xl inline-block bg-card p-3 overflow-x-auto max-w-full">
                    <Calendar
                      size={globalSize}
                      mode="range"
                      selected={dateRange}
                      onSelect={setDateRange}
                      numberOfMonths={2}
                      className="w-full"
                    />
                  </div>
                  </>
                } />

      <ShowcaseExample title="With Navigation" description="Lịch với điều hướng thả xuống cho tháng/năm." code={`<Calendar
    mode="single"
    captionLayout="dropdown"
    className="rounded-xl border border-border shadow"
  />`} preview={
                  <>
          <div className="border border-border rounded-xl inline-block bg-card p-3">
                    <Calendar
                      size={globalSize}
                      mode="single"
                      captionLayout="dropdown"
                      className="w-full"
                    />
                  </div>
                  </>
                } />
    </div>
  );
}

function CalendarMacroShowcase({ globalSize }: { globalSize: Size }) {
  const [singleDate, setSingleDate] = useState<Date | undefined>(undefined);
  const [rangeDate, setRangeDate] = useState<DateRange | undefined>(undefined);
  const [descDate, setDescDate] = useState<Date | undefined>(undefined);
  const [errDate, setErrDate] = useState<Date | undefined>(undefined);
  const [disDate, setDisDate] = useState<Date | undefined>(undefined);
  const [smDate, setSmDate] = useState<Date | undefined>(undefined);
  const [mdDate, setMdDate] = useState<Date | undefined>(undefined);
  const [lgDate, setLgDate] = useState<Date | undefined>(undefined);

  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample title="Single Date" description="DatePicker cơ bản chọn một ngày." code={`const [date, setDate] = React.useState<Date | undefined>()

<DatePicker className="w-64"
    label="Date"
    value={date}
    onValueChange={setDate}
  />`} preview={
                      <>
              <DatePicker
                          className="w-64"
                          size={globalSize}
                          label="Date"
                          value={singleDate}
                          onValueChange={setSingleDate}
                        />
                      </>
                    } />

        <ShowcaseExample title="Date Range" description="DatePicker chọn khoảng thời gian (range mode)." code={`const [range, setRange] = React.useState<DateRange | undefined>()

<DatePicker className="w-64"
    mode="range"
    label="Date Range"
    rangeValue={range}
    onRangeChange={setRange}
  />`} preview={
                      <>
              <DatePicker
                          className="w-64"
                          mode="range"
                          size={globalSize}
                          label="Date Range"
                          rangeValue={rangeDate}
                          onRangeChange={setRangeDate}
                        />
                      </>
                    } />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample title="Single Dropdown" description="Sổ danh sách để chọn tháng và năm nhanh chóng thay vì click qua lại liên tục." code={`<DatePicker
    className="w-64"
    label="Birthday"
    captionLayout="dropdown"
    startMonth={new Date(1900, 0)}
    endMonth={new Date()}
  />`} preview={
                      <>
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
                      </>
                    } />
        <ShowcaseExample title="Range Dropdown" description="Sổ danh sách cho cả 2 tháng khi chọn khoảng thời gian (cần numberOfMonths={2})." code={`<DatePicker
    className="w-fit"
    mode="range"
    label="Date Range with Dropdowns"
    captionLayout="dropdown"
    numberOfMonths={2}
    startMonth={new Date(2020, 0)}
    endMonth={new Date(2030, 11)}
  />`} preview={
                      <>
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
                      </>
                    } />
      </ExampleGrid>

      <ShowcaseExample title="With Label & Description" description="Hiển thị label và mô tả bên dưới trigger." code={`<DatePicker
    className="w-64"
    label="Start Date"
    description="Chọn ngày bắt đầu dự án."
    placeholder="Chọn ngày"
  />`} preview={
                  <>
          <DatePicker
                    className="w-64"
                    size={globalSize}
                    label="Start Date"
                    description="Chọn ngày bắt đầu dự án."
                    placeholder="Chọn ngày"
                    value={descDate}
                    onValueChange={setDescDate}
                  />
                  </>
                } />

      <ShowcaseExample title="Error State" description="Trigger hiển thị viền đỏ khi có errorMessage." code={`<DatePicker
    className="w-64"
    label="Due Date"
    errorMessage="Due date is required."
  />`} preview={
                  <>
          <DatePicker
                    className="w-64"
                    size={globalSize}
                    label="Due Date"
                    errorMessage="Due date is required."
                    value={errDate}
                    onValueChange={setErrDate}
                  />
                  </>
                } />

      <ShowcaseExample title="Disabled" description="Trigger bị vô hiệu hoá, người dùng không thể mở calendar." code={`<DatePicker className="w-64" label="Date" disabled />`} preview={
                  <>
          <DatePicker
                    className="w-64"
                    size={globalSize}
                    label="Date"
                    disabled
                    value={disDate}
                    onValueChange={setDisDate}
                  />
                  </>
                } />
    </div>
  );
}

export default function CalendarShowcase() {
  const { size: globalSize } = useDevContext();
  return (
    <Showcase
      title="Calendar"
      description="Thành phần chọn ngày, khoảng thời gian hoặc nhiều ngày."
      guideline={
        <ShowcaseDocs>
          <DocsP>
            Dùng để hiển thị lịch và cho phép người dùng chọn một ngày, nhiều
            ngày hoặc một khoảng thời gian. Thường được sử dụng kết hợp với
            Popover để tạo thành DatePicker.
          </DocsP>
        </ShowcaseDocs>
      }
      micro={{ content: <CalendarMicroShowcase globalSize={globalSize} /> }}
      macro={{ content: <CalendarMacroShowcase globalSize={globalSize} /> }}
    />
  );
}
