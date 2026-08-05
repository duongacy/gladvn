import { test, expect } from '@playwright/experimental-ct-react';
import * as React from 'react';
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
} from '../../src/components/micro/menubar';

test.describe('Menubar (Micro)', () => {
  test('renders and opens menus on click', async ({ mount, page }) => {
    await mount(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New Tab</MenubarItem>
            <MenubarItem>New Window</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Undo</MenubarItem>
            <MenubarItem>Redo</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    );

    const fileTrigger = page.getByRole('menuitem', { name: 'File' });
    const editTrigger = page.getByRole('menuitem', { name: 'Edit' });
    
    // Check initial state
    await expect(fileTrigger).toBeVisible();
    await expect(editTrigger).toBeVisible();
    await expect(page.getByRole('menuitem', { name: 'New Tab' })).toBeHidden();

    // Click to open
    await fileTrigger.click();
    await expect(page.getByRole('menuitem', { name: 'New Tab' })).toBeVisible();
    await expect(page.getByRole('menuitem', { name: 'Undo' })).toBeHidden();

    // Hover or click next trigger should open next menu
    // Base UI typically supports hover-to-open sibling menus when one is already active
    await editTrigger.hover();
    
    // Due to differences in how Base UI might implement hover vs click switching, we explicitly click it to be safe in tests
    await editTrigger.click();
    await expect(page.getByRole('menuitem', { name: 'Undo' })).toBeVisible();
    await expect(page.getByRole('menuitem', { name: 'New Tab' })).toBeHidden();
  });

  test('keyboard navigation between menubar triggers', async ({ mount, page }) => {
    await mount(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New Tab</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Undo</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    );

    const fileTrigger = page.getByRole('menuitem', { name: 'File' });
    const editTrigger = page.getByRole('menuitem', { name: 'Edit' });

    await fileTrigger.focus();
    await expect(fileTrigger).toBeFocused();

    // ArrowRight should move to next trigger
    await page.keyboard.press('ArrowRight');
    await expect(editTrigger).toBeFocused();

    // ArrowLeft should move back
    await page.keyboard.press('ArrowLeft');
    await expect(fileTrigger).toBeFocused();
  });
});

test.describe('Menubar Visual Snapshots', () => {
  test('matches visual snapshot when open', async ({ mount, page }) => {
    const component = await mount(
      <div className="flex h-[400px] w-[500px] items-start justify-center bg-background p-8">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                New Window <MenubarShortcut>⌘N</MenubarShortcut>
              </MenubarItem>
              <MenubarItem disabled>New Incognito Window</MenubarItem>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Share</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Email link</MenubarItem>
                  <MenubarItem>Messages</MenubarItem>
                  <MenubarItem>Notes</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarItem>
                Print... <MenubarShortcut>⌘P</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Edit</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                Undo <MenubarShortcut>⌘Z</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Find</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Search the web</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Find...</MenubarItem>
                  <MenubarItem>Find Next</MenubarItem>
                  <MenubarItem>Find Previous</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarItem>Cut</MenubarItem>
              <MenubarItem>Copy</MenubarItem>
              <MenubarItem>Paste</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    );

    const fileTrigger = page.getByRole('menuitem', { name: 'File' });
    await fileTrigger.click();

    // Wait for the content to be visible
    const content = page.locator('[data-slot="menubar-content"]').first();
    await expect(content).toBeVisible();

    await expect(component).toHaveScreenshot('menubar-open.png', {
      maxDiffPixelRatio: 0.02,
    });
  });
});
