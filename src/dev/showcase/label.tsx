import { Label } from "../../components/micro/label";
import { useDevContext, useI18n } from "../../dev/components/dev-context";
import {
  DocsCode,
  DocsP,
  Showcase,
  ShowcaseDocs,
  ShowcaseExample,
} from "../../dev/components/showcase";
import { type Size } from "../../lib/types";

function LabelMicroShowcase({ globalSize }: { globalSize: Size }) {
  const t = useI18n();
  return (
    <div className="space-y-10">
      <ShowcaseExample
        title={t("Mặc định (Default)", "Default")}
        description={t(
          "Cách sử dụng nhãn tiêu chuẩn.",
          "How to use the standard label.",
        )}
        code={`<Label htmlFor="terms">Accept terms and conditions</Label>`}
        preview={
          <>
            <Label htmlFor="terms" size={globalSize}>
              Accept terms and conditions
            </Label>
          </>
        }
      />

      <ShowcaseExample
        title={t("Khóa / Bất hoạt (Disabled)", "Disabled")}
        description={t(
          "Trạng thái bị vô hiệu hóa khi nằm trong group bị vô hiệu.",
          "Disabled state when placed in a disabled group.",
        )}
        code={`<div data-disabled="true" className="group">
    <Label htmlFor="disabled">This label is disabled</Label>
  </div>`}
        preview={
          <>
            <div data-disabled="true" className="group">
              <Label htmlFor="disabled" size={globalSize}>
                This label is disabled
              </Label>
            </div>
          </>
        }
      />

      <ShowcaseExample
        title={t("Trạng thái Lỗi (Error State)", "Error State")}
        description={t(
          "Hiển thị màu đỏ khi nằm trong group bị lỗi (data-invalid).",
          "Displays red color when placed in an error group (data-invalid).",
        )}
        code={`<div data-invalid="true" className="group">
    <Label htmlFor="error">Email is required</Label>
  </div>`}
        preview={
          <>
            <div data-invalid="true" className="group">
              <Label htmlFor="error" size={globalSize}>
                Email is required
              </Label>
            </div>
          </>
        }
      />

      <ShowcaseExample
        title={t("Kèm Input ngang hàng (With Peer Input)", "With Peer Input")}
        description={t(
          "Phản hồi trạng thái disabled của input liền kề (dùng class peer).",
          "Responds to the disabled state of an adjacent input (using the peer class).",
        )}
        code={`<div className="flex items-center gap-2">
    <input
      type="checkbox"
      disabled
      id="peer-disabled"
      className="peer w-4 h-4"
    />
    <Label htmlFor="peer-disabled">
      Disabled by peer checkbox
    </Label>
  </div>`}
        preview={
          <>
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
          </>
        }
      />
    </div>
  );
}

export default function LabelShowcase() {
  const { size: globalSize } = useDevContext();
  const t = useI18n();
  return (
    <Showcase
      title="Label"
      description={t(
        "Nhãn gắn với form control, cải thiện accessibility.",
        "Label attached to a form control, improving accessibility.",
      )}
      guideline={
        <ShowcaseDocs>
          <DocsP>
            Label được sử dụng để gắn nhãn cho các trường nhập liệu form. Nó cải
            thiện khả năng truy cập (accessibility) bằng cách liên kết văn bản
            với một form control cụ thể (thông qua thuộc tính{" "}
            <DocsCode>htmlFor</DocsCode>).
          </DocsP>
        </ShowcaseDocs>
      }
      micro={{ content: <LabelMicroShowcase globalSize={globalSize} /> }}
    />
  );
}
