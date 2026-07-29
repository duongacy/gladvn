import { useState } from "react";

import { Bell, Settings } from "lucide-react";

import { Button } from "../../components/micro/button";
import { Input } from "../../components/micro/input";
import { Label } from "../../components/micro/label";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,

  PopoverTitle,
  PopoverTrigger
} from "../../components/micro/popover";
import { useDevContext } from "../../dev/components/dev-context";
import {
  DocsP,
  ExampleGrid,
  Showcase,
  ShowcaseDocs,
  ShowcaseExample
} from "../../dev/components/showcase";
import { type Size } from "../../lib/types";

function PopoverMicroShowcase({ globalSize }: { globalSize: Size }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample title="Mặc định" description="Cửa sổ Popover tiêu chuẩn." code={`<Popover>
  <PopoverTrigger
    render={
      <Button variant="outline" size="${globalSize}">
        Open Popover
      </Button>
    }
  />
  <PopoverContent className="w-80" sideOffset={8}>
    <PopoverHeader>
      <PopoverTitle>Dimensions</PopoverTitle>
      <PopoverDescription>
        Cài đặt kích thước cho layer.
      </PopoverDescription>
    </PopoverHeader>
    <div className="grid gap-4 mt-4">
      <div className="grid grid-cols-3 items-center gap-4">
        <Label htmlFor="width">Chiều rộng</Label>
        <Input
          id="width"
          defaultValue="100%"
          className="col-span-2 h-8"
        />
      </div>
      <div className="grid grid-cols-3 items-center gap-4">
        <Label htmlFor="height">Height</Label>
        <Input
          id="height"
          defaultValue="200px"
          className="col-span-2 h-8"
        />
      </div>
    </div>
  </PopoverContent>
</Popover>
`} preview={
                      <>
              <Popover>
                          <PopoverTrigger
                            render={
                              <Button variant="outline" size={globalSize}>
                                Open Popover
                              </Button>
                            }
                          />

                            <PopoverContent className="w-80" sideOffset={8}>
                              <PopoverHeader>
                                <PopoverTitle>Dimensions</PopoverTitle>
                                <PopoverDescription>
                                  Cài đặt kích thước cho layer.
                                </PopoverDescription>
                              </PopoverHeader>
                              <div className="grid gap-4 mt-4">
                                <div className="grid grid-cols-3 items-center gap-4">
                                  <Label htmlFor="width">Chiều rộng</Label>
                                  <Input
                                    id="width"
                                    defaultValue="100%"
                                    className="col-span-2 h-8"
                                  />
                                </div>
                                <div className="grid grid-cols-3 items-center gap-4">
                                  <Label htmlFor="height">Height</Label>
                                  <Input
                                    id="height"
                                    defaultValue="200px"
                                    className="col-span-2 h-8"
                                  />
                                </div>
                              </div>
                            </PopoverContent>
                          
                        </Popover>
                      </>
                    } />

        <ShowcaseExample title="Icon Trigger" description="Mở Popover bằng Icon Button." code={`<div className="flex gap-4">
    <Popover>
      <PopoverTrigger
        render={
          <Button
            variant="ghost"
            size="md"
            iconOnly
            className="rounded-full"
          >
            <Bell className="size-4" />
          </Button>
        }
      />
      
        <PopoverContent
          className="w-64"
          sideOffset={8}
          align="start"
        >
          <PopoverHeader>
            <PopoverTitle>Thông báo</PopoverTitle>
            <PopoverDescription>
              Bạn có 3 tin nhắn chưa đọc.
            </PopoverDescription>
          </PopoverHeader>
        </PopoverContent>
      
    </Popover>

    <Popover>
      <PopoverTrigger
        render={
          <Button variant="outline" size="md" iconOnly>
            <Settings className="size-4" />
          </Button>
        }
      />
      
        <PopoverContent className="w-56" sideOffset={8}>
          <PopoverHeader>
            <PopoverTitle>Cài đặt nhanh</PopoverTitle>
          </PopoverHeader>
          <div className="flex flex-col gap-2 mt-2">
            <Button
              variant="ghost"
              className="justify-start"
            >
              Tài khoản
            </Button>
            <Button
              variant="ghost"
              className="justify-start"
            >
              Giao diện
            </Button>
            <Button
              variant="ghost"
              className="justify-start text-destructive hover:text-destructive"
            >
              Đăng xuất
            </Button>
          </div>
        </PopoverContent>
      
    </Popover>
  </div>`} preview={
                      <>
              <div className="flex gap-4">
                          <Popover>
                            <PopoverTrigger
                              render={
                                <Button
                                  variant="ghost"
                                  size={globalSize}
                                  iconOnly
                                  className="rounded-full"
                                >
                                  <Bell className="size-4" />
                                </Button>
                              }
                            />

                              <PopoverContent className="w-64" sideOffset={8} align="start">
                                <PopoverHeader>
                                  <PopoverTitle>Thông báo</PopoverTitle>
                                  <PopoverDescription>
                                    Bạn có 3 tin nhắn chưa đọc.
                                  </PopoverDescription>
                                </PopoverHeader>
                              </PopoverContent>
                            
                          </Popover>

                          <Popover>
                            <PopoverTrigger
                              render={
                                <Button variant="outline" size={globalSize} iconOnly>
                                  <Settings className="size-4" />
                                </Button>
                              }
                            />

                              <PopoverContent className="w-56" sideOffset={8}>
                                <PopoverHeader>
                                  <PopoverTitle>Cài đặt nhanh</PopoverTitle>
                                </PopoverHeader>
                                <div className="flex flex-col gap-2 mt-2">
                                  <Button variant="ghost" className="justify-start">
                                    Tài khoản
                                  </Button>
                                  <Button variant="ghost" className="justify-start">
                                    Giao diện
                                  </Button>
                                  <Button
                                    variant="ghost"
                                    className="justify-start text-destructive hover:text-destructive"
                                  >
                                    Đăng xuất
                                  </Button>
                                </div>
                              </PopoverContent>
                            
                          </Popover>
                        </div>
                      </>
                    } />
      </ExampleGrid>

      <ShowcaseExample title="Placement (Vị trí)" description="Popover có thể hiển thị ở nhiều hướng khác nhau so với trigger (Top, Bottom, Left, Right)." code={`<Popover>
    <PopoverTrigger asChild>
      <Button variant="outline">top</Button>
    </PopoverTrigger>
    
      <PopoverContent
        side="top"
        sideOffset={8}
        className="w-48 text-center text-sm p-4"
      >
        Hiển thị ở phía <strong>top</strong>
      </PopoverContent>
    
  </Popover>`} preview={
                  <>
          <div className="flex flex-wrap items-center justify-center gap-4 py-8">
                    {(["top", "right", "bottom", "left"] as const).map((side) => (
                      <Popover key={side}>
                        <PopoverTrigger
                          render={
                            <Button
                              variant="outline"
                              size={globalSize}
                              className="capitalize"
                            >
                              {side}
                            </Button>
                          }
                        />
                        
                          <PopoverContent
                            side={side}
                            sideOffset={8}
                            className="w-48 text-center text-sm p-4"
                          >
                            Hiển thị ở phía <strong className="capitalize">{side}</strong>
                          </PopoverContent>
                        
                      </Popover>
                    ))}
                  </div>
                  </>
                } />

      <ShowcaseExample title="Controlled State" description="Quản lý trạng thái đóng/mở của Popover thông qua React state (open và onOpenChange)." code={`const [isOpen, setIsOpen] = React.useState(false) return (
  <Popover open={isOpen} onOpenChange={setIsOpen}>
    <PopoverTrigger asChild>
      <Button variant="outline">
        Toggle Controlled Popover
      </Button>
    </PopoverTrigger>
    
      <PopoverContent className="w-80" sideOffset={8}>
        <PopoverHeader>
          <PopoverTitle>Controlled Mode</PopoverTitle>
          <PopoverDescription>
            Popover này được control bởi state. Bạn có thể
            đóng nó bằng nút bên dưới hoặc click ra ngoài.
          </PopoverDescription>
        </PopoverHeader>
        <div className="mt-4 flex justify-end">
          <Button
            size="sm"
            color="secondary"
            onClick={() => setIsOpen(false)}
          >
            Đóng Popover
          </Button>
        </div>
      </PopoverContent>
    
  </Popover>
  )`} preview={
                  <>
          <div className="flex items-center gap-4">
                    <Popover open={isOpen} onOpenChange={setIsOpen}>
                      <PopoverTrigger
                        render={
                          <Button variant="outline" size={globalSize}>
                            Toggle Controlled Popover
                          </Button>
                        }
                      />
                      
                        <PopoverContent className="w-80" sideOffset={8}>
                          <PopoverHeader>
                            <PopoverTitle>Controlled Mode</PopoverTitle>
                            <PopoverDescription>
                              Popover này được control bởi state. Bạn có thể đóng nó bằng
                              nút bên dưới hoặc click ra ngoài.
                            </PopoverDescription>
                          </PopoverHeader>
                          <div className="mt-4 flex justify-end">
                            <Button
                              size={globalSize}
                              color="secondary"
                              onClick={() => setIsOpen(false)}
                            >
                              Đóng Popover
                            </Button>
                          </div>
                        </PopoverContent>
                      
                    </Popover>

                    <div className="text-sm text-muted-foreground">
                      Trạng thái hiện tại:{" "}
                      <strong
                        data-active={isOpen ? "" : undefined}
                        className="data-active:text-primary"
                      >
                        {isOpen ? "Mở" : "Đóng"}
                      </strong>
                    </div>
                  </div>
                  </>
                } />
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 3: Entry point (export default)
// ──────────────────────────────────────────────────────────
export default function PopoverShowcase() {
  const { size: globalSize } = useDevContext();
  return (
    <Showcase
      title="Popover"
      description="Popup nội dung phong phú, kích hoạt bằng một nút hoặc trigger."
      guideline={
        <ShowcaseDocs>
          <DocsP>
            Popover là một floating panel hiển thị khi người dùng click vào một
            phần tử (trigger). Khác với Tooltip (hiển thị khi hover), Popover
            dùng cho những nội dung phong phú hơn, chứa các tương tác phức tạp
            như form, danh sách cài đặt, v.v.
          </DocsP>
        </ShowcaseDocs>
      }
      micro={{ content: <PopoverMicroShowcase globalSize={globalSize} /> }}
    />
  );
}
