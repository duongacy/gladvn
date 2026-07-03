import { toast } from "sonner";
import { SectionHeader, ExampleSection } from "@/dev/components/showcase";
import { Button } from "@/components/micro/button";

export default function SonnerShowcase() {
  return (
    <div className="space-y-10">
      <SectionHeader
        title="Sonner"
        description="An opinionated toast component for React."
      />

      <ExampleSection
        label="Toast Types"
        description="Click each button to trigger a different toast type."
      >
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            onClick={() =>
              toast("Event has been created", {
                description: "Sunday, December 03, 2023 at 9:00 AM",
                action: { label: "Undo", onClick: () => console.log("Undo") },
              })
            }
          >
            Default Toast
          </Button>
          <Button
            variant="outline"
            color="success"
            onClick={() => toast.success("Successfully saved!")}
          >
            Success
          </Button>
          <Button
            variant="outline"
            color="destructive"
            onClick={() => toast.error("An error occurred.")}
          >
            Error
          </Button>
          <Button
            variant="outline"
            color="warning"
            onClick={() => toast.warning("Connection is unstable.")}
          >
            Warning
          </Button>
          <Button
            variant="outline"
            color="info"
            onClick={() => toast.info("Update is available.")}
          >
            Info
          </Button>
        </div>
      </ExampleSection>
    </div>
  );
}
