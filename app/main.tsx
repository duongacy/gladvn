import { StrictMode, useEffect } from "react";

import { createRoot } from "react-dom/client";

import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import { ThemeProvider, useTheme } from "@/components/micro/theme-provider";
import App from "./App";
import { DevContextProvider } from "~app/components/dev-context";
import "./index.css";

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
