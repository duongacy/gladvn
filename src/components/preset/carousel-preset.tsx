import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export interface CarouselPresetProps extends React.ComponentProps<typeof Carousel> {
  items: React.ReactNode[];
  showArrows?: boolean;
  showDots?: boolean;
  itemClassName?: string;
}

export function CarouselPreset({
  items,
  showArrows = true,
  showDots = true,
  itemClassName,
  ...props
}: CarouselPresetProps) {
  return (
    <Carousel {...props}>
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
}
