import { test, expect } from '@playwright/experimental-ct-react';
import * as React from 'react';
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from '../../src/components/micro/resizable';

test.describe('Resizable (Micro)', () => {
  test('renders horizontally by default', async ({ mount, page }) => {
    await mount(
      <ResizablePanelGroup direction="horizontal" className="h-[200px] w-full">
        <ResizablePanel defaultSize={50} minSize={20}>
          <div className="flex h-full items-center justify-center p-6">One</div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50} minSize={20}>
          <div className="flex h-full items-center justify-center p-6">Two</div>
        </ResizablePanel>
      </ResizablePanelGroup>
    );

    const group = page.locator('[data-slot="resizable-panel-group"]');
    await expect(group).toBeVisible();
    await expect(group).toHaveAttribute('direction', 'horizontal');


    const panels = page.locator('[data-slot="resizable-panel"]');
    await expect(panels).toHaveCount(2);

    const handle = page.locator('[data-slot="resizable-handle"]');
    await expect(handle).toBeAttached();
    await expect(handle).toHaveAttribute('aria-orientation', 'vertical'); // In horizontal group, handle splits horizontally but its visual orientation acts like a vertical column splitting the space
  });

  test('renders vertically when specified', async ({ mount, page }) => {
    await mount(
      <ResizablePanelGroup direction="vertical" className="h-[200px]">
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-6">Top</div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-6">Bottom</div>
        </ResizablePanel>
      </ResizablePanelGroup>
    );

    const group = page.locator('[data-slot="resizable-panel-group"]');
    await expect(group).toBeVisible();
    await expect(group).toHaveAttribute('direction', 'vertical');
    

    // Check orientation class applied via aria attribute in tailwind
    await expect(group).toHaveClass(/aria-\[orientation=vertical\]:flex-col/);
  });
});

test.describe('Resizable Visual Snapshots', () => {
  test('matches visual snapshot of complex layout', async ({ mount }) => {
    const component = await mount(
      <div className="h-[400px] w-[600px] rounded-lg border bg-background">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={25} minSize={15}>
            <div className="flex h-full items-center justify-center p-6">Sidebar</div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={75}>
            <ResizablePanelGroup direction="vertical">
              <ResizablePanel defaultSize={70}>
                <div className="flex h-full items-center justify-center p-6">Content</div>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={30}>
                <div className="flex h-full items-center justify-center p-6">Terminal</div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    );

    await expect(component).toHaveScreenshot('resizable-complex.png', {
      maxDiffPixelRatio: 0.02,
    });
  });
});
