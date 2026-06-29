import { useState } from "react";
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxGroup,
  ComboboxLabel,
  ComboboxEmpty,
  ComboboxSeparator,
  ComboboxChips,
  ComboboxChip,
  ComboboxChipsInput,
  MonoSelect,
  Field,
  FieldLabel,
  FieldDescription,
  FieldContent,
} from "../../index";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "../components/showcase";

export default function ComboboxShowcase() {
  const [globalSize, setGlobalSize] = useState<"sm" | "md" | "lg">("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Combobox"
        description="A select input that allows searching through large datasets."
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
          label="Searchable Dropdown"
          description="Combobox with groups and empty state."
        >
          <div className="w-full max-w-sm">
            <Field size={globalSize}>
              <FieldLabel>Framework Search</FieldLabel>
              <FieldContent>
                <Combobox>
                  <ComboboxInput
                    size={globalSize}
                    placeholder="Search framework..."
                  />
                  <ComboboxContent>
                    <ComboboxEmpty>No framework found.</ComboboxEmpty>
                    <ComboboxList>
                      <ComboboxGroup>
                        <ComboboxLabel>Frontend</ComboboxLabel>
                        <ComboboxItem value="react">React</ComboboxItem>
                        <ComboboxItem value="vue">Vue</ComboboxItem>
                        <ComboboxItem value="svelte">Svelte</ComboboxItem>
                      </ComboboxGroup>
                      <ComboboxSeparator />
                      <ComboboxGroup>
                        <ComboboxLabel>Backend</ComboboxLabel>
                        <ComboboxItem value="express">Express</ComboboxItem>
                        <ComboboxItem value="nest">NestJS</ComboboxItem>
                      </ComboboxGroup>
                    </ComboboxList>
                  </ComboboxContent>
                </Combobox>
              </FieldContent>
              <FieldDescription>
                Best for datasets with many options.
              </FieldDescription>
            </Field>
          </div>
        </ExampleSection>

        <ExampleSection
          label="Multi-select (Chips)"
          description="Allows selecting multiple values as chips."
        >
          <div className="w-full max-w-sm">
            <Field size={globalSize}>
              <FieldLabel>Assign Tags</FieldLabel>
              <FieldContent>
                <Combobox multiple>
                  <ComboboxChips size={globalSize}>
                    <ComboboxChip value="bug">Bug</ComboboxChip>
                    <ComboboxChip value="feature">Feature</ComboboxChip>
                    <ComboboxChipsInput placeholder="Add tags..." />
                  </ComboboxChips>
                  <ComboboxContent>
                    <ComboboxEmpty>No tags found.</ComboboxEmpty>
                    <ComboboxList>
                      <ComboboxItem value="bug">Bug</ComboboxItem>
                      <ComboboxItem value="feature">Feature</ComboboxItem>
                      <ComboboxItem value="enhancement">
                        Enhancement
                      </ComboboxItem>
                      <ComboboxItem value="docs">Documentation</ComboboxItem>
                    </ComboboxList>
                  </ComboboxContent>
                </Combobox>
              </FieldContent>
              <FieldDescription>Select multiple tags.</FieldDescription>
            </Field>
          </div>
        </ExampleSection>

        <ExampleSection
          label="Disabled"
          description="Non-interactive combobox state."
        >
          <div className="w-full max-w-sm">
            <Field size={globalSize}>
              <FieldLabel>Disabled Search</FieldLabel>
              <FieldContent>
                <Combobox>
                  <ComboboxInput
                    size={globalSize}
                    placeholder="Search..."
                    disabled
                  />
                  <ComboboxContent>
                    <ComboboxList>
                      <ComboboxItem value="react">React</ComboboxItem>
                    </ComboboxList>
                  </ComboboxContent>
                </Combobox>
              </FieldContent>
              <FieldDescription>This combobox is disabled.</FieldDescription>
            </Field>
          </div>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
