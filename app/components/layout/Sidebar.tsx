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
        "fixed inset-y-0 left-0 z-50 w-64 transform border-r-2 bg-background border-border pr-1 transition-transform duration-200 ease-in-out md:sticky md:top-16 md:h-[calc(100vh-4rem)] md:w-56 md:translate-x-0 md:z-0",
        {
          "translate-x-0 shadow-2xl": isMobileMenuOpen,
          "-translate-x-full": !isMobileMenuOpen,
          "md:hidden": active === "overview",
          "md:block": active !== "overview",
        },
      )}
    >
      <div className="h-full w-full overflow-y-auto custom-scrollbar pt-4 pl-4 pr-3 md:pt-8">
        <nav className="space-y-1 md:hidden mb-8 pb-6 border-b-2 border-border">
        <button
          onClick={() => setActive("overview")}
          className={cn(
            "w-full flex items-center gap-2.5 px-3 py-2 text-[13px] transition-colors text-left",
            {
              "border-l-2 border-foreground text-foreground font-bold bg-muted/10":
                active === "overview",
              "border-l-2 border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/5":
                !(active === "overview"),
            },
          )}
        >
          <LayersIcon className="size-3.5" />
          {language === "en" ? "Overview" : "Tổng quan"}
        </button>
        <button
          onClick={() => setActive("accordion")}
          className={cn(
            "w-full flex items-center gap-2.5 px-3 py-2 text-[13px] transition-colors text-left",
            {
              "border-l-2 border-foreground text-foreground font-bold bg-muted/10":
                active !== "overview" &&
                !blockCategories.includes(activeComponent?.category || ""),
              "border-l-2 border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/5":
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
            "w-full flex items-center gap-2.5 px-3 py-2 text-[13px] transition-colors text-left",
            {
              "border-l-2 border-foreground text-foreground font-bold bg-muted/10":
                blockCategories.includes(activeComponent?.category || ""),
              "border-l-2 border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/5":
                !blockCategories.includes(activeComponent?.category || ""),
            },
          )}
        >
          Blocks
        </button>
      </nav>

      <div className="mt-2 pb-16">
        {blockCategories.includes(activeComponent?.category || "") ? (
          <nav className="space-y-1">
            {COMPONENTS.filter((c) =>
              blockCategories.includes(c.category),
            ).map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActive(id)}
                className={cn(
                  "w-full flex items-center justify-between px-3 py-1.5 text-[13px] transition-colors text-left",
                  {
                    "border-l-2 border-foreground text-foreground font-bold bg-muted/10":
                      active === id,
                    "border-l-2 border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/5":
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
              <div key={cat} className="mb-8">
                <p className="mb-3 px-3 text-[11px] font-bold uppercase tracking-widest text-foreground border-b border-border pb-1">
                  {language === "en"
                    ? categoryTranslations[cat] || cat
                    : cat}
                </p>
                <nav className="space-y-1">
                  {comps.map(({ id, label }) => (
                    <button
                      key={id}
                      onClick={() => setActive(id)}
                      className={cn(
                        "w-full flex items-center justify-between px-3 py-1.5 text-[13px] transition-colors text-left",
                        {
                          "border-l-2 border-foreground text-foreground font-bold bg-muted/10":
                            active === id,
                          "border-l-2 border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/5":
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
      </div>
    </aside>
  );
}
