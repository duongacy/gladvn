import { ScrollArea, ScrollBar } from "../../components/micro/scroll-area";
import { useI18n } from "../../dev/components/dev-context";
import {
  DocsCode,
  DocsH3,
  DocsP,
  ExampleGrid,
  Showcase,
  ShowcaseDocs,
  ShowcaseExample
} from "../../dev/components/showcase";

function VerticalList() {
  const t = useI18n();
  const items = Array.from({ length: 20 }).map((_, i) => `${t("Tùy chọn", "Option")} ${i + 1}`);
  return (
    <div className="p-4">
      <h4 className="mb-4 text-sm font-medium leading-none">
        {t("Cài đặt hệ thống", "System settings")}
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
  const t = useI18n();
  const works = Array.from({ length: 5 }).map((_, i) => ({
    title: `${t("Tác phẩm", "Artwork")} ${i + 1}`,
    artist: `${t("Họa sĩ", "Artist")} ${i + 1}`,
  }));
  return (
    <div className="flex w-max space-x-4 p-4">
      {works.map((w) => (
        <div key={w.title} className="w-[150px] shrink-0">
          <div className="overflow-hidden rounded-md bg-muted aspect-[3/4] mb-2 flex items-center justify-center">
            <span className="text-xs text-muted-foreground">{t("Ảnh bìa", "Cover")}</span>
          </div>
          <p className="text-sm font-medium">{w.title}</p>
          <p className="text-xs text-muted-foreground">{w.artist}</p>
        </div>
      ))}
    </div>
  );
}

function ScrollAreaMicroShowcase() {
  const t = useI18n();
  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample 
          title={t("Cuộn dọc (Vertical)", "Vertical Scroll")} 
          description={t("Danh sách các mục có thể cuộn từ trên xuống dưới.", "List of items that can be scrolled vertically.")} 
          code={t(`<ScrollArea className="h-72 w-full max-w-sm rounded-xl border border-border bg-card">
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
  </ScrollArea>`, `<ScrollArea className="h-72 w-full max-w-sm rounded-xl border border-border bg-card">
    <div className="p-4">
      <h4 className="mb-4 text-sm font-medium leading-none">
        System settings
      </h4>
      <div className="text-sm py-3 border-b border-b-border hover:bg-muted/50 cursor-pointer">
        Option 1
      </div>
      <div className="text-sm py-3 border-b border-b-border hover:bg-muted/50 cursor-pointer">
        Option 2
      </div>
      <div className="text-sm py-3 border-b border-b-border hover:bg-muted/50 cursor-pointer">
        Option 3
      </div>
      {/* ... */}
    </div>
  </ScrollArea>`)} 
          preview={
                      <>
              <ScrollArea className="h-72 w-full max-w-sm rounded-xl border border-border bg-card">
                          <VerticalList />
                        </ScrollArea>
                      </>
                    } />

        <ShowcaseExample 
          title={t("Cuộn ngang (Horizontal)", "Horizontal Scroll")} 
          description={t("Trình bày danh sách phần tử nằm ngang (thường dùng cho ảnh, card).", "Presents a horizontal list of elements (commonly used for images, cards).")} 
          code={t(`<ScrollArea className="w-full max-w-sm whitespace-nowrap rounded-xl border border-border bg-card p-4">
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
  </ScrollArea>`, `<ScrollArea className="w-full max-w-sm whitespace-nowrap rounded-xl border border-border bg-card p-4">
    <div className="flex w-max space-x-4">
      <div className="w-[150px] shrink-0">
        <div className="aspect-[3/4] rounded-md bg-muted" />
        <p className="text-sm font-medium mt-2">
          Artwork 1
        </p>
      </div>
      <div className="w-[150px] shrink-0">
        <div className="aspect-[3/4] rounded-md bg-muted" />
        <p className="text-sm font-medium mt-2">
          Artwork 2
        </p>
      </div>
      {/* ... */}
    </div>
    <ScrollBar orientation="horizontal" />
  </ScrollArea>`)} 
          preview={
                      <>
              <ScrollArea className="w-full max-w-sm whitespace-nowrap rounded-xl border border-border bg-card">
                          <HorizontalList />
                          <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                      </>
                    } />
      </ExampleGrid>
    </div>
  );
}

export default function ScrollAreaShowcase() {
  const t = useI18n();
  return (
    <Showcase
      title="Scroll Area"
      description={t("Khu vực nội dung có thanh cuộn tuỳ biến giao diện, đồng bộ trên mọi trình duyệt thay cho thanh cuộn mặc định.", "Content area with custom scrollbar, visually synchronized across all browsers instead of the default scrollbar.")}
      guideline={
        <ShowcaseDocs>
          <DocsH3>{t("Scroll Area (Khu vực cuộn)", "Scroll Area")}</DocsH3>
          <DocsP>
            <DocsCode>ScrollArea</DocsCode>{t(
              " không có phiên bản Macro. Nó thay thế thanh cuộn mặc định của trình duyệt bằng một thanh cuộn tuỳ biến đẹp mắt, đồng nhất trên mọi nền tảng (Windows/Mac) mà không làm mất đi trải nghiệm native (chỉ hiện khi hover).",
              " does not have a Macro version. It replaces the default browser scrollbar with a custom scrollbar that looks beautiful and consistent across all platforms (Windows/Mac) without losing the native experience (only appears on hover)."
            )}
          </DocsP>
        </ShowcaseDocs>
      }
      micro={{ content: <ScrollAreaMicroShowcase /> }}
    />
  );
}
