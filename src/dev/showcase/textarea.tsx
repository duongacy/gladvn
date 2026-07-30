import { useState } from "react";

import { TextareaPreset } from "../../components/macro/textarea-preset";
import {
  Field,
  FieldContent,
  FieldError,
  FieldLabel,
} from "../../components/micro/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "../../components/micro/input-group";
import { Textarea } from "../../components/micro/textarea";
import { useI18n } from "../../dev/components/dev-context";
import { useDevContext } from "../../dev/components/dev-context";
import {
  DocsCode,
  DocsP,
  ExampleGrid,
  Showcase,
  ShowcaseExample,
} from "../../dev/components/showcase";
import { type Size } from "../../lib/types";

function TextareaMacroShowcase({ globalSize }: { globalSize: Size }) {
  const t = useI18n();
  const [bio, setBio] = useState("");
  const maxLength = 280;

  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample
          title={t("Tiêu chuẩn", "Standard")}
          description={t(
            "Trường văn bản nhiều dòng với nhãn và mô tả.",
            "Multi-line text field with label and description.",
          )}
          code={`<TextareaPreset
    label="Feedback"
    description="Share your thoughts on the product."
    placeholder="Write feedback..."
    className="w-full"
  />`}
          preview={
            <>
              <TextareaPreset
                label="Feedback"
                description="Share your thoughts on the product."
                placeholder="Write feedback..."
                size={globalSize}
                className="w-full"
              />
            </>
          }
        />

        <ShowcaseExample
          title={t("Lỗi xác thực (Validation Error)", "Validation Error")}
          description={t(
            "Hiển thị thông báo lỗi khi đầu vào không hợp lệ.",
            "Displays an error message when input is invalid.",
          )}
          code={`<TextareaPreset
    label="Complaint"
    placeholder="Describe the issue..."
    errorMessage="Please provide at least 20 characters so we can better assist you."
    className="w-full"
    rows={3}
  />`}
          preview={
            <>
              <TextareaPreset
                label="Complaint"
                placeholder="Describe the issue..."
                errorMessage="Please provide at least 20 characters so we can better assist you."
                size={globalSize}
                className="w-full"
                rows={3}
              />
            </>
          }
        />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample
          title={t("Giới hạn ký tự (Character Count)", "Character Count")}
          description={t(
            "Sử dụng React state và slot description để đếm ngược số ký tự.",
            "Use React state and description slot to countdown characters.",
          )}
          code={`const [bio, setBio] = useState(""); const maxLength = 280;
  return (
  <TextareaPreset
    label="Biography"
    size="\${globalSize}"
    description={
      <span className="flex justify-between">
        <span>A brief description about yourself.</span>
        <span
          data-invalid={
            bio.length > maxLength ? "" : undefined
          }
          className="data-invalid:text-destructive data-invalid:font-medium"
        >
          {bio.length}/{maxLength}
        </span>
      </span>
    }
    placeholder="I'm a developer who loves..."
    value={bio}
    onChange={(e) => setBio(e.target.value)}
    maxLength={maxLength}
    errorMessage={
      bio.length > maxLength
        ? \`Vượt quá \${bio.length - maxLength} ký tự.\`
        : undefined
    }
    rows={4}
  />
  );`}
          preview={
            <>
              <TextareaPreset
                label="Biography"
                description={
                  <span className="flex justify-between">
                    <span>A brief description about yourself.</span>
                    <span
                      data-invalid={bio.length > maxLength ? "" : undefined}
                      className="data-invalid:text-destructive data-invalid:font-medium"
                    >
                      {bio.length}/{maxLength}
                    </span>
                  </span>
                }
                placeholder="I'm a developer who loves..."
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                maxLength={maxLength}
                errorMessage={
                  bio.length > maxLength
                    ? `Exceeds by ${bio.length - maxLength} characters.`
                    : undefined
                }
                size={globalSize}
                className="w-full"
                rows={4}
              />
            </>
          }
        />

        <ShowcaseExample
          title={t("Khóa / Bất hoạt (Disabled)", "Disabled")}
          description={t(
            "Trường văn bản không thể tương tác.",
            "The text field is not interactive.",
          )}
          code={`<TextareaPreset
    label="Archive Notes"
    description="These notes are read-only."
    defaultValue="This project was completed in 2023. Content cannot be changed."
    disabled
    className="w-full"
    rows={4}
  />`}
          preview={
            <>
              <TextareaPreset
                label="Archive Notes"
                description="These notes are read-only."
                defaultValue="This project was completed in 2023. Content cannot be changed."
                disabled
                size={globalSize}
                className="w-full"
                rows={4}
              />
            </>
          }
        />
      </ExampleGrid>

      <ShowcaseExample
        title={t("Thực tế sử dụng (Real-world Form)", "Real-world Form")}
        description={t(
          "Bố cục thực tế trong một form hoàn chỉnh.",
          "Realistic layout in a complete form.",
        )}
        code={`<div className="w-full max-w-lg rounded-xl border border-border bg-card p-5 shadow-sm">
    <h3 className="mb-4 font-semibold">
      Create Support Ticket
    </h3>
    <TextareaPreset
      label="Issue Description"
      description="Please provide error details, steps to reproduce, and environment configuration."
      placeholder="Example: When I click the Submit button, the system reports a 500 error..."
      className="w-full"
      rows={6}
    />
  </div>`}
        preview={
          <>
            <div className="w-full max-w-lg rounded-xl border border-border bg-card p-5 shadow-sm">
              <h3 className="mb-4 font-semibold">Create Support Ticket</h3>
              <TextareaPreset
                label="Issue Description"
                description="Please provide error details, steps to reproduce, and environment configuration."
                placeholder="Example: When I click the Submit button, the system reports a 500 error..."
                size={globalSize}
                className="w-full"
                rows={6}
              />
            </div>
          </>
        }
      />
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 2: Micro Content
// ──────────────────────────────────────────────────────────
function TextareaMicroShowcase({ globalSize }: { globalSize: Size }) {
  const t = useI18n();
  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample
          title={t("Cơ bản (Primitive)", "Primitive")}
          description={t(
            "Khung nhập văn bản nhiều dòng không có nhãn.",
            "Multi-line text input without a label.",
          )}
          code={`<Textarea
    rows={4}
    placeholder="Write a long paragraph here..."
    className="w-full"
  />`}
          preview={
            <>
              <Textarea
                size={globalSize}
                rows={4}
                placeholder="Write a long paragraph here..."
                className="w-full"
              />
            </>
          }
        />

        <ShowcaseExample
          title={t("Auto Resize (CSS content)", "Auto Resize")}
          description={t(
            "Giãn chiều cao tự động nhờ class field-sizing-content (nếu trình duyệt hỗ trợ).",
            "Auto-expand height using field-sizing-content class (if supported by browser).",
          )}
          code={`<Textarea
  placeholder="Type multiple lines to see it auto-expand..."
  defaultValue={"Line 1\nLine 2\nLine 3\nLine 4"}
  className="w-full"
/>
`}
          preview={
            <>
              <Textarea
                size={globalSize}
                placeholder="Type multiple lines to see it auto-expand..."
                defaultValue={"Line 1\nLine 2\nLine 3\nLine 4"}
                className="w-full"
              />
            </>
          }
        />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample
          title="InputGroup + Textarea"
          description={t(
            "Textarea bên trong InputGroup với Addon. Sử dụng InputGroupTextarea.",
            "Textarea inside InputGroup with Addon. Uses InputGroupTextarea.",
          )}
          code={`<Field className="w-full">
    <FieldLabel htmlFor="tf-group-textarea">
      Comment
    </FieldLabel>
    <FieldContent>
      <InputGroup className="items-start">
        <InputGroupAddon align="start" className="mt-2">
          <InputGroupText>💬</InputGroupText>
        </InputGroupAddon>
        <InputGroupTextarea
          id="tf-group-textarea"
          rows={3}
          placeholder="Leave your comment..."
        />
      </InputGroup>
    </FieldContent>
  </Field>`}
          preview={
            <>
              <Field size={globalSize} className="w-full">
                <FieldLabel htmlFor="tf-group-textarea">Comment</FieldLabel>
                <FieldContent>
                  <InputGroup size={globalSize} className="items-start">
                    <InputGroupAddon align="start" className="mt-2">
                      <InputGroupText>💬</InputGroupText>
                    </InputGroupAddon>
                    <InputGroupTextarea
                      id="tf-group-textarea"
                      rows={3}
                      placeholder="Leave your comment..."
                    />
                  </InputGroup>
                </FieldContent>
              </Field>
            </>
          }
        />

        <ShowcaseExample
          title={t("Trạng thái Lỗi thủ công", "Manual Error State")}
          description={t(
            "Tự gắn aria-invalid vào Textarea và dùng FieldError.",
            "Manually attach aria-invalid to Textarea and use FieldError.",
          )}
          code={`<Field className="w-full">
    <FieldLabel htmlFor="tf-invalid">
      System Description
    </FieldLabel>
    <FieldContent>
      <Textarea
        id="tf-invalid"
        rows={3}
        aria-invalid
        placeholder="Description..."
        defaultValue="Too short"
      />
    </FieldContent>
    <FieldError>
      Description does not meet the minimum length.
    </FieldError>
  </Field>`}
          preview={
            <>
              <Field size={globalSize} className="w-full">
                <FieldLabel htmlFor="tf-invalid">System Description</FieldLabel>
                <FieldContent>
                  <Textarea
                    id="tf-invalid"
                    size={globalSize}
                    rows={3}
                    aria-invalid
                    placeholder="Description..."
                    defaultValue="Too short"
                  />
                </FieldContent>
                <FieldError>
                  Description does not meet the minimum length.
                </FieldError>
              </Field>
            </>
          }
        />
      </ExampleGrid>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 3: Entry point
// ──────────────────────────────────────────────────────────
export default function TextareaShowcase() {
  const t = useI18n();
  const { size: globalSize } = useDevContext();
  return (
    <Showcase
      title="Textarea"
      description={t(
        "Trường văn bản nhiều dòng dành cho nội dung dài, phản hồi hoặc mô tả.",
        "A multi-line text field for long content, feedback, or descriptions.",
      )}

      micro={{ content: <TextareaMicroShowcase globalSize={globalSize} /> }}
      macro={{ content: <TextareaMacroShowcase globalSize={globalSize} /> }}
    />
  );
}
