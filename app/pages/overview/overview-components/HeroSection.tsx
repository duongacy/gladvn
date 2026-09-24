import { cn } from "@/lib/utils";
import { Container } from "~app/components/Container";
import { useI18n } from "~app/components/dev-context";

export function HeroSection({ className }: { className?: string }) {
  const t = useI18n();

  return (
    <section className={cn("w-full", className)}>
      <div className="flex flex-col items-start text-left">
        {/* Tagline — font mono, raw */}
        <p className="font-mono text-xs font-semibold uppercase tracking-widest text-foreground mb-8">
          {t(
            "Zero-Specificity · Defensive Context · AI-Native",
            "Zero-Specificity · Defensive Context · AI-Native"
          )}
        </p>

        {/* Headline — serif, static, two-tone */}
        <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-8">
          <span className="block">
            {t("Copy code thì dễ.", "Copying code is easy.")}
          </span>
          <span className="block mt-2 text-muted-foreground">
            {t("Giữ code không nát mới khó.", "Keeping it clean is hard.")}
          </span>
        </h1>

        {/* Description — body text, generous line-height */}
        <p className="text-lg md:text-xl leading-[1.8] text-foreground mb-10">
          {t(
            <>
              Việc copy-paste code UI (như Shadcn) thường dẫn đến một hệ thống không thể bảo trì sau 6 tháng. gladvn giải quyết triệt để vấn đề này bằng một kiến trúc cực đoan:{" "}
              <strong>Phân tầng Micro/Macro, Zero-Specificity CSS, và Phòng thủ ngữ cảnh (Defensive Context).</strong>
            </>,
            <>
              Copy-pasting UI code (like Shadcn) often leads to an unmaintainable system after 6 months. gladvn completely solves this with a radical architecture:{" "}
              <strong>Micro/Macro separation, Zero-Specificity CSS, and Defensive Context.</strong>
            </>
          )}
        </p>

        {/* Quote — raw blockquote, 6px left border */}
        <blockquote className="border-l-[6px] border-primary pl-6 py-1 my-4">
          <p className="text-lg md:text-xl italic text-muted-foreground leading-relaxed">
            {t(
              `"Một thư viện UI không yêu cầu học thuộc Docs để đè CSS, và cảnh báo thẳng vào console nếu component bị ráp sai."`,
              `"A UI library that requires no memorization of docs to override CSS, and throws console warnings if components are misassembled."`
            )}
          </p>
        </blockquote>
      </div>
    </section>
  );
}
