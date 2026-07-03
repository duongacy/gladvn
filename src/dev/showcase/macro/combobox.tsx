import { useState } from "react";
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
        description="A preset component that encapsulates Combobox, Field, Label, and Description."
      />

      <ExampleGrid columns={2}>
        <ExampleSection label="Standard" description="Basic combobox with label and description.">
          <div className="w-full max-w-sm">
            <ComboboxPreset
              label="Framework"
              description="Pick your favorite framework."
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

        <ExampleSection label="Error State" description="Demonstrates errorMessage and showError props.">
          <div className="w-full max-w-sm flex flex-col gap-6">
            <ComboboxPreset
              label="Framework (Invalid)"
              placeholder="Pick a framework..."
              options={[{ value: "react", label: "React" }]}
              errorMessage="You must select a framework."
            />
            
            <ComboboxPreset
              label="Framework (Hidden Error)"
              description="Error text is hidden using showError={false}"
              placeholder="Pick a framework..."
              options={[{ value: "react", label: "React" }]}
              errorMessage="Hidden error."
              showError={false}
            />
          </div>
        </ExampleSection>
        <ExampleSection label="Disabled State" description="A non-interactive combobox.">
          <div className="w-full max-w-sm">
            <ComboboxPreset
              label="Team"
              description="You do not have permission to change the team."
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

        <ExampleSection label="Multi-select" description="Selecting multiple values at once.">
          <div className="w-full max-w-sm">
            <ComboboxPreset
              label="Tags"
              description="Assign tags to this document."
              placeholder="Select tags..."
              searchPlaceholder="Search tags..."
              emptyText="No tags found."
              multiple
              options={[
                { value: "important", label: "Important" },
                { value: "draft", label: "Draft" },
                { value: "archived", label: "Archived" },
                { value: "review", label: "Needs Review" },
              ]}
            />
          </div>
        </ExampleSection>

        <ExampleSection label="Long List" description="Demonstrating scrolling with many options.">
          <div className="w-full max-w-sm">
            <ComboboxPreset
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
