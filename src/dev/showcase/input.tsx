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
import { MonoSelect } from "@/dev/components/mono-select";

export default function InputShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Input"
        description="Trường văn bản để ghi lại thông tin đầu vào của người dùng dạng ngắn."
      >
        <MonoSelect
          value={globalSize}
          onValueChange={(v) => setGlobalSize(v as "sm" | "md" | "lg")}
          options={[
            { value: "sm", label: "Small" },
            { value: "md", label: "Medium" },
            { value: "lg", label: "Large" },
          ]}
        />
      </SectionHeader>

      {/* ── Default ───────────────────────────────── */}
      <ExampleSection
        label="Default"
        description="Nhập văn bản cơ bản với nhãn và mô tả."
      >
          <Field size={globalSize} className="w-full max-w-sm">
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
      </ExampleSection>

      <ExampleGrid columns={2}>
        {/* ── Input Group ──────────────────────────── */}
        <ExampleSection
          label="Input Group"
          description="Đầu vào với các phần bổ sung tiền tố và hậu tố."
        >
            <Field size={globalSize} className="w-full max-w-sm">
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
        </ExampleSection>

        {/* ── Disabled ─────────────────────────────── */}
        <ExampleSection
          label="Disabled"
          description="Trạng thái đầu vào không tương tác."
        >
            <Field size={globalSize} className="w-full max-w-sm">
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
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
