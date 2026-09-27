import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render } from "@testing-library/react";

import { Checkbox, CheckboxIndicator } from "./checkbox";

// ---------------------------------------------------------------------------
// NOTE: Base UI's CheckboxIndicator.Root throws its OWN context error when
// rendered outside <Checkbox.Root>. Our gladvn defensive hook fires FIRST,
// then Base UI throws. We need to suppress React's uncaught error logging
// (console.error) and assert on BOTH warn + thrown error.
// ---------------------------------------------------------------------------

// Silence React's "uncaught error" dev-mode noise for throws in tests
const suppressConsoleError = () =>
  vi.spyOn(console, "error").mockImplementation(() => {});

describe("Checkbox - Defensive Context", () => {
  let consoleWarnMock: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    consoleWarnMock = vi.spyOn(console, "warn").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleWarnMock.mockRestore();
    vi.restoreAllMocks();
  });

  // ─────────────────────────────────────────────────────────────────────────
  // Happy Path
  // ─────────────────────────────────────────────────────────────────────────

  it("✅ KHÔNG warn khi thẻ con nằm trong Context", () => {
    render(
      <Checkbox>
        <CheckboxIndicator />
      </Checkbox>,
    );
    expect(consoleWarnMock).not.toHaveBeenCalled();
  });

  // ─────────────────────────────────────────────────────────────────────────
  // Sad Path — used independently outside Context
  //
  // Base UI throws its own error AFTER our warn fires. We:
  //  1. Assert our console.warn fires with the gladvn message.
  //  2. Assert that render() ultimately throws (due to Base UI).
  // ─────────────────────────────────────────────────────────────────────────

  it("🚨 [Checkbox] văng warn khi <CheckboxIndicator> dùng ngoài Context", () => {
    const consoleSuppressor = suppressConsoleError();

    // Our hook fires console.warn BEFORE Base UI throws — capture it
    expect(() => render(<CheckboxIndicator />)).toThrow();

    // Verify our defensive warn fired before the throw
    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining(
        "[gladvn] <CheckboxIndicator> phải được dùng bên trong <Checkbox>",
      ),
    );

    consoleSuppressor.mockRestore();
  });

  // ─────────────────────────────────────────────────────────────────────────
  // data-size Attribute
  // ─────────────────────────────────────────────────────────────────────────

  it("✅ Root có data-size đúng trên DOM", () => {
    const { getByTestId } = render(<Checkbox size="lg" data-testid="root" />);
    expect(getByTestId("root")).toHaveAttribute("data-size", "lg");
  });

  it("✅ Root có data-size mặc định là 'md' khi không truyền prop", () => {
    const { getByTestId } = render(<Checkbox data-testid="root" />);
    expect(getByTestId("root")).toHaveAttribute("data-size", "md");
  });

  it("✅ Root có data-size='sm' khi truyền size='sm'", () => {
    const { getByTestId } = render(<Checkbox size="sm" data-testid="root" />);
    expect(getByTestId("root")).toHaveAttribute("data-size", "sm");
  });
});
