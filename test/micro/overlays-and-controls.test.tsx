import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/micro/breadcrumb";
import {
  Confirm,
  ConfirmContent,
  ConfirmDescription,
  ConfirmFooter,
  ConfirmHeader,
  ConfirmMedia,
  ConfirmTitle,
  ConfirmTrigger,
} from "@/components/micro/confirm";
import {
  Empty,
  EmptyAction,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/micro/empty";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/micro/hover-card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/micro/pagination";
import {
  Progress,
  ProgressIndicator,
  ProgressLabel,
  ProgressTrack,
  ProgressValue,
} from "@/components/micro/progress";
import {
  Slider,
  SliderControl,
  SliderIndicator,
  SliderThumb,
  SliderTrack,
} from "@/components/micro/slider";
import { Textarea } from "@/components/micro/textarea";
import { ThemeProvider } from "@/components/micro/theme-provider";

describe("Micro Overlays and Controls", () => {
  it("Confirm opens popup, warns when subcomponents used outside ConfirmContent, and tunnels theme", async () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    const user = userEvent.setup();

    render(
      <ThemeProvider defaultMode="dark">
        <Confirm>
          <ConfirmTrigger>Open Confirm</ConfirmTrigger>
          <ConfirmContent size="lg">
            <ConfirmHeader>
              <ConfirmMedia>!</ConfirmMedia>
              <ConfirmTitle>Confirm Delete</ConfirmTitle>
              <ConfirmDescription>Are you sure?</ConfirmDescription>
            </ConfirmHeader>
            <ConfirmFooter>Footer Actions</ConfirmFooter>
          </ConfirmContent>
        </Confirm>
      </ThemeProvider>,
    );

    await user.click(screen.getByRole("button", { name: "Open Confirm" }));

    await waitFor(() => {
      expect(screen.getByText("Confirm Delete")).toBeInTheDocument();
    });

    expect(
      screen.getByText("Confirm Delete").closest(".dark"),
    ).toBeInTheDocument();
    expect(warnSpy).not.toHaveBeenCalled();

    render(<ConfirmMedia>Outside</ConfirmMedia>);
    expect(warnSpy).toHaveBeenCalled();
    warnSpy.mockRestore();
  });

  it("HoverCard renders content inside scoped ThemeWrapper when open", async () => {
    render(
      <ThemeProvider defaultMode="dark">
        <HoverCard open>
          <HoverCardTrigger href="#profile">@gladvn</HoverCardTrigger>
          <HoverCardContent>Preview Details</HoverCardContent>
        </HoverCard>
      </ThemeProvider>,
    );

    await waitFor(() => {
      expect(screen.getByText("Preview Details")).toBeInTheDocument();
    });

    expect(
      screen.getByText("Preview Details").closest(".dark"),
    ).toBeInTheDocument();
  });

  it("Progress and Slider render tracks, indicators, and propagate size/color contexts", async () => {
    const { container } = render(
      <div>
        <Progress value={60} size="lg" color="success">
          <ProgressLabel>Upload</ProgressLabel>
          <ProgressValue />
          <ProgressTrack>
            <ProgressIndicator />
          </ProgressTrack>
        </Progress>
        <Slider defaultValue={[40]} size="sm">
          <SliderControl>
            <SliderTrack>
              <SliderIndicator />
              <SliderThumb />
            </SliderTrack>
          </SliderControl>
        </Slider>
      </div>,
    );

    await waitFor(() => {
      expect(screen.getByText("Upload")).toHaveClass("text-base");
      expect(
        container.querySelector("[data-slot='progress-indicator']"),
      ).toHaveClass("bg-success");
      expect(container.querySelector("[data-slot='slider-thumb']")).toHaveClass(
        "size-3",
      );
    });
  });

  it("Textarea, Empty, Breadcrumb, and Pagination render structural slots accurately", () => {
    const { container } = render(
      <div>
        <Textarea size="sm" placeholder="Enter notes" />
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">*</EmptyMedia>
            <EmptyTitle>Nothing here</EmptyTitle>
            <EmptyDescription>Add an item</EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <EmptyAction>Action</EmptyAction>
          </EmptyContent>
        </Empty>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Root</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbEllipsis />
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Current</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#prev" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#1" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis size="sm" />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#next" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>,
    );

    expect(screen.getByPlaceholderText("Enter notes")).toHaveAttribute(
      "data-size",
      "sm",
    );
    expect(screen.getByText("Nothing here")).toHaveAttribute(
      "data-slot",
      "empty-title",
    );
    expect(
      container.querySelector("[data-slot='breadcrumb-ellipsis']"),
    ).toBeInTheDocument();
    expect(screen.getByText("1")).toHaveAttribute("aria-current", "page");
    expect(
      container.querySelector("[data-slot='pagination-ellipsis']"),
    ).toBeInTheDocument();
  });
});
