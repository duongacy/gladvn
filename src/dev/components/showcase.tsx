import React, { createContext, useContext, useState } from "react";

import { BookOpenIcon, CheckIcon, CopyIcon } from "lucide-react";
import { useI18n } from "../../dev/components/dev-context";

import { Button } from "../../components/micro/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/micro/tabs";
import { CodeHighlighter } from "../../dev/components/code-highlighter";
import { COLORS, COLOR_INFO } from "../../dev/data";
import { type Size } from "../../lib/types";
import { cn } from "../../lib/utils";

type ShowcaseContextType = {
  exampleStates: Record<string, string>;
  setExampleState: (id: string, state: string) => void;
};
const ShowcaseContext = createContext<ShowcaseContextType | null>(null);

export function SectionHeader({
  title,
  description,
  children,
  className,
}: {
  title: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-3xl font-bold tracking-tight bg-linear-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
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

export function ShowcaseDocs({ children, className }: { children: React.ReactNode; className?: string }) {
  const t = useI18n();
  return (
    <div className={cn("overflow-hidden rounded-2xl border border-amber-500/20 bg-amber-500/5 shadow-sm", className)}>
      <div className="flex items-center gap-2 border-b border-amber-500/20 bg-amber-500/10 px-6 py-3.5">
        <BookOpenIcon className="size-4 text-amber-700 dark:text-amber-500" />
        <h3 className="text-sm font-semibold text-amber-900 dark:text-amber-200">
          {t("Hướng dẫn sử dụng", "Usage Guide")}
        </h3>
      </div>
      <div className="px-6 py-5 text-[15px] leading-relaxed text-muted-foreground">
        {children}
      </div>
    </div>
  );
}

export function DocsH3({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h3 className={cn("text-base font-semibold text-foreground", className)}>
      {children}
    </h3>
  );
}

export function DocsP({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn(className)}>{children}</p>;
}

export function DocsUl({ children, className }: { children: React.ReactNode; className?: string }) {
  return <ul className={cn("list-inside list-disc space-y-2", className)}>{children}</ul>;
}

export function DocsLi({ children, className }: { children: React.ReactNode; className?: string }) {
  return <li className={className}>{children}</li>;
}

export function DocsCode({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <code className={cn("rounded-md border border-amber-500/20 bg-amber-500/10 px-1.5 py-0.5 font-mono text-[13px] text-amber-900 dark:text-amber-200", className)}>
      {children}
    </code>
  );
}

export function ShowcaseExample({
  id,
  title,
  description,
  preview,
  className,
  code,
}: {
  id?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  preview: React.ReactNode;
  className?: string;
  code?: string;
}) {
  const context = useContext(ShowcaseContext);
  const stableId = id || (typeof title === "string" ? title : null);

  const [copied, setCopied] = useState(false);
  const [localActiveTab, setLocalActiveTab] = useState("preview");

  const activeTab = stableId && context && context.exampleStates[stableId]
    ? context.exampleStates[stableId]
    : localActiveTab;

  const hasCode = code !== undefined;

  const handleTabChange = (value: string) => {
    if (stableId && context) {
      context.setExampleState(stableId, value);
    }
    setLocalActiveTab(value);
  };

  const copyToClipboard = () => {
    if (code) {
      navigator.clipboard.writeText(code);
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
          {title && (
            <h3 className="text-sm font-semibold text-foreground">{title}</h3>
          )}
          {description && (
            <p className="text-[13px] text-muted-foreground leading-relaxed pr-4">
              {description}
            </p>
          )}
        </div>
        {hasCode && (
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
              "relative min-h-30 w-full rounded-2xl bg-muted/30 dark:bg-muted/20 p-4 sm:p-6",
              className,
            )}
          >

            <div className="relative z-10 w-full">{preview}</div>
          </div>
        </TabsContent>

        {hasCode && (
          <TabsContent value="code" className="mt-0 outline-none">
            <div className="relative rounded-2xl bg-muted/30 dark:bg-muted/20 p-4 text-foreground overflow-clip group/code">
              <CodeHighlighter code={code} />
              <Button
                size="sm"
                iconOnly
                variant="soft"
                className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm text-muted-foreground hover:text-foreground shadow-sm"
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

export function ShowcaseExample2({
  id,
  title,
  description,
  microCode,
  microPreview,
  macroCode,
  macroPreview,
  mode,
  className,
}: {
  id?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  microCode?: string;
  microPreview?: React.ReactNode;
  macroCode?: string;
  macroPreview?: React.ReactNode;
  mode: "micro" | "macro";
  className?: string;
}) {
  const code = mode === "micro" ? microCode : macroCode;
  const preview = mode === "micro" ? microPreview : macroPreview;

  if (!preview) return null;

  return (
    <ShowcaseExample
      id={id}
      title={title}
      description={description}
      code={code}
      preview={preview}
      className={className}
    />
  );
}

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


const bgColorMap: Record<(typeof COLORS)[number], string> = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  destructive: "bg-destructive",
  warning: "bg-warning",
  success: "bg-success",
  info: "bg-info",
  tertiary: "bg-tertiary",
};

export function ColorSwatch({ color, className }: { color: (typeof COLORS)[number]; className?: string }) {
  const info = COLOR_INFO[color];
  return (
    <div className={cn("flex flex-col items-center gap-3 p-3.5 sm:p-5 rounded-[2rem] bg-background/40 border border-border/50 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/30 group", className)}>
      <div
        className={cn(
          "h-12 w-12 sm:h-16 sm:w-16 rounded-2xl border border-border shadow-inner transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:rounded-[2rem]",
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

export interface ShowcaseProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  guideline?: React.ReactNode;
  actions?: React.ReactNode;
  micro?: {
    content: React.ReactNode;
    useCaseComparison?: React.ReactNode;
  };
  macro?: {
    content: React.ReactNode;
    useCaseComparison?: React.ReactNode;
  };
  className?: string;
}

export function Showcase({
  title,
  description,
  guideline,
  actions,
  micro,
  macro,
  className,
}: ShowcaseProps) {
  const t = useI18n();
  const hasTabs = !!micro && !!macro;

  const [exampleStates, setExampleStates] = useState<Record<string, string>>({});
  const setExampleState = (id: string, state: string) => {
    setExampleStates(prev => ({ ...prev, [id]: state }));
  };

  const renderTabContent = (tab?: { content: React.ReactNode; useCaseComparison?: React.ReactNode }) => {
    if (!tab) return null;
    return (
      <div className="space-y-10">
        {tab.content}
        {tab.useCaseComparison && (
          <div className="mt-16">
            {tab.useCaseComparison}
          </div>
        )}
      </div>
    );
  };

  return (
    <ShowcaseContext.Provider value={{ exampleStates, setExampleState }}>
      <div
        className={cn(
          "flex flex-col items-start",
          className,
        )}
      >
        <SectionHeader title={title} description={description}>
          {actions}
        </SectionHeader>

        {guideline && <div className="w-full">{guideline}</div>}

        <div className="w-full">
          {hasTabs ? (
            <Tabs
              defaultValue="macro"
              className="flex w-full flex-col gap-6"
            >
              <TabsList>
                {macro && (
                  <TabsTrigger value="macro" className="px-4 py-1.5">
                    Macro
                  </TabsTrigger>
                )}
                {micro && (
                  <TabsTrigger value="micro" className="px-4 py-1.5">
                    Micro
                  </TabsTrigger>
                )}
              </TabsList>

              <TabsContent value="macro" className="mt-0 focus-visible:outline-none">
                {renderTabContent(macro)}
              </TabsContent>
              <TabsContent value="micro" className="mt-0 focus-visible:outline-none">
                {renderTabContent(micro)}
              </TabsContent>
            </Tabs>
          ) : (
            <div className="w-full pt-4">{renderTabContent(macro || micro)}</div>
          )}
        </div>
      </div>
    </ShowcaseContext.Provider>
  );
}

export function SizeToggle({
  value,
  onValueChange,
  className,
}: {
  value: Size;
  onValueChange: (size: Size) => void;
  className?: string;
}) {
  const sizes: Size[] = ["sm", "md", "lg"];
  return (
    <div className={cn("flex h-8 items-center rounded-md border border-border bg-muted/50 p-1", className)}>
      {sizes.map((size) => (
        <button
          key={size}
          onClick={() => onValueChange(size)}
          className={cn(
            "flex items-center justify-center rounded-sm px-2.5 text-xs font-mono font-medium transition-all",
            {
              "bg-background text-foreground shadow-sm": value === size,
              "text-muted-foreground hover:bg-muted hover:text-foreground": value !== size,
            }
          )}
        >
          {size}
        </button>
      ))}
    </div>
  );
}

export type ShowcaseExampleItem = {
  id?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  microCode?: string;
  microPreview?: React.ReactNode;
  macroCode?: string;
  macroPreview?: React.ReactNode;
  className?: string;
};

export interface ConfigurableShowcaseProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  guideline?: React.ReactNode;
  actions?: React.ReactNode;
  examples: ShowcaseExampleItem[];
  className?: string;
}

export function ConfigurableShowcase({
  title,
  description,
  guideline,
  actions,
  examples,
  className,
}: ConfigurableShowcaseProps) {
  const [exampleStates, setExampleStates] = useState<Record<string, string>>({});
  const setExampleState = (id: string, state: string) => {
    setExampleStates((prev) => ({ ...prev, [id]: state }));
  };

  return (
    <ShowcaseContext.Provider value={{ exampleStates, setExampleState }}>
      <div
        className={cn(
          "flex flex-col",
          className,
        )}
      >
        <SectionHeader title={title} description={description}>
          {actions}
        </SectionHeader>

        {guideline && <div className="mt-4">{guideline}</div>}

        <div className="mt-8 space-y-10">
          <ExampleGrid>
            {examples.map((ex, i) => (
              <UnifiedShowcaseExample key={i} {...ex} />
            ))}
          </ExampleGrid>
        </div>
      </div>
    </ShowcaseContext.Provider>
  );
}

function UnifiedShowcaseExample({
  id,
  title,
  description,
  microCode,
  microPreview,
  macroCode,
  macroPreview,
  className,
}: ShowcaseExampleItem) {
  const context = useContext(ShowcaseContext);
  const stableId = id || (typeof title === "string" ? title : null);

  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [localActiveTab, setLocalActiveTab] = useState("preview");

  const activeTab = stableId && context && context.exampleStates[stableId]
    ? context.exampleStates[stableId]
    : localActiveTab;

  const handleTabChange = (value: string) => {
    if (stableId && context) {
      context.setExampleState(stableId, value);
    }
    setLocalActiveTab(value);
  };

  const copyToClipboard = (codeToCopy?: string) => {
    if (codeToCopy) {
      navigator.clipboard.writeText(codeToCopy);
      setCopiedCode(codeToCopy);
      setTimeout(() => setCopiedCode(null), 2000);
    }
  };

  const preview = macroPreview || microPreview;
  const hasMacroCode = !!macroCode;
  const hasMicroCode = !!microCode;
  const hasAnyCode = hasMacroCode || hasMicroCode;

  if (!preview) return null;

  return (
    <Tabs
      value={activeTab}
      onValueChange={handleTabChange}
      className="flex w-full flex-col gap-3"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-0.5">
          {title && (
            <h3 className="text-sm font-semibold text-foreground">{title}</h3>
          )}
          {description && (
            <p className="text-[13px] text-muted-foreground leading-relaxed pr-4">
              {description}
            </p>
          )}
        </div>
        {hasAnyCode && (
          <TabsList className="h-8 shrink-0">
            <TabsTrigger value="preview" className="text-xs px-3 py-1">
              Preview
            </TabsTrigger>
            {hasMacroCode && (
              <TabsTrigger value="macro-code" className="text-xs px-3 py-1">
                Macro Code
              </TabsTrigger>
            )}
            {hasMicroCode && (
              <TabsTrigger value="micro-code" className="text-xs px-3 py-1">
                Micro Code
              </TabsTrigger>
            )}
          </TabsList>
        )}
      </div>

      <div className="relative w-full">
        <TabsContent value="preview" className="mt-0 outline-none">
          <div
            className={cn(
              "relative min-h-30 w-full rounded-2xl bg-muted/30 dark:bg-muted/20 p-4 sm:p-6",
              className,
            )}
          >
            <div className="relative z-10 w-full">{preview}</div>
          </div>
        </TabsContent>

        {hasMacroCode && (
          <TabsContent value="macro-code" className="mt-0 outline-none">
            <div className="relative rounded-2xl bg-muted/30 dark:bg-muted/20 p-4 text-foreground overflow-clip group/code">
              <CodeHighlighter code={macroCode} />
              <Button
                size="sm"
                iconOnly
                variant="soft"
                className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm text-muted-foreground hover:text-foreground shadow-sm"
                onClick={() => copyToClipboard(macroCode)}
              >
                {copiedCode === macroCode ? (
                  <CheckIcon className="size-4 text-green-500" />
                ) : (
                  <CopyIcon className="size-4" />
                )}
              </Button>
            </div>
          </TabsContent>
        )}

        {hasMicroCode && (
          <TabsContent value="micro-code" className="mt-0 outline-none">
            <div className="relative rounded-2xl bg-muted/30 dark:bg-muted/20 p-4 text-foreground overflow-clip group/code">
              <CodeHighlighter code={microCode} />
              <Button
                size="sm"
                iconOnly
                variant="soft"
                className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm text-muted-foreground hover:text-foreground shadow-sm"
                onClick={() => copyToClipboard(microCode)}
              >
                {copiedCode === microCode ? (
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
