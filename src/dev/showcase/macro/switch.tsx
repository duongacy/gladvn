import { useState } from "react";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";
import { type Size } from "@/lib/types";
import { SwitchPreset } from "@/components/macro/switch-preset";

export default function MacroSwitchShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Switch (Macro)"
        description="Một thành phần cài sẵn bao gồm Switch, Field, Label và Description."
      />

      <ExampleGrid columns={2}>
        <ExampleSection label="Standard" description="Công tắc cơ bản có nhãn và mô tả.">
          <div className="w-full max-w-sm">
            <SwitchPreset
              size={globalSize}
              label="Airplane Mode"
              description="Vô hiệu hóa tất cả các kết nối không dây."
            />
          </div>
        </ExampleSection>

        <ExampleSection label="Error State" description="Thể hiện các đạo cụ errorMessage và showError.">
          <div className="w-full max-w-sm flex flex-col gap-6">
            <SwitchPreset
              size={globalSize}
              label="Network (Invalid)"
              errorMessage="Network connection lost."
            />
            
            <SwitchPreset
              size={globalSize}
              label="Network (Hidden Error)"
              description="Văn bản lỗi bị ẩn bằng showError={false}"
              errorMessage="Hidden error."
              showError={false}
            />
          </div>
        </ExampleSection>
        <ExampleSection label="Disabled State" description="Một công tắc không tương tác.">
          <div className="w-full max-w-sm flex flex-col gap-6">
            <SwitchPreset
              size={globalSize}
              label="Sync Contacts"
              description="Yêu cầu quyền truy cập vào danh bạ của bạn."
              disabled
            />
            <SwitchPreset
              size={globalSize}
              label="Use Cellular Data"
              description="Dữ liệu di động bị tắt trên toàn cầu."
              defaultChecked
              disabled
            />
          </div>
        </ExampleSection>

        <ExampleSection label="Real-world Content" description="Nhãn tùy chỉnh và mô tả dài.">
          <div className="w-full max-w-sm">
            <SwitchPreset
              size={globalSize}
              label={
                <span className="flex items-center gap-2">
                  Enable two-factor authentication
                  <span className="rounded bg-success/20 px-1.5 py-0.5 text-[10px] font-semibold text-success">RECOMMENDED</span>
                </span>
              }
              description="Thêm một lớp bảo mật bổ sung cho tài khoản của bạn. Chúng tôi sẽ yêu cầu bạn nhập mã từ ứng dụng xác thực của bạn mỗi khi bạn đăng nhập từ thiết bị mới."
            />
          </div>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
