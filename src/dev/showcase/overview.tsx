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
  CodeIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { GladvnLogo } from "../../dev/components/GladvnLogo";

import { ProgressPreset as Progress } from "../../components/macro/progress-preset";
import { Badge } from "../../components/micro/badge";
import { Button } from "../../components/micro/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/micro/card";
import { Label } from "../../components/micro/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, SelectPortal } from "../../components/micro/select";
import { Switch } from "../../components/micro/switch";
import { ColorSwatch } from "../../dev/components/showcase";
import { COLORS, STATS } from "../../dev/data";
import { cn } from "../../lib/utils";

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
        "p-4 rounded-xl border border-border shadow-sm text-[11px] sm:text-xs font-mono",
        isSuccess
          ? "border-success/20 bg-success/5"
          : "border-destructive/20 bg-destructive/5 opacity-80",
      )}
    >
      <div
        className={cn(
          "font-semibold mb-2 flex items-center gap-2",
          isSuccess ? "text-success" : "text-destructive",
        )}
      >
        {isSuccess ? "✅" : "❌"} {title}
      </div>
      <div
        className={cn(
          "text-muted-foreground pl-3 border-l-2 leading-relaxed",
          isSuccess ? "border-success/50" : "border-destructive/50",
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
    navigator.clipboard.writeText("npx gladvn init");
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
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-sm font-medium rounded-full border border-primary/20 bg-background/50 backdrop-blur-md shadow-sm animate-fade-up"
          >
            <CodeIcon className="w-3.5 h-3.5 text-primary" />
            <span className="text-muted-foreground">
              Copy code · Own everything · Zero lock-in
            </span>
          </div>

          <h1
            className="max-w-4xl text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 animate-fade-up"
            style={{ animationDelay: "100ms", animationFillMode: "both" }}
          >
            <span className="block text-foreground drop-shadow-sm">
              Mọi component.
            </span>
            <span className="block mt-2 bg-gradient-to-r leading-[1.2] from-primary via-info to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-[spin_8s_linear_infinite] [animation-name:gradient] [animation-duration:8s] [animation-timing-function:linear] [animation-iteration-count:infinite]">
              Trong thư mục của bạn.
            </span>
          </h1>

          <p
            className="max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 animate-fade-up"
            style={{ animationDelay: "200ms", animationFillMode: "both" }}
          >
            Component library thường đòi bạn follow quy tắc của họ mãi mãi.
            gladvn đặt toàn bộ source code vào tay bạn ngay từ đầu —{" "}
            <strong className="text-foreground">
              không vendor lock-in, không breaking change bất ngờ, không
              node_modules ẩn.
            </strong>
          </p>
        </div>

        {/* 3D Floating Showcase Dashboard */}
        <div
          className="mt-20 relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-up"
          style={{ animationDelay: "500ms", animationFillMode: "both" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-20 pointer-events-none h-full w-full" />

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
                    <SelectPortal>
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
                                      </SelectPortal>
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
      <section className="container max-w-6xl mx-auto border-y border-y-border bg-muted/5 py-12 relative overflow-hidden">
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
            Tường minh từ thiết kế. Bền vững theo thời gian.
          </h2>
          <p className="text-muted-foreground text-lg">
            Phần lớn component library hỏng ở năm thứ hai — khi team cần thay
            đổi nhưng không ai dám sửa vì không biết gì sẽ vỡ. gladvn được xây
            trên{" "}
            <strong className="text-foreground">Các nguyên tắc tường minh</strong>
            {" "}để bạn luôn biết mình đang sửa ở tầng nào và điều gì sẽ bị ảnh
            hưởng.
          </p>
        </div>

        {/* FULL OWNERSHIP - FEATURED BANNER */}
        <div
          id="ownership-section"
          className="mb-12 rounded-[2.5rem] border-2 border-primary/50 bg-primary/5 p-4 sm:p-6 md:p-12 flex flex-col gap-10 group overflow-hidden relative hover:bg-primary/10 transition-colors duration-500 shadow-2xl shadow-primary/10"
        >
          <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
            <div className="relative z-10 flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-bold uppercase tracking-wider shadow-lg shadow-primary/20">
                <SparklesIcon className="size-4" /> Điểm khác biệt lớn nhất
              </div>
              <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                Sở hữu 100% mã nguồn
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
                Chạy một lệnh duy nhất — toàn bộ source code (components, hooks,
                styles, contexts) được sao chép thẳng vào thư mục{" "}
                <code className="text-sm bg-primary/20 text-primary px-1.5 py-0.5 rounded">
                  src/
                </code>{" "}
                của dự án bạn.{" "}
                <strong className="text-foreground">
                  Không cài qua node_modules, không bị vendor lock-in
                </strong>{" "}
                — bạn đọc được, sửa được, xoá được từng dòng code.
              </p>

              <div className="flex items-center gap-4 pt-2">
                <button
                  onClick={handleCopy}
                  className="bg-background/80 hover:bg-background border-border backdrop-blur-md px-6 py-4 rounded-2xl border hover:border-primary/50 transition-colors font-mono text-sm shadow-inner flex items-center gap-4 cursor-pointer group/copy"
                >
                  <span className="text-primary font-bold">~</span>
                  <span>npx gladvn init</span>
                  <div className="ml-4 text-muted-foreground group-hover/copy:text-primary transition-colors">
                    {copied ? (
                      <CheckIcon className="size-4 text-success" />
                    ) : (
                      <CopyIcon className="size-4" />
                    )}
                  </div>
                </button>
              </div>
            </div>

            <div className="relative z-10 w-full md:w-1/3 flex flex-col gap-4">
              <div className="p-3 sm:p-5 rounded-2xl border border-success/30 bg-success/10 shadow-sm flex items-start gap-4 transform group-hover:-translate-x-2 transition-transform">
                <div className="bg-success text-success-foreground p-2 rounded-full mt-1">
                  <CheckIcon className="size-4" />
                </div>
                <div>
                  <h4 className="font-bold text-success text-lg">
                    Toàn bộ Component & Hook
                  </h4>
                  <p className="text-xs text-success/80 mt-1">
                    Nằm gọn trong{" "}
                    <code className="opacity-80">
                      src/components/micro/ & macro/
                    </code>
                  </p>
                </div>
              </div>
              <div className="p-3 sm:p-5 rounded-2xl border border-success/30 bg-success/10 shadow-sm flex items-start gap-4 transform group-hover:translate-x-2 transition-transform">
                <div className="bg-success text-success-foreground p-2 rounded-full mt-1">
                  <CheckIcon className="size-4" />
                </div>
                <div>
                  <h4 className="font-bold text-success text-lg">
                    CSS Token & Theme Config
                  </h4>
                  <p className="text-xs text-success/80 mt-1">
                    OKLCH color tokens, dark/light mode — đẹp ngay từ đầu
                  </p>
                </div>
              </div>
              <div className="p-3 sm:p-5 rounded-2xl border border-success/30 bg-success/10 shadow-sm flex items-start gap-4 transform group-hover:-translate-x-2 transition-transform">
                <div className="bg-success text-success-foreground p-2 rounded-full mt-1">
                  <CheckIcon className="size-4" />
                </div>
                <div>
                  <h4 className="font-bold text-success text-lg">
                    Tự động cài Dependency
                  </h4>
                  <p className="text-xs text-success/80 mt-1">
                    Tự nhận diện npm, yarn, pnpm, bun
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* WHERE TO EDIT GUIDE */}
          <div className="relative z-10 border-t border-primary/20 pt-8">
            <p className="text-sm font-bold uppercase tracking-wider text-primary mb-5">
              Tuỳ chỉnh theo từng tầng kiến trúc
            </p>
            <div className="grid sm:grid-cols-3 gap-4">

              {/* MACRO — RECOMMENDED */}
              <div className="p-5 rounded-2xl border-2 border-primary/40 bg-primary/5 space-y-3 relative">
                <div className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                  Nên bắt đầu ở đây
                </div>
                <div className="font-mono text-xs text-primary/70">
                  src/components/macro/
                </div>
                <h4 className="font-bold text-foreground text-base">
                  Sửa Macro — an toàn nhất
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Đây là nơi bạn nên chỉnh trước tiên. Mỗi Macro là một preset
                  độc lập — thêm footer cho DatePicker, bỏ nút đóng của Dialog,
                  điều chỉnh placeholder của Combobox.{" "}
                  <strong className="text-foreground">
                    Thay đổi chỉ ảnh hưởng đúng preset đó
                  </strong>
                  , không lan ra component nào khác.
                </p>
              </div>

              {/* MICRO — CAUTION */}
              <div className="p-5 rounded-2xl border border-warning/40 bg-warning/5 space-y-3 relative">
                <div className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider text-warning bg-warning/10 px-2 py-0.5 rounded-full">
                  Cẩn thận
                </div>
                <div className="font-mono text-xs text-warning/70">
                  src/components/micro/
                </div>
                <h4 className="font-bold text-foreground text-base">
                  Sửa Micro — ảnh hưởng rộng
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Micro là nền tảng — mọi Macro đều xây trên chúng. Sửa một
                  variant của Button hay thay animation của Tooltip sẽ{" "}
                  <strong className="text-foreground">
                    tác động đồng loạt đến toàn bộ nơi dùng component đó
                  </strong>{" "}
                  trong ứng dụng. Chỉ chỉnh khi bạn rõ mình đang làm gì.
                </p>
              </div>

              {/* CSS — HIGHEST IMPACT */}
              <div className="p-5 rounded-2xl border border-destructive/30 bg-destructive/5 space-y-3 relative">
                <div className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider text-destructive bg-destructive/10 px-2 py-0.5 rounded-full">
                  Ảnh hưởng toàn cục
                </div>
                <div className="font-mono text-xs text-destructive/60">
                  src/index.css
                </div>
                <h4 className="font-bold text-foreground text-base">
                  Sửa CSS — chạm toàn bộ hệ thống
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  CSS token là ngôn ngữ chung của mọi component — màu sắc,
                  typography, border-radius. Thay đổi một token ở đây{" "}
                  <strong className="text-foreground">
                    tức thời cập nhật toàn bộ giao diện
                  </strong>
                  , từ Button đến Dialog. Dùng khi bạn muốn rebrand hoặc thay
                  đổi design language, không phải để vá từng chỗ.
                </p>
              </div>

            </div>
          </div>
        </div>

        <div className="columns-1 md:columns-2 gap-6">
          {/* Micro/Macro (Spans 2 columns) */}
          <div className="break-inside-avoid mb-6 rounded-[2rem] border border-border bg-card/20 p-4 md:p-10 flex flex-col justify-between group overflow-hidden relative hover:bg-card/40 transition-colors duration-500">
            <div className="absolute -top-10 -right-10 p-8 opacity-5 group-hover:opacity-10 transition-all pointer-events-none transform group-hover:scale-110 group-hover:-rotate-12 duration-700">
              <BlocksIcon className="w-80 h-80" />
            </div>
            <div className="relative z-10 space-y-4 mb-10">
              <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight">
                Micro &amp; Macro Architecture
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
                <span className="text-foreground">
                  {"</AlertDialogFooter>"}
                </span>
              </CodeBlock>

              <CodeBlock
                type="destructive"
                title="Ép Layout ở Micro (Primitive):"
              >
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
                <span className="text-foreground">
                  {"</AlertDialogFooter>"}
                </span>
              </CodeBlock>
            </div>
          </div>

          {/* Style Encapsulation */}
          <div className="break-inside-avoid mb-6 rounded-[2rem] border border-border bg-card/20 p-4 md:p-10 flex flex-col group overflow-hidden relative hover:bg-card/40 transition-colors duration-500">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-all pointer-events-none transform group-hover:scale-110 group-hover:rotate-12 duration-700">
              <ShieldCheckIcon className="w-56 h-56" />
            </div>
            <div className="relative z-10 space-y-4">
              <h3 className="text-2xl font-extrabold tracking-tight">
                Style Encapsulation
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                Mỗi component là một hộp đen styling. Consumer chỉ tác động
                vào bên trong qua{" "}
                <code>data-slot</code> — contract đã được khai báo chính thức
                trong API.{" "}
                <strong className="text-foreground">
                  Refactor nội tại không bao giờ phá vỡ code của người dùng.
                </strong>
              </p>
            </div>
            <div className="relative z-10 mt-auto pt-6 space-y-3">
              <div className="p-3 rounded-xl border border-destructive/20 bg-destructive/5 text-xs font-mono shadow-sm flex items-center">
                <span className="text-destructive font-bold mr-3 text-lg">❌</span>
                <span className="opacity-80 line-through">{"[&>div>span]:color"}</span>
              </div>
              <div className="p-3 rounded-xl border border-success/20 bg-success/5 text-xs font-mono shadow-sm flex items-center">
                <span className="text-success font-bold mr-3 text-lg">✅</span>
                <span className="text-foreground font-medium">data-[slot=icon]:color</span>
              </div>
            </div>
          </div>

          {/* Orthogonal Styling (Spans 2 columns) */}
          <div className="break-inside-avoid mb-6 rounded-[2rem] border border-border bg-card/20 p-4 md:p-10 flex flex-col group overflow-hidden relative hover:bg-card/40 transition-colors duration-500">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-all pointer-events-none transform group-hover:scale-110 group-hover:-rotate-12 duration-700">
              <SlidersHorizontalIcon className="w-80 h-80" />
            </div>
            <div className="relative z-10 space-y-4">
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
              <div className="p-3 sm:p-5 rounded-2xl border border-border bg-background/60 backdrop-blur-md shadow-sm hover:shadow-md transition-shadow">
                <strong className="block text-foreground text-base mb-2 flex items-center gap-2">
                  <BoxIcon className="size-4 text-muted-foreground" /> Trục
                  Variant
                </strong>
                <span className="text-sm text-muted-foreground leading-relaxed">
                  solid, outline, ghost, soft. Quyết định viền, nền, độ trong
                  suốt.
                </span>
              </div>
              <div className="p-3 sm:p-5 rounded-2xl border border-border bg-background/60 backdrop-blur-md shadow-sm hover:shadow-md transition-shadow">
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
          <div className="break-inside-avoid mb-6 rounded-[2rem] border border-border bg-card/20 p-4 md:p-10 flex flex-col group overflow-hidden relative hover:bg-card/40 transition-colors duration-500">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-all pointer-events-none transform group-hover:scale-110 group-hover:-rotate-12 duration-700">
              <ComponentIcon className="w-80 h-80" />
            </div>
            <div className="relative z-10 space-y-4">
              <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight">
                Zero-prop Defaults
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
                Component phải hoạt động mượt mà và render đúng UI chuẩn kể cả
                khi dev không truyền bất kỳ prop nào vào.{" "}
                <strong className="text-foreground">
                  Nếu không, mỗi lần dùng là một lần tra tài liệu.
                </strong>
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

          {/* Headless Behavior Layer */}
          <div className="break-inside-avoid mb-6 rounded-[2rem] border border-border bg-card/20 p-4 md:p-10 flex flex-col group overflow-hidden relative hover:bg-card/40 transition-colors duration-500">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-all pointer-events-none transform group-hover:scale-110 group-hover:rotate-12 duration-700">
              <LayersIcon className="w-56 h-56" />
            </div>
            <div className="relative z-10 space-y-4">
              <h3 className="text-2xl font-extrabold tracking-tight">
                Headless Behavior Layer
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                Keyboard navigation, focus management, ARIA state — tất cả được
                tách sang lớp Headless UI (Base UI). Micro component chỉ wrap
                và thêm visual style, không tự implement logic tương tác.{" "}
                <strong className="text-foreground">
                  Behavior đúng mặc định, không cần test lại từng lần.
                </strong>
              </p>
            </div>
            <div className="relative z-10 mt-auto pt-8">
              <div className="p-4 rounded-xl bg-foreground/5 border border-border/50 text-[11px] sm:text-xs font-mono shadow-inner space-y-1">
                <div className="text-muted-foreground">// Micro = Headless + Style</div>
                <div>
                  <span className="text-primary">{'<Base UI Select>'}</span>
                  <span className="text-muted-foreground"> ← behavior</span>
                </div>
                <div className="pl-4">
                  <span className="text-success">{'<SelectTrigger>'}</span>
                  <span className="text-muted-foreground"> ← style only</span>
                </div>
              </div>
            </div>
          </div>
          {/* CSS Token Architecture */}
          <div className="break-inside-avoid mb-6 rounded-[2rem] border border-border bg-card/20 p-4 md:p-10 flex flex-col group overflow-hidden relative hover:bg-card/40 transition-colors duration-500">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-all pointer-events-none transform group-hover:scale-110 group-hover:rotate-12 duration-700">
              <PaletteIcon className="w-56 h-56" />
            </div>
            <div className="relative z-10 space-y-4">
              <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight">
                CSS Token Architecture
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
                Không component nào được hardcode màu sắc, spacing hay
                border-radius trực tiếp. Tất cả tham chiếu CSS custom property
                từ hệ thống token.{" "}
                <strong className="text-foreground">
                  Thay đổi một token — toàn hệ thống cập nhật tức thì.
                </strong>
              </p>
            </div>
            <div className="relative z-10 mt-auto pt-8 grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-success/20 bg-success/5 shadow-sm">
                <div className="text-success font-semibold mb-2 text-sm">✅ Token</div>
                <div className="text-[11px] font-mono text-success/80">
                  oklch(var(--primary))
                </div>
              </div>
              <div className="p-4 rounded-xl border border-destructive/20 bg-destructive/5 shadow-sm opacity-60">
                <div className="text-destructive font-semibold mb-2 text-sm">❌ Hardcode</div>
                <div className="text-[11px] font-mono text-destructive/80 line-through">
                  #2563eb
                </div>
              </div>
            </div>
          </div>

          {/* Strict Polymorphism */}
          <div className="break-inside-avoid mb-6 rounded-[2rem] border border-border bg-card/20 p-4 md:p-10 flex flex-col group overflow-hidden relative hover:bg-card/40 transition-colors duration-500">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-all pointer-events-none transform group-hover:scale-110 group-hover:rotate-12 duration-700">
              <CopyIcon className="w-56 h-56" />
            </div>
            <div className="relative z-10 space-y-4">
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

          {/* Dumb Primitives */}
          <div className="break-inside-avoid mb-6 rounded-[2rem] border border-border bg-card/20 p-4 md:p-10 flex flex-col group overflow-hidden relative hover:bg-card/40 transition-colors duration-500">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-all pointer-events-none transform group-hover:scale-110 group-hover:rotate-12 duration-700">
              <BoxIcon className="w-56 h-56" />
            </div>
            <div className="relative z-10 space-y-4">
              <h3 className="text-2xl font-extrabold tracking-tight">
                Dumb Primitives
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                Micro component không được chứa{" "}
                <code>useState</code> hay <code>useEffect</code>. Chúng hoàn
                toàn stateless — mọi state đều thuộc về Headless UI hoặc Macro
                preset.{" "}
                <strong className="text-foreground">
                  Primitive càng "ngu" càng dễ test và dễ tin tưởng.
                </strong>
              </p>
            </div>
            <div className="relative z-10 mt-auto pt-6 space-y-3">
              <div className="p-3 rounded-xl border border-success/20 bg-success/5 text-[11px] font-mono shadow-sm flex items-center">
                <span className="text-success font-bold mr-3 text-lg">✅</span>
                <span className="text-success/90">{"function Button({ ...props })"}</span>
              </div>
              <div className="p-3 rounded-xl border border-destructive/20 bg-destructive/5 text-[11px] font-mono shadow-sm flex items-center opacity-70">
                <span className="text-destructive font-bold mr-3 text-lg">❌</span>
                <span className="text-destructive/80 line-through">
                  {"const [open, setOpen] = useState()"}
                </span>
              </div>
            </div>
          </div>

          {/* Accessibility First */}
          <div className="break-inside-avoid mb-6 rounded-[2rem] border border-border bg-card/20 p-4 md:p-10 flex flex-col group overflow-hidden relative hover:bg-card/40 transition-colors duration-500">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-all pointer-events-none transform group-hover:scale-110 group-hover:rotate-12 duration-700">
              <AccessibilityIcon className="w-56 h-56" />
            </div>
            <div className="relative z-10 space-y-4">
              <h3 className="text-2xl font-extrabold tracking-tight">
                Accessibility First
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                Ưu tiên HTML semantic, liên kết form qua{" "}
                <code>aria-describedby</code>, ẩn icon trang trí bằng{" "}
                <code>aria-hidden</code> để đảm bảo WCAG AAA/AA.{" "}
                <strong className="text-foreground">
                  Accessibility là thứ không ai để ý — cho đến khi bị audit.
                </strong>
              </p>
            </div>
            <div className="relative z-10 mt-auto pt-6 space-y-3">
              <div className="p-3 rounded-xl border border-success/20 bg-success/5 text-[11px] font-mono shadow-sm flex items-center">
                <span className="text-success font-bold mr-3 text-lg">✅</span>
                <span className="text-success/90">
                  &lt;svg aria-hidden="true" /&gt;
                </span>
              </div>
              <div className="p-3 rounded-xl border border-destructive/20 bg-destructive/5 text-[11px] font-mono shadow-sm flex items-center opacity-70">
                <span className="text-destructive font-bold mr-3 text-lg">
                  ❌
                </span>
                <span className="text-destructive/80 line-through">
                  &lt;div role="button"&gt;
                </span>
              </div>
            </div>
          </div>

          {/* Explicit State Contract */}
          <div className="break-inside-avoid mb-6 rounded-[2rem] border border-border bg-card/20 p-4 md:p-10 flex flex-col group overflow-hidden relative hover:bg-card/40 transition-colors duration-500">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-all pointer-events-none transform group-hover:scale-110 group-hover:rotate-12 duration-700">
              <DatabaseIcon className="w-56 h-56" />
            </div>
            <div className="relative z-10 space-y-4">
              <h3 className="text-2xl font-extrabold tracking-tight">
                Explicit State Contract
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                Component expose trạng thái ra ngoài qua{" "}
                <code>data-attributes</code>, không phải qua imperative ref
                methods. Consumer CSS và animation target chính xác từng
                trạng thái mà không cần JavaScript.{" "}
                <strong className="text-foreground">
                  State là public API — phải tường minh và ổn định.
                </strong>
              </p>
            </div>
            <div className="relative z-10 mt-auto pt-8">
              <div className="p-4 rounded-xl bg-foreground/5 border border-border/50 text-[11px] sm:text-xs font-mono shadow-inner space-y-2">
                <div>
                  <span className="text-success">data-[state=open]</span>
                  <span className="text-muted-foreground">:rotate-180</span>
                </div>
                <div>
                  <span className="text-success">data-disabled</span>
                  <span className="text-muted-foreground">:opacity-50</span>
                </div>
                <div className="pt-1 border-t border-border/30">
                  <span className="text-destructive/60 line-through">ref.current.isOpen</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3-Layer Source Ownership */}
          <div className="break-inside-avoid mb-6 rounded-[2rem] border border-border bg-card/20 p-4 md:p-10 flex flex-col group overflow-hidden relative hover:bg-card/40 transition-colors duration-500">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-all pointer-events-none transform group-hover:scale-110 group-hover:rotate-12 duration-700">
              <SlidersHorizontalIcon className="w-56 h-56" />
            </div>
            <div className="relative z-10 space-y-4">
              <h3 className="text-2xl font-extrabold tracking-tight">
                3-Layer Source Ownership
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                Source được phân tầng: <code>micro/</code> (primitive không
                có layout cứng nhắc), <code>macro/</code> (preset lắp ráp có
                chủ đích), <code>index.css</code> (token toàn hệ thống).{" "}
                <strong className="text-foreground">
                  Sửa ở tầng nào chỉ ảnh hưởng đến tầng đó.
                </strong>
              </p>
            </div>
            <div className="relative z-10 mt-auto pt-6 space-y-2">
              <div className="p-3 rounded-xl border border-border bg-background/60 text-[11px] font-mono flex items-center gap-3">
                <span className="text-destructive font-bold">CSS</span>
                <span className="text-muted-foreground">index.css — token toàn cục</span>
              </div>
              <div className="p-3 rounded-xl border border-border bg-background/60 text-[11px] font-mono flex items-center gap-3">
                <span className="text-warning font-bold">Macro</span>
                <span className="text-muted-foreground">macro/ — preset lắp ráp</span>
              </div>
              <div className="p-3 rounded-xl border border-border bg-background/60 text-[11px] font-mono flex items-center gap-3">
                <span className="text-success font-bold">Micro</span>
                <span className="text-muted-foreground">micro/ — primitive thuần</span>
              </div>
            </div>
          </div>

          {/* Pure Composition */}
          <div className="break-inside-avoid mb-6 rounded-[2rem] border border-border bg-card/20 p-4 md:p-10 flex flex-col group overflow-hidden relative hover:bg-card/40 transition-colors duration-500">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-all pointer-events-none transform group-hover:scale-110 group-hover:rotate-12 duration-700">
              <BlocksIcon className="w-56 h-56" />
            </div>
            <div className="relative z-10 space-y-4">
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

      {/* ✨ KILLER FEATURE: SCOPED THEME TUNNEL */}
      <section className="container max-w-6xl mx-auto px-4 mb-16">
        <div className="rounded-[2.5rem] border border-warning/30 bg-warning/5 p-10 md:p-16 shadow-xl relative overflow-hidden group">
          <div className="absolute -top-10 -right-10 p-8 opacity-10 pointer-events-none group-hover:rotate-12 group-hover:scale-125 transition-all duration-1000 text-warning">
            <SparklesIcon className="size-64 md:size-[400px]" />
          </div>

          <div className="relative z-10 max-w-3xl mb-14 space-y-5">
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight text-warning">
              Scoped Theme Tunnel
            </h3>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Tưởng tượng: app đang chạy Light Mode nhưng bạn cần một vùng nền
              tối nổi bật — hero section, dark sidebar, CTA banner. Bọc vùng đó
              trong{" "}
              <code className="text-sm bg-warning/20 text-warning px-1.5 py-0.5 rounded">
                {"<ThemeProvider defaultMode=\"dark\">"}
              </code>{" "}
              là đủ để mọi component con hiểu ngữ cảnh đang là Dark và tự điều
              chỉnh màu sắc.
            </p>
            <p className="text-muted-foreground text-xl leading-relaxed">
              <strong className="text-foreground">
                Nhưng có một bẫy ẩn:
              </strong>{" "}
              khi người dùng mở Tooltip hoặc Dialog từ bên trong vùng tối đó,
              component này render ra{" "}
              <code className="text-sm bg-warning/20 text-warning px-1.5 py-0.5 rounded">
                document.body
              </code>{" "}
              qua React Portal — thoát hoàn toàn khỏi DOM tree. CSS variable
              dark mode mất theo. Tooltip hiện ra{" "}
              <strong className="text-foreground">trắng lạc quẻ</strong> giữa
              nền đen. Đây là điểm mà hầu hết thư viện bỏ cuộc.
            </p>
            <p className="text-muted-foreground text-xl leading-relaxed">
              gladvn giải quyết bằng{" "}
              <code className="text-sm bg-warning/20 text-warning px-1.5 py-0.5 rounded">
                {"<ThemeWrapper>"}
              </code>{" "}
              — một lớp được đặt{" "}
              <strong className="text-foreground">ngay bên trong Portal</strong>{" "}
              để đọc theme context từ trước khi vượt qua ranh giới Portal và
              tái-inject nó vào phía bên kia.{" "}
              <strong className="text-foreground">
                Theme không bị chặn lại ở ranh giới — nó được đào hầm xuyên
                qua.
              </strong>{" "}
              Kết quả: Dialog, Tooltip, Select... luôn hiển thị đúng màu dark
              dù chúng render ở đâu trong DOM.
            </p>
          </div>

          <div className="relative z-10 grid sm:grid-cols-2 gap-6 max-w-3xl">
            <div className="p-6 rounded-2xl border border-success/30 bg-success/10 shadow-sm flex flex-col gap-2">
              <div className="text-success font-semibold text-lg flex items-center gap-2">
                ✅ gladvn — ThemeWrapper
              </div>
              <p className="text-success/80 text-sm leading-relaxed">
                Theme được tunnel xuyên qua Portal boundary. Dialog, Tooltip,
                Select... luôn hiển thị đúng dark mode dù render tại{" "}
                <code className="opacity-80">document.body</code>.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-destructive/30 bg-destructive/10 shadow-sm opacity-80 flex flex-col gap-2">
              <div className="text-destructive font-semibold text-lg flex items-center gap-2">
                ❌ Các thư viện thông thường
              </div>
              <p className="text-destructive/80 text-sm leading-relaxed">
                Theme bị mất khi vượt qua Portal. Tooltip, Dialog bên trong
                dark section vẫn hiển thị màu Light Mode — lỗi thầm lặng, khó
                debug.
              </p>
            </div>
          </div>

          <div className="relative z-10 mt-10">
            <Button
              render={<a href="?component=theme-provider" />}
              variant="outline"
              color="warning"
              className="gap-2 font-bold px-6 py-5 rounded-xl border-warning/30 bg-warning/10 hover:bg-warning/20 shadow-sm"
            >
              Xem Demo Thực tế
              <ArrowRightIcon className="size-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* 🎨 OKLCH COLOR TOKENS */}
      <section className="container max-w-6xl mx-auto px-4">
        <div className="rounded-[2.5rem] border border-border bg-card/30 p-10 md:p-16 shadow-xl relative overflow-hidden group">
          <div className="absolute -top-10 -right-10 p-8 opacity-5 pointer-events-none group-hover:rotate-12 group-hover:scale-125 transition-all duration-1000">
            <PaletteIcon className="size-64 md:size-[400px]" />
          </div>

          <div className="relative z-10 max-w-3xl mb-14 space-y-5">
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

      {/* 🚀 FINAL CTA */}
      <section className="container max-w-6xl mx-auto px-4">
        <div className="rounded-[2.5rem] border-2 border-primary/40 bg-gradient-to-br from-primary/10 via-background to-info/5 p-10 md:p-16 shadow-2xl shadow-primary/5 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(var(--primary-rgb),0.15),transparent)] pointer-events-none" />
          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Sẵn sàng bắt đầu?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Toàn bộ source code sẽ nằm trong thư mục{" "}
              <code className="text-sm bg-primary/20 text-primary px-1.5 py-0.5 rounded">
                src/
              </code>{" "}
              của bạn trong vòng 30 giây. Không cần config. Không cần đọc thêm
              tài liệu.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                onClick={handleCopy}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-2xl font-mono text-sm shadow-lg shadow-primary/20 flex items-center gap-4 cursor-pointer transition-all hover:scale-105 active:scale-95"
              >
                <span className="font-bold opacity-70">~</span>
                <span>npx gladvn init</span>
                <div className="ml-2">
                  {copied ? (
                    <CheckIcon className="size-4" />
                  ) : (
                    <CopyIcon className="size-4" />
                  )}
                </div>
              </button>
              <Button
                render={<a href="?component=overview" />}
                variant="ghost"
                className="text-muted-foreground hover:text-foreground"
              >
                Xem tài liệu đầy đủ
                <ArrowRightIcon className="size-4 ml-1" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground pt-2">
              Tương thích với npm, yarn, pnpm và bun. Hỗ trợ React 18+.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
