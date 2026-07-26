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
  FieldLabel
} from "../../components/micro/field";
import { Label } from "../../components/micro/label";
import { useDevContext } from "../../dev/components/dev-context";
import {
  DocsP,
  ExampleGrid,
  ExampleSection,
  Showcase,
  ShowcaseDocs
} from "../../dev/components/showcase";
import { type Size } from "../../lib/types";

const formSchema = z.object({
  mobile: z.boolean().default(false).optional() });
type FormValues = z.infer<typeof formSchema>;

function CheckboxForm({ size }: { size: Size }) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { mobile: false } });

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
            description="Cho phép chúng tôi gửi thông báo đến thiết bị di động của bạn."
            checked={field.value}
            onCheckedChange={field.onChange}
            errorMessage={fieldState.error?.message}
          />
        )}
      />
      <Button type="submit" size={size}>
        Lưu cài đặt
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
  const [checked, setChecked] = useState(false);

  return (
    <div className="space-y-10 mt-6">
      <ExampleGrid>
        <ExampleSection
          label="Tiêu chuẩn"
          description="Checkbox cơ bản kèm nhãn và mô tả."
          codeString={`<CheckboxPreset
    label="Đồng ý với điều khoản"
    description="Bạn phải đồng ý với các điều khoản và điều kiện sử dụng."
    className="w-full"
  />`}
        >
          <CheckboxPreset
            size={globalSize}
            label="Đồng ý với điều khoản"
            description="Bạn phải đồng ý với các điều khoản và điều kiện sử dụng."
            className="w-full"
          />
        </ExampleSection>

        <ExampleSection
          label="Trạng thái Lỗi (Error)"
          description="Báo lỗi khi chưa check vào ô (thường dùng trong form)."
          codeString={`<div className="w-full flex flex-col gap-6">
    <CheckboxPreset
      label="Xác nhận đủ 18 tuổi"
      errorMessage="Bạn phải xác nhận đủ tuổi để tiếp tục."
    />
  </div>`}
        >
          <div className="w-full flex flex-col gap-6">
            <CheckboxPreset
              size={globalSize}
              label="Xác nhận đủ 18 tuổi"
              errorMessage="Bạn phải xác nhận đủ tuổi để tiếp tục."
            />
          </div>
        </ExampleSection>
      </ExampleGrid>

      <ExampleGrid>
        <ExampleSection
          label="Trạng thái Khóa (Disabled)"
          description="Checkbox bị vô hiệu hóa, không thể click."
          codeString={`<div className="w-full flex flex-col gap-6">
    <CheckboxPreset
      label="Đăng ký nhận bản tin"
      description="Tính năng này đang được bảo trì."
      disabled
    />
    <CheckboxPreset
      label="Cho phép thu thập log"
      description="Hệ thống mặc định thu thập log bảo mật."
      defaultChecked
      disabled
    />
  </div>`}
        >
          <div className="w-full flex flex-col gap-6">
            <CheckboxPreset
              size={globalSize}
              label="Đăng ký nhận bản tin"
              description="Tính năng này đang được bảo trì."
              disabled
            />
            <CheckboxPreset
              size={globalSize}
              label="Cho phép thu thập log"
              description="Hệ thống mặc định thu thập log bảo mật."
              defaultChecked
              disabled
            />
          </div>
        </ExampleSection>

        <ExampleSection
          label="React Node Label (Custom Content)"
          description="Label có thể chứa các component React phức tạp như Badge."
          codeString={`<CheckboxPreset
    label={
      <span className="flex items-center gap-2">
        Tham gia chương trình BETA{" "}
        <span className="rounded bg-primary/20 px-1.5 py-0.5 text-[10px] font-semibold text-primary">
          NEW
        </span>
      </span>
    }
    description="Được trải nghiệm sớm các tính năng mới trước khi phát hành chính thức. Có thể xảy ra lỗi."
    className="w-full"
  />`}
        >
          <CheckboxPreset
            size={globalSize}
            label={
              <span className="flex items-center gap-2">
                Tham gia chương trình BETA{" "}
                <span className="rounded bg-primary/20 px-1.5 py-0.5 text-[10px] font-semibold text-primary">
                  NEW
                </span>
              </span>
            }
            description="Được trải nghiệm sớm các tính năng mới trước khi phát hành chính thức. Có thể xảy ra lỗi."
            className="w-full"
          />
        </ExampleSection>
      </ExampleGrid>

      <ExampleGrid>
        <ExampleSection
          label="React State (Controlled Mode)"
          description="Sử dụng biến state của React để điều khiển."
          codeString={`const [checked, setChecked] = useState(false); return (
  <CheckboxPreset
    checked={checked}
    onCheckedChange={(c) => setChecked(!!c)}
    label="Checkbox có kiểm soát"
    description="React quản lý trạng thái của checkbox này."
  />
  );`}
        >
          <div className="w-full flex flex-col gap-4">
            <CheckboxPreset
              size={globalSize}
              checked={checked}
              onCheckedChange={(c) => setChecked(!!c)}
              label="Checkbox có kiểm soát"
              description="React quản lý trạng thái của checkbox này."
            />
            <p className="text-sm text-muted-foreground">
              Giá trị hiện tại:{" "}
              <span className="font-mono font-bold text-foreground">
                {checked ? "TRUE" : "FALSE"}
              </span>
            </p>
          </div>
        </ExampleSection>

        <ExampleSection
          label="Tích hợp React Hook Form"
          description="Dùng Controller của RHF để bọc CheckboxPreset."
          codeString={rhfCode}
        >
          <CheckboxForm size={globalSize} />
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}

function CheckboxMicroShowcase({ globalSize }: { globalSize: Size }) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="space-y-10 mt-6">
      <ExampleGrid>
        <ExampleSection
          label="Cơ bản (Primitive)"
          description="Kết nối thủ công Checkbox với thẻ Label html."
          codeString={`<div className="flex items-center gap-3">
    <Checkbox id="cb-micro-default">
      <CheckboxIndicator>
        <CheckIcon />
      </CheckboxIndicator>
    </Checkbox>
    <Label
      htmlFor="cb-micro-default"
      className="font-normal cursor-pointer"
    >
      Đồng ý với điều khoản
    </Label>
  </div>`}
        >
          <div className="flex items-center gap-3">
            <Checkbox id="cb-micro-default" size={globalSize}>
              <CheckboxIndicator>
                <CheckIcon />
              </CheckboxIndicator>
            </Checkbox>
            <Label
              htmlFor="cb-micro-default"
              className="font-normal cursor-pointer"
            >
              Đồng ý với điều khoản
            </Label>
          </div>
        </ExampleSection>

        <ExampleSection
          label="Icon Tuỳ Biến (Custom Icon)"
          description="Vì dùng Composition, bạn có thể truyền bất kỳ icon nào (VD: MinusIcon) vào Indicator."
          codeString={`<div className="flex items-center gap-3">
    <Checkbox id="cb-custom-icon">
      <CheckboxIndicator>
        <MinusIcon />
      </CheckboxIndicator>
    </Checkbox>
    <Label
      htmlFor="cb-custom-icon"
      className="font-normal cursor-pointer"
    >
      Trạng thái vô định (Indeterminate)
    </Label>
  </div>`}
        >
          <div className="flex items-center gap-3">
            <Checkbox id="cb-custom-icon" size={globalSize}>
              <CheckboxIndicator>
                <MinusIcon />
              </CheckboxIndicator>
            </Checkbox>
            <Label
              htmlFor="cb-custom-icon"
              className="font-normal cursor-pointer"
            >
              Trạng thái vô định (Indeterminate)
            </Label>
          </div>
        </ExampleSection>
      </ExampleGrid>

      <ExampleGrid>
        <ExampleSection
          label="Ghép nối với Field"
          description="Lắp ráp thủ công các thành phần Field khi cần layout phức tạp."
          codeString={`<Field className="flex items-start gap-3">
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
        Lưu mật khẩu
      </FieldLabel>
      <FieldDescription>
        Tự động đăng nhập vào lần sau.
      </FieldDescription>
    </div>
  </Field>`}
        >
          <Field className="flex items-start gap-3" data-size={globalSize}>
            {}
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
                Lưu mật khẩu
              </FieldLabel>
              <FieldDescription>
                Tự động đăng nhập vào lần sau.
              </FieldDescription>
            </div>
          </Field>
        </ExampleSection>

        <ExampleSection
          label="Trạng thái Lỗi thủ công"
          description="Tự gắn aria-invalid vào Checkbox và dùng FieldError."
          codeString={`<Field
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
        Đồng ý quy định
      </FieldLabel>
      <FieldError>Bắt buộc phải chọn ô này.</FieldError>
    </div>
  </Field>`}
        >
          <Field
            className="flex flex-row items-start gap-3"
            data-invalid={true}
            data-size={globalSize}
          >
            <div className="flex items-center text-sm leading-snug group-data-[size=sm]/field:text-xs">
              &#8203;
              <Checkbox id="cb-err-micro" size={globalSize} aria-invalid={true}>
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
                Đồng ý quy định
              </FieldLabel>
              <FieldError>Bắt buộc phải chọn ô này.</FieldError>
            </div>
          </Field>
        </ExampleSection>
      </ExampleGrid>

      <ExampleSection
        label="🧭 So sánh Use Case"
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
            Checkbox trong trang Cài đặt
          </h3>
        </div>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed">
        Form cài đặt có rất nhiều tuỳ chọn dạng "Bật / Tắt"
        với mô tả dài. Code sẽ rất sạch và ngắn.
      </p>
      <div className="rounded-lg bg-muted/50 p-3 flex flex-col gap-4">
        <CheckboxPreset
          size="sm"
          label="Nhận Email Marketing"
          description="Gửi email cho bạn về các chương trình khuyến mãi hàng tuần."
        />
        <CheckboxPreset
          size="sm"
          label="Thông báo bảo mật"
          description="Cảnh báo khi có thiết bị lạ đăng nhập."
          defaultChecked
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
            Table Row Selection
          </h3>
        </div>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed">
        Bạn cần ô Checkbox ở đầu mỗi dòng trong bảng để chọn
        nhiều hàng. Ở đây Checkbox đứng độc lập, hoàn toàn
        không cần Label hay Description đi kèm.
      </p>
      <div className="rounded-lg bg-muted/50 p-3">
        <div className="border border-border rounded-md divide-y overflow-hidden">
          <div className="flex items-center gap-3 p-2 bg-muted">
            <Checkbox size="sm">
              <CheckboxIndicator>
                <MinusIcon />
              </CheckboxIndicator>
            </Checkbox>
            <span className="text-xs font-semibold">
              Tên nhân viên
            </span>
          </div>
          <div className="flex items-center gap-3 p-2 bg-background hover:bg-muted/50">
            <Checkbox size="sm" defaultChecked>
              <CheckboxIndicator>
                <CheckIcon />
              </CheckboxIndicator>
            </Checkbox>
            <span className="text-xs">John Doe</span>
          </div>
        </div>
      </div>
    </div>
  </div>`}
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {}
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
                  Checkbox trong trang Cài đặt
                </h3>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Form cài đặt có rất nhiều tuỳ chọn dạng "Bật / Tắt" với mô tả dài.
              Code sẽ rất sạch và ngắn.
            </p>
            <div className="rounded-lg bg-muted/50 p-3 flex flex-col gap-4">
              <CheckboxPreset
                size="sm"
                label="Nhận Email Marketing"
                description="Gửi email cho bạn về các chương trình khuyến mãi hàng tuần."
              />
              <CheckboxPreset
                size="sm"
                label="Thông báo bảo mật"
                description="Cảnh báo khi có thiết bị lạ đăng nhập."
                defaultChecked
              />
            </div>
          </div>

          {}
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
                  Table Row Selection
                </h3>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Bạn cần ô Checkbox ở đầu mỗi dòng trong bảng để chọn nhiều hàng. Ở
              đây Checkbox đứng độc lập, hoàn toàn không cần Label hay
              Description đi kèm.
            </p>
            <div className="rounded-lg bg-muted/50 p-3">
              <div className="border border-border rounded-md divide-y overflow-hidden">
                <div className="flex items-center gap-3 p-2 bg-muted">
                  <Checkbox size="sm">
                    <CheckboxIndicator>
                      <MinusIcon />
                    </CheckboxIndicator>
                  </Checkbox>
                  <span className="text-xs font-semibold">Tên nhân viên</span>
                </div>
                <div className="flex items-center gap-3 p-2 bg-background hover:bg-muted/50">
                  <Checkbox size="sm" defaultChecked>
                    <CheckboxIndicator>
                      <CheckIcon />
                    </CheckboxIndicator>
                  </Checkbox>
                  <span className="text-xs">John Doe</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ExampleSection>
    </div>
  );
}

export default function CheckboxShowcase() {
  const { size: globalSize } = useDevContext();
  return (
    <Showcase
      title="Checkbox"
      description="Thành phần cho phép người dùng chọn hoặc bỏ chọn một tuỳ chọn độc lập."
      generalConcept={
        <ShowcaseDocs>
          <DocsP>
            Dùng để thu thập đầu vào dạng đúng/sai hoặc nhiều lựa chọn độc lập
            từ người dùng. Thường đi kèm với nhãn (label) và mô tả để giải thích
            ý nghĩa của tùy chọn.
          </DocsP>
        </ShowcaseDocs>
      }
      tabs={[
        {
          label: "Micro (Primitive)",
          content: <CheckboxMicroShowcase globalSize={globalSize} /> },
        {
          label: "Macro (Preset)",
          content: <CheckboxMacroShowcase globalSize={globalSize} /> },
      ]}
    />
  );
}
