import { test, expect } from '@playwright/experimental-ct-react';

import { RadioGroup, RadioGroupItem } from '../../src/components/micro/radio-group';
import { RadioGroupPreset } from '../../src/components/macro/radio-group-preset';

test.describe('RadioGroup (Micro)', () => {
  test('items are unchecked by default', async ({ mount }) => {
    const component = await mount(
      <RadioGroup>
        <RadioGroupItem value="apple" data-testid="radio-apple" />
        <RadioGroupItem value="banana" data-testid="radio-banana" />
      </RadioGroup>,
    );

    await expect(component.getByTestId('radio-apple')).not.toBeChecked();
    await expect(component.getByTestId('radio-banana')).not.toBeChecked();
  });

  test('selects an item on click', async ({ mount }) => {
    let selectedValue = '';
    const component = await mount(
      <RadioGroup onValueChange={(val) => { selectedValue = val as string; }}>
        <RadioGroupItem value="apple" data-testid="radio-apple" />
        <RadioGroupItem value="banana" data-testid="radio-banana" />
      </RadioGroup>,
    );

    // Base UI Radio is a <span role="radio"> — need force since it's invisible by default
    // in compact headless mode. Use evaluate to click safely.
    const appleRadio = component.getByTestId('radio-apple');
    await appleRadio.evaluate((el: HTMLElement) => el.click());
    await expect(appleRadio).toBeChecked();
    expect(selectedValue).toBe('apple');
  });

  test('selecting one item deselects the other', async ({ mount }) => {
    const component = await mount(
      <RadioGroup>
        <RadioGroupItem value="apple" data-testid="radio-apple" />
        <RadioGroupItem value="banana" data-testid="radio-banana" />
      </RadioGroup>,
    );

    await component.getByTestId('radio-apple').evaluate((el: HTMLElement) => el.click());
    await component.getByTestId('radio-banana').evaluate((el: HTMLElement) => el.click());

    await expect(component.getByTestId('radio-apple')).not.toBeChecked();
    await expect(component.getByTestId('radio-banana')).toBeChecked();
  });

  test('is disabled when RadioGroup disabled prop is set', async ({ mount }) => {
    const component = await mount(
      <RadioGroup disabled>
        <RadioGroupItem value="apple" data-testid="radio-apple" />
      </RadioGroup>,
    );

    await expect(component.getByTestId('radio-apple')).toBeDisabled();
  });

  test('navigates items with arrow keys', async ({ mount }) => {
    const component = await mount(
      <RadioGroup>
        <RadioGroupItem value="apple" data-testid="radio-apple" />
        <RadioGroupItem value="banana" data-testid="radio-banana" />
      </RadioGroup>,
    );

    const apple = component.getByTestId('radio-apple');
    await apple.evaluate((el: HTMLElement) => el.click());
    await apple.press('ArrowDown');

    await expect(component.getByTestId('radio-banana')).toBeChecked();
  });
});

test.describe('RadioGroupPreset (Macro)', () => {
  const options = [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' },
    { value: 'maybe', label: 'Maybe', disabled: true },
  ];

  test('renders label, description, and error', async ({ mount }) => {
    const component = await mount(
      <RadioGroupPreset
        options={options}
        label="Do you agree?"
        description="Please choose an option."
        errorMessage="Required field."
      />,
    );

    await expect(component.locator('[data-slot="field-label"]').first()).toContainText('Do you agree?');
    await expect(component.locator('[data-slot="field-description"]')).toContainText('Please choose an option.');
    await expect(component.getByRole('alert')).toContainText('Required field.');
  });

  test('renders all option labels', async ({ mount }) => {
    const component = await mount(
      <RadioGroupPreset options={options} label="Preference" />,
    );

    await expect(component.getByText('Yes')).toBeVisible();
    await expect(component.getByText('No')).toBeVisible();
    await expect(component.getByText('Maybe')).toBeVisible();
  });

  test('disabled option radio button is disabled', async ({ mount }) => {
    const component = await mount(
      <RadioGroupPreset options={options} label="Preference" />,
    );

    // The "Maybe" option has disabled: true, its RadioGroupItem should be disabled
    await expect(component.locator('[data-slot="radio-group-item"][data-disabled]')).toBeAttached();
  });

  test('selecting an option fires onValueChange', async ({ mount }) => {
    let selected = '';
    const component = await mount(
      <RadioGroupPreset
        options={options}
        label="Preference"
        onValueChange={(v) => { selected = v as string; }}
      />,
    );

    // Click the radio item directly (not the label) for reliability
    const yesRadio = component.locator('[data-slot="radio-group-item"]').first();
    await yesRadio.evaluate((el: HTMLElement) => el.click());
    expect(selected).toBe('yes');
  });
});
