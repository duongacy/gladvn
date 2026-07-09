import { SectionHeader, ExampleSection } from "@/dev/components/showcase";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/micro/resizable";

export default function ResizableShowcase() {
  return (
    <div className="space-y-10">
      <SectionHeader
        title="Resizable"
        description="Các nhóm và bố cục bảng điều khiển có thể thay đổi kích thước có thể truy cập được với sự hỗ trợ của bàn phím."
      />

      <ExampleSection
        label="Horizontal Split"
        description="Kéo tay cầm để thay đổi kích thước bảng."
        codeString={`<ResizablePanelGroup
  orientation="horizontal"
  className="max-w-md rounded-xl border bg-card"
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
`}
      >
        <ResizablePanelGroup
          orientation="horizontal"
          className="max-w-md rounded-xl border bg-card"
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

      <ExampleSection
        label="Nested Layout"
        description="Bố cục phức tạp với các nhóm có thể thay đổi kích thước lồng nhau."
        codeString={`<ResizablePanelGroup
  orientation="horizontal"
  className="max-w-md rounded-xl border bg-card"
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
`}
      >
        <ResizablePanelGroup
          orientation="horizontal"
          className="max-w-md rounded-xl border bg-card"
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
