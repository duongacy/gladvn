import { test, expect } from '@playwright/experimental-ct-react';

import { Input } from '../../src/components/micro/input';
import { InputPreset } from '../../src/components/macro/input-preset';

test.describe('Input (Micro)', () => {
  test('renders with placeholder', async ({ mount }) => {
    const component = await mount(<Input placeholder="Enter text..." />);
    await expect(component).toHaveAttribute('placeholder', 'Enter text...');
  });

  test('accepts typed text', async ({ mount }) => {
    const component = await mount(<Input />);
    await component.fill('Hello Playwright');
    await expect(component).toHaveValue('Hello Playwright');
  });

  test('is disabled when disabled prop is true', async ({ mount }) => {
    const component = await mount(<Input disabled />);
    await expect(component).toBeDisabled();
  });

  test('is focusable via keyboard Tab', async ({ mount, page }) => {
    const component = await mount(<Input placeholder="Focus me" />);
    await page.keyboard.press('Tab');
    await expect(component).toBeFocused();
  });

  test('accepts value when type is password', async ({ mount }) => {
    const component = await mount(<Input type="password" />);
    await expect(component).toHaveAttribute('type', 'password');
    await component.fill('secret123');
    await expect(component).toHaveValue('secret123');
  });
});

test.describe('InputPreset (Macro)', () => {
  test('renders label, description, and error', async ({ mount }) => {
    const component = await mount(
      <InputPreset
        label="Username"
        description="Public display name"
        errorMessage="Username taken"
        placeholder="johndoe"
      />,
    );

    // Use data-slot selectors to avoid strict mode violations from substring matches
    await expect(component.locator('[data-slot="field-label"]')).toContainText('Username');
    await expect(component.locator('[data-slot="field-description"]')).toContainText('Public display name');
    await expect(component.getByRole('alert')).toContainText('Username taken');
    await expect(component.locator('input')).toHaveAttribute('placeholder', 'johndoe');
  });

  test('label is linked to input via htmlFor', async ({ mount }) => {
    const component = await mount(<InputPreset label="Email" />);

    const input = component.locator('input');
    const inputId = await input.getAttribute('id');
    const label = component.locator('[data-slot="field-label"]');
    const labelFor = await label.getAttribute('for');

    expect(inputId).toBeTruthy();
    expect(labelFor).toBe(inputId);
  });

  test('input carries aria-invalid when errorMessage is provided', async ({ mount }) => {
    const component = await mount(
      <InputPreset label="Name" errorMessage="Required" />,
    );

    await expect(component.locator('input')).toHaveAttribute('aria-invalid', 'true');
  });

  test('password type shows toggle button', async ({ mount }) => {
    const component = await mount(
      <InputPreset label="Password" type="password" />,
    );

    const toggleBtn = component.getByRole('button', { name: /show password/i });
    await expect(toggleBtn).toBeVisible();
  });

  test('password toggle reveals plaintext', async ({ mount }) => {
    const component = await mount(
      <InputPreset label="Password" type="password" />,
    );

    const input = component.locator('input');
    await expect(input).toHaveAttribute('type', 'password');

    await component.getByRole('button', { name: /show password/i }).click();
    await expect(input).toHaveAttribute('type', 'text');
  });

  test('renders startAdornment string as text', async ({ mount }) => {
    const component = await mount(
      <InputPreset label="Price" startAdornment="$" />,
    );

    await expect(component.getByText('$')).toBeVisible();
  });
});
