import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

import { RadioGroupPreset } from "../../components/macro/radio-group-preset";
import { Button } from "../../components/micro/button";
import { Field, FieldError, FieldLabel } from "../../components/micro/field";
import { Label } from "../../components/micro/label";
import { RadioGroup, RadioGroupItem } from "../../components/micro/radio-group";
import { useDevContext } from "../../dev/components/dev-context";
import {
  DocsCode,
  DocsH3,
  DocsP,
  ExampleGrid,
  ShowcaseExample,
  Showcase,
  ShowcaseDocs
} from "../../dev/components/showcase";
import { type Size } from "../../lib/types";

const formSchema = z.object({
  notify: z.string().min(1, "Vui lòng chọn phương thức thông báo.") });
type FormValues = z.infer<typeof formSchema>;

function RadioGroupForm({ size }: { size: Size }) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { notify: "" } });

  return (
    <form
      onSubmit={form.handleSubmit((v) => alert(JSON.stringify(v)))}
      className="w-full space-y-6"
    >
      <Controller
        control={form.control}
        name="notify"
        render={({ field, fieldState }) => (
          <RadioGroupPreset
            size={size}
            label="Kênh liên lạc"
            description="Bạn muốn được thông báo qua kênh nào?"
            options={[
              { value: "email", label: "Email" },
              { value: "sms", label: "SMS" },
              { value: "push", label: "Thông báo đẩy" },
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

const rhfCode = `const formSchema = z.object({ notify: z.string().min(1, "Bắt buộc chọn") });

function RadioGroupForm({ size }: { size: Size }) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { notify: "" } });

  return (
    <form onSubmit={form.handleSubmit(console.log)} className="space-y-6">
      <Controller
        control={form.control}
        name="notify"
        render={({ field, fieldState }) => (
          <RadioGroupPreset
            size={size}
            label="Kênh liên lạc"
            options={[
              { value: "email", label: "Email" },
              { value: "sms", label: "SMS" }
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

function RadioGroupMacroShowcase({ globalSize }: { globalSize: Size }) {
  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample title="Tiêu chuẩn" description="Nhóm radio cơ bản với mảng options." code={`<RadioGroupPreset
    className="w-full"
    label="Sở thích"
    description="Chọn một ngôn ngữ lập trình bạn yêu thích nhất."
    options={[
      { value: "ts", label: "TypeScript" },
      { value: "go", label: "Golang" },
      { value: "rust", label: "Rust" },
    ]}
    defaultValue="ts"
  />`} preview={
                      <>
              <RadioGroupPreset
                          className="w-full"
                          size={globalSize}
                          label="Sở thích"
                          description="Chọn một ngôn ngữ lập trình bạn yêu thích nhất."
                          options={[
                            { value: "ts", label: "TypeScript" },
                            { value: "go", label: "Golang" },
                            { value: "rust", label: "Rust" },
                          ]}
                          defaultValue="ts"
                        />
                      </>
                    } />

        <ShowcaseExample title="Trạng thái Lỗi (Error)" description="Báo lỗi khi form submit mà user chưa chọn." code={`<div className="w-full flex flex-col gap-6">
    <RadioGroupPreset
      label="Gói dịch vụ (Lỗi)"
      options={[
        { value: "free", label: "Miễn phí" },
        { value: "pro", label: "Trả phí" },
      ]}
      errorMessage="Vui lòng chọn một gói dịch vụ để tiếp tục."
    />
  </div>`} preview={
                      <>
              <div className="w-full flex flex-col gap-6">
                          <RadioGroupPreset
                            size={globalSize}
                            label="Gói dịch vụ (Lỗi)"
                            options={[
                              { value: "free", label: "Miễn phí" },
                              { value: "pro", label: "Trả phí" },
                            ]}
                            errorMessage="Vui lòng chọn một gói dịch vụ để tiếp tục."
                          />
                        </div>
                      </>
                    } />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample title="Mô tả cho từng Option" description="Truyền description vào mảng options để chú thích chi tiết." code={`<RadioGroupPreset
    className="w-full"
    label="Giao diện (Theme)"
    description="Chế độ Mặc định hệ thống sẽ tự động đồng bộ theo OS."
    options={[
      { value: "light", label: "Sáng (Light)" },
      { value: "dark", label: "Tối (Dark)" },
      {
        value: "system",
        label: "Theo hệ thống",
        description: "Khuyên dùng để tiết kiệm pin" },
    ]}
    defaultValue="system"
  />`} preview={
                      <>
              <RadioGroupPreset
                          className="w-full"
                          size={globalSize}
                          label="Giao diện (Theme)"
                          description="Chế độ Mặc định hệ thống sẽ tự động đồng bộ theo OS."
                          options={[
                            { value: "light", label: "Sáng (Light)" },
                            { value: "dark", label: "Tối (Dark)" },
                            {
                              value: "system",
                              label: "Theo hệ thống",
                              description: "Khuyên dùng để tiết kiệm pin" },
                          ]}
                          defaultValue="system"
                        />
                      </>
                    } />

        <ShowcaseExample title="Khóa / Bất hoạt (Disabled)" description="Người dùng không thể tương tác với form." code={`<RadioGroupPreset
    className="w-full"
    label="Phiên bản (Disabled)"
    description="Bạn không thể hạ cấp phiên bản tại thời điểm này."
    options={[
      { value: "v1", label: "v1.0.0 (Legacy)" },
      { value: "v2", label: "v2.0.0 (Current)" },
    ]}
    defaultValue="v2"
    disabled
  />`} preview={
                      <>
              <RadioGroupPreset
                          className="w-full"
                          size={globalSize}
                          label="Phiên bản (Disabled)"
                          description="Bạn không thể hạ cấp phiên bản tại thời điểm này."
                          options={[
                            { value: "v1", label: "v1.0.0 (Legacy)" },
                            { value: "v2", label: "v2.0.0 (Current)" },
                          ]}
                          defaultValue="v2"
                          disabled
                        />
                      </>
                    } />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample title="Tích hợp React Hook Form" description="Sử dụng Controller để bắt giá trị." code={rhfCode} preview={
                      <>
              <RadioGroupForm size={globalSize} />
                      </>
                    } />
      </ExampleGrid>
    </div>
  );
}

function RadioGroupMicroShowcase({ globalSize }: { globalSize: Size }) {
  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample title="Cơ bản (Primitive)" description="Ghép nối thủ công RadioGroupItem và Label." code={`<RadioGroup
    defaultValue="comfortable"
    className="flex flex-col gap-2 w-full"
  >
    <div className="flex items-center gap-3">
      <RadioGroupItem value="default" id="rg-m-1" />
      <Label
        htmlFor="rg-m-1"
        className="cursor-pointer font-normal"
      >
        Mặc định
      </Label>
    </div>
    <div className="flex items-center gap-3">
      <RadioGroupItem value="comfortable" id="rg-m-2" />
      <Label
        htmlFor="rg-m-2"
        className="cursor-pointer font-normal"
      >
        Thoải mái
      </Label>
    </div>
  </RadioGroup>`} preview={
                      <>
              <RadioGroup
                          defaultValue="comfortable"
                          className="flex flex-col gap-2 w-full"
                        >
                          <div className="flex items-center gap-3">
                            <RadioGroupItem size={globalSize} value="default" id="rg-m-1" />
                            <Label htmlFor="rg-m-1" className="cursor-pointer font-normal">
                              Mặc định
                            </Label>
                          </div>
                          <div className="flex items-center gap-3">
                            <RadioGroupItem
                              size={globalSize}
                              value="comfortable"
                              id="rg-m-2"
                            />
                            <Label htmlFor="rg-m-2" className="cursor-pointer font-normal">
                              Thoải mái
                            </Label>
                          </div>
                        </RadioGroup>
                      </>
                    } />

        <ShowcaseExample title="Bố cục Ngang (Horizontal)" description="Hiển thị các tuỳ chọn trên một hàng ngang." code={`<div className="space-y-3 w-full">
    <Label className="block text-muted-foreground">
      Kích thước
    </Label>
    <RadioGroup
      defaultValue="m"
      className="flex items-center gap-6"
    >
      <div className="flex items-center gap-2">
        <RadioGroupItem value="s" id="rg-s" />
        <Label
          htmlFor="rg-s"
          className="cursor-pointer font-normal"
        >
          S
        </Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="m" id="rg-m" />
        <Label
          htmlFor="rg-m"
          className="cursor-pointer font-normal"
        >
          M
        </Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="l" id="rg-l" />
        <Label
          htmlFor="rg-l"
          className="cursor-pointer font-normal"
        >
          L
        </Label>
      </div>
    </RadioGroup>
  </div>`} preview={
                      <>
              <div className="space-y-3 w-full">
                          <Label className="block text-muted-foreground">Kích thước</Label>
                          <RadioGroup defaultValue="m" className="flex items-center gap-6">
                            <div className="flex items-center gap-2">
                              <RadioGroupItem size={globalSize} value="s" id="rg-s" />
                              <Label htmlFor="rg-s" className="cursor-pointer font-normal">
                                S
                              </Label>
                            </div>
                            <div className="flex items-center gap-2">
                              <RadioGroupItem size={globalSize} value="m" id="rg-m" />
                              <Label htmlFor="rg-m" className="cursor-pointer font-normal">
                                M
                              </Label>
                            </div>
                            <div className="flex items-center gap-2">
                              <RadioGroupItem size={globalSize} value="l" id="rg-l" />
                              <Label htmlFor="rg-l" className="cursor-pointer font-normal">
                                L
                              </Label>
                            </div>
                          </RadioGroup>
                        </div>
                      </>
                    } />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample title="Ghép nối Field thủ công" description="Tạo layout RadioGroup phức tạp với Field." code={`<Field data-invalid={true} className="w-full gap-4">
    <FieldLabel>Gói cước của bạn</FieldLabel>
    <RadioGroup
      defaultValue="monthly"
      className="flex flex-col gap-2"
    >
      <Field orientation="horizontal">
        <RadioGroupItem
          value="monthly"
          id="plan-1"
          aria-invalid={true}
        />
        <FieldLabel
          htmlFor="plan-1"
          className="font-normal cursor-pointer"
        >
          Thanh toán tháng ($10/mo)
        </FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <RadioGroupItem
          value="yearly"
          id="plan-2"
          aria-invalid={true}
        />
        <FieldLabel
          htmlFor="plan-2"
          className="font-normal cursor-pointer"
        >
          Thanh toán năm ($100/yr)
        </FieldLabel>
      </Field>
    </RadioGroup>
    <FieldError>Thẻ của bạn đã bị từ chối.</FieldError>
  </Field>`} preview={
                      <>
              <Field data-invalid={true} className="w-full gap-4">
                          <FieldLabel>Gói cước của bạn</FieldLabel>
                          <RadioGroup defaultValue="monthly" className="flex flex-col gap-2">
                            <Field orientation="horizontal" size={globalSize}>
                              <RadioGroupItem
                                size={globalSize}
                                value="monthly"
                                id="plan-1"
                                aria-invalid={true}
                              />
                              <FieldLabel
                                htmlFor="plan-1"
                                className="font-normal cursor-pointer"
                              >
                                Thanh toán tháng ($10/mo)
                              </FieldLabel>
                            </Field>
                            <Field orientation="horizontal" size={globalSize}>
                              <RadioGroupItem
                                size={globalSize}
                                value="yearly"
                                id="plan-2"
                                aria-invalid={true}
                              />
                              <FieldLabel
                                htmlFor="plan-2"
                                className="font-normal cursor-pointer"
                              >
                                Thanh toán năm ($100/yr)
                              </FieldLabel>
                            </Field>
                          </RadioGroup>
                          <FieldError>Thẻ của bạn đã bị từ chối.</FieldError>
                        </Field>
                      </>
                    } />

        <ShowcaseExample title="Card Layout (UI Nâng cao)" description="Radio nhưng thiết kế dưới dạng Card để bấm." code={`<RadioGroup
    defaultValue="card-2"
    className="grid grid-cols-2 gap-4 w-full"
  >
    <Label
      htmlFor="card-1"
      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary cursor-pointer gap-4"
    >
      <RadioGroupItem
        value="card-1"
        id="card-1"
        className="sr-only"
      />
      <div className="text-xl">☀️</div>
      <span>Sáng</span>
    </Label>
    <Label
      htmlFor="card-2"
      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary cursor-pointer gap-4"
    >
      <RadioGroupItem
        value="card-2"
        id="card-2"
        className="sr-only"
      />
      <div className="text-xl">🌙</div>
      <span>Tối</span>
    </Label>
  </RadioGroup>`} preview={
                      <>
              <RadioGroup
                          defaultValue="card-2"
                          className="grid grid-cols-2 gap-4 w-full"
                        >
                          <Label
                            htmlFor="card-1"
                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary cursor-pointer gap-4"
                          >
                            <RadioGroupItem value="card-1" id="card-1" className="sr-only" />
                            <div className="text-xl">☀️</div>
                            <span>Sáng</span>
                          </Label>
                          <Label
                            htmlFor="card-2"
                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary cursor-pointer gap-4"
                          >
                            <RadioGroupItem value="card-2" id="card-2" className="sr-only" />
                            <div className="text-xl">🌙</div>
                            <span>Tối</span>
                          </Label>
                        </RadioGroup>
                      </>
                    } />
      </ExampleGrid>

      <ShowcaseExample title="🧭 So sánh Use Case" description="So sánh nhanh khi nào dùng Micro và Macro." code={`<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
            Câu hỏi khảo sát
          </h3>
        </div>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed">
        Bạn cần làm một danh sách dài các tuỳ chọn dạng chữ
        từ trên xuống dưới. Macro{" "}
        <DocsCode>RadioGroupPreset</DocsCode> sinh ra để xử
        lý việc này nhanh gọn qua thuộc tính{" "}
        <DocsCode>options</DocsCode>.
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
            Radio Ẩn (Hidden Radio Card)
          </h3>
        </div>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed">
        Bạn muốn người dùng click vào một khối Card lớn
        (chứa ảnh sản phẩm, mô tả) thay vì click vào nút
        tròn. Bạn sẽ dùng Micro để ẩn đi{" "}
        <DocsCode>RadioGroupItem</DocsCode> và style{" "}
        <DocsCode>Label</DocsCode> thành 1 cái thẻ Card.
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
                            Câu hỏi khảo sát
                          </h3>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Bạn cần làm một danh sách dài các tuỳ chọn dạng chữ từ trên xuống
                        dưới. Macro <DocsCode>RadioGroupPreset</DocsCode> sinh ra để xử lý
                        việc này nhanh gọn qua thuộc tính <DocsCode>options</DocsCode>.
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
                            Radio Ẩn (Hidden Radio Card)
                          </h3>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Bạn muốn người dùng click vào một khối Card lớn (chứa ảnh sản
                        phẩm, mô tả) thay vì click vào nút tròn. Bạn sẽ dùng Micro để ẩn
                        đi <DocsCode>RadioGroupItem</DocsCode> và style{" "}
                        <DocsCode>Label</DocsCode> thành 1 cái thẻ Card.
                      </p>
                    </div>
                  </div>
                  </>
                } />
    </div>
  );
}

export default function RadioGroupShowcase() {
  const { size: globalSize } = useDevContext();
  return (
    <Showcase
      title="Radio Group"
      description="Tập hợp các nút chọn một tuỳ chọn duy nhất trong danh sách (Radio Buttons)."
      
      micro={{ content: <RadioGroupMicroShowcase globalSize={globalSize} /> }}
      macro={{ content: <RadioGroupMacroShowcase globalSize={globalSize} /> }}
    />
  );
}
