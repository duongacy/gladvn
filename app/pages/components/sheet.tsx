import React, { useState } from "react";
import { FilterIcon, PanelRightIcon, SettingsIcon } from "lucide-react";

import { Button } from "@/components/micro/button";
import { Input } from "@/components/micro/input";
import { Label } from "@/components/micro/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/micro/sheet";
import { useI18n, useDevContext } from "~app/components/dev-context";
import {
  ConfigurableShowcase,
  ShowcaseDocs,
  DocsP,
  DocsCode,
} from "~app/components/showcase";

function useSheetExamples() {
  const t = useI18n();
  const { size: globalSize } = useDevContext();

  // For controlled example
  const [open, setOpen] = useState(false);

  return React.useMemo(
    () => [
      {
        title: t("Hướng trượt", "Side"),
        description: t(
          "Sheet có thể trượt ra từ bốn cạnh: right (mặc định), left, top, bottom.",
          "Sheet can slide out from four sides: right (default), left, top, bottom."
        ),
        microCode: `<Sheet>
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
        >Name</Label>
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
      <SheetClose render={<Button variant="outline" />}>Cancel</SheetClose>
      <Button>Save changes</Button>
    </SheetFooter>
  </SheetContent>
</Sheet>`,
        microPreview: (
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
                      Name
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
                    Cancel
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
                      Name
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
                    Cancel
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
                      Name
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
                    Cancel
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
                      Name
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
                    Cancel
                  </SheetClose>
                  <Button size={globalSize}>Save changes</Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        ),
      },
      {
        title: t("Có nút đóng", "With Close Button (Default)"),
        description: t(
          "showCloseButton={true} — nút X tự động hiển thị ở góc trên phải.",
          "showCloseButton={true} — the X button automatically appears in the top right corner."
        ),
        microCode: `<Sheet>
  <SheetTrigger render={<Button variant="outline" />}>
    <PanelRightIcon />Open Sheet
  </SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>With Close Button</SheetTitle>
      <SheetDescription>The X button appears automatically.</SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>`,
        microPreview: (
          <Sheet>
            <SheetTrigger
              render={<Button variant="outline" size={globalSize} />}
            >
              <PanelRightIcon aria-hidden="true" />
              Open Sheet
            </SheetTrigger>

            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>With Close Button</SheetTitle>
                <SheetDescription>
                  The X button appears automatically.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        ),
      },
      {
        title: t("Ẩn nút đóng", "Hide Close Button"),
        description: t(
          "showCloseButton={false} — dùng khi muốn tự control nút đóng bên trong nội dung.",
          "showCloseButton={false} — used when you want to control the close button manually inside the content."
        ),
        microCode: `<Sheet>
  <SheetTrigger render={<Button variant="outline" />}>
    <PanelRightIcon />No X Button
  </SheetTrigger>
  <SheetContent side="right" showCloseButton={false}>
    <SheetHeader>
      <SheetTitle>Hide Close Button</SheetTitle>
      <SheetDescription>Consumer renders the close button in the footer.</SheetDescription>
    </SheetHeader>
    <SheetFooter>
      <SheetClose
        render={
          <Button
            variant="outline"
            className="w-full"
          />
        }
      >Close Manually</SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>`,
        microPreview: (
          <Sheet>
            <SheetTrigger
              render={<Button variant="outline" size={globalSize} />}
            >
              <PanelRightIcon aria-hidden="true" />
              No X Button
            </SheetTrigger>

            <SheetContent side="right" showCloseButton={false}>
              <SheetHeader>
                <SheetTitle>Hide Close Button</SheetTitle>
                <SheetDescription>
                  Consumer renders the close button in the footer.
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
                  Close Manually
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        ),
      },
      {
        title: t(
          "Trạng thái được kiểm soát",
          "Controlled State"
        ),
        description: t(
          "Quản lý trạng thái đóng/mở qua React state với open và onOpenChange.",
          "Manage the open/closed state via React state with open and onOpenChange."
        ),
        microCode: `const [open, setOpen] = useState(false);

<div className="flex items-center gap-4">
  <Sheet open={open} onOpenChange={setOpen}>
    <SheetTrigger render={<Button variant="outline" />}>
      <SettingsIcon />
      Toggle Controlled
    </SheetTrigger>
    <SheetContent side="right">
      <SheetHeader>
        <SheetTitle>Controlled Mode</SheetTitle>
        <SheetDescription>Sheet is fully controlled by React state.</SheetDescription>
      </SheetHeader>
      <SheetFooter>
        <Button onClick={() => setOpen(false)}>Close via state</Button>
      </SheetFooter>
    </SheetContent>
  </Sheet>
  <p className="text-sm text-muted-foreground">
    Status: {" "}
    <strong
      data-active={open ? "" : undefined}
      className="data-active:text-primary"
    >
      {open ? "Open" : "Closed"}
    </strong>
  </p>
</div>`,
        microPreview: (
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
                    Sheet is fully controlled by React state.
                  </SheetDescription>
                </SheetHeader>
                <SheetFooter>
                  <Button size={globalSize} onClick={() => setOpen(false)}>
                    Close via state
                  </Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
            <p className="text-sm text-muted-foreground">
              Status:{" "}
              <strong
                data-active={open ? "" : undefined}
                className="data-active:text-primary"
              >
                {open ? "Open" : "Closed"}
              </strong>
            </p>
          </div>
        ),
      },
      {
        title: t("Tình huống sử dụng — Bảng lọc", "Use case — Filter Panel"),
        description: t(
          "Sheet dùng làm bảng lọc dữ liệu bên phải — pattern phổ biến trong dashboard, table view.",
          "Sheet used as a right-side data filter panel — a common pattern in dashboards, table views."
        ),
        microCode: `<Sheet>
  <SheetTrigger render={<Button variant="outline" />}>
    <FilterIcon />Filter Data
  </SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>Filters</SheetTitle>
      <SheetDescription>Refine the displayed results based on conditions.</SheetDescription>
    </SheetHeader>
    <div className="flex flex-col gap-4 p-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="filter-status">Status</Label>
        <Input
          id="filter-status"
          placeholder="All"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="filter-date-from">From Date</Label>
        <Input id="filter-date-from" type="date" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="filter-date-to">To Date</Label>
        <Input id="filter-date-to" type="date" />
      </div>
    </div>
    <SheetFooter>
      <SheetClose render={<Button variant="outline" />}>Clear Filters</SheetClose>
      <Button>Apply</Button>
    </SheetFooter>
  </SheetContent>
</Sheet>`,
        microPreview: (
          <Sheet>
            <SheetTrigger
              render={<Button variant="outline" size={globalSize} />}
            >
              <FilterIcon aria-hidden="true" />
              Filter Data
            </SheetTrigger>

            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
                <SheetDescription>
                  Refine the displayed results based on conditions.
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col gap-4 p-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="filter-status">Status</Label>
                  <Input id="filter-status" placeholder="All" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="filter-date-from">From Date</Label>
                  <Input id="filter-date-from" type="date" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="filter-date-to">To Date</Label>
                  <Input id="filter-date-to" type="date" />
                </div>
              </div>
              <SheetFooter>
                <SheetClose
                  render={<Button variant="outline" size={globalSize} />}
                >
                  Clear Filters
                </SheetClose>
                <Button size={globalSize}>Apply</Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        ),
      },
    ],
    [t, globalSize, open, setOpen]
  );
}

export default function SheetShowcase() {
  const t = useI18n();
  const examples = useSheetExamples();

  return (
    <ConfigurableShowcase
      title={t("Sheet", "Sheet")}
      description={t(
        "Panel trượt từ cạnh màn hình — mở rộng Dialog để hiển thị nội dung bổ sung mà không rời trang.",
        "A panel that slides in from the edge of the screen — extending Dialog to display additional content without leaving the page."
      )}
      guideline={
        <ShowcaseDocs>
          <DocsP>
            <DocsCode>Sheet</DocsCode>
            {t(
              " là một variant của Dialog, nhưng thay vì hiện ở giữa màn hình, nó trượt ra từ một cạnh (right, left, top, bottom). Phù hợp cho navigation drawer, filter panel, settings sidebar, hay form chỉnh sửa.",
              " is a variant of Dialog, but instead of appearing in the center of the screen, it slides out from an edge (right, left, top, bottom). Suitable for navigation drawer, filter panel, settings sidebar, or edit forms."
            )}
          </DocsP>
          <DocsP>
            <DocsCode>SheetContent</DocsCode>
            {t(" tự tích hợp ", " integrates ")}
            <DocsCode>Portal</DocsCode>
            {t(" và ", " and ")}
            <DocsCode>Overlay</DocsCode>
            {t(" bên trong. Prop ", " internally. The ")}
            <DocsCode>showCloseButton</DocsCode>
            {t(
              " cho phép bật/tắt nút X tự động. Dùng ",
              " prop allows toggling the automatic X button. Use "
            )}
            <DocsCode>open</DocsCode>
            {t(" / ", " / ")}
            <DocsCode>onOpenChange</DocsCode>
            {t(" để sử dụng controlled mode.", " for controlled mode.")}
          </DocsP>
        </ShowcaseDocs>
      }
      examples={examples}
    />
  );
}
