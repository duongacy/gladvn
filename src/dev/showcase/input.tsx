import { useState } from "react";
import { Input, MonoSelect, Field, FieldLabel, FieldDescription, FieldContent, InputGroup, InputGroupAddon, InputGroupText, InputGroupInput } from "../../index";
import { SectionHeader, ExampleSection, ExampleGrid } from "../components/showcase";

export default function InputShowcase() {
  const [globalSize, setGlobalSize] = useState<"sm" | "md" | "lg">("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Input"
        description="A text field for capturing short-form user input."
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

      {/* ── Default ───────────────────────────────── */}
      <ExampleSection label="Default" description="Basic text input with label and description.">
        <div className="w-full max-w-sm">
          <Field size={globalSize}>
            <FieldLabel htmlFor="tf-input">Email</FieldLabel>
            <FieldDescription>We'll never share your email.</FieldDescription>
            <FieldContent>
              <Input id="tf-input" size={globalSize} placeholder="you@example.com" />
            </FieldContent>
          </Field>
        </div>
      </ExampleSection>

      <ExampleGrid columns={2}>
        {/* ── Input Group ──────────────────────────── */}
        <ExampleSection label="Input Group" description="Input with prefix and suffix addons.">
          <div className="w-full max-w-sm">
            <Field size={globalSize}>
              <FieldLabel htmlFor="tf-group">Website</FieldLabel>
              <FieldContent>
                <InputGroup size={globalSize}>
                  <InputGroupAddon>
                    <InputGroupText>https://</InputGroupText>
                  </InputGroupAddon>
                  <InputGroupInput id="tf-group" placeholder="example" />
                  <InputGroupAddon>
                    <InputGroupText>.com</InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </FieldContent>
            </Field>
          </div>
        </ExampleSection>

        {/* ── Disabled ─────────────────────────────── */}
        <ExampleSection label="Disabled" description="Non-interactive input state.">
          <div className="w-full max-w-sm">
            <Field size={globalSize}>
              <FieldLabel htmlFor="tf-disabled">Locked</FieldLabel>
              <FieldContent>
                <Input id="tf-disabled" disabled size={globalSize} value="Readonly content" />
              </FieldContent>
            </Field>
          </div>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
