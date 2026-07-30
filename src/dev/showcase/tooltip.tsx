import { InfoIcon, ShieldAlertIcon } from "lucide-react";

import { Button } from "../../components/micro/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/micro/tooltip";
import { useI18n } from "../../dev/components/dev-context";
import { useDevContext } from "../../dev/components/dev-context";
import {
  DocsCode,
  DocsH3,
  DocsP,
  ExampleGrid,
  Showcase,
  ShowcaseDocs,
  ShowcaseExample,
} from "../../dev/components/showcase";
import { type Size } from "../../lib/types";

function TooltipMicroShowcase({ globalSize }: { globalSize: Size }) {
  const t = useI18n();
  return (
    <div className="space-y-10">
      <ShowcaseExample
        title={t("Vị trí (Placements)", "Placements")}
        description={t(
          "Tooltip có thể được đặt ở bất kỳ cạnh nào của trigger bằng thuộc tính side.",
          "Tooltip can be placed on any side of the trigger using the side property.",
        )}
        code={`<div className="grid grid-cols-2 gap-4 max-w-md w-full place-items-center">
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          render={
            <Button variant="outline">Top</Button>
          }
        />
        
          <TooltipContent side="top">Tooltip on top</TooltipContent>
        
      </Tooltip>

      <Tooltip>
        <TooltipTrigger
          render={
            <Button variant="outline">Bottom</Button>
          }
        />
        
          <TooltipContent side="bottom">Tooltip on bottom</TooltipContent>
        
      </Tooltip>

      <Tooltip>
        <TooltipTrigger
          render={
            <Button variant="outline">Left</Button>
          }
        />
        
          <TooltipContent side="left">Tooltip on left</TooltipContent>
        
      </Tooltip>

      <Tooltip>
        <TooltipTrigger
          render={
            <Button variant="outline">Right</Button>
          }
        />
        
          <TooltipContent side="right">Tooltip on right</TooltipContent>
        
      </Tooltip>
    </TooltipProvider>
  </div>`}
        preview={
          <>
            <div className="grid grid-cols-2 gap-4 max-w-md w-full place-items-center">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger
                    render={
                      <Button variant="outline" size={globalSize}>
                        Top
                      </Button>
                    }
                  />

                  <TooltipContent side="top">Tooltip on top</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger
                    render={
                      <Button variant="outline" size={globalSize}>
                        Bottom
                      </Button>
                    }
                  />

                  <TooltipContent side="bottom">
                    Tooltip on bottom
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger
                    render={
                      <Button variant="outline" size={globalSize}>
                        Left
                      </Button>
                    }
                  />

                  <TooltipContent side="left">Tooltip on left</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger
                    render={
                      <Button variant="outline" size={globalSize}>
                        Right
                      </Button>
                    }
                  />

                  <TooltipContent side="right">Tooltip on right</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </>
        }
      />

      <ExampleGrid>
        <ShowcaseExample
          title={t("Nội dung dài (Long Content)", "Long Content")}
          description={t(
            "Tooltip tự động giới hạn chiều rộng và xuống dòng khi nội dung quá dài.",
            "Tooltip automatically limits width and wraps when content is too long.",
          )}
          code={`<TooltipProvider>
    <Tooltip>
      <TooltipTrigger
        render={
          <Button variant="outline" iconOnly>
            <InfoIcon />
          </Button>
        }
      />
      
        <TooltipContent>
          <p>This is a fairly long tooltip content intended to demonstrate how the Tooltip automatically wraps when it exceeds the maximum allowed width (max-width).</p>
        </TooltipContent>
      
    </Tooltip>
  </TooltipProvider>`}
          preview={
            <>
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
                      This is a fairly long tooltip content intended to
                      demonstrate how the Tooltip automatically wraps when it
                      exceeds the maximum allowed width (max-width).
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </>
          }
        />

        <ShowcaseExample
          title={t("Trigger bị vô hiệu (Disabled Trigger)", "Disabled Trigger")}
          description={t(
            "Mặc định, nút bị vô hiệu hoá (disabled) sẽ không hiển thị Tooltip vì không nhận sự kiện chuột. Đây là hành vi chuẩn.",
            "By default, a disabled button will not show the Tooltip because it does not receive pointer events. This is standard behavior.",
          )}
          code={`<TooltipProvider>
    <Tooltip>
      <TooltipTrigger
        render={
          <Button
            variant="outline"
            disabled
            iconOnly
          >
            <ShieldAlertIcon />
          </Button>
        }
      />
      <TooltipContent side="right">
        <p>You do not have permission to perform this action.</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>`}
          preview={
            <>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger
                    render={
                      <Button
                        variant="outline"
                        size={globalSize}
                        disabled
                        iconOnly
                      >
                        <ShieldAlertIcon />
                      </Button>
                    }
                  />

                  <TooltipContent side="right">
                    <p>You do not have permission to perform this action.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </>
          }
        />
      </ExampleGrid>

      <ShowcaseExample
        title={t("Độ trễ tuỳ chỉnh (Custom Delay)", "Custom Delay")}
        description={t(
          "Thay đổi thời gian trễ trước khi tooltip xuất hiện thông qua thuộc tính delay của TooltipProvider.",
          "Change the delay time before the tooltip appears via the delay property of TooltipProvider.",
        )}
        code={`<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <TooltipProvider delay={0}>
      <Tooltip>
        <TooltipTrigger
          render={
            <Button variant="outline" className="w-full">Immediate (0ms)</Button>
          }
        />
        
          <TooltipContent>Appears immediately</TooltipContent>
        
      </Tooltip>
    </TooltipProvider>

    <TooltipProvider delay={500}>
      <Tooltip>
        <TooltipTrigger
          render={
            <Button variant="outline" className="w-full">Default (500ms)</Button>
          }
        />
        
          <TooltipContent>Appears after half a second</TooltipContent>
        
      </Tooltip>
    </TooltipProvider>

    <TooltipProvider delay={2000}>
      <Tooltip>
        <TooltipTrigger
          render={
            <Button variant="outline" className="w-full">Slow (2000ms)</Button>
          }
        />
        
          <TooltipContent>Appears after waiting 2 seconds</TooltipContent>
        
      </Tooltip>
    </TooltipProvider>
  </div>`}
        preview={
          <>
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
                        Immediate (0ms)
                      </Button>
                    }
                  />

                  <TooltipContent>Appears immediately</TooltipContent>
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
                        Default (500ms)
                      </Button>
                    }
                  />

                  <TooltipContent>Appears after half a second</TooltipContent>
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
                        Slow (2000ms)
                      </Button>
                    }
                  />

                  <TooltipContent>
                    Appears after waiting 2 seconds
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </>
        }
      />
    </div>
  );
}

export default function TooltipShowcase() {
  const t = useI18n();
  const { size: globalSize } = useDevContext();
  return (
    <Showcase
      title={t("Tooltip", "Tooltip")}
      description={t(
        "Một popup nhỏ hiển thị thông tin bổ sung khi người dùng di chuột hoặc trỏ tiêu điểm vào một phần tử.",
        "A small popup that displays additional information when the user hovers or focuses on an element.",
      )}
      guideline={
        <ShowcaseDocs>
          <DocsH3>{t("Tooltip (Gợi ý)", "Tooltip")}</DocsH3>
          <DocsP>
            <DocsCode>Tooltip</DocsCode>{" "}
            {t(
              "không có phiên bản Macro vì bản chất nó chỉ là một popup hiển thị chữ. Bạn cần bọc toàn bộ ứng dụng hoặc nhóm các tooltip lại bằng",
              "does not have a Macro version because it is essentially just a text popup. You need to wrap the entire app or groups of tooltips with",
            )}{" "}
            <DocsCode>TooltipProvider</DocsCode>{" "}
            {t(
              "để quản lý delay xuất hiện đồng bộ.",
              "to manage synchronous appearance delays.",
            )}
          </DocsP>
        </ShowcaseDocs>
      }
      micro={{ content: <TooltipMicroShowcase globalSize={globalSize} /> }}
    />
  );
}
