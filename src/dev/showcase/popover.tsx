import { useState } from "react";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";

import { type Size } from "@/lib/types";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverDescription,
} from "@/components/micro/popover";
import { Button } from "@/components/micro/button";
import { Input } from "@/components/micro/input";
import { Label } from "@/components/micro/label";
import { SelectPreset } from "@/components/macro/select-preset";
import { Settings, User, Bell } from "lucide-react";

export default function PopoverShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Popover"
        description="Hiển thị nội dung phong phú trong cổng thông tin, được kích hoạt bằng một nút."
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
          label="Default"
          description="Cửa sổ Popover tiêu chuẩn."
        >
          <Popover>
            <PopoverTrigger
              render={
                <Button variant="outline" size={globalSize}>
                  Open Popover
                </Button>
              }
            />
            <PopoverContent className="w-80" sideOffset={8}>
              <PopoverHeader>
                <PopoverTitle>Dimensions</PopoverTitle>
                <PopoverDescription>
                  Cài đặt kích thước cho layer.
                </PopoverDescription>
              </PopoverHeader>
              <div className="grid gap-4 mt-4">
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="width">Width</Label>
                  <Input
                    id="width"
                    defaultValue="100%"
                    className="col-span-2 h-8"
                  />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="height">Height</Label>
                  <Input
                    id="height"
                    defaultValue="200px"
                    className="col-span-2 h-8"
                  />
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </ExampleSection>

        <ExampleSection
          label="Icon Trigger"
          description="Mở Popover bằng Icon Button."
        >
          <div className="flex gap-4">
            <Popover>
              <PopoverTrigger
                render={
                  <Button
                    variant="ghost"
                    size="md"
                    iconOnly
                    className="rounded-full"
                  >
                    <Bell className="size-4" />
                  </Button>
                }
              />
              <PopoverContent className="w-64" sideOffset={8} align="start">
                <PopoverHeader>
                  <PopoverTitle>Thông báo</PopoverTitle>
                  <PopoverDescription>
                    Bạn có 3 tin nhắn chưa đọc.
                  </PopoverDescription>
                </PopoverHeader>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger
                render={
                  <Button variant="outline" size="md" iconOnly>
                    <Settings className="size-4" />
                  </Button>
                }
              />
              <PopoverContent className="w-56" sideOffset={8}>
                <PopoverHeader>
                  <PopoverTitle>Cài đặt nhanh</PopoverTitle>
                </PopoverHeader>
                <div className="flex flex-col gap-2 mt-2">
                  <Button variant="ghost" className="justify-start">
                    Tài khoản
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    Giao diện
                  </Button>
                  <Button
                    variant="ghost"
                    className="justify-start text-destructive hover:text-destructive"
                  >
                    Đăng xuất
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </ExampleSection>
      </ExampleGrid>

      <ExampleSection
        label="Placement (Vị trí)"
        description="Popover có thể hiển thị ở nhiều hướng khác nhau so với trigger (Top, Bottom, Left, Right)."
        codeString={`<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">top</Button>
  </PopoverTrigger>
  <PopoverContent side="top" sideOffset={8} className="w-48 text-center text-sm p-4">
    Hiển thị ở phía <strong>top</strong>
  </PopoverContent>
</Popover>`}
      >
        <div className="flex flex-wrap items-center justify-center gap-4 py-8">
          {(["top", "right", "bottom", "left"] as const).map((side) => (
            <Popover key={side}>
              <PopoverTrigger
                render={
                  <Button
                    variant="outline"
                    size={globalSize}
                    className="capitalize"
                  >
                    {side}
                  </Button>
                }
              />
              <PopoverContent
                side={side}
                sideOffset={8}
                className="w-48 text-center text-sm p-4"
              >
                Hiển thị ở phía <strong className="capitalize">{side}</strong>
              </PopoverContent>
            </Popover>
          ))}
        </div>
      </ExampleSection>

      <ExampleSection
        label="Controlled State"
        description="Quản lý trạng thái đóng/mở của Popover thông qua React state (open và onOpenChange)."
        codeString={`const [isOpen, setIsOpen] = React.useState(false)

return (
  <Popover open={isOpen} onOpenChange={setIsOpen}>
    <PopoverTrigger asChild>
      <Button variant="outline">Toggle Controlled Popover</Button>
    </PopoverTrigger>
    <PopoverContent className="w-80" sideOffset={8}>
      <PopoverHeader>
        <PopoverTitle>Controlled Mode</PopoverTitle>
        <PopoverDescription>
          Popover này được control bởi state. Bạn có thể đóng nó bằng nút bên dưới hoặc click ra ngoài.
        </PopoverDescription>
      </PopoverHeader>
      <div className="mt-4 flex justify-end">
        <Button size="sm" color="secondary" onClick={() => setIsOpen(false)}>
          Đóng Popover
        </Button>
      </div>
    </PopoverContent>
  </Popover>
)`}
      >
        <div className="flex items-center gap-4">
          <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger
              render={
                <Button variant="outline" size={globalSize}>
                  Toggle Controlled Popover
                </Button>
              }
            />
            <PopoverContent className="w-80" sideOffset={8}>
              <PopoverHeader>
                <PopoverTitle>Controlled Mode</PopoverTitle>
                <PopoverDescription>
                  Popover này được control bởi state. Bạn có thể đóng nó bằng
                  nút bên dưới hoặc click ra ngoài.
                </PopoverDescription>
              </PopoverHeader>
              <div className="mt-4 flex justify-end">
                <Button
                  size="sm"
                  color="secondary"
                  onClick={() => setIsOpen(false)}
                >
                  Đóng Popover
                </Button>
              </div>
            </PopoverContent>
          </Popover>

          <div className="text-sm text-muted-foreground">
            Trạng thái hiện tại:{" "}
            <strong
              data-active={isOpen ? "" : undefined}
              className="data-active:text-primary"
            >
              {isOpen ? "Mở" : "Đóng"}
            </strong>
          </div>
        </div>
      </ExampleSection>
    </div>
  );
}
