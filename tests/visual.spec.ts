import { test, expect } from '@playwright/test';

test.describe('Visual Regression', () => {
  test('Overview page matches snapshot', async ({ page }) => {
    await page.goto('/');
    // Wait for the overview content to fully load
    await page.waitForSelector('text=Tinh tế. Đẳng cấp.', { state: 'visible' });

    // Hide any dynamic or flaky elements if there are any (e.g. scrollbars)
    // Then take screenshot
    await expect(page).toHaveScreenshot('overview-page.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.05 // Allow 5% diff for minor font rendering differences
    });
  });

  test('Button page matches snapshot', async ({ page }) => {
    await page.goto('/button');

    // Wait for the first button to render
    await page.waitForSelector('button:has-text("Button")', { state: 'visible' });

    // Take a screenshot of the main content area to avoid sidebar scrolling flakiness
    const mainContent = page.locator('main').first();
    await expect(mainContent).toHaveScreenshot('button-components.png', {
      maxDiffPixelRatio: 0.05
    });
  });
});
