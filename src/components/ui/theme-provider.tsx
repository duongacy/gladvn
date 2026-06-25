"use client"

import * as React from "react"

type ThemeMode = "light" | "dark"

interface ThemeContextValue {
  mode: ThemeMode
  setMode: (mode: ThemeMode) => void
}

const ThemeContext = React.createContext<ThemeContextValue | undefined>(
  undefined
)

/**
 * Read the current theme context from the nearest ThemeProvider.
 * Returns `{ mode, setMode }` to read and control the theme.
 * Returns `undefined` if no ThemeProvider is found.
 *
 * @example
 * ```tsx
 * const theme = useTheme()
 * theme?.setMode("dark")
 * ```
 */
function useTheme(): ThemeContextValue | undefined {
  return React.useContext(ThemeContext)
}

/**
 * ThemeProvider — Wraps children in a `display: contents` div with the
 * appropriate `.dark` or `.light` class, enabling CSS variable cascade
 * without affecting layout. Provides `{ mode, setMode }` via context.
 *
 * Always uncontrolled — manages its own state internally. Consumers
 * read and change theme via the `useTheme()` hook.
 *
 * Portal-based components use `ThemeWrapper` to tunnel the theme across
 * the Portal boundary automatically.
 *
 * @param initialMode — The starting theme mode. Default: `"light"`.
 * @param isRoot — When `true`, syncs the theme class to `<html>` for
 *   global coverage (body bg, scrollbar, etc.). Default: `false`.
 *
 * @example
 * ```tsx
 * // Root provider (syncs to <html>)
 * <ThemeProvider initialMode="light" isRoot>
 *   <App />
 * </ThemeProvider>
 *
 * // Partial dark mode
 * <ThemeProvider initialMode="dark">
 *   <Sidebar />
 * </ThemeProvider>
 * ```
 */
function ThemeProvider({
  initialMode = "light",
  isRoot = false,
  children,
}: {
  initialMode?: ThemeMode
  isRoot?: boolean
  children: React.ReactNode
}) {
  const [mode, setMode] = React.useState<ThemeMode>(initialMode)

  // Only sync to <html> when this is the root provider
  React.useEffect(() => {
    if (!isRoot) return
    const root = document.documentElement
    root.classList.toggle("dark", mode === "dark")
    root.classList.toggle("light", mode === "light")
  }, [mode, isRoot])

  const value = React.useMemo<ThemeContextValue>(
    () => ({ mode, setMode }),
    [mode]
  )

  return (
    <ThemeContext.Provider value={value}>
      <div className={mode} style={{ display: "contents" }}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

/**
 * ThemeWrapper — A utility component used internally by Portal-based
 * components to re-apply the theme class on the portal side.
 *
 * If no ThemeProvider is found in the tree, it renders children as-is
 * (no wrapper div), falling back to the global theme on <html>.
 */
function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const theme = useTheme()

  if (!theme) {
    return <>{children}</>
  }

  return (
    <div className={theme.mode} style={{ display: "contents" }}>
      {children}
    </div>
  )
}

export { ThemeProvider, ThemeWrapper, useTheme }
export type { ThemeMode }
