import codeString from "../../blocks/auth-split.tsx?raw";
import { useI18n } from "../../dev/components/dev-context";
import { BlockViewer } from "../components/BlockViewer";

export default function AuthSplitBlockShowcase() {
  const t = useI18n();
  return (
    <BlockViewer
      blockId="auth-split"
      title={t("Bố cục chia đôi", "Auth Split Layout")}
      description={t("Trang xác thực chia màn hình với khu vực hình ảnh hoặc thương hiệu.", "A split-screen authentication page with an image or branding area.")}
      codeString={codeString}
    />
  );
}
