import { CheckIcon, CopyIcon, SparklesIcon } from "lucide-react";
import { useState } from "react";
import { Container } from "../../components/Container";
import { STATS } from "../../data";

export function PrinciplesSection({ className }: { className?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npx gladvn init");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={className}>
      <Container as="section" className="border-y border-y-border bg-muted/5 py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-primary/5 to-transparent animate-[pulse_4s_ease-in-out_infinite]" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x relative z-10">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center text-center space-y-2 group"
            >
              <div className="text-4xl md:text-5xl font-black tracking-tighter text-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-300">
                {s.value}
              </div>
              <div className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </Container>

      <Container as="section" className="space-y-12 mt-24">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Kiến trúc rành mạch. Sửa code không "đổ mồ hôi".
          </h2>
          <p className="text-muted-foreground text-lg">
            Nhiều dự án bắt đầu "bốc mùi" sau một thời gian — đụng vào đâu cũng sợ gãy, muốn sửa mà rén. gladvn chia code thành{" "}
            <strong className="text-foreground">các tầng rạch ròi</strong>
            {", "}giúp bạn luôn biết chính xác mình đang sửa cái gì, ảnh hưởng tới đâu. Tâm an, code mới nhàn!
          </p>
        </div>

        <div
          id="ownership-section"
          className="mb-12 rounded-[2.5rem] border-2 border-primary/50 bg-primary/5 p-4 sm:p-6 md:p-12 flex flex-col gap-10 group overflow-hidden relative hover:bg-primary/10 transition-colors duration-500 shadow-2xl shadow-primary/10"
        >
          <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
            <div className="relative z-10 flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-bold uppercase tracking-wider shadow-lg shadow-primary/20">
                <SparklesIcon className="size-4" /> Cốt lõi
              </div>
              <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                Code là của bạn, 100%
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
                Chạy một lệnh — toàn bộ component, hook, style, context được
                copy thẳng vào thư mục{" "}
                <code className="text-sm bg-primary/20 text-primary px-1.5 py-0.5 rounded">
                  src/
                </code>{" "}
                của bạn.{" "}
                <strong className="text-foreground">
                  Không qua node_modules. Không phụ thuộc vào ai.
                </strong>{" "}
                Đọc được, sửa được, xoá được từng dòng.
              </p>

              <div className="flex items-center gap-4 pt-2">
                <button
                  onClick={handleCopy}
                  className="bg-background/80 hover:bg-background border-border backdrop-blur-md px-6 py-4 rounded-2xl border hover:border-primary/50 transition-colors font-mono text-sm shadow-inner flex items-center gap-4 cursor-pointer group/copy"
                >
                  <span className="text-primary font-bold">~</span>
                  <span>npx gladvn init</span>
                  <div className="ml-4 text-muted-foreground group-hover/copy:text-primary transition-colors">
                    {copied ? (
                      <CheckIcon className="size-4 text-success" />
                    ) : (
                      <CopyIcon className="size-4" />
                    )}
                  </div>
                </button>
              </div>
            </div>

            <div className="relative z-10 w-full md:w-1/3 flex flex-col gap-4">
              <div className="p-3 sm:p-5 rounded-2xl border border-success/30 bg-success/10 shadow-sm flex items-start gap-4 transform group-hover:-translate-x-2 transition-transform">
                <div className="bg-success text-success-foreground p-2 rounded-full mt-1">
                  <CheckIcon className="size-4" />
                </div>
                <div>
                  <h4 className="font-bold text-success text-lg">
                    Toàn bộ Component & Hook
                  </h4>
                  <p className="text-xs text-success/80 mt-1">
                    Nằm gọn trong{" "}
                    <code className="opacity-80">
                      src/components/micro/ & macro/
                    </code>
                  </p>
                </div>
              </div>
              <div className="p-3 sm:p-5 rounded-2xl border border-success/30 bg-success/10 shadow-sm flex items-start gap-4 transform group-hover:translate-x-2 transition-transform">
                <div className="bg-success text-success-foreground p-2 rounded-full mt-1">
                  <CheckIcon className="size-4" />
                </div>
                <div>
                  <h4 className="font-bold text-success text-lg">
                    CSS Token & Theme Config
                  </h4>
                  <p className="text-xs text-success/80 mt-1">
                    OKLCH color tokens, dark/light mode — đẹp ngay từ đầu
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
