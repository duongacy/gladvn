import { SlashIcon } from "lucide-react";

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
import { useI18n } from "../../dev/components/dev-context";
import {
  DocsP,
  ExampleGrid,
  Showcase,
  ShowcaseDocs,
  ShowcaseExample,
} from "../../dev/components/showcase";

function BreadcrumbMacroShowcase() {
  const t = useI18n();
  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample
          title={t("Tiêu chuẩn", "Standard")}
          description={t("Mảng điều hướng cơ bản.", "Basic navigation array.")}
          code={`<BreadcrumbPreset
    items={[
      { label: "Home", href: "/" },
      { label: "Components", href: "/components" },
      { label: "Breadcrumb" },
    ]}
  />`}
          preview={
            <>
              <BreadcrumbPreset
                items={[
                  { label: "Home", href: "/" },
                  { label: "Components", href: "/components" },
                  { label: "Breadcrumb" },
                ]}
              />
            </>
          }
        />

        <ShowcaseExample
          title={t("Nhiều cấp", "Deep Navigation")}
          description={t(
            "Đường dẫn dài hơn điển hình cho các trang lồng nhau.",
            "Longer path typical for nested pages.",
          )}
          code={`<BreadcrumbPreset
    items={[
      { label: "Dashboard", href: "/dashboard" },
      { label: "Settings", href: "/settings" },
      { label: "Account", href: "/settings/account" },
      { label: "Invoices" },
    ]}
  />`}
          preview={
            <>
              <BreadcrumbPreset
                items={[
                  { label: "Dashboard", href: "/dashboard" },
                  { label: "Settings", href: "/settings" },
                  { label: "Account", href: "/settings/account" },
                  { label: "Invoices" },
                ]}
              />
            </>
          }
        />
      </ExampleGrid>
    </div>
  );
}

function BreadcrumbMicroShowcase() {
  const t = useI18n();
  return (
    <div className="space-y-10">
      <ShowcaseExample
        title={t("Cơ bản", "Default")}
        description={t(
          "Lắp ráp thủ công các item với dấu phân cách chevron mặc định.",
          "Manually assemble items with the default chevron separator.",
        )}
        code={`<Breadcrumb className="w-full max-w-lg">
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
  </Breadcrumb>`}
        preview={
          <>
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
          </>
        }
      />

      <ExampleGrid>
        <ShowcaseExample
          title={t("Đổi dấu phân cách", "Custom Separator")}
          description={t(
            "Truyền icon bất kỳ (VD: SlashIcon) vào bên trong BreadcrumbSeparator.",
            "Pass any icon (e.g., SlashIcon) inside BreadcrumbSeparator.",
          )}
          code={`<Breadcrumb className="w-full max-w-lg">
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator>
        <SlashIcon className="size-3.5" />
      </BreadcrumbSeparator>
      <BreadcrumbItem>
        <BreadcrumbLink href="/components">
          Components
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator>
        <SlashIcon className="size-3.5" />
      </BreadcrumbSeparator>
      <BreadcrumbItem>
        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>`}
          preview={
            <>
              <Breadcrumb className="w-full max-w-lg">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <SlashIcon className="size-3.5" />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/components">
                      Components
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <SlashIcon className="size-3.5" />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </>
          }
        />

        <ShowcaseExample
          title={t("Dấu ba chấm", "With Ellipsis")}
          description={t(
            "Sử dụng BreadcrumbEllipsis cùng DropdownMenu để giấu các đường dẫn trung gian.",
            "Use BreadcrumbEllipsis with DropdownMenu to hide intermediate paths.",
          )}
          code={`<Breadcrumb className="w-full max-w-lg">
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-1 hover:text-foreground">
            <BreadcrumbEllipsis className="h-4 w-4" />
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
  </Breadcrumb>`}
          preview={
            <>
              <Breadcrumb className="w-full max-w-lg">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex items-center gap-1 hover:text-foreground">
                        <BreadcrumbEllipsis className="h-4 w-4" />
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
            </>
          }
        />
      </ExampleGrid>
    </div>
  );
}

export default function BreadcrumbShowcase() {
  const t = useI18n();
  return (
    <Showcase
      title={t("Breadcrumb", "Breadcrumb")}
      description={t(
        "Hiển thị đường dẫn điều hướng, giúp người dùng biết vị trí hiện tại trong hệ thống.",
        "Displays a navigation path, helping users know their current location in the system.",
      )}
      guideline={
        <ShowcaseDocs>
          <DocsP>
            {t(
              "Dùng để hiển thị đường dẫn điều hướng, giúp người dùng nhận biết vị trí hiện tại của họ trong cấu trúc của ứng dụng và cho phép họ dễ dàng quay lại các trang cấp cao hơn.",
              "Used to display a navigation path, helping users recognize their current location within the application's structure and allowing them to easily return to higher-level pages.",
            )}
          </DocsP>
        </ShowcaseDocs>
      }
      micro={{ content: <BreadcrumbMicroShowcase /> }}
      macro={{ content: <BreadcrumbMacroShowcase /> }}
    />
  );
}
