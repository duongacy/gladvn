import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@/index";
import "@/dev/index.css";
import App from "@/dev/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider initialMode="light" isRoot>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
