import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup } from "../../components/micro/resizable";
import {
  DocsCode,
  DocsP,
  ExampleGrid,
  ExampleSection,
  Showcase,
  ShowcaseDocs } from "../../dev/components/showcase";

// ──────────────────────────────────────────────────────────
// SECTION 1: Micro Content
// ──────────────────────────────────────────────────────────
function ResizableMicroShowcase() {
  return (
    <div className="space-y-10 mt-6">
      {/* Horizontal split */}
      <ExampleSection
        label="Horizontal Split"
        description="Kéo tay cầm để thay đổi kích thước bảng theo chiều ngang."
        codeString={`<ResizablePanelGroup
    orientation="horizontal"
    className="max-w-md rounded-xl border border-border bg-card"
  >
    <ResizablePanel defaultSize={50}>
      <div className="flex h-[200px] items-center justify-center p-6">
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
      >
        <ResizablePanelGroup
          orientation="horizontal"
          className="max-w-md rounded-xl border border-border bg-card"
        >
          <ResizablePanel defaultSize={50}>
            <div className="flex h-[200px] items-center justify-center p-6">
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
      </ExampleSection>

      {/* Vertical split */}
      <ExampleSection
        label="Vertical Split"
        description='orientation="vertical" chia bảng theo chiều dọc.'
        codeString={`<ResizablePanelGroup
    orientation="vertical"
    className="max-w-md rounded-xl border border-border bg-card"
  >
    <ResizablePanel defaultSize={50}>
      <div className="flex h-[120px] items-center justify-center p-6">
        <span className="font-semibold text-sm">Top</span>
      </div>
    </ResizablePanel>
    <ResizableHandle withHandle />
    <ResizablePanel defaultSize={50}>
      <div className="flex h-[120px] items-center justify-center p-6">
        <span className="font-semibold text-sm">
          Bottom
        </span>
      </div>
    </ResizablePanel>
  </ResizablePanelGroup>`}
      >
        <ResizablePanelGroup
          orientation="vertical"
          className="max-w-md rounded-xl border border-border bg-card"
        >
          <ResizablePanel defaultSize={50}>
            <div className="flex h-[120px] items-center justify-center p-6">
              <span className="font-semibold text-sm">Top</span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={50}>
            <div className="flex h-[120px] items-center justify-center p-6">
              <span className="font-semibold text-sm">Bottom</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ExampleSection>

      {/* Handle variants */}
      <ExampleGrid>
        <ExampleSection
          label="With Handle Grip"
          description="withHandle hiển thị thanh tay cầm trực quan ở giữa divider."
          codeString={`<ResizableHandle withHandle />`}
        >
          <ResizablePanelGroup
            orientation="horizontal"
            className="rounded-xl border border-border bg-card"
          >
            <ResizablePanel defaultSize={50}>
              <div className="flex h-[120px] items-center justify-center p-4">
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
        </ExampleSection>

        <ExampleSection
          label="Plain Divider"
          description="Bỏ withHandle để chỉ hiển thị đường phân cách mỏng, không có visual grip."
          codeString={`<ResizableHandle />`}
        >
          <ResizablePanelGroup
            orientation="horizontal"
            className="rounded-xl border border-border bg-card"
          >
            <ResizablePanel defaultSize={50}>
              <div className="flex h-[120px] items-center justify-center p-4">
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
        </ExampleSection>
      </ExampleGrid>

      {/* Nested layout */}
      <ExampleSection
        label="Nested Layout"
        description="Bố cục phức tạp với các nhóm có thể thay đổi kích thước lồng nhau."
        codeString={`<ResizablePanelGroup
    orientation="horizontal"
    className="max-w-md rounded-xl border border-border bg-card"
  >
    <ResizablePanel defaultSize={25} minSize={15}>
      <div className="flex h-[250px] items-center justify-center p-6">
        <span className="font-semibold text-sm">Nav</span>
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
      >
        <ResizablePanelGroup
          orientation="horizontal"
          className="max-w-md rounded-xl border border-border bg-card"
        >
          <ResizablePanel defaultSize={25} minSize={15}>
            <div className="flex h-[250px] items-center justify-center p-6">
              <span className="font-semibold text-sm">Nav</span>
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
                  <span className="font-semibold text-sm">Main Content</span>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ExampleSection>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 2: Entry point
// ──────────────────────────────────────────────────────────
export default function ResizableShowcase() {
  return (
    <Showcase
      title="Resizable"
      description="Panel có thể thay đổi kích thước với hỗ trợ bàn phím, lồng nhau linh hoạt."
      generalConcept={
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
      tabs={[
        { label: "Micro (Primitive)", content: <ResizableMicroShowcase /> },
      ]}
    />
  );
}
