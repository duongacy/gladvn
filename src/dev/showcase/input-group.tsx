import { useState } from "react";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";
import { SearchIcon } from "lucide-react";

import { type Size } from "@/lib/types";
import { Field, FieldContent, FieldDescription, FieldLabel } from "@/components/micro/field";
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText, InputGroupButton, InputGroupTextarea } from "@/components/micro/input-group";
import { Button } from "@/components/micro/button";
import { SelectPreset } from "@/components/macro/select-preset";

export default function InputGroupShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Input Group"
        description="Combine text inputs with addons for things like URLs or prices."
      >
        <SelectPreset
          value={globalSize}
          onValueChange={(v) => setGlobalSize(v as Size)}
          options={[
            { value: "sm", label: "Size: sm" },
            { value: "md", label: "Size: md" },
            { value: "lg", label: "Size: lg" },
          ]}
          className="w-[120px] h-8 text-xs bg-background"
        />
      </SectionHeader>

      <ExampleGrid columns={2}>
        <ExampleSection
          label="URL Input"
          description="Input with prefix and suffix addons."
        >
          <div className="w-full max-w-md">
            <Field size={globalSize}>
              <FieldLabel htmlFor="tf-group">Website</FieldLabel>
              <FieldDescription>
                Combine text inputs with addons for things like URLs or prices.
              </FieldDescription>
              <FieldContent>
                <InputGroup size={globalSize}>
                  <InputGroupAddon>
                    <InputGroupText>https://</InputGroupText>
                  </InputGroupAddon>
                  <InputGroupInput id="tf-group" placeholder="gladcn.ui" />
                  <InputGroupAddon>
                    <InputGroupText>.com</InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </FieldContent>
            </Field>
          </div>
        </ExampleSection>

        <ExampleSection
          label="With Button"
          description="Input combined with an action button."
        >
          <div className="w-full max-w-md">
            <Field size={globalSize}>
              <FieldLabel htmlFor="tf-search">Search</FieldLabel>
              <FieldContent>
                <InputGroup size={globalSize}>
                  <InputGroupInput id="tf-search" placeholder="Search..." />
                  <InputGroupButton>
                    <Button variant="solid" size={globalSize}>
                      <SearchIcon className="size-4 mr-2" /> Find
                    </Button>
                  </InputGroupButton>
                </InputGroup>
              </FieldContent>
            </Field>
          </div>
        </ExampleSection>
      </ExampleGrid>

      <ExampleSection
        label="With Textarea"
        description="Input group applied to a textarea component."
      >
        <div className="w-full max-w-md">
          <Field size={globalSize}>
            <FieldLabel htmlFor="tf-comment">Comment</FieldLabel>
            <FieldContent>
              <InputGroup size={globalSize} className="h-auto">
                <InputGroupAddon className="items-start pt-2">
                  <InputGroupText>@</InputGroupText>
                </InputGroupAddon>
                <InputGroupTextarea
                  id="tf-comment"
                  placeholder="Write a comment..."
                  rows={4}
                />
              </InputGroup>
            </FieldContent>
            </Field>
        </div>
      </ExampleSection>

      <ExampleSection
        label="Addon Alignments"
        description="InputGroup Addons support various alignments: inline-start, inline-end, block-start, block-end."
      >
        <ExampleGrid columns={2}>
          <InputGroup size={globalSize}>
            <InputGroupAddon align="inline-start">
              <InputGroupText>start</InputGroupText>
            </InputGroupAddon>
            <InputGroupInput placeholder="inline-start" />
          </InputGroup>

          <InputGroup size={globalSize}>
            <InputGroupInput placeholder="inline-end" />
            <InputGroupAddon align="inline-end">
              <InputGroupText>end</InputGroupText>
            </InputGroupAddon>
          </InputGroup>

          <InputGroup size={globalSize}>
            <InputGroupAddon align="block-start">
              <InputGroupText>block-start</InputGroupText>
            </InputGroupAddon>
            <InputGroupInput placeholder="block-start" />
          </InputGroup>

          <InputGroup size={globalSize}>
            <InputGroupInput placeholder="block-end" />
            <InputGroupAddon align="block-end">
              <InputGroupText>block-end</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </ExampleGrid>
      </ExampleSection>
    </div>
  );
}
