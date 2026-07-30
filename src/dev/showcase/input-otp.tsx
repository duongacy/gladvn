import { ShieldIcon, WrenchIcon } from "lucide-react";

import { InputOTPPreset } from "../../components/macro/input-otp-preset";
import {
  Field,
  FieldContent,
  FieldError,
  FieldLabel,
} from "../../components/micro/field";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "../../components/micro/input-otp";
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

function InputOTPMacroShowcase({ globalSize }: { globalSize: Size }) {
  const t = useI18n();
  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample
          title={t("Tiêu chuẩn (2 nhóm)", "Standard (2 groups)")}
          description={t(
            "Chia mã 6 số thành 2 nhóm (mỗi nhóm 3 số) cách nhau bởi dấu gạch ngang.",
            "Divide the 6-digit code into 2 groups (3 digits each) separated by a dash.",
          )}
          code={`<InputOTPPreset
    groups={[3, 3]}
    size="md"
    label="Verification Code"
    description="Please enter the 6-digit code sent to your phone."
  />`}
          preview={
            <>
              <InputOTPPreset
                className="w-full"
                groups={[3, 3]}
                size={globalSize}
                label="Verification Code"
                description="Please enter the 6-digit code sent to your phone."
              />
            </>
          }
        />

        <ShowcaseExample
          title={t("Trạng thái Lỗi (Error)", "Error State")}
          description={t(
            "Hiển thị viền đỏ và thông báo lỗi khi nhập sai mã.",
            "Display red border and error message when wrong code is entered.",
          )}
          code={`<InputOTPPreset
    groups={[3, 3]}
    size="md"
    label="Security Code"
    errorMessage="Incorrect verification code. Please try again."
  />`}
          preview={
            <>
              <InputOTPPreset
                className="w-full"
                groups={[3, 3]}
                size={globalSize}
                label="Security Code (Error)"
                errorMessage="Incorrect verification code. Please try again."
              />
            </>
          }
        />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample
          title={t("Khóa / Bất hoạt (Disabled)", "Disabled")}
          description={t(
            "Người dùng không thể nhập mã khi ở trạng thái này.",
            "User cannot input code in this state.",
          )}
          code={`<InputOTPPreset
    groups={[4]}
    size="md"
    label="Recovery Code"
    description="Your account is temporarily locked."
    disabled
  />`}
          preview={
            <>
              <InputOTPPreset
                className="w-full"
                groups={[4]}
                size={globalSize}
                label="Recovery Code"
                description="Your account is temporarily locked."
                disabled
              />
            </>
          }
        />

        <ShowcaseExample
          title={t("Tuỳ biến Nhóm & Dấu phân cách", "Custom Group & Separator")}
          description={t(
            "Dùng mảng groups tuỳ ý và đổi icon phân cách.",
            "Use arbitrary groups array and change separator icon.",
          )}
          code={`<InputOTPPreset
    groups={[2, 2, 2]}
    separator={
      <span className="text-muted-foreground/50">/</span>
    }
    size="md"
    label="Date of Birth (DD/MM/YY)"
  />`}
          preview={
            <>
              <div className="w-full flex flex-col gap-6">
                <InputOTPPreset
                  groups={[2, 2, 2]}
                  separator={
                    <span className="text-muted-foreground/50 text-sm font-semibold">
                      /
                    </span>
                  }
                  size={globalSize}
                  label="Custom Format"
                  description="Divided into 3 groups, separated by a slash."
                />
              </div>
            </>
          }
        />
      </ExampleGrid>
    </div>
  );
}

function InputOTPMicroShowcase({ globalSize }: { globalSize: Size }) {
  const t = useI18n();
  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample
          title={t("Cơ bản (Primitive)", "Primitive")}
          description={t(
            "Mã 6 chữ số liền mạch không có dấu phân cách.",
            "Contiguous 6-digit code without separators.",
          )}
          code={`<Field size="md">
    <FieldLabel htmlFor="otp-basic">PIN Code</FieldLabel>
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
          preview={
            <>
              <Field className="w-full" size={globalSize}>
                <FieldLabel htmlFor="tf-otp-0">PIN Code</FieldLabel>
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
            </>
          }
        />

        <ShowcaseExample
          title={t("Phân tách thủ công", "Manual Separation")}
          description={t(
            "Tự chèn InputOTPSeparator vào giữa các nhóm.",
            "Manually insert InputOTPSeparator between groups.",
          )}
          code={`<Field size="md">
    <FieldLabel htmlFor="otp-sep">Security Code</FieldLabel>
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
          preview={
            <>
              <Field className="w-full" size={globalSize}>
                <FieldLabel htmlFor="tf-otp-1">Security Code</FieldLabel>
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
            </>
          }
        />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample
          title={t("Trạng thái Lỗi thủ công", "Manual Error State")}
          description={t(
            "Gắn data-invalid vào Field để thay đổi màu sắc.",
            "Attach data-invalid to Field to change colors.",
          )}
          code={`<Field size="md" data-invalid={true}>
    <FieldLabel htmlFor="otp-err">Verification Code</FieldLabel>
    <FieldContent>
      <InputOTP id="otp-err" size="md" maxLength={4}>
        <InputOTPGroup>
          {Array.from({ length: 4 }).map((_, i) => (
            <InputOTPSlot key={i} index={i} />
          ))}
        </InputOTPGroup>
      </InputOTP>
    </FieldContent>
    <FieldError>Invalid code.</FieldError>
  </Field>`}
          preview={
            <>
              <Field className="w-full" size={globalSize} data-invalid={true}>
                <FieldLabel htmlFor="tf-otp-err">Verification Code</FieldLabel>
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
                <FieldError>Invalid code.</FieldError>
              </Field>
            </>
          }
        />

        <ShowcaseExample
          title={t("Disabled thủ công", "Manual Disabled")}
          description={t(
            "Truyền thuộc tính disabled.",
            "Pass disabled property.",
          )}
          code={`<Field size="md">
    <FieldLabel htmlFor="otp-disabled">OTP Code</FieldLabel>
    <FieldContent>
      <InputOTP
        id="otp-disabled"
        size="md"
        maxLength={4}
        disabled
      >
        <InputOTPGroup>
          {Array.from({ length: 4 }).map((_, i) => (
            <InputOTPSlot key={i} index={i} />
          ))}
        </InputOTPGroup>
      </InputOTP>
    </FieldContent>
  </Field>`}
          preview={
            <>
              <Field className="w-full" size={globalSize}>
                <FieldLabel htmlFor="tf-otp-d">OTP Code</FieldLabel>
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
            </>
          }
        />
      </ExampleGrid>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 3: Entry point
// ──────────────────────────────────────────────────────────
export default function InputOTPShowcase() {
  const { size: globalSize } = useDevContext();
  const t = useI18n();
  return (
    <Showcase
      title="Input OTP"
      description={t(
        "Trường nhập mật khẩu một lần (One-Time Password) có khả năng tự động tách chữ số và paste.",
        "One-Time Password input field capable of automatically splitting digits and handling paste.",
      )}
      guideline={
        <ShowcaseDocs>
          <DocsP>
            {t(
              "Dùng để nhập các đoạn mã có chiều dài cố định như OTP, PIN code, 2FA.",
              "Used to input fixed-length codes such as OTP, PIN codes, 2FA.",
            )}
          </DocsP>
        </ShowcaseDocs>
      }
      micro={{ content: <InputOTPMicroShowcase globalSize={globalSize} /> }}
      macro={{ content: <InputOTPMacroShowcase globalSize={globalSize} /> }}
    />
  );
}
