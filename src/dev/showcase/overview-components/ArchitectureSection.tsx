import { cn } from "../../../lib/utils";

const ARCHITECTURE_CARDS = [
  {
    tag: "Nên bắt đầu ở đây",
    path: "src/components/macro/",
    title: "Macro — Khu vực an toàn",
    desc: (
      <>
        Muốn tuỳ chỉnh? Bắt đầu từ đây nhé. Mỗi Macro là một khối độc lập — thêm footer cho DatePicker, giấu nút đóng của Dialog...{" "}
        <strong className="text-foreground">Cứ thoải mái vọc</strong>
        , sửa cái nào chỉ ảnh hưởng cái đó thôi, chả lo "cháy nhà" hàng xóm.
      </>
    ),
    colorScheme: "primary"
  },
  {
    tag: "Cẩn thận",
    path: "src/components/micro/",
    title: "Micro — Lãnh địa cốt lõi",
    desc: (
      <>
        Mọi thứ đều xây từ đây. Sửa cái padding của Button hay animation của Tooltip thì{" "}
        <strong className="text-foreground">cả app sẽ ăn theo</strong>
        . Cân nhắc kỹ trước khi gõ phím nhé — "sai một ly đi một dặm" đấy!
      </>
    ),
    colorScheme: "warning"
  },
  {
    tag: "Ảnh hưởng toàn cục",
    path: "src/index.css",
    title: "CSS Token — Nút bấm hạt nhân",
    desc: (
      <>
        Nơi quyết định màu sắc, font, độ bo góc. Đổi một biến ở đây là{" "}
        <strong className="text-foreground">giao diện lột xác toàn tập</strong>
        . Rất đã khi cần thay áo mới (rebrand) — nhưng đừng dùng để vá lỗi vặt.
      </>
    ),
    colorScheme: "destructive"
  },
  {
    tag: "Lắp ghép linh hoạt",
    path: "src/blocks/",
    title: "Blocks — Sân chơi tự do",
    desc: (
      <>
        Không ai ép bạn phải dùng 100% Micro hay Macro. Layout quen thuộc? <strong className="text-foreground">Lấy Macro ra xài cho lẹ.</strong> Gặp thiết kế dị biệt? <strong className="text-foreground">Mở Micro ra tự xếp hình.</strong> Code sao cho bản thân thấy sướng là được!
      </>
    ),
    colorScheme: "info"
  }
] as const;

export function ArchitectureSection({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative z-10 border-t border-primary/20 pt-8",
        className
      )}
    >
      <p className="text-sm font-bold uppercase tracking-wider text-primary mb-5">
        Tuỳ chỉnh theo từng tầng kiến trúc
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {ARCHITECTURE_CARDS.map((card, idx) => {
          const isPrimary = card.colorScheme === "primary";
          const isWarning = card.colorScheme === "warning";
          const isDestructive = card.colorScheme === "destructive";
          const isInfo = card.colorScheme === "info";

          return (
            <div
              key={idx}
              className={cn(
                "p-5 pt-10 rounded-2xl space-y-3 relative",
                {
                  "border-2 border-primary/40 bg-primary/5": isPrimary,
                  "border border-warning/40 bg-warning/5": isWarning,
                  "border border-destructive/30 bg-destructive/5": isDestructive,
                  "border border-info/40 bg-info/5": isInfo
                }
              )}
            >
              <div
                className={cn(
                  "absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full",
                  {
                    "text-primary bg-primary/10": isPrimary,
                    "text-warning bg-warning/10": isWarning,
                    "text-destructive bg-destructive/10": isDestructive,
                    "text-info bg-info/10": isInfo
                  }
                )}
              >
                {card.tag}
              </div>
              <div
                className={cn(
                  "font-mono text-xs",
                  {
                    "text-primary/70": isPrimary,
                    "text-warning/70": isWarning,
                    "text-destructive/60": isDestructive,
                    "text-info/70": isInfo
                  }
                )}
              >
                {card.path}
              </div>
              <h4 className="font-bold text-foreground text-base">
                {card.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {card.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
