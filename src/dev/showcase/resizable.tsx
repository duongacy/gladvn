import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../../components/micro/resizable";
import { useI18n } from "../../dev/components/dev-context";
import {
  DocsCode,
  DocsP,
  ExampleGrid,
  Showcase,
  ShowcaseDocs,
  ShowcaseExample,
} from "../../dev/components/showcase";

function ResizableMicroShowcase() {
  const t = useI18n();
  return (
    <div className="space-y-10">
      <ShowcaseExample
        title={t("Horizontal Split", "Horizontal Split")}
        description={t(
          "Kéo tay cầm để thay đổi kích thước bảng theo chiều ngang.",
          "Drag the handle to resize panels horizontally.",
        )}
        code={`<ResizablePanelGroup
    orientation="horizontal"
    className="max-w-md rounded-xl border border-border bg-card"
  >
    <ResizablePanel defaultSize={50}>
      <div className="flex h-50 items-center justify-center p-6">
        <span className="font-semibold text-sm">
          Sidebar
        </span>
      </div>
    </ResizablePanel>
    <ResizableHandle withHandle />
    <ResizablePanel defaultSize={50}>
      <div className="flex h-full items-center justify-center p-6">
        <span className="font-semibold text-sm">
          Content
        </span>
      </div>
    </ResizablePanel>
  </ResizablePanelGroup>`}
        preview={
          <>
            <ResizablePanelGroup
              orientation="horizontal"
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
          </>
        }
      />

      <ShowcaseExample
        title={t("Vertical Split", "Vertical Split")}
        description={t(
          'orientation="vertical" chia bảng theo chiều dọc.',
          'orientation="vertical" splits panels vertically.',
        )}
        code={`<ResizablePanelGroup
    orientation="vertical"
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
        <span className="font-semibold text-sm">
          Bottom
        </span>
      </div>
    </ResizablePanel>
  </ResizablePanelGroup>`}
        preview={
          <>
            <ResizablePanelGroup
              orientation="vertical"
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
          </>
        }
      />

      <ExampleGrid>
        <ShowcaseExample
          title={t("With Handle Grip", "With Handle Grip")}
          description={t(
            "withHandle hiển thị thanh tay cầm trực quan ở giữa divider.",
            "withHandle displays a visual handle grip in the middle of the divider.",
          )}
          code={`<ResizableHandle withHandle />`}
          preview={
            <>
              <ResizablePanelGroup
                orientation="horizontal"
                className="rounded-xl border border-border bg-card"
              >
                <ResizablePanel defaultSize={50}>
                  <div className="flex h-30 items-center justify-center p-4">
                    <span className="text-sm font-medium">Panel A</span>
                  </div>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={50}>
                  <div className="flex h-full items-center justify-center p-4">
                    <span className="text-sm font-medium">Panel B</span>
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </>
          }
        />

        <ShowcaseExample
          title={t("Plain Divider", "Plain Divider")}
          description={t(
            "Bỏ withHandle để chỉ hiển thị đường phân cách mỏng, không có visual grip.",
            "Omit withHandle to only display a thin divider line, without a visual grip.",
          )}
          code={`<ResizableHandle />`}
          preview={
            <>
              <ResizablePanelGroup
                orientation="horizontal"
                className="rounded-xl border border-border bg-card"
              >
                <ResizablePanel defaultSize={50}>
                  <div className="flex h-30 items-center justify-center p-4">
                    <span className="text-sm font-medium">Panel A</span>
                  </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={50}>
                  <div className="flex h-full items-center justify-center p-4">
                    <span className="text-sm font-medium">Panel B</span>
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </>
          }
        />
      </ExampleGrid>

      <ShowcaseExample
        title={t("Nested Layout", "Nested Layout")}
        description={t(
          "Bố cục phức tạp với các nhóm có thể thay đổi kích thước lồng nhau.",
          "Complex layout with nested resizable groups.",
        )}
        code={`<ResizablePanelGroup
    orientation="horizontal"
    className="max-w-md rounded-xl border border-border bg-card"
  >
    <ResizablePanel defaultSize={25} minSize={15}>
      <div className="flex h-[250px] items-center justify-center p-6">
        <span className="font-semibold text-sm">Navigation</span>
      </div>
    </ResizablePanel>
    <ResizableHandle />
    <ResizablePanel defaultSize={75}>
      <ResizablePanelGroup orientation="vertical">
        <ResizablePanel defaultSize={25} minSize={20}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold text-sm">
              Top Bar
            </span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={75}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold text-sm">
              Main Content
            </span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </ResizablePanel>
  </ResizablePanelGroup>`}
        preview={
          <>
            <ResizablePanelGroup
              orientation="horizontal"
              className="max-w-md rounded-xl border border-border bg-card"
            >
              <ResizablePanel defaultSize={25} minSize={15}>
                <div className="flex h-[250px] items-center justify-center p-6">
                  <span className="font-semibold text-sm">Navigation</span>
                </div>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={75}>
                <ResizablePanelGroup orientation="vertical">
                  <ResizablePanel defaultSize={25} minSize={20}>
                    <div className="flex h-full items-center justify-center p-6">
                      <span className="font-semibold text-sm">Top Bar</span>
                    </div>
                  </ResizablePanel>
                  <ResizableHandle />
                  <ResizablePanel defaultSize={75}>
                    <div className="flex h-full items-center justify-center p-6">
                      <span className="font-semibold text-sm">
                        Content chính
                      </span>
                    </div>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </ResizablePanel>
            </ResizablePanelGroup>
          </>
        }
      />
    </div>
  );
}

export default function ResizableShowcase() {
  const t = useI18n();
  return (
    <Showcase
      title="Resizable"
      description={t(
        "Panel có thể thay đổi kích thước với hỗ trợ bàn phím, lồng nhau linh hoạt.",
        "Resizable panels with keyboard support, flexible nesting.",
      )}
      guideline={
        <ShowcaseDocs>
          <DocsP>
            Resizable sử dụng thư viện{" "}
            <DocsCode>react-resizable-panels</DocsCode> để tạo các panel có thể
            kéo thay đổi kích thước. Dùng{" "}
            <DocsCode>ResizablePanelGroup</DocsCode> làm container,{" "}
            <DocsCode>ResizablePanel</DocsCode> cho nội dung, và{" "}
            <DocsCode>ResizableHandle</DocsCode> cho thanh phân cách tương tác.
            Prop <DocsCode>withHandle</DocsCode> hiển thị visual grip giúp người
            dùng dễ nhận biết vùng kéo hơn.
          </DocsP>
        </ShowcaseDocs>
      }
      micro={{ content: <ResizableMicroShowcase /> }}
    />
  );
}
