import {
  DocsP,
  ExampleGrid,
  ExampleSection,
  Showcase,
  ShowcaseDocs,
} from "../../dev/components/showcase";
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
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from "../../components/micro/dropdown-menu";

// ──────────────────────────────────────────────────────────
// SECTION 1: Macro Content
// ──────────────────────────────────────────────────────────
function BreadcrumbMacroShowcase() {
  return (
    <div className="space-y-10 mt-6">
      <ExampleGrid>
        <ExampleSection
          label="Tiêu chuẩn (Standard)"
          description="Mảng điều hướng cơ bản."
          codeString={`<BreadcrumbPreset
  items={[
    { label: "Trang chủ", href: "/" },
    { label: "Thành phần", href: "/components" },
    { label: "Breadcrumb" },
  ]}
/>
`}
        >
          <BreadcrumbPreset
            items={[
              { label: "Trang chủ", href: "/" },
              { label: "Thành phần", href: "/components" },
              { label: "Breadcrumb" },
            ]}
          />
        </ExampleSection>

        <ExampleSection
          label="Nhiều cấp (Deep Navigation)"
          description="Đường dẫn dài hơn điển hình cho các trang lồng nhau."
          codeString={`<BreadcrumbPreset
  items={[
    { label: "Dashboard", href: "/dashboard" },
    { label: "Cài đặt", href: "/settings" },
    { label: "Tài khoản", href: "/settings/account" },
    { label: "Hóa đơn" },
  ]}
/>
`}
        >
          <BreadcrumbPreset
            items={[
              { label: "Dashboard", href: "/dashboard" },
              { label: "Cài đặt", href: "/settings" },
              { label: "Tài khoản", href: "/settings/account" },
              { label: "Hóa đơn" },
            ]}
          />
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 2: Micro Content
// ──────────────────────────────────────────────────────────
function BreadcrumbMicroShowcase() {
  return (
    <div className="space-y-10 mt-6">
      <ExampleSection
        label="Cơ bản (Default)"
        description="Lắp ráp thủ công các item với dấu phân cách chevron mặc định."
        fullWidth
        codeString={`<Breadcrumb className="w-full max-w-lg">
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/components">Thành phần</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
`}
      >
        <Breadcrumb className="w-full max-w-lg">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Thành phần</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </ExampleSection>

      <ExampleGrid>
        <ExampleSection
          label="Đổi dấu phân cách (Custom Separator)"
          description="Truyền icon bất kỳ (VD: SlashIcon) vào bên trong BreadcrumbSeparator."
          codeString={`<Breadcrumb className="w-full max-w-lg">
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator>
      <SlashIcon className="size-3.5" />
    </BreadcrumbSeparator>
    <BreadcrumbItem>
      <BreadcrumbLink href="/components">Thành phần</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator>
      <SlashIcon className="size-3.5" />
    </BreadcrumbSeparator>
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}
        >
          <Breadcrumb className="w-full max-w-lg">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <SlashIcon className="size-3.5" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="/components">Thành phần</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <SlashIcon className="size-3.5" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </ExampleSection>

        <ExampleSection
          label="Dấu ba chấm (With Ellipsis)"
          description="Sử dụng BreadcrumbEllipsis cùng DropdownMenu để giấu các đường dẫn trung gian."
          codeString={`<Breadcrumb className="w-full max-w-lg">
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-1 hover:text-foreground">
          <BreadcrumbEllipsis className="h-4 w-4" />
          <span className="sr-only">Toggle menu</span>
        </DropdownMenuTrigger>
        <DropdownMenuPortal>
          <DropdownMenuContent align="start">
            <DropdownMenuItem>Tài liệu</DropdownMenuItem>
            <DropdownMenuItem>Giao diện</DropdownMenuItem>
            <DropdownMenuItem>GitHub</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenuPortal>
      </DropdownMenu>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/docs/components">Thành phần</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}
        >
          <Breadcrumb className="w-full max-w-lg">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1 hover:text-foreground">
                    <BreadcrumbEllipsis className="h-4 w-4" />
                    <span className="sr-only">Toggle menu</span>
                  </DropdownMenuTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuContent align="start">
                      <DropdownMenuItem>Tài liệu</DropdownMenuItem>
                      <DropdownMenuItem>Giao diện</DropdownMenuItem>
                      <DropdownMenuItem>GitHub</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenuPortal>
                </DropdownMenu>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/docs/components">
                  Thành phần
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 3: Entry point
// ──────────────────────────────────────────────────────────
export default function BreadcrumbShowcase() {
  return (
    <Showcase
      title="Breadcrumb"
      description="Hiển thị đường dẫn điều hướng, giúp người dùng biết vị trí hiện tại trong hệ thống."
      generalConcept={
        <ShowcaseDocs>
          <DocsP>
            Dùng để hiển thị đường dẫn điều hướng, giúp người dùng nhận biết vị
            trí hiện tại của họ trong cấu trúc của ứng dụng và cho phép họ dễ
            dàng quay lại các trang cấp cao hơn.
          </DocsP>
        </ShowcaseDocs>
      }
      tabs={[
        { label: "Micro (Primitive)", content: <BreadcrumbMicroShowcase /> },
        { label: "Macro (Preset)", content: <BreadcrumbMacroShowcase /> },
      ]}
    />
  );
}
