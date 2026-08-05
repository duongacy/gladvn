import { test, expect } from '@playwright/experimental-ct-react';
import * as React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../../src/components/micro/tooltip';

test.describe('Tooltip (Micro)', () => {
  test('renders identically given the same props (pure component)', async ({ mount }) => {
    const props = { children: 'Hover me' } as const;

    const component = await mount(
      <TooltipProvider>
        <div className="flex gap-4">
          <Tooltip>
            <TooltipTrigger {...props} data-testid="first" />
            <TooltipContent>Tooltip 1</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger {...props} data-testid="second" />
            <TooltipContent>Tooltip 2</TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    );

    const cleanHTML = (html: string) => html
      .replace(/id="[^"]+"/g, 'id="mocked"')
      .replace(/aria-controls="[^"]*"/g, 'aria-controls="mocked"')
      .replace(/aria-[a-z]+="[^"]*base-ui-[^"]*"/g, 'aria-mocked="true"');

    const firstHTML = await component.getByTestId('first').evaluate(el => el.innerHTML);
    const secondHTML = await component.getByTestId('second').evaluate(el => el.innerHTML);

    expect(cleanHTML(firstHTML)).toEqual(cleanHTML(secondHTML));
  });

  test('opens on hover and closes on unhover', async ({ mount, page }) => {
    const component = await mount(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger delay={0} closeDelay={0} render={<button />}>Hover me</TooltipTrigger>
          <TooltipContent>My tooltip</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );

    const trigger = page.getByRole('button', { name: 'Hover me' });
    const tooltip = page.locator('[data-slot="tooltip-content"]');

    await expect(tooltip).toBeHidden();

    await trigger.hover();
    await expect(tooltip).toBeVisible();
    await expect(trigger).toHaveAttribute('data-popup-open', '');

    // Move mouse away
    await page.mouse.move(0, 0);
    await expect(tooltip).toBeHidden();
  });

  test('can be focused and closed via Escape', async ({ mount, page }) => {
    const component = await mount(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger delay={0} closeDelay={0} render={<button />}>Focus me</TooltipTrigger>
          <TooltipContent>My focused tooltip</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
    console.log(await page.content());

    const trigger = page.getByRole('button', { name: 'Focus me' });
    const tooltip = page.locator('[data-slot="tooltip-content"]');

    await expect(tooltip).toBeHidden();

    // Keyboard focus
    await page.keyboard.press('Tab');
    await expect(trigger).toBeFocused();
    await expect(tooltip).toBeVisible();

    // Press escape
    await page.keyboard.press('Escape');
    await expect(tooltip).toBeHidden();
  });
});

test.describe('Tooltip Visual Snapshots', () => {
  const SIDES = ['top', 'bottom', 'left', 'right'] as const;

  test('matches visual matrix snapshot', async ({ mount, page }) => {
    await mount(
      <TooltipProvider delay={0}>
        <div className="flex h-screen w-full items-center justify-center p-24 bg-background">
          <div className="grid grid-cols-2 gap-24">
            {SIDES.map((side) => (
              <Tooltip key={side} defaultOpen>
                <TooltipTrigger className="border rounded-md px-4 py-2 bg-muted text-muted-foreground">
                  {side}
                </TooltipTrigger>
                <TooltipContent side={side} sideOffset={10}>
                  Content for {side}
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </TooltipProvider>
    );

    // Because tooltips render in portals, we take a screenshot of the entire page
    // The delay inside TooltipProvider is 0, so they render immediately
    await expect(page).toHaveScreenshot('tooltip-matrix.png', {
      maxDiffPixelRatio: 0.01,
      // We might need to wait for animations to finish
      animations: 'disabled',
    });
  });
});
