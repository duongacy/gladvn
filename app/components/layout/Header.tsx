import React, { useCallback } from "react";
import { MenuIcon, MoonIcon, SearchIcon, SunIcon, XIcon } from "lucide-react";
import { Button } from "@/components/micro/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/micro/toggle-group";
import { GladvnLogo } from "~app/components/GladvnLogo";
import { useTheme } from "@/components/micro/theme-provider";
import { cn } from "@/lib/utils";
import { blockCategories } from "~app/config/data";
import { useDevContext, useI18n } from "~app/components/dev-context";

interface HeaderProps {
  active: string;
  setActive: (id: string) => void;
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  setCmdOpen: (open: boolean) => void;
  activeComponent: any;
}

export function Header({
  active,
  setActive,
  isMobileMenuOpen,
  toggleMobileMenu,
  setCmdOpen,
  activeComponent,
}: HeaderProps) {
  const theme = useTheme();
  const { language, setLanguage } = useDevContext();
  const t = useI18n();

  const handleGoToOverview = useCallback(() => {
    setActive("overview");
  }, [setActive]);

  const handleGoToComponents = useCallback(() => {
    if (
      active === "overview" ||
      blockCategories.includes(activeComponent?.category || "")
    ) {
      setActive("accordion");
    }
  }, [active, activeComponent?.category, setActive]);

  const handleGoToBlocks = useCallback(() => {
    if (!blockCategories.includes(activeComponent?.category || "")) {
      setActive("dashboard-block");
    }
  }, [activeComponent?.category, setActive]);

  const handleOpenSearch = useCallback(() => {
    setCmdOpen(true);
  }, [setCmdOpen]);

  const handleToggleTheme = useCallback(() => {
    theme?.toggleMode();
  }, [theme]);

  const handleLanguageChange = useCallback((v: string[]) => {
    if (v && v.length > 0) setLanguage(v[0] as "vi" | "en");
  }, [setLanguage]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-360 items-center justify-between px-4 md:px-6">
        {/* Left — Logo + version */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleMobileMenu}
            className="md:hidden -ml-2 p-1.5 rounded-md hover:bg-muted text-muted-foreground transition-colors"
            aria-label={t("Bật/tắt menu", "Toggle menu")}
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

        {/* Center — Navigation Tabs & Search */}
        <div className="flex-1 justify-center gap-6 hidden md:flex items-center mx-4">
          <button
            onClick={handleGoToOverview}
            className={cn("text-sm font-medium transition-colors", {
              "text-foreground": active === "overview",
              "text-muted-foreground hover:text-foreground": active !== "overview",
            })}
          >
            {t("Tổng quan", "Overview")}
          </button>
          <button
            onClick={handleGoToComponents}
            className={cn("text-sm font-medium transition-colors", {
              "text-foreground":
                active !== "overview" &&
                !blockCategories.includes(activeComponent?.category || ""),
              "text-muted-foreground hover:text-foreground": !(
                active !== "overview" &&
                !blockCategories.includes(activeComponent?.category || "")
              ),
            })}
          >
            {t("Thành phần", "Components")}
          </button>
          <button
            onClick={handleGoToBlocks}
            className={cn("text-sm font-medium transition-colors", {
              "text-foreground": blockCategories.includes(
                activeComponent?.category || "",
              ),
              "text-muted-foreground hover:text-foreground":
                !blockCategories.includes(activeComponent?.category || ""),
            })}
          >
            {t("Khối", "Blocks")}
          </button>

          <div className="mx-2 h-4 w-px bg-border/50"></div>

          <button
            id="cmd-search-trigger"
            onClick={handleOpenSearch}
            className="flex h-8 items-center gap-2 px-3 rounded-md border border-border bg-muted/30 text-[13px] text-muted-foreground hover:bg-muted/60 transition-colors w-56"
            aria-label={t("Tìm component (⌘K)", "Search components (⌘K)")}
          >
            <SearchIcon className="size-3.5 shrink-0" />
            <span className="flex-1 text-left">
              {t("Tìm kiếm...", "Search...")}
            </span>
            <kbd className="text-[10px] bg-background border border-border/80 rounded px-1.5 py-0.5 font-sans leading-none">
              ⌘K
            </kbd>
          </button>
        </div>

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

          <Button
            variant="ghost"
            iconOnly
            onClick={handleToggleTheme}
            className="text-muted-foreground hover:text-foreground relative"
          >
            <SunIcon className="size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">{t("Đổi giao diện", "Toggle theme")}</span>
          </Button>

          <ToggleGroup
            value={[language]}
            onValueChange={handleLanguageChange}
            size="sm"
            variant="default"
            spacing={2}
            className="flex items-center gap-1 justify-end shrink-0 w-22"
          >
            <ToggleGroupItem
              value="vi"
              className={cn(
                "w-10 h-8 p-0 flex items-center justify-center transition-opacity duration-300",
                {
                  "opacity-100": language === "vi",
                  "opacity-50 hover:opacity-80": language !== "vi",
                }
              )}
              aria-label="Tiếng Việt"
            >
              <span
                className={cn(
                  "inline-block transition-transform duration-300 overflow-hidden rounded-xs shadow-sm",
                  {
                    "scale-110": language === "vi",
                    "scale-75": language !== "vi",
                  }
                )}
              >
                <img
                  src="https://flagcdn.com/vn.svg"
                  alt="Vietnam Flag"
                  className="w-5 h-auto object-cover"
                />
              </span>
            </ToggleGroupItem>
            <ToggleGroupItem
              value="en"
              className={cn(
                "w-10 h-8 p-0 flex items-center justify-center transition-opacity duration-300",
                {
                  "opacity-100": language === "en",
                  "opacity-50 hover:opacity-80": language !== "en",
                }
              )}
              aria-label="English"
            >
              <span
                className={cn(
                  "inline-block transition-transform duration-300 overflow-hidden rounded-xs shadow-sm",
                  {
                    "scale-110": language === "en",
                    "scale-75": language !== "en",
                  }
                )}
              >
                <img
                  src="https://flagcdn.com/gb.svg"
                  alt="English Flag"
                  className="w-5 h-auto object-cover"
                />
              </span>
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
    </header>
  );
}
