import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import React from "react";
import { render } from "@testing-library/react";

import {
  RadioGroup,
  RadioGroupIndicator,
  RadioGroupItem,
} from "./radio-group";

// Simple error boundary to catch Base UI's context errors so tests can assert
// our defensive warn fired before the library throws.
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

describe("RadioGroup - Defensive Context", () => {
  let consoleWarnMock: ReturnType<typeof vi.spyOn>;
  let consoleErrorMock: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    consoleWarnMock = vi.spyOn(console, "warn").mockImplementation(() => {});
    // Suppress React error boundary noise in test output
    consoleErrorMock = vi.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleWarnMock.mockRestore();
    consoleErrorMock.mockRestore();
  });

  it("✅ KHÔNG warn khi thẻ con nằm trong Context", () => {
    render(
      <RadioGroup>
        <RadioGroupItem value="a">
          <RadioGroupIndicator />
        </RadioGroupItem>
        <RadioGroupItem value="b">
          <RadioGroupIndicator />
        </RadioGroupItem>
      </RadioGroup>
    );
    expect(consoleWarnMock).not.toHaveBeenCalled();
  });

  it("🚨 [RadioGroup] văng warn khi <RadioGroupItem> dùng ngoài Context", () => {
    render(<RadioGroupItem value="test" />);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining(
        "[gladvn] <RadioGroupItem> phải được dùng bên trong"
      )
    );
  });

  it("🚨 [RadioGroup] văng warn khi <RadioGroupIndicator> dùng ngoài Context", () => {
    // RadioGroupIndicator wraps Base UI's RadioPrimitive.Indicator which
    // itself requires Radio.Root context. Our defensive warn fires synchronously
    // during render (before Base UI's throw), so wrapping in an ErrorBoundary
    // lets us assert the warn without the test crashing.
    render(
      <ErrorBoundary>
        <RadioGroupIndicator />
      </ErrorBoundary>
    );
    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining(
        "[gladvn] <RadioGroupIndicator> phải được dùng bên trong"
      )
    );
  });

  it("✅ Root có data-size đúng trên DOM", () => {
    const { getByTestId } = render(
      <RadioGroup size="lg" data-testid="root" />
    );
    expect(getByTestId("root")).toHaveAttribute("data-size", "lg");
  });
});
