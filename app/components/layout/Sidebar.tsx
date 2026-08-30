import React from "react";
import { LayersIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  COMPONENTS,
  blockCategories,
  componentCategories,
  groupedComponents,
  categoryTranslations,
  labelTranslations,
} from "~app/config/data";

interface SidebarProps {
  active: string;
  setActive: (id: string) => void;
  isMobileMenuOpen: boolean;
  language: "vi" | "en";
  activeComponent: any;
}

export function Sidebar({
  active,
  setActive,
  isMobileMenuOpen,
  language,
  activeComponent,
}: SidebarProps) {
  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 transform border-r bg-background border-border pt-4 px-3 transition-transform duration-200 ease-in-out md:sticky md:top-16 md:h-[calc(100vh-4rem)] md:w-56 md:translate-x-0 md:pt-6 md:z-0 overflow-y-auto custom-scrollbar",
        {
          "translate-x-0 shadow-2xl": isMobileMenuOpen,
          "-translate-x-full": !isMobileMenuOpen,
          "md:hidden": active === "overview",
          "md:block": active !== "overview",
        },
      )}
    >
      <nav className="space-y-0.5 md:hidden">
        <button
          onClick={() => setActive("overview")}
          className={cn(
            "w-full flex items-center gap-2.5 rounded-md px-2.5 py-1.5 text-[13px] transition-colors text-left mb-2",
            {
              "bg-accent text-accent-foreground font-medium":
                active === "overview",
              "text-muted-foreground hover:bg-muted/60 hover:text-foreground":
                !(active === "overview"),
            },
          )}
        >
          <LayersIcon className="size-3.5" />
          {language === "en" ? "Overview" : "Tổng quan"}
        </button>
        <div className="h-px bg-border/50 my-2 mx-1"></div>
        <button
          onClick={() => setActive("accordion")}
          className={cn(
            "w-full flex items-center gap-2.5 rounded-md px-2.5 py-1.5 text-[13px] transition-colors text-left",
            {
              "bg-accent text-accent-foreground font-medium":
                active !== "overview" &&
                !blockCategories.includes(activeComponent?.category || ""),
              "text-muted-foreground hover:bg-muted/60 hover:text-foreground":
                !(
                  active !== "overview" &&
                  !blockCategories.includes(activeComponent?.category || "")
                ),
            },
          )}
        >
          Components
        </button>
        <button
          onClick={() => setActive("dashboard-block")}
          className={cn(
            "w-full flex items-center gap-2.5 rounded-md px-2.5 py-1.5 text-[13px] transition-colors text-left mb-2",
            {
              "bg-accent text-accent-foreground font-medium":
                blockCategories.includes(activeComponent?.category || ""),
              "text-muted-foreground hover:bg-muted/60 hover:text-foreground":
                !blockCategories.includes(activeComponent?.category || ""),
            },
          )}
        >
          Blocks
        </button>
        <div className="h-px bg-border/50 my-2 mx-1"></div>
      </nav>

      <div className="mt-6">
        {blockCategories.includes(activeComponent?.category || "") ? (
          <nav className="space-y-0.5">
            {COMPONENTS.filter((c) =>
              blockCategories.includes(c.category),
            ).map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActive(id)}
                className={cn(
                  "w-full flex items-center justify-between gap-2.5 rounded-md px-2.5 py-1.5 text-[13px] transition-colors text-left",
                  {
                    "bg-accent text-accent-foreground font-medium":
                      active === id,
                    "text-muted-foreground hover:bg-muted/60 hover:text-foreground":
                      !(active === id),
                  },
                )}
              >
                <span>
                  {language === "en"
                    ? labelTranslations[label] || label
                    : label}
                </span>
              </button>
            ))}
          </nav>
        ) : (
          componentCategories.map((cat) => {
            const comps = groupedComponents[cat];
            if (!comps || comps.length === 0) return null;
            return (
              <div key={cat} className="mb-4">
                <p className="mb-2 px-2 text-[10px] font-bold uppercase tracking-wider text-foreground/70">
                  {language === "en"
                    ? categoryTranslations[cat] || cat
                    : cat}
                </p>
                <nav className="space-y-0.5">
                  {comps.map(({ id, label }) => (
                    <button
                      key={id}
                      onClick={() => setActive(id)}
                      className={cn(
                        "w-full flex items-center justify-between gap-2.5 rounded-md px-2.5 py-1.5 text-[13px] transition-colors text-left",
                        {
                          "bg-accent text-accent-foreground font-medium":
                            active === id,
                          "text-muted-foreground hover:bg-muted/60 hover:text-foreground":
                            !(active === id),
                        },
                      )}
                    >
                      <span>
                        {language === "en"
                          ? labelTranslations[label] || label
                          : label}
                      </span>
                    </button>
                  ))}
                </nav>
              </div>
            );
          })
        )}
      </div>
    </aside>
  );
}
