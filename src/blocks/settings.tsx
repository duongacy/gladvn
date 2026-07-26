import { InfoIcon, TrashIcon } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/micro/accordion";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../components/micro/alert-dialog";
import { Button } from "../components/micro/button";
import { Input } from "../components/micro/input";
import { Label } from "../components/micro/label";
import { RadioGroup, RadioGroupItem } from "../components/micro/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/micro/select";
import { Separator } from "../components/micro/separator";
import { Slider, SliderControl, SliderIndicator, SliderThumb, SliderTrack } from "../components/micro/slider";
import { Switch, SwitchThumb } from "../components/micro/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/micro/tabs";
import { Textarea } from "../components/micro/textarea";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../components/micro/tooltip";

export default function SettingsBlock() {
  return (
    <div className="container max-w-4xl py-10 px-4 md:px-6 mx-auto">
      <div className="space-y-0.5 mb-6">
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">
          Manage your account settings and set e-mail preferences.
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
          {/* PROFILE TAB */}
          <TabsContent value="profile" className="mt-0">
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Profile</h3>
              <p className="text-sm text-muted-foreground">This is how others will see you on the site.</p>
            </div>
            <Separator className="my-6" />

            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" placeholder="gladvn" defaultValue="johndoe" />
                <p className="text-[13px] text-muted-foreground">
                  This is your public display name. It can be your real name or a pseudonym.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="email">Email</Label>
                <Select defaultValue="m@example.com">
                  <SelectTrigger id="email">
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="m@example.com">m@example.com</SelectItem>
                    <SelectItem value="m@google.com">m@google.com</SelectItem>
                    <SelectItem value="m@support.com">m@support.com</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-[13px] text-muted-foreground">
                  You can manage verified email addresses in your email settings.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  placeholder="Tell us a little bit about yourself"
                  defaultValue="I own a computer."
                  className="min-h-[100px]"
                />
                <p className="text-[13px] text-muted-foreground">
                  You can @mention other users and organizations to link to them.
                </p>
              </div>

              <Button className="w-fit">Update profile</Button>
            </div>
          </TabsContent>

          {/* APPEARANCE TAB */}
          <TabsContent value="appearance" className="mt-0">
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Appearance</h3>
              <p className="text-sm text-muted-foreground">Customize the look and feel of the application.</p>
            </div>
            <Separator className="my-6" />

            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <Label>Theme Preference</Label>
                <RadioGroup defaultValue="light" className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="light" id="theme-light" />
                    <Label htmlFor="theme-light" className="font-normal cursor-pointer">Light Theme</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="dark" id="theme-dark" />
                    <Label htmlFor="theme-dark" className="font-normal cursor-pointer">Dark Theme</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="system" id="theme-system" />
                    <Label htmlFor="theme-system" className="font-normal cursor-pointer">System Default</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <Label>Interface Scale</Label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger render={<InfoIcon className="size-4 text-muted-foreground" />} />
                      <TooltipContent>Adjusts the overall size of UI elements</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <div className="py-2 px-1">
                  <Slider defaultValue={50}>
                    <SliderControl>
                      <SliderTrack>
                        <SliderIndicator />
                      </SliderTrack>
                      <SliderThumb />
                    </SliderControl>
                  </Slider>
                </div>
                <p className="text-[13px] text-muted-foreground text-right">Medium (100%)</p>
              </div>

              <Button className="w-fit">Save preferences</Button>
            </div>
          </TabsContent>

          {/* NOTIFICATIONS TAB */}
          <TabsContent value="notifications" className="mt-0">
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Notifications</h3>
              <p className="text-sm text-muted-foreground">Configure how you receive alerts.</p>
            </div>
            <Separator className="my-6" />

            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between rounded-xl border border-border p-4">
                <div className="flex flex-col gap-0.5">
                  <Label htmlFor="marketing-emails" className="text-base cursor-pointer">Marketing emails</Label>
                  <p className="text-[13px] text-muted-foreground">Receive emails about new products, features, and more.</p>
                </div>
                <Switch id="marketing-emails">
                  <SwitchThumb />
                </Switch>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-border p-4">
                <div className="flex flex-col gap-0.5">
                  <Label htmlFor="security-emails" className="text-base cursor-pointer">Security emails</Label>
                  <p className="text-[13px] text-muted-foreground">Receive emails about your account activity and security.</p>
                </div>
                <Switch id="security-emails" defaultChecked>
                  <SwitchThumb />
                </Switch>
              </div>
            </div>
          </TabsContent>

          {/* ADVANCED TAB */}
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
