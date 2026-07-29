import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

import { ComboboxPreset } from "../../components/macro/combobox-preset";
import { Button } from "../../components/micro/button";
import {
  Combobox,
  ComboboxAnchor,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxClear,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxSeparator,
  ComboboxTrigger,
  ComboboxValue,
} from "../../components/micro/combobox";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "../../components/micro/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../../components/micro/input-group";
import { useDevContext, useI18n } from "../../dev/components/dev-context";
import {
  DocsCode,
  DocsP,
  ExampleGrid,
  Showcase,
  ShowcaseDocs,
  ShowcaseExample,
} from "../../dev/components/showcase";
import { type Size } from "../../lib/types";

const frontendFrameworks = ["react", "vue", "svelte"];
const backendFrameworks = ["express", "nest"];
const allFrameworks = [...frontendFrameworks, ...backendFrameworks];
const tagItems = ["bug", "feature", "enhancement", "docs"];
const engineItems = ["v8", "spidermonkey"];

const formSchema = z.object({
  framework: z.string().min(1, "Please select a framework."),
});
type FormValues = z.infer<typeof formSchema>;

function ComboboxForm({ size }: { size: Size }) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { framework: "" },
  });

  return (
    <form
      onSubmit={form.handleSubmit((v) => alert(JSON.stringify(v)))}
      className="w-full space-y-6"
    >
      <Controller
        control={form.control}
        name="framework"
        render={({ field, fieldState }) => (
          <ComboboxPreset
            size={size}
            label="Framework"
            description="The tool you use most often."
            placeholder="Select one..."
            searchPlaceholder="Search..."
            emptyText="Not found."
            options={[
              { value: "react", label: "React" },
              { value: "vue", label: "Vue" },
              { value: "angular", label: "Angular" },
              { value: "svelte", label: "Svelte" },
            ]}
            value={field.value}
            onValueChange={field.onChange}
            errorMessage={fieldState.error?.message}
          />
        )}
      />
      <Button type="submit" size={size}>
        Confirm
      </Button>
    </form>
  );
}

const rhfCode = `const formSchema = z.object({ framework: z.string().min(1, "Required") });

function ComboboxForm({ size }: { size: Size }) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { framework: "" } });

  return (
    <form onSubmit={form.handleSubmit(console.log)} className="space-y-6">
      <Controller
        control={form.control}
        name="framework"
        render={({ field, fieldState }) => (
          <ComboboxPreset
            size={size}
            label="Framework"
            placeholder="Select framework..."
            searchPlaceholder="Search..."
            emptyText="Not found."
            options={[
              { value: "react", label: "React" },
              { value: "vue", label: "Vue" }
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

function ComboboxMacroShowcase({ globalSize }: { globalSize: Size }) {
  const t = useI18n();
  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample
          title={t("Tiêu chuẩn", "Standard")}
          description={t(
            "Tương tự Select nhưng có thể gõ để tìm kiếm.",
            "Similar to Select but allows typing to search.",
          )}
          code={`<ComboboxPreset
    className="w-full"
    label="Framework"
    description="Supports thousands of records without lag."
    placeholder="Select framework..."
    searchPlaceholder="Search framework..."
    emptyText="No framework found."
    options={[
      { value: "react", label: "React" },
      { value: "vue", label: "Vue" },
      { value: "angular", label: "Angular" },
      { value: "svelte", label: "Svelte" },
    ]}
  />`}
          preview={
            <>
              <ComboboxPreset
                className="w-full"
                size={globalSize}
                label="Framework"
                description="Supports thousands of records without lag."
                placeholder="Select framework..."
                searchPlaceholder="Search framework..."
                emptyText="No framework found."
                options={[
                  { value: "react", label: "React" },
                  { value: "vue", label: "Vue" },
                  { value: "angular", label: "Angular" },
                  { value: "svelte", label: "Svelte" },
                ]}
              />
            </>
          }
        />

        <ShowcaseExample
          title={t("Trạng thái Lỗi (Error)", "Error State")}
          description={t(
            "Báo lỗi khi bỏ trống form.",
            "Shows error when form is empty.",
          )}
          code={`<div className="w-full flex flex-col gap-6">
    <ComboboxPreset
      label="Region (Error)"
      placeholder="Select region..."
      options={[
        { value: "ap", label: "Asia Pacific" },
      ]}
      errorMessage="Region is required."
    />
  </div>`}
          preview={
            <>
              <div className="w-full flex flex-col gap-6">
                <ComboboxPreset
                  size={globalSize}
                  label="Region (Error)"
                  placeholder="Select region..."
                  options={[{ value: "ap", label: "Asia Pacific" }]}
                  errorMessage="Region is required."
                />
              </div>
            </>
          }
        />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample
          title={t("Khóa / Bất hoạt (Disabled)", "Disabled State")}
          description={t(
            "Người dùng không thể click hay gõ vào ô.",
            "Users cannot click or type into the input.",
          )}
          code={`<ComboboxPreset
    className="w-full"
    label="Team"
    description="You do not have permission to change teams in this project."
    placeholder="Select team..."
    options={[
      { value: "engineering", label: "Engineering" },
      { value: "design", label: "Design" },
    ]}
    value="engineering"
    disabled
  />`}
          preview={
            <>
              <ComboboxPreset
                className="w-full"
                size={globalSize}
                label="Team"
                description="You do not have permission to change teams in this project."
                placeholder="Select team..."
                options={[
                  { value: "engineering", label: "Engineering" },
                  { value: "design", label: "Design" },
                ]}
                value="engineering"
                disabled
              />
            </>
          }
        />

        <ShowcaseExample
          title={t("Cuộn danh sách dài (Long List)", "Long List Scrolling")}
          description={t(
            "Trải nghiệm mượt mà với danh sách ảo hoá.",
            "Smooth experience with virtualized list.",
          )}
          code={`<ComboboxPreset
    className="w-full"

    label="Timezone"
    placeholder="Select timezone..."
    searchPlaceholder="Search timezone..."
    emptyText="Timezone not found."
    options={Array.from({ length: 50 }).map((_, i) => ({
      value: \`utc\${i - 12}\`,
      label: \`UTC \${i - 12 > 0 ? "+" : ""}\${i - 12}:00\` }))}
  />`}
          preview={
            <>
              <ComboboxPreset
                className="w-full"
                size={globalSize}
                label="Timezone"
                placeholder="Select timezone..."
                searchPlaceholder="Search timezone..."
                emptyText="Timezone not found."
                options={Array.from({ length: 50 }).map((_, i) => ({
                  value: `utc${i - 12}`,
                  label: `UTC ${i - 12 > 0 ? "+" : ""}${i - 12}:00`,
                }))}
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
            "Uses Controller to capture values.",
          )}
          code={rhfCode}
          preview={
            <>
              <ComboboxForm size={globalSize} />
            </>
          }
        />
      </ExampleGrid>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 2: Micro Content
// ──────────────────────────────────────────────────────────
function ComboboxMicroShowcase({ globalSize }: { globalSize: Size }) {
  const t = useI18n();
  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample
          title={t("Cơ bản & Phân nhóm", "Basic & Grouping")}
          description={t(
            "Sử dụng InputGroup, ComboboxAnchor, ComboboxGroup.",
            "Uses InputGroup, ComboboxAnchor, ComboboxGroup.",
          )}
          code={`<Field className="w-full">
    <FieldLabel>Search Framework</FieldLabel>
    <FieldContent>
      <Combobox items={allFrameworks}>
        <ComboboxAnchor className="w-full">
          <InputGroup className="w-full">
            <ComboboxInput
              placeholder="Search framework..."
              render={<InputGroupInput />}
            />
            <InputGroupAddon align="end">
              <ComboboxTrigger className="flex h-full cursor-default items-center justify-center px-2.5 outline-none group-has-data-[slot=combobox-clear]/input-group:hidden disabled:cursor-not-allowed disabled:opacity-50" />
              <ComboboxClear />
            </InputGroupAddon>
          </InputGroup>
        </ComboboxAnchor>
        
          <ComboboxContent>
            <ComboboxEmpty>Not found.</ComboboxEmpty>
            <ComboboxList>
              <ComboboxGroup>
                <ComboboxLabel>Frontend</ComboboxLabel>
                <ComboboxItem value="react">
                  React
                </ComboboxItem>
                <ComboboxItem value="vue">Vue</ComboboxItem>
                <ComboboxItem value="svelte">
                  Svelte
                </ComboboxItem>
              </ComboboxGroup>
              <ComboboxSeparator />
              <ComboboxGroup>
                <ComboboxLabel>Backend</ComboboxLabel>
                <ComboboxItem value="express">
                  Express
                </ComboboxItem>
                <ComboboxItem value="nest">
                  NestJS
                </ComboboxItem>
              </ComboboxGroup>
            </ComboboxList>
          </ComboboxContent>
        
      </Combobox>
    </FieldContent>
  </Field>`}
          preview={
            <>
              <Field size={globalSize} className="w-full">
                <FieldLabel>Search Framework</FieldLabel>
                <FieldContent>
                  <Combobox items={allFrameworks}>
                    <ComboboxAnchor className="w-full">
                      <InputGroup size={globalSize} className="w-full">
                        <ComboboxInput
                          placeholder="Search framework..."
                          render={<InputGroupInput />}
                        />
                        <InputGroupAddon align="end">
                          <ComboboxTrigger className="flex h-full cursor-default items-center justify-center px-2.5 outline-none group-has-data-[slot=combobox-clear]/input-group:hidden disabled:cursor-not-allowed disabled:opacity-50" />
                          <ComboboxClear />
                        </InputGroupAddon>
                      </InputGroup>
                    </ComboboxAnchor>

                    <ComboboxContent>
                      <ComboboxEmpty>Not found.</ComboboxEmpty>
                      <ComboboxList>
                        <ComboboxGroup>
                          <ComboboxLabel>Frontend</ComboboxLabel>
                          <ComboboxItem value="react">React</ComboboxItem>
                          <ComboboxItem value="vue">Vue</ComboboxItem>
                          <ComboboxItem value="svelte">Svelte</ComboboxItem>
                        </ComboboxGroup>
                        <ComboboxSeparator />
                        <ComboboxGroup>
                          <ComboboxLabel>Backend</ComboboxLabel>
                          <ComboboxItem value="express">Express</ComboboxItem>
                          <ComboboxItem value="nest">NestJS</ComboboxItem>
                        </ComboboxGroup>
                      </ComboboxList>
                    </ComboboxContent>
                  </Combobox>
                </FieldContent>
              </Field>
            </>
          }
        />

        <ShowcaseExample
          title={t("Chọn nhiều (Multi-select Chips)", "Multi-select Chips")}
          description={t(
            "Sử dụng ComboboxChips và ComboboxChip thay cho Input.",
            "Uses ComboboxChips and ComboboxChip instead of Input.",
          )}
          code={`<Field className="w-full">
    <FieldLabel>Assign Tags</FieldLabel>
    <FieldContent>
      <Combobox items={tagItems} multiple>
        <ComboboxChips>
          <ComboboxChip value="bug">Bug</ComboboxChip>
          <ComboboxChip value="feature">
            Feature
          </ComboboxChip>
          <ComboboxChipsInput placeholder="Add tag..." />
        </ComboboxChips>
        
          <ComboboxContent>
            <ComboboxEmpty>
              Tag not found.
            </ComboboxEmpty>
            <ComboboxList>
              <ComboboxItem value="bug">
                Bug
              </ComboboxItem>
              <ComboboxItem value="feature">
                Feature
              </ComboboxItem>
              <ComboboxItem value="enhancement">
                Enhancement
              </ComboboxItem>
              <ComboboxItem value="docs">
                Documentation
              </ComboboxItem>
            </ComboboxList>
          </ComboboxContent>
        
      </Combobox>
    </FieldContent>
    <FieldDescription>
      You can select multiple tags at once.
    </FieldDescription>
  </Field>`}
          preview={
            <>
              <Field size={globalSize} className="w-full">
                <FieldLabel>Assign Tags</FieldLabel>
                <FieldContent>
                  <Combobox items={tagItems} multiple>
                    <ComboboxChips size={globalSize}>
                      <ComboboxChip value="bug">Bug</ComboboxChip>
                      <ComboboxChip value="feature">Feature</ComboboxChip>
                      <ComboboxChipsInput placeholder="Add tag..." />
                    </ComboboxChips>

                    <ComboboxContent>
                      <ComboboxEmpty>Tag not found.</ComboboxEmpty>
                      <ComboboxList>
                        <ComboboxItem value="bug">Bug</ComboboxItem>
                        <ComboboxItem value="feature">Feature</ComboboxItem>
                        <ComboboxItem value="enhancement">
                          Enhancement
                        </ComboboxItem>
                        <ComboboxItem value="docs">Documentation</ComboboxItem>
                      </ComboboxList>
                    </ComboboxContent>
                  </Combobox>
                </FieldContent>
                <FieldDescription>
                  You can select multiple tags at once.
                </FieldDescription>
              </Field>
            </>
          }
        />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample
          title={t("Disabled thủ công", "Manual Disabled")}
          description={t(
            "Truyền disabled vào InputGroupInput và ComboboxTrigger.",
            "Pass disabled to InputGroupInput and ComboboxTrigger.",
          )}
          code={`<Field className="w-full">
    <FieldLabel>Search (Disabled)</FieldLabel>
    <FieldContent>
      <Combobox items={["react"]}>
        <ComboboxAnchor className="w-full">
          <InputGroup className="w-full">
            <ComboboxInput
              placeholder="Search..."
              disabled
              render={<InputGroupInput disabled />}
            />
            <InputGroupAddon align="end">
              <ComboboxTrigger
                className="flex h-full cursor-default items-center justify-center px-2.5 outline-none group-has-data-[slot=combobox-clear]/input-group:hidden disabled:cursor-not-allowed disabled:opacity-50"
                disabled
              />
            </InputGroupAddon>
          </InputGroup>
        </ComboboxAnchor>
        
          <ComboboxContent>
            <ComboboxList>
              <ComboboxItem value="react">
                React
              </ComboboxItem>
            </ComboboxList>
          </ComboboxContent>
        
      </Combobox>
    </FieldContent>
  </Field>`}
          preview={
            <>
              <Field size={globalSize} className="w-full">
                <FieldLabel>Search (Disabled)</FieldLabel>
                <FieldContent>
                  <Combobox items={["react"]}>
                    <ComboboxAnchor className="w-full">
                      <InputGroup size={globalSize} className="w-full">
                        <ComboboxInput
                          placeholder="Search..."
                          disabled
                          render={<InputGroupInput disabled />}
                        />
                        <InputGroupAddon align="end">
                          <ComboboxTrigger
                            className="flex h-full cursor-default items-center justify-center px-2.5 outline-none group-has-data-[slot=combobox-clear]/input-group:hidden disabled:cursor-not-allowed disabled:opacity-50"
                            disabled
                          />
                        </InputGroupAddon>
                      </InputGroup>
                    </ComboboxAnchor>

                    <ComboboxContent>
                      <ComboboxList>
                        <ComboboxItem value="react">React</ComboboxItem>
                      </ComboboxList>
                    </ComboboxContent>
                  </Combobox>
                </FieldContent>
              </Field>
            </>
          }
        />

        <ShowcaseExample
          title={t("Trạng thái Lỗi (Invalid)", "Invalid State")}
          description={t(
            "Gắn aria-invalid vào ô nhập liệu.",
            "Attach aria-invalid to the input field.",
          )}
          code={`<Field data-invalid={true} className="w-full">
    <FieldLabel>Discount Code</FieldLabel>
    <FieldContent>
      <Combobox items={["sale20", "sale50"]}>
        <ComboboxAnchor className="w-full">
          <InputGroup className="w-full">
            <ComboboxInput
              placeholder="Enter code..."
              aria-invalid={true}
              render={<InputGroupInput />}
            />
            <InputGroupAddon align="end">
              <ComboboxTrigger className="flex h-full cursor-default items-center justify-center px-2.5 outline-none group-has-data-[slot=combobox-clear]/input-group:hidden disabled:cursor-not-allowed disabled:opacity-50" />
              <ComboboxClear />
            </InputGroupAddon>
          </InputGroup>
        </ComboboxAnchor>
        
          <ComboboxContent>
            <ComboboxEmpty>
              Code not found.
            </ComboboxEmpty>
            <ComboboxList>
              <ComboboxItem value="sale20">
                20% off
              </ComboboxItem>
              <ComboboxItem value="sale50">
                50% off
              </ComboboxItem>
            </ComboboxList>
          </ComboboxContent>
        
      </Combobox>
    </FieldContent>
    <FieldError>This code has expired.</FieldError>
  </Field>`}
          preview={
            <>
              <Field size={globalSize} data-invalid={true} className="w-full">
                <FieldLabel>Discount Code</FieldLabel>
                <FieldContent>
                  <Combobox items={["sale20", "sale50"]}>
                    <ComboboxAnchor className="w-full">
                      <InputGroup size={globalSize} className="w-full">
                        <ComboboxInput
                          placeholder="Enter code..."
                          aria-invalid={true}
                          render={<InputGroupInput />}
                        />
                        <InputGroupAddon align="end">
                          <ComboboxTrigger className="flex h-full cursor-default items-center justify-center px-2.5 outline-none group-has-data-[slot=combobox-clear]/input-group:hidden disabled:cursor-not-allowed disabled:opacity-50" />
                          <ComboboxClear />
                        </InputGroupAddon>
                      </InputGroup>
                    </ComboboxAnchor>

                    <ComboboxContent>
                      <ComboboxEmpty>Code not found.</ComboboxEmpty>
                      <ComboboxList>
                        <ComboboxItem value="sale20">20% off</ComboboxItem>
                        <ComboboxItem value="sale50">50% off</ComboboxItem>
                      </ComboboxList>
                    </ComboboxContent>
                  </Combobox>
                </FieldContent>
                <FieldError>This code has expired.</FieldError>
              </Field>
            </>
          }
        />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample
          title={t("Giao diện Nút (With Trigger)", "With Trigger")}
          description={t(
            "Combobox dùng nút bấm (giống Select) thay vì ô nhập chữ (Input).",
            "Combobox uses a button (like Select) instead of a text input.",
          )}
          code={`<Field className="w-full">
    <FieldLabel>Select Engine</FieldLabel>
    <FieldContent>
      <Combobox items={engineItems}>
        <ComboboxTrigger className="w-full justify-between flex items-center border border-border rounded-md p-2 hover:bg-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
          <ComboboxValue placeholder="Select an engine" />
        </ComboboxTrigger>
        
          <ComboboxContent>
            <div className="p-1">
              <InputGroup className="w-full">
                <ComboboxInput
                  placeholder="Search engine..."
                  render={<InputGroupInput />}
                />
              </InputGroup>
            </div>
            <ComboboxEmpty>Not found.</ComboboxEmpty>
            <ComboboxList>
              <ComboboxItem value="v8">
                V8 (Chrome)
              </ComboboxItem>
              <ComboboxItem value="spidermonkey">
                SpiderMonkey (Firefox)
              </ComboboxItem>
            </ComboboxList>
          </ComboboxContent>
        
      </Combobox>
    </FieldContent>
  </Field>`}
          preview={
            <>
              <Field size={globalSize} className="w-full">
                <FieldLabel>Select Engine</FieldLabel>
                <FieldContent>
                  <Combobox items={engineItems}>
                    <ComboboxTrigger className="w-full justify-between flex items-center border border-border rounded-md p-2 hover:bg-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                      <ComboboxValue placeholder="Select an engine" />
                    </ComboboxTrigger>

                    <ComboboxContent>
                      <div className="p-1">
                        <InputGroup size={globalSize} className="w-full">
                          <ComboboxInput
                            placeholder="Search engine..."
                            render={<InputGroupInput />}
                          />
                        </InputGroup>
                      </div>
                      <ComboboxEmpty>Not found.</ComboboxEmpty>
                      <ComboboxList>
                        <ComboboxItem value="v8">V8 (Chrome)</ComboboxItem>
                        <ComboboxItem value="spidermonkey">
                          SpiderMonkey (Firefox)
                        </ComboboxItem>
                      </ComboboxList>
                    </ComboboxContent>
                  </Combobox>
                </FieldContent>
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
            Story 1 · Macro
          </p>
          <h3 className="mt-0.5 text-sm font-semibold text-foreground">
            Autocomplete Single Select
          </h3>
        </div>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed">
        Bạn cần một form chọn Thành phố. Số lượng thành phố
        quá lớn nên không dùng Select được, phải dùng
        Combobox để gõ tìm.{" "}
        <DocsCode>ComboboxPreset</DocsCode> sinh ra để giải
        quyết đúng bài toán chọn 1 giá trị từ tập lớn này.
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
            Story 2 · Micro
          </p>
          <h3 className="mt-0.5 text-sm font-semibold text-foreground">
            Assign Tags (Multi-select)
          </h3>
        </div>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed">
        Bạn làm form tạo bài viết mới và cần gán nhiều Thẻ
        (Tags) cho bài viết. Macro không hỗ trợ
        Multi-select. Bạn buộc phải dùng Micro kết hợp với
        cụm <DocsCode>{\`<ComboboxChips />\`}</DocsCode>.
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
                      Story 1 · Macro
                    </p>
                    <h3 className="mt-0.5 text-sm font-semibold text-foreground">
                      Autocomplete Single Select
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Bạn cần một form chọn Thành phố. Số lượng thành phố quá lớn
                  nên không dùng Select được, phải dùng Combobox để gõ tìm.{" "}
                  <DocsCode>ComboboxPreset</DocsCode> sinh ra để giải quyết đúng
                  bài toán chọn 1 giá trị từ tập lớn này.
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
                      Story 2 · Micro
                    </p>
                    <h3 className="mt-0.5 text-sm font-semibold text-foreground">
                      Assign Tags (Multi-select)
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Bạn làm form tạo bài viết mới và cần gán nhiều Thẻ (Tags) cho
                  bài viết. Macro không hỗ trợ Multi-select. Bạn buộc phải dùng
                  Micro kết hợp với cụm{" "}
                  <DocsCode>{`<ComboboxChips />`}</DocsCode>.
                </p>
              </div>
            </div>
          </>
        }
      />
    </div>
  );
}

export default function ComboboxShowcase() {
  const { size: globalSize } = useDevContext();
  const t = useI18n();
  return (
    <Showcase
      title="Combobox"
      description={t(
        "Thành phần mở rộng của Select, cho phép người dùng gõ phím để tìm kiếm và lọc qua các tập dữ liệu lớn.",
        "An extension of Select, allowing users to type to search and filter through large datasets.",
      )}
      guideline={
        <ShowcaseDocs>
          <DocsP>
            {t(
              <>
                Dùng để chọn một hoặc nhiều giá trị từ một danh sách lớn. Khác
                với Select, Combobox có ô nhập liệu để người dùng có thể gõ từ
                khóa tìm kiếm và lọc các tùy chọn một cách nhanh chóng.
              </>,
              <>
                Used to select one or multiple values from a large list. Unlike
                Select, Combobox has an input field so users can quickly type
                keywords to search and filter options.
              </>,
            )}
          </DocsP>
        </ShowcaseDocs>
      }
      micro={{ content: <ComboboxMicroShowcase globalSize={globalSize} /> }}
      macro={{ content: <ComboboxMacroShowcase globalSize={globalSize} /> }}
    />
  );
}
