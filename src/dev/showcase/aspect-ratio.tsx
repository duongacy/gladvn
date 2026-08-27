import React from "react";
import { PlayCircle } from "lucide-react";
import { AspectRatio } from "../../components/micro/aspect-ratio";
import { useI18n } from "../components/dev-context";
import {
  ConfigurableShowcase,
  ShowcaseDocs,
  DocsH3,
  DocsP,
} from "../components/showcase";

function useAspectRatioExamples() {
  const t = useI18n();

  return React.useMemo(() => [
    {
      title: t("16:9", "16:9"),
      description: t(
        "Màn hình rộng — dùng cho video, hero banner",
        "Widescreen — used for videos, hero banners"
      ),
      microCode: `<AspectRatio
  ratio={16 / 9}
  className="bg-muted rounded-xl overflow-hidden flex items-center justify-center border border-border"
>
  <span className="text-foreground font-mono text-lg font-semibold">16:9</span>
</AspectRatio>`,
      microPreview: (
        <AspectRatio
          ratio={16 / 9}
          className="bg-muted rounded-xl overflow-hidden flex items-center justify-center border border-border"
        >
          <span className="text-foreground font-mono text-lg font-semibold">
            16:9
          </span>
        </AspectRatio>
      ),
    },
    {
      title: t("4:3", "4:3"),
      description: t(
        "Cổ điển — bài thuyết trình, TV cũ",
        "Classic — presentations, old TVs"
      ),
      microCode: `<AspectRatio
  ratio={4 / 3}
  className="bg-muted rounded-xl overflow-hidden flex items-center justify-center border border-border"
>
  <span className="text-foreground font-mono text-lg font-semibold">4:3</span>
</AspectRatio>`,
      microPreview: (
        <AspectRatio
          ratio={4 / 3}
          className="bg-muted rounded-xl overflow-hidden flex items-center justify-center border border-border"
        >
          <span className="text-foreground font-mono text-lg font-semibold">
            4:3
          </span>
        </AspectRatio>
      ),
    },
    {
      title: t("1:1", "1:1"),
      description: t(
        "Vuông — avatar, social media",
        "Square — avatars, social media"
      ),
      microCode: `<AspectRatio
  ratio={1}
  className="bg-muted rounded-xl overflow-hidden flex items-center justify-center border border-border"
>
  <span className="text-foreground font-mono text-lg font-semibold">1:1</span>
</AspectRatio>`,
      microPreview: (
        <AspectRatio
          ratio={1}
          className="bg-muted rounded-xl overflow-hidden flex items-center justify-center border border-border"
        >
          <span className="text-foreground font-mono text-lg font-semibold">
            1:1
          </span>
        </AspectRatio>
      ),
    },
    {
      title: t("Ảnh 16:9", "16:9 Image"),
      description: t(
        "Tỷ lệ khung hình hạn chế hình ảnh 16:9.",
        "Constraints image to a 16:9 aspect ratio."
      ),
      microCode: `<AspectRatio ratio={16 / 9} className="rounded-xl overflow-hidden">
  <img
    src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
    alt="Landscape photo"
    className="w-full h-full object-cover"
  />
</AspectRatio>`,
      microPreview: (
        <AspectRatio ratio={16 / 9} className="rounded-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            alt="Landscape photo"
            className="w-full h-full object-cover"
          />
        </AspectRatio>
      ),
    },
    {
      title: t("Ảnh 1:1", "1:1 Image"),
      description: t(
        "Tỷ lệ khung hình vuông cho avatar hoặc social post.",
        "Square aspect ratio for avatars or social posts."
      ),
      microCode: `<AspectRatio ratio={1} className="rounded-xl overflow-hidden">
  <img
    src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
    alt="Square cropped photo"
    className="w-full h-full object-cover"
  />
</AspectRatio>`,
      microPreview: (
        <AspectRatio ratio={1} className="rounded-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            alt="Square cropped photo"
            className="w-full h-full object-cover"
          />
        </AspectRatio>
      ),
    },
    {
      title: t("Nhúng Video", "Video Embed"),
      description: t(
        "Duy trì tỷ lệ 16:9 cho video nhúng.",
        "Maintains a 16:9 ratio for embedded videos."
      ),
      microCode: `<AspectRatio
  ratio={16 / 9}
  className="rounded-xl overflow-hidden bg-muted border border-border"
>
  <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-muted-foreground">
    <PlayCircle className="size-12 stroke-[1.5]" />
    <span className="font-medium">Video Player Placeholder</span>
  </div>
</AspectRatio>`,
      microPreview: (
        <AspectRatio
          ratio={16 / 9}
          className="rounded-xl overflow-hidden bg-muted border border-border"
        >
          <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-muted-foreground">
            <PlayCircle className="size-12 stroke-[1.5]" />
            <span className="font-medium">Video Player Placeholder</span>
          </div>
        </AspectRatio>
      ),
    },
    {
      title: t("Nhúng Bản đồ", "Map Embed"),
      description: t(
        "Duy trì tỷ lệ 4:3 cho bản đồ nhúng.",
        "Maintains a 4:3 ratio for embedded maps."
      ),
      microCode: `<AspectRatio
  ratio={4 / 3}
  className="rounded-xl overflow-hidden bg-muted border border-border"
>
  <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-muted-foreground">
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
      <line x1="8" y1="2" x2="8" y2="18" />
      <line x1="16" y1="6" x2="16" y2="22" />
    </svg>
    <span className="text-xs font-mono">map / iframe</span>
  </div>
</AspectRatio>`,
      microPreview: (
        <AspectRatio
          ratio={4 / 3}
          className="rounded-xl overflow-hidden bg-muted border border-border"
        >
          <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-muted-foreground">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
              <line x1="8" y1="2" x2="8" y2="18" />
              <line x1="16" y1="6" x2="16" y2="22" />
            </svg>
            <span className="text-xs font-mono">map / iframe</span>
          </div>
        </AspectRatio>
      ),
    },
    {
      title: t("Tỷ lệ 2.35", "Ratio 2.35"),
      description: t("Tỷ lệ tùy chỉnh 2.35", "Custom ratio 2.35"),
      microCode: `<AspectRatio
  ratio={2.35}
  className="bg-muted rounded-xl overflow-hidden flex items-center justify-center border border-dashed border-border"
>
  <span className="text-muted-foreground font-mono text-sm">ratio={2.35}</span>
</AspectRatio>`,
      microPreview: (
        <AspectRatio
          ratio={2.35}
          className="bg-muted rounded-xl overflow-hidden flex items-center justify-center border border-dashed border-border"
        >
          <span className="text-muted-foreground font-mono text-sm">
            ratio={2.35}
          </span>
        </AspectRatio>
      ),
    },
    {
      title: t("Tỷ lệ 1.85", "Ratio 1.85"),
      description: t("Tỷ lệ tùy chỉnh 1.85", "Custom ratio 1.85"),
      microCode: `<AspectRatio
  ratio={1.85}
  className="bg-muted rounded-xl overflow-hidden flex items-center justify-center border border-dashed border-border"
>
  <span className="text-muted-foreground font-mono text-sm">ratio={1.85}</span>
</AspectRatio>`,
      microPreview: (
        <AspectRatio
          ratio={1.85}
          className="bg-muted rounded-xl overflow-hidden flex items-center justify-center border border-dashed border-border"
        >
          <span className="text-muted-foreground font-mono text-sm">
            ratio={1.85}
          </span>
        </AspectRatio>
      ),
    },
    {
      title: t("Tỷ lệ 0.8", "Ratio 0.8"),
      description: t("Tỷ lệ tùy chỉnh 0.8", "Custom ratio 0.8"),
      microCode: `<AspectRatio
  ratio={0.8}
  className="bg-muted rounded-xl overflow-hidden flex items-center justify-center border border-dashed border-border"
>
  <span className="text-muted-foreground font-mono text-sm">ratio={0.8}</span>
</AspectRatio>`,
      microPreview: (
        <AspectRatio
          ratio={0.8}
          className="bg-muted rounded-xl overflow-hidden flex items-center justify-center border border-dashed border-border"
        >
          <span className="text-muted-foreground font-mono text-sm">
            ratio={0.8}
          </span>
        </AspectRatio>
      ),
    },
  ], [t]);
}

export default function AspectRatioShowcase() {
  const t = useI18n();
  const examples = useAspectRatioExamples();

  return (
    <ConfigurableShowcase
      title={t("Tỷ lệ khung hình", "Aspect Ratio")}
      description={t(
        "Hiển thị nội dung theo tỷ lệ mong muốn. Hữu ích cho hình ảnh, video, bản đồ và phương tiện nhúng.",
        "Displays content at a desired aspect ratio. Useful for images, videos, maps, and embedded media."
      )}
      guideline={
        <ShowcaseDocs>
          <DocsH3>Aspect Ratio</DocsH3>
          <DocsP>
            {t(
              "Sử dụng để duy trì một tỷ lệ kích thước cố định, thường cho ảnh hoặc video.",
              "Used to maintain a fixed size ratio, typically for images or videos."
            )}
          </DocsP>
        </ShowcaseDocs>
      }
      examples={examples}
    />
  );
}
