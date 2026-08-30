import React from "react";
import { Label } from "@/components/micro/label";
import { useDevContext, useI18n } from "~app/components/dev-context";
import {
  ConfigurableShowcase,
  ShowcaseDocs,
  DocsP,
  DocsCode,
} from "~app/components/showcase";

function useLabelExamples() {
  const t = useI18n();
  const { size: globalSize } = useDevContext();

  return React.useMemo(
    () => [
      {
        title: t("Mặc định", "Default"),
        description: t(
          "Cách sử dụng nhãn tiêu chuẩn.",
          "How to use the standard label."
        ),
        microCode: `<Label htmlFor="terms">Accept terms and conditions</Label>`,
        microPreview: (
          <Label htmlFor="terms" size={globalSize}>
            Accept terms and conditions
          </Label>
        ),
      },
      {
        title: t("Khóa / Bất hoạt", "Disabled"),
        description: t(
          "Trạng thái bị vô hiệu hóa khi nằm trong group bị vô hiệu.",
          "Disabled state when placed in a disabled group."
        ),
        microCode: `<div data-disabled="true" className="group">
  <Label htmlFor="disabled">This label is disabled</Label>
</div>`,
        microPreview: (
          <div data-disabled="true" className="group">
            <Label htmlFor="disabled" size={globalSize}>
              This label is disabled
            </Label>
          </div>
        ),
      },
      {
        title: t("Trạng thái Lỗi", "Error State"),
        description: t(
          "Hiển thị màu đỏ khi nằm trong group bị lỗi (data-invalid).",
          "Displays red color when placed in an error group (data-invalid)."
        ),
        microCode: `<div data-invalid="true" className="group">
  <Label htmlFor="error">Email is required</Label>
</div>`,
        microPreview: (
          <div data-invalid="true" className="group">
            <Label htmlFor="error" size={globalSize}>
              Email is required
            </Label>
          </div>
        ),
      },
      {
        title: t("Kèm Input ngang hàng", "With Peer Input"),
        description: t(
          "Phản hồi trạng thái disabled của input liền kề (dùng class peer).",
          "Responds to the disabled state of an adjacent input (using the peer class)."
        ),
        microCode: `<div className="flex items-center gap-2">
  <input
    type="checkbox"
    disabled
    id="peer-disabled"
    className="peer w-4 h-4"
  />
  <Label htmlFor="peer-disabled">
    Disabled by peer checkbox
  </Label>
</div>`,
        microPreview: (
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              disabled
              id="peer-disabled"
              className="peer w-4 h-4"
            />
            <Label htmlFor="peer-disabled" size={globalSize}>
              Disabled by peer checkbox
            </Label>
          </div>
        ),
      },
    ],
    [t, globalSize]
  );
}

export default function LabelShowcase() {
  const t = useI18n();
  const examples = useLabelExamples();

  return (
    <ConfigurableShowcase
      title="Label"
      description={t(
        "Nhãn gắn với form control, cải thiện accessibility.",
        "Label attached to a form control, improving accessibility."
      )}
      guideline={
        <ShowcaseDocs>
          <DocsP>
            {t(
              "Label được sử dụng để gắn nhãn cho các trường nhập liệu form. Nó cải thiện khả năng truy cập (accessibility) bằng cách liên kết văn bản với một form control cụ thể (thông qua thuộc tính htmlFor).",
              "Label is used to label form input fields. It improves accessibility by associating text with a specific form control (via the htmlFor attribute)."
            )}
          </DocsP>
        </ShowcaseDocs>
      }
      examples={examples}
    />
  );
}
