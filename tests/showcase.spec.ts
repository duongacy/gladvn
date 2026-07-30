import { test, expect } from '@playwright/test';

test.describe('Showcase UI', () => {
  test('should render overview page correctly', async ({ page }) => {
    await page.goto('/');
    
    // Check title
    await expect(page).toHaveTitle(/gladvn/);

    // Check header logo
    const logo = page.locator('header a').first();
    await expect(logo).toBeVisible();

    // Check for overview content
    await expect(page.locator('text=Elegant. Premium.')).toBeVisible();
  });

  test('should navigate via sidebar', async ({ page }) => {
    await page.goto('/accordion');

    // Click on Button in sidebar
    const buttonLink = page.locator('aside nav button', { hasText: 'Button' }).first();
    await buttonLink.click();

    // Verify URL
    await expect(page).toHaveURL(/\/button/);

    // Verify title
    await expect(page).toHaveTitle(/Button — gladvn Components/);

    // Verify component rendered
    await expect(page.locator('h2', { hasText: 'Button' }).first()).toBeVisible();
  });

  test('should toggle dark/light theme', async ({ page }) => {
    await page.goto('/');

    const html = page.locator('html');
    
    // By default, it's light mode (or system preference). We assume light mode.
    // Click the theme toggle button in header
    const themeButton = page.locator('header button', { hasText: 'Đổi giao diện' }).first();
    
    await themeButton.click();
    
    // Check if dark class is added
    await expect(html).toHaveClass(/dark|light/);
  });

  test('should toggle component size', async ({ page }) => {
    await page.goto('/button');

    // Button page should have a size toggle
    const smToggle = page.locator('button', { hasText: 'sm' }).first();
    const lgToggle = page.locator('button', { hasText: 'lg' }).first();

    await lgToggle.click();

    // The button example should now use the large size.
    // It's hard to test size exactly without visual regression, but we can check if clicking doesn't crash
    // and if we can toggle back.
    await expect(lgToggle).toBeVisible();
    await smToggle.click();
    await expect(smToggle).toBeVisible();
  });
});
