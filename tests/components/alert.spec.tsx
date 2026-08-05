import { test, expect } from '@playwright/experimental-ct-react';
import * as React from 'react';
import {
  Alert,
  AlertTitle,
  AlertDescription,
  AlertAction,
  AlertIcon,
} from '../../src/components/micro/alert';
import { InfoIcon, AlertTriangleIcon } from 'lucide-react';

test.describe('Alert (Micro)', () => {
  test('renders with correct role and attributes', async ({ mount, page }) => {
    await mount(
      <Alert color="destructive" size="lg">
        <AlertIcon render={<AlertTriangleIcon />} />
        <AlertTitle>Error!</AlertTitle>
        <AlertDescription>Something went terribly wrong.</AlertDescription>
        <AlertAction>
          <button>Retry</button>
        </AlertAction>
      </Alert>
    );

    const alert = page.getByRole('alert');
    await expect(alert).toBeVisible();

    // Verify data-attributes cascading from props
    await expect(alert).toHaveAttribute('data-color', 'destructive');
    await expect(alert).toHaveAttribute('data-size', 'lg');

    // Verify slots are rendered
    await expect(page.locator('[data-slot="alert-icon"]')).toBeVisible();
    await expect(page.locator('[data-slot="alert-title"]')).toHaveText('Error!');
    await expect(page.locator('[data-slot="alert-description"]')).toHaveText('Something went terribly wrong.');
    await expect(page.locator('[data-slot="alert-action"]')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Retry' })).toBeVisible();
  });

  test('renders identically given the same props (pure component)', async ({ mount }) => {
    const props = { color: "destructive", size: "lg", children: "Content" } as const;
    const component = await mount(
      <div className="flex gap-4">
        <Alert {...props} data-testid="first" />
        <Alert {...props} data-testid="second" />
      </div>
    );

    const cleanHTML = (html: string) => html
      .replace(/id="[^"]+"/g, 'id="mocked"')
      .replace(/aria-[a-z]+="[^"]*base-ui-[^"]*"/g, 'aria-mocked="true"');

    const firstHTML = await component.getByTestId('first').evaluate(el => el.innerHTML);
    const secondHTML = await component.getByTestId('second').evaluate(el => el.innerHTML);

    expect(cleanHTML(firstHTML)).toEqual(cleanHTML(secondHTML));
  });
});

test.describe('Alert Visual Snapshots', () => {
  const COLORS = ['info', 'destructive', 'success', 'warning'] as const;
  const SIZES = ['sm', 'md', 'lg'] as const;

  test('matches visual matrix snapshot', async ({ mount }) => {
    const component = await mount(
      <div className="flex flex-col gap-8 p-8 bg-background">
        {SIZES.map((size) => (
          <div key={size} className="space-y-4">
            <h3 className="font-bold text-muted-foreground text-sm">Size: {size}</h3>
            <div className="grid grid-cols-2 gap-4">
              {COLORS.map((color) => (
                <Alert key={`${size}-${color}`} size={size} color={color}>
                  <AlertIcon render={<InfoIcon />} />
                  <div className="flex-1 space-y-1">
                    <AlertTitle>Alert {color} ({size})</AlertTitle>
                    <AlertDescription>
                      This is a description for the {color} alert in {size} size.
                    </AlertDescription>
                  </div>
                  <AlertAction>
                    <button className="text-xs font-semibold underline">Action</button>
                  </AlertAction>
                </Alert>
              ))}
            </div>
          </div>
        ))}
      </div>
    );

    await expect(component).toHaveScreenshot('alert-matrix.png', {
      maxDiffPixelRatio: 0.01,
    });
  });
});
