import { ProgressPreset } from "../../components/macro/progress-preset";
import {
  Progress,
  ProgressIndicator,
  ProgressLabel,
  ProgressTrack,
  ProgressValue,
} from "../../components/micro/progress";
import { useDevContext, useI18n } from "../../dev/components/dev-context";
import {
  DocsP,
  ExampleGrid,
  Showcase,
  ShowcaseExample,
} from "../../dev/components/showcase";
import { type Size } from "../../lib/types";

function ProgressMacroShowcase({ globalSize }: { globalSize: Size }) {
  const t = useI18n();
  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample
          title={t("Tiêu chuẩn (Standard)", "Standard")}
          description={t(
            "Thanh tiến trình cơ bản nhất.",
            "The most basic progress bar.",
          )}
          code={`<div className="w-full max-w-sm">
    <ProgressPreset value={60} />
  </div>`}
          preview={
            <>
              <div className="w-full max-w-sm">
                <ProgressPreset size={globalSize} value={60} />
              </div>
            </>
          }
        />

        <ShowcaseExample
          title={t("Vô định (Indeterminate)", "Indeterminate")}
          description={t(
            "Khi không truyền giá trị, thanh sẽ chạy hoạt ảnh liên tục.",
            "When no value is passed, the bar will run a continuous animation.",
          )}
          code={`<div className="w-full max-w-sm">
    <ProgressPreset />
  </div>`}
          preview={
            <>
              <div className="w-full max-w-sm">
                <ProgressPreset size={globalSize} />
              </div>
            </>
          }
        />
      </ExampleGrid>

      <ShowcaseExample
        title={t(
          "Kèm Nhãn & Giá trị (With Label & Value)",
          "With Label & Value",
        )}
        description={t(
          "Tự động căn lề nhãn và hiển thị phần trăm.",
          "Automatically align label and display percentage.",
        )}
        code={`<div className="w-full max-w-sm">
    <ProgressPreset
      value={85}
      label="Uploading to system..."
      showValue
    />
  </div>`}
        preview={
          <>
            <div className="w-full max-w-sm">
              <ProgressPreset
                size={globalSize}
                value={85}
                label="Uploading to system..."
                showValue
              />
            </div>
          </>
        }
      />
    </div>
  );
}

function ProgressMicroShowcase({ globalSize }: { globalSize: Size }) {
  const t = useI18n();
  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample
          title={t("Chỉ Thanh tiến trình (Core)", "Core Progress Bar")}
          description={t(
            "Thanh tiến trình micro, lắp ráp thủ công (không có label).",
            "Micro progress bar, manually assembled (without label).",
          )}
          code={`<Progress value={60} className="w-full max-w-sm">
    <ProgressTrack>
      <ProgressIndicator />
    </ProgressTrack>
  </Progress>`}
          preview={
            <>
              <Progress
                value={60}
                size={globalSize}
                className="w-full max-w-sm"
              >
                <ProgressTrack>
                  <ProgressIndicator />
                </ProgressTrack>
              </Progress>
            </>
          }
        />

        <ShowcaseExample
          title={t("Tuỳ chỉnh màu sắc (Custom Color)", "Custom Color")}
          description={t(
            "Can thiệp trực tiếp vào ProgressIndicator để đổi màu.",
            "Directly intervene in ProgressIndicator to change color.",
          )}
          code={`<Progress value={45} className="w-full max-w-sm">
    <ProgressTrack>
      <ProgressIndicator className="bg-red-500" />
    </ProgressTrack>
  </Progress>`}
          preview={
            <>
              <Progress
                value={45}
                size={globalSize}
                className="w-full max-w-sm"
              >
                <ProgressTrack>
                  <ProgressIndicator className="bg-red-500" />
                </ProgressTrack>
              </Progress>
            </>
          }
        />
      </ExampleGrid>

      <ShowcaseExample
        title={t(
          "Tự lắp ráp Nhãn (Compositional with Label)",
          "Compositional with Label",
        )}
        description={t(
          "Sử dụng các bộ phận cấu thành để hiển thị nhãn và giá trị theo ý muốn.",
          "Use compositional parts to display label and value as desired.",
        )}
        code={`<Progress value={45} className="w-full max-w-sm">
    <div className="flex items-center justify-between mb-1.5">
      <ProgressLabel className="font-medium text-muted-foreground">
        Downloading...
      </ProgressLabel>
      <ProgressValue className="font-mono" />
    </div>
    <ProgressTrack>
      <ProgressIndicator />
    </ProgressTrack>
  </Progress>`}
        preview={
          <>
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
          </>
        }
      />
    </div>
  );
}

export default function ProgressShowcase() {
  const { size: globalSize } = useDevContext();
  const t = useI18n();
  return (
    <Showcase
      title="Progress"
      description={t(
        "Thanh chỉ báo cho biết tiến độ hoàn thành của một công việc hoặc nhiệm vụ kéo dài.",
        "An indicator bar showing the completion progress of a long task.",
      )}

      micro={{ content: <ProgressMicroShowcase globalSize={globalSize} /> }}
      macro={{ content: <ProgressMacroShowcase globalSize={globalSize} /> }}
    />
  );
}
