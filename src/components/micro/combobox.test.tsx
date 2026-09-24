import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render } from "@testing-library/react";

import {
  Combobox,
  ComboboxClear,
  ComboboxTrigger,
} from "./combobox";

// ---------------------------------------------------------------------------
// NOTE: Base UI components throw their own context errors when rendered
// outside their primitive Root. Our gladvn defensive hook fires FIRST via
// console.warn, then Base UI throws. We suppress React's console.error noise
// and assert on BOTH warn + thrown error for Sad Path tests.
// ---------------------------------------------------------------------------

const suppressConsoleError = () =>
  vi.spyOn(console, "error").mockImplementation(() => {});

describe("Combobox - Defensive Context", () => {
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
      <Combobox items={[]}>
        <ComboboxTrigger>Select</ComboboxTrigger>
      </Combobox>,
    );
    expect(consoleWarnMock).not.toHaveBeenCalled();
  });

  // ─────────────────────────────────────────────────────────────────────────
  // Sad Path — từng thẻ con dùng độc lập ngoài Context
  //
  // Base UI throws its own error AFTER our warn fires. We:
  //  1. Assert our console.warn fires with the gladvn message.
  //  2. Assert that render() ultimately throws (due to Base UI).
  // ─────────────────────────────────────────────────────────────────────────

  it("🚨 [Combobox] văng warn khi <ComboboxTrigger> dùng ngoài Context", () => {
    const consoleSuppressor = suppressConsoleError();

    // Our hook fires console.warn BEFORE Base UI throws
    expect(() => render(<ComboboxTrigger>test</ComboboxTrigger>)).toThrow();

    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining(
        "[gladvn] <ComboboxTrigger> phải được dùng bên trong <Combobox>",
      ),
    );

    consoleSuppressor.mockRestore();
  });

  it("🚨 [Combobox] văng warn khi <ComboboxClear> dùng ngoài Context", () => {
    const consoleSuppressor = suppressConsoleError();

    expect(() => render(<ComboboxClear />)).toThrow();

    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining(
        "[gladvn] <ComboboxClear> phải được dùng bên trong <Combobox>",
      ),
    );

    consoleSuppressor.mockRestore();
  });

  // ─────────────────────────────────────────────────────────────────────────
  // data-size Attribute
  // ─────────────────────────────────────────────────────────────────────────

  it("✅ Root có data-size đúng trên DOM", () => {
    const { getByTestId } = render(
      <Combobox items={[]} size="lg" data-testid="root" />,
    );
    expect(getByTestId("root")).toHaveAttribute("data-size", "lg");
  });

  it("✅ Root có data-size mặc định là 'md' khi không truyền prop", () => {
    const { getByTestId } = render(
      <Combobox items={[]} data-testid="root" />,
    );
    expect(getByTestId("root")).toHaveAttribute("data-size", "md");
  });

  it("✅ Root có data-size='sm' khi truyền size='sm'", () => {
    const { getByTestId } = render(
      <Combobox items={[]} size="sm" data-testid="root" />,
    );
    expect(getByTestId("root")).toHaveAttribute("data-size", "sm");
  });
});
