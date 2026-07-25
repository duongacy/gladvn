import * as React from "react";
import { Button } from "../components/micro/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/micro/card";
import { Input } from "../components/micro/input";
import { Label } from "../components/micro/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/micro/tabs";
import { Separator } from "../components/micro/separator";
import { Switch } from "../components/micro/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/micro/select";

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
      
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64 shrink-0">
          <nav className="flex md:flex-col gap-2 overflow-x-auto pb-4 md:pb-0">
            <Button variant="soft" color="primary" className="justify-start whitespace-nowrap">Profile</Button>
            <Button variant="ghost" className="justify-start whitespace-nowrap text-muted-foreground">Account</Button>
            <Button variant="ghost" className="justify-start whitespace-nowrap text-muted-foreground">Appearance</Button>
            <Button variant="ghost" className="justify-start whitespace-nowrap text-muted-foreground">Notifications</Button>
            <Button variant="ghost" className="justify-start whitespace-nowrap text-muted-foreground">Display</Button>
          </nav>
        </aside>

        <div className="flex-1 space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Profile</h3>
            <p className="text-sm text-muted-foreground">
              This is how others will see you on the site.
            </p>
          </div>
          <Separator />
          
          <div className="space-y-8">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" placeholder="gladvn" defaultValue="johndoe" />
              <p className="text-[13px] text-muted-foreground">
                This is your public display name. It can be your real name or a pseudonym.
              </p>
            </div>

            <div className="space-y-2">
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

            <div className="space-y-2">
              <Label>Bio</Label>
              <textarea 
                className="flex w-full min-h-[100px] rounded-lg border border-input bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 resize-y"
                placeholder="Tell us a little bit about yourself"
                defaultValue="I own a computer."
              />
              <p className="text-[13px] text-muted-foreground">
                You can @mention other users and organizations to link to them.
              </p>
            </div>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-center justify-between rounded-xl border border-border p-4">
                <div className="space-y-0.5">
                  <Label className="text-base">Marketing emails</Label>
                  <p className="text-[13px] text-muted-foreground">
                    Receive emails about new products, features, and more.
                  </p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between rounded-xl border border-border p-4">
                <div className="space-y-0.5">
                  <Label className="text-base">Security emails</Label>
                  <p className="text-[13px] text-muted-foreground">
                    Receive emails about your account activity and security.
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>

            <Button>Update profile</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
