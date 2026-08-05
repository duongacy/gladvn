import { test, expect } from '@playwright/experimental-ct-react';
import * as React from 'react';
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
} from '../../src/components/micro/command';

test.describe('Command (Micro)', () => {
  test('renders identically given the same props (pure component)', async ({ mount }) => {
    const component = await mount(
      <div className="flex gap-4">
        <Command data-testid="first">
          <CommandInput placeholder="A" />
          <CommandList>
            <CommandItem>B</CommandItem>
          </CommandList>
        </Command>
        <Command data-testid="second">
          <CommandInput placeholder="A" />
          <CommandList>
            <CommandItem>B</CommandItem>
          </CommandList>
        </Command>
      </div>
    );

    const cleanHTML = (html: string) => html
      .replace(/id="[^"]+"/g, 'id="mocked"')
      .replace(/aria-controls="[^"]*"/g, 'aria-controls="mocked"')
      .replace(/for="[^"]+"/g, 'for="mocked"')
      .replace(/aria-labelledby="[^"]+"/g, 'aria-labelledby="mocked"');

    const firstHTML = await component.getByTestId('first').evaluate(el => el.innerHTML);
    const secondHTML = await component.getByTestId('second').evaluate(el => el.innerHTML);

    expect(cleanHTML(firstHTML)).toEqual(cleanHTML(secondHTML));
  });

  test('filters items when typing in CommandInput', async ({ mount, page }) => {
    await mount(
      <Command className="w-64 border rounded-lg">
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Fruits">
            <CommandItem>Apple</CommandItem>
            <CommandItem>Banana</CommandItem>
            <CommandItem>Cherry</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    );

    const input = page.getByPlaceholder('Search...');
    const items = page.locator('[data-slot="command-item"]');

    // All 3 items visible initially
    await expect(items).toHaveCount(3);

    // Type "ban" → only Banana visible
    await input.fill('ban');
    await expect(items).toHaveCount(1);
    await expect(items.first()).toHaveText('Banana');

    // Type something that matches nothing
    await input.fill('xyz');
    await expect(items).toHaveCount(0);
    await expect(page.getByText('No results found.')).toBeVisible();
  });

  test('arrow keys navigate items and set selected state', async ({ mount, page }) => {
    await mount(
      <Command className="w-64 border rounded-lg">
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandGroup>
            <CommandItem>Alpha</CommandItem>
            <CommandItem>Beta</CommandItem>
            <CommandItem>Gamma</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    );

    const input = page.getByPlaceholder('Search...');
    const items = page.locator('[data-slot="command-item"]');

    await input.focus();

    // cmdk auto-selects first item
    await expect(items.nth(0)).toHaveAttribute('aria-selected', 'true');

    // ArrowDown to Beta
    await page.keyboard.press('ArrowDown');
    await expect(items.nth(1)).toHaveAttribute('aria-selected', 'true');
    await expect(items.nth(0)).toHaveAttribute('aria-selected', 'false');

    // ArrowDown to Gamma
    await page.keyboard.press('ArrowDown');
    await expect(items.nth(2)).toHaveAttribute('aria-selected', 'true');

    // ArrowUp back to Beta
    await page.keyboard.press('ArrowUp');
    await expect(items.nth(1)).toHaveAttribute('aria-selected', 'true');
  });

  test('disabled items have data-disabled and are skipped by keyboard', async ({ mount, page }) => {
    await mount(
      <Command className="w-64 border rounded-lg">
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandGroup>
            <CommandItem>First</CommandItem>
            <CommandItem disabled>Disabled Item</CommandItem>
            <CommandItem>Third</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    );

    const input = page.getByPlaceholder('Search...');
    const items = page.locator('[data-slot="command-item"]');

    // Disabled item should have data-disabled
    await expect(items.nth(1)).toHaveAttribute('data-disabled', 'true');

    await input.focus();

    // First item selected
    await expect(items.nth(0)).toHaveAttribute('aria-selected', 'true');

    // ArrowDown should SKIP disabled and go to Third
    await page.keyboard.press('ArrowDown');
    await expect(items.nth(2)).toHaveAttribute('aria-selected', 'true');
    await expect(items.nth(1)).toHaveAttribute('aria-selected', 'false');
  });

  test('CommandShortcut renders inside CommandItem', async ({ mount, page }) => {
    await mount(
      <Command className="w-64 border rounded-lg">
        <CommandList>
          <CommandGroup>
            <CommandItem>
              Save
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    );

    const shortcut = page.locator('[data-slot="command-shortcut"]');
    await expect(shortcut).toBeVisible();
    await expect(shortcut).toHaveText('⌘S');
  });
});

test.describe('Command Visual Snapshots', () => {
  const SIZES = ['sm', 'md', 'lg'] as const;

  test('matches visual matrix snapshot', async ({ mount }) => {
    const component = await mount(
      <div className="flex flex-wrap gap-8 p-8 bg-background items-start">
        {SIZES.map((size) => (
          <div key={size} className="space-y-2">
            <h3 className="font-bold text-muted-foreground text-sm">Size: {size}</h3>
            <Command size={size} className="w-64 border rounded-lg shadow-sm">
              <CommandInput placeholder="Type a command..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                  <CommandItem>
                    Calendar
                    <CommandShortcut>⌘K</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    Search
                    <CommandShortcut>⌘S</CommandShortcut>
                  </CommandItem>
                  <CommandItem disabled>
                    Disabled
                  </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Settings">
                  <CommandItem>Profile</CommandItem>
                  <CommandItem>Billing</CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </div>
        ))}
      </div>
    );

    await expect(component).toHaveScreenshot('command-matrix.png', {
      maxDiffPixelRatio: 0.01,
    });
  });
});
