import { SectionHeader, ExampleSection } from "@/dev/components/showcase";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/micro/resizable";

export default function ResizableShowcase() {
  return (
    <div className="space-y-10">
      <SectionHeader
        title="Resizable"
        description="Accessible resizable panel groups and layouts with keyboard support."
      />

      <ExampleSection
        label="Horizontal Split"
        description="Drag the handle to resize panels."
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
        description="Complex layout with nested resizable groups."
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
