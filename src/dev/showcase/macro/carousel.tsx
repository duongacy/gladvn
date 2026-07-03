import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";
import { CarouselPreset } from "@/components/macro/carousel-preset";

export default function MacroCarouselShowcase() {
  return (
    <div className="space-y-10">
      <SectionHeader
        title="Carousel (Macro)"
        description="A preset component that encapsulates Carousel with basic slide contents."
      />

      <ExampleGrid columns={1}>
        <ExampleSection label="Standard" description="Basic carousel with slides.">
          <div className="w-full max-w-sm px-12">
            <CarouselPreset
              items={[
                <div className="p-1 border rounded-xl" key={1}><div className="flex aspect-square items-center justify-center p-6 bg-muted/20 rounded-lg"><span className="text-4xl font-semibold">1</span></div></div>,
                <div className="p-1 border rounded-xl" key={2}><div className="flex aspect-square items-center justify-center p-6 bg-muted/20 rounded-lg"><span className="text-4xl font-semibold">2</span></div></div>,
                <div className="p-1 border rounded-xl" key={3}><div className="flex aspect-square items-center justify-center p-6 bg-muted/20 rounded-lg"><span className="text-4xl font-semibold">3</span></div></div>,
              ]}
            />
          </div>
        </ExampleSection>

        <ExampleSection label="Image Gallery" description="Using real images inside the carousel slides.">
          <div className="w-full max-w-lg px-12">
            <CarouselPreset
              items={[
                <img key={1} src="https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=600&h=400&auto=format&fit=crop" alt="Slide 1" className="rounded-xl object-cover" />,
                <img key={2} src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=600&h=400&auto=format&fit=crop" alt="Slide 2" className="rounded-xl object-cover" />,
                <img key={3} src="https://images.unsplash.com/photo-1682687982501-1e58f813f228?q=80&w=600&h=400&auto=format&fit=crop" alt="Slide 3" className="rounded-xl object-cover" />,
              ]}
            />
          </div>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
