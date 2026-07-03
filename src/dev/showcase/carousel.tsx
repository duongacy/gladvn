import {
  ExampleSection,
  SectionHeader
} from "@/dev/components/showcase";
import { type Size } from "@/lib/types";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Card, CardContent } from "@/components/micro/card";
import { Carousel, CarouselContent, CarouselDots, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/micro/carousel";
import { SelectPreset } from "@/components/macro/select-preset";

const SLIDES = [
  { id: 1, title: "Modern Aesthetics", desc: "Crafting beautiful interfaces with tailwind.", bg: "bg-gradient-to-tr from-violet-500 to-purple-500" },
  { id: 2, title: "Smooth Interactions", desc: "Fluid animations and micro-interactions.", bg: "bg-gradient-to-tr from-pink-500 to-rose-500" },
  { id: 3, title: "Highly Customizable", desc: "Easily adapt to your brand.", bg: "bg-gradient-to-tr from-blue-500 to-cyan-500" },
  { id: 4, title: "Accessible by Default", desc: "Keyboard navigation out of the box.", bg: "bg-gradient-to-tr from-emerald-500 to-teal-500" },
  { id: 5, title: "Dark Mode Ready", desc: "Looks stunning on dark and light mode.", bg: "bg-gradient-to-tr from-amber-500 to-orange-500" },
];

export default function CarouselShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Carousel"
        description="A premium carousel with motion, swipe, and pagination built using Embla."
      >
        <SelectPreset
          value={globalSize}
          onValueChange={(v) => setGlobalSize(v as Size)}
          options={[
            { value: "sm", label: "Size: sm" },
            { value: "md", label: "Size: md" },
            { value: "lg", label: "Size: lg" },
          ]}
          className="w-[120px] h-8 text-xs bg-background"
        />
      </SectionHeader>

      {/* ── Hero Banner ── */}
      <ExampleSection
        label="Hero Banner"
        description="A full-width banner with overlay navigation, frosted glass arrows, and interactive pagination."
      >
        <div className="mx-auto w-full max-w-4xl">
          <Carousel
            opts={{ loop: true }}
            className="group relative w-full overflow-hidden rounded-2xl shadow-xl border border-border/50"
          >
            <CarouselContent>
              {SLIDES.map((slide) => (
                <CarouselItem key={slide.id}>
                  <div className={cn("flex aspect-[21/9] flex-col items-center justify-center p-6 text-center text-white", slide.bg)}>
                    <h3 className="mb-2 text-3xl font-bold tracking-tight sm:text-5xl">{slide.title}</h3>
                    <p className="max-w-md text-sm text-white/80 sm:text-lg">{slide.desc}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Overlay Navigation - only visible on group hover for desktop, always visible on mobile */}
            <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-between p-4 transition-opacity duration-300 sm:p-6">
              <CarouselPrevious className="pointer-events-auto static translate-y-0 opacity-80 backdrop-blur-md hover:opacity-100 bg-background/50 border-white/20 text-foreground" size={globalSize} />
              <CarouselNext className="pointer-events-auto static translate-y-0 opacity-80 backdrop-blur-md hover:opacity-100 bg-background/50 border-white/20 text-foreground" size={globalSize} />
            </div>

            {/* Pagination Dots overlay at bottom */}
            <div className="absolute bottom-4 left-0 right-0 z-10">
              <CarouselDots className="[&>[data-slot=carousel-dot][data-active=true]]:bg-white [&>[data-slot=carousel-dot]]:bg-white/40 hover:[&>[data-slot=carousel-dot]]:bg-white/60" />
            </div>
          </Carousel>
        </div>
      </ExampleSection>

      {/* ── Product Gallery ── */}
      <ExampleSection
        label="Product Gallery"
        description="A multi-item carousel for displaying products or cards with micro-animations."
      >
        <div className="mx-auto w-full max-w-5xl px-12">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {Array.from({ length: 10 }).map((_, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <div className="aspect-[4/3] bg-muted flex items-center justify-center relative group">
                        <span className="text-4xl font-black text-muted-foreground/30 transition-transform duration-500 group-hover:scale-110">
                          0{index + 1}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-4">
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
            <CarouselPrevious size={globalSize} className="border-border shadow-sm hover:bg-accent" />
            <CarouselNext size={globalSize} className="border-border shadow-sm hover:bg-accent" />
          </Carousel>
        </div>
      </ExampleSection>

      {/* ── Compact Cards ── */}
      <ExampleSection
        label="Compact layout"
        description="A compact carousel layout with dots, commonly used for onboarding or wizards."
      >
        <div className="mx-auto w-full max-w-sm">
          <Carousel className="w-full">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
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
    </div>
  );
}
