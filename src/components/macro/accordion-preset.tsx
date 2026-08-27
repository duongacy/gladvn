import * as React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "../../components/micro/accordion";
import { cn } from "../../lib/utils";

export interface AccordionPresetItem {
  value: string;
  title: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}

export type AccordionPresetProps = React.ComponentProps<typeof Accordion> & {
  items: AccordionPresetItem[];
};

const AccordionPreset = React.forwardRef<
  React.ComponentRef<typeof Accordion>,
  AccordionPresetProps
>(({ items, className, ...accordionProps }, ref) => {
  return (
    <Accordion ref={ref} className={cn("divide-y divide-border", className)} {...accordionProps}>
      {items.map((item) => (
        <AccordionItem
          key={item.value}
          value={item.value}
          disabled={item.disabled}
        >
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
});
AccordionPreset.displayName = "AccordionPreset";

export { AccordionPreset };
