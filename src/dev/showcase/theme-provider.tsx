import { useState } from "react";

import { MoonIcon, SunIcon } from "lucide-react";

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
  type ThemeMode,
  ThemeProvider,
  ThemeWrapper,
  useTheme,
} from "../../components/micro/theme-provider";
import {
  Tooltip,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/micro/tooltip";
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
        description="Context provider điều phối dark/light mode cho toàn bộ component tree. Hỗ trợ hai chế độ: Uncontrolled (tự quản lý state) và Controlled (state do component cha sở hữu). Dùng ThemeWrapper để tunnel theme qua Portal boundary."
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
          description="ThemeWrapper tunnel theme class qua Portal boundary (Dialog, Tooltip, Popover...) bằng cách re-apply CSS variable vào container mới. Dưới đây là so sánh trực tiếp giữa portal không có và có ThemeWrapper khi theme cục bộ (ThemeProvider cha) đang ở Dark Mode."
        />
      </div>

      {/* Tooltip */}
      <ExampleSection
        fullWidth
        label="Tooltip"
        description="Tooltip được định vị gần trigger và hiển thị khi hover. Không có ThemeWrapper, tooltip của bạn sẽ trắng toát giữa một dark section — dười đây là bằng chứng trực quan."
        codeString={`<ThemeProvider defaultMode="dark">
  <div className="w-full flex gap-10 rounded-xl border border-border bg-background p-10">
    <div className="flex-1 flex flex-col items-center gap-4">
      <span className="text-sm font-medium text-muted-foreground">
        Không dùng ThemeWrapper
      </span>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger
            render={<Button variant="solid">Hover tôi</Button>}
          />
          <TooltipPortal>
            <TooltipContent
              sideOffset={8}
              className="bg-card text-card-foreground border border-border shadow-md"
            >
              Trắng toát! Lạc quẻ với nền đen.
            </TooltipContent>
          </TooltipPortal>
        </Tooltip>
      </TooltipProvider>
    </div>

    <div className="flex-1 flex flex-col items-center gap-4">
      <span className="text-sm font-medium text-muted-foreground">
        Có ThemeWrapper
      </span>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger
            render={<Button variant="solid">Hover tôi</Button>}
          />
          <TooltipPortal>
            <ThemeWrapper>
              <TooltipContent
                sideOffset={8}
                className="bg-card text-card-foreground border border-border shadow-md"
              >
                Màu Tối! Đồng bộ với provider cha.
              </TooltipContent>
            </ThemeWrapper>
          </TooltipPortal>
        </Tooltip>
      </TooltipProvider>
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
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger
                    render={<Button variant="solid">Hover tôi</Button>}
                  />
                  <TooltipPortal>
                    <TooltipContent
                      sideOffset={8}
                      className="bg-card text-card-foreground border border-border shadow-md"
                    >
                      Trắng toát! Lạc quẻ với nền đen.
                    </TooltipContent>
                  </TooltipPortal>
                </Tooltip>
              </TooltipProvider>
            </div>

            <div className="flex-1 flex flex-col items-center gap-4">
              <span className="text-sm font-medium text-muted-foreground">
                Có ThemeWrapper
              </span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger
                    render={<Button variant="solid">Hover tôi</Button>}
                  />
                  <TooltipPortal>
                    <ThemeWrapper>
                      <TooltipContent
                        sideOffset={8}
                        className="bg-card text-card-foreground border border-border shadow-md"
                      >
                        Màu Tối! Đồng bộ với provider cha.
                      </TooltipContent>
                    </ThemeWrapper>
                  </TooltipPortal>
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
        description="Popover chứa content phức tạp và mở khi click. Vì portal hướng tới `document.body`, toàn bộ nền popover lấy CSS variable từ root — sẽ trắng hoàn toàn dù trigger đang nằm trong dark section."
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
        fullWidth
        label="Select"
        description="SelectContent được render tách biệt hoàn toàn khỏi trigger. Thiếu ThemeWrapper, dropdown option sẽ trắng xuộa trong khi trigger vẫn tối — mù quáng và khó đọc."
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
        fullWidth
        label="DropdownMenu"
        description="DropdownMenu thường dùng cho navigation actions (profile, settings, logout). Khi hover qua từng item, màu highlight cũng lấy từ CSS variable — thiếu ThemeWrapper, cả nền menu lẫn trạng thái hover cùng lúc đều hiển thị sai màu."
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
        fullWidth
        label="Dialog"
        description="Dialog là trường hợp phức tạp nhất: portal chứa cả Overlay backdrop lẫn Content panel. Cả hai layer đều cần được bọc trong ThemeWrapper để đảm bảo đồng bộ hoàn toàn."
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
        fullWidth
        label="Sheet"
        description="Sheet trượt từ cạnh màn hình và phủ một vùng diện tích lớn — lỗi theme dễ nhận biết nhất vì panel thông thường chứa layout phức tạp hơn Popover hay Tooltip."
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
          <DocsH3>ThemeProvider</DocsH3>
          <DocsP>
            <DocsCode>ThemeProvider</DocsCode> bọc children trong một{" "}
            <DocsCode>{"div[display:contents]"}</DocsCode> và gắn class{" "}
            <DocsCode>light</DocsCode> hoặc <DocsCode>dark</DocsCode> lên đó,
            kích hoạt CSS variable cascade mà không ảnh hưởng layout. Hỗ trợ hai
            chế độ: <strong>Uncontrolled</strong> (truyền{" "}
            <DocsCode>defaultMode</DocsCode> — tự quản lý state) và{" "}
            <strong>Controlled</strong> (truyền <DocsCode>mode</DocsCode> +{" "}
            <DocsCode>onModeChange</DocsCode> — state do component cha sở hữu).
            Việc đọc localStorage hoặc system preference thuộc về tầng Macro.
          </DocsP>

          <DocsH3>ThemeWrapper &amp; Portal — Hard Requirement</DocsH3>
          <DocsP>
            CSS variable cascade theo <strong>DOM tree</strong>, không theo
            React component tree. Khi một component render qua Portal (ra{" "}
            <DocsCode>document.body</DocsCode>), nó thoát khỏi hoàn toàn chuỗi
            DOM ancestry — không còn tổ tiên nào mang class{" "}
            <DocsCode>.dark</DocsCode>, và mọi CSS variable rơi thẳng về giá trị{" "}
            <DocsCode>:root</DocsCode> (thường là light).
          </DocsP>
          <DocsP>
            <DocsCode>ThemeWrapper</DocsCode> giải quyết vấn đề này bằng cách
            đọc <DocsCode>useTheme()</DocsCode> và re-apply class theme vào một
            container mới ngay bên trong Portal — tái thiết lập CSS variable
            cascade cho toàn bộ nội dung bên trong.{" "}
            <strong>
              Đây không phải best practice tuỳ chọn — đây là yêu cầu bắt buộc
            </strong>{" "}
            khi dùng Portal trong bất kỳ scoped theme section nào. Bỏ qua{" "}
            <DocsCode>ThemeWrapper</DocsCode> sẽ không gây lỗi compile hay
            runtime warning, nhưng UI sẽ hiển thị sai màu âm thầm.
          </DocsP>
          <DocsP>
            Trách nhiệm đặt <DocsCode>ThemeWrapper</DocsCode> không thể delegate
            tuỳ tiện: Micro component không được tự ôm nó bên trong (vi phạm
            nguyên tắc pure composition). Tầng nào kiểm soát Portal — Macro
            component hoặc consumer trực tiếp — tầng đó phải tự đặt{" "}
            <DocsCode>ThemeWrapper</DocsCode> ngay sau Portal boundary.
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
