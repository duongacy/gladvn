import { useState } from "react";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";
import { type Size } from "@/lib/types";
import { Input } from "@/components/micro/input";
import { FieldPreset } from "@/components/macro/field-preset";

export default function MacroFieldShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Field (Macro)"
        description="A utility wrapper for form controls to add label, description, and error."
      />

      <ExampleGrid columns={2}>
        <ExampleSection label="Standard" description="Wrapping a standard Input.">
          <div className="w-full max-w-sm">
            <FieldPreset
              size={globalSize}
              label="Username"
              description="This is your public display name."
            >
              <Input placeholder="Enter username..." size={globalSize} />
            </FieldPreset>
          </div>
        </ExampleSection>

        <ExampleSection label="Error State" description="Passing error messages.">
          <div className="w-full max-w-sm flex flex-col gap-6">
            <FieldPreset
              size={globalSize}
              label="Username"
              errorMessage="Username is already taken."
            >
              <Input placeholder="Enter username..." size={globalSize} aria-invalid="true" />
            </FieldPreset>
          </div>
        </ExampleSection>

        <ExampleSection label="Horizontal Orientation" description="Laying out the label and control side by side.">
          <div className="w-full max-w-sm">
            <FieldPreset
              size={globalSize}
              label="Subscribe"
              description="Receive weekly updates."
              orientation="horizontal"
            >
              <div className="h-5 w-5 rounded border border-primary bg-primary/10"></div>
            </FieldPreset>
          </div>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
