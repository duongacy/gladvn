import { ProgressPreset } from "../../components/macro/progress-preset";
import {
  Progress,
  ProgressIndicator,
  ProgressLabel,
  ProgressTrack,
  ProgressValue
} from "../../components/micro/progress";
import { useDevContext } from "../../dev/components/dev-context";
import {
  DocsCode,
  DocsH3,
  DocsP,
  ExampleGrid,
  ShowcaseExample,
  Showcase,
  ShowcaseDocs
} from "../../dev/components/showcase";
import { type Size } from "../../lib/types";

function ProgressMacroShowcase({ globalSize }: { globalSize: Size }) {
  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample title="Tiêu chuẩn (Standard)" description="Thanh tiến trình cơ bản nhất." code={`<div className="w-full max-w-sm">
    <ProgressPreset value={60} />
  </div>`} preview={
                      <>
              <div className="w-full max-w-sm">
                          <ProgressPreset size={globalSize} value={60} />
                        </div>
                      </>
                    } />

        <ShowcaseExample title="Vô định (Indeterminate)" description="Khi không truyền giá trị, thanh sẽ chạy hoạt ảnh liên tục." code={`<div className="w-full max-w-sm">
    <ProgressPreset />
  </div>`} preview={
                      <>
              <div className="w-full max-w-sm">
                          <ProgressPreset size={globalSize} />
                        </div>
                      </>
                    } />
      </ExampleGrid>

      <ShowcaseExample title="Kèm Nhãn & Giá trị (With Label & Value)" description="Tự động căn lề nhãn và hiển thị phần trăm." code={`<div className="w-full max-w-sm">
    <ProgressPreset
      value={85}
      label="Đang tải lên hệ thống..."
      showValue
    />
  </div>`} preview={
                  <>
          <div className="w-full max-w-sm">
                    <ProgressPreset
                      size={globalSize}
                      value={85}
                      label="Đang tải lên hệ thống..."
                      showValue
                    />
                  </div>
                  </>
                } />
    </div>
  );
}

function ProgressMicroShowcase({ globalSize }: { globalSize: Size }) {
  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample title="Chỉ Thanh tiến trình (Core)" description="Thanh tiến trình micro, lắp ráp thủ công (không có label)." code={`<Progress value={60} className="w-full max-w-sm">
    <ProgressTrack>
      <ProgressIndicator />
    </ProgressTrack>
  </Progress>`} preview={
                      <>
              <Progress value={60} size={globalSize} className="w-full max-w-sm">
                          <ProgressTrack>
                            <ProgressIndicator />
                          </ProgressTrack>
                        </Progress>
                      </>
                    } />

        <ShowcaseExample title="Tuỳ chỉnh màu sắc (Custom Color)" description="Can thiệp trực tiếp vào ProgressIndicator để đổi màu." code={`<Progress value={45} className="w-full max-w-sm">
    <ProgressTrack>
      <ProgressIndicator className="bg-red-500" />
    </ProgressTrack>
  </Progress>`} preview={
                      <>
              <Progress value={45} size={globalSize} className="w-full max-w-sm">
                          <ProgressTrack>
                            <ProgressIndicator className="bg-red-500" />
                          </ProgressTrack>
                        </Progress>
                      </>
                    } />
      </ExampleGrid>

      <ShowcaseExample title="Tự lắp ráp Nhãn (Compositional with Label)" description="Sử dụng các bộ phận cấu thành để hiển thị nhãn và giá trị theo ý muốn." code={`<Progress value={45} className="w-full max-w-sm">
    <div className="flex items-center justify-between mb-1.5">
      <ProgressLabel className="font-medium text-muted-foreground">
        Đang tải xuống...
      </ProgressLabel>
      <ProgressValue className="font-mono" />
    </div>
    <ProgressTrack>
      <ProgressIndicator />
    </ProgressTrack>
  </Progress>`} preview={
                  <>
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
                  </>
                } />

      <ShowcaseExample title="🧭 So sánh Use Case" description="So sánh nhanh khi nào dùng Micro và Macro." code={`<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
            Story 1 · Dùng Macro
          </p>
          <h3 className="mt-0.5 text-sm font-semibold text-foreground">
            Sử dụng đơn giản
          </h3>
        </div>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed">
        Dùng Preset khi bạn muốn hiển thị nhanh thanh tiến
        trình có kèm label và giá trị phần trăm theo layout
        mặc định.
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
            Story 2 · Dùng Micro
          </p>
          <h3 className="mt-0.5 text-sm font-semibold text-foreground">
            Layout tuỳ chỉnh
          </h3>
        </div>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed">
        Dùng Micro khi bạn muốn thay đổi cấu trúc hiển thị
        (ví dụ: đặt label dưới thanh tiến trình) hoặc đổi
        màu của indicator.
      </p>
    </div>
  </div>`} preview={
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
                            Story 1 · Dùng Macro
                          </p>
                          <h3 className="mt-0.5 text-sm font-semibold text-foreground">
                            Sử dụng đơn giản
                          </h3>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Dùng Preset khi bạn muốn hiển thị nhanh thanh tiến trình có kèm
                        label và giá trị phần trăm theo layout mặc định.
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
                            Story 2 · Dùng Micro
                          </p>
                          <h3 className="mt-0.5 text-sm font-semibold text-foreground">
                            Layout tuỳ chỉnh
                          </h3>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Dùng Micro khi bạn muốn thay đổi cấu trúc hiển thị (ví dụ: đặt
                        label dưới thanh tiến trình) hoặc đổi màu của indicator.
                      </p>
                    </div>
                  </div>
                  </>
                } />
    </div>
  );
}

export default function ProgressShowcase() {
  const { size: globalSize } = useDevContext();
  return (
    <Showcase
      title="Tiến trình"
      description="Thanh chỉ báo cho biết tiến độ hoàn thành của một công việc hoặc nhiệm vụ kéo dài."
      
      micro={{ content: <ProgressMicroShowcase globalSize={globalSize} /> }}
      macro={{ content: <ProgressMacroShowcase globalSize={globalSize} /> }}
    />
  );
}
