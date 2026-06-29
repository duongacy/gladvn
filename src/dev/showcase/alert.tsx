import { useState } from "react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
  AlertAction,
  Button,
  MonoSelect,
} from "../../index";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "../components/showcase";
import {
  InfoIcon,
  TriangleAlertIcon,
  CheckCircle2Icon,
  XCircleIcon,
  XIcon,
} from "lucide-react";

export default function AlertShowcase() {
  const [globalSize, setGlobalSize] = useState<"sm" | "md" | "lg">("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Alert"
        description="Displays a callout for user attention."
      >
        <MonoSelect
          value={globalSize}
          onValueChange={(v) => setGlobalSize(v as any)}
          options={[
            { value: "sm", label: "Size: sm" },
            { value: "md", label: "Size: md" },
            { value: "lg", label: "Size: lg" },
          ]}
        />
      </SectionHeader>

      {/* ── Semantic Colors ──────────────────────── */}
      <ExampleSection
        label="Semantic Colors"
        description="Each color conveys a different level of urgency."
      >
        <div className="flex w-full flex-col gap-4 max-w-xl">
          <Alert color="info" size={globalSize}>
            <InfoIcon />
            <AlertTitle>Update Available</AlertTitle>
            <AlertDescription>
              A new software update is available. See what's new in version
              2.0.4.
            </AlertDescription>
          </Alert>

          <Alert color="success" size={globalSize}>
            <CheckCircle2Icon />
            <AlertTitle>Saved</AlertTitle>
            <AlertDescription>
              Your changes have been successfully saved to the cloud.
            </AlertDescription>
          </Alert>

          <Alert color="warning" size={globalSize}>
            <TriangleAlertIcon />
            <AlertTitle>Session Expiring</AlertTitle>
            <AlertDescription>
              Your session is about to expire in 5 minutes. Please save your
              work.
            </AlertDescription>
          </Alert>

          <Alert color="destructive" size={globalSize}>
            <XCircleIcon />
            <AlertTitle>Connection Failed</AlertTitle>
            <AlertDescription>
              Failed to connect to the database. Please check your connection
              strings.
            </AlertDescription>
          </Alert>
        </div>
      </ExampleSection>

      <ExampleGrid columns={2}>
        {/* ── Default (no color) ───────────────────── */}
        <ExampleSection
          label="Default"
          description="Neutral card-style alert without a semantic color."
        >
          <div className="w-full">
            <Alert size={globalSize}>
              <InfoIcon />
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>
                You can add components to your app using the CLI.
              </AlertDescription>
            </Alert>
          </div>
        </ExampleSection>

        {/* ── With Action ───────────────────── */}
        <ExampleSection
          label="With Action"
          description="Alert with a dismiss button positioned at the top-right."
        >
          <div className="w-full">
            <Alert color="info" size={globalSize}>
              <InfoIcon />
              <AlertTitle>New feature available</AlertTitle>
              <AlertDescription>
                Check out the new dashboard analytics page.
              </AlertDescription>
              <AlertAction>
                <Button variant="ghost" size="sm" className="size-6 p-0">
                  <XIcon className="size-3.5" />
                </Button>
              </AlertAction>
            </Alert>
          </div>
        </ExampleSection>
      </ExampleGrid>

      {/* ── Minimal (no title) ───────────────────── */}
      <ExampleSection
        label="Minimal"
        description="Alert with description only — no title."
      >
        <div className="flex w-full flex-col gap-3 max-w-xl">
          <Alert color="info" size={globalSize}>
            <InfoIcon />
            <AlertDescription>
              You can add components to your app using the CLI.
            </AlertDescription>
          </Alert>
          <Alert color="warning" size={globalSize}>
            <TriangleAlertIcon />
            <AlertDescription>
              Your trial will expire in 3 days.
            </AlertDescription>
          </Alert>
        </div>
      </ExampleSection>

      {/* ── Text Only (no icon) ───────────────────── */}
      <ExampleSection
        label="Text Only"
        description="Simple text alerts without icons — single-column layout."
      >
        <div className="flex w-full flex-col gap-3 max-w-xl">
          <Alert color="success" size={globalSize}>
            <AlertTitle>Payment received</AlertTitle>
            <AlertDescription>
              Your invoice #1234 has been paid successfully.
            </AlertDescription>
          </Alert>
          <Alert color="destructive" size={globalSize}>
            <AlertTitle>Account suspended</AlertTitle>
            <AlertDescription>
              Please contact support to reactivate your account.
            </AlertDescription>
          </Alert>
        </div>
      </ExampleSection>
    </div>
  );
}
