import { test, expect } from '@playwright/experimental-ct-react';
import * as React from 'react';
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from '../../src/components/micro/popover';

test.describe('Popover (Micro)', () => {
  test('renders identically given the same props (pure component)', async ({ mount }) => {
    const props = { children: 'Open' } as const;

    const component = await mount(
      <div className="flex gap-4">
        <Popover>
          <PopoverTrigger {...props} data-testid="first" render={<button />} />
          <PopoverContent>Content</PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger {...props} data-testid="second" render={<button />} />
          <PopoverContent>Content</PopoverContent>
        </Popover>
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

  test('opens on click and closes on escape or click outside', async ({ mount, page }) => {
    await mount(
      <div className="p-10">
        <Popover>
          <PopoverTrigger render={<button />}>Open Popover</PopoverTrigger>
          <PopoverContent>
            <PopoverHeader>
              <PopoverTitle>Title</PopoverTitle>
              <PopoverDescription>Description</PopoverDescription>
            </PopoverHeader>
            <div data-testid="inside">Inside content</div>
          </PopoverContent>
        </Popover>
      </div>
    );

    const trigger = page.getByRole('button', { name: 'Open Popover' });
    const content = page.locator('[data-slot="popover-content"]');

    await expect(content).toBeHidden();

    // Open on click
    await trigger.click();
    await expect(content).toBeVisible();
    await expect(trigger).toHaveAttribute('data-popup-open', '');
    await expect(page.getByText('Title')).toBeVisible();

    // Close on escape
    await page.keyboard.press('Escape');
    await expect(content).toBeHidden();

    // Open again
    await trigger.click();
    await expect(content).toBeVisible();

    // Close on click outside
    await page.mouse.click(0, 0);
    await expect(content).toBeHidden();
  });
});

test.describe('Popover Visual Snapshots', () => {
  const SIDES = ['top', 'bottom', 'left', 'right'] as const;

  test('matches visual matrix snapshot', async ({ mount, page }) => {
    await mount(
      <div className="flex h-screen w-full items-center justify-center p-24 bg-background">
        <div className="grid grid-cols-2 gap-32">
          {SIDES.map((side) => (
            <Popover key={side} defaultOpen>
              <PopoverTrigger render={<button className="border rounded-md px-4 py-2 bg-muted text-muted-foreground" />}>
                {side}
              </PopoverTrigger>
              <PopoverContent side={side} sideOffset={10}>
                <PopoverHeader>
                  <PopoverTitle>Popover {side}</PopoverTitle>
                  <PopoverDescription>Description for {side} popover.</PopoverDescription>
                </PopoverHeader>
              </PopoverContent>
            </Popover>
          ))}
        </div>
      </div>
    );

    await expect(page).toHaveScreenshot('popover-matrix.png', {
      maxDiffPixelRatio: 0.01,
      animations: 'disabled',
    });
  });
});
