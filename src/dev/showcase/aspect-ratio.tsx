import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";
import { AspectRatio } from "@/components/micro/aspect-ratio";

const commonRatios = [
  { label: "16:9", ratio: 16 / 9, desc: "Widescreen — video, hero banners" },
  { label: "4:3", ratio: 4 / 3, desc: "Classic — presentations, old TV" },
  { label: "1:1", ratio: 1, desc: "Square — avatars, social media" },
  { label: "21:9", ratio: 21 / 9, desc: "Ultrawide — cinematic, panoramas" },
  { label: "3:2", ratio: 3 / 2, desc: "Photography — DSLR standard" },
  { label: "9:16", ratio: 9 / 16, desc: "Portrait — mobile, stories" },
];

export default function AspectRatioShowcase() {
  return (
    <div className="space-y-10">
      <SectionHeader
        title="Aspect Ratio"
        description="Hiển thị nội dung theo tỷ lệ mong muốn. Hữu ích cho hình ảnh, video, bản đồ và phương tiện nhúng."
      />

      {/* ── Common Ratios ── */}
      <ExampleGrid columns={3}>
        <ExampleSection label="16:9" description="Widescreen — video, hero banners">
          <AspectRatio
            ratio={16 / 9}
            className="bg-muted rounded-xl overflow-hidden flex items-center justify-center border border-border w-full"
          >
            <span className="text-foreground font-mono text-lg font-semibold">16:9</span>
          </AspectRatio>
        </ExampleSection>

        <ExampleSection label="4:3" description="Classic — presentations, old TV">
          <AspectRatio
            ratio={4 / 3}
            className="bg-muted rounded-xl overflow-hidden flex items-center justify-center border border-border w-full"
          >
            <span className="text-foreground font-mono text-lg font-semibold">4:3</span>
          </AspectRatio>
        </ExampleSection>

        <ExampleSection label="1:1" description="Square — avatars, social media">
          <AspectRatio
            ratio={1}
            className="bg-muted rounded-xl overflow-hidden flex items-center justify-center border border-border w-full"
          >
            <span className="text-foreground font-mono text-lg font-semibold">1:1</span>
          </AspectRatio>
        </ExampleSection>
      </ExampleGrid>

      {/* ── With Image ── */}
      <ExampleGrid columns={2}>
        <ExampleSection
          label="16:9 Image"
          description="Tỷ lệ khung hình hạn chế hình ảnh 16:9."
        >
          <AspectRatio ratio={16 / 9} className="rounded-xl overflow-hidden w-full">
            <img
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
              alt="Landscape photo"
              className="w-full h-full object-cover"
            />
          </AspectRatio>
        </ExampleSection>

        <ExampleSection
          label="1:1 Image"
          description="Tỷ lệ khung hình vuông cho avatar hoặc social post."
        >
          <AspectRatio ratio={1} className="rounded-xl overflow-hidden w-full">
            <img
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
              alt="Square cropped photo"
              className="w-full h-full object-cover"
            />
          </AspectRatio>
        </ExampleSection>
      </ExampleGrid>

      {/* ── Map / Embed placeholder ── */}
      <ExampleGrid columns={2}>
        <ExampleSection
          label="Video Embed"
          description="Duy trì tỷ lệ 16:9 cho video nhúng."
        >
          <AspectRatio
            ratio={16 / 9}
            className="rounded-xl overflow-hidden bg-muted border border-border w-full"
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
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              <span className="text-xs font-mono">iframe / video</span>
            </div>
          </AspectRatio>
        </ExampleSection>

        <ExampleSection
          label="Map Embed"
          description="Duy trì tỷ lệ 4:3 cho bản đồ nhúng."
        >
          <AspectRatio
            ratio={4 / 3}
            className="rounded-xl overflow-hidden bg-muted border border-border w-full"
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
        </ExampleSection>
      </ExampleGrid>

      {/* ── Custom Ratio ── */}
      <ExampleGrid columns={3}>
        <ExampleSection label="Ratio 2.35" description="Custom ratio 2.35">
          <AspectRatio
            ratio={2.35}
            className="bg-muted rounded-xl overflow-hidden flex items-center justify-center border border-dashed border-border w-full"
          >
            <span className="text-muted-foreground font-mono text-sm">
              ratio={2.35}
            </span>
          </AspectRatio>
        </ExampleSection>
        <ExampleSection label="Ratio 1.85" description="Custom ratio 1.85">
          <AspectRatio
            ratio={1.85}
            className="bg-muted rounded-xl overflow-hidden flex items-center justify-center border border-dashed border-border w-full"
          >
            <span className="text-muted-foreground font-mono text-sm">
              ratio={1.85}
            </span>
          </AspectRatio>
        </ExampleSection>
        <ExampleSection label="Ratio 0.8" description="Custom ratio 0.8">
          <AspectRatio
            ratio={0.8}
            className="bg-muted rounded-xl overflow-hidden flex items-center justify-center border border-dashed border-border w-full"
          >
            <span className="text-muted-foreground font-mono text-sm">
              ratio={0.8}
            </span>
          </AspectRatio>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
