import React, { useCallback, useState } from "react";

import { MoonIcon, SunIcon } from "lucide-react";
import { useDevContext, useI18n } from "~app/components/dev-context";
import {
  ConfigurableShowcase,
  DocsCode,
  DocsH3,
  DocsP,
  ShowcaseDocs,
} from "~app/components/showcase";

import { Button } from "@/components/micro/button";
import {
  Combobox,
  ComboboxContent,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/micro/combobox";
import {
  Confirm,
  ConfirmContent,
  ConfirmDescription,
  ConfirmFooter,
  ConfirmHeader,
  ConfirmTitle,
  ConfirmTrigger,
} from "@/components/micro/confirm";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/micro/context-menu";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/micro/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/micro/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/micro/dropdown-menu";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/micro/hover-card";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuPositioner,
  NavigationMenuTrigger,
} from "@/components/micro/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/micro/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/micro/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/micro/sheet";
import {
  type ThemeMode,
  ThemeProvider,
} from "@/components/micro/theme-provider";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/micro/tooltip";

function ScopedThemeBox({
  title,
  description,
  children,
  defaultMode = "dark",
}: {
  title?: string;
  description?: string;
  children: React.ReactNode;
  defaultMode?: ThemeMode;
}) {
  const [mode, setMode] = useState<ThemeMode>(defaultMode);
  const handleToggleMode = useCallback(() => {
    setMode((m) => (m === "light" ? "dark" : "light"));
  }, []);

  return (
    <div className="w-full flex flex-col gap-3">
      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground font-mono">
            Scoped Context:
          </span>
          <span className="font-semibold text-foreground uppercase px-2 py-0.5 rounded bg-muted/80 border border-border">
            {mode} mode
          </span>
        </div>
        <button
          type="button"
          onClick={handleToggleMode}
          className="flex items-center gap-1.5 font-medium px-2.5 py-1 rounded-md border border-border bg-background hover:bg-muted text-foreground transition-colors cursor-pointer"
        >
          {mode === "dark" ? (
            <>
              <SunIcon className="size-3.5 text-amber-500" />
              Switch to Light
            </>
          ) : (
            <>
              <MoonIcon className="size-3.5 text-blue-500" />
              Switch to Dark
            </>
          )}
        </button>
      </div>

      <ThemeProvider mode={mode} onModeChange={setMode}>
        <div className="w-full rounded-xl border border-border bg-card text-card-foreground p-6 shadow-sm transition-colors duration-200">
          {(title || description) && (
            <div className="mb-5 pb-3 border-b border-border/40">
              {title && <h4 className="text-sm font-semibold">{title}</h4>}
              {description && (
                <p className="text-xs text-muted-foreground mt-0.5">
                  {description}
                </p>
              )}
            </div>
          )}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {children}
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}

function FullMatrixPlayground() {
  const [sandboxMode, setSandboxMode] = useState<ThemeMode>("dark");
  const handleToggleSandboxMode = useCallback(() => {
    setSandboxMode((m) => (m === "light" ? "dark" : "light"));
  }, []);

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-3 bg-muted/40 p-3 rounded-lg border border-border">
        <div>
          <span className="text-sm font-semibold text-foreground">
            Scoped Theme Sandbox Matrix
          </span>
          <p className="text-xs text-muted-foreground">
            Thử nghiệm trực tiếp cả 12 components overlay trong cùng một vùng
            theme độc lập.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">Theme Sandbox:</span>
          <Button
            size="sm"
            variant="outline"
            onClick={handleToggleSandboxMode}
            className="cursor-pointer gap-2"
          >
            {sandboxMode === "dark" ? (
              <>
                <SunIcon className="size-3.5 text-amber-400" />
                Đổi sang Light
              </>
            ) : (
              <>
                <MoonIcon className="size-3.5 text-blue-400" />
                Đổi sang Dark
              </>
            )}
          </Button>
        </div>
      </div>

      <ThemeProvider mode={sandboxMode} onModeChange={setSandboxMode}>
        <div className="w-full rounded-xl border border-border bg-card text-card-foreground p-6 shadow-md transition-colors duration-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col gap-2 p-3 rounded-lg border border-border/50 bg-background/50">
              <span className="text-xs font-semibold text-muted-foreground">
                1. Select
              </span>
              <Select defaultValue="react">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Chọn thư viện..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="react">React</SelectItem>
                  <SelectItem value="vue">Vue</SelectItem>
                  <SelectItem value="svelte">Svelte</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-2 p-3 rounded-lg border border-border/50 bg-background/50">
              <span className="text-xs font-semibold text-muted-foreground">
                2. Combobox
              </span>
              <Combobox items={["Tokyo", "Hanoi", "Seoul", "Paris"]}>
                <div className="relative w-full">
                  <ComboboxInput
                    placeholder="Tìm thành phố..."
                    className="w-full"
                  />
                </div>
                <ComboboxContent>
                  <ComboboxList>
                    <ComboboxItem value="Tokyo">Tokyo</ComboboxItem>
                    <ComboboxItem value="Hanoi">Hanoi</ComboboxItem>
                    <ComboboxItem value="Seoul">Seoul</ComboboxItem>
                    <ComboboxItem value="Paris">Paris</ComboboxItem>
                  </ComboboxList>
                </ComboboxContent>
              </Combobox>
            </div>

            <div className="flex flex-col gap-2 p-3 rounded-lg border border-border/50 bg-background/50">
              <span className="text-xs font-semibold text-muted-foreground">
                3. Tooltip
              </span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger
                    render={
                      <Button variant="outline" className="w-full">
                        Rê chuột vào đây
                      </Button>
                    }
                  />
                  <TooltipContent>
                    <p>Tooltip hiển thị đúng theme của Sandbox</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <div className="flex flex-col gap-2 p-3 rounded-lg border border-border/50 bg-background/50">
              <span className="text-xs font-semibold text-muted-foreground">
                4. Popover
              </span>
              <Popover>
                <PopoverTrigger
                  render={
                    <Button variant="outline" className="w-full">
                      Mở Popover
                    </Button>
                  }
                />
                <PopoverContent className="w-64">
                  <PopoverHeader>
                    <PopoverTitle>Cấu hình Popover</PopoverTitle>
                    <PopoverDescription>
                      Nội dung popover thừa kế theme cục bộ thành công.
                    </PopoverDescription>
                  </PopoverHeader>
                </PopoverContent>
              </Popover>
            </div>

            <div className="flex flex-col gap-2 p-3 rounded-lg border border-border/50 bg-background/50">
              <span className="text-xs font-semibold text-muted-foreground">
                5. Dropdown Menu
              </span>
              <DropdownMenu>
                <DropdownMenuTrigger
                  render={
                    <Button variant="outline" className="w-full">
                      Mở Menu Tác Vụ
                    </Button>
                  }
                />
                <DropdownMenuContent className="w-48">
                  <DropdownMenuGroup>
                    <DropdownMenuLabel>Tài khoản</DropdownMenuLabel>
                    <DropdownMenuItem>Hồ sơ cá nhân</DropdownMenuItem>
                    <DropdownMenuItem>Cài đặt</DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive">
                    Đăng xuất
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="flex flex-col gap-2 p-3 rounded-lg border border-border/50 bg-background/50">
              <span className="text-xs font-semibold text-muted-foreground">
                6. Context Menu
              </span>
              <ContextMenu>
                <ContextMenuTrigger className="flex h-9 w-full items-center justify-center rounded-md border border-dashed border-border text-xs text-muted-foreground select-none cursor-context-menu">
                  Chuột phải vào đây
                </ContextMenuTrigger>
                <ContextMenuContent className="w-44">
                  <ContextMenuItem>Tải lại</ContextMenuItem>
                  <ContextMenuItem>Sao chép</ContextMenuItem>
                  <ContextMenuSeparator />
                  <ContextMenuItem>Kiểm tra</ContextMenuItem>
                </ContextMenuContent>
              </ContextMenu>
            </div>

            <div className="flex flex-col gap-2 p-3 rounded-lg border border-border/50 bg-background/50">
              <span className="text-xs font-semibold text-muted-foreground">
                7. Dialog
              </span>
              <Dialog>
                <DialogTrigger
                  render={
                    <Button variant="outline" className="w-full">
                      Mở Modal Dialog
                    </Button>
                  }
                />
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Modal Dialog Theme</DialogTitle>
                    <DialogDescription>
                      Dù mount ra ngoài document.body, Dialog vẫn giữ nguyên
                      theme của Sandbox.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <DialogClose
                      render={<Button variant="outline">Đóng</Button>}
                    />
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            <div className="flex flex-col gap-2 p-3 rounded-lg border border-border/50 bg-background/50">
              <span className="text-xs font-semibold text-muted-foreground">
                8. Confirm (Alert Dialog)
              </span>
              <Confirm>
                <ConfirmTrigger
                  render={
                    <Button
                      variant="outline"
                      color="destructive"
                      className="w-full"
                    >
                      Xác nhận hành động
                    </Button>
                  }
                />
                <ConfirmContent className="max-w-md">
                  <ConfirmHeader>
                    <ConfirmTitle>Bạn có chắc chắn?</ConfirmTitle>
                    <ConfirmDescription>
                      Hành động này không thể hoàn tác. Mọi dữ liệu sẽ bị xóa.
                    </ConfirmDescription>
                  </ConfirmHeader>
                  <ConfirmFooter className="flex justify-end gap-2">
                    <Button variant="outline">Hủy</Button>
                    <Button color="destructive">Đồng ý</Button>
                  </ConfirmFooter>
                </ConfirmContent>
              </Confirm>
            </div>

            <div className="flex flex-col gap-2 p-3 rounded-lg border border-border/50 bg-background/50">
              <span className="text-xs font-semibold text-muted-foreground">
                9. Drawer
              </span>
              <Drawer>
                <DrawerTrigger asChild>
                  <Button variant="outline" className="w-full">
                    Mở Drawer Dưới
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <div className="mx-auto w-full max-w-sm p-6 space-y-4">
                    <DrawerHeader>
                      <DrawerTitle>Ngăn kéo Drawer</DrawerTitle>
                      <DrawerDescription>
                        Trượt từ dưới màn hình lên với theme bảo toàn trọn vẹn.
                      </DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                      <DrawerClose asChild>
                        <Button variant="outline" className="w-full">
                          Hoàn tất
                        </Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>

            <div className="flex flex-col gap-2 p-3 rounded-lg border border-border/50 bg-background/50">
              <span className="text-xs font-semibold text-muted-foreground">
                10. Sheet
              </span>
              <Sheet>
                <SheetTrigger
                  render={
                    <Button variant="outline" className="w-full">
                      Mở Sheet Cạnh Phải
                    </Button>
                  }
                />
                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle>Bảng Trượt Sheet</SheetTitle>
                    <SheetDescription>
                      Slide-over panel hiển thị đúng theme của ngữ cảnh khai
                      báo.
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>

            <div className="flex flex-col gap-2 p-3 rounded-lg border border-border/50 bg-background/50">
              <span className="text-xs font-semibold text-muted-foreground">
                11. Hover Card
              </span>
              <HoverCard>
                <HoverCardTrigger
                  render={
                    <Button variant="outline" className="w-full">
                      Hover @gladvn
                    </Button>
                  }
                />
                <HoverCardContent className="w-72">
                  <div className="flex flex-col gap-1.5">
                    <h4 className="text-sm font-semibold text-foreground">
                      Gladvn UI
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Zero-Portal Scoped Theme Tunneling tự động mang theme vào
                      card.
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>

            <div className="flex flex-col gap-2 p-3 rounded-lg border border-border/50 bg-background/50">
              <span className="text-xs font-semibold text-muted-foreground">
                12. Navigation Menu
              </span>
              <NavigationMenu className="w-full">
                <NavigationMenuList className="w-full justify-center">
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="w-full">
                      Menu Điều Hướng
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="p-4 w-64 space-y-2">
                        <h4 className="text-sm font-semibold text-foreground">
                          Theme Tunneling
                        </h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          Menu đa cấp tự động ăn theme từ
                          NavigationMenuPositioner.
                        </p>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
                <NavigationMenuPositioner />
              </NavigationMenu>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}

function useThemeProviderExamples() {
  const t = useI18n();
  const { size: globalSize } = useDevContext();

  return React.useMemo(
    () => [
      {
        title: t("Sân Chơi Toàn Diện", "Unified 12-Component Playground"),
        description: t(
          "Một Sandbox tổng hợp chứa đầy đủ cả 12 components overlay. Hãy bấm đổi theme của Sandbox để thấy toàn bộ 12 popup tự động tunnel theme tương ứng mà không cần ThemeWrapper.",
          "An integrated Sandbox containing all 12 overlay components. Toggle the Sandbox theme to see all 12 popups automatically tunnel the corresponding theme without any manual ThemeWrapper.",
        ),
        microCode: `<ThemeProvider mode={sandboxMode}>
  <div className="rounded-xl border bg-card p-6 text-card-foreground">
    <Select ... />
    <Combobox ... />
    <Tooltip ... />
    <Popover ... />
    <DropdownMenu ... />
    <ContextMenu ... />
    <Dialog ... />
    <Confirm ... />
    <Drawer ... />
    <Sheet ... />
    <HoverCard ... />
    <NavigationMenu ... />
  </div>
</ThemeProvider>`,
        microPreview: <FullMatrixPlayground />,
      },

      {
        title: t("1. Select trong Scoped Theme", "1. Select in Scoped Theme"),
        description: t(
          "SelectContent tự động mang theme của container khi mount ra Portal.",
          "SelectContent automatically carries the container theme when portalled.",
        ),
        microCode: `<ThemeProvider mode="dark">
  <div className="rounded-xl border bg-card p-6 text-card-foreground">
    <Select defaultValue="react">
      <SelectTrigger className="w-52">
        <SelectValue placeholder="Chọn thư viện..." />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="react">React</SelectItem>
        <SelectItem value="vue">Vue</SelectItem>
        <SelectItem value="svelte">Svelte</SelectItem>
      </SelectContent>
    </Select>
  </div>
</ThemeProvider>`,
        microPreview: (
          <ScopedThemeBox title="Select Component Demo">
            <Select defaultValue="react">
              <SelectTrigger className="w-52">
                <SelectValue placeholder="Chọn thư viện..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="react">React</SelectItem>
                <SelectItem value="vue">Vue</SelectItem>
                <SelectItem value="svelte">Svelte</SelectItem>
              </SelectContent>
            </Select>
          </ScopedThemeBox>
        ),
      },

      {
        title: t(
          "2. Combobox trong Scoped Theme",
          "2. Combobox in Scoped Theme",
        ),
        description: t(
          "ComboboxContent giữ nguyên theme cho danh sách tìm kiếm và item indicator.",
          "ComboboxContent preserves the theme for search list and item indicators.",
        ),
        microCode: `<ThemeProvider mode="dark">
  <div className="rounded-xl border bg-card p-6 text-card-foreground">
    <Combobox items={["Tokyo", "Hanoi", "Seoul", "Paris"]}>
      <ComboboxInput placeholder="Tìm thành phố..." className="w-52" />
      <ComboboxContent>
        <ComboboxList>
          <ComboboxItem value="Tokyo">Tokyo</ComboboxItem>
          <ComboboxItem value="Hanoi">Hanoi</ComboboxItem>
          <ComboboxItem value="Seoul">Seoul</ComboboxItem>
          <ComboboxItem value="Paris">Paris</ComboboxItem>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  </div>
</ThemeProvider>`,
        microPreview: (
          <ScopedThemeBox title="Combobox Component Demo">
            <Combobox items={["Tokyo", "Hanoi", "Seoul", "Paris"]}>
              <div className="relative w-52">
                <ComboboxInput
                  placeholder="Tìm thành phố..."
                  className="w-52"
                />
              </div>
              <ComboboxContent>
                <ComboboxList>
                  <ComboboxItem value="Tokyo">Tokyo</ComboboxItem>
                  <ComboboxItem value="Hanoi">Hanoi</ComboboxItem>
                  <ComboboxItem value="Seoul">Seoul</ComboboxItem>
                  <ComboboxItem value="Paris">Paris</ComboboxItem>
                </ComboboxList>
              </ComboboxContent>
            </Combobox>
          </ScopedThemeBox>
        ),
      },

      {
        title: t("3. Tooltip trong Scoped Theme", "3. Tooltip in Scoped Theme"),
        description: t(
          "TooltipContent nổi trên document.body nhưng kế thừa màu nền và viền từ ThemeContext.",
          "TooltipContent floats on document.body while inheriting background and border from ThemeContext.",
        ),
        microCode: `<ThemeProvider mode="dark">
  <div className="rounded-xl border bg-card p-6 text-card-foreground">
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline">Hover me</Button>} />
        <TooltipContent>
          <p>Tooltip inherits scoped theme</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </div>
</ThemeProvider>`,
        microPreview: (
          <ScopedThemeBox title="Tooltip Component Demo">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger
                  render={
                    <Button variant="outline" size={globalSize}>
                      Rê chuột vào đây
                    </Button>
                  }
                />
                <TooltipContent>
                  <p>Tooltip hiển thị đúng theme của vùng này</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </ScopedThemeBox>
        ),
      },

      {
        title: t("4. Popover trong Scoped Theme", "4. Popover in Scoped Theme"),
        description: t(
          "PopoverContent mở ra đúng màu sắc của container cha.",
          "PopoverContent opens with the exact colors of its parent container.",
        ),
        microCode: `<ThemeProvider mode="dark">
  <div className="rounded-xl border bg-card p-6 text-card-foreground">
    <Popover>
      <PopoverTrigger render={<Button variant="outline">Mở Popover</Button>} />
      <PopoverContent className="w-64">
        <PopoverHeader>
          <PopoverTitle>Cài đặt Scoped</PopoverTitle>
          <PopoverDescription>
            Popup này tự động kế thừa theme Dark/Light từ ThemeProvider.
          </PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  </div>
</ThemeProvider>`,
        microPreview: (
          <ScopedThemeBox title="Popover Component Demo">
            <Popover>
              <PopoverTrigger
                render={
                  <Button variant="outline" size={globalSize}>
                    Mở Popover
                  </Button>
                }
              />
              <PopoverContent className="w-64">
                <PopoverHeader>
                  <PopoverTitle>Cài đặt Scoped</PopoverTitle>
                  <PopoverDescription>
                    Popup này tự động kế thừa theme Dark/Light từ ThemeProvider.
                  </PopoverDescription>
                </PopoverHeader>
              </PopoverContent>
            </Popover>
          </ScopedThemeBox>
        ),
      },

      {
        title: t(
          "5. Dropdown Menu trong Scoped Theme",
          "5. Dropdown Menu in Scoped Theme",
        ),
        description: t(
          "DropdownMenuContent hiển thị menu lệnh với đầy đủ separator và item states đúng theme.",
          "DropdownMenuContent displays action menus with correct theme styling across all items.",
        ),
        microCode: `<ThemeProvider mode="dark">
  <div className="rounded-xl border bg-card p-6 text-card-foreground">
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline">Tùy chọn</Button>} />
      <DropdownMenuContent className="w-48">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Tài khoản</DropdownMenuLabel>
          <DropdownMenuItem>Cài đặt</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-destructive">Đăng xuất</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</ThemeProvider>`,
        microPreview: (
          <ScopedThemeBox title="Dropdown Menu Demo">
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Button variant="outline" size={globalSize}>
                    Tùy chọn
                  </Button>
                }
              />
              <DropdownMenuContent className="w-48">
                <DropdownMenuGroup>
                  <DropdownMenuLabel>Tài khoản</DropdownMenuLabel>
                  <DropdownMenuItem>Hồ sơ người dùng</DropdownMenuItem>
                  <DropdownMenuItem>Cài đặt</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive">
                  Đăng xuất
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </ScopedThemeBox>
        ),
      },

      {
        title: t(
          "6. Context Menu trong Scoped Theme",
          "6. Context Menu in Scoped Theme",
        ),
        description: t(
          "ContextMenuContent kích hoạt tại vị trí con trỏ chuột với theme được bảo toàn.",
          "ContextMenuContent triggered at mouse position with preserved scoped theme.",
        ),
        microCode: `<ThemeProvider mode="dark">
  <div className="rounded-xl border bg-card p-6 text-card-foreground">
    <ContextMenu>
      <ContextMenuTrigger className="flex h-24 w-full items-center justify-center border border-dashed rounded-md">
        Chuột phải vào đây
      </ContextMenuTrigger>
      <ContextMenuContent className="w-48">
        <ContextMenuItem>Tải lại</ContextMenuItem>
        <ContextMenuItem>Sao chép</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Kiểm tra</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  </div>
</ThemeProvider>`,
        microPreview: (
          <ScopedThemeBox title="Context Menu Demo">
            <ContextMenu>
              <ContextMenuTrigger className="flex h-20 w-full max-w-sm items-center justify-center rounded-lg border border-dashed border-border text-xs text-muted-foreground select-none cursor-context-menu">
                Chuột phải vào vùng này để xem menu
              </ContextMenuTrigger>
              <ContextMenuContent className="w-48">
                <ContextMenuItem>Tải lại trang</ContextMenuItem>
                <ContextMenuItem>Sao chép địa chỉ</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>Kiểm tra phần tử</ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </ScopedThemeBox>
        ),
      },

      {
        title: t("7. Dialog trong Scoped Theme", "7. Dialog in Scoped Theme"),
        description: t(
          "DialogContent ở giữa màn hình nhưng nhận đúng nền và chữ từ vùng Scoped.",
          "DialogContent centered in viewport while inheriting background and text from scoped container.",
        ),
        microCode: `<ThemeProvider mode="dark">
  <div className="rounded-xl border bg-card p-6 text-card-foreground">
    <Dialog>
      <DialogTrigger render={<Button variant="outline">Mở Dialog</Button>} />
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Scoped Dialog</DialogTitle>
          <DialogDescription>
            Modal giữ nguyên theme dù thoát khỏi DOM tree.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose render={<Button variant="outline">Đóng</Button>} />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </div>
</ThemeProvider>`,
        microPreview: (
          <ScopedThemeBox title="Dialog Component Demo">
            <Dialog>
              <DialogTrigger
                render={
                  <Button variant="outline" size={globalSize}>
                    Mở Dialog
                  </Button>
                }
              />
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Modal Dialog Theme</DialogTitle>
                  <DialogDescription>
                    Hộp thoại modal tự động bảo toàn theme của container khai
                    báo.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <DialogClose
                    render={<Button variant="outline">Đóng</Button>}
                  />
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </ScopedThemeBox>
        ),
      },

      {
        title: t("8. Confirm trong Scoped Theme", "8. Confirm in Scoped Theme"),
        description: t(
          "ConfirmContent hộp thoại cảnh báo nguy hiểm thừa hưởng theme chuẩn mực.",
          "ConfirmContent critical action dialog inherits theme seamlessly.",
        ),
        microCode: `<ThemeProvider mode="dark">
  <div className="rounded-xl border bg-card p-6 text-card-foreground">
    <Confirm>
      <ConfirmTrigger render={<Button variant="outline" color="destructive">Xóa dự án</Button>} />
      <ConfirmContent className="max-w-md">
        <ConfirmHeader>
          <ConfirmTitle>Xác nhận xóa?</ConfirmTitle>
          <ConfirmDescription>Hành động này không thể hoàn tác.</ConfirmDescription>
        </ConfirmHeader>
        <ConfirmFooter>
          <ConfirmCancel>Hủy</ConfirmCancel>
          <ConfirmAction color="destructive">Đồng ý</ConfirmAction>
        </ConfirmFooter>
      </ConfirmContent>
    </Confirm>
  </div>
</ThemeProvider>`,
        microPreview: (
          <ScopedThemeBox title="Confirm Component Demo">
            <Confirm>
              <ConfirmTrigger
                render={
                  <Button
                    variant="outline"
                    color="destructive"
                    size={globalSize}
                  >
                    Xóa dự án
                  </Button>
                }
              />
              <ConfirmContent className="max-w-md">
                <ConfirmHeader>
                  <ConfirmTitle>Xác nhận xóa?</ConfirmTitle>
                  <ConfirmDescription>
                    Hành động này không thể hoàn tác. Dữ liệu sẽ mất vĩnh viễn.
                  </ConfirmDescription>
                </ConfirmHeader>
                <ConfirmFooter className="flex justify-end gap-2">
                  <Button variant="outline">Hủy</Button>
                  <Button color="destructive">Đồng ý</Button>
                </ConfirmFooter>
              </ConfirmContent>
            </Confirm>
          </ScopedThemeBox>
        ),
      },

      {
        title: t("9. Drawer trong Scoped Theme", "9. Drawer in Scoped Theme"),
        description: t(
          "DrawerContent trượt từ cạnh dưới màn hình với theme chuẩn xác.",
          "DrawerContent slides from viewport bottom with exact scoped styling.",
        ),
        microCode: `<ThemeProvider mode="dark">
  <div className="rounded-xl border bg-card p-6 text-card-foreground">
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Mở Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm p-6 space-y-4">
          <DrawerHeader>
            <DrawerTitle>Ngăn kéo Scoped</DrawerTitle>
            <DrawerDescription>Drawer thừa kế theme chuẩn.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline" className="w-full">Xong</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  </div>
</ThemeProvider>`,
        microPreview: (
          <ScopedThemeBox title="Drawer Component Demo">
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline" size={globalSize}>
                  Mở Drawer Dưới
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <div className="mx-auto w-full max-w-sm p-6 space-y-4">
                  <DrawerHeader>
                    <DrawerTitle>Ngăn kéo Drawer</DrawerTitle>
                    <DrawerDescription>
                      Drawer trượt từ dưới lên và ăn theo theme của Sandbox.
                    </DrawerDescription>
                  </DrawerHeader>
                  <DrawerFooter>
                    <DrawerClose asChild>
                      <Button variant="outline" className="w-full">
                        Xong
                      </Button>
                    </DrawerClose>
                  </DrawerFooter>
                </div>
              </DrawerContent>
            </Drawer>
          </ScopedThemeBox>
        ),
      },

      {
        title: t("10. Sheet trong Scoped Theme", "10. Sheet in Scoped Theme"),
        description: t(
          "SheetContent trượt từ cạnh bên mang đầy đủ bảng màu Scoped.",
          "SheetContent slides from screen edge with full scoped palette.",
        ),
        microCode: `<ThemeProvider mode="dark">
  <div className="rounded-xl border bg-card p-6 text-card-foreground">
    <Sheet>
      <SheetTrigger render={<Button variant="outline">Mở Sheet</Button>} />
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Bảng trượt Sheet</SheetTitle>
          <SheetDescription>Bảo toàn theme xuyên qua Portal.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  </div>
</ThemeProvider>`,
        microPreview: (
          <ScopedThemeBox title="Sheet Component Demo">
            <Sheet>
              <SheetTrigger
                render={
                  <Button variant="outline" size={globalSize}>
                    Mở Sheet Phải
                  </Button>
                }
              />
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Bảng trượt Sheet</SheetTitle>
                  <SheetDescription>
                    Nội dung panel trượt từ cạnh phải và giữ nguyên theme của
                    Sandbox.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </ScopedThemeBox>
        ),
      },

      {
        title: t(
          "11. HoverCard trong Scoped Theme",
          "11. HoverCard in Scoped Theme",
        ),
        description: t(
          "HoverCardContent hiển thị xem trước thông tin với theme tương ứng.",
          "HoverCardContent previews information with corresponding theme styling.",
        ),
        microCode: `<ThemeProvider mode="dark">
  <div className="rounded-xl border bg-card p-6 text-card-foreground">
    <HoverCard>
      <HoverCardTrigger render={<Button variant="link">Hover @gladvn</Button>} />
      <HoverCardContent className="w-72">
        <h4 className="text-sm font-semibold">Gladvn UI</h4>
        <p className="text-xs text-muted-foreground">Zero-Portal Theme Tunnel</p>
      </HoverCardContent>
    </HoverCard>
  </div>
</ThemeProvider>`,
        microPreview: (
          <ScopedThemeBox title="Hover Card Demo">
            <HoverCard>
              <HoverCardTrigger
                render={
                  <Button
                    variant="link"
                    size={globalSize}
                    className="font-semibold underline"
                  >
                    Rê chuột vào @gladvn
                  </Button>
                }
              />
              <HoverCardContent className="w-72">
                <div className="flex flex-col gap-1.5">
                  <h4 className="text-sm font-semibold text-foreground">
                    Gladvn UI
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Zero-Portal Scoped Theme Tunneling tự động truyền theme vào
                    popup.
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
          </ScopedThemeBox>
        ),
      },

      {
        title: t(
          "12. Navigation Menu trong Scoped Theme",
          "12. Navigation Menu in Scoped Theme",
        ),
        description: t(
          "NavigationMenuContent và Positioner điều phối menu dropdown đúng theme.",
          "NavigationMenuContent and Positioner manage dropdown submenus with proper theme.",
        ),
        microCode: `<ThemeProvider mode="dark">
  <div className="rounded-xl border bg-card p-6 text-card-foreground">
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Khám phá Menu</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="p-4 w-64 space-y-2">
              <h4 className="text-sm font-semibold">Theme Tunnel</h4>
              <p className="text-xs text-muted-foreground">Menu đa cấp ăn theme từ Positioner.</p>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuPositioner />
    </NavigationMenu>
  </div>
</ThemeProvider>`,
        microPreview: (
          <ScopedThemeBox title="Navigation Menu Demo">
            <NavigationMenu className="w-full">
              <NavigationMenuList className="w-full justify-center">
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Khám phá Menu</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="p-4 w-64 space-y-2">
                      <h4 className="text-sm font-semibold text-foreground">
                        Theme Tunneling
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Menu đa cấp tự động ăn theme từ
                        NavigationMenuPositioner.
                      </p>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
              <NavigationMenuPositioner />
            </NavigationMenu>
          </ScopedThemeBox>
        ),
      },
    ],
    [t, globalSize],
  );
}

export default function ThemeProviderShowcase() {
  const t = useI18n();
  const examples = useThemeProviderExamples();

  return (
    <ConfigurableShowcase
      title={t(
        "Theme Provider & Scoped Tunnel",
        "Theme Provider & Scoped Tunnel",
      )}
      description={t(
        "Bộ quản lý chủ đề và cơ chế Scoped Theme Tunnel bảo toàn 100% theme cho các phần tử overlay khi mount ra document.body.",
        "Theme management and Scoped Theme Tunnel (Zero-Portal API) preserving 100% theme context for all overlay elements when portalled to document.body.",
      )}
      guideline={
        <ShowcaseDocs>
          <DocsH3>
            {t(
              "Cơ chế Zero-Portal Scoped Theme Tunnel",
              "Zero-Portal Scoped Theme Tunnel Mechanism",
            )}
          </DocsH3>
          <DocsP>
            {t(
              "Trong hầu hết các thư viện UI (như shadcn/ui hay Radix Primitives), khi một phần tử overlay (Tooltip, Dialog, Select...) mở ra, React Portal sẽ dời DOM node ra document.body và làm mất ngữ cảnh class CSS (.dark hoặc .light) của container cha. Trong Gladvn, ThemeWrapper với kỹ thuật display: contents đã được nhúng ngầm sẵn vào tất cả 12 micro *Content component. Bạn chỉ cần dùng component như bình thường mà không cần bọc thêm bất kỳ wrapper nào.",
              "In most UI libraries (like shadcn/ui or Radix Primitives), when an overlay element (Tooltip, Dialog, Select...) opens, React Portal moves the DOM node to document.body and loses the CSS class (.dark or .light) context of the parent container. In Gladvn, ThemeWrapper with display: contents is pre-integrated into all 12 micro *Content components. You can use components normally without manual wrappers.",
            )}
          </DocsP>
          <div className="mt-3">
            <DocsP>
              <span className="font-semibold text-foreground">
                {t(
                  "12 Micro Components được bảo hộ ngầm:",
                  "12 Protected Micro Components:",
                )}
              </span>{" "}
              <DocsCode>Select</DocsCode>, <DocsCode>Combobox</DocsCode>,{" "}
              <DocsCode>Tooltip</DocsCode>, <DocsCode>Popover</DocsCode>,{" "}
              <DocsCode>DropdownMenu</DocsCode>,{" "}
              <DocsCode>ContextMenu</DocsCode>, <DocsCode>Dialog</DocsCode>,{" "}
              <DocsCode>Confirm</DocsCode>, <DocsCode>Drawer</DocsCode>,{" "}
              <DocsCode>Sheet</DocsCode>, <DocsCode>HoverCard</DocsCode>,{" "}
              <DocsCode>NavigationMenu</DocsCode>.
            </DocsP>
          </div>
        </ShowcaseDocs>
      }
      examples={examples}
    />
  );
}
