import { useState } from "react";
import { MoonIcon, SunIcon } from "lucide-react";

import { ThemeProvider, useTheme, type ThemeMode } from "@/components/micro/theme-provider";
import {
  DocsCode,
  DocsH3,
  DocsP,
  ExampleGrid,
  ExampleSection,
  Showcase,
  ShowcaseDocs,
} from "@/dev/components/showcase";

// ──────────────────────────────────────────────────────────
// Demo helpers
// ──────────────────────────────────────────────────────────

/** Demo card that reads theme from context and shows current mode */
function ThemeAwareCard() {
  const theme = useTheme();

  return (
    <div className="rounded-xl border bg-card text-card-foreground p-4 space-y-3">
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
    </div>
  );
}

/** Scoped provider with its own toggle — independent of global theme */
function ScopedThemeDemo({ initialMode }: { initialMode: ThemeMode }) {
  return (
    <ThemeProvider initialMode={initialMode}>
      <ThemeAwareCard />
    </ThemeProvider>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 1: Micro Content
// ──────────────────────────────────────────────────────────
function ThemeProviderMicroShowcase() {
  return (
    <div className="space-y-10 mt-6">
      {/* Scoped providers */}
      <ExampleGrid columns={2}>
        <ExampleSection
          label="Scoped Light"
          description="ThemeProvider bắt đầu với light mode — có thể toggle độc lập."
          codeString={`<ThemeProvider initialMode="light">
  <MyComponent />
</ThemeProvider>`}
        >
          <ScopedThemeDemo initialMode="light" />
        </ExampleSection>

        <ExampleSection
          label="Scoped Dark"
          description="ThemeProvider bắt đầu với dark mode — độc lập với provider khác."
          codeString={`<ThemeProvider initialMode="dark">
  <MyComponent />
</ThemeProvider>`}
        >
          <ScopedThemeDemo initialMode="dark" />
        </ExampleSection>
      </ExampleGrid>

      {/* useTheme hook */}
      <ExampleSection
        label="useTheme() Hook"
        description="Đọc và thay đổi theme từ bất kỳ component con nào trong cây."
        codeString={`function MyComponent() {
  const theme = useTheme();

  return (
    <button onClick={() => theme?.setMode("dark")}>
      Mode hiện tại: {theme?.mode}
    </button>
  );
}`}
      >
        <ThemeProvider initialMode="light">
          <ThemeAwareCard />
        </ThemeProvider>
      </ExampleSection>

      {/* Root provider */}
      <ExampleSection
        label="Root Provider (isRoot)"
        description='isRoot={true} đồng bộ class "dark"/"light" lên thẻ <html> — dùng cho ứng dụng toàn trang.'
        codeString={`// Đặt ở root layout
<ThemeProvider initialMode="light" isRoot>
  <App />
</ThemeProvider>`}
      >
        <div className="rounded-xl border bg-muted/50 p-4">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">isRoot</span> — khi
            bật, ThemeProvider sẽ toggle class{" "}
            <DocsCode>dark</DocsCode> / <DocsCode>light</DocsCode> trên{" "}
            <DocsCode>{"<html>"}</DocsCode> qua{" "}
            <DocsCode>{"document.documentElement"}</DocsCode>. Chỉ dùng 1
            provider duy nhất với <DocsCode>isRoot</DocsCode> ở root app.
          </p>
        </div>
      </ExampleSection>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 2: Entry point
// ──────────────────────────────────────────────────────────
export default function ThemeProviderShowcase() {
  return (
    <Showcase
      title="Theme Provider"
      description="Context provider cho light/dark mode — hỗ trợ scoped và root, portal-safe qua ThemeWrapper."
      generalConcept={
        <ShowcaseDocs>
          <DocsH3>Theme Provider</DocsH3>
          <DocsP>
            <DocsCode>ThemeProvider</DocsCode> bọc children trong một{" "}
            <DocsCode>{"div[display:contents]"}</DocsCode> với class{" "}
            <DocsCode>light</DocsCode> hoặc <DocsCode>dark</DocsCode>, kích
            hoạt CSS variable cascade mà không ảnh hưởng layout. Sử dụng{" "}
            <DocsCode>useTheme()</DocsCode> để đọc và thay đổi theme từ bất kỳ
            component con nào. <DocsCode>ThemeWrapper</DocsCode> tự động tunnel
            theme qua Portal boundary để các Tooltip, Dialog, Popover... luôn
            khớp theme.
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
