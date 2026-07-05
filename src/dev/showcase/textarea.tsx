import { useState } from "react";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";
import { MonoSelect } from "@/dev/components/mono-select";
import { Textarea } from "@/components/micro/textarea";
import { Field, FieldLabel, FieldDescription, FieldContent } from "@/components/micro/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/micro/input-group";

export default function TextareaShowcase() {
  const [globalSize, setGlobalSize] = useState<"sm" | "md" | "lg">("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Textarea"
        description="Phù hợp nhất cho nội dung dài, phản hồi hoặc tiểu sử."
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

      {/* ── Standard ──────────────────────────────── */}
      <ExampleSection
        label="Standard"
        description="Trường nhập văn bản nhiều dòng cơ bản với nhãn và mô tả."
      >
        <div className="w-full max-w-sm">
          <Field size={globalSize}>
            <FieldLabel htmlFor="tf-textarea">Biography</FieldLabel>
            <FieldDescription>
              A standard textarea for long strings.
            </FieldDescription>
            <FieldContent>
              <Textarea
                id="tf-textarea"
                size={globalSize}
                rows={4}
                placeholder="Write something about yourself..."
              />
            </FieldContent>
          </Field>
        </div>
      </ExampleSection>

      <ExampleGrid columns={2}>
        {/* ── Auto Resize ─────────────────────────── */}
        <ExampleSection
          label="Auto Resize (field-sizing-content)"
          description="Tự động giãn chiều cao theo nội dung nhờ CSS field-sizing-content."
        >
          <div className="w-full max-w-sm">
            <Field size={globalSize}>
              <FieldLabel htmlFor="tf-autoresize">Notes</FieldLabel>
              <FieldContent>
                <Textarea
                  id="tf-autoresize"
                  size={globalSize}
                  placeholder="Start typing and watch me grow..."
                  defaultValue={"Line 1\nLine 2\nLine 3\nLine 4\nLine 5"}
                />
              </FieldContent>
            </Field>
          </div>
        </ExampleSection>

        {/* ── Invalid State ───────────────────────── */}
        <ExampleSection
          label="Invalid State"
          description="Trạng thái lỗi với viền đỏ và focus ring đỏ."
        >
          <div className="w-full max-w-sm">
            <Field size={globalSize}>
              <FieldLabel htmlFor="tf-invalid">Complaint</FieldLabel>
              <FieldContent>
                <Textarea
                  id="tf-invalid"
                  size={globalSize}
                  rows={3}
                  aria-invalid
                  placeholder="Describe your issue..."
                  defaultValue="Too short"
                />
              </FieldContent>
            </Field>
          </div>
        </ExampleSection>
      </ExampleGrid>

      <ExampleGrid columns={2}>
        {/* ── Disabled ────────────────────────────── */}
        <ExampleSection
          label="Disabled"
          description="Trạng thái vùng văn bản không tương tác."
        >
          <div className="w-full max-w-sm">
            <Field size={globalSize}>
              <FieldLabel htmlFor="tf-disabled-textarea">
                Disabled Biography
              </FieldLabel>
              <FieldContent>
                <Textarea
                  id="tf-disabled-textarea"
                  disabled
                  size={globalSize}
                  rows={4}
                  value="I am an AI assistant designed to help developers."
                />
              </FieldContent>
            </Field>
          </div>
        </ExampleSection>

        {/* ── InputGroupTextarea ──────────────────── */}
        <ExampleSection
          label="InputGroup + Textarea"
          description="Textarea bên trong InputGroup với các phần bổ sung."
        >
          <div className="w-full max-w-sm">
            <Field size={globalSize}>
              <FieldLabel htmlFor="tf-group-textarea">Message</FieldLabel>
              <FieldContent>
                <InputGroup size={globalSize} className="items-start">
                  <InputGroupAddon align="inline-start" className="mt-2">
                    <InputGroupText>📝</InputGroupText>
                  </InputGroupAddon>
                  <InputGroupTextarea
                    id="tf-group-textarea"
                    rows={3}
                    placeholder="Write your message..."
                  />
                </InputGroup>
              </FieldContent>
            </Field>
          </div>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
