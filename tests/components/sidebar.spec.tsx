import { test, expect } from '@playwright/experimental-ct-react';
import * as React from 'react';
import {
  Sidebar,
  SidebarLogo,
  SidebarLabel,
  SidebarMenuItemList,
  SidebarMenuItem,
  useSidebarToggle
} from '../../src/components/micro/sidebar';
import { LayoutDashboard, Users, Settings } from 'lucide-react';

// Test component structure defined inline in mount
test.describe('Sidebar (Micro)', () => {
  test('renders in expanded state by default with correct css vars', async ({ mount, page }) => {
    await mount(
      <Sidebar defaultState="expanded">
        <SidebarLogo icon={<div />} text="Acme Corp" />
      </Sidebar>
    );

    const sidebar = page.getByRole('navigation');
    await expect(sidebar).toBeVisible();
    await expect(sidebar).toHaveAttribute('data-state', 'expanded');
    
    // Check if the default widths are applied as inline styles (CSS variables)
    const style = await sidebar.getAttribute('style');
    expect(style).toContain('--sb-expanded: 256px');
    expect(style).toContain('--sb-collapsed: 72px');
    
    // Text should be visible
    const logoText = page.getByText('Acme Corp');
    await expect(logoText).toBeVisible();
  });

  test('toggles to collapsed state when data-state changes', async ({ mount, page }) => {
    const component = await mount(
      <Sidebar defaultState="expanded">
        <SidebarLogo icon={<div />} text="Acme Corp" />
      </Sidebar>
    );

    const sidebar = page.getByRole('navigation');
    
    // Initial state
    await expect(sidebar).toHaveAttribute('data-state', 'expanded');
    
    // Update state to collapsed
    await component.update(
      <Sidebar defaultState="collapsed">
        <SidebarLogo icon={<div />} text="Acme Corp" />
      </Sidebar>
    );
    
    // State should change
    await expect(sidebar).toHaveAttribute('data-state', 'collapsed');
  });
});

test.describe('Sidebar Visual Snapshots', () => {
  test('matches visual snapshot when expanded', async ({ mount, page }) => {
    const component = await mount(
      <div className="flex h-[400px] w-[600px] bg-background">
        <Sidebar defaultState="expanded">
          <SidebarLogo icon={<LayoutDashboard />} text="Acme Corp" />
          <div className="flex-1 overflow-y-auto overflow-x-hidden pt-4">
            <SidebarLabel icon={<Users />} text="Team" />
            <SidebarMenuItemList>
              <SidebarMenuItem text="Members" />
            </SidebarMenuItemList>
          </div>
        </Sidebar>
      </div>
    );
    await expect(component).toHaveScreenshot('sidebar-expanded.png', {
      maxDiffPixelRatio: 0.02,
    });
  });

  test('matches visual snapshot when collapsed', async ({ mount, page }) => {
    const component = await mount(
      <div className="flex h-[400px] w-[600px] bg-background">
        <Sidebar defaultState="collapsed">
          <SidebarLogo icon={<LayoutDashboard />} text="Acme Corp" />
          <div className="flex-1 overflow-y-auto overflow-x-hidden pt-4">
            <SidebarLabel icon={<Users />} text="Team" />
            <SidebarMenuItemList>
              <SidebarMenuItem text="Members" />
            </SidebarMenuItemList>
          </div>
        </Sidebar>
      </div>
    );
    
    const sidebar = page.getByRole('navigation');
    await expect(sidebar).toHaveAttribute('data-state', 'collapsed');

    await expect(component).toHaveScreenshot('sidebar-collapsed.png', {
      maxDiffPixelRatio: 0.02,
    });
  });
});
