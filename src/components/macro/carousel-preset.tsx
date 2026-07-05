import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
  type CarouselApi
} from "@/components/micro/carousel";
import { cn } from "@/lib/utils";

export type CarouselPresetProps = Omit<React.ComponentProps<typeof Carousel>, "setApi" | "onScroll"> & {
  items: { id: string | number; content: React.ReactNode }[];
  showArrows?: boolean;
  showDots?: boolean;
  itemClassName?: string;
  contentClassName?: string;
  
  // Controlled & Uncontrolled props
  index?: number;
  defaultIndex?: number;
  onIndexChange?: (index: number) => void;
};

const CarouselPreset = React.forwardRef<
  React.ComponentRef<typeof Carousel>,
  CarouselPresetProps
>(({
  items,
  showArrows = true,
  showDots = true,
  itemClassName,
  contentClassName,
  index: controlledIndex,
  defaultIndex = 0,
  onIndexChange,
  ...carouselProps
}, ref) => {
  const [api, setApi] = React.useState<CarouselApi>();

  React.useEffect(() => {
    if (!api) return;
    const handleSelect = () => {
      onIndexChange?.(api.selectedScrollSnap());
    };
    api.on("select", handleSelect);
    return () => {
      api.off("select", handleSelect);
    };
  }, [api, onIndexChange]);

  React.useEffect(() => {
    if (!api || controlledIndex === undefined) return;
    if (api.selectedScrollSnap() !== controlledIndex) {
      api.scrollTo(controlledIndex);
    }
  }, [api, controlledIndex]);

  const orientation = carouselProps.orientation || "horizontal";
  const opts = { ...carouselProps.opts, startIndex: defaultIndex };

  if (orientation === "vertical") {
    return (
      <Carousel ref={ref} {...carouselProps} opts={opts} setApi={setApi} orientation="vertical">
        <CarouselContent className={cn("-mt-4", contentClassName)}>
          {items.map((item) => (
            <CarouselItem key={item.id} className={cn("pt-4", itemClassName)}>
              {item.content}
            </CarouselItem>
          ))}
        </CarouselContent>
        {showArrows && (
          <>
            <CarouselPrevious className="absolute z-10 -top-12 left-1/2 -translate-x-1/2 rotate-90" />
            <CarouselNext className="absolute z-10 -bottom-12 left-1/2 -translate-x-1/2 rotate-90" />
          </>
        )}
        {showDots && (
          <div className="mt-2 flex justify-center">
            <CarouselDots />
          </div>
        )}
      </Carousel>
    );
  }

  return (
    <Carousel ref={ref} {...carouselProps} opts={opts} setApi={setApi} orientation="horizontal">
      <CarouselContent className={cn("-ml-4", contentClassName)}>
        {items.map((item) => (
          <CarouselItem key={item.id} className={cn("pl-4", itemClassName)}>
            {item.content}
          </CarouselItem>
        ))}
      </CarouselContent>
      {showArrows && (
        <>
          <CarouselPrevious className="absolute z-10 inset-y-0 -left-12 my-auto" />
          <CarouselNext className="absolute z-10 inset-y-0 -right-12 my-auto" />
        </>
      )}
      {showDots && (
        <div className="mt-4 flex justify-center">
          <CarouselDots />
        </div>
      )}
    </Carousel>
  );
});
CarouselPreset.displayName = "CarouselPreset";

export { CarouselPreset };
