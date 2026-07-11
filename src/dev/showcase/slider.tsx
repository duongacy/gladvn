import { useDevContext } from "@/dev/components/dev-context";
import {
  DocsCode,
  DocsH3,
  DocsP,
  ExampleGrid,
  ExampleSection,
  Showcase,
  ShowcaseDocs,
} from "@/dev/components/showcase";
import { type Size } from "@/lib/types";
import { useState } from "react";

import { SliderPreset } from "@/components/macro/slider-preset";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/micro/field";
import {
  Slider as CompositionalSlider,
  SliderControl,
  SliderIndicator,
  SliderThumb,
  SliderTrack,
} from "@/components/micro/slider";

// ──────────────────────────────────────────────────────────
// SECTION 1: Macro Content
// ──────────────────────────────────────────────────────────
function SliderMacroShowcase({ globalSize }: { globalSize: Size }) {
  const [val, setVal] = useState([50]);
  const [rangeVal, setRangeVal] = useState([20, 80]);

  return (
    <div className="space-y-10 mt-6">
      <ExampleGrid>
        <ExampleSection
          label="Tiêu chuẩn"
          description="Thanh trượt cơ bản có nhãn và mô tả."
          codeString={`<SliderPreset className="w-full"
    label="Âm lượng"
    description="Điều chỉnh âm lượng hệ thống."
    defaultValue={[50]}
    max={100}
    step={1}
  />
`}
        >
          <SliderPreset className="w-full"
              size={globalSize}
              label="Âm lượng"
              description="Điều chỉnh âm lượng hệ thống."
              defaultValue={[50]}
              max={100}
              step={1}
            />
        </ExampleSection>

        <ExampleSection
          label="Trạng thái Lỗi (Error)"
          description="Báo lỗi khi giá trị không hợp lệ."
          codeString={`<div className="w-full flex flex-col gap-6">
  <SliderPreset
    label="Mức âm lượng (Lỗi)"
    defaultValue={[110]}
    max={100}
    step={1}
    errorMessage="Mức âm lượng không được vượt quá 100."
  />
</div>
`}
        >
          <div className="w-full flex flex-col gap-6">
            <SliderPreset
              size={globalSize}
              label="Mức âm lượng (Lỗi)"
              defaultValue={[110]}
              max={100}
              step={1}
              errorMessage="Mức âm lượng không được vượt quá 100."
            />
          </div>
        </ExampleSection>
      </ExampleGrid>

      <ExampleGrid>
        <ExampleSection
          label="Thanh trượt Khoảng (Range Slider)"
          description="Truyền mảng 2 giá trị vào defaultValue hoặc value để tạo Range Slider."
          codeString={`const [rangeVal, setRangeVal] = useState([20, 80]);

return (
  <SliderPreset
    label="Khoảng giá"
    value={rangeVal}
    onValueChange={setRangeVal}
    max={100}
    step={5}
    description={\`Từ $\${rangeVal[0]} đến $\${rangeVal[1]}\`}
  />
);`}
        >
          <SliderPreset className="w-full"
              size={globalSize}
              label="Khoảng giá"
              description={`Hiển thị sản phẩm từ $${rangeVal[0]} đến $${rangeVal[1]}`}
              value={rangeVal}
              onValueChange={(v) => setRangeVal(v as number[])}
              max={100}
              step={5}
            />
        </ExampleSection>

        <ExampleSection
          label="Khóa / Bất hoạt (Disabled)"
          description="Người dùng không thể tương tác với thanh trượt."
          codeString={`<SliderPreset className="w-full"
    label="Độ sáng màn hình"
    description="Độ sáng đang được hệ thống điều khiển tự động (Auto-brightness)."
    defaultValue={[75]}
    max={100}
    disabled
  />
`}
        >
          <SliderPreset className="w-full"
              size={globalSize}
              label="Độ sáng màn hình"
              description="Độ sáng đang được hệ thống điều khiển tự động (Auto-brightness)."
              defaultValue={[75]}
              max={100}
              disabled
            />
        </ExampleSection>
      </ExampleGrid>

      <ExampleGrid>
        <ExampleSection
          label="Controlled Mode"
          description="Sử dụng biến state của React để điều khiển."
          codeString={`const [val, setVal] = useState([50]);

return (
  <SliderPreset
    value={val}
    onValueChange={setVal}
    label="Giá trị có kiểm soát"
    description={\`Giá trị hiện tại là: \${val[0]}\`}
  />
);`}
        >
          <div className="w-full max-w-sm flex flex-col gap-4">
            <SliderPreset
              size={globalSize}
              value={val}
              onValueChange={(v) => setVal(v as number[])}
              label="Giá trị có kiểm soát"
              description={`Giá trị hiện tại là: ${val[0]}`}
            />
          </div>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 2: Micro Content
// ──────────────────────────────────────────────────────────
function SliderMicroShowcase({ globalSize }: { globalSize: Size }) {
  return (
    <div className="space-y-10 mt-6">
      <ExampleGrid>
        <ExampleSection
          label="Cơ bản (Primitive)"
          description="Thanh trượt trần truồng không có Field hay Label bọc ngoài."
          codeString={`<CompositionalSlider
  defaultValue={[40]}
  max={100}
  step={1}
  className="w-full"
>
  <SliderControl>
    <SliderTrack>
      <SliderIndicator />
    </SliderTrack>
    <SliderThumb />
  </SliderControl>
</CompositionalSlider>
`}
        >
          <CompositionalSlider
            size={globalSize}
            defaultValue={[40]}
            max={100}
            step={1}
            className="w-full"
          >
            <SliderControl>
              <SliderTrack>
                <SliderIndicator />
              </SliderTrack>
              <SliderThumb />
            </SliderControl>
          </CompositionalSlider>
        </ExampleSection>

        <ExampleSection
          label="Nhiều Thumb (Multi-thumb)"
          description="Chỉ cần render nhiều SliderThumb, hệ thống sẽ tự chia."
          codeString={`<CompositionalSlider
  defaultValue={[20, 50, 80]}
  max={100}
  step={1}
  className="w-full"
>
  <SliderControl>
    <SliderTrack>
      <SliderIndicator />
    </SliderTrack>
    <SliderThumb />
    <SliderThumb />
    <SliderThumb />
  </SliderControl>
</CompositionalSlider>
`}
        >
          <CompositionalSlider
            size={globalSize}
            defaultValue={[20, 50, 80]}
            max={100}
            step={1}
            className="w-full"
          >
            <SliderControl>
              <SliderTrack>
                <SliderIndicator />
              </SliderTrack>
              <SliderThumb />
              <SliderThumb />
              <SliderThumb />
            </SliderControl>
          </CompositionalSlider>
        </ExampleSection>
      </ExampleGrid>

      <ExampleGrid>
        <ExampleSection
          label="Ghép nối Field thủ công"
          description="Lắp ráp với Field để có nhãn và mô tả."
          codeString={`<Field className="w-full">
  <FieldLabel>Mật độ hiển thị</FieldLabel>
  <FieldContent>
    <CompositionalSlider
      defaultValue={[50]}
      max={100}
      step={1}
    >
      <SliderControl>
        <SliderTrack>
          <SliderIndicator />
        </SliderTrack>
        <SliderThumb />
      </SliderControl>
    </CompositionalSlider>
  </FieldContent>
  <FieldDescription>
    Điều chỉnh khoảng cách giữa các phần tử.
  </FieldDescription>
</Field>
`}
        >
          <Field size={globalSize} className="w-full">
            <FieldLabel>Mật độ hiển thị</FieldLabel>
            <FieldContent>
              <CompositionalSlider
                size={globalSize}
                defaultValue={[50]}
                max={100}
                step={1}
              >
                <SliderControl>
                  <SliderTrack>
                    <SliderIndicator />
                  </SliderTrack>
                  <SliderThumb />
                </SliderControl>
              </CompositionalSlider>
            </FieldContent>
            <FieldDescription>
              Điều chỉnh khoảng cách giữa các phần tử.
            </FieldDescription>
          </Field>
        </ExampleSection>

        <ExampleSection
          label="Trạng thái Lỗi thủ công"
          description="Tự gắn aria-invalid vào Slider và dùng FieldError."
          codeString={`<Field className="w-full gap-2" data-invalid={true}>
  <FieldLabel>Ngân sách tối đa</FieldLabel>
  <FieldContent>
    <CompositionalSlider
      defaultValue={[120]}
      max={100}
      step={1}
      aria-invalid={true}
    >
      <SliderControl>
        <SliderTrack>
          <SliderIndicator />
        </SliderTrack>
        <SliderThumb />
      </SliderControl>
    </CompositionalSlider>
  </FieldContent>
  <FieldError>Ngân sách của bạn chỉ còn \$100.</FieldError>
</Field>
`}
        >
          <Field size={globalSize} className="w-full gap-2" data-invalid={true}>
            <FieldLabel>Ngân sách tối đa</FieldLabel>
            <FieldContent>
              <CompositionalSlider
                size={globalSize}
                defaultValue={[120]}
                max={100}
                step={1}
                aria-invalid={true}
              >
                <SliderControl>
                  <SliderTrack>
                    <SliderIndicator />
                  </SliderTrack>
                  <SliderThumb />
                </SliderControl>
              </CompositionalSlider>
            </FieldContent>
            <FieldError>Ngân sách của bạn chỉ còn $100.</FieldError>
          </Field>
        </ExampleSection>
      </ExampleGrid>

      <ExampleSection
        label="🧭 Use Case Comparison"
        description="So sánh nhanh khi nào dùng Micro và Macro."
        fullWidth
        codeString={`<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
  {/* Story 1: Macro wins */}
  <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
    <div className="flex items-start gap-3">
      <span className="mt-0.5 shrink-0 rounded-full bg-green-500/10 p-1.5 text-green-600">
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Story 1 · Dùng Macro</p>
        <h3 className="mt-0.5 text-sm font-semibold text-foreground">Bộ lọc sản phẩm</h3>
      </div>
    </div>
    <p className="text-xs text-muted-foreground leading-relaxed">
      Bạn cần làm bộ lọc "Khoảng giá" ở cột Sidebar cho trang Ecommerce. <DocsCode>SliderPreset</DocsCode> sẽ giúp bạn tiết kiệm hàng tá dòng code bọc Field loằng ngoằng.
    </p>
  </div>

  {/* Story 2: Micro wins */}
  <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
    <div className="flex items-start gap-3">
      <span className="mt-0.5 shrink-0 rounded-full bg-blue-500/10 p-1.5 text-blue-600">
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Story 2 · Dùng Micro</p>
        <h3 className="mt-0.5 text-sm font-semibold text-foreground">Thanh thời lượng Video (Video Player)</h3>
      </div>
    </div>
    <p className="text-xs text-muted-foreground leading-relaxed">
      Bạn đang làm một trình phát Video giống Youtube. Thanh Timeline chạy dưới đáy không hề có Label hay Description. Ở đây bạn BẮT BUỘC dùng Micro để dựng độc lập.
    </p>
  </div>
</div>
`}
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
                  Bộ lọc sản phẩm
                </h3>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Bạn cần làm bộ lọc "Khoảng giá" ở cột Sidebar cho trang Ecommerce.{" "}
              <DocsCode>SliderPreset</DocsCode> sẽ giúp bạn tiết kiệm hàng tá
              dòng code bọc Field loằng ngoằng.
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
                  Thanh thời lượng Video (Video Player)
                </h3>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Bạn đang làm một trình phát Video giống Youtube. Thanh Timeline
              chạy dưới đáy không hề có Label hay Description. Ở đây bạn BẮT
              BUỘC dùng Micro để dựng độc lập.
            </p>
          </div>
        </div>
      </ExampleSection>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 3: Entry point
// ──────────────────────────────────────────────────────────
export default function SliderShowcase() {
  const { size: globalSize } = useDevContext();
  return (
    <Showcase
      title="Slider"
      description="Thành phần điều khiển cho phép người dùng chọn một hoặc nhiều giá trị trong một phạm vi (range) nhất định."
      generalConcept={
        <div className="space-y-4">
          <ShowcaseDocs>
            <DocsH3>Khi nào nên dùng Macro</DocsH3>
            <DocsP>
              <DocsCode>SliderPreset</DocsCode> đóng gói sẵn Slider + Label +
              Description + Error Message. Nó tự động xử lý ID linking cho khả
              năng truy cập (Accessibility). Dùng Macro cho 95% trường hợp làm
              form lấy giá trị số hoặc bộ lọc (filter).
            </DocsP>
          </ShowcaseDocs>
          <ShowcaseDocs>
            <DocsH3>Khi nào nên dùng Micro</DocsH3>
            <DocsP>
              Dùng <DocsCode>CompositionalSlider</DocsCode> và các thành phần
              con (<DocsCode>SliderControl</DocsCode>,{" "}
              <DocsCode>SliderTrack</DocsCode>, <DocsCode>SliderThumb</DocsCode>
              ) khi bạn cần tuỳ biến giao diện cực hạn (ví dụ: track đổi màu
              theo giá trị, thumb có hình dáng đặc biệt) hoặc không cần label.
            </DocsP>
          </ShowcaseDocs>
        </div>
      }
      tabs={[
        {
          label: "Micro (Primitive)",
          content: <SliderMicroShowcase globalSize={globalSize} />,
        },
        {
          label: "Macro (Preset)",
          content: <SliderMacroShowcase globalSize={globalSize} />,
        },
      ]}
    />
  );
}
