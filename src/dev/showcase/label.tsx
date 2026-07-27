import { Label } from "../../components/micro/label";
import { useDevContext } from "../../dev/components/dev-context";
import {
  DocsCode,
  DocsP,
  Showcase,
  ShowcaseDocs,
  ShowcaseExample
} from "../../dev/components/showcase";
import { type Size } from "../../lib/types";

function LabelMicroShowcase({ globalSize }: { globalSize: Size }) {
  return (
    <div className="space-y-10">
      <ShowcaseExample title="Default" description="Cách sử dụng nhãn tiêu chuẩn." code={`<Label htmlFor="terms">Chấp nhận điều khoản và điều kiện</Label>`} preview={
                  <>
          <Label htmlFor="terms" size={globalSize}>
                    Chấp nhận điều khoản và điều kiện
                  </Label>
                  </>
                } />

      <ShowcaseExample title="Disabled" description="Trạng thái bị vô hiệu hóa khi nằm trong group bị vô hiệu." code={`<div data-disabled="true" className="group">
    <Label htmlFor="disabled">Nhãn này đã bị khóa</Label>
  </div>`} preview={
                  <>
          <div data-disabled="true" className="group">
                    <Label htmlFor="disabled" size={globalSize}>
                      Nhãn này đã bị khóa
                    </Label>
                  </div>
                  </>
                } />

      <ShowcaseExample title="Error State" description="Hiển thị màu đỏ khi nằm trong group bị lỗi (data-invalid)." code={`<div data-invalid="true" className="group">
    <Label htmlFor="error">Email là bắt buộc</Label>
  </div>`} preview={
                  <>
          <div data-invalid="true" className="group">
                    <Label htmlFor="error" size={globalSize}>
                      Email là bắt buộc
                    </Label>
                  </div>
                  </>
                } />

      <ShowcaseExample title="With Peer Input" description="Phản hồi trạng thái disabled của input liền kề (dùng class peer)." code={`<div className="flex items-center gap-2">
    <input
      type="checkbox"
      disabled
      id="peer-disabled"
      className="peer w-4 h-4"
    />
    <Label htmlFor="peer-disabled">
      Bị khóa bởi peer checkbox
    </Label>
  </div>`} preview={
                  <>
          <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      disabled
                      id="peer-disabled"
                      className="peer w-4 h-4"
                    />
                    <Label htmlFor="peer-disabled" size={globalSize}>
                      Bị khóa bởi peer checkbox
                    </Label>
                  </div>
                  </>
                } />
    </div>
  );
}

export default function LabelShowcase() {
  const { size: globalSize } = useDevContext();
  return (
    <Showcase
      title="Label"
      description="Nhãn gắn với form control, cải thiện accessibility."
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
