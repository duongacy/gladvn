import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/dev/index.css";
import App from "@/dev/App";
import { ThemeProvider } from "@/components/micro/theme-provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider initialMode="light" isRoot>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
