import { test, expect } from '@playwright/experimental-ct-react';
import * as React from 'react';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from '../../src/components/micro/input-group';
import { SearchIcon, SendIcon } from 'lucide-react';

test.describe('InputGroup (Micro)', () => {
  test('renders with all components correctly', async ({ mount, page }) => {
    await mount(
      <InputGroup size="md">
        <InputGroupAddon align="start">
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon align="end">
          <InputGroupText>⌘K</InputGroupText>
        </InputGroupAddon>
        <InputGroupButton variant="solid">Search</InputGroupButton>
      </InputGroup>
    );

    // Root group
    const group = page.locator('[data-slot="input-group"]');
    await expect(group).toBeVisible();
    await expect(group).toHaveAttribute('data-size', 'md');

    // Addons
    await expect(page.locator('[data-slot="input-group-addon"]').first()).toHaveAttribute('data-align', 'start');
    await expect(page.locator('[data-slot="input-group-addon"]').nth(1)).toHaveAttribute('data-align', 'end');

    // Input
    await expect(page.getByPlaceholder('Search...')).toBeVisible();

    // Button
    await expect(page.getByRole('button', { name: 'Search' })).toBeVisible();
  });

  test('focuses input when clicking on addon', async ({ mount, page }) => {
    await mount(
      <InputGroup>
        <InputGroupAddon align="start">
          <span data-testid="addon-text">http://</span>
        </InputGroupAddon>
        <InputGroupInput placeholder="example.com" />
      </InputGroup>
    );

    const input = page.getByPlaceholder('example.com');
    const addon = page.getByTestId('addon-text');

    await addon.click();
    await expect(input).toBeFocused();
  });
});

test.describe('InputGroup Visual Snapshots', () => {
  const SIZES = ['sm', 'md', 'lg'] as const;

  test('matches visual matrix snapshot', async ({ mount }) => {
    const component = await mount(
      <div className="flex flex-col gap-8 p-8 bg-background">
        {SIZES.map((size) => (
          <div key={size} className="space-y-4">
            <h3 className="font-bold text-muted-foreground text-sm">Size: {size}</h3>
            
            {/* Standard Input Group */}
            <InputGroup size={size} className="w-80">
              <InputGroupAddon align="start">
                <SearchIcon />
              </InputGroupAddon>
              <InputGroupInput placeholder="Search..." />
              <InputGroupAddon align="end">
                <InputGroupText>⌘K</InputGroupText>
              </InputGroupAddon>
              <InputGroupButton variant="ghost" icon>
                <SendIcon />
              </InputGroupButton>
            </InputGroup>
            
            {/* Textarea Group */}
            <InputGroup size={size} className="w-80 items-start">
              <InputGroupTextarea placeholder="Type your message..." rows={3} />
              <div className="flex flex-col h-full self-end p-1">
                <InputGroupButton variant="solid" icon className="rounded-md">
                  <SendIcon />
                </InputGroupButton>
              </div>
            </InputGroup>
          </div>
        ))}
      </div>
    );

    await expect(component).toHaveScreenshot('input-group-matrix.png', {
      maxDiffPixelRatio: 0.01,
    });
  });
});
