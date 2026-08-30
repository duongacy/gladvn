import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

import { SelectPreset } from "@/components/macro/select-preset";
import { Button } from "@/components/micro/button";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/micro/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/micro/select";
import { useI18n, useDevContext } from "~app/components/dev-context";
import {
  ConfigurableShowcase,
  ShowcaseDocs,
  DocsP,
} from "~app/components/showcase";
import { type Size } from "@/lib/types";

const formSchema = z.object({
  language: z.string().min(1, "Please select a language."),
});
type FormValues = z.infer<typeof formSchema>;

function SelectForm({ size }: { size: Size }) {
  const t = useI18n();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { language: "" },
  });

  return (
    <form
      onSubmit={form.handleSubmit((v) => alert(JSON.stringify(v)))}
      className="w-full space-y-6"
    >
      <Controller
        control={form.control}
        name="language"
        render={({ field, fieldState }) => (
          <SelectPreset
            size={size}
            label="Language"
            description="The interface language you want to use."
            placeholder="Select a language..."
            options={[
              { value: "en", label: "English" },
              { value: "vi", label: "Vietnamese" },
              { value: "fr", label: "French" },
            ]}
            value={field.value}
            onValueChange={field.onChange}
            errorMessage={fieldState.error?.message}
          />
        )}
      />
      <Button type="submit" size={size}>
        Submit
      </Button>
    </form>
  );
}

const rhfCode = `const formSchema = z.object({ language: z.string().min(1, "Selection is required") });

function SelectForm({ size }: { size: Size }) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { language: "" } });

  return (
    <form onSubmit={form.handleSubmit(console.log)} className="space-y-6">
      <Controller
        control={form.control}
        name="language"
        render={({ field, fieldState }) => (
          <SelectPreset
            size={size}
            label="Ngôn ngữ"
            placeholder="Select language..."
            options={[
              { value: "en", label: "English" },
              { value: "vi", label: "Vietnamese" }
            ]}
            value={field.value}
            onValueChange={field.onChange}
            errorMessage={fieldState.error?.message}
          />
        )}
      />
      <Button type="submit" size={size}>Submit</Button>
    </form>
  );
}`;

function useSelectExamples() {
  const t = useI18n();
  const { size: globalSize } = useDevContext();

  return React.useMemo(
    () => [
      {
        title: t("Tiêu chuẩn", "Standard"),
        description: t(
          "Trình thả xuống cơ bản với mảng options.",
          "Basic dropdown with options array."
        ),
        macroCode: `<SelectPreset
  className="w-full"
  label="Favorite fruit"
  description="Choose a fruit you like best."
  placeholder="Select a fruit..."
  options={[
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "cherry", label: "Cherry" },
  ]}
/>`,
        macroPreview: (
          <SelectPreset
            className="w-full"
            size={globalSize}
            label="Favorite fruit"
            description="Choose a fruit you like best."
            placeholder="Select a fruit..."
            options={[
              { value: "apple", label: "Apple" },
              { value: "banana", label: "Banana" },
              { value: "cherry", label: "Cherry" },
            ]}
          />
        ),
        microCode: `<Field className="w-full">
  <FieldLabel>Framework</FieldLabel>
  <FieldContent>
    <Select
      items={{
        next: "Next.js",
        vite: "Vite",
        remix: "Remix" }}
    >
      <SelectTrigger>
        <SelectValue placeholder="Chọn framework..." />
      </SelectTrigger>
      
        <SelectContent>
          <SelectScrollUpButton />
          <SelectItem value="next">Next.js</SelectItem>
          <SelectItem value="vite">Vite</SelectItem>
          <SelectItem value="remix">Remix</SelectItem>
          <SelectScrollDownButton />
        </SelectContent>
      
    </Select>
  </FieldContent>
  <FieldDescription>
    Choose the technology you want to use.
  </FieldDescription>
</Field>`,
        microPreview: (
          <Field size={globalSize} className="w-full">
            <FieldLabel>Framework</FieldLabel>
            <FieldContent>
              <Select items={{ next: "Next.js", vite: "Vite", remix: "Remix" }}>
                <SelectTrigger size={globalSize}>
                  <SelectValue placeholder="Chọn framework..." />
                </SelectTrigger>

                <SelectContent>
                  <SelectScrollUpButton />
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="vite">Vite</SelectItem>
                  <SelectItem value="remix">Remix</SelectItem>
                  <SelectScrollDownButton />
                </SelectContent>
              </Select>
            </FieldContent>
            <FieldDescription>
              Choose the technology you want to use.
            </FieldDescription>
          </Field>
        ),
      },
      {
        title: t("Trạng thái Lỗi", "Error State"),
        description: t(
          "Báo lỗi khi form submit mà user chưa chọn hoặc tạo trạng thái lỗi thủ công.",
          "Shows error when form is submitted without selection or creates a manual error state."
        ),
        macroCode: `<div className="w-full flex flex-col gap-6">
  <SelectPreset
    label="Framework (Error)"
    placeholder="Select a framework..."
    options={[
      { value: "react", label: "React" },
      { value: "vue", label: "Vue" },
    ]}
    errorMessage="Please select a framework to continue."
  />
</div>`,
        macroPreview: (
          <div className="w-full flex flex-col gap-6">
            <SelectPreset
              size={globalSize}
              label="Framework (Error)"
              placeholder="Select a framework..."
              options={[
                { value: "react", label: "React" },
                { value: "vue", label: "Vue" },
              ]}
              errorMessage="Please select a framework to continue."
            />
          </div>
        ),
        microCode: `<Field data-invalid={true} className="w-full">
  <FieldLabel>Project</FieldLabel>
  <FieldContent>
    <Select items={{ p1: "Project 1" }}>
      <SelectTrigger aria-invalid={true}>
        <SelectValue placeholder="Select a project..." />
      </SelectTrigger>
      
        <SelectContent>
          <SelectItem value="p1">Project 1</SelectItem>
        </SelectContent>
      
    </Select>
  </FieldContent>
  <FieldError>Please select a valid project.</FieldError>
</Field>`,
        microPreview: (
          <Field size={globalSize} data-invalid={true} className="w-full">
            <FieldLabel>Project</FieldLabel>
            <FieldContent>
              <Select items={{ p1: "Project 1" }}>
                <SelectTrigger size={globalSize} aria-invalid={true}>
                  <SelectValue placeholder="Select a project..." />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="p1">Project 1</SelectItem>
                </SelectContent>
              </Select>
            </FieldContent>
            <FieldError>Please select a valid project.</FieldError>
          </Field>
        ),
      },
      {
        title: t("Khóa / Bất hoạt", "Disabled"),
        description: t(
          "Người dùng không thể mở danh sách.",
          "Users cannot open the list."
        ),
        macroCode: `<SelectPreset
  className="w-full"
  label="Account Plan"
  description="You cannot change your plan until outstanding debt is paid."
  placeholder="Select plan..."
  value="pro"
  options={[
    { value: "basic", label: "Basic (Free)" },
    { value: "pro", label: "Professional (Pro)" },
  ]}
  disabled
/>`,
        macroPreview: (
          <SelectPreset
            className="w-full"
            size={globalSize}
            label="Account Plan"
            description="You cannot change your plan until outstanding debt is paid."
            placeholder="Select plan..."
            value="pro"
            options={[
              { value: "basic", label: "Basic (Free)" },
              { value: "pro", label: "Professional (Pro)" },
            ]}
            disabled
          />
        ),
        microCode: `<Field className="w-full">
  <FieldLabel>Timezone</FieldLabel>
  <FieldContent>
    <Select items={{ gmt: "GMT+7" }}>
      <SelectTrigger disabled>
        <SelectValue placeholder="Select timezone..." />
      </SelectTrigger>
      
        <SelectContent>
          <SelectItem value="gmt">
            GMT+7 (Indochina Time)
          </SelectItem>
        </SelectContent>
      
    </Select>
  </FieldContent>
  <FieldDescription>
    Timezone is automatically retrieved from the system.
  </FieldDescription>
</Field>`,
        microPreview: (
          <Field size={globalSize} className="w-full">
            <FieldLabel>Timezone</FieldLabel>
            <FieldContent>
              <Select items={{ gmt: "GMT+7" }}>
                <SelectTrigger size={globalSize} disabled>
                  <SelectValue placeholder="Select timezone..." />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="gmt">GMT+7 (Indochina Time)</SelectItem>
                </SelectContent>
              </Select>
            </FieldContent>
            <FieldDescription>
              Timezone is automatically retrieved from the system.
            </FieldDescription>
          </Field>
        ),
      },
      {
        title: t("Nhãn phức tạp", "Custom Label"),
        description: t(
          "Truyền React Node vào Label để tạo giao diện phong phú.",
          "Pass a React Node to Label to create rich interfaces."
        ),
        macroCode: `<SelectPreset
  label={
    <span className="flex items-center gap-2">
      Country of Residence
      <span className="text-destructive">*</span>
    </span>
  }
  description="This info is used for tax purposes and must match the billing address."
  placeholder="Select country..."
  options={[
    { value: "us", label: "United States" },
    { value: "vn", label: "Vietnam" },
  ]}
/>
`,
        macroPreview: (
          <SelectPreset
            size={globalSize}
            label={
              <span className="flex items-center gap-2">
                Country of Residence
                <span className="text-destructive">*</span>
              </span>
            }
            description="This info is used for tax purposes and must match the billing address."
            placeholder="Select country..."
            options={[
              { value: "us", label: "United States" },
              { value: "vn", label: "Vietnam" },
            ]}
          />
        ),
      },
      {
        title: t("Phân nhóm", "Grouped"),
        description: t(
          "Sử dụng SelectGroup, SelectLabel và SelectSeparator.",
          "Use SelectGroup, SelectLabel and SelectSeparator."
        ),
        microCode: `<Field className="w-full">
  <FieldLabel>Fruit</FieldLabel>
  <FieldContent>
    <Select
      items={{
        orange: "Orange",
        lemon: "Lemon",
        strawberry: "Strawberry",
        blueberry: "Blueberry" }}
    >
      <SelectTrigger>
        <SelectValue placeholder="Select a fruit..." />
      </SelectTrigger>
      
        <SelectContent>
          <SelectGroup>
            <SelectLabel>
              Citrus
            </SelectLabel>
            <SelectItem value="orange">Orange</SelectItem>
            <SelectItem value="lemon">Lemon</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Berry</SelectLabel>
            <SelectItem value="strawberry">
              Strawberry
            </SelectItem>
            <SelectItem value="blueberry">
              Blueberry
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      
    </Select>
  </FieldContent>
</Field>`,
        microPreview: (
          <Field size={globalSize} className="w-full">
            <FieldLabel>Fruit</FieldLabel>
            <FieldContent>
              <Select
                items={{
                  orange: "Orange",
                  lemon: "Lemon",
                  strawberry: "Strawberry",
                  blueberry: "Blueberry",
                }}
              >
                <SelectTrigger size={globalSize}>
                  <SelectValue placeholder="Select a fruit..." />
                </SelectTrigger>

                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Citrus</SelectLabel>
                    <SelectItem value="orange">Orange</SelectItem>
                    <SelectItem value="lemon">Lemon</SelectItem>
                  </SelectGroup>
                  <SelectSeparator />
                  <SelectGroup>
                    <SelectLabel>Berry</SelectLabel>
                    <SelectItem value="strawberry">Strawberry</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </FieldContent>
          </Field>
        ),
      },
      {
        title: t("Tích hợp React Hook Form", "React Hook Form Integration"),
        description: t(
          "Sử dụng Controller để bắt giá trị.",
          "Use Controller to capture the value."
        ),
        macroCode: rhfCode,
        macroPreview: <SelectForm size={globalSize} />,
      },
    ],
    [t, globalSize]
  );
}

export default function SelectShowcase() {
  const t = useI18n();
  const examples = useSelectExamples();

  return (
    <ConfigurableShowcase
      title="Select"
      description={t(
        "Thành phần điều khiển hiển thị danh sách các tùy chọn thả xuống để người dùng chọn.",
        "A control that displays a list of dropdown options for the user to choose from."
      )}
      examples={examples}
    />
  );
}
