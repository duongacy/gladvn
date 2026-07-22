import { useState } from "react";

import { FilterIcon, PanelRightIcon, SettingsIcon } from "lucide-react";

import { Button } from "../../components/micro/button";
import { Input } from "../../components/micro/input";
import { Label } from "../../components/micro/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
} from "../../components/micro/sheet";
import { useDevContext } from "../../dev/components/dev-context";
import {
  DocsCode,
  DocsP,
  ExampleGrid,
  ExampleSection,
  Showcase,
  ShowcaseDocs,
} from "../../dev/components/showcase";
import { type Size } from "../../lib/types";

// ──────────────────────────────────────────────────────────
// SECTION 2: Micro Content (không export)
// ──────────────────────────────────────────────────────────
function SheetMicroShowcase({ globalSize }: { globalSize: Size }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-10 mt-6">
      {/* ── Sides ── */}
      <ExampleSection
        label="Hướng trượt (Side)"
        description="Sheet có thể trượt ra từ bốn cạnh: right (mặc định), left, top, bottom."
        codeString={`<Sheet>
    <SheetTrigger
      render={
        <Button variant="outline" className="capitalize">
          right
        </Button>
      }
    />
    <SheetPortal>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Edit Profile</SheetTitle>
          <SheetDescription>
            Thay đổi thông tin tài khoản của bạn và nhấn
            Lưu.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4 px-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label
              htmlFor="name-right"
              className="text-right"
            >
              Tên
            </Label>
            <Input
              id="name-right"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label
              htmlFor="username-right"
              className="text-right"
            >
              Username
            </Label>
            <Input
              id="username-right"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <SheetFooter>
          <SheetClose render={<Button variant="outline" />}>
            Huỷ
          </SheetClose>
          <Button>Lưu thay đổi</Button>
        </SheetFooter>
      </SheetContent>
    </SheetPortal>
  </Sheet>`}
      >
        <div className="grid grid-cols-2 gap-2">
          {/* top */}
          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size={globalSize}
                  className="w-full"
                />
              }
            >
              top
            </SheetTrigger>

            <SheetPortal>
              <SheetContent side="top">
                <SheetHeader>
                  <SheetTitle>Edit Profile</SheetTitle>
                  <SheetDescription>
                    Thay đổi thông tin tài khoản của bạn và nhấn Lưu.
                  </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4 px-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name-top" className="text-right">
                      Tên
                    </Label>
                    <Input
                      id="name-top"
                      defaultValue="Pedro Duarte"
                      className="col-span-3"
                    />
                  </div>
                </div>
                <SheetFooter>
                  <SheetClose
                    render={<Button variant="outline" size={globalSize} />}
                  >
                    Huỷ
                  </SheetClose>
                  <Button size={globalSize}>Lưu thay đổi</Button>
                </SheetFooter>
              </SheetContent>
            </SheetPortal>
          </Sheet>

          {/* right */}
          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size={globalSize}
                  className="w-full"
                />
              }
            >
              right
            </SheetTrigger>

            <SheetPortal>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Edit Profile</SheetTitle>
                  <SheetDescription>
                    Thay đổi thông tin tài khoản của bạn và nhấn Lưu.
                  </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4 px-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name-right" className="text-right">
                      Tên
                    </Label>
                    <Input
                      id="name-right"
                      defaultValue="Pedro Duarte"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username-right" className="text-right">
                      Username
                    </Label>
                    <Input
                      id="username-right"
                      defaultValue="@peduarte"
                      className="col-span-3"
                    />
                  </div>
                </div>
                <SheetFooter>
                  <SheetClose
                    render={<Button variant="outline" size={globalSize} />}
                  >
                    Huỷ
                  </SheetClose>
                  <Button size={globalSize}>Lưu thay đổi</Button>
                </SheetFooter>
              </SheetContent>
            </SheetPortal>
          </Sheet>

          {/* bottom */}
          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size={globalSize}
                  className="w-full"
                />
              }
            >
              bottom
            </SheetTrigger>

            <SheetPortal>
              <SheetContent side="bottom">
                <SheetHeader>
                  <SheetTitle>Edit Profile</SheetTitle>
                  <SheetDescription>
                    Thay đổi thông tin tài khoản của bạn và nhấn Lưu.
                  </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4 px-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name-bottom" className="text-right">
                      Tên
                    </Label>
                    <Input
                      id="name-bottom"
                      defaultValue="Pedro Duarte"
                      className="col-span-3"
                    />
                  </div>
                </div>
                <SheetFooter>
                  <SheetClose
                    render={<Button variant="outline" size={globalSize} />}
                  >
                    Huỷ
                  </SheetClose>
                  <Button size={globalSize}>Lưu thay đổi</Button>
                </SheetFooter>
              </SheetContent>
            </SheetPortal>
          </Sheet>

          {/* left */}
          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size={globalSize}
                  className="w-full"
                />
              }
            >
              left
            </SheetTrigger>

            <SheetPortal>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Edit Profile</SheetTitle>
                  <SheetDescription>
                    Thay đổi thông tin tài khoản của bạn và nhấn Lưu.
                  </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4 px-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name-left" className="text-right">
                      Tên
                    </Label>
                    <Input
                      id="name-left"
                      defaultValue="Pedro Duarte"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username-left" className="text-right">
                      Username
                    </Label>
                    <Input
                      id="username-left"
                      defaultValue="@peduarte"
                      className="col-span-3"
                    />
                  </div>
                </div>
                <SheetFooter>
                  <SheetClose
                    render={<Button variant="outline" size={globalSize} />}
                  >
                    Huỷ
                  </SheetClose>
                  <Button size={globalSize}>Lưu thay đổi</Button>
                </SheetFooter>
              </SheetContent>
            </SheetPortal>
          </Sheet>
        </div>
      </ExampleSection>

      {/* ── showCloseButton ── */}
      <ExampleGrid>
        <ExampleSection
          label="Có nút đóng (mặc định)"
          description="showCloseButton={true} — nút X tự động hiển thị ở góc trên phải."
          codeString={`<Sheet>
    <SheetTrigger render={<Button variant="outline" />}>
      <PanelRightIcon />
      Mở Sheet
    </SheetTrigger>
    <SheetPortal>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Có nút đóng</SheetTitle>
          <SheetDescription>
            Nút X xuất hiện tự động.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </SheetPortal>
  </Sheet>`}
        >
          <Sheet>
            <SheetTrigger
              render={<Button variant="outline" size={globalSize} />}
            >
              <PanelRightIcon aria-hidden="true" />
              Mở Sheet
            </SheetTrigger>

            <SheetPortal>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Có nút đóng</SheetTitle>
                  <SheetDescription>Nút X xuất hiện tự động.</SheetDescription>
                </SheetHeader>
              </SheetContent>
            </SheetPortal>
          </Sheet>
        </ExampleSection>

        <ExampleSection
          label="Ẩn nút đóng"
          description="showCloseButton={false} — dùng khi muốn tự control nút đóng bên trong nội dung."
          codeString={`<Sheet>
    <SheetTrigger render={<Button variant="outline" />}>
      <PanelRightIcon />
      Không có X
    </SheetTrigger>
    <SheetPortal>
      <SheetContent side="right" showCloseButton={false}>
        <SheetHeader>
          <SheetTitle>Ẩn nút đóng</SheetTitle>
          <SheetDescription>
            Consumer tự render nút đóng trong footer.
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose
            render={
              <Button
                variant="outline"
                className="w-full"
              />
            }
          >
            Đóng thủ công
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </SheetPortal>
  </Sheet>`}
        >
          <Sheet>
            <SheetTrigger
              render={<Button variant="outline" size={globalSize} />}
            >
              <PanelRightIcon aria-hidden="true" />
              Không có X
            </SheetTrigger>

            <SheetPortal>
              <SheetContent side="right" showCloseButton={false}>
                <SheetHeader>
                  <SheetTitle>Ẩn nút đóng</SheetTitle>
                  <SheetDescription>
                    Consumer tự render nút đóng trong footer.
                  </SheetDescription>
                </SheetHeader>
                <SheetFooter>
                  <SheetClose
                    render={
                      <Button
                        variant="outline"
                        size={globalSize}
                        className="w-full"
                      />
                    }
                  >
                    Đóng thủ công
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </SheetPortal>
          </Sheet>
        </ExampleSection>
      </ExampleGrid>

      {/* ── Controlled ── */}
      <ExampleSection
        label="Controlled State"
        description="Quản lý trạng thái đóng/mở qua React state với open và onOpenChange."
        codeString={`const [open, setOpen] = useState(false);
  <div className="flex items-center gap-4">
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger render={<Button variant="outline" />}>
        <SettingsIcon />
        Toggle Controlled
      </SheetTrigger>
      <SheetPortal>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Controlled Mode</SheetTitle>
            <SheetDescription>
              Sheet được điều khiển hoàn toàn bởi React
              state.
            </SheetDescription>
          </SheetHeader>
          <SheetFooter>
            <Button onClick={() => setOpen(false)}>
              Đóng bằng state
            </Button>
          </SheetFooter>
        </SheetContent>
      </SheetPortal>
    </Sheet>
    <p className="text-sm text-muted-foreground">
      Trạng thái:{" "}
      <strong
        data-active={open ? "" : undefined}
        className="data-active:text-primary"
      >
        {open ? "Mở" : "Đóng"}
      </strong>
    </p>
  </div>`}
      >
        <div className="flex items-center gap-4">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={<Button variant="outline" size={globalSize} />}
            >
              <SettingsIcon aria-hidden="true" />
              Toggle Controlled
            </SheetTrigger>

            <SheetPortal>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Controlled Mode</SheetTitle>
                  <SheetDescription>
                    Sheet được điều khiển hoàn toàn bởi React state.
                  </SheetDescription>
                </SheetHeader>
                <SheetFooter>
                  <Button size={globalSize} onClick={() => setOpen(false)}>
                    Đóng bằng state
                  </Button>
                </SheetFooter>
              </SheetContent>
            </SheetPortal>
          </Sheet>
          <p className="text-sm text-muted-foreground">
            Trạng thái:{" "}
            <strong
              data-active={open ? "" : undefined}
              className="data-active:text-primary"
            >
              {open ? "Mở" : "Đóng"}
            </strong>
          </p>
        </div>
      </ExampleSection>

      {/* ── Real-world: Filter Panel ── */}
      <ExampleSection
        label="Use case — Filter Panel"
        description="Sheet dùng làm bảng lọc dữ liệu bên phải — pattern phổ biến trong dashboard, table view."
        codeString={`<Sheet>
    <SheetTrigger render={<Button variant="outline" />}>
      <FilterIcon />
      Lọc dữ liệu
    </SheetTrigger>
    <SheetPortal>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Bộ lọc</SheetTitle>
          <SheetDescription>
            Tinh chỉnh kết quả hiển thị theo điều kiện.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-4 p-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="filter-status">
              Trạng thái
            </Label>
            <Input
              id="filter-status"
              placeholder="Tất cả"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="filter-date-from">
              Từ ngày
            </Label>
            <Input id="filter-date-from" type="date" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="filter-date-to">Đến ngày</Label>
            <Input id="filter-date-to" type="date" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose render={<Button variant="outline" />}>
            Xoá bộ lọc
          </SheetClose>
          <Button>Áp dụng</Button>
        </SheetFooter>
      </SheetContent>
    </SheetPortal>
  </Sheet>`}
      >
        <Sheet>
          <SheetTrigger render={<Button variant="outline" size={globalSize} />}>
            <FilterIcon aria-hidden="true" />
            Lọc dữ liệu
          </SheetTrigger>

          <SheetPortal>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Bộ lọc</SheetTitle>
                <SheetDescription>
                  Tinh chỉnh kết quả hiển thị theo điều kiện.
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col gap-4 p-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="filter-status">Trạng thái</Label>
                  <Input id="filter-status" placeholder="Tất cả" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="filter-date-from">Từ ngày</Label>
                  <Input id="filter-date-from" type="date" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="filter-date-to">Đến ngày</Label>
                  <Input id="filter-date-to" type="date" />
                </div>
              </div>
              <SheetFooter>
                <SheetClose
                  render={<Button variant="outline" size={globalSize} />}
                >
                  Xoá bộ lọc
                </SheetClose>
                <Button size={globalSize}>Áp dụng</Button>
              </SheetFooter>
            </SheetContent>
          </SheetPortal>
        </Sheet>
      </ExampleSection>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 3: Entry point (export default)
// ──────────────────────────────────────────────────────────
export default function SheetShowcase() {
  const { size: globalSize } = useDevContext();
  return (
    <Showcase
      title="Sheet"
      description="Panel trượt từ cạnh màn hình — mở rộng Dialog để hiển thị nội dung bổ sung mà không rời trang."
      generalConcept={
        <ShowcaseDocs>
          <DocsP>
            <DocsCode>Sheet</DocsCode> là một variant của Dialog, nhưng thay vì
            hiện ở giữa màn hình, nó trượt ra từ một cạnh (right, left, top,
            bottom). Phù hợp cho navigation drawer, filter panel, settings
            sidebar, hay form chỉnh sửa.
          </DocsP>
          <DocsP>
            <DocsCode>SheetContent</DocsCode> tự tích hợp{" "}
            <DocsCode>Portal</DocsCode> và <DocsCode>Overlay</DocsCode> bên
            trong. Prop <DocsCode>showCloseButton</DocsCode> cho phép bật/tắt
            nút X tự động. Dùng <DocsCode>open</DocsCode> /{" "}
            <DocsCode>onOpenChange</DocsCode> để controlled mode.
          </DocsP>
        </ShowcaseDocs>
      }
      tabs={[
        {
          label: "Micro (Primitive)",
          content: <SheetMicroShowcase globalSize={globalSize} />,
        },
      ]}
    />
  );
}
