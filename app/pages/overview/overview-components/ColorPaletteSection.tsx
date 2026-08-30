import { PaletteIcon } from "lucide-react";
import { ColorSwatch } from "~app/components/showcase";
import { COLORS } from "~app/config/data";
import { Container } from "~app/components/Container";
import { useI18n } from "~app/components/dev-context";

export function ColorPaletteSection({ className }: { className?: string }) {
  const t = useI18n();
  return (
    <Container as="section" className={className}>
      <div className="rounded-[2.5rem] border border-border bg-card/30 p-10 md:p-16 shadow-xl relative overflow-hidden group">
        <div className="absolute -top-10 -right-10 p-8 opacity-5 pointer-events-none group-hover:rotate-12 group-hover:scale-125 transition-all duration-1000">
          <PaletteIcon className="size-64 md:size-100" />
        </div>

        <div className="relative z-10 max-w-3xl mb-14 space-y-5">
          <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            {t("Không gian màu OKLCH", "OKLCH Color Space")}
          </h3>
          <p className="text-muted-foreground text-xl leading-relaxed">
            {t(
              "Mọi token màu sắc được tính trên không gian OKLCH — chuyển sắc mượt, tương phản đạt WCAG AA/AAA trên mọi theme mà không cần định nghĩa thủ công từng dải màu.",
              "All color tokens are calculated in the OKLCH space — smooth gradients, WCAG AA/AAA contrast on all themes without manually defining every color scale."
            )}
          </p>
        </div>

        <div className="relative z-10 flex flex-wrap gap-6 md:gap-8 justify-center">
          {COLORS.map((c, i) => (
            <div
              key={c}
              className="animate-fade-up"
              style={{
                animationDelay: `${i * 50}ms`,
                animationFillMode: "both"
              }}
            >
              <ColorSwatch color={c} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
