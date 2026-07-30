import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

import { SelectPreset } from "../../components/macro/select-preset";
import { Button } from "../../components/micro/button";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "../../components/micro/field";
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
} from "../../components/micro/select";
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

const formSchema = z.object({
  language: z.string().min(1, "Please select a language."),
});
type FormValues = z.infer<typeof formSchema>;

function SelectForm({ size }: { size: Size }) {
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

function SelectMacroShowcase({ globalSize }: { globalSize: Size }) {
  const t = useI18n();
  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample
          title={t("Tiêu chuẩn", "Standard")}
          description={t(
            "Trình thả xuống cơ bản với mảng options.",
            "Basic dropdown with options array.",
          )}
          code={`<SelectPreset
    className="w-full"
    label="Favorite fruit"
    description="Choose a fruit you like best."
    placeholder="Select a fruit..."
    options={[
      { value: "apple", label: "Apple" },
      { value: "banana", label: "Banana" },
      { value: "cherry", label: "Cherry" },
    ]}
  />`}
          preview={
            <>
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
            </>
          }
        />

        <ShowcaseExample
          title={t("Trạng thái Lỗi (Error)", "Error State")}
          description={t(
            "Báo lỗi khi form submit mà user chưa chọn.",
            "Shows error when form is submitted without selection.",
          )}
          code={`<div className="w-full flex flex-col gap-6">
    <SelectPreset
      label="Framework (Error)"
      placeholder="Select a framework..."
      options={[
        { value: "react", label: "React" },
        { value: "vue", label: "Vue" },
      ]}
      errorMessage="Please select a framework to continue."
    />
  </div>`}
          preview={
            <>
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
            </>
          }
        />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample
          title={t("Khóa / Bất hoạt (Disabled)", "Disabled")}
          description={t(
            "Người dùng không thể mở danh sách.",
            "Users cannot open the list.",
          )}
          code={`<SelectPreset
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
  />`}
          preview={
            <>
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
            </>
          }
        />

        <ShowcaseExample
          title={t("Nhãn phức tạp (Custom Content)", "Custom Label")}
          description={t(
            "Truyền React Node vào Label để tạo giao diện phong phú.",
            "Pass a React Node to Label to create rich interfaces.",
          )}
          code={`<SelectPreset
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
`}
          preview={
            <>
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
            </>
          }
        />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample
          title={t("Tích hợp React Hook Form", "React Hook Form Integration")}
          description={t(
            "Sử dụng Controller để bắt giá trị.",
            "Use Controller to capture the value.",
          )}
          code={rhfCode}
          preview={
            <>
              <SelectForm size={globalSize} />
            </>
          }
        />
      </ExampleGrid>
    </div>
  );
}

function SelectMicroShowcase({ globalSize }: { globalSize: Size }) {
  const t = useI18n();
  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample
          title={t("Cơ bản (Primitive)", "Primitive")}
          description={t(
            "Ghép nối thủ công bằng cách bọc Field.",
            "Manual composition by wrapping Field.",
          )}
          code={`<Field className="w-full">
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
  </Field>`}
          preview={
            <>
              <Field size={globalSize} className="w-full">
                <FieldLabel>Framework</FieldLabel>
                <FieldContent>
                  <Select
                    items={{ next: "Next.js", vite: "Vite", remix: "Remix" }}
                  >
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
            </>
          }
        />

        <ShowcaseExample
          title={t("Phân nhóm (Grouped)", "Grouped")}
          description={t(
            "Sử dụng SelectGroup, SelectLabel và SelectSeparator.",
            "Use SelectGroup, SelectLabel and SelectSeparator.",
          )}
          code={`<Field className="w-full">
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
  </Field>`}
          preview={
            <>
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
            </>
          }
        />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample
          title={t("Trạng thái Lỗi thủ công", "Manual Error State")}
          description={t(
            "Tự gắn aria-invalid vào Select.",
            "Manually attach aria-invalid to Select.",
          )}
          code={`<Field data-invalid={true} className="w-full">
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
  </Field>`}
          preview={
            <>
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
            </>
          }
        />

        <ShowcaseExample
          title={t("Disabled thủ công", "Manual Disabled")}
          description={t("Khóa SelectTrigger.", "Disable SelectTrigger.")}
          code={`<Field className="w-full">
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
  </Field>`}
          preview={
            <>
              <Field size={globalSize} className="w-full">
                <FieldLabel>Timezone</FieldLabel>
                <FieldContent>
                  <Select items={{ gmt: "GMT+7" }}>
                    <SelectTrigger size={globalSize} disabled>
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
              </Field>
            </>
          }
        />
      </ExampleGrid>
    </div>
  );
}

export default function SelectShowcase() {
  const t = useI18n();
  const { size: globalSize } = useDevContext();
  return (
    <Showcase
      title="Select"
      description={t(
        "Thành phần điều khiển hiển thị danh sách các tùy chọn thả xuống để người dùng chọn.",
        "A control that displays a list of dropdown options for the user to choose from.",
      )}

      micro={{ content: <SelectMicroShowcase globalSize={globalSize} /> }}
      macro={{ content: <SelectMacroShowcase globalSize={globalSize} /> }}
    />
  );
}
