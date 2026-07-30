import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

import { RadioGroupPreset } from "../../components/macro/radio-group-preset";
import { Button } from "../../components/micro/button";
import { Field, FieldError, FieldLabel } from "../../components/micro/field";
import { Label } from "../../components/micro/label";
import { RadioGroup, RadioGroupItem } from "../../components/micro/radio-group";
import { useDevContext, useI18n } from "../../dev/components/dev-context";
import {
  DocsCode,
  DocsP,
  ExampleGrid,
  Showcase,
  ShowcaseExample,
} from "../../dev/components/showcase";
import { type Size } from "../../lib/types";

const formSchema = z.object({
  notify: z.string().min(1, "Please select a notification method."),
});
type FormValues = z.infer<typeof formSchema>;

function RadioGroupForm({ size }: { size: Size }) {
  const t = useI18n();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { notify: "" },
  });

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
            label="Communication Channel"
            description="Which channel would you like to be notified through?"
            options={[
              { value: "email", label: "Email" },
              { value: "sms", label: "SMS" },
              { value: "push", label: "Push notification" },
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

const rhfCode = `const formSchema = z.object({ notify: z.string().min(1, "Required") });

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
            label="Communication Channel"
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
      <Button type="submit" size={size}>Submit</Button>
    </form>
  );
}`;

function RadioGroupMacroShowcase({ globalSize }: { globalSize: Size }) {
  const t = useI18n();
  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample
          title={t("Tiêu chuẩn (Standard)", "Standard")}
          description={t(
            "Nhóm radio cơ bản với mảng options.",
            "Basic radio group with an array of options.",
          )}
          code={`<RadioGroupPreset
    className="w-full"
    label="Interests"
    description="Choose your favorite programming language."
    options={[
      { value: "ts", label: "TypeScript" },
      { value: "go", label: "Golang" },
      { value: "rust", label: "Rust" },
    ]}
    defaultValue="ts"
  />`}
          preview={
            <>
              <RadioGroupPreset
                className="w-full"
                size={globalSize}
                label="Interests"
                description="Choose your favorite programming language."
                options={[
                  { value: "ts", label: "TypeScript" },
                  { value: "go", label: "Golang" },
                  { value: "rust", label: "Rust" },
                ]}
                defaultValue="ts"
              />
            </>
          }
        />

        <ShowcaseExample
          title={t("Trạng thái Lỗi (Error)", "Error State")}
          description={t(
            "Báo lỗi khi form submit mà user chưa chọn.",
            "Shows an error when form is submitted without selection.",
          )}
          code={`<div className="w-full flex flex-col gap-6">
    <RadioGroupPreset
      label="Service Plan (Error)"
      options={[
        { value: "free", label: "Free" },
        { value: "pro", label: "Paid" },
      ]}
      errorMessage="Please select a service plan to continue."
    />
  </div>`}
          preview={
            <>
              <div className="w-full flex flex-col gap-6">
                <RadioGroupPreset
                  size={globalSize}
                  label="Service Plan (Error)"
                  options={[
                    { value: "free", label: "Free" },
                    { value: "pro", label: "Paid" },
                  ]}
                  errorMessage="Please select a service plan to continue."
                />
              </div>
            </>
          }
        />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample
          title={t("Mô tả Option (Option Description)", "Option Description")}
          description={t(
            "Truyền description vào mảng options để chú thích chi tiết.",
            "Pass description into the options array for detailed notes.",
          )}
          code={`<RadioGroupPreset
    className="w-full"
    label="Theme"
    description="System default mode will automatically sync with OS."
    options={[
      { value: "light", label: "Light" },
      { value: "dark", label: "Dark" },
      {
        value: "system",
        label: "System",
        description: "Recommended to save battery" },
    ]}
    defaultValue="system"
  />`}
          preview={
            <>
              <RadioGroupPreset
                className="w-full"
                size={globalSize}
                label="Theme"
                description="System default mode will automatically sync with OS."
                options={[
                  { value: "light", label: "Light" },
                  { value: "dark", label: "Dark" },
                  {
                    value: "system",
                    label: "System",
                    description: "Recommended to save battery",
                  },
                ]}
                defaultValue="system"
              />
            </>
          }
        />

        <ShowcaseExample
          title={t("Bất hoạt (Disabled)", "Disabled")}
          description={t(
            "Người dùng không thể tương tác với form.",
            "The user cannot interact with the form.",
          )}
          code={`<RadioGroupPreset
    className="w-full"
    label="Version (Disabled)"
    description="You cannot downgrade the version at this time."
    options={[
      { value: "v1", label: "v1.0.0 (Legacy)" },
      { value: "v2", label: "v2.0.0 (Current)" },
    ]}
    defaultValue="v2"
    disabled
  />`}
          preview={
            <>
              <RadioGroupPreset
                className="w-full"
                size={globalSize}
                label="Version (Disabled)"
                description="You cannot downgrade the version at this time."
                options={[
                  { value: "v1", label: "v1.0.0 (Legacy)" },
                  { value: "v2", label: "v2.0.0 (Current)" },
                ]}
                defaultValue="v2"
                disabled
              />
            </>
          }
        />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample
          title={t("Tích hợp RHF (RHF Integration)", "RHF Integration")}
          description={t(
            "Sử dụng Controller để bắt giá trị.",
            "Use Controller to capture the value.",
          )}
          code={rhfCode}
          preview={
            <>
              <RadioGroupForm size={globalSize} />
            </>
          }
        />
      </ExampleGrid>
    </div>
  );
}

function RadioGroupMicroShowcase({ globalSize }: { globalSize: Size }) {
  const t = useI18n();
  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample
          title={t("Cơ bản (Primitive)", "Primitive")}
          description={t(
            "Ghép nối thủ công RadioGroupItem và Label.",
            "Manually compose RadioGroupItem and Label.",
          )}
          code={`<RadioGroup
    defaultValue="comfortable"
    className="flex flex-col gap-2 w-full"
  >
    <div className="flex items-center gap-3">
      <RadioGroupItem value="default" id="rg-m-1" />
      <Label htmlFor="rg-m-1" className="cursor-pointer font-normal">Default</Label>
    </div>
    <div className="flex items-center gap-3">
      <RadioGroupItem value="comfortable" id="rg-m-2" />
      <Label htmlFor="rg-m-2" className="cursor-pointer font-normal">Comfortable</Label>
    </div>
  </RadioGroup>`}
          preview={
            <>
              <RadioGroup
                defaultValue="comfortable"
                className="flex flex-col gap-2 w-full"
              >
                <div className="flex items-center gap-3">
                  <RadioGroupItem
                    size={globalSize}
                    value="default"
                    id="rg-m-1"
                  />
                  <Label
                    htmlFor="rg-m-1"
                    className="cursor-pointer font-normal"
                  >
                    Default
                  </Label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem
                    size={globalSize}
                    value="comfortable"
                    id="rg-m-2"
                  />
                  <Label
                    htmlFor="rg-m-2"
                    className="cursor-pointer font-normal"
                  >
                    Comfortable
                  </Label>
                </div>
              </RadioGroup>
            </>
          }
        />

        <ShowcaseExample
          title={t("Bố cục Ngang (Horizontal)", "Horizontal Layout")}
          description={t(
            "Hiển thị các tuỳ chọn trên một hàng ngang.",
            "Display options on a horizontal row.",
          )}
          code={`<div className="space-y-3 w-full">
    <Label className="block text-muted-foreground">
      Size
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
  </div>`}
          preview={
            <>
              <div className="space-y-3 w-full">
                <Label className="block text-muted-foreground">Size</Label>
                <RadioGroup
                  defaultValue="m"
                  className="flex items-center gap-6"
                >
                  <div className="flex items-center gap-2">
                    <RadioGroupItem size={globalSize} value="s" id="rg-s" />
                    <Label
                      htmlFor="rg-s"
                      className="cursor-pointer font-normal"
                    >
                      S
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem size={globalSize} value="m" id="rg-m" />
                    <Label
                      htmlFor="rg-m"
                      className="cursor-pointer font-normal"
                    >
                      M
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem size={globalSize} value="l" id="rg-l" />
                    <Label
                      htmlFor="rg-l"
                      className="cursor-pointer font-normal"
                    >
                      L
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </>
          }
        />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample
          title={t(
            "Ghép nối Field thủ công (Manual Field Composition)",
            "Manual Field Composition",
          )}
          description={t(
            "Tạo layout RadioGroup phức tạp với Field.",
            "Create complex RadioGroup layout with Field.",
          )}
          code={`<Field data-invalid={true} className="w-full gap-4">
    <FieldLabel>Your plan</FieldLabel>
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
          Monthly payment ($10/mo)
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
          Yearly payment ($100/yr)
        </FieldLabel>
      </Field>
    </RadioGroup>
    <FieldError>Your card has been declined.</FieldError>
  </Field>`}
          preview={
            <>
              <Field data-invalid={true} className="w-full gap-4">
                <FieldLabel>Your plan</FieldLabel>
                <RadioGroup
                  defaultValue="monthly"
                  className="flex flex-col gap-2"
                >
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
                      Monthly payment ($10/mo)
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
                      Yearly payment ($100/yr)
                    </FieldLabel>
                  </Field>
                </RadioGroup>
                <FieldError>Your card has been declined.</FieldError>
              </Field>
            </>
          }
        />

        <ShowcaseExample
          title={t("Card Layout (Advanced UI)", "Card Layout (Advanced UI)")}
          description={t(
            "Radio nhưng thiết kế dưới dạng Card để bấm.",
            "Radio button designed as a clickable Card.",
          )}
          code={`<RadioGroup
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
      <span>Light</span>
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
      <span>Dark</span>
    </Label>
  </RadioGroup>`}
          preview={
            <>
              <RadioGroup
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
                  <span>Light</span>
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
                  <span>Dark</span>
                </Label>
              </RadioGroup>
            </>
          }
        />
      </ExampleGrid>
    </div>
  );
}

export default function RadioGroupShowcase() {
  const { size: globalSize } = useDevContext();
  const t = useI18n();
  return (
    <Showcase
      title="Radio Group"
      description={t(
        "Tập hợp các nút chọn một tuỳ chọn duy nhất trong danh sách (Radio Buttons).",
        "A set of buttons to select a single option from a list (Radio Buttons).",
      )}

      micro={{ content: <RadioGroupMicroShowcase globalSize={globalSize} /> }}
      macro={{ content: <RadioGroupMacroShowcase globalSize={globalSize} /> }}
    />
  );
}
