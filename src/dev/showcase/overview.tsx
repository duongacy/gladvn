import {
  AccessibilityIcon,
  ArrowRightIcon,
  BlocksIcon,
  BoxIcon,
  CheckIcon,
  ComponentIcon,
  CopyIcon,
  DatabaseIcon,
  LayersIcon,
  PaintbrushIcon,
  PaletteIcon,
  ShieldCheckIcon,
  SlidersHorizontalIcon,
  SparklesIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import { ProgressPreset as Progress } from "@/components/macro/progress-preset";
import { Badge } from "@/components/micro/badge";
import { Button } from "@/components/micro/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/micro/card";
import { Label } from "@/components/micro/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/micro/select";
import { Switch } from "@/components/micro/switch";
import { ColorSwatch } from "@/dev/components/showcase";
import { COLORS, STATS } from "@/dev/data";
import { cn } from "@/lib/utils";

function CodeBlock({
  type,
  title,
  children,
}: {
  type: "success" | "destructive";
  title: string;
  children: React.ReactNode;
}) {
  const isSuccess = type === "success";
  return (
    <div
      className={cn(
        "p-4 rounded-xl border shadow-sm text-[11px] sm:text-xs font-mono",
        isSuccess
          ? "border-success/20 bg-success/5"
          : "border-destructive/20 bg-destructive/5 opacity-80"
      )}
    >
      <div
        className={cn(
          "font-semibold mb-2 flex items-center gap-2",
          isSuccess ? "text-success" : "text-destructive"
        )}
      >
        {isSuccess ? "✅" : "❌"} {title}
      </div>
      <div
        className={cn(
          "text-muted-foreground pl-3 border-l-2 leading-relaxed",
          isSuccess ? "border-success/50" : "border-destructive/50"
        )}
      >
        {children}
      </div>
    </div>
  );
}

export default function OverviewSection() {
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText("npm i @duongy96/gladcn");
    setCopied(true);
    toast.success("Đã copy lệnh vào clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-24 overflow-hidden pb-24 font-sans">
      {/* 🌌 HERO SECTION - Breathtaking Aurora / Glassmorphism */}
      <section className="relative pt-20 pb-32">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(var(--primary-rgb),0.2),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(var(--primary-rgb),0.15),rgba(255,255,255,0))]" />

        <div className="absolute top-0 inset-x-0 flex justify-center -z-10 pointer-events-none opacity-50 dark:opacity-40 blur-[100px]">
          <div
            className="w-[30rem] h-[20rem] bg-primary/40 rounded-full mix-blend-multiply animate-pulse"
            style={{ animationDuration: "8s" }}
          />
          <div
            className="w-[20rem] h-[15rem] bg-info/30 rounded-full mix-blend-multiply animate-pulse absolute top-10"
            style={{ animationDuration: "10s" }}
          />
        </div>

        <div className="container relative z-10 flex flex-col items-center text-center px-4">
          <Badge
            color="secondary"
            variant="soft"
            className="px-4 py-1.5 mb-8 text-sm font-medium rounded-full border border-primary/20 bg-background/50 backdrop-blur-md shadow-sm animate-fade-up"
          >
            <SparklesIcon className="w-4 h-4 mr-2 text-primary animate-pulse" />
            <span>gladcn UI v0.2.3 ra mắt</span>
          </Badge>

          <h1
            className="max-w-4xl text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 animate-fade-up"
            style={{ animationDelay: "100ms", animationFillMode: "both" }}
          >
            <span className="block text-foreground drop-shadow-sm">
              Đơn giản. Chặt chẽ.
            </span>
            <span className="block mt-2 bg-gradient-to-r leading-[1.2] from-primary via-info to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-[spin_8s_linear_infinite] [animation-name:gradient] [animation-duration:8s] [animation-timing-function:linear] [animation-iteration-count:infinite]">
              Dễ mở rộng.
            </span>
          </h1>

          <p
            className="max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 animate-fade-up"
            style={{ animationDelay: "200ms", animationFillMode: "both" }}
          >
            Thư viện UI component được thiết kế tối giản, loại bỏ hoàn toàn các
            cấu trúc rườm rà. Tập trung tối đa vào hiệu năng, trải nghiệm
            developer (DX) và khả năng tuỳ biến linh hoạt.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-up"
            style={{ animationDelay: "300ms", animationFillMode: "both" }}
          >
            <Button
              size="lg"
              className="rounded-full px-8 h-12 shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-all hover:-translate-y-0.5 group"
            >
              Khám phá Component
              <ArrowRightIcon className="size-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              color="secondary"
              className="rounded-full px-8 h-12 bg-background/50 backdrop-blur-md border-border hover:bg-muted/50 transition-all"
              onClick={handleCopy}
            >
              {copied ? (
                <CheckIcon className="size-4 mr-2 text-success" />
              ) : (
                <CopyIcon className="size-4 mr-2" />
              )}
              <span className="font-mono text-sm font-semibold">
                npm i @duongy96/gladcn
              </span>
            </Button>
          </div>
        </div>

        {/* 3D Floating Showcase Dashboard */}
        <div
          className="mt-20 relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-up"
          style={{ animationDelay: "500ms", animationFillMode: "both" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-20 pointer-events-none h-full w-full" />

          <div className="relative rounded-2xl border bg-card/40 backdrop-blur-2xl shadow-2xl overflow-hidden [transform:perspective(1200px)_rotateX(5deg)] [transform-origin:top_center] hover:[transform:perspective(1200px)_rotateX(0deg)] transition-transform duration-700 ease-out">
            <div className="h-12 bg-muted/30 border-b flex items-center px-4 gap-2">
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
                        Lắp ráp từ những mảnh ghép tối giản
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-5 rounded-xl bg-background shadow-xl border border-border/50 transform group-hover/canvas:translate-x-2 group-hover/canvas:-rotate-1 transition-all duration-500 delay-150">
                    <div className="p-3 bg-info/10 rounded-lg text-info shadow-inner">
                      <DatabaseIcon className="size-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">Data-Driven Design</h4>
                      <p className="text-xs text-muted-foreground font-medium mt-1">
                        Dữ liệu quyết định cấu trúc UI
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-5 rounded-xl bg-background shadow-xl border border-border/50 transform group-hover/canvas:-translate-y-1 transition-all duration-500 delay-200">
                    <div className="p-3 bg-success/10 rounded-lg text-success shadow-inner">
                      <ShieldCheckIcon className="size-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">Strict Styling</h4>
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
      </section>

      {/* 📈 STATS STRIP */}
      <section className="container max-w-6xl mx-auto border-y bg-muted/5 py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-[pulse_4s_ease-in-out_infinite]" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x relative z-10">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center text-center space-y-2 group"
            >
              <div className="text-4xl md:text-5xl font-black tracking-tighter text-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-300">
                {s.value}
              </div>
              <div className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🧠 BENTO BOX PHILOSOPHIES */}
      <section className="container max-w-6xl mx-auto space-y-12 px-4">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Nguyên tắc thiết kế cốt lõi
          </h2>
          <p className="text-muted-foreground text-lg">
            Toàn bộ thư viện được xây dựng dựa trên{" "}
            <strong className="text-foreground">
              12 nguyên tắc (Design Principles)
            </strong>{" "}
            khắt khe để đảm bảo tính nhất quán, dễ bảo trì và mang lại DX tốt
            nhất.
          </p>
        </div>

        <div className="columns-1 md:columns-2 gap-6">
          {/* Micro/Macro (Spans 2 columns) */}
          <div className="break-inside-avoid mb-6 rounded-[2rem] border bg-card/20 p-8 md:p-10 flex flex-col justify-between group overflow-hidden relative hover:bg-card/40 transition-colors duration-500">
            <div className="absolute -top-10 -right-10 p-8 opacity-5 group-hover:opacity-10 transition-all pointer-events-none transform group-hover:scale-110 group-hover:-rotate-12 duration-700">
              <BlocksIcon className="w-80 h-80" />
            </div>
            <div className="relative z-10 space-y-4 mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                <BlocksIcon className="size-3.5" /> Nguyên tắc 1
              </div>
              <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight">
                Micro & Macro Architecture
              </h3>
              <p className="text-muted-foreground max-w-lg text-lg leading-relaxed">
                Tách biệt rõ ràng Core components linh hoạt (Micro) và các
                pattern tiện dụng (Macro).
                <strong className="text-foreground">
                  Micro tuyệt đối không áp đặt layout phức tạp (Opinionated).
                  Mọi logic lắp ráp giao diện đều phải uỷ quyền (Delegate) hoàn
                  toàn cho Macro.
                </strong>
              </p>
            </div>
            <div className="relative z-10 mt-auto pt-6 space-y-3">
              <CodeBlock type="success" title="Uỷ quyền cho Macro (Preset):">
                <span className="text-success/80">
                  {
                    "/* Macro thấy toàn bộ cấu trúc nên gắn class thẳng vào đích */"
                  }
                </span>
                <br />
                <span className="text-foreground">{"<AlertDialogFooter>"}</span>
                <br />
                <span className="pl-4">
                  {'<Button variant="ghost">Trợ giúp</Button>'}
                </span>
                <br />
                <span className="pl-4 text-success font-bold">
                  {'<Button className="ml-auto">Xác nhận</Button>'}
                </span>
                <br />
                <span className="text-foreground">{"</AlertDialogFooter>"}</span>
              </CodeBlock>

              <CodeBlock type="destructive" title="Ép Layout ở Micro (Primitive):">
                <span className="text-destructive/80">
                  {
                    "/* Micro mù mờ về thẻ con nên phải dùng Magic CSS đoán mò */"
                  }
                </span>
                <br />
                <span className="text-foreground">{"<AlertDialogFooter"}</span>
                <br />
                <span className="pl-4 text-destructive font-bold line-through">
                  {'className="[&>*:last-child]:ml-auto"'}
                </span>
                <br />
                <span className="text-foreground">{">"}</span>
                <br />
                <span className="pl-4">{"{children}"}</span>
                <br />
                <span className="text-foreground">{"</AlertDialogFooter>"}</span>
              </CodeBlock>
            </div>
          </div>

          {/* No Magic CSS */}
          <div className="break-inside-avoid mb-6 rounded-[2rem] border bg-card/20 p-8 md:p-10 flex flex-col group overflow-hidden relative hover:bg-card/40 transition-colors duration-500">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-all pointer-events-none transform group-hover:scale-110 group-hover:rotate-12 duration-700">
              <ShieldCheckIcon className="w-56 h-56" />
            </div>
            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 text-destructive text-xs font-bold uppercase tracking-wider">
                <ShieldCheckIcon className="size-3.5" /> Nguyên tắc 2
              </div>
              <h3 className="text-2xl font-extrabold tracking-tight">
                No Magic CSS
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                Giữ tính encapsulation. Style thông qua <code>data-[slot]</code>{" "}
                hoặc <code>data-[state]</code>, tuyệt đối không viết CSS
                selector lồng nhau.
              </p>
            </div>
            <div className="relative z-10 mt-auto pt-6 space-y-3">
              <div className="p-3 rounded-xl border border-destructive/20 bg-destructive/5 text-xs font-mono shadow-sm flex items-center">
                <span className="text-destructive font-bold mr-3 text-lg">
                  ❌
                </span>
                <span className="opacity-80">
                  {"[&>div>span]:text-red-500"}
                </span>
              </div>
              <div className="p-3 rounded-xl border border-success/20 bg-success/5 text-xs font-mono shadow-sm flex items-center">
                <span className="text-success font-bold mr-3 text-lg">✅</span>
                <span className="text-foreground font-medium">
                  data-[slot=icon]:text-red-500
                </span>
              </div>
            </div>
          </div>

          {/* Orthogonal Styling (Spans 2 columns) */}
          <div className="break-inside-avoid mb-6 rounded-[2rem] border bg-card/20 p-8 md:p-10 flex flex-col group overflow-hidden relative hover:bg-card/40 transition-colors duration-500">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-all pointer-events-none transform group-hover:scale-110 group-hover:-rotate-12 duration-700">
              <SlidersHorizontalIcon className="w-80 h-80" />
            </div>
            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider">
                <SlidersHorizontalIcon className="size-3.5" /> Nguyên tắc 3
              </div>
              <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight">
                Orthogonal Styling
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
                Tách biệt rõ ràng trục cấu trúc (Variant) và trục màu sắc
                (Color) thành các style độc lập, giúp tránh bùng nổ tổ hợp CSS
                class.
              </p>
            </div>
            <div className="relative z-10 mt-auto pt-8 grid sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl border bg-background/60 backdrop-blur-md shadow-sm hover:shadow-md transition-shadow">
                <strong className="block text-foreground text-base mb-2 flex items-center gap-2">
                  <BoxIcon className="size-4 text-muted-foreground" /> Trục
                  Variant
                </strong>
                <span className="text-sm text-muted-foreground leading-relaxed">
                  solid, outline, ghost, soft. Quyết định viền, nền, độ trong
                  suốt.
                </span>
              </div>
              <div className="p-5 rounded-2xl border bg-background/60 backdrop-blur-md shadow-sm hover:shadow-md transition-shadow">
                <strong className="block text-foreground text-base mb-2 flex items-center gap-2">
                  <PaintbrushIcon className="size-4 text-muted-foreground" />{" "}
                  Trục Color
                </strong>
                <span className="text-sm text-muted-foreground leading-relaxed">
                  primary, secondary, destructive. Quyết định dải màu sắc (hue).
                </span>
              </div>
            </div>
          </div>

          {/* Zero-Prop Defaults */}
          <div className="break-inside-avoid mb-6 rounded-[2rem] border bg-card/20 p-8 md:p-10 flex flex-col group overflow-hidden relative hover:bg-card/40 transition-colors duration-500">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-all pointer-events-none transform group-hover:scale-110 group-hover:-rotate-12 duration-700">
              <ComponentIcon className="w-80 h-80" />
            </div>
            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                <ComponentIcon className="size-3.5" /> Nguyên tắc 4
              </div>
              <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight">
                Zero-prop Defaults
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
                Component phải hoạt động mượt mà và render đúng UI chuẩn kể cả
                khi dev không truyền bất kỳ prop nào vào.
              </p>
            </div>
            <div className="relative z-10 mt-auto pt-8 flex flex-col gap-4">
              <div className="flex items-center justify-between gap-4 p-4 rounded-xl border border-success/20 bg-success/5 shadow-sm">
                <Button>Click Me</Button>
                <span className="text-[11px] sm:text-xs font-mono text-success font-medium">
                  {"<Button>Click Me</Button>"}
                </span>
              </div>
              <div className="flex items-center justify-between gap-4 p-4 rounded-xl border border-destructive/20 bg-destructive/5 shadow-sm opacity-60">
                <Button size="md" color="primary">
                  Click Me
                </Button>
                <span className="text-[11px] sm:text-xs font-mono text-destructive font-medium line-through">
                  {'<Button size="md" color="primary">...'}
                </span>
              </div>
            </div>
          </div>

          {/* AHA Principle (Spans 1 column) */}
          <div className="break-inside-avoid mb-6 rounded-[2rem] border bg-card/20 p-8 md:p-10 flex flex-col group overflow-hidden relative hover:bg-card/40 transition-colors duration-500">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-all pointer-events-none transform group-hover:scale-110 group-hover:rotate-12 duration-700">
              <LayersIcon className="w-56 h-56" />
            </div>
            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-warning/10 text-warning text-xs font-bold uppercase tracking-wider">
                <LayersIcon className="size-3.5" /> Nguyên tắc 5
              </div>
              <h3 className="text-2xl font-extrabold tracking-tight">
                AHA Principle
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                Tránh trừu tượng hóa quá sớm (Avoid Hasty Abstractions). Code
                lặp lại (WET) một chút còn hơn cố DRY rồi sinh ra đống prop phức
                tạp.
              </p>
            </div>
            <div className="relative z-10 mt-auto pt-8">
              <div className="p-4 rounded-xl bg-foreground/5 border border-border/50 text-[11px] sm:text-xs overflow-hidden text-muted-foreground font-mono shadow-inner">
                <span className="text-foreground font-semibold">
                  {"className="}
                </span>
                <span className="text-success">
                  {'"animate-in fade-in zoom-in"'}
                </span>
                <br />
                <br />
                <span className="text-destructive line-through">
                  {'className="popup-animation"'}
                </span>
              </div>
            </div>
          </div>
          {/* CSS Delegated Logic */}
          <div className="break-inside-avoid mb-6 rounded-[2rem] border bg-card/20 p-8 md:p-10 flex flex-col group overflow-hidden relative hover:bg-card/40 transition-colors duration-500">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-all pointer-events-none transform group-hover:scale-110 group-hover:rotate-12 duration-700">
              <PaintbrushIcon className="w-56 h-56" />
            </div>
            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-info/10 text-info text-xs font-bold uppercase tracking-wider">
                <PaintbrushIcon className="size-3.5" /> Nguyên tắc 6
              </div>
              <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight">
                CSS Delegated Logic
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
                Ưu tiên xử lý UI state bằng CSS thuần (ví dụ: hover,
                focus-within, data-state) thay vì quản lý cồng kềnh qua state
                của React.
              </p>
            </div>
            <div className="relative z-10 mt-auto pt-8 grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-success/20 bg-success/5 shadow-sm">
                <div className="text-success font-semibold mb-2 text-sm flex items-center gap-2">
                  ✅ CSS State
                </div>
                <div className="text-[11px] font-mono text-success/80">
                  className="hover:bg-muted focus:ring group-hover:text-primary"
                </div>
              </div>
              <div className="p-4 rounded-xl border border-destructive/20 bg-destructive/5 shadow-sm opacity-60">
                <div className="text-destructive font-semibold mb-2 text-sm flex items-center gap-2">
                  ❌ React State
                </div>
                <div className="text-[11px] font-mono text-destructive/80 line-through">
                  const [hover, setHover] = useState(false)
                </div>
              </div>
            </div>
          </div>

          {/* Strict Polymorphism */}
          <div className="break-inside-avoid mb-6 rounded-[2rem] border bg-card/20 p-8 md:p-10 flex flex-col group overflow-hidden relative hover:bg-card/40 transition-colors duration-500">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-all pointer-events-none transform group-hover:scale-110 group-hover:rotate-12 duration-700">
              <CopyIcon className="w-56 h-56" />
            </div>
            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                <CopyIcon className="size-3.5" /> Nguyên tắc 7
              </div>
              <h3 className="text-2xl font-extrabold tracking-tight">
                Strict Polymorphism
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                Dùng pattern <code>asChild</code> hoặc <code>render</code> prop
                để thay đổi thẻ HTML root, không đẻ bừa các prop lồng nhau.
              </p>
            </div>
            <div className="relative z-10 mt-auto pt-6 space-y-3">
              <div className="p-3 rounded-xl border border-success/20 bg-success/5 text-[11px] font-mono shadow-sm flex items-center">
                <span className="text-success font-bold mr-3 text-lg">✅</span>
                <span className="text-success/90">
                  &lt;Button render=&#123;&lt;Link/&gt;&#125;&gt;
                </span>
              </div>
              <div className="p-3 rounded-xl border border-destructive/20 bg-destructive/5 text-[11px] font-mono shadow-sm flex items-center opacity-70">
                <span className="text-destructive font-bold mr-3 text-lg">
                  ❌
                </span>
                <span className="text-destructive/80 line-through">
                  &lt;Button as="a" href="/"&gt;
                </span>
              </div>
            </div>
          </div>

          {/* Exhaustive Union Types */}
          <div className="break-inside-avoid mb-6 rounded-[2rem] border bg-card/20 p-8 md:p-10 flex flex-col group overflow-hidden relative hover:bg-card/40 transition-colors duration-500">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-all pointer-events-none transform group-hover:scale-110 group-hover:rotate-12 duration-700">
              <BoxIcon className="w-56 h-56" />
            </div>
            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider">
                <BoxIcon className="size-3.5" /> Nguyên tắc 8
              </div>
              <h3 className="text-2xl font-extrabold tracking-tight">
                Exhaustive Union Types
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                Khai báo tường minh Union Types cho các config prop thay vì dùng
                kiểu <code>string</code> chung chung để tận dụng autocomplete.
              </p>
            </div>
            <div className="relative z-10 mt-auto pt-6 space-y-3">
              <div className="p-3 rounded-xl border border-success/20 bg-success/5 text-[11px] font-mono shadow-sm flex items-center">
                <span className="text-success font-bold mr-3 text-lg">✅</span>
                <span className="text-success/90">type Size = "sm" | "md"</span>
              </div>
              <div className="p-3 rounded-xl border border-destructive/20 bg-destructive/5 text-[11px] font-mono shadow-sm flex items-center opacity-70">
                <span className="text-destructive font-bold mr-3 text-lg">
                  ❌
                </span>
                <span className="text-destructive/80 line-through">
                  type Size = string
                </span>
              </div>
            </div>
          </div>

          {/* Accessibility First */}
          <div className="break-inside-avoid mb-6 rounded-[2rem] border bg-card/20 p-8 md:p-10 flex flex-col group overflow-hidden relative hover:bg-card/40 transition-colors duration-500">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-all pointer-events-none transform group-hover:scale-110 group-hover:rotate-12 duration-700">
              <AccessibilityIcon className="w-56 h-56" />
            </div>
            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-info/10 text-info text-xs font-bold uppercase tracking-wider">
                <AccessibilityIcon className="size-3.5" /> Nguyên tắc 9
              </div>
              <h3 className="text-2xl font-extrabold tracking-tight">
                Accessibility First
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                Ưu tiên HTML semantic, liên kết form qua{" "}
                <code>aria-describedby</code>, ẩn icon trang trí bằng{" "}
                <code>aria-hidden</code> để đảm bảo WCAG AAA/AA.
              </p>
            </div>
            <div className="relative z-10 mt-auto pt-6 space-y-3">
              <div className="p-3 rounded-xl border border-success/20 bg-success/5 text-[11px] font-mono shadow-sm flex items-center">
                <span className="text-success font-bold mr-3 text-lg">✅</span>
                <span className="text-success/90">&lt;svg aria-hidden="true" /&gt;</span>
              </div>
              <div className="p-3 rounded-xl border border-destructive/20 bg-destructive/5 text-[11px] font-mono shadow-sm flex items-center opacity-70">
                <span className="text-destructive font-bold mr-3 text-lg">❌</span>
                <span className="text-destructive/80 line-through">&lt;div role="button"&gt;</span>
              </div>
            </div>
          </div>

          {/* Readability is Maintainability */}
          <div className="break-inside-avoid mb-6 rounded-[2rem] border bg-card/20 p-8 md:p-10 flex flex-col group overflow-hidden relative hover:bg-card/40 transition-colors duration-500">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-all pointer-events-none transform group-hover:scale-110 group-hover:rotate-12 duration-700">
              <SparklesIcon className="w-56 h-56" />
            </div>
            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-success/10 text-success text-xs font-bold uppercase tracking-wider">
                <SparklesIcon className="size-3.5" /> Nguyên tắc 10
              </div>
              <h3 className="text-2xl font-extrabold tracking-tight">
                Code Self-documenting
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                Code phải tự nói lên được ý nghĩa của nó. Comment chỉ dành riêng
                cho việc giải thích business context hoặc lý do "tại sao lại
                code thế này".
              </p>
            </div>
            <div className="relative z-10 mt-auto pt-8">
              <div className="p-4 rounded-xl border border-success/20 bg-success/5 text-sm font-mono text-success flex flex-col gap-2 shadow-sm">
                <span className="text-success/60 text-xs">
                  // ✅ Đặt tên biến rõ ràng thay vì comment
                </span>
                <span>
                  const isAccountLocked = loginAttempts &gt; MAX_ATTEMPTS;
                </span>
              </div>
            </div>
          </div>

          {/* Single Source of Truth for Variants */}
          <div className="break-inside-avoid mb-6 rounded-[2rem] border bg-card/20 p-8 md:p-10 flex flex-col group overflow-hidden relative hover:bg-card/40 transition-colors duration-500">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-all pointer-events-none transform group-hover:scale-110 group-hover:rotate-12 duration-700">
              <SlidersHorizontalIcon className="w-56 h-56" />
            </div>
            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-warning/10 text-warning text-xs font-bold uppercase tracking-wider">
                <SlidersHorizontalIcon className="size-3.5" /> Nguyên tắc 11
              </div>
              <h3 className="text-2xl font-extrabold tracking-tight">
                No Default Variants
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                Không dùng <code>defaultVariants</code> ẩn bên trong cấu hình{" "}
                <code>cva()</code>. Đưa mọi prop mặc định ra ngoài component
                interface để dễ tracking và override.
              </p>
            </div>
            <div className="relative z-10 mt-auto pt-6 space-y-3">
              <div className="p-3 rounded-xl border border-success/20 bg-success/5 text-[11px] font-mono shadow-sm flex items-center">
                <span className="text-success font-bold mr-3 text-lg">✅</span>
                <span className="text-success/90">function Button(&#123; size = "md" &#125;)</span>
              </div>
              <div className="p-3 rounded-xl border border-destructive/20 bg-destructive/5 text-[11px] font-mono shadow-sm flex items-center opacity-70">
                <span className="text-destructive font-bold mr-3 text-lg">❌</span>
                <span className="text-destructive/80 line-through">defaultVariants: &#123; size: "md" &#125;</span>
              </div>
            </div>
          </div>

          {/* Pure Composition */}
          <div className="break-inside-avoid mb-6 rounded-[2rem] border bg-card/20 p-8 md:p-10 flex flex-col group overflow-hidden relative hover:bg-card/40 transition-colors duration-500">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-all pointer-events-none transform group-hover:scale-110 group-hover:rotate-12 duration-700">
              <BlocksIcon className="w-56 h-56" />
            </div>
            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 text-destructive text-xs font-bold uppercase tracking-wider">
                <BlocksIcon className="size-3.5" /> Nguyên tắc 12
              </div>
              <h3 className="text-2xl font-extrabold tracking-tight">
                Pure Composition
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                Design component theo dạng lắp ghép (ví dụ: Root, Trigger,
                Content) thay vì ôm đồm nhận vào một mảng data rồi tự{" "}
                <code>map()</code> bên trong.
              </p>
            </div>
            <div className="relative z-10 mt-auto pt-6 space-y-3">
              <div className="p-3 rounded-xl border border-success/20 bg-success/5 text-[11px] font-mono shadow-sm flex items-center">
                <span className="text-success font-bold mr-3 text-lg">✅</span>
                <span className="text-success/90">
                  &lt;Select&gt;
                  <br />
                  &nbsp;&nbsp;&lt;SelectTrigger/&gt;
                  <br />
                  &nbsp;&nbsp;&lt;SelectContent/&gt;
                  <br />
                  &lt;/Select&gt;
                </span>
              </div>
              <div className="p-3 rounded-xl border border-destructive/20 bg-destructive/5 text-[11px] font-mono shadow-sm flex items-center opacity-70">
                <span className="text-destructive font-bold mr-3 text-lg">
                  ❌
                </span>
                <span className="text-destructive/80 line-through">
                  &lt;Select items=&#123;[...]&#125; /&gt;
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🎨 OKLCH COLOR TOKENS */}
      <section className="container max-w-6xl mx-auto px-4">
        <div className="rounded-[2.5rem] border bg-card/30 p-10 md:p-16 shadow-xl relative overflow-hidden group">
          <div className="absolute -top-10 -right-10 p-8 opacity-5 pointer-events-none group-hover:rotate-12 group-hover:scale-125 transition-all duration-1000">
            <PaletteIcon className="size-64 md:size-[400px]" />
          </div>

          <div className="relative z-10 max-w-3xl mb-14 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-2">
              <PaletteIcon className="size-3.5" /> Bảng màu Thế hệ Mới
            </div>
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Không gian màu OKLCH
            </h3>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Mọi token màu sắc được tính toán toán học trên không gian OKLCH.
              Đảm bảo độ chuyển sắc hoàn hảo, tỉ lệ tương phản WCAG AAA/AA trên
              mọi theme mà không cần định nghĩa thủ công từng dải màu.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap gap-6 md:gap-8 justify-center">
            {COLORS.map((c, i) => (
              <div
                key={c}
                className="animate-fade-up"
                style={{
                  animationDelay: `${i * 50}ms`,
                  animationFillMode: "both",
                }}
              >
                <ColorSwatch color={c} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
