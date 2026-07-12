import { ThemeProvider } from "../components/micro/theme-provider";
import App from "../dev/App";
import { DevContextProvider } from "../dev/components/dev-context";
import "../dev/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider initialMode="light" isRoot>
      <DevContextProvider>
        <App />
      </DevContextProvider>
    </ThemeProvider>
  </StrictMode>,
);
