import * as React from "react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

export interface BreadcrumbPresetLink {
  label: React.ReactNode;
  href?: string;
}

export interface BreadcrumbPresetProps
  extends React.ComponentProps<typeof Breadcrumb> {
  links: BreadcrumbPresetLink[];
}

export function BreadcrumbPreset({ links, ...props }: BreadcrumbPresetProps) {
  return (
    <Breadcrumb {...props}>
      <BreadcrumbList>
        {links.map((link, index) => {
          const isLast = index === links.length - 1;
          const isPage = isLast || !link.href;

          return (
            <React.Fragment key={index}>
              <BreadcrumbItem>
                {isPage ? (
                  <BreadcrumbPage>{link.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={link.href}>{link.label}</BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator />}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
