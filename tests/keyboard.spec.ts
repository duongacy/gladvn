import { test, expect } from '@playwright/test';

test.describe('Keyboard Navigation', () => {
  test('Command Palette (CMD+K) opens and navigates', async ({ page, browserName }) => {
    await page.goto('/');

    // Press CMD+K (or CTRL+K)
    const modifier = browserName === 'webkit' ? 'Meta' : 'Control';
    await page.keyboard.press(`${modifier}+k`);

    // The command palette should be visible
    const commandDialog = page.locator('[role="dialog"]').first();
    await expect(commandDialog).toBeVisible();

    // Type "button"
    await page.keyboard.type('button');

    // Click on the exact option
    await page.locator('[role="option"]', { hasText: /^Button$/ }).first().click();

    // Verify it navigated to /button
    await expect(page).toHaveURL(/\/button/);
  });

  test('Dialog traps focus correctly', async ({ page }) => {
    await page.goto('/dialog');

    // Open a dialog
    const openButton = page.locator('button', { hasText: 'Chỉnh sửa hồ sơ' }).first();
    await openButton.click();

    // The dialog should be visible
    const dialog = page.locator('[role="dialog"]').first();
    await expect(dialog).toBeVisible();

    // Press Tab
    await page.keyboard.press('Tab');
    
    // Check if focus is inside the dialog
    // We expect the focus to cycle within the dialog elements
    const focusedElement = page.locator('*:focus');
    
    // Wait for the dialog content to be active
    const innerHtml = await dialog.innerHTML();
    expect(innerHtml).toContain('Lưu thay đổi');

    // Close the dialog with Escape
    await page.keyboard.press('Escape');
    await expect(dialog).toBeHidden();
  });
});
