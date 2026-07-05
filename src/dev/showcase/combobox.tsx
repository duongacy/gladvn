import { useState } from "react";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";

import { type Size } from "@/lib/types";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/micro/select";
import { Combobox, ComboboxInput, ComboboxContent, ComboboxList, ComboboxItem, ComboboxGroup, ComboboxLabel, ComboboxEmpty, ComboboxSeparator, ComboboxChips, ComboboxChip, ComboboxChipsInput, ComboboxTrigger, ComboboxValue, ComboboxAnchor, ComboboxClear } from "@/components/micro/combobox";
import { Field, FieldLabel, FieldDescription, FieldContent } from "@/components/micro/field";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/micro/input-group";
import { SelectPreset } from "@/components/macro/select-preset";

const frontendFrameworks = ["react", "vue", "svelte"];
const backendFrameworks = ["express", "nest"];
const allFrameworks = [...frontendFrameworks, ...backendFrameworks];
const tagItems = ["bug", "feature", "enhancement", "docs"];
const engineItems = ["v8", "spidermonkey"];

export default function ComboboxShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Combobox"
        description="Một đầu vào chọn lọc cho phép tìm kiếm thông qua các tập dữ liệu lớn."
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
          label="Searchable Dropdown"
          description="Combobox với các nhóm và trạng thái trống."
        >
          <div className="w-full max-w-sm">
            <Field size={globalSize}>
              <FieldLabel>Framework Search</FieldLabel>
              <FieldContent>
                <Combobox items={allFrameworks}>
                  <ComboboxAnchor className="w-full">
                    <InputGroup size={globalSize} className="w-full">
                      <ComboboxInput
                        placeholder="Search framework..."
                        render={<InputGroupInput />}
                      />
                      <InputGroupAddon align="inline-end">
                        <ComboboxTrigger className="flex h-full cursor-default items-center justify-center px-2.5 outline-none group-has-data-[slot=combobox-clear]/input-group:hidden disabled:cursor-not-allowed disabled:opacity-50" />
                        <ComboboxClear />
                      </InputGroupAddon>
                    </InputGroup>
                  </ComboboxAnchor>
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
          description="Cho phép chọn nhiều giá trị làm chip."
        >
          <div className="w-full max-w-sm">
            <Field size={globalSize}>
              <FieldLabel>Assign Tags</FieldLabel>
              <FieldContent>
                <Combobox items={tagItems} multiple>
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
          description="Trạng thái combobox không tương tác."
        >
          <div className="w-full max-w-sm">
            <Field size={globalSize}>
              <FieldLabel>Disabled Search</FieldLabel>
              <FieldContent>
                <Combobox items={["react"]}>
                  <ComboboxAnchor className="w-full">
                    <InputGroup size={globalSize} className="w-full">
                      <ComboboxInput
                        placeholder="Search..."
                        disabled
                        render={<InputGroupInput disabled />}
                      />
                      <InputGroupAddon align="inline-end">
                        <ComboboxTrigger className="flex h-full cursor-default items-center justify-center px-2.5 outline-none group-has-data-[slot=combobox-clear]/input-group:hidden disabled:cursor-not-allowed disabled:opacity-50" disabled />
                      </InputGroupAddon>
                    </InputGroup>
                  </ComboboxAnchor>
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

        <ExampleSection
          label="With Trigger"
          description="Combobox sử dụng nút kích hoạt thay vì chỉ đầu vào."
        >
          <div className="w-full max-w-sm">
            <Field size={globalSize}>
              <FieldLabel>Select Engine</FieldLabel>
              <FieldContent>
                <Combobox items={engineItems}>
                  <ComboboxTrigger className="w-full justify-between flex items-center border rounded-md p-2">
                    <ComboboxValue placeholder="Select an engine" />
                  </ComboboxTrigger>
                  <ComboboxContent>
                    <div className="p-1">
                      <InputGroup size={globalSize} className="w-full">
                        <ComboboxInput
                          placeholder="Search engine..."
                          render={<InputGroupInput />}
                        />
                      </InputGroup>
                    </div>
                    <ComboboxEmpty>No results.</ComboboxEmpty>
                    <ComboboxList>
                      <ComboboxItem value="v8">V8</ComboboxItem>
                      <ComboboxItem value="spidermonkey">SpiderMonkey</ComboboxItem>
                    </ComboboxList>
                  </ComboboxContent>
                </Combobox>
              </FieldContent>
            </Field>
          </div>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
