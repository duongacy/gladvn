import React, { Suspense, lazy, useCallback, useEffect, useState } from "react";

import {
  LayersIcon,
  MenuIcon,
  MoonIcon,
  SearchIcon,
  SunIcon,
  XIcon,
} from "lucide-react";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../components/macro/command-preset";
import { Button } from "../components/micro/button";
import { Separator } from "../components/micro/separator";
import { useTheme } from "../components/micro/theme-provider";
import { GladvnLogo } from "../dev/components/GladvnLogo";
import { useDevContext } from "../dev/components/dev-context";
import { SizeToggle } from "../dev/components/showcase";
import { COMPONENTS } from "../dev/data";
import OverviewSection from "../dev/showcase/overview";

const components: Record<string, React.LazyExoticComponent<any>> = {};
COMPONENTS.forEach((comp) => {
  components[comp.id] = lazy(() => import(`./showcase/${comp.id}.tsx`));
});

const groupedComponents = COMPONENTS.reduce(
  (acc, comp) => {
    const cat = (comp as any).category || "Other";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(comp);
    return acc;
  },
  {} as Record<string, (typeof COMPONENTS)[number][]>,
);

const categoryOrder = [
  "Layout & Structure",
  "Forms & Inputs",
  "Feedback & Overlays",
  "Navigation",
  "Data Display",
  "Other",
];

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
  const [cmdOpen, setCmdOpen] = useState(false);
  const [active, setActiveState] = useState(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      return params.get("component") || "overview";
    }
    return "overview";
  });

  const setActive = useCallback((id: string) => {
    setActiveState(id);
    setIsMobileMenuOpen(false);
    setCmdOpen(false);
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
  }, []);

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

  // ⌘K / Ctrl+K listener
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setCmdOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (active === "overview") {
        document.title = "gladvn — Tailwind CSS React Components";
      } else {
        const compDef = COMPONENTS.find((c) => c.id === active);
        if (compDef) {
          document.title = `${compDef.label} — gladvn Components`;
        }
      }
    }
  }, [active]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top nav */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6">
          {/* Left — Logo + version */}
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
            <a
              href="/"
              className="inline-flex items-center hover:opacity-80 transition-opacity"
            >
              <GladvnLogo variant="wordmark" />
            </a>
          </div>

          {/* Center — Search bar (opens Command Palette) */}
          <button
            id="cmd-search-trigger"
            onClick={() => setCmdOpen(true)}
            className="hidden md:flex h-9 items-center gap-2.5 px-4 rounded-lg border border-border bg-muted/30 text-sm text-muted-foreground hover:bg-muted/60 transition-colors w-64 xl:w-80"
            aria-label="Tìm component (⌘K)"
          >
            <SearchIcon className="size-3.5 shrink-0" />
            <span className="flex-1 text-left text-[13px]">
              Tìm component...
            </span>
            <kbd className="text-[10px] bg-background border border-border/80 rounded px-1.5 py-0.5 font-sans leading-none">
              ⌘K
            </kbd>
          </button>

          {/* Right — GitHub + npx + theme toggle */}
          <div className="flex items-center gap-1.5">
            <Button
              variant="ghost"
              iconOnly
              render={
                <a
                  href="https://github.com/duongacy/gladvn"
                  target="_blank"
                  rel="noreferrer"
                />
              }
              nativeButton={false}
              className="text-muted-foreground hover:text-foreground hidden sm:inline-flex"
            >
              {/* GitHub SVG mark */}
              <svg
                viewBox="0 0 24 24"
                className="size-4"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span className="sr-only">GitHub</span>
            </Button>

            <Separator
              orientation="vertical"
              className="h-4 mx-1 hidden sm:block"
            />

            <Button
              variant="ghost"
              iconOnly
              onClick={() =>
                theme?.setMode(theme.mode === "light" ? "dark" : "light")
              }
              className="text-muted-foreground hover:text-foreground relative"
            >
              <SunIcon className="size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
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
          className={`fixed inset-y-0 left-0 z-50 w-64 transform border-r bg-background border-border pt-4 px-3 transition-transform duration-200 ease-in-out md:sticky md:top-16 md:block md:h-[calc(100vh-4rem)] md:w-56 md:translate-x-0 md:pt-6 md:z-0 overflow-y-auto custom-scrollbar ${
            isMobileMenuOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"
          }`}
        >
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

          <div className="mt-6">
            {categoryOrder.map((cat) => {
              const comps = groupedComponents[cat];
              if (!comps || comps.length === 0) return null;
              return (
                <div key={cat} className="mb-4">
                  <p className="mb-2 px-2 text-[10px] font-bold uppercase tracking-wider text-foreground/70">
                    {cat}
                  </p>
                  <nav className="space-y-0.5">
                    {comps.map(({ id, label }) => (
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
                      </button>
                    ))}
                  </nav>
                </div>
              );
            })}
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
          <div className="rounded-xl border border-border/50 bg-background/80 p-1 shadow-2xl backdrop-blur-xl">
            <SizeToggle value={size} onValueChange={setSize} />
          </div>
        </div>
      )}

      {/* ⌘K Command Palette */}
      <CommandDialog
        open={cmdOpen}
        onOpenChange={setCmdOpen}
        title="Tìm component"
        description="Tìm kiếm nhanh component trong Gladvn UI"
      >
        <Command size="lg">
          <CommandInput placeholder="Nhập tên component..." autoFocus />
          <CommandList className="max-h-96">
            <CommandEmpty>Không tìm thấy component nào.</CommandEmpty>

            <CommandGroup>
              {COMPONENTS.map(({ id, label, category }) => (
                <CommandItem
                  key={id}
                  value={`${label} ${category}`}
                  onSelect={() => setActive(id)}
                >
                  {label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  );
}
