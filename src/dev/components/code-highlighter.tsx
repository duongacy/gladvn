import { useEffect, useRef, useState } from "react";
import { createHighlighter, type Highlighter } from "shiki";

// Singleton highlighter — loaded once, reused across all CodeHighlighter instances
let highlighterPromise: Promise<Highlighter> | null = null;

function getHighlighter() {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: ["github-light", "github-dark"],
      langs: ["tsx"],
    });
  }
  return highlighterPromise;
}

export function CodeHighlighter({
  code,
  language = "tsx",
}: {
  code: string;
  language?: "tsx" | "ts" | "css";
}) {
  const [html, setHtml] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;

    getHighlighter().then((highlighter) => {
      if (cancelled) return;

      const result = highlighter.codeToHtml(code, {
        lang: language,
        themes: {
          light: "github-light",
          dark: "github-dark",
        },
        defaultColor: false,
      });

      setHtml(result);
    });

    return () => {
      cancelled = true;
    };
  }, [code, language]);

  if (!html) {
    return (
      <div className="overflow-x-auto text-[13px] leading-relaxed font-mono">
        <pre className="!bg-transparent !p-0 !m-0 whitespace-pre-wrap break-words">
          <code className="text-muted-foreground">Loading...</code>
        </pre>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="code-highlighter overflow-x-auto text-[13px] leading-relaxed"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
