import { useState } from "react";
import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  MonoSelect,
} from "../../index";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "../components/showcase";

export default function CarouselShowcase() {
  const [globalSize, setGlobalSize] = useState<"sm" | "md" | "lg">("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Carousel"
        description="A carousel with motion and swipe built using Embla."
      >
        <MonoSelect
          value={globalSize}
          onValueChange={(v) => setGlobalSize(v as any)}
          options={[
            { value: "sm", label: "Size: sm" },
            { value: "md", label: "Size: md" },
            { value: "lg", label: "Size: lg" },
          ]}
        />
      </SectionHeader>

      {/* ── Default ── */}
      <ExampleSection
        label="Default"
        description="Swipeable carousel with navigation arrows."
      >
        <Carousel className="w-full max-w-sm mx-auto">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious size={globalSize} />
          <CarouselNext size={globalSize} />
        </Carousel>
      </ExampleSection>

      {/* ── Multiple Items ── */}
      <ExampleSection
        label="Multiple Items"
        description="Show 3 items at once using basis-1/3."
      >
        <Carousel className="w-full max-w-lg mx-auto">
          <CarouselContent className="-ml-2">
            {Array.from({ length: 8 }).map((_, index) => (
              <CarouselItem key={index} className="pl-2 basis-1/3">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-4">
                    <span className="text-2xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious size={globalSize} />
          <CarouselNext size={globalSize} />
        </Carousel>
      </ExampleSection>

      {/* ── Two Per Row ── */}
      <ExampleSection
        label="Two Per Row"
        description="Show 2 items at once using basis-1/2."
      >
        <Carousel className="w-full max-w-md mx-auto">
          <CarouselContent className="-ml-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <CarouselItem key={index} className="pl-4 basis-1/2">
                <Card>
                  <CardContent className="flex aspect-video items-center justify-center p-6">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious size={globalSize} />
          <CarouselNext size={globalSize} />
        </Carousel>
      </ExampleSection>
    </div>
  );
}
