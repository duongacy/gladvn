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
        description="Displays content within a desired ratio. Useful for images, videos, maps, and embedded media."
      />

      {/* ── Common Ratios ── */}
      <ExampleSection
        label="Common Ratios"
        description="Frequently used aspect ratios with labels."
      >
        <ExampleGrid columns={3}>
          {commonRatios.map(({ label, ratio, desc }) => (
            <div key={label} className="flex flex-col gap-2">
              <AspectRatio
                ratio={ratio}
                className="bg-muted rounded-xl overflow-hidden flex items-center justify-center border border-border"
              >
                <div className="flex flex-col items-center gap-1">
                  <span className="text-foreground font-mono text-lg font-semibold">
                    {label}
                  </span>
                  <span className="text-muted-foreground text-xs text-center px-4">
                    {desc}
                  </span>
                </div>
              </AspectRatio>
            </div>
          ))}
        </ExampleGrid>
      </ExampleSection>

      {/* ── With Image ── */}
      <ExampleSection
        label="With Image"
        description="Aspect ratio constraining an image — the image fills the container via object-cover."
      >
        <ExampleGrid columns={2}>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-muted-foreground font-medium">
              16:9
            </span>
            <AspectRatio ratio={16 / 9} className="rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                alt="Landscape photo"
                className="w-full h-full object-cover"
              />
            </AspectRatio>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-muted-foreground font-medium">
              1:1
            </span>
            <AspectRatio ratio={1} className="rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                alt="Square cropped photo"
                className="w-full h-full object-cover"
              />
            </AspectRatio>
          </div>
        </ExampleGrid>
      </ExampleSection>

      {/* ── Map / Embed placeholder ── */}
      <ExampleSection
        label="Embedded Content"
        description="Maintaining ratio for maps, iframes, or video embeds."
      >
        <ExampleGrid columns={2}>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-muted-foreground font-medium">
              Video embed (16:9)
            </span>
            <AspectRatio
              ratio={16 / 9}
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
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                <span className="text-xs font-mono">iframe / video</span>
              </div>
            </AspectRatio>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-muted-foreground font-medium">
              Map embed (4:3)
            </span>
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
          </div>
        </ExampleGrid>
      </ExampleSection>

      {/* ── Custom Ratio ── */}
      <ExampleSection
        label="Custom Ratio"
        description="Any numeric value works — not limited to standard ratios."
      >
        <ExampleGrid columns={3}>
          {[2.35, 1.85, 0.8].map((ratio) => (
            <div key={ratio} className="flex flex-col gap-2">
              <AspectRatio
                ratio={ratio}
                className="bg-muted rounded-xl overflow-hidden flex items-center justify-center border border-dashed border-border"
              >
                <span className="text-muted-foreground font-mono text-sm">
                  ratio={ratio}
                </span>
              </AspectRatio>
            </div>
          ))}
        </ExampleGrid>
      </ExampleSection>
    </div>
  );
}
