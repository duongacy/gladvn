import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/index";
import { SelectPreset } from "@/preset";;
import { useState } from "react";
import { Field, FieldContent, FieldDescription, FieldLabel, NativeSelect, NativeSelectOptGroup, NativeSelectOption } from "@/index";;
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";

import { type Size } from "@/lib/types";

export default function NativeSelectShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Native Select"
        description="Uses the browser's built-in dropdown menu. Great for mobile environments."
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
          description="Native select with custom styling."
        >
          <div className="w-full max-w-sm">
            <Field size={globalSize}>
              <FieldLabel>Timezone</FieldLabel>
              <FieldContent>
                <NativeSelect size={globalSize} defaultValue="pst">
                  <NativeSelectOptGroup label="North America">
                    <option value="est">Eastern Standard Time (EST)</option>
                    <option value="cst">Central Standard Time (CST)</option>
                    <option value="pst">Pacific Standard Time (PST)</option>
                  </NativeSelectOptGroup>
                  <NativeSelectOptGroup label="Europe">
                    <option value="gmt">Greenwich Mean Time (GMT)</option>
                    <option value="cet">Central European Time (CET)</option>
                  </NativeSelectOptGroup>
                </NativeSelect>
              </FieldContent>
            </Field>
          </div>
        </ExampleSection>

        <ExampleSection
          label="Disabled"
          description="Non-interactive native select."
        >
          <div className="w-full max-w-sm">
            <Field size={globalSize}>
              <FieldLabel htmlFor="ns-disabled">Restricted Options</FieldLabel>
              <FieldContent>
                <NativeSelect
                  id="ns-disabled"
                  disabled
                  size={globalSize}
                  defaultValue="mac"
                >
                  <NativeSelectOption value="mac">macOS</NativeSelectOption>
                  <NativeSelectOption value="win">Windows</NativeSelectOption>
                </NativeSelect>
              </FieldContent>
            </Field>
          </div>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
