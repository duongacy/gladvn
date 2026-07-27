import { DatabaseIcon, LayersIcon, ShieldCheckIcon } from "lucide-react";
import { useEffect, useState } from "react";

import { ProgressPreset as Progress } from "../../../components/macro/progress-preset";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "../../../components/micro/card";
import { Label } from "../../../components/micro/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../../../components/micro/select";
import { Switch } from "../../../components/micro/switch";
import { cn } from "../../../lib/utils";

export function DashboardPreview({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);

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
                  Hệ thống Thời gian thực
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-5">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-muted-foreground">Tải CPU</span>
                      <span className="text-primary font-mono">
                        {mounted ? "24%" : "0%"}
                      </span>
                    </div>
                    <Progress value={mounted ? 24 : 0} className="h-1.5" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-muted-foreground">Bộ nhớ</span>
                      <span className="text-warning font-mono">
                        {mounted ? "82%" : "0%"}
                      </span>
                    </div>
                    <Progress
                      value={mounted ? 82 : 0}
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
                  Auto-scaling
                </Label>
                <Switch defaultChecked />
              </div>
              <Select defaultValue="edge">
                <SelectTrigger className="w-full bg-background/50">
                  <SelectValue placeholder="Chọn vùng" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="edge">
                    Edge Network (Toàn cầu)
                  </SelectItem>
                  <SelectItem value="us-east">
                    US East (Virginia)
                  </SelectItem>
                  <SelectItem value="ap-se">
                    AP South East (Sing)
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
                    Kiến trúc Micro/Macro
                  </h4>
                  <p className="text-xs text-muted-foreground font-medium mt-1">
                    Primitive nhỏ, lắp thành preset lớn
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 rounded-xl bg-background shadow-xl border border-border/50 transform group-hover/canvas:translate-x-2 group-hover/canvas:-rotate-1 transition-all duration-500 delay-150">
                <div className="p-3 bg-info/10 rounded-lg text-info shadow-inner">
                  <DatabaseIcon className="size-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">
                    Thiết kế theo Dữ liệu
                  </h4>
                  <p className="text-xs text-muted-foreground font-medium mt-1">
                    Truyền items vào root, không map() thủ công
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 rounded-xl bg-background shadow-xl border border-border/50 transform group-hover/canvas:-translate-y-1 transition-all duration-500 delay-200">
                <div className="p-3 bg-success/10 rounded-lg text-success shadow-inner">
                  <ShieldCheckIcon className="size-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Styling có Kỷ luật</h4>
                  <p className="text-xs text-muted-foreground font-medium mt-1">
                    Nói không với Magic CSS
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
