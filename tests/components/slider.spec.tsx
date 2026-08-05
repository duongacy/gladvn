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

    await expect(component.locator('[data-slot="slider-track"]')).toBeAttached();
    await expect(component.locator('[data-slot="slider-indicator"]')).toBeAttached();
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

    // Base UI uses a hidden <input type="range"> as the aria-slider element
    const hiddenInput = component.locator('input[type="range"]');
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

    const hiddenInput = component.locator('input[type="range"]');
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

    const hiddenInput = component.locator('input[type="range"]');
    await expect(hiddenInput).toHaveAttribute('min', '10');
    await expect(hiddenInput).toHaveAttribute('max', '200');
  });

  test('can be disabled', async ({ mount }) => {
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

    // Focus the thumb via Tab, then use page.keyboard to dispatch the arrow event
    await page.keyboard.press('Tab');
    await page.keyboard.press('ArrowRight');
    // Wait for the state to propagate
    await expect(component.locator('input[type="range"]')).toHaveAttribute('aria-valuenow', '51');
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

    await page.keyboard.press('Tab');
    await page.keyboard.press('ArrowLeft');
    await expect(component.locator('input[type="range"]')).toHaveAttribute('aria-valuenow', '49');
  });
});
