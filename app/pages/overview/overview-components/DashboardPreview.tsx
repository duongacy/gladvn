import { cn } from "@/lib/utils";
import { useI18n } from "~app/components/dev-context";

export function DashboardPreview({ className }: { className?: string }) {
  const t = useI18n();

  return (
    <section className={cn("w-full", className)}>
      <figure className="mt-12 relative w-full">
        <figcaption className="font-mono text-xs text-muted-foreground mb-4">
          {t("Defensive Component System", "Defensive Component System")}
        </figcaption>
        
        {/* Strict 2D layout without any 3D transforms or gradients */}
        <div className="border border-border p-8 bg-background flex flex-col md:flex-row gap-8 items-start">
          
          <div className="flex-1 space-y-6 w-full">
            <div className="border-b border-border pb-2">
              <h4 className="font-semibold text-sm">
                {t("System Compliance", "System Compliance")}
              </h4>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between text-sm font-medium">
                <span className="text-muted-foreground">{t("a11y Compliance (WCAG)", "a11y Compliance (WCAG)")}</span>
                <span className="font-mono">100%</span>
              </div>
              <div className="h-[6px] bg-muted-foreground/20 w-full overflow-hidden">
                <div className="h-full bg-foreground w-full" />
              </div>

              <div className="flex justify-between text-sm font-medium pt-2">
                <span className="text-muted-foreground">{t("Độ phủ Test", "Test Coverage")}</span>
                <span className="font-mono">92%</span>
              </div>
              <div className="h-[6px] bg-muted-foreground/20 w-full overflow-hidden">
                <div className="h-full bg-foreground w-[92%]" />
              </div>
            </div>
          </div>

          <div className="flex-1 w-full space-y-6">
            <div className="p-4 border border-border bg-muted/20">
              <h4 className="font-semibold text-sm mb-1">
                {t("Kiến trúc Micro/Macro", "Micro/Macro Architecture")}
              </h4>
              <p className="text-xs text-muted-foreground">
                {t("Lắp ráp các phần tử nguyên thủy thành cấu trúc tĩnh.", "Assemble primitive elements into static structures.")}
              </p>
            </div>
            
            <div className="p-4 border border-border bg-muted/20">
              <h4 className="font-semibold text-sm mb-1">
                {t("Data-driven", "Data-driven")}
              </h4>
              <p className="text-xs text-muted-foreground">
                {t("Đầu vào khắt khe, loại bỏ logic render thủ công.", "Strict input, eliminate manual render logic.")}
              </p>
            </div>
          </div>
          
        </div>
      </figure>
    </section>
  );
}
