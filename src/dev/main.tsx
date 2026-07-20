import { useEffect } from "react";
import { ThemeProvider, useTheme } from "../components/micro/theme-provider";
import App from "../dev/App";
import { DevContextProvider } from "../dev/components/dev-context";
import "../dev/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

/** Syncs the theme class to <html> — this is a Macro concern, done here for the dev playground. */
function RootThemeSync() {
  const theme = useTheme();
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme?.mode === "dark");
    root.classList.toggle("light", theme?.mode === "light");
  }, [theme?.mode]);
  return null;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultMode="light">
      <RootThemeSync />
      <DevContextProvider>
        <App />
      </DevContextProvider>
    </ThemeProvider>
  </StrictMode>,
);

