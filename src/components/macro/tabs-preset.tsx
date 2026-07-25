import * as React from "react";

import { type VariantProps } from "class-variance-authority";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  type tabsListVariants
} from "../../components/micro/tabs";

export interface TabsPresetItem {
  value: string;
  title: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}

export type TabsPresetProps = React.ComponentProps<typeof Tabs> & {
  items: TabsPresetItem[];
  variant?: VariantProps<typeof tabsListVariants>["variant"];
  listClassName?: string;
};

const TabsPreset = React.forwardRef<
  React.ComponentRef<typeof Tabs>,
  TabsPresetProps
>(({ items, variant, listClassName, ...tabsProps }, ref) => {
  return (
    <Tabs ref={ref} {...tabsProps}>
      <TabsList variant={variant} className={listClassName}>
        {items.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            disabled={tab.disabled}
          >
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
