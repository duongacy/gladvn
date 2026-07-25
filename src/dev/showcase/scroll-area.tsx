import { ScrollArea, ScrollBar } from "../../components/micro/scroll-area";
import {
  DocsCode,
  DocsH3,
  DocsP,
  ExampleGrid,
  ExampleSection,
  Showcase,
  ShowcaseDocs
} from "../../dev/components/showcase";

// ──────────────────────────────────────────────────────────
// SECTION 1: Explicit Sub-components for Demo
// ──────────────────────────────────────────────────────────
function VerticalList() {
  const items = [
    "Tùy chọn 1",
    "Tùy chọn 2",
    "Tùy chọn 3",
    "Tùy chọn 4",
    "Tùy chọn 5",
    "Tùy chọn 6",
    "Tùy chọn 7",
    "Tùy chọn 8",
    "Tùy chọn 9",
    "Tùy chọn 10",
    "Tùy chọn 11",
    "Tùy chọn 12",
    "Tùy chọn 13",
    "Tùy chọn 14",
    "Tùy chọn 15",
    "Tùy chọn 16",
    "Tùy chọn 17",
    "Tùy chọn 18",
    "Tùy chọn 19",
    "Tùy chọn 20",
  ];
  return (
    <div className="p-4">
      <h4 className="mb-4 text-sm font-medium leading-none">
        Cài đặt hệ thống
      </h4>
      {items.map((label) => (
        <div
          key={label}
          className="text-sm py-3 border-b border-b-border last:border-0 hover:bg-muted/50 cursor-pointer"
        >
          {label}
        </div>
      ))}
    </div>
  );
}

function HorizontalList() {
  const works = [
    { title: "Tác phẩm 1", artist: "Họa sĩ 1" },
    { title: "Tác phẩm 2", artist: "Họa sĩ 2" },
    { title: "Tác phẩm 3", artist: "Họa sĩ 3" },
    { title: "Tác phẩm 4", artist: "Họa sĩ 4" },
    { title: "Tác phẩm 5", artist: "Họa sĩ 5" },
  ];
  return (
    <div className="flex w-max space-x-4 p-4">
      {works.map((w) => (
        <div key={w.title} className="w-[150px] shrink-0">
          <div className="overflow-hidden rounded-md bg-muted aspect-[3/4] mb-2 flex items-center justify-center">
            <span className="text-xs text-muted-foreground">Ảnh bìa</span>
          </div>
          <p className="text-sm font-medium">{w.title}</p>
          <p className="text-xs text-muted-foreground">{w.artist}</p>
        </div>
      ))}
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 2: Micro Content (Only Micro exists)
// ──────────────────────────────────────────────────────────
function ScrollAreaMicroShowcase() {
  return (
    <div className="space-y-10 mt-6">
      <ExampleGrid>
        <ExampleSection
          label="Cuộn dọc (Vertical)"
          description="Danh sách các mục có thể cuộn từ trên xuống dưới."
          codeString={`<ScrollArea className="h-72 w-full max-w-sm rounded-xl border border-border bg-card">
    <div className="p-4">
      <h4 className="mb-4 text-sm font-medium leading-none">
        Cài đặt hệ thống
      </h4>
      <div className="text-sm py-3 border-b border-b-border hover:bg-muted/50 cursor-pointer">
        Tùy chọn 1
      </div>
      <div className="text-sm py-3 border-b border-b-border hover:bg-muted/50 cursor-pointer">
        Tùy chọn 2
      </div>
      <div className="text-sm py-3 border-b border-b-border hover:bg-muted/50 cursor-pointer">
        Tùy chọn 3
      </div>
      {/* ... */}
    </div>
  </ScrollArea>`}
        >
          <ScrollArea className="h-72 w-full max-w-sm rounded-xl border border-border bg-card">
            <VerticalList />
          </ScrollArea>
        </ExampleSection>

        <ExampleSection
          label="Cuộn ngang (Horizontal)"
          description="Trình bày danh sách phần tử nằm ngang (thường dùng cho ảnh, card)."
          codeString={`<ScrollArea className="w-full max-w-sm whitespace-nowrap rounded-xl border border-border bg-card p-4">
    <div className="flex w-max space-x-4">
      <div className="w-[150px] shrink-0">
        <div className="aspect-[3/4] rounded-md bg-muted" />
        <p className="text-sm font-medium mt-2">
          Tác phẩm 1
        </p>
      </div>
      <div className="w-[150px] shrink-0">
        <div className="aspect-[3/4] rounded-md bg-muted" />
        <p className="text-sm font-medium mt-2">
          Tác phẩm 2
        </p>
      </div>
      {/* ... */}
    </div>
    <ScrollBar orientation="horizontal" />
  </ScrollArea>`}
        >
          <ScrollArea className="w-full max-w-sm whitespace-nowrap rounded-xl border border-border bg-card">
            <HorizontalList />
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
