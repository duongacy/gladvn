import { cn } from "@/lib/utils";
import { useI18n } from "~app/components/dev-context";

export function ArchitectureSection({ className }: { className?: string }) {
  const t = useI18n();

  const ARCHITECTURE_CARDS = [
    {
      tag: t("Lắp ghép linh hoạt", "Flexible assembly"),
      path: "src/blocks/",
      title: t("Blocks — Sân chơi tự do", "Blocks — The free playground"),
      desc: t(
        <>
          Không ai ép bạn phải dùng 100% Micro hay Macro. Layout quen thuộc? <strong className="text-foreground">Lấy Macro ra xài cho lẹ.</strong> Gặp thiết kế dị biệt? <strong className="text-foreground">Mở Micro ra tự xếp hình.</strong> Code sao cho bản thân thấy sướng là được!
        </>,
        <>
          Nobody forces you to use 100% Micro or Macro. Familiar layout? <strong className="text-foreground">Grab a Macro to be quick.</strong> Odd design? <strong className="text-foreground">Open Micro and build it yourself.</strong> Just code however makes you happy!
        </>
      ),
      colorScheme: "info"
    },
    {
      tag: t("Vùng an toàn", "Safe zone"),
      path: "src/components/macro/",
      title: t("Macro — Khu vực an toàn", "Macro — The safe zone"),
      desc: t(
        <>
          Muốn tuỳ chỉnh? Bắt đầu từ đây nhé. Mỗi Macro là một khối độc lập — thêm footer cho DatePicker, giấu nút đóng của Dialog...{" "}
          <strong className="text-foreground">Cứ thoải mái vọc</strong>
          , sửa cái nào chỉ ảnh hưởng cái đó thôi, chả lo "cháy nhà" hàng xóm.
        </>,
        <>
          Want to customize? Start here. Each Macro is an independent block — add a footer to a DatePicker, hide a Dialog's close button...{" "}
          <strong className="text-foreground">Feel free to tinker</strong>
          , changing one thing only affects itself, no fear of breaking the neighbors.
        </>
      ),
      colorScheme: "primary"
    },
    {
      tag: t("Cẩn thận", "Be careful"),
      path: "src/components/micro/",
      title: t("Micro — Lãnh địa cốt lõi", "Micro — The core territory"),
      desc: t(
        <>
          Mọi thứ đều xây từ đây. Sửa cái padding của Button hay animation của Tooltip thì{" "}
          <strong className="text-foreground">cả app sẽ ăn theo</strong>
          . Cân nhắc kỹ trước khi gõ phím nhé — "sai một ly đi một dặm" đấy!
        </>,
        <>
          Everything is built from here. Changing a Button's padding or a Tooltip's animation means{" "}
          <strong className="text-foreground">the whole app follows suit</strong>
          . Think twice before typing — one wrong move can break the layout globally!
        </>
      ),
      colorScheme: "warning"
    },
    {
      tag: t("Ảnh hưởng toàn cục", "Global impact"),
      path: "src/index.css",
      title: t("CSS Token — Nút bấm hạt nhân", "CSS Tokens — The nuclear button"),
      desc: t(
        <>
          Nơi quyết định màu sắc, font, độ bo góc. Đổi một biến ở đây là{" "}
          <strong className="text-foreground">giao diện lột xác toàn tập</strong>
          . Rất đã khi cần thay áo mới (rebrand) — nhưng đừng dùng để vá lỗi vặt.
        </>,
        <>
          Where colors, fonts, and border radii are determined. Change a variable here and the{" "}
          <strong className="text-foreground">entire UI transforms</strong>
          . Great for rebranding — but don't use it for quick localized fixes.
        </>
      ),
      colorScheme: "destructive"
    }
  ] as const;

  return (
    <div
      className={cn(
        "relative z-10 border-t border-primary/20 pt-8",
        className
      )}
    >
      <p className="text-sm font-bold uppercase tracking-wider text-primary mb-5">
        {t("Tuỳ chỉnh theo từng tầng kiến trúc", "Customization by architectural layers")}
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
