import { Maximize2Icon, MonitorIcon, SmartphoneIcon, TabletIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "../../components/micro/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/micro/tabs";
import { cn } from "../../lib/utils";
import { CodeHighlighter } from "./code-highlighter";
import { SectionHeader } from "./showcase";

export function BlockViewer({
  blockId,
  title,
  description,
  codeString,
  className,
}: {
  blockId: string;
  title: string;
  description?: string;
  codeString: string;
  className?: string;
}) {
  const [width, setWidth] = useState<"100%" | "768px" | "375px">("100%");
  
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <SectionHeader title={title} description={description} />
      
      <Tabs defaultValue="preview" className="w-full relative group">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/50">
          <TabsList className="bg-muted/50 p-1 rounded-lg h-auto">
            <TabsTrigger value="preview" className="data-[state=active]:bg-background data-[state=active]:shadow-sm border-transparent rounded-md h-7 px-3 text-xs">Preview</TabsTrigger>
            <TabsTrigger value="code" className="data-[state=active]:bg-background data-[state=active]:shadow-sm border-transparent rounded-md h-7 px-3 text-xs">Code</TabsTrigger>
          </TabsList>
          
          <div className="flex items-center gap-1.5 opacity-100 md:opacity-60 md:group-hover:opacity-100 transition-opacity">
            <Button
              variant="ghost"
              size="sm"
              iconOnly
              onClick={() => setWidth("100%")}
              className={cn("size-7", {
                "bg-muted text-foreground": width === "100%",
                "text-muted-foreground": width !== "100%",
              })}
              aria-label="Desktop view"
            >
              <MonitorIcon className="size-3.5" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              iconOnly
              onClick={() => setWidth("768px")}
              className={cn("size-7 hidden sm:flex", {
                "bg-muted text-foreground": width === "768px",
                "text-muted-foreground": width !== "768px",
              })}
              aria-label="Tablet view"
            >
              <TabletIcon className="size-3.5" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              iconOnly
              onClick={() => setWidth("375px")}
              className={cn("size-7", {
                "bg-muted text-foreground": width === "375px",
                "text-muted-foreground": width !== "375px",
              })}
              aria-label="Mobile view"
            >
              <SmartphoneIcon className="size-3.5" />
            </Button>
            
            <div className="w-px h-4 bg-border mx-1" />
            
            <Button
              variant="ghost"
              size="sm"
              iconOnly
              render={<a href={`/preview/${blockId}`} target="_blank" rel="noreferrer" />}
              nativeButton={false}
              className="size-7 text-muted-foreground hover:text-foreground"
              title="Open full screen"
            >
              <Maximize2Icon className="size-3.5" />
            </Button>
          </div>
        </div>

        <TabsContent value="preview" className="mt-4">
          <div className="flex justify-center w-full">
            <div 
              className="bg-background rounded-xl overflow-hidden border border-border shadow-sm transition-all duration-500 ease-in-out relative flex flex-col"
              style={{ width, height: "750px", maxWidth: "100%" }}
            >
              <div className="h-10 border-b border-border bg-muted/30 flex items-center px-4 gap-2 shrink-0">
                <div className="flex gap-1.5">
                  <div className="size-2.5 rounded-full bg-border/80" />
                  <div className="size-2.5 rounded-full bg-border/80" />
                  <div className="size-2.5 rounded-full bg-border/80" />
                </div>
                <div className="flex-1 text-center text-[10px] text-muted-foreground/60 font-medium font-mono select-none">
                  localhost:5173/preview/{blockId}
                </div>
              </div>
              
              <iframe 
                src={`/preview/${blockId}`}
                className="w-full flex-1 border-0"
                title={`${title} Preview`}
              />
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="code" className="mt-4 relative group/code">
          <div className="rounded-2xl border border-border overflow-hidden [&_.shiki]:!m-0 [&_.shiki]:!rounded-none [&_.shiki]:!p-6 [&_.shiki]:max-h-[750px] overflow-auto custom-scrollbar">
            <CodeHighlighter code={codeString} />
          </div>
          <Button
            size="sm"
            iconOnly
            variant="soft"
            className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm text-muted-foreground hover:text-foreground shadow-sm"
            onClick={() => {
              navigator.clipboard.writeText(codeString);
              const el = document.getElementById(`copy-${blockId}`);
              if (el) {
                el.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check size-4 text-green-500"><path d="M20 6 9 17l-5-5"/></svg>';
                setTimeout(() => {
                  el.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy size-4"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>';
                }, 2000);
              }
            }}
          >
            <span id={`copy-${blockId}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="lucide lucide-copy size-4"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
            </span>
          </Button>
        </TabsContent>
      </Tabs>
    </div>
  );
}
