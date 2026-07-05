import { useState } from "react";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
  ShowcaseDocs,
} from "@/dev/components/showcase";
import {
  InfoIcon,
  TriangleAlertIcon,
  CheckCircle2Icon,
  XCircleIcon,
  XIcon,
} from "lucide-react";

import { type Size } from "@/lib/types";
import { Alert, AlertDescription, AlertTitle, AlertAction, AlertIcon } from "@/components/micro/alert";
import { Button } from "@/components/micro/button";
import { SelectPreset } from "@/components/macro/select-preset";

export default function AlertShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Alert (Micro)"
        description="Hiển thị một thông báo nổi bật để thu hút sự chú ý của người dùng."
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
        <p>Dùng để hiển thị một thông báo quan trọng thu hút sự chú ý của người dùng (ví dụ: lỗi, cảnh báo, hoặc thông báo thành công). Không nên dùng Alert cho các thông báo mang tính tạm thời tự biến mất (hãy dùng Toast/Sonner).</p>
        
        <h3>Micro vs Macro</h3>
        <p>Phiên bản <strong>Micro</strong> (<code>Alert</code>) là một Box thuần tuý không ép buộc layout. Bạn phải dùng class Flexbox (<code>flex items-start</code>) và thẻ <code>div</code> bọc ngoài để tự cấu trúc (Pure Composition) giống như các ví dụ bên dưới.</p>
        <p>Phiên bản <strong>Macro</strong> (<code>AlertPreset</code>) đã được đóng gói sẵn layout Flexbox, chỉ cần truyền props (title, description, icon) vào để dùng ngay.</p>
      </ShowcaseDocs>

      {/* ── Semantic Colors ──────────────────────── */}
      <ExampleSection
        label="Màu Sắc Ngữ Nghĩa (Semantic Colors)"
        description="Mỗi màu sắc truyền đạt một mức độ khẩn cấp hoặc ý nghĩa khác nhau."
      >
        <div className="flex w-full flex-col gap-4 max-w-xl">
          <Alert color="info" size={globalSize} className="flex items-start">
            <AlertIcon render={<InfoIcon />} className="mt-0.5 shrink-0" />
            <div className="flex-1 space-y-0.5">
              <AlertTitle>Có bản cập nhật mới</AlertTitle>
              <AlertDescription>
                Phiên bản 2.0.4 đã sẵn sàng để tải xuống. Hãy cập nhật để trải nghiệm tính năng mới.
              </AlertDescription>
            </div>
          </Alert>

          <Alert color="success" size={globalSize} className="flex items-start">
            <AlertIcon render={<CheckCircle2Icon />} className="mt-0.5 shrink-0" />
            <div className="flex-1 space-y-0.5">
              <AlertTitle>Đã lưu thành công</AlertTitle>
              <AlertDescription>
                Các thay đổi của bạn đã được đồng bộ lên đám mây.
              </AlertDescription>
            </div>
          </Alert>

          <Alert color="warning" size={globalSize} className="flex items-start">
            <AlertIcon render={<TriangleAlertIcon />} className="mt-0.5 shrink-0" />
            <div className="flex-1 space-y-0.5">
              <AlertTitle>Phiên bản sắp hết hạn</AlertTitle>
              <AlertDescription>
                Phiên đăng nhập của bạn sẽ hết hạn trong 5 phút nữa. Vui lòng lưu lại công việc.
              </AlertDescription>
            </div>
          </Alert>

          <Alert color="destructive" size={globalSize} className="flex items-start">
            <AlertIcon render={<XCircleIcon />} className="mt-0.5 shrink-0" />
            <div className="flex-1 space-y-0.5">
              <AlertTitle>Kết nối thất bại</AlertTitle>
              <AlertDescription>
                Không thể kết nối đến cơ sở dữ liệu. Vui lòng kiểm tra lại đường truyền mạng.
              </AlertDescription>
            </div>
          </Alert>
        </div>
      </ExampleSection>

      <ExampleGrid columns={2}>
        {/* ── Default (no color) ───────────────────── */}
        <ExampleSection
          label="Cơ bản (Basic)"
          description="Hiển thị Alert với màu sắc mặc định (info)."
          fullWidth
        >
          <div className="w-full max-w-xl">
            <Alert size={globalSize} className="flex items-start">
              <AlertIcon render={<InfoIcon />} className="mt-0.5 shrink-0" />
              <div className="flex-1 space-y-0.5">
                <AlertTitle>Chú ý!</AlertTitle>
                <AlertDescription>
                  Bạn có thể thêm các component vào dự án bằng cách sử dụng CLI.
                </AlertDescription>
              </div>
            </Alert>
          </div>
        </ExampleSection>

        {/* ── With Action ───────────────────── */}
        <ExampleSection
          label="Có Nút Hành Động (With Action)"
          description="Alert kèm theo một nút tắt (dismiss) được đặt ở góc trên bên phải."
          fullWidth
        >
          <div className="w-full max-w-xl">
            <Alert color="info" size={globalSize} className="flex items-start relative">
              <AlertIcon render={<InfoIcon />} className="mt-0.5 shrink-0" />
              <div className="flex-1 space-y-0.5 pr-8">
                <AlertTitle>Tính năng mới</AlertTitle>
                <AlertDescription>
                  Hãy khám phá trang thống kê dashboard hoàn toàn mới của chúng tôi.
                </AlertDescription>
              </div>
              <AlertAction className="absolute right-1 top-1">
                <Button variant="ghost" size="sm" className="size-6 p-0 group-data-[size=sm]/alert:size-5 group-data-[size=lg]/alert:size-7">
                  <XIcon className="size-3.5 group-data-[size=sm]/alert:size-3 group-data-[size=lg]/alert:size-4" />
                </Button>
              </AlertAction>
            </Alert>
          </div>
        </ExampleSection>
      </ExampleGrid>

      {/* ── Minimal (no title) ───────────────────── */}
      <ExampleSection
        label="Tối Giản (Minimal)"
        description="Alert chỉ có nội dung mô tả, không có tiêu đề."
      >
        <div className="flex w-full flex-col gap-3 max-w-xl">
          <Alert color="info" size={globalSize} className="flex items-start">
            <AlertIcon render={<InfoIcon />} className="mt-0.5 shrink-0" />
            <AlertDescription className="flex-1">
              Bạn có thể thêm các component vào dự án bằng cách sử dụng CLI.
            </AlertDescription>
          </Alert>
          <Alert color="warning" size={globalSize} className="flex items-start">
            <AlertIcon render={<TriangleAlertIcon />} className="mt-0.5 shrink-0" />
            <AlertDescription className="flex-1">
              Bản dùng thử của bạn sẽ hết hạn trong 3 ngày nữa.
            </AlertDescription>
          </Alert>
        </div>
      </ExampleSection>

      {/* ── Text Only (no icon) ───────────────────── */}
      <ExampleSection
        label="Chỉ Có Chữ (Text Only)"
        description="Alert đơn giản không có icon — layout tự nhiên."
      >
        <div className="flex w-full flex-col gap-3 max-w-xl">
          <Alert color="success" size={globalSize} className="flex flex-col gap-0.5">
            <AlertTitle>Thanh toán thành công</AlertTitle>
            <AlertDescription>
              Hoá đơn #1234 của bạn đã được thanh toán hoàn tất.
            </AlertDescription>
          </Alert>
          <Alert color="destructive" size={globalSize} className="flex flex-col gap-0.5">
            <AlertTitle>Tài khoản bị khoá</AlertTitle>
            <AlertDescription>
              Vui lòng liên hệ với bộ phận hỗ trợ để mở khoá tài khoản.
            </AlertDescription>
          </Alert>
        </div>
      </ExampleSection>
    </div>
  );
}
