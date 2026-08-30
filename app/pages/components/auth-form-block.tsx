import codeString from "@/components/blocks/auth-form.tsx?raw";
import { useI18n } from "~app/components/dev-context";
import { BlockViewer } from "~app/components/BlockViewer";

export default function AuthFormBlockShowcase() {
  const t = useI18n();
  return (
    <BlockViewer
      blockId="auth-form"
      title={t("Biểu mẫu đăng nhập", "Login Form")}
      description={t(
        "Bố cục biểu mẫu xác thực đơn giản, gọn gàng cho đăng nhập và đăng ký.",
        "A clean, simple authentication form layout for login and registration.",
      )}
      codeString={codeString}
    />
  );
}
