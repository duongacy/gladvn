import React, { useState } from "react";

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
import { useDevContext, useI18n } from "../components/dev-context";
import {
  ConfigurableShowcase,
  ShowcaseDocs,
  DocsP,
} from "../components/showcase";
import { type Size } from "../../lib/types";

function useSliderExamples() {
  const t = useI18n();
  const { size: globalSize } = useDevContext();
  const [val, setVal] = useState([50]);
  const [rangeVal, setRangeVal] = useState([20, 80]);

  return React.useMemo(
    () => [
      {
        title: t("Tiêu chuẩn", "Standard"),
        description: t(
          "Thanh trượt cơ bản có nhãn và mô tả.",
          "Basic slider with label and description."
        ),
        macroCode: `<SliderPreset
  className="w-full"
  label="Volume"
  description="Adjust system volume."
  defaultValue={[50]}
  max={100}
  step={1}
/>`,
        macroPreview: (
          <SliderPreset
            className="w-full"
            size={globalSize}
            label="Volume"
            description="Adjust system volume."
            defaultValue={[50]}
            max={100}
            step={1}
          />
        ),
        microCode: `<CompositionalSlider
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
</CompositionalSlider>`,
        microPreview: (
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
        ),
      },
      {
        title: t("Trạng thái Lỗi", "Error State"),
        description: t(
          "Báo lỗi khi giá trị không hợp lệ.",
          "Shows error when value is invalid."
        ),
        macroCode: `<div className="w-full flex flex-col gap-6">
  <SliderPreset
    label="Volume Level (Error)"
    defaultValue={[110]}
    max={100}
    step={1}
    errorMessage="Volume level cannot exceed 100."
  />
</div>`,
        macroPreview: (
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
        ),
        microCode: `<Field className="w-full gap-2" data-invalid={true}>
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
</Field>`,
        microPreview: (
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
        ),
      },
      {
        title: t("Thanh trượt Khoảng", "Range Slider"),
        description: t(
          "Truyền mảng 2 giá trị vào defaultValue hoặc value để tạo Range Slider.",
          "Pass an array of 2 values to defaultValue or value to create a Range Slider."
        ),
        macroCode: `const [rangeVal, setRangeVal] = useState([20, 80]); return (
  <SliderPreset
    label="Price Range"
    value={rangeVal}
    onValueChange={setRangeVal}
    max={100}
    step={5}
    description={\`Từ $\${rangeVal[0]} đến $\${rangeVal[1]}\`}
  />
);`,
        macroPreview: (
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
        ),
      },
      {
        title: t("Khóa / Bất hoạt", "Disabled"),
        description: t(
          "Người dùng không thể tương tác với thanh trượt.",
          "Users cannot interact with the slider."
        ),
        macroCode: `<SliderPreset
  className="w-full"
  label="Screen Brightness"
  description="Brightness is being controlled automatically by the system (Auto-brightness)."
  defaultValue={[75]}
  max={100}
  disabled
/>`,
        macroPreview: (
          <SliderPreset
            className="w-full"
            size={globalSize}
            label="Screen Brightness"
            description="Brightness is being controlled automatically by the system (Auto-brightness)."
            defaultValue={[75]}
            max={100}
            disabled
          />
        ),
      },
      {
        title: "Controlled Mode",
        description: t(
          "Sử dụng biến state của React để điều khiển.",
          "Use React state variable to control."
        ),
        macroCode: `const [val, setVal] = useState([50]); return (
  <SliderPreset
    value={val}
    onValueChange={setVal}
    label="Controlled Value"
    description={\`Giá trị hiện tại là: \${val[0]}\`}
  />
);`,
        macroPreview: (
          <div className="w-full max-w-sm flex flex-col gap-4">
            <SliderPreset
              size={globalSize}
              value={val}
              onValueChange={(v) => setVal(v as number[])}
              label="Controlled Value"
              description={`Current value is: ${val[0]}`}
            />
          </div>
        ),
      },
      {
        title: t("Nhiều Thumb", "Multi-thumb"),
        description: t(
          "Chỉ cần render nhiều SliderThumb, hệ thống sẽ tự chia.",
          "Just render multiple SliderThumbs, the system will divide automatically."
        ),
        microCode: `<CompositionalSlider
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
</CompositionalSlider>`,
        microPreview: (
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
        ),
      },
      {
        title: t("Ghép nối Field thủ công", "Manual Field Composition"),
        description: t(
          "Lắp ráp với Field để có nhãn và mô tả.",
          "Assemble with Field to get label and description."
        ),
        microCode: `<Field className="w-full">
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
</Field>`,
        microPreview: (
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
        ),
      },
    ],
    [t, globalSize, val, rangeVal]
  );
}

export default function SliderShowcase() {
  const t = useI18n();
  const examples = useSliderExamples();

  return (
    <ConfigurableShowcase
      title="Slider"
      description={t(
        "Thành phần điều khiển cho phép người dùng chọn một hoặc nhiều giá trị trong một phạm vi (range) nhất định.",
        "A control component that allows users to select one or more values within a certain range."
      )}
      guideline={
        <ShowcaseDocs>
          <DocsP>
            {t(
              "Thanh trượt thường được dùng để điều chỉnh các thông số liên tục như âm lượng, độ sáng, hoặc chọn một khoảng giá trị (range).",
              "Sliders are typically used to adjust continuous parameters such as volume, brightness, or selecting a value range."
            )}
          </DocsP>
        </ShowcaseDocs>
      }
      examples={examples}
    />
  );
}
