import { useState } from "react";

import { MoonIcon, SunIcon } from "lucide-react";

import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { Menu as MenuPrimitive } from "@base-ui/react/menu";
import { Popover as PopoverPrimitive } from "@base-ui/react/popover";
import { Select as SelectPrimitive } from "@base-ui/react/select";
import { Dialog as SheetPrimitive } from "@base-ui/react/dialog";
import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip";

import { Button } from "../../components/micro/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  
  DialogTitle,
  DialogTrigger } from "../../components/micro/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  
  DropdownMenuSeparator,
  DropdownMenuTrigger } from "../../components/micro/dropdown-menu";
import {
  Popover,
  PopoverContent,
  
  PopoverTrigger } from "../../components/micro/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  
  SelectTrigger,
  SelectValue } from "../../components/micro/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  
  SheetTitle,
  SheetTrigger } from "../../components/micro/sheet";
import {
  type ThemeMode,
  ThemeProvider,
  useTheme } from "../../components/micro/theme-provider";
import {
  Tooltip,
  TooltipContent,
  
  TooltipProvider,
  TooltipTrigger } from "../../components/micro/tooltip";
import {
  DocsCode,
  DocsH3,
  DocsP,
  ExampleSection,
  SectionHeader,
  Showcase,
  ShowcaseDocs } from "../../dev/components/showcase";

// ──────────────────────────────────────────────────────────
// Demo helpers
// ──────────────────────────────────────────────────────────

/** Demo card that reads theme from context and shows current mode */
function ThemeAwareCard({ readOnly }: { readOnly?: boolean } = {}) {
  const theme = useTheme();

  return (
    <div className="rounded-xl border border-border bg-card text-card-foreground p-4 space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Thẻ nội dung</span>
        <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
          {theme?.mode ?? "unknown"}
        </span>
      </div>
      <p className="text-xs text-muted-foreground">
        Nền, chữ và viền được điều khiển bởi CSS variable từ ThemeProvider cha.
      </p>
      {!readOnly && (
        <Button
          variant="ghost"
          size="sm"
          iconOnly
          aria-label={
            theme?.mode === "dark" ? "Chuyển sang Light" : "Chuyển sang Dark"
          }
          onClick={() =>
            theme?.setMode(theme.mode === "dark" ? "light" : "dark")
          }
        >
          {theme?.mode === "dark" ? (
            <SunIcon aria-hidden="true" />
          ) : (
            <MoonIcon aria-hidden="true" />
          )}
        </Button>
      )}
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 1: Micro Showcase
// ──────────────────────────────────────────────────────────
function ThemeProviderMicroShowcase() {
  // Controlled demo state (owned by this parent)
  const [controlledMode, setControlledMode] = useState<ThemeMode>("light");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="ThemeProvider"
        description="Context provider điều phối dark/light mode cho toàn bộ component tree. Hỗ trợ hai chế độ: Uncontrolled (tự quản lý state) và Controlled (state do component cha sở hữu). Dùng Library *Portal để tunnel theme qua Portal boundary tự động."
      />

      {/* ── Uncontrolled ── */}
      <SectionHeader
        title="Uncontrolled"
        description="Dùng khi component tự quản lý theme — không cần chia sẻ state với component khác. Thích hợp cho: scoped dark sections, isolated previews, hoặc khi không cần sync với localStorage/system."
      />
      <ExampleSection
        label="defaultMode"
        description="ThemeProvider giữ state nội bộ. Bất kỳ component con nào đều có thể sử dụng hook `useTheme()` để đọc hoặc cập nhật mode."
        codeString={`function ThemeAwareCard() {
  const theme = useTheme();

  return (
    <div className="rounded-xl border border-border bg-card text-card-foreground p-4 space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Thẻ nội dung</span>
        <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
          {theme?.mode}
        </span>
      </div>
      <button onClick={() => theme?.setMode(theme.mode === "dark" ? "light" : "dark")}>
        Chuyển sang {theme?.mode === "dark" ? "Light" : "Dark"}
      </button>
    </div>
  );
}

<ThemeProvider defaultMode="light">
  <ThemeAwareCard />
</ThemeProvider>`}
      >
        <ThemeProvider defaultMode="light">
          <ThemeAwareCard />
        </ThemeProvider>
      </ExampleSection>

      {/* ── Controlled ── */}
      <SectionHeader
        title="Controlled"
        description="Dùng khi theme cần được đồng bộ với state bên ngoài — ví dụ: Macro component đọc từ localStorage, system settings, hoặc API. Component cha hoàn toàn sở hữu state, ThemeProvider chỉ đóng vai trò hiển thị (dumb component)."
      />
      <ExampleSection
        label="mode + onModeChange"
        description="State hoàn toàn được quản lý bởi component cha. ThemeProvider chỉ nhận prop mode và cập nhật UI khi cha thay đổi state."
        codeString={`const [mode, setMode] = useState<ThemeMode>("light");

<div className="space-y-3 w-full">
  {/* Toggle nằm ở component cha — simulates Macro owning state */}
  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border border-border">
    <span className="text-xs text-muted-foreground flex-1">
      State ở component cha: <strong>{mode}</strong>
    </span>
    <Button
      size="sm"
      variant="outline"
      onClick={() => setMode(mode === "dark" ? "light" : "dark")}
    >
      Toggle từ ngoài
    </Button>
  </div>

  <ThemeProvider mode={mode} onModeChange={setMode}>
    {/* ThemeAwareCard là component đọc useTheme() để hiển thị mode hiện tại */}
    <ThemeAwareCard readOnly />
  </ThemeProvider>
</div>`}
      >
        <div className="space-y-3 w-full">
          {/* External toggle (simulates Macro owning state) */}
          <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border border-border">
            <span className="text-xs text-muted-foreground flex-1">
              State ở component cha: <DocsCode>{controlledMode}</DocsCode>
            </span>
            <Button
              size="sm"
              variant="outline"
              onClick={() =>
                setControlledMode(controlledMode === "dark" ? "light" : "dark")
              }
            >
              {controlledMode === "dark" ? (
                <SunIcon aria-hidden="true" />
              ) : (
                <MoonIcon aria-hidden="true" />
              )}
              {controlledMode === "dark" ? "Light" : "Dark"}
            </Button>
          </div>

          <ThemeProvider mode={controlledMode} onModeChange={setControlledMode}>
            <ThemeAwareCard readOnly />
          </ThemeProvider>
        </div>
      </ExampleSection>

      {/* ── ThemeWrapper & Portal Tunnels ── */}
      <div className="pt-16 pb-6">
        <SectionHeader
          title="ThemeWrapper & Portal Tunnels"
          description="So sánh trực tiếp: cột trái dùng Base UI primitive Portal trực tiếp (không có ThemeWrapper → mất dark mode), cột phải dùng Library Content (tích hợp sẵn ThemeWrapper từ v0.2.20 → đúng màu tự động)."
        />
      </div>

      {/* Tooltip */}
      <ExampleSection
        fullWidth
        label="Tooltip"
        description="Cột trái dùng TooltipPrimitive.Portal trực tiếp từ @base-ui/react — không có ThemeWrapper nên tooltip trắng toát giữa dark section. Cột phải dùng  của thư viện — tự động đúng màu."
        codeString={`// ❌ Base UI primitive Portal — không có ThemeWrapper → mất dark mode
import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip";

<ThemeProvider defaultMode="dark">
  <TooltipPrimitive.Provider>
    <TooltipPrimitive.Root>
      <TooltipPrimitive.Trigger>Hover tôi</TooltipPrimitive.Trigger>
      <TooltipPrimitive.Portal>
        {/* Thoát khỏi DOM tree → mất .dark class → CSS vars sai */}
        <TooltipPrimitive.Positioner>
          <TooltipPrimitive.Popup>Trắng toát!</TooltipPrimitive.Popup>
        </TooltipPrimitive.Positioner>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  </TooltipPrimitive.Provider>
</ThemeProvider>

// ✅ Library Content — ThemeWrapper tích hợp sẵn từ v0.2.20
<ThemeProvider defaultMode="dark">
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger render={<Button>Hover tôi</Button>} />
      
        {/* ← ThemeWrapper đã được bọc bên trong  */}
        <TooltipContent>Màu tối đồng bộ!</TooltipContent>
      
    </Tooltip>
  </TooltipProvider>
</ThemeProvider>`}
      >
        <ThemeProvider defaultMode="dark">
          <div className="w-full flex gap-10 rounded-xl border border-border bg-background p-10">
            <div className="flex-1 flex flex-col items-center gap-4">
              <span className="text-sm font-medium text-muted-foreground">
                ❌ Base UI Primitive Portal
              </span>
              <TooltipPrimitive.Provider>
                <TooltipPrimitive.Root>
                  <TooltipPrimitive.Trigger
                    render={<Button variant="solid">Hover tôi</Button>}
                  />
                  <TooltipPrimitive.Portal>
                    <TooltipPrimitive.Positioner sideOffset={8}>
                      <TooltipPrimitive.Popup className="bg-card text-card-foreground border border-border shadow-md rounded px-2 py-1 text-xs">
                        Trắng toát! Lạc quẻ với nền đen.
                      </TooltipPrimitive.Popup>
                    </TooltipPrimitive.Positioner>
                  </TooltipPrimitive.Portal>
                </TooltipPrimitive.Root>
              </TooltipPrimitive.Provider>
            </div>

            <div className="flex-1 flex flex-col items-center gap-4">
              <span className="text-sm font-medium text-muted-foreground">
                ✅ Library Content (auto ThemeWrapper)
              </span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger
                    render={<Button variant="solid">Hover tôi</Button>}
                  />
                  
                    <TooltipContent
                      sideOffset={8}
                      className="bg-card text-card-foreground border border-border shadow-md"
                    >
                      Màu Tối! Đồng bộ với provider cha.
                    </TooltipContent>
                  
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </ThemeProvider>
      </ExampleSection>

      {/* Popover */}
      <ExampleSection
        fullWidth
        label="Popover"
        description="Cột trái dùng PopoverPrimitive.Portal trực tiếp — nền popover trắng dù trigger đang ở dark section. Cột phải chỉ cần  của thư viện là xong."
        codeString={`// ❌ Base UI primitive Portal
import { Popover as PopoverPrimitive } from "@base-ui/react/popover";

<ThemeProvider defaultMode="dark">
  <PopoverPrimitive.Root>
    <PopoverPrimitive.Trigger>Click Popover</PopoverPrimitive.Trigger>
    <PopoverPrimitive.Portal>
      {/* Không có ThemeWrapper → popover trắng */}
      <PopoverPrimitive.Positioner>
        <PopoverPrimitive.Popup>...</PopoverPrimitive.Popup>
      </PopoverPrimitive.Positioner>
    </PopoverPrimitive.Portal>
  </PopoverPrimitive.Root>
</ThemeProvider>

// ✅ Library Content
<ThemeProvider defaultMode="dark">
  <Popover>
    <PopoverTrigger render={<Button>Click Popover</Button>} />
    
      {/* ← ThemeWrapper đã được bọc bên trong  */}
      <PopoverContent>...</PopoverContent>
    
  </Popover>
</ThemeProvider>`}
      >
        <ThemeProvider defaultMode="dark">
          <div className="w-full flex gap-10 rounded-xl border border-border bg-background p-10">
            <div className="flex-1 flex flex-col items-center gap-4">
              <span className="text-sm font-medium text-muted-foreground">
                ❌ Base UI Primitive Portal
              </span>
              <PopoverPrimitive.Root>
                <PopoverPrimitive.Trigger
                  render={<Button variant="outline">Click Popover</Button>}
                />
                <PopoverPrimitive.Portal>
                  <PopoverPrimitive.Positioner>
                    <PopoverPrimitive.Popup className="z-50 rounded-lg border border-border bg-card text-card-foreground p-4 shadow-md w-64">
                      <div className="space-y-2">
                        <h4 className="font-medium leading-none">
                          Nội dung Popover
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Lỗi: Hiển thị giao diện sáng.
                        </p>
                      </div>
                    </PopoverPrimitive.Popup>
                  </PopoverPrimitive.Positioner>
                </PopoverPrimitive.Portal>
              </PopoverPrimitive.Root>
            </div>

            <div className="flex-1 flex flex-col items-center gap-4">
              <span className="text-sm font-medium text-muted-foreground">
                ✅ Library Content (auto ThemeWrapper)
              </span>
              <Popover>
                <PopoverTrigger
                  render={<Button variant="outline">Click Popover</Button>}
                />
                
                  <PopoverContent className="w-64">
                    <div className="space-y-2">
                      <h4 className="font-medium leading-none">
                        Nội dung Popover
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Lớp Portal Tunnel đã hoạt động chính xác.
                      </p>
                    </div>
                  </PopoverContent>
                
              </Popover>
            </div>
          </div>
        </ThemeProvider>
      </ExampleSection>

      {/* Select */}
      <ExampleSection
        fullWidth
        label="Select"
        description="Cột trái dùng SelectPrimitive.Portal trực tiếp — dropdown option trắng xuộa trong khi trigger vẫn tối. Cột phải dùng  của thư viện là đúng màu ngay."
        codeString={`// ❌ Base UI primitive Portal
import { Select as SelectPrimitive } from "@base-ui/react/select";

<ThemeProvider defaultMode="dark">
  <SelectPrimitive.Root items={{ next: "Next.js", vite: "Vite" }}>
    <SelectPrimitive.Trigger>...</SelectPrimitive.Trigger>
    <SelectPrimitive.Portal>
      {/* Không có ThemeWrapper → dropdown trắng */}
      <SelectPrimitive.Positioner>
        <SelectPrimitive.Popup>...</SelectPrimitive.Popup>
      </SelectPrimitive.Positioner>
    </SelectPrimitive.Portal>
  </SelectPrimitive.Root>
</ThemeProvider>

// ✅ Library Content
<ThemeProvider defaultMode="dark">
  <Select items={{ next: "Next.js", vite: "Vite" }}>
    <SelectTrigger><SelectValue placeholder="Chọn..." /></SelectTrigger>
    
      {/* ← ThemeWrapper đã được bọc bên trong  */}
      <SelectContent>...</SelectContent>
    
  </Select>
</ThemeProvider>`}
      >
        <ThemeProvider defaultMode="dark">
          <div className="w-full flex gap-10 rounded-xl border border-border bg-background p-10">
            <div className="flex-1 flex flex-col items-center gap-4">
              <span className="text-sm font-medium text-muted-foreground">
                ❌ Base UI Primitive Portal
              </span>
              <SelectPrimitive.Root
                items={{ next: "Next.js", vite: "Vite", remix: "Remix" }}
              >
                <SelectPrimitive.Trigger className="inline-flex h-8 items-center justify-between gap-1.5 rounded-lg border border-input bg-transparent px-2.5 py-1 text-sm text-foreground outline-none w-[140px]">
                  <SelectPrimitive.Value placeholder="Chọn framework..." />
                </SelectPrimitive.Trigger>
                <SelectPrimitive.Portal>
                  <SelectPrimitive.Positioner>
                    <SelectPrimitive.Popup className="z-50 rounded-lg border border-border bg-card text-card-foreground p-1 shadow-md">
                      <SelectPrimitive.Item
                        value="next"
                        className="rounded px-2 py-1.5 text-sm cursor-default"
                      >
                        <SelectPrimitive.ItemText>Next.js</SelectPrimitive.ItemText>
                      </SelectPrimitive.Item>
                      <SelectPrimitive.Item
                        value="vite"
                        className="rounded px-2 py-1.5 text-sm cursor-default"
                      >
                        <SelectPrimitive.ItemText>Vite</SelectPrimitive.ItemText>
                      </SelectPrimitive.Item>
                      <SelectPrimitive.Item
                        value="remix"
                        className="rounded px-2 py-1.5 text-sm cursor-default"
                      >
                        <SelectPrimitive.ItemText>Remix</SelectPrimitive.ItemText>
                      </SelectPrimitive.Item>
                    </SelectPrimitive.Popup>
                  </SelectPrimitive.Positioner>
                </SelectPrimitive.Portal>
              </SelectPrimitive.Root>
            </div>

            <div className="flex-1 flex flex-col items-center gap-4">
              <span className="text-sm font-medium text-muted-foreground">
                ✅ Library Content (auto ThemeWrapper)
              </span>
              <Select items={{ next: "Next.js", vite: "Vite", remix: "Remix" }}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Chọn framework..." />
                </SelectTrigger>
                
                  <SelectContent>
                    <SelectItem value="next">Next.js</SelectItem>
                    <SelectItem value="vite">Vite</SelectItem>
                    <SelectItem value="remix">Remix</SelectItem>
                  </SelectContent>
                
              </Select>
            </div>
          </div>
        </ThemeProvider>
      </ExampleSection>

      {/* DropdownMenu */}
      <ExampleSection
        fullWidth
        label="DropdownMenu"
        description="Cột trái dùng MenuPrimitive.Portal trực tiếp — cả nền menu lẫn hover state đều sai màu. Cột phải dùng  thư viện là đúng ngay."
        codeString={`// ❌ Base UI primitive Portal
import { Menu as MenuPrimitive } from "@base-ui/react/menu";

<ThemeProvider defaultMode="dark">
  <MenuPrimitive.Root>
    <MenuPrimitive.Trigger>Open Dropdown</MenuPrimitive.Trigger>
    <MenuPrimitive.Portal>
      {/* Không có ThemeWrapper → menu trắng, hover sai màu */}
      <MenuPrimitive.Positioner>
        <MenuPrimitive.Popup>...</MenuPrimitive.Popup>
      </MenuPrimitive.Positioner>
    </MenuPrimitive.Portal>
  </MenuPrimitive.Root>
</ThemeProvider>

// ✅ Library Content
<ThemeProvider defaultMode="dark">
  <DropdownMenu>
    <DropdownMenuTrigger render={<Button>Open Dropdown</Button>} />
    
      {/* ← ThemeWrapper đã được bọc bên trong  */}
      <DropdownMenuContent>...</DropdownMenuContent>
    
  </DropdownMenu>
</ThemeProvider>`}
      >
        <ThemeProvider defaultMode="dark">
          <div className="w-full flex gap-10 rounded-xl border border-border bg-background p-10">
            <div className="flex-1 flex flex-col items-center gap-4">
              <span className="text-sm font-medium text-muted-foreground">
                ❌ Base UI Primitive Portal
              </span>
              <MenuPrimitive.Root>
                <MenuPrimitive.Trigger
                  render={<Button variant="outline">Open Dropdown</Button>}
                />
                <MenuPrimitive.Portal>
                  <MenuPrimitive.Positioner>
                    <MenuPrimitive.Popup className="z-50 min-w-[8rem] rounded-lg border border-border bg-card text-card-foreground p-1 shadow-md">
                      <MenuPrimitive.Group>
                        <MenuPrimitive.GroupLabel className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
                          Tài khoản
                        </MenuPrimitive.GroupLabel>
                        <MenuPrimitive.Item className="rounded px-2 py-1.5 text-sm cursor-default">
                          Trang cá nhân
                        </MenuPrimitive.Item>
                        <MenuPrimitive.Item className="rounded px-2 py-1.5 text-sm cursor-default">
                          Cài đặt
                        </MenuPrimitive.Item>
                      </MenuPrimitive.Group>
                      <MenuPrimitive.Separator className="my-1 h-px bg-border" />
                      <MenuPrimitive.Item className="rounded px-2 py-1.5 text-sm cursor-default">
                        Đăng xuất
                      </MenuPrimitive.Item>
                    </MenuPrimitive.Popup>
                  </MenuPrimitive.Positioner>
                </MenuPrimitive.Portal>
              </MenuPrimitive.Root>
            </div>

            <div className="flex-1 flex flex-col items-center gap-4">
              <span className="text-sm font-medium text-muted-foreground">
                ✅ Library Content (auto ThemeWrapper)
              </span>
              <DropdownMenu>
                <DropdownMenuTrigger
                  render={<Button variant="outline">Open Dropdown</Button>}
                />
                
                  <DropdownMenuContent className="w-48">
                    <DropdownMenuGroup>
                      <DropdownMenuLabel>Tài khoản</DropdownMenuLabel>
                      <DropdownMenuItem>Trang cá nhân</DropdownMenuItem>
                      <DropdownMenuItem>Cài đặt</DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Đăng xuất</DropdownMenuItem>
                  </DropdownMenuContent>
                
              </DropdownMenu>
            </div>
          </div>
        </ThemeProvider>
      </ExampleSection>

      {/* Dialog */}
      <ExampleSection
        fullWidth
        label="Dialog"
        description="Cột trái dùng DialogPrimitive.Portal trực tiếp — cả Overlay backdrop lẫn Content panel đều hiển thị sai màu. Cột phải dùng  thư viện — đồng bộ hoàn hảo."
        codeString={`// ❌ Base UI primitive Portal
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";

<ThemeProvider defaultMode="dark">
  <DialogPrimitive.Root>
    <DialogPrimitive.Trigger>Open Dialog</DialogPrimitive.Trigger>
    <DialogPrimitive.Portal>
      {/* Không có ThemeWrapper → dialog trắng */}
      <DialogPrimitive.Backdrop />
      <DialogPrimitive.Popup>...</DialogPrimitive.Popup>
    </DialogPrimitive.Portal>
  </DialogPrimitive.Root>
</ThemeProvider>

// ✅ Library Content
<ThemeProvider defaultMode="dark">
  <Dialog>
    <DialogTrigger render={<Button>Open Dialog</Button>} />
    
      {/* ← ThemeWrapper đã được bọc bên trong  */}
      <DialogContent>...</DialogContent>
    
  </Dialog>
</ThemeProvider>`}
      >
        <ThemeProvider defaultMode="dark">
          <div className="w-full flex gap-10 rounded-xl border border-border bg-background p-10">
            <div className="flex-1 flex flex-col items-center gap-4">
              <span className="text-sm font-medium text-muted-foreground">
                ❌ Base UI Primitive Portal
              </span>
              <DialogPrimitive.Root>
                <DialogPrimitive.Trigger
                  render={<Button variant="outline">Open Dialog</Button>}
                />
                <DialogPrimitive.Portal>
                  <DialogPrimitive.Backdrop className="fixed inset-0 bg-black/20 z-40" />
                  <DialogPrimitive.Popup className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-border bg-card text-card-foreground p-6 shadow-lg sm:max-w-md w-full">
                    <DialogPrimitive.Title className="text-lg font-semibold">
                      Mất Dark Mode!
                    </DialogPrimitive.Title>
                    <DialogPrimitive.Description className="mt-2 text-sm text-muted-foreground">
                      Lỗi: Hiển thị giao diện sáng mặc định.
                    </DialogPrimitive.Description>
                    <DialogPrimitive.Close
                      render={
                        <Button variant="outline" className="mt-4">
                          Đóng
                        </Button>
                      }
                    />
                  </DialogPrimitive.Popup>
                </DialogPrimitive.Portal>
              </DialogPrimitive.Root>
            </div>

            <div className="flex-1 flex flex-col items-center gap-4">
              <span className="text-sm font-medium text-muted-foreground">
                ✅ Library Content (auto ThemeWrapper)
              </span>
              <Dialog>
                <DialogTrigger
                  render={<Button variant="outline">Open Dialog</Button>}
                />
                
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Màu tối toàn vẹn</DialogTitle>
                      <DialogDescription>
                        Portal Tunnel tự động bảo vệ scope Dark Mode.
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                
              </Dialog>
            </div>
          </div>
        </ThemeProvider>
      </ExampleSection>

      {/* Sheet */}
      <ExampleSection
        fullWidth
        label="Sheet"
        description="Cột trái dùng SheetPrimitive.Portal (Dialog primitive) trực tiếp — panel trắng toát. Cột phải dùng  của thư viện là đúng màu ngay."
        codeString={`// ❌ Base UI primitive Portal (Sheet dùng Dialog primitive của Base UI)
import { Dialog as SheetPrimitive } from "@base-ui/react/dialog";

<ThemeProvider defaultMode="dark">
  <SheetPrimitive.Root>
    <SheetPrimitive.Trigger>Open Sheet</SheetPrimitive.Trigger>
    <SheetPrimitive.Portal>
      {/* Không có ThemeWrapper → sheet trắng */}
      <SheetPrimitive.Popup>...</SheetPrimitive.Popup>
    </SheetPrimitive.Portal>
  </SheetPrimitive.Root>
</ThemeProvider>

// ✅ Library Content
<ThemeProvider defaultMode="dark">
  <Sheet>
    <SheetTrigger render={<Button>Open Sheet</Button>} />
    
      {/* ← ThemeWrapper đã được bọc bên trong  */}
      <SheetContent side="right">...</SheetContent>
    
  </Sheet>
</ThemeProvider>`}
      >
        <ThemeProvider defaultMode="dark">
          <div className="w-full flex gap-10 rounded-xl border border-border bg-background p-10">
            <div className="flex-1 flex flex-col items-center gap-4">
              <span className="text-sm font-medium text-muted-foreground">
                ❌ Base UI Primitive Portal
              </span>
              <SheetPrimitive.Root>
                <SheetPrimitive.Trigger
                  render={<Button variant="outline">Open Sheet</Button>}
                />
                <SheetPrimitive.Portal>
                  <SheetPrimitive.Backdrop className="fixed inset-0 bg-black/20 z-40" />
                  <SheetPrimitive.Popup className="fixed right-0 top-0 z-50 h-full w-3/4 max-w-sm border-l border-border bg-card text-card-foreground p-6 shadow-lg">
                    <SheetPrimitive.Title className="text-lg font-semibold">
                      Mất Dark Mode!
                    </SheetPrimitive.Title>
                    <SheetPrimitive.Close
                      render={
                        <Button variant="ghost" size="sm" className="mt-4">
                          Đóng
                        </Button>
                      }
                    />
                  </SheetPrimitive.Popup>
                </SheetPrimitive.Portal>
              </SheetPrimitive.Root>
            </div>

            <div className="flex-1 flex flex-col items-center gap-4">
              <span className="text-sm font-medium text-muted-foreground">
                ✅ Library Content (auto ThemeWrapper)
              </span>
              <Sheet>
                <SheetTrigger
                  render={<Button variant="outline">Open Sheet</Button>}
                />
                
                  <SheetContent side="right">
                    <SheetHeader>
                      <SheetTitle>Sheet Demo</SheetTitle>
                    </SheetHeader>
                    <div className="py-4">Màu tối đồng bộ hoàn hảo!</div>
                  </SheetContent>
                
              </Sheet>
            </div>
          </div>
        </ThemeProvider>
      </ExampleSection>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// Entry point
// ──────────────────────────────────────────────────────────
export default function ThemeProviderShowcase() {
  return (
    <Showcase
      title="Theme Provider"
      description="Context provider cho light/dark mode — uncontrolled (defaultMode) hoặc controlled (mode + onModeChange). Tunnel-safe cho mọi nổi dung nổi (floating) qua ThemeWrapper tích hợp tự động trong các *Content components (từ v0.2.20)."
      generalConcept={
        <ShowcaseDocs>
          <DocsH3>ThemeProvider</DocsH3>
          <DocsP>
            <DocsCode>ThemeProvider</DocsCode> bọc children trong một{" "}
            <DocsCode>{"div[display:contents]"}</DocsCode> và gắn class{" "}
            <DocsCode>light</DocsCode> hoặc <DocsCode>dark</DocsCode> lên đó,
            kích hoạt CSS variable cascade mà không ảnh hưởng layout. Hỗ trợ
            hai chế độ: <strong>Uncontrolled</strong> (truyền{" "}
            <DocsCode>defaultMode</DocsCode> — tự quản lý state) và{" "}
            <strong>Controlled</strong> (truyền <DocsCode>mode</DocsCode> +{" "}
            <DocsCode>onModeChange</DocsCode> — state do component cha sở hữu).
            Việc đọc localStorage hoặc system preference thuộc về tầng Macro.
          </DocsP>

          <DocsH3>Zero-Portal API &amp; Tích hợp Theme tự động (v0.2.20)</DocsH3>
          <DocsP>
            CSS variable cascade theo <strong>DOM tree</strong>, không theo
            React component tree. Khi một component nổi (như Popover, Dialog) render nội dung thông qua cơ chế Portaling (ra{" "}
            <DocsCode>document.body</DocsCode>), nó thoát khỏi hoàn toàn chuỗi
            DOM ancestry — không còn tổ tiên nào mang class{" "}
            <DocsCode>.dark</DocsCode>, và mọi CSS variable rơi thẳng về giá
            trị <DocsCode>:root</DocsCode> (thường là light).
          </DocsP>
          <DocsP>
            <DocsCode>ThemeWrapper</DocsCode> giải quyết vấn đề này bằng cách
            đọc <DocsCode>useTheme()</DocsCode> và re-apply class theme vào một
            container mới ngay bên trong cây portaling — tái thiết lập CSS variable
            cascade cho toàn bộ nội dung bên trong.
          </DocsP>
          <DocsP>
            <strong>Kể từ v0.2.20</strong>, thư viện áp dụng <strong>Zero-Portal API</strong>. Tất cả{" "}
            <DocsCode>*Content</DocsCode> components của thư viện (DialogContent,
               
            TooltipContent, v.v...) đã bọc sẵn cơ chế Portaling và <DocsCode>ThemeWrapper</DocsCode> bên
            trong chúng. <strong>Bạn không cần tự dùng <DocsCode>*Portal</DocsCode> hay <DocsCode>ThemeWrapper</DocsCode> nữa.</strong> Nếu bạn bypass
            thư viện và dùng Base UI primitive Portal trực tiếp, vấn đề mất giao diện dark mode vẫn xảy
            ra — demo bên dưới minh hoạ chính xác điều này.
          </DocsP>
        </ShowcaseDocs>
      }
      tabs={[
        {
          label: "Micro (Primitive)",
          content: <ThemeProviderMicroShowcase /> },
      ]}
    />
  );
}
