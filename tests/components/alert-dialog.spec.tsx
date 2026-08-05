import { test, expect } from '@playwright/experimental-ct-react';
import * as React from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogClose,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogOverlay,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../../src/components/micro/alert-dialog';

test.describe('AlertDialog (Micro)', () => {
  test('renders identically given the same props (pure component)', async ({ mount }) => {
    const props = { children: 'Open' } as const;

    const component = await mount(
      <div className="flex gap-4">
        <AlertDialog>
          <AlertDialogTrigger {...props} data-testid="first" render={<button />} />
          <AlertDialogContent>Content</AlertDialogContent>
        </AlertDialog>
        <AlertDialog>
          <AlertDialogTrigger {...props} data-testid="second" render={<button />} />
          <AlertDialogContent>Content</AlertDialogContent>
        </AlertDialog>
      </div>
    );

    const cleanHTML = (html: string) => html
      .replace(/id="[^"]+"/g, 'id="mocked"')
      .replace(/aria-[a-z]+="[^"]*base-ui-[^"]*"/g, 'aria-mocked="true"');

    const firstHTML = await component.getByTestId('first').evaluate(el => el.innerHTML);
    const secondHTML = await component.getByTestId('second').evaluate(el => el.innerHTML);

    expect(cleanHTML(firstHTML)).toEqual(cleanHTML(secondHTML));
  });

  test('opens on click and closes on action, cancel or escape', async ({ mount, page }) => {
    await mount(
      <div className="p-10">
        <AlertDialog>
          <AlertDialogTrigger render={<button />}>Open Alert</AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    );

    const trigger = page.getByRole('button', { name: 'Open Alert', includeHidden: true });
    const content = page.locator('[data-slot="alert-dialog-content"]');
    const cancelBtn = page.getByRole('button', { name: 'Cancel', includeHidden: true });
    const actionBtn = page.getByRole('button', { name: 'Continue', includeHidden: true });

    await expect(content).toBeHidden();

    // Open and close via Cancel
    await trigger.click({ force: true });
    await expect(content).toBeVisible();
    await expect(page.getByText('Are you absolutely sure?')).toBeVisible();
    await page.waitForTimeout(200);
    
    await cancelBtn.dispatchEvent('click');
    await expect(content).toBeHidden();

    // Open and close via Action
    await trigger.click({ force: true });
    await expect(content).toBeVisible();
    await page.waitForTimeout(200);
    
    await actionBtn.dispatchEvent('click');
    await expect(content).toBeHidden();

    // Open and close via Escape
    await trigger.click({ force: true });
    await expect(content).toBeVisible();
    await page.waitForTimeout(200);

    await page.keyboard.press('Escape');
    await expect(content).toBeHidden();
  });
});

test.describe('AlertDialog Visual Snapshots', () => {
  test('matches visual snapshot', async ({ mount, page }) => {
    await mount(
      <div className="flex h-screen w-full items-center justify-center bg-background">
        <AlertDialog defaultOpen>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete Account</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to delete your account? This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction color="destructive">Delete</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    );

    await expect(page).toHaveScreenshot('alert-dialog-default.png', {
      maxDiffPixelRatio: 0.01,
      animations: 'disabled',
    });
  });
});
