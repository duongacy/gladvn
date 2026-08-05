import { test, expect } from '@playwright/experimental-ct-react';

import { Switch, SwitchThumb } from '../../src/components/micro/switch';
import { SwitchPreset } from '../../src/components/macro/switch-preset';

test.describe('Switch (Micro)', () => {
  test('is off by default', async ({ mount }) => {
    const component = await mount(
      <Switch>
        <SwitchThumb />
      </Switch>,
    );

    // Base UI Switch renders as <span role="switch"> which may not be Playwright-clickable
    // directly because of zero-size ::after pseudo-element hit-test. Use data-slot selector.
    const sw = component.locator('[data-slot="switch"]');
    await expect(sw).toHaveAttribute('aria-checked', 'false');
  });

  test('can be toggled on', async ({ mount }) => {
    const component = await mount(
      <Switch>
        <SwitchThumb />
      </Switch>,
    );

    const sw = component.locator('[data-slot="switch"]');
    await sw.evaluate((el: HTMLElement) => el.click());
    await expect(sw).toHaveAttribute('aria-checked', 'true');
  });

  test('can be toggled off after being turned on', async ({ mount }) => {
    const component = await mount(
      <Switch defaultChecked>
        <SwitchThumb />
      </Switch>,
    );

    const sw = component.locator('[data-slot="switch"]');
    await expect(sw).toHaveAttribute('aria-checked', 'true');
    await sw.evaluate((el: HTMLElement) => el.click());
    await expect(sw).toHaveAttribute('aria-checked', 'false');
  });

  test('is disabled when disabled prop is true', async ({ mount }) => {
    const component = await mount(
      <Switch disabled>
        <SwitchThumb />
      </Switch>,
    );

    // Base UI disabled switch has data-disabled attribute (not HTML disabled)
    const sw = component.locator('[data-slot="switch"]');
    await expect(sw).toHaveAttribute('data-disabled', '');
  });

  test('is focusable via keyboard Tab', async ({ mount, page }) => {
    const component = await mount(
      <Switch>
        <SwitchThumb />
      </Switch>,
    );

    await page.keyboard.press('Tab');
    await expect(component.locator('[data-slot="switch"]')).toBeFocused();
  });

  test('can be toggled with keyboard Space', async ({ mount }) => {
    const component = await mount(
      <Switch>
        <SwitchThumb />
      </Switch>,
    );

    const sw = component.locator('[data-slot="switch"]');
    await sw.focus();
    await sw.press(' ');
    await expect(sw).toHaveAttribute('aria-checked', 'true');
  });

  test('fires onCheckedChange callback on toggle', async ({ mount }) => {
    let checkedState: boolean | undefined;
    const component = await mount(
      <Switch onCheckedChange={(c) => { checkedState = c; }}>
        <SwitchThumb />
      </Switch>,
    );

    const sw = component.locator('[data-slot="switch"]');
    await sw.evaluate((el: HTMLElement) => el.click());
    expect(checkedState).toBe(true);
  });
});

test.describe('SwitchPreset (Macro)', () => {
  test('renders label and description', async ({ mount }) => {
    const component = await mount(
      <SwitchPreset
        label="Airplane Mode"
        description="Disable all network connections"
      />,
    );

    await expect(component.locator('[data-slot="field-label"]')).toContainText('Airplane Mode');
    await expect(component.locator('[data-slot="field-description"]')).toContainText('Disable all network connections');
  });

  test('renders error message via FieldError', async ({ mount }) => {
    const component = await mount(
      <SwitchPreset
        label="Notifications"
        errorMessage="You must enable notifications"
      />,
    );

    const error = component.getByRole('alert');
    await expect(error).toBeVisible();
    await expect(error).toContainText('You must enable notifications');
  });

  test('label is linked to switch via htmlFor', async ({ mount }) => {
    const component = await mount(<SwitchPreset label="Dark Mode" />);

    const label = component.locator('[data-slot="field-label"]');
    const labelFor = await label.getAttribute('for');
    expect(labelFor).toBeTruthy();

    // Verify the element with that id exists in the component
    const linkedEl = component.locator(`#${labelFor}`);
    await expect(linkedEl).toBeAttached();
  });

  test('clicking label toggles the switch', async ({ mount }) => {
    const component = await mount(<SwitchPreset label="Enable alerts" />);

    const sw = component.locator('[data-slot="switch"]');
    await expect(sw).toHaveAttribute('aria-checked', 'false');
    await component.locator('[data-slot="field-label"]').click();
    await expect(sw).toHaveAttribute('aria-checked', 'true');
  });
});
