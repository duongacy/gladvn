import { useState } from "react";

import {
  ArrowRightIcon,
  CheckIcon,
  CodeIcon,
  CopyIcon,
  LayersIcon,
  SparklesIcon,
} from "lucide-react";
import { toast } from "sonner";

import { Button } from "../../components/micro/button";
import { Card, CardContent } from "../../components/micro/card";
import { useI18n } from "../../dev/components/dev-context";

export default function WhyGladvn() {
  const t = useI18n();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npx gladvn init");
    setCopied(true);
    toast.success(
      t("Đã copy lệnh vào clipboard", "Command copied to clipboard"),
    );
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-24 overflow-hidden pb-24 font-sans max-w-5xl mx-auto">
      <section className="relative pt-20 pb-16">
        <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(var(--primary-rgb),0.2),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(var(--primary-rgb),0.15),rgba(255,255,255,0))]" />

        <div className="container relative z-10 flex flex-col items-center text-center px-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-sm font-medium rounded-full border border-primary/20 bg-background/50 backdrop-blur-md shadow-sm">
            <SparklesIcon className="w-3.5 h-3.5 text-primary" />
            <span className="text-muted-foreground">
              {t("Tagline chính thức", "Official tagline")}
            </span>
          </div>

          <h1 className="max-w-4xl text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 leading-tight">
            <span className="block text-foreground drop-shadow-sm">
              Composable React components.
            </span>
            <span className="block mt-2 bg-linear-to-r from-primary via-info to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-[spin_8s_linear_infinite] [animation-name:gradient]">
              From primitive to preset — you choose.
            </span>
          </h1>

          <p className="max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            A CLI to scaffold beautiful, accessible React components. Built on
            Base UI + Tailwind CSS v4.
          </p>

          <div className="flex flex-col lg:flex-row items-center gap-4 p-2 lg:pr-6 mb-10 text-sm md:text-base font-bold rounded-[2rem] border-2 border-warning/40 bg-warning/10 text-warning-foreground shadow-sm max-w-fit mx-auto">
            <button
              onClick={handleCopy}
              className="bg-background/90 hover:bg-background border-border backdrop-blur-md px-6 py-4 rounded-[1.5rem] border hover:border-warning/50 transition-colors font-mono text-sm shadow-inner flex items-center gap-4 cursor-pointer group/copy"
            >
              <span className="text-warning font-bold">~</span>
              <span className="text-foreground">npx gladvn init</span>
              <div className="ml-4 text-muted-foreground group-hover/copy:text-warning transition-colors">
                {copied ? (
                  <CheckIcon className="size-4 text-success" />
                ) : (
                  <CopyIcon className="size-4" />
                )}
              </div>
            </button>
            <div className="flex items-center gap-2 px-2 pb-2 lg:pb-0 text-center">
              <span className="text-xl">⚠️</span>
              <span>IMPORTANT: NPX is required (Do not use npm install)</span>
            </div>
          </div>

          <div className="flex justify-center">
            <Button
              size="lg"
              className="h-14 px-8 rounded-2xl text-base"
              render={<a href="/" />}
            >
              {t("Xem Docs", "View Docs")}{" "}
              <ArrowRightIcon className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      </section>

      <section className="px-4">
        <div className="rounded-[2.5rem] border border-destructive/20 bg-destructive/5 p-8 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
            Most UI libraries force a choice:
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12">
            {t("Đau đầu với Low-level", "Headache with Low-level")}{" "}
            <span className="text-destructive font-bold">
              {t("HOẶC", "OR")}
            </span>{" "}
            {t("Bị gò bó bởi High-level.", "Constrained by High-level.")}
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
            <Card className="bg-background border-destructive/10">
              <CardContent className="p-6">
                <div className="text-destructive text-2xl mb-4">🔴</div>
                <h3 className="font-bold mb-2">
                  {t("Quá primitive", "Too primitive")}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {t(
                    "Bạn phải tự xây dựng mọi thứ từ đầu (như Radix UI thuần).",
                    "You have to build everything from scratch (like pure Radix UI).",
                  )}
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background border-destructive/10">
              <CardContent className="p-6">
                <div className="text-destructive text-2xl mb-4">🔴</div>
                <h3 className="font-bold mb-2">
                  {t("Quá opinionated", "Too opinionated")}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {t(
                    "Bạn phải chiến đấu với các preset mặc định (như MUI hay AntD).",
                    "You have to fight with default presets (like MUI or AntD).",
                  )}
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background border-destructive/10">
              <CardContent className="p-6">
                <div className="text-destructive text-2xl mb-4">🔴</div>
                <h3 className="font-bold mb-2">
                  {t("Không rõ ranh giới", "Unclear boundaries")}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {t(
                    "Codebase trở nên hỗn độn giữa style thuần và logic nghiệp vụ.",
                    "The codebase becomes a mess between pure styles and business logic.",
                  )}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="px-4 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            The Solution: Micro/Macro Architecture
          </h2>
          <p className="text-muted-foreground text-lg">
            {t(
              'Gladvn là thư viện React duy nhất phân tách rõ ràng giữa primitive "dumb" components và smart presets.',
              'Gladvn is the only React library that clearly separates primitive "dumb" components and smart presets.',
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-[2rem] border-2 border-primary/20 bg-primary/5 p-8 flex flex-col justify-between h-full">
            <div>
              <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-6">
                <CodeIcon className="size-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                {t(
                  "Micro: Xây dựng theo cách của bạn",
                  "Micro: Build it your way",
                )}
              </h3>
              <p className="text-muted-foreground mb-8">
                {t(
                  "Lắp ráp từng mảnh ghép để kiểm soát 100% UI.",
                  "Assemble every piece for 100% UI control.",
                )}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-background/80 border border-border font-mono text-sm text-muted-foreground shadow-inner">
              <span className="text-primary">{"<Button "}</span>
              <span className="text-info">variant=</span>
              <span className="text-success">"solid"</span>
              <span className="text-info"> color=</span>
              <span className="text-success">"primary"</span>
              <span className="text-primary">{">"}</span>
              <span className="text-foreground">
                {t("Xác nhận", "Confirm")}
              </span>
              <span className="text-primary">{"</Button>"}</span>
            </div>
          </div>

          <div className="rounded-[2rem] border-2 border-info/20 bg-info/5 p-8 flex flex-col justify-between h-full">
            <div>
              <div className="inline-flex p-3 rounded-xl bg-info/10 text-info mb-6">
                <LayersIcon className="size-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                {t(
                  "Macro: Triển khai thần tốc",
                  "Macro: Deploy blazingly fast",
                )}
              </h3>
              <p className="text-muted-foreground mb-8">
                {t(
                  "Dùng các preset làm sẵn để phát triển nhanh chóng.",
                  "Use ready-made presets for rapid development.",
                )}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-background/80 border border-border font-mono text-sm text-muted-foreground shadow-inner">
              <span className="text-primary">{"<InputPreset "}</span>
              <br />
              <span className="pl-4 text-info">label=</span>
              <span className="text-success">"Email"</span>
              <br />
              <span className="pl-4 text-info">error=</span>
              <span className="text-foreground">{"{errors.email}"}</span>
              <br />
              <span className="text-primary">{"/>"}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4">
        <h2 className="text-2xl font-bold mb-8 pl-4 border-l-4 border-primary">
          {t("Thêm lý do để chọn Gladvn", "More reasons to choose Gladvn")}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="hover:border-primary/50 transition-colors">
            <CardContent className="p-6 space-y-4">
              <div className="text-3xl font-black text-primary">45</div>
              <h3 className="font-bold text-lg">
                {t("Tổ hợp Component Styles", "Component Styles Combinations")}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t(
                  "9 Semantic Colors × 5 Variants. Tất cả đều nhất quán và accessibility-ready ngay từ đầu.",
                  "9 Semantic Colors × 5 Variants. All consistent and accessibility-ready from the start.",
                )}
              </p>
            </CardContent>
          </Card>
          <Card className="hover:border-primary/50 transition-colors">
            <CardContent className="p-6 space-y-4">
              <div className="text-3xl font-black text-success">Zero</div>
              <h3 className="font-bold text-lg">
                {t("Lỗi Portal Theming", "Portal Theming Bugs")}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t(
                  "Dialog, Tooltip tự động tunnel theme qua Portal. Không còn lỗi màu sắc trong overlay.",
                  "Dialog, Tooltip automatically tunnel theme through Portal. No more color bugs in overlays.",
                )}
              </p>
            </CardContent>
          </Card>
          <Card className="hover:border-primary/50 transition-colors">
            <CardContent className="p-6 space-y-4">
              <div className="text-3xl font-black text-info">AI</div>
              <h3 className="font-bold text-lg">
                {t("Thiết kế cho AI", "Designed for AI")}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t("File ", "The ")}
                <code>llms.txt</code>
                {t(
                  " và hệ thống data-attributes giúp AI hiểu và dùng component chuẩn xác.",
                  " file and data-attributes system help AI understand and use components accurately.",
                )}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">
          {t("So sánh nhanh", "Quick Comparison")}
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-border bg-card">
          <table className="w-full text-sm text-left">
            <thead className="bg-muted/50 text-muted-foreground">
              <tr>
                <th className="px-6 py-4 font-medium">Feature</th>
                <th className="px-6 py-4 font-bold text-primary">gladvn</th>
                <th className="px-6 py-4 font-medium">shadcn/ui</th>
                <th className="px-6 py-4 font-medium">MUI</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr className="hover:bg-muted/20">
                <td className="px-6 py-4 font-medium">Installation</td>
                <td className="px-6 py-4 font-mono text-xs">npx gladvn init</td>
                <td className="px-6 py-4 font-mono text-xs">
                  npx shadcn@latest init
                </td>
                <td className="px-6 py-4 font-mono text-xs">
                  npm install @mui/material
                </td>
              </tr>
              <tr className="hover:bg-muted/20">
                <td className="px-6 py-4 font-medium">Own your code</td>
                <td className="px-6 py-4">✅ Yes</td>
                <td className="px-6 py-4">✅ Yes</td>
                <td className="px-6 py-4">❌ npm</td>
              </tr>
              <tr className="hover:bg-muted/20 bg-primary/5">
                <td className="px-6 py-4 font-bold">Micro/Macro Arch</td>
                <td className="px-6 py-4 font-bold text-primary">✅ Yes</td>
                <td className="px-6 py-4">❌ No</td>
                <td className="px-6 py-4">⚠️ Partial</td>
              </tr>
              <tr className="hover:bg-muted/20">
                <td className="px-6 py-4 font-medium">Semantic colors</td>
                <td className="px-6 py-4">✅ 9 colors</td>
                <td className="px-6 py-4">⚠️ 2 colors</td>
                <td className="px-6 py-4">✅ Extensive</td>
              </tr>
              <tr className="hover:bg-muted/20">
                <td className="px-6 py-4 font-medium">Headless UI</td>
                <td className="px-6 py-4">Base UI (MUI)</td>
                <td className="px-6 py-4">Radix UI</td>
                <td className="px-6 py-4">Own</td>
              </tr>
              <tr className="hover:bg-muted/20">
                <td className="px-6 py-4 font-medium">Tailwind v4</td>
                <td className="px-6 py-4">✅ Native</td>
                <td className="px-6 py-4">✅ Native</td>
                <td className="px-6 py-4">❌ CSS-in-JS</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="rounded-[3rem] bg-foreground text-background p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.1),transparent)]" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-8">
              {t(
                "Sẵn sàng trải nghiệm khác biệt?",
                "Ready for a different experience?",
              )}
            </h2>
            <button
              onClick={handleCopy}
              className="bg-background text-foreground hover:bg-muted px-8 py-4 rounded-full font-mono text-base font-bold shadow-xl flex items-center gap-4 mx-auto transition-transform hover:scale-105"
            >
              <span>npx gladvn init</span>
              {copied ? (
                <CheckIcon className="size-5 text-success" />
              ) : (
                <CopyIcon className="size-5" />
              )}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
