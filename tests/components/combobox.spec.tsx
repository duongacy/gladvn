import { test, expect } from '@playwright/experimental-ct-react';
import * as React from 'react';
import { 
  Combobox,
  ComboboxInput,
  ComboboxTrigger,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxClear,
  ComboboxAnchor,
  ComboboxChips,
  ComboboxChip,
  ComboboxChipsInput,
  ComboboxEmpty
} from '../../src/components/micro/combobox';
import { InputGroup } from '../../src/components/micro/input-group';

const MOCK_ITEMS = [
  { id: '1', label: 'Apple' },
  { id: '2', label: 'Banana' },
  { id: '3', label: 'Cherry' },
];

test.describe('Combobox (Micro)', () => {
  test('renders identically given the same props (pure component)', async ({ mount }) => {
    const component = await mount(
      <div className="flex gap-4">
        <div data-testid="first">
          <Combobox defaultOpen items={MOCK_ITEMS}>
            <InputGroup>
              <ComboboxInput />
            </InputGroup>
            <ComboboxContent>
              <ComboboxList>
                {MOCK_ITEMS.map((item) => (
                  <ComboboxItem key={item.id} value={item.label}>
                    {item.label}
                  </ComboboxItem>
                ))}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        </div>
        
        <div data-testid="second">
          <Combobox defaultOpen items={MOCK_ITEMS}>
            <InputGroup>
              <ComboboxInput />
            </InputGroup>
            <ComboboxContent>
              <ComboboxList>
                {MOCK_ITEMS.map((item) => (
                  <ComboboxItem key={item.id} value={item.label}>
                    {item.label}
                  </ComboboxItem>
                ))}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        </div>
      </div>
    );

    const cleanHTML = (html: string) => html
      .replace(/id="[^"]+"/g, 'id="mocked"')
      .replace(/aria-controls="[^"]*"/g, 'aria-controls="mocked"')
      .replace(/aria-[a-z]+="[^"]*base-ui-[^"]*"/g, 'aria-mocked="true"');

    // Due to portals, the content might be attached elsewhere, 
    // but Base UI allows getting popup via trigger's aria-controls 
    // or we can test the inputs themselves.
    const firstHTML = await component.getByTestId('first').evaluate(el => el.outerHTML);
    const secondHTML = await component.getByTestId('second').evaluate(el => el.outerHTML);

    expect(cleanHTML(firstHTML)).toEqual(cleanHTML(secondHTML));
  });

  test('single select interaction: open, select, close', async ({ mount, page }) => {
    await mount(
      <Combobox items={MOCK_ITEMS}>
        <InputGroup>
          <ComboboxInput placeholder="Select fruit" />
          <ComboboxTrigger />
        </InputGroup>
        <ComboboxContent>
          <ComboboxList>
            {MOCK_ITEMS.map((item) => (
              <ComboboxItem key={item.id} value={item.label}>
                {item.label}
              </ComboboxItem>
            ))}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    );

    const input = page.getByRole('combobox');
    const listbox = page.getByRole('listbox');
    
    // Initially closed
    await expect(listbox).toHaveCount(0);

    // Open list
    await input.click();
    await expect(listbox).toBeVisible();

    // Select Banana
    const bananaItem = page.getByRole('option', { name: 'Banana' });
    await bananaItem.click();

    // List should close and input should display value
    await expect(listbox).toHaveCount(0);
    await expect(input).toHaveValue('Banana');
  });

  test('clears value when ComboboxClear is clicked', async ({ mount, page }) => {
    await mount(
      <Combobox items={MOCK_ITEMS} defaultValue="Banana">
        <InputGroup>
          <ComboboxInput />
          <ComboboxClear aria-label="Clear selection" />
        </InputGroup>
      </Combobox>
    );

    const input = page.getByRole('combobox');
    const clearBtn = page.getByRole('button', { name: 'Clear selection' });

    await expect(input).toHaveValue('Banana');
    
    await clearBtn.click();
    
    await expect(input).toHaveValue('');
  });

  test('arrow keys navigate list and highlight items', async ({ mount, page }) => {
    await mount(
      <Combobox items={MOCK_ITEMS}>
        <InputGroup>
          <ComboboxInput />
        </InputGroup>
        <ComboboxContent>
          <ComboboxList>
            {MOCK_ITEMS.map((item) => (
              <ComboboxItem key={item.id} value={item.label}>
                {item.label}
              </ComboboxItem>
            ))}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    );

    const input = page.getByRole('combobox');
    
    await input.focus();
    // Press down to open list and highlight first item
    await page.keyboard.press('ArrowDown');
    
    const appleItem = page.getByRole('option', { name: 'Apple' });
    const bananaItem = page.getByRole('option', { name: 'Banana' });

    // Apple should be highlighted
    await expect(appleItem).toHaveAttribute('data-highlighted', '');
    
    // Press down again to highlight Banana
    await page.keyboard.press('ArrowDown');
    await expect(bananaItem).toHaveAttribute('data-highlighted', '');
    
    // Press Enter to select
    await page.keyboard.press('Enter');
    await expect(input).toHaveValue('Banana');
  });

  test('multiple select interaction with Chips', async ({ mount, page }) => {
    // In Base UI, Combobox with multiple=true provides values as an array.
    await mount(
      <Combobox items={MOCK_ITEMS} multiple defaultValue={['Apple', 'Cherry']}>
        <ComboboxAnchor>
          <ComboboxChips>
            <ComboboxChip value="Apple">Apple</ComboboxChip>
            <ComboboxChip value="Cherry">Cherry</ComboboxChip>
            <ComboboxChipsInput placeholder="Add more..." />
          </ComboboxChips>
        </ComboboxAnchor>
      </Combobox>
    );

    const chip1 = page.getByText('Apple', { exact: true });
    const chip2 = page.getByText('Cherry', { exact: true });
    const removeBtns = page.locator('[data-slot="combobox-chip-remove"]');

    await expect(chip1).toBeVisible();
    await expect(chip2).toBeVisible();
    
    // Check that remove buttons are rendered inside chips
    await expect(removeBtns).toHaveCount(2);
  });
});

test.describe('Combobox Visual Snapshots', () => {
  test('matches visual matrix snapshot', async ({ mount }) => {
    const component = await mount(
      <div className="flex flex-col gap-8 p-8 bg-background w-[600px] min-h-[500px]">
        <div className="space-y-4">
          <h3 className="font-bold text-muted-foreground">Single Select (Closed)</h3>
          <Combobox items={MOCK_ITEMS} defaultValue="Apple">
            <InputGroup>
              <ComboboxInput />
              <ComboboxClear />
              <ComboboxTrigger />
            </InputGroup>
          </Combobox>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-muted-foreground">Multiple Select (Chips - MD)</h3>
          <Combobox items={MOCK_ITEMS} multiple defaultValue={['Apple', 'Banana']}>
            <ComboboxAnchor>
              <ComboboxChips size="md">
                <ComboboxChip value="Apple">Apple</ComboboxChip>
                <ComboboxChip value="Banana">Banana</ComboboxChip>
                <ComboboxChipsInput placeholder="Add fruit..." />
              </ComboboxChips>
            </ComboboxAnchor>
          </Combobox>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-muted-foreground">Multiple Select (Chips - SM)</h3>
          <Combobox items={MOCK_ITEMS} multiple defaultValue={['Apple', 'Banana']}>
            <ComboboxAnchor>
              <ComboboxChips size="sm">
                <ComboboxChip value="Apple">Apple</ComboboxChip>
                <ComboboxChip value="Banana">Banana</ComboboxChip>
                <ComboboxChipsInput placeholder="Add fruit..." />
              </ComboboxChips>
            </ComboboxAnchor>
          </Combobox>
        </div>

        {/* Floating popovers can be tricky in visual snapshots, we render one open at the bottom */}
        <div className="space-y-4 pt-10">
          <h3 className="font-bold text-muted-foreground">Single Select (Open)</h3>
          <Combobox items={MOCK_ITEMS} defaultOpen>
            <InputGroup>
              <ComboboxInput placeholder="Select..." />
              <ComboboxTrigger />
            </InputGroup>
            <ComboboxContent>
              <ComboboxList>
                {MOCK_ITEMS.map((item) => (
                  <ComboboxItem key={item.id} value={item.label}>
                    {item.label}
                  </ComboboxItem>
                ))}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        </div>
      </div>
    );

    await expect(component).toHaveScreenshot('combobox-matrix.png', {
      // toHaveScreenshot retries internally until stable, no manual delay needed
      maxDiffPixelRatio: 0.02,
    });
  });
});

// ============================================================
// D1: filter={null} — library must NOT self-filter options
// ============================================================
test.describe('Combobox — No Implicit Filtering', () => {
  test('filter={null} renders all options regardless of input text', async ({ mount, page }) => {
    const component = await mount(
      <Combobox items={MOCK_ITEMS} filter={null} defaultOpen>
        <InputGroup>
          <ComboboxInput id="test-filter-input" />
        </InputGroup>
        <ComboboxContent>
          <ComboboxEmpty>No results.</ComboboxEmpty>
          <ComboboxList>
            {MOCK_ITEMS.map((item) => (
              <ComboboxItem key={item.id} value={item.label}>
                {item.label}
              </ComboboxItem>
            ))}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    );

    const input = component.locator('#test-filter-input');
    await input.fill('xyz'); // text that matches nothing

    // All 3 items must still be visible — library must not filter them out
    await expect(page.getByRole('option', { name: 'Apple' })).toBeVisible();
    await expect(page.getByRole('option', { name: 'Banana' })).toBeVisible();
    await expect(page.getByRole('option', { name: 'Cherry' })).toBeVisible();

    // EmptyState must NOT appear
    await expect(page.getByText('No results.')).not.toBeVisible();
  });
});

// ============================================================
// D2: Multi-select onValueChange returns string[]
// ============================================================
test.describe('Combobox — Multi-select API', () => {
  test('multiple mode fires onValueChange with string[]', async ({ mount, page }) => {
    const values: string[][] = [];

    await mount(
      <Combobox
        items={MOCK_ITEMS}
        multiple
        filter={null}
        defaultOpen
        onValueChange={(v) => values.push(v as string[])}
      >
        <ComboboxChips>
          <ComboboxChipsInput id="multi-input" placeholder="Pick items..." />
        </ComboboxChips>
        <ComboboxContent>
          <ComboboxList>
            {MOCK_ITEMS.map((item) => (
              <ComboboxItem key={item.id} value={item.label}>
                {item.label}
              </ComboboxItem>
            ))}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    );

    await page.getByRole('option', { name: 'Apple' }).click();
    await page.getByRole('option', { name: 'Banana' }).click();

    // After 2 selections, last value should be an array with 2 entries
    expect(values[values.length - 1]).toEqual(expect.arrayContaining(['Apple', 'Banana']));
    expect(Array.isArray(values[values.length - 1])).toBe(true);
  });
});

// ============================================================
// D3: aria-describedby links input to error message
// ============================================================
test.describe('Combobox — A11y: aria-describedby', () => {
  test('input aria-describedby links to error element id', async ({ mount }) => {
    const component = await mount(
      <div>
        <Combobox items={MOCK_ITEMS} filter={null}>
          <InputGroup>
            <ComboboxInput
              id="a11y-input"
              aria-invalid={true}
              aria-describedby="a11y-error"
            />
          </InputGroup>
          <ComboboxContent>
            <ComboboxList>
              {MOCK_ITEMS.map((item) => (
                <ComboboxItem key={item.id} value={item.label}>{item.label}</ComboboxItem>
              ))}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
        <div id="a11y-error" role="alert">Field is required.</div>
      </div>
    );

    const input = component.locator('#a11y-input');
    await expect(input).toHaveAttribute('aria-describedby', 'a11y-error');
    await expect(input).toHaveAttribute('aria-invalid', 'true');
  });
});

// ============================================================
// D4: ChipRemove has accessible aria-label
// ============================================================
test.describe('Combobox — A11y: ChipRemove aria-label', () => {
  test('chip remove button has descriptive aria-label', async ({ mount }) => {
    const component = await mount(
      <Combobox items={MOCK_ITEMS} multiple filter={null} defaultValue={['Apple']}>
        <ComboboxChips>
          <ComboboxChip value="Apple" removeLabel="Remove Apple">Apple</ComboboxChip>
          <ComboboxChipsInput placeholder="Add..." />
        </ComboboxChips>
        <ComboboxContent>
          <ComboboxList>
            {MOCK_ITEMS.map((item) => (
              <ComboboxItem key={item.id} value={item.label}>{item.label}</ComboboxItem>
            ))}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    );

    const removeButton = component.getByRole('button', { name: 'Remove Apple' });
    await expect(removeButton).toBeVisible();
    await expect(removeButton).toHaveAttribute('aria-label', 'Remove Apple');
  });
});
