import { test, expect } from '@playwright/experimental-ct-react';
import * as React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuPositioner,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '../../src/components/micro/navigation-menu';

test.describe('NavigationMenu (Micro)', () => {
  test('renders identically given the same props (pure component)', async ({ mount }) => {
    const component = await mount(
      <div className="flex gap-4">
        <NavigationMenu data-testid="first">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Item</NavigationMenuTrigger>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu data-testid="second">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Item</NavigationMenuTrigger>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    );

    const cleanHTML = (html: string) => html
      .replace(/id="[^"]+"/g, 'id="mocked"')
      .replace(/aria-controls="[^"]*"/g, 'aria-controls="mocked"');

    const firstHTML = await component.getByTestId('first').evaluate(el => el.innerHTML);
    const secondHTML = await component.getByTestId('second').evaluate(el => el.innerHTML);

    expect(cleanHTML(firstHTML)).toEqual(cleanHTML(secondHTML));
  });

  test('renders menu and opens content on interaction', async ({ mount, page }) => {
    await mount(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="p-4 w-64">
                <NavigationMenuLink href="/introduction">Introduction</NavigationMenuLink>
                <NavigationMenuLink href="/installation">Installation</NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/docs">Documentation</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuPositioner />
      </NavigationMenu>
    );

    const trigger = page.getByRole('button', { name: 'Getting Started' });
    const content = page.locator('[data-slot="navigation-menu-content"]');
    
    // Initially hidden
    await expect(content).toBeHidden();

    // Base UI NavigationMenu usually opens on click or hover. We use enter for reliable test execution.
    await trigger.focus();
    await page.keyboard.press('Enter');
    
    // Should be visible
    await expect(content).toBeVisible();
    await expect(page.getByRole('link', { name: 'Introduction' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Documentation' })).toBeVisible(); // Top level link
  });

  test('keyboard navigation between triggers', async ({ mount, page }) => {
    await mount(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item 1</NavigationMenuTrigger>
            <NavigationMenuContent>Content 1</NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item 2</NavigationMenuTrigger>
            <NavigationMenuContent>Content 2</NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuPositioner />
      </NavigationMenu>
    );

    const trigger1 = page.getByRole('button', { name: 'Item 1' });
    const trigger2 = page.getByRole('button', { name: 'Item 2' });

    await trigger1.focus();
    await expect(trigger1).toBeFocused();

    // ArrowRight to move to next
    await page.keyboard.press('ArrowRight');
    await expect(trigger2).toBeFocused();

    // ArrowLeft to move back
    await page.keyboard.press('ArrowLeft');
    await expect(trigger1).toBeFocused();
  });
});

test.describe('NavigationMenu Visual Snapshots', () => {
  test('matches visual snapshot when open', async ({ mount, page }) => {
    const component = await mount(
      <div className="flex h-[300px] w-full items-start justify-center p-8 bg-background">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md" href="/">
                      <div className="mb-2 mt-4 text-lg font-medium">GlVN</div>
                      <p className="text-sm leading-tight text-muted-foreground">Beautifully designed components.</p>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink href="/docs/introduction" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">Introduction</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Re-usable components built using Base UI.</p>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Components</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <li><NavigationMenuLink href="/alert-dialog">Alert Dialog</NavigationMenuLink></li>
                  <li><NavigationMenuLink href="/hover-card">Hover Card</NavigationMenuLink></li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/docs">Documentation</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuPositioner />
        </NavigationMenu>
      </div>
    );

    const trigger = page.getByRole('button', { name: 'Learn' });
    await trigger.focus();
    await page.keyboard.press('Enter');

    // Wait for the content to be visible
    const content = page.locator('[data-slot="navigation-menu-content"]').first();
    await expect(content).toBeVisible();

    await expect(component).toHaveScreenshot('navigation-menu-open.png', {
      maxDiffPixelRatio: 0.02,
    });
  });
});
