import { useState } from "react";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";

import { type Size } from "@/lib/types";
import { Input } from "@/components/micro/input";
import { Field, FieldLabel, FieldDescription, FieldContent } from "@/components/micro/field";
import { InputGroup, InputGroupAddon, InputGroupText, InputGroupInput } from "@/components/micro/input-group";
import { SelectPreset } from "@/components/macro/select-preset";

export default function InputShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Input"
        description="Trường văn bản để ghi lại thông tin đầu vào của người dùng dạng ngắn."
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

      {/* ── Default ───────────────────────────────── */}
      <ExampleSection
        label="Default"
        description="Nhập văn bản cơ bản với nhãn và mô tả."
      >
        <div className="w-full max-w-sm">
          <Field size={globalSize}>
            <FieldLabel htmlFor="tf-input">Email</FieldLabel>
            <FieldDescription>We'll never share your email.</FieldDescription>
            <FieldContent>
              <Input
                id="tf-input"
                size={globalSize}
                placeholder="you@example.com"
              />
            </FieldContent>
          </Field>
        </div>
      </ExampleSection>

      <ExampleGrid columns={2}>
        {/* ── Input Group ──────────────────────────── */}
        <ExampleSection
          label="Input Group"
          description="Đầu vào với các phần bổ sung tiền tố và hậu tố."
        >
          <div className="w-full max-w-sm">
            <Field size={globalSize}>
              <FieldLabel htmlFor="tf-group">Website</FieldLabel>
              <FieldContent>
                <InputGroup size={globalSize}>
                  <InputGroupAddon>
                    <InputGroupText>https://</InputGroupText>
                  </InputGroupAddon>
                  <InputGroupInput id="tf-group" placeholder="example" />
                  <InputGroupAddon>
                    <InputGroupText>.com</InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </FieldContent>
            </Field>
          </div>
        </ExampleSection>

        {/* ── Disabled ─────────────────────────────── */}
        <ExampleSection
          label="Disabled"
          description="Trạng thái đầu vào không tương tác."
        >
          <div className="w-full max-w-sm">
            <Field size={globalSize}>
              <FieldLabel htmlFor="tf-disabled">Locked</FieldLabel>
              <FieldContent>
                <Input
                  id="tf-disabled"
                  disabled
                  size={globalSize}
                  value="Readonly content"
                />
              </FieldContent>
            </Field>
          </div>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
