import React, { useState } from "react";
import reactElementToJSXString from "react-element-to-jsx-string";
import { Tabs, TabsList, TabsTrigger, TabsContent, Button } from "@/index";
import { CopyIcon, CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { COLORS, COLOR_INFO } from "@/dev/data";

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
}: {
  label?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  const codeString = (typeof reactElementToJSXString === 'function' ? reactElementToJSXString : (reactElementToJSXString as any).default)(children, {
    showFunctions: true,
    showDefaultProps: false,
    useBooleanShorthandSyntax: true,
    maxInlineAttributesLineLength: 80,
  });

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col gap-3">
      {(label || description) && (
        <div className="flex flex-col gap-0.5">
          {label && (
            <h3 className="text-sm font-semibold text-foreground">{label}</h3>
          )}
          {description && (
            <p className="text-[13px] text-muted-foreground">{description}</p>
          )}
        </div>
      )}
      
      <Tabs defaultValue="preview" className="w-full relative">
        <div className="flex items-center justify-end mb-2 absolute -top-10 right-0">
          <TabsList className="h-8">
            <TabsTrigger value="preview" className="text-xs px-3 py-1">Preview</TabsTrigger>
            <TabsTrigger value="code" className="text-xs px-3 py-1">Code</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="preview" className="mt-0 outline-none">
          <div
            className={cn(
              "relative flex items-center justify-center rounded-2xl border border-border/80 bg-background/50 backdrop-blur-sm p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-ring/30",
              "min-h-[120px]",
              fullWidth && "[&>*]:w-full",
              className,
            )}
          >
            <div className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.05] [background-size:24px_24px] [background-image:radial-gradient(circle_at_center,var(--color-foreground)_1.5px,transparent_1.5px)]" />
            <div className="relative z-10 flex w-full items-center justify-center">
              {children}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="code" className="mt-0 outline-none">
          <div className="relative rounded-2xl border border-border/80 bg-muted/50 p-4 text-foreground shadow-sm overflow-hidden">
            <Button
              size="sm"
              variant="ghost"
              className="absolute top-3 right-3 h-7 w-7 text-muted-foreground hover:text-foreground hover:bg-muted"
              onClick={copyToClipboard}
            >
              {copied ? <CheckIcon className="size-3.5" /> : <CopyIcon className="size-3.5" />}
            </Button>
            <div className="overflow-x-auto text-[13px] leading-relaxed font-mono">
              <pre className="!bg-transparent !p-0 !m-0 whitespace-pre-wrap break-words">
                <code>{codeString}</code>
              </pre>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   ExampleGrid  –  responsive columns for multiple examples
   ────────────────────────────────────────────────────────── */
export function ExampleGrid({
  children,
  columns = 2,
  className,
}: {
  children: React.ReactNode;
  columns?: 1 | 2 | 3;
  className?: string;
}) {
  const colClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
  };
  return (
    <div className={cn("grid gap-6", colClasses[columns], className)}>
      {children}
    </div>
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
    <div className="flex flex-col gap-1.5 items-center">
      <div
        className={`h-10 w-10 rounded-lg border shadow-sm ${bgColorMap[color]}`}
      />
      <span className="text-[10px] font-medium text-muted-foreground">
        {info.label}
      </span>
    </div>
  );
}
