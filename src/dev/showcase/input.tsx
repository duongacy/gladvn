import { LinkIcon, SearchIcon } from "lucide-react";

import { InputPreset } from "../../components/macro/input-preset";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldLabel
} from "../../components/micro/field";
import { Input } from "../../components/micro/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText
} from "../../components/micro/input-group";
import { useDevContext } from "../../dev/components/dev-context";
import {
  DocsCode,
  DocsH3,
  DocsLi,
  DocsP,
  DocsUl,
  ExampleGrid,
  ShowcaseExample,
  Showcase,
  ShowcaseDocs
} from "../../dev/components/showcase";
import { type Size } from "../../lib/types";

function InputMacroShowcase({ globalSize }: { globalSize: Size }) {
  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample title="Tiêu chuẩn" description="Trường nhập văn bản hoàn chỉnh có nhãn và mô tả." code={`<InputPreset
  size="${globalSize}"
  label="Tên đăng nhập"
  description="Đây sẽ là tên hiển thị công khai của bạn."
  placeholder="johndoe"
  className="w-full"
/>
`} preview={
                      <>
              <InputPreset
                          size={globalSize}
                          label="Tên đăng nhập"
                          description="Đây sẽ là tên hiển thị công khai của bạn."
                          placeholder="johndoe"
                          className="w-full"
                        />
                      </>
                    } />

        <ShowcaseExample title="Lỗi xác thực (Validation Error)" description="Hiển thị thông báo lỗi và viền đỏ báo hiệu khi truyền errorMessage." code={`<InputPreset
  size="${globalSize}"
  label="Mật khẩu"
  type="password"
  placeholder="Nhập mật khẩu..."
  errorMessage="Mật khẩu phải chứa ít nhất 8 ký tự."
  className="w-full"
/>
`} preview={
                      <>
              <InputPreset
                          size={globalSize}
                          label="Mật khẩu"
                          type="password"
                          placeholder="Nhập mật khẩu..."
                          errorMessage="Mật khẩu phải chứa ít nhất 8 ký tự."
                          className="w-full"
                        />
                      </>
                    } />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample title="Với Tiền tố / Hậu tố (Adornments)" description="Tự động bọc bằng InputGroup, có thể truyền chuỗi hoặc icon." code={`<InputPreset
  size="${globalSize}"
  label="Website URL"
  type="url"
  placeholder="example"
  startAdornment="https://"
  endAdornment=".com"
  className="w-full"
/>
`} preview={
                      <>
              <InputPreset
                          size={globalSize}
                          label="Website URL"
                          type="url"
                          placeholder="example"
                          startAdornment="https://"
                          endAdornment=".com"
                          className="w-full"
                        />
                      </>
                    } />

        <ShowcaseExample title="Khóa / Bất hoạt (Disabled)" description="Người dùng không thể tương tác với form." code={`<InputPreset
  size="${globalSize}"
  label="Tên dự án"
  description="Tên dự án không thể thay đổi sau khi khởi tạo."
  defaultValue="my-awesome-project"
  disabled
  className="w-full"
/>
`} preview={
                      <>
              <InputPreset
                          size={globalSize}
                          label="Tên dự án"
                          description="Tên dự án không thể thay đổi sau khi khởi tạo."
                          defaultValue="my-awesome-project"
                          disabled
                          className="w-full"
                        />
                      </>
                    } />
      </ExampleGrid>

      <ShowcaseExample title="Thực tế sử dụng (Real-world Snippets)" description="Tuỳ biến Label với ReactNode để tạo các nhãn phức tạp." code={`<InputPreset
  size="${globalSize}"
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
  size="${globalSize}"
  label="Tìm kiếm nhanh"
  placeholder="Gõ từ khoá..."
  startAdornment={<SearchIcon className="size-4" />}
  endAdornment={
    <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
      <span className="text-xs">⌘</span>K
    </kbd>
  }
  className="w-full"
/>`} preview={
                  <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputPreset
                      size={globalSize}
                      label={
                        <span className="flex items-center gap-2">
                          Mã API (API Key){" "}
                          <span className="rounded bg-destructive/20 px-1.5 py-0.5 text-[10px] font-semibold text-destructive uppercase">
                            Bảo mật
                          </span>
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
                        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                          <span className="text-xs">⌘</span>K
                        </kbd>
                      }
                      className="w-full"
                    />
                  </div>
                  </>
                } />
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 2: Micro Content
// ──────────────────────────────────────────────────────────
function InputMicroShowcase({ globalSize }: { globalSize: Size }) {
  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample title="Cơ bản (Primitive)" description="Thẻ input đơn giản không có nhãn." code={`<Input
  size="${globalSize}"
  placeholder="Nhập địa chỉ email..."
  className="w-full"
/>
`} preview={
                      <>
              <Input
                          size={globalSize}
                          placeholder="Nhập địa chỉ email..."
                          className="w-full"
                        />
                      </>
                    } />

        <ShowcaseExample title="Ghép nối với Field" description="Lắp ráp thủ công các thành phần Field để tạo form control." code={`<Field size="${globalSize}" className="w-full">
  <FieldLabel htmlFor="tf-input">Email</FieldLabel>
  <FieldDescription>
    Chúng tôi sẽ không bao giờ chia sẻ email của bạn.
  </FieldDescription>
  <FieldContent>
    <Input
      id="tf-input"
      size="${globalSize}"
      placeholder="you@example.com"
    />
  </FieldContent>
</Field>
`} preview={
                      <>
              <Field size={globalSize} className="w-full">
                          <FieldLabel htmlFor="tf-input">Email</FieldLabel>
                          <FieldDescription>
                            Chúng tôi sẽ không bao giờ chia sẻ email của bạn.
                          </FieldDescription>
                          <FieldContent>
                            <Input
                              id="tf-input"
                              size={globalSize}
                              placeholder="you@example.com"
                            />
                          </FieldContent>
                        </Field>
                      </>
                    } />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample title="Trạng thái Lỗi (Error)" description="Sử dụng thuộc tính aria-invalid để báo lỗi." code={`<Field size="${globalSize}" className="w-full">
  <FieldLabel htmlFor="tf-error">Tên tài khoản</FieldLabel>
  <FieldContent>
    <Input
      id="tf-error"
      size="${globalSize}"
      defaultValue="admin!@#"
      aria-invalid="true"
    />
  </FieldContent>
  <FieldError>
    Tên tài khoản không được chứa ký tự đặc biệt.
  </FieldError>
</Field>
`} preview={
                      <>
              <Field size={globalSize} className="w-full">
                          <FieldLabel htmlFor="tf-error">Tên tài khoản</FieldLabel>
                          <FieldContent>
                            <Input
                              id="tf-error"
                              size={globalSize}
                              defaultValue="admin!@#"
                              aria-invalid="true"
                            />
                          </FieldContent>
                          <FieldError>
                            Tên tài khoản không được chứa ký tự đặc biệt.
                          </FieldError>
                        </Field>
                      </>
                    } />

        <ShowcaseExample title="Input Group" description="Ghép nối với các Addon linh hoạt (Slot tuỳ ý)." code={`<Field size="${globalSize}" className="w-full">
  <FieldLabel htmlFor="tf-group">Trang cá nhân</FieldLabel>
  <FieldContent>
    <InputGroup size="${globalSize}">
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
`} preview={
                      <>
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
                      </>
                    } />
      </ExampleGrid>
      <ShowcaseExample title="Input Kiểu Tệp (File)" description="Input có hỗ trợ style gốc cho type file." code={`<Input size="${globalSize}" type="file" className="w-full pt-0.5" />
`} preview={
                  <>
          <Input size={globalSize} type="file" className="w-full pt-0.5" />
                  </>
                } />

      <ShowcaseExample title="Khóa (Disabled)" description="Trạng thái không thể tương tác." code={`<Input
  size="${globalSize}"
  disabled
  defaultValue="Chỉ đọc"
  className="w-full"
/>
`} preview={
                  <>
          <Input
                    size={globalSize}
                    disabled
                    defaultValue="Chỉ đọc"
                    className="w-full"
                  />
                  </>
                } />
      <ShowcaseExample title="🧭 So sánh Use Case" description="So sánh nhanh khi nào dùng Micro và Macro." code={`<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
            Form nhập liệu tiêu chuẩn
          </h3>
        </div>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed">
        Khi bạn cần một trường nhập liệu đầy đủ nhãn
        (Label), mô tả (Description), báo lỗi (Error) mà
        không muốn phải lắp ráp thủ công bằng{" "}
        <DocsCode>Field</DocsCode>.
      </p>
    </div>

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
            Input nằm trong Navbar hoặc Toolbar
          </h3>
        </div>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed">
        Chỉ cần một thẻ <DocsCode>Input</DocsCode> đơn giản
        để tìm kiếm nhanh, không cần nhãn hay mô tả cầu kỳ,
        hoặc khi phải nhúng nó vào một component phức tạp
        khác.
      </p>
    </div>
  </div>`} preview={
                  <>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
                            Form nhập liệu tiêu chuẩn
                          </h3>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Khi bạn cần một trường nhập liệu đầy đủ nhãn (Label), mô tả
                        (Description), báo lỗi (Error) mà không muốn phải lắp ráp thủ công
                        bằng <DocsCode>Field</DocsCode>.
                      </p>
                    </div>

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
                            Input nằm trong Navbar hoặc Toolbar
                          </h3>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Chỉ cần một thẻ <DocsCode>Input</DocsCode> đơn giản để tìm kiếm
                        nhanh, không cần nhãn hay mô tả cầu kỳ, hoặc khi phải nhúng nó vào
                        một component phức tạp khác.
                      </p>
                    </div>
                  </div>
                  </>
                } />
    </div>
  );
}

// ──────────────────────────────────────────────────────────
export default function InputShowcase() {
  const { size: globalSize } = useDevContext();
  return (
    <Showcase
      title="Input"
      description="Trường nhập văn bản cho phép người dùng điền dữ liệu."
      

      micro={{ content: <InputMicroShowcase globalSize={globalSize} /> }}
      macro={{ content: <InputMacroShowcase globalSize={globalSize} /> }}
    />
  );
}
