import { test, expect } from '@playwright/experimental-ct-react';

import { Kbd, KbdGroup } from '../../src/components/micro/kbd';

test.describe('Kbd (Micro)', () => {
  test('renders identically given the same props (pure component)', async ({ mount }) => {
    const component = await mount(
      <div className="flex gap-4">
        <Kbd data-testid="first">⌘K</Kbd>
        <Kbd data-testid="second">⌘K</Kbd>
      </div>
    );

    const cleanHTML = (html: string) => html.replace(/id="[^"]+"/g, 'id="mocked"').replace(/aria-[a-z]+="[^"]*base-ui-[^"]*"/g, 'aria-mocked="true"');

    const firstHTML = await component.getByTestId('first').evaluate(el => el.innerHTML);
    const secondHTML = await component.getByTestId('second').evaluate(el => el.innerHTML);

    expect(cleanHTML(firstHTML)).toEqual(cleanHTML(secondHTML));
  });
});

test.describe('Kbd Visual Snapshots', () => {
  test('matches visual matrix snapshot', async ({ mount }) => {
    const component = await mount(
      <div className="flex flex-col gap-6 p-6 bg-background">
        <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider border-b border-border pb-2">Kbd Variants</h3>
        
        <div className="flex flex-col gap-4">
          <span className="text-xs font-semibold text-muted-foreground">Single Kbd</span>
          <div className="flex flex-wrap gap-4 items-center">
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
            <Kbd>Enter</Kbd>
            <Kbd>Ctrl</Kbd>
          </div>

          <span className="text-xs font-semibold text-muted-foreground">Kbd Group</span>
          <div className="flex flex-wrap gap-4 items-center">
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>K</Kbd>
            </KbdGroup>
            
            <KbdGroup>
              <Kbd>Ctrl</Kbd>
              <span>+</span>
              <Kbd>Alt</Kbd>
              <span>+</span>
              <Kbd>Del</Kbd>
            </KbdGroup>
          </div>

          <span className="text-xs font-semibold text-muted-foreground">Inside Tooltip Content (simulated)</span>
          <div className="flex flex-wrap gap-4 items-center p-4 bg-primary text-primary-foreground rounded-md" data-slot="tooltip-content">
            Search
            <Kbd>⌘K</Kbd>
          </div>
        </div>
      </div>
    );

    await expect(component).toHaveScreenshot('kbd-matrix.png', {
      maxDiffPixelRatio: 0.01,
    });
  });
});
