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
  DocsP,
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
    <FieldError>You only have $100 left in your budget.</FieldError>
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
                <FieldError>You only have $100 left in your budget.</FieldError>
              </Field>
            </>
          }
        />
      </ExampleGrid>
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
