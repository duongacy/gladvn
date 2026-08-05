import { test, expect } from '@playwright/experimental-ct-react';

import { Input } from '../../src/components/micro/input';
import { InputPreset } from '../../src/components/macro/input-preset';

test.describe('Input (Micro)', () => {
  test('renders identically given the same props (pure component)', async ({ mount }) => {
    const component = await mount(
      <div className="flex gap-4">
        <Input size="lg" placeholder="Test" data-testid="first" />
        <Input size="lg" placeholder="Test" data-testid="second" />
      </div>
    );

    const cleanHTML = (html: string) => html.replace(/id="[^"]+"/g, 'id="mocked"').replace(/aria-[a-z]+="[^"]*base-ui-[^"]*"/g, 'aria-mocked="true"');

    const firstHTML = await component.getByTestId('first').evaluate(el => el.innerHTML);
    const secondHTML = await component.getByTestId('second').evaluate(el => el.innerHTML);

    expect(cleanHTML(firstHTML)).toEqual(cleanHTML(secondHTML));
  });

  test('renders with placeholder', async ({ mount }) => {
    const component = await mount(<Input placeholder="Enter text..." />);
    await expect(component).toHaveAttribute('placeholder', 'Enter text...');
  });

  test('accepts typed text', async ({ mount }) => {
    const component = await mount(<Input />);
    await component.fill('Hello Playwright');
    await expect(component).toHaveValue('Hello Playwright');
  });

  test('disabled input cannot be typed into', async ({ mount }) => {
    const component = await mount(<Input disabled />);
    await expect(component).toBeDisabled();
    
    // Playwright `fill` throws an error if an element is disabled,
    // so we verify it explicitly throws or just use `{ force: true }`
    // but `force: true` on `fill` still errors if it's truly disabled in the DOM.
    // Let's assert it's strictly disabled.
    try {
      await component.fill('test', { timeout: 1000 });
      // Should not reach here
      expect(true).toBe(false);
    } catch (e) {
      expect(e).toBeDefined();
    }
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

test.describe('Input Visual Snapshots', () => {
  const SIZES = ["sm", "md", "lg"] as const;

  test('matches visual matrix snapshot', async ({ mount }) => {
    const component = await mount(
      <div className="flex flex-col gap-6 p-6 bg-background max-w-2xl">
        <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Sizes & States (Micro)</h3>
        {SIZES.map((size) => (
          <div key={size} className="flex gap-4 items-center">
            <Input size={size} placeholder={`Size: ${size}`} className="w-32" />
            <Input size={size} defaultValue="Filled Value" className="w-32" />
            <Input size={size} disabled defaultValue="Disabled" className="w-32" />
            <Input size={size} aria-invalid="true" defaultValue="Error state" className="w-32" />
          </div>
        ))}

        <div className="space-y-4 pt-4 border-t border-border w-80">
          <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Input Preset (Macro)</h3>
          <InputPreset label="Standard Input" description="A descriptive text" placeholder="example@email.com" />
          <InputPreset label="Disabled Input" disabled value="Cannot edit me" />
          <InputPreset label="Error Input" errorMessage="This field is required" defaultValue="Wrong value" />
          <InputPreset label="Password Input" type="password" defaultValue="secret123" />
          <InputPreset label="With Adornments" startAdornment="https://" endAdornment=".com" placeholder="example" />
        </div>
      </div>
    );

    await expect(component).toHaveScreenshot('input-matrix.png', {
      maxDiffPixelRatio: 0.01,
    });
  });
});
