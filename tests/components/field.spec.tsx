import { test, expect } from '@playwright/experimental-ct-react';
import * as React from 'react';
import { 
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldContent,
} from '../../src/components/micro/field';
import { Input } from '../../src/components/micro/input'; // Needed for real-world usage testing

test.describe('Field (Micro)', () => {
  test('renders identically given the same props (pure component)', async ({ mount }) => {
    const props = { orientation: 'horizontal', size: 'lg', error: 'Bad' } as const;

    const component = await mount(
      <div className="flex gap-4">
        <Field {...props} data-testid="first">
          <FieldLabel>Name</FieldLabel>
          <FieldContent>
            <Input />
            <FieldDescription>Enter your name</FieldDescription>
            <FieldError />
          </FieldContent>
        </Field>
        <Field {...props} data-testid="second">
          <FieldLabel>Name</FieldLabel>
          <FieldContent>
            <Input />
            <FieldDescription>Enter your name</FieldDescription>
            <FieldError />
          </FieldContent>
        </Field>
      </div>
    );

    const cleanHTML = (html: string) => html
      .replace(/id="[^"]+"/g, 'id="mocked"')
      .replace(/aria-[a-z]+="[^"]*base-ui-[^"]*"/g, 'aria-mocked="true"');

    const firstHTML = await component.getByTestId('first').evaluate(el => el.outerHTML);
    const secondHTML = await component.getByTestId('second').evaluate(el => el.outerHTML);

    expect(cleanHTML(firstHTML)).toEqual(cleanHTML(secondHTML));
  });

  test('applies correct data attributes for orientation and size', async ({ mount, page }) => {
    await mount(
      <Field orientation="horizontal" size="sm" data-testid="field">
        <FieldLabel>Test</FieldLabel>
      </Field>
    );

    const field = page.getByTestId('field');
    await expect(field).toHaveAttribute('data-orientation', 'horizontal');
    await expect(field).toHaveAttribute('data-size', 'sm');
  });

  test('sets data-invalid when error is present', async ({ mount, page }) => {
    await mount(
      <div className="flex gap-4">
        <Field data-testid="valid-field">
          <FieldLabel>Valid</FieldLabel>
        </Field>
        <Field error="Error message" data-testid="invalid-field">
          <FieldLabel>Invalid</FieldLabel>
        </Field>
      </div>
    );

    await expect(page.getByTestId('valid-field')).toHaveAttribute('data-invalid', 'false');
    await expect(page.getByTestId('invalid-field')).toHaveAttribute('data-invalid', 'true');
  });

  test('FieldError logic: null, single error, array, deduping, and role=alert', async ({ mount, page }) => {
    await mount(
      <div className="flex flex-col gap-4">
        {/* No error */}
        <FieldError data-testid="err-none" />
        
        {/* Children override */}
        <FieldError data-testid="err-children">Custom Error Component</FieldError>

        {/* Single error */}
        <FieldError data-testid="err-single" errors={[{ message: 'Single error' }]} />

        {/* Multiple errors with deduping */}
        <FieldError 
          data-testid="err-multiple" 
          errors={[
            { message: 'Error A' },
            { message: 'Error A' },
            { message: 'Error B' }
          ]} 
        />
      </div>
    );

    // No error: should not be visible in DOM
    await expect(page.getByTestId('err-none')).toHaveCount(0);

    // Children override
    const errChildren = page.getByTestId('err-children');
    await expect(errChildren).toBeVisible();
    await expect(errChildren).toHaveText(/Custom Error Component/);
    await expect(errChildren).toHaveAttribute('role', 'alert');

    // Single error
    const errSingle = page.getByTestId('err-single');
    await expect(errSingle).toBeVisible();
    await expect(errSingle).toHaveText(/Single error/);
    await expect(errSingle.getByRole('list')).toHaveCount(0); // Should just be text, no list

    // Multiple errors
    const errMultiple = page.getByTestId('err-multiple');
    await expect(errMultiple).toBeVisible();
    const listItems = errMultiple.getByRole('listitem');
    await expect(listItems).toHaveCount(2); // Deduped from 3 to 2
    await expect(listItems.nth(0)).toHaveText('Error A');
    await expect(listItems.nth(1)).toHaveText('Error B');
  });
});

test.describe('Field Visual Snapshots', () => {
  const ORIENTATIONS = ['vertical', 'horizontal', 'responsive'] as const;
  const SIZES = ['sm', 'md', 'lg'] as const;

  test('matches visual matrix snapshot', async ({ mount }) => {
    const component = await mount(
      <div className="flex flex-col gap-8 p-8 bg-background">
        {ORIENTATIONS.map((orientation) => (
          <div key={orientation} className="space-y-4 border p-4 rounded">
            <h3 className="font-bold uppercase text-muted-foreground">Orientation: {orientation}</h3>
            
            <div className="flex flex-col gap-6">
              {SIZES.map((size) => (
                <div key={`${orientation}-${size}`} className="p-4 border border-dashed border-muted-foreground/30">
                  <span className="text-xs text-muted-foreground block mb-4">Size: {size}</span>
                  
                  <div className="flex flex-col gap-6 w-full max-w-2xl">
                    <Field orientation={orientation} size={size}>
                      <FieldLabel>Standard Field</FieldLabel>
                      <FieldContent>
                        <Input placeholder="Type here" size={size} />
                        <FieldDescription>Description explaining what this field is for.</FieldDescription>
                      </FieldContent>
                    </Field>

                    <Field orientation={orientation} size={size} error="This is a required field">
                      <FieldLabel>Error Field</FieldLabel>
                      <FieldContent>
                        <Input placeholder="Type here" size={size} aria-invalid="true" />
                        <FieldDescription>Description explaining what this field is for.</FieldDescription>
                        <FieldError errors={[{ message: 'This is a required field' }]} />
                      </FieldContent>
                    </Field>
                    
                    <Field orientation={orientation} size={size} error="Multiple errors">
                      <FieldLabel>Multiple Errors Field</FieldLabel>
                      <FieldContent>
                        <Input placeholder="Type here" size={size} aria-invalid="true" />
                        <FieldError errors={[{ message: 'Too short' }, { message: 'Must contain number' }]} />
                      </FieldContent>
                    </Field>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );

    await expect(component).toHaveScreenshot('field-matrix.png', {
      maxDiffPixelRatio: 0.01,
    });
  });
});
