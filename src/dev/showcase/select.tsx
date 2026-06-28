import { useState } from "react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem, SelectGroup, SelectLabel, SelectSeparator, MonoSelect, Field, FieldLabel, FieldDescription, FieldContent } from "../../index";
import { SectionHeader, ExampleSection, ExampleGrid } from "../components/showcase";

export default function SelectShowcase() {
  const [globalSize, setGlobalSize] = useState<"sm" | "md" | "lg">("md");

  return (
    <div className="space-y-10">
      <SectionHeader title="Select" description="Displays a list of options for the user to pick from—triggered by a button.">
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
                    <SelectItem value="next">Next.js</SelectItem>
                    <SelectItem value="vite">Vite</SelectItem>
                    <SelectItem value="remix">Remix</SelectItem>
                    <SelectItem value="astro">Astro</SelectItem>
                  </SelectContent>
                </Select>
              </FieldContent>
              <FieldDescription>Choose your preferred tech stack.</FieldDescription>
            </Field>
          </div>
        </ExampleSection>

        <ExampleSection label="Grouped" description="Options visually grouped with labels.">
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
