import { useState } from "react";

import {
  Slider as CompositionalSlider,
  SliderControl,
  SliderTrack,
  SliderIndicator,
  SliderThumb,
} from "@/components/micro/slider";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";

import { type Size } from "@/lib/types";
import { Field, FieldLabel, FieldDescription, FieldContent } from "@/components/micro/field";
import { SliderPreset } from "@/components/macro/slider-preset";
import { SelectPreset } from "@/components/macro/select-preset";

export default function SliderShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Slider"
        description="Đầu vào trong đó người dùng chọn một giá trị trong một phạm vi nhất định."
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
        <ExampleSection
          label="Standard"
          description="Lựa chọn phạm vi số cơ bản."
        >
          <div className="w-full max-w-sm">
            <Field size={globalSize}>
              <FieldLabel>Volume</FieldLabel>
              <FieldContent>
                <SliderPreset
                  size={globalSize}
                  defaultValue={[60]}
                  max={100}
                  step={1}
                />
              </FieldContent>
              <FieldDescription>
                Adjust the media volume globally.
              </FieldDescription>
            </Field>
          </div>
        </ExampleSection>

        <ExampleSection
          label="Range"
          description="Chọn một phạm vi bằng hai ngón tay cái."
        >
          <div className="w-full max-w-sm">
            <Field size={globalSize}>
              <FieldLabel>Price Range</FieldLabel>
              <FieldContent>
                <SliderPreset
                  size={globalSize}
                  defaultValue={[20, 80]}
                  max={100}
                  step={1}
                />
              </FieldContent>
              <FieldDescription>Filter items by price limits.</FieldDescription>
            </Field>
          </div>
        </ExampleSection>
      </ExampleGrid>

      <ExampleSection
        label="Compositional Usage"
        description="Xây dựng thanh trượt bằng cách sử dụng các nguyên hàm cơ bản của nó để có được khả năng kiểm soát tối ưu."
      >
        <div className="w-full max-w-sm">
          <CompositionalSlider
            size={globalSize}
            defaultValue={[40]}
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
        </div>
      </ExampleSection>

      <ExampleSection
        label="Disabled"
        description="Trạng thái thanh trượt không tương tác."
      >
        <div className="w-full max-w-sm">
          <Field size={globalSize}>
            <FieldLabel>Fixed Value</FieldLabel>
            <FieldContent>
              <SliderPreset
                disabled
                size={globalSize}
                defaultValue={[40]}
                max={100}
                step={1}
              />
            </FieldContent>
          </Field>
        </div>
      </ExampleSection>
    </div>
  );
}
