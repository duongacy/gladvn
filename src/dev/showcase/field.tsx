import { useState } from "react";
import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldContent,
  FieldError,
  Input,
  FieldGroup,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
  MonoSelect,
} from "../../index";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "../components/showcase";

export default function FieldShowcase() {
  const [globalSize, setGlobalSize] = useState<"sm" | "md" | "lg">("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Field"
        description="Wrapper component to manage form field state, labels, and errors."
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

      <ExampleGrid columns={2}>
        <ExampleSection
          label="Basic"
          description="A standard field with label and description."
        >
          <Field size={globalSize} className="max-w-sm">
            <FieldLabel>Username</FieldLabel>
            <FieldContent>
              <Input placeholder="Enter username..." size={globalSize} />
            </FieldContent>
            <FieldDescription>
              This is your public display name.
            </FieldDescription>
          </Field>
        </ExampleSection>

        <ExampleSection
          label="With Error"
          description="Field displaying validation error."
        >
          <Field size={globalSize} className="max-w-sm" data-invalid={true}>
            <FieldLabel>Username</FieldLabel>
            <FieldContent>
              <Input
                defaultValue="pedro"
                size={globalSize}
                aria-invalid={true}
              />
            </FieldContent>
            <FieldError>Username is already taken.</FieldError>
          </Field>
        </ExampleSection>
      </ExampleGrid>

      <ExampleSection
        label="Fieldset and Group"
        description="Grouping multiple related fields together."
      >
        <FieldSet className="max-w-md border p-6 rounded-xl">
          <FieldLegend>
            <FieldTitle>Personal Information</FieldTitle>
            <FieldDescription>
              Please enter your contact details.
            </FieldDescription>
          </FieldLegend>
          <FieldSeparator />
          <FieldGroup>
            <Field size={globalSize}>
              <FieldLabel>First Name</FieldLabel>
              <FieldContent>
                <Input placeholder="John" size={globalSize} />
              </FieldContent>
            </Field>
            <Field size={globalSize}>
              <FieldLabel>Last Name</FieldLabel>
              <FieldContent>
                <Input placeholder="Doe" size={globalSize} />
              </FieldContent>
            </Field>
          </FieldGroup>
        </FieldSet>
      </ExampleSection>
    </div>
  );
}
