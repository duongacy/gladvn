import * as React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export interface AccordionPresetItem {
  id: string;
  title: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface AccordionPresetProps
  extends React.ComponentProps<typeof Accordion> {
  items: AccordionPresetItem[];
}

export function AccordionPreset({ items, ...props }: AccordionPresetProps) {
  return (
    <Accordion {...props}>
      {items.map((item) => (
        <AccordionItem key={item.id} value={item.id} disabled={item.disabled}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
