import { useState } from "react";
import { Textarea, MonoSelect, Field, FieldLabel, FieldDescription, FieldContent } from "../../index";
import { SectionHeader, ExampleSection, ExampleGrid } from "../components/showcase";

export default function TextareaShowcase() {
  const [globalSize, setGlobalSize] = useState<"sm" | "md" | "lg">("md");

  return (
    <div className="space-y-10">
      <SectionHeader title="Textarea" description="Best suited for long-form content, feedback, or biographies.">
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
        <ExampleSection label="Standard" description="Multi-line text entry field.">
          <div className="w-full max-w-sm">
            <Field size={globalSize}>
              <FieldLabel htmlFor="tf-textarea">Biography</FieldLabel>
              <FieldDescription>A standard textarea for long strings.</FieldDescription>
              <FieldContent>
                <Textarea id="tf-textarea" size={globalSize} rows={4} placeholder="Write something about yourself..." />
              </FieldContent>
            </Field>
          </div>
        </ExampleSection>

        <ExampleSection label="Disabled" description="Non-interactive textarea state.">
          <div className="w-full max-w-sm">
            <Field size={globalSize}>
              <FieldLabel htmlFor="tf-disabled-textarea">Disabled Biography</FieldLabel>
              <FieldContent>
                <Textarea id="tf-disabled-textarea" disabled size={globalSize} rows={4} value="I am an AI assistant designed to help developers." />
              </FieldContent>
            </Field>
          </div>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
