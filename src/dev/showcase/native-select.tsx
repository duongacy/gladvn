import { useState } from "react";
import { NativeSelect, NativeSelectOption, MonoSelect, Field, FieldLabel, FieldDescription, FieldContent } from "../../index";
import { SectionHeader, ExampleSection, ExampleGrid } from "../components/showcase";

export default function NativeSelectShowcase() {
  const [globalSize, setGlobalSize] = useState<"sm" | "md" | "lg">("md");

  return (
    <div className="space-y-10">
      <SectionHeader title="Native Select" description="Uses the browser's built-in dropdown menu. Great for mobile environments.">
        <MonoSelect
          value={globalSize}
          onValueChange={(v) => setGlobalSize(v as any)}
          options={[
            { value: "sm", label: "Size: sm" },
            { value: "md", label: "Size: md" },
            { value: "lg", label: "Size: lg" },
          ]}
        />
      </SectionHeader>

      <ExampleGrid columns={2}>
        <ExampleSection label="Standard" description="Native select with custom styling.">
          <div className="w-full max-w-sm">
            <Field size={globalSize}>
              <FieldLabel htmlFor="ns-os">Operating System</FieldLabel>
              <FieldContent>
                <NativeSelect id="ns-os" size={globalSize} defaultValue="mac">
                  <NativeSelectOption value="mac">macOS</NativeSelectOption>
                  <NativeSelectOption value="win">Windows</NativeSelectOption>
                  <NativeSelectOption value="linux">Linux</NativeSelectOption>
                </NativeSelect>
              </FieldContent>
              <FieldDescription>Native selects offer optimal accessibility on mobile devices.</FieldDescription>
            </Field>
          </div>
        </ExampleSection>

        <ExampleSection label="Disabled" description="Non-interactive native select.">
          <div className="w-full max-w-sm">
            <Field size={globalSize}>
              <FieldLabel htmlFor="ns-disabled">Restricted Options</FieldLabel>
              <FieldContent>
                <NativeSelect id="ns-disabled" disabled size={globalSize} defaultValue="mac">
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
