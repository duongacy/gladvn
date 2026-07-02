import * as React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/micro/accordion";

export interface AccordionPresetItem {
  value: string;
  title: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface AccordionPresetProps
  extends React.ComponentProps<typeof Accordion> {
  items: AccordionPresetItem[];
}

const AccordionPreset = React.forwardRef<
  React.ElementRef<typeof Accordion>,
  AccordionPresetProps
>(({ items, ...accordionProps }, ref) => {
  return (
    <Accordion ref={ref} {...accordionProps}>
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value} disabled={item.disabled}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
});
AccordionPreset.displayName = "AccordionPreset";

export { AccordionPreset };
