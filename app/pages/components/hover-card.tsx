import React from "react";
import { CalendarIcon } from "lucide-react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/micro/avatar";
import { Button } from "@/components/micro/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/micro/hover-card";
import { useDevContext, useI18n } from "~app/components/dev-context";
import {
  ConfigurableShowcase,
  ShowcaseDocs,
  DocsP,
  DocsCode,
} from "~app/components/showcase";

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

function useHoverCardExamples() {
  const t = useI18n();
  const { size: globalSize } = useDevContext();

  return React.useMemo(
    () => [
      {
        title: t("Default", "Default"),
        description: t(
          "Di chuột qua liên kết để xem bản xem trước. Trigger render dưới dạng Button với variant link.",
          "Hover over the link to see a preview. Trigger renders as a Button with link variant."
        ),
        microCode: `<HoverCard>
  <HoverCardTrigger render={<Button variant="link" />}>
    @nextjs
  </HoverCardTrigger>
  <HoverCardContent className="w-80">
    <NextJsCard />
  </HoverCardContent>
</HoverCard>`,
        microPreview: (
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
        ),
      },
      {
        title: t("Vị trí", "Side Position"),
        description: t(
          "HoverCard có thể xuất hiện ở bốn phía của trigger thông qua prop side.",
          "HoverCard can appear on all four sides of the trigger via the side prop."
        ),
        microCode: `<div className="flex flex-wrap items-center justify-center gap-4 py-8">
  <HoverCard>
    <HoverCardTrigger
      render={<Button variant="outline" className="capitalize">top</Button>}
    />
    <HoverCardContent side="top" className="w-72">
      <NextJsCard />
    </HoverCardContent>
  </HoverCard>
  <HoverCard>
    <HoverCardTrigger
      render={<Button variant="outline" className="capitalize">right</Button>}
    />
    <HoverCardContent side="right" className="w-72">
      <NextJsCard />
    </HoverCardContent>
  </HoverCard>
  <HoverCard>
    <HoverCardTrigger
      render={<Button variant="outline" className="capitalize">bottom</Button>}
    />
    <HoverCardContent side="bottom" className="w-72">
      <NextJsCard />
    </HoverCardContent>
  </HoverCard>
  <HoverCard>
    <HoverCardTrigger
      render={<Button variant="outline" className="capitalize">left</Button>}
    />
    <HoverCardContent side="left" className="w-72">
      <NextJsCard />
    </HoverCardContent>
  </HoverCard>
</div>`,
        microPreview: (
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
        ),
      },
      ...(["start", "center", "end"] as const).map((align) => ({
        title: `Align: ${align}`,
        description: t(
          `Card căn ${align} theo trục ngang.`,
          `Card aligns ${align} horizontally.`
        ),
        microCode: `<HoverCard>
  <HoverCardTrigger
    render={<Button variant="outline" className="capitalize">${align}</Button>}
  />
  <HoverCardContent align="${align}" className="w-64">
    <NextJsCard />
  </HoverCardContent>
</HoverCard>`,
        microPreview: (
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
        ),
      })),
      {
        title: t("Trigger: Button Link", "Trigger: Button Link"),
        description: t(
          "Trigger render như Button variant link — phù hợp cho text nội tuyến.",
          "Trigger renders as a Button link variant — suitable for inline text."
        ),
        microCode: `<HoverCardTrigger render={<Button variant="link" />}>
  @nextjs
</HoverCardTrigger>`,
        microPreview: (
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
        ),
      },
      {
        title: t("Trigger: Thẻ anchor thuần", "Trigger: Native anchor tag"),
        description: t(
          "Trigger render như thẻ <a> HTML thuần — phù hợp cho liên kết tự nhiên trong văn bản.",
          "Trigger renders as a native HTML <a> tag — suitable for natural links in text."
        ),
        microCode: `<HoverCardTrigger
  render={
    <a
      href="#"
      className="text-primary underline underline-offset-4"
    />
  }
>
  @nextjs
</HoverCardTrigger>`,
        microPreview: (
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
        ),
      },
      {
        title: t("Độ trễ", "Delay (delay / closeDelay)"),
        description: t(
          "Tuỳ chỉnh thời gian trễ trước khi card xuất hiện hoặc biến mất. Props delay và closeDelay đặt trên HoverCardTrigger.",
          "Customize the delay before the card appears or disappears. Props delay and closeDelay are set on HoverCardTrigger."
        ),
        microCode: `<div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
  <HoverCard>
    <HoverCardTrigger
      delay={0}
      render={<Button variant="outline" className="w-full">Instant (0ms)</Button>}
    />
    <HoverCardContent className="w-72">
      <NextJsCard />
    </HoverCardContent>
  </HoverCard>

  <HoverCard>
    <HoverCardTrigger
      delay={500}
      render={<Button variant="outline" className="w-full">Default (500ms)</Button>}
    />
    <HoverCardContent className="w-72">
      <NextJsCard />
    </HoverCardContent>
  </HoverCard>

  <HoverCard>
    <HoverCardTrigger
      delay={1500}
      closeDelay={500}
      render={<Button variant="outline" className="w-full">Slow (1500ms)</Button>}
    />
    <HoverCardContent className="w-72">
      <NextJsCard />
    </HoverCardContent>
  </HoverCard>
</div>`,
        microPreview: (
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
        ),
      },
    ],
    [globalSize, t]
  );
}

export default function HoverCardShowcase() {
  const t = useI18n();
  const examples = useHoverCardExamples();

  return (
    <ConfigurableShowcase
      title="Hover Card"
      description={t(
        "Xem trước nội dung đằng sau một liên kết khi hover.",
        "Preview content behind a link on hover."
      )}
      guideline={
        <ShowcaseDocs>
          <DocsP>
            <DocsCode>HoverCard</DocsCode>
            {t(
              " hiển thị một khung xem trước thông tin bổ sung khi người dùng di chuột qua (hover) một phần tử, thường là một liên kết hoặc một từ khoá. Nó giúp người dùng nắm bắt thông tin nhanh chóng mà không cần chuyển hướng hay click.",
              " displays a preview pane of additional information when the user hovers over an element, usually a link or a keyword. It helps users quickly grasp information without navigating or clicking."
            )}
          </DocsP>
          <DocsP>
            {t(
              "Trigger hỗ trợ polymorphism qua prop ",
              "Trigger supports polymorphism via the "
            )}
            <DocsCode>render</DocsCode>
            {t(
              " — bạn có thể truyền bất kỳ phần tử nào (Button, anchor, span…) và HoverCard sẽ giữ nguyên style & a11y của phần tử đó.",
              " prop — you can pass any element (Button, anchor, span…) and HoverCard will retain the style & a11y of that element."
            )}
          </DocsP>
        </ShowcaseDocs>
      }
      examples={examples}
    />
  );
}
