import { test, expect } from '@playwright/experimental-ct-react';
import * as React from 'react';
import { 
  Collapsible, 
  CollapsibleTrigger, 
  CollapsibleContent 
} from '../../src/components/micro/collapsible';

test.describe('Collapsible (Micro)', () => {
  test('renders identically given the same props (pure component)', async ({ mount }) => {
    const props = { defaultOpen: true } as const;

    const component = await mount(
      <div className="flex gap-4">
        <Collapsible {...props} data-testid="first">
          <CollapsibleTrigger>Toggle</CollapsibleTrigger>
          <CollapsibleContent>Content</CollapsibleContent>
        </Collapsible>
        <Collapsible {...props} data-testid="second">
          <CollapsibleTrigger>Toggle</CollapsibleTrigger>
          <CollapsibleContent>Content</CollapsibleContent>
        </Collapsible>
      </div>
    );

    const cleanHTML = (html: string) => html
      .replace(/id="[^"]+"/g, 'id="mocked"')
      .replace(/aria-[a-z]+="[^"]*base-ui-[^"]*"/g, 'aria-mocked="true"');

    const firstHTML = await component.getByTestId('first').evaluate(el => el.outerHTML);
    const secondHTML = await component.getByTestId('second').evaluate(el => el.outerHTML);

    expect(cleanHTML(firstHTML)).toEqual(cleanHTML(secondHTML));
  });

  test('toggles content visibility on trigger click', async ({ mount, page }) => {
    await mount(
      <Collapsible>
        <CollapsibleTrigger>Toggle</CollapsibleTrigger>
        <CollapsibleContent data-testid="content">Hidden Content</CollapsibleContent>
      </Collapsible>
    );

    const trigger = page.getByRole('button', { name: 'Toggle' });
    const content = page.getByTestId('content');

    // Initially hidden (using our hidden class logic or base-ui logic)
    await expect(content).toBeHidden();

    // Click to open
    await trigger.click();
    await expect(content).toBeVisible();

    // Click to close
    await trigger.click();
    await expect(content).toBeHidden();
  });

  test('toggles content visibility on keyboard Enter and Space', async ({ mount, page }) => {
    await mount(
      <Collapsible>
        <CollapsibleTrigger>Toggle</CollapsibleTrigger>
        <CollapsibleContent data-testid="content">Hidden Content</CollapsibleContent>
      </Collapsible>
    );

    const trigger = page.getByRole('button', { name: 'Toggle' });
    const content = page.getByTestId('content');

    await trigger.focus();
    
    // Press Enter to open
    await page.keyboard.press('Enter');
    await expect(content).toBeVisible();

    // Press Space to close
    await page.keyboard.press('Space');
    await expect(content).toBeHidden();
  });

  test('does not toggle when trigger is disabled', async ({ mount, page }) => {
    await mount(
      <Collapsible>
        <CollapsibleTrigger disabled>Toggle</CollapsibleTrigger>
        <CollapsibleContent data-testid="content">Hidden Content</CollapsibleContent>
      </Collapsible>
    );

    const trigger = page.getByRole('button', { name: 'Toggle' });
    const content = page.getByTestId('content');

    // Attempt to click
    await trigger.click({ force: true });
    await expect(content).toBeHidden();
    
    // Attempt keyboard
    await trigger.focus();
    await page.keyboard.press('Enter');
    await expect(content).toBeHidden();
  });

  test('has proper aria-expanded and aria-controls attributes', async ({ mount, page }) => {
    await mount(
      <Collapsible defaultOpen>
        <CollapsibleTrigger>Toggle</CollapsibleTrigger>
        <CollapsibleContent data-testid="content">Hidden Content</CollapsibleContent>
      </Collapsible>
    );

    const trigger = page.getByRole('button', { name: 'Toggle' });
    const content = page.getByTestId('content');
    
    const contentId = await content.getAttribute('id');
    expect(contentId).toBeTruthy();

    await expect(trigger).toHaveAttribute('aria-expanded', 'true');
    await expect(trigger).toHaveAttribute('aria-controls', contentId!);

    await trigger.click();
    await expect(trigger).toHaveAttribute('aria-expanded', 'false');
  });
});

test.describe('Collapsible Visual Snapshots', () => {
  test('matches visual matrix snapshot', async ({ mount }) => {
    const component = await mount(
      <div className="flex flex-col gap-8 p-8 bg-background w-96">
        <div className="space-y-4 border p-4 rounded">
          <h3 className="font-bold">Closed State</h3>
          <Collapsible>
            <CollapsibleTrigger className="p-2 border rounded bg-muted">Toggle Content</CollapsibleTrigger>
            <CollapsibleContent className="p-4 border mt-2 bg-accent/20">
              This content is inside the collapsible panel.
            </CollapsibleContent>
          </Collapsible>
        </div>

        <div className="space-y-4 border p-4 rounded">
          <h3 className="font-bold">Open State</h3>
          <Collapsible defaultOpen>
            <CollapsibleTrigger className="p-2 border rounded bg-muted">Toggle Content</CollapsibleTrigger>
            <CollapsibleContent className="p-4 border mt-2 bg-accent/20">
              This content is inside the collapsible panel and should be fully visible in the snapshot.
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    );

    await expect(component).toHaveScreenshot('collapsible-matrix.png', {
      maxDiffPixelRatio: 0.01,
    });
  });
});
