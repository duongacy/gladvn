import { useState } from "react";
import {
  Field, FieldContent, FieldDescription, FieldError,
  FieldLabel,
  Input, MonoSelect, Checkbox,
} from "../../index";
import { SectionHeader, ExampleSection, ExampleGrid } from "../components/showcase";

export default function FieldShowcase() {
  const [globalSize, setGlobalSize] = useState<"sm" | "md" | "lg">("md")

  return (
    <div className="space-y-10">
      <SectionHeader title="Field" description="A form field wrapper that manages label, description, and error states.">
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

      {/* ── Standard ── */}
      <ExampleSection label="Standard" description="Normal field with label, description, and input.">
        <div className="w-full max-w-sm">
          <Field size={globalSize}>
            <FieldLabel htmlFor="tf-standard">Email</FieldLabel>
            <FieldDescription>We'll never share your email with anyone else.</FieldDescription>
            <FieldContent>
              <Input id="tf-standard" size={globalSize} placeholder="you@example.com" />
            </FieldContent>
          </Field>
        </div>
      </ExampleSection>

      <ExampleGrid columns={2}>
        {/* ── Validation State ── */}
        <ExampleSection label="Validation State" description="The field handles its own invalid state automatically.">
          <div className="w-full max-w-sm">
            <Field data-invalid="true" size={globalSize}>
              <FieldLabel htmlFor="tf-error">Email</FieldLabel>
              <FieldDescription>The field handles its own invalid state automatically.</FieldDescription>
              <FieldContent>
                <Input id="tf-error" size={globalSize} defaultValue="wrong@email" />
              </FieldContent>
              <FieldError>Invalid email address format.</FieldError>
            </Field>
          </div>
        </ExampleSection>

        {/* ── Horizontal ── */}
        <ExampleSection label="Horizontal" description='orientation="horizontal" places label beside the control.'>
          <div className="w-full max-w-sm space-y-4">
            <Field orientation="horizontal" size={globalSize} className="justify-between">
              <FieldLabel htmlFor="tf-horizontal">Notifications</FieldLabel>
              <Checkbox id="tf-horizontal" size={globalSize} />
            </Field>
            <Field orientation="horizontal" size={globalSize} className="justify-between">
              <FieldLabel htmlFor="tf-horizontal2">Dark Mode</FieldLabel>
              <Checkbox id="tf-horizontal2" size={globalSize} defaultChecked />
            </Field>
          </div>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
