import { test, expect } from '@playwright/experimental-ct-react';
import * as React from 'react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetTitle,
  SheetTrigger,
} from '../../src/components/micro/sheet';
import { Button } from '../../src/components/micro/button';

test.describe('Sheet (Micro)', () => {
  test('renders identically given the same props (pure component)', async ({ mount }) => {
    const props = { children: 'Open' } as const;

    const component = await mount(
      <div className="flex gap-4">
        <Sheet>
          <SheetTrigger {...props} data-testid="first" render={<button />} />
          <SheetContent>Content</SheetContent>
        </Sheet>
        <Sheet>
          <SheetTrigger {...props} data-testid="second" render={<button />} />
          <SheetContent>Content</SheetContent>
        </Sheet>
      </div>
    );

    const cleanHTML = (html: string) => html
      .replace(/id="[^"]+"/g, 'id="mocked"')
      .replace(/aria-controls="[^"]*"/g, 'aria-controls="mocked"')
      .replace(/aria-[a-z]+="[^"]*base-ui-[^"]*"/g, 'aria-mocked="true"');

    const firstHTML = await component.getByTestId('first').evaluate(el => el.innerHTML);
    const secondHTML = await component.getByTestId('second').evaluate(el => el.innerHTML);

    expect(cleanHTML(firstHTML)).toEqual(cleanHTML(secondHTML));
  });

  test('opens on click and closes on escape or close button', async ({ mount, page }) => {
    await mount(
      <div className="p-10">
        <Sheet>
          <SheetTrigger render={<button />}>Open Sheet</SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>Make changes to your profile here.</SheetDescription>
            </SheetHeader>
            <SheetFooter>
              <Button>Save changes</Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    );

    const trigger = page.getByRole('button', { name: 'Open Sheet', includeHidden: true });
    const content = page.locator('[data-slot="sheet-content"]');
    const closeBtn = page.getByRole('button', { name: 'Close', includeHidden: true });

    await expect(content).toBeHidden();

    // Open via trigger
    await trigger.click({ force: true });
    await expect(content).toBeVisible();
    await expect(page.getByText('Edit profile')).toBeVisible();
    
    // Close via close button
    await closeBtn.dispatchEvent('click');
    await expect(content).toBeHidden();

    // Open and close via Escape
    await trigger.click({ force: true });
    await expect(content).toBeVisible();
    
    await page.keyboard.press('Escape');
    await expect(content).toBeHidden();
  });
});

test.describe('Sheet Visual Snapshots', () => {
  test('matches visual snapshot', async ({ mount, page }) => {
    await mount(
      <div className="flex h-screen w-full items-center justify-center bg-background">
        <Sheet defaultOpen>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Edit Profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you're done.
              </SheetDescription>
            </SheetHeader>
            <div className="p-4 py-8">
              (Form Content Placeholder)
            </div>
            <SheetFooter>
              <Button>Save changes</Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    );

    await expect(page).toHaveScreenshot('sheet-default.png', {
      maxDiffPixelRatio: 0.01,
      animations: 'disabled',
    });
  });
});
