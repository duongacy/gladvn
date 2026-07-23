import { useState } from "react";

import { BoxIcon, SettingsIcon, SlidersHorizontalIcon } from "lucide-react";

import { AccordionPreset } from "../../components/macro/accordion-preset";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger } from "../../components/micro/accordion";
import {
  DocsP,
  ExampleGrid,
  ExampleSection,
  Showcase,
  ShowcaseDocs } from "../../dev/components/showcase";

// ──────────────────────────────────────────────────────────
// Shared Data
// ──────────────────────────────────────────────────────────
const faqItems = [
  {
    q: "Is it accessible?",
    a: "Yes. It adheres to the WAI-ARIA design pattern. Keyboard navigation and screen readers are fully supported." },
  {
    q: "Is it styled?",
    a: "Yes. It comes with default styles that match the other components' aesthetic. You can override every token via CSS variables." },
  {
    q: "Is it animated?",
    a: "Yes. It's animated by default with smooth expand/collapse transitions, but you can disable animation if you prefer." },
  {
    q: "Can I nest accordions?",
    a: "Yes. You can nest accordion components inside each other to create multi-level collapsible sections." },
];

const presetItems = [
  {
    value: "item-1",
    title: "Is it accessible?",
    content:
      "Yes. It adheres to the WAI-ARIA design pattern. Keyboard navigation and screen readers are fully supported." },
  {
    value: "item-2",
    title: "Is it styled?",
    content:
      "Yes. It comes with default styles that match the other components' aesthetic." },
  {
    value: "item-3",
    title: "Is it animated?",
    content: "Yes. It's animated by default with smooth transitions." },
];

// ──────────────────────────────────────────────────────────
// SECTION 1: Macro Content (không export)
// ──────────────────────────────────────────────────────────
function AccordionMacroShowcase() {
  const [controlledValue, setControlledValue] = useState<string[]>([]);

  return (
    <div className="space-y-10 mt-6">
      <ExampleGrid>
        <ExampleSection
          label="Tiêu Chuẩn (Standard)"
          description="Accordion mở đơn cơ bản."
          codeString={`<AccordionPreset
    className="w-full"
    defaultValue={["item-1"]}
    items={[
      {
        value: "item-1",
        title: "Is it accessible?",
        content:
          "Yes. It adheres to the WAI-ARIA design pattern. Keyboard navigation and screen readers are fully supported." },
      {
        value: "item-2",
        title: "Is it styled?",
        content:
          "Yes. It comes with default styles that match the other components' aesthetic." },
      {
        value: "item-3",
        title: "Is it animated?",
        content:
          "Yes. It's animated by default with smooth transitions." },
    ]}
  />`}
        >
          <AccordionPreset
            className="w-full"
            defaultValue={["item-1"]}
            items={[
              {
                value: "item-1",
                title: "Is it accessible?",
                content:
                  "Yes. It adheres to the WAI-ARIA design pattern. Keyboard navigation and screen readers are fully supported." },
              {
                value: "item-2",
                title: "Is it styled?",
                content:
                  "Yes. It comes with default styles that match the other components' aesthetic." },
              {
                value: "item-3",
                title: "Is it animated?",
                content:
                  "Yes. It's animated by default with smooth transitions." },
            ]}
          />
        </ExampleSection>

        <ExampleSection
          label="Mở Nhiều (Multiple Expansion)"
          description="Cho phép mở nhiều mục cùng một lúc."
          codeString={`<AccordionPreset
    className="w-full"
    multiple
    defaultValue={["item-1", "item-2"]}
    items={[
      {
        value: "item-1",
        title: "Is it accessible?",
        content:
          "Yes. It adheres to the WAI-ARIA design pattern. Keyboard navigation and screen readers are fully supported." },
      {
        value: "item-2",
        title: "Is it styled?",
        content:
          "Yes. It comes with default styles that match the other components' aesthetic." },
      {
        value: "item-3",
        title: "Is it animated?",
        content:
          "Yes. It's animated by default with smooth transitions." },
    ]}
  />`}
        >
          <AccordionPreset
            className="w-full"
            multiple
            defaultValue={["item-1", "item-2"]}
            items={[
              {
                value: "item-1",
                title: "Is it accessible?",
                content:
                  "Yes. It adheres to the WAI-ARIA design pattern. Keyboard navigation and screen readers are fully supported." },
              {
                value: "item-2",
                title: "Is it styled?",
                content:
                  "Yes. It comes with default styles that match the other components' aesthetic." },
              {
                value: "item-3",
                title: "Is it animated?",
                content:
                  "Yes. It's animated by default with smooth transitions." },
            ]}
          />
        </ExampleSection>
      </ExampleGrid>

      <ExampleGrid>
        <ExampleSection
          label="Controlled"
          description="Trạng thái mở được quản lý bằng state. Click vào các mục để xem state thay đổi."
          codeString={`const [controlledValue, setControlledValue] = useState<string[]>([]);
return (
  <AccordionPreset
    className="w-full"
    multiple
    value={controlledValue}
    onValueChange={setControlledValue}
    items={[
              {
                value: "item-1",
                title: "Is it accessible?",
                content: "Yes. It adheres to the WAI-ARIA design pattern. Keyboard navigation and screen readers are fully supported." },
              {
                value: "item-2",
                title: "Is it styled?",
                content: "Yes. It comes with default styles that match the other components' aesthetic." },
              {
                value: "item-3",
                title: "Is it animated?",
                content: "Yes. It's animated by default with smooth transitions." },
            ]}
  />
);`}
        >
          <div className="flex w-full flex-col gap-3">
            <p className="text-xs text-muted-foreground">
              Open:{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
                {controlledValue.length > 0
                  ? controlledValue.map((v) => `"${v}"`).join(", ")
                  : "(none)"}
              </code>
            </p>
            <AccordionPreset
              className="w-full"
              multiple
              value={controlledValue}
              onValueChange={setControlledValue}
              items={[
                {
                  value: "item-1",
                  title: "Is it accessible?",
                  content:
                    "Yes. It adheres to the WAI-ARIA design pattern. Keyboard navigation and screen readers are fully supported." },
                {
                  value: "item-2",
                  title: "Is it styled?",
                  content:
                    "Yes. It comes with default styles that match the other components' aesthetic." },
                {
                  value: "item-3",
                  title: "Is it animated?",
                  content:
                    "Yes. It's animated by default with smooth transitions." },
              ]}
            />
          </div>
        </ExampleSection>

        <ExampleSection
          label="Disabled (Vô hiệu hoá)"
          description="Từng mục riêng lẻ có thể bị vô hiệu hóa trong khi các mục khác vẫn tương tác bình thường."
          codeString={`<AccordionPreset
    className="w-full"
    items={[
      {
        value: "enabled-1",
        title: "Available Feature",
        content:
          "This feature is available and can be expanded normally." },
      {
        value: "disabled-1",
        title: "Premium Feature (Locked)",
        content:
          "This content is hidden behind a premium plan.",
        disabled: true },
      {
        value: "enabled-2",
        title: "Another Feature",
        content:
          "This is another available feature you can interact with freely." },
    ]}
  />`}
        >
          <AccordionPreset
            className="w-full"
            items={[
              {
                value: "enabled-1",
                title: "Available Feature",
                content:
                  "This feature is available and can be expanded normally." },
              {
                value: "disabled-1",
                title: "Premium Feature (Locked)",
                content: "This content is hidden behind a premium plan.",
                disabled: true },
              {
                value: "enabled-2",
                title: "Another Feature",
                content:
                  "This is another available feature you can interact with freely." },
            ]}
          />
        </ExampleSection>
      </ExampleGrid>

      <ExampleGrid>
        <ExampleSection
          label="Nội Dung Phức Tạp"
          description="Render các React Node bên trong nội dung."
          codeString={`<AccordionPreset
    className="w-full"
    items={[
      {
        value: "profile",
        title: "User Profile Settings",
        content: (
          <div className="flex flex-col items-start gap-3">
            <p className="text-sm">
              Update your personal information and
              preferences.
            </p>
            <button className="rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground">
              Edit Profile
            </button>
          </div>
        ) },
    ]}
  />`}
        >
          <AccordionPreset
            className="w-full"
            items={[
              {
                value: "profile",
                title: "User Profile Settings",
                content: (
                  <div className="flex flex-col items-start gap-3">
                    <p className="text-sm">
                      Update your personal information and preferences.
                    </p>
                    <button className="rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground">
                      Edit Profile
                    </button>
                  </div>
                ) },
            ]}
          />
        </ExampleSection>

        <ExampleSection
          label="Lồng Nhau (Nested Accordions)"
          description="Nội dung bên trong có thể chứa một Accordion khác."
          codeString={`<AccordionPreset
    className="w-full"
    items={[
      {
        value: "getting-started",
        title: "Getting Started",
        content: (
          <AccordionPreset
            className="w-full"
            items={[
              {
                value: "installation",
                title: "Installation",
                content:
                  "Run npm install to add the component to your project." },
            ]}
          />
        ) },
      {
        value: "advanced",
        title: "Advanced Usage",
        content: (
          <AccordionPreset
            className="w-full"
            items={[
              {
                value: "controlled",
                title: "Controlled Mode",
                content:
                  "Use the value and onValueChange props to control which items are open." },
            ]}
          />
        ) },
    ]}
  />`}
        >
          <AccordionPreset
            className="w-full"
            items={[
              {
                value: "getting-started",
                title: "Getting Started",
                content: (
                  <AccordionPreset
                    className="w-full"
                    items={[
                      {
                        value: "installation",
                        title: "Installation",
                        content:
                          "Run npm install to add the component to your project." },
                    ]}
                  />
                ) },
              {
                value: "advanced",
                title: "Advanced Usage",
                content: (
                  <AccordionPreset
                    className="w-full"
                    items={[
                      {
                        value: "controlled",
                        title: "Controlled Mode",
                        content:
                          "Use the value and onValueChange props to control which items are open." },
                    ]}
                  />
                ) },
            ]}
          />
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 2: Micro Content (không export)
// ──────────────────────────────────────────────────────────
function AccordionMicroShowcase() {
  return (
    <div className="space-y-10 mt-6">
      <ExampleGrid>
        <ExampleSection
          label="Mở Đơn (Single Expand)"
          description="Chỉ một mục được phép mở tại một thời điểm (mặc định)."
          codeString={`<Accordion
    className="w-full"
    defaultValue={["Is it accessible?"]}
  >
    <AccordionItem value="Is it accessible?">
      <AccordionTrigger>Is it accessible?</AccordionTrigger>
      <AccordionContent>
        Yes. It adheres to the WAI-ARIA design pattern.
        Keyboard navigation and screen readers are fully
        supported.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="Is it styled?">
      <AccordionTrigger>Is it styled?</AccordionTrigger>
      <AccordionContent>
        Yes. It comes with default styles that match the
        other components' aesthetic. You can override every
        token via CSS variables.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="Is it animated?">
      <AccordionTrigger>Is it animated?</AccordionTrigger>
      <AccordionContent>
        Yes. It's animated by default with smooth
        expand/collapse transitions, but you can disable
        animation if you prefer.
      </AccordionContent>
    </AccordionItem>
  </Accordion>`}
        >
          <Accordion className="w-full" defaultValue={["Is it accessible?"]}>
            <AccordionItem value="Is it accessible?">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="Is it styled?">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that match the other
                components' aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="Is it animated?">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It's animated by default with smooth transitions.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ExampleSection>

        <ExampleSection
          label="Mở Nhiều (Multiple Expand)"
          description="Cho phép mở nhiều mục cùng lúc."
          codeString={`<Accordion
    className="w-full"
    multiple
    defaultValue={["Is it accessible?", "Is it styled?"]}
  >
    <AccordionItem value="Is it accessible?">
      <AccordionTrigger>Is it accessible?</AccordionTrigger>
      <AccordionContent>
        Yes. It adheres to the WAI-ARIA design pattern.
        Keyboard navigation and screen readers are fully
        supported.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="Is it styled?">
      <AccordionTrigger>Is it styled?</AccordionTrigger>
      <AccordionContent>
        Yes. It comes with default styles that match the
        other components' aesthetic. You can override every
        token via CSS variables.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="Is it animated?">
      <AccordionTrigger>Is it animated?</AccordionTrigger>
      <AccordionContent>
        Yes. It's animated by default with smooth
        expand/collapse transitions, but you can disable
        animation if you prefer.
      </AccordionContent>
    </AccordionItem>
  </Accordion>`}
        >
          <Accordion
            className="w-full"
            multiple
            defaultValue={["Is it accessible?", "Is it styled?"]}
          >
            <AccordionItem value="Is it accessible?">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="Is it styled?">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that match the other
                components' aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="Is it animated?">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It's animated by default with smooth transitions.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ExampleSection>
      </ExampleGrid>

      <ExampleGrid>
        <ExampleSection
          label="Disabled (Vô hiệu hoá)"
          description="Từng mục riêng lẻ có thể bị vô hiệu hóa trong khi các mục khác vẫn tương tác bình thường."
          codeString={`<Accordion className="w-full">
    <AccordionItem value="enabled-1">
      <AccordionTrigger>Available Feature</AccordionTrigger>
      <AccordionContent>
        This feature is available and can be expanded
        normally. Click to see the details.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="disabled-1" disabled>
      <AccordionTrigger>
        Premium Feature (Locked)
      </AccordionTrigger>
      <AccordionContent>
        This content is hidden behind a premium plan.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="enabled-2">
      <AccordionTrigger>Another Feature</AccordionTrigger>
      <AccordionContent>
        This is another available feature you can interact
        with freely.
      </AccordionContent>
    </AccordionItem>
  </Accordion>`}
        >
          <Accordion className="w-full">
            <AccordionItem value="enabled-1">
              <AccordionTrigger>Available Feature</AccordionTrigger>
              <AccordionContent>
                This feature is available and can be expanded normally. Click to
                see the details.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="disabled-1" disabled>
              <AccordionTrigger>Premium Feature (Locked)</AccordionTrigger>
              <AccordionContent>
                This content is hidden behind a premium plan.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="enabled-2">
              <AccordionTrigger>Another Feature</AccordionTrigger>
              <AccordionContent>
                This is another available feature you can interact with freely.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ExampleSection>

        <ExampleSection
          label="Lồng Nhau (Nested Accordions)"
          description="Nội dung bên trong có thể chứa một Accordion khác để tạo cấu trúc nhiều cấp."
          codeString={`<Accordion className="w-full max-w-lg">
    <AccordionItem value="getting-started">
      <AccordionTrigger>Getting Started</AccordionTrigger>
      <AccordionContent>
        <Accordion>
          <AccordionItem value="installation">
            <AccordionTrigger>
              Installation
            </AccordionTrigger>
            <AccordionContent>
              Run npm install to add the component to your
              project.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="configuration">
            <AccordionTrigger>
              Configuration
            </AccordionTrigger>
            <AccordionContent>
              Import and wrap your content with the
              Accordion component.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="advanced">
      <AccordionTrigger>Advanced Usage</AccordionTrigger>
      <AccordionContent>
        <Accordion>
          <AccordionItem value="controlled">
            <AccordionTrigger>
              Controlled Mode
            </AccordionTrigger>
            <AccordionContent>
              Use the value and onValueChange props to
              control which items are open.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="animation">
            <AccordionTrigger>
              Custom Animation
            </AccordionTrigger>
            <AccordionContent>
              Override transition duration and easing via
              className.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </AccordionContent>
    </AccordionItem>
  </Accordion>`}
        >
          <Accordion className="w-full max-w-lg">
            <AccordionItem value="getting-started">
              <AccordionTrigger>Getting Started</AccordionTrigger>
              <AccordionContent>
                <Accordion>
                  <AccordionItem value="installation">
                    <AccordionTrigger>Installation</AccordionTrigger>
                    <AccordionContent>
                      Run npm install to add the component to your project.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="configuration">
                    <AccordionTrigger>Configuration</AccordionTrigger>
                    <AccordionContent>
                      Import and wrap your content with the Accordion component.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="advanced">
              <AccordionTrigger>Advanced Usage</AccordionTrigger>
              <AccordionContent>
                <Accordion>
                  <AccordionItem value="controlled">
                    <AccordionTrigger>Controlled Mode</AccordionTrigger>
                    <AccordionContent>
                      Use the value and onValueChange props to control which
                      items are open.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="animation">
                    <AccordionTrigger>Custom Animation</AccordionTrigger>
                    <AccordionContent>
                      Override transition duration and easing via className.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ExampleSection>
      </ExampleGrid>

      <ExampleSection
        label="FAQ Hoàn Chỉnh"
        description="Ví dụ một phần hỏi đáp FAQ hoàn chỉnh."
        codeString={`<Accordion className="w-full max-w-lg">
    <AccordionItem value="Is it accessible?">
      <AccordionTrigger>Is it accessible?</AccordionTrigger>
      <AccordionContent>
        Yes. It adheres to the WAI-ARIA design pattern.
        Keyboard navigation and screen readers are fully
        supported.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="Is it styled?">
      <AccordionTrigger>Is it styled?</AccordionTrigger>
      <AccordionContent>
        Yes. It comes with default styles that match the
        other components' aesthetic. You can override every
        token via CSS variables.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="Is it animated?">
      <AccordionTrigger>Is it animated?</AccordionTrigger>
      <AccordionContent>
        Yes. It's animated by default with smooth
        expand/collapse transitions, but you can disable
        animation if you prefer.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="Can I nest accordions?">
      <AccordionTrigger>
        Can I nest accordions?
      </AccordionTrigger>
      <AccordionContent>
        Yes. You can nest accordion components inside each
        other to create multi-level collapsible sections.
      </AccordionContent>
    </AccordionItem>
  </Accordion>`}
      >
        <Accordion className="w-full max-w-lg">
          <AccordionItem value="Is it accessible?">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="Is it styled?">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that match the other components'
              aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="Is it animated?">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It's animated by default with smooth transitions.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="Can I nest accordions?">
            <AccordionTrigger>Can I nest accordions?</AccordionTrigger>
            <AccordionContent>
              Yes. You can nest accordion components inside each other to create
              multi-level collapsible sections.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </ExampleSection>

      {/* ── Use Case Comparison ─────────────────────── */}
      <ExampleSection
        label="🧭 Use Case Comparison"
        description="Các kịch bản thực tế giúp bạn quyết định nên dùng Micro (Accordion) hay Macro (AccordionPreset)."
        fullWidth
        codeString={`<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
    {/* ── Story 1: Macro wins ── */}
    <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 shrink-0 rounded-full bg-green-500/10 p-1.5 text-green-600">
          <SettingsIcon
            className="size-4"
            aria-hidden="true"
          />
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Story 1 · Dùng Macro
          </p>
          <h3 className="mt-0.5 text-sm font-semibold text-foreground">
            Render danh sách FAQ từ API
          </h3>
        </div>
      </div>

      <p className="text-xs text-muted-foreground leading-relaxed">
        Bạn nhận được một mảng dữ liệu FAQ (hỏi đáp) từ
        server. Nội dung đơn giản chỉ là text. Dùng Macro để
        tiết kiệm code.
      </p>

      <div className="rounded-lg bg-muted/50 p-3">
        <AccordionPreset
          className="w-full"
          items={[
            {
              value: "Is it accessible?",
              title: "Is it accessible?",
              content:
                "Yes. It adheres to the WAI-ARIA design pattern." },
            {
              value: "Is it styled?",
              title: "Is it styled?",
              content:
                "Yes. It comes with default styles that match the other components' aesthetic." },
          ]}
        />
      </div>

      <div className="rounded-md border border-border border-green-500/20 bg-green-500/5 px-3 py-2">
        <p className="text-xs font-medium text-green-700 dark:text-green-400">
          ✅ Dùng{" "}
          <code className="font-mono">AccordionPreset</code>{" "}
          — Tự động lặp qua array, không cần viết lại JSX
          cho từng thẻ Item.
        </p>
      </div>
    </div>

    {/* ── Story 2: Micro wins ── */}
    <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 shrink-0 rounded-full bg-blue-500/10 p-1.5 text-blue-600">
          <BoxIcon className="size-4" aria-hidden="true" />
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Story 2 · Dùng Micro
          </p>
          <h3 className="mt-0.5 text-sm font-semibold text-foreground">
            Tuỳ biến Trigger / Form phức tạp
          </h3>
        </div>
      </div>

      <p className="text-xs text-muted-foreground leading-relaxed">
        Trigger cần hiển thị Icon hoặc Badge. Nội dung bên
        trong là một Form phức tạp (chứ không phải text đơn
        thuần). Macro không thể làm được việc này.
      </p>

      <div className="rounded-lg bg-muted/50 p-3">
        <Accordion className="w-full">
          <AccordionItem value="settings">
            <AccordionTrigger className="gap-3">
              <SlidersHorizontalIcon className="size-4 text-primary" />
              <span className="flex-1 text-left">
                Advanced Settings
              </span>
              <span className="mr-2 rounded bg-primary/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-primary">
                New
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex items-center gap-3 rounded border border-border p-3 text-xs text-muted-foreground">
                <span>
                  Nội dung tuỳ biến hoàn toàn, ví dụ: Form,
                  Toggle, v.v.
                </span>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="rounded-md border border-border border-blue-500/20 bg-blue-500/5 px-3 py-2">
        <p className="text-xs font-medium text-blue-700 dark:text-blue-400">
          ✅ Dùng{" "}
          <code className="font-mono">Accordion</code>{" "}
          (Micro) — Toàn quyền kiểm soát cấu trúc HTML của
          Trigger và Content.
        </p>
      </div>
    </div>
  </div>`}
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* ── Story 1: Macro wins ── */}
          <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 shrink-0 rounded-full bg-green-500/10 p-1.5 text-green-600">
                <SettingsIcon className="size-4" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Story 1 · Dùng Macro
                </p>
                <h3 className="mt-0.5 text-sm font-semibold text-foreground">
                  Render danh sách FAQ từ API
                </h3>
              </div>
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed">
              Bạn nhận được một mảng dữ liệu FAQ (hỏi đáp) từ server. Nội dung
              đơn giản chỉ là text. Dùng Macro để tiết kiệm code.
            </p>

            <div className="rounded-lg bg-muted/50 p-3">
              <AccordionPreset
                className="w-full"
                items={[
                  {
                    value: "Is it accessible?",
                    title: "Is it accessible?",
                    content: "Yes. It adheres to the WAI-ARIA design pattern." },
                  {
                    value: "Is it styled?",
                    title: "Is it styled?",
                    content:
                      "Yes. It comes with default styles that match the other components' aesthetic." },
                ]}
              />
            </div>

            <div className="rounded-md border border-border border-green-500/20 bg-green-500/5 px-3 py-2">
              <p className="text-xs font-medium text-green-700 dark:text-green-400">
                ✅ Dùng <code className="font-mono">AccordionPreset</code> — Tự
                động lặp qua array, không cần viết lại JSX cho từng thẻ Item.
              </p>
            </div>
          </div>

          {/* ── Story 2: Micro wins ── */}
          <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 shrink-0 rounded-full bg-blue-500/10 p-1.5 text-blue-600">
                <BoxIcon className="size-4" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Story 2 · Dùng Micro
                </p>
                <h3 className="mt-0.5 text-sm font-semibold text-foreground">
                  Tuỳ biến Trigger / Form phức tạp
                </h3>
              </div>
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed">
              Trigger cần hiển thị Icon hoặc Badge. Nội dung bên trong là một
              Form phức tạp (chứ không phải text đơn thuần). Macro không thể làm
              được việc này.
            </p>

            <div className="rounded-lg bg-muted/50 p-3">
              <Accordion className="w-full">
                <AccordionItem value="settings">
                  <AccordionTrigger className="gap-3">
                    <SlidersHorizontalIcon className="size-4 text-primary" />
                    <span className="flex-1 text-left">Advanced Settings</span>
                    <span className="mr-2 rounded bg-primary/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-primary">
                      New
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex items-center gap-3 rounded border border-border p-3 text-xs text-muted-foreground">
                      <span>
                        Nội dung tuỳ biến hoàn toàn, ví dụ: Form, Toggle, v.v.
                      </span>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="rounded-md border border-border border-blue-500/20 bg-blue-500/5 px-3 py-2">
              <p className="text-xs font-medium text-blue-700 dark:text-blue-400">
                ✅ Dùng <code className="font-mono">Accordion</code> (Micro) —
                Toàn quyền kiểm soát cấu trúc HTML của Trigger và Content.
              </p>
            </div>
          </div>
        </div>
      </ExampleSection>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 3: Entry point (export default)
// ──────────────────────────────────────────────────────────
export default function AccordionShowcase() {
  return (
    <Showcase
      title="Accordion"
      description="Tập hợp các tiêu đề có thể tương tác xếp chồng lên nhau theo chiều dọc, mỗi tiêu đề sẽ mở ra một phần nội dung."
      generalConcept={
        <ShowcaseDocs>
          <DocsP>
            Dùng để gom nhóm các khối nội dung lớn nhằm tiết kiệm không gian
            hiển thị (ví dụ: FAQ, Advanced Settings). Không nên dùng Accordion
            nếu nội dung bên trong quá quan trọng và cần user phải nhìn thấy
            ngay lập tức.
          </DocsP>
        </ShowcaseDocs>
      }
      tabs={[
        { label: "Micro (Primitive)", content: <AccordionMicroShowcase /> },
        { label: "Macro (Preset)", content: <AccordionMacroShowcase /> },
      ]}
    />
  );
}
