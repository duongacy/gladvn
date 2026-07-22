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
  ComboboxPortal,
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
import { useDevContext } from "../../dev/components/dev-context";
import {
  DocsCode,
  DocsP,
  ExampleGrid,
  ExampleSection,
  Showcase,
  ShowcaseDocs,
} from "../../dev/components/showcase";
import { type Size } from "../../lib/types";

const frontendFrameworks = ["react", "vue", "svelte"];
const backendFrameworks = ["express", "nest"];
const allFrameworks = [...frontendFrameworks, ...backendFrameworks];
const tagItems = ["bug", "feature", "enhancement", "docs"];
const engineItems = ["v8", "spidermonkey"];

// ──────────────────────────────────────────────────────────
// RHF Form Demo (Macro)
// ──────────────────────────────────────────────────────────
const formSchema = z.object({
  framework: z.string().min(1, "Vui lòng chọn một framework."),
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
            description="Công cụ bạn sử dụng thường xuyên nhất."
            placeholder="Chọn một..."
            searchPlaceholder="Tìm kiếm..."
            emptyText="Không tìm thấy."
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
        Xác nhận
      </Button>
    </form>
  );
}

const rhfCode = `const formSchema = z.object({ framework: z.string().min(1, "Bắt buộc chọn") });

function ComboboxForm({ size }: { size: Size }) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { framework: "" },
  });

  return (
    <form onSubmit={form.handleSubmit(console.log)} className="space-y-6">
      <Controller
        control={form.control}
        name="framework"
        render={({ field, fieldState }) => (
          <ComboboxPreset
            size={size}
            label="Framework"
            placeholder="Chọn framework..."
            searchPlaceholder="Tìm kiếm..."
            emptyText="Không tìm thấy."
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
      <Button type="submit" size={size}>Gửi</Button>
    </form>
  );
}`;

// ──────────────────────────────────────────────────────────
// SECTION 1: Macro Content
// ──────────────────────────────────────────────────────────
function ComboboxMacroShowcase({ globalSize }: { globalSize: Size }) {
  return (
    <div className="space-y-10 mt-6">
      <ExampleGrid>
        <ExampleSection
          label="Tiêu chuẩn"
          description="Tương tự Select nhưng có thể gõ để tìm kiếm."
          codeString={`<ComboboxPreset
    className="w-full"
    label="Framework"
    description="Hỗ trợ hàng ngàn bản ghi mà không lag."
    placeholder="Chọn framework..."
    searchPlaceholder="Tìm kiếm framework..."
    emptyText="Không tìm thấy framework nào."
    options={[
      { value: "react", label: "React" },
      { value: "vue", label: "Vue" },
      { value: "angular", label: "Angular" },
      { value: "svelte", label: "Svelte" },
    ]}
  />`}
        >
          <ComboboxPreset
            className="w-full"
            size={globalSize}
            label="Framework"
            description="Hỗ trợ hàng ngàn bản ghi mà không lag."
            placeholder="Chọn framework..."
            searchPlaceholder="Tìm kiếm framework..."
            emptyText="Không tìm thấy framework nào."
            options={[
              { value: "react", label: "React" },
              { value: "vue", label: "Vue" },
              { value: "angular", label: "Angular" },
              { value: "svelte", label: "Svelte" },
            ]}
          />
        </ExampleSection>

        <ExampleSection
          label="Trạng thái Lỗi (Error)"
          description="Báo lỗi khi bỏ trống form."
          codeString={`<div className="w-full flex flex-col gap-6">
    <ComboboxPreset
      label="Khu vực (Lỗi)"
      placeholder="Chọn khu vực..."
      options={[
        { value: "ap", label: "Châu Á Thái Bình Dương" },
      ]}
      errorMessage="Khu vực là bắt buộc."
    />
  </div>`}
        >
          <div className="w-full flex flex-col gap-6">
            <ComboboxPreset
              size={globalSize}
              label="Khu vực (Lỗi)"
              placeholder="Chọn khu vực..."
              options={[{ value: "ap", label: "Châu Á Thái Bình Dương" }]}
              errorMessage="Khu vực là bắt buộc."
            />
          </div>
        </ExampleSection>
      </ExampleGrid>

      <ExampleGrid>
        <ExampleSection
          label="Khóa / Bất hoạt (Disabled)"
          description="Người dùng không thể click hay gõ vào ô."
          codeString={`<ComboboxPreset
    className="w-full"
    label="Đội nhóm (Team)"
    description="Bạn không có quyền thay đổi đội trong dự án này."
    placeholder="Chọn đội..."
    options={[
      { value: "engineering", label: "Engineering" },
      { value: "design", label: "Design" },
    ]}
    value="engineering"
    disabled
  />`}
        >
          <ComboboxPreset
            className="w-full"
            size={globalSize}
            label="Đội nhóm (Team)"
            description="Bạn không có quyền thay đổi đội trong dự án này."
            placeholder="Chọn đội..."
            options={[
              { value: "engineering", label: "Engineering" },
              { value: "design", label: "Design" },
            ]}
            value="engineering"
            disabled
          />
        </ExampleSection>

        <ExampleSection
          label="Cuộn danh sách dài (Long List)"
          description="Trải nghiệm mượt mà với danh sách ảo hoá."
          codeString={`<ComboboxPreset
    className="w-full"

    label="Múi giờ (Timezone)"
    placeholder="Chọn múi giờ..."
    searchPlaceholder="Tìm kiếm múi giờ..."
    emptyText="Không tìm thấy múi giờ."
    options={Array.from({ length: 50 }).map((_, i) => ({
      value: \`utc\${i - 12}\`,
      label: \`UTC \${i - 12 > 0 ? "+" : ""}\${i - 12}:00\`,
    }))}
  />`}
        >
          <ComboboxPreset
            className="w-full"
            size={globalSize}
            label="Múi giờ (Timezone)"
            placeholder="Chọn múi giờ..."
            searchPlaceholder="Tìm kiếm múi giờ..."
            emptyText="Không tìm thấy múi giờ."
            options={Array.from({ length: 50 }).map((_, i) => ({
              value: `utc${i - 12}`,
              label: `UTC ${i - 12 > 0 ? "+" : ""}${i - 12}:00`,
            }))}
          />
        </ExampleSection>
      </ExampleGrid>

      <ExampleGrid>
        <ExampleSection
          label="Tích hợp React Hook Form"
          description="Sử dụng Controller để bắt giá trị."
          codeString={rhfCode}
        >
          <ComboboxForm size={globalSize} />
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 2: Micro Content
// ──────────────────────────────────────────────────────────
function ComboboxMicroShowcase({ globalSize }: { globalSize: Size }) {
  return (
    <div className="space-y-10 mt-6">
      <ExampleGrid>
        <ExampleSection
          label="Cơ bản & Phân nhóm"
          description="Sử dụng InputGroup, ComboboxAnchor, ComboboxGroup."
          codeString={`<Field className="w-full">
    <FieldLabel>Tìm kiếm Framework</FieldLabel>
    <FieldContent>
      <Combobox items={allFrameworks}>
        <ComboboxAnchor className="w-full">
          <InputGroup className="w-full">
            <ComboboxInput
              placeholder="Tìm framework..."
              render={<InputGroupInput />}
            />
            <InputGroupAddon align="end">
              <ComboboxTrigger className="flex h-full cursor-default items-center justify-center px-2.5 outline-none group-has-data-[slot=combobox-clear]/input-group:hidden disabled:cursor-not-allowed disabled:opacity-50" />
              <ComboboxClear />
            </InputGroupAddon>
          </InputGroup>
        </ComboboxAnchor>
        <ComboboxPortal>
          <ComboboxContent>
            <ComboboxEmpty>Không tìm thấy.</ComboboxEmpty>
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
        </ComboboxPortal>
      </Combobox>
    </FieldContent>
  </Field>`}
        >
          <Field size={globalSize} className="w-full">
            <FieldLabel>Tìm kiếm Framework</FieldLabel>
            <FieldContent>
              <Combobox items={allFrameworks}>
                <ComboboxAnchor className="w-full">
                  <InputGroup size={globalSize} className="w-full">
                    <ComboboxInput
                      placeholder="Tìm framework..."
                      render={<InputGroupInput />}
                    />
                    <InputGroupAddon align="end">
                      <ComboboxTrigger className="flex h-full cursor-default items-center justify-center px-2.5 outline-none group-has-data-[slot=combobox-clear]/input-group:hidden disabled:cursor-not-allowed disabled:opacity-50" />
                      <ComboboxClear />
                    </InputGroupAddon>
                  </InputGroup>
                </ComboboxAnchor>

                <ComboboxPortal>
                  <ComboboxContent>
                    <ComboboxEmpty>Không tìm thấy.</ComboboxEmpty>
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
                </ComboboxPortal>
              </Combobox>
            </FieldContent>
          </Field>
        </ExampleSection>

        <ExampleSection
          label="Chọn nhiều (Multi-select Chips)"
          description="Sử dụng ComboboxChips và ComboboxChip thay cho Input."
          codeString={`<Field className="w-full">
    <FieldLabel>Gán thẻ (Tags)</FieldLabel>
    <FieldContent>
      <Combobox items={tagItems} multiple>
        <ComboboxChips>
          <ComboboxChip value="bug">Lỗi (Bug)</ComboboxChip>
          <ComboboxChip value="feature">
            Tính năng (Feature)
          </ComboboxChip>
          <ComboboxChipsInput placeholder="Thêm thẻ..." />
        </ComboboxChips>
        <ComboboxPortal>
          <ComboboxContent>
            <ComboboxEmpty>
              Không tìm thấy thẻ.
            </ComboboxEmpty>
            <ComboboxList>
              <ComboboxItem value="bug">
                Lỗi (Bug)
              </ComboboxItem>
              <ComboboxItem value="feature">
                Tính năng (Feature)
              </ComboboxItem>
              <ComboboxItem value="enhancement">
                Cải thiện
              </ComboboxItem>
              <ComboboxItem value="docs">
                Tài liệu
              </ComboboxItem>
            </ComboboxList>
          </ComboboxContent>
        </ComboboxPortal>
      </Combobox>
    </FieldContent>
    <FieldDescription>
      Bạn có thể chọn nhiều thẻ cùng lúc.
    </FieldDescription>
  </Field>`}
        >
          <Field size={globalSize} className="w-full">
            <FieldLabel>Gán thẻ (Tags)</FieldLabel>
            <FieldContent>
              <Combobox items={tagItems} multiple>
                <ComboboxChips size={globalSize}>
                  <ComboboxChip value="bug">Lỗi (Bug)</ComboboxChip>
                  <ComboboxChip value="feature">
                    Tính năng (Feature)
                  </ComboboxChip>
                  <ComboboxChipsInput placeholder="Thêm thẻ..." />
                </ComboboxChips>

                <ComboboxPortal>
                  <ComboboxContent>
                    <ComboboxEmpty>Không tìm thấy thẻ.</ComboboxEmpty>
                    <ComboboxList>
                      <ComboboxItem value="bug">Lỗi (Bug)</ComboboxItem>
                      <ComboboxItem value="feature">
                        Tính năng (Feature)
                      </ComboboxItem>
                      <ComboboxItem value="enhancement">Cải thiện</ComboboxItem>
                      <ComboboxItem value="docs">Tài liệu</ComboboxItem>
                    </ComboboxList>
                  </ComboboxContent>
                </ComboboxPortal>
              </Combobox>
            </FieldContent>
            <FieldDescription>
              Bạn có thể chọn nhiều thẻ cùng lúc.
            </FieldDescription>
          </Field>
        </ExampleSection>
      </ExampleGrid>

      <ExampleGrid>
        <ExampleSection
          label="Disabled thủ công"
          description="Truyền disabled vào InputGroupInput và ComboboxTrigger."
          codeString={`<Field className="w-full">
    <FieldLabel>Tìm kiếm (Disabled)</FieldLabel>
    <FieldContent>
      <Combobox items={["react"]}>
        <ComboboxAnchor className="w-full">
          <InputGroup className="w-full">
            <ComboboxInput
              placeholder="Tìm kiếm..."
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
        <ComboboxPortal>
          <ComboboxContent>
            <ComboboxList>
              <ComboboxItem value="react">
                React
              </ComboboxItem>
            </ComboboxList>
          </ComboboxContent>
        </ComboboxPortal>
      </Combobox>
    </FieldContent>
  </Field>`}
        >
          <Field size={globalSize} className="w-full">
            <FieldLabel>Tìm kiếm (Disabled)</FieldLabel>
            <FieldContent>
              <Combobox items={["react"]}>
                <ComboboxAnchor className="w-full">
                  <InputGroup size={globalSize} className="w-full">
                    <ComboboxInput
                      placeholder="Tìm kiếm..."
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

                <ComboboxPortal>
                  <ComboboxContent>
                    <ComboboxList>
                      <ComboboxItem value="react">React</ComboboxItem>
                    </ComboboxList>
                  </ComboboxContent>
                </ComboboxPortal>
              </Combobox>
            </FieldContent>
          </Field>
        </ExampleSection>

        <ExampleSection
          label="Trạng thái Lỗi (Invalid)"
          description="Gắn aria-invalid vào ô nhập liệu."
          codeString={`<Field data-invalid={true} className="w-full">
    <FieldLabel>Mã giảm giá</FieldLabel>
    <FieldContent>
      <Combobox items={["sale20", "sale50"]}>
        <ComboboxAnchor className="w-full">
          <InputGroup className="w-full">
            <ComboboxInput
              placeholder="Nhập mã..."
              aria-invalid={true}
              render={<InputGroupInput />}
            />
            <InputGroupAddon align="end">
              <ComboboxTrigger className="flex h-full cursor-default items-center justify-center px-2.5 outline-none group-has-data-[slot=combobox-clear]/input-group:hidden disabled:cursor-not-allowed disabled:opacity-50" />
              <ComboboxClear />
            </InputGroupAddon>
          </InputGroup>
        </ComboboxAnchor>
        <ComboboxPortal>
          <ComboboxContent>
            <ComboboxEmpty>
              Không tìm thấy mã.
            </ComboboxEmpty>
            <ComboboxList>
              <ComboboxItem value="sale20">
                Giảm 20%
              </ComboboxItem>
              <ComboboxItem value="sale50">
                Giảm 50%
              </ComboboxItem>
            </ComboboxList>
          </ComboboxContent>
        </ComboboxPortal>
      </Combobox>
    </FieldContent>
    <FieldError>Mã này đã hết hạn.</FieldError>
  </Field>`}
        >
          <Field size={globalSize} data-invalid={true} className="w-full">
            <FieldLabel>Mã giảm giá</FieldLabel>
            <FieldContent>
              <Combobox items={["sale20", "sale50"]}>
                <ComboboxAnchor className="w-full">
                  <InputGroup size={globalSize} className="w-full">
                    <ComboboxInput
                      placeholder="Nhập mã..."
                      aria-invalid={true}
                      render={<InputGroupInput />}
                    />
                    <InputGroupAddon align="end">
                      <ComboboxTrigger className="flex h-full cursor-default items-center justify-center px-2.5 outline-none group-has-data-[slot=combobox-clear]/input-group:hidden disabled:cursor-not-allowed disabled:opacity-50" />
                      <ComboboxClear />
                    </InputGroupAddon>
                  </InputGroup>
                </ComboboxAnchor>

                <ComboboxPortal>
                  <ComboboxContent>
                    <ComboboxEmpty>Không tìm thấy mã.</ComboboxEmpty>
                    <ComboboxList>
                      <ComboboxItem value="sale20">Giảm 20%</ComboboxItem>
                      <ComboboxItem value="sale50">Giảm 50%</ComboboxItem>
                    </ComboboxList>
                  </ComboboxContent>
                </ComboboxPortal>
              </Combobox>
            </FieldContent>
            <FieldError>Mã này đã hết hạn.</FieldError>
          </Field>
        </ExampleSection>
      </ExampleGrid>

      <ExampleGrid>
        <ExampleSection
          label="Giao diện Nút (With Trigger)"
          description="Combobox dùng nút bấm (giống Select) thay vì ô nhập chữ (Input)."
          codeString={`<Field className="w-full">
    <FieldLabel>Chọn Engine</FieldLabel>
    <FieldContent>
      <Combobox items={engineItems}>
        <ComboboxTrigger className="w-full justify-between flex items-center border border-border rounded-md p-2 hover:bg-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
          <ComboboxValue placeholder="Chọn một engine" />
        </ComboboxTrigger>
        <ComboboxPortal>
          <ComboboxContent>
            <div className="p-1">
              <InputGroup className="w-full">
                <ComboboxInput
                  placeholder="Tìm engine..."
                  render={<InputGroupInput />}
                />
              </InputGroup>
            </div>
            <ComboboxEmpty>Không tìm thấy.</ComboboxEmpty>
            <ComboboxList>
              <ComboboxItem value="v8">
                V8 (Chrome)
              </ComboboxItem>
              <ComboboxItem value="spidermonkey">
                SpiderMonkey (Firefox)
              </ComboboxItem>
            </ComboboxList>
          </ComboboxContent>
        </ComboboxPortal>
      </Combobox>
    </FieldContent>
  </Field>`}
        >
          <Field size={globalSize} className="w-full">
            <FieldLabel>Chọn Engine</FieldLabel>
            <FieldContent>
              <Combobox items={engineItems}>
                <ComboboxTrigger className="w-full justify-between flex items-center border border-border rounded-md p-2 hover:bg-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                  <ComboboxValue placeholder="Chọn một engine" />
                </ComboboxTrigger>

                <ComboboxPortal>
                  <ComboboxContent>
                    <div className="p-1">
                      <InputGroup size={globalSize} className="w-full">
                        <ComboboxInput
                          placeholder="Tìm engine..."
                          render={<InputGroupInput />}
                        />
                      </InputGroup>
                    </div>
                    <ComboboxEmpty>Không tìm thấy.</ComboboxEmpty>
                    <ComboboxList>
                      <ComboboxItem value="v8">V8 (Chrome)</ComboboxItem>
                      <ComboboxItem value="spidermonkey">
                        SpiderMonkey (Firefox)
                      </ComboboxItem>
                    </ComboboxList>
                  </ComboboxContent>
                </ComboboxPortal>
              </Combobox>
            </FieldContent>
          </Field>
        </ExampleSection>
      </ExampleGrid>

      <ExampleSection
        label="🧭 Use Case Comparison"
        description="So sánh nhanh khi nào dùng Micro và Macro."
        fullWidth
        codeString={`<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
            Story 1 · Dùng Macro
          </p>
          <h3 className="mt-0.5 text-sm font-semibold text-foreground">
            Single Select tự động hoàn thành
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
            Story 2 · Dùng Micro
          </p>
          <h3 className="mt-0.5 text-sm font-semibold text-foreground">
            Gán thẻ (Multi-select)
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
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
                  Story 1 · Dùng Macro
                </p>
                <h3 className="mt-0.5 text-sm font-semibold text-foreground">
                  Single Select tự động hoàn thành
                </h3>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Bạn cần một form chọn Thành phố. Số lượng thành phố quá lớn nên
              không dùng Select được, phải dùng Combobox để gõ tìm.{" "}
              <DocsCode>ComboboxPreset</DocsCode> sinh ra để giải quyết đúng bài
              toán chọn 1 giá trị từ tập lớn này.
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
                  Story 2 · Dùng Micro
                </p>
                <h3 className="mt-0.5 text-sm font-semibold text-foreground">
                  Gán thẻ (Multi-select)
                </h3>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Bạn làm form tạo bài viết mới và cần gán nhiều Thẻ (Tags) cho bài
              viết. Macro không hỗ trợ Multi-select. Bạn buộc phải dùng Micro
              kết hợp với cụm <DocsCode>{`<ComboboxChips />`}</DocsCode>.
            </p>
          </div>
        </div>
      </ExampleSection>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 3: Entry point
// ──────────────────────────────────────────────────────────
export default function ComboboxShowcase() {
  const { size: globalSize } = useDevContext();
  return (
    <Showcase
      title="Combobox"
      description="Thành phần mở rộng của Select, cho phép người dùng gõ phím để tìm kiếm và lọc qua các tập dữ liệu lớn."
      generalConcept={
        <ShowcaseDocs>
          <DocsP>
            Dùng để chọn một hoặc nhiều giá trị từ một danh sách lớn. Khác với
            Select, Combobox có ô nhập liệu để người dùng có thể gõ từ khóa tìm
            kiếm và lọc các tùy chọn một cách nhanh chóng.
          </DocsP>
        </ShowcaseDocs>
      }
      tabs={[
        {
          label: "Micro (Primitive)",
          content: <ComboboxMicroShowcase globalSize={globalSize} />,
        },
        {
          label: "Macro (Preset)",
          content: <ComboboxMacroShowcase globalSize={globalSize} />,
        },
      ]}
    />
  );
}
