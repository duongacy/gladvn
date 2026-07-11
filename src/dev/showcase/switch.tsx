import { useDevContext } from "@/dev/components/dev-context";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

import {
  DocsCode,
  DocsH3,
  DocsP,
  ExampleGrid,
  ExampleSection,
  Showcase,
  ShowcaseDocs,
} from "@/dev/components/showcase";
import { type Size } from "@/lib/types";

import { SwitchPreset } from "@/components/macro/switch-preset";
import { Button } from "@/components/micro/button";
import { Field, FieldError, FieldLabel } from "@/components/micro/field";
import { Switch, SwitchThumb } from "@/components/micro/switch";

// ──────────────────────────────────────────────────────────
// RHF Form Demo (Macro)
// ──────────────────────────────────────────────────────────
const formSchema = z.object({
  marketing: z.boolean().default(false).optional(),
});
type FormValues = z.infer<typeof formSchema>;

function SwitchForm({ size }: { size: Size }) {
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
            description="Nhận email về các sản phẩm, tính năng mới và hơn thế nữa."
            checked={field.value}
            onCheckedChange={field.onChange}
            errorMessage={fieldState.error?.message}
          />
        )}
      />
      <Button type="submit" size={size}>
        Lưu thay đổi
      </Button>
    </form>
  );
}

const rhfCode = `const formSchema = z.object({ marketing: z.boolean().default(false) });

function SwitchForm({ size }: { size: Size }) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { marketing: false },
  });

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
      <Button type="submit" size={size}>Lưu</Button>
    </form>
  );
}`;

// ──────────────────────────────────────────────────────────
// SECTION 1: Macro Content
// ──────────────────────────────────────────────────────────
function SwitchMacroShowcase({ globalSize }: { globalSize: Size }) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="space-y-10 mt-6">
      <ExampleGrid>
        <ExampleSection
          label="Tiêu chuẩn"
          description="Công tắc cơ bản có nhãn và mô tả."
          codeString={`<div className="w-full">
  <SwitchPreset
    label="Chế độ máy bay"
    description="Vô hiệu hóa tất cả các kết nối không dây."
  />
</div>
`}
        >
          <div className="w-full">
            <SwitchPreset
              size={globalSize}
              label="Chế độ máy bay"
              description="Vô hiệu hóa tất cả các kết nối không dây."
            />
          </div>
        </ExampleSection>

        <ExampleSection
          label="Trạng thái Lỗi (Error)"
          description="Báo lỗi khi bật/tắt thất bại."
          codeString={`<div className="w-full flex flex-col gap-6">
  <SwitchPreset
    label="Kết nối mạng (Lỗi)"
    errorMessage="Mất kết nối mạng. Không thể lưu cài đặt."
  />
</div>
`}
        >
          <div className="w-full flex flex-col gap-6">
            <SwitchPreset
              size={globalSize}
              label="Kết nối mạng (Lỗi)"
              errorMessage="Mất kết nối mạng. Không thể lưu cài đặt."
            />
          </div>
        </ExampleSection>
      </ExampleGrid>

      <ExampleGrid>
        <ExampleSection
          label="Khóa / Bất hoạt (Disabled)"
          description="Người dùng không thể tương tác với công tắc."
          codeString={`<div className="w-full flex flex-col gap-6">
  <SwitchPreset
    label="Đồng bộ danh bạ"
    description="Yêu cầu cấp quyền truy cập vào danh bạ."
    disabled
  />
  <SwitchPreset
    label="Dữ liệu di động"
    description="Dữ liệu di động đang bị tắt trên toàn cầu."
    defaultChecked
    disabled
  />
</div>
`}
        >
          <div className="w-full flex flex-col gap-6">
            <SwitchPreset
              size={globalSize}
              label="Đồng bộ danh bạ"
              description="Yêu cầu cấp quyền truy cập vào danh bạ."
              disabled
            />
            <SwitchPreset
              size={globalSize}
              label="Dữ liệu di động"
              description="Dữ liệu di động đang bị tắt trên toàn cầu."
              defaultChecked
              disabled
            />
          </div>
        </ExampleSection>

        <ExampleSection
          label="Nhãn phức tạp (Custom Content)"
          description="Truyền React Node vào Label để tạo giao diện phong phú."
          codeString={`<div className="w-full">
  <SwitchPreset
    label={
      <span className="flex items-center gap-2">
        Xác thực 2 bước (2FA)
        <span className="rounded bg-success/20 px-1.5 py-0.5 text-[10px] font-semibold text-success">KHUYÊN DÙNG</span>
      </span>
    }
    description="Thêm một lớp bảo mật bổ sung cho tài khoản của bạn. Chúng tôi sẽ yêu cầu mã xác nhận mỗi khi bạn đăng nhập từ thiết bị mới."
  />
</div>
`}
        >
          <div className="w-full">
            <SwitchPreset
              size={globalSize}
              label={
                <span className="flex items-center gap-2">
                  Xác thực 2 bước (2FA)
                  <span className="rounded bg-success/20 px-1.5 py-0.5 text-[10px] font-semibold text-success">
                    KHUYÊN DÙNG
                  </span>
                </span>
              }
              description="Thêm một lớp bảo mật bổ sung cho tài khoản của bạn. Chúng tôi sẽ yêu cầu mã xác nhận mỗi khi bạn đăng nhập từ thiết bị mới."
            />
          </div>
        </ExampleSection>
      </ExampleGrid>

      <ExampleGrid>
        <ExampleSection
          label="React State (Controlled Mode)"
          description="Sử dụng biến state của React để điều khiển."
          codeString={`const [checked, setChecked] = useState(false);

return (
  <SwitchPreset
    checked={checked}
    onCheckedChange={(c) => setChecked(!!c)}
    label="Chế độ nhà phát triển"
  />
);`}
        >
          <div className="w-full flex flex-col gap-4">
            <SwitchPreset
              size={globalSize}
              checked={checked}
              onCheckedChange={(c) => setChecked(!!c)}
              label="Chế độ nhà phát triển"
              description="Bật các tính năng thử nghiệm nội bộ."
            />
            <p className="text-sm text-muted-foreground">
              Trạng thái:{" "}
              <span className="font-mono font-bold text-foreground">
                {checked ? "BẬT" : "TẮT"}
              </span>
            </p>
          </div>
        </ExampleSection>

        <ExampleSection
          label="Tích hợp React Hook Form"
          description="Dùng Controller của RHF để bọc SwitchPreset."
          codeString={rhfCode}
        >
          <div className="w-full">
            <SwitchForm size={globalSize} />
          </div>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 2: Micro Content
// ──────────────────────────────────────────────────────────
function SwitchMicroShowcase({ globalSize }: { globalSize: Size }) {
  return (
    <div className="space-y-10 mt-6">
      <ExampleGrid>
        <ExampleSection
          label="Cơ bản (Primitive)"
          description="Kết nối thủ công Switch và SwitchThumb."
          codeString={`<div className="flex items-center gap-4">
  <Switch id="sw-micro">
    <SwitchThumb />
  </Switch>
  <label htmlFor="sw-micro" className="text-sm cursor-pointer">Công tắc đơn trần</label>
</div>
`}
        >
          <div className="flex items-center gap-4">
            <Switch size={globalSize} id="sw-micro">
              <SwitchThumb />
            </Switch>
            <label htmlFor="sw-micro" className="text-sm cursor-pointer">
              Công tắc đơn trần
            </label>
          </div>
        </ExampleSection>

        <ExampleSection
          label="Layout Đảo ngược (Reverse)"
          description="Dùng Field với orientation='horizontal' để đẩy Switch sang bên phải."
          codeString={`<div className="w-full space-y-4">
  <Field orientation="horizontal" className="justify-between">
    <FieldLabel htmlFor="switch-notif" className="font-normal cursor-pointer">Thông báo đẩy</FieldLabel>
    <Switch id="switch-notif" defaultChecked><SwitchThumb /></Switch>
  </Field>
  <Field orientation="horizontal" className="justify-between">
    <FieldLabel htmlFor="switch-dark" className="font-normal cursor-pointer">Chế độ tối (Dark Mode)</FieldLabel>
    <Switch id="switch-dark"><SwitchThumb /></Switch>
  </Field>
</div>
`}
        >
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
                Thông báo đẩy
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
                Chế độ tối (Dark Mode)
              </FieldLabel>
              <Switch id="switch-dark" size={globalSize}>
                <SwitchThumb />
              </Switch>
            </Field>
          </div>
        </ExampleSection>
      </ExampleGrid>

      <ExampleGrid>
        <ExampleSection
          label="Khóa (Disabled)"
          description="Các công tắc đảo ngược nhưng bị vô hiệu hoá."
          codeString={`<div className="w-full space-y-4">
  <Field orientation="horizontal" className="justify-between">
    <FieldLabel htmlFor="switch-d1" className="font-normal text-muted-foreground">Bluetooth</FieldLabel>
    <Switch id="switch-d1" disabled defaultChecked><SwitchThumb /></Switch>
  </Field>
  <Field orientation="horizontal" className="justify-between">
    <FieldLabel htmlFor="switch-d2" className="font-normal text-muted-foreground">Vị trí (GPS)</FieldLabel>
    <Switch id="switch-d2" disabled><SwitchThumb /></Switch>
  </Field>
</div>
`}
        >
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
              <Switch id="switch-d1" disabled size={globalSize} defaultChecked>
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
                Vị trí (GPS)
              </FieldLabel>
              <Switch id="switch-d2" disabled size={globalSize}>
                <SwitchThumb />
              </Switch>
            </Field>
          </div>
        </ExampleSection>

        <ExampleSection
          label="Trạng thái Lỗi thủ công"
          description="Tự gắn aria-invalid vào Switch."
          codeString={`<Field orientation="horizontal" data-invalid={true} className="justify-between items-start">
  <div className="grid gap-1.5">
    <FieldLabel htmlFor="switch-err" className="font-normal cursor-pointer">Tự động sao lưu</FieldLabel>
    <FieldError>Máy chủ sao lưu đang offline.</FieldError>
  </div>
  <Switch id="switch-err" aria-invalid={true} defaultChecked><SwitchThumb /></Switch>
</Field>
`}
        >
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
                Tự động sao lưu
              </FieldLabel>
              <FieldError>Máy chủ sao lưu đang offline.</FieldError>
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
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Story 1 · Dùng Macro</p>
        <h3 className="mt-0.5 text-sm font-semibold text-foreground">Form thông thường</h3>
      </div>
    </div>
    <p className="text-xs text-muted-foreground leading-relaxed">
      Bạn cần một Switch giống như Checkbox (công tắc ở bên trái, chữ bên phải). Dùng Preset cho nhanh gọn.
    </p>
    <div className="rounded-lg bg-muted/50 p-3">
      <SwitchPreset size="sm" label="Đồng ý điều khoản" description="Bật để tiếp tục." />
    </div>
  </div>

  {/* Story 2: Micro wins */}
  <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
    <div className="flex items-start gap-3">
      <span className="mt-0.5 shrink-0 rounded-full bg-blue-500/10 p-1.5 text-blue-600">
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Story 2 · Dùng Micro</p>
        <h3 className="mt-0.5 text-sm font-semibold text-foreground">Menu Cài đặt (iOS Style)</h3>
      </div>
    </div>
    <p className="text-xs text-muted-foreground leading-relaxed">
      Giống như iPhone, chữ nằm bên trái và Công tắc nằm tít bên phải của dòng. Macro không hỗ trợ layout này nên bạn dùng cấu trúc Field + Micro.
    </p>
    <div className="rounded-lg bg-muted/50 p-3 border divide-y">
      <div className="p-2 flex justify-between items-center">
        <span className="text-sm font-medium">Wi-Fi</span>
        <Switch size="sm" defaultChecked><SwitchThumb/></Switch>
      </div>
      <div className="p-2 flex justify-between items-center">
        <span className="text-sm font-medium">Bluetooth</span>
        <Switch size="sm"><SwitchThumb/></Switch>
      </div>
    </div>
  </div>
</div>
`}
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
                  Form thông thường
                </h3>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Bạn cần một Switch giống như Checkbox (công tắc ở bên trái, chữ
              bên phải). Dùng Preset cho nhanh gọn.
            </p>
            <div className="rounded-lg bg-muted/50 p-3">
              <SwitchPreset
                size="sm"
                label="Đồng ý điều khoản"
                description="Bật để tiếp tục."
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
                  Menu Cài đặt (iOS Style)
                </h3>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Giống như iPhone, chữ nằm bên trái và Công tắc nằm tít bên phải
              của dòng. Macro không hỗ trợ layout này nên bạn dùng cấu trúc
              Field + Micro.
            </p>
            <div className="rounded-lg bg-muted/50 p-3 border divide-y">
              <div className="p-2 flex justify-between items-center">
                <span className="text-sm font-medium">Wi-Fi</span>
                <Switch size="sm" defaultChecked>
                  <SwitchThumb />
                </Switch>
              </div>
              <div className="p-2 flex justify-between items-center">
                <span className="text-sm font-medium">Bluetooth</span>
                <Switch size="sm">
                  <SwitchThumb />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </ExampleSection>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 3: Entry point
// ──────────────────────────────────────────────────────────
export default function SwitchShowcase() {
  const { size: globalSize } = useDevContext();
  return (
    <Showcase
      title="Switch"
      description="Thành phần điều khiển cho phép người dùng chuyển đổi qua lại giữa 2 trạng thái Bật / Tắt."
      generalConcept={
        <div className="space-y-4">
          <ShowcaseDocs>
            <DocsH3>Khi nào nên dùng Macro</DocsH3>
            <DocsP>
              <DocsCode>SwitchPreset</DocsCode> đóng gói Switch + Label +
              Description + Error Message. Nó tự động căn chỉnh khoảng cách và
              liên kết ID. Dùng trong 95% trường hợp làm màn hình cài đặt
              (Settings) hoặc form yêu cầu bật/tắt tính năng.
            </DocsP>
          </ShowcaseDocs>
          <ShowcaseDocs>
            <DocsH3>Khi nào nên dùng Micro</DocsH3>
            <DocsP>
              Dùng <DocsCode>Switch</DocsCode> và{" "}
              <DocsCode>SwitchThumb</DocsCode> nguyên thuỷ khi bạn cần một
              layout không theo chuẩn <DocsCode>SwitchPreset</DocsCode> (ví dụ:
              Switch nằm bên phải Label thay vì nằm bên trái).
            </DocsP>
          </ShowcaseDocs>
        </div>
      }
      tabs={[
        {
          label: "Micro (Primitive)",
          content: <SwitchMicroShowcase globalSize={globalSize} />,
        },
        {
          label: "Macro (Preset)",
          content: <SwitchMacroShowcase globalSize={globalSize} />,
        },
      ]}
    />
  );
}
