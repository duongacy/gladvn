import { test, expect } from '@playwright/experimental-ct-react';
import { BoldIcon, ItalicIcon, UnderlineIcon } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from '../../src/components/micro/toggle-group';

test.describe('ToggleGroup (Micro)', () => {
  test('renders identically given the same props (pure component)', async ({ mount }) => {
    const props = { type: 'single', defaultValue: 'a' } as const;

    const component = await mount(
      <div className="flex gap-4">
        <ToggleGroup {...props} data-testid="first">
          <ToggleGroupItem value="a">A</ToggleGroupItem>
        </ToggleGroup>
        <ToggleGroup {...props} data-testid="second">
          <ToggleGroupItem value="a">A</ToggleGroupItem>
        </ToggleGroup>
      </div>
    );

    const cleanHTML = (html: string) => html.replace(/id="[^"]+"/g, 'id="mocked"');

    const firstHTML = await component.getByTestId('first').evaluate(el => el.innerHTML);
    const secondHTML = await component.getByTestId('second').evaluate(el => el.innerHTML);

    expect(cleanHTML(firstHTML)).toEqual(cleanHTML(secondHTML));
  });

  test('toggles selection when an item is clicked in single mode', async ({ mount }) => {
    let selected = '';
    const component = await mount(
      <ToggleGroup type="single" onValueChange={(v) => selected = v as string}>
        <ToggleGroupItem value="bold" aria-label="Bold"><BoldIcon /></ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Italic"><ItalicIcon /></ToggleGroupItem>
      </ToggleGroup>
    );

    const boldBtn = component.getByRole('button', { name: 'Bold' });
    const italicBtn = component.getByRole('button', { name: 'Italic' });

    await boldBtn.click();
    expect(selected).toEqual(['bold']);
    await expect(boldBtn).toHaveAttribute('aria-pressed', 'true');
    await expect(italicBtn).toHaveAttribute('aria-pressed', 'false');

    await italicBtn.click();
    expect(selected).toEqual(['italic']);
    await expect(boldBtn).toHaveAttribute('aria-pressed', 'false');
    await expect(italicBtn).toHaveAttribute('aria-pressed', 'true');
  });

  test('supports keyboard navigation via Arrow keys', async ({ mount, page }) => {
    const component = await mount(
      <ToggleGroup type="single">
        <ToggleGroupItem value="bold" aria-label="Bold"><BoldIcon /></ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Italic"><ItalicIcon /></ToggleGroupItem>
      </ToggleGroup>
    );

    const boldBtn = component.getByRole('button', { name: 'Bold' });
    const italicBtn = component.getByRole('button', { name: 'Italic' });

    await boldBtn.focus();
    await page.keyboard.press('ArrowRight');
    
    // In ToggleGroup, Arrow keys usually move focus to the next item
    await expect(italicBtn).toBeFocused();
  });
});

test.describe('ToggleGroup Visual Snapshots', () => {
  test('matches visual matrix snapshot', async ({ mount }) => {
    const component = await mount(
      <div className="flex flex-col gap-12 p-8 bg-background">
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Horizontal (Spacing = 0)</h3>
          <ToggleGroup type="multiple" spacing={0} defaultValue={['bold']}>
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
              <BoldIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
              <ItalicIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Toggle underline">
              <UnderlineIcon />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Horizontal (Spacing = 2)</h3>
          <ToggleGroup type="multiple" spacing={2} defaultValue={['italic']}>
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
              <BoldIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
              <ItalicIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Toggle underline">
              <UnderlineIcon />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Vertical (Spacing = 0)</h3>
          <ToggleGroup type="single" orientation="vertical" spacing={0} defaultValue="underline">
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
              <BoldIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
              <ItalicIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Toggle underline">
              <UnderlineIcon />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
    );

    await expect(component).toHaveScreenshot('toggle-group-matrix.png', {
      maxDiffPixelRatio: 0.01,
    });
  });
});
