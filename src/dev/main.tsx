import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "../../src/index";
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider initialMode="light" isRoot>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
