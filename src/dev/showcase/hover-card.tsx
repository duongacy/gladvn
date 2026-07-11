import { useDevContext } from "@/dev/components/dev-context";
import {
  DocsCode,
  DocsP,
  ExampleGrid,
  ExampleSection,
  Showcase,
  ShowcaseDocs,
} from "@/dev/components/showcase";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/micro/avatar";
import { Button } from "@/components/micro/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/micro/hover-card";
import { type Size } from "@/lib/types";

// ──────────────────────────────────────────────────────────
// Shared demo card content
// ──────────────────────────────────────────────────────────
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

// ──────────────────────────────────────────────────────────
// SECTION 2: Micro Content (không export)
// ──────────────────────────────────────────────────────────
function HoverCardMicroShowcase({ globalSize }: { globalSize: Size }) {
  return (
    <div className="space-y-10 mt-6">
      {/* ── Default ── */}
      <ExampleSection
        label="Default"
        description="Di chuột qua liên kết để xem bản xem trước. Trigger render dưới dạng Button với variant link."
        codeString={`<HoverCard>
  <HoverCardTrigger render={<Button variant="link" />}>
    @nextjs
  </HoverCardTrigger>
  <HoverCardContent className="w-80">
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
          <CalendarIcon aria-hidden="true" focusable="false" className="mr-2 h-4 w-4 opacity-70" />
          <span className="text-xs text-muted-foreground">Joined December 2021</span>
        </div>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>`}
      >
        <HoverCard>
          <HoverCardTrigger render={<Button variant="link" size={globalSize} />}>
            @nextjs
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <NextJsCard />
          </HoverCardContent>
        </HoverCard>
      </ExampleSection>

      {/* ── Vị trí (Sides) ── */}
      <ExampleSection
        label="Vị trí (Side)"
        description="HoverCard có thể xuất hiện ở bốn phía của trigger thông qua prop side."
        codeString={`<HoverCard>
  <HoverCardTrigger render={<Button variant="outline">Top</Button>} />
  <HoverCardContent side="top" className="w-80">...</HoverCardContent>
</HoverCard>`}
      >
        <div className="flex flex-wrap items-center justify-center gap-4 py-8">
          {(["top", "right", "bottom", "left"] as const).map((side) => (
            <HoverCard key={side}>
              <HoverCardTrigger
                render={
                  <Button variant="outline" size={globalSize} className="capitalize">
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
      </ExampleSection>

      {/* ── Căn chỉnh (Align) ── */}
      <ExampleGrid >
        {(["start", "center", "end"] as const).map((align) => (
          <ExampleSection
            key={align}
            label={`Align: ${align}`}
            description={`Card căn ${align} theo trục ngang.`}
            codeString={`<HoverCardContent align="${align}" className="w-80">...</HoverCardContent>`}
          >
            <HoverCard>
              <HoverCardTrigger
                render={
                  <Button variant="outline" size={globalSize} className="capitalize">
                    {align}
                  </Button>
                }
              />
              <HoverCardContent align={align} className="w-64">
                <NextJsCard />
              </HoverCardContent>
            </HoverCard>
          </ExampleSection>
        ))}
      </ExampleGrid>

      {/* ── Trigger types ── */}
      <ExampleGrid >
        <ExampleSection
          label="Trigger: Button Link"
          description="Trigger render như Button variant link — phù hợp cho text nội tuyến."
          codeString={`<HoverCardTrigger render={<Button variant="link" />}>
  @nextjs
</HoverCardTrigger>`}
        >
          <HoverCard>
            <HoverCardTrigger render={<Button variant="link" size={globalSize} />}>
              @nextjs
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <NextJsCard />
            </HoverCardContent>
          </HoverCard>
        </ExampleSection>

        <ExampleSection
          label="Trigger: Thẻ anchor thuần"
          description="Trigger render như thẻ <a> HTML thuần — phù hợp cho liên kết tự nhiên trong văn bản."
          codeString={`<HoverCardTrigger
  render={<a href="#" className="text-primary underline underline-offset-4" />}
>
  @nextjs
</HoverCardTrigger>`}
        >
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
        </ExampleSection>
      </ExampleGrid>

      {/* ── Độ trễ (delay / closeDelay) ── */}
      <ExampleSection
        label="Độ trễ (delay / closeDelay)"
        description="Tuỳ chỉnh thời gian trễ trước khi card xuất hiện hoặc biến mất. Props delay và closeDelay đặt trên HoverCardTrigger."
        fullWidth
        codeString={`<HoverCard>
  <HoverCardTrigger delay={0} render={<Button />}>Tức thì</HoverCardTrigger>
  <HoverCardContent>...</HoverCardContent>
</HoverCard>

<HoverCard>
  <HoverCardTrigger delay={500} render={<Button />}>Mặc định (500ms)</HoverCardTrigger>
  <HoverCardContent>...</HoverCardContent>
</HoverCard>

<HoverCard>
  <HoverCardTrigger delay={1500} closeDelay={500} render={<Button />}>Chậm (1500ms)</HoverCardTrigger>
  <HoverCardContent>...</HoverCardContent>
</HoverCard>`}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          <HoverCard>
            <HoverCardTrigger
              delay={0}
              render={
                <Button variant="outline" size={globalSize} className="w-full">
                  Tức thì (0ms)
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
                <Button variant="outline" size={globalSize} className="w-full">
                  Mặc định (500ms)
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
                <Button variant="outline" size={globalSize} className="w-full">
                  Chậm (1500ms)
                </Button>
              }
            />
            <HoverCardContent className="w-72">
              <NextJsCard />
            </HoverCardContent>
          </HoverCard>
        </div>
      </ExampleSection>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 3: Entry point (export default)
// ──────────────────────────────────────────────────────────
export default function HoverCardShowcase() {
  const { size: globalSize } = useDevContext();
  return (
    <Showcase
      title="Hover Card"
      description="Để người dùng sáng mắt xem trước nội dung có sẵn đằng sau một liên kết."
      generalConcept={
        <ShowcaseDocs>
          <DocsP>
            <DocsCode>HoverCard</DocsCode> hiển thị một khung xem trước thông
            tin bổ sung khi người dùng di chuột qua (hover) một phần tử, thường
            là một liên kết hoặc một từ khoá. Nó giúp người dùng nắm bắt thông
            tin nhanh chóng mà không cần chuyển hướng hay click.
          </DocsP>
          <DocsP>
            Trigger hỗ trợ polymorphism qua prop{" "}
            <DocsCode>render</DocsCode> — bạn có thể truyền bất kỳ phần tử nào
            (Button, anchor, span…) và HoverCard sẽ giữ nguyên style &amp; a11y
            của phần tử đó.
          </DocsP>
        </ShowcaseDocs>
      }
      tabs={[
        {
          label: "Micro (Primitive)",
          content: <HoverCardMicroShowcase globalSize={globalSize} />,
        },
      ]}
    />
  );
}
