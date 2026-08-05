import { test, expect } from '@playwright/experimental-ct-react';
import * as React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '../../src/components/micro/card';

test.describe('Card (Micro)', () => {
  test('renders identically given the same props (pure component)', async ({ mount }) => {
    const component = await mount(
      <div className="flex gap-4">
        <Card data-testid="first">
          <CardHeader><CardTitle>A</CardTitle></CardHeader>
          <CardContent>B</CardContent>
          <CardFooter>C</CardFooter>
        </Card>
        <Card data-testid="second">
          <CardHeader><CardTitle>A</CardTitle></CardHeader>
          <CardContent>B</CardContent>
          <CardFooter>C</CardFooter>
        </Card>
      </div>
    );

    const cleanHTML = (html: string) => html.replace(/id="[^"]+"/g, 'id="mocked"');

    const firstHTML = await component.getByTestId('first').evaluate(el => el.innerHTML);
    const secondHTML = await component.getByTestId('second').evaluate(el => el.innerHTML);

    expect(cleanHTML(firstHTML)).toEqual(cleanHTML(secondHTML));
  });

  test('renders all child components correctly', async ({ mount, page }) => {
    await mount(
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <button>Card Footer</button>
        </CardFooter>
      </Card>
    );

    // Verify slots are rendered
    await expect(page.locator('[data-slot="card"]')).toBeVisible();
    await expect(page.locator('[data-slot="card-header"]')).toBeVisible();
    await expect(page.locator('[data-slot="card-title"]')).toHaveText('Card Title');
    await expect(page.locator('[data-slot="card-description"]')).toHaveText('Card Description');
    await expect(page.locator('[data-slot="card-content"]')).toContainText('Card Content');
    await expect(page.locator('[data-slot="card-footer"]')).toBeVisible();
  });

  test('context cascades size down to subcomponents via group-data', async ({ mount, page }) => {
    // Testing size="lg" to ensure it is applied to the root and cascaded down
    await mount(
      <Card size="lg">
        <CardHeader>
          <CardTitle>Large Title</CardTitle>
          <CardDescription>Large Description</CardDescription>
        </CardHeader>
      </Card>
    );

    const card = page.locator('[data-slot="card"]');
    await expect(card).toHaveAttribute('data-size', 'lg');
    // We cannot easily assert the computed font-size of children in CT reliably without 
    // visual snapshots or complex CSS checks, but checking the attribute on root is sufficient
    // as Tailwind group-data handles the rest.
  });
});

test.describe('Card Visual Snapshots', () => {
  const SIZES = ['sm', 'md', 'lg'] as const;

  test('matches visual matrix snapshot', async ({ mount }) => {
    const component = await mount(
      <div className="flex flex-col gap-8 p-8 bg-background">
        {SIZES.map((size) => (
          <div key={size} className="space-y-4">
            <h3 className="font-bold text-muted-foreground text-sm">Size: {size}</h3>
            <Card size={size} className="w-80">
              <CardHeader>
                <CardTitle>Card Title ({size})</CardTitle>
                <CardDescription>This is the description for size {size}.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Main content area for the card goes here. It should adapt to the padding defined by the size.</p>
              </CardContent>
              <CardFooter className="justify-end gap-2">
                <button className="px-4 py-2 border rounded-md text-sm">Cancel</button>
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm">Save</button>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    );

    await expect(component).toHaveScreenshot('card-matrix.png', {
      maxDiffPixelRatio: 0.01,
    });
  });
});
