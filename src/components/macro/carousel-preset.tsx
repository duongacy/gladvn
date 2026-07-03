import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
} from "@/components/micro/carousel";
import { cn } from "@/lib/utils";

export type CarouselPresetProps = React.ComponentProps<typeof Carousel> & {
  items: React.ReactNode[];
  showArrows?: boolean;
  showDots?: boolean;
  itemClassName?: string;
};

const CarouselPreset = React.forwardRef<
  React.ElementRef<typeof Carousel>,
  CarouselPresetProps
>(({
  items,
  showArrows = true,
  showDots = true,
  itemClassName,
  ...carouselProps
}, ref) => {
  return (
    <Carousel ref={ref} {...carouselProps}>
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index} className={itemClassName}>
            {item}
          </CarouselItem>
        ))}
      </CarouselContent>
      {showArrows && (
        <>
          <CarouselPrevious />
          <CarouselNext />
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
