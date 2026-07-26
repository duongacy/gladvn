import React from "react";
import {
  BlocksIcon,
  ShieldCheckIcon,
  SlidersHorizontalIcon,
  BoxIcon,
  PaintbrushIcon,
  ComponentIcon,
  LayersIcon,
  PaletteIcon,
  CopyIcon,
  AccessibilityIcon,
  DatabaseIcon,
  SparklesIcon,
  ArrowRightIcon
} from "lucide-react";
import { CodeBlock } from "./CodeBlock";
import { Button } from "../../../components/micro/button";
import { cn } from "../../../lib/utils";

export function FeatureGridSection({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="columns-1 md:columns-2 gap-6">

        <div className="break-inside-avoid mb-6 rounded-[2rem] border border-border bg-card/20 p-4 md:p-10 flex flex-col justify-between group overflow-hidden relative hover:bg-card/40 transition-colors duration-500">
          <div className="absolute -top-10 -right-10 p-8 opacity-5 group-hover:opacity-10 transition-all pointer-events-none transform group-hover:scale-110 group-hover:-rotate-12 duration-700">
            <BlocksIcon className="w-80 h-80" />
          </div>
          <div className="relative z-10 space-y-4 mb-10">
            <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight">
              Luật chơi Micro/Macro
            </h3>
            <p className="text-muted-foreground max-w-lg text-lg leading-relaxed">
              Micro chỉ là những mảnh lego thuần túy — đẹp nhưng vô tri. Macro mới là người chỉ huy — sắp xếp các mảnh lego thành giao diện hoàn chỉnh.
              <strong className="text-foreground block mt-2">
                Micro không bao giờ được phép tự tiện lo chuyện layout (margin, width). Việc đó là của Macro!
              </strong>
            </p>
          </div>
          <div className="relative z-10 mt-auto pt-6 space-y-3">
            <CodeBlock type="success" title="Đúng — Để Macro lo layout:">
              <span className="text-success/80">
                {"/* Macro biết con mình là gì → gắn class chính xác */"}
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

            <CodeBlock type="destructive" title="Sai — Micro tự đoán layout:">
              <span className="text-destructive/80">
                {"/* Micro không biết con mình là gì → phải đoán bằng CSS */"}
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


        <div className="break-inside-avoid mb-6 rounded-[2rem] border border-border bg-card/20 p-4 md:p-10 flex flex-col group overflow-hidden relative hover:bg-card/40 transition-colors duration-500">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-all pointer-events-none transform group-hover:scale-110 group-hover:rotate-12 duration-700">
            <ShieldCheckIcon className="w-56 h-56" />
          </div>
          <div className="relative z-10 space-y-4">
            <h3 className="text-2xl font-extrabold tracking-tight">
              Style Encapsulation
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed">
              Style của mỗi component không rò rỉ ra ngoài. Muốn tuỳ chỉnh thì
              dùng <code>data-slot</code> — contract rõ ràng, có sẵn.{" "}
              <strong className="text-foreground">
                Refactor bên trong mà không ảnh hưởng bên ngoài.
              </strong>
            </p>
          </div>
          <div className="relative z-10 mt-auto pt-6 space-y-3">
            <div className="p-3 rounded-xl border border-destructive/20 bg-destructive/5 text-xs font-mono shadow-sm flex items-center">
              <span className="text-destructive font-bold mr-3 text-lg">
                ❌
              </span>
              <span className="opacity-80 line-through">
                {"[&>div>span]:color"}
              </span>
            </div>
            <div className="p-3 rounded-xl border border-success/20 bg-success/5 text-xs font-mono shadow-sm flex items-center">
              <span className="text-success font-bold mr-3 text-lg">✅</span>
              <span className="text-foreground font-medium">
                data-[slot=icon]:color
              </span>
            </div>
          </div>
        </div>


        <div className="break-inside-avoid mb-6 rounded-[2rem] border border-border bg-card/20 p-4 md:p-10 flex flex-col group overflow-hidden relative hover:bg-card/40 transition-colors duration-500">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-all pointer-events-none transform group-hover:scale-110 group-hover:-rotate-12 duration-700">
            <SlidersHorizontalIcon className="w-80 h-80" />
          </div>
          <div className="relative z-10 space-y-4">
            <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight">
              Variant × Color
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
              Variant (solid, outline, ghost...) và Color (primary,
              destructive...) là hai trục độc lập. Kết hợp tự do mà class
              không phình ra.
            </p>
          </div>
          <div className="relative z-10 mt-auto pt-8 grid sm:grid-cols-2 gap-4">
            <div className="p-3 sm:p-5 rounded-2xl border border-border bg-background/60 backdrop-blur-md shadow-sm hover:shadow-md transition-shadow">
              <strong className="block text-foreground text-base mb-2 flex items-center gap-2">
                <BoxIcon className="size-4 text-muted-foreground" /> Trục
                Variant
              </strong>
              <span className="text-sm text-muted-foreground leading-relaxed">
                solid, outline, ghost, soft. Quyết định cách component trông
                như thế nào.
              </span>
            </div>
            <div className="p-3 sm:p-5 rounded-2xl border border-border bg-background/60 backdrop-blur-md shadow-sm hover:shadow-md transition-shadow">
              <strong className="block text-foreground text-base mb-2 flex items-center gap-2">
                <PaintbrushIcon className="size-4 text-muted-foreground" />{" "}
                Trục Color
              </strong>
              <span className="text-sm text-muted-foreground leading-relaxed">
                primary, secondary, destructive. Quyết định bảng màu của
                component.
              </span>
            </div>
          </div>
        </div>

        <div className="break-inside-avoid mb-6 rounded-[2rem] border border-border bg-card/20 p-4 md:p-10 flex flex-col group overflow-hidden relative hover:bg-card/40 transition-colors duration-500">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-all pointer-events-none transform group-hover:scale-110 group-hover:-rotate-12 duration-700">
            <ComponentIcon className="w-80 h-80" />
          </div>
          <div className="relative z-10 space-y-4">
            <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight">
              Zero-prop Defaults
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
              Đặt component vào mà không truyền prop nào — vẫn chạy đẹp, vẫn
              đúng behavior.{" "}
              <strong className="text-foreground">
                Không phải tra docs mỗi lần dùng.
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


        <div className="break-inside-avoid mb-6 rounded-[2rem] border border-border bg-card/20 p-4 md:p-10 flex flex-col group overflow-hidden relative hover:bg-card/40 transition-colors duration-500">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-all pointer-events-none transform group-hover:scale-110 group-hover:rotate-12 duration-700">
            <LayersIcon className="w-56 h-56" />
          </div>
          <div className="relative z-10 space-y-4">
            <h3 className="text-2xl font-extrabold tracking-tight">
              Headless + Style
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed">
              Keyboard, focus, ARIA — Base UI lo hết. Micro component chỉ thêm
              lớp style lên trên, không tự viết logic tương tác.{" "}
              <strong className="text-foreground">
                Behavior đúng sẵn, không cần test lại.
              </strong>
            </p>
          </div>
          <div className="relative z-10 mt-auto pt-8">
            <div className="p-4 rounded-xl bg-foreground/5 border border-border/50 text-[11px] sm:text-xs font-mono shadow-inner space-y-1">
              <div className="text-muted-foreground">

              </div>
              <div>
                <span className="text-primary">{"<Base UI Select>"}</span>
                <span className="text-muted-foreground"> ← behavior</span>
              </div>
              <div className="pl-4">
                <span className="text-success">{"<SelectTrigger>"}</span>
                <span className="text-muted-foreground"> ← style only</span>
              </div>
            </div>
          </div>
        </div>

        <div className="break-inside-avoid mb-6 rounded-[2rem] border border-border bg-card/20 p-4 md:p-10 flex flex-col group overflow-hidden relative hover:bg-card/40 transition-colors duration-500">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-all pointer-events-none transform group-hover:scale-110 group-hover:rotate-12 duration-700">
            <PaletteIcon className="w-56 h-56" />
          </div>
          <div className="relative z-10 space-y-4">
            <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight">
              CSS Token
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
              Không component nào hardcode màu hay spacing. Tất cả đều tham
              chiếu từ hệ thống token chung.{" "}
              <strong className="text-foreground">
                Đổi một token — cả app cập nhật.
              </strong>
            </p>
          </div>
          <div className="relative z-10 mt-auto pt-8 grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-success/20 bg-success/5 shadow-sm">
              <div className="text-success font-semibold mb-2 text-sm">
                ✅ Token
              </div>
              <div className="text-[11px] font-mono text-success/80">
                oklch(var(--primary))
              </div>
            </div>
            <div className="p-4 rounded-xl border border-destructive/20 bg-destructive/5 shadow-sm opacity-60">
              <div className="text-destructive font-semibold mb-2 text-sm">
                ❌ Hardcode
              </div>
              <div className="text-[11px] font-mono text-destructive/80 line-through">
                #2563eb
              </div>
            </div>
          </div>
        </div>


        <div className="break-inside-avoid mb-6 rounded-[2rem] border border-border bg-card/20 p-4 md:p-10 flex flex-col group overflow-hidden relative hover:bg-card/40 transition-colors duration-500">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-all pointer-events-none transform group-hover:scale-110 group-hover:rotate-12 duration-700">
            <CopyIcon className="w-56 h-56" />
          </div>
          <div className="relative z-10 space-y-4">
            <h3 className="text-2xl font-extrabold tracking-tight">
              Polymorphism
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed">
              Dùng <code>render</code> prop để đổi thẻ HTML root — ví dụ biến
              Button thành Link. Không cần prop <code>as</code> hay tạo
              wrapper lồng nhau.
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


        <div className="break-inside-avoid mb-6 rounded-[2rem] border border-border bg-card/20 p-4 md:p-10 flex flex-col group overflow-hidden relative hover:bg-card/40 transition-colors duration-500">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-all pointer-events-none transform group-hover:scale-110 group-hover:rotate-12 duration-700">
            <BoxIcon className="w-56 h-56" />
          </div>
          <div className="relative z-10 space-y-4">
            <h3 className="text-2xl font-extrabold tracking-tight">
              Stateless Primitive
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed">
              Micro component không chứa <code>useState</code> hay{" "}
              <code>useEffect</code>. State nằm ở Headless UI hoặc Macro.{" "}
              <strong className="text-foreground">
                Component càng đơn giản, càng ít bug.
              </strong>
            </p>
          </div>
          <div className="relative z-10 mt-auto pt-6 space-y-3">
            <div className="p-3 rounded-xl border border-success/20 bg-success/5 text-[11px] font-mono shadow-sm flex items-center">
              <span className="text-success font-bold mr-3 text-lg">✅</span>
              <span className="text-success/90">
                {"function Button({ ...props })"}
              </span>
            </div>
            <div className="p-3 rounded-xl border border-destructive/20 bg-destructive/5 text-[11px] font-mono shadow-sm flex items-center opacity-70">
              <span className="text-destructive font-bold mr-3 text-lg">
                ❌
              </span>
              <span className="text-destructive/80 line-through">
                {"const [open, setOpen] = useState()"}
              </span>
            </div>
          </div>
        </div>


        <div className="break-inside-avoid mb-6 rounded-[2rem] border border-border bg-card/20 p-4 md:p-10 flex flex-col group overflow-hidden relative hover:bg-card/40 transition-colors duration-500">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-all pointer-events-none transform group-hover:scale-110 group-hover:rotate-12 duration-700">
            <AccessibilityIcon className="w-56 h-56" />
          </div>
          <div className="relative z-10 space-y-4">
            <h3 className="text-2xl font-extrabold tracking-tight">
              Accessibility
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed">
              Semantic HTML, <code>aria-describedby</code> cho form, icon
              trang trí tự ẩn khỏi screen reader.{" "}
              <strong className="text-foreground">
                Chuẩn WCAG — không cần nghĩ thêm.
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

        <div className="break-inside-avoid mb-6 rounded-[2rem] border border-border bg-card/20 p-4 md:p-10 flex flex-col group overflow-hidden relative hover:bg-card/40 transition-colors duration-500">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-all pointer-events-none transform group-hover:scale-110 group-hover:rotate-12 duration-700">
            <DatabaseIcon className="w-56 h-56" />
          </div>
          <div className="relative z-10 space-y-4">
            <h3 className="text-2xl font-extrabold tracking-tight">
              Explicit State Contract
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed">
              Component công khai trạng thái qua <code>data-attributes</code>,
              không phải qua imperative ref. Bạn style và animate trực tiếp
              trên từng trạng thái, không cần JavaScript.{" "}
              <strong className="text-foreground">
                State là public API — tường minh và ổn định.
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
                <span className="text-destructive/60 line-through">
                  ref.current.isOpen
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="break-inside-avoid mb-6 rounded-[2rem] border border-border bg-card/20 p-4 md:p-10 flex flex-col group overflow-hidden relative hover:bg-card/40 transition-colors duration-500">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-all pointer-events-none transform group-hover:scale-110 group-hover:rotate-12 duration-700">
            <SlidersHorizontalIcon className="w-56 h-56" />
          </div>
          <div className="relative z-10 space-y-4">
            <h3 className="text-2xl font-extrabold tracking-tight">
              3-Layer Source Ownership
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed">
              Source được phân tầng: <code>micro/</code> (primitive không có
              layout cứng nhắc), <code>macro/</code> (preset lắp ráp có chủ
              đích), <code>index.css</code> (token toàn hệ thống).{" "}
              <strong className="text-foreground">
                Sửa ở tầng nào chỉ ảnh hưởng đến tầng đó.
              </strong>
            </p>
          </div>
          <div className="relative z-10 mt-auto pt-6 space-y-2">
            <div className="p-3 rounded-xl border border-border bg-background/60 text-[11px] font-mono flex items-center gap-3">
              <span className="text-destructive font-bold">CSS</span>
              <span className="text-muted-foreground">
                index.css — token toàn cục
              </span>
            </div>
            <div className="p-3 rounded-xl border border-border bg-background/60 text-[11px] font-mono flex items-center gap-3">
              <span className="text-warning font-bold">Macro</span>
              <span className="text-muted-foreground">
                macro/ — preset lắp ráp
              </span>
            </div>
            <div className="p-3 rounded-xl border border-border bg-background/60 text-[11px] font-mono flex items-center gap-3">
              <span className="text-success font-bold">Micro</span>
              <span className="text-muted-foreground">
                micro/ — primitive thuần
              </span>
            </div>
          </div>
        </div>

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

      <section className="mt-16 mb-16">
        <div className="rounded-[2.5rem] border border-warning/30 bg-warning/5 p-10 md:p-16 shadow-xl relative overflow-hidden group">
          <div className="absolute -top-10 -right-10 p-8 opacity-10 pointer-events-none group-hover:rotate-12 group-hover:scale-125 transition-all duration-1000 text-warning">
            <SparklesIcon className="size-64 md:size-[400px]" />
          </div>

          <div className="relative z-10 max-w-3xl mb-14 space-y-5">
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight text-warning">
              Scoped Theme Tunnel
            </h3>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Tooltip hay Dialog thường bị <strong className="text-foreground">mất theme (Dark/Light cục bộ)</strong> khi nhảy ra ngoài DOM tree qua cơ chế Portaling.
            </p>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Nhờ <strong>Zero-Portal API</strong>, khả năng giữ theme đã được nhúng sẵn vào các <code className="text-sm bg-warning/20 text-warning px-1.5 py-0.5 rounded">*Content</code> (VD: <code className="text-sm bg-warning/20 text-warning px-1.5 py-0.5 rounded">DialogContent</code>). Mọi thứ hoạt động trơn tru tự động, bạn không cần phải import hay bọc <code className="text-sm bg-warning/20 text-warning px-1.5 py-0.5 rounded">ThemeWrapper</code> thủ công nữa!
            </p>
          </div>

          <div className="relative z-10 grid sm:grid-cols-2 gap-6 max-w-3xl">
            <div className="p-6 rounded-2xl border border-success/30 bg-success/10 shadow-sm flex flex-col gap-2">
              <div className="text-success font-semibold text-lg flex items-center gap-2">
                ✅ gladvn
              </div>
              <p className="text-success/80 text-sm leading-relaxed">
                Tooltip, Dialog trong dark section luôn đúng màu — kể cả khi
                Portal render ra{" "}
                <code className="opacity-80">document.body</code>.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-destructive/30 bg-destructive/10 shadow-sm opacity-80 flex flex-col gap-2">
              <div className="text-destructive font-semibold text-lg flex items-center gap-2">
                ❌ Thư viện khác
              </div>
              <p className="text-destructive/80 text-sm leading-relaxed">
                Tooltip, Dialog "trắng lạc quẻ" — theme bị mất khi vượt Portal.
              </p>
            </div>
          </div>

          <div className="relative z-10 mt-10">
            <Button
              render={<a href="/dialog" />}
              nativeButton={false}
              variant="outline"
              color="warning"
              className="gap-2 font-bold px-6 py-5 rounded-xl border-warning/30 bg-warning/10 hover:bg-warning/20 shadow-sm"
            >
              Xem demo thực tế
              <ArrowRightIcon className="size-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
