import { useState } from "react";
import { SearchIcon, LockIcon, MailIcon, LinkIcon } from "lucide-react";
import {
  ExampleSection,
  ExampleGrid,
  ShowcaseDocs,
  Showcase,
  DocsH3,
  DocsP,
  DocsUl,
  DocsLi,
  DocsCode,
} from "@/dev/components/showcase";
import { MonoSelect } from "@/dev/components/mono-select";

import { type Size } from "@/lib/types";
import { Input } from "@/components/micro/input";
import { Field, FieldLabel, FieldDescription, FieldContent, FieldError } from "@/components/micro/field";
import { InputGroup, InputGroupAddon, InputGroupText, InputGroupInput } from "@/components/micro/input-group";

import { InputPreset } from "@/components/macro/input-preset";

// ──────────────────────────────────────────────────────────
// SECTION 1: Macro Content
// ──────────────────────────────────────────────────────────
function InputMacroShowcase({ globalSize }: { globalSize: Size }) {
  return (
    <div className="space-y-10 mt-6">
      <ShowcaseDocs>
        <DocsH3>Khi nào nên dùng Macro</DocsH3>
        <DocsP>
          Bản Macro (<DocsCode>InputPreset</DocsCode>) đóng gói sẵn toàn bộ các thành phần thường thấy của một Form Control: Nhãn (Label), Mô tả (Description), Lỗi (Error Message) và phần trang trí (Adornments). Việc này giúp giảm thiểu lượng code lặp đi lặp lại khi xây dựng form.
        </DocsP>

        <DocsH3>Tự động hoá Layout</DocsH3>
        <DocsUl>
          <DocsLi>Tự động bọc Input vào trong <DocsCode>InputGroup</DocsCode> nếu bạn truyền <DocsCode>startAdornment</DocsCode> hoặc <DocsCode>endAdornment</DocsCode>.</DocsLi>
          <DocsLi>Tự động hiện Icon con mắt (Toggle ẩn/hiện) nếu <DocsCode>type="password"</DocsCode>.</DocsLi>
          <DocsLi>Tự động thêm class <DocsCode>aria-invalid</DocsCode> vào input nếu bạn truyền <DocsCode>errorMessage</DocsCode>.</DocsLi>
        </DocsUl>
      </ShowcaseDocs>

      <ExampleGrid columns={2}>
        <ExampleSection label="Tiêu chuẩn" description="Trường nhập văn bản hoàn chỉnh có nhãn và mô tả.">
          <InputPreset
            size={globalSize}
            label="Tên đăng nhập"
            description="Đây sẽ là tên hiển thị công khai của bạn."
            placeholder="johndoe"
            className="w-full"
          />
        </ExampleSection>

        <ExampleSection label="Lỗi xác thực (Validation Error)" description="Hiển thị thông báo lỗi và viền đỏ báo hiệu khi truyền errorMessage.">
          <InputPreset
            size={globalSize}
            label="Mật khẩu"
            type="password"
            placeholder="Nhập mật khẩu..."
            errorMessage="Mật khẩu phải chứa ít nhất 8 ký tự."
            className="w-full"
          />
        </ExampleSection>
      </ExampleGrid>

      <ExampleGrid columns={2}>
        <ExampleSection label="Với Tiền tố / Hậu tố (Adornments)" description="Tự động bọc bằng InputGroup, có thể truyền chuỗi hoặc icon.">
          <InputPreset
            size={globalSize}
            label="Website URL"
            type="url"
            placeholder="example"
            startAdornment="https://"
            endAdornment=".com"
            className="w-full"
          />
        </ExampleSection>

        <ExampleSection label="Khóa / Bất hoạt (Disabled)" description="Người dùng không thể tương tác với form.">
          <InputPreset
            size={globalSize}
            label="Tên dự án"
            description="Tên dự án không thể thay đổi sau khi khởi tạo."
            defaultValue="my-awesome-project"
            disabled
            className="w-full"
          />
        </ExampleSection>
      </ExampleGrid>

      <ExampleSection label="Thực tế sử dụng (Real-world Snippets)" description="Tuỳ biến Label với ReactNode để tạo các nhãn phức tạp." fullWidth
        codeString={`<InputPreset
  label={
    <span className="flex items-center gap-2">
      Mã API (API Key) <span className="rounded bg-destructive/20 px-1.5 py-0.5 text-[10px] font-semibold text-destructive uppercase">Bảo mật</span>
    </span>
  }
  type="password"
  description="Tuyệt đối không chia sẻ mã này với bất kỳ ai."
  defaultValue="sk_test_1234567890abcdef"
  className="w-full"
/>

<InputPreset
  label="Tìm kiếm nhanh"
  placeholder="Gõ từ khoá..."
  startAdornment={<SearchIcon className="size-4" />}
  endAdornment={
    <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
      <span className="text-xs">⌘</span>K
    </kbd>
  }
  className="w-full"
/>`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputPreset
            size={globalSize}
            label={
              <span className="flex items-center gap-2">
                Mã API (API Key) <span className="rounded bg-destructive/20 px-1.5 py-0.5 text-[10px] font-semibold text-destructive uppercase">Bảo mật</span>
              </span>
            }
            type="password"
            description="Tuyệt đối không chia sẻ mã này với bất kỳ ai."
            defaultValue="sk_test_1234567890abcdef"
            className="w-full"
          />

          <InputPreset
            size={globalSize}
            label="Tìm kiếm nhanh"
            placeholder="Gõ từ khoá..."
            startAdornment={<SearchIcon className="size-4" />}
            endAdornment={
              <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                <span className="text-xs">⌘</span>K
              </kbd>
            }
            className="w-full"
          />
        </div>
      </ExampleSection>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 2: Micro Content
// ──────────────────────────────────────────────────────────
function InputMicroShowcase({ globalSize }: { globalSize: Size }) {
  return (
    <div className="space-y-10 mt-6">
      <ShowcaseDocs>
        <DocsH3>Khi nào nên dùng Micro</DocsH3>
        <DocsP>
          Thành phần <DocsCode>Input</DocsCode> nguyên thuỷ chỉ là một thẻ <DocsCode>input</DocsCode> duy nhất. Để có được một Form Control đúng chuẩn WCAG, bạn cần phải tự bọc nó bằng <DocsCode>Field</DocsCode>, kết nối <DocsCode>FieldLabel</DocsCode> và <DocsCode>FieldDescription</DocsCode>.
        </DocsP>
        <DocsP>Dùng Micro khi bạn cần layout form dị biệt (ví dụ: label nằm ngang bên trái input) hoặc khi cần nhúng Input vào một component phức tạp (như dropdown tìm kiếm).</DocsP>
      </ShowcaseDocs>

      <ExampleGrid columns={2}>
        <ExampleSection label="Cơ bản (Primitive)" description="Thẻ input đơn giản không có nhãn.">
          <Input size={globalSize} placeholder="Nhập địa chỉ email..." className="w-full" />
        </ExampleSection>

        <ExampleSection label="Ghép nối với Field" description="Lắp ráp thủ công các thành phần Field để tạo form control.">
          <Field size={globalSize} className="w-full">
            <FieldLabel htmlFor="tf-input">Email</FieldLabel>
            <FieldDescription>Chúng tôi sẽ không bao giờ chia sẻ email của bạn.</FieldDescription>
            <FieldContent>
              <Input id="tf-input" size={globalSize} placeholder="you@example.com" />
            </FieldContent>
          </Field>
        </ExampleSection>
      </ExampleGrid>

      <ExampleGrid columns={2}>
        <ExampleSection label="Trạng thái Lỗi (Error)" description="Sử dụng thuộc tính aria-invalid để báo lỗi.">
          <Field size={globalSize} className="w-full">
            <FieldLabel htmlFor="tf-error">Tên tài khoản</FieldLabel>
            <FieldContent>
              <Input id="tf-error" size={globalSize} defaultValue="admin!@#" aria-invalid="true" />
            </FieldContent>
            <FieldError>Tên tài khoản không được chứa ký tự đặc biệt.</FieldError>
          </Field>
        </ExampleSection>

        <ExampleSection label="Input Group" description="Ghép nối với các Addon linh hoạt (Slot tuỳ ý)."
          codeString={`<Field size={globalSize} className="w-full">
  <FieldLabel htmlFor="tf-group">Trang cá nhân</FieldLabel>
  <FieldContent>
    <InputGroup size={globalSize}>
      <InputGroupAddon>
        <LinkIcon className="size-4 text-muted-foreground" />
      </InputGroupAddon>
      <InputGroupAddon>
        <InputGroupText>github.com/</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput id="tf-group" placeholder="username" />
    </InputGroup>
  </FieldContent>
</Field>
`}>
          <Field size={globalSize} className="w-full">
            <FieldLabel htmlFor="tf-group">Trang cá nhân</FieldLabel>
            <FieldContent>
              <InputGroup size={globalSize}>
                <InputGroupAddon>
                  <LinkIcon className="size-4 text-muted-foreground" />
                </InputGroupAddon>
                <InputGroupAddon>
                  <InputGroupText>github.com/</InputGroupText>
                </InputGroupAddon>
                <InputGroupInput id="tf-group" placeholder="username" />
              </InputGroup>
            </FieldContent>
          </Field>
        </ExampleSection>
      </ExampleGrid>

      <ExampleGrid columns={2}>
        <ExampleSection label="Input Kiểu Tệp (File)" description="Input có hỗ trợ style gốc cho type file.">
          <Input size={globalSize} type="file" className="w-full pt-0.5" />
        </ExampleSection>
        
        <ExampleSection label="Khóa (Disabled)" description="Trạng thái không thể tương tác.">
          <Input size={globalSize} disabled defaultValue="Chỉ đọc" className="w-full" />
        </ExampleSection>
      </ExampleGrid>

      <ExampleSection
        label="🧭 Use Case Comparison"
        description="Các kịch bản thực tế giúp bạn quyết định nên dùng Micro (Input / InputGroup) hay Macro (InputPreset)."
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
        <h3 className="mt-0.5 text-sm font-semibold text-foreground">Form thông thường</h3>
      </div>
    </div>
    <p className="text-xs text-muted-foreground leading-relaxed">
      Bạn cần một ô nhập <strong>"Tiêu đề"</strong> với label, gợi ý và có thể hiện lỗi. Bạn muốn viết càng ít code càng tốt.
    </p>
    <div className="rounded-lg bg-muted/50 p-3">
      <InputPreset
        size="sm"
        label="Tiêu đề bài viết"
        description="Tối đa 120 ký tự."
        placeholder="Nhập tiêu đề..."
        className="w-full"
      />
    </div>
    <div className="rounded-md border border-green-500/20 bg-green-500/5 px-3 py-2">
      <p className="text-xs font-medium text-green-700 dark:text-green-400">✅ Dùng <code className="font-mono">InputPreset</code> — Label + description + error tích hợp sẵn, chỉ 1 dòng code thay vì bọc Field loằng ngoằng.</p>
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
        <h3 className="mt-0.5 text-sm font-semibold text-foreground">Custom Layout</h3>
      </div>
    </div>
    <p className="text-xs text-muted-foreground leading-relaxed">
      Bạn cần ô nhập tiền tệ và chèn 1 button "Tối đa" vào góc phải của InputGroup. Macro chỉ hỗ trợ chuỗi chữ hoặc icon cơ bản.
    </p>
    <div className="rounded-lg bg-muted/50 p-3">
      <InputGroup size="sm" className="w-full pr-1">
        <InputGroupAddon>
          <InputGroupText>VND</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="0" type="number" />
        <button className="h-5 px-2 rounded-sm bg-primary/10 text-primary text-[10px] font-semibold hover:bg-primary/20 transition-colors ml-2">MAX</button>
      </InputGroup>
    </div>
    <div className="rounded-md border border-blue-500/20 bg-blue-500/5 px-3 py-2">
      <p className="text-xs font-medium text-blue-700 dark:text-blue-400">✅ Dùng <code className="font-mono">InputGroup</code> (Micro) — Toàn quyền kiểm soát slot addon, nhét bất cứ thứ gì vào.</p>
    </div>
  </div>
</div>
`}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Story 1: Macro wins */}
          <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 shrink-0 rounded-full bg-green-500/10 p-1.5 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Story 1 · Dùng Macro</p>
                <h3 className="mt-0.5 text-sm font-semibold text-foreground">Form thông thường</h3>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Bạn cần một ô nhập <strong>"Tiêu đề"</strong> với label, gợi ý và có thể hiện lỗi. Bạn muốn viết càng ít code càng tốt.
            </p>
            <div className="rounded-lg bg-muted/50 p-3">
              <InputPreset
                size="sm"
                label="Tiêu đề bài viết"
                description="Tối đa 120 ký tự."
                placeholder="Nhập tiêu đề..."
                className="w-full"
              />
            </div>
            <div className="rounded-md border border-green-500/20 bg-green-500/5 px-3 py-2">
              <p className="text-xs font-medium text-green-700 dark:text-green-400">✅ Dùng <code className="font-mono">InputPreset</code> — Label + description + error tích hợp sẵn, chỉ 1 dòng code thay vì bọc Field loằng ngoằng.</p>
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
                <h3 className="mt-0.5 text-sm font-semibold text-foreground">Custom Layout</h3>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Bạn cần ô nhập tiền tệ và chèn 1 button "Tối đa" vào góc phải của InputGroup. Macro chỉ hỗ trợ chuỗi chữ hoặc icon cơ bản.
            </p>
            <div className="rounded-lg bg-muted/50 p-3">
              <InputGroup size="sm" className="w-full pr-1">
                <InputGroupAddon>
                  <InputGroupText>VND</InputGroupText>
                </InputGroupAddon>
                <InputGroupInput placeholder="0" type="number" />
                <button className="h-5 px-2 rounded-sm bg-primary/10 text-primary text-[10px] font-semibold hover:bg-primary/20 transition-colors ml-2">MAX</button>
              </InputGroup>
            </div>
            <div className="rounded-md border border-blue-500/20 bg-blue-500/5 px-3 py-2">
              <p className="text-xs font-medium text-blue-700 dark:text-blue-400">✅ Dùng <code className="font-mono">InputGroup</code> (Micro) — Toàn quyền kiểm soát slot addon, nhét bất cứ thứ gì vào.</p>
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
export default function InputShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <Showcase
      title="Input"
      description="Trường nhập văn bản cho phép người dùng điền dữ liệu."
      actions={
        <MonoSelect
          value={globalSize}
          onValueChange={(v) => setGlobalSize(v as Size)}
          options={[
            { value: "sm", label: "Size: sm" },
            { value: "md", label: "Size: md" },
            { value: "lg", label: "Size: lg" },
          ]}
        />
      }
      tabs={[
        { label: "Micro (Primitive)", content: <InputMicroShowcase globalSize={globalSize} /> },
        { label: "Macro (Preset)", content: <InputMacroShowcase globalSize={globalSize} /> },
      ]}
    />
  );
}
