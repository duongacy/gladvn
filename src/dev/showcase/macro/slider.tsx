import { useState } from "react";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";
import { type Size } from "@/lib/types";
import { SliderPreset } from "@/components/macro/slider-preset";

export default function MacroSliderShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Slider (Macro)"
        description="A preset component that encapsulates Slider, Field, Label, and Description."
      />

      <ExampleGrid columns={2}>
        <ExampleSection label="Standard" description="Basic slider with label and description.">
          <div className="w-full max-w-sm">
            <SliderPreset
              size={globalSize}
              label="Volume"
              description="Adjust the system volume."
              defaultValue={[50]}
              max={100}
              step={1}
            />
          </div>
        </ExampleSection>

        <ExampleSection label="Error State" description="Demonstrates errorMessage and showError props.">
          <div className="w-full max-w-sm flex flex-col gap-6">
            <SliderPreset
              size={globalSize}
              label="Volume (Invalid)"
              defaultValue={[110]}
              max={100}
              step={1}
              errorMessage="Volume cannot exceed 100."
            />
            
            <SliderPreset
              size={globalSize}
              label="Volume (Hidden Error)"
              description="Error text is hidden using showError={false}"
              defaultValue={[110]}
              max={100}
              errorMessage="Hidden error."
              showError={false}
            />
          </div>
        </ExampleSection>
        <ExampleSection label="Disabled State" description="A non-interactive slider.">
          <div className="w-full max-w-sm">
            <SliderPreset
              size={globalSize}
              label="Brightness"
              description="Brightness is controlled automatically by the system."
              defaultValue={[75]}
              max={100}
              disabled
            />
          </div>
        </ExampleSection>

        <ExampleSection label="Range Slider" description="Using multiple values to create a range.">
          <div className="w-full max-w-sm">
            <SliderPreset
              size={globalSize}
              label="Price Range"
              description="Select the minimum and maximum price."
              defaultValue={[25, 75]}
              max={100}
              step={5}
            />
          </div>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
