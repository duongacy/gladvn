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
        <h2 className="text-3xl font-bold tracking-tight">Cài đặt</h2>
        <p className="text-muted-foreground">
          Quản lý tài khoản và thiết lập các tuỳ chọn nhận email.
        </p>
      </div>
      <Separator className="my-6" />

      <Tabs orientation="vertical" defaultValue="profile" className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64 shrink-0">
          <TabsList className="flex md:flex-col justify-start h-auto bg-transparent p-0 gap-2 w-full">
            <TabsTrigger value="profile" className="w-full justify-start">Hồ sơ</TabsTrigger>
            <TabsTrigger value="appearance" className="w-full justify-start">Giao diện</TabsTrigger>
            <TabsTrigger value="notifications" className="w-full justify-start">Thông báo</TabsTrigger>
            <TabsTrigger value="advanced" className="w-full justify-start">Nâng cao</TabsTrigger>
          </TabsList>
        </aside>

        <div className="flex-1">
          <TabsContent value="profile" className="mt-0">
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Hồ sơ cá nhân</h3>
              <p className="text-sm text-muted-foreground">Đây là cách người khác sẽ nhìn thấy bạn trên app.</p>
            </div>
            <Separator className="my-6" />

            <div className="flex flex-col gap-8">
              <InputPreset
                id="username"
                label="Tên người dùng"
                placeholder="gladvn"
                defaultValue="johndoe"
                description="Tên hiển thị công khai. Tên thật hay biệt danh chém gió gì cũng được."
              />

              <SelectPreset
                id="email"
                label="Email"
                defaultValue="m@example.com"
                placeholder="Chọn email đã xác thực để hiển thị"
                description="Bro có thể quản lý các email này trong phần cài đặt tài khoản."
                options={[
                  { value: "m@example.com", label: "m@example.com" },
                  { value: "m@google.com", label: "m@google.com" },
                  { value: "m@support.com", label: "m@support.com" },
                ]}
              />

              <TextareaPreset
                id="bio"
                label="Giới thiệu bản thân"
                placeholder="Kể một chút về bro đi..."
                defaultValue="Mình là dev chill chill."
                className="min-h-25"
                description="Có thể @mention người dùng hoặc tổ chức để tạo liên kết nha."
              />

              <Button className="w-fit">Cập nhật hồ sơ</Button>
            </div>
          </TabsContent>

          <TabsContent value="appearance" className="mt-0">
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Giao diện</h3>
              <p className="text-sm text-muted-foreground">Tuỳ biến giao diện sáng tối sao cho vừa mắt nhất.</p>
            </div>
            <Separator className="my-6" />

            <div className="flex flex-col gap-8">
              <RadioGroupPreset
                label="Giao diện mặc định"
                defaultValue="light"
                options={[
                  { value: "light", label: "Giao diện sáng" },
                  { value: "dark", label: "Giao diện tối" },
                  { value: "system", label: "Theo hệ thống" },
                ]}
              />

              <SliderPreset
                defaultValue={[50]}
                label={
                  <div className="flex items-center gap-2">
                    <span>Kích thước giao diện</span>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger render={<InfoIcon className="size-4 text-muted-foreground" />} />
                        <TooltipContent>Điều chỉnh độ to nhỏ tổng thể của UI</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                }
                description={<div className="text-right">Vừa phải (100%)</div>}
              />

              <Button className="w-fit">Lưu tuỳ chọn</Button>
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
