import { useState } from "react";

import { BoxIcon, SettingsIcon, SlidersHorizontalIcon } from "lucide-react";

import { AccordionPreset } from "../../components/macro/accordion-preset";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/micro/accordion";
import {
  DocsP,
  ExampleGrid,
  Showcase,
  ShowcaseDocs,
  ShowcaseExample,
} from "../../dev/components/showcase";
import { useI18n } from "../components/dev-context";

const faqItems = [
  {
    q: "Does it support Accessibility (a11y)?",
    a: "Yes it does. The component complies with WAI-ARIA standards. Keyboard navigation and screen readers are fully supported.",
  },
  {
    q: "Is it styled?",
    a: "Yes. The default style is beautiful and matches other components' aesthetic. You can override every token via CSS variables.",
  },
  {
    q: "Is it animated?",
    a: "Fully animated. Smooth opening and closing.",
  },
  {
    q: "Có lồng nhau (nest) được không?",
    a: "Yes. You can nest accordion components inside each other to create multi-level collapsible sections.",
  },
];

const presetItems = [
  {
    value: "item-1",
    title: "Does it support Accessibility (a11y)?",
    content:
      "Yes it does. The component complies with WAI-ARIA standards. Keyboard navigation and screen readers are fully supported.",
  },
  {
    value: "item-2",
    title: "Is it styled?",
    content:
      "Yes. The default style is beautiful and matches other components' aesthetic. You can override every token via CSS variables.",
  },
  {
    value: "item-3",
    title: "Is it animated?",
    content: "Fully animated. Smooth opening and closing.",
  },
];

function AccordionMacroShowcase() {
  const t = useI18n();
  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample
          title={t("Cơ bản", "Standard")}
          description={t(
            "Accordion mở đơn cơ bản.",
            "Basic single expansion accordion.",
          )}
          code={`<AccordionPreset
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
  />`}
          preview={
            <>
              <AccordionPreset
                className="w-full"
                defaultValue={["item-1"]}
                items={[
                  {
                    value: "item-1",
                    title: "Does it support Accessibility (a11y)?",
                    content:
                      "Yes it does. The component complies with WAI-ARIA standards. Keyboard navigation and screen readers are fully supported.",
                  },
                  {
                    value: "item-2",
                    title: "Is it styled?",
                    content:
                      "Yes. The default style is beautiful and matches other components.",
                  },
                  {
                    value: "item-3",
                    title: "Is it animated?",
                    content: "Fully animated. Smooth opening and closing.",
                  },
                ]}
              />
            </>
          }
        />

        <ShowcaseExample
          title={t("Mở nhiều mục", "Multiple Expansion")}
          description={t(
            "Cho phép mở nhiều mục cùng một lúc.",
            "Allows multiple items to be open at the same time.",
          )}
          code={`<AccordionPreset
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
  />`}
          preview={
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
                      "Yes it does. The component complies with WAI-ARIA standards. Keyboard navigation and screen readers are fully supported.",
                  },
                  {
                    value: "item-2",
                    title: "Is it styled?",
                    content:
                      "Yes. The default style is beautiful and matches other components.",
                  },
                  {
                    value: "item-3",
                    title: "Is it animated?",
                    content: "Fully animated. Smooth opening and closing.",
                  },
                ]}
              />
            </>
          }
        />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample
          title={t("Vô hiệu hoá", "Disabled")}
          description={t(
            "Các mục có thể bị vô hiệu hóa độc lập trong khi các mục khác vẫn hoạt động.",
            "Individual items can be disabled while other items remain interactive.",
          )}
          code={`<AccordionPreset
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
          preview={
            <>
              <AccordionPreset
                className="w-full"
                items={[
                  {
                    value: "enabled-1",
                    title: "Available Feature",
                    content:
                      "This feature is available and can be expanded normally.",
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
                    content:
                      "This is another available feature you can interact with freely.",
                  },
                ]}
              />
            </>
          }
        />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample
          title={t("Nội dung phức tạp", "Complex Content")}
          description={t(
            "Render các React Node bên trong nội dung.",
            "Render React Nodes inside content.",
          )}
          code={`<AccordionPreset
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
          preview={
            <>
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
                    ),
                  },
                ]}
              />
            </>
          }
        />

        <ShowcaseExample
          title={t("Accordion lồng nhau", "Nested Accordions")}
          description={t(
            "Nội dung bên trong có thể chứa một Accordion khác.",
            "Inner content can contain another Accordion.",
          )}
          code={`<AccordionPreset
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
          preview={
            <>
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
                              "Run npm install to add the component to your project.",
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
                        className="w-full"
                        items={[
                          {
                            value: "controlled",
                            title: "Controlled Mode",
                            content:
                              "Use the value and onValueChange props to control which items are open.",
                          },
                        ]}
                      />
                    ),
                  },
                ]}
              />
            </>
          }
        />
      </ExampleGrid>
    </div>
  );
}

function AccordionMicroShowcase() {
  const t = useI18n();
  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample
          title={t("Mở đơn", "Single Expand")}
          description={t(
            "Chỉ một mục được phép mở tại một thời điểm (mặc định).",
            "Only one item is allowed open at a time (default).",
          )}
          code={`<Accordion
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
  </Accordion>`}
          preview={
            <>
              <Accordion
                className="w-full"
                defaultValue={["Does it support Accessibility (a11y)?"]}
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
          }
        />

        <ShowcaseExample
          title={t("Mở nhiều mục", "Multiple Expand")}
          description={t(
            "Cho phép mở nhiều mục cùng một lúc.",
            "Allows multiple items to be open at the same time.",
          )}
          code={`<Accordion
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
  </Accordion>`}
          preview={
            <>
              <Accordion
                className="w-full"
                multiple
                defaultValue={[
                  "Does it support Accessibility (a11y)?",
                  "Is it styled?",
                ]}
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
          }
        />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample
          title={t("Vô hiệu hoá", "Disabled")}
          description={t(
            "Các mục có thể bị vô hiệu hóa độc lập trong khi các mục khác vẫn hoạt động.",
            "Individual items can be disabled while other items remain interactive.",
          )}
          code={`<Accordion className="w-full">
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
          preview={
            <>
              <Accordion className="w-full">
                <AccordionItem value="enabled-1">
                  <AccordionTrigger>Available Feature</AccordionTrigger>
                  <AccordionContent>
                    This feature is available and can be expanded normally.
                    Click to see the details.
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
                    This is another available feature you can interact with
                    freely.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </>
          }
        />

        <ShowcaseExample
          title={t("Accordion lồng nhau", "Nested Accordions")}
          description={t(
            "Nội dung bên trong có thể chứa một Accordion khác để tạo cấu trúc nhiều cấp.",
            "Inner content can contain another Accordion to create multi-level structures.",
          )}
          code={`<Accordion className="w-full max-w-lg">
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
              Use the value and onValueChange props to control which items are open.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="animation">
            <AccordionTrigger>
              Animation Customization
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
          preview={
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
                          Import and wrap your content with the Accordion
                          component.
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
                          Sử dụng props value và onValueChange để kiểm soát các
                          mục đang mở.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="animation">
                        <AccordionTrigger>
                          Animation Customization
                        </AccordionTrigger>
                        <AccordionContent>
                          Override transition duration and easing via className.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </>
          }
        />
      </ExampleGrid>
    </div>
  );
}

export default function AccordionShowcase() {
  const t = useI18n();
  return (
    <Showcase
      title="Accordion"
      description={
        "A vertically stacked set of interactive headings that each reveal a section of content."
      }
      guideline={
        <ShowcaseDocs>
          <DocsP>
            {t(
              "Dùng để gom nhóm các khối nội dung lớn nhằm tiết kiệm không gian hiển thị (ví dụ: FAQ, Installation nâng cao). Không nên dùng Accordion nếu nội dung bên trong quá quan trọng và cần user phải nhìn thấy ngay lập tức.",
              "Use to group large blocks of content to save display space (e.g. FAQ, advanced installation). Do not use Accordion if the content inside is too important and needs to be seen by the user immediately.",
            )}
          </DocsP>
        </ShowcaseDocs>
      }
      micro={{ content: <AccordionMicroShowcase /> }}
      macro={{ content: <AccordionMacroShowcase /> }}
    />
  );
}
