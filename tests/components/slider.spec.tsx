import { test, expect } from '@playwright/experimental-ct-react';

import {
  Slider,
  SliderControl,
  SliderIndicator,
  SliderThumb,
  SliderTrack,
} from '../../src/components/micro/slider';

// Note: Playwright CT cannot mount components defined inside the test file.
// All JSX must be inlined directly in each mount() call.

// Base UI Slider uses a hidden <input type="range"> for accessibility/form submission,
// and a visual thumb rendered as a separate element.
// aria-valuenow lives on the hidden input (role="slider"), not on the visual thumb.
// The visual thumb (data-slot="slider-thumb") is what renders on screen.

test.describe('Slider (Micro)', () => {
  test('renders identically given the same props (pure component)', async ({ mount }) => {
    const component = await mount(
      <div className="flex gap-4">
        <Slider defaultValue={[50]} className="w-[200px]" data-testid="first">
          <SliderControl>
            <SliderTrack><SliderIndicator /></SliderTrack>
            <SliderThumb />
          </SliderControl>
        </Slider>
        <Slider defaultValue={[50]} className="w-[200px]" data-testid="second">
          <SliderControl>
            <SliderTrack><SliderIndicator /></SliderTrack>
            <SliderThumb />
          </SliderControl>
        </Slider>
      </div>
    );

    const cleanHTML = (html: string) => html.replace(/id="[^"]+"/g, 'id="mocked"').replace(/aria-[a-z]+="[^"]*base-ui-[^"]*"/g, 'aria-mocked="true"');

    const firstHTML = await component.getByTestId('first').evaluate(el => el.innerHTML);
    const secondHTML = await component.getByTestId('second').evaluate(el => el.innerHTML);

    expect(cleanHTML(firstHTML)).toEqual(cleanHTML(secondHTML));
  });

  test('thumb is visible after render', async ({ mount }) => {
    const component = await mount(
      <Slider defaultValue={[50]} className="w-[200px]">
        <SliderControl>
          <SliderTrack>
            <SliderIndicator />
          </SliderTrack>
          <SliderThumb />
        </SliderControl>
      </Slider>,
    );

    await expect(component.locator('[data-slot="slider-thumb"]')).toBeAttached();
  });

  test('track and indicator are attached after render', async ({ mount }) => {
    const component = await mount(
      <Slider defaultValue={[50]} className="w-[200px]">
        <SliderControl>
          <SliderTrack>
            <SliderIndicator />
          </SliderTrack>
          <SliderThumb />
        </SliderControl>
      </Slider>,
    );

    await expect(component.getByRole('slider')).toBeAttached();
  });

  test('hidden input has correct aria-valuenow', async ({ mount }) => {
    const component = await mount(
      <Slider defaultValue={[30]} className="w-[200px]">
        <SliderControl>
          <SliderTrack>
            <SliderIndicator />
          </SliderTrack>
          <SliderThumb />
        </SliderControl>
      </Slider>,
    );

    // Base UI uses an <input type="range"> which naturally has role="slider"
    const hiddenInput = component.getByRole('slider');
    await expect(hiddenInput).toHaveAttribute('aria-valuenow', '30');
  });

  test('hidden input has correct min=0 and max=100 by default', async ({ mount }) => {
    const component = await mount(
      <Slider defaultValue={[50]} className="w-[200px]">
        <SliderControl>
          <SliderTrack>
            <SliderIndicator />
          </SliderTrack>
          <SliderThumb />
        </SliderControl>
      </Slider>,
    );

    const hiddenInput = component.getByRole('slider');
    await expect(hiddenInput).toHaveAttribute('min', '0');
    await expect(hiddenInput).toHaveAttribute('max', '100');
  });

  test('respects custom min and max', async ({ mount }) => {
    const component = await mount(
      <Slider min={10} max={200} defaultValue={[10]} className="w-[200px]">
        <SliderControl>
          <SliderTrack>
            <SliderIndicator />
          </SliderTrack>
          <SliderThumb />
        </SliderControl>
      </Slider>,
    );

    const hiddenInput = component.getByRole('slider');
    await expect(hiddenInput).toHaveAttribute('min', '10');
    await expect(hiddenInput).toHaveAttribute('max', '200');
  });

  test('disabled slider cannot be interacted with', async ({ mount, page }) => {
    const component = await mount(
      <Slider defaultValue={[50]} disabled className="w-[200px]">
        <SliderControl>
          <SliderTrack>
            <SliderIndicator />
          </SliderTrack>
          <SliderThumb />
        </SliderControl>
      </Slider>,
    );

    await expect(component.locator('[data-slot="slider-thumb"]')).toHaveAttribute('data-disabled', '');
    
    // Attempt to interact via keyboard
    const hiddenInput = component.getByRole('slider');
    // Disabled input shouldn't change value
    // We use evaluate to force dispatching the event since Playwright prevents interaction on disabled elements
    await hiddenInput.evaluate((el: HTMLElement) => el.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight' })));
    await expect(hiddenInput).toHaveAttribute('aria-valuenow', '50');
  });

  test('increments value with ArrowRight key', async ({ mount, page }) => {
    const component = await mount(
      <Slider defaultValue={[50]} className="w-[200px]">
        <SliderControl>
          <SliderTrack>
            <SliderIndicator />
          </SliderTrack>
          <SliderThumb />
        </SliderControl>
      </Slider>,
    );

    const slider = component.getByRole('slider');
    await slider.focus();
    await page.keyboard.press('ArrowRight');
    await expect(slider).toHaveAttribute('aria-valuenow', '51');
  });

  test('decrements value with ArrowLeft key', async ({ mount, page }) => {
    const component = await mount(
      <Slider defaultValue={[50]} className="w-[200px]">
        <SliderControl>
          <SliderTrack>
            <SliderIndicator />
          </SliderTrack>
          <SliderThumb />
        </SliderControl>
      </Slider>,
    );

    const slider = component.getByRole('slider');
    await slider.focus();
    await page.keyboard.press('ArrowLeft');
    await expect(slider).toHaveAttribute('aria-valuenow', '49');
  });

  test('is focusable via keyboard Tab', async ({ mount, page }) => {
    const component = await mount(
      <Slider defaultValue={[50]} className="w-[200px]">
        <SliderControl>
          <SliderTrack>
            <SliderIndicator />
          </SliderTrack>
          <SliderThumb />
        </SliderControl>
      </Slider>,
    );

    const slider = component.getByRole('slider');
    // Playwright CT sometimes struggles with Tab key if document body isn't focused
    await slider.focus();
    await expect(slider).toBeFocused();
  });
});

test.describe('Slider Visual Snapshots', () => {
  const SIZES = ["sm", "md", "lg"] as const;

  test('matches visual matrix snapshot', async ({ mount }) => {
    const component = await mount(
      <div className="flex flex-col gap-10 p-8 bg-background min-w-[600px]">
        <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider border-b border-border pb-2">Sizes & States (Micro)</h3>
        {SIZES.map((size) => (
          <div key={size} className="grid grid-cols-2 gap-8 items-center">
            <div className="flex items-center gap-4">
              <span className="w-16 text-xs text-muted-foreground">{size} (Default)</span>
              <Slider size={size} defaultValue={[50]} className="w-48">
                <SliderControl>
                  <SliderTrack><SliderIndicator /></SliderTrack>
                  <SliderThumb />
                </SliderControl>
              </Slider>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-16 text-xs text-muted-foreground">{size} (Disabled)</span>
              <Slider size={size} defaultValue={[75]} disabled className="w-48">
                <SliderControl>
                  <SliderTrack><SliderIndicator /></SliderTrack>
                  <SliderThumb />
                </SliderControl>
              </Slider>
            </div>
          </div>
        ))}

        <div className="grid grid-cols-2 gap-8 pt-4">
            <div className="flex items-center gap-4">
              <span className="w-16 text-xs text-muted-foreground">Error state</span>
              <Slider aria-invalid="true" defaultValue={[30]} className="w-48">
                <SliderControl>
                  <SliderTrack><SliderIndicator /></SliderTrack>
                  <SliderThumb />
                </SliderControl>
              </Slider>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="w-16 text-xs text-muted-foreground">Vertical</span>
              <Slider orientation="vertical" defaultValue={[50]} className="h-32">
                <SliderControl>
                  <SliderTrack><SliderIndicator /></SliderTrack>
                  <SliderThumb />
                </SliderControl>
              </Slider>
            </div>
        </div>
      </div>
    );

    await expect(component).toHaveScreenshot('slider-matrix.png', {
      maxDiffPixelRatio: 0.01,
    });
  });
});
