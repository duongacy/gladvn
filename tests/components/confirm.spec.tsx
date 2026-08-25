import { test, expect } from '@playwright/experimental-ct-react';
import * as React from 'react';
import {
  Confirm,
  ConfirmContent,
  ConfirmDescription,
  ConfirmFooter,
  ConfirmHeader,
  ConfirmTitle,
} from '../../src/components/micro/confirm';
import { Button } from '../../src/components/micro/button';

test.describe('Confirm (Micro)', () => {
  test('renders identically given the same props (pure component)', async ({ mount, page }) => {
    const component = await mount(
      <div className="flex gap-4">
        <Confirm open>
          <ConfirmContent data-testid="first">
            <ConfirmTitle>Title</ConfirmTitle>
            <ConfirmDescription>Description</ConfirmDescription>
          </ConfirmContent>
        </Confirm>
        <Confirm open>
          <ConfirmContent data-testid="second">
            <ConfirmTitle>Title</ConfirmTitle>
            <ConfirmDescription>Description</ConfirmDescription>
          </ConfirmContent>
        </Confirm>
      </div>
    );

    const cleanHTML = (html: string) => html
      .replace(/id="[^"]+"/g, 'id="mocked"')
      .replace(/aria-[a-z]+="[^"]*base-ui-[^"]*"/g, 'aria-mocked="true"');

    const firstHTML = await page.getByTestId('first').evaluate(el => el.innerHTML);
    const secondHTML = await page.getByTestId('second').evaluate(el => el.innerHTML);

    expect(cleanHTML(firstHTML)).toEqual(cleanHTML(secondHTML));
  });

  test('controlled visibility and escape key interaction', async ({ mount, page }) => {
    let escapes = 0;
    
    const component = await mount(
      <Confirm open={true} onOpenChange={(open) => {
        if (!open) escapes++;
      }}>
        <ConfirmContent data-testid="content">
          <ConfirmHeader>
            <ConfirmTitle>Are you absolutely sure?</ConfirmTitle>
            <ConfirmDescription>This action cannot be undone.</ConfirmDescription>
          </ConfirmHeader>
        </ConfirmContent>
      </Confirm>
    );

    const content = page.getByTestId('content');
    await expect(content).toBeVisible();

    // Verify updating the prop hides it
    await component.update(
      <Confirm open={false}>
        <ConfirmContent data-testid="content">
          <ConfirmHeader>
            <ConfirmTitle>Are you absolutely sure?</ConfirmTitle>
          </ConfirmHeader>
        </ConfirmContent>
      </Confirm>
    );
    await expect(content).toBeHidden();

    // Verify escape key triggers onOpenChange
    await component.update(
      <Confirm open={true} onOpenChange={(open) => {
        if (!open) escapes++;
      }}>
        <ConfirmContent data-testid="content">
          <ConfirmHeader>
            <ConfirmTitle>Are you absolutely sure?</ConfirmTitle>
          </ConfirmHeader>
        </ConfirmContent>
      </Confirm>
    );
    await expect(content).toBeVisible();
    
    await page.keyboard.press('Escape');
    
    // Playwright CT callbacks are asynchronous, we need to wait a tick
    await page.waitForTimeout(100);
    expect(escapes).toBe(1);
  });
});

test.describe('Confirm Visual Snapshots', () => {
  test('matches visual snapshot', async ({ mount, page }) => {
    await mount(
      <div className="flex h-screen w-full items-center justify-center bg-background">
        <Confirm defaultOpen>
          <ConfirmContent>
            <ConfirmHeader>
              <ConfirmTitle>Delete Account</ConfirmTitle>
              <ConfirmDescription>
                Are you sure you want to delete your account? This action cannot be undone.
              </ConfirmDescription>
            </ConfirmHeader>
            <ConfirmFooter>
              <Button variant="outline">Cancel</Button>
              <Button color="destructive">Delete</Button>
            </ConfirmFooter>
          </ConfirmContent>
        </Confirm>
      </div>
    );

    await expect(page).toHaveScreenshot('confirm-default.png', {
      maxDiffPixelRatio: 0.01,
      animations: 'disabled',
    });
  });
});
