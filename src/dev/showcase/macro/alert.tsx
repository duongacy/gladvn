import { useState } from "react";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
  ShowcaseDocs,
} from "@/dev/components/showcase";
import { InfoIcon, TriangleAlertIcon, CheckCircle2Icon, XCircleIcon } from "lucide-react";

import { type Size } from "@/lib/types";
import { AlertPreset } from "@/components/macro/alert-preset";
import { SelectPreset } from "@/components/macro/select-preset";
import { Button } from "@/components/micro/button";

export default function MacroAlertShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");
  const [controlledOpen, setControlledOpen] = useState(true);

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Alert (Macro)"
        description="Phiên bản Preset của Alert hỗ trợ đóng gói logic tự động ẩn/tắt (dismissible) và code ngắn gọn hơn."
      >
        <SelectPreset
          value={globalSize}
          onValueChange={(v) => setGlobalSize(v as Size)}
          options={[
            { value: "sm", label: "Size: sm" },
            { value: "md", label: "Size: md" },
            { value: "lg", label: "Size: lg" },
          ]}
          className="w-[120px] h-8 text-xs bg-background"
        />
      </SectionHeader>

      <ShowcaseDocs>
        <h3>Khi nào nên dùng</h3>
        <p>Bản Macro (AlertPreset) là lựa chọn tuyệt vời khi bạn muốn hiển thị một cảnh báo ngắn gọn và cho phép người dùng tự tắt (dismiss) nó mà không phải tự viết logic <code>useState</code>. Nó đóng gói sẵn tất cả các thành phần (Icon, Title, Description, Close Button) vào một prop API duy nhất.</p>
        
        <h3>Controlled vs Uncontrolled</h3>
        <ul>
          <li><b>Uncontrolled (Mặc định):</b> Nếu truyền <code>dismissible=true</code>, component tự quản lý state để tắt (ẩn) Alert khi click vào nút X.</li>
          <li><b>Controlled:</b> Có thể kiểm soát state đóng/mở thông qua React state và truyền hàm vào <code>onDismiss</code>. Tuy nhiên thông thường Alert chỉ bị huỷ (unmount), nên nếu bạn kiểm soát thì hãy render nó có điều kiện bên ngoài.</li>
        </ul>
      </ShowcaseDocs>

      <ExampleGrid columns={2}>
        {/* ── Standard ──────────────────────── */}
        <ExampleSection
          label="Tiêu chuẩn (Standard)"
          description="Truyền props trực tiếp thay vì lồng children."
          fullWidth
        >
          <AlertPreset 
            color="info" 
            size={globalSize}
            title="Có bản cập nhật mới" 
            description="Phiên bản 2.0.4 đã sẵn sàng để tải xuống." 
            icon={<InfoIcon />}
          />
        </ExampleSection>

        {/* ── Dismissible ──────────────────────── */}
        <ExampleSection
          label="Tự Đóng (Dismissible)"
          description="Thêm dismissible=true để hiển thị nút [X]. Thử bấm vào nút X bên dưới."
          fullWidth
        >
          <AlertPreset 
            color="warning" 
            size={globalSize}
            title="Phiên bản sắp hết hạn" 
            description="Phiên đăng nhập của bạn sẽ hết hạn trong 5 phút." 
            icon={<TriangleAlertIcon />}
            dismissible
          />
        </ExampleSection>
      </ExampleGrid>

      <ExampleGrid columns={2}>
        <ExampleSection
          label="Controlled"
          description="Quản lý trạng thái đóng mở thông qua state bên ngoài bằng React (Conditional Rendering)."
          fullWidth
        >
          <div className="flex w-full flex-col gap-3">
            <div className="flex items-center justify-between">
              <p className="text-xs text-muted-foreground">
                State:{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
                  {controlledOpen ? "true" : "false"}
                </code>
              </p>
              <Button size="sm" variant="outline" className="h-7 text-xs" onClick={() => setControlledOpen(true)} disabled={controlledOpen}>
                Mở lại Alert
              </Button>
            </div>
            {controlledOpen && (
              <AlertPreset 
                color="destructive" 
                size={globalSize}
                title="Bảo trì hệ thống" 
                description="Hệ thống sẽ tạm ngừng hoạt động để bảo trì vào lúc nửa đêm." 
                icon={<TriangleAlertIcon />}
                dismissible
                onDismiss={() => setControlledOpen(false)}
              />
            )}
          </div>
        </ExampleSection>

        <ExampleSection
          label="Nội Dung Phức Tạp (Complex Content)"
        description="Có thể truyền ReactNode hoặc thay thế toàn bộ bằng thẻ children."
      >
        <div className="flex w-full flex-col gap-4 max-w-xl">
          <AlertPreset 
            color="success" 
            size={globalSize}
            title="Thanh toán thành công" 
            icon={<CheckCircle2Icon />}
            dismissible
            action={
              <Button size="sm" variant="outline" className="mr-2 h-7 px-2 text-xs">
                Xem biên lai
              </Button>
            }
          >
            <p className="text-sm mt-1 text-success/90">Hoá đơn #1234 của bạn đã được thanh toán hoàn tất.</p>
          </AlertPreset>
        </div>
      </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
