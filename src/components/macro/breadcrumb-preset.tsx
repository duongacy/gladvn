import * as React from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator } from "../../components/micro/breadcrumb";

export interface BreadcrumbPresetItem {
  label: React.ReactNode;
  href?: string;
}

export type BreadcrumbPresetProps = React.ComponentProps<typeof Breadcrumb> & {
  items: BreadcrumbPresetItem[];
};

const BreadcrumbPreset = React.forwardRef<
  React.ComponentRef<typeof Breadcrumb>,
  BreadcrumbPresetProps
>(({ items, ...breadcrumbProps }, ref) => {
  return (
    <Breadcrumb ref={ref} {...breadcrumbProps}>
      <BreadcrumbList>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const isPage = isLast || !item.href;

          return (
            <React.Fragment key={index}>
              <BreadcrumbItem>
                {isPage ? (
                  <BreadcrumbPage>{item.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator />}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
});
BreadcrumbPreset.displayName = "BreadcrumbPreset";

export { BreadcrumbPreset };
