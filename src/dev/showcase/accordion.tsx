import { useState } from "react";

import { BoxIcon, SettingsIcon, SlidersHorizontalIcon } from "lucide-react";

import { AccordionPreset } from "../../components/macro/accordion-preset";
import { useI18n } from "../components/dev-context";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "../../components/micro/accordion";
import {
  DocsP,
  ExampleGrid,
  Showcase,
  ShowcaseDocs,
  ShowcaseExample
} from "../../dev/components/showcase";

const faqItems = [
  {
    q: "Does it support Accessibility (a11y)?",
    a: "Có chứ. Component tuân thủ chuẩn WAI-ARIA. Bàn phím hay screen reader cân hết." },
  {
    q: "Is it styled?",
    a: "Có nha. Style mặc định bao đẹp, match với các component khác. Override vô tư qua CSS variable." },
  {
    q: "Is it animated?",
    a: "Đầy đủ. Mở ra đóng lại mượt mà, nhưng nếu không thích thì tắt cũng dễ òm." },
  {
    q: "Có lồng nhau (nest) được không?",
    a: "Thoải mái luôn. Bro lồng bao nhiêu cái accordion vào nhau tuỳ thích." },
];

const presetItems = [
  {
    value: "item-1",
    title: "Does it support Accessibility (a11y)?",
    content:
      "Có chứ. Component tuân thủ chuẩn WAI-ARIA. Bàn phím hay screen reader cân hết." },
  {
    value: "item-2",
    title: "Is it styled?",
    content:
      "Có nha. Style mặc định bao đẹp, match với các component khác. Override vô tư qua CSS variable." },
  {
    value: "item-3",
    title: "Is it animated?",
    content: "Đầy đủ. Mở ra đóng lại mượt mà, nhưng nếu không thích thì tắt cũng dễ òm." },
];

function AccordionMacroShowcase() {
  const t = useI18n();
  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample title={"Standard"} description={"Accordion mở đơn cơ bản."} code={`<AccordionPreset
    className="w-full"
    defaultValue={["item-1"]}
    items={[
      {
        value: "item-1",
        title: "Does it support Accessibility (a11y)?",
        content:
          "Yes it does. The component complies with WAI-ARIA standards. Bàn phím hay screen reader cân hết." },
      {
        value: "item-2",
        title: "Is it styled?",
        content:
          "Yes. The default style is beautiful and matches other components." },
      {
        value: "item-3",
        title: "Is it animated?",
        content:
          "Fully animated. Smooth opening and closing." },
    ]}
  />`} preview={
                      <>
              <AccordionPreset
                          className="w-full"
                          defaultValue={["item-1"]}
                          items={[
                            {
                              value: "item-1",
                              title: "Does it support Accessibility (a11y)?",
                              content:
                                "Có chứ. Component tuân thủ chuẩn WAI-ARIA. Bàn phím hay screen reader cân hết." },
                            {
                              value: "item-2",
                              title: "Is it styled?",
                              content:
                                "Yes. The default style is beautiful and matches other components." },
                            {
                              value: "item-3",
                              title: "Is it animated?",
                              content:
                                "Fully animated. Smooth opening and closing." },
                          ]}
                        />
                      </>
                    } />

        <ShowcaseExample title={"Multiple Expansion"} description={"Cho phép mở nhiều mục cùng một lúc."} code={`<AccordionPreset
    className="w-full"
    multiple
    defaultValue={["item-1", "item-2"]}
    items={[
      {
        value: "item-1",
        title: "Does it support Accessibility (a11y)?",
        content:
          "Yes it does. The component complies with WAI-ARIA standards. Bàn phím hay screen reader cân hết." },
      {
        value: "item-2",
        title: "Is it styled?",
        content:
          "Yes. The default style is beautiful and matches other components." },
      {
        value: "item-3",
        title: "Is it animated?",
        content:
          "Fully animated. Smooth opening and closing." },
    ]}
  />`} preview={
                      <>
              <AccordionPreset
                          className="w-full"
                          multiple
                          defaultValue={["item-1", "item-2"]}
                          items={[
                            {
                              value: "item-1",
                              title: "Does it support Accessibility (a11y)?",
                              content:
                                "Có chứ. Component tuân thủ chuẩn WAI-ARIA. Bàn phím hay screen reader cân hết." },
                            {
                              value: "item-2",
                              title: "Is it styled?",
                              content:
                                "Yes. The default style is beautiful and matches other components." },
                            {
                              value: "item-3",
                              title: "Is it animated?",
                              content:
                                "Fully animated. Smooth opening and closing." },
                          ]}
                        />
                      </>
                    } />
      </ExampleGrid>

      <ExampleGrid>

        <ShowcaseExample title={"Disabled"} description={"Individual items can be disabled while other items remain interactive."} code={`<AccordionPreset
    className="w-full"
    items={[
      {
        value: "enabled-1",
        title: "Tính năng có sẵn",
        content:
          "This feature is available and can be expanded normally." },
      {
        value: "disabled-1",
        title: "Tính năng Premium (Đã khoá)",
        content:
          "Nội dung này yêu cầu gói tài khoản Premium.",
        disabled: true },
      {
        value: "enabled-2",
        title: "Tính năng khác",
        content:
          "This is another available feature you can interact with freely." },
    ]}
  />`} preview={
                      <>
              <AccordionPreset
                          className="w-full"
                          items={[
                            {
                              value: "enabled-1",
                              title: "Tính năng có sẵn",
                              content:
                                "This feature is available and can be expanded normally." },
                            {
                              value: "disabled-1",
                              title: "Tính năng Premium (Đã khoá)",
                              content: "Nội dung này yêu cầu gói tài khoản Premium.",
                              disabled: true },
                            {
                              value: "enabled-2",
                              title: "Tính năng khác",
                              content:
                                "This is another available feature you can interact with freely." },
                          ]}
                        />
                      </>
                    } />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample title={"Nội Dung Phức Tạp"} description={"Render các React Node bên trong nội dung."} code={`<AccordionPreset
    className="w-full"
    items={[
      {
        value: "profile",
        title: "Cài đặt Hồ sơ Người dùng",
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
  />`} preview={
                      <>
              <AccordionPreset
                          className="w-full"
                          items={[
                            {
                              value: "profile",
                              title: "Cài đặt Hồ sơ Người dùng",
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
                      </>
                    } />

        <ShowcaseExample title={"Nested Accordions"} description={"Nội dung bên trong có thể chứa một Accordion khác."} code={`<AccordionPreset
    className="w-full"
    items={[
      {
        value: "getting-started",
        title: "Bắt đầu nhanh",
        content: (
          <AccordionPreset
            className="w-full"
            items={[
              {
                value: "installation",
                title: "Cài đặt",
                content:
                  "Run npm install to add the component to your project." },
            ]}
          />
        ) },
      {
        value: "advanced",
        title: "Sử dụng nâng cao",
        content: (
          <AccordionPreset
            className="w-full"
            items={[
              {
                value: "controlled",
                title: "Chế độ Controlled",
                content:
                  "Sử dụng props value and onValueChange để kiểm soát các mục đang mở." },
            ]}
          />
        ) },
    ]}
  />`} preview={
                      <>
              <AccordionPreset
                          className="w-full"
                          items={[
                            {
                              value: "getting-started",
                              title: "Bắt đầu nhanh",
                              content: (
                                <AccordionPreset
                                  className="w-full"
                                  items={[
                                    {
                                      value: "installation",
                                      title: "Cài đặt",
                                      content:
                                        "Run npm install to add the component to your project." },
                                  ]}
                                />
                              ) },
                            {
                              value: "advanced",
                              title: "Sử dụng nâng cao",
                              content: (
                                <AccordionPreset
                                  className="w-full"
                                  items={[
                                    {
                                      value: "controlled",
                                      title: "Chế độ Controlled",
                                      content:
                                        "Sử dụng props value và onValueChange để kiểm soát các mục đang mở." },
                                  ]}
                                />
                              ) },
                          ]}
                        />
                      </>
                    } />
      </ExampleGrid>
    </div>
  );
}

function AccordionMicroShowcase() {
  const t = useI18n();
  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample title={"Single Expand"} description={"Only one item is allowed open at a time (default)."} code={`<Accordion
    className="w-full"
    defaultValue={["Does it support Accessibility (a11y)?"]}
  >
    <AccordionItem value="Does it support Accessibility (a11y)?">
      <AccordionTrigger>Is it accessible?</AccordionTrigger>
      <AccordionContent>
        Yes it does. The component complies with WAI-ARIA standards.
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
  </Accordion>`} preview={
                      <>
              <Accordion className="w-full" defaultValue={["Does it support Accessibility (a11y)?"]}>
                          <AccordionItem value={"Does it support Accessibility (a11y)?"}>
                            <AccordionTrigger>Is it accessible?</AccordionTrigger>
                            <AccordionContent>
                              Yes it does. The component complies with WAI-ARIA standards.
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
                              Fully animated. Smooth opening and closing.
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </>
                    } />

        <ShowcaseExample title={"Multiple Expand"} description={"Allows multiple items to be open at the same time."} code={`<Accordion
    className="w-full"
    multiple
    defaultValue={["Does it support Accessibility (a11y)?", "Is it styled?"]}
  >
    <AccordionItem value="Does it support Accessibility (a11y)?">
      <AccordionTrigger>Is it accessible?</AccordionTrigger>
      <AccordionContent>
        Yes it does. The component complies with WAI-ARIA standards.
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
  </Accordion>`} preview={
                      <>
              <Accordion
                          className="w-full"
                          multiple
                          defaultValue={["Does it support Accessibility (a11y)?", "Is it styled?"]}
                        >
                          <AccordionItem value={"Does it support Accessibility (a11y)?"}>
                            <AccordionTrigger>Is it accessible?</AccordionTrigger>
                            <AccordionContent>
                              Yes it does. The component complies with WAI-ARIA standards.
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
                              Fully animated. Smooth opening and closing.
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </>
                    } />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample title={"Disabled"} description={"Individual items can be disabled while other items remain interactive."} code={`<Accordion className="w-full">
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
  </Accordion>`} preview={
                      <>
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
                      </>
                    } />

        <ShowcaseExample title={"Nested Accordions"} description={"Nội dung bên trong có thể chứa một Accordion khác để tạo cấu trúc nhiều cấp."} code={`<Accordion className="w-full max-w-lg">
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
      <AccordionTrigger>Sử dụng nâng cao</AccordionTrigger>
      <AccordionContent>
        <Accordion>
          <AccordionItem value="controlled">
            <AccordionTrigger>
              Chế độ Controlled
            </AccordionTrigger>
            <AccordionContent>
              Use the value and onValueChange props to
              control which các mục đang mở.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="animation">
            <AccordionTrigger>
              Tuỳ chỉnh Animation
            </AccordionTrigger>
            <AccordionContent>
              Override transition duration and easing via
              className.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </AccordionContent>
    </AccordionItem>
  </Accordion>`} preview={
                      <>
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
                            <AccordionTrigger>Sử dụng nâng cao</AccordionTrigger>
                            <AccordionContent>
                              <Accordion>
                                <AccordionItem value="controlled">
                                  <AccordionTrigger>Chế độ Controlled</AccordionTrigger>
                                  <AccordionContent>
                                    Sử dụng props value và onValueChange để kiểm soát
                                    các mục đang mở.
                                  </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="animation">
                                  <AccordionTrigger>Tuỳ chỉnh Animation</AccordionTrigger>
                                  <AccordionContent>
                                    Thay đổi thời gian chuyển đổi và easing thông qua className.
                                  </AccordionContent>
                                </AccordionItem>
                              </Accordion>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </>
                    } />
      </ExampleGrid>

      <ShowcaseExample title={"Complete FAQ"} description={"Example of a complete FAQ."} code={`<Accordion className="w-full max-w-lg">
    <AccordionItem value="Does it support Accessibility (a11y)?">
      <AccordionTrigger>Is it accessible?</AccordionTrigger>
      <AccordionContent>
        Yes it does. The component complies with WAI-ARIA standards.
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
  </Accordion>`} preview={
                  <>
          <Accordion className="w-full max-w-lg">
                    <AccordionItem value={"Does it support Accessibility (a11y)?"}>
                      <AccordionTrigger>Is it accessible?</AccordionTrigger>
                      <AccordionContent>
                        Yes it does. The component complies with WAI-ARIA standards.
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
                        Fully animated. Smooth opening and closing.
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
                  </>
                } />

      <ShowcaseExample title={"🧭 So sánh Use Case"} description={"Real-life scenarios help you decide whether to use Micro (Accordion) or Macro (AccordionPreset)."} code={`<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
            Story 1 · Use Macro
          </p>
          <h3 className="mt-0.5 text-sm font-semibold text-foreground">
            Render FAQ list from API
          </h3>
        </div>
      </div>

      <p className="text-xs text-muted-foreground leading-relaxed">
        Bạn nhận được một mảng dữ liệu FAQ (hỏi đáp) from
        server. Nội dung đơn giản chỉ là text. Dùng Macro để
        tiết kiệm code.
      </p>

      <div className="rounded-lg bg-muted/50 p-3">
        <AccordionPreset
          className="w-full"
          items={[
            {
              value: "Does it support Accessibility (a11y)?",
              title: "Does it support Accessibility (a11y)?",
              content:
                "Yes it does. The component complies with WAI-ARIA standards." },
            {
              value: "Is it styled?",
              title: "Is it styled?",
              content:
                "Yes. The default style is beautiful and matches other components." },
          ]}
        />
      </div>

      <div className="rounded-md border border-green-500/20 bg-green-500/5 px-3 py-2">
        <p className="text-xs font-medium text-green-700 dark:text-green-400">
          ✅ Dùng{" "}
          <code className="font-mono">AccordionPreset</code>{" "}
          — Tự động lặp qua array, không cần viết lại JSX
          cho fromng thẻ Item.
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
            Story 2 · Use Micro
          </p>
          <h3 className="mt-0.5 text-sm font-semibold text-foreground">
            Customize Trigger / Complex Form
          </h3>
        </div>
      </div>

      <p className="text-xs text-muted-foreground leading-relaxed">
        Trigger cần hiển thị Icon or Badge. Nội dung bên
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

      <div className="rounded-md border border-blue-500/20 bg-blue-500/5 px-3 py-2">
        <p className="text-xs font-medium text-blue-700 dark:text-blue-400">
          ✅ Dùng{" "}
          <code className="font-mono">Accordion</code>{" "}
          (Micro) — Toàn quyền kiểm soát cấu trúc HTML của
          Trigger and Content.
        </p>
      </div>
    </div>
  </div>`} preview={
                  <>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 shrink-0 rounded-full bg-green-500/10 p-1.5 text-green-600">
                          <SettingsIcon className="size-4" aria-hidden="true" />
                        </span>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                            Story 1 · Use Macro
                          </p>
                          <h3 className="mt-0.5 text-sm font-semibold text-foreground">
                            Render FAQ list from API
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
                              value: "Does it support Accessibility (a11y)?",
                              title: "Does it support Accessibility (a11y)?",
                              content: "Yes it does. The component complies with WAI-ARIA standards." },
                            {
                              value: "Is it styled?",
                              title: "Is it styled?",
                              content:
                                "Yes. The default style is beautiful and matches other components." },
                          ]}
                        />
                      </div>

                      <div className="rounded-md border border-green-500/20 bg-green-500/5 px-3 py-2">
                        <p className="text-xs font-medium text-green-700 dark:text-green-400">
                          ✅ Dùng <code className="font-mono">AccordionPreset</code> — Tự
                          động lặp qua array, không cần viết lại JSX cho từng thẻ Item.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 shrink-0 rounded-full bg-blue-500/10 p-1.5 text-blue-600">
                          <BoxIcon className="size-4" aria-hidden="true" />
                        </span>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                            Story 2 · Use Micro
                          </p>
                          <h3 className="mt-0.5 text-sm font-semibold text-foreground">
                            Customize Trigger / Complex Form
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
                                  Fully customizable content, e.g. Form, Toggle, etc.
                                </span>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>

                      <div className="rounded-md border border-blue-500/20 bg-blue-500/5 px-3 py-2">
                        <p className="text-xs font-medium text-blue-700 dark:text-blue-400">
                          ✅ Dùng <code className="font-mono">Accordion</code> (Micro) —
                          Toàn quyền kiểm soát cấu trúc HTML của Trigger và Content.
                        </p>
                      </div>
                    </div>
                  </div>
                  </>
                } />
    </div>
  );
}

export default function AccordionShowcase() {
  const t = useI18n();
  return (
    <Showcase
      title="Accordion"
      description={"A vertically stacked set of interactive headings that each reveal a section of content."}
      guideline={
        <ShowcaseDocs>
          <DocsP>
            {t("Dùng để gom nhóm các khối nội dung lớn nhằm tiết kiệm không gian\n            hiển thị (ví dụ: FAQ, Cài đặt nâng cao). Không nên dùng Accordion\n            nếu nội dung bên trong quá quan trọng và cần user phải nhìn thấy\n            ngay lập tức.", "Dùng để gom nhóm các khối nội dung lớn nhằm tiết kiệm không gian\n            hiển thị (ví dụ: FAQ, Cài đặt nâng cao). Không nên dùng Accordion\n            nếu nội dung bên trong quá quan trọng và cần user phải nhìn thấy\n            ngay lập tức.")}
          </DocsP>
        </ShowcaseDocs>
      }
      micro={{ content: <AccordionMicroShowcase /> }}
      macro={{ content: <AccordionMacroShowcase /> }}
    />
  );
}
