import React from "react";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/micro/resizable";
import { useI18n } from "~app/components/dev-context";
import {
  ConfigurableShowcase,
  ShowcaseDocs,
  DocsP,
  DocsCode,
} from "~app/components/showcase";

function useResizableExamples() {
  const t = useI18n();

  return React.useMemo(
    () => [
      {
        title: t("Chia ngang", "Horizontal Split"),
        description: t(
          "Kéo tay cầm để thay đổi kích thước bảng theo chiều ngang.",
          "Drag the handle to resize panels horizontally."
        ),
        microCode: `<ResizablePanelGroup
  direction="horizontal"
  className="max-w-md rounded-xl border border-border bg-card"
>
  <ResizablePanel defaultSize={50}>
    <div className="flex h-50 items-center justify-center p-6">
      <span className="font-semibold text-sm">Sidebar</span>
    </div>
  </ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={50}>
    <div className="flex h-full items-center justify-center p-6">
      <span className="font-semibold text-sm">Content</span>
    </div>
  </ResizablePanel>
</ResizablePanelGroup>`,
        microPreview: (
          <ResizablePanelGroup
            direction="horizontal"
            className="max-w-md rounded-xl border border-border bg-card"
          >
            <ResizablePanel defaultSize={50}>
              <div className="flex h-50 items-center justify-center p-6">
                <span className="font-semibold text-sm">Sidebar</span>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={50}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold text-sm">Content</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        ),
      },
      {
        title: t("Chia dọc", "Vertical Split"),
        description: t(
          'direction="vertical" chia bảng theo chiều dọc.',
          'direction="vertical" splits panels vertically.'
        ),
        microCode: `<ResizablePanelGroup
  direction="vertical"
  className="max-w-md rounded-xl border border-border bg-card"
>
  <ResizablePanel defaultSize={50}>
    <div className="flex h-30 items-center justify-center p-6">
      <span className="font-semibold text-sm">Top</span>
    </div>
  </ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={50}>
    <div className="flex h-30 items-center justify-center p-6">
      <span className="font-semibold text-sm">Bottom</span>
    </div>
  </ResizablePanel>
</ResizablePanelGroup>`,
        microPreview: (
          <ResizablePanelGroup
            direction="vertical"
            className="max-w-md rounded-xl border border-border bg-card"
          >
            <ResizablePanel defaultSize={50}>
              <div className="flex h-30 items-center justify-center p-6">
                <span className="font-semibold text-sm">Top</span>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={50}>
              <div className="flex h-30 items-center justify-center p-6">
                <span className="font-semibold text-sm">Bottom</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        ),
      },
      {
        title: t("Bố cục lồng nhau", "Nested Layout"),
        description: t(
          "Bố cục phức tạp với các nhóm có thể thay đổi kích thước lồng nhau.",
          "Complex layout with nested resizable groups."
        ),
        microCode: `<ResizablePanelGroup
  direction="horizontal"
  className="max-w-md rounded-xl border border-border bg-card"
>
  <ResizablePanel defaultSize={25} minSize={15}>
    <div className="flex h-[250px] items-center justify-center p-6">
      <span className="font-semibold text-sm">Navigation</span>
    </div>
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={75}>
    <ResizablePanelGroup direction="vertical">
      <ResizablePanel defaultSize={25} minSize={20}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold text-sm">Top Bar</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={75}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold text-sm">Main Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  </ResizablePanel>
</ResizablePanelGroup>`,
        microPreview: (
          <ResizablePanelGroup
            direction="horizontal"
            className="max-w-md rounded-xl border border-border bg-card"
          >
            <ResizablePanel defaultSize={25} minSize={15}>
              <div className="flex h-[250px] items-center justify-center p-6">
                <span className="font-semibold text-sm">Navigation</span>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={75}>
              <ResizablePanelGroup direction="vertical">
                <ResizablePanel defaultSize={25} minSize={20}>
                  <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold text-sm">Top Bar</span>
                  </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={75}>
                  <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold text-sm">Main Content</span>
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </ResizablePanel>
          </ResizablePanelGroup>
        ),
      },
    ],
    [t]
  );
}

export default function ResizableShowcase() {
  const t = useI18n();
  const examples = useResizableExamples();

  return (
    <ConfigurableShowcase
      title="Resizable"
      description={t(
        "Panel có thể thay đổi kích thước với hỗ trợ bàn phím, lồng nhau linh hoạt.",
        "Resizable panels with keyboard support, flexible nesting."
      )}
      guideline={
        <ShowcaseDocs>
          <DocsP>
            {t("Resizable sử dụng thư viện ", "Resizable uses the ")}
            <DocsCode>react-resizable-panels</DocsCode>{" "}
            {t(
              "để tạo các panel có thể kéo thay đổi kích thước. Dùng ",
              "library to create draggable resizable panels. Use "
            )}
            <DocsCode>ResizablePanelGroup</DocsCode>{" "}
            {t("làm container, ", "as the container, ")}
            <DocsCode>ResizablePanel</DocsCode>{" "}
            {t("cho nội dung, và ", "for content, and ")}
            <DocsCode>ResizableHandle</DocsCode>{" "}
            {t(
              "cho thanh phân cách tương tác. Prop ",
              "for the interactive separator. The "
            )}
            <DocsCode>withHandle</DocsCode>{" "}
            {t(
              "hiển thị visual grip giúp người dùng dễ nhận biết vùng kéo hơn.",
              "prop displays a visual grip to help users easily identify the draggable area."
            )}
          </DocsP>
        </ShowcaseDocs>
      }
      examples={examples}
    />
  );
}
