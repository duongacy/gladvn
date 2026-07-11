import { Button } from "@/components/micro/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/micro/tabs";
import { CodeHighlighter } from "@/dev/components/code-highlighter";
import { COLORS, COLOR_INFO } from "@/dev/data";
import { type Size } from "@/lib/types";
import { cn } from "@/lib/utils";
import { BookOpenIcon, CheckIcon, CopyIcon } from "lucide-react";
import React, { useState } from "react";
import reactElementToJSXString from "react-element-to-jsx-string";

/* ─────────────────────────────────────────────────────────────────
   SectionHeader  –  page‐level title bar
   Clean typography + subtle separator. No blobs, no gradients.
   ────────────────────────────────────────────────────────────── */
export function SectionHeader({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="mb-8 flex flex-col gap-1">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
          {title}
        </h2>
        {children && <div className="shrink-0 pb-0.5">{children}</div>}
      </div>
      {description && (
        <p className="text-[15px] text-muted-foreground">{description}</p>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   ShowcaseDocs  –  Documentation block
   ────────────────────────────────────────────────────────────── */
export function ShowcaseDocs({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-12 overflow-hidden rounded-2xl border border-amber-500/20 bg-amber-500/5 shadow-sm">
      <div className="flex items-center gap-2 border-b border-amber-500/20 bg-amber-500/10 px-6 py-3.5">
        <BookOpenIcon className="size-4 text-amber-700 dark:text-amber-500" />
        <h3 className="text-sm font-semibold text-amber-900 dark:text-amber-200">
          Usage Guidelines
        </h3>
      </div>
      <div className="px-6 py-5 text-[15px] leading-relaxed text-muted-foreground">
        {children}
      </div>
    </div>
  );
}

export function DocsH3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-8 first:mt-1 mb-3 text-base font-semibold text-foreground">
      {children}
    </h3>
  );
}

export function DocsP({ children }: { children: React.ReactNode }) {
  return <p className="mb-6 last:mb-1">{children}</p>;
}

export function DocsUl({ children }: { children: React.ReactNode }) {
  return <ul className="mb-6 list-inside list-disc space-y-2">{children}</ul>;
}

export function DocsLi({ children }: { children: React.ReactNode }) {
  return <li>{children}</li>;
}

export function DocsCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded-md border border-amber-500/20 bg-amber-500/10 px-1.5 py-0.5 font-mono text-[13px] text-amber-900 dark:text-amber-200">
      {children}
    </code>
  );
}

/* ─────────────────────────────────────────────────────────────────
   ExampleSection  –  a single demo block (replaces ComponentPreview)
   
   Inspired by shadcn docs:  
   ┌─ label ──────────────────────────────────────────────┐
   │                                                       │
   │            live component preview                     │
   │                                                       │
   └───────────────────────────────────────────────────────┘
   
   • Label sits *above* the card as a small muted caption
   • The card itself is a clean bordered rectangle
   • Component sits centered with generous padding
   • NO icon badges, NO dot‑grid, NO gradients inside
   ────────────────────────────────────────────────────────── */
export function ExampleSection({
  label,
  description,
  children,
  className,
  fullWidth = false,
  codeString: customCodeString,
  hideCode = false,
}: {
  label?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  codeString?: string;
  hideCode?: boolean;
}) {
  const [copied, setCopied] = useState(false);
  const [codeString, setCodeString] = useState<string | null>(
    customCodeString || null,
  );
  const [activeTab, setActiveTab] = useState("preview");

  const shouldHideCode = hideCode || label?.includes("Use Case Comparison");

  // Update codeString when user clicks "Code" tab or when children change (e.g. global state changes)
  React.useEffect(() => {
    if (activeTab === "code" && !customCodeString) {
      try {
        const stringifier =
          typeof reactElementToJSXString === "function"
            ? reactElementToJSXString
            : (reactElementToJSXString as any).default;
        const raw = stringifier(children, {
          showFunctions: true,
          showDefaultProps: false,
          useBooleanShorthandSyntax: true,
          maxInlineAttributesLineLength: 80,
        });
        setCodeString(raw);
      } catch (e) {
        setCodeString("// Code snippet generation failed");
      }
    }
  }, [activeTab, children, customCodeString]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  const copyToClipboard = () => {
    if (codeString) {
      navigator.clipboard.writeText(codeString);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <Tabs
      value={activeTab}
      onValueChange={handleTabChange}
      className="flex w-full flex-col gap-3"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-0.5">
          {label && (
            <h3 className="text-sm font-semibold text-foreground">{label}</h3>
          )}
          {description && (
            <p className="text-[13px] text-muted-foreground leading-relaxed pr-4">
              {description}
            </p>
          )}
        </div>
        {!shouldHideCode && (
          <TabsList className="h-8 shrink-0">
            <TabsTrigger value="preview" className="text-xs px-3 py-1">
              Preview
            </TabsTrigger>
            <TabsTrigger value="code" className="text-xs px-3 py-1">
              Code
            </TabsTrigger>
          </TabsList>
        )}
      </div>

      <div className="relative w-full">
        <TabsContent value="preview" className="mt-0 outline-none">
          <div
            className={cn(
              "relative flex items-center justify-center rounded-2xl border border-border/80 bg-background/50 backdrop-blur-sm p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-ring/30",
              "min-h-[120px]",
              className,
            )}
          >
            <div className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.05] [background-size:24px_24px] [background-image:radial-gradient(circle_at_center,var(--color-foreground)_1.5px,transparent_1.5px)]" />
            <div
              className={cn(
                "relative z-10 flex w-full flex-wrap items-center justify-center gap-4",
                fullWidth && "flex-col items-stretch",
              )}
            >
              {children}
            </div>
          </div>
        </TabsContent>

        {!shouldHideCode && (
          <TabsContent value="code" className="mt-0 outline-none">
            <div className="relative rounded-2xl border border-border/80 bg-muted/50 p-4 text-foreground shadow-sm overflow-clip group/code">
              <CodeHighlighter code={codeString || "// Loading..."} />
              <Button
                size="sm"
                data-icon="true"
                variant="soft"
                className="absolute top-4 right-4 z-10 h-8 w-8 bg-background/80 backdrop-blur-sm text-muted-foreground hover:text-foreground shadow-sm"
                onClick={copyToClipboard}
              >
                {copied ? (
                  <CheckIcon className="size-4 text-green-500" />
                ) : (
                  <CopyIcon className="size-4" />
                )}
              </Button>
            </div>
          </TabsContent>
        )}
      </div>
    </Tabs>
  );
}

/* ─────────────────────────────────────────────────────────────────
   ExampleGrid  –  responsive columns for multiple examples
   ────────────────────────────────────────────────────────── */
export function ExampleGrid({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("grid gap-6 grid-cols-1", className)}>{children}</div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   Legacy compat – keep old names working during migration
   ────────────────────────────────────────────────────────── */
export const ComponentGrid = ExampleGrid;
export function ComponentPreview({
  title,
  description,
  children,
  className,
}: {
  title?: string;
  description?: string;
  icon?: React.ElementType;
  color?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <ExampleSection
      label={title}
      description={description}
      className={className}
    >
      {children}
    </ExampleSection>
  );
}

/* ─────────────────────────────────────────────────────────────────
   ShowcaseBlock  –  legacy wrapper (still used by some pages)
   ────────────────────────────────────────────────────────── */
export function ShowcaseBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return <ExampleSection label={title}>{children}</ExampleSection>;
}

/* ─────────────────────────────────────────────────────────────────
   ColorSwatch  –  design‑token preview
   ────────────────────────────────────────────────────────── */
const bgColorMap: Record<(typeof COLORS)[number], string> = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  destructive: "bg-destructive",
  warning: "bg-warning",
  success: "bg-success",
  info: "bg-info",
  tertiary: "bg-tertiary",
};

export function ColorSwatch({ color }: { color: (typeof COLORS)[number] }) {
  const info = COLOR_INFO[color];
  return (
    <div className="flex flex-col items-center gap-3 p-3.5 sm:p-5 rounded-[2rem] bg-background/40 border border-border/50 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/30 group">
      <div
        className={cn(
          "h-12 w-12 sm:h-16 sm:w-16 rounded-2xl border shadow-inner transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:rounded-[2rem]",
          bgColorMap[color],
        )}
      />
      <div className="flex flex-col items-center">
        <span className="text-xs sm:text-sm font-bold text-foreground capitalize tracking-tight">
          {info.label}
        </span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   Showcase  –  The unified showcase layout wrapper
   ────────────────────────────────────────────────────────────── */

export interface ShowcaseTab {
  label: string;
  content: React.ReactNode;
}

export interface ShowcaseProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  generalConcept?: React.ReactNode;
  actions?: React.ReactNode;
  tabs: ShowcaseTab[];
}

export function Showcase({
  title,
  description,
  generalConcept,
  actions,
  tabs,
}: ShowcaseProps) {
  const hasTabs = tabs.length >= 2;

  const content = (
    <>
      {/* 1 & 2: Title and Description */}
      <div className="flex flex-col gap-2 mb-6">
        <div className="flex items-center gap-4">
          <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
            {title}
          </h2>
          {actions && <div className="shrink-0">{actions}</div>}
        </div>
        {description && (
          <p className="text-[15px] text-muted-foreground">{description}</p>
        )}
      </div>

      {/* 3: General Concept */}
      {generalConcept && <div className="mb-8">{generalConcept}</div>}

      {/* 4 & 5: TabsList and Active Content */}
      <div className="mt-2">
        {hasTabs && (
          <div className="mb-6 flex">
            <TabsList>
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.label}
                  value={tab.label}
                  className="px-4 py-1.5"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        )}
        {hasTabs
          ? tabs.map((tab) => (
              <TabsContent
                key={tab.label}
                value={tab.label}
                className="mt-0 focus-visible:outline-none"
              >
                {tab.content}
              </TabsContent>
            ))
          : tabs[0]?.content}
      </div>
    </>
  );

  return (
    <div className="w-full flex flex-col gap-8">
      {hasTabs ? (
        <Tabs defaultValue={tabs[0]!.label} className="w-full">
          {content}
        </Tabs>
      ) : (
        content
      )}
    </div>
  );
}

export function SizeToggle({
  value,
  onValueChange,
}: {
  value: Size;
  onValueChange: (size: Size) => void;
}) {
  const sizes: Size[] = ["sm", "md", "lg"];
  return (
    <div className="flex h-8 items-center rounded-md border border-border bg-muted/50 p-1">
      {sizes.map((size) => (
        <button
          key={size}
          onClick={() => onValueChange(size)}
          className={cn(
            "flex items-center justify-center rounded-sm px-2.5 text-xs font-mono font-medium transition-all",
            value === size
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:bg-muted hover:text-foreground",
          )}
        >
          {size}
        </button>
      ))}
    </div>
  );
}
