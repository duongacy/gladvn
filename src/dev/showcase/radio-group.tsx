import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/index";
import { useState } from "react";
import {
  RadioGroup,
  RadioGroupItem,
  Field,
  FieldLabel,
  Label,
} from "@/index";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";

import { type Size } from "@/lib/types";

export default function RadioGroupShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Radio Group"
        description="A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time."
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
          label="Standard"
          description="Vertical list of radio options."
        >
          <div className="space-y-2">
            <Label
              size={globalSize}
              className="mb-2 block text-muted-foreground"
            >
              Density Preference
            </Label>
            <RadioGroup defaultValue="comfortable" className="space-y-1">
              <Field orientation="horizontal" size={globalSize}>
                <RadioGroupItem size={globalSize} value="default" id="r1" />
                <FieldLabel htmlFor="r1">Default</FieldLabel>
              </Field>
              <Field orientation="horizontal" size={globalSize}>
                <RadioGroupItem size={globalSize} value="comfortable" id="r2" />
                <FieldLabel htmlFor="r2">Comfortable</FieldLabel>
              </Field>
              <Field orientation="horizontal" size={globalSize}>
                <RadioGroupItem size={globalSize} value="compact" id="r3" />
                <FieldLabel htmlFor="r3">Compact</FieldLabel>
              </Field>
            </RadioGroup>
          </div>
        </ExampleSection>

        <ExampleSection
          label="Disabled"
          description="Non-interactive radio states."
        >
          <div className="space-y-2">
            <RadioGroup defaultValue="opt1" className="space-y-1">
              <Field orientation="horizontal" size={globalSize}>
                <RadioGroupItem
                  disabled
                  size={globalSize}
                  value="opt1"
                  id="r-d1"
                />
                <FieldLabel htmlFor="r-d1">Selected (Disabled)</FieldLabel>
              </Field>
              <Field orientation="horizontal" size={globalSize}>
                <RadioGroupItem
                  disabled
                  size={globalSize}
                  value="opt2"
                  id="r-d2"
                />
                <FieldLabel htmlFor="r-d2">Unselected (Disabled)</FieldLabel>
              </Field>
            </RadioGroup>
          </div>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
