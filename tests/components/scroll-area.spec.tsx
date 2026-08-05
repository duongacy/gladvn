import { test, expect } from '@playwright/experimental-ct-react';
import * as React from 'react';
import { ScrollArea, ScrollBar } from '../../src/components/micro/scroll-area';

test.describe('ScrollArea (Micro)', () => {
  test('renders with all structural elements', async ({ mount, page }) => {
    await mount(
      <ScrollArea className="h-[200px] w-[350px]">
        <div className="p-4">
          <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={i} className="text-sm">
              v1.2.0-beta.{50 - i}
              <hr className="my-2" />
            </div>
          ))}
        </div>
      </ScrollArea>
    );

    const root = page.locator('[data-slot="scroll-area"]');
    await expect(root).toBeVisible();

    const viewport = page.locator('[data-slot="scroll-area-viewport"]');
    await expect(viewport).toBeVisible();

    // Scrollbar might be hidden visually by default or unmounted
  });
});

test.describe('ScrollArea Visual Snapshots', () => {
  test('matches visual snapshot of vertical scroll area', async ({ mount }) => {
    const component = await mount(
      <div className="flex h-[300px] items-center justify-center p-8 bg-background">
        <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
          Jokester began sneaking into the castle in the middle of the night and leaving
          jokes all over the place: under the king's pillow, in his soup, even in the
          royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
          then, one day, the people of the kingdom discovered that the jokes left by
          Jokester were so funny that they couldn't help but laugh. And once they
          started laughing, they couldn't stop.
        </ScrollArea>
      </div>
    );

    await expect(component).toHaveScreenshot('scroll-area-vertical.png', {
      maxDiffPixelRatio: 0.02,
    });
  });

  test('matches visual snapshot of horizontal scroll area', async ({ mount }) => {
    const component = await mount(
      <div className="flex h-[300px] items-center justify-center p-8 bg-background">
        <ScrollArea className="w-[300px] whitespace-nowrap rounded-md border p-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    );

    await expect(component).toHaveScreenshot('scroll-area-horizontal.png', {
      maxDiffPixelRatio: 0.02,
    });
  });
});
