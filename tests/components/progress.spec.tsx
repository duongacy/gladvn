import { test, expect } from '@playwright/experimental-ct-react';
import * as React from 'react';
import { 
  Progress, 
  ProgressIndicator, 
  ProgressTrack,
  ProgressLabel,
  ProgressValue
} from '../../src/components/micro/progress';

test.describe('Progress (Micro)', () => {
  test('renders identically given the same props (pure component)', async ({ mount }) => {
    const props = { value: 50 } as const;

    const component = await mount(
      <div className="flex gap-4">
        <Progress {...props} data-testid="first">
          <ProgressLabel>Downloading</ProgressLabel>
          <ProgressValue />
          <ProgressTrack>
            <ProgressIndicator />
          </ProgressTrack>
        </Progress>
        <Progress {...props} data-testid="second">
          <ProgressLabel>Downloading</ProgressLabel>
          <ProgressValue />
          <ProgressTrack>
            <ProgressIndicator />
          </ProgressTrack>
        </Progress>
      </div>
    );

    const cleanHTML = (html: string) => html
      .replace(/id="[^"]+"/g, 'id="mocked"')
      .replace(/aria-[a-z]+="[^"]*base-ui-[^"]*"/g, 'aria-mocked="true"');

    const firstHTML = await component.getByTestId('first').evaluate(el => el.outerHTML);
    const secondHTML = await component.getByTestId('second').evaluate(el => el.outerHTML);

    expect(cleanHTML(firstHTML)).toEqual(cleanHTML(secondHTML));
  });

  test('has correct role and accessible attributes when provided a value', async ({ mount, page }) => {
    await mount(
      <Progress value={75} min={0} max={100} aria-label="Loading">
        <ProgressTrack>
          <ProgressIndicator />
        </ProgressTrack>
      </Progress>
    );

    const progressbar = page.getByRole('progressbar');
    
    await expect(progressbar).toHaveAttribute('aria-valuenow', '75');
    await expect(progressbar).toHaveAttribute('aria-valuemin', '0');
    await expect(progressbar).toHaveAttribute('aria-valuemax', '100');
    await expect(progressbar).toHaveAttribute('aria-label', 'Loading');
  });

  test('omits aria-valuenow when in indeterminate state (value is undefined)', async ({ mount, page }) => {
    await mount(
      <Progress aria-label="Loading" value={null}>
        <ProgressTrack>
          <ProgressIndicator />
        </ProgressTrack>
      </Progress>
    );

    const progressbar = page.getByRole('progressbar');
    
    // In indeterminate state, aria-valuenow shouldn't exist or it might be handled differently by headless lib
    const ariaValuenow = await progressbar.getAttribute('aria-valuenow');
    expect(ariaValuenow).toBeNull();
  });
});

test.describe('Progress Visual Snapshots', () => {
  const SIZES = ['sm', 'md', 'lg'] as const;
  const COLORS = ['primary', 'destructive', 'success', 'warning', 'muted'] as const;
  const VALUES = [0, 50, 100, null] as const;

  test('matches visual matrix snapshot', async ({ mount }) => {
    const component = await mount(
      <div className="flex flex-col gap-8 p-8 bg-background">
        {SIZES.map((size) => (
          <div key={size} className="space-y-6">
            <h3 className="text-sm font-bold text-muted-foreground uppercase">Size: {size}</h3>
            
            {COLORS.map((color) => (
              <div key={color} className="space-y-3">
                <span className="text-xs text-muted-foreground">{color}</span>
                
                <div className="flex flex-wrap gap-6 items-start">
                  {VALUES.map((value) => {
                    const stateLabel = value === null ? 'indeterminate' : `${value}%`;
                    
                    return (
                      <div key={`${size}-${color}-${value}`} className="w-48 flex flex-col gap-2">
                        <span className="text-[10px] text-muted-foreground">{stateLabel}</span>
                        <Progress size={size} color={color} value={value}>
                          <ProgressLabel>Downloading</ProgressLabel>
                          <ProgressValue />
                          <ProgressTrack>
                            <ProgressIndicator />
                          </ProgressTrack>
                        </Progress>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );

    await expect(component).toHaveScreenshot('progress-matrix.png', {
      maxDiffPixelRatio: 0.01,
    });
  });
});
