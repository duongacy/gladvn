import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/index";
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
} from "@/index";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";

import { type Size } from "@/lib/types";

export default function FieldShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Field"
        description="Wrapper component to manage form field state, labels, and errors."
      >
        <Select value={globalSize} onValueChange={(v) => setGlobalSize(v as Size)}>
          <SelectTrigger className="w-[120px] h-8 text-xs bg-background">
            <SelectValue placeholder="Size" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sm">Size: sm</SelectItem>
            <SelectItem value="md">Size: md</SelectItem>
            <SelectItem value="lg">Size: lg</SelectItem>
          </SelectContent>
        </Select>
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

      <ExampleSection
        label="Orientations"
        description="Fields can be laid out vertically, horizontally, or responsively based on screen size."
      >
        <div className="flex flex-col gap-8 w-full max-w-sm">
          <Field size={globalSize} orientation="vertical">
            <FieldLabel>Vertical</FieldLabel>
            <FieldContent><Input placeholder="Vertical field..." size={globalSize} /></FieldContent>
          </Field>
          <Field size={globalSize} orientation="horizontal">
            <FieldLabel>Horizontal</FieldLabel>
            <FieldContent><Input placeholder="Horizontal field..." size={globalSize} /></FieldContent>
          </Field>
          <Field size={globalSize} orientation="responsive">
            <FieldLabel>Responsive</FieldLabel>
            <FieldContent><Input placeholder="Stack on mobile, inline on md..." size={globalSize} /></FieldContent>
          </Field>
        </div>
      </ExampleSection>
    </div>
  );
}
