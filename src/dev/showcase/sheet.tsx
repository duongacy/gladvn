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
  SheetTitle,
  SheetTrigger,
} from "../../components/micro/sheet";
import { useI18n } from "../../dev/components/dev-context";
import { useDevContext } from "../../dev/components/dev-context";
import {
  DocsCode,
  DocsP,
  ExampleGrid,
  Showcase,
  ShowcaseDocs,
  ShowcaseExample,
} from "../../dev/components/showcase";
import { type Size } from "../../lib/types";

function SheetMicroShowcase({ globalSize }: { globalSize: Size }) {
  const t = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-10">
      <ShowcaseExample
        title={t("Hướng trượt (Side)", "Side")}
        description={t(
          "Sheet có thể trượt ra từ bốn cạnh: right (mặc định), left, top, bottom.",
          "Sheet can slide out from four sides: right (default), left, top, bottom.",
        )}
        code={`<Sheet>
    <SheetTrigger
      render={
        <Button variant="outline" className="capitalize">
          right
        </Button>
      }
    />
    
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Edit Profile</SheetTitle>
          <SheetDescription>
            Change your profile information and click Save.
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
          <Button>Save changes</Button>
        </SheetFooter>
      </SheetContent>
    
  </Sheet>`}
        preview={
          <>
            <div className="grid grid-cols-2 gap-2">
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

                <SheetContent side="top">
                  <SheetHeader>
                    <SheetTitle>Edit Profile</SheetTitle>
                    <SheetDescription>
                      Change your profile information and click Save.
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
                    <Button size={globalSize}>Save changes</Button>
                  </SheetFooter>
                </SheetContent>
              </Sheet>

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

                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle>Edit Profile</SheetTitle>
                    <SheetDescription>
                      Change your profile information and click Save.
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
                    <Button size={globalSize}>Save changes</Button>
                  </SheetFooter>
                </SheetContent>
              </Sheet>

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

                <SheetContent side="bottom">
                  <SheetHeader>
                    <SheetTitle>Edit Profile</SheetTitle>
                    <SheetDescription>
                      Change your profile information and click Save.
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
                    <Button size={globalSize}>Save changes</Button>
                  </SheetFooter>
                </SheetContent>
              </Sheet>

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

                <SheetContent side="left">
                  <SheetHeader>
                    <SheetTitle>Edit Profile</SheetTitle>
                    <SheetDescription>
                      Change your profile information and click Save.
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
                    <Button size={globalSize}>Save changes</Button>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </div>
          </>
        }
      />

      <ExampleGrid>
        <ShowcaseExample
          title="Có nút đóng (mặc định)"
          description="showCloseButton={true} — nút X tự động hiển thị ở góc trên phải."
          code={`<Sheet>
    <SheetTrigger render={<Button variant="outline" />}>
      <PanelRightIcon />
      Mở Sheet
    </SheetTrigger>
    
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Có nút đóng</SheetTitle>
          <SheetDescription>
            Nút X xuất hiện tự động.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    
  </Sheet>`}
          preview={
            <>
              <Sheet>
                <SheetTrigger
                  render={<Button variant="outline" size={globalSize} />}
                >
                  <PanelRightIcon aria-hidden="true" />
                  Mở Sheet
                </SheetTrigger>

                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle>Có nút đóng</SheetTitle>
                    <SheetDescription>
                      Nút X xuất hiện tự động.
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </>
          }
        />

        <ShowcaseExample
          title="Ẩn nút đóng"
          description="showCloseButton={false} — dùng khi muốn tự control nút đóng bên trong nội dung."
          code={`<Sheet>
    <SheetTrigger render={<Button variant="outline" />}>
      <PanelRightIcon />
      Không có X
    </SheetTrigger>
    
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
    
  </Sheet>`}
          preview={
            <>
              <Sheet>
                <SheetTrigger
                  render={<Button variant="outline" size={globalSize} />}
                >
                  <PanelRightIcon aria-hidden="true" />
                  Không có X
                </SheetTrigger>

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
              </Sheet>
            </>
          }
        />
      </ExampleGrid>

      <ShowcaseExample
        title="Controlled State"
        description="Quản lý trạng thái đóng/mở qua React state với open và onOpenChange."
        code={`const [open, setOpen] = useState(false);
  <div className="flex items-center gap-4">
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger render={<Button variant="outline" />}>
        <SettingsIcon />
        Toggle Controlled
      </SheetTrigger>
      
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
        preview={
          <>
            <div className="flex items-center gap-4">
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger
                  render={<Button variant="outline" size={globalSize} />}
                >
                  <SettingsIcon aria-hidden="true" />
                  Toggle Controlled
                </SheetTrigger>

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
          </>
        }
      />

      <ShowcaseExample
        title="Use case — Filter Panel"
        description="Sheet dùng làm bảng lọc dữ liệu bên phải — pattern phổ biến trong dashboard, table view."
        code={`<Sheet>
    <SheetTrigger render={<Button variant="outline" />}>
      <FilterIcon />
      Lọc dữ liệu
    </SheetTrigger>
    
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
    
  </Sheet>`}
        preview={
          <>
            <Sheet>
              <SheetTrigger
                render={<Button variant="outline" size={globalSize} />}
              >
                <FilterIcon aria-hidden="true" />
                Lọc dữ liệu
              </SheetTrigger>

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
            </Sheet>
          </>
        }
      />
    </div>
  );
}

export default function SheetShowcase() {
  const t = useI18n();
  const { size: globalSize } = useDevContext();
  return (
    <Showcase
      title="Sheet"
      description="Panel trượt từ cạnh màn hình — mở rộng Dialog để hiển thị nội dung bổ sung mà không rời trang."
      guideline={
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
      micro={{ content: <SheetMicroShowcase globalSize={globalSize} /> }}
    />
  );
}
