import codeString from "../../blocks/auth-recovery.tsx?raw";
import { useI18n } from "../../dev/components/dev-context";
import { BlockViewer } from "../components/BlockViewer";

export default function AuthRecoveryBlockShowcase() {
  const t = useI18n();
  return (
    <BlockViewer
      blockId="auth-recovery"
      title={t("Khôi phục xác thực", "Auth Recovery")}
      description={t(
        "Luồng khôi phục và đặt lại mật khẩu đơn giản.",
        "A simple password recovery and reset flow.",
      )}
      codeString={codeString}
    />
  );
}
