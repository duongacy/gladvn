import { useState } from "react"
import { Button, Progress } from "../../index"
import { SectionHeader, ExampleSection } from "../components/showcase";

export default function ProgressShowcase() {
  const [progress1, setProgress1] = useState(25)
  const [progress2, setProgress2] = useState(60)
  const [progress3, setProgress3] = useState(90)

  return (
    <div className="space-y-10">
      <SectionHeader title="Progress" description="Displays an indicator showing the completion progress of a task." />

      <ExampleSection label="Sizes" description="Progress bars in sm, md, and lg sizes.">
        <div className="w-full max-w-md space-y-4">
          <Progress value={progress1} label="Uploading" size="sm" />
          <Progress value={progress2} label="Processing" size="md" />
          <Progress value={progress3} label="Almost done" size="lg" />
          <div className="flex gap-2 pt-1">
            <Button
              size="sm"
              variant="outline"
              onClick={() => {
                setProgress1(Math.max(0, progress1 - 10))
                setProgress2(Math.max(0, progress2 - 10))
                setProgress3(Math.max(0, progress3 - 10))
              }}
            >
              − 10%
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => {
                setProgress1(Math.min(100, progress1 + 10))
                setProgress2(Math.min(100, progress2 + 10))
                setProgress3(Math.min(100, progress3 + 10))
              }}
            >
              + 10%
            </Button>
          </div>
        </div>
      </ExampleSection>
    </div>
  );
}
