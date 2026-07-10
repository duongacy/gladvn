import { chromium } from "@playwright/test";

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  page.on("console", (msg) => console.log("BROWSER_LOG:", msg.text()));
  page.on("pageerror", (error) => console.log("BROWSER_ERROR:", error.message));

  try {
    await page.goto("http://localhost:5173/showcase/calendar", {
      waitUntil: "networkidle",
    });
  } catch (e) {
    console.error("FAILED TO LOAD", e);
  }

  await new Promise((r) => setTimeout(r, 2000));
  await browser.close();
})();
