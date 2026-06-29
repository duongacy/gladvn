import { useState } from "react";
import {
  MonoSelect,
  Field,
  FieldLabel,
  FieldDescription,
  FieldContent,
} from "../../index";
import { Slider } from "../../components/monolithic/slider";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "../components/showcase";

export default function SliderShowcase() {
  const [globalSize, setGlobalSize] = useState<"sm" | "md" | "lg">("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Slider"
        description="An input where the user selects a value from within a given range."
      >
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
        <ExampleSection
          label="Standard"
          description="Basic numeric range selection."
        >
          <div className="w-full max-w-sm">
            <Field size={globalSize}>
              <FieldLabel>Volume</FieldLabel>
              <FieldContent>
                <Slider
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
          description="Select a range with two thumbs."
        >
          <div className="w-full max-w-sm">
            <Field size={globalSize}>
              <FieldLabel>Price Range</FieldLabel>
              <FieldContent>
                <Slider
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
        label="Disabled"
        description="Non-interactive slider state."
      >
        <div className="w-full max-w-sm">
          <Field size={globalSize}>
            <FieldLabel>Fixed Value</FieldLabel>
            <FieldContent>
              <Slider
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
