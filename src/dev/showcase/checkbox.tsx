import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckIcon, MinusIcon } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

import { CheckboxPreset } from "../../components/macro/checkbox-preset";
import { Button } from "../../components/micro/button";
import { Checkbox, CheckboxIndicator } from "../../components/micro/checkbox";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "../../components/micro/field";
import { Label } from "../../components/micro/label";
import { useDevContext, useI18n } from "../../dev/components/dev-context";
import {
  DocsP,
  ExampleGrid,
  Showcase,
  ShowcaseDocs,
  ShowcaseExample,
} from "../../dev/components/showcase";
import { type Size } from "../../lib/types";

const formSchema = z.object({
  mobile: z.boolean().default(false).optional(),
});
type FormValues = z.infer<typeof formSchema>;

function CheckboxForm({ size }: { size: Size }) {
  const t = useI18n();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { mobile: false },
  });

  function onSubmit(values: FormValues) {
    alert(JSON.stringify(values, null, 2));
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="w-full max-w-sm space-y-6"
    >
      <Controller
        control={form.control}
        name="mobile"
        render={({ field, fieldState }) => (
          <CheckboxPreset
            size={size}
            label="Use mobile device"
            description={t(
              "Cho phép chúng tôi gửi thông báo đến thiết bị di động của bạn.",
              "Allow us to send notifications to your mobile device.",
            )}
            checked={field.value}
            onCheckedChange={field.onChange}
            errorMessage={fieldState.error?.message}
          />
        )}
      />
      <Button type="submit" size={size}>
        {t("Lưu cài đặt", "Save settings")}
      </Button>
    </form>
  );
}

const rhfCode = `const formSchema = z.object({ mobile: z.boolean().default(false).optional() });

function CheckboxForm({ size }: { size: Size }) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { mobile: false } });

  return (
    <form onSubmit={form.handleSubmit(console.log)} className="space-y-6">
      <Controller
        control={form.control}
        name="mobile"
        render={({ field, fieldState }) => (
          <CheckboxPreset
            size={size}
            label="Use mobile device"
            description="Cho phép chúng tôi gửi thông báo đến thiết bị di động của bạn."
            checked={field.value}
            onCheckedChange={field.onChange}
            errorMessage={fieldState.error?.message}
          />
        )}
      />
      <Button type="submit" size={size}>Xác nhận</Button>
    </form>
  );
}`;

function CheckboxMacroShowcase({ globalSize }: { globalSize: Size }) {
  const t = useI18n();

  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample
          title={t("Tiêu chuẩn", "Standard")}
          description={t(
            "Checkbox cơ bản kèm nhãn và mô tả.",
            "Basic checkbox with label and description.",
          )}
          code={`<CheckboxPreset
    label="Agree to terms"
    description="You must agree to the terms and conditions of use."
    className="w-full"
  />`}
          preview={
            <>
              <CheckboxPreset
                size={globalSize}
                label="Agree to terms"
                description="You must agree to the terms and conditions of use."
                className="w-full"
              />
            </>
          }
        />

        <ShowcaseExample
          title={t("Trạng thái Lỗi (Error)", "Error State")}
          description={t(
            "Báo lỗi khi chưa check vào ô (thường dùng trong form).",
            "Shows an error when the box is unchecked (commonly used in forms).",
          )}
          code={`<div className="w-full flex flex-col gap-6">
    <CheckboxPreset
      label="Confirm you are 18 or older"
      errorMessage="You must confirm your age to continue."
    />
  </div>`}
          preview={
            <>
              <div className="w-full flex flex-col gap-6">
                <CheckboxPreset
                  size={globalSize}
                  label="Confirm you are 18 or older"
                  errorMessage="You must confirm your age to continue."
                />
              </div>
            </>
          }
        />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample
          title={t("Trạng thái Khóa (Disabled)", "Disabled State")}
          description={t(
            "Checkbox bị vô hiệu hóa, không thể click.",
            "The checkbox is disabled and cannot be clicked.",
          )}
          code={`<div className="w-full flex flex-col gap-6">
    <CheckboxPreset
      label="Subscribe to newsletter"
      description="This feature is currently under maintenance."
      disabled
    />
    <CheckboxPreset
      label="Allow log collection"
      description="The system collects security logs by default."
      defaultChecked
      disabled
    />
  </div>`}
          preview={
            <>
              <div className="w-full flex flex-col gap-6">
                <CheckboxPreset
                  size={globalSize}
                  label="Subscribe to newsletter"
                  description="This feature is currently under maintenance."
                  disabled
                />
                <CheckboxPreset
                  size={globalSize}
                  label="Allow log collection"
                  description="The system collects security logs by default."
                  defaultChecked
                  disabled
                />
              </div>
            </>
          }
        />

        <ShowcaseExample
          title={t("Tiêu đề tùy chỉnh", "React Node Label (Custom Content)")}
          description={t(
            "Label có thể chứa các component React phức tạp như Badge.",
            "Label can contain complex React components like Badge.",
          )}
          code={`<CheckboxPreset
    label={
      <span className="flex items-center gap-2">
        Join the BETA program{" "}
        <span className="rounded bg-primary/20 px-1.5 py-0.5 text-[10px] font-semibold text-primary">
          NEW
        </span>
      </span>
    }
    description="Get early access to new features before official release. Bugs may occur."
    className="w-full"
  />`}
          preview={
            <>
              <CheckboxPreset
                size={globalSize}
                label={
                  <span className="flex items-center gap-2">
                    "Join the BETA program"{" "}
                    <span className="rounded bg-primary/20 px-1.5 py-0.5 text-[10px] font-semibold text-primary">
                      NEW
                    </span>
                  </span>
                }
                description="Get early access to new features before official release. Bugs may occur."
                className="w-full"
              />
            </>
          }
        />
      </ExampleGrid>
      <ExampleGrid>
        <ShowcaseExample
          title={t("Tích hợp React Hook Form", "React Hook Form Integration")}
          description={t(
            "Dùng Controller của RHF để bọc CheckboxPreset.",
            "Use RHF's Controller to wrap CheckboxPreset.",
          )}
          code={rhfCode
            .replace(
              "Cho phép chúng tôi gửi thông báo đến thiết bị di động của bạn.",
              "Allow us to send notifications to your mobile device.",
            )
            .replace("Xác nhận", "Save settings")}
          preview={
            <>
              <CheckboxForm size={globalSize} />
            </>
          }
        />
      </ExampleGrid>
    </div>
  );
}

function CheckboxMicroShowcase({ globalSize }: { globalSize: Size }) {
  const t = useI18n();

  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample
          title={t("Cơ bản (Primitive)", "Primitive")}
          description={t(
            "Kết nối thủ công Checkbox với thẻ Label html.",
            "Manually connect Checkbox with HTML Label tag.",
          )}
          code={`<div className="flex items-center gap-3">
    <Checkbox id="cb-micro-default">
      <CheckboxIndicator>
        <CheckIcon />
      </CheckboxIndicator>
    </Checkbox>
    <Label
      htmlFor="cb-micro-default"
      className="font-normal cursor-pointer"
    >
      Agree to terms
    </Label>
  </div>`}
          preview={
            <>
              <div className="flex items-center gap-3">
                <Checkbox id="cb-micro-default" size={globalSize}>
                  <CheckboxIndicator>
                    <CheckIcon />
                  </CheckboxIndicator>
                </Checkbox>
                <Label
                  htmlFor="cb-micro-default"
                  className="font-normal cursor-pointer"
                  size={globalSize}
                >
                  "Agree to terms"
                </Label>
              </div>
            </>
          }
        />

        <ShowcaseExample
          title={t("Icon Tuỳ Biến (Custom Icon)", "Custom Icon")}
          description={t(
            "Vì dùng Composition, bạn có thể truyền bất kỳ icon nào (VD: MinusIcon) vào Indicator.",
            "Because of Composition, you can pass any icon (e.g., MinusIcon) into the Indicator.",
          )}
          code={`<div className="flex items-center gap-3">
    <Checkbox id="cb-custom-icon">
      <CheckboxIndicator>
        <MinusIcon />
      </CheckboxIndicator>
    </Checkbox>
    <Label
      htmlFor="cb-custom-icon"
      className="font-normal cursor-pointer"
    >
      Indeterminate state
    </Label>
  </div>`}
          preview={
            <>
              <div className="flex items-center gap-3">
                <Checkbox id="cb-custom-icon" size={globalSize}>
                  <CheckboxIndicator>
                    <MinusIcon />
                  </CheckboxIndicator>
                </Checkbox>
                <Label
                  htmlFor="cb-custom-icon"
                  className="font-normal cursor-pointer"
                  size={globalSize}
                >
                  "Indeterminate state"
                </Label>
              </div>
            </>
          }
        />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample
          title={t("Ghép nối với Field", "Composing with Field")}
          description={t(
            "Lắp ráp thủ công các thành phần Field khi cần layout phức tạp.",
            "Manually assemble Field components for complex layouts.",
          )}
          code={`<Field className="flex items-start gap-3">
    {/* 1 khoảng trắng vô hình để căn chỉnh cho Label và Checkbox thẳng hàng với nhau theo dòng chữ đầu tiên */}
    <div className="flex items-center text-sm leading-snug group-data-[size=sm]/field:text-xs">
      &#8203;
      <Checkbox id="cb-field-micro">
        <CheckboxIndicator>
          <CheckIcon />
        </CheckboxIndicator>
      </Checkbox>
    </div>
    <div className="grid gap-1.5 leading-none">
      <FieldLabel
        htmlFor="cb-field-micro"
        className="font-medium cursor-pointer"
      >
        Save password
      </FieldLabel>
      <FieldDescription>
        Automatically log in next time.
      </FieldDescription>
    </div>
  </Field>`}
          preview={
            <>
              <Field className="flex items-start gap-3" data-size={globalSize}>
                <div className="flex items-center text-sm leading-snug group-data-[size=sm]/field:text-xs">
                  &#8203;
                  <Checkbox id="cb-field-micro" size={globalSize}>
                    <CheckboxIndicator>
                      <CheckIcon />
                    </CheckboxIndicator>
                  </Checkbox>
                </div>
                <div className="grid gap-1.5 leading-none">
                  <FieldLabel
                    htmlFor="cb-field-micro"
                    className="font-medium cursor-pointer"
                  >
                    "Save password"
                  </FieldLabel>
                  <FieldDescription>
                    "Automatically log in next time."
                  </FieldDescription>
                </div>
              </Field>
            </>
          }
        />

        <ShowcaseExample
          title={t("Trạng thái Lỗi thủ công", "Manual Error State")}
          description={t(
            "Tự gắn aria-invalid vào Checkbox và dùng FieldError.",
            "Manually attach aria-invalid to Checkbox and use FieldError.",
          )}
          code={`<Field
    className="flex flex-row items-start gap-3"
    data-invalid={true}
  >
    <div className="flex items-center text-sm leading-snug group-data-[size=sm]/field:text-xs">
      &#8203;
      <Checkbox id="cb-err-micro" aria-invalid={true}>
        <CheckboxIndicator>
          <CheckIcon />
        </CheckboxIndicator>
      </Checkbox>
    </div>
    <div className="grid gap-1.5 leading-none">
      <FieldLabel
        htmlFor="cb-err-micro"
        className="font-medium cursor-pointer"
      >
        Agree to rules
      </FieldLabel>
      <FieldError>This field is required.</FieldError>
    </div>
  </Field>`}
          preview={
            <>
              <Field
                className="flex flex-row items-start gap-3"
                data-invalid={true}
                data-size={globalSize}
              >
                <div className="flex items-center text-sm leading-snug group-data-[size=sm]/field:text-xs">
                  &#8203;
                  <Checkbox
                    id="cb-err-micro"
                    size={globalSize}
                    aria-invalid={true}
                  >
                    <CheckboxIndicator>
                      <CheckIcon />
                    </CheckboxIndicator>
                  </Checkbox>
                </div>
                <div className="grid gap-1.5 leading-none">
                  <FieldLabel
                    htmlFor="cb-err-micro"
                    className="font-medium cursor-pointer"
                  >
                    "Agree to rules"
                  </FieldLabel>
                  <FieldError>"This field is required."</FieldError>
                </div>
              </Field>
            </>
          }
        />
      </ExampleGrid>
    </div>
  );
}

export default function CheckboxShowcase() {
  const { size: globalSize } = useDevContext();
  const t = useI18n();

  return (
    <Showcase
      title="Checkbox"
      description={t(
        "Thành phần cho phép người dùng chọn hoặc bỏ chọn một tuỳ chọn độc lập.",
        "Component allowing users to select or deselect an independent option.",
      )}
      guideline={
        <ShowcaseDocs>
          <DocsP>
            {t(
              "Dùng để thu thập đầu vào dạng đúng/sai hoặc nhiều lựa chọn độc lập từ người dùng. Thường đi kèm với nhãn (label) và mô tả để giải thích ý nghĩa của tùy chọn.",
              "Used to collect true/false or multiple independent choices from users. Usually accompanied by a label and description to explain the option's meaning.",
            )}
          </DocsP>
        </ShowcaseDocs>
      }
      micro={{ content: <CheckboxMicroShowcase globalSize={globalSize} /> }}
      macro={{ content: <CheckboxMacroShowcase globalSize={globalSize} /> }}
    />
  );
}
