import { test, expect } from '@playwright/experimental-ct-react';
import * as React from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from '../../src/components/micro/dialog';

test.describe('Dialog (Micro)', () => {
  test('renders identically given the same props (pure component)', async ({ mount }) => {
    const props = { children: 'Open' } as const;

    const component = await mount(
      <div className="flex gap-4">
        <Dialog>
          <DialogTrigger {...props} data-testid="first" render={<button />} />
          <DialogContent>Content</DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger {...props} data-testid="second" render={<button />} />
          <DialogContent>Content</DialogContent>
        </Dialog>
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
        <Dialog>
          <DialogTrigger render={<button />}>Open Dialog</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Title</DialogTitle>
              <DialogDescription>Description</DialogDescription>
            </DialogHeader>
            <div data-testid="inside">Inside content</div>
            <DialogFooter>
              <DialogClose render={<button />}>Close Dialog</DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    );

    const trigger = page.getByRole('button', { name: 'Open Dialog', includeHidden: true });
    const content = page.locator('[data-slot="dialog-content"]');
    const closeBtn = page.getByRole('button', { name: 'Close Dialog', includeHidden: true });

    await expect(content).toBeHidden();

    // Open on click
    await trigger.click();
    await expect(content).toBeVisible();
    await expect(page.getByText('Title')).toBeVisible();

    // Close on escape
    await page.keyboard.press('Escape');
    await expect(content).toBeHidden();

    // Open again
    await trigger.click({ force: true });
    await expect(content).toBeVisible();

    // Close via close button
    await closeBtn.click({ force: true });
    await expect(content).toBeHidden();
  });
});

test.describe('Dialog Visual Snapshots', () => {
  test('matches visual snapshot', async ({ mount, page }) => {
    await mount(
      <div className="flex h-screen w-full items-center justify-center bg-background">
        <Dialog defaultOpen>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <span className="text-right text-sm">Name</span>
                <span className="col-span-3 text-sm">Pedro Duarte</span>
              </div>
            </div>
            <DialogFooter>
              <DialogClose render={<button className="px-4 py-2 border rounded" />}>Cancel</DialogClose>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded">Save changes</button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    );

    await expect(page).toHaveScreenshot('dialog-default.png', {
      maxDiffPixelRatio: 0.01,
      animations: 'disabled',
    });
  });
});
