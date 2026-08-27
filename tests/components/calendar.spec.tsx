import { test, expect } from '@playwright/experimental-ct-react';
import * as React from 'react';
import { Calendar } from '../../src/components/micro/calendar';

test.describe('Calendar (Micro)', () => {
  const FIXED_DATE = new Date(2025, 0, 15); // Jan 15, 2025

  test('renders identically given the same props (pure component)', async ({ mount }) => {
    const component = await mount(
      <div className="flex gap-4">
        <Calendar 
          mode="single" 
          defaultMonth={FIXED_DATE} 
          data-testid="first" 
        />
        <Calendar 
          mode="single" 
          defaultMonth={FIXED_DATE} 
          data-testid="second" 
        />
      </div>
    );

    const cleanHTML = (html: string) => html
      .replace(/id="[^"]+"/g, 'id="mocked"')
      .replace(/aria-[a-z]+="[^"]*base-ui-[^"]*"/g, 'aria-mocked="true"');

    const firstHTML = await component.getByTestId('first').evaluate(el => el.outerHTML);
    const secondHTML = await component.getByTestId('second').evaluate(el => el.outerHTML);

    expect(cleanHTML(firstHTML)).toEqual(cleanHTML(secondHTML));
  });

  test('navigates to previous and next months', async ({ mount, page }) => {
    await mount(
      <Calendar 
        mode="single" 
        defaultMonth={new Date(2025, 0, 1)} // Jan 2025
      />
    );

    const prevButton = page.getByRole('button', { name: /previous month/i });
    const nextButton = page.getByRole('button', { name: /next month/i });
    const grid = page.getByRole('grid');

    // Currently in January 2025
    await expect(grid).toHaveAttribute('aria-label', /January 2025/i);

    // Go to next month
    await nextButton.click();
    await expect(grid).toHaveAttribute('aria-label', /February 2025/i);

    // Go back
    await prevButton.click();
    await expect(grid).toHaveAttribute('aria-label', /January 2025/i);
  });

  test('disables navigation buttons at min/max boundaries', async ({ mount, page }) => {
    await mount(
      <Calendar 
        mode="single" 
        defaultMonth={new Date(2025, 0, 1)}
        startMonth={new Date(2025, 0, 1)} // Min: Jan 2025
        endMonth={new Date(2025, 1, 28)} // Max: Feb 2025
      />
    );

    const prevButton = page.getByRole('button', { name: /previous month/i });
    const nextButton = page.getByRole('button', { name: /next month/i });

    // January: Previous should be disabled
    await expect(prevButton).toHaveAttribute('aria-disabled', 'true');
    await expect(nextButton).not.toHaveAttribute('aria-disabled', 'true');

    // Go to February
    await nextButton.click();

    // February: Next should be disabled
    await expect(nextButton).toHaveAttribute('aria-disabled', 'true');
    await expect(prevButton).not.toHaveAttribute('aria-disabled', 'true');
  });

  test('renders dropdown mode when captionLayout is dropdown', async ({ mount, page }) => {
    await mount(
      <Calendar 
        mode="single" 
        defaultMonth={new Date(2025, 0, 1)}
        startMonth={new Date(2020, 0, 1)}
        endMonth={new Date(2030, 11, 31)}
        captionLayout="dropdown"
      />
    );

    // If dropdown renders successfully, we should have two comboboxes
    const comboboxes = page.getByRole('combobox');
    await expect(comboboxes).toHaveCount(2);
  });
});

test.describe('Calendar Visual Snapshots', () => {
  const SIZES = ['sm', 'md', 'lg'] as const;
  const FIXED_DATE = new Date(2025, 0, 15);

  test('matches visual matrix snapshot', async ({ mount }) => {
    const component = await mount(
      <div className="flex flex-col gap-8 p-8 bg-background">
        <div className="flex flex-wrap gap-8 items-start">
          {SIZES.map((size) => (
            <div key={size} className="space-y-4 border p-4 rounded bg-accent/10">
              <h3 className="font-bold text-muted-foreground">Size: {size}</h3>
              <Calendar 
                mode="single"
                size={size}
                defaultMonth={FIXED_DATE}
                selected={FIXED_DATE} // Highlight Jan 15
                className="bg-background shadow-sm rounded-md border"
              />
            </div>
          ))}
        </div>
      </div>
    );

    // Calendar rendering can sometimes be slightly inconsistent on first frame 
    // due to internal state, so we use maxDiffPixelRatio.
    await expect(component).toHaveScreenshot('calendar-matrix.png', {
      maxDiffPixelRatio: 0.02,
    });
  });
});
