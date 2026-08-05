import { test, expect } from '@playwright/experimental-ct-react';
import * as React from 'react';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from '../../src/components/micro/input-otp';
import { MinusIcon } from 'lucide-react';

test.describe('InputOTP (Micro)', () => {
  test('renders correct number of slots and separator', async ({ mount, page }) => {
    await mount(
      <InputOTP maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator>
          <MinusIcon />
        </InputOTPSeparator>
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    );

    // Root element
    const root = page.locator('[data-slot="input-otp"]');
    await expect(root).toBeVisible();

    // Slots
    const slots = page.locator('[data-slot="input-otp-slot"]');
    await expect(slots).toHaveCount(6);

    // Separator
    const separator = page.locator('[data-slot="input-otp-separator"]');
    await expect(separator).toBeVisible();
    await expect(separator).toHaveAttribute('role', 'separator');
  });

  test('types value into hidden input and reflects in slots', async ({ mount, page }) => {
    let otpValue = '';
    
    await mount(
      <InputOTP maxLength={4} onChange={(val) => { otpValue = val; }}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
      </InputOTP>
    );

    // The hidden input should be focusable/typable
    // `input-otp` renders a single visually hidden input over the slots
    const input = page.locator('input');
    await expect(input).toBeAttached();
    
    await input.focus();
    await input.type('1234');
    
    const slots = page.locator('[data-slot="input-otp-slot"]');
    await expect(slots.nth(0)).toHaveText('1');
    await expect(slots.nth(1)).toHaveText('2');
    await expect(slots.nth(2)).toHaveText('3');
    await expect(slots.nth(3)).toHaveText('4');
  });
});

test.describe('InputOTP Visual Snapshots', () => {
  const SIZES = ['sm', 'md', 'lg'] as const;

  test('matches visual matrix snapshot', async ({ mount }) => {
    const component = await mount(
      <div className="flex flex-col gap-8 p-8 bg-background">
        {SIZES.map((size) => (
          <div key={size} className="space-y-4">
            <h3 className="font-bold text-muted-foreground text-sm">Size: {size}</h3>
            
            <InputOTP maxLength={6} size={size} value="123">
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator>
                <MinusIcon />
              </InputOTPSeparator>
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>
        ))}
      </div>
    );

    // Wait a bit to ensure fonts/icons are loaded
    await expect(component).toHaveScreenshot('input-otp-matrix.png', {
      maxDiffPixelRatio: 0.01,
    });
  });
});
