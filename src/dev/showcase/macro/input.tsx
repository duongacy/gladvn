import { useState } from "react";
import { SearchIcon, LockIcon } from "lucide-react";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";
import { MonoSelect } from "@/dev/components/mono-select";
import { InputPreset } from "@/components/macro/input-preset";

export default function MacroInputShowcase() {
  const [globalSize, setGlobalSize] = useState<"sm" | "md" | "lg">("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Input Preset (Macro)"
        description="Trường nhập văn bản hoàn chỉnh có nhãn, mô tả và thông báo lỗi xác thực được tích hợp sẵn."
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
        <ExampleSection label="Basic Usage" description="Trường đầu vào tiêu chuẩn có nhãn.">
          <InputPreset
            label="Email Address"
            placeholder="name@example.com"
            size={globalSize}
            className="w-full max-w-sm"
          />
        </ExampleSection>

        <ExampleSection label="With Description" description="Cung cấp thêm ngữ cảnh bên dưới đầu vào.">
          <InputPreset
            label="Username"
            description="Đây sẽ là tên hiển thị công khai của bạn."
            placeholder="johndoe"
            size={globalSize}
            className="w-full max-w-sm"
          />
        </ExampleSection>

        <ExampleSection label="Validation Error" description="Hiển thị thông báo lỗi khi đầu vào không hợp lệ.">
          <InputPreset
            label="Password"
            type="password"
            startAdornment={<LockIcon />}
            placeholder="Enter your password"
            errorMessage="Password must be at least 8 characters long."
            size={globalSize}
            className="w-full max-w-sm"
          />
        </ExampleSection>

        <ExampleSection label="Disabled State" description="Trường đầu vào không tương tác.">
          <InputPreset
            label="Project Name"
            description="Bạn không thể thay đổi tên dự án sau khi tạo."
            defaultValue="my-awesome-project"
            disabled
            size={globalSize}
            className="w-full max-w-sm"
          />
        </ExampleSection>

        <ExampleSection label="Real-world Form Snippet" description="Thường được sử dụng với các mẫu nhãn tùy chỉnh và các loại đầu vào cụ thể.">
          <div className="flex w-full max-w-sm flex-col gap-6">
            <InputPreset
              label={
                <span className="flex items-center gap-2">
                  API Key <span className="rounded bg-destructive/20 px-1.5 py-0.5 text-[10px] font-semibold text-destructive">SECRET</span>
                </span>
              }
              type="password"
              description="Không chia sẻ chìa khóa này với bất cứ ai. Chúng tôi sẽ không bao giờ yêu cầu nó."
              defaultValue="sk_test_1234567890abcdef"
              size={globalSize}
              className="w-full"
            />
            <InputPreset
              label="Website URL"
              type="url"
              placeholder="https://example.com"
              description="Miền chính cho ứng dụng của bạn."
              size={globalSize}
              className="w-full"
            />
          </div>
        </ExampleSection>
        <ExampleSection label="With Adornments (Auto InputGroup)" description="Tự động chuyển đổi thành InputGroup khi có startAdornment hoặc endAdornment.">
          <div className="flex w-full max-w-sm flex-col gap-6">
            <InputPreset
              label="Website"
              placeholder="example"
              startAdornment="https://"
              endAdornment=".com"
              size={globalSize}
              className="w-full"
            />
            <InputPreset
              label="Search"
              placeholder="Search components..."
              startAdornment={<SearchIcon />}
              endAdornment={
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                  <span className="text-xs">⌘</span>K
                </kbd>
              }
              size={globalSize}
              className="w-full"
            />
          </div>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
