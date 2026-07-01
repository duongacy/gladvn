import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/index";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
  AlertDialogMedia,
  Button,
} from "@/index";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";
import {
  Trash2Icon,
  LogOutIcon,
  ShieldAlertIcon,
  InfoIcon,
} from "lucide-react";

import { type Size } from "@/lib/types";

export default function AlertDialogShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Alert Dialog"
        description="A modal dialog that interrupts the user with important content and expects a response."
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
        <ExampleSection
          label="Destructive"
          description="Confirm before a dangerous action."
        >
          <AlertDialog>
            <AlertDialogTrigger
              render={
                <Button variant="outline" color="destructive" size={globalSize}>
                  Delete Account
                </Button>
              }
            />
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel size={globalSize}>Cancel</AlertDialogCancel>
                <AlertDialogAction color="destructive" size={globalSize}>
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </ExampleSection>

        <ExampleSection
          label="Confirmation"
          description="Standard confirmation dialog."
        >
          <AlertDialog>
            <AlertDialogTrigger
              render={
                <Button variant="outline" size={globalSize}>
                  Log Out
                </Button>
              }
            />
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Log out of your account?</AlertDialogTitle>
                <AlertDialogDescription>
                  You will need to enter your credentials again to access your
                  account.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel size={globalSize}>Stay</AlertDialogCancel>
                <AlertDialogAction size={globalSize}>Log Out</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </ExampleSection>
      </ExampleGrid>

      <ExampleGrid columns={2}>
        <ExampleSection
          label="With Media"
          description="Icon media slot alongside the header content."
        >
          <AlertDialog>
            <AlertDialogTrigger
              render={
                <Button variant="outline" color="warning" size={globalSize}>
                  Revoke Access
                </Button>
              }
            />
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogMedia className="bg-warning/10">
                  <ShieldAlertIcon className="text-warning" />
                </AlertDialogMedia>
                <AlertDialogTitle>Revoke API access?</AlertDialogTitle>
                <AlertDialogDescription>
                  All applications using this API key will immediately lose
                  access. This cannot be reversed.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel size={globalSize}>Keep</AlertDialogCancel>
                <AlertDialogAction color="warning" size={globalSize}>
                  Revoke
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </ExampleSection>

        <ExampleSection
          label="Compact (sm)"
          description='Content size="sm" uses centered, 2-column footer.'
        >
          <AlertDialog>
            <AlertDialogTrigger
              render={
                <Button variant="outline" size={globalSize}>
                  Quick Confirm
                </Button>
              }
            />
            <AlertDialogContent size="sm">
              <AlertDialogHeader>
                <AlertDialogMedia>
                  <InfoIcon />
                </AlertDialogMedia>
                <AlertDialogTitle>Confirm action?</AlertDialogTitle>
                <AlertDialogDescription>
                  This is a compact alert dialog with a 2-column button grid.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel size={globalSize}>No</AlertDialogCancel>
                <AlertDialogAction size={globalSize}>Yes</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
