import { cn } from "@/lib/utils";
import { useI18n } from "~app/components/dev-context";

export function FeatureGridSection({ className }: { className?: string }) {
  const t = useI18n();

  const FEATURES = [
    {
      title: t("Defensive Context", "Defensive Context"),
      desc: t(
        <>Sử dụng React Context nghiêm ngặt. Nếu một phần tử con (như <code>SelectContent</code>) bị đặt sai vị trí bên ngoài phần tử cha (<code>SelectRoot</code>), hệ thống sẽ chủ động ném cảnh báo thay vì render sai lệch.</>,
        <>Enforces strict React Context boundaries. If a child element (like <code>SelectContent</code>) is misplaced outside its parent (<code>SelectRoot</code>), the system proactively throws a warning instead of rendering incorrectly.</>
      ),
      example: (
        <div className="mt-3 p-3 bg-muted/10 border border-border font-mono text-sm space-y-1">
          <div className="text-destructive font-semibold">Error: SelectContent must be used within a SelectRoot</div>
          <div className="text-muted-foreground opacity-70 text-xs">
            at SelectContent (src/components/micro/select.tsx:102)
          </div>
        </div>
      )
    },
    {
      title: t("Strict Layout Delegation", "Strict Layout Delegation"),
      desc: t(
        <>Micro component tuyệt đối không chứa class định hình layout (như <code>w-full</code>, <code>margin</code>). Việc dàn trang được delegate hoàn toàn cho tầng Macro hoặc Container bên ngoài.</>,
        <>Micro components strictly forbid layout-defining classes (like <code>w-full</code>, <code>margin</code>). Layout composition is fully delegated to the Macro layer or external Containers.</>
      ),
      example: (
        <div className="mt-3 p-3 bg-muted/10 border border-border font-mono text-sm space-y-1 overflow-x-auto">
          <div className="text-muted-foreground text-xs mb-2">{"// Tầng Macro quyết định layout cho các Micro con"}</div>
          <div className="text-foreground">{"<ConfirmFooter>"}</div>
          <div className="text-foreground pl-4">{"<Button variant=\"ghost\">Hủy</Button>"}</div>
          <div className="text-foreground pl-4 font-bold border-b border-dashed border-foreground inline-block">{"<Button className=\"ml-auto\">Xác nhận</Button>"}</div>
          <div className="text-foreground">{"</ConfirmFooter>"}</div>
        </div>
      )
    },
    {
      title: t("Zero-Specificity với :where()", "Zero-Specificity with :where()"),
      desc: t(
        <>Sử dụng pseudo-class <code>:where()</code> để ép Specificity của các style nội tại (như kích thước icon) về 0. Cho phép Tailwind đè style từ bên ngoài mà không bao giờ cần dùng <code>!important</code>.</>,
        <>Utilizes the <code>:where()</code> pseudo-class to reduce the Specificity of internal styles (like icon sizes) to 0. Allows external Tailwind overrides without ever needing <code>!important</code>.</>
      ),
      example: (
        <div className="mt-3 grid sm:grid-cols-2 gap-3 font-mono text-sm">
          <div className="p-3 border border-border bg-muted/5 text-destructive line-through opacity-70">
            [&gt;svg]:w-4
          </div>
          <div className="p-3 border border-border bg-muted/10 text-foreground font-semibold">
            [:where(&amp;&gt;svg)]:w-4
          </div>
        </div>
      )
    },
    {
      title: t("Style Encapsulation", "Style Encapsulation"),
      desc: t(
        <>Style của component không rò rỉ. Muốn override phải thông qua <code>data-slot</code> — một public contract tường minh.</>,
        <>Component styles do not leak. Customization requires <code>data-slot</code> — an explicit public contract.</>
      ),
      example: (
        <div className="mt-3 grid sm:grid-cols-2 gap-3 font-mono text-sm">
          <div className="p-3 border border-border bg-muted/5 text-destructive line-through opacity-70">
            [&gt;div&gt;span]:text-red-500
          </div>
          <div className="p-3 border border-border bg-muted/10 text-foreground font-semibold">
            [&amp;_[data-slot=icon]]:text-red-500
          </div>
        </div>
      )
    },
    {
      title: t("Variant × Color Independence", "Variant × Color Independence"),
      desc: t(
        <>Variant (solid, outline...) và Color (primary, warning...) là hai trục vuông góc. Có thể tự do mix mà không làm phình codebase.</>,
        <>Variant (solid, outline...) and Color (primary, warning...) are orthogonal axes. Combination does not bloat the codebase.</>
      ),
      example: (
        <div className="mt-3 p-3 bg-muted/10 border border-border font-mono text-sm space-y-1 overflow-x-auto">
           <div className="text-foreground">{"<Button variant=\"outline\" color=\"primary\" />"}</div>
           <div className="text-foreground">{"<Button variant=\"outline\" color=\"destructive\" />"}</div>
        </div>
      )
    },
    {
      title: t("Zero-prop Defaults", "Zero-prop Defaults"),
      desc: t(
        <>Component render hợp lệ ngay cả khi không truyền prop. Giảm tải cognitive load cho lập trình viên.</>,
        <>Components render validly even with no props. Reduces cognitive load for developers.</>
      ),
      example: (
        <div className="mt-3 p-3 bg-muted/10 border border-border font-mono text-sm space-y-2 overflow-x-auto">
          <div className="text-foreground font-semibold">{"<Button>Click Me</Button>"}</div>
          <div className="text-muted-foreground line-through opacity-70">{"<Button variant=\"solid\" color=\"primary\" size=\"md\">Click Me</Button>"}</div>
        </div>
      )
    },
    {
      title: t("Polymorphism", "Polymorphism"),
      desc: t(
        <>Sử dụng <code>render</code> prop thay vì <code>asChild</code> để thay đổi gốc DOM một cách triệt để.</>,
        <>Use the <code>render</code> prop instead of <code>asChild</code> for absolute DOM root substitution.</>
      ),
      example: (
        <div className="mt-3 grid sm:grid-cols-2 gap-3 font-mono text-sm">
          <div className="p-3 border border-border bg-muted/5 text-destructive line-through opacity-70 overflow-x-auto">
            {"<Button asChild><Link/></Button>"}
          </div>
          <div className="p-3 border border-border bg-muted/10 text-foreground font-semibold overflow-x-auto">
            {"<Button render={<Link />} />"}
          </div>
        </div>
      )
    },
    {
      title: t("Explicit State Contract", "Explicit State Contract"),
      desc: t(
        <>State được expose qua <code>data-[state]</code>, cho phép định nghĩa CSS trực tiếp mà không cần imperative hooks.</>,
        <>State is exposed via <code>data-[state]</code>, allowing direct CSS definition without imperative hooks.</>
      ),
      example: (
        <div className="mt-3 p-3 bg-muted/10 border border-border font-mono text-sm space-y-1">
          <div className="text-foreground font-semibold">{"data-[state=open]:rotate-180"}</div>
          <div className="text-foreground font-semibold">{"data-disabled:opacity-50"}</div>
          <div className="text-destructive line-through opacity-70 border-t border-border mt-2 pt-2">{"ref.current.isOpen ? 'rotate-180' : ''"}</div>
        </div>
      )
    }
  ];

  return (
    <section className={cn("w-full", className)}>
      <h2 className="font-serif text-4xl sm:text-5xl font-black mb-8 text-foreground tracking-tighter leading-tight">
        {t("3. Methodology Specifications", "3. Methodology Specifications")}
      </h2>
      <p className="text-lg leading-[1.8] text-muted-foreground mb-10">
        {t(
          "Các đặc điểm kỹ thuật đảm bảo tính nhất quán của hệ thống Gladvn.",
          "Technical specifications ensuring the consistency of the Gladvn system."
        )}
      </p>

      <ul className="space-y-12">
        {FEATURES.map((feat, i) => (
          <li key={i} className="pl-6 border-l-2 border-muted">
            <h4 className="font-semibold text-foreground text-lg mb-1">{feat.title}</h4>
            <p className="text-muted-foreground leading-relaxed">{feat.desc}</p>
            {feat.example}
          </li>
        ))}
      </ul>

      <div className="mt-16 pt-16 border-t border-border">
        <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
          {t("Ghi chú về Scoped Theme Tunnel", "Note on Scoped Theme Tunnel")}
        </h3>
        <p className="text-lg leading-[1.8] text-muted-foreground">
          {t(
            <>Các phần tử thoát khỏi cây DOM (Portals) như Tooltip và Dialog thường mất ngữ cảnh giao diện. Gladvn sử dụng <strong>Zero-Portal API</strong> để truyền tải (tunnel) chủ đề trực tiếp vào các thành phần nội dung (<code className="bg-muted px-1">Content</code>), loại bỏ nhu cầu bọc bằng <code className="bg-muted px-1">ThemeWrapper</code>.</>,
            <>Elements escaping the DOM tree (Portals) like Tooltips and Dialogs often lose theme context. Gladvn utilizes the <strong>Zero-Portal API</strong> to tunnel themes directly into content components (<code className="bg-muted px-1">Content</code>), eliminating the need for a <code className="bg-muted px-1">ThemeWrapper</code>.</>
          )}
        </p>
      </div>
    </section>
  );
}
