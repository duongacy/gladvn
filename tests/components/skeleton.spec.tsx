import { test, expect } from '@playwright/experimental-ct-react';

import { Skeleton } from '../../src/components/micro/skeleton';

test.describe('Skeleton (Micro)', () => {
  test('renders identically given the same props (pure component)', async ({ mount }) => {
    const component = await mount(
      <div className="flex gap-4">
        <Skeleton className="size-10" data-testid="first" />
        <Skeleton className="size-10" data-testid="second" />
      </div>
    );

    const cleanHTML = (html: string) => html.replace(/id="[^"]+"/g, 'id="mocked"').replace(/aria-[a-z]+="[^"]*base-ui-[^"]*"/g, 'aria-mocked="true"');

    const firstHTML = await component.getByTestId('first').evaluate(el => el.innerHTML);
    const secondHTML = await component.getByTestId('second').evaluate(el => el.innerHTML);

    expect(cleanHTML(firstHTML)).toEqual(cleanHTML(secondHTML));
  });
});

test.describe('Skeleton Visual Snapshots', () => {
  test('matches visual matrix snapshot', async ({ mount }) => {
    const component = await mount(
      <div className="flex flex-col gap-6 p-6 bg-background">
        <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider border-b border-border pb-2">Skeleton Shapes & Sizes</h3>
        
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold text-muted-foreground">Circular (Avatar Placeholder)</span>
            <div className="flex items-center gap-4">
              <Skeleton className="size-8 rounded-full" />
              <Skeleton className="size-12 rounded-full" />
              <Skeleton className="size-16 rounded-full" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold text-muted-foreground">Rectangular (Text/Card Placeholder)</span>
            <div className="flex flex-col gap-4 w-64">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-20 w-full" />
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold text-muted-foreground">Complex Composition</span>
            <div className="flex items-center space-x-4 w-64">
              <Skeleton className="size-12 rounded-full shrink-0" />
              <div className="space-y-2 w-full">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[80%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    // Disable animations to ensure stable screenshot of the pulse animation
    await expect(component).toHaveScreenshot('skeleton-matrix.png', {
      maxDiffPixelRatio: 0.01,
      animations: 'disabled',
    });
  });
});
