import { useState } from "react";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
  ShowcaseDocs,
} from "@/dev/components/showcase";
import {
  ShieldAlertIcon,
  InfoIcon,
} from "lucide-react";

import { type Size } from "@/lib/types";
import { AlertDialogPreset } from "@/components/macro/alert-dialog-preset";
import { Button } from "@/components/micro/button";
import { SelectPreset } from "@/components/macro/select-preset";

export default function AlertDialogPresetShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");
  const [controlledOpen, setControlledOpen] = useState(false);

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Alert Dialog Preset (Macro)"
        description="Phiên bản bọc sẵn (Opinionated) của AlertDialog, tự động xử lý toàn bộ layout phức tạp."
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
        <h3>Giới thiệu Macro</h3>
        <p>Thành phần này được thiết kế để giải quyết 99% các trường hợp sử dụng thực tế. Nó bọc sẵn các Primitive (Micro), tự động bố cục Icon, Tiêu đề, Nội dung và Nút bấm bằng Flexbox một cách hoàn hảo mà không cần bạn phải viết thêm class hay wrapper nào.</p>
      </ShowcaseDocs>

      <ExampleGrid columns={2}>
        <ExampleSection
          label="Hành Động Nguy Hiểm (Destructive)"
          description="Sử dụng thuộc tính color='destructive' trên Action Button."
        >
          <AlertDialogPreset
            size={globalSize}
            trigger={<Button variant="outline" color="destructive" size={globalSize}>Xoá Tài Khoản</Button>}
            title="Bạn có chắc chắn muốn xoá?"
            description="Hành động này không thể hoàn tác. Tài khoản và toàn bộ dữ liệu của bạn trên hệ thống sẽ bị xoá vĩnh viễn."
            cancel={<Button variant="outline" size={globalSize}>Huỷ</Button>}
            action={<Button color="destructive" size={globalSize}>Xoá</Button>}
          />
        </ExampleSection>

        <ExampleSection
          label="Xác Nhận Tiêu Chuẩn"
          description="Hộp thoại xác nhận thông thường chỉ với Text."
        >
          <AlertDialogPreset
            size={globalSize}
            trigger={<Button variant="outline" size={globalSize}>Đăng Xuất</Button>}
            title="Đăng xuất khỏi tài khoản?"
            description="Bạn sẽ cần nhập lại thông tin đăng nhập để truy cập vào tài khoản."
            cancel={<Button variant="outline" size={globalSize}>Ở Lại</Button>}
            action={<Button size={globalSize}>Đăng Xuất</Button>}
          />
        </ExampleSection>
      </ExampleGrid>

      <ExampleGrid columns={2}>
        <ExampleSection
          label="Kèm Media (Icon/Image)"
          description="Tự động chia cột Flexbox Side-by-Side khi truyền prop 'icon'."
        >
          <AlertDialogPreset
            size={globalSize}
            trigger={<Button variant="outline" color="warning" size={globalSize}>Thu Hồi Quyền</Button>}
            icon={
              <div className="flex size-full items-center justify-center rounded-full bg-warning/10">
                <ShieldAlertIcon className="text-warning" />
              </div>
            }
            title="Thu hồi quyền truy cập API?"
            description="Tất cả các ứng dụng đang sử dụng API key này sẽ bị mất quyền truy cập ngay lập tức."
            cancel={<Button variant="outline" size={globalSize}>Giữ Lại</Button>}
            action={<Button color="warning" size={globalSize}>Thu Hồi</Button>}
          />
        </ExampleSection>

        <ExampleSection
          label="Trạng Thái Controlled"
          description="Quản lý trạng thái đóng mở thông qua React State thay vì dùng prop Trigger."
        >
          <div className="flex w-full flex-col items-center gap-3">
            <p className="text-xs text-muted-foreground">
              State:{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
                {controlledOpen ? "true" : "false"}
              </code>
            </p>
            <Button variant="outline" color="info" size={globalSize} onClick={() => setControlledOpen(true)}>
              Bật Chế Độ Máy Bay
            </Button>
            <AlertDialogPreset
              open={controlledOpen}
              onOpenChange={setControlledOpen}
              size={globalSize}
              title="Bật chế độ máy bay?"
              description="Tất cả các kết nối mạng bao gồm Wi-Fi và Bluetooth sẽ bị ngắt."
              cancel={<Button variant="outline" size={globalSize} onClick={() => setControlledOpen(false)}>Huỷ</Button>}
              action={<Button color="info" size={globalSize} onClick={() => setControlledOpen(false)}>Đồng Ý</Button>}
            />
          </div>
        </ExampleSection>
      </ExampleGrid>

      <ExampleGrid columns={1}>
        <ExampleSection
          label="Giao Diện Nhỏ (Compact)"
          description="Khi dùng size='sm', nội dung sẽ được căn giữa và footer tự động dàn hàng ngang 2 cột."
        >
          <AlertDialogPreset
            size="sm"
            trigger={<Button variant="outline" size={globalSize}>Xác Nhận Nhanh</Button>}
            icon={
              <div className="flex size-full items-center justify-center rounded-full bg-muted">
                <InfoIcon />
              </div>
            }
            title="Xác nhận hành động?"
            description="Đây là hộp thoại dạng nhỏ, phù hợp cho các thao tác nhanh với 2 nút nằm ngang."
            cancel={<Button variant="outline" size="sm">Không</Button>}
            action={<Button size="sm">Có</Button>}
          />
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
