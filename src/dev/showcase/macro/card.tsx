import { useState } from "react";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";

import { type Size } from "@/lib/types";
import { CardPreset } from "@/components/macro/card-preset";
import { Button } from "@/components/micro/button";
import { Badge } from "@/components/micro/badge";
import { Input } from "@/components/micro/input";
import { Label } from "@/components/micro/label";
import { SelectPreset } from "@/components/macro/select-preset";

export default function CardMacroShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Card Preset (Macro)"
        description="Một thành phần của các nguyên hàm Card để nhanh chóng xây dựng các thẻ tiêu chuẩn mà không cần bản soạn sẵn."
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

      <ExampleGrid columns={2}>
        <ExampleSection
          label="Standard Preset"
          description="Chuyển tiêu đề, mô tả và chân trang làm đạo cụ."
        >
          <CardPreset
            size={globalSize}
            title="Account Settings"
            description="Quản lý các cài đặt và tùy chọn cho tài khoản của bạn."
            footer={<Button size={globalSize}>Save Changes</Button>}
            className="w-full"
          >
            <div className="text-sm text-muted-foreground bg-muted/30 p-4 rounded-lg border border-dashed border-border/50">
              Settings form content goes here.
            </div>
          </CardPreset>
        </ExampleSection>

        <ExampleSection
          label="No Footer"
          description="Bỏ qua phần chân trang để ẩn hoàn toàn phần chân trang."
        >
          <CardPreset
            size={globalSize}
            title="Notification Preferences"
            description="Chọn những thông tin mà bạn muốn nhận thông báo."
            className="w-full"
          >
            <div className="text-sm text-muted-foreground bg-muted/30 p-4 rounded-lg border border-dashed border-border/50">
              Switches and toggles go here.
            </div>
          </CardPreset>
        </ExampleSection>

        <ExampleSection
          label="Custom Title Node"
          description="Tiêu đề hỗ trợ chấp nhận ReactNode, cho phép biểu tượng và huy hiệu."
        >
          <CardPreset
            size={globalSize}
            title={
              <div className="flex items-center gap-2">
                <span>API Keys</span>
                <Badge color="warning">Experimental</Badge>
              </div>
            }
            description="Quản lý các khóa API bí mật của bạn để truy cập từ bên ngoài."
            className="w-full"
          >
            <div className="text-sm text-muted-foreground bg-muted/30 p-4 rounded-lg border border-dashed border-border/50 flex items-center justify-between">
              <span className="font-mono">sk_live_123...</span>
              <Button size="sm" variant="outline">Copy</Button>
            </div>
          </CardPreset>
        </ExampleSection>

        <ExampleSection
          label="With Form Controls"
          description="Sử dụng trẻ em để hiển thị các hình thức và bố cục phức tạp."
        >
          <CardPreset
            size={globalSize}
            title="Update Profile"
            description="Thay đổi tên hiển thị và email của bạn."
            footer={
              <div className="flex justify-between w-full">
                <Button variant="ghost" size={globalSize}>Cancel</Button>
                <Button size={globalSize}>Save</Button>
              </div>
            }
            className="w-full"
          >
            <div className="grid gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="hello@example.com" />
              </div>
            </div>
          </CardPreset>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
