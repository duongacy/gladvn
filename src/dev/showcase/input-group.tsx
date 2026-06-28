import { useState } from "react";
import {
    Field, FieldContent, FieldDescription,
    FieldLabel, MonoSelect,
    InputGroup, InputGroupAddon, InputGroupInput, InputGroupText
} from "../../index";
import { SectionHeader, ExampleSection } from "../components/showcase";

export default function InputGroupShowcase() {
  const [globalSize, setGlobalSize] = useState<"sm" | "md" | "lg">("md")

  return (
    <div className="space-y-10">
      <SectionHeader title="Input Group" description="Combine text inputs with addons for things like URLs or prices.">
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

      <ExampleSection label="URL Input" description="Input with prefix and suffix addons.">
        <div className="w-full max-w-md">
          <Field size={globalSize}>
            <FieldLabel htmlFor="tf-group">Website</FieldLabel>
            <FieldDescription>Combine text inputs with addons for things like URLs or prices.</FieldDescription>
            <FieldContent>
              <InputGroup size={globalSize}>
                <InputGroupAddon>
                  <InputGroupText>https://</InputGroupText>
                </InputGroupAddon>
                <InputGroupInput id="tf-group" placeholder="sadcn.ui" />
                <InputGroupAddon>
                  <InputGroupText>.com</InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </FieldContent>
          </Field>
        </div>
      </ExampleSection>
    </div>
  );
}
