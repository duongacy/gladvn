import codeString from "../../blocks/pricing.tsx?raw";
import { useI18n } from "../../dev/components/dev-context";
import { BlockViewer } from "../components/BlockViewer";

export default function PricingBlockShowcase() {
  const t = useI18n();
  return (
    <BlockViewer
      blockId="pricing"
      title={t("Bảng giá", "Pricing Layout")}
      description={t(
        "Trang bảng giá tiêu chuẩn với công tắc thanh toán tháng/năm, tính năng gói và huy hiệu nổi bật.",
        "Standard pricing page with monthly/yearly billing toggle, plan features, and popular badges."
      )}
      codeString={codeString}
    />
  );
}
