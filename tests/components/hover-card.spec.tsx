import { test, expect } from '@playwright/experimental-ct-react';
import * as React from 'react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '../../src/components/micro/hover-card';
import { Avatar, AvatarFallback, AvatarImage } from '../../src/components/micro/avatar';

test.describe('HoverCard (Micro)', () => {
  test('renders identically given the same props (pure component)', async ({ mount }) => {
    const props = { children: 'Hover', href: '#' } as const;

    const component = await mount(
      <div className="flex gap-4">
        <HoverCard>
          <HoverCardTrigger delay={0} closeDelay={0} {...props} data-testid="first" />
          <HoverCardContent>Content</HoverCardContent>
        </HoverCard>
        <HoverCard>
          <HoverCardTrigger delay={0} closeDelay={0} {...props} data-testid="second" />
          <HoverCardContent>Content</HoverCardContent>
        </HoverCard>
      </div>
    );

    const cleanHTML = (html: string) => html
      .replace(/id="[^"]+"/g, 'id="mocked"')
      .replace(/aria-[a-z]+="[^"]*base-ui-[^"]*"/g, 'aria-mocked="true"');

    const firstHTML = await component.getByTestId('first').evaluate(el => el.innerHTML);
    const secondHTML = await component.getByTestId('second').evaluate(el => el.innerHTML);

    expect(cleanHTML(firstHTML)).toEqual(cleanHTML(secondHTML));
  });

  test('opens on hover and closes on mouseout', async ({ mount, page }) => {
    await mount(
      <div className="p-10">
        <HoverCard>
          <HoverCardTrigger delay={0} closeDelay={0} href="#">@nextjs</HoverCardTrigger>
          <HoverCardContent>
            The React Framework – created and maintained by @vercel.
          </HoverCardContent>
        </HoverCard>
      </div>
    );

    const trigger = page.getByRole('link', { name: '@nextjs' });
    const content = page.locator('[data-slot="hover-card-content"]');

    await expect(content).toBeHidden();

    // Hover
    await trigger.hover();
    await expect(content).toBeVisible();
    await expect(page.getByText('The React Framework')).toBeVisible();
    
    // Unhover (hover somewhere else)
    await page.mouse.move(0, 0);
    await expect(content).toBeHidden();
  });
});

test.describe('HoverCard Visual Snapshots', () => {
  test('matches visual snapshot', async ({ mount, page }) => {
    await mount(
      <div className="flex h-screen w-full items-center justify-center bg-background">
        <HoverCard defaultOpen>
          <HoverCardTrigger href="#" className="font-medium underline">
            @antigravity
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <Avatar>
                <AvatarImage src="https://github.com/vercel.png" />
                <AvatarFallback>VC</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">@nextjs</h4>
                <p className="text-sm">
                  The React Framework – created and maintained by @vercel.
                </p>
                <div className="flex items-center pt-2">
                  <span className="text-xs text-muted-foreground">
                    Joined December 2021
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
    );

    await expect(page).toHaveScreenshot('hover-card-default.png', {
      maxDiffPixelRatio: 0.01,
      animations: 'disabled',
    });
  });
});
