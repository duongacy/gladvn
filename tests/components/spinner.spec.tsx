import { test, expect } from '@playwright/experimental-ct-react';

import { Spinner } from '../../src/components/micro/spinner';

test.describe('Spinner (Micro)', () => {
  test('renders identically given the same props (pure component)', async ({ mount }) => {
    const component = await mount(
      <div className="flex gap-4">
        <Spinner size="lg" data-testid="first" />
        <Spinner size="lg" data-testid="second" />
      </div>
    );

    const cleanHTML = (html: string) => html.replace(/id="[^"]+"/g, 'id="mocked"').replace(/aria-[a-z]+="[^"]*base-ui-[^"]*"/g, 'aria-mocked="true"');

    const firstHTML = await component.getByTestId('first').evaluate(el => el.innerHTML);
    const secondHTML = await component.getByTestId('second').evaluate(el => el.innerHTML);

    expect(cleanHTML(firstHTML)).toEqual(cleanHTML(secondHTML));
  });

  test('has accessible role and aria-label', async ({ mount }) => {
    const component = await mount(<Spinner />);
    await expect(component).toHaveAttribute('role', 'status');
    await expect(component).toHaveAttribute('aria-label', 'Loading');
  });
});

test.describe('Spinner Visual Snapshots', () => {
  const SIZES = ["sm", "md", "lg"] as const;

  test('matches visual matrix snapshot', async ({ mount }) => {
    const component = await mount(
      <div className="flex flex-col gap-6 p-6 bg-background">
        <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider border-b border-border pb-2">Spinner Sizes</h3>
        
        <div className="flex flex-wrap gap-4 items-center text-primary">
          {SIZES.map((size) => (
            <div key={size} className="flex flex-col items-center gap-2">
              <span className="text-xs font-semibold text-muted-foreground">{size}</span>
              <Spinner size={size} />
            </div>
          ))}
        </div>
      </div>
    );

    // Disable animations to ensure stable screenshot of the spin animation
    await expect(component).toHaveScreenshot('spinner-matrix.png', {
      maxDiffPixelRatio: 0.01,
      animations: 'disabled',
    });
  });
});
