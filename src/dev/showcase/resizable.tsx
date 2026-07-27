import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
} from "../../components/micro/resizable";
import {
  DocsCode,
  DocsP,
  ExampleGrid,
  Showcase,
  ShowcaseDocs,
  ShowcaseExample
} from "../../dev/components/showcase";

function ResizableMicroShowcase() {
  return (
    <div className="space-y-10">
      <ShowcaseExample title="Horizontal Split" description="Kéo tay cầm để thay đổi kích thước bảng theo chiều ngang." code={`<ResizablePanelGroup
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
  </ResizablePanelGroup>`} preview={
                  <>
          <ResizablePanelGroup
                    orientation="horizontal"
                    className="max-w-md rounded-xl border border-border bg-card"
                  >
                    <ResizablePanel defaultSize={50}>
                      <div className="flex h-50 items-center justify-center p-6">
                        <span className="font-semibold text-sm">Thanh bên (Sidebar)</span>
                      </div>
                    </ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel defaultSize={50}>
                      <div className="flex h-full items-center justify-center p-6">
                        <span className="font-semibold text-sm">Nội dung</span>
                      </div>
                    </ResizablePanel>
                  </ResizablePanelGroup>
                  </>
                } />

      <ShowcaseExample title="Vertical Split" description='orientation="vertical" chia bảng theo chiều dọc.' code={`<ResizablePanelGroup
    orientation="vertical"
    className="max-w-md rounded-xl border border-border bg-card"
  >
    <ResizablePanel defaultSize={50}>
      <div className="flex h-30 items-center justify-center p-6">
        <span className="font-semibold text-sm">Trên</span>
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
  </ResizablePanelGroup>`} preview={
                  <>
          <ResizablePanelGroup
                    orientation="vertical"
                    className="max-w-md rounded-xl border border-border bg-card"
                  >
                    <ResizablePanel defaultSize={50}>
                      <div className="flex h-30 items-center justify-center p-6">
                        <span className="font-semibold text-sm">Trên</span>
                      </div>
                    </ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel defaultSize={50}>
                      <div className="flex h-30 items-center justify-center p-6">
                        <span className="font-semibold text-sm">Dưới</span>
                      </div>
                    </ResizablePanel>
                  </ResizablePanelGroup>
                  </>
                } />

      <ExampleGrid>
        <ShowcaseExample title="With Handle Grip" description="withHandle hiển thị thanh tay cầm trực quan ở giữa divider." code={`<ResizableHandle withHandle />`} preview={
                      <>
              <ResizablePanelGroup
                          orientation="horizontal"
                          className="rounded-xl border border-border bg-card"
                        >
                          <ResizablePanel defaultSize={50}>
                            <div className="flex h-30 items-center justify-center p-4">
                              <span className="text-sm font-medium">Bảng A</span>
                            </div>
                          </ResizablePanel>
                          <ResizableHandle withHandle />
                          <ResizablePanel defaultSize={50}>
                            <div className="flex h-full items-center justify-center p-4">
                              <span className="text-sm font-medium">Bảng B</span>
                            </div>
                          </ResizablePanel>
                        </ResizablePanelGroup>
                      </>
                    } />

        <ShowcaseExample title="Plain Divider" description="Bỏ withHandle để chỉ hiển thị đường phân cách mỏng, không có visual grip." code={`<ResizableHandle />`} preview={
                      <>
              <ResizablePanelGroup
                          orientation="horizontal"
                          className="rounded-xl border border-border bg-card"
                        >
                          <ResizablePanel defaultSize={50}>
                            <div className="flex h-30 items-center justify-center p-4">
                              <span className="text-sm font-medium">Bảng A</span>
                            </div>
                          </ResizablePanel>
                          <ResizableHandle />
                          <ResizablePanel defaultSize={50}>
                            <div className="flex h-full items-center justify-center p-4">
                              <span className="text-sm font-medium">Bảng B</span>
                            </div>
                          </ResizablePanel>
                        </ResizablePanelGroup>
                      </>
                    } />
      </ExampleGrid>

      <ShowcaseExample title="Nested Layout" description="Bố cục phức tạp với các nhóm có thể thay đổi kích thước lồng nhau." code={`<ResizablePanelGroup
    orientation="horizontal"
    className="max-w-md rounded-xl border border-border bg-card"
  >
    <ResizablePanel defaultSize={25} minSize={15}>
      <div className="flex h-[250px] items-center justify-center p-6">
        <span className="font-semibold text-sm">Điều hướng</span>
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
  </ResizablePanelGroup>`} preview={
                  <>
          <ResizablePanelGroup
                    orientation="horizontal"
                    className="max-w-md rounded-xl border border-border bg-card"
                  >
                    <ResizablePanel defaultSize={25} minSize={15}>
                      <div className="flex h-[250px] items-center justify-center p-6">
                        <span className="font-semibold text-sm">Điều hướng</span>
                      </div>
                    </ResizablePanel>
                    <ResizableHandle />
                    <ResizablePanel defaultSize={75}>
                      <ResizablePanelGroup orientation="vertical">
                        <ResizablePanel defaultSize={25} minSize={20}>
                          <div className="flex h-full items-center justify-center p-6">
                            <span className="font-semibold text-sm">Thanh trên</span>
                          </div>
                        </ResizablePanel>
                        <ResizableHandle />
                        <ResizablePanel defaultSize={75}>
                          <div className="flex h-full items-center justify-center p-6">
                            <span className="font-semibold text-sm">Nội dung chính</span>
                          </div>
                        </ResizablePanel>
                      </ResizablePanelGroup>
                    </ResizablePanel>
                  </ResizablePanelGroup>
                  </>
                } />
    </div>
  );
}

export default function ResizableShowcase() {
  return (
    <Showcase
      title="Resizable"
      description="Panel có thể thay đổi kích thước với hỗ trợ bàn phím, lồng nhau linh hoạt."
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
