import { ArrowRightIcon, CheckIcon, CopyIcon } from "lucide-react";
import { useState } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from "@/components/micro/avatar";
import { Button } from "@/components/micro/button";
import { cn } from "@/lib/utils";
import { useI18n } from "~app/components/dev-context";

export function FooterCTA({ className }: { className?: string }) {
  const [copied, setCopied] = useState(false);
  const t = useI18n();

  const handleCopy = () => {
    navigator.clipboard.writeText("npx gladvn init");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("w-full", className)}>
      <section className="mb-16">
        <h2 className="font-serif text-4xl sm:text-5xl font-black mb-8 text-foreground tracking-tighter leading-tight">
          {t("4. Project Initialization", "4. Project Initialization")}
        </h2>
        <p className="text-lg leading-[1.8] text-muted-foreground mb-6">
          {t(
            "Tích hợp kiến trúc Gladvn vào dự án của bạn chỉ với một dòng lệnh. Không cấu hình ẩn, không đóng gói phức tạp. Source code được tải trực tiếp vào dự án, trao toàn quyền kiểm soát cho đội ngũ phát triển.",
            "Integrate the Gladvn architecture into your project with a single command. No hidden configurations, no complex bundling. Source code is downloaded directly into the project, giving full control to the development team."
          )}
        </p>

        <div className="bg-muted/10 border border-border p-1 flex items-center justify-between">
          <code className="font-mono text-sm px-4 text-foreground">~ npx gladvn init</code>
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-4 py-3 bg-muted hover:bg-muted/80 text-foreground transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <CheckIcon className="size-4" />
                <span className="text-xs font-medium uppercase tracking-wider">{t("Đã chép", "Copied")}</span>
              </>
            ) : (
              <>
                <CopyIcon className="size-4" />
                <span className="text-xs font-medium uppercase tracking-wider">{t("Chép lệnh", "Copy")}</span>
              </>
            )}
          </button>
        </div>
        <p className="text-xs text-muted-foreground mt-4 font-mono">
          {t("Tương thích npm, yarn, pnpm và bun. Yêu cầu React 18+.", "Compatible with npm, yarn, pnpm, and bun. Requires React 18+.")}
        </p>
      </section>

      <section className="pt-16 border-t border-border">
        <h2 className="font-serif text-2xl font-bold mb-8 text-foreground">
          {t("Tác giả & Đóng góp", "Authors & Contributors")}
        </h2>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="size-12 rounded-none border border-border">
              <AvatarImage src="https://github.com/duongacy.png" alt="Ý Le" />
              <AvatarFallback className="rounded-none bg-muted text-muted-foreground font-mono">
                YL
              </AvatarFallback>
            </Avatar>
            <div>
              <a 
                href="https://github.com/duongacy" 
                target="_blank" 
                rel="noreferrer"
                className="font-semibold text-foreground hover:underline underline-offset-4"
              >
                Ý Le
              </a>
              <div className="text-sm text-muted-foreground">
                {t("Research & Development (R&D)", "Research & Development")}
              </div>
            </div>
          </div>

          <Button
            variant="ghost"
            className="font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground rounded-none"
            render={
              <a
                href="https://github.com/duongacy/gladvn"
                target="_blank"
                rel="noreferrer"
              />
            }
            nativeButton={false}
          >
            {t("Mã nguồn GitHub", "GitHub Source")}
            <ArrowRightIcon className="size-4 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}
