import { test, expect } from '@playwright/experimental-ct-react';
import { CheckIcon } from 'lucide-react';

import { Checkbox, CheckboxIndicator } from '../../src/components/micro/checkbox';
import { CheckboxPreset } from '../../src/components/macro/checkbox-preset';

test.describe('Checkbox (Micro)', () => {
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

  test('is disabled when disabled prop is true', async ({ mount }) => {
    const component = await mount(
      <Checkbox disabled>
        <CheckboxIndicator><CheckIcon /></CheckboxIndicator>
      </Checkbox>,
    );

    await expect(component.getByRole('checkbox')).toBeDisabled();
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
