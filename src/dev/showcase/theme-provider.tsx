import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip";
import { MoonIcon, SunIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "../../components/micro/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "../../components/micro/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/micro/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverPortal,
  PopoverTrigger,
} from "../../components/micro/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectPortal,
  SelectTrigger,
  SelectValue,
} from "../../components/micro/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
} from "../../components/micro/sheet";


import {
  ThemeProvider,
  ThemeWrapper,
  useTheme,
  type ThemeMode,
} from "../../components/micro/theme-provider";
import {
  DocsCode,
  DocsH3,
  DocsP,
  ExampleGrid,
  ExampleSection,
  SectionHeader,
  Showcase,
  ShowcaseDocs,
} from "../../dev/components/showcase";

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
        <button
          onClick={() =>
            theme?.setMode(theme.mode === "dark" ? "light" : "dark")
          }
          className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
        >
          {theme?.mode === "dark" ? (
            <SunIcon className="size-3" aria-hidden="true" />
          ) : (
            <MoonIcon className="size-3" aria-hidden="true" />
          )}
          Chuyển sang {theme?.mode === "dark" ? "Light" : "Dark"}
        </button>
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
    <div className="space-y-10 mt-6">
      {/* ── Uncontrolled ── */}
      <SectionHeader
        title="Uncontrolled"
        description="Dùng khi component tự quản lý theme — không cần chia sẻ state với component khác. Thích hợp cho: scoped dark sections, isolated previews, hoặc khi không cần sync với localStorage/system."
      />
      <ExampleSection
        label="defaultMode"
        description="ThemeProvider giữ state nội bộ. Bất kỳ component con nào đều có thể sử dụng hook useTheme() để đọc hoặc cập nhật mode."
        codeString={`function ThemeAwareCard() {
  const theme = useTheme();

  return (
    <div className="rounded-xl border border-border bg-card text-card-foreground p-4 space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Ở nội dung</span>
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
        codeString={`function ControlledApp() {
  const [mode, setMode] = useState<ThemeMode>("light");

  return (
    <div className="space-y-4 p-4 border rounded-lg bg-background">
      <button onClick={() => setMode(mode === "dark" ? "light" : "dark")}>
        Chuyển Mode từ Component Cha
      </button>

      <ThemeProvider mode={mode} onModeChange={setMode}>
        <ChildContent />
      </ThemeProvider>
    </div>
  );
}

function ChildContent() {
  const theme = useTheme();

  return (
    <div className="p-4 bg-card text-card-foreground rounded-lg">
      <p>Mode hiện tại đang là: {theme?.mode}</p>
    </div>
  );
}`}
      >
        <div className="space-y-3 w-full">
          {/* External toggle (simulates Macro owning state) */}
          <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border border-border">
            <span className="text-xs text-muted-foreground flex-1">
              State ở component cha: <DocsCode>{controlledMode}</DocsCode>
            </span>
            <button
              onClick={() =>
                setControlledMode(controlledMode === "dark" ? "light" : "dark")
              }
              className="flex items-center gap-2 rounded-md px-2.5 py-1.5 text-xs font-medium bg-secondary text-secondary-foreground hover:opacity-90 transition-opacity"
            >
              {controlledMode === "dark" ? (
                <SunIcon className="size-3" aria-hidden="true" />
              ) : (
                <MoonIcon className="size-3" aria-hidden="true" />
              )}
              Toggle từ ngoài
            </button>
          </div>

          <ThemeProvider mode={controlledMode} onModeChange={setControlledMode}>
            <ThemeAwareCard readOnly />
          </ThemeProvider>
        </div>
      </ExampleSection>

      {/* ── Utilities ── */}
      <SectionHeader
        title="Utilities"
        description="ThemeWrapper để tunnel theme class qua Portal boundary (Dialog, Tooltip, Popover...) — thường dùng nội bộ khi thiết kế components, không cần gọi trực tiếp ở tầng ứng dụng."
      />

      {/* ThemeWrapper — Portal tunnel */}
      <ExampleSection
        fullWidth
        label="ThemeWrapper — Portal Tunnel"
        description="ThemeWrapper re-apply class dark/light bên trong Portal boundary. Dùng nội bộ bởi Dialog, Tooltip, Popover để theme không bị mất khi render ra ngoài document.body."
        codeString={`<ThemeProvider defaultMode="dark">
  <div className="flex gap-10">
    {/* ❌ LỖI KHÔNG CÓ THEMEWRAPPER */}
    <TooltipPrimitive.Root>
      <TooltipPrimitive.Trigger>Hover tôi (Lỗi)</TooltipPrimitive.Trigger>
      <TooltipPrimitive.Portal>
        {/* Nội dung render ra document.body (vốn đang là Light mode) */}
        {/* Do KHÔNG CÓ ThemeWrapper, Tooltip này sẽ bị sáng trắng lên, sai màu. */}
        <TooltipPrimitive.Positioner sideOffset={8}>
          <TooltipPrimitive.Popup className="bg-card text-card-foreground">
            Trắng toát! Lạc quẻ với nền đen.
          </TooltipPrimitive.Popup>
        </TooltipPrimitive.Positioner>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>

    {/* ✅ ĐÃ SỬA BẰNG THEMEWRAPPER */}
    <TooltipPrimitive.Root>
      <TooltipPrimitive.Trigger>Hover tôi (Chuẩn)</TooltipPrimitive.Trigger>
      <TooltipPrimitive.Portal>
        <ThemeWrapper>
          {/* ThemeWrapper đem Context "tao đang ở vùng Dark" chui qua Portal */}
          {/* Tooltip này sẽ giữ đúng màu Đen của Provider cha. */}
          <TooltipPrimitive.Positioner sideOffset={8}>
            <TooltipPrimitive.Popup className="bg-card text-card-foreground">
              Màu Tối! Đồng bộ với provider cha.
            </TooltipPrimitive.Popup>
          </TooltipPrimitive.Positioner>
        </ThemeWrapper>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  </div>
</ThemeProvider>`}
      >
        <ThemeProvider defaultMode="dark">
          <div className="space-y-6 w-full rounded-xl border border-border bg-background p-6">
            <p className="text-sm text-foreground leading-relaxed">
              Vùng này đang bị ép thành <DocsCode>dark</DocsCode> mode cục bộ.{" "}
              <br />
              <span className="text-muted-foreground mt-1 block">
                💡 <strong>Mẹo:</strong> Hãy đổi theme của cả trang web sang{" "}
                <strong>Light Mode</strong> (ở góc trên bên phải), sau đó mở 2
                tooltip bên dưới để thấy rõ sự cố khi content bị văng ra ngoài{" "}
                <DocsCode>document.body</DocsCode>.
              </span>
            </p>

            <div className="flex gap-10">
              {/* Without ThemeWrapper */}
              <div className="space-y-3">
                <p className="text-xs font-semibold text-destructive flex items-center gap-1.5">
                  ❌ Không có ThemeWrapper
                </p>
                <TooltipPrimitive.Root>
                  <TooltipPrimitive.Trigger className="rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium">
                    Hover tôi
                  </TooltipPrimitive.Trigger>
                  <TooltipPrimitive.Portal>
                    <TooltipPrimitive.Positioner sideOffset={8}>
                      <TooltipPrimitive.Popup className="z-50 bg-card text-card-foreground border border-border px-3 py-2 text-sm rounded shadow-md">
                        Trắng toát! Lạc quẻ với nền đen.
                      </TooltipPrimitive.Popup>
                    </TooltipPrimitive.Positioner>
                  </TooltipPrimitive.Portal>
                </TooltipPrimitive.Root>
              </div>

              {/* With ThemeWrapper */}
              <div className="space-y-3">
                <p className="text-xs font-semibold text-success flex items-center gap-1.5">
                  ✅ Có ThemeWrapper
                </p>
                <TooltipPrimitive.Root>
                  <TooltipPrimitive.Trigger className="rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium">
                    Hover tôi
                  </TooltipPrimitive.Trigger>
                  <TooltipPrimitive.Portal>
                    <ThemeWrapper>
                      <TooltipPrimitive.Positioner sideOffset={8}>
                        <TooltipPrimitive.Popup className="z-50 bg-card text-card-foreground border border-border px-3 py-2 text-sm rounded shadow-md">
                          Màu Tối! Đồng bộ với provider cha.
                        </TooltipPrimitive.Popup>
                      </TooltipPrimitive.Positioner>
                    </ThemeWrapper>
                  </TooltipPrimitive.Portal>
                </TooltipPrimitive.Root>
              </div>
            </div>
          </div>
        </ThemeProvider>
      </ExampleSection>

      {/* QA Testing Ground - Title */}
      <div className="pt-16 pb-6">
        <SectionHeader
          title="QA Testing Ground"
          description="Kiểm thử thực tế với các Component hoàn chỉnh của gladcn (đang ép Dark Mode). Hãy chuyển Theme tổng sang Light Mode để xem sức mạnh của ThemeWrapper."
        />
      </div>

      <ExampleGrid>

        {/* Popover */}
        <ExampleSection
          label="Popover"
          description="Popover Portal render ra document.body — nếu không có ThemeWrapper sẽ mất dark mode."
          codeString={`<ThemeProvider defaultMode="dark">
  <div className="w-full flex gap-10 rounded-xl border border-border bg-background p-10">
    <div className="flex-1 flex flex-col items-center gap-4">
      <span className="text-sm font-medium text-muted-foreground">
        Không dùng ThemeWrapper
      </span>
      <Popover>
        <PopoverTrigger
          render={<Button variant="outline">Click Popover</Button>}
        />
        <PopoverPortal>
          <PopoverContent className="w-64">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">
                Nội dung Popover
              </h4>
              <p className="text-sm text-muted-foreground">
                Lỗi: Hiển thị giao diện sáng.
              </p>
            </div>
          </PopoverContent>
        </PopoverPortal>
      </Popover>
    </div>

    <div className="flex-1 flex flex-col items-center gap-4">
      <span className="text-sm font-medium text-muted-foreground">
        Có ThemeWrapper
      </span>
      <Popover>
        <PopoverTrigger
          render={<Button variant="outline">Click Popover</Button>}
        />
        <PopoverPortal>
          <ThemeWrapper>
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
          </ThemeWrapper>
        </PopoverPortal>
      </Popover>
    </div>
  </div>
</ThemeProvider>`}
        >
          <ThemeProvider defaultMode="dark">
            <div className="w-full flex gap-10 rounded-xl border border-border bg-background p-10">
              <div className="flex-1 flex flex-col items-center gap-4">
                <span className="text-sm font-medium text-muted-foreground">
                  Không dùng ThemeWrapper
                </span>
                <Popover>
                  <PopoverTrigger
                    render={<Button variant="outline">Click Popover</Button>}
                  />
                  <PopoverPortal>
                    <PopoverContent className="w-64">
                      <div className="space-y-2">
                        <h4 className="font-medium leading-none">
                          Nội dung Popover
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Lỗi: Hiển thị giao diện sáng.
                        </p>
                      </div>
                    </PopoverContent>
                  </PopoverPortal>
                </Popover>
              </div>

              <div className="flex-1 flex flex-col items-center gap-4">
                <span className="text-sm font-medium text-muted-foreground">
                  Có ThemeWrapper
                </span>
                <Popover>
                  <PopoverTrigger
                    render={<Button variant="outline">Click Popover</Button>}
                  />
                  <PopoverPortal>
                    <ThemeWrapper>
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
                    </ThemeWrapper>
                  </PopoverPortal>
                </Popover>
              </div>
            </div>
          </ThemeProvider>
        </ExampleSection>

        {/* Select */}
        <ExampleSection
          label="Select"
          description="SelectContent render qua Portal — ThemeWrapper giữ đồng bộ theme cho dropdown."
          codeString={`<ThemeProvider defaultMode="dark">
  <div className="w-full flex gap-10 rounded-xl border border-border bg-background p-10">
    <div className="flex-1 flex flex-col items-center gap-4">
      <span className="text-sm font-medium text-muted-foreground">
        Không dùng ThemeWrapper
      </span>
      <Select items={{ next: "Next.js", vite: "Vite", remix: "Remix" }}>
        <SelectTrigger className="w-[140px]">
          <SelectValue placeholder="Chọn framework..." />
        </SelectTrigger>
        <SelectPortal>
          <SelectContent>
            <SelectItem value="next">Next.js</SelectItem>
            <SelectItem value="vite">Vite</SelectItem>
            <SelectItem value="remix">Remix</SelectItem>
          </SelectContent>
        </SelectPortal>
      </Select>
    </div>

    <div className="flex-1 flex flex-col items-center gap-4">
      <span className="text-sm font-medium text-muted-foreground">
        Có ThemeWrapper
      </span>
      <Select items={{ next: "Next.js", vite: "Vite", remix: "Remix" }}>
        <SelectTrigger className="w-[140px]">
          <SelectValue placeholder="Chọn framework..." />
        </SelectTrigger>
        <SelectPortal>
          <ThemeWrapper>
            <SelectContent>
              <SelectItem value="next">Next.js</SelectItem>
              <SelectItem value="vite">Vite</SelectItem>
              <SelectItem value="remix">Remix</SelectItem>
            </SelectContent>
          </ThemeWrapper>
        </SelectPortal>
      </Select>
    </div>
  </div>
</ThemeProvider>`}
        >
          <ThemeProvider defaultMode="dark">
            <div className="w-full flex gap-10 rounded-xl border border-border bg-background p-10">
              <div className="flex-1 flex flex-col items-center gap-4">
                <span className="text-sm font-medium text-muted-foreground">
                  Không dùng ThemeWrapper
                </span>
                <Select items={{ next: "Next.js", vite: "Vite", remix: "Remix" }}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Chọn framework..." />
                  </SelectTrigger>
                  <SelectPortal>
                    <SelectContent>
                      <SelectItem value="next">Next.js</SelectItem>
                      <SelectItem value="vite">Vite</SelectItem>
                      <SelectItem value="remix">Remix</SelectItem>
                    </SelectContent>
                  </SelectPortal>
                </Select>
              </div>

              <div className="flex-1 flex flex-col items-center gap-4">
                <span className="text-sm font-medium text-muted-foreground">
                  Có ThemeWrapper
                </span>
                <Select items={{ next: "Next.js", vite: "Vite", remix: "Remix" }}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Chọn framework..." />
                  </SelectTrigger>
                  <SelectPortal>
                    <ThemeWrapper>
                      <SelectContent>
                        <SelectItem value="next">Next.js</SelectItem>
                        <SelectItem value="vite">Vite</SelectItem>
                        <SelectItem value="remix">Remix</SelectItem>
                      </SelectContent>
                    </ThemeWrapper>
                  </SelectPortal>
                </Select>
              </div>
            </div>
          </ThemeProvider>
        </ExampleSection>

        {/* DropdownMenu */}
        <ExampleSection
          label="DropdownMenu"
          description="DropdownMenuContent render qua Portal — cần ThemeWrapper để giữ dark mode."
          codeString={`<ThemeProvider defaultMode="dark">
  <div className="w-full flex gap-10 rounded-xl border border-border bg-background p-10">
    <div className="flex-1 flex flex-col items-center gap-4">
      <span className="text-sm font-medium text-muted-foreground">
        Không dùng ThemeWrapper
      </span>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={<Button variant="outline">Open Dropdown</Button>}
        />
        <DropdownMenuPortal>
          <DropdownMenuContent className="w-48">
            <DropdownMenuGroup>
              <DropdownMenuLabel>Tài khoản</DropdownMenuLabel>
              <DropdownMenuItem>Trang cá nhân</DropdownMenuItem>
              <DropdownMenuItem>Cài đặt</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Đăng xuất</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenuPortal>
      </DropdownMenu>
    </div>

    <div className="flex-1 flex flex-col items-center gap-4">
      <span className="text-sm font-medium text-muted-foreground">
        Có ThemeWrapper
      </span>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={<Button variant="outline">Open Dropdown</Button>}
        />
        <DropdownMenuPortal>
          <ThemeWrapper>
            <DropdownMenuContent className="w-48">
              <DropdownMenuGroup>
                <DropdownMenuLabel>Tài khoản</DropdownMenuLabel>
                <DropdownMenuItem>Trang cá nhân</DropdownMenuItem>
                <DropdownMenuItem>Cài đặt</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Đăng xuất</DropdownMenuItem>
            </DropdownMenuContent>
          </ThemeWrapper>
        </DropdownMenuPortal>
      </DropdownMenu>
    </div>
  </div>
</ThemeProvider>`}
        >
          <ThemeProvider defaultMode="dark">
            <div className="w-full flex gap-10 rounded-xl border border-border bg-background p-10">
              <div className="flex-1 flex flex-col items-center gap-4">
                <span className="text-sm font-medium text-muted-foreground">
                  Không dùng ThemeWrapper
                </span>
                <DropdownMenu>
                  <DropdownMenuTrigger
                    render={<Button variant="outline">Open Dropdown</Button>}
                  />
                  <DropdownMenuPortal>
                    <DropdownMenuContent className="w-48">
                      <DropdownMenuGroup>
                        <DropdownMenuLabel>Tài khoản</DropdownMenuLabel>
                        <DropdownMenuItem>Trang cá nhân</DropdownMenuItem>
                        <DropdownMenuItem>Cài đặt</DropdownMenuItem>
                      </DropdownMenuGroup>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Đăng xuất</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenuPortal>
                </DropdownMenu>
              </div>

              <div className="flex-1 flex flex-col items-center gap-4">
                <span className="text-sm font-medium text-muted-foreground">
                  Có ThemeWrapper
                </span>
                <DropdownMenu>
                  <DropdownMenuTrigger
                    render={<Button variant="outline">Open Dropdown</Button>}
                  />
                  <DropdownMenuPortal>
                    <ThemeWrapper>
                      <DropdownMenuContent className="w-48">
                        <DropdownMenuGroup>
                          <DropdownMenuLabel>Tài khoản</DropdownMenuLabel>
                          <DropdownMenuItem>Trang cá nhân</DropdownMenuItem>
                          <DropdownMenuItem>Cài đặt</DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Đăng xuất</DropdownMenuItem>
                      </DropdownMenuContent>
                    </ThemeWrapper>
                  </DropdownMenuPortal>
                </DropdownMenu>
              </div>
            </div>
          </ThemeProvider>
        </ExampleSection>

        {/* Dialog */}
        <ExampleSection
          label="Dialog"
          description="Dialog overlay + content render qua Portal — ThemeWrapper bảo vệ theme xuyên suốt."
          codeString={`<ThemeProvider defaultMode="dark">
  <div className="w-full flex gap-10 rounded-xl border border-border bg-background p-10">
    <div className="flex-1 flex flex-col items-center gap-4">
      <span className="text-sm font-medium text-muted-foreground">
        Không dùng ThemeWrapper
      </span>
      <Dialog>
        <DialogTrigger
          render={<Button variant="outline">Open Dialog</Button>}
        />
        <DialogPortal>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Mất Dark Mode!</DialogTitle>
              <DialogDescription>
                Lỗi: Hiển thị giao diện sáng mặc định.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </DialogPortal>
      </Dialog>
    </div>

    <div className="flex-1 flex flex-col items-center gap-4">
      <span className="text-sm font-medium text-muted-foreground">
        Có ThemeWrapper
      </span>
      <Dialog>
        <DialogTrigger
          render={<Button variant="outline">Open Dialog</Button>}
        />
        <DialogPortal>
          <ThemeWrapper>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Màu tối toàn vẹn</DialogTitle>
                <DialogDescription>
                  Ngay cả khi mở Dialog bọc ngoài toàn bộ màn hình,
                  Portal Tunnel vẫn bảo vệ được scope Dark Mode.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </ThemeWrapper>
        </DialogPortal>
      </Dialog>
    </div>
  </div>
</ThemeProvider>`}
        >
          <ThemeProvider defaultMode="dark">
            <div className="w-full flex gap-10 rounded-xl border border-border bg-background p-10">
              <div className="flex-1 flex flex-col items-center gap-4">
                <span className="text-sm font-medium text-muted-foreground">
                  Không dùng ThemeWrapper
                </span>
                <Dialog>
                  <DialogTrigger
                    render={<Button variant="outline">Open Dialog</Button>}
                  />
                  <DialogPortal>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Mất Dark Mode!</DialogTitle>
                        <DialogDescription>
                          Lỗi: Hiển thị giao diện sáng mặc định.
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </DialogPortal>
                </Dialog>
              </div>

              <div className="flex-1 flex flex-col items-center gap-4">
                <span className="text-sm font-medium text-muted-foreground">
                  Có ThemeWrapper
                </span>
                <Dialog>
                  <DialogTrigger
                    render={<Button variant="outline">Open Dialog</Button>}
                  />
                  <DialogPortal>
                    <ThemeWrapper>
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle>Màu tối toàn vẹn</DialogTitle>
                          <DialogDescription>
                            Ngay cả khi mở Dialog bọc ngoài toàn bộ màn hình,
                            Portal Tunnel vẫn bảo vệ được scope Dark Mode.
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </ThemeWrapper>
                  </DialogPortal>
                </Dialog>
              </div>
            </div>
          </ThemeProvider>
        </ExampleSection>

        {/* Sheet */}
        <ExampleSection
          label="Sheet"
          description="Sheet slide-in panel render qua Portal — ThemeWrapper tunnel dark mode vào panel."
          codeString={`<ThemeProvider defaultMode="dark">
  <div className="w-full flex gap-10 rounded-xl border border-border bg-background p-10">
    <div className="flex-1 flex flex-col items-center gap-4">
      <span className="text-sm font-medium text-muted-foreground">
        Không dùng ThemeWrapper
      </span>
      <Sheet>
        <SheetTrigger
          render={<Button variant="outline">Open Sheet</Button>}
        />
        <SheetPortal>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Mất Dark Mode!</SheetTitle>
            </SheetHeader>
          </SheetContent>
        </SheetPortal>
      </Sheet>
    </div>

    <div className="flex-1 flex flex-col items-center gap-4">
      <span className="text-sm font-medium text-muted-foreground">
        Có ThemeWrapper
      </span>
      <Sheet>
        <SheetTrigger
          render={<Button variant="outline">Open Sheet</Button>}
        />
        <SheetPortal>
          <ThemeWrapper>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Sheet Demo</SheetTitle>
              </SheetHeader>
              <div className="py-4">Màu tối đồng bộ hoàn hảo!</div>
            </SheetContent>
          </ThemeWrapper>
        </SheetPortal>
      </Sheet>
    </div>
  </div>
</ThemeProvider>`}
        >
          <ThemeProvider defaultMode="dark">
            <div className="w-full flex gap-10 rounded-xl border border-border bg-background p-10">
              <div className="flex-1 flex flex-col items-center gap-4">
                <span className="text-sm font-medium text-muted-foreground">
                  Không dùng ThemeWrapper
                </span>
                <Sheet>
                  <SheetTrigger
                    render={<Button variant="outline">Open Sheet</Button>}
                  />
                  <SheetPortal>
                    <SheetContent side="right">
                      <SheetHeader>
                        <SheetTitle>Mất Dark Mode!</SheetTitle>
                      </SheetHeader>
                    </SheetContent>
                  </SheetPortal>
                </Sheet>
              </div>

              <div className="flex-1 flex flex-col items-center gap-4">
                <span className="text-sm font-medium text-muted-foreground">
                  Có ThemeWrapper
                </span>
                <Sheet>
                  <SheetTrigger
                    render={<Button variant="outline">Open Sheet</Button>}
                  />
                  <SheetPortal>
                    <ThemeWrapper>
                      <SheetContent side="right">
                        <SheetHeader>
                          <SheetTitle>Sheet Demo</SheetTitle>
                        </SheetHeader>
                        <div className="py-4">Màu tối đồng bộ hoàn hảo!</div>
                      </SheetContent>
                    </ThemeWrapper>
                  </SheetPortal>
                </Sheet>
              </div>
            </div>
          </ThemeProvider>
        </ExampleSection>
      </ExampleGrid>
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
      description="Context provider cho light/dark mode — uncontrolled (defaultMode) hoặc controlled (mode + onModeChange). Portal-safe qua ThemeWrapper."
      generalConcept={
        <ShowcaseDocs>
          <DocsH3>Theme Provider</DocsH3>
          <DocsP>
            <DocsCode>ThemeProvider</DocsCode> bọc children trong một{" "}
            <DocsCode>{"div[display:contents]"}</DocsCode> với class{" "}
            <DocsCode>light</DocsCode> hoặc <DocsCode>dark</DocsCode>, kích hoạt
            CSS variable cascade mà không ảnh hưởng layout.
          </DocsP>
          <DocsP>
            Hỗ trợ hai chế độ: <strong>Uncontrolled</strong> (truyền{" "}
            <DocsCode>defaultMode</DocsCode> — ThemeProvider tự quản lý state)
            và <strong>Controlled</strong> (truyền <DocsCode>mode</DocsCode> +{" "}
            <DocsCode>onModeChange</DocsCode> — state do component cha sở hữu).
            Việc đọc localStorage hoặc system preference thuộc về tầng Macro.
          </DocsP>
          <DocsP>
            Dùng <DocsCode>useTheme()</DocsCode> để đọc{" "}
            <DocsCode>mode</DocsCode> và gọi <DocsCode>setMode()</DocsCode> từ
            bất kỳ component con nào. <DocsCode>ThemeWrapper</DocsCode> tự động
            tunnel theme qua Portal boundary cho Dialog, Tooltip, Popover...
          </DocsP>
        </ShowcaseDocs>
      }
      tabs={[
        {
          label: "Micro (Primitive)",
          content: <ThemeProviderMicroShowcase />,
        },
      ]}
    />
  );
}
