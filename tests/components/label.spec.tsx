import { test, expect } from '@playwright/experimental-ct-react';

import { Label } from '../../src/components/micro/label';

test.describe('Label (Micro)', () => {
  test('renders identically given the same props (pure component)', async ({ mount }) => {
    const component = await mount(
      <div className="flex gap-4">
        <Label size="md" data-testid="first">Email Address</Label>
        <Label size="md" data-testid="second">Email Address</Label>
      </div>
    );

    const cleanHTML = (html: string) => html.replace(/id="[^"]+"/g, 'id="mocked"').replace(/aria-[a-z]+="[^"]*base-ui-[^"]*"/g, 'aria-mocked="true"');

    const firstHTML = await component.getByTestId('first').evaluate(el => el.innerHTML);
    const secondHTML = await component.getByTestId('second').evaluate(el => el.innerHTML);

    expect(cleanHTML(firstHTML)).toEqual(cleanHTML(secondHTML));
  });

  test('passes htmlFor and links to input', async ({ mount }) => {
    const component = await mount(
      <div>
        <Label htmlFor="test-input">Test Label</Label>
        <input id="test-input" type="text" />
      </div>
    );

    const label = component.locator('label');
    await expect(label).toHaveAttribute('for', 'test-input');

    // Clicking the label should focus the input
    await label.click();
    const input = component.locator('input');
    await expect(input).toBeFocused();
  });
});

test.describe('Label Visual Snapshots', () => {
  const SIZES = ["sm", "md", "lg"] as const;

  test('matches visual matrix snapshot', async ({ mount }) => {
    const component = await mount(
      <div className="flex flex-col gap-6 p-6 bg-background">
        <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider border-b border-border pb-2">Label Sizes & States</h3>
        
        <div className="flex flex-col gap-4">
          <span className="text-xs font-semibold text-muted-foreground">Normal</span>
          <div className="flex flex-wrap gap-4 items-center">
            {SIZES.map((size) => (
              <Label key={`normal-${size}`} size={size}>
                Label {size}
              </Label>
            ))}
          </div>

          <span className="text-xs font-semibold text-muted-foreground">Disabled (via group data attribute)</span>
          <div className="flex flex-wrap gap-4 items-center group" data-disabled="true">
            {SIZES.map((size) => (
              <Label key={`disabled-${size}`} size={size}>
                Label {size}
              </Label>
            ))}
          </div>

          <span className="text-xs font-semibold text-muted-foreground">Invalid (via group data attribute)</span>
          <div className="flex flex-wrap gap-4 items-center group" data-invalid="true">
            {SIZES.map((size) => (
              <Label key={`invalid-${size}`} size={size}>
                Label {size}
              </Label>
            ))}
          </div>
        </div>
      </div>
    );

    await expect(component).toHaveScreenshot('label-matrix.png', {
      maxDiffPixelRatio: 0.01,
    });
  });
});
