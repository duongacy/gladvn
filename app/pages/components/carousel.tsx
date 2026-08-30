import React from "react";
import { CarouselPreset } from "@/components/macro/carousel-preset";
import { Card, CardContent } from "@/components/micro/card";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/micro/carousel";
import { useI18n } from "~app/components/dev-context";
import {
  ConfigurableShowcase,
  ShowcaseDocs,
  DocsP,
} from "~app/components/showcase";
import { cn } from "@/lib/utils";

const SLIDES = [
  { id: 1, bg: "bg-linear-to-tr from-violet-500 to-purple-500" },
  { id: 2, bg: "bg-linear-to-tr from-pink-500 to-rose-500" },
  { id: 3, bg: "bg-linear-to-tr from-blue-500 to-cyan-500" },
  { id: 4, bg: "bg-linear-to-tr from-emerald-500 to-teal-500" },
];

const HERO_SLIDES = [
  {
    id: 1,
    bg: "bg-linear-to-tr from-violet-500 to-purple-500",
    title: "Modern Interface",
    desc: "Crafting beautiful interfaces with Tailwind.",
  },
  {
    id: 2,
    bg: "bg-linear-to-tr from-pink-500 to-rose-500",
    title: "Smooth Interactions",
    desc: "Fluid animations and micro-interactions.",
  },
  {
    id: 3,
    bg: "bg-linear-to-tr from-blue-500 to-cyan-500",
    title: "Accessible by Default",
    desc: "Keyboard navigation out of the box.",
  },
];

function useCarouselExamples() {
  const t = useI18n();

  return React.useMemo(() => [

    {
      title: t("Tiêu chuẩn", "Standard"),
      description: t(
        "Băng chuyền cơ bản với mũi tên và dấu chấm điều hướng.",
        "Basic carousel with arrow and dot navigation."
      ),
      macroCode: `<CarouselPreset
  items={[
    {
      id: 1,
      content: (
        <div className="flex aspect-square items-center justify-center rounded-lg bg-linear-to-tr from-violet-500 to-purple-500 text-4xl font-bold text-white">
          1
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div className="flex aspect-square items-center justify-center rounded-lg bg-linear-to-tr from-pink-500 to-rose-500 text-4xl font-bold text-white">
          2
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div className="flex aspect-square items-center justify-center rounded-lg bg-linear-to-tr from-blue-500 to-cyan-500 text-4xl font-bold text-white">
          3
        </div>
      ),
    },
  ]}
/>`,
      macroPreview: (
        <div className="w-full max-w-sm px-12">
          <CarouselPreset
            items={SLIDES.map((s) => ({
              id: s.id,
              content: (
                <div
                  className={cn(
                    "flex aspect-square items-center justify-center rounded-lg text-4xl font-bold text-white",
                    s.bg
                  )}
                >
                  {s.id}
                </div>
              ),
            }))}
          />
        </div>
      ),
      microCode: `<Carousel>
  <CarouselContent className="-ml-4">
    <CarouselItem className="pl-4">
      <div className="flex aspect-square items-center justify-center rounded-lg bg-linear-to-tr from-violet-500 to-purple-500 text-4xl font-bold text-white">
        1
      </div>
    </CarouselItem>
    <CarouselItem className="pl-4">
      <div className="flex aspect-square items-center justify-center rounded-lg bg-linear-to-tr from-pink-500 to-rose-500 text-4xl font-bold text-white">
        2
      </div>
    </CarouselItem>
    <CarouselItem className="pl-4">
      <div className="flex aspect-square items-center justify-center rounded-lg bg-linear-to-tr from-blue-500 to-cyan-500 text-4xl font-bold text-white">
        3
      </div>
    </CarouselItem>
  </CarouselContent>
  <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2" />
  <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2" />
  <div className="mt-4 flex justify-center">
    <CarouselDots />
  </div>
</Carousel>`,
      microPreview: (
        <div className="w-full max-w-sm px-12">
          <Carousel>
            <CarouselContent className="-ml-4">
              {SLIDES.map((s) => (
                <CarouselItem key={s.id} className="pl-4">
                  <div
                    className={cn(
                      "flex aspect-square items-center justify-center rounded-lg text-4xl font-bold text-white",
                      s.bg
                    )}
                  >
                    {s.id}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2" />
            <div className="mt-4 flex justify-center">
              <CarouselDots />
            </div>
          </Carousel>
        </div>
      ),
    },

    {
      title: t("Nhiều phần tử", "Multiple Items"),
      description: t(
        "Nhiều thẻ hiển thị trên cùng một lượt cuộn.",
        "Multiple cards visible per scroll."
      ),
      macroCode: `<CarouselPreset
  opts={{ align: "start" }}
  itemClassName="md:basis-1/2 lg:basis-1/3"
  items={[
    {
      id: 1,
      content: (
        <div className="p-1">
          <Card>
            <CardContent className="flex aspect-video items-center justify-center text-2xl font-bold text-muted-foreground/30">
              01
            </CardContent>
          </Card>
        </div>
      ),
    },
  ]}
/>`,
      macroPreview: (
        <div className="w-full px-12">
          <CarouselPreset
            opts={{ align: "start" }}
            itemClassName="md:basis-1/2 lg:basis-1/3"
            items={Array.from({ length: 6 }, (_, i) => ({
              id: i,
              content: (
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center text-2xl font-bold text-muted-foreground/30">
                      0{i + 1}
                    </CardContent>
                  </Card>
                </div>
              ),
            }))}
          />
        </div>
      ),
      microCode: `<Carousel opts={{ align: "start" }}>
  <CarouselContent className="-ml-4">
    {items.map((item) => (
      <CarouselItem key={item.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
        <div className="p-1">
          <Card>
            <CardContent className="flex aspect-video items-center justify-center text-2xl font-bold text-muted-foreground/30">
              {item.label}
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2" />
  <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2" />
  <div className="mt-4 flex justify-center">
    <CarouselDots />
  </div>
</Carousel>`,
      microPreview: (
        <div className="w-full px-12">
          <Carousel opts={{ align: "start" }}>
            <CarouselContent className="-ml-4">
              {Array.from({ length: 6 }, (_, i) => (
                <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-video items-center justify-center text-2xl font-bold text-muted-foreground/30">
                        0{i + 1}
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2" />
            <div className="mt-4 flex justify-center">
              <CarouselDots />
            </div>
          </Carousel>
        </div>
      ),
    },

    {
      title: t("Ảnh bìa Hero", "Hero Banner"),
      description: t(
        "Mũi tên và dấu chấm nằm đè lên slide, hiện khi hover.",
        "Arrows and dots overlaid on the slide, visible on hover."
      ),
      microCode: `<Carousel
  opts={{ loop: true }}
  className="group relative w-full overflow-hidden rounded-2xl"
>
  <CarouselContent className="-ml-4">
    <CarouselItem className="pl-4">
      <div className="flex aspect-[21/9] items-center justify-center bg-linear-to-tr from-violet-500 to-purple-500">
        <h3 className="text-3xl font-bold text-white">Slide 1</h3>
      </div>
    </CarouselItem>
  </CarouselContent>

  <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-between p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
    <CarouselPrevious className="pointer-events-auto border-white/20 bg-background/30 text-white backdrop-blur-md hover:bg-background/50" />
    <CarouselNext className="pointer-events-auto border-white/20 bg-background/30 text-white backdrop-blur-md hover:bg-background/50" />
  </div>

  <div className="absolute bottom-4 left-0 right-0 z-10">
    <CarouselDots className="[&>[data-slot=carousel-dot][data-active]]:bg-white [&>[data-slot=carousel-dot]]:bg-white/40" />
  </div>
</Carousel>`,
      microPreview: (
        <div className="mx-auto w-full max-w-4xl">
          <Carousel
            opts={{ loop: true }}
            className="group relative w-full overflow-hidden rounded-2xl border border-border/50"
          >
            <CarouselContent className="-ml-4">
              {HERO_SLIDES.map((slide) => (
                <CarouselItem key={slide.id} className="pl-4">
                  <div
                    className={cn(
                      "flex aspect-[21/9] flex-col items-center justify-center gap-2 text-white",
                      slide.bg
                    )}
                  >
                    <h3 className="text-3xl font-bold">{slide.title}</h3>
                    <p className="text-sm text-white/80">{slide.desc}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-between p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <CarouselPrevious className="pointer-events-auto border-white/20 bg-background/30 text-white backdrop-blur-md hover:bg-background/50" />
              <CarouselNext className="pointer-events-auto border-white/20 bg-background/30 text-white backdrop-blur-md hover:bg-background/50" />
            </div>
            <div className="absolute bottom-4 left-0 right-0 z-10">
              <CarouselDots className="[&>[data-slot=carousel-dot][data-active]]:bg-white [&>[data-slot=carousel-dot]]:bg-white/40" />
            </div>
          </Carousel>
        </div>
      ),
    },

  ], [t]);
}

export default function CarouselShowcase() {
  const t = useI18n();
  const examples = useCarouselExamples();

  return (
    <ConfigurableShowcase
      title="Carousel"
      description={t(
        "Băng chuyền vuốt cao cấp được xây dựng bằng Embla.",
        "Premium swipe carousel built with Embla."
      )}
      guideline={
        <ShowcaseDocs>
          <DocsP>
            {t(
              "Dùng để duyệt qua một tập hợp nội dung (hình ảnh, thẻ bài, biểu ngữ) theo dạng trượt ngang. Thích hợp cho không gian hiển thị giới hạn cần hiển thị nhiều mục.",
              "Use to browse through a collection of content (images, cards, banners) by swiping horizontally. Suitable for limited display spaces that need to show multiple items."
            )}
          </DocsP>
        </ShowcaseDocs>
      }
      examples={examples}
    />
  );
}
