import { LayersIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { COMPONENTS, NAV } from "@/dev/data";
import React, { Suspense, lazy } from "react";
import OverviewSection from "@/dev/showcase/overview";
import { Badge } from "@/components/micro/badge";
import { Separator } from "@/components/micro/separator";
import { Switch, SwitchThumb } from "@/components/micro/switch";
import { useTheme } from "@/components/micro/theme-provider";

const components: Record<string, React.LazyExoticComponent<any>> = {};
COMPONENTS.forEach((comp) => {
  if (comp.hasMicro) {
    components[`micro-${comp.id}`] = lazy(() => import(`./showcase/${comp.id}.tsx`));
  }
  if (comp.hasMacro) {
    components[`macro-${comp.id}`] = lazy(() => import(`./showcase/macro/${comp.id}.tsx`));
  }
});

function ComponentViewer({ id }: { id: string }) {
  const compDef = COMPONENTS.find((c) => c.id === id);
  const [activeTab, setActiveTab] = useState<"micro" | "macro">("macro");
  
  useEffect(() => {
    if (compDef?.hasMacro) setActiveTab("macro");
    else setActiveTab("micro");
  }, [id, compDef]);

  if (!compDef) return null;

  const MicroComp = compDef.hasMicro ? components[`micro-${id}`] : null;
  const MacroComp = compDef.hasMacro ? components[`macro-${id}`] : null;

  if (MicroComp && MacroComp) {
    return (
      <div className="w-full flex flex-col gap-8">
        <div className="flex w-full items-center justify-start border-b border-border/40 pb-4">
          <div className="inline-flex items-center justify-center rounded-lg bg-muted/60 p-1 text-muted-foreground">
            <button
              onClick={() => setActiveTab("macro")}
              className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-4 py-1.5 text-sm font-medium transition-all ${
                activeTab === "macro"
                  ? "bg-background text-foreground shadow-sm"
                  : "hover:text-foreground"
              }`}
            >
              Macro (Preset)
            </button>
            <button
              onClick={() => setActiveTab("micro")}
              className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-4 py-1.5 text-sm font-medium transition-all ${
                activeTab === "micro"
                  ? "bg-background text-foreground shadow-sm"
                  : "hover:text-foreground"
              }`}
            >
              Micro (Primitive)
            </button>
          </div>
        </div>
        
        <div className="mt-2">
          <Suspense fallback={<div className="p-12 text-center text-muted-foreground animate-pulse">Loading...</div>}>
            {activeTab === "macro" ? <MacroComp /> : <MicroComp />}
          </Suspense>
        </div>
      </div>
    );
  }

  const Comp = MicroComp || MacroComp;
  return (
    <div className="mt-2">
      <Suspense fallback={<div className="p-12 text-center text-muted-foreground animate-pulse">Loading...</div>}>
        {Comp && <Comp />}
      </Suspense>
    </div>
  );
}

export default function App() {
  const theme = useTheme();
  const [active, setActiveState] = useState(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      return params.get("component") || "overview";
    }
    return "overview";
  });

  const setActive = (id: string) => {
    setActiveState(id);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("component", id);
      window.history.pushState({}, "", url);

      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 50);
    }
  };

  useEffect(() => {
    // Initial scroll if URL has component
    const params = new URLSearchParams(window.location.search);
    const comp = params.get("component");
    if (comp) {
      setTimeout(() => {
        const el = document.getElementById(comp);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const comp = params.get("component") || "overview";
      setActiveState(comp);
      const el = document.getElementById(comp);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top nav */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="size-7 rounded-[9px] bg-primary flex items-center justify-center shadow-sm border border-primary/20">
              <LayersIcon className="size-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-[15px] tracking-tight">
              gladcn.ui
            </span>
            <Badge
              color="secondary"
              className="text-[10px] px-1.5 py-0 font-medium"
            >
              v0.2.1
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground mr-1">Dark</span>
            <Switch
              checked={theme?.mode === "dark"}
              onCheckedChange={(v) => theme?.setMode(v ? "dark" : "light")}
            >
              <SwitchThumb />
            </Switch>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-[1440px] gap-0">
        {/* Sidebar */}
        <aside className="sticky top-14 h-[calc(100vh-3.5rem)] w-56 shrink-0 border-r pt-6 px-3 hidden md:block overflow-y-auto">
          <nav className="space-y-0.5">
            <button
              onClick={() => setActive("overview")}
              className={`w-full flex items-center gap-2.5 rounded-md px-2.5 py-1.5 text-[13px] transition-colors text-left mb-2 ${
                active === "overview"
                  ? "bg-accent text-accent-foreground font-medium"
                  : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
              }`}
            >
              <LayersIcon className="size-3.5" />
              Overview
            </button>
          </nav>
          
          <p className="mb-2 px-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mt-4">
            Components (A-Z)
          </p>
          <nav className="space-y-0.5">
            {COMPONENTS.map(({ id, label, hasMacro, hasMicro }) => (
              <button
                key={id}
                onClick={() => setActive(id)}
                className={`w-full flex items-center justify-between gap-2.5 rounded-md px-2.5 py-1.5 text-[13px] transition-colors text-left ${
                  active === id
                    ? "bg-accent text-accent-foreground font-medium"
                    : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                }`}
              >
                <span>{label}</span>
                <div className="flex gap-1 shrink-0">
                  {hasMicro && hasMacro && (
                    <span className="text-[9px] bg-primary/10 text-primary px-1 rounded font-bold tracking-tighter" title="Has both Micro & Macro versions">M+</span>
                  )}
                  {!hasMicro && hasMacro && (
                    <span className="text-[9px] bg-amber-500/10 text-amber-500 px-1 rounded font-bold tracking-tighter" title="Macro only">M</span>
                  )}
                </div>
              </button>
            ))}
          </nav>

          <Separator className="my-4" />
          <div className="px-2 space-y-1">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              Install
            </p>
            <div className="rounded-md bg-muted px-2.5 py-2 font-mono text-[10px] text-muted-foreground break-all">
              npm i @duongy96/gladcn
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 min-w-0 px-6 py-8">
          {/* Mobile nav */}
          <div className="mb-6 flex gap-1.5 overflow-x-auto pb-1 md:hidden">
            {NAV.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActive(id)}
                className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  active === id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="pb-24">
            {active === "overview" && <OverviewSection />}
            {active !== "overview" && <ComponentViewer id={active} />}
          </div>
        </main>
      </div>
    </div>
  );
}
