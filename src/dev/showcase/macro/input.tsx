import { useState } from "react";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";
import { MonoSelect } from "@/dev/components/mono-select";
import { InputPreset } from "@/components/macro/input-preset";

export default function MacroInputShowcase() {
  const [globalSize, setGlobalSize] = useState<"sm" | "md" | "lg">("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Input Preset (Macro)"
        description="A complete text input field with built-in label, description, and validation error messages."
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
        <ExampleSection label="Basic Usage" description="Standard input field with a label.">
          <InputPreset
            label="Email Address"
            placeholder="name@example.com"
            size={globalSize}
            className="w-full max-w-sm"
          />
        </ExampleSection>

        <ExampleSection label="With Description" description="Providing extra context below the input.">
          <InputPreset
            label="Username"
            description="This will be your public display name."
            placeholder="johndoe"
            size={globalSize}
            className="w-full max-w-sm"
          />
        </ExampleSection>

        <ExampleSection label="Validation Error" description="Displaying an error message when input is invalid.">
          <InputPreset
            label="Password"
            type="password"
            placeholder="Enter your password"
            errorMessage="Password must be at least 8 characters long."
            size={globalSize}
            className="w-full max-w-sm"
          />
        </ExampleSection>

        <ExampleSection label="Disabled State" description="A non-interactive input field.">
          <InputPreset
            label="Project Name"
            description="You cannot change the project name after creation."
            defaultValue="my-awesome-project"
            disabled
            size={globalSize}
            className="w-full max-w-sm"
          />
        </ExampleSection>

        <ExampleSection label="Real-world Form Snippet" description="Often used with custom label patterns and specific input types.">
          <div className="flex w-full max-w-sm flex-col gap-6">
            <InputPreset
              label={
                <span className="flex items-center gap-2">
                  API Key <span className="rounded bg-destructive/20 px-1.5 py-0.5 text-[10px] font-semibold text-destructive">SECRET</span>
                </span>
              }
              type="password"
              description="Do not share this key with anyone. We will never ask for it."
              defaultValue="sk_test_1234567890abcdef"
              size={globalSize}
              className="w-full"
            />
            <InputPreset
              label="Website URL"
              type="url"
              placeholder="https://example.com"
              description="The primary domain for your application."
              size={globalSize}
              className="w-full"
            />
          </div>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
