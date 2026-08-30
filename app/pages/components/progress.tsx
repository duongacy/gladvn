import React from "react";
import { ProgressPreset } from "@/components/macro/progress-preset";
import {
  Progress,
  ProgressIndicator,
  ProgressLabel,
  ProgressTrack,
  ProgressValue,
} from "@/components/micro/progress";
import { useDevContext, useI18n } from "~app/components/dev-context";
import { ConfigurableShowcase } from "~app/components/showcase";

function useProgressExamples() {
  const t = useI18n();
  const { size: globalSize } = useDevContext();

  return React.useMemo(
    () => [
      {
        title: t("Tiêu chuẩn", "Standard"),
        description: t(
          "Thanh tiến trình cơ bản nhất.",
          "The most basic progress bar."
        ),
        macroCode: `<div className="w-full max-w-sm">
  <ProgressPreset value={60} />
</div>`,
        macroPreview: (
          <div className="w-full max-w-sm">
            <ProgressPreset size={globalSize} value={60} />
          </div>
        ),
        microCode: `<Progress value={60} className="w-full max-w-sm">
  <ProgressTrack>
    <ProgressIndicator />
  </ProgressTrack>
</Progress>`,
        microPreview: (
          <Progress value={60} size={globalSize} className="w-full max-w-sm">
            <ProgressTrack>
              <ProgressIndicator />
            </ProgressTrack>
          </Progress>
        ),
      },
      {
        title: t("Vô định", "Indeterminate"),
        description: t(
          "Khi không truyền giá trị, thanh sẽ chạy hoạt ảnh liên tục.",
          "When no value is passed, the bar will run a continuous animation."
        ),
        macroCode: `<div className="w-full max-w-sm">
  <ProgressPreset />
</div>`,
        macroPreview: (
          <div className="w-full max-w-sm">
            <ProgressPreset size={globalSize} />
          </div>
        ),
      },
      {
        title: t(
          "Kèm Nhãn & Giá trị",
          "With Label & Value"
        ),
        description: t(
          "Tự động căn lề nhãn và hiển thị phần trăm.",
          "Automatically align label and display percentage."
        ),
        macroCode: `<div className="w-full max-w-sm">
  <ProgressPreset
    value={85}
    label="Uploading to system..."
    showValue
  />
</div>`,
        macroPreview: (
          <div className="w-full max-w-sm">
            <ProgressPreset
              size={globalSize}
              value={85}
              label="Uploading to system..."
              showValue
            />
          </div>
        ),
        microCode: `<Progress value={45} className="w-full max-w-sm">
  <div className="flex items-center justify-between mb-1.5">
    <ProgressLabel className="font-medium text-muted-foreground">
      Downloading...
    </ProgressLabel>
    <ProgressValue className="font-mono" />
  </div>
  <ProgressTrack>
    <ProgressIndicator />
  </ProgressTrack>
</Progress>`,
        microPreview: (
          <Progress value={45} size={globalSize} className="w-full max-w-sm">
            <div className="flex items-center justify-between mb-1.5">
              <ProgressLabel className="font-medium text-muted-foreground">
                Downloading...
              </ProgressLabel>
              <ProgressValue className="font-mono" />
            </div>
            <ProgressTrack>
              <ProgressIndicator />
            </ProgressTrack>
          </Progress>
        ),
      },
      {
        title: t("Tuỳ chỉnh màu sắc", "Custom Color"),
        description: t(
          "Can thiệp trực tiếp vào ProgressIndicator để đổi màu.",
          "Directly intervene in ProgressIndicator to change color."
        ),
        microCode: `<Progress value={45} className="w-full max-w-sm">
  <ProgressTrack>
    <ProgressIndicator className="bg-red-500" />
  </ProgressTrack>
</Progress>`,
        microPreview: (
          <Progress value={45} size={globalSize} className="w-full max-w-sm">
            <ProgressTrack>
              <ProgressIndicator className="bg-red-500" />
            </ProgressTrack>
          </Progress>
        ),
      },
    ],
    [t, globalSize]
  );
}

export default function ProgressShowcase() {
  const t = useI18n();
  const examples = useProgressExamples();

  return (
    <ConfigurableShowcase
      title="Progress"
      description={t(
        "Thanh chỉ báo cho biết tiến độ hoàn thành của một công việc hoặc nhiệm vụ kéo dài.",
        "An indicator bar showing the completion progress of a long task."
      )}
      examples={examples}
    />
  );
}
