import { ScrollArea, ScrollBar } from "@/components/micro/scroll-area";
import {
  DocsCode,
  DocsH3,
  DocsP,
  ExampleGrid,
  ExampleSection,
  Showcase,
  ShowcaseDocs,
} from "@/dev/components/showcase";

// ──────────────────────────────────────────────────────────
// SECTION 1: Micro Content (Only Micro exists)
// ──────────────────────────────────────────────────────────
function ScrollAreaMicroShowcase() {
  return (
    <div className="space-y-10 mt-6">
      <ExampleGrid columns={2}>
        <ExampleSection
          label="Cuộn dọc (Vertical)"
          description="Danh sách các mục có thể cuộn từ trên xuống dưới."
          codeString={`<ScrollArea className="h-72 w-full max-w-sm rounded-xl border bg-card">
  <div className="p-4">
    <h4 className="mb-4 text-sm font-medium leading-none">
      Cài đặt hệ thống
    </h4>
    {Array.from({ length: 20 }).map((_, i) => (
      <div key={i} className="text-sm py-3 border-b last:border-0 hover:bg-muted/50 cursor-pointer">
        Tùy chọn {i + 1}
      </div>
    ))}
  </div>
</ScrollArea>
`}
        >
          <ScrollArea className="h-72 w-full max-w-sm rounded-xl border bg-card">
            <div className="p-4">
              <h4 className="mb-4 text-sm font-medium leading-none">
                Cài đặt hệ thống
              </h4>
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="text-sm py-3 border-b last:border-0 hover:bg-muted/50 cursor-pointer"
                >
                  Tùy chọn {i + 1}
                </div>
              ))}
            </div>
          </ScrollArea>
        </ExampleSection>

        <ExampleSection
          label="Cuộn ngang (Horizontal)"
          description="Trình bày danh sách phần tử nằm ngang (thường dùng cho ảnh, card)."
          codeString={`<ScrollArea className="w-full max-w-sm whitespace-nowrap rounded-xl border bg-card p-4">
  <div className="flex w-max space-x-4">
    {Array.from({ length: 5 }).map((_, i) => (
      <div key={i} className="w-[150px] shrink-0">
        <div className="overflow-hidden rounded-md bg-muted aspect-[3/4] mb-2 flex items-center justify-center">
          <span className="text-xs text-muted-foreground">
            Ảnh bìa {i + 1}
          </span>
        </div>
        <p className="text-sm font-medium">Tác phẩm {i + 1}</p>
        <p className="text-xs text-muted-foreground">
          Họa sĩ {i + 1}
        </p>
      </div>
    ))}
  </div>
  <ScrollBar orientation="horizontal" />
</ScrollArea>
`}
        >
          <ScrollArea className="w-full max-w-sm whitespace-nowrap rounded-xl border bg-card p-4">
            <div className="flex w-max space-x-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="w-[150px] shrink-0">
                  <div className="overflow-hidden rounded-md bg-muted aspect-[3/4] mb-2 flex items-center justify-center">
                    <span className="text-xs text-muted-foreground">
                      Ảnh bìa {i + 1}
                    </span>
                  </div>
                  <p className="text-sm font-medium">Tác phẩm {i + 1}</p>
                  <p className="text-xs text-muted-foreground">
                    Họa sĩ {i + 1}
                  </p>
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 3: Entry point
// ──────────────────────────────────────────────────────────
export default function ScrollAreaShowcase() {
  return (
    <Showcase
      title="Scroll Area"
      description="Khu vực nội dung có thanh cuộn tuỳ biến giao diện, đồng bộ trên mọi trình duyệt thay cho thanh cuộn mặc định."
      generalConcept={
        <ShowcaseDocs>
          <DocsH3>Scroll Area (Khu vực cuộn)</DocsH3>
          <DocsP>
            <DocsCode>ScrollArea</DocsCode> không có phiên bản Macro. Nó thay
            thế thanh cuộn mặc định của trình duyệt bằng một thanh cuộn tuỳ biến
            đẹp mắt, đồng nhất trên mọi nền tảng (Windows/Mac) mà không làm mất
            đi trải nghiệm native (chỉ hiện khi hover).
          </DocsP>
        </ShowcaseDocs>
      }
      tabs={[
        { label: "Micro (Primitive)", content: <ScrollAreaMicroShowcase /> },
      ]}
    />
  );
}
