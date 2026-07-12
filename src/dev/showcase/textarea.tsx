import { useDevContext } from "../../dev/components/dev-context";
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
import {
  DocsCode,
  DocsH3,
  DocsP,
  ExampleGrid,
  ExampleSection,
  Showcase,
  ShowcaseDocs,
} from "../../dev/components/showcase";
import { type Size } from "../../lib/types";
import { useState } from "react";

// ──────────────────────────────────────────────────────────
// SECTION 1: Macro Content
// ──────────────────────────────────────────────────────────
function TextareaMacroShowcase({ globalSize }: { globalSize: Size }) {
  const [bio, setBio] = useState("");
  const maxLength = 280;

  return (
    <div className="space-y-10 mt-6">
      <ExampleGrid>
        <ExampleSection
          label="Tiêu chuẩn"
          description="Trường văn bản nhiều dòng với nhãn và mô tả."
          codeString={`<TextareaPreset
  label="Phản hồi (Feedback)"
  description="Đóng góp ý kiến của bạn về sản phẩm."
  placeholder="Viết phản hồi..."
  className="w-full"
/>
`}
        >
          <TextareaPreset
            label="Phản hồi (Feedback)"
            description="Đóng góp ý kiến của bạn về sản phẩm."
            placeholder="Viết phản hồi..."
            size={globalSize}
            className="w-full"
          />
        </ExampleSection>

        <ExampleSection
          label="Lỗi xác thực (Validation Error)"
          description="Hiển thị thông báo lỗi khi đầu vào không hợp lệ."
          codeString={`<TextareaPreset
  label="Khiếu nại"
  placeholder="Mô tả vấn đề..."
  errorMessage="Vui lòng cung cấp ít nhất 20 ký tự để chúng tôi hỗ trợ tốt hơn."
  className="w-full"
  rows={3}
/>
`}
        >
          <TextareaPreset
            label="Khiếu nại"
            placeholder="Mô tả vấn đề..."
            errorMessage="Vui lòng cung cấp ít nhất 20 ký tự để chúng tôi hỗ trợ tốt hơn."
            size={globalSize}
            className="w-full"
            rows={3}
          />
        </ExampleSection>
      </ExampleGrid>

      <ExampleGrid>
        <ExampleSection
          label="Giới hạn ký tự (Character Count)"
          description="Sử dụng React state và slot description để đếm ngược số ký tự."
          codeString={`const [bio, setBio] = useState("");
const maxLength = 280;

return (
  <TextareaPreset
    label="Tiểu sử"
    size="\${globalSize}"
    description={
      <span className="flex justify-between">
        <span>Mô tả ngắn gọn về bản thân bạn.</span>
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
    errorMessage={bio.length > maxLength ? \`Vượt quá \${bio.length - maxLength} ký tự.\` : undefined}
    rows={4}
  />
);`}
        >
          <TextareaPreset
              label="Tiểu sử"
              description={
                <span className="flex justify-between">
                  <span>Mô tả ngắn gọn về bản thân bạn.</span>
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
                  ? `Vượt quá ${bio.length - maxLength} ký tự.`
                  : undefined
              }
              size={globalSize}
              className="w-full"
              rows={4}
            />
        </ExampleSection>

        <ExampleSection
          label="Khóa / Bất hoạt (Disabled)"
          description="Trường văn bản không thể tương tác."
          codeString={`<TextareaPreset
  label="Ghi chú lưu trữ"
  description="Những ghi chú này ở dạng chỉ đọc."
  defaultValue="Dự án này đã hoàn thành vào năm 2023. Không thể thay đổi nội dung."
  disabled
  className="w-full"
  rows={4}
/>
`}
        >
          <TextareaPreset
            label="Ghi chú lưu trữ"
            description="Những ghi chú này ở dạng chỉ đọc."
            defaultValue="Dự án này đã hoàn thành vào năm 2023. Không thể thay đổi nội dung."
            disabled
            size={globalSize}
            className="w-full"
            rows={4}
          />
        </ExampleSection>
      </ExampleGrid>

      <ExampleSection
        label="Thực tế sử dụng (Real-world Form)"
        description="Trình bày bố cục trong ngữ cảnh biểu mẫu rộng hơn."
        fullWidth
        codeString={`<div className="w-full max-w-lg rounded-xl border border-border bg-card p-5 shadow-sm">
  <h3 className="mb-4 font-semibold">Tạo Ticket Hỗ Trợ</h3>
  <TextareaPreset
    label="Mô tả sự cố"
    description="Vui lòng cung cấp chi tiết lỗi, các bước tái hiện và cấu hình môi trường."
    placeholder="Ví dụ: Khi tôi click vào nút Submit, hệ thống báo lỗi 500..."
    className="w-full"
    rows={6}
  />
</div>
`}
      >
        <div className="w-full max-w-lg rounded-xl border border-border bg-card p-5 shadow-sm">
          <h3 className="mb-4 font-semibold">Tạo Ticket Hỗ Trợ</h3>
          <TextareaPreset
            label="Mô tả sự cố"
            description="Vui lòng cung cấp chi tiết lỗi, các bước tái hiện và cấu hình môi trường."
            placeholder="Ví dụ: Khi tôi click vào nút Submit, hệ thống báo lỗi 500..."
            size={globalSize}
            className="w-full"
            rows={6}
          />
        </div>
      </ExampleSection>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 2: Micro Content
// ──────────────────────────────────────────────────────────
function TextareaMicroShowcase({ globalSize }: { globalSize: Size }) {
  return (
    <div className="space-y-10 mt-6">
      <ExampleGrid>
        <ExampleSection
          label="Cơ bản (Primitive)"
          description="Khung nhập văn bản nhiều dòng không có nhãn."
          codeString={`<Textarea
  rows={4}
  placeholder="Viết một đoạn văn dài ở đây..."
  className="w-full"
/>
`}
        >
          <Textarea
            size={globalSize}
            rows={4}
            placeholder="Viết một đoạn văn dài ở đây..."
            className="w-full"
          />
        </ExampleSection>

        <ExampleSection
          label="Auto Resize (CSS content)"
          description="Giãn chiều cao tự động nhờ class field-sizing-content (nếu trình duyệt hỗ trợ)."
          codeString={`<Textarea
  placeholder="Gõ nhiều dòng để xem nó tự giãn..."
  defaultValue={"Dòng 1\nDòng 2\nDòng 3\nDòng 4"}
  className="w-full"
/>
`}
        >
          <Textarea
            size={globalSize}
            placeholder="Gõ nhiều dòng để xem nó tự giãn..."
            defaultValue={"Dòng 1\nDòng 2\nDòng 3\nDòng 4"}
            className="w-full"
          />
        </ExampleSection>
      </ExampleGrid>

      <ExampleGrid>
        <ExampleSection
          label="InputGroup + Textarea"
          description="Textarea bên trong InputGroup với Addon. Sử dụng InputGroupTextarea."
          codeString={`<Field className="w-full">
  <FieldLabel htmlFor="tf-group-textarea">Bình luận</FieldLabel>
  <FieldContent>
    <InputGroup className="items-start">
      <InputGroupAddon align="start" className="mt-2">
        <InputGroupText>💬</InputGroupText>
      </InputGroupAddon>
      <InputGroupTextarea
        id="tf-group-textarea"
        rows={3}
        placeholder="Để lại bình luận của bạn..."
      />
    </InputGroup>
  </FieldContent>
</Field>
`}
        >
          <Field size={globalSize} className="w-full">
            <FieldLabel htmlFor="tf-group-textarea">Bình luận</FieldLabel>
            <FieldContent>
              <InputGroup size={globalSize} className="items-start">
                <InputGroupAddon align="start" className="mt-2">
                  <InputGroupText>💬</InputGroupText>
                </InputGroupAddon>
                <InputGroupTextarea
                  id="tf-group-textarea"
                  rows={3}
                  placeholder="Để lại bình luận của bạn..."
                />
              </InputGroup>
            </FieldContent>
          </Field>
        </ExampleSection>

        <ExampleSection
          label="Trạng thái Lỗi thủ công"
          description="Tự gắn aria-invalid vào Textarea và dùng FieldError."
          codeString={`<Field className="w-full">
  <FieldLabel htmlFor="tf-invalid">Mô tả hệ thống</FieldLabel>
  <FieldContent>
    <Textarea
      id="tf-invalid"
      rows={3}
      aria-invalid
      placeholder="Mô tả..."
      defaultValue="Quá ngắn"
    />
  </FieldContent>
  <FieldError>Mô tả không đạt đủ độ dài tối thiểu.</FieldError>
</Field>
`}
        >
          <Field size={globalSize} className="w-full">
            <FieldLabel htmlFor="tf-invalid">Mô tả hệ thống</FieldLabel>
            <FieldContent>
              <Textarea
                id="tf-invalid"
                size={globalSize}
                rows={3}
                aria-invalid
                placeholder="Mô tả..."
                defaultValue="Quá ngắn"
              />
            </FieldContent>
            <FieldError>Mô tả không đạt đủ độ dài tối thiểu.</FieldError>
          </Field>
        </ExampleSection>
      </ExampleGrid>

      <ExampleSection
        label="🧭 Use Case Comparison"
        description="So sánh nhanh khi nào dùng Micro và Macro."
        fullWidth
        codeString={`<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
  {/* Story 1: Macro wins */}
  <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
    <div className="flex items-start gap-3">
      <span className="mt-0.5 shrink-0 rounded-full bg-green-500/10 p-1.5 text-green-600">
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Story 1 · Dùng Macro</p>
        <h3 className="mt-0.5 text-sm font-semibold text-foreground">Form lấy thông tin thông thường</h3>
      </div>
    </div>
    <p className="text-xs text-muted-foreground leading-relaxed">
      Bạn cần ô nhập có tên trường rõ ràng, có gợi ý nhập liệu. Chỉ việc truyền props vào <DocsCode>TextareaPreset</DocsCode> là xong.
    </p>
    <div className="rounded-lg bg-muted/50 p-3">
      <TextareaPreset
        size="sm"
        label="Mục tiêu nghề nghiệp"
        description="Tối đa 500 từ."
        className="w-full"
      />
    </div>
  </div>

  {/* Story 2: Micro wins */}
  <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
    <div className="flex items-start gap-3">
      <span className="mt-0.5 shrink-0 rounded-full bg-blue-500/10 p-1.5 text-blue-600">
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Story 2 · Dùng Micro</p>
        <h3 className="mt-0.5 text-sm font-semibold text-foreground">Layout kết hợp Addon đặc thù</h3>
      </div>
    </div>
    <p className="text-xs text-muted-foreground leading-relaxed">
      Khi bạn cần nối một icon vào ngay bên cạnh khung textarea giống như giao diện chat. Macro không hỗ trợ layout này cho Textarea.
    </p>
    <div className="rounded-lg bg-muted/50 p-3">
      <InputGroup size="sm" className="items-end w-full">
        <InputGroupTextarea rows={2} placeholder="Tin nhắn..." />
        <button className="h-full px-3 shrink-0 rounded-r-md border-l border-input bg-muted/50 text-xs font-semibold text-primary transition-colors hover:bg-muted">GỬI</button>
      </InputGroup>
    </div>
  </div>
</div>
`}
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Story 1: Macro wins */}
          <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 shrink-0 rounded-full bg-green-500/10 p-1.5 text-green-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Story 1 · Dùng Macro
                </p>
                <h3 className="mt-0.5 text-sm font-semibold text-foreground">
                  Form lấy thông tin thông thường
                </h3>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Bạn cần ô nhập có tên trường rõ ràng, có gợi ý nhập liệu. Chỉ việc
              truyền props vào <DocsCode>TextareaPreset</DocsCode> là xong.
            </p>
            <div className="rounded-lg bg-muted/50 p-3">
              <TextareaPreset
                size="sm"
                label="Mục tiêu nghề nghiệp"
                description="Tối đa 500 từ."
                className="w-full"
              />
            </div>
          </div>

          {/* Story 2: Micro wins */}
          <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 shrink-0 rounded-full bg-blue-500/10 p-1.5 text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Story 2 · Dùng Micro
                </p>
                <h3 className="mt-0.5 text-sm font-semibold text-foreground">
                  Layout kết hợp Addon đặc thù
                </h3>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Khi bạn cần nối một icon vào ngay bên cạnh khung textarea giống
              như giao diện chat. Macro không hỗ trợ layout này cho Textarea.
            </p>
            <div className="rounded-lg bg-muted/50 p-3">
              <InputGroup size="sm" className="items-end w-full">
                <InputGroupTextarea rows={2} placeholder="Tin nhắn..." />
                <button className="h-full px-3 shrink-0 rounded-r-md border-l border-input bg-muted/50 text-xs font-semibold text-primary transition-colors hover:bg-muted">
                  GỬI
                </button>
              </InputGroup>
            </div>
          </div>
        </div>
      </ExampleSection>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 3: Entry point
// ──────────────────────────────────────────────────────────
export default function TextareaShowcase() {
  const { size: globalSize } = useDevContext();
  return (
    <Showcase
      title="Textarea"
      description="Trường văn bản nhiều dòng dành cho nội dung dài, phản hồi hoặc mô tả."
      generalConcept={
        <div className="space-y-4">
          <ShowcaseDocs>
            <DocsH3>Khi nào nên dùng Macro</DocsH3>
            <DocsP>
              <DocsCode>TextareaPreset</DocsCode> là một component hoàn chỉnh,
              tích hợp sẵn Label, Description và Error Message. Sử dụng nó cho
              đa số các trường hợp để giữ code ngắn gọn và đảm bảo tính nhất
              quán (Accessibility).
            </DocsP>
          </ShowcaseDocs>
          <ShowcaseDocs>
            <DocsH3>Khi nào nên dùng Micro</DocsH3>
            <DocsP>
              <DocsCode>Textarea</DocsCode> chỉ là một ô nhập liệu độc lập. Dùng
              nó khi bạn tự quản lý <DocsCode>Field</DocsCode> thủ công hoặc khi
              chèn Textarea vào bên trong một <DocsCode>InputGroup</DocsCode>.
            </DocsP>
          </ShowcaseDocs>
        </div>
      }

      tabs={[
        {
          label: "Micro (Primitive)",
          content: <TextareaMicroShowcase globalSize={globalSize} />,
        },
        {
          label: "Macro (Preset)",
          content: <TextareaMacroShowcase globalSize={globalSize} />,
        },
      ]}
    />
  );
}
