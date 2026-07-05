import { useState } from "react";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";
import { MonoSelect } from "@/dev/components/mono-select";
import { TextareaPreset } from "@/components/macro/textarea-preset";

export default function MacroTextareaShowcase() {
  const [globalSize, setGlobalSize] = useState<"sm" | "md" | "lg">("md");
  const [bio, setBio] = useState("");
  const maxLength = 280;

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Textarea Preset (Macro)"
        description="Trường văn bản hoàn chỉnh có nhãn, mô tả và thông báo lỗi xác thực tích hợp sẵn."
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

      <ExampleGrid columns={1}>
        <ExampleSection label="Basic Usage" description="Trường văn bản tiêu chuẩn có nhãn.">
          <TextareaPreset
            label="Biography"
            placeholder="Tell us about yourself..."
            size={globalSize}
            className="w-full max-w-sm"
          />
        </ExampleSection>

        <ExampleSection label="With Description" description="Cung cấp thêm ngữ cảnh bên dưới vùng văn bản.">
          <TextareaPreset
            label="Feedback"
            description="Chúng tôi đánh giá cao những suy nghĩ của bạn về cách cải thiện dịch vụ của chúng tôi."
            placeholder="Type your feedback here..."
            size={globalSize}
            className="w-full max-w-sm"
          />
        </ExampleSection>

        <ExampleSection label="Validation Error" description="Hiển thị thông báo lỗi khi đầu vào không hợp lệ.">
          <TextareaPreset
            label="Complaint"
            placeholder="Describe your issue"
            errorMessage="Please provide more details."
            size={globalSize}
            className="w-full max-w-sm"
          />
        </ExampleSection>

        <ExampleSection label="Disabled State" description="Trường văn bản không tương tác.">
          <TextareaPreset
            label="Archived Notes"
            description="Những ghi chú này ở dạng chỉ đọc."
            defaultValue="This project was completed in 2023."
            disabled
            size={globalSize}
            className="w-full max-w-sm"
          />
        </ExampleSection>

        <ExampleSection label="Character Count" description="Giới hạn ký tự với đếm ngược — use case phổ biến trong B2B.">
          <div className="w-full max-w-sm">
            <TextareaPreset
              label="Bio"
              description={
                <span className="flex justify-between">
                  <span>Mô tả ngắn gọn về bản thân bạn.</span>
                  <span className={bio.length > maxLength ? "text-destructive font-medium" : ""}>
                    {bio.length}/{maxLength}
                  </span>
                </span>
              }
              placeholder="I'm a developer who loves..."
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              maxLength={maxLength}
              errorMessage={bio.length > maxLength ? `Exceeded by ${bio.length - maxLength} characters.` : undefined}
              size={globalSize}
              className="w-full"
              rows={4}
            />
          </div>
        </ExampleSection>

        <ExampleSection label="Real-world Form" description="Trình bày bố cục trong ngữ cảnh biểu mẫu rộng hơn.">
          <div className="w-full max-w-sm rounded-lg border p-4 shadow-sm">
            <h3 className="mb-4 font-semibold">Contact Support</h3>
            <TextareaPreset
              label="Issue Description"
              description="Vui lòng cung cấp càng nhiều chi tiết càng tốt để giúp chúng tôi giải quyết vấn đề."
              placeholder="I am experiencing an error when..."
              size={globalSize}
              className="w-full"
              rows={5}
            />
          </div>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
