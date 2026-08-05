import { test, expect } from '@playwright/experimental-ct-react';
import * as React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from '../../src/components/micro/table';

test.describe('Table (Micro)', () => {
  test('renders identically given the same props (pure component)', async ({ mount }) => {
    const component = await mount(
      <div className="flex gap-4">
        <Table data-testid="first">
          <TableBody><TableRow><TableCell>Cell</TableCell></TableRow></TableBody>
        </Table>
        <Table data-testid="second">
          <TableBody><TableRow><TableCell>Cell</TableCell></TableRow></TableBody>
        </Table>
      </div>
    );

    const cleanHTML = (html: string) => html
      .replace(/id="[^"]+"/g, 'id="mocked"')
      .replace(/aria-controls="[^"]*"/g, 'aria-controls="mocked"');

    const firstHTML = await component.getByTestId('first').evaluate(el => el.innerHTML);
    const secondHTML = await component.getByTestId('second').evaluate(el => el.innerHTML);

    expect(cleanHTML(firstHTML)).toEqual(cleanHTML(secondHTML));
  });

  test('renders all structural parts correctly', async ({ mount, page }) => {
    await mount(
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow data-testid="row-1">
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );

    await expect(page.locator('[data-slot="table"]')).toBeVisible();
    await expect(page.locator('[data-slot="table-caption"]')).toHaveText('A list of your recent invoices.');
    await expect(page.locator('[data-slot="table-header"]')).toBeVisible();
    await expect(page.locator('[data-slot="table-body"]')).toBeVisible();
    await expect(page.locator('[data-slot="table-footer"]')).toBeVisible();
    await expect(page.getByTestId('row-1')).toBeVisible();
  });

  test('sortable head responds to clicks and cycles options', async ({ mount, page }) => {
    let sortedDir = '';
    
    await mount(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead 
              sortDirection="asc" 
              onSort={(dir) => { sortedDir = dir; }} 
              data-testid="sortable-head"
            >
              Status
            </TableHead>
          </TableRow>
        </TableHeader>
      </Table>
    );

    const headBtn = page.getByTestId('sortable-head').locator('button');
    await expect(headBtn).toBeVisible();
    
    // Click to cycle to 'desc' (from asc)
    await headBtn.click();
    expect(sortedDir).toBe('desc');
  });

});

test.describe('Table Visual Snapshots', () => {
  test('matches visual snapshot', async ({ mount }) => {
    const component = await mount(
      <div className="w-[600px] p-4 bg-background">
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead sortDirection="asc">Status</TableHead>
              <TableHead sortDirection="desc">Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
            <TableRow data-state="selected">
              <TableCell className="font-medium">INV002</TableCell>
              <TableCell>Pending</TableCell>
              <TableCell>PayPal</TableCell>
              <TableCell className="text-right">$150.00</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">$400.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    );

    await expect(component).toHaveScreenshot('table-default.png', {
      maxDiffPixelRatio: 0.02,
    });
  });
});
