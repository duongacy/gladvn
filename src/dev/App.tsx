import { Badge } from "@/components/micro/badge";
import { Separator } from "@/components/micro/separator";
import { Switch, SwitchThumb } from "@/components/micro/switch";
import { useTheme } from "@/components/micro/theme-provider";
import { useDevContext } from "@/dev/components/dev-context";
import { SizeToggle } from "@/dev/components/showcase";
import { COMPONENTS } from "@/dev/data";
import OverviewSection from "@/dev/showcase/overview";
import { LayersIcon, MenuIcon, XIcon } from "lucide-react";
import React, { Suspense, lazy, useEffect, useState } from "react";

const components: Record<string, React.LazyExoticComponent<any>> = {};
COMPONENTS.forEach((comp) => {
  components[comp.id] = lazy(() => import(`./showcase/${comp.id}.tsx`));
});

function ComponentViewer({ id }: { id: string }) {
  const compDef = COMPONENTS.find((c) => c.id === id);
  if (!compDef) return null;
  const Comp = components[id];
  return (
    <div className="mt-2">
      <Suspense
        fallback={
          <div className="p-12 text-center text-muted-foreground animate-pulse">
            Loading...
          </div>
        }
      >
        {Comp && <Comp />}
      </Suspense>
    </div>
  );
}

export default function App() {
  const theme = useTheme();
  const { size, setSize } = useDevContext();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActiveState] = useState(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      return params.get("component") || "overview";
    }
    return "overview";
  });

  const setActive = (id: string) => {
    setActiveState(id);
    setIsMobileMenuOpen(false); // Close mobile menu on select
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

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top nav */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden -ml-2 p-1.5 rounded-md hover:bg-muted text-muted-foreground transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <XIcon className="size-5" />
              ) : (
                <MenuIcon className="size-5" />
              )}
            </button>
            <div className="size-7 rounded-[9px] bg-primary flex items-center justify-center shadow-sm border border-primary/20">
              <LayersIcon className="size-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-[15px] tracking-tight">
              gladcn.ui
            </span>
            <Badge
              color="secondary"
              className="text-[10px] px-1.5 py-0 font-medium hidden sm:inline-flex"
            >
              v0.2.3
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
        {/* Mobile Backdrop */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 z-50 w-64 transform border-r bg-background pt-4 px-3 transition-transform duration-200 ease-in-out md:sticky md:top-14 md:block md:h-[calc(100vh-3.5rem)] md:w-56 md:translate-x-0 md:pt-6 md:z-0 overflow-y-auto ${isMobileMenuOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"
            }`}
        >
          <nav className="space-y-0.5">
            <button
              onClick={() => setActive("overview")}
              className={`w-full flex items-center gap-2.5 rounded-md px-2.5 py-1.5 text-[13px] transition-colors text-left mb-2 ${active === "overview"
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
            {COMPONENTS.map(({ id, label, hasMacro, hasMicro, status }) => (
              <button
                key={id}
                onClick={() => setActive(id)}
                className={`w-full flex items-center justify-between gap-2.5 rounded-md px-2.5 py-1.5 text-[13px] transition-colors text-left ${active === id
                    ? "bg-accent text-accent-foreground font-medium"
                    : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                  }`}
              >
                <span>{label}</span>
                <div className="flex gap-1 shrink-0">
                  {status === "stable" && (
                    <span
                      className="text-[9px] bg-green-500/10 text-green-500 dark:bg-green-500/20 dark:text-green-400 px-1.5 py-0.5 rounded-sm font-medium tracking-tight"
                      title="Stable & Audited"
                    >
                      Stable
                    </span>
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
          <div className="pb-24">
            {active === "overview" && <OverviewSection />}
            {active !== "overview" && <ComponentViewer id={active} />}
          </div>
        </main>
      </div>

      {/* Floating Size Toggle */}
      {COMPONENTS.find((c) => c.id === active)?.hasSize && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-1.5 items-end animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mr-1">
            Chọn size
          </span> */}
          <div className="rounded-xl border border-border/50 bg-background/80 p-1 shadow-2xl backdrop-blur-xl">
            <SizeToggle value={size} onValueChange={setSize} />
          </div>
        </div>
      )}
    </div>
  );
}
