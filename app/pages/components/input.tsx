import React from "react";
import { LinkIcon, SearchIcon } from "lucide-react";

import { InputPreset } from "@/components/macro/input-preset";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/micro/field";
import { Input } from "@/components/micro/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/micro/input-group";
import { useDevContext, useI18n } from "~app/components/dev-context";
import {
  ConfigurableShowcase,
  ShowcaseDocs,
  DocsP,
} from "~app/components/showcase";

function useInputExamples() {
  const t = useI18n();
  const { size: globalSize } = useDevContext();

  return React.useMemo(
    () => [
      {
        title: t("Cơ bản", "Primitive"),
        description: t(
          "Thẻ input đơn giản không có nhãn.",
          "Simple input tag without a label."
        ),
        microCode: `<Input placeholder="Enter email address..." className="w-full" />`,
        microPreview: (
          <Input
            size={globalSize}
            placeholder="Enter email address..."
            className="w-full"
          />
        ),
      },
      {
        title: t("Tiêu chuẩn", "Standard"),
        description: t(
          "Trường nhập văn bản hoàn chỉnh có nhãn và mô tả.",
          "Complete text input field with label and description."
        ),
        macroCode: `<InputPreset
  label="Username"
  description="This will be your public display name."
  placeholder="johndoe"
  className="w-full"
/>`,
        macroPreview: (
          <InputPreset
            size={globalSize}
            label="Username"
            description="This will be your public display name."
            placeholder="johndoe"
            className="w-full"
          />
        ),
        microCode: `<Field className="w-full">
  <FieldLabel htmlFor="tf-input">Email</FieldLabel>
  <FieldDescription>
    We will never share your email.
  </FieldDescription>
  <FieldContent>
    <Input
      id="tf-input"
      placeholder="you@example.com"
    />
  </FieldContent>
</Field>`,
        microPreview: (
          <Field size={globalSize} className="w-full">
            <FieldLabel htmlFor="tf-input">Email</FieldLabel>
            <FieldDescription>We will never share your email.</FieldDescription>
            <FieldContent>
              <Input
                id="tf-input"
                size={globalSize}
                placeholder="you@example.com"
              />
            </FieldContent>
          </Field>
        ),
      },
      {
        title: t("Lỗi xác thực", "Validation Error"),
        description: t(
          "Hiển thị thông báo lỗi và viền đỏ báo hiệu khi có lỗi.",
          "Display error message and red border on error."
        ),
        macroCode: `<InputPreset
  label="Password"
  type="password"
  placeholder="Enter password..."
  errorMessage="Password must contain at least 8 characters."
  className="w-full"
/>`,
        macroPreview: (
          <InputPreset
            size={globalSize}
            label="Password"
            type="password"
            placeholder="Enter password..."
            errorMessage="Password must contain at least 8 characters."
            className="w-full"
          />
        ),
        microCode: `<Field className="w-full">
  <FieldLabel htmlFor="tf-error">Username</FieldLabel>
  <FieldContent>
    <Input
      id="tf-error"
      defaultValue="admin!@#"
      aria-invalid="true"
    />
  </FieldContent>
  <FieldError>
    Username cannot contain special characters.
  </FieldError>
</Field>`,
        microPreview: (
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
        ),
      },
      {
        title: t("Với Tiền tố / Hậu tố", "With Adornments"),
        description: t(
          "Hỗ trợ các thành phần gắn thêm vào đầu hoặc cuối ô nhập liệu.",
          "Supports components attached to the beginning or end of the input."
        ),
        macroCode: `<InputPreset
  label="Website URL"
  type="url"
  placeholder="example"
  startAdornment="https://"
  endAdornment=".com"
  className="w-full"
/>`,
        macroPreview: (
          <InputPreset
            size={globalSize}
            label="Website URL"
            type="url"
            placeholder="example"
            startAdornment="https://"
            endAdornment=".com"
            className="w-full"
          />
        ),
        microCode: `<Field className="w-full">
  <FieldLabel htmlFor="tf-group">Profile Page</FieldLabel>
  <FieldContent>
    <InputGroup>
      <InputGroupAddon>
        <LinkIcon className="size-4 text-muted-foreground" />
      </InputGroupAddon>
      <InputGroupAddon>
        <InputGroupText>github.com/</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput id="tf-group" placeholder="username" />
    </InputGroup>
  </FieldContent>
</Field>`,
        microPreview: (
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
        ),
      },
      {
        title: t("Thực tế sử dụng", "Real-world Snippets"),
        description: t(
          "Tuỳ biến Label với ReactNode để tạo các nhãn phức tạp.",
          "Customize Label with ReactNode to create complex labels."
        ),
        macroCode: `<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
  <InputPreset
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
</div>`,
        macroPreview: (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
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
        ),
      },
      {
        title: t("Input Kiểu Tệp", "File Input"),
        description: t(
          "Input có hỗ trợ style gốc cho type file.",
          "Input supports native styling for type file."
        ),
        microCode: `<Input type="file" className="w-full pt-0.5" />`,
        microPreview: (
          <Input size={globalSize} type="file" className="w-full pt-0.5" />
        ),
      },
      {
        title: t("Khóa", "Disabled"),
        description: t(
          "Trạng thái không thể tương tác.",
          "State that cannot be interacted with."
        ),
        macroCode: `<InputPreset
  label="Project Name"
  description="Project name cannot be changed after creation."
  defaultValue="my-awesome-project"
  disabled
  className="w-full"
/>`,
        macroPreview: (
          <InputPreset
            size={globalSize}
            label="Project Name"
            description="Project name cannot be changed after creation."
            defaultValue="my-awesome-project"
            disabled
            className="w-full"
          />
        ),
        microCode: `<Input disabled defaultValue="Read-only" className="w-full" />`,
        microPreview: (
          <Input
            size={globalSize}
            disabled
            defaultValue="Read-only"
            className="w-full"
          />
        ),
      },
    ],
    [t, globalSize]
  );
}

export default function InputShowcase() {
  const t = useI18n();
  const examples = useInputExamples();

  return (
    <ConfigurableShowcase
      title="Input"
      description={t(
        "Trường nhập văn bản cho phép người dùng điền dữ liệu.",
        "Text input field that allows users to enter data."
      )}
      guideline={
        <ShowcaseDocs>
          <DocsP>
            {t(
              "Sử dụng Input cho các dữ liệu văn bản ngắn như tên, email, mật khẩu.",
              "Use Input for short text data like name, email, password."
            )}
          </DocsP>
        </ShowcaseDocs>
      }
      examples={examples}
    />
  );
}
