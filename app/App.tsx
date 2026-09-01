import React, {
  Suspense,
  lazy,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import { useDevContext } from "~app/components/dev-context";
import { SizeToggle } from "~app/components/showcase";
import { COMPONENTS } from "~app/config/data";
import OverviewSection from "~app/pages/overview/overview";

import { Header } from "~app/components/layout/Header";
import { Sidebar } from "~app/components/layout/Sidebar";
import { CommandMenu } from "~app/components/layout/CommandMenu";

const components: Record<string, React.LazyExoticComponent<any>> = {};
COMPONENTS.forEach((comp) => {
  components[comp.id] = lazy(() => import(`./pages/components/${comp.id}.tsx`));
});

function ComponentViewer({ id }: { id: string }) {
  const compDef = COMPONENTS.find((c) => c.id === id);
  if (!compDef) return null;
  const Comp = components[id];
  return (
    <Suspense
      fallback={
        <div className="p-12 text-center text-muted-foreground animate-pulse">
          Loading...
        </div>
      }
    >
      {Comp && <Comp />}
    </Suspense>
  );
}

function PreviewViewer({ blockId }: { blockId: string }) {
  const Block = useMemo(
    () => lazy(() => import(`../src/components/blocks/${blockId}.tsx`)),
    [blockId],
  );

  return (
    <Suspense
      fallback={
        <div className="p-12 text-center text-muted-foreground animate-pulse">
          Loading preview...
        </div>
      }
    >
      <div className="w-full min-h-screen bg-background antialiased">
        <Block />
      </div>
    </Suspense>
  );
}

export default function App() {
  if (
    typeof window !== "undefined" &&
    window.location.pathname.startsWith("/preview/")
  ) {
    const blockId = window.location.pathname.replace(/^\/preview\//, "");
    return <PreviewViewer blockId={blockId} />;
  }

  const { size, setSize, language, setLanguage } = useDevContext();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cmdOpen, setCmdOpen] = useState(false);
  const [active, setActiveState] = useState(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const queryComp = params.get("component");
      if (queryComp) {
        window.history.replaceState({}, "", `/${queryComp}`);
        return queryComp;
      }
      const pathComp = window.location.pathname.replace(/^\/+/, "");
      return pathComp || "overview";
    }
    return "overview";
  });

  const activeComponent = useMemo(
    () => COMPONENTS.find((c) => c.id === active),
    [active],
  );

  const setActive = useCallback((id: string) => {
    setActiveState(id);
    setIsMobileMenuOpen(false);
    setCmdOpen(false);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.delete("component");
      url.pathname = id === "overview" ? "/" : `/${id}`;
      window.history.pushState({}, "", url);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const queryComp = params.get("component");
      const comp = queryComp || window.location.pathname.replace(/^\/+/, "");

      if (comp && comp !== "overview") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const queryComp = params.get("component");
      const comp =
        queryComp || window.location.pathname.replace(/^\/+/, "") || "overview";
      setActiveState(comp);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

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
        if (activeComponent) {
          document.title = `${activeComponent.label} — gladvn Components`;
        }
      }
    }
  }, [active, activeComponent]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header
        active={active}
        setActive={setActive}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={() => setIsMobileMenuOpen((prev) => !prev)}
        setCmdOpen={setCmdOpen}
        activeComponent={activeComponent}
      />

      <div className="mx-auto flex max-w-360 gap-0">
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        <Sidebar
          active={active}
          setActive={setActive}
          isMobileMenuOpen={isMobileMenuOpen}
          language={language}
          activeComponent={activeComponent}
        />

        <main className="flex-1 min-w-0 px-3 md:px-6 py-6 md:py-8">
          {active === "overview" && <OverviewSection />}
          {active !== "overview" && <ComponentViewer id={active} />}
        </main>
      </div>

      {activeComponent?.hasSize && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-1.5 items-end animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="rounded-xl border border-border/50 bg-background/80 p-1 shadow-2xl backdrop-blur-xl">
            <SizeToggle value={size} onValueChange={setSize} />
          </div>
        </div>
      )}

      <CommandMenu
        cmdOpen={cmdOpen}
        setCmdOpen={setCmdOpen}
        language={language}
        setActive={setActive}
      />
    </div>
  );
}
