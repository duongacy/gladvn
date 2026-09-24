import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render } from "@testing-library/react";

// Mock the input-otp library to avoid ResizeObserver dependency in jsdom
vi.mock("input-otp", () => ({
  OTPInput: ({ children, containerClassName, className, ...props }: React.ComponentProps<"div"> & { containerClassName?: string }) => (
    <div data-testid="otp-input" className={containerClassName} {...props}>
      {children}
    </div>
  ),
  OTPInputContext: { _currentValue: null, _currentValue2: null, Provider: ({ children }: { children: React.ReactNode }) => children, Consumer: ({ children }: { children: (v: unknown) => React.ReactNode }) => children(null) },
}));

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "./input-otp";

describe("InputOTP - Defensive Context", () => {
  let consoleWarnMock: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    consoleWarnMock = vi.spyOn(console, "warn").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleWarnMock.mockRestore();
  });

  it("✅ KHÔNG warn khi thẻ con nằm trong Context", () => {
    render(
      <InputOTP maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
        </InputOTPGroup>
        <InputOTPSeparator />
      </InputOTP>,
    );
    expect(consoleWarnMock).not.toHaveBeenCalled();
  });

  it("🚨 [InputOTP] văng warn khi <InputOTPGroup> dùng ngoài Context", () => {
    render(<InputOTPGroup>test</InputOTPGroup>);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining(
        "[gladvn] <InputOTPGroup> phải được dùng bên trong",
      ),
    );
  });

  it("🚨 [InputOTP] văng warn khi <InputOTPSlot> dùng ngoài Context", () => {
    render(<InputOTPSlot index={0} />);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining(
        "[gladvn] <InputOTPSlot> phải được dùng bên trong",
      ),
    );
  });

  it("🚨 [InputOTP] văng warn khi <InputOTPSeparator> dùng ngoài Context", () => {
    render(<InputOTPSeparator>-</InputOTPSeparator>);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining(
        "[gladvn] <InputOTPSeparator> phải được dùng bên trong",
      ),
    );
  });

  it("✅ Root có data-size đúng trên DOM", () => {
    const { container } = render(<InputOTP maxLength={6} size="lg" />);
    // data-slot="otp" is on the wrapper div rendered by InputOTP
    const root = container.querySelector("[data-slot=otp]");
    expect(root).toHaveAttribute("data-size", "lg");
  });
});
