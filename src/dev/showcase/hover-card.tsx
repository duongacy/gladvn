import { CalendarIcon } from "lucide-react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/micro/avatar";
import { Button } from "../../components/micro/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../../components/micro/hover-card";
import { useDevContext, useI18n } from "../../dev/components/dev-context";
import {
  DocsCode,
  DocsP,
  ExampleGrid,
  Showcase,
  ShowcaseDocs,
  ShowcaseExample,
} from "../../dev/components/showcase";
import { type Size } from "../../lib/types";

function NextJsCard() {
  return (
    <div className="flex justify-between space-x-4">
      <Avatar>
        <AvatarImage src="https://github.com/vercel.png" alt="Vercel avatar" />
        <AvatarFallback>VC</AvatarFallback>
      </Avatar>
      <div className="space-y-1">
        <h4 className="text-sm font-semibold">@nextjs</h4>
        <p className="text-sm">
          The React Framework – created and maintained by @vercel.
        </p>
        <div className="flex items-center pt-2">
          <CalendarIcon
            aria-hidden="true"
            focusable="false"
            className="mr-2 h-4 w-4 opacity-70"
          />
          <span className="text-xs text-muted-foreground">
            Joined December 2021
          </span>
        </div>
      </div>
    </div>
  );
}

function HoverCardMicroShowcase({ globalSize }: { globalSize: Size }) {
  const t = useI18n();
  return (
    <div className="space-y-10">
      <ShowcaseExample
        title={t("Default (Default)", "Default")}
        description={t(
          "Di chuột qua liên kết để xem bản xem trước. Trigger render dưới dạng Button với variant link.",
          "Hover over the link to see a preview. Trigger renders as a Button with link variant.",
        )}
        code={`<HoverCard>
    <HoverCardTrigger render={<Button variant="link" />}>
      @nextjs
    </HoverCardTrigger>
    
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage
              src="https://github.com/vercel.png"
              alt="Vercel avatar"
            />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">
              @nextjs
            </h4>
            <p className="text-sm">
              The React Framework – created and maintained
              by @vercel.
            </p>
            <div className="flex items-center pt-2">
              <CalendarIcon
                aria-hidden="true"
                focusable="false"
                className="mr-2 h-4 w-4 opacity-70"
              />
              <span className="text-xs text-muted-foreground">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    
  </HoverCard>`}
        preview={
          <>
            <HoverCard>
              <HoverCardTrigger
                render={<Button variant="link" size={globalSize} />}
              >
                @nextjs
              </HoverCardTrigger>

              <HoverCardContent className="w-80">
                <NextJsCard />
              </HoverCardContent>
            </HoverCard>
          </>
        }
      />

      <ShowcaseExample
        title={t("Vị trí (Side)", "Side Position")}
        description={t(
          "HoverCard có thể xuất hiện ở bốn phía của trigger thông qua prop side.",
          "HoverCard can appear on all four sides of the trigger via the side prop.",
        )}
        code={`<HoverCard>
    <HoverCardTrigger
      render={<Button variant="outline">Top</Button>}
    />
    
      <HoverCardContent side="top" className="w-80">
        ...
      </HoverCardContent>
    
  </HoverCard>`}
        preview={
          <>
            <div className="flex flex-wrap items-center justify-center gap-4 py-8">
              {(["top", "right", "bottom", "left"] as const).map((side) => (
                <HoverCard key={side}>
                  <HoverCardTrigger
                    render={
                      <Button
                        variant="outline"
                        size={globalSize}
                        className="capitalize"
                      >
                        {side}
                      </Button>
                    }
                  />

                  <HoverCardContent side={side} className="w-72">
                    <NextJsCard />
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
          </>
        }
      />

      <ExampleGrid>
        {(["start", "center", "end"] as const).map((align) => (
          <ShowcaseExample
            key={align}
            title={`Align: ${align}`}
            description={t(
              `Card căn ${align} theo trục ngang.`,
              `Card aligns ${align} horizontally.`,
            )}
            code={`<HoverCardContent align="${align}" className="w-80">...</HoverCardContent>`}
            preview={
              <>
                <HoverCard>
                  <HoverCardTrigger
                    render={
                      <Button
                        variant="outline"
                        size={globalSize}
                        className="capitalize"
                      >
                        {align}
                      </Button>
                    }
                  />

                  <HoverCardContent align={align} className="w-64">
                    <NextJsCard />
                  </HoverCardContent>
                </HoverCard>
              </>
            }
          />
        ))}
      </ExampleGrid>

      {/* ── Trigger types ── */}
      <ExampleGrid>
        <ShowcaseExample
          title={t("Trigger: Button Link", "Trigger: Button Link")}
          description={t(
            "Trigger render như Button variant link — phù hợp cho text nội tuyến.",
            "Trigger renders as a Button link variant — suitable for inline text.",
          )}
          code={`<HoverCardTrigger render={<Button variant="link" />}>
    @nextjs
  </HoverCardTrigger>`}
          preview={
            <>
              <HoverCard>
                <HoverCardTrigger
                  render={<Button variant="link" size={globalSize} />}
                >
                  @nextjs
                </HoverCardTrigger>

                <HoverCardContent className="w-80">
                  <NextJsCard />
                </HoverCardContent>
              </HoverCard>
            </>
          }
        />

        <ShowcaseExample
          title={t("Trigger: Thẻ anchor thuần", "Trigger: Native anchor tag")}
          description={t(
            "Trigger render như thẻ <a> HTML thuần — phù hợp cho liên kết tự nhiên trong văn bản.",
            "Trigger renders as a native HTML <a> tag — suitable for natural links in text.",
          )}
          code={`<HoverCardTrigger
    render={
      <a
        href="#"
        className="text-primary underline underline-offset-4"
      />
    }
  >
    @nextjs
  </HoverCardTrigger>`}
          preview={
            <>
              <HoverCard>
                <HoverCardTrigger
                  render={
                    <a
                      href="#"
                      className="text-sm text-primary underline underline-offset-4 hover:opacity-80 transition-opacity"
                    />
                  }
                >
                  @nextjs
                </HoverCardTrigger>

                <HoverCardContent className="w-80">
                  <NextJsCard />
                </HoverCardContent>
              </HoverCard>
            </>
          }
        />
      </ExampleGrid>

      {/* ── Độ trễ (delay / closeDelay) ── */}
      <ShowcaseExample
        title={t("Độ trễ (delay / closeDelay)", "Delay (delay / closeDelay)")}
        description={t(
          "Tuỳ chỉnh thời gian trễ trước khi card xuất hiện hoặc biến mất. Props delay và closeDelay đặt trên HoverCardTrigger.",
          "Customize the delay before the card appears or disappears. Props delay and closeDelay are set on HoverCardTrigger.",
        )}
        code={`<HoverCard>
    <HoverCardTrigger delay={0} render={<Button />}>
      Instant
    </HoverCardTrigger>
    
      <HoverCardContent>...</HoverCardContent>
    
  </HoverCard>

  <HoverCard>
    <HoverCardTrigger delay={500} render={<Button />}>
      Default (500ms)
    </HoverCardTrigger>
    
      <HoverCardContent>...</HoverCardContent>
    
  </HoverCard>

  <HoverCard>
    <HoverCardTrigger
      delay={1500}
      closeDelay={500}
      render={<Button />}
    >
      Slow (1500ms)
    </HoverCardTrigger>
    
      <HoverCardContent>...</HoverCardContent>
    
  </HoverCard>`}
        preview={
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
              <HoverCard>
                <HoverCardTrigger
                  delay={0}
                  render={
                    <Button
                      variant="outline"
                      size={globalSize}
                      className="w-full"
                    >
                      Instant (0ms)
                    </Button>
                  }
                />

                <HoverCardContent className="w-72">
                  <NextJsCard />
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger
                  delay={500}
                  render={
                    <Button
                      variant="outline"
                      size={globalSize}
                      className="w-full"
                    >
                      Default (500ms)
                    </Button>
                  }
                />

                <HoverCardContent className="w-72">
                  <NextJsCard />
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger
                  delay={1500}
                  closeDelay={500}
                  render={
                    <Button
                      variant="outline"
                      size={globalSize}
                      className="w-full"
                    >
                      Slow (1500ms)
                    </Button>
                  }
                />

                <HoverCardContent className="w-72">
                  <NextJsCard />
                </HoverCardContent>
              </HoverCard>
            </div>
          </>
        }
      />
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 3: Entry point (export default)
// ──────────────────────────────────────────────────────────
export default function HoverCardShowcase() {
  const t = useI18n();
  const { size: globalSize } = useDevContext();
  return (
    <Showcase
      title="Hover Card"
      description={t(
        "Xem trước nội dung đằng sau một liên kết khi hover.",
        "Preview content behind a link on hover.",
      )}
      guideline={
        <ShowcaseDocs>
          <DocsP>
            {t(
              "<DocsCode>HoverCard</DocsCode> hiển thị một khung xem trước thông tin bổ sung khi người dùng di chuột qua (hover) một phần tử, thường là một liên kết hoặc một từ khoá. Nó giúp người dùng nắm bắt thông tin nhanh chóng mà không cần chuyển hướng hay click.",
              "<DocsCode>HoverCard</DocsCode> displays a preview pane of additional information when the user hovers over an element, usually a link or a keyword. It helps users quickly grasp information without navigating or clicking.",
            )}
          </DocsP>
          <DocsP>
            {t(
              "Trigger hỗ trợ polymorphism qua prop <DocsCode>render</DocsCode> — bạn có thể truyền bất kỳ phần tử nào (Button, anchor, span…) và HoverCard sẽ giữ nguyên style & a11y của phần tử đó.",
              "Trigger supports polymorphism via the <DocsCode>render</DocsCode> prop — you can pass any element (Button, anchor, span…) and HoverCard will retain the style & a11y of that element.",
            )}
          </DocsP>
        </ShowcaseDocs>
      }
      micro={{ content: <HoverCardMicroShowcase globalSize={globalSize} /> }}
    />
  );
}
