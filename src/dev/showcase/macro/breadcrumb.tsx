import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";
import { BreadcrumbPreset } from "@/components/macro/breadcrumb-preset";

export default function MacroBreadcrumbShowcase() {
  return (
    <div className="space-y-10">
      <SectionHeader
        title="Breadcrumb (Macro)"
        description="A preset component that renders a breadcrumb trail from a flat array."
      />

      <ExampleGrid columns={1}>
        <ExampleSection label="Standard" description="Breadcrumb with links and text.">
          <BreadcrumbPreset
            items={[
              { label: "Home", href: "/" },
              { label: "Components", href: "/components" },
              { label: "Breadcrumb" },
            ]}
          />
        </ExampleSection>

        <ExampleSection label="Deep Navigation" description="A longer breadcrumb trail typical for nested pages.">
          <BreadcrumbPreset
            items={[
              { label: "Dashboard", href: "/dashboard" },
              { label: "Settings", href: "/settings" },
              { label: "Account", href: "/settings/account" },
              { label: "Billing", href: "/settings/account/billing" },
              { label: "Invoices" },
            ]}
          />
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
