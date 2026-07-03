import { useState } from "react";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";
import { MonoSelect } from "@/dev/components/mono-select";
import { NativeSelectPreset } from "@/components/macro/native-select-preset";

export default function MacroNativeSelectShowcase() {
  const [globalSize, setGlobalSize] = useState<"sm" | "md" | "lg">("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Native Select Preset (Macro)"
        description="A complete native select field with built-in label, description, and validation error messages."
      >
        <MonoSelect
          value={globalSize}
          onValueChange={(v) => setGlobalSize(v as "sm" | "md" | "lg")}
          options={[
            { value: "sm", label: "Small" },
            { value: "md", label: "Medium" },
            { value: "lg", label: "Large" },
          ]}
        />
      </SectionHeader>

      <ExampleGrid columns={1}>
        <ExampleSection label="Basic Usage" description="Standard native select field with a label.">
          <NativeSelectPreset
            label="Language"
            defaultValue=""
            size={globalSize}
            className="w-full max-w-sm"
          >
            <option value="" disabled>Select a language...</option>
            <option value="en">English</option>
            <option value="vi">Vietnamese</option>
            <option value="fr">French</option>
          </NativeSelectPreset>
        </ExampleSection>

        <ExampleSection label="With Description" description="Providing extra context below the select field.">
          <NativeSelectPreset
            label="Theme"
            description="Choose how the interface looks to you."
            defaultValue="system"
            size={globalSize}
            className="w-full max-w-sm"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="system">System</option>
          </NativeSelectPreset>
        </ExampleSection>

        <ExampleSection label="Validation Error" description="Displaying an error message when selection is invalid.">
          <NativeSelectPreset
            label="Country"
            defaultValue=""
            errorMessage="Please select a valid country."
            size={globalSize}
            className="w-full max-w-sm"
          >
            <option value="" disabled>Select a country...</option>
            <option value="us">United States</option>
            <option value="uk">United Kingdom</option>
          </NativeSelectPreset>
        </ExampleSection>

        <ExampleSection label="Disabled State" description="A non-interactive select field.">
          <NativeSelectPreset
            label="Plan"
            description="You cannot change your plan at this time."
            defaultValue="basic"
            disabled
            size={globalSize}
            className="w-full max-w-sm"
          >
            <option value="basic">Basic Plan</option>
            <option value="pro">Pro Plan</option>
          </NativeSelectPreset>
        </ExampleSection>

        <ExampleSection label="Grouped Options" description="Using optgroup inside the native select.">
          <NativeSelectPreset
            label="Timezone"
            defaultValue=""
            size={globalSize}
            className="w-full max-w-sm"
          >
            <option value="" disabled>Select timezone...</option>
            <optgroup label="North America">
              <option value="est">Eastern Time</option>
              <option value="pst">Pacific Time</option>
            </optgroup>
            <optgroup label="Europe">
              <option value="gmt">Greenwich Mean Time</option>
              <option value="cet">Central European Time</option>
            </optgroup>
          </NativeSelectPreset>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
