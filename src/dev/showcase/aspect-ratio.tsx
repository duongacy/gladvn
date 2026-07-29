import { AspectRatio } from "../../components/micro/aspect-ratio";
import { useI18n } from "../../dev/components/dev-context";
import {
  DocsH3,
  DocsP,
  ExampleGrid,
  Showcase,
  ShowcaseDocs,
  ShowcaseExample
} from "../../dev/components/showcase";

function AspectRatioMicroShowcase() {
  const t = useI18n();

  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample title="16:9" description={t("Widescreen — dùng cho video, hero banner", "Widescreen — used for videos, hero banners")} code={`<AspectRatio
    ratio={16 / 9}
    className="bg-muted rounded-xl overflow-hidden flex items-center justify-center border border-border w-full"
  >
    <span className="text-foreground font-mono text-lg font-semibold">
      16:9
    </span>
  </AspectRatio>`} preview={
                      <>
              <AspectRatio
                          ratio={16 / 9}
                          className="bg-muted rounded-xl overflow-hidden flex items-center justify-center border border-border w-full"
                        >
                          <span className="text-foreground font-mono text-lg font-semibold">
                            16:9
                          </span>
                        </AspectRatio>
                      </>
                    } />

        <ShowcaseExample title="4:3" description={t("Classic — bài thuyết trình, TV cũ", "Classic — presentations, old TVs")} code={`<AspectRatio
    ratio={4 / 3}
    className="bg-muted rounded-xl overflow-hidden flex items-center justify-center border border-border w-full"
  >
    <span className="text-foreground font-mono text-lg font-semibold">
      4:3
    </span>
  </AspectRatio>`} preview={
                      <>
              <AspectRatio
                          ratio={4 / 3}
                          className="bg-muted rounded-xl overflow-hidden flex items-center justify-center border border-border w-full"
                        >
                          <span className="text-foreground font-mono text-lg font-semibold">
                            4:3
                          </span>
                        </AspectRatio>
                      </>
                    } />

        <ShowcaseExample title="1:1" description={t("Vuông — avatar, social media", "Square — avatars, social media")} code={`<AspectRatio
    ratio={1}
    className="bg-muted rounded-xl overflow-hidden flex items-center justify-center border border-border w-full"
  >
    <span className="text-foreground font-mono text-lg font-semibold">
      1:1
    </span>
  </AspectRatio>`} preview={
                      <>
              <AspectRatio
                          ratio={1}
                          className="bg-muted rounded-xl overflow-hidden flex items-center justify-center border border-border w-full"
                        >
                          <span className="text-foreground font-mono text-lg font-semibold">
                            1:1
                          </span>
                        </AspectRatio>
                      </>
                    } />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample title="16:9 Image" description={t("Tỷ lệ khung hình hạn chế hình ảnh 16:9.", "Constraints image to a 16:9 aspect ratio.")} code={`<AspectRatio
    ratio={16 / 9}
    className="rounded-xl overflow-hidden w-full"
  >
    <img
      src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
      alt="Landscape photo"
      className="w-full h-full object-cover"
    />
  </AspectRatio>`} preview={
                      <>
              <AspectRatio
                          ratio={16 / 9}
                          className="rounded-xl overflow-hidden w-full"
                        >
                          <img
                            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                            alt="Landscape photo"
                            className="w-full h-full object-cover"
                          />
                        </AspectRatio>
                      </>
                    } />

        <ShowcaseExample title="1:1 Image" description={t("Tỷ lệ khung hình vuông cho avatar hoặc social post.", "Square aspect ratio for avatars or social posts.")} code={`<AspectRatio
    ratio={1}
    className="rounded-xl overflow-hidden w-full"
  >
    <img
      src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
      alt="Square cropped photo"
      className="w-full h-full object-cover"
    />
  </AspectRatio>`} preview={
                      <>
              <AspectRatio ratio={1} className="rounded-xl overflow-hidden w-full">
                          <img
                            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                            alt="Square cropped photo"
                            className="w-full h-full object-cover"
                          />
                        </AspectRatio>
                      </>
                    } />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample title="Video Embed" description={t("Duy trì tỷ lệ 16:9 cho video nhúng.", "Maintains a 16:9 ratio for embedded videos.")} code={`<AspectRatio
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
      <span className="text-xs font-mono">
        iframe / video
      </span>
    </div>
  </AspectRatio>`} preview={
                      <>
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
                      </>
                    } />

        <ShowcaseExample title="Map Embed" description={t("Duy trì tỷ lệ 4:3 cho bản đồ nhúng.", "Maintains a 4:3 ratio for embedded maps.")} code={`<AspectRatio
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
      <span className="text-xs font-mono">
        map / iframe
      </span>
    </div>
  </AspectRatio>`} preview={
                      <>
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
                      </>
                    } />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample title="Ratio 2.35" description="Custom ratio 2.35" code={`<AspectRatio
    ratio={2.35}
    className="bg-muted rounded-xl overflow-hidden flex items-center justify-center border border-dashed border-border w-full"
  >
    <span className="text-muted-foreground font-mono text-sm">
      ratio={2.35}
    </span>
  </AspectRatio>`} preview={
                      <>
              <AspectRatio
                          ratio={2.35}
                          className="bg-muted rounded-xl overflow-hidden flex items-center justify-center border border-dashed border-border w-full"
                        >
                          <span className="text-muted-foreground font-mono text-sm">
                            ratio={2.35}
                          </span>
                        </AspectRatio>
                      </>
                    } />
        <ShowcaseExample title="Ratio 1.85" description="Custom ratio 1.85" code={`<AspectRatio
    ratio={1.85}
    className="bg-muted rounded-xl overflow-hidden flex items-center justify-center border border-dashed border-border w-full"
  >
    <span className="text-muted-foreground font-mono text-sm">
      ratio={1.85}
    </span>
  </AspectRatio>`} preview={
                      <>
              <AspectRatio
                          ratio={1.85}
                          className="bg-muted rounded-xl overflow-hidden flex items-center justify-center border border-dashed border-border w-full"
                        >
                          <span className="text-muted-foreground font-mono text-sm">
                            ratio={1.85}
                          </span>
                        </AspectRatio>
                      </>
                    } />
        <ShowcaseExample title="Ratio 0.8" description="Custom ratio 0.8" code={`<AspectRatio
    ratio={0.8}
    className="bg-muted rounded-xl overflow-hidden flex items-center justify-center border border-dashed border-border w-full"
  >
    <span className="text-muted-foreground font-mono text-sm">
      ratio={0.8}
    </span>
  </AspectRatio>`} preview={
                      <>
              <AspectRatio
                          ratio={0.8}
                          className="bg-muted rounded-xl overflow-hidden flex items-center justify-center border border-dashed border-border w-full"
                        >
                          <span className="text-muted-foreground font-mono text-sm">
                            ratio={0.8}
                          </span>
                        </AspectRatio>
                      </>
                    } />
      </ExampleGrid>
    </div>
  );
}

export default function AspectRatioShowcase() {
  const t = useI18n();
  
  return (
    <Showcase
      title="Aspect Ratio"
      description={t("Hiển thị nội dung theo tỷ lệ mong muốn. Hữu ích cho hình ảnh, video, bản đồ và phương tiện nhúng.", "Displays content at a desired aspect ratio. Useful for images, videos, maps, and embedded media.")}
      guideline={
        <ShowcaseDocs>
          <DocsH3>Aspect Ratio</DocsH3>
          <DocsP>
            {t("Sử dụng để duy trì một tỷ lệ kích thước cố định, thường cho ảnh hoặc video.", "Used to maintain a fixed size ratio, typically for images or videos.")}
          </DocsP>
        </ShowcaseDocs>
      }
      micro={{ content: <AspectRatioMicroShowcase /> }}
    />
  );
}
