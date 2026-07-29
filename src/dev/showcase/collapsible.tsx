import * as React from "react";

import { ChevronsUpDownIcon } from "lucide-react";

import { Button } from "../../components/micro/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "../../components/micro/collapsible";
import { useDevContext, useI18n } from "../../dev/components/dev-context";
import {
  DocsP,
  ExampleGrid,
  Showcase,
  ShowcaseDocs,
  ShowcaseExample
} from "../../dev/components/showcase";

function CollapsibleMicroShowcase() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { size: globalSize } = useDevContext();
  const t = useI18n();

  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample 
          title="Default" 
          description={t("Nhấn để mở rộng hoặc thu gọn.", "Click to expand or collapse.")} 
          code={`<Collapsible className="w-full space-y-2">
    <div className="flex items-center justify-between space-x-4 px-4">
      <h4 className="text-sm font-semibold">
        @peduarte starred 3 repositories
      </h4>
      <CollapsibleTrigger
        render={
          <Button
            variant="ghost"
            size="sm"
            className="w-9 p-0"
          />
        }
      >
        <ChevronsUpDownIcon className="h-4 w-4" />
        <span className="sr-only">Toggle</span>
      </CollapsibleTrigger>
    </div>
    <div className="rounded-md border border-border bg-muted/50 px-4 py-3 font-mono text-sm">
      @radix-ui/primitives
    </div>
    <CollapsibleContent>
      <div className="flex flex-col gap-2">
        <div className="rounded-md border border-border bg-muted/50 px-4 py-3 font-mono text-sm">
          @radix-ui/colors
        </div>
        <div className="rounded-md border border-border bg-muted/50 px-4 py-3 font-mono text-sm">
          @stitches/react
        </div>
      </div>
    </CollapsibleContent>
  </Collapsible>`} preview={
                      <>
              <Collapsible className="w-full space-y-2">
                          <div className="flex items-center justify-between space-x-4 px-4">
                            <h4 className="text-sm font-semibold">
                              @peduarte starred 3 repositories
                            </h4>
                            <CollapsibleTrigger
                              render={
                                <Button variant="ghost" size={globalSize} className="w-9 p-0" />
                              }
                            >
                              <ChevronsUpDownIcon className="h-4 w-4" />
                              <span className="sr-only">Toggle</span>
                            </CollapsibleTrigger>
                          </div>
                          <div className="rounded-md border border-border bg-muted/50 px-4 py-3 font-mono text-sm">
                            @radix-ui/primitives
                          </div>
                          <CollapsibleContent>
                            <div className="flex flex-col gap-2">
                              <div className="rounded-md border border-border bg-muted/50 px-4 py-3 font-mono text-sm">
                                @radix-ui/colors
                              </div>
                              <div className="rounded-md border border-border bg-muted/50 px-4 py-3 font-mono text-sm">
                                @stitches/react
                              </div>
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      </>
                    } />

        <ShowcaseExample 
          title={t("Mở mặc định", "Default Open")} 
          description={t("Bắt đầu ở trạng thái mở rộng.", "Starts in an expanded state.")} 
          code={`<Collapsible defaultOpen className="w-full space-y-2">
    <div className="flex items-center justify-between space-x-4 px-4">
      <h4 className="text-sm font-semibold">
        Recent activity
      </h4>
      <CollapsibleTrigger
        render={
          <Button
            variant="ghost"
            size="sm"
            className="w-9 p-0"
          />
        }
      >
        <ChevronsUpDownIcon className="h-4 w-4" />
        <span className="sr-only">Toggle</span>
      </CollapsibleTrigger>
    </div>
    <div className="rounded-md border border-border bg-muted/50 px-4 py-3 font-mono text-sm">
      Pushed to main
    </div>
    <CollapsibleContent>
      <div className="flex flex-col gap-2">
        <div className="rounded-md border border-border bg-muted/50 px-4 py-3 font-mono text-sm">
          Merged PR #42
        </div>
        <div className="rounded-md border border-border bg-muted/50 px-4 py-3 font-mono text-sm">
          Opened issue #43
        </div>
      </div>
    </CollapsibleContent>
  </Collapsible>`} preview={
                      <>
              <Collapsible defaultOpen className="w-full space-y-2">
                          <div className="flex items-center justify-between space-x-4 px-4">
                            <h4 className="text-sm font-semibold">Recent activity</h4>
                            <CollapsibleTrigger
                              render={
                                <Button variant="ghost" size={globalSize} className="w-9 p-0" />
                              }
                            >
                              <ChevronsUpDownIcon className="h-4 w-4" />
                              <span className="sr-only">Toggle</span>
                            </CollapsibleTrigger>
                          </div>
                          <div className="rounded-md border border-border bg-muted/50 px-4 py-3 font-mono text-sm">
                            Pushed to main
                          </div>
                          <CollapsibleContent>
                            <div className="flex flex-col gap-2">
                              <div className="rounded-md border border-border bg-muted/50 px-4 py-3 font-mono text-sm">
                                Merged PR #42
                              </div>
                              <div className="rounded-md border border-border bg-muted/50 px-4 py-3 font-mono text-sm">
                                Opened issue #43
                              </div>
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      </>
                    } />

        <ShowcaseExample 
          title="Controlled Mode" 
          description={t("Trạng thái mở được kiểm soát bằng state.", "Open state controlled by state variable.")} 
          code={t(`const [isOpen, setIsOpen] = React.useState(false) return (
  <Collapsible
    open={isOpen}
    onOpenChange={setIsOpen}
    className="w-full space-y-2"
  >
    <div className="flex items-center justify-between space-x-4 px-4">
      <h4 className="text-sm font-semibold">
        Bảng hiển thị nội dung
      </h4>
      <CollapsibleTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="w-9 p-0"
        >
          <ChevronsUpDown className="h-4 w-4" />
          <span className="sr-only">Toggle</span>
        </Button>
      </CollapsibleTrigger>
    </div>
    <CollapsibleContent>
      <div className="rounded-md border border-border bg-muted/50 px-4 py-3 font-mono text-sm">
        Nội dung này được điều khiển bởi nút bên ngoài hoặc
        mũi tên ở trên!
      </div>
    </CollapsibleContent>
  </Collapsible>
  )`, `const [isOpen, setIsOpen] = React.useState(false) return (
  <Collapsible
    open={isOpen}
    onOpenChange={setIsOpen}
    className="w-full space-y-2"
  >
    <div className="flex items-center justify-between space-x-4 px-4">
      <h4 className="text-sm font-semibold">
        Content display panel
      </h4>
      <CollapsibleTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="w-9 p-0"
        >
          <ChevronsUpDown className="h-4 w-4" />
          <span className="sr-only">Toggle</span>
        </Button>
      </CollapsibleTrigger>
    </div>
    <CollapsibleContent>
      <div className="rounded-md border border-border bg-muted/50 px-4 py-3 font-mono text-sm">
        This content is controlled by the external button or the arrow above!
      </div>
    </CollapsibleContent>
  </Collapsible>
  )`)} 
          preview={
            <>
              <div className="w-full space-y-4">
                <div className="flex items-center gap-4 rounded-md border border-border border-dashed p-4">
                  <Button size={globalSize} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen
                      ? t("Đóng bảng bên dưới (External)", "Close panel below (External)")
                      : t("Mở bảng bên dưới (External)", "Open panel below (External)")}
                  </Button>
                  <span className="text-sm text-muted-foreground">
                    {t("State hiện tại:", "Current state:")}{" "}
                    <strong className="text-foreground">
                      {isOpen ? t("Mở", "Open") : t("Đóng", "Closed")}
                    </strong>
                  </span>
                </div>

                <Collapsible
                  open={isOpen}
                  onOpenChange={setIsOpen}
                  className="w-full space-y-2 rounded-md border border-border p-4 bg-muted/20"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold">
                      {t("Bảng hiển thị nội dung", "Content display panel")}
                    </h4>
                    <CollapsibleTrigger
                      render={
                        <Button variant="ghost" size={globalSize} className="w-9 p-0" />
                      }
                    >
                      <ChevronsUpDownIcon className="h-4 w-4" />
                      <span className="sr-only">Toggle</span>
                    </CollapsibleTrigger>
                  </div>
                  <CollapsibleContent>
                    <div className="flex flex-col gap-2 pt-2">
                      <div className="rounded-md border border-border bg-muted/50 px-4 py-3 font-mono text-sm text-center">
                        {t(
                          "Nội dung này được điều khiển bởi nút bên ngoài hoặc mũi tên ở trên!",
                          "This content is controlled by the external button or the arrow above!"
                        )}
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </>
          } />

        <ShowcaseExample 
          title="Disabled" 
          description={t("Không thể tương tác (Vô hiệu hóa).", "Cannot be interacted with (Disabled).")} 
          code={`<Collapsible disabled className="w-full space-y-2">
    <div className="flex items-center justify-between space-x-4 px-4 opacity-50">
      <h4 className="text-sm font-semibold">
        Archived Repositories
      </h4>
      <CollapsibleTrigger
        render={
          <Button
            variant="ghost"
            size="sm"
            className="w-9 p-0"
          />
        }
      >
        <ChevronsUpDownIcon className="h-4 w-4" />
        <span className="sr-only">Toggle</span>
      </CollapsibleTrigger>
    </div>
    <div className="rounded-md border border-border bg-muted/50 px-4 py-3 font-mono text-sm opacity-50">
      @radix-ui/react-toolbar
    </div>
    <CollapsibleContent>
      <div className="flex flex-col gap-2">
        <div className="rounded-md border border-border bg-muted/50 px-4 py-3 font-mono text-sm opacity-50">
          @radix-ui/react-popover
        </div>
      </div>
    </CollapsibleContent>
  </Collapsible>`} preview={
                      <>
              <Collapsible disabled className="w-full space-y-2">
                          <div className="flex items-center justify-between space-x-4 px-4 opacity-50">
                            <h4 className="text-sm font-semibold">Archived Repositories</h4>
                            <CollapsibleTrigger
                              render={
                                <Button variant="ghost" size={globalSize} className="w-9 p-0" />
                              }
                            >
                              <ChevronsUpDownIcon className="h-4 w-4" />
                              <span className="sr-only">Toggle</span>
                            </CollapsibleTrigger>
                          </div>
                          <div className="rounded-md border border-border bg-muted/50 px-4 py-3 font-mono text-sm opacity-50">
                            @radix-ui/react-toolbar
                          </div>
                          <CollapsibleContent>
                            <div className="flex flex-col gap-2">
                              <div className="rounded-md border border-border bg-muted/50 px-4 py-3 font-mono text-sm opacity-50">
                                @radix-ui/react-popover
                              </div>
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      </>
                    } />
      </ExampleGrid>
    </div>
  );
}

export default function CollapsibleShowcase() {
  const t = useI18n();
  return (
    <Showcase
      title="Collapsible"
      description={t("Mở rộng/thu gọn một panel nội dung.", "Expand/collapse a content panel.")}
      guideline={
        <ShowcaseDocs>
          <DocsP>
            {t(
              "Dùng để ẩn/hiện các phần nội dung phụ, giúp tiết kiệm không gian màn hình. Thường được sử dụng cho phần bình luận, chi tiết đơn hàng, hoặc các danh sách dài có thể thu gọn.",
              "Used to show/hide secondary content, saving screen space. Commonly used for comments, order details, or long collapsible lists."
            )}
          </DocsP>
        </ShowcaseDocs>
      }
      micro={{ content: <CollapsibleMicroShowcase /> }}
    />
  );
}
