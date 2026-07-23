import { test, expect } from '@playwright/test';

const componentsToTest = [
  'dialog',
  'sheet',
  'tooltip',
  'popover',
  'dropdown-menu',
  'select',
  'combobox',
  'alert-dialog',
  'context-menu',
  'drawer',
  'hover-card',
  'menubar'
];

for (const component of componentsToTest) {
  test(`Test ${component} showcase`, async ({ page }) => {
    const errors = [];
    page.on('pageerror', (err) => {
      errors.push(err.message);
    });

    await page.goto(`http://localhost:5175/?component=${component}`);
    
    // Wait for the showcase to load
    await page.waitForSelector('main', { state: 'visible', timeout: 5000 });
    
    // Check if the vite error overlay is present
    const errorOverlay = await page.$('vite-error-overlay');
    expect(errorOverlay).toBeNull();

    // Try interacting
    const buttons = await page.locator('button').all();
    if (buttons.length > 0) {
      for (let i = 0; i < Math.min(3, buttons.length); i++) {
        try {
          await buttons[i].click({ timeout: 500 });
          await page.waitForTimeout(100);
        } catch {
          // ignore
        }
      }
    }

    expect(errors.length).toBe(0);
  });
}
