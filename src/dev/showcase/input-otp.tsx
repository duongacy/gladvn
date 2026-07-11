import { useDevContext } from "@/dev/components/dev-context";
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
import { ShieldIcon, WrenchIcon } from "lucide-react";
import { useState } from "react";

import { InputOTPPreset } from "@/components/macro/input-otp-preset";
import {
  Field,
  FieldContent,
  FieldError,
  FieldLabel,
} from "@/components/micro/field";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/micro/input-otp";

// ──────────────────────────────────────────────────────────
// SECTION 1: Macro Content
// ──────────────────────────────────────────────────────────
function InputOTPMacroShowcase({ globalSize }: { globalSize: Size }) {
  return (
    <div className="space-y-10 mt-6">
      <ExampleGrid>
        <ExampleSection
          label="Tiêu chuẩn (2 nhóm)"
          description="Chia mã 6 số thành 2 nhóm (mỗi nhóm 3 số) cách nhau bởi dấu gạch ngang."
          codeString={`<InputOTPPreset
  groups={[3, 3]}
  size="md"
  label="Mã xác thực"
  description="Vui lòng nhập mã 6 số được gửi tới điện thoại của bạn."
/>`}
        >
          <div className="w-full">
            <InputOTPPreset
              groups={[3, 3]}
              size={globalSize}
              label="Mã xác thực"
              description="Vui lòng nhập mã 6 số được gửi tới điện thoại của bạn."
            />
          </div>
        </ExampleSection>

        <ExampleSection
          label="Trạng thái Lỗi (Error)"
          description="Hiển thị viền đỏ và thông báo lỗi khi nhập sai mã."
          codeString={`<InputOTPPreset
  groups={[3, 3]}
  size="md"
  label="Mã bảo mật"
  errorMessage="Mã xác nhận không chính xác. Vui lòng thử lại."
/>`}
        >
          <div className="w-full">
            <InputOTPPreset
              groups={[3, 3]}
              size={globalSize}
              label="Mã bảo mật (Lỗi)"
              errorMessage="Mã xác nhận không chính xác. Vui lòng thử lại."
            />
          </div>
        </ExampleSection>
      </ExampleGrid>

      <ExampleGrid>
        <ExampleSection
          label="Khóa / Bất hoạt (Disabled)"
          description="Người dùng không thể nhập mã khi ở trạng thái này."
          codeString={`<InputOTPPreset
  groups={[4]}
  size="md"
  label="Mã khôi phục"
  description="Tài khoản của bạn đang bị khóa tạm thời."
  disabled
/>`}
        >
          <div className="w-full">
            <InputOTPPreset
              groups={[4]}
              size={globalSize}
              label="Mã khôi phục"
              description="Tài khoản của bạn đang bị khóa tạm thời."
              disabled
            />
          </div>
        </ExampleSection>

        <ExampleSection
          label="Tuỳ biến Nhóm & Dấu phân cách"
          description="Dùng mảng groups tuỳ ý và đổi icon phân cách."
          codeString={`<InputOTPPreset
  groups={[2, 2, 2]}
  separator={<span className="text-muted-foreground/50">/</span>}
  size="md"
  label="Ngày sinh (DD/MM/YY)"
/>`}
        >
          <div className="w-full flex flex-col gap-6">
            <InputOTPPreset
              groups={[2, 2, 2]}
              separator={
                <span className="text-muted-foreground/50 text-sm font-semibold">
                  /
                </span>
              }
              size={globalSize}
              label="Định dạng tuỳ chỉnh"
              description="Chia thành 3 nhóm, phân cách bằng dấu gạch chéo."
            />
          </div>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 2: Micro Content
// ──────────────────────────────────────────────────────────
function InputOTPMicroShowcase({ globalSize }: { globalSize: Size }) {
  return (
    <div className="space-y-10 mt-6">
      <ExampleGrid>
        <ExampleSection
          label="Cơ bản (Primitive)"
          description="Mã 6 chữ số liền mạch không có dấu phân cách."
          codeString={`<Field size="md">
  <FieldLabel htmlFor="otp-basic">Mã PIN</FieldLabel>
  <FieldContent>
    <InputOTP id="otp-basic" size="md" maxLength={6}>
      <InputOTPGroup>
        {Array.from({ length: 6 }).map((_, i) => (
          <InputOTPSlot key={i} index={i} />
        ))}
      </InputOTPGroup>
    </InputOTP>
  </FieldContent>
</Field>`}
        >
          <div className="w-full">
            <Field size={globalSize}>
              <FieldLabel htmlFor="tf-otp-0">Mã PIN</FieldLabel>
              <FieldContent>
                <InputOTP id="tf-otp-0" size={globalSize} maxLength={6}>
                  <InputOTPGroup>
                    {Array.from({ length: 6 }).map((_, index) => (
                      <InputOTPSlot
                        key={`tf-otp-0-slot-${index}`}
                        index={index}
                      />
                    ))}
                  </InputOTPGroup>
                </InputOTP>
              </FieldContent>
            </Field>
          </div>
        </ExampleSection>

        <ExampleSection
          label="Phân tách thủ công"
          description="Tự chèn InputOTPSeparator vào giữa các nhóm."
          codeString={`<Field size="md">
  <FieldLabel htmlFor="otp-sep">Mã bảo mật</FieldLabel>
  <FieldContent>
    <InputOTP id="otp-sep" size="md" maxLength={6}>
      <InputOTPGroup>
        {Array.from({ length: 3 }).map((_, i) => (
          <InputOTPSlot key={i} index={i} />
        ))}
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        {Array.from({ length: 3 }).map((_, i) => (
          <InputOTPSlot key={i + 3} index={i + 3} />
        ))}
      </InputOTPGroup>
    </InputOTP>
  </FieldContent>
</Field>`}
        >
          <div className="w-full">
            <Field size={globalSize}>
              <FieldLabel htmlFor="tf-otp-1">Mã bảo mật</FieldLabel>
              <FieldContent>
                <InputOTP id="tf-otp-1" size={globalSize} maxLength={6}>
                  <InputOTPGroup>
                    {Array.from({ length: 3 }).map((_, index) => (
                      <InputOTPSlot
                        key={`tf-otp-1-slot-a-${index}`}
                        index={index}
                      />
                    ))}
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    {Array.from({ length: 3 }).map((_, index) => (
                      <InputOTPSlot
                        key={`tf-otp-1-slot-b-${index + 3}`}
                        index={index + 3}
                      />
                    ))}
                  </InputOTPGroup>
                </InputOTP>
              </FieldContent>
            </Field>
          </div>
        </ExampleSection>
      </ExampleGrid>

      <ExampleGrid>
        <ExampleSection
          label="Trạng thái Lỗi thủ công"
          description="Gắn data-invalid vào Field để thay đổi màu sắc."
          codeString={`<Field size="md" data-invalid={true}>
  <FieldLabel htmlFor="otp-err">Mã xác minh</FieldLabel>
  <FieldContent>
    <InputOTP id="otp-err" size="md" maxLength={4}>
      <InputOTPGroup>
        {Array.from({ length: 4 }).map((_, i) => (
          <InputOTPSlot key={i} index={i} />
        ))}
      </InputOTPGroup>
    </InputOTP>
  </FieldContent>
  <FieldError>Mã không hợp lệ.</FieldError>
</Field>`}
        >
          <div className="w-full">
            <Field size={globalSize} data-invalid={true}>
              <FieldLabel htmlFor="tf-otp-err">Mã xác minh</FieldLabel>
              <FieldContent>
                <InputOTP id="tf-otp-err" size={globalSize} maxLength={4}>
                  <InputOTPGroup>
                    {Array.from({ length: 4 }).map((_, index) => (
                      <InputOTPSlot
                        key={`tf-otp-err-slot-${index}`}
                        index={index}
                      />
                    ))}
                  </InputOTPGroup>
                </InputOTP>
              </FieldContent>
              <FieldError>Mã không hợp lệ.</FieldError>
            </Field>
          </div>
        </ExampleSection>

        <ExampleSection
          label="Disabled thủ công"
          description="Truyền thuộc tính disabled."
          codeString={`<Field size="md">
  <FieldLabel htmlFor="otp-disabled">Mã OTP</FieldLabel>
  <FieldContent>
    <InputOTP id="otp-disabled" size="md" maxLength={4} disabled>
      <InputOTPGroup>
        {Array.from({ length: 4 }).map((_, i) => (
          <InputOTPSlot key={i} index={i} />
        ))}
      </InputOTPGroup>
    </InputOTP>
  </FieldContent>
</Field>`}
        >
          <div className="w-full">
            <Field size={globalSize}>
              <FieldLabel htmlFor="tf-otp-d">Mã OTP</FieldLabel>
              <FieldContent>
                <InputOTP
                  id="tf-otp-d"
                  size={globalSize}
                  maxLength={4}
                  disabled
                >
                  <InputOTPGroup>
                    {Array.from({ length: 4 }).map((_, index) => (
                      <InputOTPSlot
                        key={`tf-otp-d-slot-${index}`}
                        index={index}
                      />
                    ))}
                  </InputOTPGroup>
                </InputOTP>
              </FieldContent>
            </Field>
          </div>
        </ExampleSection>
      </ExampleGrid>

      <ExampleSection
        label="🧭 Use Case Comparison"
        description="So sánh nhanh khi nào dùng Micro và Macro."
        fullWidth
        codeString={`{/* Macro — đơn giản, 1 dòng khai báo */}
<InputOTPPreset groups={[3, 3]} size="md" label="Mã xác thực" />

{/* Micro — khi cần custom từng slot */}
<InputOTP size="md" maxLength={6}>
  <InputOTPGroup>
    {Array.from({ length: 3 }).map((_, i) => (
      <InputOTPSlot key={i} index={i} />
    ))}
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    {Array.from({ length: 3 }).map((_, i) => (
      <InputOTPSlot key={i + 3} index={i + 3} />
    ))}
  </InputOTPGroup>
</InputOTP>`}
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Story 1: Macro wins */}
          <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 shrink-0 rounded-full bg-green-500/10 p-1.5 text-green-600">
                <ShieldIcon className="size-4" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Story 1 · Dùng Macro
                </p>
                <h3 className="mt-0.5 text-sm font-semibold text-foreground">
                  Form xác thực SMS thông thường
                </h3>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Thay vì phải dùng vòng lặp <DocsCode>.map()</DocsCode> dài dòng
              cho từng nhóm số, dùng Preset{" "}
              <DocsCode>groups={`{[3, 3]}`}</DocsCode> để code sinh ra y chang
              chỉ với 1 dòng khai báo. Cực kỳ sạch.
            </p>
          </div>

          {/* Story 2: Micro wins */}
          <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 shrink-0 rounded-full bg-blue-500/10 p-1.5 text-blue-600">
                <WrenchIcon className="size-4" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Story 2 · Dùng Micro
                </p>
                <h3 className="mt-0.5 text-sm font-semibold text-foreground">
                  Custom Slot Design
                </h3>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Bạn cần can thiệp trực tiếp vào từng ô số (ví dụ: style lại các ô
              đầu là số, ô cuối là chữ cái đặc biệt, hoặc xen kẽ Icon vào giữa
              thay vì dấu gạch ngang). Lúc này bạn buộc phải viết vòng lặp{" "}
              <DocsCode>.map()</DocsCode> và dùng Micro.
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
export default function InputOTPShowcase() {
  const { size: globalSize } = useDevContext();
  return (
    <Showcase
      title="Input OTP"
      description="Trường nhập mật khẩu một lần (One-Time Password) có khả năng tự động tách chữ số và paste."
      generalConcept={
        <ShowcaseDocs>
          <DocsP>
            Dùng để nhập các đoạn mã có chiều dài cố định như OTP, PIN code,
            2FA.
          </DocsP>
          <DocsH3>Khi nào nên dùng Macro</DocsH3>
          <DocsP>
            <DocsCode>InputOTPPreset</DocsCode> tự động sinh ra các nhóm số
            (`InputOTPGroup`) và dấu phân cách (`InputOTPSeparator`) dựa vào
            prop <DocsCode>groups</DocsCode> (ví dụ: `groups={[3, 3]}`). Dùng
            Preset này cho 99% các trường hợp form nhập mã xác thực (OTP) vì nó
            đã tích hợp sẵn Label và Error Message.
          </DocsP>
          <DocsH3>Khi nào nên dùng Micro</DocsH3>
          <DocsP>
            Dùng <DocsCode>InputOTP</DocsCode> và{" "}
            <DocsCode>InputOTPGroup</DocsCode> thủ công khi bạn cần một giao
            diện nhập mã đặc thù không theo chuẩn (ví dụ: các ô số nằm rải rác
            trong một thiết kế đồ hoạ) hoặc khi chèn trực tiếp vào một luồng
            không có Label đi kèm.
          </DocsP>
        </ShowcaseDocs>
      }
      tabs={[
        {
          label: "Micro (Primitive)",
          content: <InputOTPMicroShowcase globalSize={globalSize} />,
        },
        {
          label: "Macro (Preset)",
          content: <InputOTPMacroShowcase globalSize={globalSize} />,
        },
      ]}
    />
  );
}
