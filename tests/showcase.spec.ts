import { test, expect } from "@playwright/test";
import { ALL_COMPONENTS } from "../src/dev/data";

test.describe("Component Showcase Visual Regression", () => {
  for (const component of ALL_COMPONENTS) {
    test(`Visual test for ${component.label} (${component.id})`, async ({ page }) => {
      // Navigate to the component showcase page
      await page.goto(`/?component=${component.id}`);
      
      // Wait for the main showcase container to be visible
      const mainContainer = page.locator("main");
      await expect(mainContainer).toBeVisible();

      // Wait a short moment for animations/fonts to settle
      await page.waitForTimeout(500);

      // Take a full page screenshot to compare against baseline
      await expect(page).toHaveScreenshot(`${component.id}-showcase.png`, {
        fullPage: true,
      });
    });
  }
});
