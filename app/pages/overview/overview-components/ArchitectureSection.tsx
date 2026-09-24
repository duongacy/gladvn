import { cn } from "@/lib/utils";
import { useI18n } from "~app/components/dev-context";

export function ArchitectureSection({ className }: { className?: string }) {
  const t = useI18n();

  const ARCHITECTURE_LAYERS = [
    {
      tag: "src/blocks/",
      title: t("Blocks — Lắp ghép linh hoạt", "Blocks — Flexible assembly"),
      desc: t(
        <>Không ai ép bạn phải dùng 100% Micro hay Macro. Layout quen thuộc? Lấy Macro ra xài cho lẹ. Gặp thiết kế dị biệt? Mở Micro ra tự xếp hình. Code sao cho bản thân thấy sướng là được!</>,
        <>Nobody forces you to use 100% Micro or Macro. Familiar layout? Grab a Macro to be quick. Odd design? Open Micro and build it yourself. Just code however makes you happy!</>
      ),
    },
    {
      tag: "src/components/macro/",
      title: t("Macro — Vùng an toàn", "Macro — The safe zone"),
      desc: t(
        <>Muốn tuỳ chỉnh? Bắt đầu từ đây nhé. Mỗi Macro là một khối độc lập — thêm footer cho DatePicker, giấu nút đóng của Dialog... Cứ thoải mái vọc, sửa cái nào chỉ ảnh hưởng cái đó thôi, chả lo "cháy nhà" hàng xóm.</>,
        <>Want to customize? Start here. Each Macro is an independent block — add a footer to a DatePicker, hide a Dialog's close button... Feel free to tinker, changing one thing only affects itself, no fear of breaking the neighbors.</>
      ),
    },
    {
      tag: "src/components/micro/",
      title: t("Micro — Lãnh địa cốt lõi", "Micro — The core territory"),
      desc: t(
        <>Mọi thứ đều xây từ đây. Sửa cái padding của Button hay animation của Tooltip thì <strong>cả app sẽ ăn theo</strong>. Cân nhắc kỹ trước khi gõ phím nhé — "sai một ly đi một dặm" đấy!</>,
        <>Everything is built from here. Changing a Button's padding or a Tooltip's animation means <strong>the whole app follows suit</strong>. Think twice before typing — one wrong move can break the layout globally!</>
      ),
    },
    {
      tag: "src/index.css",
      title: t("CSS Token — Ảnh hưởng toàn cục", "CSS Tokens — Global impact"),
      desc: t(
        <>Nơi quyết định màu sắc, font, độ bo góc. Đổi một biến ở đây là <strong>giao diện lột xác toàn tập</strong>. Rất đã khi cần thay áo mới (rebrand) — nhưng đừng dùng để vá lỗi vặt.</>,
        <>Where colors, fonts, and border radii are determined. Change a variable here and the <strong>entire UI transforms</strong>. Great for rebranding — but don't use it for quick localized fixes.</>
      ),
    }
  ] as const;

  return (
    <section className={cn("w-full", className)}>
      <h2 className="font-serif text-4xl sm:text-5xl font-black mb-8 text-foreground tracking-tighter leading-tight">
        {t("1. Architectural Layers", "1. Architectural Layers")}
      </h2>
      <div className="space-y-10">
        {ARCHITECTURE_LAYERS.map((layer, idx) => (
          <div key={idx} className="space-y-2">
            <h3 className="font-semibold text-xl text-foreground">
              {layer.title}
            </h3>
            <p className="font-mono text-xs text-muted-foreground mb-2">
              {layer.tag}
            </p>
            <p className="text-lg leading-[1.8] text-muted-foreground">
              {layer.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
