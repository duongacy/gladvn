import { test, expect } from '@playwright/experimental-ct-react';

import { AspectRatio } from '../../src/components/micro/aspect-ratio';

test.describe('AspectRatio (Micro)', () => {
  test('renders identically given the same props (pure component)', async ({ mount }) => {
    const component = await mount(
      <div className="flex gap-4">
        <AspectRatio ratio={16 / 9} data-testid="first">
          <div>Content</div>
        </AspectRatio>
        <AspectRatio ratio={16 / 9} data-testid="second">
          <div>Content</div>
        </AspectRatio>
      </div>
    );

    const cleanHTML = (html: string) => html.replace(/id="[^"]+"/g, 'id="mocked"').replace(/aria-[a-z]+="[^"]*base-ui-[^"]*"/g, 'aria-mocked="true"');

    const firstHTML = await component.getByTestId('first').evaluate(el => el.innerHTML);
    const secondHTML = await component.getByTestId('second').evaluate(el => el.innerHTML);

    expect(cleanHTML(firstHTML)).toEqual(cleanHTML(secondHTML));
  });

  test('applies the ratio as a CSS custom property', async ({ mount }) => {
    const component = await mount(
      <AspectRatio ratio={2} />
    );

    const style = await component.evaluate(el => el.getAttribute('style'));
    expect(style).toContain('--ratio: 2');
  });
});

test.describe('AspectRatio Visual Snapshots', () => {
  test('matches visual matrix snapshot', async ({ mount }) => {
    const component = await mount(
      <div className="flex flex-col gap-6 p-6 bg-background">
        <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider border-b border-border pb-2">AspectRatio Sizes</h3>
        
        <div className="flex gap-8 items-end">
          <div className="w-32 flex flex-col gap-2">
            <span className="text-xs font-semibold text-muted-foreground">16/9 (Widescreen)</span>
            <AspectRatio ratio={16 / 9} className="bg-muted border border-border rounded-md flex items-center justify-center">
              16/9
            </AspectRatio>
          </div>

          <div className="w-32 flex flex-col gap-2">
            <span className="text-xs font-semibold text-muted-foreground">4/3 (Standard)</span>
            <AspectRatio ratio={4 / 3} className="bg-muted border border-border rounded-md flex items-center justify-center">
              4/3
            </AspectRatio>
          </div>
          
          <div className="w-32 flex flex-col gap-2">
            <span className="text-xs font-semibold text-muted-foreground">1 (Square)</span>
            <AspectRatio ratio={1} className="bg-muted border border-border rounded-md flex items-center justify-center">
              1:1
            </AspectRatio>
          </div>
        </div>
      </div>
    );

    await expect(component).toHaveScreenshot('aspect-ratio-matrix.png', {
      maxDiffPixelRatio: 0.01,
    });
  });
});
