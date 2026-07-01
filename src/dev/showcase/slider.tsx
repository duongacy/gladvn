import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/index";
import { useState } from "react";
import {
  
  Field,
  FieldLabel,
  FieldDescription,
  FieldContent,
  SliderPreset,
} from "@/index";

import {
  Slider as CompositionalSlider,
  SliderControl,
  SliderTrack,
  SliderIndicator,
  SliderThumb,
} from "@/components/ui/slider";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";

import { type Size } from "@/lib/types";

export default function SliderShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Slider"
        description="An input where the user selects a value from within a given range."
      >
        <Select value={globalSize} onValueChange={(v) => setGlobalSize(v as Size)}>
          <SelectTrigger className="w-[120px] h-8 text-xs bg-background">
            <SelectValue placeholder="Size" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sm">Size: sm</SelectItem>
            <SelectItem value="md">Size: md</SelectItem>
            <SelectItem value="lg">Size: lg</SelectItem>
          </SelectContent>
        </Select>
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
          description="Select a range with two thumbs."
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
        description="Building a slider using its base primitives for ultimate control."
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
        description="Non-interactive slider state."
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
