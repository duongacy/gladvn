import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";
import { AccordionPreset } from "@/components/macro/accordion-preset";

export default function MacroAccordionShowcase() {
  return (
    <div className="space-y-10">
      <SectionHeader
        title="Accordion (Macro)"
        description="A preset component that renders an entire accordion from a flat array of items."
      />

      <ExampleGrid columns={1}>
        <ExampleSection label="Standard" description="Basic accordion.">
          <div className="w-full max-w-lg">
            <AccordionPreset
              items={[
                { value: "item-1", title: "Is it accessible?", content: "Yes. It adheres to the WAI-ARIA design pattern." },
                { value: "item-2", title: "Is it styled?", content: "Yes. It comes with default styles that matches the other components' aesthetic." },
                { value: "item-3", title: "Is it animated?", content: "Yes. It's animated by default, but you can disable it if you prefer." },
              ]}
            />
          </div>
        </ExampleSection>

        <ExampleSection label="Multiple Expansion" description="Allowing multiple items to be open at the same time.">
          <div className="w-full max-w-lg">
            <AccordionPreset
              multiple
              items={[
                { value: "item-1", title: "What is your return policy?", content: "You can return any item within 30 days of receipt." },
                { value: "item-2", title: "How long does shipping take?", content: "Standard shipping takes 3-5 business days." },
              ]}
            />
          </div>
        </ExampleSection>

        <ExampleSection label="Complex Content" description="Rendering React nodes inside accordion content.">
          <div className="w-full max-w-lg">
            <AccordionPreset
              items={[
                { 
                  value: "item-1", 
                  title: "User Profile Settings", 
                  content: (
                    <div className="flex flex-col gap-2">
                      <p>Update your personal information and preferences.</p>
                      <button className="w-fit rounded bg-primary px-3 py-1 text-sm text-primary-foreground">Edit Profile</button>
                    </div>
                  ) 
                },
              ]}
            />
          </div>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
