import { test, expect } from '@playwright/experimental-ct-react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from '../../src/components/micro/pagination';

test.describe('Pagination (Micro)', () => {
  test('renders identically given the same props (pure component)', async ({ mount }) => {
    const props = { href: '#', children: '1' } as const;

    const component = await mount(
      <div className="flex gap-4">
        <PaginationLink {...props} data-testid="first" />
        <PaginationLink {...props} data-testid="second" />
      </div>
    );

    const cleanHTML = (html: string) => html.replace(/id="[^"]+"/g, 'id="mocked"');

    const firstHTML = await component.getByTestId('first').evaluate(el => el.innerHTML);
    const secondHTML = await component.getByTestId('second').evaluate(el => el.innerHTML);

    expect(cleanHTML(firstHTML)).toEqual(cleanHTML(secondHTML));
  });

  test('applies appropriate accessibility roles and attributes', async ({ mount }) => {
    const component = await mount(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );

    await expect(component).toHaveRole('navigation');
    await expect(component).toHaveAttribute('aria-label', 'pagination');

    const activeLink = component.getByText('2');
    await expect(activeLink).toHaveAttribute('aria-current', 'page');
    await expect(activeLink).toHaveAttribute('data-active', '');

    const prevLink = component.getByLabel('Go to previous page');
    await expect(prevLink).toBeVisible();

    const nextLink = component.getByLabel('Go to next page');
    await expect(nextLink).toBeVisible();
  });
});

test.describe('Pagination Visual Snapshots', () => {
  const SIZES = ['sm', 'md', 'lg'] as const;

  test('matches visual matrix snapshot', async ({ mount }) => {
    const component = await mount(
      <div className="flex flex-col gap-8 p-8 bg-background">
        {SIZES.map((size) => (
          <div key={size} className="space-y-4">
            <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Size: {size}</h3>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" size={size} />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" size={size}>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive size={size}>2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" size={size}>3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis size={size} />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" size={size} />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        ))}
      </div>
    );

    await expect(component).toHaveScreenshot('pagination-matrix.png', {
      maxDiffPixelRatio: 0.01,
    });
  });
});
