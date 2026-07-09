import { CalendarIcon } from "lucide-react";
import { SectionHeader, ExampleSection } from "@/dev/components/showcase";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/micro/avatar";
import { Button } from "@/components/micro/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/micro/hover-card";

export default function HoverCardShowcase() {
  return (
    <div className="space-y-10">
      <SectionHeader
        title="Hover Card"
        description="Để người dùng sáng mắt xem trước nội dung có sẵn đằng sau một liên kết."
      />

      <ExampleSection
        label="Default"
        description="Di chuột qua liên kết để xem bản xem trước."
        codeString={`<HoverCard>
  <HoverCardTrigger render={<Button variant="link" />}>
    @nextjs
  </HoverCardTrigger>
  <HoverCardContent className="w-80">
    <div className="flex justify-between space-x-4">
      <Avatar>
        <AvatarImage src="https://github.com/vercel.png" />
        <AvatarFallback>VC</AvatarFallback>
      </Avatar>
      <div className="space-y-1">
        <h4 className="text-sm font-semibold">@nextjs</h4>
        <p className="text-sm">
          The React Framework – created and maintained by @vercel.
        </p>
        <div className="flex items-center pt-2">
          <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
          <span className="text-xs text-muted-foreground">
            Joined December 2021
          </span>
        </div>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>
`}
      >
        <HoverCard>
          <HoverCardTrigger render={<Button variant="link" />}>
            @nextjs
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <Avatar>
                <AvatarImage src="https://github.com/vercel.png" />
                <AvatarFallback>VC</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">@nextjs</h4>
                <p className="text-sm">
                  The React Framework – created and maintained by @vercel.
                </p>
                <div className="flex items-center pt-2">
                  <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                  <span className="text-xs text-muted-foreground">
                    Joined December 2021
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </ExampleSection>
    </div>
  );
}
