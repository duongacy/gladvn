import { useState } from "react";
import {
  Showcase,
  ShowcaseDocs,
  DocsH3,
  DocsP,
  DocsCode,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";
import { MonoSelect } from "@/dev/components/mono-select";

import { type Size } from "@/lib/types";
import {
  Progress,
  ProgressTrack,
  ProgressIndicator,
  ProgressLabel,
  ProgressValue,
} from "@/components/micro/progress";
import { ProgressPreset } from "@/components/macro/progress-preset";

// ──────────────────────────────────────────────────────────
// SECTION 1: Macro Content
// ──────────────────────────────────────────────────────────
function ProgressMacroShowcase({ globalSize }: { globalSize: Size }) {
  return (
    <div className="space-y-10 mt-6">
      <ShowcaseDocs>
        <DocsH3>Khi nào nên dùng Macro</DocsH3>
        <DocsP>
          <DocsCode>ProgressPreset</DocsCode> là một component đóng gói sẵn. Nó
          tự động hiển thị nhãn (label) và phần trăm (value) lên trên thanh tiến
          trình chỉ với các prop đơn giản, tiết kiệm thời gian code.
        </DocsP>
      </ShowcaseDocs>

      <ExampleGrid columns={2}>
        <ExampleSection
          label="Tiêu chuẩn (Standard)"
          description="Thanh tiến trình cơ bản nhất."
          codeString={`<div className="w-full max-w-sm">
  <ProgressPreset value={60} />
</div>
`}
        >
          <div className="w-full max-w-sm">
            <ProgressPreset size={globalSize} value={60} />
          </div>
        </ExampleSection>

        <ExampleSection
          label="Vô định (Indeterminate)"
          description="Khi không truyền giá trị, thanh sẽ chạy hoạt ảnh liên tục."
          codeString={`<div className="w-full max-w-sm">
  <ProgressPreset />
</div>
`}
        >
          <div className="w-full max-w-sm">
            <ProgressPreset size={globalSize} />
          </div>
        </ExampleSection>
      </ExampleGrid>

      <ExampleSection
        label="Kèm Nhãn & Giá trị (With Label & Value)"
        description="Tự động căn lề nhãn và hiển thị phần trăm."
        codeString={`<div className="w-full max-w-sm">
  <ProgressPreset 
    value={85} 
    label="Đang tải lên hệ thống..." 
    showValue 
  />
</div>
`}
      >
        <div className="w-full max-w-sm">
          <ProgressPreset
            size={globalSize}
            value={85}
            label="Đang tải lên hệ thống..."
            showValue
          />
        </div>
      </ExampleSection>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 2: Micro Content
// ──────────────────────────────────────────────────────────
function ProgressMicroShowcase({ globalSize }: { globalSize: Size }) {
  return (
    <div className="space-y-10 mt-6">
      <ShowcaseDocs>
        <DocsH3>Khi nào nên dùng Micro</DocsH3>
        <DocsP>
          Dùng <DocsCode>Progress</DocsCode> nguyên thủy khi bạn muốn tự tùy
          chỉnh hoàn toàn bố cục (ví dụ: đặt label ở bên dưới thanh thay vì bên
          trên, đổi màu thanh indicator dựa trên giá trị, hoặc bỏ nhãn hoàn
          toàn).
        </DocsP>
      </ShowcaseDocs>

      <ExampleGrid columns={2}>
        <ExampleSection
          label="Chỉ Thanh tiến trình (Core)"
          description="Thanh tiến trình tiêu chuẩn sử dụng API tổng hợp thuần túy (không nhãn)."
        >
          <Progress value={60} size={globalSize} className="w-full max-w-sm">
            <ProgressTrack>
              <ProgressIndicator />
            </ProgressTrack>
          </Progress>
        </ExampleSection>

        <ExampleSection
          label="Tuỳ chỉnh màu sắc (Custom Color)"
          description="Can thiệp trực tiếp vào ProgressIndicator để đổi màu."
        >
          <Progress value={45} size={globalSize} className="w-full max-w-sm">
            <ProgressTrack>
              <ProgressIndicator className="bg-red-500" />
            </ProgressTrack>
          </Progress>
        </ExampleSection>
      </ExampleGrid>

      <ExampleSection
        label="Tự lắp ráp Nhãn (Compositional with Label)"
        description="Sử dụng các bộ phận cấu thành để hiển thị nhãn và giá trị theo ý muốn."
        codeString={`<Progress value={45} className="w-full max-w-sm">
  <div className="flex items-center justify-between mb-1.5">
    <ProgressLabel className="font-medium text-muted-foreground">Đang tải xuống...</ProgressLabel>
    <ProgressValue className="font-mono" />
  </div>
  <ProgressTrack>
    <ProgressIndicator />
  </ProgressTrack>
</Progress>
`}
      >
        <Progress value={45} size={globalSize} className="w-full max-w-sm">
          <div className="flex items-center justify-between mb-1.5">
            <ProgressLabel className="font-medium text-muted-foreground">
              Đang tải xuống...
            </ProgressLabel>
            <ProgressValue className="font-mono" />
          </div>
          <ProgressTrack>
            <ProgressIndicator />
          </ProgressTrack>
        </Progress>
      </ExampleSection>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 3: Entry point
// ──────────────────────────────────────────────────────────
export default function ProgressShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <Showcase
      title="Progress"
      description="Thanh chỉ báo cho biết tiến độ hoàn thành của một công việc hoặc nhiệm vụ kéo dài."
      actions={
        <MonoSelect
          value={globalSize}
          onValueChange={(v) => setGlobalSize(v as Size)}
          options={[
            { value: "sm", label: "Size: sm" },
            { value: "md", label: "Size: md" },
            { value: "lg", label: "Size: lg" },
          ]}
        />
      }
      tabs={[
        {
          label: "Micro (Primitive)",
          content: <ProgressMicroShowcase globalSize={globalSize} />,
        },
        {
          label: "Macro (Preset)",
          content: <ProgressMacroShowcase globalSize={globalSize} />,
        },
      ]}
    />
  );
}
