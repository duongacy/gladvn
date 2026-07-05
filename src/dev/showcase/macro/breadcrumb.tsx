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
        description="Một thành phần đặt trước hiển thị đường dẫn đường dẫn từ một mảng phẳng."
      />

      <ExampleGrid columns={1}>
        <ExampleSection label="Standard" description="Breadcrumb với các liên kết và văn bản.">
          <BreadcrumbPreset
            items={[
              { label: "Home", href: "/" },
              { label: "Components", href: "/components" },
              { label: "Breadcrumb" },
            ]}
          />
        </ExampleSection>

        <ExampleSection label="Deep Navigation" description="Đường dẫn breadcrumb dài hơn điển hình cho các trang lồng nhau.">
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
