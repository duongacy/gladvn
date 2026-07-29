import { useState } from "react";

import { SliderPreset } from "../../components/macro/slider-preset";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "../../components/micro/field";
import {
  Slider as CompositionalSlider,
  SliderControl,
  SliderIndicator,
  SliderThumb,
  SliderTrack,
} from "../../components/micro/slider";
import { useI18n } from "../../dev/components/dev-context";
import { useDevContext } from "../../dev/components/dev-context";
import {
  DocsCode,
  ExampleGrid,
  Showcase,
  ShowcaseExample,
} from "../../dev/components/showcase";
import { type Size } from "../../lib/types";

function SliderMacroShowcase({ globalSize }: { globalSize: Size }) {
  const t = useI18n();
  const [val, setVal] = useState([50]);
  const [rangeVal, setRangeVal] = useState([20, 80]);

  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample
          title={t("Tiêu chuẩn", "Standard")}
          description={t(
            "Thanh trượt cơ bản có nhãn và mô tả.",
            "Basic slider with label and description.",
          )}
          code={`<SliderPreset
    className="w-full"
    label="Volume"
    description="Adjust system volume."
    defaultValue={[50]}
    max={100}
    step={1}
  />`}
          preview={
            <>
              <SliderPreset
                className="w-full"
                size={globalSize}
                label="Volume"
                description="Adjust system volume."
                defaultValue={[50]}
                max={100}
                step={1}
              />
            </>
          }
        />

        <ShowcaseExample
          title={t("Trạng thái Lỗi (Error)", "Error State")}
          description={t(
            "Báo lỗi khi giá trị không hợp lệ.",
            "Shows error when value is invalid.",
          )}
          code={`<div className="w-full flex flex-col gap-6">
    <SliderPreset
      label="Volume Level (Error)"
      defaultValue={[110]}
      max={100}
      step={1}
      errorMessage="Volume level cannot exceed 100."
    />
  </div>`}
          preview={
            <>
              <div className="w-full flex flex-col gap-6">
                <SliderPreset
                  size={globalSize}
                  label="Volume Level (Error)"
                  defaultValue={[110]}
                  max={100}
                  step={1}
                  errorMessage="Volume level cannot exceed 100."
                />
              </div>
            </>
          }
        />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample
          title={t("Thanh trượt Khoảng (Range Slider)", "Range Slider")}
          description={t(
            "Truyền mảng 2 giá trị vào defaultValue hoặc value để tạo Range Slider.",
            "Pass an array of 2 values to defaultValue or value to create a Range Slider.",
          )}
          code={`const [rangeVal, setRangeVal] = useState([20, 80]); return
  (
  <SliderPreset
    label="Price Range"
    value={rangeVal}
    onValueChange={setRangeVal}
    max={100}
    step={5}
    description={\`Từ $\${rangeVal[0]} đến $\${rangeVal[1]}\`}
  />
  );`}
          preview={
            <>
              <SliderPreset
                className="w-full"
                size={globalSize}
                label="Price Range"
                description={`Show products from ${rangeVal[0]} to ${rangeVal[1]}`}
                value={rangeVal}
                onValueChange={(v) => setRangeVal(v as number[])}
                max={100}
                step={5}
              />
            </>
          }
        />

        <ShowcaseExample
          title={t("Khóa / Bất hoạt (Disabled)", "Disabled")}
          description={t(
            "Người dùng không thể tương tác với thanh trượt.",
            "Users cannot interact with the slider.",
          )}
          code={`<SliderPreset
    className="w-full"
    label="Screen Brightness"
    description="Brightness is being controlled automatically by the system (Auto-brightness)."
    defaultValue={[75]}
    max={100}
    disabled
  />`}
          preview={
            <>
              <SliderPreset
                className="w-full"
                size={globalSize}
                label="Screen Brightness"
                description="Brightness is being controlled automatically by the system (Auto-brightness)."
                defaultValue={[75]}
                max={100}
                disabled
              />
            </>
          }
        />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample
          title="Controlled Mode"
          description={t(
            "Sử dụng biến state của React để điều khiển.",
            "Use React state variable to control.",
          )}
          code={`const [val, setVal] = useState([50]); return (
  <SliderPreset
    value={val}
    onValueChange={setVal}
    label="Controlled Value"
    description={\`Giá trị hiện tại là: \${val[0]}\`}
  />
  );`}
          preview={
            <>
              <div className="w-full max-w-sm flex flex-col gap-4">
                <SliderPreset
                  size={globalSize}
                  value={val}
                  onValueChange={(v) => setVal(v as number[])}
                  label="Controlled Value"
                  description={`Current value is: ${val[0]}`}
                />
              </div>
            </>
          }
        />
      </ExampleGrid>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 2: Micro Content
// ──────────────────────────────────────────────────────────
function SliderMicroShowcase({ globalSize }: { globalSize: Size }) {
  const t = useI18n();
  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample
          title={t("Cơ bản (Primitive)", "Primitive")}
          description={t(
            "Slider đơn giản không có Field hay Label bọc ngoài.",
            "Simple slider without Field or Label wrapper.",
          )}
          code={`<CompositionalSlider
    defaultValue={[40]}
    max={100}
    step={1}
    className="w-full"
  >
    <SliderControl>
      <SliderTrack>
        <SliderIndicator />
      </SliderTrack>
      <SliderThumb />
    </SliderControl>
  </CompositionalSlider>`}
          preview={
            <>
              <CompositionalSlider
                size={globalSize}
                defaultValue={[40]}
                max={100}
                step={1}
                className="w-full"
              >
                <SliderControl>
                  <SliderTrack>
                    <SliderIndicator />
                  </SliderTrack>
                  <SliderThumb />
                </SliderControl>
              </CompositionalSlider>
            </>
          }
        />

        <ShowcaseExample
          title={t("Nhiều Thumb (Multi-thumb)", "Multi-thumb")}
          description={t(
            "Chỉ cần render nhiều SliderThumb, hệ thống sẽ tự chia.",
            "Just render multiple SliderThumbs, the system will divide automatically.",
          )}
          code={`<CompositionalSlider
    defaultValue={[20, 50, 80]}
    max={100}
    step={1}
    className="w-full"
  >
    <SliderControl>
      <SliderTrack>
        <SliderIndicator />
      </SliderTrack>
      <SliderThumb />
      <SliderThumb />
      <SliderThumb />
    </SliderControl>
  </CompositionalSlider>`}
          preview={
            <>
              <CompositionalSlider
                size={globalSize}
                defaultValue={[20, 50, 80]}
                max={100}
                step={1}
                className="w-full"
              >
                <SliderControl>
                  <SliderTrack>
                    <SliderIndicator />
                  </SliderTrack>
                  <SliderThumb />
                  <SliderThumb />
                  <SliderThumb />
                </SliderControl>
              </CompositionalSlider>
            </>
          }
        />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample
          title={t("Ghép nối Field thủ công", "Manual Field Composition")}
          description={t(
            "Lắp ráp với Field để có nhãn và mô tả.",
            "Assemble with Field to get label and description.",
          )}
          code={`<Field className="w-full">
    <FieldLabel>Display Density</FieldLabel>
    <FieldContent>
      <CompositionalSlider
        defaultValue={[50]}
        max={100}
        step={1}
      >
        <SliderControl>
          <SliderTrack>
            <SliderIndicator />
          </SliderTrack>
          <SliderThumb />
        </SliderControl>
      </CompositionalSlider>
    </FieldContent>
    <FieldDescription>Adjust spacing between elements.</FieldDescription>
  </Field>`}
          preview={
            <>
              <Field size={globalSize} className="w-full">
                <FieldLabel>Display Density</FieldLabel>
                <FieldContent>
                  <CompositionalSlider
                    size={globalSize}
                    defaultValue={[50]}
                    max={100}
                    step={1}
                  >
                    <SliderControl>
                      <SliderTrack>
                        <SliderIndicator />
                      </SliderTrack>
                      <SliderThumb />
                    </SliderControl>
                  </CompositionalSlider>
                </FieldContent>
                <FieldDescription>
                  Adjust spacing between elements.
                </FieldDescription>
              </Field>
            </>
          }
        />

        <ShowcaseExample
          title={t("Trạng thái Lỗi thủ công", "Manual Error State")}
          description={t(
            "Tự gắn aria-invalid vào Slider và dùng FieldError.",
            "Manually attach aria-invalid to Slider and use FieldError.",
          )}
          code={`<Field className="w-full gap-2" data-invalid={true}>
    <FieldLabel>Maximum Budget</FieldLabel>
    <FieldContent>
      <CompositionalSlider
        defaultValue={[120]}
        max={100}
        step={1}
        aria-invalid={true}
      >
        <SliderControl>
          <SliderTrack>
            <SliderIndicator />
          </SliderTrack>
          <SliderThumb />
        </SliderControl>
      </CompositionalSlider>
    </FieldContent>
    <FieldError>Ngân sách của bạn chỉ còn $100.</FieldError>
  </Field>`}
          preview={
            <>
              <Field
                size={globalSize}
                className="w-full gap-2"
                data-invalid={true}
              >
                <FieldLabel>Maximum Budget</FieldLabel>
                <FieldContent>
                  <CompositionalSlider
                    size={globalSize}
                    defaultValue={[120]}
                    max={100}
                    step={1}
                    aria-invalid={true}
                  >
                    <SliderControl>
                      <SliderTrack>
                        <SliderIndicator />
                      </SliderTrack>
                      <SliderThumb />
                    </SliderControl>
                  </CompositionalSlider>
                </FieldContent>
                <FieldError>Ngân sách của bạn chỉ còn $100.</FieldError>
              </Field>
            </>
          }
        />
      </ExampleGrid>

      <ShowcaseExample
        title={t("🧭 So sánh Use Case", "🧭 Use Case Comparison")}
        description={t(
          "So sánh nhanh khi nào dùng Micro và Macro.",
          "Quick comparison of when to use Micro vs Macro.",
        )}
        code={`<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
    
    <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 shrink-0 rounded-full bg-green-500/10 p-1.5 text-green-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Story 1 · Use Macro
          </p>
          <h3 className="mt-0.5 text-sm font-semibold text-foreground">
            Product Filter
          </h3>
        </div>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed">
        Bạn cần làm bộ lọc "Khoảng giá" ở cột Sidebar cho
        trang Ecommerce. <DocsCode>SliderPreset</DocsCode>{" "}
        sẽ giúp bạn tiết kiệm hàng tá dòng code bọc Field
        loằng ngoằng.
      </p>
    </div>

    
    <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 shrink-0 rounded-full bg-blue-500/10 p-1.5 text-blue-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
          </svg>
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Story 2 · Use Micro
          </p>
          <h3 className="mt-0.5 text-sm font-semibold text-foreground">
            Video Timeline (Video Player)
          </h3>
        </div>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed">
        You are building a Video player like YouTube. The bottom Timeline bar has no Label or Description. Here you MUST use Micro to build it independently.
      </p>
    </div>
  </div>`}
        preview={
          <>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Story 1: Macro wins */}
              <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 rounded-full bg-green-500/10 p-1.5 text-green-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Story 1 · Use Macro
                    </p>
                    <h3 className="mt-0.5 text-sm font-semibold text-foreground">
                      Product Filter
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Bạn cần làm bộ lọc "Khoảng giá" ở cột Sidebar cho trang
                  Ecommerce. <DocsCode>SliderPreset</DocsCode> sẽ giúp bạn tiết
                  kiệm hàng tá dòng code bọc Field loằng ngoằng.
                </p>
              </div>

              {/* Story 2: Micro wins */}
              <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 rounded-full bg-blue-500/10 p-1.5 text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Story 2 · Use Micro
                    </p>
                    <h3 className="mt-0.5 text-sm font-semibold text-foreground">
                      Video Timeline (Video Player)
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Bạn đang làm một trình phát Video giống Youtube. Thanh
                  Timeline chạy dưới đáy không hề có Label hay Description. Ở
                  đây bạn BẮT BUỘC dùng Micro để dựng độc lập.
                </p>
              </div>
            </div>
          </>
        }
      />
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 3: Entry point
// ──────────────────────────────────────────────────────────
export default function SliderShowcase() {
  const t = useI18n();
  const { size: globalSize } = useDevContext();
  return (
    <Showcase
      title="Slider"
      description={t(
        "Thành phần điều khiển cho phép người dùng chọn một hoặc nhiều giá trị trong một phạm vi (range) nhất định.",
        "A control component that allows users to select one or more values within a certain range.",
      )}

      micro={{ content: <SliderMicroShowcase globalSize={globalSize} /> }}
      macro={{ content: <SliderMacroShowcase globalSize={globalSize} /> }}
    />
  );
}
