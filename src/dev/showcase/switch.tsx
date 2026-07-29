import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

import { SwitchPreset } from "../../components/macro/switch-preset";
import { Button } from "../../components/micro/button";
import { Field, FieldError, FieldLabel } from "../../components/micro/field";
import { Switch, SwitchThumb } from "../../components/micro/switch";
import { useI18n } from "../../dev/components/dev-context";
import { useDevContext } from "../../dev/components/dev-context";
import {
  ExampleGrid,
  Showcase,
  ShowcaseExample,
} from "../../dev/components/showcase";
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

function SwitchMacroShowcase({ globalSize }: { globalSize: Size }) {
  const t = useI18n();
  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample
          title={t("Tiêu chuẩn", "Standard")}
          description={t(
            "Công tắc cơ bản có nhãn và mô tả.",
            "Basic switch with label and description.",
          )}
          code={`<SwitchPreset
    className="w-full"
    label="Airplane Mode"
    description="Disable all wireless connections."
  />`}
          preview={
            <>
              <SwitchPreset
                className="w-full"
                size={globalSize}
                label="Airplane Mode"
                description="Disable all wireless connections."
              />
            </>
          }
        />

        <ShowcaseExample
          title={t("Trạng thái Lỗi (Error)", "Error State")}
          description={t(
            "Báo lỗi khi bật/tắt thất bại.",
            "Shows error when toggle fails.",
          )}
          code={`<div className="w-full flex flex-col gap-6">
    <SwitchPreset
      label="Network Connection (Error)"
      errorMessage="Network connection lost. Cannot save settings."
    />
  </div>`}
          preview={
            <>
              <div className="w-full flex flex-col gap-6">
                <SwitchPreset
                  size={globalSize}
                  label="Network Connection (Error)"
                  errorMessage="Network connection lost. Cannot save settings."
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
            "Người dùng không thể tương tác với công tắc.",
            "Users cannot interact with the switch.",
          )}
          code={`<div className="w-full flex flex-col gap-6">
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
  </div>`}
          preview={
            <>
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
            </>
          }
        />

        <ShowcaseExample
          title={t("Nhãn phức tạp (Custom Content)", "Custom Content")}
          description={t(
            "Truyền React Node vào Label để tạo giao diện phong phú.",
            "Pass React Node into Label to create rich interfaces.",
          )}
          code={`<SwitchPreset
    label={
      <span className="flex items-center gap-2">
        Two-Factor Authentication (2FA)
        <span className="rounded bg-success/20 px-1.5 py-0.5 text-[10px] font-semibold text-success">
          RECOMMENDED
        </span>
      </span>
    }
    description="Add an extra layer of security to your account. We will ask for a verification code whenever you sign in from a new device."
  />`}
          preview={
            <>
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
            </>
          }
        />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample
          title={t("Tích hợp React Hook Form", "React Hook Form Integration")}
          description={t(
            "Dùng Controller của RHF để bọc SwitchPreset.",
            "Use RHF's Controller to wrap SwitchPreset.",
          )}
          code={rhfCode}
          preview={
            <>
              <SwitchForm size={globalSize} />
            </>
          }
        />
      </ExampleGrid>
    </div>
  );
}

function SwitchMicroShowcase({ globalSize }: { globalSize: Size }) {
  const t = useI18n();
  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample
          title={t("Cơ bản (Primitive)", "Primitive")}
          description={t(
            "Kết nối thủ công Switch và SwitchThumb.",
            "Manually connect Switch and SwitchThumb.",
          )}
          code={`<div className="flex items-center gap-4">
    <Switch id="sw-micro">
      <SwitchThumb />
    </Switch>
    <label
      htmlFor="sw-micro"
      className="text-sm cursor-pointer"
    >
      Bare Switch
    </label>
  </div>`}
          preview={
            <>
              <div className="flex items-center gap-4">
                <Switch size={globalSize} id="sw-micro">
                  <SwitchThumb />
                </Switch>
                <label htmlFor="sw-micro" className="text-sm cursor-pointer">
                  Bare Switch
                </label>
              </div>
            </>
          }
        />

        <ShowcaseExample
          title={t("Layout Đảo ngược (Reverse)", "Reverse Layout")}
          description={t(
            "Dùng Field với orientation='horizontal' để đẩy Switch sang bên phải.",
            "Use Field with orientation='horizontal' to push Switch to the right.",
          )}
          code={`<div className="w-full space-y-4">
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
  </div>`}
          preview={
            <>
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
            </>
          }
        />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample
          title={t("Khóa (Disabled)", "Disabled")}
          description={t(
            "Các công tắc đảo ngược nhưng bị vô hiệu hoá.",
            "Reversed switches but disabled.",
          )}
          code={`<div className="w-full space-y-4">
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
  </div>`}
          preview={
            <>
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
            </>
          }
        />

        <ShowcaseExample
          title={t("Trạng thái Lỗi thủ công", "Manual Error State")}
          description={t(
            "Tự gắn aria-invalid vào Switch.",
            "Manually attach aria-invalid to Switch.",
          )}
          code={`<Field
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
  </Field>`}
          preview={
            <>
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
            </>
          }
        />
      </ExampleGrid>

      <ShowcaseExample
        title="🧭 So sánh Use Case"
        description="So sánh nhanh khi nào dùng Micro và Macro."
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
            Story 1 · Dùng Macro
          </p>
          <h3 className="mt-0.5 text-sm font-semibold text-foreground">
            Standard Form
          </h3>
        </div>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed">
        You need a Switch that acts like a Checkbox (switch on the left, text on the right). Use Preset for quick setup.
      </p>
      <div className="rounded-lg bg-muted/50 p-3">
        <SwitchPreset
          size="sm"
          label="Accept Terms"
          description="Turn on to continue."
        />
      </div>
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
            Settings Menu (iOS Style)
          </h3>
        </div>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed">
        Like an iPhone, the text is on the left and the Switch is on the far right of the line. Macro doesn't support this layout, so you use the Field + Micro structure.
      </p>
      <div className="rounded-lg bg-muted/50 p-3 border border-border divide-y">
        <div className="p-2 flex justify-between items-center">
          <span className="text-sm font-medium">Wi-Fi</span>
          <Switch size="sm" defaultChecked>
            <SwitchThumb />
          </Switch>
        </div>
        <div className="p-2 flex justify-between items-center">
          <span className="text-sm font-medium">
            Bluetooth
          </span>
          <Switch size="sm">
            <SwitchThumb />
          </Switch>
        </div>
      </div>
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
                      Story 1 · Dùng Macro
                    </p>
                    <h3 className="mt-0.5 text-sm font-semibold text-foreground">
                      Standard Form
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  You need a Switch that acts like a Checkbox (switch on the
                  left, text on the right). Use Preset for quick setup.
                </p>
                <div className="rounded-lg bg-muted/50 p-3">
                  <SwitchPreset
                    size={globalSize}
                    label="Accept Terms"
                    description="Turn on to continue."
                  />
                </div>
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
                      Settings Menu (iOS Style)
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Like an iPhone, the text is on the left and the Switch is on
                  the far right of the line. Macro doesn't support this layout,
                  so you use the Field + Micro structure.
                </p>
                <div className="rounded-lg bg-muted/50 p-3 border border-border divide-y">
                  <div className="p-2 flex justify-between items-center">
                    <span className="text-sm font-medium">Wi-Fi</span>
                    <Switch size={globalSize} defaultChecked>
                      <SwitchThumb />
                    </Switch>
                  </div>
                  <div className="p-2 flex justify-between items-center">
                    <span className="text-sm font-medium">Bluetooth</span>
                    <Switch size={globalSize}>
                      <SwitchThumb />
                    </Switch>
                  </div>
                </div>
              </div>
            </div>
          </>
        }
      />
    </div>
  );
}

export default function SwitchShowcase() {
  const t = useI18n();
  const { size: globalSize } = useDevContext();
  return (
    <Showcase
      title="Switch"
      description={t(
        "Thành phần điều khiển cho phép người dùng chuyển đổi qua lại giữa 2 trạng thái Bật / Tắt.",
        "A control component that allows the user to toggle between two states: On / Off.",
      )}

      micro={{ content: <SwitchMicroShowcase globalSize={globalSize} /> }}
      macro={{ content: <SwitchMacroShowcase globalSize={globalSize} /> }}
    />
  );
}
