import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

import { SwitchPreset } from "../../components/macro/switch-preset";
import { Button } from "../../components/micro/button";
import { Field, FieldError, FieldLabel } from "../../components/micro/field";
import { Switch, SwitchThumb } from "../../components/micro/switch";
import { useDevContext, useI18n } from "../components/dev-context";
import {
  ConfigurableShowcase,
  ShowcaseDocs,
  DocsP,
} from "../components/showcase";
import { type Size } from "../../lib/types";

const formSchema = z.object({
  marketing: z.boolean().default(false).optional(),
});
type FormValues = z.infer<typeof formSchema>;

function SwitchForm({ size }: { size: Size }) {
  const t = useI18n();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { marketing: false },
  });

  return (
    <form
      onSubmit={form.handleSubmit((v) => alert(JSON.stringify(v)))}
      className="w-full space-y-6"
    >
      <Controller
        control={form.control}
        name="marketing"
        render={({ field, fieldState }) => (
          <SwitchPreset
            size={size}
            label="Email Marketing"
            description="Receive emails about new products, features, and more."
            checked={field.value}
            onCheckedChange={field.onChange}
            errorMessage={fieldState.error?.message}
          />
        )}
      />
      <Button type="submit" size={size}>
        Save changes
      </Button>
    </form>
  );
}

const rhfCode = `const formSchema = z.object({ marketing: z.boolean().default(false) });

function SwitchForm({ size }: { size: Size }) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { marketing: false } });

  return (
    <form onSubmit={form.handleSubmit(console.log)} className="space-y-6">
      <Controller
        control={form.control}
        name="marketing"
        render={({ field, fieldState }) => (
          <SwitchPreset
            size={size}
            label="Email Marketing"
            checked={field.value}
            onCheckedChange={field.onChange}
            errorMessage={fieldState.error?.message}
          />
        )}
      />
      <Button type="submit" size={size}>Save</Button>
    </form>
  );
}`;

function useSwitchExamples() {
  const t = useI18n();
  const { size: globalSize } = useDevContext();

  return React.useMemo(
    () => [
      {
        title: t("Tiêu chuẩn", "Standard"),
        description: t(
          "Công tắc cơ bản có nhãn và mô tả.",
          "Basic switch with label and description."
        ),
        macroCode: `<SwitchPreset
  className="w-full"
  label="Airplane Mode"
  description="Disable all wireless connections."
/>`,
        macroPreview: (
          <SwitchPreset
            className="w-full"
            size={globalSize}
            label="Airplane Mode"
            description="Disable all wireless connections."
          />
        ),
        microCode: `<div className="flex items-center gap-4">
  <Switch id="sw-micro">
    <SwitchThumb />
  </Switch>
  <label
    htmlFor="sw-micro"
    className="text-sm cursor-pointer"
  >
    Bare Switch
  </label>
</div>`,
        microPreview: (
          <div className="flex items-center gap-4">
            <Switch size={globalSize} id="sw-micro">
              <SwitchThumb />
            </Switch>
            <label htmlFor="sw-micro" className="text-sm cursor-pointer">
              Bare Switch
            </label>
          </div>
        ),
      },
      {
        title: t("Trạng thái Lỗi", "Error State"),
        description: t(
          "Báo lỗi khi bật/tắt thất bại hoặc hiển thị lỗi thủ công bằng FieldError.",
          "Shows error when toggle fails or displays manual error using FieldError."
        ),
        macroCode: `<div className="w-full flex flex-col gap-6">
  <SwitchPreset
    label="Network Connection (Error)"
    errorMessage="Network connection lost. Cannot save settings."
  />
</div>`,
        macroPreview: (
          <div className="w-full flex flex-col gap-6">
            <SwitchPreset
              size={globalSize}
              label="Network Connection (Error)"
              errorMessage="Network connection lost. Cannot save settings."
            />
          </div>
        ),
        microCode: `<Field
  orientation="horizontal"
  data-invalid={true}
  className="justify-between items-start"
>
  <div className="grid gap-1.5">
    <FieldLabel
      htmlFor="switch-err"
      className="font-normal cursor-pointer"
    >
      Auto Backup
    </FieldLabel>
    <FieldError>Backup server is offline.</FieldError>
  </div>
  <Switch
    id="switch-err"
    aria-invalid={true}
    defaultChecked
  >
    <SwitchThumb />
  </Switch>
</Field>`,
        microPreview: (
          <Field
            orientation="horizontal"
            data-invalid={true}
            size={globalSize}
            className="justify-between items-start"
          >
            <div className="grid gap-1.5">
              <FieldLabel
                htmlFor="switch-err"
                className="font-normal cursor-pointer"
              >
                Auto Backup
              </FieldLabel>
              <FieldError>Backup server is offline.</FieldError>
            </div>
            <Switch
              id="switch-err"
              size={globalSize}
              aria-invalid={true}
              defaultChecked
            >
              <SwitchThumb />
            </Switch>
          </Field>
        ),
      },
      {
        title: t("Khóa / Bất hoạt", "Disabled"),
        description: t(
          "Người dùng không thể tương tác với công tắc.",
          "Users cannot interact with the switch."
        ),
        macroCode: `<div className="w-full flex flex-col gap-6">
  <SwitchPreset
    label="Sync Contacts"
    description="Requires permission to access contacts."
    disabled
  />
  <SwitchPreset
    label="Cellular Data"
    description="Cellular data is currently turned off globally."
    defaultChecked
    disabled
  />
</div>`,
        macroPreview: (
          <div className="w-full flex flex-col gap-6">
            <SwitchPreset
              size={globalSize}
              label="Sync Contacts"
              description="Requires permission to access contacts."
              disabled
            />
            <SwitchPreset
              size={globalSize}
              label="Cellular Data"
              description="Cellular data is currently turned off globally."
              defaultChecked
              disabled
            />
          </div>
        ),
        microCode: `<div className="w-full space-y-4">
  <Field
    orientation="horizontal"
    className="justify-between"
  >
    <FieldLabel
      htmlFor="switch-d1"
      className="font-normal text-muted-foreground"
    >
      Bluetooth
    </FieldLabel>
    <Switch id="switch-d1" disabled defaultChecked>
      <SwitchThumb />
    </Switch>
  </Field>
  <Field
    orientation="horizontal"
    className="justify-between"
  >
    <FieldLabel
      htmlFor="switch-d2"
      className="font-normal text-muted-foreground"
    >
      Location (GPS)
    </FieldLabel>
    <Switch id="switch-d2" disabled>
      <SwitchThumb />
    </Switch>
  </Field>
</div>`,
        microPreview: (
          <div className="w-full space-y-4">
            <Field
              orientation="horizontal"
              size={globalSize}
              className="justify-between"
            >
              <FieldLabel
                htmlFor="switch-d1"
                className="font-normal text-muted-foreground"
              >
                Bluetooth
              </FieldLabel>
              <Switch
                id="switch-d1"
                disabled
                size={globalSize}
                defaultChecked
              >
                <SwitchThumb />
              </Switch>
            </Field>
            <Field
              orientation="horizontal"
              size={globalSize}
              className="justify-between"
            >
              <FieldLabel
                htmlFor="switch-d2"
                className="font-normal text-muted-foreground"
              >
                Location (GPS)
              </FieldLabel>
              <Switch id="switch-d2" disabled size={globalSize}>
                <SwitchThumb />
              </Switch>
            </Field>
          </div>
        ),
      },
      {
        title: t("Nhãn phức tạp", "Custom Content"),
        description: t(
          "Truyền React Node vào Label để tạo giao diện phong phú.",
          "Pass React Node into Label to create rich interfaces."
        ),
        macroCode: `<SwitchPreset
  label={
    <span className="flex items-center gap-2">
      Two-Factor Authentication (2FA)
      <span className="rounded bg-success/20 px-1.5 py-0.5 text-[10px] font-semibold text-success">
        RECOMMENDED
      </span>
    </span>
  }
  description="Add an extra layer of security to your account. We will ask for a verification code whenever you sign in from a new device."
/>`,
        macroPreview: (
          <SwitchPreset
            size={globalSize}
            label={
              <span className="flex items-center gap-2">
                Two-Factor Authentication (2FA)
                <span className="rounded bg-success/20 px-1.5 py-0.5 text-[10px] font-semibold text-success">
                  RECOMMENDED
                </span>
              </span>
            }
            description="Add an extra layer of security to your account. We will ask for a verification code whenever you sign in from a new device."
          />
        ),
      },
      {
        title: t("Layout Đảo ngược", "Reverse Layout"),
        description: t(
          "Dùng Field với orientation='horizontal' để đẩy Switch sang bên phải.",
          "Use Field with orientation='horizontal' to push Switch to the right."
        ),
        microCode: `<div className="w-full space-y-4">
  <Field
    orientation="horizontal"
    className="justify-between"
  >
    <FieldLabel
      htmlFor="switch-notif"
      className="font-normal cursor-pointer"
    >
      Push Notifications
    </FieldLabel>
    <Switch id="switch-notif" defaultChecked>
      <SwitchThumb />
    </Switch>
  </Field>
  <Field
    orientation="horizontal"
    className="justify-between"
  >
    <FieldLabel
      htmlFor="switch-dark"
      className="font-normal cursor-pointer"
    >
      Dark Mode
    </FieldLabel>
    <Switch id="switch-dark">
      <SwitchThumb />
    </Switch>
  </Field>
</div>`,
        microPreview: (
          <div className="w-full space-y-4">
            <Field
              orientation="horizontal"
              size={globalSize}
              className="justify-between"
            >
              <FieldLabel
                htmlFor="switch-notif"
                className="font-normal cursor-pointer"
              >
                Push Notifications
              </FieldLabel>
              <Switch id="switch-notif" size={globalSize} defaultChecked>
                <SwitchThumb />
              </Switch>
            </Field>
            <Field
              orientation="horizontal"
              size={globalSize}
              className="justify-between"
            >
              <FieldLabel
                htmlFor="switch-dark"
                className="font-normal cursor-pointer"
              >
                Dark Mode
              </FieldLabel>
              <Switch id="switch-dark" size={globalSize}>
                <SwitchThumb />
              </Switch>
            </Field>
          </div>
        ),
      },
      {
        title: t("Tích hợp React Hook Form", "React Hook Form Integration"),
        description: t(
          "Dùng Controller của RHF để bọc SwitchPreset.",
          "Use RHF's Controller to wrap SwitchPreset."
        ),
        macroCode: rhfCode,
        macroPreview: <SwitchForm size={globalSize} />,
      },
    ],
    [t, globalSize]
  );
}

export default function SwitchShowcase() {
  const t = useI18n();
  const examples = useSwitchExamples();

  return (
    <ConfigurableShowcase
      title="Switch"
      description={t(
        "Thành phần điều khiển cho phép người dùng chuyển đổi qua lại giữa 2 trạng thái Bật / Tắt.",
        "A control component that allows the user to toggle between two states: On / Off."
      )}
      guideline={
        <ShowcaseDocs>
          <DocsP>
            {t(
              "Switch được sử dụng để chuyển đổi một cài đặt duy nhất ngay lập tức.",
              "Switch is used to toggle a single setting immediately."
            )}
          </DocsP>
        </ShowcaseDocs>
      }
      examples={examples}
    />
  );
}
