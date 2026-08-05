import { test, expect } from '@playwright/experimental-ct-react';
import * as React from 'react';
import {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
} from '../../src/components/micro/select';

test.describe('Select (Micro)', () => {
  test('opens on click and allows selection', async ({ mount, page }) => {
    let selectedValue = '';
    
    await mount(
      <Select onValueChange={(v) => { selectedValue = v; }}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    );

    const trigger = page.locator('[data-slot="select-trigger"]');
    await expect(trigger).toBeVisible();

    // Content should be hidden initially
    const content = page.locator('[data-slot="select-content"]');
    await expect(content).toBeHidden();

    // Click to open
    await trigger.click();
    await expect(content).toBeVisible();

    // Select Banana
    const bananaItem = page.getByRole('option', { name: 'Banana' });
    await expect(bananaItem).toBeVisible();
    await bananaItem.click();

    // Ensure it closes
    await expect(content).toBeHidden();
    
    // Ensure value is updated
    expect(selectedValue).toBe('banana');
    
    // The trigger should display the selected value
    await expect(trigger).toHaveText(/Banana/i);
  });

  test('keyboard navigation and selection', async ({ mount, page }) => {
    await mount(
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    );

    const trigger = page.locator('[data-slot="select-trigger"]');
    
    // Focus trigger
    await trigger.focus();
    
    // Open with Enter or Space
    await page.keyboard.press('Enter');
    
    const content = page.locator('[data-slot="select-content"]');
    await expect(content).toBeVisible();

    // Arrow down to select second item
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    
    // Select with Enter
    await page.keyboard.press('Enter');
    
    await expect(content).toBeHidden();
    await expect(trigger).toHaveText(/Blueberry/i);
  });

  test('respects disabled state on items', async ({ mount, page }) => {
    await mount(
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana" disabled>Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
        </SelectContent>
      </Select>
    );

    const trigger = page.locator('[data-slot="select-trigger"]');
    await trigger.click();

    const content = page.locator('[data-slot="select-content"]');
    await expect(content).toBeVisible();

    const bananaItem = page.getByRole('option', { name: 'Banana' });
    await expect(bananaItem).toHaveAttribute('aria-disabled', 'true');
    
    // Try to click disabled item
    await bananaItem.click({ force: true });
    
    // Menu should still be open because disabled items don't trigger selection/close
    await expect(content).toBeVisible();
    await expect(trigger).not.toHaveText(/Banana/i);
  });
});

test.describe('Select Visual Snapshots', () => {
  test('matches visual snapshot when open', async ({ mount, page }) => {
    const component = await mount(
      <div className="flex h-[300px] w-[300px] items-start justify-center p-8 bg-background">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a timezone" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>North America</SelectLabel>
              <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
              <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
              <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
              <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
            </SelectGroup>
            <SelectSeparator />
            <SelectGroup>
              <SelectLabel>Europe</SelectLabel>
              <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
              <SelectItem value="cet">Central European Time (CET)</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    );

    const trigger = page.locator('[data-slot="select-trigger"]');
    await trigger.click();

    // Wait for the content to be visible
    const content = page.locator('[data-slot="select-content"]');
    await expect(content).toBeVisible();

    await expect(component).toHaveScreenshot('select-open.png', {
      maxDiffPixelRatio: 0.02,
    });
  });
});
