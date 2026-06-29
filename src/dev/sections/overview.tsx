import { useState } from "react";
import { toast } from "sonner";
import {
  Button,
  Badge,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Label,
  Switch,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Progress,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../index";
import {
  BoxIcon,
  PaletteIcon,
  ZapIcon,
  LayersIcon,
  ComponentIcon,
  PaintbrushIcon,
  CopyIcon,
  CheckIcon,
} from "lucide-react";

import { ColorSwatch } from "../components/showcase";
import { COLORS, STATS } from "../data";

export default function OverviewSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npm i @duongy96/sadcn");
    setCopied(true);
    toast.success("Command copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6 overflow-hidden">
      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {/* 🌟 Hero Banner - Span 2 cols */}
        <div
          className="md:col-span-2 row-span-2 relative overflow-hidden rounded-2xl border bg-card/40 p-6 md:p-8 shadow-sm transition-all hover:shadow-md hover:bg-card/60 group opacity-0 animate-fade-up"
          style={{ animationDelay: "0ms" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
          <div
            className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-500"
            style={{
              backgroundImage:
                "radial-gradient(circle at center, var(--foreground) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="relative z-10 flex flex-col h-full">
            <div>
              <Badge
                variant="secondary"
                className="mb-3 px-2.5 py-0.5 shadow-sm"
              >
                ✨ sadcn UI v0.2.1
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight mb-2">
                Crafted for Perfection
              </h2>
              <p className="text-muted-foreground max-w-[400px]">
                A premium collection of components designed for modern,
                highly-interactive web applications. Focus on building your
                product, we handle the pixels.
              </p>
            </div>

            {/* Component Collage */}
            <div className="relative h-[240px] mt-8 w-full">
              {/* Floating elements */}
              <div className="absolute top-0 right-4 lg:right-12 hover:-translate-y-1 transition-transform duration-300 animate-float-slow">
                <Card className="w-[220px] shadow-xl bg-background/80 backdrop-blur-md border-primary/20">
                  <CardHeader className="p-4 pb-2">
                    <CardTitle className="text-sm font-medium flex items-center gap-2">
                      <div className="size-2 rounded-full bg-success animate-pulse" />
                      Systems Online
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <Progress value={85} className="h-1.5" />
                    <p className="text-[10px] text-muted-foreground mt-2">
                      All services are operating normally.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="absolute bottom-4 left-0 hover:-translate-y-1 transition-transform duration-300 animate-float-fast">
                <div className="flex flex-col gap-3 p-4 rounded-xl border bg-card/50 backdrop-blur-md shadow-lg w-[260px]">
                  <div className="flex items-center justify-between">
                    <Label className="text-sm font-medium">Dark Mode</Label>
                    <Switch defaultChecked />
                  </div>
                  <Select defaultValue="system">
                    <SelectTrigger size="sm">
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-105 transition-transform duration-300 animate-float">
                <Button size="lg" className="shadow-xl shadow-primary/20">
                  <ZapIcon className="size-4 mr-2" />
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* 📦 Quick Example - Span 1 col */}
        <div
          className="md:col-span-1 rounded-2xl border bg-card/40 p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1 group flex flex-col justify-between opacity-0 animate-fade-up"
          style={{ animationDelay: "100ms" }}
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110 group-hover:rotate-3">
                <BoxIcon className="size-5" />
              </div>
              <h3 className="font-semibold">Quick Install</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Available on npm. Add sadcn to your project in seconds.
            </p>
            <div className="rounded-lg bg-muted/50 px-3 py-2.5 font-mono text-xs border flex items-center justify-between">
              <span className="truncate">npm i @duongy96/sadcn</span>
            </div>
          </div>
          <Button
            className="w-full mt-6"
            color={copied ? "success" : "secondary"}
            variant="soft"
            onClick={handleCopy}
          >
            {copied ? (
              <>
                <CheckIcon className="size-4 mr-2" />
                Copied!
              </>
            ) : (
              <>
                <CopyIcon className="size-4 mr-2" />
                Copy Command
              </>
            )}
          </Button>
        </div>

        {/* 📊 Stats Grid - Span 1 col, 2x2 grid inside */}
        <div
          className="md:col-span-1 grid grid-cols-2 gap-4 opacity-0 animate-fade-up"
          style={{ animationDelay: "200ms" }}
        >
          {STATS.map((s, i) => {
            const icons = [
              <ComponentIcon />,
              <LayersIcon />,
              <PaintbrushIcon />,
              <ZapIcon />,
            ];
            return (
              <div
                key={s.label}
                className="rounded-2xl border bg-card/40 p-4 flex flex-col items-center justify-center text-center shadow-sm transition-all hover:shadow-md hover:bg-muted/50 group"
              >
                <div className="text-muted-foreground/50 mb-2 group-hover:text-primary/50 transition-colors [&>svg]:size-5">
                  {icons[i % icons.length]}
                </div>
                <div className="text-3xl font-bold tracking-tighter group-hover:text-primary transition-colors">
                  {s.value}
                </div>
                <div className="mt-1 text-[10px] uppercase font-medium tracking-wider text-muted-foreground">
                  {s.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* 🎨 Color Tokens - Span 3 cols */}
        <div
          className="md:col-span-3 rounded-2xl border bg-card/40 p-6 shadow-sm transition-all hover:shadow-md group opacity-0 animate-fade-up"
          style={{ animationDelay: "300ms" }}
        >
          <div className="flex items-center justify-between mb-6 border-b border-border/50 pb-4">
            <div>
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <PaletteIcon className="size-5 text-primary" />
                Color Tokens
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Beautifully crafted semantic colors that adapt to any theme.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            {COLORS.map((c) => (
              <div
                key={c}
                className="transition-transform duration-200 hover:-translate-y-1 hover:scale-105"
              >
                <ColorSwatch color={c} />
              </div>
            ))}
          </div>
        </div>

        {/* 📚 Architecture Cheatsheet - Span 3 cols */}
        <div
          className="md:col-span-3 rounded-2xl border bg-card/40 p-6 shadow-sm transition-all hover:shadow-md group opacity-0 animate-fade-up"
          style={{ animationDelay: "400ms" }}
        >
          <div className="flex items-center justify-between mb-6 border-b border-border/50 pb-4">
            <div>
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <LayersIcon className="size-5 text-primary" />
                Design Tokens Cheat Sheet
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                The core architectural principles behind the CSS variables
                system.
              </p>
            </div>
          </div>

          <Accordion className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                1. Không gian màu OKLCH là gì?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-2">
                <p>
                  Hệ thống dùng <strong>oklch(L C H)</strong> thay vì RGB/HEX vì
                  nó bắt chước cách mắt người cảm nhận ánh sáng:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>L (Lightness):</strong> 0 (Đen) đến 1 (Trắng). Ví
                    dụ: oklch(0.98 ...) là xám/trắng nhạt.
                  </li>
                  <li>
                    <strong>C (Chroma):</strong> Độ rực rỡ. Nếu C = 0, đó là
                    Trắng/Đen/Xám.
                  </li>
                  <li>
                    <strong>H (Hue):</strong> Vòng tròn màu sắc (0 = Đỏ, 90 =
                    Vàng, 150 = Xanh lá, 260 = Xanh dương).
                  </li>
                </ul>
                <p>
                  <em>
                    Mẹo: Paste mã màu vào{" "}
                    <a
                      href="https://oklch.com"
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary hover:underline"
                    >
                      oklch.com
                    </a>{" "}
                    để tinh chỉnh trực quan.
                  </em>
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                2. Bí ẩn của lớp .light (Tráng Gương)
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-2">
                <p>
                  Tại sao <code>.light</code> lại giống hệt <code>:root</code>?
                </p>
                <p>
                  Kỹ thuật này gọi là <strong>Nested Themes</strong>. Nếu bạn có
                  một trang Dashboard tối màu (Dark mode), nhưng bạn muốn hiển
                  thị một tờ Hóa Đơn nền trắng ở giữa màn hình, bạn chỉ cần bọc
                  thẻ div đó bằng <code>class="light"</code>. Nhờ block .light
                  khai báo sẵn, khu vực đó sẽ render chuẩn màu sáng mà không bị
                  ảnh hưởng bởi bóng tối xung quanh!
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>3. Quản lý Độ Tương Phản (CR)</AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-2">
                <p>
                  Mỗi màu nền (background) luôn đi kèm với một màu chữ
                  (foreground) để đảm bảo tiêu chuẩn WCAG (CR≥4.5:1).
                </p>
                <p>
                  Ví dụ: Khi sang Dark Mode, <code>--primary</code> được đẩy
                  sáng lên (L=0.72) để nổi trên nền đen. Lúc này{" "}
                  <code>--primary-foreground</code> bắt buộc phải đổi thành Đen
                  (L=0.145) để chữ không bị chìm vào nền.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                4. Viền "Xuyên Thấu" ở Dark Mode
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-2">
                <p>
                  Thay vì dùng màu xám đục cứng nhắc, Dark Mode dùng{" "}
                  <code>oklch(1 0 0 / 10%)</code> (Trắng với 10% opacity) cho
                  đường viền.
                </p>
                <p>
                  Cách này giúp viền tự động "hòa tan" (blend) với mọi mức độ
                  đen bên dưới nó (Card đen nhạt, Sidebar đen đậm), tạo ra viền
                  hoàn hảo mà không cần khai báo nhiều biến khác nhau.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>
                5. Những cái tên "gây lú" (--input, --ring)
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-2">
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>--border:</strong> Màu viền chung (Card, Dialog).
                    Map với <code>border-border</code>.
                  </li>
                  <li>
                    <strong>--input:</strong> CHỈ LÀ MÀU VIỀN của thẻ input. Nền
                    input thường dùng bg-transparent. Map với{" "}
                    <code>border-input</code>.
                  </li>
                  <li>
                    <strong>--ring:</strong> Màu của viền highlight phát sáng
                    khi focus. Map với <code>ring-ring</code>.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>6. Tách biệt Variant và Color</AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-2">
                <p>
                  Điểm sáng giá nhất của hệ thống này so với Shadcn gốc là việc
                  tách đôi hai trục:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>Color (Ý nghĩa):</strong> primary, secondary,
                    destructive, success...
                  </li>
                  <li>
                    <strong>Variant (Hình thức):</strong> solid, outline, ghost,
                    soft...
                  </li>
                </ul>
                <p>
                  Điều này giúp tránh bùng nổ số lượng variant (Combinatorial
                  Explosion). Ví dụ: Bạn có thể dễ dàng gọi{" "}
                  <code>variant="ghost" color="destructive"</code> mà không cần
                  phải viết thêm một class CSS mới nào.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
