import { useState } from "react";
import { MonoSelect } from "@/dev/components/mono-select";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";
import { type Size } from "@/lib/types";
import { DialogPreset } from "@/components/macro/dialog-preset";
import { DialogClose } from "@/components/micro/dialog";
import { Button } from "@/components/micro/button";
import { Input } from "@/components/micro/input";
import { Label } from "@/components/micro/label";

export default function MacroDialogShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");
  const [controlledOpen, setControlledOpen] = useState(false);

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Dialog (Macro)"
        description="Một thành phần cài sẵn giúp rút gọn API của Dialog, gom Trigger, Header, Content và Footer vào một component duy nhất."
      >
        <MonoSelect
          value={globalSize}
          onValueChange={(v) => setGlobalSize(v as Size)}
          options={[
            { value: "sm", label: "Size: sm" },
            { value: "md", label: "Size: md" },
            { value: "lg", label: "Size: lg" },
          ]}
        />
      </SectionHeader>

      <ExampleGrid columns={2}>
        <ExampleSection
          label="Basic Usage"
          description="DialogPreset với title, description và footer đơn giản."
        >
          <DialogPreset
            size={globalSize}
            title="Update Subscription"
            description="Are you sure you want to upgrade your plan to Pro? This will charge your card immediately."
            trigger={<Button variant="outline">Upgrade Plan</Button>}
            footer={
              <>
                <Button variant="ghost">Cancel</Button>
                <Button color="primary">Confirm</Button>
              </>
            }
          />
        </ExampleSection>

        <ExampleSection
          label="Forms & Custom Content"
          description="Sử dụng children để render form hoặc nội dung phức tạp."
        >
          <DialogPreset
            size={globalSize}
            title="Edit profile"
            description="Make changes to your profile here. Click save when you're done."
            trigger={<Button variant="outline">Edit Profile</Button>}
            footer={<Button type="submit">Save changes</Button>}
          >
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  defaultValue="Pedro Duarte"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input
                  id="username"
                  defaultValue="@peduarte"
                  className="col-span-3"
                />
              </div>
            </div>
          </DialogPreset>
        </ExampleSection>
      </ExampleGrid>

      <ExampleGrid columns={2}>
        <ExampleSection
          label="No Close Button"
          description="Ẩn nút X ở góc trên bằng showCloseButton={false}."
        >
          <DialogPreset
            size={globalSize}
            showCloseButton={false}
            title="Terms of Service"
            description="You must accept the new terms to continue using the application."
            trigger={<Button variant="outline">View Terms</Button>}
            footer={
              <>
                <Button variant="outline">Decline</Button>
                <Button>Accept</Button>
              </>
            }
          >
            <p className="text-sm text-muted-foreground">
              By clicking accept, you agree to our updated Terms of Service and Privacy Policy.
            </p>
          </DialogPreset>
        </ExampleSection>

        <ExampleSection
          label="Large Content Sizing"
          description="Sử dụng size='lg' cho nội dung lớn hơn."
        >
          <DialogPreset
            size={globalSize}
            title="Detailed Report"
            description="Monthly analytics and performance overview."
            trigger={<Button variant="outline">View Report</Button>}
            footer={<Button>Download PDF</Button>}
          >
            <div className="h-[200px] flex items-center justify-center rounded-md border border-dashed bg-muted/20">
              <span className="text-muted-foreground text-sm">Large Content Area</span>
            </div>
          </DialogPreset>
        </ExampleSection>
      </ExampleGrid>

      <ExampleGrid columns={2}>
        {/* ── Controlled State ── */}
        <ExampleSection
          label="Controlled State"
          description="Sử dụng open và onOpenChange để quản lý trạng thái đóng mở bằng React state."
          codeString={`const [controlledOpen, setControlledOpen] = useState(false);
          
return (
  <>
    <Button onClick={() => setControlledOpen(true)} variant="outline">
      Open Controlled Dialog
    </Button>
    <DialogPreset
      open={controlledOpen}
      onOpenChange={setControlledOpen}
      title="Controlled Dialog"
      description="Trạng thái của hộp thoại này được quản lý hoàn toàn bởi React state bên ngoài."
      footer={
        <Button color="primary" onClick={() => setControlledOpen(false)}>
          Close Manually
        </Button>
      }
    >
      <p className="text-sm text-foreground">Bạn có thể đóng bằng nút bên dưới hoặc dấu X.</p>
    </DialogPreset>
  </>
);`}
        >
          <div className="w-full flex flex-col gap-4 items-center justify-center">
            <div className="flex gap-4 items-center">
              <Button onClick={() => setControlledOpen(true)} variant="outline" size={globalSize}>
                Open Controlled Dialog
              </Button>
              <span className="text-sm text-muted-foreground font-mono">
                State: {controlledOpen ? "true" : "false"}
              </span>
            </div>

            <DialogPreset
              open={controlledOpen}
              onOpenChange={setControlledOpen}
              size={globalSize}
              title="Controlled Dialog"
              description="Trạng thái của hộp thoại này được quản lý hoàn toàn bởi React state bên ngoài."
              footer={
                <Button color="primary" onClick={() => setControlledOpen(false)} size={globalSize}>
                  Close Manually
                </Button>
              }
            >
              <p className="text-sm text-foreground">Bạn có thể đóng bằng nút bên dưới hoặc dấu X.</p>
            </DialogPreset>
          </div>
        </ExampleSection>

        {/* ── Sticky Footer (Macro) ── */}
        <ExampleSection
          label="Sticky Footer (Long Content)"
          description="Layout in-flow giúp footer luôn dính ở dưới cùng khi có thanh cuộn."
        >
          <DialogPreset
            trigger={
              <Button variant="outline" size={globalSize}>
                View Long Content
              </Button>
            }
            size={globalSize}
            title="Terms & Conditions"
            description="Cuộn xuống dưới cùng để có thể đồng ý với điều khoản."
            footer={
              <div className="flex w-full sm:justify-end gap-2">
                <DialogClose
                  render={<Button variant="ghost" size={globalSize} />}
                >
                  Cancel
                </DialogClose>
                <Button size={globalSize}>I Agree</Button>
              </div>
            }
          >
            <div className="flex h-[800px] flex-col items-center justify-between rounded-md border border-dashed bg-muted/20 py-8">
              <span className="text-sm font-medium text-muted-foreground">
                START OF CONTENT
              </span>
              <div className="flex flex-col items-center gap-2">
                <span className="text-4xl">👇</span>
                <span className="text-sm text-muted-foreground">Keep scrolling</span>
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                END OF CONTENT
              </span>
            </div>
          </DialogPreset>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
