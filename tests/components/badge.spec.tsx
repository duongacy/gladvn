import { test, expect } from '@playwright/experimental-ct-react';

import { Badge } from '../../src/components/micro/badge';

test.describe('Badge (Micro)', () => {
  test('renders identically given the same props (pure component)', async ({ mount }) => {
    const props = { variant: "solid", color: "primary", children: "Badge" } as const;

    const component = await mount(
      <div className="flex gap-4">
        <Badge {...props} data-testid="first" />
        <Badge {...props} data-testid="second" />
      </div>
    );

    const cleanHTML = (html: string) => html.replace(/id="[^"]+"/g, 'id="mocked"').replace(/aria-[a-z]+="[^"]*base-ui-[^"]*"/g, 'aria-mocked="true"');

    const firstHTML = await component.getByTestId('first').evaluate(el => el.innerHTML);
    const secondHTML = await component.getByTestId('second').evaluate(el => el.innerHTML);

    expect(cleanHTML(firstHTML)).toEqual(cleanHTML(secondHTML));
  });

  test('supports polymorphism via render prop', async ({ mount }) => {
    const component = await mount(
      <Badge render={<a href="/test-url" />} data-testid="link-badge">
        Link
      </Badge>
    );

    await expect(component).toHaveAttribute('href', '/test-url');
    const tagName = await component.evaluate(el => el.tagName);
    expect(tagName).toBe('A');
  });
});

test.describe('Badge Visual Snapshots', () => {
  const VARIANTS = ["solid", "outline", "soft"] as const;
  const COLORS = [
    "primary",
    "secondary",
    "destructive",
    "warning",
    "success",
    "info",
    "tertiary",
    "muted",
    "accent"
  ] as const;

  test('matches visual matrix snapshot', async ({ mount }) => {
    const component = await mount(
      <div className="flex flex-col gap-6 p-6 bg-background">
        <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider border-b border-border pb-2">Badge Variants & Colors</h3>
        {VARIANTS.map((variant) => (
          <div key={variant} className="flex flex-col gap-2">
            <span className="text-xs font-semibold text-muted-foreground capitalize">{variant}</span>
            <div className="flex flex-wrap gap-4 items-center">
              {COLORS.map((color) => (
                <Badge key={`${variant}-${color}`} variant={variant} color={color}>
                  {color}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    );

    await expect(component).toHaveScreenshot('badge-matrix.png', {
      maxDiffPixelRatio: 0.01,
    });
  });
});
