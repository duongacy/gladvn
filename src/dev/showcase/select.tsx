import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
  SelectScrollDownButton,
  SelectScrollUpButton,
  Field,
  FieldLabel,
  FieldDescription,
  FieldContent,
  SelectPreset} from "@/index";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";

import { type Size } from "@/lib/types";

export default function SelectShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Select"
        description="Displays a list of options for the user to pick from—triggered by a button."
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
        <ExampleSection label="Standard" description="Custom dropdown select.">
          <div className="w-full max-w-sm">
            <Field size={globalSize}>
              <FieldLabel>Framework</FieldLabel>
              <FieldContent>
                <Select>
                  <SelectTrigger size={globalSize}>
                    <SelectValue placeholder="Pick a framework..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectScrollUpButton />
                    <SelectItem value="next">Next.js</SelectItem>
                    <SelectItem value="vite">Vite</SelectItem>
                    <SelectItem value="remix">Remix</SelectItem>
                    <SelectItem value="astro">Astro</SelectItem>
                    <SelectScrollDownButton />
                  </SelectContent>
                </Select>
              </FieldContent>
              <FieldDescription>
                Choose your preferred tech stack.
              </FieldDescription>
            </Field>
          </div>
        </ExampleSection>

        <ExampleSection
          label="Grouped"
          description="Options visually grouped with labels."
        >
          <div className="w-full max-w-sm">
            <Field size={globalSize}>
              <FieldLabel>Fruit</FieldLabel>
              <FieldContent>
                <Select>
                  <SelectTrigger size={globalSize}>
                    <SelectValue placeholder="Pick a fruit..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Citrus</SelectLabel>
                      <SelectItem value="orange">Orange</SelectItem>
                      <SelectItem value="lemon">Lemon</SelectItem>
                    </SelectGroup>
                    <SelectSeparator />
                    <SelectGroup>
                      <SelectLabel>Berry</SelectLabel>
                      <SelectItem value="strawberry">Strawberry</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FieldContent>
            </Field>
          </div>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
