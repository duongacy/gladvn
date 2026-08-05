import { test, expect } from '@playwright/experimental-ct-react';
import { BoldIcon } from 'lucide-react';
import { Toggle } from '../../src/components/micro/toggle';

test.describe('Toggle (Micro)', () => {
  test('renders identically given the same props (pure component)', async ({ mount }) => {
    const props = { 'aria-label': 'Toggle italic', children: 'I' } as const;

    const component = await mount(
      <div className="flex gap-4">
        <Toggle {...props} data-testid="first" />
        <Toggle {...props} data-testid="second" />
      </div>
    );

    const cleanHTML = (html: string) => html.replace(/id="[^"]+"/g, 'id="mocked"');

    const firstHTML = await component.getByTestId('first').evaluate(el => el.innerHTML);
    const secondHTML = await component.getByTestId('second').evaluate(el => el.innerHTML);

    expect(cleanHTML(firstHTML)).toEqual(cleanHTML(secondHTML));
  });

  test('toggles state when clicked', async ({ mount }) => {
    let pressed = false;
    const component = await mount(
      <Toggle aria-label="Toggle bold" onPressedChange={(p) => pressed = p}>
        <BoldIcon />
      </Toggle>
    );

    // Initial state
    await expect(component).toHaveAttribute('aria-pressed', 'false');

    // Click to toggle on
    await component.click();
    await expect(component).toHaveAttribute('aria-pressed', 'true');
    expect(pressed).toBe(true);

    // Click to toggle off
    await component.click();
    await expect(component).toHaveAttribute('aria-pressed', 'false');
    expect(pressed).toBe(false);
  });

  test('is focusable and can be toggled with keyboard Space', async ({ mount, page }) => {
    const component = await mount(<Toggle aria-label="Toggle">Toggle me</Toggle>);
    
    await page.keyboard.press('Tab');
    await expect(component).toBeFocused();

    await page.keyboard.press(' ');
    await expect(component).toHaveAttribute('aria-pressed', 'true');
  });

  test('is disabled when disabled prop is true', async ({ mount }) => {
    const component = await mount(<Toggle disabled>Disabled</Toggle>);
    await expect(component).toBeDisabled();
    
    // Attempt click
    await component.click({ force: true });
    await expect(component).toHaveAttribute('aria-pressed', 'false');
  });
});

test.describe('Toggle Visual Snapshots', () => {
  const VARIANTS = ['default', 'outline'] as const;
  const SIZES = ['sm', 'md', 'lg'] as const;

  test('matches visual matrix snapshot', async ({ mount }) => {
    const component = await mount(
      <div className="flex flex-col gap-8 p-8 bg-background">
        {VARIANTS.map((variant) => (
          <div key={variant} className="space-y-4">
            <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Variant: {variant}</h3>
            <div className="flex flex-wrap gap-8 items-center">
              {SIZES.map((size) => (
                <div key={size} className="space-y-2">
                  <div className="text-xs text-muted-foreground">{size}</div>
                  <div className="flex gap-2">
                    <Toggle variant={variant} size={size} aria-label="Toggle off">
                      <BoldIcon />
                    </Toggle>
                    <Toggle variant={variant} size={size} defaultPressed aria-label="Toggle on">
                      <BoldIcon />
                    </Toggle>
                    <Toggle variant={variant} size={size} disabled aria-label="Toggle disabled">
                      <BoldIcon />
                    </Toggle>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );

    await expect(component).toHaveScreenshot('toggle-matrix.png', {
      maxDiffPixelRatio: 0.01,
    });
  });
});
