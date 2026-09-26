import { cn } from "@/lib/utils";
import { useI18n } from "~app/components/dev-context";
import { STATS } from "~app/config/data";

export function PrinciplesSection({ className }: { className?: string }) {
  const t = useI18n();

  return (
    <section className={cn("w-full", className)}>
      <h2 className="font-serif text-4xl sm:text-5xl font-black mb-8 text-foreground tracking-tighter leading-tight">
        {t("Kiến trúc tường minh. Làm chủ mọi giao diện.", "Explicit architecture. Master any interface.")}
      </h2>
      <p className="text-lg leading-[1.8] text-muted-foreground mb-12">
        {t(
          "Sự phức tạp thường biến các dự án thành những mớ bòng bong. gladvn định hình source code thành các tầng chuyên biệt, giúp bạn nắm rõ từng dòng code và tác động của nó. Tối đa khả năng mở rộng, giảm thiểu rủi ro.",
          "Complexity often turns projects into unmanageable messes. gladvn shapes source code into specialized layers, helping you understand every line of code and its impact. Maximize scalability, minimize risk."
        )}
      </p>

      {/* Grid of stats acting as a data table header */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 border-y border-border py-10">
        {STATS.map((s) => (
          <div key={s.label} className="flex flex-col">
            <span className="font-serif text-4xl font-bold text-foreground mb-2">{s.value}</span>
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{s.label}</span>
          </div>
        ))}
      </div>

      <div className="space-y-6">
        <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
          {t("Sở hữu Code, Không sở hữu Nợ Kỹ Thuật", "Own the Code, Not the Tech-Debt")}
        </h3>
        <p className="text-lg leading-[1.8] text-muted-foreground">
          {t(
            <>Mô hình copy-paste mang lại quyền sở hữu code, nhưng thường đi kèm các file khổng lồ và cấu trúc CSS lộn xộn. gladvn thay đổi hoàn toàn điều đó bằng việc cung cấp thư mục <code className="font-mono text-sm bg-muted/50 px-1.5 py-0.5">src/components</code> được chuẩn hoá tuyệt đối bởi <strong>22 nguyên tắc kiến trúc nghiêm ngặt (22 Commandments)</strong>. Không Magic CSS. Không nội suy chuỗi. Minh bạch đến mức cực đoan.</>,
            <>The copy-paste model provides code ownership, but often entails bloated files and messy CSS architecture. gladvn changes this entirely by delivering a <code className="font-mono text-sm bg-muted/50 px-1.5 py-0.5">src/components</code> folder strictly standardized by <strong>22 rigorous architectural commandments</strong>. Absolutely no "Magic CSS". No string interpolation. Radically transparent.</>
          )}
        </p>
        
        {/* Terminal block disguised as a paper figure */}
        <figure className="mt-8">
          <figcaption className="font-mono text-xs text-muted-foreground mb-2">
            {t("CLI Initialization", "CLI Initialization")}
          </figcaption>
          <div className="bg-muted/10 border border-border p-6 font-mono text-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-foreground font-semibold">~ npx gladvn init</span>
            <div className="flex gap-4 text-xs text-muted-foreground">
              <span>[✓] Components & Hooks</span>
              <span>[✓] CSS Tokens</span>
            </div>
          </div>
        </figure>

        {/* Intentional Friction Block */}
        <div className="pt-12 space-y-6">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
            {t("Lực cản có chủ đích", "Intentional Friction")}
          </h3>
          <p className="text-lg leading-[1.8] text-muted-foreground">
            {t(
              <>Dễ dàng tuỳ biến, nhưng khó để "vô tình" phá vỡ. Các giá trị cấu trúc (Padding, Gap, Layout) được bảo vệ chặt chẽ bởi độ ưu tiên của <strong>group-data</strong> modifiers. Khi bạn muốn bẻ cong luật lệ, hệ thống không khoá chết bạn, nhưng buộc bạn phải khai báo tường minh (<code className="font-mono text-sm bg-muted/50 px-1.5 py-0.5 whitespace-nowrap">group-data-[size=sm]/comp:pl-10</code>). Một "Gờ giảm tốc nhận thức" (Cognitive Speedbump) hoàn hảo để bảo vệ Design System khỏi sự cẩu thả.</>,
              <>Easy to customize, hard to break accidentally. Structural values (Padding, Gap, Layout) are strictly protected by the specificity of <strong>group-data</strong> modifiers. When you want to bend the rules, the system doesn't lock you out, but forces you to declare it explicitly (<code className="font-mono text-sm bg-muted/50 px-1.5 py-0.5 whitespace-nowrap">group-data-[size=sm]/comp:pl-10</code>). A perfect "Cognitive Speedbump" to protect your Design System from careless overrides.</>
            )}
          </p>
          <p className="text-lg leading-[1.8] text-muted-foreground">
            {t(
              <>Ngược lại, thẻ Icon lại được hưởng đặc quyền tự do tuyệt đối. Bằng ma thuật <strong>:where(...)</strong>, độ ưu tiên của icon bị ép về đúng bằng 0, cho phép đè size tức thì mà không bao giờ cần <code className="font-mono text-sm bg-muted/50 px-1.5 py-0.5 whitespace-nowrap">!important</code>. Nhường quyền linh hoạt đúng chỗ, siết chặt kỷ luật đúng lúc.</>,
              <>Conversely, Icons enjoy absolute freedom. Through the magic of <strong>:where(...)</strong>, icon specificity is crushed to exactly 0, allowing instant size overrides without a single <code className="font-mono text-sm bg-muted/50 px-1.5 py-0.5 whitespace-nowrap">!important</code> tag. Yielding flexibility where needed, enforcing discipline where it matters.</>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
