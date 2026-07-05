import { useState } from "react";
import { MonoSelect } from "@/dev/components/mono-select";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";
import { type Size } from "@/lib/types";
import { ComboboxPreset } from "@/components/macro/combobox-preset";

export default function MacroComboboxShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Combobox (Macro)"
        description="Một thành phần cài sẵn bao gồm Combobox, Field, Label và Description."
      >
        <MonoSelect
          value={globalSize}
          onValueChange={(v) => setGlobalSize(v as Size)}
          options={[
            { value: "sm", label: "Size: sm" },
            { value: "md", label: "Size: md" },
            { value: "lg", label: "Size: lg" },
          ]}
        />
      </SectionHeader>

      <ExampleGrid columns={2}>
        <ExampleSection label="Standard" description="Combobox cơ bản có nhãn và mô tả.">
          <div className="w-full max-w-sm">
            <ComboboxPreset
              size={globalSize}
              label="Framework"
              description="Chọn khuôn khổ yêu thích của bạn."
              placeholder="Pick a framework..."
              searchPlaceholder="Search framework..."
              emptyText="No framework found."
              options={[
                { value: "react", label: "React" },
                { value: "vue", label: "Vue" },
                { value: "angular", label: "Angular" },
                { value: "svelte", label: "Svelte" },
              ]}
            />
          </div>
        </ExampleSection>

        <ExampleSection label="Error State" description="Thể hiện các đạo cụ errorMessage và showError.">
          <div className="w-full max-w-sm flex flex-col gap-6">
            <ComboboxPreset
              size={globalSize}
              label="Framework (Invalid)"
              placeholder="Pick a framework..."
              options={[{ value: "react", label: "React" }]}
              errorMessage="You must select a framework."
            />

            <ComboboxPreset
              size={globalSize}
              label="Framework (Hidden Error)"
              description="Văn bản lỗi bị ẩn bằng showError={false}"
              placeholder="Pick a framework..."
              options={[{ value: "react", label: "React" }]}
              errorMessage="Hidden error."
              showError={false}
            />
          </div>
        </ExampleSection>
        <ExampleSection label="Disabled State" description="Một combobox không tương tác.">
          <div className="w-full max-w-sm">
            <ComboboxPreset
              size={globalSize}
              label="Team"
              description="Bạn không có quyền thay đổi đội."
              placeholder="Select team..."
              searchPlaceholder="Search team..."
              emptyText="No team found."
              options={[
                { value: "engineering", label: "Engineering" },
                { value: "design", label: "Design" },
              ]}
              value="engineering"
              disabled
            />
          </div>
        </ExampleSection>

        <ExampleSection label="Long List" description="Thể hiện thao tác cuộn với nhiều tùy chọn.">
          <div className="w-full max-w-sm">
            <ComboboxPreset
              size={globalSize}
              label="Timezone"
              placeholder="Select timezone..."
              searchPlaceholder="Search timezone..."
              emptyText="No timezone found."
              options={Array.from({ length: 50 }).map((_, i) => ({
                value: `utc${i - 12}`,
                label: `UTC ${i - 12 > 0 ? '+' : ''}${i - 12}:00`,
              }))}
            />
          </div>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
