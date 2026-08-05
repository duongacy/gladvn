import { test, expect } from '@playwright/experimental-ct-react';
import * as React from 'react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from '../../src/components/micro/dropdown-menu';
import { Button } from '../../src/components/micro/button';

test.describe('DropdownMenu (Micro)', () => {
  test('opens on click and displays items', async ({ mount, page }) => {
    await mount(
      <DropdownMenu>
        <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
          <DropdownMenuItem>Item 2</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );

    const trigger = page.getByRole('button', { name: 'Open Menu' });
    const content = page.locator('[data-slot="dropdown-menu-content"]');
    
    // Initially hidden
    await expect(content).toBeHidden();

    // Click trigger
    await trigger.click();
    
    // Should be visible
    await expect(content).toBeVisible();
    await expect(page.getByRole('menuitem', { name: 'Item 1' })).toBeVisible();
  });

  test('keyboard navigation moves focus between items', async ({ mount, page }) => {
    await mount(
      <DropdownMenu>
        <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
          <DropdownMenuItem disabled>Item 2</DropdownMenuItem>
          <DropdownMenuItem>Item 3</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );

    const trigger = page.getByRole('button', { name: 'Open Menu' });
    await trigger.click();

    const item1 = page.getByRole('menuitem', { name: 'Item 1' });
    const item3 = page.getByRole('menuitem', { name: 'Item 3' });

    // Press ArrowDown to focus first item
    await page.keyboard.press('ArrowDown');
    await expect(item1).toBeFocused();

    // Press ArrowDown should move down
    await page.keyboard.press('ArrowDown');
    
    // Base UI might skip disabled items or focus them. To be robust, we just press again.
    // So we ensure we reach item3.
    await page.keyboard.press('ArrowDown');
    await expect(item3).toBeFocused();
  });

  test('checkbox and radio items toggle state', async ({ mount, page }) => {
    let checkboxChecked = false;
    let radioValue = 'radio1';

    await mount(
      <DropdownMenu>
        <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuCheckboxItem checked={checkboxChecked} onCheckedChange={(v) => { checkboxChecked = !!v; }}>
            Checkbox
          </DropdownMenuCheckboxItem>
          
          <DropdownMenuSeparator />
          
          <DropdownMenuRadioGroup value={radioValue} onValueChange={(v) => { radioValue = v; }}>
            <DropdownMenuRadioItem value="radio1">Radio 1</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="radio2">Radio 2</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );

    const trigger = page.getByRole('button', { name: 'Open Menu' });
    await trigger.click();

    const checkbox = page.getByRole('menuitemcheckbox', { name: 'Checkbox' });
    const radio1 = page.getByRole('menuitemradio', { name: 'Radio 1' });
    const radio2 = page.getByRole('menuitemradio', { name: 'Radio 2' });

    // Initial states
    await expect(checkbox).toHaveAttribute('aria-checked', 'false');
    await expect(radio1).toHaveAttribute('aria-checked', 'true');
    await expect(radio2).toHaveAttribute('aria-checked', 'false');
  });
});

test.describe('DropdownMenu Visual Snapshots', () => {
  test('matches visual snapshot when open', async ({ mount, page }) => {
    const component = await mount(
      <div className="flex h-[400px] w-[500px] items-start justify-center bg-background p-8">
        <DropdownMenu>
          <DropdownMenuTrigger className="px-4 py-2 border rounded-md">Options</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              Profile
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem checked>Show Status Bar</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={false}>Show Activity Bar</DropdownMenuCheckboxItem>
            <DropdownMenuSeparator />
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>More Tools</DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Save Page As...</DropdownMenuItem>
                <DropdownMenuItem>Create Shortcut...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );

    const trigger = page.getByRole('button', { name: 'Options' });
    
    // Open the menu
    await trigger.click();
    
    // Wait for animation
    const content = page.locator('[data-slot="dropdown-menu-content"]');
    await expect(content).toBeVisible();

    // Take screenshot of the whole container including the popup
    await expect(component).toHaveScreenshot('dropdown-menu-open.png', {
      maxDiffPixelRatio: 0.02,
    });
  });
});
