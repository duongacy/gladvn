import { test, expect } from '@playwright/experimental-ct-react';
import * as React from 'react';
import { Textarea } from '../../src/components/micro/textarea';

test.describe('Textarea (Micro)', () => {
  test('renders identically given the same props (pure component)', async ({ mount }) => {
    const props = { placeholder: 'Type here', size: 'lg' } as const;

    const component = await mount(
      <div className="flex gap-4">
        <Textarea {...props} data-testid="first" />
        <Textarea {...props} data-testid="second" />
      </div>
    );

    const cleanHTML = (html: string) => html
      .replace(/id="[^"]+"/g, 'id="mocked"')
      .replace(/aria-[a-z]+="[^"]*base-ui-[^"]*"/g, 'aria-mocked="true"');

    const firstHTML = await component.getByTestId('first').evaluate(el => el.outerHTML);
    const secondHTML = await component.getByTestId('second').evaluate(el => el.outerHTML);

    expect(cleanHTML(firstHTML)).toEqual(cleanHTML(secondHTML));
  });

  test('is disabled and prevents typing when disabled prop is true', async ({ mount, page }) => {
    const component = await mount(
      <Textarea disabled />
    );

    // Should have disabled attribute
    await expect(component).toBeDisabled();

    // Attempt to click and type
    await component.click({ force: true }); // force click because it's pointer-events-none
    await page.keyboard.type('Hello');

    // Value should not have changed
    await expect(component).toHaveValue('');
  });

  test('allows typing when enabled', async ({ mount }) => {
    const component = await mount(
      <Textarea />
    );

    await expect(component).toBeEnabled();
    await component.fill('Hello World');
    
    await expect(component).toHaveValue('Hello World');
  });

  test('is focusable via keyboard Tab', async ({ mount, page }) => {
    const component = await mount(
      <div>
        <button id="prev">Previous</button>
        <Textarea data-testid="textarea" />
      </div>
    );

    const prevButton = component.getByRole('button', { name: 'Previous' });
    const textarea = component.getByTestId('textarea');

    await prevButton.focus();
    await expect(prevButton).toBeFocused();

    await page.keyboard.press('Tab');
    await expect(textarea).toBeFocused();
  });
});

test.describe('Textarea Visual Snapshots', () => {
  const SIZES = ['sm', 'md', 'lg'] as const;
  const STATES = ['default', 'disabled', 'invalid'] as const;

  test('matches visual matrix snapshot', async ({ mount }) => {
    const component = await mount(
      <div className="flex flex-col gap-8 p-8 bg-background">
        {SIZES.map((size) => (
          <div key={size} className="space-y-4">
            <h3 className="text-sm font-bold text-muted-foreground uppercase">Size: {size}</h3>
            <div className="flex flex-wrap gap-6 items-start">
              {STATES.map((state) => {
                const props = {
                  disabled: state === 'disabled',
                  'aria-invalid': state === 'invalid' ? true : undefined,
                  placeholder: `Type here (${state})`,
                  defaultValue: state === 'invalid' ? 'Invalid input' : undefined,
                };
                return (
                  <div key={`${size}-${state}`} className="w-64 flex flex-col gap-2">
                    <span className="text-xs text-muted-foreground">{state}</span>
                    <Textarea size={size} {...props} />
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    );

    await expect(component).toHaveScreenshot('textarea-matrix.png', {
      maxDiffPixelRatio: 0.01,
    });
  });
});
