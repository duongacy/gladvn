import { test, expect } from '@playwright/experimental-ct-react';

import { RadioGroup, RadioGroupItem } from '../../src/components/micro/radio-group';
import { RadioGroupPreset } from '../../src/components/macro/radio-group-preset';

test.describe('RadioGroup (Micro)', () => {
  test('renders identically given the same props (pure component)', async ({ mount }) => {
    const component = await mount(
      <div className="flex gap-4">
        <RadioGroupItem value="test" size="lg" data-testid="first" />
        <RadioGroupItem value="test" size="lg" data-testid="second" />
      </div>
    );

    const cleanHTML = (html: string) => html.replace(/id="[^"]+"/g, 'id="mocked"').replace(/aria-[a-z]+="[^"]*base-ui-[^"]*"/g, 'aria-mocked="true"');

    const firstHTML = await component.getByTestId('first').evaluate(el => el.innerHTML);
    const secondHTML = await component.getByTestId('second').evaluate(el => el.innerHTML);

    expect(cleanHTML(firstHTML)).toEqual(cleanHTML(secondHTML));
  });

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

  test('disabled radio cannot be selected on click', async ({ mount }) => {
    let selectedValue = '';
    const component = await mount(
      <RadioGroup onValueChange={(val) => { selectedValue = val as string; }}>
        <RadioGroupItem value="apple" disabled data-testid="radio-apple" />
      </RadioGroup>,
    );

    const appleRadio = component.getByTestId('radio-apple');
    await expect(appleRadio).toBeDisabled();
    await appleRadio.evaluate((el: HTMLElement) => el.click());
    
    await expect(appleRadio).not.toBeChecked();
    expect(selectedValue).toBe('');
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

test.describe('RadioGroup Visual Snapshots', () => {
  const SIZES = ["sm", "md", "lg"] as const;

  test('matches visual matrix snapshot', async ({ mount }) => {
    const component = await mount(
      <div className="flex flex-col gap-8 p-6 bg-background">
        <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Sizes & States (Micro)</h3>
        {SIZES.map((size) => (
          <div key={size} className="flex flex-wrap gap-6 items-center">
            <RadioGroup defaultValue="checked" className="flex flex-row gap-4">
              <RadioGroupItem size={size} value="unchecked" />
              <RadioGroupItem size={size} value="checked" />
            </RadioGroup>
            <RadioGroup defaultValue="disabled-checked" className="flex flex-row gap-4">
              <RadioGroupItem size={size} value="disabled" disabled />
              <RadioGroupItem size={size} value="disabled-checked" disabled />
            </RadioGroup>
            <RadioGroup className="flex flex-row gap-4">
              <RadioGroupItem size={size} value="error" aria-invalid="true" />
            </RadioGroup>
          </div>
        ))}

        <div className="space-y-4 pt-4 border-t border-border">
          <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Radio Group Preset (Macro)</h3>
          
          <div className="grid grid-cols-2 gap-8">
            <RadioGroupPreset 
              label="Standard Radio" 
              description="Pick one option"
              defaultValue="yes"
              options={[
                { label: "Yes", value: "yes" },
                { label: "No", value: "no" }
              ]} 
            />
            
            <RadioGroupPreset 
              label="Disabled Group" 
              disabled
              defaultValue="option1"
              options={[
                { label: "Option 1", value: "option1" },
                { label: "Option 2", value: "option2" }
              ]} 
            />

            <RadioGroupPreset 
              label="Error State" 
              errorMessage="You must select an option"
              options={[
                { label: "Valid", value: "valid" },
                { label: "Invalid", value: "invalid" }
              ]} 
            />

            <RadioGroupPreset 
              label="With Disabled Option" 
              options={[
                { label: "Available", value: "a" },
                { label: "Unavailable", value: "b", disabled: true }
              ]} 
            />
          </div>
        </div>
      </div>
    );

    await expect(component).toHaveScreenshot('radio-group-matrix.png', {
      maxDiffPixelRatio: 0.01,
    });
  });
});
