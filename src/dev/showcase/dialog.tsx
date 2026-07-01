import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/index";
import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
  Button,
  Input,
  Label,
} from "@/index";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";

import { type Size } from "@/lib/types";

export default function DialogShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Dialog"
        description="A modal window that interrupts the user with important content and expects a response."
      >
        <Select value={globalSize} onValueChange={(v) => setGlobalSize(v as Size)}>
          <SelectTrigger className="w-[120px] h-8 text-xs bg-background">
            <SelectValue placeholder="Size" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sm">Size: sm</SelectItem>
            <SelectItem value="md">Size: md</SelectItem>
            <SelectItem value="lg">Size: lg</SelectItem>
          </SelectContent>
        </Select>
      </SectionHeader>

      <ExampleGrid columns={2}>
        {/* ── Edit Profile ── */}
        <ExampleSection
          label="Edit Profile"
          description="A dialog containing a form with multiple inputs."
        >
          <Dialog>
            <DialogTrigger
              render={
                <Button variant="outline" size={globalSize}>
                  Edit Profile
                </Button>
              }
            />
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </DialogDescription>
              </DialogHeader>
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
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </ExampleSection>

        {/* ── Simple Confirmation ── */}
        <ExampleSection
          label="Simple Confirmation"
          description="Text-only dialog with footer close button."
        >
          <Dialog>
            <DialogTrigger
              render={
                <Button variant="outline" size={globalSize}>
                  Share Document
                </Button>
              }
            />
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Share this document</DialogTitle>
                <DialogDescription>
                  Anyone with the link can view this document. You can change
                  access permissions at any time in settings.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter showCloseButton>
                <Button size={globalSize}>Copy Link</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </ExampleSection>
      </ExampleGrid>

      <ExampleGrid columns={2}>
        {/* ── No Close Button ── */}
        <ExampleSection
          label="No Close Button"
          description="Dialog without the top-right close button."
        >
          <Dialog>
            <DialogTrigger
              render={
                <Button variant="outline" size={globalSize}>
                  Terms & Conditions
                </Button>
              }
            />
            <DialogContent showCloseButton={false}>
              <DialogHeader>
                <DialogTitle>Terms of Service</DialogTitle>
                <DialogDescription>
                  Please read and accept the terms of service before continuing.
                  You must agree to proceed.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose
                  render={<Button variant="outline" size={globalSize} />}
                >
                  Decline
                </DialogClose>
                <Button size={globalSize}>Accept</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </ExampleSection>

        {/* ── Scrollable Content ── */}
        <ExampleSection
          label="Scrollable Content"
          description="Long content inside a scrollable dialog body."
        >
          <Dialog>
            <DialogTrigger
              render={
                <Button variant="outline" size={globalSize}>
                  Privacy Policy
                </Button>
              }
            />
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Privacy Policy</DialogTitle>
                <DialogDescription>
                  Last updated: January 2024
                </DialogDescription>
              </DialogHeader>
              <div className="max-h-[200px] overflow-y-auto space-y-3 text-sm text-muted-foreground pr-2">
                <p>
                  We collect information you provide directly to us, such as
                  when you create an account, make a purchase, or contact us for
                  support.
                </p>
                <p>
                  We automatically collect certain information when you use our
                  services, including your IP address, device type, browser
                  type, operating system, and usage patterns.
                </p>
                <p>
                  We use the information we collect to provide, maintain, and
                  improve our services, to process transactions, and to
                  communicate with you.
                </p>
                <p>
                  We do not share your personal information with third parties
                  except as described in this policy or with your consent.
                </p>
                <p>
                  We implement appropriate security measures to protect your
                  personal information from unauthorized access, alteration, or
                  destruction.
                </p>
                <p>
                  You have the right to access, update, or delete your personal
                  information at any time through your account settings.
                </p>
              </div>
              <DialogFooter showCloseButton>
                <Button size={globalSize}>I Understand</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
