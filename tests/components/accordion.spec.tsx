import { test, expect } from '@playwright/experimental-ct-react';
import * as React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '../../src/components/micro/accordion';

test.describe('Accordion (Micro)', () => {
  test('renders with correct roles and toggles state on click', async ({ mount, page }) => {
    await mount(
      <Accordion className="w-80">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>Yes. It comes with default styles.</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const trigger1 = page.getByRole('button', { name: 'Is it accessible?' });
    const content1 = page.getByText('Yes. It adheres to the WAI-ARIA design pattern.');

    // Initially closed
    await expect(trigger1).toHaveAttribute('aria-expanded', 'false');
    await expect(trigger1).not.toHaveAttribute('data-panel-open', '');
    await expect(content1).toBeHidden();

    // Click to open
    await trigger1.click();
    await expect(trigger1).toHaveAttribute('aria-expanded', 'true');
    await expect(trigger1).toHaveAttribute('data-panel-open', '');
    await expect(content1).toBeVisible();

    // Click to close
    await trigger1.click();
    await expect(trigger1).toHaveAttribute('aria-expanded', 'false');
    // In CT, base-ui panel may unmount or stay hidden depending on keepMounted, 
    // but the trigger's aria-expanded should be false.
    await expect(content1).toBeHidden();
  });

  test('keyboard navigation moves focus between triggers using Tab', async ({ mount, page }) => {
    await mount(
      <Accordion className="w-80">
        <AccordionItem value="item-1">
          <AccordionTrigger>Item 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Item 2</AccordionTrigger>
          <AccordionContent>Content 2</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Item 3</AccordionTrigger>
          <AccordionContent>Content 3</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const trigger1 = page.getByRole('button', { name: 'Item 1' });
    const trigger2 = page.getByRole('button', { name: 'Item 2' });
    const trigger3 = page.getByRole('button', { name: 'Item 3' });

    await trigger1.focus();
    await expect(trigger1).toBeFocused();

    // Tab moves to next
    await page.keyboard.press('Tab');
    await expect(trigger2).toBeFocused();
    await expect(trigger1).not.toBeFocused();

    // Tab moves to next
    await page.keyboard.press('Tab');
    await expect(trigger3).toBeFocused();

    // Shift+Tab moves to previous
    await page.keyboard.press('Shift+Tab');
    await expect(trigger2).toBeFocused();
  });

  test('disabled items receive focus but do not toggle on interaction', async ({ mount, page }) => {
    await mount(
      <Accordion className="w-80">
        <AccordionItem value="item-1">
          <AccordionTrigger>Item 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" disabled>
          <AccordionTrigger>Item 2</AccordionTrigger>
          <AccordionContent>Content 2</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Item 3</AccordionTrigger>
          <AccordionContent>Content 3</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const trigger1 = page.getByRole('button', { name: 'Item 1' });
    const trigger2 = page.getByRole('button', { name: 'Item 2' });
    const content2 = page.getByText('Content 2');

    // Item 2 should have aria-disabled
    await expect(trigger2).toHaveAttribute('aria-disabled', 'true');

    await trigger1.focus();
    await expect(trigger1).toBeFocused();

    // Tab should move to disabled item 2 (aria-disabled elements are focusable)
    await page.keyboard.press('Tab');
    await expect(trigger2).toBeFocused();

    // Pressing Enter should not open it
    await page.keyboard.press('Enter');
    await expect(trigger2).toHaveAttribute('aria-expanded', 'false');
    await expect(content2).toBeHidden();
  });
});

test.describe('Accordion Visual Snapshots', () => {
  test('matches visual snapshot with open and closed items', async ({ mount }) => {
    const component = await mount(
      <div className="p-8 bg-background">
        <Accordion className="w-96 border rounded-lg p-4" defaultValue={['item-2']}>
          <AccordionItem value="item-1">
            <AccordionTrigger>Closed Item</AccordionTrigger>
            <AccordionContent>
              This content is hidden by default.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Open Item</AccordionTrigger>
            <AccordionContent>
              This content is visible because it is the defaultValue.
              It shows the Chevron icon rotated.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" disabled>
            <AccordionTrigger>Disabled Item</AccordionTrigger>
            <AccordionContent>
              This cannot be opened.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    );

    await expect(component).toHaveScreenshot('accordion-snapshot.png', {
      maxDiffPixelRatio: 0.01,
    });
  });
});
