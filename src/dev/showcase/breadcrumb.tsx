import { SlashIcon } from "lucide-react";
import {
  Showcase,
  ShowcaseDocs,
  DocsH3,
  DocsP,
  DocsCode,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";

import { BreadcrumbPreset } from "@/components/macro/breadcrumb-preset";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/micro/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/micro/dropdown-menu";

// ──────────────────────────────────────────────────────────
// SECTION 1: Macro Content
// ──────────────────────────────────────────────────────────
function BreadcrumbMacroShowcase() {
  return (
    <div className="space-y-10 mt-6">
      <ShowcaseDocs>
        <DocsH3>Khi nào nên dùng Macro</DocsH3>
        <DocsP>
          <DocsCode>BreadcrumbPreset</DocsCode> cho phép bạn truyền vào một mảng
          các object <DocsCode>items</DocsCode> và nó sẽ tự động render toàn bộ
          cấu trúc danh sách (Link, Separator, Page) cho bạn, tiết kiệm rất
          nhiều code cho các thanh điều hướng tĩnh.
        </DocsP>
      </ShowcaseDocs>

      <ExampleGrid columns={2}>
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
    { label: "Bảng điều khiển", href: "/dashboard" },
    { label: "Cài đặt", href: "/settings" },
    { label: "Tài khoản", href: "/settings/account" },
    { label: "Hóa đơn" },
  ]}
/>
`}
        >
          <BreadcrumbPreset
            items={[
              { label: "Bảng điều khiển", href: "/dashboard" },
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
      <ShowcaseDocs>
        <DocsH3>Khi nào nên dùng Micro</DocsH3>
        <DocsP>
          Dùng <DocsCode>Breadcrumb</DocsCode> và các thành phần con khi bạn cần
          chèn các thành phần UI phức tạp vào giữa đường dẫn (ví dụ:{" "}
          <DocsCode>DropdownMenu</DocsCode> khi danh sách quá dài, hoặc đổi Icon
          của <DocsCode>BreadcrumbSeparator</DocsCode>).
        </DocsP>
      </ShowcaseDocs>

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

      <ExampleGrid columns={2}>
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
        <DropdownMenuContent align="start">
          <DropdownMenuItem>Tài liệu</DropdownMenuItem>
          <DropdownMenuItem>Giao diện</DropdownMenuItem>
          <DropdownMenuItem>GitHub</DropdownMenuItem>
        </DropdownMenuContent>
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
                  <DropdownMenuContent align="start">
                    <DropdownMenuItem>Tài liệu</DropdownMenuItem>
                    <DropdownMenuItem>Giao diện</DropdownMenuItem>
                    <DropdownMenuItem>GitHub</DropdownMenuItem>
                  </DropdownMenuContent>
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
      description="Thanh điều hướng hiển thị đường dẫn hiện tại của người dùng trong hệ thống phân cấp trang web."
      tabs={[
        { label: "Micro (Primitive)", content: <BreadcrumbMicroShowcase /> },
        { label: "Macro (Preset)", content: <BreadcrumbMacroShowcase /> },
      ]}
    />
  );
}
