import { useState } from "react";

import { Label } from "../../components/micro/label";
import { useDevContext } from "../../dev/components/dev-context";
import {
  DocsCode,
  DocsP,
  ExampleSection,
  Showcase,
  ShowcaseDocs,
} from "../../dev/components/showcase";
import { type Size } from "../../lib/types";

// ──────────────────────────────────────────────────────────
// SECTION 2: Micro Content (không export)
// ──────────────────────────────────────────────────────────
function LabelMicroShowcase({ globalSize }: { globalSize: Size }) {
  return (
    <div className="space-y-10 mt-6">
      <ExampleSection
        label="Default"
        description="Cách sử dụng nhãn tiêu chuẩn."
        codeString={`<Label htmlFor="terms">
  Accept terms and conditions
</Label>
`}
      >
        <Label htmlFor="terms" size={globalSize}>
          Accept terms and conditions
        </Label>
      </ExampleSection>

      <ExampleSection
        label="Disabled"
        description="Trạng thái bị vô hiệu hóa khi nằm trong group bị vô hiệu."
        codeString={`<div data-disabled="true" className="group">
  <Label htmlFor="disabled">
    This label is disabled
  </Label>
</div>
`}
      >
        <div data-disabled="true" className="group">
          <Label htmlFor="disabled" size={globalSize}>
            This label is disabled
          </Label>
        </div>
      </ExampleSection>

      <ExampleSection
        label="Error State"
        description="Hiển thị màu đỏ khi nằm trong group bị lỗi (data-invalid)."
        codeString={`<div data-invalid="true" className="group">
  <Label htmlFor="error">
    Email is required
  </Label>
</div>
`}
      >
        <div data-invalid="true" className="group">
          <Label htmlFor="error" size={globalSize}>
            Email is required
          </Label>
        </div>
      </ExampleSection>

      <ExampleSection
        label="With Peer Input"
        description="Phản hồi trạng thái disabled của input liền kề (dùng class peer)."
        codeString={`<div className="flex items-center gap-2">
  <input type="checkbox" disabled id="peer-disabled" className="peer w-4 h-4" />
  <Label htmlFor="peer-disabled">
    Disabled by peer checkbox
  </Label>
</div>
`}
      >
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
      </ExampleSection>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 3: Entry point (export default)
// ──────────────────────────────────────────────────────────
export default function LabelShowcase() {
  const { size: globalSize } = useDevContext();
  return (
    <Showcase
      title="Label"
      description="Nhãn gắn với form control, cải thiện accessibility."
      generalConcept={
        <ShowcaseDocs>
          <DocsP>
            Label được sử dụng để gắn nhãn cho các trường nhập liệu form. Nó cải
            thiện khả năng truy cập (accessibility) bằng cách liên kết văn bản
            với một form control cụ thể (thông qua thuộc tính{" "}
            <DocsCode>htmlFor</DocsCode>).
          </DocsP>
        </ShowcaseDocs>
      }
      tabs={[
        {
          label: "Micro (Primitive)",
          content: <LabelMicroShowcase globalSize={globalSize} />,
        },
      ]}
    />
  );
}
