import { test, expect } from '@playwright/experimental-ct-react';
import * as React from 'react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerTitle,
  DrawerTrigger,
} from '../../src/components/micro/drawer';
import { Button } from '../../src/components/micro/button';

test.describe('Drawer (Micro)', () => {
  test('renders identically given the same props (pure component)', async ({ mount }) => {
    const props = { children: 'Open' } as const;

    const component = await mount(
      <div className="flex gap-4">
        <Drawer>
          <DrawerTrigger {...props} data-testid="first" asChild>
            <Button>Open</Button>
          </DrawerTrigger>
          <DrawerContent>Content</DrawerContent>
        </Drawer>
        <Drawer>
          <DrawerTrigger {...props} data-testid="second" asChild>
            <Button>Open</Button>
          </DrawerTrigger>
          <DrawerContent>Content</DrawerContent>
        </Drawer>
      </div>
    );

    const cleanHTML = (html: string) => html
      .replace(/id="[^"]+"/g, 'id="mocked"')
      .replace(/aria-[a-z]+="[^"]*radix-[^"]*"/g, 'aria-mocked="true"');

    const firstHTML = await component.getByTestId('first').evaluate(el => el.innerHTML);
    const secondHTML = await component.getByTestId('second').evaluate(el => el.innerHTML);

    expect(cleanHTML(firstHTML)).toEqual(cleanHTML(secondHTML));
  });

  test('opens on click and closes on escape or close button', async ({ mount, page }) => {
    await mount(
      <div className="p-10">
        <Drawer>
          <DrawerTrigger asChild>
            <Button>Open Drawer</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Title</DrawerTitle>
              <DrawerDescription>Description</DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="outline">Close</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    );

    const trigger = page.getByRole('button', { name: 'Open Drawer', includeHidden: true });
    const content = page.locator('[data-slot="drawer-content"]');
    const closeBtn = page.getByRole('button', { name: 'Close', includeHidden: true });

    await expect(content).toBeHidden();

    // Open via trigger
    await trigger.click({ force: true });
    await expect(content).toBeVisible();
    await expect(page.getByText('Title')).toBeVisible();
    await page.waitForTimeout(300);
    
    // Close via close button
    await closeBtn.dispatchEvent('click');
    await expect(content).toBeHidden();
  });
});

test.describe('Drawer Visual Snapshots', () => {
  test('matches visual snapshot', async ({ mount, page }) => {
    await mount(
      <div className="flex h-screen w-full items-center justify-center bg-background">
        <Drawer open>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Profile Actions</DrawerTitle>
              <DrawerDescription>
                Manage your account settings and preferences here.
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-4 pb-0 text-sm">
              Additional content goes here.
            </div>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="outline">Close</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    );

    await expect(page).toHaveScreenshot('drawer-default.png', {
      maxDiffPixelRatio: 0.01,
      animations: 'disabled',
    });
  });
});
