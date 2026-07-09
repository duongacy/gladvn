import { useState } from "react";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";

import { type Size } from "@/lib/types";
import { Input } from "@/components/micro/input";
import { Field, FieldLabel, FieldDescription, FieldContent } from "@/components/micro/field";
import { InputGroup, InputGroupAddon, InputGroupText, InputGroupInput } from "@/components/micro/input-group";
import { MonoSelect } from "@/dev/components/mono-select";

import { InputPreset } from "@/components/macro/input-preset";

export default function InputShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Input"
        description="Trường văn bản để ghi lại thông tin đầu vào của người dùng dạng ngắn."
      >
        <MonoSelect
          value={globalSize}
          onValueChange={(v) => setGlobalSize(v as "sm" | "md" | "lg")}
          options={[
            { value: "sm", label: "Small" },
            { value: "md", label: "Medium" },
            { value: "lg", label: "Large" },
          ]}
        />
      </SectionHeader>

      {/* ── Default ───────────────────────────────── */}
      <ExampleSection
        label="Default"
        description="Nhập văn bản cơ bản với nhãn và mô tả."
      >
          <Field size={globalSize} className="w-full max-w-sm">
            <FieldLabel htmlFor="tf-input">Email</FieldLabel>
            <FieldDescription>We'll never share your email.</FieldDescription>
            <FieldContent>
              <Input
                id="tf-input"
                size={globalSize}
                placeholder="you@example.com"
              />
            </FieldContent>
          </Field>
      </ExampleSection>

      <ExampleGrid columns={2}>
        {/* ── Input Group ──────────────────────────── */}
        <ExampleSection
          label="Input Group"
          description="Đầu vào với các phần bổ sung tiền tố và hậu tố."
        >
            <Field size={globalSize} className="w-full max-w-sm">
              <FieldLabel htmlFor="tf-group">Website</FieldLabel>
              <FieldContent>
                <InputGroup size={globalSize}>
                  <InputGroupAddon>
                    <InputGroupText>https://</InputGroupText>
                  </InputGroupAddon>
                  <InputGroupInput id="tf-group" placeholder="example" />
                  <InputGroupAddon>
                    <InputGroupText>.com</InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </FieldContent>
            </Field>
        </ExampleSection>

        {/* ── Disabled ─────────────────────────────── */}
        <ExampleSection
          label="Disabled"
          description="Trạng thái đầu vào không tương tác."
        >
            <Field size={globalSize} className="w-full max-w-sm">
              <FieldLabel htmlFor="tf-disabled">Locked</FieldLabel>
              <FieldContent>
                <Input
                  id="tf-disabled"
                  disabled
                  size={globalSize}
                  value="Readonly content"
                />
              </FieldContent>
            </Field>
        </ExampleSection>
      </ExampleGrid>

      {/* ── Use Case Comparison ─────────────────────── */}
      <ExampleSection
        label="🧭 Use Case Comparison"
        description="Các kịch bản thực tế giúp bạn quyết định nên dùng Micro (Input / InputGroup) hay Macro (InputPreset)."
        fullWidth
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

          {/* Story 1: Macro wins */}
          <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 shrink-0 rounded-full bg-green-500/10 p-1.5 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Story 1 · Dùng Macro</p>
                <h3 className="mt-0.5 text-sm font-semibold text-foreground">Form quản lý CMS đơn giản</h3>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Bạn cần một ô nhập <strong>"Tiêu đề bài viết"</strong> với label, gợi ý và thông báo lỗi validate. Không có layout tuỳ biến gì đặc biệt.
            </p>
            <div className="rounded-lg bg-muted/50 p-3">
              <InputPreset
                id="uc-cms"
                size={globalSize}
                label="Tiêu đề bài viết"
                description="Tối đa 120 ký tự, hiển thị trên trang chủ."
                placeholder="Nhập tiêu đề..."
                className="w-full"
              />
            </div>
            <div className="rounded-md border border-green-500/20 bg-green-500/5 px-3 py-2">
              <p className="text-xs font-medium text-green-700 dark:text-green-400">✅ Dùng <code className="font-mono">InputPreset</code> — Label + description + error tích hợp sẵn, chỉ 1 dòng code.</p>
            </div>
          </div>

          {/* Story 2: Micro wins */}
          <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 shrink-0 rounded-full bg-blue-500/10 p-1.5 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Story 2 · Dùng Micro</p>
                <h3 className="mt-0.5 text-sm font-semibold text-foreground">Ô nhập giá với chọn đơn vị tiền</h3>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Bạn cần ô nhập <strong>số tiền</strong> với một <code className="font-mono text-[11px]">&lt;Select&gt;</code> chọn tiền tệ (VND / USD) bên trong addon. Macro không hỗ trợ slot phức tạp này.
            </p>
            <div className="rounded-lg bg-muted/50 p-3">
              <InputGroup size={globalSize} className="w-full">
                <InputGroupAddon>
                  <InputGroupText>VND</InputGroupText>
                </InputGroupAddon>
                <InputGroupInput placeholder="0" type="number" />
              </InputGroup>
            </div>
            <div className="rounded-md border border-blue-500/20 bg-blue-500/5 px-3 py-2">
              <p className="text-xs font-medium text-blue-700 dark:text-blue-400">✅ Dùng <code className="font-mono">InputGroup</code> (Micro) — Toàn quyền kiểm soát slot addon, nhét bất cứ thứ gì vào.</p>
            </div>
          </div>

          {/* Story 3: Macro wins (password) */}
          <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 shrink-0 rounded-full bg-green-500/10 p-1.5 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Story 3 · Dùng Macro</p>
                <h3 className="mt-0.5 text-sm font-semibold text-foreground">Trường mật khẩu với toggle ẩn/hiện</h3>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Bạn cần ô nhập <strong>mật khẩu</strong> có nút ẩn/hiện. Nếu dùng micro, bạn phải tự quản lý <code className="font-mono text-[11px]">useState(showPassword)</code> và tự render nút toggle.
            </p>
            <div className="rounded-lg bg-muted/50 p-3">
              <InputPreset
                id="uc-password"
                size={globalSize}
                type="password"
                label="Mật khẩu"
                placeholder="••••••••"
                className="w-full"
              />
            </div>
            <div className="rounded-md border border-green-500/20 bg-green-500/5 px-3 py-2">
              <p className="text-xs font-medium text-green-700 dark:text-green-400">✅ Dùng <code className="font-mono">InputPreset type="password"</code> — Toggle tự động, zero boilerplate.</p>
            </div>
          </div>

        </div>
      </ExampleSection>
    </div>
  );
}
