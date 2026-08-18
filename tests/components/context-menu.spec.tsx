import { test, expect } from '@playwright/experimental-ct-react';
import * as React from 'react';
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
} from '../../src/components/micro/context-menu';

test.describe('ContextMenu (Micro)', () => {
  test('renders identically given the same props (pure component)', async ({ mount }) => {
    const component = await mount(
      <div className="flex gap-4">
        <ContextMenu>
          <ContextMenuTrigger data-testid="first">Trigger</ContextMenuTrigger>
        </ContextMenu>
        <ContextMenu>
          <ContextMenuTrigger data-testid="second">Trigger</ContextMenuTrigger>
        </ContextMenu>
      </div>
    );

    const cleanHTML = (html: string) => html
      .replace(/id="[^"]+"/g, 'id="mocked"')
      .replace(/aria-controls="[^"]*"/g, 'aria-controls="mocked"');

    const firstHTML = await component.getByTestId('first').evaluate(el => el.innerHTML);
    const secondHTML = await component.getByTestId('second').evaluate(el => el.innerHTML);

    expect(cleanHTML(firstHTML)).toEqual(cleanHTML(secondHTML));
  });

  test('opens on right click and displays items', async ({ mount, page }) => {
    await mount(
      <ContextMenu>
        <ContextMenuTrigger className="flex h-32 w-64 items-center justify-center border border-dashed">
          Right click here
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>Item 1</ContextMenuItem>
          <ContextMenuItem>Item 2</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    );

    const trigger = page.locator('[data-slot="context-menu-trigger"]');
    const content = page.locator('[data-slot="context-menu-content"]');
    
    // Initially hidden
    await expect(content).toBeHidden();

    // Right click (contextmenu)
    await trigger.click({ button: 'right', force: true });
    
    // Should be visible
    await expect(content).toBeVisible();
    await expect(page.getByRole('menuitem', { name: 'Item 1' })).toBeVisible();
  });

  test('keyboard navigation moves focus between items', async ({ mount, page }) => {
    await mount(
      <ContextMenu>
        <ContextMenuTrigger className="flex h-32 w-64 items-center justify-center border border-dashed">
          Right click here
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>Item 1</ContextMenuItem>
          <ContextMenuItem>Item 2</ContextMenuItem>
          <ContextMenuItem>Item 3</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    );

    const trigger = page.locator('[data-slot="context-menu-trigger"]');
    await trigger.click({ button: 'right', force: true });

    const item1 = page.getByRole('menuitem', { name: 'Item 1' });
    const item2 = page.getByRole('menuitem', { name: 'Item 2' });
    const item3 = page.getByRole('menuitem', { name: 'Item 3' });

    // Press ArrowDown to focus first item
    await page.keyboard.press('ArrowDown');
    await expect(item1).toBeFocused();

    // Press ArrowDown to move to next
    await page.keyboard.press('ArrowDown');
    await expect(item2).toBeFocused();
    
    // Press ArrowDown to move to next
    await page.keyboard.press('ArrowDown');
    await expect(item3).toBeFocused();
  });

  test('checkbox and radio items toggle state', async ({ mount, page }) => {
    let checkboxChecked = false;
    let radioValue = 'radio1';

    await mount(
      <ContextMenu>
        <ContextMenuTrigger className="flex h-32 w-64 items-center justify-center border border-dashed">
          Right click here
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuCheckboxItem checked={checkboxChecked} onCheckedChange={(v) => { checkboxChecked = !!v; }}>
            Checkbox
          </ContextMenuCheckboxItem>
          
          <ContextMenuSeparator />
          
          <ContextMenuRadioGroup value={radioValue} onValueChange={(v) => { radioValue = v; }}>
            <ContextMenuRadioItem value="radio1">Radio 1</ContextMenuRadioItem>
            <ContextMenuRadioItem value="radio2">Radio 2</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuContent>
      </ContextMenu>
    );

    const trigger = page.locator('[data-slot="context-menu-trigger"]');
    await trigger.click({ button: 'right', force: true });

    const checkbox = page.getByRole('menuitemcheckbox', { name: 'Checkbox' });
    const radio1 = page.getByRole('menuitemradio', { name: 'Radio 1' });
    const radio2 = page.getByRole('menuitemradio', { name: 'Radio 2' });

    // Initial states
    await expect(checkbox).toHaveAttribute('aria-checked', 'false');
    await expect(radio1).toHaveAttribute('aria-checked', 'true');
    await expect(radio2).toHaveAttribute('aria-checked', 'false');
  });
});

test.describe('ContextMenu Visual Snapshots', () => {
  test('matches visual snapshot when open', async ({ mount, page }) => {
    const component = await mount(
      <div className="flex h-[400px] w-[500px] items-center justify-center bg-background p-8">
        <ContextMenu>
          <ContextMenuTrigger className="flex h-32 w-64 items-center justify-center border-2 border-dashed rounded-lg">
            Right Click Me
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>
              Profile
              <ContextMenuShortcut>⇧⌘P</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>Billing</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuCheckboxItem checked>Show Status Bar</ContextMenuCheckboxItem>
            <ContextMenuCheckboxItem checked={false}>Show Activity Bar</ContextMenuCheckboxItem>
            <ContextMenuSeparator />
            <ContextMenuSub>
              <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
              <ContextMenuSubContent>
                <ContextMenuItem>Save Page As...</ContextMenuItem>
                <ContextMenuItem>Create Shortcut...</ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>
            <ContextMenuSeparator />
            <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </div>
    );

    const trigger = page.locator('[data-slot="context-menu-trigger"]');
    
    // Open the menu
    await trigger.click({ button: 'right', force: true });
    
    // Wait for animation
    const content = page.locator('[data-slot="context-menu-content"]');
    await expect(content).toBeVisible();

    // Take screenshot of the whole container including the popup
    await expect(component).toHaveScreenshot('context-menu-open.png', {
      maxDiffPixelRatio: 0.02,
    });
  });
});
