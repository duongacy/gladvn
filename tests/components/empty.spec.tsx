import { test, expect } from '@playwright/experimental-ct-react';
import { SearchIcon } from 'lucide-react';

import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  EmptyAction
} from '../../src/components/micro/empty';

test.describe('Empty (Micro)', () => {
  test('renders identically given the same props (pure component)', async ({ mount }) => {
    const ComponentToTest = (
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon"><SearchIcon /></EmptyMedia>
          <EmptyTitle>No Results Found</EmptyTitle>
          <EmptyDescription>Try adjusting your filters.</EmptyDescription>
        </EmptyHeader>
        <EmptyContent>Some extra content</EmptyContent>
        <EmptyAction><button>Clear Filters</button></EmptyAction>
      </Empty>
    );

    const component = await mount(
      <div className="flex flex-col gap-4">
        <div data-testid="first">{ComponentToTest}</div>
        <div data-testid="second">{ComponentToTest}</div>
      </div>
    );

    const cleanHTML = (html: string) => html.replace(/id="[^"]+"/g, 'id="mocked"').replace(/aria-[a-z]+="[^"]*base-ui-[^"]*"/g, 'aria-mocked="true"');

    const firstHTML = await component.getByTestId('first').evaluate(el => el.innerHTML);
    const secondHTML = await component.getByTestId('second').evaluate(el => el.innerHTML);

    expect(cleanHTML(firstHTML)).toEqual(cleanHTML(secondHTML));
  });
});

test.describe('Empty Visual Snapshots', () => {
  test('matches visual matrix snapshot', async ({ mount }) => {
    const component = await mount(
      <div className="flex flex-col gap-6 p-6 bg-background">
        <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider border-b border-border pb-2">Empty State Composition</h3>
        
        <div className="flex flex-col gap-8">
          <Empty className="border">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <SearchIcon />
              </EmptyMedia>
              <EmptyTitle>No data found</EmptyTitle>
              <EmptyDescription>
                We couldn't find any results matching your search criteria.
                Please try again with different keywords.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <div className="p-4 bg-muted rounded-md text-xs">
                Suggested keywords: "dashboard", "reports"
              </div>
            </EmptyContent>
            <EmptyAction>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium">
                Clear Filters
              </button>
            </EmptyAction>
          </Empty>

          <Empty className="border bg-muted/30">
            <EmptyHeader>
              <EmptyTitle>Minimal Empty State</EmptyTitle>
            </EmptyHeader>
          </Empty>
        </div>
      </div>
    );

    await expect(component).toHaveScreenshot('empty-matrix.png', {
      maxDiffPixelRatio: 0.01,
    });
  });
});
