import { useState } from "react";
import { MoonIcon, SunIcon } from "lucide-react";


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
function ThemeAwareCard() {
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
      <button
        onClick={() => theme?.setMode(theme.mode === "dark" ? "light" : "dark")}
        className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
      >
        {theme?.mode === "dark" ? (
          <SunIcon className="size-3" aria-hidden="true" />
        ) : (
          <MoonIcon className="size-3" aria-hidden="true" />
        )}
        Chuyển sang {theme?.mode === "dark" ? "Light" : "Dark"}
      </button>
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
      <ExampleGrid>
        <ExampleSection
          label="defaultMode light"
          description="ThemeProvider giữ state nội bộ, bắt đầu từ light. Children toggle qua useTheme().setMode()."
          codeString={`// Bước 1: Định nghĩa component con — dùng useTheme() để lấy mode và setMode
function ThemeAwareCard() {
  const theme = useTheme(); // ← đọc từ ThemeProvider cha gần nhất

  return (
    <div className="rounded-xl border border-border bg-card text-card-foreground p-4 space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Ở nội dung</span>
        <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
          {theme?.mode} {/* "light" hoặc "dark" */}
        </span>
      </div>
      <button onClick={() => theme?.setMode(theme.mode === "dark" ? "light" : "dark")}>
        Chuyển sang {theme?.mode === "dark" ? "Light" : "Dark"}
      </button>
    </div>
  );
}

// Bước 2: Bọc trong ThemeProvider — state quản lý bởi provider
<ThemeProvider defaultMode="light">
  <ThemeAwareCard /> {/* tự động nhận được mode qua context */}
</ThemeProvider>`}
        >
          <ThemeProvider defaultMode="light">
            <ThemeAwareCard />
          </ThemeProvider>
        </ExampleSection>

        <ExampleSection
          label="defaultMode dark"
          description="Bắt đầu từ dark, hoàn toàn độc lập với ThemeProvider bên cạnh."
          codeString={`// useTheme() luôn đọc từ ThemeProvider gần nhất trong cây —
// nếu lồng 2 provider, mỗi provider quản lý state riêng biệt
function ThemeAwareCard() {
  const theme = useTheme(); // ← nhận "dark" từ provider này

  return (
    <div className="rounded-xl border border-border bg-card text-card-foreground p-4 space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Ở nội dung</span>
        <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
          {theme?.mode} {/* "dark" — độc lập với provider khác */}
        </span>
      </div>
      <button onClick={() => theme?.setMode(theme.mode === "dark" ? "light" : "dark")}>
        Chuyển sang {theme?.mode === "dark" ? "Light" : "Dark"}
      </button>
    </div>
  );
}

<ThemeProvider defaultMode="dark"> {/* bắt đầu từ dark, độc lập với provider cùng cấp */}
  <ThemeAwareCard />
</ThemeProvider>`}
        >
          <ThemeProvider defaultMode="dark">
            <ThemeAwareCard />
          </ThemeProvider>
        </ExampleSection>
      </ExampleGrid>

      {/* ── Controlled ── */}
      <SectionHeader
        title="Controlled"
        description="Dùng khi theme cần được đồng bộ với state bên ngoài — ví dụ: Macro component đọc từ localStorage/system, URL params, hoặc user settings API. State do caller sở hữu, ThemeProvider chỉ phản chiếu và delegate setMode() ra ngoài."
      />
      <ExampleSection
        label="mode + onModeChange"
        description="State ở component cha. Toggle từ ngoài cập nhật mode; children vẫn gọi setMode() như bình thường — tự động delegate lên onModeChange."
        codeString={`const [mode, setMode] = useState<ThemeMode>("light");

// State do component cha (hoặc macro) nắm giữ.
// ThemeProvider nhận mode vào và phản chiếu nó xuống DOM.
// Bất kỳ hành động thay đổi theme nào từ component con
// sẽ gọi hàm setMode() mà cha truyền vào qua onModeChange.
<ThemeProvider mode={mode} onModeChange={setMode}>
  {/* Component con chỉ cần hiển thị, không cần render nút toggle */}
  <div className="rounded-xl border border-border bg-card text-card-foreground p-4 space-y-3">
    <div className="flex items-center justify-between">
      <span className="text-sm font-medium">Thẻ nội dung</span>
      <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
        {mode}
      </span>
    </div>
  </div>
</ThemeProvider>`}
      >
        <div className="space-y-3 w-full">
          {/* External toggle (simulates Macro owning state) */}
          <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border border-border">
            <span className="text-xs text-muted-foreground flex-1">
              State ở component cha:{" "}
              <DocsCode>{controlledMode}</DocsCode>
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
            <ThemeAwareCard />
          </ThemeProvider>
        </div>
      </ExampleSection>

      {/* ── Hooks & Utilities ── */}
      <SectionHeader
        title="Hooks & Utilities"
        description="useTheme() để đọc/ghi theme từ bất kỳ component con nào. ThemeWrapper để tunnel theme class qua Portal boundary (Dialog, Tooltip, Popover...) — dùng nội bộ, không cần gọi trực tiếp trong hầu hết trường hợp."
      />
      <ExampleSection
        label="useTheme() Hook"
        description="Đọc mode và gọi setMode() từ bất kỳ component con nào trong cây."

        codeString={`// Bất kỳ component nào bên trong ThemeProvider đều dùng được
function ThemeAwareCard() {
  const theme = useTheme();

  return (
    <div className="rounded-xl border border-border bg-card text-card-foreground p-4 space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Thẻ nội dung</span>
        <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
          {theme?.mode ?? "unknown"}
        </span>
      </div>
      <button
        onClick={() => theme?.setMode(theme.mode === "dark" ? "light" : "dark")}
        className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-medium bg-primary text-primary-foreground"
      >
        Chuyển sang {theme?.mode === "dark" ? "Light" : "Dark"}
      </button>
    </div>
  );
}`}
      >
        <ThemeProvider defaultMode="light">
          <ThemeAwareCard />
        </ThemeProvider>
      </ExampleSection>

      {/* ThemeWrapper — Portal tunnel */}
      <ExampleSection
        fullWidth
        label="ThemeWrapper — Portal Tunnel"
        description="ThemeWrapper re-apply class dark/light bên trong Portal boundary. Dùng nội bộ bởi Dialog, Tooltip, Popover để theme không bị mất khi render ngoài cây DOM."
        codeString={`// Bên trong Dialog/Tooltip/Popover portal:
function MyPortalContent() {
  return createPortal(
    <ThemeWrapper>
      {/* theme class được tunnel vào đây */}
      <div className="bg-card text-card-foreground">
        Portal content đúng theme
      </div>
    </ThemeWrapper>,
    document.body,
  );
}`}
      >
        {/* Inline simulation — show the visual difference without real portals */}
        <ThemeProvider defaultMode="dark">
          <div className="space-y-4 w-full">
            <p className="text-xs text-muted-foreground">
              Provider cha đang ở <DocsCode>dark</DocsCode>. Simulation bên dưới
              minh hoạ điều gì xảy ra khi content render ra ngoài cây DOM (Portal):
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {/* Without ThemeWrapper: render without dark class */}
              <div className="space-y-2">
                <p className="text-xs font-semibold text-destructive flex items-center gap-1.5">
                  ❌ Không có ThemeWrapper
                </p>
                <p className="text-xs text-muted-foreground">
                  Nội dung thoát ra ngoài — không có class <DocsCode>dark</DocsCode>, dùng theme gốc của trang.
                </p>
                {/* Simulate "escaped from dark provider" by rendering without any theme class */}
                <div className="light rounded-lg border border-border bg-card text-card-foreground p-4 text-xs space-y-1.5">
                  <div className="font-medium">Popup / Tooltip</div>
                  <div className="text-muted-foreground">
                    Nền sáng — sai theme so với provider cha.
                  </div>
                </div>
              </div>

              {/* With ThemeWrapper: re-apply dark class */}
              <div className="space-y-2">
                <p className="text-xs font-semibold text-success flex items-center gap-1.5">
                  ✅ Có ThemeWrapper
                </p>
                <p className="text-xs text-muted-foreground">
                  ThemeWrapper bọc content trong <DocsCode>div.dark</DocsCode>, theme đúng với provider cha.
                </p>
                <ThemeWrapper>
                  <div className="rounded-lg border border-border bg-card text-card-foreground p-4 text-xs space-y-1.5">
                    <div className="font-medium">Popup / Tooltip</div>
                    <div className="text-muted-foreground">
                      Nền tối — khớp đúng với provider cha.
                    </div>
                  </div>
                </ThemeWrapper>
              </div>
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
            Dùng <DocsCode>useTheme()</DocsCode> để đọc <DocsCode>mode</DocsCode>{" "}
            và gọi <DocsCode>setMode()</DocsCode> từ bất kỳ component con nào.{" "}
            <DocsCode>ThemeWrapper</DocsCode> tự động tunnel theme qua Portal
            boundary cho Dialog, Tooltip, Popover...
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
