import {
  ExampleSection,
  SectionHeader
} from "@/dev/components/showcase";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/micro/card";
import { Carousel, CarouselContent, CarouselDots, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/micro/carousel";

const SLIDES = [
  { id: 1, title: "Modern Aesthetics", desc: "Crafting beautiful interfaces with tailwind.", bg: "bg-gradient-to-tr from-violet-500 to-purple-500" },
  { id: 2, title: "Smooth Interactions", desc: "Fluid animations and micro-interactions.", bg: "bg-gradient-to-tr from-pink-500 to-rose-500" },
  { id: 3, title: "Highly Customizable", desc: "Easily adapt to your brand.", bg: "bg-gradient-to-tr from-blue-500 to-cyan-500" },
  { id: 4, title: "Accessible by Default", desc: "Keyboard navigation out of the box.", bg: "bg-gradient-to-tr from-emerald-500 to-teal-500" },
  { id: 5, title: "Dark Mode Ready", desc: "Looks stunning on dark and light mode.", bg: "bg-gradient-to-tr from-amber-500 to-orange-500" },
];

export default function CarouselShowcase() {
  return (
    <div className="space-y-10">
      <SectionHeader
        title="Carousel"
        description="Băng chuyền cao cấp có chuyển động, vuốt và phân trang được xây dựng bằng Embla."
      />

      {/* ── Hero Banner ── */}
      <ExampleSection
        label="Hero Banner"
        description="Biểu ngữ có chiều rộng đầy đủ với điều hướng lớp phủ, mũi tên kính mờ và phân trang tương tác."
      >
        <div className="mx-auto w-full max-w-4xl">
          <Carousel
            opts={{ loop: true }}
            className="group relative w-full overflow-hidden rounded-2xl shadow-xl border border-border/50"
          >
            <CarouselContent className="-ml-4">
              {SLIDES.map((slide) => (
                <CarouselItem key={slide.id} className="pl-4">
                  <div className={cn("flex aspect-[21/9] flex-col items-center justify-center p-6 text-center text-white", slide.bg)}>
                    <h3 className="mb-2 text-3xl font-bold tracking-tight sm:text-5xl">{slide.title}</h3>
                    <p className="max-w-md text-sm text-white/80 sm:text-lg">{slide.desc}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Overlay Navigation - only visible on group hover for desktop, always visible on mobile */}
            {/* Using Pure Composition: the wrapper defines the flex layout, the arrows define their own appearance */}
            <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-between p-4 transition-opacity duration-300 sm:p-6">
              <CarouselPrevious className="pointer-events-auto opacity-80 backdrop-blur-md hover:opacity-100 bg-background/50 border-white/20 text-foreground" />
              <CarouselNext className="pointer-events-auto opacity-80 backdrop-blur-md hover:opacity-100 bg-background/50 border-white/20 text-foreground" />
            </div>

            {/* Pagination Dots overlay at bottom */}
            <div className="absolute bottom-4 left-0 right-0 z-10">
              <CarouselDots className="[&>[data-slot=carousel-dot][data-active]]:bg-white [&>[data-slot=carousel-dot]]:bg-white/40 hover:[&>[data-slot=carousel-dot]]:bg-white/60" />
            </div>
          </Carousel>
        </div>
      </ExampleSection>

      {/* ── Product Gallery ── */}
      <ExampleSection
        label="Product Gallery"
        description="Băng chuyền gồm nhiều mục để hiển thị sản phẩm hoặc thẻ có hoạt ảnh vi mô."
      >
        <div className="mx-auto w-full max-w-5xl px-12">
          {/* Note the explicit positioning injected via Pure Composition for the arrows here */}
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full relative"
          >
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

            {/* Pure Composition: Injecting absolute layout manually for this specific gallery layout */}
            <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 border-border shadow-sm hover:bg-accent" />
            <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 border-border shadow-sm hover:bg-accent" />
          </Carousel>
        </div>
      </ExampleSection>

      {/* ── Compact Cards ── */}
      <ExampleSection
        label="Compact layout"
        description="Bố cục băng chuyền nhỏ gọn có các dấu chấm, thường được sử dụng để làm quen hoặc hướng dẫn."
      >
        <div className="mx-auto w-full max-w-sm">
          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="pl-4">
                  <div className="p-2">
                    <Card className="border-2 border-primary/10 bg-primary/5">
                      <CardContent className="flex aspect-square flex-col items-center justify-center p-6 text-center">
                        <div className="rounded-full bg-primary/10 p-4 mb-4">
                          <span className="text-4xl font-bold text-primary">
                            {index + 1}
                          </span>
                        </div>
                        <h3 className="font-semibold">Step {index + 1}</h3>
                        <p className="text-sm text-muted-foreground mt-2">
                          Swipe to see the next step in the process.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-4">
              <CarouselDots />
            </div>
          </Carousel>
        </div>
      </ExampleSection>

      {/* ── Vertical Carousel ── */}
      <ExampleSection
        label="Vertical Orientation"
        description="Một băng chuyền cuộn theo chiều dọc. Lưu ý việc sử dụng pt-4 thay vì pl-4 cho các khoảng trống."
      >
        <div className="mx-auto w-full max-w-xs py-12 flex justify-center">
          <Carousel orientation="vertical" className="w-full">
            <CarouselContent className="h-[400px] -mt-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="pt-4 basis-1/2">
                  <div className="p-1 h-full">
                    <Card className="h-full flex items-center justify-center bg-muted/40 border-2">
                      <span className="text-4xl font-bold text-muted-foreground/50">
                        {index + 1}
                      </span>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Custom positioning for vertical arrows using pure composition */}
            <CarouselPrevious className="absolute -top-12 left-1/2 -translate-x-1/2 rotate-90" />
            <CarouselNext className="absolute -bottom-12 left-1/2 -translate-x-1/2 rotate-90" />
          </Carousel>
        </div>
      </ExampleSection>
    </div>
  );
}
