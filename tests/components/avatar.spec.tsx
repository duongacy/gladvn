import { test, expect } from '@playwright/experimental-ct-react';

import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarBadge,
  AvatarGroup,
  AvatarGroupCount
} from '../../src/components/micro/avatar';

test.describe('Avatar (Micro)', () => {
  test('renders identically given the same props (pure component)', async ({ mount }) => {
    const component = await mount(
      <div className="flex gap-4">
        <Avatar size="lg" data-testid="first">
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar size="lg" data-testid="second">
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    );

    const cleanHTML = (html: string) => html.replace(/id="[^"]+"/g, 'id="mocked"').replace(/aria-[a-z]+="[^"]*base-ui-[^"]*"/g, 'aria-mocked="true"');

    const firstHTML = await component.getByTestId('first').evaluate(el => el.innerHTML);
    const secondHTML = await component.getByTestId('second').evaluate(el => el.innerHTML);

    expect(cleanHTML(firstHTML)).toEqual(cleanHTML(secondHTML));
  });

  test('renders image and fallback correctly', async ({ mount, page }) => {
    // If we don't provide an image, the fallback should be visible
    await mount(
      <Avatar size="lg">
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    );

    const fallback = page.locator('[data-slot="avatar-fallback"]');
    await expect(fallback).toHaveText('CN');
    await expect(fallback).toBeVisible();
  });
});

test.describe('Avatar Visual Snapshots', () => {
  const SIZES = ["sm", "md", "lg"] as const;

  test('matches visual matrix snapshot', async ({ mount }) => {
    // For images, we use a transparent pixel or standard placeholder to ensure deterministic rendering
    const MOCK_IMAGE = "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3A%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3A%221%22%20height%3A%221%22%3E%3Crect%20fill%3D%22%232563eb%22%20width%3D%221%22%20height%3D%221%22%2F%3E%3C%2Fsvg%3E";

    const component = await mount(
      <div className="flex flex-col gap-6 p-6 bg-background">
        <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider border-b border-border pb-2">Avatar Sizes & States</h3>
        
        <div className="flex flex-col gap-4">
          <span className="text-xs font-semibold text-muted-foreground">With Fallback</span>
          <div className="flex flex-wrap gap-4 items-center">
            {SIZES.map((size) => (
              <Avatar key={`fallback-${size}`} size={size}>
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            ))}
          </div>

          <span className="text-xs font-semibold text-muted-foreground">With Image</span>
          <div className="flex flex-wrap gap-4 items-center">
            {SIZES.map((size) => (
              <Avatar key={`img-${size}`} size={size}>
                <AvatarImage src={MOCK_IMAGE} alt="Avatar" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            ))}
          </div>

          <span className="text-xs font-semibold text-muted-foreground">With Badge</span>
          <div className="flex flex-wrap gap-4 items-center">
            {SIZES.map((size) => (
              <Avatar key={`badge-${size}`} size={size}>
                <AvatarImage src={MOCK_IMAGE} alt="Avatar" />
                <AvatarFallback>CN</AvatarFallback>
                <div className="absolute right-0 top-0">
                  <AvatarBadge />
                </div>
              </Avatar>
            ))}
          </div>

          <span className="text-xs font-semibold text-muted-foreground">Avatar Group</span>
          <div className="flex flex-wrap gap-4 items-center">
            {SIZES.map((size) => (
              <AvatarGroup key={`group-${size}`}>
                <Avatar size={size}>
                  <AvatarImage src={MOCK_IMAGE} alt="Avatar 1" />
                  <AvatarFallback>A1</AvatarFallback>
                </Avatar>
                <Avatar size={size}>
                  <AvatarFallback>A2</AvatarFallback>
                </Avatar>
                <AvatarGroupCount size={size}>
                  +3
                </AvatarGroupCount>
              </AvatarGroup>
            ))}
          </div>
        </div>
      </div>
    );

    // Wait for the primitive to render image if provided
    await expect(component).toHaveScreenshot('avatar-matrix.png', {
      maxDiffPixelRatio: 0.01,
    });
  });
});
