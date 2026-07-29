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

      <ShowcaseExample
        title={t("🧭 So sánh Use Case", "🧭 Use Case Comparison")}
        description={t(
          "So sánh nhanh khi nào dùng Micro và Macro.",
          "Quick comparison of when to use Micro vs Macro.",
        )}
        code={`<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
            Story 1 · Use Macro
          </p>
          <h3 className="mt-0.5 text-sm font-semibold text-foreground">
            Nationality Input Form
          </h3>
        </div>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed">
        You have 195 countries to choose from, all just text. Instead of writing 195 <DocsCode>SelectItem</DocsCode> tags, you pass that 195-element JSON array into the Macro's <DocsCode>options</DocsCode> prop.
      </p>
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
            Story 2 · Use Micro
          </p>
          <h3 className="mt-0.5 text-sm font-semibold text-foreground">
            Account Selection Menu
          </h3>
        </div>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed">
        You want each row in the dropdown to have not only a Name, but also an Avatar (round image) and Email (dimmed text below). You must use Micro to design the inner content of <DocsCode>SelectItem</DocsCode> yourself.
      </p>
    </div>
  </div>`}
        preview={
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
                      Story 1 · Use Macro
                    </p>
                    <h3 className="mt-0.5 text-sm font-semibold text-foreground">
                      Nationality Input Form
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Bạn có 195 quốc gia để chọn, tất cả đều chỉ là chữ. Thay vì
                  viết 195 thẻ <DocsCode>SelectItem</DocsCode>, bạn vứt mảng
                  JSON 195 phần tử đó vào thuộc tính{" "}
                  <DocsCode>options</DocsCode> của Macro.
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
                      Story 2 · Use Micro
                    </p>
                    <h3 className="mt-0.5 text-sm font-semibold text-foreground">
                      Account Selection Menu
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Bạn muốn trong danh sách thả xuống, mỗi dòng không chỉ là Tên,
                  mà còn có cả Avatar (ảnh tròn) và Email (chữ mờ ở dưới). Bạn
                  bắt buộc phải dùng Micro để tự thiết kế nội dung bên trong{" "}
                  <DocsCode>SelectItem</DocsCode>.
                </p>
              </div>
            </div>
          </>
        }
      />
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
