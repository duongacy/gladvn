import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";
import { ProgressPreset } from "@/components/macro/progress-preset";

export default function MacroProgressShowcase() {
  return (
    <div className="space-y-10">
      <SectionHeader
        title="Progress (Macro)"
        description="Một thành phần đặt trước hiển thị thanh tiến trình."
      />

      <ExampleGrid columns={1}>
        <ExampleSection label="Standard" description="Thanh tiến trình cơ bản.">
          <div className="w-full max-w-sm">
            <ProgressPreset value={60} />
          </div>
        </ExampleSection>

        <ExampleSection label="With Label" description="Hiển thị giá trị và nhãn tùy chỉnh tùy chọn.">
          <div className="w-full max-w-sm">
            <ProgressPreset value={85} label="Uploading file..." showValue />
          </div>
        </ExampleSection>

        <ExampleSection label="Indeterminate" description="Khi giá trị không được cung cấp hoặc không được xác định.">
          <div className="w-full max-w-sm">
            <ProgressPreset />
          </div>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
