import { test, expect } from '@playwright/experimental-ct-react';

import { Separator } from '../../src/components/micro/separator';

test.describe('Separator (Micro)', () => {
  test('renders identically given the same props (pure component)', async ({ mount }) => {
    const component = await mount(
      <div className="flex flex-col gap-4">
        <Separator data-testid="first" />
        <Separator data-testid="second" />
      </div>
    );

    const cleanHTML = (html: string) => html.replace(/id="[^"]+"/g, 'id="mocked"').replace(/aria-[a-z]+="[^"]*base-ui-[^"]*"/g, 'aria-mocked="true"');

    const firstHTML = await component.getByTestId('first').evaluate(el => el.innerHTML);
    const secondHTML = await component.getByTestId('second').evaluate(el => el.innerHTML);

    expect(cleanHTML(firstHTML)).toEqual(cleanHTML(secondHTML));
  });

  test('applies role="separator" by default', async ({ mount }) => {
    const component = await mount(<Separator />);
    await expect(component).toHaveAttribute('role', 'separator');
  });

  test('applies data-orientation', async ({ mount }) => {
    const component = await mount(<Separator orientation="vertical" />);
    await expect(component).toHaveAttribute('data-orientation', 'vertical');
  });
});

test.describe('Separator Visual Snapshots', () => {
  test('matches visual matrix snapshot', async ({ mount }) => {
    const component = await mount(
      <div className="flex flex-col gap-6 p-6 bg-background">
        <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider border-b border-border pb-2">Separator Orientations</h3>
        
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold text-muted-foreground">Horizontal (default)</span>
            <div className="flex flex-col gap-4">
              <div>Item 1</div>
              <Separator />
              <div>Item 2</div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold text-muted-foreground">Vertical</span>
            <div className="flex h-10 items-center gap-4">
              <div>Item A</div>
              <Separator orientation="vertical" />
              <div>Item B</div>
            </div>
          </div>
        </div>
      </div>
    );

    await expect(component).toHaveScreenshot('separator-matrix.png', {
      maxDiffPixelRatio: 0.01,
    });
  });
});
