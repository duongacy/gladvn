import { test, expect } from '@playwright/experimental-ct-react';
import { SearchIcon } from 'lucide-react';

import { Button, ButtonIcon } from '../../src/components/micro/button';

test.describe('Button (Micro)', () => {
  test('renders children correctly', async ({ mount }) => {
    const component = await mount(<Button>Click me</Button>);
    await expect(component).toContainText('Click me');
  });

  test('renders identically given the same props (pure component)', async ({ mount }) => {
    const props = { variant: "solid", color: "primary", children: "Click" } as const;

    const component = await mount(
      <div className="flex gap-4">
        <Button {...props} data-testid="first" />
        <Button {...props} data-testid="second" />
      </div>
    );

    const firstHTML = await component.getByTestId('first').evaluate(el => el.innerHTML);
    const secondHTML = await component.getByTestId('second').evaluate(el => el.innerHTML);

    expect(firstHTML).toEqual(secondHTML);
  });

  test('handles click events', async ({ mount }) => {
    let clicked = false;
    const component = await mount(<Button onClick={() => { clicked = true; }}>Click</Button>);

    await component.click();
    expect(clicked).toBe(true);
  });

  test('is disabled when disabled prop is true', async ({ mount }) => {
    const component = await mount(<Button disabled>Disabled</Button>);
    await expect(component).toBeDisabled();
  });

  test('disabled button does not fire click event', async ({ mount }) => {
    let clicked = false;
    const component = await mount(
      <Button disabled onClick={() => { clicked = true; }}>Disabled</Button>,
    );

    await component.click({ force: true });
    expect(clicked).toBe(false);
  });

  test('is focusable via keyboard Tab', async ({ mount, page }) => {
    const component = await mount(<Button>Focus Me</Button>);
    await page.keyboard.press('Tab');
    await expect(component).toBeFocused();
  });

  test('can be activated with keyboard Enter', async ({ mount }) => {
    let clicked = false;
    const component = await mount(<Button onClick={() => { clicked = true; }}>Enter</Button>);

    await component.focus();
    await component.press('Enter');
    expect(clicked).toBe(true);
  });

  test('can be activated with keyboard Space', async ({ mount }) => {
    let clicked = false;
    const component = await mount(<Button onClick={() => { clicked = true; }}>Space</Button>);

    await component.focus();
    await component.press(' ');
    expect(clicked).toBe(true);
  });

  test('renders with an icon', async ({ mount }) => {
    const component = await mount(
      <Button>
        <SearchIcon data-testid="icon" /> Search
      </Button>,
    );

    await expect(component.getByTestId('icon')).toBeVisible();
    await expect(component).toContainText('Search');
  });

  test('renders icon-only button with data-icon attribute and is perfectly square', async ({ mount }) => {
    const component = await mount(
      <Button iconOnly aria-label="Search">
        <ButtonIcon><SearchIcon /></ButtonIcon>
      </Button>,
    );

    await expect(component).toHaveAttribute('data-icon', 'true');
    await expect(component).toHaveAttribute('aria-label', 'Search');
  });
});

test.describe('Button Visual Snapshots', () => {
  const COLORS = ["primary", "secondary", "destructive", "warning", "success", "info", "tertiary", "muted", "accent"] as const;
  const VARIANTS = ["solid", "outline", "ghost", "soft", "link"] as const;

  test('matches visual snapshot for all colors and variants', async ({ mount }) => {
    const component = await mount(
      <div className="flex flex-col gap-8 p-8 bg-background">
        {VARIANTS.map((variant) => (
          <div key={variant} className="space-y-2">
            <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">{variant}</h3>
            <div className="flex flex-wrap gap-4 items-center">
              {COLORS.map((color) => (
                <Button key={`${variant}-${color}`} variant={variant} color={color}>
                  {color}
                </Button>
              ))}
            </div>
          </div>
        ))}
        
        {/* Additional states and sizes to ensure full coverage */}
        <div className="space-y-2 pt-4 border-t border-border">
          <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Sizes, Icons & States</h3>
          <div className="flex flex-wrap gap-4 items-center">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button disabled>Disabled State</Button>
            <Button iconOnly aria-label="Search"><ButtonIcon><SearchIcon /></ButtonIcon></Button>
            <Button><ButtonIcon><SearchIcon /></ButtonIcon> With Icon</Button>
          </div>
        </div>
      </div>
    );

    await expect(component).toHaveScreenshot('button-matrix.png', {
      maxDiffPixelRatio: 0.01,
    });
  });
});
