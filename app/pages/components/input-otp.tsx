import React from "react";
import { ShieldIcon, WrenchIcon } from "lucide-react";

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
import { useDevContext, useI18n } from "~app/components/dev-context";
import {
  ConfigurableShowcase,
  ShowcaseDocs,
  DocsP,
} from "~app/components/showcase";

function useInputOTPExamples() {
  const t = useI18n();
  const { size: globalSize } = useDevContext();

  return React.useMemo(
    () => [
      {
        title: t("Cơ bản", "Primitive"),
        description: t(
          "Mã 6 chữ số liền mạch không có dấu phân cách.",
          "Contiguous 6-digit code without separators."
        ),
        microCode: `<Field size="md">
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
</Field>`,
        microPreview: (
          <Field className="w-full" size={globalSize}>
            <FieldLabel htmlFor="tf-otp-0">PIN Code</FieldLabel>
            <FieldContent>
              <InputOTP id="tf-otp-0" size={globalSize} maxLength={6}>
                <InputOTPGroup>
                  {Array.from({ length: 6 }).map((_, index) => (
                    <InputOTPSlot key={`tf-otp-0-slot-${index}`} index={index} />
                  ))}
                </InputOTPGroup>
              </InputOTP>
            </FieldContent>
          </Field>
        ),
      },
      {
        title: t("Tiêu chuẩn", "Standard (2 groups)"),
        description: t(
          "Chia mã 6 số thành 2 nhóm (mỗi nhóm 3 số) cách nhau bởi dấu gạch ngang.",
          "Divide the 6-digit code into 2 groups (3 digits each) separated by a dash."
        ),
        macroCode: `<InputOTPPreset
  groups={[3, 3]}
  label="Verification Code"
  description="Please enter the 6-digit code sent to your phone."
  className="w-full"
/>`,
        macroPreview: (
          <InputOTPPreset
            className="w-full"
            groups={[3, 3]}
            size={globalSize}
            label="Verification Code"
            description="Please enter the 6-digit code sent to your phone."
          />
        ),
      },
      {
        title: t("Phân tách thủ công", "Manual Separation"),
        description: t(
          "Tự chèn InputOTPSeparator vào giữa các nhóm.",
          "Manually insert InputOTPSeparator between groups."
        ),
        microCode: `<Field size="md">
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
</Field>`,
        microPreview: (
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
        ),
      },
      {
        title: t("Trạng thái Lỗi", "Error State"),
        description: t(
          "Hiển thị viền đỏ và thông báo lỗi khi nhập sai mã.",
          "Display red border and error message when wrong code is entered."
        ),
        macroCode: `<InputOTPPreset
  groups={[3, 3]}
  label="Security Code"
  errorMessage="Incorrect verification code. Please try again."
  className="w-full"
/>`,
        macroPreview: (
          <InputOTPPreset
            className="w-full"
            groups={[3, 3]}
            size={globalSize}
            label="Security Code"
            errorMessage="Incorrect verification code. Please try again."
          />
        ),
        microCode: `<Field data-invalid={true} className="w-full">
  <FieldLabel htmlFor="otp-err">Verification Code</FieldLabel>
  <FieldContent>
    <InputOTP id="otp-err" maxLength={4}>
      <InputOTPGroup>
        {Array.from({ length: 4 }).map((_, i) => (
          <InputOTPSlot key={i} index={i} />
        ))}
      </InputOTPGroup>
    </InputOTP>
  </FieldContent>
  <FieldError>Invalid code.</FieldError>
</Field>`,
        microPreview: (
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
        ),
      },
      {
        title: t("Khóa / Bất hoạt", "Disabled"),
        description: t(
          "Người dùng không thể nhập mã khi ở trạng thái này.",
          "User cannot input code in this state."
        ),
        macroCode: `<InputOTPPreset
  groups={[4]}
  label="Recovery Code"
  description="Your account is temporarily locked."
  disabled
  className="w-full"
/>`,
        macroPreview: (
          <InputOTPPreset
            className="w-full"
            groups={[4]}
            size={globalSize}
            label="Recovery Code"
            description="Your account is temporarily locked."
            disabled
          />
        ),
        microCode: `<Field className="w-full">
  <FieldLabel htmlFor="otp-disabled">OTP Code</FieldLabel>
  <FieldContent>
    <InputOTP
      id="otp-disabled"
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
</Field>`,
        microPreview: (
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
        ),
      },
      {
        title: t("Tuỳ biến Nhóm & Dấu phân cách", "Custom Group & Separator"),
        description: t(
          "Dùng mảng groups tuỳ ý và đổi icon phân cách.",
          "Use arbitrary groups array and change separator icon."
        ),
        macroCode: `<InputOTPPreset
  groups={[2, 2, 2]}
  separator={
    <span className="text-muted-foreground/50 text-sm font-semibold">/</span>
  }
  label="Custom Format"
  description="Divided into 3 groups, separated by a slash."
  className="w-full"
/>`,
        macroPreview: (
          <InputOTPPreset
            className="w-full"
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
        ),
      },
    ],
    [t, globalSize]
  );
}

export default function InputOTPShowcase() {
  const t = useI18n();
  const examples = useInputOTPExamples();

  return (
    <ConfigurableShowcase
      title="Input OTP"
      description={t(
        "Trường nhập mật khẩu một lần (One-Time Password) có khả năng tự động tách chữ số và paste.",
        "One-Time Password input field capable of automatically splitting digits and handling paste."
      )}
      guideline={
        <ShowcaseDocs>
          <DocsP>
            {t(
              "Dùng để nhập các đoạn mã có chiều dài cố định như OTP, PIN code, 2FA.",
              "Used to input fixed-length codes such as OTP, PIN codes, 2FA."
            )}
          </DocsP>
        </ShowcaseDocs>
      }
      examples={examples}
    />
  );
}
