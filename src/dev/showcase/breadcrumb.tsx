import { SlashIcon } from "lucide-react";

import { BreadcrumbPreset } from "../../components/macro/breadcrumb-preset";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "../../components/micro/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,

  DropdownMenuTrigger
} from "../../components/micro/dropdown-menu";
import {
  DocsP,
  ExampleGrid,
  ShowcaseExample,
  Showcase,
  ShowcaseDocs
} from "../../dev/components/showcase";

function BreadcrumbMacroShowcase() {
  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample title="Tiêu chuẩn (Standard)" description="Mảng điều hướng cơ bản." code={`<BreadcrumbPreset
    items={[
      { label: "Trang chủ", href: "/" },
      { label: "Thành phần", href: "/components" },
      { label: "Breadcrumb" },
    ]}
  />`} preview={
                      <>
              <BreadcrumbPreset
                          items={[
                            { label: "Trang chủ", href: "/" },
                            { label: "Thành phần", href: "/components" },
                            { label: "Breadcrumb" },
                          ]}
                        />
                      </>
                    } />

        <ShowcaseExample title="Nhiều cấp (Deep Navigation)" description="Đường dẫn dài hơn điển hình cho các trang lồng nhau." code={`<BreadcrumbPreset
    items={[
      { label: "Dashboard", href: "/dashboard" },
      { label: "Cài đặt", href: "/settings" },
      { label: "Tài khoản", href: "/settings/account" },
      { label: "Hóa đơn" },
    ]}
  />`} preview={
                      <>
              <BreadcrumbPreset
                          items={[
                            { label: "Dashboard", href: "/dashboard" },
                            { label: "Cài đặt", href: "/settings" },
                            { label: "Tài khoản", href: "/settings/account" },
                            { label: "Hóa đơn" },
                          ]}
                        />
                      </>
                    } />
      </ExampleGrid>
    </div>
  );
}

function BreadcrumbMicroShowcase() {
  return (
    <div className="space-y-10">
      <ShowcaseExample title="Cơ bản (Default)" description="Lắp ráp thủ công các item với dấu phân cách chevron mặc định." code={`<Breadcrumb className="w-full max-w-lg">
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href="/components">
          Thành phần
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>`} preview={
                  <>
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
                  </>
                } />

      <ExampleGrid>
        <ShowcaseExample title="Đổi dấu phân cách (Custom Separator)" description="Truyền icon bất kỳ (VD: SlashIcon) vào bên trong BreadcrumbSeparator." code={`<Breadcrumb className="w-full max-w-lg">
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator>
        <SlashIcon className="size-3.5" />
      </BreadcrumbSeparator>
      <BreadcrumbItem>
        <BreadcrumbLink href="/components">
          Thành phần
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator>
        <SlashIcon className="size-3.5" />
      </BreadcrumbSeparator>
      <BreadcrumbItem>
        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>`} preview={
                      <>
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
                      </>
                    } />

        <ShowcaseExample title="Dấu ba chấm (With Ellipsis)" description="Sử dụng BreadcrumbEllipsis cùng DropdownMenu để giấu các đường dẫn trung gian." code={`<Breadcrumb className="w-full max-w-lg">
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
  </Breadcrumb>`} preview={
                      <>
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
                      </>
                    } />
      </ExampleGrid>
    </div>
  );
}

export default function BreadcrumbShowcase() {
  return (
    <Showcase
      title="Breadcrumb"
      description="Hiển thị đường dẫn điều hướng, giúp người dùng biết vị trí hiện tại trong hệ thống."
      guideline={
        <ShowcaseDocs>
          <DocsP>
            Dùng để hiển thị đường dẫn điều hướng, giúp người dùng nhận biết vị
            trí hiện tại của họ trong cấu trúc của ứng dụng và cho phép họ dễ
            dàng quay lại các trang cấp cao hơn.
          </DocsP>
        </ShowcaseDocs>
      }
      micro={{ content: <BreadcrumbMicroShowcase /> }}
      macro={{ content: <BreadcrumbMacroShowcase /> }}
    />
  );
}
