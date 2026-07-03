import { useState } from "react";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";
import { type Size } from "@/lib/types";
import { SelectPreset } from "@/components/macro/select-preset";

export default function MacroSelectShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Select (Macro)"
        description="A preset component that encapsulates Select, Field, Label, and Description."
      >
      </SectionHeader>

      <ExampleGrid columns={2}>
        <ExampleSection label="Standard" description="Basic dropdown select with label and description.">
          <div className="w-full max-w-sm">
            <SelectPreset
              size={globalSize}
              label="Fruit"
              description="Pick your favorite fruit."
              placeholder="Pick a fruit..."
              options={[
                { value: "apple", label: "Apple" },
                { value: "banana", label: "Banana" },
                { value: "cherry", label: "Cherry" },
              ]}
            />
          </div>
        </ExampleSection>

        <ExampleSection label="Error State" description="Demonstrates errorMessage and showError props.">
          <div className="w-full max-w-sm flex flex-col gap-6">
            <SelectPreset
              size={globalSize}
              label="Framework (Invalid)"
              placeholder="Pick a framework..."
              options={[{ value: "react", label: "React" }]}
              errorMessage="You must select a framework."
            />
            
            <SelectPreset
              size={globalSize}
              label="Framework (Hidden Error)"
              description="Error text is hidden using showError={false}"
              placeholder="Pick a framework..."
              options={[{ value: "react", label: "React" }]}
              errorMessage="Hidden error."
              showError={false}
            />
          </div>
        </ExampleSection>
        <ExampleSection label="Disabled State" description="A non-interactive select component.">
          <div className="w-full max-w-sm">
            <SelectPreset
              size={globalSize}
              label="Account Tier"
              description="You cannot downgrade your account at this time."
              placeholder="Select tier..."
              value="pro"
              options={[
                { value: "basic", label: "Basic" },
                { value: "pro", label: "Pro" },
              ]}
              disabled
            />
          </div>
        </ExampleSection>

        <ExampleSection label="Real-world Form Snippet" description="Integrating custom labels and detailed descriptions.">
          <div className="w-full max-w-sm">
            <SelectPreset
              size={globalSize}
              label={
                <span className="flex items-center gap-2">
                  Country of Residence <span className="text-destructive">*</span>
                </span>
              }
              description="This information is used for tax calculation purposes. Please ensure it matches your billing address."
              placeholder="Select your country..."
              options={[
                { value: "us", label: "United States" },
                { value: "ca", label: "Canada" },
                { value: "uk", label: "United Kingdom" },
                { value: "au", label: "Australia" },
              ]}
            />
          </div>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
