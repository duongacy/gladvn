import React from "react";
import { Slash } from "lucide-react";

import { BreadcrumbPreset } from "../../components/macro/breadcrumb-preset";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../components/micro/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/micro/dropdown-menu";
import { useI18n } from "../components/dev-context";
import {
  ConfigurableShowcase,
  ShowcaseDocs,
  DocsP,
} from "../components/showcase";

function useBreadcrumbExamples() {
  const t = useI18n();

  return React.useMemo(
    () => [
      {
        title: t("Tiêu chuẩn", "Standard"),
        description: t(
          "Mảng điều hướng cơ bản. Với Micro Component, lắp ráp thủ công các item với dấu phân cách chevron mặc định.",
          "Basic navigation array. With Micro Component, manually assemble items with the default chevron separator."
        ),
        macroCode: `<BreadcrumbPreset
  items={[
    { label: "Home", href: "/" },
    { label: "Components", href: "/components" },
    { label: "Breadcrumb" },
  ]}
/>`,
        macroPreview: (
          <BreadcrumbPreset
            items={[
              { label: "Home", href: "/" },
              { label: "Components", href: "/components" },
              { label: "Breadcrumb" },
            ]}
          />
        ),
        microCode: `<Breadcrumb className="w-full max-w-lg">
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/components">
        Components
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,
        microPreview: (
          <Breadcrumb className="w-full max-w-lg">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/components">Components</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        ),
      },
      {
        title: t("Nhiều cấp", "Deep Navigation"),
        description: t(
          "Đường dẫn dài hơn điển hình cho các trang lồng nhau. Sử dụng BreadcrumbEllipsis cùng DropdownMenu để giấu các đường dẫn trung gian.",
          "Longer path typical for nested pages. Use BreadcrumbEllipsis with DropdownMenu to hide intermediate paths."
        ),
        macroCode: `<BreadcrumbPreset
  items={[
    { label: "Dashboard", href: "/dashboard" },
    { label: "Settings", href: "/settings" },
    { label: "Account", href: "/settings/account" },
    { label: "Invoices" },
  ]}
/>`,
        macroPreview: (
          <BreadcrumbPreset
            items={[
              { label: "Dashboard", href: "/dashboard" },
              { label: "Settings", href: "/settings" },
              { label: "Account", href: "/settings/account" },
              { label: "Invoices" },
            ]}
          />
        ),
        microCode: `<Breadcrumb className="w-full max-w-lg">
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-1 hover:text-foreground">
          <BreadcrumbEllipsis className="size-4" />
          <span className="sr-only">Toggle menu</span>
        </DropdownMenuTrigger>
        
        <DropdownMenuContent align="start">
          <DropdownMenuItem>Documentation</DropdownMenuItem>
          <DropdownMenuItem>Themes</DropdownMenuItem>
          <DropdownMenuItem>GitHub</DropdownMenuItem>
        </DropdownMenuContent>
        
      </DropdownMenu>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/docs/components">
        Components
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,
        microPreview: (
          <Breadcrumb className="w-full max-w-lg">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1 hover:text-foreground">
                    <BreadcrumbEllipsis className="size-4" />
                    <span className="sr-only">Toggle menu</span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    <DropdownMenuItem>Documentation</DropdownMenuItem>
                    <DropdownMenuItem>Themes</DropdownMenuItem>
                    <DropdownMenuItem>GitHub</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/docs/components">
                  Components
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        ),
      },
      {
        title: t("Đổi dấu phân cách", "Custom Separator"),
        description: t(
          "Truyền icon bất kỳ (VD: Slash) vào bên trong BreadcrumbSeparator.",
          "Pass any icon (e.g., Slash) inside BreadcrumbSeparator."
        ),
        microCode: `<Breadcrumb className="w-full max-w-lg">
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator>
      <Slash className="size-3.5" />
    </BreadcrumbSeparator>
    <BreadcrumbItem>
      <BreadcrumbLink href="/components">
        Components
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator>
      <Slash className="size-3.5" />
    </BreadcrumbSeparator>
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,
        microPreview: (
          <Breadcrumb className="w-full max-w-lg">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Slash className="size-3.5" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="/components">
                  Components
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Slash className="size-3.5" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        ),
      },
    ],
    [t]
  );
}

export default function BreadcrumbShowcase() {
  const t = useI18n();
  const examples = useBreadcrumbExamples();

  return (
    <ConfigurableShowcase
      title={t("Breadcrumb", "Breadcrumb")}
      description={t(
        "Hiển thị đường dẫn điều hướng, giúp người dùng biết vị trí hiện tại trong hệ thống.",
        "Displays a navigation path, helping users know their current location in the system."
      )}
      guideline={
        <ShowcaseDocs>
          <DocsP>
            {t(
              "Dùng để hiển thị đường dẫn điều hướng, giúp người dùng nhận biết vị trí hiện tại của họ trong cấu trúc của ứng dụng và cho phép họ dễ dàng quay lại các trang cấp cao hơn.",
              "Used to display a navigation path, helping users recognize their current location within the application's structure and allowing them to easily return to higher-level pages."
            )}
          </DocsP>
        </ShowcaseDocs>
      }
      examples={examples}
    />
  );
}
