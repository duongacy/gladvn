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

function useAccordionExamples() {
  const t = useI18n();
  return React.useMemo(() => [
    {
      title: t("Mở đơn", "Single Expand"),
      description: t(
        "Chỉ một mục được phép mở tại một thời điểm (mặc định).",
        "Only one item is allowed open at a time (default)."
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
          items={[
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
          ]}
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
        </Accordion>
      )
    },
    {
      title: t("Mở nhiều mục", "Multiple Expand"),
      description: t(
        "Cho phép nhiều mục được mở cùng một lúc.",
        "Allows multiple items to be open at the same time."
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
          items={[
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
          ]}
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
        </Accordion>
      )
    },
    {
      title: t("Vô hiệu hoá", "Disabled"),
      description: t(
        "Các mục có thể bị vô hiệu hóa độc lập trong khi các mục khác vẫn hoạt động.",
        "Individual items can be disabled while other items remain interactive."
      ),
      macroCode: `<AccordionPreset
    className="divide-y divide-border"
    items={[
      {
        value: "enabled-1",
        title: "Available Feature",
        content: "This feature is available and can be expanded normally."
      },
      {
        value: "disabled-1",
        title: "Premium Feature (Locked)",
        content: "This content is hidden behind a premium plan.",
        disabled: true
      },
      {
        value: "enabled-2",
        title: "Another Feature",
        content: "This is another available feature you can interact with freely."
      },
    ]}
  />`,
      macroPreview: (
        <AccordionPreset
          className="divide-y divide-border"
          items={[
            {
              value: "enabled-1",
              title: "Available Feature",
              content: "This feature is available and can be expanded normally.",
            },
            {
              value: "disabled-1",
              title: "Premium Feature (Locked)",
              content: "This content is hidden behind a premium plan.",
              disabled: true,
            },
            {
              value: "enabled-2",
              title: "Another Feature",
              content: "This is another available feature you can interact with freely.",
            },
          ]}
        />
      ),
      microCode: `<Accordion className="divide-y divide-border">
    <AccordionItem value="enabled-1">
      <AccordionTrigger>Available Feature</AccordionTrigger>
      <AccordionContent>
        This feature is available and can be expanded normally.
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
  </Accordion>`,
      microPreview: (
        <Accordion className="divide-y divide-border">
          <AccordionItem value="enabled-1">
            <AccordionTrigger>Available Feature</AccordionTrigger>
            <AccordionContent>
              This feature is available and can be expanded normally.
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
      )
    },
    {
      title: t("Nội dung phức tạp", "Complex Content"),
      description: t(
        "Render các React Node bên trong nội dung.",
        "Render React Nodes inside content."
      ),
      macroCode: `<AccordionPreset
    className="divide-y divide-border"
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
  />`,
      macroPreview: (
        <AccordionPreset
          className="divide-y divide-border"
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
              ),
            },
          ]}
        />
      ),
      // No micro counterpart intentionally to test asymmetric cases or because Macro is opinionated
    },
    {
      title: t("Accordion lồng nhau", "Nested Accordions"),
      description: t(
        "Nội dung bên trong có thể chứa một Accordion khác để tạo cấu trúc nhiều cấp.",
        "Inner content can contain another Accordion to create multi-level structures."
      ),
      macroCode: `<AccordionPreset
    className="divide-y divide-border"
    items={[
      {
        value: "getting-started",
        title: "Getting Started",
        content: (
          <AccordionPreset
            className="divide-y divide-border"
            items={[
              {
                value: "installation",
                title: "Installation",
                content: "Run npm install to add the component to your project."
              },
            ]}
          />
        )
      },
      {
        value: "advanced",
        title: "Advanced Usage",
        content: (
          <AccordionPreset
            className="divide-y divide-border"
            items={[
              {
                value: "controlled",
                title: "Controlled Mode",
                content: "Use the value and onValueChange props to control which items are open."
              },
            ]}
          />
        )
      },
    ]}
  />`,
      macroPreview: (
        <AccordionPreset
          className="divide-y divide-border"
          items={[
            {
              value: "getting-started",
              title: "Getting Started",
              content: (
                <AccordionPreset
                  className="divide-y divide-border"
                  items={[
                    {
                      value: "installation",
                      title: "Installation",
                      content: "Run npm install to add the component to your project.",
                    },
                  ]}
                />
              ),
            },
            {
              value: "advanced",
              title: "Advanced Usage",
              content: (
                <AccordionPreset
                  className="divide-y divide-border"
                  items={[
                    {
                      value: "controlled",
                      title: "Controlled Mode",
                      content: "Use the value and onValueChange props to control which items are open.",
                    },
                  ]}
                />
              ),
            },
          ]}
        />
      ),
      microCode: `<Accordion className="divide-y divide-border">
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
              Use the value and onValueChange props to control which items are open.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </AccordionContent>
    </AccordionItem>
  </Accordion>`,
      microPreview: (
        <Accordion className="divide-y divide-border">
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
                    Use the value and onValueChange props to control which items are open.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )
    }
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
