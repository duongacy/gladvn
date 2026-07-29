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

      <ShowcaseExample
        title={t("🧭 So sánh Use Case", "🧭 Use Case Comparison")}
        description={t(
          "So sánh nhanh khi nào dùng Micro và Macro.",
          "Quick comparison of when to use Micro vs Macro.",
        )}
        code={`<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
    {/* Story 1: Macro wins */}
    <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 shrink-0 rounded-full bg-green-500/10 p-1.5 text-green-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Story 1 · Macro
          </p>
          <h3 className="mt-0.5 text-sm font-semibold text-foreground">
            Simple to use
          </h3>
        </div>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed">
        Use Preset when you want to quickly display a progress bar with a label and percentage value in the default layout.
      </p>
    </div>

    {/* Story 2: Micro wins */}
    <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 shrink-0 rounded-full bg-blue-500/10 p-1.5 text-blue-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
          </svg>
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Story 2 · Micro
          </p>
          <h3 className="mt-0.5 text-sm font-semibold text-foreground">
            Custom Layout
          </h3>
        </div>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed">
        Use Micro when you want to change the display structure (e.g., place the label below the progress bar) or change the color of the indicator.
      </p>
    </div>
  </div>`}
        preview={
          <>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 rounded-full bg-green-500/10 p-1.5 text-green-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Story 1 · Macro
                    </p>
                    <h3 className="mt-0.5 text-sm font-semibold text-foreground">
                      Simple to use
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Use Preset when you want to quickly display a progress bar
                  with a label and percentage value in the default layout.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 rounded-full bg-blue-500/10 p-1.5 text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Story 2 · Micro
                    </p>
                    <h3 className="mt-0.5 text-sm font-semibold text-foreground">
                      Custom Layout
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Use Micro when you want to change the display structure (e.g.,
                  place the label below the progress bar) or change the color of
                  the indicator.
                </p>
              </div>
            </div>
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
