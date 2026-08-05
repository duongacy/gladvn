import { test, expect } from '@playwright/experimental-ct-react';

import { Switch, SwitchThumb } from '../../src/components/micro/switch';
import { SwitchPreset } from '../../src/components/macro/switch-preset';

test.describe('Switch (Micro)', () => {
  test('renders identically given the same props (pure component)', async ({ mount }) => {
    const component = await mount(
      <div className="flex gap-4">
        <Switch size="lg" data-testid="first"><SwitchThumb /></Switch>
        <Switch size="lg" data-testid="second"><SwitchThumb /></Switch>
      </div>
    );

    const cleanHTML = (html: string) => html.replace(/id="[^"]+"/g, 'id="mocked"').replace(/aria-[a-z]+="[^"]*base-ui-[^"]*"/g, 'aria-mocked="true"');

    const firstHTML = await component.getByTestId('first').evaluate(el => el.innerHTML);
    const secondHTML = await component.getByTestId('second').evaluate(el => el.innerHTML);

    expect(cleanHTML(firstHTML)).toEqual(cleanHTML(secondHTML));
  });

  test('is off by default', async ({ mount }) => {
    const component = await mount(
      <Switch>
        <SwitchThumb />
      </Switch>,
    );

    // Base UI Switch renders as <button role="switch"> or similar. Use semantic getByRole selector.
    const sw = component.getByRole('switch');
    await expect(sw).toHaveAttribute('aria-checked', 'false');
  });

  test('can be toggled on', async ({ mount }) => {
    const component = await mount(
      <Switch>
        <SwitchThumb />
      </Switch>,
    );

    const sw = component.getByRole('switch');
    await sw.evaluate((el: HTMLElement) => el.click());
    await expect(sw).toHaveAttribute('aria-checked', 'true');
  });

  test('can be toggled off after being turned on', async ({ mount }) => {
    const component = await mount(
      <Switch defaultChecked>
        <SwitchThumb />
      </Switch>,
    );

    const sw = component.getByRole('switch');
    await expect(sw).toHaveAttribute('aria-checked', 'true');
    await sw.evaluate((el: HTMLElement) => el.click());
    await expect(sw).toHaveAttribute('aria-checked', 'false');
  });

  test('disabled switch cannot be toggled', async ({ mount }) => {
    let checkedState: boolean | undefined;
    const component = await mount(
      <Switch disabled onCheckedChange={(c) => { checkedState = c; }}>
        <SwitchThumb />
      </Switch>,
    );

    // Base UI disabled switch has data-disabled attribute (not HTML disabled)
    const sw = component.getByRole('switch');
    await expect(sw).toHaveAttribute('data-disabled', '');
    
    await sw.evaluate((el: HTMLElement) => el.click());
    await expect(sw).toHaveAttribute('aria-checked', 'false');
    expect(checkedState).toBeUndefined();
  });

  test('is focusable via keyboard Tab', async ({ mount, page }) => {
    const component = await mount(
      <Switch>
        <SwitchThumb />
      </Switch>,
    );

    await page.keyboard.press('Tab');
    await expect(component.getByRole('switch')).toBeFocused();
  });

  test('can be toggled with keyboard Space', async ({ mount }) => {
    const component = await mount(
      <Switch>
        <SwitchThumb />
      </Switch>,
    );

    const sw = component.getByRole('switch');
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

    const sw = component.getByRole('switch');
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

    const sw = component.getByRole('switch');
    await expect(sw).toHaveAttribute('aria-checked', 'false');
    await component.locator('[data-slot="field-label"]').click();
    await expect(sw).toHaveAttribute('aria-checked', 'true');
  });
});

test.describe('Switch Visual Snapshots', () => {
  const SIZES = ["sm", "md", "lg"] as const;

  test('matches visual matrix snapshot', async ({ mount }) => {
    const component = await mount(
      <div className="flex flex-col gap-8 p-6 bg-background">
        <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Sizes & States (Micro)</h3>
        {SIZES.map((size) => (
          <div key={size} className="flex flex-wrap gap-6 items-center">
            <Switch size={size}><SwitchThumb /></Switch>
            <Switch size={size} defaultChecked><SwitchThumb /></Switch>
            <Switch size={size} disabled><SwitchThumb /></Switch>
            <Switch size={size} disabled defaultChecked><SwitchThumb /></Switch>
            <Switch size={size} aria-invalid="true"><SwitchThumb /></Switch>
            <Switch size={size} aria-invalid="true" defaultChecked><SwitchThumb /></Switch>
          </div>
        ))}

        <div className="space-y-4 pt-4 border-t border-border">
          <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Switch Preset (Macro)</h3>
          
          <div className="grid grid-cols-2 gap-8">
            <SwitchPreset 
              label="Standard Switch" 
              description="Enable this feature"
            />
            
            <SwitchPreset 
              label="Checked Switch" 
              defaultChecked
            />

            <SwitchPreset 
              label="Disabled Switch" 
              disabled
              description="You cannot change this"
            />

            <SwitchPreset 
              label="Error Switch" 
              errorMessage="This feature requires attention"
            />
          </div>
        </div>
      </div>
    );

    await expect(component).toHaveScreenshot('switch-matrix.png', {
      maxDiffPixelRatio: 0.01,
    });
  });
});
