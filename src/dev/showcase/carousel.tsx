import { useState } from "react";

import { CarouselPreset } from "../../components/macro/carousel-preset";
import { Card, CardContent } from "../../components/micro/card";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/micro/carousel";
import { useI18n } from "../../dev/components/dev-context";
import {
  DocsP,
  ExampleGrid,
  Showcase,
  ShowcaseDocs,
  ShowcaseExample,
} from "../../dev/components/showcase";
import { cn } from "../../lib/utils";

function CarouselMacroShowcase() {
  const t = useI18n();

  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample
          title={t("Tiêu chuẩn", "Standard")}
          description={t(
            "Băng chuyền cơ bản nhất với cầu trượt.",
            "The most basic carousel with a slider.",
          )}
          code={`<CarouselPreset
    items={[
      {
        id: "std-1",
        content: (
          <div className="p-1 border border-border rounded-xl">
            <div className="flex aspect-square items-center justify-center p-6 bg-muted/20 rounded-lg">
              <span className="text-4xl font-semibold">
                1
              </span>
            </div>
          </div>
        ) },
      {
        id: "std-2",
        content: (
          <div className="p-1 border border-border rounded-xl">
            <div className="flex aspect-square items-center justify-center p-6 bg-muted/20 rounded-lg">
              <span className="text-4xl font-semibold">
                2
              </span>
            </div>
          </div>
        ) },
      {
        id: "std-3",
        content: (
          <div className="p-1 border border-border rounded-xl">
            <div className="flex aspect-square items-center justify-center p-6 bg-muted/20 rounded-lg">
              <span className="text-4xl font-semibold">
                3
              </span>
            </div>
          </div>
        ) },
    ]}
  />`}
          preview={
            <>
              <div className="w-full max-w-sm px-12">
                <CarouselPreset
                  items={[
                    {
                      id: "std-1",
                      content: (
                        <div className="p-1 border border-border rounded-xl">
                          <div className="flex aspect-square items-center justify-center p-6 bg-muted/20 rounded-lg">
                            <span className="text-4xl font-semibold">1</span>
                          </div>
                        </div>
                      ),
                    },
                    {
                      id: "std-2",
                      content: (
                        <div className="p-1 border border-border rounded-xl">
                          <div className="flex aspect-square items-center justify-center p-6 bg-muted/20 rounded-lg">
                            <span className="text-4xl font-semibold">2</span>
                          </div>
                        </div>
                      ),
                    },
                    {
                      id: "std-3",
                      content: (
                        <div className="p-1 border border-border rounded-xl">
                          <div className="flex aspect-square items-center justify-center p-6 bg-muted/20 rounded-lg">
                            <span className="text-4xl font-semibold">3</span>
                          </div>
                        </div>
                      ),
                    },
                  ]}
                />
              </div>
            </>
          }
        />

        <ShowcaseExample
          title={t("Thư viện ảnh", "Image Gallery")}
          description={t(
            "Sử dụng hình ảnh thực làm nội dung slide.",
            "Use real images as slide content.",
          )}
          code={`<CarouselPreset
    items={[
      {
        id: "img-1",
        content: (
          <img
            src="https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=600&h=400&auto=format&fit=crop"
            alt="Slide 1"
            className="rounded-xl object-cover"
          />
        ) },
      {
        id: "img-2",
        content: (
          <img
            src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=600&h=400&auto=format&fit=crop"
            alt="Slide 2"
            className="rounded-xl object-cover"
          />
        ) },
      {
        id: "img-3",
        content: (
          <img
            src="https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=600&h=400&auto=format&fit=crop"
            alt="Slide 3"
            className="rounded-xl object-cover"
          />
        ) },
    ]}
  />`}
          preview={
            <>
              <div className="w-full max-w-sm px-12">
                <CarouselPreset
                  items={[
                    {
                      id: "img-1",
                      content: (
                        <img
                          src="https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=600&h=400&auto=format&fit=crop"
                          alt="Slide 1"
                          className="rounded-xl object-cover"
                        />
                      ),
                    },
                    {
                      id: "img-2",
                      content: (
                        <img
                          src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=600&h=400&auto=format&fit=crop"
                          alt="Slide 2"
                          className="rounded-xl object-cover"
                        />
                      ),
                    },
                    {
                      id: "img-3",
                      content: (
                        <img
                          src="https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=600&h=400&auto=format&fit=crop"
                          alt="Slide 3"
                          className="rounded-xl object-cover"
                        />
                      ),
                    },
                  ]}
                />
              </div>
            </>
          }
        />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample
          title={t("Vòng lặp vô hạn", "Loop Enabled")}
          description={t(
            "Chỉ hiển thị dấu chấm (ẩn mũi tên).",
            "Show dots only (hide arrows).",
          )}
          code={`<CarouselPreset
    opts={{ loop: true }}
    showArrows={false}
    items={[
      {
        id: "loop-1",
        content: (
          <div className="p-1 border border-border rounded-xl">
            <div className="flex aspect-square items-center justify-center p-6 bg-linear-to-tr from-violet-500 to-purple-500 rounded-lg text-white">
              <span className="text-4xl font-semibold">
                1
              </span>
            </div>
          </div>
        ) },
      {
        id: "loop-2",
        content: (
          <div className="p-1 border border-border rounded-xl">
            <div className="flex aspect-square items-center justify-center p-6 bg-linear-to-tr from-pink-500 to-rose-500 rounded-lg text-white">
              <span className="text-4xl font-semibold">
                2
              </span>
            </div>
          </div>
        ) },
      {
        id: "loop-3",
        content: (
          <div className="p-1 border border-border rounded-xl">
            <div className="flex aspect-square items-center justify-center p-6 bg-linear-to-tr from-blue-500 to-cyan-500 rounded-lg text-white">
              <span className="text-4xl font-semibold">
                3
              </span>
            </div>
          </div>
        ) },
    ]}
  />`}
          preview={
            <>
              <div className="w-full max-w-sm">
                <CarouselPreset
                  opts={{ loop: true }}
                  showArrows={false}
                  items={[
                    {
                      id: "loop-1",
                      content: (
                        <div className="p-1 border border-border rounded-xl">
                          <div className="flex aspect-square items-center justify-center p-6 bg-linear-to-tr from-violet-500 to-purple-500 rounded-lg text-white">
                            <span className="text-4xl font-semibold">1</span>
                          </div>
                        </div>
                      ),
                    },
                    {
                      id: "loop-2",
                      content: (
                        <div className="p-1 border border-border rounded-xl">
                          <div className="flex aspect-square items-center justify-center p-6 bg-linear-to-tr from-pink-500 to-rose-500 rounded-lg text-white">
                            <span className="text-4xl font-semibold">2</span>
                          </div>
                        </div>
                      ),
                    },
                    {
                      id: "loop-3",
                      content: (
                        <div className="p-1 border border-border rounded-xl">
                          <div className="flex aspect-square items-center justify-center p-6 bg-linear-to-tr from-blue-500 to-cyan-500 rounded-lg text-white">
                            <span className="text-4xl font-semibold">3</span>
                          </div>
                        </div>
                      ),
                    },
                  ]}
                />
              </div>
            </>
          }
        />

        <ShowcaseExample
          title={t("Chỉ mũi tên", "Arrows Only")}
          description={t(
            "Mũi tên điều hướng không có dấu chấm.",
            "Navigation arrows without dots.",
          )}
          code={`<CarouselPreset
    showDots={false}
    items={[
      {
        id: "arr-1",
        content: (
          <div className="p-1 border border-border rounded-xl">
            <div className="flex aspect-square items-center justify-center p-6 bg-muted/20 rounded-lg">
              <span className="text-4xl font-semibold">
                A
              </span>
            </div>
          </div>
        ) },
      {
        id: "arr-2",
        content: (
          <div className="p-1 border border-border rounded-xl">
            <div className="flex aspect-square items-center justify-center p-6 bg-muted/20 rounded-lg">
              <span className="text-4xl font-semibold">
                B
              </span>
            </div>
          </div>
        ) },
      {
        id: "arr-3",
        content: (
          <div className="p-1 border border-border rounded-xl">
            <div className="flex aspect-square items-center justify-center p-6 bg-muted/20 rounded-lg">
              <span className="text-4xl font-semibold">
                C
              </span>
            </div>
          </div>
        ) },
    ]}
  />`}
          preview={
            <>
              <div className="w-full max-w-sm px-12">
                <CarouselPreset
                  showDots={false}
                  items={[
                    {
                      id: "arr-1",
                      content: (
                        <div className="p-1 border border-border rounded-xl">
                          <div className="flex aspect-square items-center justify-center p-6 bg-muted/20 rounded-lg">
                            <span className="text-4xl font-semibold">A</span>
                          </div>
                        </div>
                      ),
                    },
                    {
                      id: "arr-2",
                      content: (
                        <div className="p-1 border border-border rounded-xl">
                          <div className="flex aspect-square items-center justify-center p-6 bg-muted/20 rounded-lg">
                            <span className="text-4xl font-semibold">B</span>
                          </div>
                        </div>
                      ),
                    },
                    {
                      id: "arr-3",
                      content: (
                        <div className="p-1 border border-border rounded-xl">
                          <div className="flex aspect-square items-center justify-center p-6 bg-muted/20 rounded-lg">
                            <span className="text-4xl font-semibold">C</span>
                          </div>
                        </div>
                      ),
                    },
                  ]}
                />
              </div>
            </>
          }
        />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample
          title={t("Theo chiều dọc", "Vertical Orientation")}
          description={t(
            "Băng chuyền macro cuộn theo chiều dọc.",
            "Macro carousel scrolling vertically.",
          )}
          code={`<CarouselPreset
    className="w-full"
    orientation="vertical"
    contentClassName="h-75"
    itemClassName="basis-[250px]"
    items={[
      {
        id: "v1",
        content: (
          <div className="h-full w-full border border-border rounded-xl flex items-center justify-center bg-muted/20 text-4xl font-semibold">
            A
          </div>
        ) },
      {
        id: "v2",
        content: (
          <div className="h-full w-full border border-border rounded-xl flex items-center justify-center bg-muted/20 text-4xl font-semibold">
            B
          </div>
        ) },
      {
        id: "v3",
        content: (
          <div className="h-full w-full border border-border rounded-xl flex items-center justify-center bg-muted/20 text-4xl font-semibold">
            C
          </div>
        ) },
    ]}
  />`}
          preview={
            <>
              <div className="w-full max-w-sm px-12 py-12 flex justify-center">
                <CarouselPreset
                  className="w-full"
                  orientation="vertical"
                  contentClassName="h-75"
                  itemClassName="basis-[250px]"
                  items={[
                    {
                      id: "v1",
                      content: (
                        <div className="h-full w-full border border-border rounded-xl flex items-center justify-center bg-muted/20 text-4xl font-semibold">
                          A
                        </div>
                      ),
                    },
                    {
                      id: "v2",
                      content: (
                        <div className="h-full w-full border border-border rounded-xl flex items-center justify-center bg-muted/20 text-4xl font-semibold">
                          B
                        </div>
                      ),
                    },
                    {
                      id: "v3",
                      content: (
                        <div className="h-full w-full border border-border rounded-xl flex items-center justify-center bg-muted/20 text-4xl font-semibold">
                          C
                        </div>
                      ),
                    },
                  ]}
                />
              </div>
            </>
          }
        />
      </ExampleGrid>
    </div>
  );
}

function CarouselMicroShowcase() {
  const t = useI18n();

  const SLIDES = [
    {
      id: 1,
      title: t("Giao diện Hiện đại", "Modern Interface"),
      desc: t(
        "Thiết kế giao diện tuyệt đẹp với tailwind.",
        "Crafting beautiful interfaces with tailwind.",
      ),
      bg: "bg-linear-to-tr from-violet-500 to-purple-500",
    },
    {
      id: 2,
      title: t("Tương tác Mượt mà", "Smooth Interactions"),
      desc: t(
        "Hiệu ứng chuyển động và tương tác vi mô mượt mà.",
        "Fluid animations and micro-interactions.",
      ),
      bg: "bg-linear-to-tr from-pink-500 to-rose-500",
    },
    {
      id: 3,
      title: t("Dễ tuỳ chỉnh", "Easily Customizable"),
      desc: t(
        "Dễ dàng điều chỉnh theo thương hiệu của bạn.",
        "Easily adapt to your brand.",
      ),
      bg: "bg-linear-to-tr from-blue-500 to-cyan-500",
    },
    {
      id: 4,
      title: t("Mặc định Accessible", "Accessible by Default"),
      desc: t(
        "Hỗ trợ điều hướng bằng bàn phím ngay lập tức.",
        "Keyboard navigation out of the box.",
      ),
      bg: "bg-linear-to-tr from-emerald-500 to-teal-500",
    },
    {
      id: 5,
      title: t("Hỗ trợ Dark Mode", "Dark Mode Support"),
      desc: t(
        "Giao diện tuyệt đẹp trên cả chế độ tối và sáng.",
        "Looks stunning on dark and light mode.",
      ),
      bg: "bg-linear-to-tr from-amber-500 to-orange-500",
    },
  ];

  return (
    <div className="space-y-10">
      <ShowcaseExample
        title={t("Ảnh bìa Hero", "Hero Banner (Overlay Navigation)")}
        description={t(
          "Mũi tên kính mờ nằm đè trên Banner, chỉ hiện khi hover. Dấu chấm nằm sát mép dưới.",
          "Frosted glass arrows overlaid on the Banner, appearing only on hover. Dots are placed near the bottom edge.",
        )}
        code={`<Carousel
    opts={{ loop: true }}
    className="group relative w-full overflow-hidden rounded-2xl shadow-xl"
  >
    <CarouselContent className="-ml-4">
      <CarouselItem className="pl-4">...</CarouselItem>
    </CarouselContent>
    <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-between p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      <CarouselPrevious className="pointer-events-auto bg-background/50 backdrop-blur-md" />
      <CarouselNext className="pointer-events-auto bg-background/50 backdrop-blur-md" />
    </div>
    <div className="absolute bottom-4 left-0 right-0 z-10">
      <CarouselDots className="[&>[data-slot=carousel-dot][data-active]]:bg-white [&>[data-slot=carousel-dot]]:bg-white/40" />
    </div>
  </Carousel>`}
        preview={
          <>
            <div className="mx-auto w-full max-w-4xl">
              <Carousel
                opts={{ loop: true }}
                className="group relative w-full overflow-hidden rounded-2xl shadow-xl border border-border/50"
              >
                <CarouselContent className="-ml-4">
                  {SLIDES.map((slide) => (
                    <CarouselItem key={slide.id} className="pl-4">
                      <div
                        className={cn(
                          "flex aspect-[21/9] flex-col items-center justify-center p-6 text-center text-white",
                          slide.bg,
                        )}
                      >
                        <h3 className="mb-2 text-3xl font-bold tracking-tight sm:text-5xl">
                          {slide.title}
                        </h3>
                        <p className="max-w-md text-sm text-white/80 sm:text-lg">
                          {slide.desc}
                        </p>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-between p-4 transition-opacity duration-300 sm:p-6 opacity-0 group-hover:opacity-100">
                  <CarouselPrevious className="pointer-events-auto backdrop-blur-md bg-background/30 hover:bg-background/50 border-white/20 text-white" />
                  <CarouselNext className="pointer-events-auto backdrop-blur-md bg-background/30 hover:bg-background/50 border-white/20 text-white" />
                </div>

                <div className="absolute bottom-4 left-0 right-0 z-10">
                  <CarouselDots className="[&>[data-slot=carousel-dot][data-active]]:bg-white [&>[data-slot=carousel-dot]]:bg-white/40 hover:[&>[data-slot=carousel-dot]]:bg-white/60" />
                </div>
              </Carousel>
            </div>
          </>
        }
      />

      <ShowcaseExample
        title={t("Nhiều phần tử trên 1 slide", "Multiple items per slide")}
        description={t(
          "Hiển thị nhiều Card (vd: basis-1/2, lg:basis-1/3) trên cùng một Slide của Băng chuyền.",
          "Display multiple Cards (e.g., basis-1/2, lg:basis-1/3) on the same Carousel slide.",
        )}
        code={`<div className="mx-auto w-full max-w-5xl px-12">
    <Carousel
      opts={{ align: "start" }}
      className="w-full relative"
    >
      <CarouselContent className="-ml-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="pl-4 md:basis-1/2 lg:basis-1/3"
          >
            <div className="p-1">
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="aspect-4/3 bg-muted flex items-center justify-center relative group">
                  <span className="text-4xl font-black text-muted-foreground/30 transition-transform duration-500 group-hover:scale-110">
                    0{index + 1}
                  </span>
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-4">
                    <span className="text-white font-medium">
                      View Item {index + 1}
                    </span>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="text-sm font-medium text-muted-foreground mb-1">
                    Category
                  </div>
                  <h4 className="font-semibold text-lg leading-none">
                    Featured Item {index + 1}
                  </h4>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 border-border shadow-sm hover:bg-accent" />
      <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 border-border shadow-sm hover:bg-accent" />
    </Carousel>
  </div>`}
        preview={
          <>
            <div className="mx-auto w-full max-w-5xl px-12">
              <Carousel opts={{ align: "start" }} className="w-full relative">
                <CarouselContent className="-ml-4">
                  {Array.from({ length: 10 }).map((_, index) => (
                    <CarouselItem
                      key={index}
                      className="pl-4 md:basis-1/2 lg:basis-1/3"
                    >
                      <div className="p-1">
                        <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                          <div className="aspect-4/3 bg-muted flex items-center justify-center relative group">
                            <span className="text-4xl font-black text-muted-foreground/30 transition-transform duration-500 group-hover:scale-110">
                              0{index + 1}
                            </span>
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-4">
                              <span className="text-white font-medium">
                                "View Item" {index + 1}
                              </span>
                            </div>
                          </div>
                          <CardContent className="p-4">
                            <div className="text-sm font-medium text-muted-foreground mb-1">
                              "Category"
                            </div>
                            <h4 className="font-semibold text-lg leading-none">
                              "Featured Item" {index + 1}
                            </h4>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 border-border shadow-sm hover:bg-accent" />
                <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 border-border shadow-sm hover:bg-accent" />
              </Carousel>
            </div>
          </>
        }
      />
    </div>
  );
}

export default function CarouselShowcase() {
  const t = useI18n();

  return (
    <Showcase
      title="Carousel"
      description={t(
        "Băng chuyền vuốt chuyển động cao cấp được xây dựng bằng Embla.",
        "Premium swipe-animated carousel built with Embla.",
      )}
      guideline={
        <ShowcaseDocs>
          <DocsP>
            {t(
              "Dùng để duyệt qua một tập hợp các nội dung (như hình ảnh, thẻ bài, hoặc biểu ngữ) theo dạng trượt ngang hoặc dọc. Thích hợp cho không gian hiển thị giới hạn cần hiển thị nhiều mục.",
              "Use to browse through a collection of content (like images, cards, or banners) by swiping horizontally or vertically. Suitable for limited display spaces that need to show multiple items.",
            )}
          </DocsP>
        </ShowcaseDocs>
      }
      micro={{ content: <CarouselMicroShowcase /> }}
      macro={{ content: <CarouselMacroShowcase /> }}
    />
  );
}
