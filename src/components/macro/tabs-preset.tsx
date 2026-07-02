import * as React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/micro/tabs";

export interface TabsPresetItem {
  value: string;
  title: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface TabsPresetProps extends React.ComponentProps<typeof Tabs> {
  items: TabsPresetItem[];
}

const TabsPreset = React.forwardRef<
  React.ElementRef<typeof Tabs>,
  TabsPresetProps
>(({ items, ...tabsProps }, ref) => {
  return (
    <Tabs ref={ref} {...tabsProps}>
      <TabsList>
        {items.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value} disabled={tab.disabled}>
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {items.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
});
TabsPreset.displayName = "TabsPreset";

export { TabsPreset };
