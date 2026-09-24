import { CodeIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "~app/components/Container";
import { useI18n } from "~app/components/dev-context";

export function HeroSection({ className }: { className?: string }) {
  const t = useI18n();

  return (
    <section className={cn("relative pt-20 pb-32", className)}>
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(var(--primary-rgb),0.2),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(var(--primary-rgb),0.15),rgba(255,255,255,0))]" />

      <div className="absolute top-0 inset-x-0 flex justify-center -z-10 pointer-events-none opacity-50 dark:opacity-40 blur-[100px]">
        <div
          className="w-120 h-80 bg-primary/40 rounded-full mix-blend-multiply animate-pulse"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="w-80 h-60 bg-info/30 rounded-full mix-blend-multiply animate-pulse absolute top-10"
          style={{ animationDuration: "10s" }}
        />
      </div>

      <Container className="relative z-10 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-sm font-medium rounded-full border border-primary/20 bg-background/50 backdrop-blur-md shadow-sm animate-fade-up">
          <CodeIcon className="w-3.5 h-3.5 text-primary" />
          <span className="text-muted-foreground">
            {t(
              "Zero-Specificity · Defensive Context · AI-Native",
              "Zero-Specificity · Defensive Context · AI-Native"
            )}
          </span>
        </div>

        <h1
          className="max-w-4xl text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 animate-fade-up"
          style={{ animationDelay: "100ms", animationFillMode: "both" }}
        >
          <span className="block text-foreground drop-shadow-sm">
            {t("Copy code thì dễ.", "Copying code is easy.")}
          </span>
          <span className="block mt-2 bg-linear-to-r leading-[1.2] from-primary via-info to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-[spin_8s_linear_infinite] [animation-name:gradient] [animation-duration:8s] [animation-timing-function:linear] [animation-iteration-count:infinite]">
            {t("Giữ code không nát mới khó.", "Keeping it clean is hard.")}
          </span>
        </h1>

        <p
          className="max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 animate-fade-up"
          style={{ animationDelay: "200ms", animationFillMode: "both" }}
        >
          {t(
            <>
              Việc copy-paste code UI (như Shadcn) thường dẫn đến một hệ thống không thể bảo trì sau 6 tháng. gladvn giải quyết triệt để vấn đề này bằng một kiến trúc cực đoan:{" "}
              <strong className="text-foreground">Phân tầng Micro/Macro, Zero-Specificity CSS, và Phòng thủ ngữ cảnh (Defensive Context).</strong>
            </>,
            <>
              Copy-pasting UI code (like Shadcn) often leads to an unmaintainable system after 6 months. gladvn completely solves this with a radical architecture:{" "}
              <strong className="text-foreground">Micro/Macro separation, Zero-Specificity CSS, and Defensive Context.</strong>
            </>
          )}
        </p>

        <div
          className="max-w-2xl text-lg md:text-xl font-medium text-foreground/90 italic mt-2 p-5 border-l-4 border-primary bg-primary/5 rounded-r-xl shadow-sm animate-fade-up"
          style={{ animationDelay: "300ms", animationFillMode: "both" }}
        >
          {t(
            `"Một thư viện UI không yêu cầu học thuộc Docs để đè CSS, và cảnh báo thẳng vào console nếu component bị ráp sai."`,
            `"A UI library that requires no memorization of docs to override CSS, and throws console warnings if components are misassembled."`
          )}
        </div>
      </Container>
    </section>
  );
}
