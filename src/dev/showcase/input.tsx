import { LinkIcon, SearchIcon } from "lucide-react";

import { InputPreset } from "../../components/macro/input-preset";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "../../components/micro/field";
import { Input } from "../../components/micro/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "../../components/micro/input-group";
import { useDevContext, useI18n } from "../../dev/components/dev-context";
import {
  DocsCode,
  DocsP,
  ExampleGrid,
  Showcase,
  ShowcaseExample,
} from "../../dev/components/showcase";
import { type Size } from "../../lib/types";

function InputMacroShowcase({ globalSize }: { globalSize: Size }) {
  const t = useI18n();
  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample
          title={t("Tiêu chuẩn", "Standard")}
          description={t(
            "Trường nhập văn bản hoàn chỉnh có nhãn và mô tả.",
            "Complete text input field with label and description.",
          )}
          code={`<InputPreset
  size="${globalSize}"
  label="Username"
  description="This will be your public display name."
  placeholder="johndoe"
  className="w-full"
/>
`}
          preview={
            <>
              <InputPreset
                size={globalSize}
                label="Username"
                description="This will be your public display name."
                placeholder="johndoe"
                className="w-full"
              />
            </>
          }
        />

        <ShowcaseExample
          title={t("Lỗi xác thực (Validation Error)", "Validation Error")}
          description={t(
            "Hiển thị thông báo lỗi và viền đỏ báo hiệu khi truyền errorMessage.",
            "Display error message and red border when errorMessage is passed.",
          )}
          code={`<InputPreset
  size="${globalSize}"
  label="Password"
  type="password"
  placeholder="Enter password..."
  errorMessage="Password must contain at least 8 characters."
  className="w-full"
/>
`}
          preview={
            <>
              <InputPreset
                size={globalSize}
                label="Password"
                type="password"
                placeholder="Enter password..."
                errorMessage="Password must contain at least 8 characters."
                className="w-full"
              />
            </>
          }
        />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample
          title={t("Với Tiền tố / Hậu tố (Adornments)", "With Adornments")}
          description={t(
            "Tự động bọc bằng InputGroup, có thể truyền chuỗi hoặc icon.",
            "Automatically wrapped with InputGroup, can pass string or icon.",
          )}
          code={`<InputPreset
  size="${globalSize}"
  label="Website URL"
  type="url"
  placeholder="example"
  startAdornment="https://"
  endAdornment=".com"
  className="w-full"
/>
`}
          preview={
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
          }
        />

        <ShowcaseExample
          title={t("Khóa / Bất hoạt (Disabled)", "Disabled")}
          description={t(
            "Người dùng không thể tương tác với form.",
            "User cannot interact with the form.",
          )}
          code={`<InputPreset
  size="${globalSize}"
  label="Project Name"
  description="Project name cannot be changed after creation."
  defaultValue="my-awesome-project"
  disabled
  className="w-full"
/>
`}
          preview={
            <>
              <InputPreset
                size={globalSize}
                label="Project Name"
                description="Project name cannot be changed after creation."
                defaultValue="my-awesome-project"
                disabled
                className="w-full"
              />
            </>
          }
        />
      </ExampleGrid>

      <ShowcaseExample
        title={t(
          "Thực tế sử dụng (Real-world Snippets)",
          "Real-world Snippets",
        )}
        description={t(
          "Tuỳ biến Label với ReactNode để tạo các nhãn phức tạp.",
          "Customize Label with ReactNode to create complex labels.",
        )}
        code={`<InputPreset
  size="${globalSize}"
  label={
    <span className="flex items-center gap-2">
      API Key <span className="rounded bg-destructive/20 px-1.5 py-0.5 text-[10px] font-semibold text-destructive uppercase">Secure</span>
    </span>
  }
  type="password"
  description="Never share this key with anyone."
  defaultValue="sk_test_1234567890abcdef"
  className="w-full"
/>

<InputPreset
  size="${globalSize}"
  label="Quick Search"
  placeholder="Type keyword..."
  startAdornment={<SearchIcon className="size-4" />}
  endAdornment={
    <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
      <span className="text-xs">⌘</span>K
    </kbd>
  }
  className="w-full"
/>`}
        preview={
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputPreset
                size={globalSize}
                label={
                  <span className="flex items-center gap-2">
                    API Key{" "}
                    <span className="rounded bg-destructive/20 px-1.5 py-0.5 text-[10px] font-semibold text-destructive uppercase">
                      Secure
                    </span>
                  </span>
                }
                type="password"
                description="Never share this key with anyone."
                defaultValue="sk_test_1234567890abcdef"
                className="w-full"
              />

              <InputPreset
                size={globalSize}
                label="Quick Search"
                placeholder="Type keyword..."
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
        }
      />
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 2: Micro Content
// ──────────────────────────────────────────────────────────
function InputMicroShowcase({ globalSize }: { globalSize: Size }) {
  const t = useI18n();
  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample
          title={t("Cơ bản (Primitive)", "Primitive")}
          description={t(
            "Thẻ input đơn giản không có nhãn.",
            "Simple input tag without a label.",
          )}
          code={`<Input
  size="${globalSize}"
  placeholder="Enter email address..."
  className="w-full"
/>
`}
          preview={
            <>
              <Input
                size={globalSize}
                placeholder="Enter email address..."
                className="w-full"
              />
            </>
          }
        />

        <ShowcaseExample
          title={t("Ghép nối với Field", "Composed with Field")}
          description={t(
            "Lắp ráp thủ công các thành phần Field để tạo form control.",
            "Manually assemble Field components to create a form control.",
          )}
          code={`<Field size="${globalSize}" className="w-full">
  <FieldLabel htmlFor="tf-input">Email</FieldLabel>
  <FieldDescription>
    We will never share your email.
  </FieldDescription>
  <FieldContent>
    <Input
      id="tf-input"
      size="${globalSize}"
      placeholder="you@example.com"
    />
  </FieldContent>
</Field>
`}
          preview={
            <>
              <Field size={globalSize} className="w-full">
                <FieldLabel htmlFor="tf-input">Email</FieldLabel>
                <FieldDescription>
                  We will never share your email.
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
          }
        />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample
          title={t("Trạng thái Lỗi (Error)", "Error State")}
          description={t(
            "Sử dụng thuộc tính aria-invalid để báo lỗi.",
            "Use the aria-invalid attribute to indicate an error.",
          )}
          code={`<Field size="${globalSize}" className="w-full">
  <FieldLabel htmlFor="tf-error">Username</FieldLabel>
  <FieldContent>
    <Input
      id="tf-error"
      size="${globalSize}"
      defaultValue="admin!@#"
      aria-invalid="true"
    />
  </FieldContent>
  <FieldError>
    Username cannot contain special characters.
  </FieldError>
</Field>
`}
          preview={
            <>
              <Field size={globalSize} className="w-full">
                <FieldLabel htmlFor="tf-error">Username</FieldLabel>
                <FieldContent>
                  <Input
                    id="tf-error"
                    size={globalSize}
                    defaultValue="admin!@#"
                    aria-invalid="true"
                  />
                </FieldContent>
                <FieldError>
                  Username cannot contain special characters.
                </FieldError>
              </Field>
            </>
          }
        />

        <ShowcaseExample
          title={t("Input Group", "Input Group")}
          description={t(
            "Ghép nối với các Addon linh hoạt (Slot tuỳ ý).",
            "Composed with flexible Addons (arbitrary Slots).",
          )}
          code={`<Field size="${globalSize}" className="w-full">
  <FieldLabel htmlFor="tf-group">Profile Page</FieldLabel>
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
`}
          preview={
            <>
              <Field size={globalSize} className="w-full">
                <FieldLabel htmlFor="tf-group">Profile Page</FieldLabel>
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
          }
        />
      </ExampleGrid>
      <ShowcaseExample
        title={t("Input Kiểu Tệp (File)", "File Input")}
        description={t(
          "Input có hỗ trợ style gốc cho type file.",
          "Input supports native styling for type file.",
        )}
        code={`<Input size="${globalSize}" type="file" className="w-full pt-0.5" />
`}
        preview={
          <>
            <Input size={globalSize} type="file" className="w-full pt-0.5" />
          </>
        }
      />

      <ShowcaseExample
        title={t("Khóa (Disabled)", "Disabled")}
        description={t(
          "Trạng thái không thể tương tác.",
          "State that cannot be interacted with.",
        )}
        code={`<Input
  size="${globalSize}"
  disabled
  defaultValue="Read-only"
  className="w-full"
/>
`}
        preview={
          <>
            <Input
              size={globalSize}
              disabled
              defaultValue="Read-only"
              className="w-full"
            />
          </>
        }
      />
    </div>
  );
}

// ──────────────────────────────────────────────────────────
export default function InputShowcase() {
  const { size: globalSize } = useDevContext();
  const t = useI18n();
  return (
    <Showcase
      title="Input"
      description={t(
        "Trường nhập văn bản cho phép người dùng điền dữ liệu.",
        "Text input field that allows users to enter data.",
      )}

      micro={{ content: <InputMicroShowcase globalSize={globalSize} /> }}
      macro={{ content: <InputMacroShowcase globalSize={globalSize} /> }}
    />
  );
}
