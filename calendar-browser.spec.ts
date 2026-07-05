import { test, expect } from '@playwright/test';

test('calendar showcase should not have console errors', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (exception) => {
    errors.push(exception.message);
  });
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      errors.push(msg.text());
    }
  });

  await page.goto('http://localhost:5173/?component=calendar');
  
  // wait a bit for rendering
  await page.waitForTimeout(2000);
  
  if (errors.length > 0) {
    console.error("BROWSER ERRORS:", errors);
    throw new Error("Found console errors");
  }
});
