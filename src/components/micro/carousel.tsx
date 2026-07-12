/**
 * ✅ AUDITED & REFACTORED
 * - Design System Compliant (22 Commandments)
 * - WCAG AAA/AA
 * - Form Control Parity
 * - CSS Delegated Logic
 */
"use client";

import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import * as React from "react";

import { cn } from "../../lib/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & CarouselProps
>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins,
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) return;
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, []);

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);

    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (orientation === "horizontal") {
          switch (event.key) {
            case "ArrowLeft":
              event.preventDefault();
              scrollPrev();
              break;
            case "ArrowRight":
              event.preventDefault();
              scrollNext();
              break;
          }
        } else {
          switch (event.key) {
            case "ArrowUp":
              event.preventDefault();
              scrollPrev();
              break;
            case "ArrowDown":
              event.preventDefault();
              scrollNext();
              break;
          }
        }
      },
      [scrollPrev, scrollNext, orientation],
    );

    React.useEffect(() => {
      if (!api || !setApi) return;
      setApi(api);
    }, [api, setApi]);

    React.useEffect(() => {
      if (!api) return;
      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);

      return () => {
        api?.off("reInit", onSelect);
        api?.off("select", onSelect);
      };
    }, [api, onSelect]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api,
          opts,
          orientation,
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("group/carousel relative", className)}
          role="region"
          aria-roledescription="carousel"
          data-slot="carousel"
          data-orientation={orientation}
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  },
);
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  const { carouselRef } = useCarousel();

  // Combine forwarded ref and internal embla ref
  const setRefs = React.useCallback(
    (node: HTMLDivElement) => {
      carouselRef(node);
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    },
    [carouselRef, ref],
  );

  return (
    <div ref={setRefs} className="overflow-hidden" data-slot="carousel-content">
      <div
        className={cn(
          "flex group-data-[orientation=vertical]/carousel:flex-col",
          className,
        )}
        {...props}
      />
    </div>
  );
});
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn("min-w-0 shrink-0 grow-0 basis-full", className)}
      {...props}
    />
  );
});
CarouselItem.displayName = "CarouselItem";

const carouselButtonClasses =
  "inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-background touch-manipulation transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button">
>(({ className, ...props }, ref) => {
  const { scrollPrev, canScrollPrev } = useCarousel();

  return (
    <button
      ref={ref}
      type="button"
      data-slot="carousel-previous"
      className={cn(carouselButtonClasses, className)}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ChevronLeftIcon className="size-4" />
      <span className="sr-only">Previous slide</span>
    </button>
  );
});
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button">
>(({ className, ...props }, ref) => {
  const { scrollNext, canScrollNext } = useCarousel();

  return (
    <button
      ref={ref}
      type="button"
      data-slot="carousel-next"
      className={cn(carouselButtonClasses, className)}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ChevronRightIcon className="size-4" />
      <span className="sr-only">Next slide</span>
    </button>
  );
});
CarouselNext.displayName = "CarouselNext";

const CarouselDots = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  const { api } = useCarousel();
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  const onInit = React.useCallback((api: CarouselApi) => {
    if (!api) return;
    setScrollSnaps(api.scrollSnapList());
  }, []);

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) return;
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  React.useEffect(() => {
    if (!api) return;

    onInit(api);
    onSelect(api);

    api.on("reInit", onInit);
    api.on("reInit", onSelect);
    api.on("select", onSelect);

    return () => {
      api.off("reInit", onInit);
      api.off("reInit", onSelect);
      api.off("select", onSelect);
    };
  }, [api, onInit, onSelect]);

  if (scrollSnaps.length === 0) return null;

  return (
    <div
      ref={ref}
      data-slot="carousel-dots"
      className={cn("flex items-center justify-center gap-2", className)}
      {...props}
    >
      {scrollSnaps.map((_, index) => (
        <button
          key={index}
          type="button"
          data-slot="carousel-dot"
          data-active={index === selectedIndex ? "" : undefined}
          aria-label={`Go to slide ${index + 1}`}
          aria-current={index === selectedIndex ? "true" : "false"}
          className={cn(
            "size-2 rounded-full transition-all duration-300",
            "bg-primary/20 hover:bg-primary/40 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            "data-active:w-6 data-active:bg-primary",
          )}
          onClick={() => api?.scrollTo(index)}
        />
      ))}
    </div>
  );
});
CarouselDots.displayName = "CarouselDots";

export {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  useCarousel,
  type CarouselApi,
};
