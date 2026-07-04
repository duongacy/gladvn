import { useState } from "react";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
  ShowcaseDocs,
} from "@/dev/components/showcase";

import { type Size } from "@/lib/types";
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from "@/components/micro/alert-dialog";
import { Button } from "@/components/micro/button";
import { SelectPreset } from "@/components/macro/select-preset";

export default function AlertDialogShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Alert Dialog (Micro)"
        description="Các thành phần nguyên thủy (Primitives) để xây dựng Hộp thoại Cảnh báo."
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
        <h3>Micro Component (Kiến trúc "Dumb" Primitive)</h3>
        <p>Bắt đầu từ phiên bản này, các thành phần <code>AlertDialogHeader</code>, <code>AlertDialogMedia</code>, v.v. đã được loại bỏ hoàn toàn các logic CSS Grid phức tạp. Chúng hiện tại chỉ là các khối thẻ <code>div</code> bọc Flexbox cơ bản, cho phép bạn tự do sắp xếp layout theo bất kỳ kiểu nào bạn muốn (ví dụ: bọc bằng thẻ div ngoài, chèn thêm input, thay đổi thứ tự...).</p>
        <p><strong>Lưu ý:</strong> Để phục vụ 99% Use Case thực tế (tự động layout Icon và Text), vui lòng sử dụng bản <b>AlertDialog Preset (Macro)</b>.</p>
      </ShowcaseDocs>

      <ExampleGrid columns={2}>
        <ExampleSection
          label="Sử dụng Cơ bản"
          description="Lắp ráp thủ công các khối Header, Title, Description, Footer."
        >
          <AlertDialog>
            <AlertDialogTrigger
              render={
                <Button variant="outline" size={globalSize}>
                  Mở Hộp Thoại Trắng
                </Button>
              }
            />
            <AlertDialogContent size={globalSize}>
              <AlertDialogHeader>
                <AlertDialogTitle>Cấu trúc nguyên thuỷ</AlertDialogTitle>
                <AlertDialogDescription>
                  Không có bất kỳ layout "thần thánh" nào ép buộc ở đây. Các thành phần chỉ xếp dọc (flex-col) mặc định.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel size={globalSize}>Huỷ bỏ</AlertDialogCancel>
                <AlertDialogAction size={globalSize}>Tiếp tục</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </ExampleSection>
        
        <ExampleSection
          label="Tự Do Custom Layout"
          description="Bởi vì Micro component rất 'dumb', bạn có thể tự chèn thẻ div, custom flexbox để làm ra bất kỳ giao diện nào."
        >
          <AlertDialog>
            <AlertDialogTrigger
              render={
                <Button variant="outline" color="warning" size={globalSize}>
                  Giao Diện Custom
                </Button>
              }
            />
            <AlertDialogContent size={globalSize} className="border-warning/50">
              <div className="flex flex-col-reverse items-center justify-center gap-4 py-4 sm:flex-row">
                <div className="size-16 rounded-lg bg-warning/20 border border-warning" />
                <AlertDialogHeader className="sm:text-left">
                  <AlertDialogTitle className="text-warning">Cảnh báo Tùy chỉnh</AlertDialogTitle>
                  <AlertDialogDescription>
                    Icon đang nằm bên trái, hoặc có thể dời sang phải tuỳ ý bạn vì bạn đang kiểm soát HTML.
                  </AlertDialogDescription>
                </AlertDialogHeader>
              </div>
              <AlertDialogFooter className="border-t-0 bg-transparent">
                <AlertDialogCancel size={globalSize} className="w-full">Tôi đã hiểu</AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
