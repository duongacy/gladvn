import { InfoIcon, ShieldAlertIcon } from "lucide-react";

import { Button } from "../../components/micro/button";
import {
  Tooltip,
  TooltipContent,

  TooltipProvider,
  TooltipTrigger
} from "../../components/micro/tooltip";
import { useDevContext } from "../../dev/components/dev-context";
import {
  DocsCode,
  DocsH3,
  DocsP,
  ExampleGrid,
  ExampleSection,
  Showcase,
  ShowcaseDocs
} from "../../dev/components/showcase";
import { type Size } from "../../lib/types";

function TooltipMicroShowcase({ globalSize }: { globalSize: Size }) {
  return (
    <div className="space-y-10 mt-6">
      <ExampleSection
        label="Vị trí (Placements)"
        description="Tooltip có thể được đặt ở bất kỳ cạnh nào của trigger bằng thuộc tính side."
        codeString={`<div className="grid grid-cols-2 gap-4 max-w-md w-full place-items-center">
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          render={
            <Button variant="outline">Trên (Top)</Button>
          }
        />
        
          <TooltipContent side="top">
            Tooltip nằm trên
          </TooltipContent>
        
      </Tooltip>

      <Tooltip>
        <TooltipTrigger
          render={
            <Button variant="outline">Dưới (Bottom)</Button>
          }
        />
        
          <TooltipContent side="bottom">
            Tooltip nằm dưới
          </TooltipContent>
        
      </Tooltip>

      <Tooltip>
        <TooltipTrigger
          render={
            <Button variant="outline">Trái (Left)</Button>
          }
        />
        
          <TooltipContent side="left">
            Tooltip nằm trái
          </TooltipContent>
        
      </Tooltip>

      <Tooltip>
        <TooltipTrigger
          render={
            <Button variant="outline">Phải (Right)</Button>
          }
        />
        
          <TooltipContent side="right">
            Tooltip nằm phải
          </TooltipContent>
        
      </Tooltip>
    </TooltipProvider>
  </div>`}
      >
        <div className="grid grid-cols-2 gap-4 max-w-md w-full place-items-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger
                render={
                  <Button variant="outline" size={globalSize}>
                    Trên (Top)
                  </Button>
                }
              />

                <TooltipContent side="top">Tooltip nằm trên</TooltipContent>
              
            </Tooltip>

            <Tooltip>
              <TooltipTrigger
                render={
                  <Button variant="outline" size={globalSize}>
                    Dưới (Bottom)
                  </Button>
                }
              />

                <TooltipContent side="bottom">Tooltip nằm dưới</TooltipContent>
              
            </Tooltip>

            <Tooltip>
              <TooltipTrigger
                render={
                  <Button variant="outline" size={globalSize}>
                    Trái (Left)
                  </Button>
                }
              />

                <TooltipContent side="left">Tooltip nằm trái</TooltipContent>
              
            </Tooltip>

            <Tooltip>
              <TooltipTrigger
                render={
                  <Button variant="outline" size={globalSize}>
                    Phải (Right)
                  </Button>
                }
              />

                <TooltipContent side="right">Tooltip nằm phải</TooltipContent>
              
            </Tooltip>
          </TooltipProvider>
        </div>
      </ExampleSection>

      <ExampleGrid>
        <ExampleSection
          label="Nội dung dài (Long Content)"
          description="Tooltip tự động giới hạn chiều rộng và xuống dòng khi nội dung quá dài."
          codeString={`<TooltipProvider>
    <Tooltip>
      <TooltipTrigger
        render={
          <Button variant="outline" iconOnly>
            <InfoIcon />
          </Button>
        }
      />
      
        <TooltipContent>
          <p>
            Đây là một đoạn nội dung tooltip khá dài nhằm
            mục đích trình diễn cách mà Tooltip tự động cắt
            và xuống dòng khi vượt quá chiều rộng tối đa
            (max-width) cho phép.
          </p>
        </TooltipContent>
      
    </Tooltip>
  </TooltipProvider>`}
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger
                render={
                  <Button variant="outline" size={globalSize} iconOnly>
                    <InfoIcon />
                  </Button>
                }
              />

                <TooltipContent>
                  <p>
                    Đây là một đoạn nội dung tooltip khá dài nhằm mục đích trình
                    diễn cách mà Tooltip tự động cắt và xuống dòng khi vượt quá
                    chiều rộng tối đa (max-width) cho phép.
                  </p>
                </TooltipContent>
              
            </Tooltip>
          </TooltipProvider>
        </ExampleSection>

        <ExampleSection
          label="Trigger bị vô hiệu (Disabled Trigger)"
          description="Để bắt sự kiện hover trên nút disabled, cần bọc nó trong một thẻ span có tabIndex."
          codeString={`<TooltipProvider>
    <Tooltip>
      <TooltipTrigger
        render={
          <span
            tabIndex={0}
            className="inline-block cursor-not-allowed"
          >
            <Button
              variant="outline"
              disabled
              className="pointer-events-none w-full h-full"
              iconOnly
            >
              <ShieldAlertIcon />
            </Button>
          </span>
        }
      />
      
        <TooltipContent side="right">
          <p>Bạn không có quyền thực hiện hành động này.</p>
        </TooltipContent>
      
    </Tooltip>
  </TooltipProvider>`}
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger
                render={
                  <span
                    tabIndex={0}
                    className="inline-block cursor-not-allowed"
                  >
                    <Button
                      variant="outline"
                      size={globalSize}
                      disabled
                      className="pointer-events-none w-full h-full"
                      iconOnly
                    >
                      <ShieldAlertIcon />
                    </Button>
                  </span>
                }
              />

                <TooltipContent side="right">
                  <p>Bạn không có quyền thực hiện hành động này.</p>
                </TooltipContent>
              
            </Tooltip>
          </TooltipProvider>
        </ExampleSection>
      </ExampleGrid>

      <ExampleSection
        label="Độ trễ tuỳ chỉnh (Custom Delay)"
        description="Thay đổi thời gian trễ trước khi tooltip xuất hiện thông qua thuộc tính delay của TooltipProvider."
        fullWidth
        codeString={`<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <TooltipProvider delay={0}>
      <Tooltip>
        <TooltipTrigger
          render={
            <Button variant="outline" className="w-full">
              Tức thì (0ms)
            </Button>
          }
        />
        
          <TooltipContent>
            Xuất hiện ngay lập tức
          </TooltipContent>
        
      </Tooltip>
    </TooltipProvider>

    <TooltipProvider delay={500}>
      <Tooltip>
        <TooltipTrigger
          render={
            <Button variant="outline" className="w-full">
              Mặc định (500ms)
            </Button>
          }
        />
        
          <TooltipContent>
            Xuất hiện sau nửa giây
          </TooltipContent>
        
      </Tooltip>
    </TooltipProvider>

    <TooltipProvider delay={2000}>
      <Tooltip>
        <TooltipTrigger
          render={
            <Button variant="outline" className="w-full">
              Chậm (2000ms)
            </Button>
          }
        />
        
          <TooltipContent>
            Xuất hiện sau 2 giây chờ đợi
          </TooltipContent>
        
      </Tooltip>
    </TooltipProvider>
  </div>`}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <TooltipProvider delay={0}>
            <Tooltip>
              <TooltipTrigger
                render={
                  <Button
                    variant="outline"
                    size={globalSize}
                    className="w-full"
                  >
                    Tức thì (0ms)
                  </Button>
                }
              />
              
                <TooltipContent>Xuất hiện ngay lập tức</TooltipContent>
              
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider delay={500}>
            <Tooltip>
              <TooltipTrigger
                render={
                  <Button
                    variant="outline"
                    size={globalSize}
                    className="w-full"
                  >
                    Mặc định (500ms)
                  </Button>
                }
              />
              
                <TooltipContent>Xuất hiện sau nửa giây</TooltipContent>
              
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider delay={2000}>
            <Tooltip>
              <TooltipTrigger
                render={
                  <Button
                    variant="outline"
                    size={globalSize}
                    className="w-full"
                  >
                    Chậm (2000ms)
                  </Button>
                }
              />
              
                <TooltipContent>Xuất hiện sau 2 giây chờ đợi</TooltipContent>
              
            </Tooltip>
          </TooltipProvider>
        </div>
      </ExampleSection>
    </div>
  );
}

export default function TooltipShowcase() {
  const { size: globalSize } = useDevContext();
  return (
    <Showcase
      title="Tooltip"
      description="Một popup nhỏ hiển thị thông tin bổ sung khi người dùng di chuột hoặc trỏ tiêu điểm vào một phần tử."
      generalConcept={
        <ShowcaseDocs>
          <DocsH3>Tooltip (Gợi ý)</DocsH3>
          <DocsP>
            <DocsCode>Tooltip</DocsCode> không có phiên bản Macro vì bản chất nó
            chỉ là một popup hiển thị chữ. Bạn cần bọc toàn bộ ứng dụng hoặc
            nhóm các tooltip lại bằng <DocsCode>TooltipProvider</DocsCode> để
            quản lý delay xuất hiện đồng bộ.
          </DocsP>
        </ShowcaseDocs>
      }
      tabs={[
        {
          label: "Micro (Primitive)",
          content: <TooltipMicroShowcase globalSize={globalSize} /> },
      ]}
    />
  );
}
