import { test, expect } from '@playwright/experimental-ct-react';
import { CheckIcon } from 'lucide-react';

import { Checkbox, CheckboxIndicator } from '../../src/components/micro/checkbox';
import { CheckboxPreset } from '../../src/components/macro/checkbox-preset';

test.describe('Checkbox (Micro)', () => {
  test('renders identically given the same props (pure component)', async ({ mount }) => {
    const component = await mount(
      <div className="flex gap-4">
        <Checkbox size="lg" data-testid="first">
          <CheckboxIndicator><CheckIcon /></CheckboxIndicator>
        </Checkbox>
        <Checkbox size="lg" data-testid="second">
          <CheckboxIndicator><CheckIcon /></CheckboxIndicator>
        </Checkbox>
      </div>
    );

    const cleanHTML = (html: string) => html.replace(/id="[^"]+"/g, 'id="mocked"').replace(/aria-[a-z]+="[^"]*base-ui-[^"]*"/g, 'aria-mocked="true"');

    const firstHTML = await component.getByTestId('first').evaluate(el => el.innerHTML);
    const secondHTML = await component.getByTestId('second').evaluate(el => el.innerHTML);

    expect(cleanHTML(firstHTML)).toEqual(cleanHTML(secondHTML));
  });

  test('is unchecked by default', async ({ mount }) => {
    const component = await mount(
      <Checkbox>
        <CheckboxIndicator><CheckIcon /></CheckboxIndicator>
      </Checkbox>,
    );

    await expect(component.getByRole('checkbox')).not.toBeChecked();
  });

  test('can be checked by clicking', async ({ mount }) => {
    let isChecked = false;
    const component = await mount(
      <Checkbox onCheckedChange={(c) => { isChecked = !!c; }}>
        <CheckboxIndicator><CheckIcon /></CheckboxIndicator>
      </Checkbox>,
    );

    const checkbox = component.getByRole('checkbox');
    // Base UI Checkbox renders as <span role="checkbox"> — size depends on Tailwind CSS.
    // In CT mode the element may be invisible to Playwright's visibility checks,
    // so we use evaluate() to dispatch the click directly on the DOM node.
    await checkbox.evaluate((el: HTMLElement) => el.click());
    await expect(checkbox).toBeChecked();
    expect(isChecked).toBe(true);
  });

  test('can be toggled off after being checked', async ({ mount }) => {
    const component = await mount(
      <Checkbox defaultChecked>
        <CheckboxIndicator><CheckIcon /></CheckboxIndicator>
      </Checkbox>,
    );

    const checkbox = component.getByRole('checkbox');
    await expect(checkbox).toBeChecked();
    await checkbox.click();
    await expect(checkbox).not.toBeChecked();
  });

  test('disabled checkbox does not toggle when clicked', async ({ mount }) => {
    let checked = false;
    const component = await mount(
      <Checkbox disabled onCheckedChange={(c) => { checked = !!c; }}>
        <CheckboxIndicator><CheckIcon /></CheckboxIndicator>
      </Checkbox>,
    );

    const checkbox = component.getByRole('checkbox');
    await expect(checkbox).toBeDisabled();
    await checkbox.evaluate((el: HTMLElement) => el.click());
    expect(checked).toBe(false);
  });

  test('is focusable via keyboard Tab', async ({ mount, page }) => {
    const component = await mount(
      <Checkbox>
        <CheckboxIndicator><CheckIcon /></CheckboxIndicator>
      </Checkbox>,
    );

    await page.keyboard.press('Tab');
    await expect(component.getByRole('checkbox')).toBeFocused();
  });

  test('can be checked with keyboard Space', async ({ mount }) => {
    const component = await mount(
      <Checkbox>
        <CheckboxIndicator><CheckIcon /></CheckboxIndicator>
      </Checkbox>,
    );

    const checkbox = component.getByRole('checkbox');
    await checkbox.focus();
    await checkbox.press(' ');
    await expect(checkbox).toBeChecked();
  });
});

test.describe('CheckboxPreset (Macro)', () => {
  test('renders label and description', async ({ mount }) => {
    const component = await mount(
      <CheckboxPreset
        label="Accept terms"
        description="You must accept terms"
      />,
    );

    // Use exact label element (role=label is linked via htmlFor) to avoid strict-mode
    // violation when description text also contains the search term.
    await expect(component.locator('[data-slot="field-label"]')).toContainText('Accept terms');
    await expect(component.locator('[data-slot="field-description"]')).toContainText('You must accept terms');
  });

  test('renders error message via FieldError', async ({ mount }) => {
    const component = await mount(
      <CheckboxPreset
        label="Accept terms"
        errorMessage="This field is required"
      />,
    );

    const errorEl = component.getByRole('alert');
    await expect(errorEl).toBeVisible();
    await expect(errorEl).toContainText('This field is required');
  });

  test('label is linked to checkbox via htmlFor', async ({ mount }) => {
    const component = await mount(<CheckboxPreset label="Agree" />);

    const label = component.locator('[data-slot="field-label"]');
    const labelFor = await label.getAttribute('for');
    expect(labelFor).toBeTruthy();

    // Verify the element with that id actually exists in the component
    const linkedEl = component.locator(`#${labelFor}`);
    await expect(linkedEl).toBeAttached();
  });

  test('clicking label toggles the checkbox', async ({ mount }) => {
    const component = await mount(<CheckboxPreset label="Click me" />);

    const checkbox = component.getByRole('checkbox');
    await expect(checkbox).not.toBeChecked();
    await component.locator('[data-slot="field-label"]').click();
    await expect(checkbox).toBeChecked();
  });
});

test.describe('Checkbox Visual Snapshots', () => {
  const SIZES = ["sm", "md", "lg"] as const;

  test('matches visual matrix snapshot', async ({ mount }) => {
    const component = await mount(
      <div className="flex flex-col gap-6 p-6 bg-background">
        <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Sizes & Checked States</h3>
        {SIZES.map((size) => (
          <div key={size} className="flex flex-wrap gap-4 items-center">
            <Checkbox size={size} />
            <Checkbox size={size} defaultChecked>
              <CheckboxIndicator><CheckIcon /></CheckboxIndicator>
            </Checkbox>
            <Checkbox size={size} aria-invalid="true" defaultChecked>
              <CheckboxIndicator><CheckIcon /></CheckboxIndicator>
            </Checkbox>
            <Checkbox size={size} disabled defaultChecked>
              <CheckboxIndicator><CheckIcon /></CheckboxIndicator>
            </Checkbox>
            <Checkbox size={size} disabled />
          </div>
        ))}

        <div className="space-y-2 pt-4 border-t border-border">
          <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Checkbox Preset (Macro)</h3>
          <div className="flex flex-col gap-4">
            <CheckboxPreset label="Standard Option" description="A descriptive text" />
            <CheckboxPreset label="Checked Option" defaultChecked />
            <CheckboxPreset label="Disabled Option" disabled />
            <CheckboxPreset label="Error Option" errorMessage="You must check this" />
          </div>
        </div>
      </div>
    );

    await expect(component).toHaveScreenshot('checkbox-matrix.png', {
      maxDiffPixelRatio: 0.01,
    });
  });
});
