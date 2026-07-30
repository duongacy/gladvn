import { InfoIcon, TrashIcon } from "lucide-react";
import { InputPreset } from "../components/macro/input-preset";
import { RadioGroupPreset } from "../components/macro/radio-group-preset";
import { SelectPreset } from "../components/macro/select-preset";
import { SliderPreset } from "../components/macro/slider-preset";
import { SwitchPreset } from "../components/macro/switch-preset";
import { TextareaPreset } from "../components/macro/textarea-preset";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/micro/accordion";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../components/micro/alert-dialog";
import { Button } from "../components/micro/button";
import { Separator } from "../components/micro/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/micro/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../components/micro/tooltip";

export default function SettingsBlock() {
  return (
    <div className="container max-w-4xl py-10 px-4 md:px-6 mx-auto">
      <div className="space-y-0.5 mb-6">
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">
          Manage your account and set email preferences.
        </p>
      </div>
      <Separator className="my-6" />

      <Tabs orientation="vertical" defaultValue="profile" className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64 shrink-0">
          <TabsList className="flex md:flex-col justify-start h-auto bg-transparent p-0 gap-2 w-full">
            <TabsTrigger value="profile" className="w-full justify-start">Profile</TabsTrigger>
            <TabsTrigger value="appearance" className="w-full justify-start">Appearance</TabsTrigger>
            <TabsTrigger value="notifications" className="w-full justify-start">Notifications</TabsTrigger>
            <TabsTrigger value="advanced" className="w-full justify-start">Advanced</TabsTrigger>
          </TabsList>
        </aside>

        <div className="flex-1">
          <TabsContent value="profile" className="mt-0">
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Profile</h3>
              <p className="text-sm text-muted-foreground">This is how others will see you on the app.</p>
            </div>
            <Separator className="my-6" />

            <div className="flex flex-col gap-8">
              <InputPreset
                id="username"
                label="Username"
                placeholder="gladvn"
                defaultValue="johndoe"
                description="Public display name. Can be your real name or a pseudonym."
              />

              <SelectPreset
                id="email"
                label="Email"
                defaultValue="m@example.com"
                placeholder="Select a verified email to display"
                description="You can manage these emails in your account settings."
                options={[
                  { value: "m@example.com", label: "m@example.com" },
                  { value: "m@google.com", label: "m@google.com" },
                  { value: "m@support.com", label: "m@support.com" },
                ]}
              />

              <TextareaPreset
                id="bio"
                label="Bio"
                placeholder="Tell us a little bit about yourself..."
                defaultValue="I am a chill dev."
                className="min-h-25"
                description="You can @mention other users and organizations to link to them."
              />

              <Button className="w-fit">Update profile</Button>
            </div>
          </TabsContent>

          <TabsContent value="appearance" className="mt-0">
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Appearance</h3>
              <p className="text-sm text-muted-foreground">Customize the appearance of the app. Automatically switch between day and night themes.</p>
            </div>
            <Separator className="my-6" />

            <div className="flex flex-col gap-8">
              <RadioGroupPreset
                label="Theme"
                defaultValue="light"
                options={[
                  { value: "light", label: "Light" },
                  { value: "dark", label: "Dark" },
                  { value: "system", label: "System" },
                ]}
              />

              <SliderPreset
                defaultValue={[50]}
                label={
                  <div className="flex items-center gap-2">
                    <span>Interface size</span>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger render={<InfoIcon className="size-4 text-muted-foreground" />} />
                        <TooltipContent>Adjust the overall size of the UI</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                }
                description={<div className="text-right">Default (100%)</div>}
              />

              <Button className="w-fit">Save preferences</Button>
            </div>
          </TabsContent>

          <TabsContent value="notifications" className="mt-0">
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Notifications</h3>
              <p className="text-sm text-muted-foreground">Configure how you receive alerts.</p>
            </div>
            <Separator className="my-6" />

            <div className="flex flex-col gap-4">
              <SwitchPreset
                id="marketing-emails"
                label={<span className="text-base cursor-pointer">Marketing emails</span>}
                description="Receive emails about new products, features, and more."
                className="items-center justify-between rounded-xl border border-border p-4"
              />
              <SwitchPreset
                id="security-emails"
                defaultChecked
                label={<span className="text-base cursor-pointer">Security emails</span>}
                description="Receive emails about your account activity and security."
                className="items-center justify-between rounded-xl border border-border p-4"
              />
            </div>
          </TabsContent>

          <TabsContent value="advanced" className="mt-0">
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-destructive">Advanced</h3>
              <p className="text-sm text-muted-foreground">Danger zone and developer settings.</p>
            </div>
            <Separator className="my-6" />

            <Accordion className="w-full">
              <AccordionItem value="dev-mode">
                <AccordionTrigger>Developer Mode</AccordionTrigger>
                <AccordionContent>
                  Enable advanced debugging features and API access tokens in your dashboard.
                  <div className="mt-4">
                    <Button variant="outline" size="sm">Generate Token</Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="data-export">
                <AccordionTrigger>Export Data</AccordionTrigger>
                <AccordionContent>
                  Download a complete archive of all your personal data, posts, and settings in JSON format.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="mt-12 p-6 border border-destructive/20 bg-destructive/5 rounded-xl flex flex-col gap-4 items-start">
              <div className="space-y-1">
                <h4 className="font-semibold text-destructive">Delete Account</h4>
                <p className="text-sm text-muted-foreground">Permanently delete your account and all associated data. This action cannot be undone.</p>
              </div>

              <AlertDialog>
                <AlertDialogTrigger
                  render={
                    <Button color="destructive">
                      <TrashIcon className="size-4 mr-2" /> Delete Account
                    </Button>
                  }
                />
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete your
                      account and remove your data from our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction color="destructive">Yes, delete account</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
