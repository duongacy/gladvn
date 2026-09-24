import { cn } from "@/lib/utils";
import { useI18n } from "~app/components/dev-context";

export function TragediesSection({ className }: { className?: string }) {
  const t = useI18n();

  return (
    <section className={cn("w-full", className)}>
      <h2 className="font-serif text-4xl sm:text-5xl font-black mb-8 text-foreground tracking-tighter leading-tight">
        {t("2. Practical Traps", "2. Practical Traps")}
      </h2>
      <p className="text-lg leading-[1.8] text-muted-foreground mb-10">
        {t(
          "Những câu chuyện có thật từ chiến trường Frontend — và cách triết lý phân tầng giải cứu hệ thống.",
          "True stories from the Frontend battlefield — and how the layered philosophy saves the system."
        )}
      </p>

      <div className="space-y-12">
        {/* Tragedy 1 */}
        <div>
          <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
            {t("2.1. Quái vật God Component", "2.1. The God Component Monster")}
          </h3>
          <div className="text-lg leading-[1.8] text-muted-foreground space-y-4">
            <p>
              {t(
                <>Bạn cần một Select. Dùng thư viện X, viết một dòng <code>{"<Select options={data} />"}</code> — chạy tốt! Rồi requirement thay đổi: "Đổi nút Clear thành icon thùng rác, thêm avatar kế bên mỗi option".</>,
                <>You need a Select. Using library X, you write <code>{"<Select options={data} />"}</code> — works great! Then the requirement changes: "Change the Clear button to a trash icon, add an avatar next to each option".</>
              )}
            </p>
            <p>
              {t(
                <>Component phình to với 47 cái props. Khi thiếu prop cho một trạng thái cụ thể, bạn buộc phải dùng CSS <code>!important</code> để đè từ bên ngoài.</>,
                <>The component bloats with 47 props. When lacking a prop for a specific state, you are forced to use CSS <code>!important</code> to override it from the outside.</>
              )}
            </p>
            <blockquote className="border-l-2 border-border pl-6 italic text-foreground mt-4">
              {t(
                <><strong>Giải pháp:</strong> Tầng Micro tách biệt, cung cấp từng mảnh Lego riêng lẻ (Trigger, Item). Nếu lười, tầng Macro cung cấp Preset lắp sẵn.</>,
                <><strong>Solution:</strong> The isolated Micro layer provides individual Lego pieces (Trigger, Item). If you are lazy, the Macro layer provides pre-assembled Presets.</>
              )}
            </blockquote>
          </div>
        </div>

        {/* Tragedy 2 */}
        <div>
          <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
            {t("2.2. Locked State", "2.2. Locked State")}
          </h3>
          <div className="text-lg leading-[1.8] text-muted-foreground space-y-4">
            <p>
              {t(
                <>Một Accordion mở/đóng mượt mà. Tuy nhiên, component quá "thông minh" — ôm khư khư <code>useState</code> bên trong và không cho can thiệp từ ngoài. Kết quả: phải dùng <code>useRef</code> gọi <code>.click()</code> một cách thủ công.</>,
                <>An Accordion opens and closes smoothly. However, the component is too "smart" — it hugs <code>useState</code> internally and prevents outside intervention. Result: forcing <code>useRef</code> to call <code>.click()</code> manually.</>
              )}
            </p>
            <blockquote className="border-l-2 border-border pl-6 italic text-foreground mt-4">
              {t(
                <><strong>Giải pháp:</strong> Micro component hoàn toàn "Ngu" (Stateless). Trạng thái thuộc về Headless UI hoặc Macro.</>,
                <><strong>Solution:</strong> Micro components are completely "Dumb" (Stateless). State belongs to Headless UI or Macro.</>
              )}
            </blockquote>
          </div>
        </div>

        {/* Tragedy 3 */}
        <div>
          <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
            {t("2.3. The 'Forcing It' Syndrome", "2.3. The 'Forcing It' Syndrome")}
          </h3>
          <div className="text-lg leading-[1.8] text-muted-foreground space-y-4">
            <p>
              {t(
                <>Sử dụng <code>Card</code> component cho một thiết kế dị biệt (ảnh tràn viền, text đè chéo). Bạn ghi đè 80% style gốc, dùng margin âm. Code vừa xấu vừa khó bảo trì.</>,
                <>Using a <code>Card</code> component for a bizarre design (full-bleed image, diagonal text). You override 80% of the original styles, using negative margins. The code is ugly and hard to maintain.</>
              )}
            </p>
            <blockquote className="border-l-2 border-border pl-6 italic text-foreground mt-4">
              {t(
                <><strong>Giải pháp:</strong> Component sinh ra để phục vụ, không phải để trói buộc. Nếu thiết kế quá đặc thù, mạnh dạn loại bỏ component và viết thuần bằng HTML/Tailwind.</>,
                <><strong>Solution:</strong> Components exist to serve, not to bind. If the design is too specific, boldly discard the component and write purely in HTML/Tailwind.</>
              )}
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
