import codeString from "@/components/blocks/settings.tsx?raw";
import { useI18n } from "~app/components/dev-context";
import { BlockViewer } from "~app/components/BlockViewer";

export default function SettingsBlockShowcase() {
  const t = useI18n();
  return (
    <BlockViewer
      blockId="settings"
      title={t("Bố cục cài đặt", "Settings Layout")}
      description={t("Trang cài đặt dựa trên tab dọc với nhiều điều khiển đầu vào.", "A vertical tabs-based settings page with various input controls.")}
      codeString={codeString}
    />
  );
}
