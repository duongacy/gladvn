import { useState } from "react";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";
import { CarouselPreset } from "@/components/macro/carousel-preset";

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
            { id: "c1", content: <div className="p-1 border rounded-xl"><div className="flex aspect-square items-center justify-center p-6 bg-slate-100 dark:bg-slate-800 rounded-lg"><span className="text-4xl font-semibold">1</span></div></div> },
            { id: "c2", content: <div className="p-1 border rounded-xl"><div className="flex aspect-square items-center justify-center p-6 bg-slate-100 dark:bg-slate-800 rounded-lg"><span className="text-4xl font-semibold">2</span></div></div> },
            { id: "c3", content: <div className="p-1 border rounded-xl"><div className="flex aspect-square items-center justify-center p-6 bg-slate-100 dark:bg-slate-800 rounded-lg"><span className="text-4xl font-semibold">3</span></div></div> },
          ]}
        />
      </div>
      <p className="text-sm text-muted-foreground text-center">
        Current Index in State: <span className="font-mono font-bold text-foreground">{index}</span>
      </p>
    </div>
  );
}

export default function MacroCarouselShowcase() {
  return (
    <div className="space-y-10">
      <SectionHeader
        title="Carousel (Macro)"
        description="Một thành phần cài sẵn bao gồm Carousel với các nội dung slide cơ bản."
      />

      <ExampleGrid columns={1}>
        <ExampleSection label="Standard" description="Băng chuyền cơ bản có cầu trượt.">
          <div className="w-full max-w-sm px-12">
            <CarouselPreset
              items={[
                { id: "std-1", content: <div className="p-1 border rounded-xl"><div className="flex aspect-square items-center justify-center p-6 bg-muted/20 rounded-lg"><span className="text-4xl font-semibold">1</span></div></div> },
                { id: "std-2", content: <div className="p-1 border rounded-xl"><div className="flex aspect-square items-center justify-center p-6 bg-muted/20 rounded-lg"><span className="text-4xl font-semibold">2</span></div></div> },
                { id: "std-3", content: <div className="p-1 border rounded-xl"><div className="flex aspect-square items-center justify-center p-6 bg-muted/20 rounded-lg"><span className="text-4xl font-semibold">3</span></div></div> },
              ]}
            />
          </div>
        </ExampleSection>

        <ExampleSection label="Image Gallery" description="Sử dụng hình ảnh thực bên trong các slide băng chuyền.">
          <div className="w-full max-w-lg px-12">
            <CarouselPreset
              items={[
                { id: "img-1", content: <img src="https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=600&h=400&auto=format&fit=crop" alt="Slide 1" className="rounded-xl object-cover" /> },
                { id: "img-2", content: <img src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=600&h=400&auto=format&fit=crop" alt="Slide 2" className="rounded-xl object-cover" /> },
                { id: "img-3", content: <img src="https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=600&h=400&auto=format&fit=crop" alt="Slide 3" className="rounded-xl object-cover" /> },
              ]}
            />
          </div>
        </ExampleSection>
      </ExampleGrid>

      <ExampleGrid columns={2}>
        <ExampleSection label="Loop Enabled" description="Vòng lặp vô hạn chỉ có dấu chấm (không có mũi tên).">
          <div className="w-full max-w-sm">
            <CarouselPreset
              opts={{ loop: true }}
              showArrows={false}
              items={[
                { id: "loop-1", content: <div className="p-1 border rounded-xl"><div className="flex aspect-square items-center justify-center p-6 bg-gradient-to-tr from-violet-500 to-purple-500 rounded-lg text-white"><span className="text-4xl font-semibold">1</span></div></div> },
                { id: "loop-2", content: <div className="p-1 border rounded-xl"><div className="flex aspect-square items-center justify-center p-6 bg-gradient-to-tr from-pink-500 to-rose-500 rounded-lg text-white"><span className="text-4xl font-semibold">2</span></div></div> },
                { id: "loop-3", content: <div className="p-1 border rounded-xl"><div className="flex aspect-square items-center justify-center p-6 bg-gradient-to-tr from-blue-500 to-cyan-500 rounded-lg text-white"><span className="text-4xl font-semibold">3</span></div></div> },
              ]}
            />
          </div>
        </ExampleSection>

        <ExampleSection label="Arrows Only" description="Mũi tên điều hướng không có dấu chấm.">
          <div className="w-full max-w-sm px-12">
            <CarouselPreset
              showDots={false}
              items={[
                { id: "arr-1", content: <div className="p-1 border rounded-xl"><div className="flex aspect-square items-center justify-center p-6 bg-muted/20 rounded-lg"><span className="text-4xl font-semibold">A</span></div></div> },
                { id: "arr-2", content: <div className="p-1 border rounded-xl"><div className="flex aspect-square items-center justify-center p-6 bg-muted/20 rounded-lg"><span className="text-4xl font-semibold">B</span></div></div> },
                { id: "arr-3", content: <div className="p-1 border rounded-xl"><div className="flex aspect-square items-center justify-center p-6 bg-muted/20 rounded-lg"><span className="text-4xl font-semibold">C</span></div></div> },
              ]}
            />
          </div>
        </ExampleSection>
      </ExampleGrid>

      <ExampleGrid columns={1}>
        <ExampleSection 
          label="Controlled Mode" 
          description="Điều khiển slide đang hoạt động bằng trạng thái React (index và onIndexChange)."
          codeString={`const [index, setIndex] = useState(0);

return (
  <CarouselPreset
    index={index}
    onIndexChange={setIndex}
    showDots={false}
    items={[
      { id: "c1", content: <div className="p-1 border rounded-xl"><div className="flex aspect-square items-center justify-center p-6 bg-slate-100 dark:bg-slate-800 rounded-lg"><span className="text-4xl font-semibold">1</span></div></div> },
      { id: "c2", content: <div className="p-1 border rounded-xl"><div className="flex aspect-square items-center justify-center p-6 bg-slate-100 dark:bg-slate-800 rounded-lg"><span className="text-4xl font-semibold">2</span></div></div> },
      { id: "c3", content: <div className="p-1 border rounded-xl"><div className="flex aspect-square items-center justify-center p-6 bg-slate-100 dark:bg-slate-800 rounded-lg"><span className="text-4xl font-semibold">3</span></div></div> },
    ]}
  />
);`}
        >
          <ControlledCarouselDemo />
        </ExampleSection>
      </ExampleGrid>

      <ExampleGrid columns={1}>
        <ExampleSection label="Vertical Orientation" description="Băng chuyền macro cuộn theo chiều dọc.">
          <div className="w-full max-w-sm px-12 py-12 flex justify-center">
            <CarouselPreset
              className="w-full"
              orientation="vertical"
              contentClassName="h-[300px]"
              itemClassName="basis-[250px]"
              items={[
                { id: "v1", content: <div className="h-full w-full border rounded-xl flex items-center justify-center bg-muted/20 text-4xl font-semibold">A</div> },
                { id: "v2", content: <div className="h-full w-full border rounded-xl flex items-center justify-center bg-muted/20 text-4xl font-semibold">B</div> },
                { id: "v3", content: <div className="h-full w-full border rounded-xl flex items-center justify-center bg-muted/20 text-4xl font-semibold">C</div> },
                { id: "v4", content: <div className="h-full w-full border rounded-xl flex items-center justify-center bg-muted/20 text-4xl font-semibold">D</div> },
                { id: "v5", content: <div className="h-full w-full border rounded-xl flex items-center justify-center bg-muted/20 text-4xl font-semibold">E</div> },
              ]}
            />
          </div>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
