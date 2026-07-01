import { LayersIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Badge, Separator, Switch, SwitchThumb, useTheme } from "@/index";;
import { ALL_COMPONENTS, NAV } from "@/dev/data";
import React, { Suspense, lazy } from "react";
import OverviewSection from "@/dev/showcase/overview";

const components: Record<string, React.LazyExoticComponent<any>> = {};
ALL_COMPONENTS.forEach((comp) => {
  components[comp.id] = lazy(() => import(`./showcase/${comp.id}.tsx`));
});

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

  const ActiveComponent = active !== "overview" ? components[active] : null;

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
          <p className="mb-2 px-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            Components (A-Z)
          </p>
          <nav className="space-y-0.5">
            {ALL_COMPONENTS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActive(id)}
                className={`w-full flex items-center gap-2.5 rounded-md px-2.5 py-1.5 text-[13px] transition-colors text-left ${
                  active === id
                    ? "bg-accent text-accent-foreground font-medium"
                    : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                }`}
              >
                {label}
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

            {active !== "overview" && ActiveComponent && (
              <Suspense
                fallback={
                  <div className="p-12 text-center text-muted-foreground animate-pulse">
                    Loading component...
                  </div>
                }
              >
                <ActiveComponent />
              </Suspense>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
