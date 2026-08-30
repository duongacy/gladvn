import { DatabaseIcon, LayersIcon, ShieldCheckIcon } from "lucide-react";
import { useEffect, useState } from "react";

import { ProgressPreset as Progress } from "@/components/macro/progress-preset";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/micro/card";
import { Label } from "@/components/micro/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/micro/select";
import { Switch, SwitchThumb } from "@/components/micro/switch";
import { cn } from "@/lib/utils";
import { useI18n } from "~app/components/dev-context";

export function DashboardPreview({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const t = useI18n();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={cn("mt-20 relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-up", className)}
      style={{ animationDelay: "500ms", animationFillMode: "both" }}
    >
      <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent z-20 pointer-events-none h-full w-full" />

      <div className="relative rounded-2xl border border-border bg-card/40 backdrop-blur-2xl shadow-2xl overflow-hidden [transform:perspective(1200px)_rotateX(5deg)] [transform-origin:top_center] hover:[transform:perspective(1200px)_rotateX(0deg)] transition-transform duration-700 ease-out">
        <div className="h-12 bg-muted/30 border-b border-b-border flex items-center px-4 gap-2">
          <div className="flex gap-2">
            <div className="size-3.5 rounded-full bg-destructive/80 shadow-sm" />
            <div className="size-3.5 rounded-full bg-warning/80 shadow-sm" />
            <div className="size-3.5 rounded-full bg-success/80 shadow-sm" />
          </div>
        </div>

        <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="space-y-6 md:col-span-1 z-10">
            <Card className="bg-background/80 shadow-lg border-border/50 backdrop-blur-xl group hover:border-primary/50 transition-colors">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <div className="size-2 rounded-full bg-success animate-pulse shadow-[0_0_8px_var(--success)]" />
                  {t("Trạng thái Design System", "Design System Status")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-5">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-muted-foreground">{t("Tiêu chuẩn a11y", "a11y Compliance")}</span>
                      <span className="text-primary font-mono">
                        {mounted ? "100%" : "0%"}
                      </span>
                    </div>
                    <Progress value={mounted ? 100 : 0} className="h-1.5" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-muted-foreground">{t("Độ phủ Test", "Test Coverage")}</span>
                      <span className="text-warning font-mono">
                        {mounted ? "92%" : "0%"}
                      </span>
                    </div>
                    <Progress
                      value={mounted ? 92 : 0}
                      color="warning"
                      className="h-1.5"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col gap-4 p-5 rounded-xl border border-border/50 bg-background/60 backdrop-blur-xl shadow-lg">
              <div className="flex items-center justify-between">
                <Label className="text-sm font-medium cursor-pointer">
                  {t("Giảm chuyển động", "Reduced Motion")}
                </Label>
                <Switch defaultChecked={false}>
                  <SwitchThumb />
                </Switch>
              </div>
              <Select defaultValue="zinc">
                <SelectTrigger className="w-full bg-background/50">
                  <SelectValue placeholder={t("Màu chủ đạo", "Base Color") as string} />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="zinc">
                    {t("Zinc", "Zinc (Default)")}
                  </SelectItem>
                  <SelectItem value="slate">
                    {t("Slate", "Slate (Blue-gray)")}
                  </SelectItem>
                  <SelectItem value="neutral">
                    {t("Neutral", "Neutral (Gray)")}
                  </SelectItem>
                </SelectContent>

              </Select>
            </div>
          </div>

          <div className="md:col-span-2 rounded-xl border border-border/50 bg-muted/20 p-6 flex items-center justify-center relative overflow-hidden group/canvas">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.1)_0,transparent_100%)] opacity-0 group-hover/canvas:opacity-100 transition-opacity duration-700" />

            <div className="relative z-10 w-full max-w-md space-y-4 perspective-1000">
              <div className="flex items-center gap-4 p-5 rounded-xl bg-background shadow-xl border border-border/50 transform group-hover/canvas:-translate-y-2 group-hover/canvas:rotate-1 transition-all duration-500 delay-75">
                <div className="p-3 bg-primary/10 rounded-lg text-primary shadow-inner">
                  <LayersIcon className="size-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">
                    {t("Kiến trúc Micro/Macro", "Micro/Macro Architecture")}
                  </h4>
                  <p className="text-xs text-muted-foreground font-medium mt-1">
                    {t("Primitive nhỏ, lắp thành preset lớn", "Small primitives, assembled into large presets")}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 rounded-xl bg-background shadow-xl border border-border/50 transform group-hover/canvas:translate-x-2 group-hover/canvas:-rotate-1 transition-all duration-500 delay-150">
                <div className="p-3 bg-info/10 rounded-lg text-info shadow-inner">
                  <DatabaseIcon className="size-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">
                    {t("Thiết kế theo Dữ liệu", "Data-driven Design")}
                  </h4>
                  <p className="text-xs text-muted-foreground font-medium mt-1">
                    {t("Truyền items vào root, không map() thủ công", "Pass items to root, no manual map()")}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 rounded-xl bg-background shadow-xl border border-border/50 transform group-hover/canvas:-translate-y-1 transition-all duration-500 delay-200">
                <div className="p-3 bg-success/10 rounded-lg text-success shadow-inner">
                  <ShieldCheckIcon className="size-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">{t("Styling có Kỷ luật", "Disciplined Styling")}</h4>
                  <p className="text-xs text-muted-foreground font-medium mt-1">
                    {t("Nói không với Magic CSS", "Say no to Magic CSS")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
