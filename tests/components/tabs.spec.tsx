import { test, expect } from '@playwright/experimental-ct-react';
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '../../src/components/micro/tabs';

test.describe('Tabs (Micro)', () => {
  test('renders identically given the same props (pure component)', async ({ mount }) => {
    const props = { value: 'tab1', children: 'Tab 1' } as const;

    const component = await mount(
      <div className="flex gap-4">
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger {...props} data-testid="first" />
          </TabsList>
          <TabsContent value="tab1">Content</TabsContent>
        </Tabs>
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger {...props} data-testid="second" />
          </TabsList>
          <TabsContent value="tab1">Content</TabsContent>
        </Tabs>
      </div>
    );

    const cleanHTML = (html: string) => html.replace(/id="[^"]+"/g, 'id="mocked"').replace(/aria-controls="[^"]+"/g, 'aria-controls="mocked"');

    const firstHTML = await component.getByTestId('first').evaluate(el => el.innerHTML);
    const secondHTML = await component.getByTestId('second').evaluate(el => el.innerHTML);

    expect(cleanHTML(firstHTML)).toEqual(cleanHTML(secondHTML));
  });

  test('switches content when a trigger is clicked', async ({ mount }) => {
    const component = await mount(
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">Account settings</TabsContent>
        <TabsContent value="password">Password settings</TabsContent>
      </Tabs>
    );

    // Initial state
    await expect(component.getByText('Account settings')).toBeVisible();
    await expect(component.getByText('Password settings')).toBeHidden();
    await expect(component.getByRole('tab', { name: 'Account' })).toHaveAttribute('data-active', '');
    await expect(component.getByRole('tab', { name: 'Password' })).not.toHaveAttribute('data-active', '');

    // Click second tab
    await component.getByRole('tab', { name: 'Password' }).click();

    // New state
    await expect(component.getByText('Account settings')).toBeHidden();
    await expect(component.getByText('Password settings')).toBeVisible();
    await expect(component.getByRole('tab', { name: 'Account' })).not.toHaveAttribute('data-active', '');
    await expect(component.getByRole('tab', { name: 'Password' })).toHaveAttribute('data-active', '');
  });

  test('supports keyboard navigation via Arrow keys', async ({ mount, page }) => {
    const component = await mount(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          <TabsTrigger value="tab3">Tab 3</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content 1</TabsContent>
        <TabsContent value="tab2">Content 2</TabsContent>
        <TabsContent value="tab3">Content 3</TabsContent>
      </Tabs>
    );

    // Focus the first tab
    await component.getByRole('tab', { name: 'Tab 1' }).focus();
    await expect(component.getByRole('tab', { name: 'Tab 1' })).toBeFocused();

    // Press ArrowRight to move to next tab
    await page.keyboard.press('ArrowRight');
    
    // Depending on Base UI, ArrowRight either focuses or automatically activates.
    // Let's assume automatic activation which is standard.
    // We check if Tab 2 is active or at least focused.
    await expect(component.getByRole('tab', { name: 'Tab 2' })).toBeFocused();
  });
});

test.describe('Tabs Visual Snapshots', () => {
  test('matches visual matrix snapshot', async ({ mount }) => {
    const component = await mount(
      <div className="flex flex-col gap-12 p-8 bg-background">
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Horizontal (Default)</h3>
          <Tabs defaultValue="tab1">
            <TabsList>
              <TabsTrigger value="tab1">Account</TabsTrigger>
              <TabsTrigger value="tab2">Password</TabsTrigger>
              <TabsTrigger value="tab3" disabled>Disabled</TabsTrigger>
            </TabsList>
            <div className="mt-4 p-4 border rounded-md">
              <TabsContent value="tab1">Account settings content.</TabsContent>
              <TabsContent value="tab2">Password settings content.</TabsContent>
            </div>
          </Tabs>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Horizontal (Line Variant)</h3>
          <Tabs defaultValue="tab1">
            <TabsList variant="line">
              <TabsTrigger value="tab1">Account</TabsTrigger>
              <TabsTrigger value="tab2">Password</TabsTrigger>
              <TabsTrigger value="tab3" disabled>Disabled</TabsTrigger>
            </TabsList>
            <div className="mt-4 p-4 border rounded-md">
              <TabsContent value="tab1">Account settings content.</TabsContent>
              <TabsContent value="tab2">Password settings content.</TabsContent>
            </div>
          </Tabs>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Vertical</h3>
          <Tabs defaultValue="tab1" orientation="vertical" className="flex gap-4">
            <TabsList>
              <TabsTrigger value="tab1">Account</TabsTrigger>
              <TabsTrigger value="tab2">Password</TabsTrigger>
              <TabsTrigger value="tab3" disabled>Disabled</TabsTrigger>
            </TabsList>
            <div className="p-4 border rounded-md w-full">
              <TabsContent value="tab1">Account settings content.</TabsContent>
              <TabsContent value="tab2">Password settings content.</TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    );

    await expect(component).toHaveScreenshot('tabs-matrix.png', {
      maxDiffPixelRatio: 0.01,
    });
  });
});
