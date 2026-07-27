import { ArrowRightIcon, CheckIcon, CopyIcon } from "lucide-react";
import { useState } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from "../../../components/micro/avatar";
import { Button } from "../../../components/micro/button";
import { Container } from "../../components/Container";

export function FooterCTA({ className }: { className?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npx gladvn init");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={className}>
      {/* 🤝 CONTRIBUTORS */}
      <Container as="section" className="mb-24">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight">
              Contributors
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              {
                name: "Ý Le",
                role: "Creator & Maintainer",
                avatar: "https://github.com/duongacy.png",
                url: "https://github.com/duongacy"
              },
            ].map((user) => (
              <a
                key={user.name}
                href={user.url}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center gap-3 p-4 rounded-2xl hover:bg-muted/50 transition-colors"
              >
                <Avatar className="size-16 border-2 border-transparent group-hover:border-primary/20 transition-all duration-300 group-hover:scale-105">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="text-lg bg-primary/5 text-primary">
                    {user.name.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <div className="font-semibold text-sm group-hover:text-primary transition-colors">
                    {user.name}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {user.role}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <Button
            variant="outline"
            className="mt-4 rounded-full"
            render={
              <a
                href="https://github.com/duongacy/gladvn"
                target="_blank"
                rel="noreferrer"
              />
            }
            nativeButton={false}
          >
            Đóng góp cùng chúng tôi
          </Button>
        </div>
      </Container>

      {/* 🚀 FINAL CTA */}
      <Container as="section">
        <div className="rounded-[2.5rem] border-2 border-primary/40 bg-linear-to-br from-primary/10 via-background to-info/5 p-10 md:p-16 shadow-2xl shadow-primary/5 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(var(--primary-rgb),0.15),transparent)] pointer-events-none" />
          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              30 giây là có đồ chơi.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Quẳng hết code vào{" "}
              <code className="text-sm bg-primary/20 text-primary px-1.5 py-0.5 rounded">
                src/
              </code>{" "}
              rồi xài thôi. Không config rườm rà, nhức đầu làm gì.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                onClick={handleCopy}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-2xl font-mono text-sm shadow-lg shadow-primary/20 flex items-center gap-4 cursor-pointer transition-all hover:scale-105 active:scale-95"
              >
                <span className="font-bold opacity-70">~</span>
                <span>npx gladvn init</span>
                <div className="ml-2">
                  {copied ? (
                    <CheckIcon className="size-4" />
                  ) : (
                    <CopyIcon className="size-4" />
                  )}
                </div>
              </button>
              <Button
                render={
                  <a
                    href="https://github.com/duongacy/gladvn"
                    target="_blank"
                    rel="noreferrer"
                  />
                }
                nativeButton={false}
                variant="ghost"
                className="text-muted-foreground hover:text-foreground"
              >
                Xem trên GitHub
                <ArrowRightIcon className="size-4 ml-1" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground pt-2">
              Tương thích npm, yarn, pnpm và bun. Hỗ trợ React 18+.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
