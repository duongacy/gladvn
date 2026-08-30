import React from "react";
import { ScrollArea, ScrollBar } from "@/components/micro/scroll-area";
import { useI18n } from "~app/components/dev-context";
import {
  ConfigurableShowcase,
  ShowcaseDocs,
  DocsH3,
  DocsP,
  DocsCode,
} from "~app/components/showcase";

const VERTICAL_ITEMS = Array.from({ length: 20 }).map((_, i) => `Option ${i + 1}`);

const HORIZONTAL_WORKS = Array.from({ length: 5 }).map((_, i) => ({
  title: `Artwork ${i + 1}`,
  artist: `Artist ${i + 1}`,
}));

function useScrollAreaExamples() {
  const t = useI18n();

  return React.useMemo(
    () => [
      {
        title: t("Cuộn dọc", "Vertical Scroll"),
        description: t(
          "Danh sách các mục có thể cuộn từ trên xuống dưới.",
          "List of items that can be scrolled vertically."
        ),
        microCode: `<ScrollArea className="h-72 w-full max-w-sm rounded-xl border border-border bg-card">
  <div className="p-4">
    <h4 className="mb-4 text-sm font-medium leading-none">System settings</h4>
    <div className="text-sm py-3 border-b border-b-border hover:bg-muted/50 cursor-pointer">Option 1</div>
    <div className="text-sm py-3 border-b border-b-border hover:bg-muted/50 cursor-pointer">Option 2</div>
    <div className="text-sm py-3 border-b border-b-border hover:bg-muted/50 cursor-pointer">Option 3</div>
    <div className="text-sm py-3 border-b border-b-border hover:bg-muted/50 cursor-pointer">Option 4</div>
    <div className="text-sm py-3 border-b border-b-border hover:bg-muted/50 cursor-pointer">Option 5</div>
  </div>
</ScrollArea>`,
        microPreview: (
          <ScrollArea className="h-72 w-full max-w-sm rounded-xl border border-border bg-card">
            <div className="p-4">
              <h4 className="mb-4 text-sm font-medium leading-none">System settings</h4>
              {VERTICAL_ITEMS.map((label) => (
                <div
                  key={label}
                  className="text-sm py-3 border-b border-b-border last:border-0 hover:bg-muted/50 cursor-pointer"
                >
                  {label}
                </div>
              ))}
            </div>
          </ScrollArea>
        ),
      },
      {
        title: t("Cuộn ngang", "Horizontal Scroll"),
        description: t(
          "Trình bày danh sách phần tử nằm ngang (thường dùng cho ảnh, card).",
          "Presents a horizontal list of elements (commonly used for images, cards)."
        ),
        microCode: `<ScrollArea className="w-full max-w-sm whitespace-nowrap rounded-xl border border-border bg-card">
  <div className="flex w-max space-x-4 p-4">
    <div className="w-[150px] shrink-0">
      <div className="aspect-[3/4] rounded-md bg-muted mb-2" />
      <p className="text-sm font-medium">Artwork 1</p>
      <p className="text-xs text-muted-foreground">Artist 1</p>
    </div>
    <div className="w-[150px] shrink-0">
      <div className="aspect-[3/4] rounded-md bg-muted mb-2" />
      <p className="text-sm font-medium">Artwork 2</p>
      <p className="text-xs text-muted-foreground">Artist 2</p>
    </div>
    <div className="w-[150px] shrink-0">
      <div className="aspect-[3/4] rounded-md bg-muted mb-2" />
      <p className="text-sm font-medium">Artwork 3</p>
      <p className="text-xs text-muted-foreground">Artist 3</p>
    </div>
  </div>
  <ScrollBar orientation="horizontal" />
</ScrollArea>`,
        microPreview: (
          <ScrollArea className="w-full max-w-sm whitespace-nowrap rounded-xl border border-border bg-card">
            <div className="flex w-max space-x-4 p-4">
              {HORIZONTAL_WORKS.map((w) => (
                <div key={w.title} className="w-[150px] shrink-0">
                  <div className="overflow-hidden rounded-md bg-muted aspect-[3/4] mb-2 flex items-center justify-center">
                    <span className="text-xs text-muted-foreground">Cover</span>
                  </div>
                  <p className="text-sm font-medium">{w.title}</p>
                  <p className="text-xs text-muted-foreground">{w.artist}</p>
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        ),
      },
    ],
    [t]
  );
}

export default function ScrollAreaShowcase() {
  const t = useI18n();
  const examples = useScrollAreaExamples();

  return (
    <ConfigurableShowcase
      title="Scroll Area"
      description={t(
        "Khu vực nội dung có thanh cuộn tuỳ biến giao diện, đồng bộ trên mọi trình duyệt thay cho thanh cuộn mặc định.",
        "Content area with custom scrollbar, visually synchronized across all browsers instead of the default scrollbar."
      )}
      guideline={
        <ShowcaseDocs>
          <DocsH3>{t("Scroll Area", "Scroll Area")}</DocsH3>
          <DocsP>
            <DocsCode>ScrollArea</DocsCode>
            {t(
              " không có phiên bản Macro. Nó thay thế thanh cuộn mặc định của trình duyệt bằng một thanh cuộn tuỳ biến đẹp mắt, đồng nhất trên mọi nền tảng (Windows/Mac) mà không làm mất đi trải nghiệm native (chỉ hiện khi hover).",
              " does not have a Macro version. It replaces the default browser scrollbar with a custom scrollbar that looks beautiful and consistent across all platforms (Windows/Mac) without losing the native experience (only appears on hover)."
            )}
          </DocsP>
        </ShowcaseDocs>
      }
      examples={examples}
    />
  );
}
