/**
 * ThemeProvider — Micro primitive.
 *
 * Supports both **uncontrolled** and **controlled** modes:
 *
 * - **Uncontrolled**: pass `defaultMode` (optional). Internal state manages
 *   the current mode. Children call `setMode()` via `useTheme()`.
 * - **Controlled**: pass `mode` + `onModeChange`. The caller owns the state;
 *   `setMode()` inside the context delegates to `onModeChange`.
 *
 * Does NOT read localStorage, system preference, or sync to <html>.
 * All of that belongs to Macro layer (e.g. a ThemeManager preset).
 */
"use client";

import * as React from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type ThemeMode = "light" | "dark";

type ThemeContextValue = {
  /** The currently active mode. */
  mode: ThemeMode;
  /** Change the mode. In controlled usage this calls `onModeChange`. */
  setMode: (mode: ThemeMode) => void;
};

// ─── Context ──────────────────────────────────────────────────────────────────

const ThemeContext = React.createContext<ThemeContextValue | undefined>(
  undefined,
);

// ─── useTheme ─────────────────────────────────────────────────────────────────

/**
 * Read and control the nearest ThemeProvider.
 * Returns `undefined` when no provider is found in the tree.
 *
 * @example
 * ```tsx
 * const theme = useTheme();
 * theme?.setMode("dark");
 * console.log(theme?.mode); // "light" | "dark"
 * ```
 */
function useTheme(): ThemeContextValue | undefined {
  return React.useContext(ThemeContext);
}

// ─── ThemeProvider ────────────────────────────────────────────────────────────

type ThemeProviderProps = {
  children: React.ReactNode;
} & (
  | {
      /** Uncontrolled: starting mode. Defaults to "light". */
      defaultMode?: ThemeMode;
      mode?: never;
      onModeChange?: never;
    }
  | {
      /** Controlled: current mode owned by the caller. */
      mode: ThemeMode;
      /** Called when children request a mode change via `setMode()`. */
      onModeChange: (mode: ThemeMode) => void;
      defaultMode?: never;
    }
);

/**
 * ThemeProvider — wraps children in a `display: contents` div with the
 * `.dark` or `.light` class applied, enabling CSS variable cascade without
 * affecting layout.
 *
 * @example Uncontrolled
 * ```tsx
 * <ThemeProvider defaultMode="dark">
 *   <App />
 * </ThemeProvider>
 * ```
 *
 * @example Controlled
 * ```tsx
 * const [mode, setMode] = useState<ThemeMode>("light");
 *
 * <ThemeProvider mode={mode} onModeChange={setMode}>
 *   <App />
 * </ThemeProvider>
 * ```
 */
function ThemeProvider({
  children,
  defaultMode,
  mode: controlledMode,
  onModeChange,
}: ThemeProviderProps) {
  const isControlled = controlledMode !== undefined;

  const [internalMode, setInternalMode] = React.useState<ThemeMode>(
    defaultMode ?? "light",
  );

  const mode = isControlled ? controlledMode : internalMode;

  const setMode = React.useCallback(
    (next: ThemeMode) => {
      if (isControlled) {
        onModeChange!(next);
      } else {
        setInternalMode(next);
      }
    },
    [isControlled, onModeChange],
  );

  const value = React.useMemo<ThemeContextValue>(
    () => ({ mode, setMode }),
    [mode, setMode],
  );

  return (
    <ThemeContext.Provider value={value}>
      <div className={mode} style={{ display: "contents" }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

ThemeProvider.displayName = "ThemeProvider";

// ─── ThemeWrapper ─────────────────────────────────────────────────────────────

/**
 * ThemeWrapper — re-applies the current theme class inside a Portal.
 * Used internally by Dialog, Tooltip, Popover, etc. to tunnel the theme
 * across the Portal boundary.
 *
 * Falls back gracefully (renders children as-is) when no ThemeProvider
 * is found in the tree.
 */
function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const theme = useTheme();

  if (!theme) {
    return <>{children}</>;
  }

  return (
    <div className={theme.mode} style={{ display: "contents" }}>
      {children}
    </div>
  );
}

ThemeWrapper.displayName = "ThemeWrapper";

// ─── Exports ──────────────────────────────────────────────────────────────────

export { ThemeProvider, ThemeWrapper, useTheme };
export type { ThemeMode };
