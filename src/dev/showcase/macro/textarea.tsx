import { useState } from "react";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";
import { MonoSelect } from "@/dev/components/mono-select";
import { TextareaPreset } from "@/components/macro/textarea-preset";

export default function MacroTextareaShowcase() {
  const [globalSize, setGlobalSize] = useState<"sm" | "md" | "lg">("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Textarea Preset (Macro)"
        description="A complete textarea field with built-in label, description, and validation error messages."
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
        <ExampleSection label="Basic Usage" description="Standard textarea field with a label.">
          <TextareaPreset
            label="Biography"
            placeholder="Tell us about yourself..."
            size={globalSize}
            className="w-full max-w-sm"
          />
        </ExampleSection>

        <ExampleSection label="With Description" description="Providing extra context below the textarea.">
          <TextareaPreset
            label="Feedback"
            description="We appreciate your thoughts on how to improve our service."
            placeholder="Type your feedback here..."
            size={globalSize}
            className="w-full max-w-sm"
          />
        </ExampleSection>

        <ExampleSection label="Validation Error" description="Displaying an error message when input is invalid.">
          <TextareaPreset
            label="Complaint"
            placeholder="Describe your issue"
            errorMessage="Please provide more details."
            size={globalSize}
            className="w-full max-w-sm"
          />
        </ExampleSection>

        <ExampleSection label="Disabled State" description="A non-interactive textarea field.">
          <TextareaPreset
            label="Archived Notes"
            description="These notes are read-only."
            defaultValue="This project was completed in 2023."
            disabled
            size={globalSize}
            className="w-full max-w-sm"
          />
        </ExampleSection>

        <ExampleSection label="Real-world Content" description="Demonstrating layout in a broader form context.">
          <div className="w-full max-w-sm rounded-lg border p-4 shadow-sm">
            <h3 className="mb-4 font-semibold">Contact Support</h3>
            <TextareaPreset
              label="Issue Description"
              description="Please provide as much detail as possible to help us resolve the issue."
              placeholder="I am experiencing an error when..."
              size={globalSize}
              className="w-full"
              rows={5}
            />
          </div>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
