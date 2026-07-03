import { useState } from "react";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";
import { type Size } from "@/lib/types";
import { RadioGroupPreset } from "@/components/macro/radio-group-preset";

export default function MacroRadioGroupShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Radio Group (Macro)"
        description="A preset component that encapsulates RadioGroup, Field, Label, and Description."
      />

      <ExampleGrid columns={2}>
        <ExampleSection label="Standard" description="Basic radio group with label and description.">
          <div className="w-full max-w-sm">
            <RadioGroupPreset
              label="Notification Preference"
              description="How would you like to be notified?"
              options={[
                { value: "email", label: "Email" },
                { value: "sms", label: "SMS" },
                { value: "push", label: "Push Notification" },
              ]}
            />
          </div>
        </ExampleSection>

        <ExampleSection label="Error State" description="Demonstrates errorMessage and showError props.">
          <div className="w-full max-w-sm flex flex-col gap-6">
            <RadioGroupPreset
              label="Preference (Invalid)"
              options={[{ value: "email", label: "Email" }, { value: "sms", label: "SMS" }]}
              errorMessage="You must select a preference."
            />
            
            <RadioGroupPreset
              label="Preference (Hidden Error)"
              description="Error text is hidden using showError={false}"
              options={[{ value: "email", label: "Email" }]}
              errorMessage="Hidden error."
              showError={false}
            />
          </div>
        </ExampleSection>
        <ExampleSection label="Disabled State" description="A non-interactive radio group.">
          <div className="w-full max-w-sm flex flex-col gap-6">
            <RadioGroupPreset
              label="Subscription Plan"
              description="You cannot change your plan right now."
              options={[
                { value: "free", label: "Free Plan" },
                { value: "pro", label: "Pro Plan" },
              ]}
              defaultValue="free"
              disabled
            />
          </div>
        </ExampleSection>

        <ExampleSection label="Rich Descriptions" description="Options with long descriptions to test wrapping and alignment.">
          <div className="w-full max-w-sm">
            <RadioGroupPreset
              label="Theme"
              options={[
                { value: "light", label: "Light Theme" },
                { value: "dark", label: "Dark Theme" },
                { value: "system", label: "System Default" },
              ]}
              description="Choose how you want the interface to look. If you select System Default, the theme will automatically adapt to your operating system's settings when possible."
              defaultValue="system"
            />
          </div>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
