import { useState } from "react";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";
import { type Size } from "@/lib/types";
import { CheckboxPreset } from "@/components/macro/checkbox-preset";

export default function MacroCheckboxShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Checkbox (Macro)"
        description="A preset component that encapsulates Checkbox, Field, Label, and Description."
      />

      <ExampleGrid columns={2}>
        <ExampleSection label="Standard" description="Basic checkbox with label and description.">
          <div className="w-full max-w-sm">
            <CheckboxPreset
              size={globalSize}
              label="Accept terms"
              description="You must accept the terms and conditions."
            />
          </div>
        </ExampleSection>

        <ExampleSection label="Error State" description="Demonstrates errorMessage and showError props.">
          <div className="w-full max-w-sm flex flex-col gap-6">
            <CheckboxPreset
              size={globalSize}
              label="Accept terms (Invalid)"
              errorMessage="You must check this box."
            />
            
            <CheckboxPreset
              size={globalSize}
              label="Accept terms (Hidden Error)"
              description="Error text is hidden using showError={false}"
              errorMessage="Hidden error."
              showError={false}
            />
          </div>
        </ExampleSection>
        
        <ExampleSection label="Disabled State" description="A non-interactive checkbox field.">
          <div className="w-full max-w-sm flex flex-col gap-6">
            <CheckboxPreset
              size={globalSize}
              label="Sign up for newsletter"
              description="This option is currently unavailable."
              disabled
            />
            <CheckboxPreset
              size={globalSize}
              label="Enable experimental features"
              description="You cannot change this setting."
              defaultChecked
              disabled
            />
          </div>
        </ExampleSection>

        <ExampleSection label="Real-world Content" description="Demonstrating how CheckboxPreset handles complex React Node labels and long descriptions.">
          <div className="w-full max-w-sm">
            <CheckboxPreset
              size={globalSize}
              label={
                <span className="flex items-center gap-2">
                  Share usage data <span className="rounded bg-primary/20 px-1.5 py-0.5 text-[10px] font-semibold text-primary">BETA</span>
                </span>
              }
              description="Help us improve our service by automatically sending diagnostic data and crash reports every time the application encounters an unexpected error. You can revoke this permission at any time in your account settings."
            />
          </div>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
