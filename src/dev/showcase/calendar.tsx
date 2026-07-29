import { useState } from "react";

import { type DateRange } from "react-day-picker";

import { DatePicker } from "../../components/macro/date-picker";
import { Calendar } from "../../components/micro/calendar";
import { useDevContext, useI18n } from "../../dev/components/dev-context";
import {
  DocsP,
  ExampleGrid,
  Showcase,
  ShowcaseDocs,
  ShowcaseExample,
} from "../../dev/components/showcase";
import { type Size } from "../../lib/types";

function CalendarMicroShowcase({ globalSize }: { globalSize: Size }) {
  const t = useI18n();
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
      <ExampleGrid>
        <ShowcaseExample
          title={t("Ngày đơn", "Single Date")}
          description={t("Chọn một ngày duy nhất.", "Select a single date.")}
          code={`const [date, setDate] = React.useState<Date | undefined>(new Date())

<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  className="rounded-xl border border-border shadow"
/>`}
          preview={
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
          }
        />

        <ShowcaseExample
          title={t("Phạm vi ngày", "Date Range")}
          description={t("Chọn một phạm vi ngày.", "Select a date range.")}
          code={`const [date, setDate] = React.useState<DateRange | undefined>({
  from: new Date(2026, 5, 15),
  to: new Date(2026, 5, 25) })

<Calendar
  mode="range"
  selected={date}
  onSelect={setDate}
  className="rounded-xl border border-border shadow"
/>`}
          preview={
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
          }
        />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample
          title={t("Nhiều ngày", "Multiple Dates")}
          description={t(
            "Chọn nhiều ngày rời rạc (mode='multiple').",
            "Select multiple discrete dates (mode='multiple').",
          )}
          code={`const [dates, setDates] = React.useState<Date[] | undefined>([])

<Calendar
  mode="multiple"
  selected={dates}
  onSelect={setDates}
  className="rounded-xl border border-border shadow"
/>`}
          preview={
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
          }
        />

        <ShowcaseExample
          title={t("Vô hiệu hóa ngày", "Disabled Dates")}
          description={t(
            "Vô hiệu hóa chọn ngày (VD: ngày trong quá khứ).",
            "Disable date selection (e.g., past dates).",
          )}
          code={`<Calendar
    mode="single"
    disabled={(date) => date < new Date()}
    className="rounded-xl border border-border shadow"
  />`}
          preview={
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
          }
        />
      </ExampleGrid>

      <ShowcaseExample
        title={t("Hai tháng", "Two Months")}
        description={t(
          "Hiển thị 2 tháng liền kề (numberOfMonths=2) thường dùng cho Date Range.",
          "Displays 2 adjacent months (numberOfMonths=2), typically used for Date Range.",
        )}
        code={`<Calendar
    mode="range"
    selected={date}
    onSelect={setDate}
    numberOfMonths={2}
    className="rounded-xl border border-border shadow"
  />`}
        preview={
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
        }
      />

      <ShowcaseExample
        title={t("Có điều hướng", "With Navigation")}
        description={t(
          "Lịch với điều hướng thả xuống cho tháng/năm.",
          "Calendar with dropdown navigation for month/year.",
        )}
        code={`<Calendar
    mode="single"
    captionLayout="dropdown"
    className="rounded-xl border border-border shadow"
  />`}
        preview={
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
        }
      />
    </div>
  );
}

function CalendarMacroShowcase({ globalSize }: { globalSize: Size }) {
  const t = useI18n();
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
        <ShowcaseExample
          title={t("Ngày đơn", "Single Date")}
          description={t(
            "DatePicker cơ bản chọn một ngày.",
            "Basic DatePicker to select a single date.",
          )}
          code={`const [date, setDate] = React.useState<Date | undefined>()

<DatePicker className="w-64"
    label="Date"
    value={date}
    onValueChange={setDate}
  />`}
          preview={
            <>
              <DatePicker
                className="w-64"
                size={globalSize}
                label="Date"
                value={singleDate}
                onValueChange={setSingleDate}
              />
            </>
          }
        />

        <ShowcaseExample
          title={t("Phạm vi ngày", "Date Range")}
          description={t(
            "DatePicker chọn khoảng thời gian (range mode).",
            "DatePicker to select a date range (range mode).",
          )}
          code={`const [range, setRange] = React.useState<DateRange | undefined>()

<DatePicker className="w-64"
    mode="range"
    label="Date Range"
    rangeValue={range}
    onRangeChange={setRange}
  />`}
          preview={
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
          }
        />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample
          title={t("Danh sách ngày đơn", "Single Dropdown")}
          description={t(
            "Sổ danh sách để chọn tháng và năm nhanh chóng thay vì click qua lại liên tục.",
            "Dropdown to quickly select month and year instead of clicking repeatedly.",
          )}
          code={`<DatePicker
    className="w-64"
    label="Birthday"
    captionLayout="dropdown"
    startMonth={new Date(1900, 0)}
    endMonth={new Date()}
  />`}
          preview={
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
          }
        />
        <ShowcaseExample
          title={t("Danh sách phạm vi", "Range Dropdown")}
          description={t(
            "Sổ danh sách cho cả 2 tháng khi chọn khoảng thời gian (cần numberOfMonths={2}).",
            "Dropdowns for both months when selecting a date range (requires numberOfMonths={2}).",
          )}
          code={`<DatePicker
    className="w-fit"
    mode="range"
    label="Date Range with Dropdowns"
    captionLayout="dropdown"
    numberOfMonths={2}
    startMonth={new Date(2020, 0)}
    endMonth={new Date(2030, 11)}
  />`}
          preview={
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
          }
        />
      </ExampleGrid>

      <ShowcaseExample
        title={t("Có nhãn & mô tả", "With Label & Description")}
        description={t(
          "Hiển thị label và mô tả bên dưới trigger.",
          "Displays a label and description below the trigger.",
        )}
        code={`<DatePicker
    className="w-64"
    label="Start Date"
    description="Select project start date."
    placeholder="Select date"
  />`}
        preview={
          <>
            <DatePicker
              className="w-64"
              size={globalSize}
              label="Start Date"
              description="Select project start date."
              placeholder="Select date"
              value={descDate}
              onValueChange={setDescDate}
            />
          </>
        }
      />

      <ShowcaseExample
        title={t("Trạng thái lỗi", "Error State")}
        description={t(
          "Trigger hiển thị viền đỏ khi có errorMessage.",
          "Trigger displays a red border when errorMessage is present.",
        )}
        code={`<DatePicker
    className="w-64"
    label="Due Date"
    errorMessage="Due date is required."
  />`}
        preview={
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
        }
      />

      <ShowcaseExample
        title={t("Vô hiệu hoá", "Disabled")}
        description={t(
          "Trigger bị vô hiệu hoá, người dùng không thể mở calendar.",
          "Trigger is disabled, user cannot open the calendar.",
        )}
        code={`<DatePicker className="w-64" label="Date" disabled />`}
        preview={
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
        }
      />
    </div>
  );
}

export default function CalendarShowcase() {
  const { size: globalSize } = useDevContext();
  const t = useI18n();
  return (
    <Showcase
      title={t("Lịch (Calendar)", "Calendar")}
      description={t(
        "Thành phần chọn ngày, khoảng thời gian hoặc nhiều ngày.",
        "A component to select a single date, multiple dates, or a date range.",
      )}
      guideline={
        <ShowcaseDocs>
          <DocsP>
            {t(
              "Dùng để hiển thị lịch và cho phép người dùng chọn một ngày, nhiều ngày hoặc một khoảng thời gian. Thường được sử dụng kết hợp với Popover để tạo thành DatePicker.",
              "Used to display a calendar and allow the user to select a single date, multiple dates, or a date range. Commonly used in combination with Popover to create a DatePicker.",
            )}
          </DocsP>
        </ShowcaseDocs>
      }
      micro={{ content: <CalendarMicroShowcase globalSize={globalSize} /> }}
      macro={{ content: <CalendarMacroShowcase globalSize={globalSize} /> }}
    />
  );
}
