import {
  CheckCircle2Icon,
  FileX2Icon,
  InboxIcon,
  InfoIcon,
  SearchIcon,
  TriangleAlertIcon,
  XCircleIcon,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { Alert, AlertDescription, AlertTitle } from "@/components/micro/alert";
import { Button } from "@/components/micro/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/micro/empty";
import { Progress } from "@/components/micro/progress";
import { Skeleton } from "@/components/micro/skeleton";
import { Toaster } from "@/components/micro/sonner";
import { Spinner } from "@/components/micro/spinner";
import { SectionHeader, ShowcaseBlock } from "@/dev/components/showcase";

export default function FeedbackSection() {
  const [progress1, setProgress1] = useState(25);
  const [progress2, setProgress2] = useState(60);
  const [progress3, setProgress3] = useState(90);

  return (
    <div className="space-y-5">
      <SectionHeader
        title="Feedback"
        description="Alert, Progress, Skeleton, Spinner, Sonner, Empty"
      />

      {/* Toaster provider for this section */}
      <Toaster position="bottom-right" />

      {/* ── Alert ── */}
      <ShowcaseBlock title="Alert">
        <div className="space-y-3">
          <Alert color="info">
            <InfoIcon />
            <AlertTitle>Info</AlertTitle>
            <AlertDescription>
              Your session will expire in 10 minutes.
            </AlertDescription>
          </Alert>
          <Alert color="success">
            <CheckCircle2Icon />
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>
              Your changes have been saved successfully.
            </AlertDescription>
          </Alert>
          <Alert color="warning">
            <TriangleAlertIcon />
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>
              This action cannot be undone easily.
            </AlertDescription>
          </Alert>
          <Alert color="destructive">
            <XCircleIcon />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Failed to connect to the server.
            </AlertDescription>
          </Alert>
        </div>
      </ShowcaseBlock>

      <div className="grid gap-5 sm:grid-cols-2">
        {/* ── Progress ── */}
        <ShowcaseBlock title="Progress">
          <div className="space-y-4">
            <Progress value={progress1} size="sm" />
            <Progress value={progress2} size="md" />
            <Progress value={progress3} size="lg" />
            <div className="flex gap-2 pt-1">
              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  setProgress1(Math.max(0, progress1 - 10));
                  setProgress2(Math.max(0, progress2 - 10));
                  setProgress3(Math.max(0, progress3 - 10));
                }}
              >
                − 10%
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  setProgress1(Math.min(100, progress1 + 10));
                  setProgress2(Math.min(100, progress2 + 10));
                  setProgress3(Math.min(100, progress3 + 10));
                }}
              >
                + 10%
              </Button>
            </div>
          </div>
        </ShowcaseBlock>

        {/* ── Skeleton ── */}
        <ShowcaseBlock title="Skeleton">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Skeleton className="size-10 rounded-full" />
              <div className="space-y-2 flex-1">
                <Skeleton className="h-3.5 w-1/3" />
                <Skeleton className="h-3 w-1/2" />
              </div>
            </div>
            <Skeleton className="h-28 w-full rounded-lg" />
            <div className="space-y-2">
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-5/6" />
              <Skeleton className="h-3 w-4/6" />
            </div>
          </div>
        </ShowcaseBlock>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {/* ── Spinner ── */}
        <ShowcaseBlock title="Spinner">
          <div className="space-y-4">
            <div className="flex items-center gap-6">
              <div className="flex flex-col items-center gap-2">
                <Spinner size="sm" />
                <span className="text-xs text-muted-foreground">sm</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Spinner size="md" />
                <span className="text-xs text-muted-foreground">md</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Spinner size="lg" />
                <span className="text-xs text-muted-foreground">lg</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Spinner className="size-8 text-primary" />
                <span className="text-xs text-muted-foreground">custom</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button size="sm" disabled variant="outline">
                <Spinner size="sm" />
                Loading…
              </Button>
              <Button size="md" variant="outline" disabled>
                <Spinner size="md" />
                Please wait
              </Button>
              <Button size="lg" variant="outline" disabled>
                <Spinner size="lg" />
                Processing
              </Button>
            </div>
          </div>
        </ShowcaseBlock>

        {/* ── Sonner (Toast) ── */}
        <ShowcaseBlock title="Sonner (Toast)">
          <div className="space-y-6">
            {/* States */}
            <div className="space-y-3">
              <div>
                <h4 className="text-sm font-medium">States</h4>
                <p className="text-xs text-muted-foreground">
                  Basic toast variations for different intents.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => toast("Event has been created")}
                >
                  Default
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  color="success"
                  onClick={() => toast.success("Changes saved successfully")}
                >
                  Success
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  color="info"
                  onClick={() => toast.info("Session expires in 10 minutes")}
                >
                  Info
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  color="warning"
                  onClick={() => toast.warning("Disk space running low")}
                >
                  Warning
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  color="destructive"
                  onClick={() => toast.error("Failed to save changes")}
                >
                  Error
                </Button>
              </div>
            </div>

            {/* Interactivity */}
            <div className="space-y-3">
              <div>
                <h4 className="text-sm font-medium">Interactivity</h4>
                <p className="text-xs text-muted-foreground">
                  Toasts with actions, cancel options, or explicit close
                  buttons.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() =>
                    toast("You can close this toast manually", {
                      closeButton: true,
                    })
                  }
                >
                  With Close Button
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() =>
                    toast("File uploaded", {
                      description:
                        "image.png has been uploaded to your gallery.",
                      action: { label: "View", onClick: () => {} },
                    })
                  }
                >
                  With Action
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() =>
                    toast("Confirm deletion", {
                      description: "Are you sure you want to delete this file?",
                      action: {
                        label: "Delete",
                        onClick: () => toast.error("File deleted"),
                      },
                      cancel: {
                        label: "Cancel",
                        onClick: () => toast.info("Action cancelled"),
                      },
                    })
                  }
                >
                  With Cancel
                </Button>
              </div>
            </div>

            {/* Advanced */}
            <div className="space-y-3">
              <div>
                <h4 className="text-sm font-medium">Advanced</h4>
                <p className="text-xs text-muted-foreground">
                  Promises and custom positions.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    const promise = new Promise((resolve) =>
                      setTimeout(resolve, 2000),
                    );
                    toast.promise(promise, {
                      loading: "Loading data...",
                      success: "Data loaded successfully",
                      error: "Failed to load data",
                    });
                  }}
                >
                  Promise
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() =>
                    toast("Top Center Toast", { position: "top-center" })
                  }
                >
                  Top Center Position
                </Button>
              </div>
            </div>
          </div>
        </ShowcaseBlock>
      </div>

      {/* ── Empty ── */}
      <ShowcaseBlock title="Empty">
        <div className="grid gap-5 sm:grid-cols-3">
          <Empty className="border">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <InboxIcon />
              </EmptyMedia>
              <EmptyTitle>No messages</EmptyTitle>
              <EmptyDescription>
                Your inbox is empty. New messages will appear here.
              </EmptyDescription>
            </EmptyHeader>
          </Empty>

          <Empty className="border">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <SearchIcon />
              </EmptyMedia>
              <EmptyTitle>No results found</EmptyTitle>
              <EmptyDescription>
                Try adjusting your search or filter criteria.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button size="sm" variant="outline">
                Clear filters
              </Button>
            </EmptyContent>
          </Empty>

          <Empty className="border">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <FileX2Icon />
              </EmptyMedia>
              <EmptyTitle>No documents</EmptyTitle>
              <EmptyDescription>
                Get started by creating your first document.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button size="sm">Create document</Button>
            </EmptyContent>
          </Empty>
        </div>
      </ShowcaseBlock>
    </div>
  );
}
