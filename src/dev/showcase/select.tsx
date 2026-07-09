import {
  ExampleGrid,
  ExampleSection,
  SectionHeader,
} from "@/dev/components/showcase";
import { useState } from "react";

import { SelectPreset } from "@/components/macro/select-preset";
import { Field, FieldContent, FieldDescription, FieldLabel } from "@/components/micro/field";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue } from "@/components/micro/select";
import { type Size } from "@/lib/types";

export default function SelectShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Select"
        description="Hiển thị danh sách các tùy chọn để người dùng chọn—được kích hoạt bằng một nút."
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
          label="Standard"
          description="Chọn thả xuống tùy chỉnh."
          codeString={`<Field size="${globalSize}" className="w-full max-w-sm">
  <FieldLabel>Framework</FieldLabel>
  <FieldContent>
    <Select items={{ "next": "Next.js", "vite": "Vite", "remix": "Remix", "astro": "Astro" }}>
      <SelectTrigger size="${globalSize}">
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
</Field>`}
        >
          <Field size={globalSize} className="w-full max-w-sm">
            <FieldLabel>Framework</FieldLabel>
            <FieldContent>
              <Select items={{ "next": "Next.js", "vite": "Vite", "remix": "Remix", "astro": "Astro" }}>
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
        </ExampleSection>

        <ExampleSection
          label="Grouped"
          description="Các tùy chọn được nhóm trực quan bằng nhãn."
          codeString={`<Field size="${globalSize}" className="w-full max-w-sm">
  <FieldLabel>Fruit</FieldLabel>
  <FieldContent>
    <Select items={{ "orange": "Orange", "lemon": "Lemon", "strawberry": "Strawberry", "blueberry": "Blueberry" }}>
      <SelectTrigger size="${globalSize}">
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
</Field>`}
        >
          <Field size={globalSize} className="w-full max-w-sm">
            <FieldLabel>Fruit</FieldLabel>
            <FieldContent>
              <Select items={{ "orange": "Orange", "lemon": "Lemon", "strawberry": "Strawberry", "blueberry": "Blueberry" }}>
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
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
