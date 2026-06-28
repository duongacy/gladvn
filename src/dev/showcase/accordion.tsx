import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../index";
import { SectionHeader, ExampleSection, ExampleGrid } from "../components/showcase";

const faqItems = [
  {
    q: "Is it accessible?",
    a: "Yes. It adheres to the WAI-ARIA design pattern. Keyboard navigation and screen readers are fully supported.",
  },
  {
    q: "Is it styled?",
    a: "Yes. It comes with default styles that match the other components' aesthetic. You can override every token via CSS variables.",
  },
  {
    q: "Is it animated?",
    a: "Yes. It's animated by default with smooth expand/collapse transitions, but you can disable animation if you prefer.",
  },
  {
    q: "Can I nest accordions?",
    a: "Yes. You can nest accordion components inside each other to create multi-level collapsible sections.",
  },
];

export default function AccordionShowcase() {
  return (
    <div className="space-y-10">
      <SectionHeader
        title="Accordion"
        description="A vertically stacked set of interactive headings that each reveal a section of content."
      />

      <ExampleGrid columns={2}>
        <ExampleSection label="Single Expand" description="Only one item can be open at a time (default).">
          <div className="w-full">
            <Accordion defaultValue={[faqItems[0]!.q]}>
              {faqItems.slice(0, 3).map(({ q, a }) => (
                <AccordionItem key={q} value={q}>
                  <AccordionTrigger>{q}</AccordionTrigger>
                  <AccordionContent>{a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ExampleSection>

        <ExampleSection label="Multiple Expand" description="Multiple items can be open simultaneously.">
          <div className="w-full">
            <Accordion multiple defaultValue={[faqItems[0]!.q, faqItems[1]!.q]}>
              {faqItems.slice(0, 3).map(({ q, a }) => (
                <AccordionItem key={q} value={q}>
                  <AccordionTrigger>{q}</AccordionTrigger>
                  <AccordionContent>{a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ExampleSection>
      </ExampleGrid>

      <ExampleSection label="Disabled Items" description="Individual items can be disabled while others remain interactive.">
        <div className="w-full max-w-lg">
          <Accordion>
            <AccordionItem value="enabled-1">
              <AccordionTrigger>Available Feature</AccordionTrigger>
              <AccordionContent>
                This feature is available and can be expanded normally. Click to see the details.
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
        </div>
      </ExampleSection>

      <ExampleSection label="Full FAQ" description="Complete FAQ section with all items.">
        <div className="w-full max-w-lg">
          <Accordion>
            {faqItems.map(({ q, a }) => (
              <AccordionItem key={q} value={q}>
                <AccordionTrigger>{q}</AccordionTrigger>
                <AccordionContent>{a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </ExampleSection>
    </div>
  );
}
