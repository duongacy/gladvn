"use client";

import * as React from "react";

type ThemeMode = "light" | "dark";

type ThemeContextValue = {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
};

const ThemeContext = React.createContext<ThemeContextValue | undefined>(
  undefined,
);

function useTheme(): ThemeContextValue | undefined {
  return React.useContext(ThemeContext);
}

type ThemeProviderProps = {
  children: React.ReactNode;
} & (
  | {
      defaultMode?: ThemeMode;
      mode?: never;
      onModeChange?: never;
    }
  | {
      mode: ThemeMode;
      onModeChange: (mode: ThemeMode) => void;
      defaultMode?: never;
    }
);

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

  const toggleMode = React.useCallback(() => {
    setMode(mode === "light" ? "dark" : "light");
  }, [mode, setMode]);

  const value = React.useMemo<ThemeContextValue>(
    () => ({ mode, setMode, toggleMode }),
    [mode, setMode, toggleMode],
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

export { ThemeProvider, ThemeWrapper, useTheme };
export type { ThemeMode };
