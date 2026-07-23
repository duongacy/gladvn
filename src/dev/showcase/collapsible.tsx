import * as React from "react";

import { ChevronsUpDownIcon } from "lucide-react";

import { Button } from "../../components/micro/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger } from "../../components/micro/collapsible";
import {
  DocsP,
  ExampleGrid,
  ExampleSection,
  Showcase,
  ShowcaseDocs } from "../../dev/components/showcase";

function CollapsibleMicroShowcase() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="space-y-10 mt-6">
      <ExampleGrid>
        <ExampleSection
          label="Default"
          description="Nhấn để mở rộng hoặc thu gọn."
          codeString={`<Collapsible className="w-full space-y-2">
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
  </Collapsible>`}
        >
          <Collapsible className="w-full space-y-2">
            <div className="flex items-center justify-between space-x-4 px-4">
              <h4 className="text-sm font-semibold">
                @peduarte starred 3 repositories
              </h4>
              <CollapsibleTrigger
                render={
                  <Button variant="ghost" size="sm" className="w-9 p-0" />
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
        </ExampleSection>

        <ExampleSection
          label="Default Open"
          description="Bắt đầu ở trạng thái mở rộng."
          codeString={`<Collapsible defaultOpen className="w-full space-y-2">
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
  </Collapsible>`}
        >
          <Collapsible defaultOpen className="w-full space-y-2">
            <div className="flex items-center justify-between space-x-4 px-4">
              <h4 className="text-sm font-semibold">Recent activity</h4>
              <CollapsibleTrigger
                render={
                  <Button variant="ghost" size="sm" className="w-9 p-0" />
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
        </ExampleSection>

        <ExampleSection
          label="Controlled Mode"
          description="Trạng thái mở được kiểm soát bằng state."
          codeString={`const [isOpen, setIsOpen] = React.useState(false) return (
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
  )`}
        >
          <div className="w-full space-y-4">
            {/* Đây là nút nằm HOÀN TOÀN BÊN NGOÀI thẻ Collapsible */}
            <div className="flex items-center gap-4 rounded-md border border-border border-dashed p-4">
              <Button size="sm" onClick={() => setIsOpen(!isOpen)}>
                {isOpen
                  ? "Đóng bảng bên dưới (External)"
                  : "Mở bảng bên dưới (External)"}
              </Button>
              <span className="text-sm text-muted-foreground">
                State hiện tại:{" "}
                <strong className="text-foreground">
                  {isOpen ? "Mở" : "Đóng"}
                </strong>
              </span>
            </div>

            {/* Đây là component Collapsible nhận state từ ngoài */}
            <Collapsible
              open={isOpen}
              onOpenChange={setIsOpen}
              className="w-full space-y-2 rounded-md border border-border p-4 bg-muted/20"
            >
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold">
                  Bảng hiển thị nội dung
                </h4>
                <CollapsibleTrigger
                  render={
                    <Button variant="ghost" size="sm" className="w-9 p-0" />
                  }
                >
                  <ChevronsUpDownIcon className="h-4 w-4" />
                  <span className="sr-only">Toggle</span>
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent>
                <div className="flex flex-col gap-2 pt-2">
                  <div className="rounded-md border border-border bg-muted/50 px-4 py-3 font-mono text-sm text-center">
                    Nội dung này được điều khiển bởi nút bên ngoài hoặc mũi tên
                    ở trên!
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </ExampleSection>

        <ExampleSection
          label="Disabled"
          description="Không thể tương tác (Vô hiệu hóa)."
          codeString={`<Collapsible disabled className="w-full space-y-2">
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
  </Collapsible>`}
        >
          <Collapsible disabled className="w-full space-y-2">
            <div className="flex items-center justify-between space-x-4 px-4 opacity-50">
              <h4 className="text-sm font-semibold">Archived Repositories</h4>
              <CollapsibleTrigger
                render={
                  <Button variant="ghost" size="sm" className="w-9 p-0" />
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
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 3: Entry point
// ──────────────────────────────────────────────────────────
export default function CollapsibleShowcase() {
  return (
    <Showcase
      title="Collapsible"
      description="Mở rộng/thu gọn một panel nội dung."
      generalConcept={
        <ShowcaseDocs>
          <DocsP>
            Dùng để ẩn/hiện các phần nội dung phụ, giúp tiết kiệm không gian màn
            hình. Thường được sử dụng cho phần bình luận, chi tiết đơn hàng,
            hoặc các danh sách dài có thể thu gọn.
          </DocsP>
        </ShowcaseDocs>
      }
      tabs={[
        {
          label: "Micro (Primitive)",
          content: <CollapsibleMicroShowcase /> },
      ]}
    />
  );
}
