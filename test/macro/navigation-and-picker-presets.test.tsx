import React from "react";

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeAll, describe, expect, it, vi } from "vitest";

import { BreadcrumbPreset } from "@/components/macro/breadcrumb-preset";
import { CarouselPreset } from "@/components/macro/carousel-preset";
import {
  CommandDialog,
  CommandInput,
  CommandItem,
  CommandList,
  CommandPreset,
} from "@/components/macro/command-preset";
import { DatePicker } from "@/components/macro/date-picker";
import { InputOTPPreset } from "@/components/macro/input-otp-preset";
import { PaginationPreset } from "@/components/macro/pagination-preset";
import { ThemeProvider } from "@/components/micro/theme-provider";

vi.mock("input-otp", () => ({
  OTPInput: ({
    children,
    render: renderProp,
    containerClassName,
    className: _className,
    ...props
  }: React.ComponentProps<"div"> & {
    containerClassName?: string;
    render?: (props: { slots: never[] }) => React.ReactNode;
  }) => (
    <div data-testid="otp-input" className={containerClassName} {...props}>
      {renderProp ? renderProp({ slots: [] }) : children}
    </div>
  ),
  OTPInputContext: React.createContext({ slots: [] }),
}));

beforeAll(() => {
  if (!Element.prototype.scrollIntoView) {
    Element.prototype.scrollIntoView = vi.fn();
  }
  if (typeof globalThis.ResizeObserver === "undefined") {
    globalThis.ResizeObserver = class ResizeObserver {
      observe() {}
      unobserve() {}
      disconnect() {}
    };
  }
  if (typeof globalThis.IntersectionObserver === "undefined") {
    globalThis.IntersectionObserver = class IntersectionObserver {
      readonly root = null;
      readonly rootMargin = "";
      readonly thresholds = [];
      observe() {}
      unobserve() {}
      disconnect() {}
      takeRecords() {
        return [];
      }
    } as unknown as typeof IntersectionObserver;
  }
  if (typeof window.matchMedia === "undefined") {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockImplementation((query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });
  }
});

describe("Navigation and Picker Macro Presets", () => {
  it("BreadcrumbPreset renders links for intermediate items and page for final item", () => {
    render(
      <BreadcrumbPreset
        items={[
          { label: "Home", href: "/" },
          { label: "Components", href: "/components" },
          { label: "Breadcrumb" },
        ]}
      />,
    );

    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute(
      "href",
      "/",
    );
    expect(screen.getByRole("link", { name: "Components" })).toHaveAttribute(
      "href",
      "/components",
    );
    expect(screen.getByText("Breadcrumb")).toHaveAttribute(
      "aria-current",
      "page",
    );
  });

  it("PaginationPreset renders page links, ellipsis, and invokes onPageChange", async () => {
    const user = userEvent.setup();
    const handlePageChange = vi.fn();

    render(
      <PaginationPreset
        currentPage={5}
        totalPages={10}
        onPageChange={handlePageChange}
      />,
    );

    expect(screen.getByText("5")).toHaveAttribute("aria-current", "page");

    await user.click(screen.getByText("6"));
    expect(handlePageChange).toHaveBeenCalledWith(6);
  });

  it("CommandPreset and CommandDialog render groups and preserve scoped theme", async () => {
    const user = userEvent.setup();
    const handleSelect = vi.fn();

    render(
      <ThemeProvider defaultMode="dark">
        <CommandPreset
          onSelect={handleSelect}
          groups={[
            {
              heading: "Suggestions",
              items: [
                { value: "calendar", label: "Calendar", shortcut: "⌘C" },
                { value: "settings", label: "Settings", shortcut: "⌘S" },
              ],
            },
          ]}
        />
        <CommandDialog open title="Quick Command">
          <CommandInput placeholder="Type a command..." />
          <CommandList>
            <CommandItem value="run">Run Task</CommandItem>
          </CommandList>
        </CommandDialog>
      </ThemeProvider>,
    );

    expect(screen.getByText("Suggestions")).toBeInTheDocument();
    expect(screen.getByText("⌘C")).toBeInTheDocument();

    await user.click(screen.getByText("Calendar"));
    expect(handleSelect).toHaveBeenCalledWith("calendar");

    await waitFor(() => {
      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });
    expect(screen.getByRole("dialog").closest(".dark")).toBeInTheDocument();
  });

  it("DatePicker opens calendar popover, formats selection, and inherits scoped theme", async () => {
    const user = userEvent.setup();
    const handleValueChange = vi.fn();

    render(
      <ThemeProvider defaultMode="dark">
        <DatePicker
          label="Birth Date"
          description="Select your date of birth"
          errorMessage="Date is required"
          onValueChange={handleValueChange}
        />
      </ThemeProvider>,
    );

    const trigger = screen.getByRole("button", { name: "Birth Date" });
    expect(trigger).toHaveAttribute("aria-invalid", "true");
    expect(screen.getByText("Pick a date")).toBeInTheDocument();
    expect(screen.getByText("Select your date of birth")).toBeInTheDocument();
    expect(screen.getByText("Date is required")).toBeInTheDocument();

    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getByRole("button", { name: "Apply" })).toBeInTheDocument();
    });

    const applyBtn = screen.getByRole("button", { name: "Apply" });
    expect(applyBtn.closest(".dark")).toBeInTheDocument();

    await user.click(applyBtn);
    expect(handleValueChange).toHaveBeenCalled();
  });

  it("InputOTPPreset renders grouped slots and field metadata", () => {
    const { container } = render(
      <InputOTPPreset
        label="Verification Code"
        description="Enter the 6-digit code"
        errorMessage="Invalid code"
        groups={[3, 3]}
      />,
    );

    expect(screen.getByText("Verification Code")).toBeInTheDocument();
    expect(screen.getByText("Enter the 6-digit code")).toBeInTheDocument();
    expect(screen.getByText("Invalid code")).toBeInTheDocument();
    expect(
      container.querySelectorAll("[data-slot='input-otp-slot']"),
    ).toHaveLength(6);
    expect(
      container.querySelectorAll("[data-slot='input-otp-separator']"),
    ).toHaveLength(1);
  });

  it("CarouselPreset renders slides, navigation arrows, and dots in horizontal and vertical modes", () => {
    const { rerender } = render(
      <CarouselPreset
        items={[
          { id: 1, content: <div>Slide One</div> },
          { id: 2, content: <div>Slide Two</div> },
        ]}
      />,
    );

    expect(screen.getByText("Slide One")).toBeInTheDocument();
    expect(screen.getByText("Slide Two")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Previous slide/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Next slide/i }),
    ).toBeInTheDocument();

    rerender(
      <CarouselPreset
        orientation="vertical"
        showArrows={false}
        showDots={false}
        items={[{ id: 1, content: <div>Vertical Slide</div> }]}
      />,
    );

    expect(screen.getByText("Vertical Slide")).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /Previous slide/i }),
    ).not.toBeInTheDocument();
  });
});
