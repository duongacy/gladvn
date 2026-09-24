import { COLORS, COLOR_INFO } from "~app/config/data";
import { cn } from "@/lib/utils";
import { useI18n } from "~app/components/dev-context";

const bgColorMap: Record<(typeof COLORS)[number], string> = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  destructive: "bg-destructive",
  warning: "bg-warning",
  success: "bg-success",
  info: "bg-info",
  tertiary: "bg-tertiary",
};

export function ColorPaletteSection({ className }: { className?: string }) {
  const t = useI18n();
  return (
    <section className={cn("w-full", className)}>
      <h2 className="font-serif text-4xl sm:text-5xl font-black mb-8 text-foreground tracking-tighter leading-tight">
        {t("Appendix: OKLCH Color Space", "Appendix: OKLCH Color Space")}
      </h2>
      <p className="text-lg leading-[1.8] text-muted-foreground mb-10">
        {t(
          "Mọi token màu sắc được tính toán trên không gian OKLCH, đảm bảo chuyển sắc mượt mà và duy trì tỷ lệ tương phản WCAG AA/AAA trên cả hai giao diện sáng/tối mà không cần định nghĩa thủ công từng dải màu.",
          "All color tokens are calculated in the OKLCH space, ensuring smooth gradients and maintaining WCAG AA/AAA contrast ratios on both light/dark themes without manually defining every color scale."
        )}
      </p>

      {/* Render an academic-looking table for the color palette */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm border-collapse">
          <thead>
            <tr className="border-b-2 border-foreground">
              <th className="py-3 font-semibold text-foreground w-32">{t("Mẫu", "Sample")}</th>
              <th className="py-3 font-semibold text-foreground">{t("Token CSS", "CSS Token")}</th>
              <th className="py-3 font-semibold text-foreground">{t("Mục đích sử dụng", "Intended Use")}</th>
            </tr>
          </thead>
          <tbody>
            {COLORS.map((c) => (
              <tr key={c} className="border-b border-border">
                <td className="py-3">
                  <div className={cn("w-12 h-6", bgColorMap[c])} />
                </td>
                <td className="py-3 font-mono text-muted-foreground">var(--{c})</td>
                <td className="py-3 capitalize text-muted-foreground">{COLOR_INFO[c].label}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
