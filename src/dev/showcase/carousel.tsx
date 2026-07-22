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
import {
  DocsP,
  ExampleGrid,
  ExampleSection,
  Showcase,
  ShowcaseDocs,
} from "../../dev/components/showcase";
import { cn } from "../../lib/utils";

const SLIDES = [
  {
    id: 1,
    title: "Modern Aesthetics",
    desc: "Crafting beautiful interfaces with tailwind.",
    bg: "bg-gradient-to-tr from-violet-500 to-purple-500",
  },
  {
    id: 2,
    title: "Smooth Interactions",
    desc: "Fluid animations and micro-interactions.",
    bg: "bg-gradient-to-tr from-pink-500 to-rose-500",
  },
  {
    id: 3,
    title: "Highly Customizable",
    desc: "Easily adapt to your brand.",
    bg: "bg-gradient-to-tr from-blue-500 to-cyan-500",
  },
  {
    id: 4,
    title: "Accessible by Default",
    desc: "Keyboard navigation out of the box.",
    bg: "bg-gradient-to-tr from-emerald-500 to-teal-500",
  },
  {
    id: 5,
    title: "Dark Mode Ready",
    desc: "Looks stunning on dark and light mode.",
    bg: "bg-gradient-to-tr from-amber-500 to-orange-500",
  },
];

function ControlledCarouselDemo() {
  const [index, setIndex] = useState(0);

  return (
    <div className="w-full max-w-sm flex flex-col items-center gap-6">
      <div className="flex gap-2">
        {[0, 1, 2].map((i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            data-active={index === i ? "" : undefined}
            className="px-4 py-2 text-sm font-medium rounded-md transition-colors bg-muted text-muted-foreground hover:bg-muted/80 data-active:bg-primary data-active:text-primary-foreground data-active:shadow-sm data-active:hover:bg-primary/90"
          >
            Slide {i + 1}
          </button>
        ))}
      </div>

      <div className="w-full px-12">
        <CarouselPreset
          index={index}
          onIndexChange={setIndex}
          showDots={false}
          items={[
            {
              id: "c1",
              content: (
                <div className="p-1 border border-border rounded-xl">
                  <div className="flex aspect-square items-center justify-center p-6 bg-slate-100 dark:bg-slate-800 rounded-lg">
                    <span className="text-4xl font-semibold">1</span>
                  </div>
                </div>
              ),
            },
            {
              id: "c2",
              content: (
                <div className="p-1 border border-border rounded-xl">
                  <div className="flex aspect-square items-center justify-center p-6 bg-slate-100 dark:bg-slate-800 rounded-lg">
                    <span className="text-4xl font-semibold">2</span>
                  </div>
                </div>
              ),
            },
            {
              id: "c3",
              content: (
                <div className="p-1 border border-border rounded-xl">
                  <div className="flex aspect-square items-center justify-center p-6 bg-slate-100 dark:bg-slate-800 rounded-lg">
                    <span className="text-4xl font-semibold">3</span>
                  </div>
                </div>
              ),
            },
          ]}
        />
      </div>
      <p className="text-sm text-muted-foreground text-center">
        Current Index in State:{" "}
        <span className="font-mono font-bold text-foreground">{index}</span>
      </p>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 1: Macro Content
// ──────────────────────────────────────────────────────────
function CarouselMacroShowcase() {
  return (
    <div className="space-y-10 mt-6">
      <ExampleGrid>
        <ExampleSection
          label="Tiêu chuẩn (Standard)"
          description="Băng chuyền cơ bản nhất với cầu trượt."
          codeString={`<CarouselPreset
  items={[
    { id: "std-1", content: <div className="p-1 border border-border rounded-xl"><div className="flex aspect-square items-center justify-center p-6 bg-muted/20 rounded-lg"><span className="text-4xl font-semibold">1</span></div></div> },
    { id: "std-2", content: <div className="p-1 border border-border rounded-xl"><div className="flex aspect-square items-center justify-center p-6 bg-muted/20 rounded-lg"><span className="text-4xl font-semibold">2</span></div></div> },
    { id: "std-3", content: <div className="p-1 border border-border rounded-xl"><div className="flex aspect-square items-center justify-center p-6 bg-muted/20 rounded-lg"><span className="text-4xl font-semibold">3</span></div></div> },
  ]}
/>`}
        >
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
        </ExampleSection>

        <ExampleSection
          label="Thư viện ảnh (Image Gallery)"
          description="Sử dụng hình ảnh thực làm nội dung slide."
          codeString={`<CarouselPreset
  items={[
    { id: "img-1", content: <img src="https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=600&h=400&auto=format&fit=crop" alt="Slide 1" className="rounded-xl object-cover" /> },
    { id: "img-2", content: <img src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=600&h=400&auto=format&fit=crop" alt="Slide 2" className="rounded-xl object-cover" /> },
    { id: "img-3", content: <img src="https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=600&h=400&auto=format&fit=crop" alt="Slide 3" className="rounded-xl object-cover" /> },
  ]}
/>`}
        >
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
        </ExampleSection>
      </ExampleGrid>

      <ExampleGrid>
        <ExampleSection
          label="Vòng lặp vô hạn (Loop Enabled)"
          description="Chỉ hiển thị dấu chấm (ẩn mũi tên)."
          codeString={`<CarouselPreset
  opts={{ loop: true }}
  showArrows={false}
  items={[
    { id: "loop-1", content: <div className="p-1 border border-border rounded-xl"><div className="flex aspect-square items-center justify-center p-6 bg-gradient-to-tr from-violet-500 to-purple-500 rounded-lg text-white"><span className="text-4xl font-semibold">1</span></div></div> },
    { id: "loop-2", content: <div className="p-1 border border-border rounded-xl"><div className="flex aspect-square items-center justify-center p-6 bg-gradient-to-tr from-pink-500 to-rose-500 rounded-lg text-white"><span className="text-4xl font-semibold">2</span></div></div> },
    { id: "loop-3", content: <div className="p-1 border border-border rounded-xl"><div className="flex aspect-square items-center justify-center p-6 bg-gradient-to-tr from-blue-500 to-cyan-500 rounded-lg text-white"><span className="text-4xl font-semibold">3</span></div></div> },
  ]}
/>`}
        >
          <div className="w-full max-w-sm">
            <CarouselPreset
              opts={{ loop: true }}
              showArrows={false}
              items={[
                {
                  id: "loop-1",
                  content: (
                    <div className="p-1 border border-border rounded-xl">
                      <div className="flex aspect-square items-center justify-center p-6 bg-gradient-to-tr from-violet-500 to-purple-500 rounded-lg text-white">
                        <span className="text-4xl font-semibold">1</span>
                      </div>
                    </div>
                  ),
                },
                {
                  id: "loop-2",
                  content: (
                    <div className="p-1 border border-border rounded-xl">
                      <div className="flex aspect-square items-center justify-center p-6 bg-gradient-to-tr from-pink-500 to-rose-500 rounded-lg text-white">
                        <span className="text-4xl font-semibold">2</span>
                      </div>
                    </div>
                  ),
                },
                {
                  id: "loop-3",
                  content: (
                    <div className="p-1 border border-border rounded-xl">
                      <div className="flex aspect-square items-center justify-center p-6 bg-gradient-to-tr from-blue-500 to-cyan-500 rounded-lg text-white">
                        <span className="text-4xl font-semibold">3</span>
                      </div>
                    </div>
                  ),
                },
              ]}
            />
          </div>
        </ExampleSection>

        <ExampleSection
          label="Chỉ mũi tên (Arrows Only)"
          description="Mũi tên điều hướng không có dấu chấm."
          codeString={`<CarouselPreset
  showDots={false}
  items={[
    { id: "arr-1", content: <div className="p-1 border border-border rounded-xl"><div className="flex aspect-square items-center justify-center p-6 bg-muted/20 rounded-lg"><span className="text-4xl font-semibold">A</span></div></div> },
    { id: "arr-2", content: <div className="p-1 border border-border rounded-xl"><div className="flex aspect-square items-center justify-center p-6 bg-muted/20 rounded-lg"><span className="text-4xl font-semibold">B</span></div></div> },
    { id: "arr-3", content: <div className="p-1 border border-border rounded-xl"><div className="flex aspect-square items-center justify-center p-6 bg-muted/20 rounded-lg"><span className="text-4xl font-semibold">C</span></div></div> },
  ]}
/>`}
        >
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
        </ExampleSection>
      </ExampleGrid>

      <ExampleGrid>
        <ExampleSection
          label="Điều khiển từ bên ngoài (Controlled Mode)"
          description="Sử dụng biến state React để điều khiển slide."
          codeString={`const [index, setIndex] = useState(0);

return (
  <CarouselPreset
    index={index}
    onIndexChange={setIndex}
    items={[...]}
  />
);`}
        >
          <ControlledCarouselDemo />
        </ExampleSection>

        <ExampleSection
          label="Theo chiều dọc (Vertical Orientation)"
          description="Băng chuyền macro cuộn theo chiều dọc."
          codeString={`<CarouselPreset
  className="w-full"
  orientation="vertical"
  contentClassName="h-[300px]"
  itemClassName="basis-[250px]"
  items={[
    { id: "v1", content: <div className="h-full w-full border border-border rounded-xl flex items-center justify-center bg-muted/20 text-4xl font-semibold">A</div> },
    { id: "v2", content: <div className="h-full w-full border border-border rounded-xl flex items-center justify-center bg-muted/20 text-4xl font-semibold">B</div> },
    { id: "v3", content: <div className="h-full w-full border border-border rounded-xl flex items-center justify-center bg-muted/20 text-4xl font-semibold">C</div> },
  ]}
/>`}
        >
          <div className="w-full max-w-sm px-12 py-12 flex justify-center">
            <CarouselPreset
              className="w-full"
              orientation="vertical"
              contentClassName="h-[300px]"
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
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 2: Micro Content
// ──────────────────────────────────────────────────────────
function CarouselMicroShowcase() {
  return (
    <div className="space-y-10 mt-6">
      <ExampleSection
        label="Hero Banner (Overlay Navigation)"
        description="Mũi tên kính mờ nằm đè trên Banner, chỉ hiện khi hover. Dấu chấm nằm sát mép dưới."
        codeString={`<Carousel opts={{ loop: true }} className="group relative w-full overflow-hidden rounded-2xl shadow-xl">
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
      >
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
      </ExampleSection>

      <ExampleSection
        label="Nhiều phần tử trên 1 slide (Product Gallery)"
        description="Hiển thị nhiều Card (vd: basis-1/2, lg:basis-1/3) trên cùng một Slide của Băng chuyền."
        codeString={`<div className="mx-auto w-full max-w-5xl px-12">
  <Carousel opts={{ align: "start" }} className="w-full relative">
    <CarouselContent className="-ml-4">
      {Array.from({ length: 10 }).map((_, index) => (
        <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="aspect-4/3 bg-muted flex items-center justify-center relative group">
                <span className="text-4xl font-black text-muted-foreground/30 transition-transform duration-500 group-hover:scale-110">
                  0{index + 1}
                </span>
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-4">
                  <span className="text-white font-medium">View Item {index + 1}</span>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="text-sm font-medium text-muted-foreground mb-1">Category</div>
                <h4 className="font-semibold text-lg leading-none">Featured Item {index + 1}</h4>
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
`}
      >
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
        </div>
      </ExampleSection>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 3: Entry point
// ──────────────────────────────────────────────────────────
export default function CarouselShowcase() {
  return (
    <Showcase
      title="Carousel"
      description="Băng chuyền vuốt chuyển động cao cấp được xây dựng bằng Embla."
      generalConcept={
        <ShowcaseDocs>
          <DocsP>
            Dùng để duyệt qua một tập hợp các nội dung (như hình ảnh, thẻ bài,
            hoặc biểu ngữ) theo dạng trượt ngang hoặc dọc. Thích hợp cho không
            gian hiển thị giới hạn cần hiển thị nhiều mục.
          </DocsP>
        </ShowcaseDocs>
      }
      tabs={[
        { label: "Micro (Primitive)", content: <CarouselMicroShowcase /> },
        { label: "Macro (Preset)", content: <CarouselMacroShowcase /> },
      ]}
    />
  );
}
