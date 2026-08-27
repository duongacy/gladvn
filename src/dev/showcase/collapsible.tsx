import * as React from "react";
import { ChevronsUpDown } from "lucide-react";

import { Button } from "../../components/micro/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../components/micro/collapsible";
import { useDevContext, useI18n } from "../components/dev-context";
import {
  ConfigurableShowcase,
  ShowcaseDocs,
  DocsP,
} from "../components/showcase";

function useCollapsibleExamples() {
  const t = useI18n();
  const { size: globalSize } = useDevContext();

  return React.useMemo(
    () => [
      {
        title: t("Mặc định", "Default"),
        description: t(
          "Nhấn để mở rộng hoặc thu gọn.",
          "Click to expand or collapse."
        ),
        microCode: `<div className="w-full sm:w-[350px]">
  <Collapsible className="space-y-2">
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
        <ChevronsUpDown className="h-4 w-4" />
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
</div>`,
        microPreview: (
          <div className="w-full sm:w-[350px]">
            <Collapsible className="space-y-2">
              <div className="flex items-center justify-between space-x-4 px-4">
                <h4 className="text-sm font-semibold">
                  @peduarte starred 3 repositories
                </h4>
                <CollapsibleTrigger
                  render={
                    <Button
                      variant="ghost"
                      size={globalSize}
                      className="w-9 p-0"
                    />
                  }
                >
                  <ChevronsUpDown className="h-4 w-4" />
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
          </div>
        ),
      },
      {
        title: t("Mở mặc định", "Default Open"),
        description: t(
          "Bắt đầu ở trạng thái mở rộng bằng cách truyền defaultOpen.",
          "Starts in an expanded state by passing defaultOpen."
        ),
        microCode: `<div className="w-full sm:w-[350px]">
  <Collapsible defaultOpen className="space-y-2">
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
        <ChevronsUpDown className="h-4 w-4" />
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
</div>`,
        microPreview: (
          <div className="w-full sm:w-[350px]">
            <Collapsible defaultOpen className="space-y-2">
              <div className="flex items-center justify-between space-x-4 px-4">
                <h4 className="text-sm font-semibold">Recent activity</h4>
                <CollapsibleTrigger
                  render={
                    <Button
                      variant="ghost"
                      size={globalSize}
                      className="w-9 p-0"
                    />
                  }
                >
                  <ChevronsUpDown className="h-4 w-4" />
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
          </div>
        ),
      },
      {
        title: t("Vô hiệu hóa", "Disabled"),
        description: t(
          "Không thể tương tác để thay đổi trạng thái đóng/mở.",
          "Cannot be interacted with to toggle state."
        ),
        microCode: `<div className="w-full sm:w-[350px]">
  <Collapsible disabled className="space-y-2">
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
        <ChevronsUpDown className="h-4 w-4" />
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
</div>`,
        microPreview: (
          <div className="w-full sm:w-[350px]">
            <Collapsible disabled className="space-y-2">
              <div className="flex items-center justify-between space-x-4 px-4 opacity-50">
                <h4 className="text-sm font-semibold">Archived Repositories</h4>
                <CollapsibleTrigger
                  render={
                    <Button
                      variant="ghost"
                      size={globalSize}
                      className="w-9 p-0"
                    />
                  }
                >
                  <ChevronsUpDown className="h-4 w-4" />
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
          </div>
        ),
      },
    ],
    [globalSize, t]
  );
}

export default function CollapsibleShowcase() {
  const t = useI18n();
  const examples = useCollapsibleExamples();

  return (
    <ConfigurableShowcase
      title="Collapsible"
      description={t(
        "Mở rộng/thu gọn một panel nội dung.",
        "Expand/collapse a content panel."
      )}
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
      examples={examples}
    />
  );
}
