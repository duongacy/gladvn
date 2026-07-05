import { useState } from "react";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";
import { type Size } from "@/lib/types";
import { SliderPreset } from "@/components/macro/slider-preset";

export default function MacroSliderShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Slider (Macro)"
        description="Một thành phần cài sẵn bao gồm Thanh trượt, Trường, Nhãn và Mô tả."
      />

      <ExampleGrid columns={2}>
        <ExampleSection label="Standard" description="Thanh trượt cơ bản có nhãn và mô tả.">
          <div className="w-full max-w-sm">
            <SliderPreset
              size={globalSize}
              label="Volume"
              description="Điều chỉnh âm lượng hệ thống."
              defaultValue={[50]}
              max={100}
              step={1}
            />
          </div>
        </ExampleSection>

        <ExampleSection label="Error State" description="Thể hiện các đạo cụ errorMessage và showError.">
          <div className="w-full max-w-sm flex flex-col gap-6">
            <SliderPreset
              size={globalSize}
              label="Volume (Invalid)"
              defaultValue={[110]}
              max={100}
              step={1}
              errorMessage="Volume cannot exceed 100."
            />
            
            <SliderPreset
              size={globalSize}
              label="Volume (Hidden Error)"
              description="Văn bản lỗi bị ẩn bằng showError={false}"
              defaultValue={[110]}
              max={100}
              errorMessage="Hidden error."
              showError={false}
            />
          </div>
        </ExampleSection>
        <ExampleSection label="Disabled State" description="Một thanh trượt không tương tác.">
          <div className="w-full max-w-sm">
            <SliderPreset
              size={globalSize}
              label="Brightness"
              description="Độ sáng được hệ thống điều khiển tự động."
              defaultValue={[75]}
              max={100}
              disabled
            />
          </div>
        </ExampleSection>

        <ExampleSection label="Range Slider" description="Sử dụng nhiều giá trị để tạo một phạm vi.">
          <div className="w-full max-w-sm">
            <SliderPreset
              size={globalSize}
              label="Price Range"
              description="Chọn giá tối thiểu và tối đa."
              defaultValue={[25, 75]}
              max={100}
              step={5}
            />
          </div>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
