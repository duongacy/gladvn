import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/micro/accordion";
import { AccordionPreset } from "@/components/macro/accordion-preset";
import { useI18n } from "~app/components/dev-context";
import { 
  ConfigurableShowcase, 
  ShowcaseDocs, 
  DocsP
} from "~app/components/showcase";

const FAQ_ITEMS = [
  {
    value: "faq-1",
    title: "Does it support Accessibility (a11y)?",
    content: "Yes it does. The component complies with WAI-ARIA standards. Keyboard navigation and screen readers are fully supported.",
  },
  {
    value: "faq-2",
    title: "Is it styled?",
    content: "Yes. The default style is beautiful and matches other components' aesthetic. You can override every token via CSS variables.",
  },
  {
    value: "faq-3",
    title: "Is it animated?",
    content: "Fully animated. Smooth opening and closing.",
  },
  {
    value: "faq-4",
    title: "Premium Feature (Locked)",
    content: "This content is hidden behind a premium plan.",
    disabled: true,
  },
];

function useAccordionExamples() {
  const t = useI18n();
  return React.useMemo(() => [

    // 1. Macro mẫu mực + Micro giải phẫu
    {
      title: t("Mở đơn", "Single Expand"),
      description: t(
        "Chỉ một mục được phép mở tại một thời điểm.",
        "Only one item can be open at a time."
      ),
      macroCode: `<AccordionPreset
  className="divide-y divide-border"
  defaultValue={["faq-1"]}
  items={[
    {
      value: "faq-1",
      title: "Does it support Accessibility (a11y)?",
      content: "Yes it does. The component complies with WAI-ARIA standards. Keyboard navigation and screen readers are fully supported."
    },
    {
      value: "faq-2",
      title: "Is it styled?",
      content: "Yes. The default style is beautiful and matches other components' aesthetic. You can override every token via CSS variables."
    },
    {
      value: "faq-3",
      title: "Is it animated?",
      content: "Fully animated. Smooth opening and closing."
    },
  ]}
/>`,
      macroPreview: (
        <AccordionPreset
          className="divide-y divide-border"
          defaultValue={["faq-1"]}
          items={FAQ_ITEMS}
        />
      ),
      microCode: `<Accordion
  className="divide-y divide-border"
  defaultValue={["faq-1"]}
>
  <AccordionItem value="faq-1">
    <AccordionTrigger>Does it support Accessibility (a11y)?</AccordionTrigger>
    <AccordionContent>
      Yes it does. The component complies with WAI-ARIA standards. Keyboard navigation and screen readers are fully supported.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="faq-2">
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent>
      Yes. The default style is beautiful and matches other components' aesthetic. You can override every token via CSS variables.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="faq-3">
    <AccordionTrigger>Is it animated?</AccordionTrigger>
    <AccordionContent>
      Fully animated. Smooth opening and closing.
    </AccordionContent>
  </AccordionItem>
</Accordion>`,
      microPreview: (
        <Accordion
          className="divide-y divide-border"
          defaultValue={["faq-1"]}
        >
          {FAQ_ITEMS.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ),
    },

    // 2. Mở nhiều mục — Macro + Micro
    {
      title: t("Mở nhiều mục", "Multiple Expand"),
      description: t(
        "Nhiều mục được mở cùng một lúc.",
        "Multiple items can be open simultaneously."
      ),
      macroCode: `<AccordionPreset
  className="divide-y divide-border"
  multiple
  defaultValue={["faq-1", "faq-2"]}
  items={[
    {
      value: "faq-1",
      title: "Does it support Accessibility (a11y)?",
      content: "Yes it does. The component complies with WAI-ARIA standards. Keyboard navigation and screen readers are fully supported."
    },
    {
      value: "faq-2",
      title: "Is it styled?",
      content: "Yes. The default style is beautiful and matches other components' aesthetic. You can override every token via CSS variables."
    },
    {
      value: "faq-3",
      title: "Is it animated?",
      content: "Fully animated. Smooth opening and closing."
    },
  ]}
/>`,
      macroPreview: (
        <AccordionPreset
          className="divide-y divide-border"
          multiple
          defaultValue={["faq-1", "faq-2"]}
          items={FAQ_ITEMS}
        />
      ),
      microCode: `<Accordion
  className="divide-y divide-border"
  multiple
  defaultValue={["faq-1", "faq-2"]}
>
  <AccordionItem value="faq-1">
    <AccordionTrigger>Does it support Accessibility (a11y)?</AccordionTrigger>
    <AccordionContent>
      Yes it does. The component complies with WAI-ARIA standards. Keyboard navigation and screen readers are fully supported.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="faq-2">
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent>
      Yes. The default style is beautiful and matches other components' aesthetic. You can override every token via CSS variables.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="faq-3">
    <AccordionTrigger>Is it animated?</AccordionTrigger>
    <AccordionContent>
      Fully animated. Smooth opening and closing.
    </AccordionContent>
  </AccordionItem>
</Accordion>`,
      microPreview: (
        <Accordion
          className="divide-y divide-border"
          multiple
          defaultValue={["faq-1", "faq-2"]}
        >
          {FAQ_ITEMS.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ),
    },

    // 3. Micro-only — className trên AccordionItem cụ thể (Macro gạch ngang)
    {
      title: t("Item nổi bật", "Highlighted Item"),
      description: t(
        "Một AccordionItem có background riêng để nổi bật.",
        "A specific AccordionItem with its own background to stand out."
      ),
      microCode: `<Accordion className="divide-y divide-border">
  <AccordionItem value="featured" className="rounded-lg bg-primary/5 px-2">
    <AccordionTrigger>Featured Plan</AccordionTrigger>
    <AccordionContent>
      This is our most popular plan. Includes all features plus priority support.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="basic">
    <AccordionTrigger>Basic Plan</AccordionTrigger>
    <AccordionContent>
      Entry-level features for individuals and small teams.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="free">
    <AccordionTrigger>Free Tier</AccordionTrigger>
    <AccordionContent>
      Limited usage with community support only.
    </AccordionContent>
  </AccordionItem>
</Accordion>`,
      microPreview: (
        <Accordion className="divide-y divide-border">
          <AccordionItem value="featured" className="rounded-lg bg-primary/5 px-2">
            <AccordionTrigger>Featured Plan</AccordionTrigger>
            <AccordionContent>
              This is our most popular plan. Includes all features plus priority support.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="basic">
            <AccordionTrigger>Basic Plan</AccordionTrigger>
            <AccordionContent>
              Entry-level features for individuals and small teams.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="free">
            <AccordionTrigger>Free Tier</AccordionTrigger>
            <AccordionContent>
              Limited usage with community support only.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ),
    },

    // 4. Micro-only — Content full-bleed p-0 (Macro gạch ngang)
    {
      title: t("Content full-bleed", "Full-bleed Content"),
      description: t(
        "AccordionContent không có padding để chứa danh sách tràn viền.",
        "AccordionContent with no padding for a full-bleed list."
      ),
      microCode: `<Accordion className="divide-y divide-border" defaultValue={["activity"]}>
  <AccordionItem value="activity">
    <AccordionTrigger>Recent Activity</AccordionTrigger>
    <AccordionContent className="p-0">
      <div className="divide-y divide-border">
        <div className="flex items-center justify-between px-6 py-3">
          <span className="text-sm">New signup</span>
          <span className="text-xs text-muted-foreground">2 min ago</span>
        </div>
        <div className="flex items-center justify-between px-6 py-3">
          <span className="text-sm">Plan upgraded</span>
          <span className="text-xs text-muted-foreground">1 hr ago</span>
        </div>
        <div className="flex items-center justify-between px-6 py-3">
          <span className="text-sm">Invoice paid</span>
          <span className="text-xs text-muted-foreground">Yesterday</span>
        </div>
      </div>
    </AccordionContent>
  </AccordionItem>
</Accordion>`,
      microPreview: (
        <Accordion className="divide-y divide-border" defaultValue={["activity"]}>
          <AccordionItem value="activity">
            <AccordionTrigger>Recent Activity</AccordionTrigger>
            <AccordionContent className="p-0">
              <div className="divide-y divide-border">
                <div className="flex items-center justify-between px-6 py-3">
                  <span className="text-sm">New signup</span>
                  <span className="text-xs text-muted-foreground">2 min ago</span>
                </div>
                <div className="flex items-center justify-between px-6 py-3">
                  <span className="text-sm">Plan upgraded</span>
                  <span className="text-xs text-muted-foreground">1 hr ago</span>
                </div>
                <div className="flex items-center justify-between px-6 py-3">
                  <span className="text-sm">Invoice paid</span>
                  <span className="text-xs text-muted-foreground">Yesterday</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ),
    },

  ], [t]);
}

export default function AccordionShowcase() {
  const t = useI18n();
  const examples = useAccordionExamples();
  return (
    <ConfigurableShowcase
      title="Accordion"
      description={t(
        "Một tập hợp các tiêu đề tương tác được xếp chồng theo chiều dọc, mỗi tiêu đề sẽ hiển thị một phần nội dung khi nhấn vào.",
        "A vertically stacked set of interactive headings that each reveal a section of content."
      )}
      guideline={
        <ShowcaseDocs>
          <DocsP>
            {t(
              "Dùng để gom nhóm các khối nội dung lớn nhằm tiết kiệm không gian hiển thị (ví dụ: FAQ, Installation nâng cao). Không nên dùng Accordion nếu nội dung bên trong quá quan trọng và cần user phải nhìn thấy ngay lập tức.",
              "Use to group large blocks of content to save display space (e.g. FAQ, advanced installation). Do not use Accordion if the content inside is too important and needs to be seen by the user immediately."
            )}
          </DocsP>
        </ShowcaseDocs>
      }
      examples={examples}
    />
  );
}
