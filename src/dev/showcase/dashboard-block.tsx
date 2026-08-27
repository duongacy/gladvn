import { InfoIcon } from "lucide-react";

import codeString from "../../blocks/dashboard.tsx?raw";
import { useI18n } from "../../dev/components/dev-context";
import { BlockViewer } from "../components/BlockViewer";

export default function DashboardBlockShowcase() {
  const t = useI18n();
  return (
    <div className="space-y-8">
      <BlockViewer
        blockId="dashboard"
        title={t("Bảng điều khiển", "Dashboard")}
        description={t("Một bố cục bảng điều khiển đầy đủ tính năng.", "A full-featured dashboard layout with a responsive sidebar, header, and data visualizations.")}
        codeString={codeString}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-info/30 bg-info/5 p-6 md:p-8 space-y-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
            <InfoIcon className="w-32 h-32 text-info" />
          </div>
          <h3 className="text-xl font-bold text-foreground flex items-center gap-2 relative z-10">
            <InfoIcon className="size-5 text-info" />
            {t("Triết lý lắp ghép", "Composition Philosophy")}
          </h3>
          <div className="text-muted-foreground leading-relaxed space-y-4 relative z-10">
            <p>
              {t(
                "Nhìn vào mã nguồn của Dashboard này, bạn sẽ thấy sự xuất hiện dày đặc của cả ",
                "Looking at the source code of this Dashboard, you will see a heavy presence of both "
              )}
              <strong>Micro</strong> (Avatar, Button,
              DropdownMenu...) {t("và", "and")} <strong>Macro</strong> (DatePicker).
            </p>
            <p>
              {t(
                "gladvn khuyến khích bạn tự do kết hợp cả hai tầng kiến trúc:",
                "gladvn encourages you to freely combine both architectural layers:"
              )}
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                <strong>{t("Dùng Macro", "Use Macro")}</strong> {t("khi bạn cần một khối chức năng hoàn chỉnh, hoạt động ngay lập tức (như DatePicker).", "when you need a complete, instantly working functional block (like DatePicker).")}
              </li>
              <li>
                <strong>{t("Dùng Micro", "Use Micro")}</strong> {t("khi bạn cần tuỳ chỉnh sâu bố cục, hoặc xây dựng các phần tử đặc thù (như Sidebar, Header).", "when you need deep layout customization or to build specific elements (like Sidebar, Header).")}
              </li>
            </ul>
            <p>
              {t(
                "Không có ranh giới cứng nhắc. Hãy dùng kết hợp để tối ưu tốc độ phát triển mà không đánh mất sự linh hoạt!",
                "There are no rigid boundaries. Combine them to optimize development speed without losing flexibility!"
              )}
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-warning/30 bg-warning/5 p-6 md:p-8 space-y-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
            <InfoIcon className="w-32 h-32 text-warning" />
          </div>
          <h3 className="text-xl font-bold text-foreground flex items-center gap-2 relative z-10">
            <InfoIcon className="size-5 text-warning" />
            {t("Cạm bẫy \"Trừu tượng hoá sớm\"", 'The "Premature Abstraction" Trap')}
          </h3>
          <div className="text-muted-foreground leading-relaxed space-y-4 relative z-10">
            <p>
              {t("Nhiều người khi nhìn vào mã nguồn file này sẽ thắc mắc: ", "Many people looking at this source code might wonder: ")}
              <em>
                {t(
                  "\"Tại sao không tách các thẻ Card kia thành một component nhỏ hơn (ví dụ DashboardCard) cho code ngắn lại?\"",
                  '"Why not split those Cards into a smaller component (e.g. DashboardCard) to make the code shorter?"'
                )}
              </em>
            </p>
            <p>
              {t("Đừng rơi vào bẫy ", "Don't fall into the ")}
              <strong>{t("Premature Abstraction", "Premature Abstraction")}</strong> trap.
              {t("Hãy tự hỏi:", "Ask yourself:")}
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2 font-medium text-foreground/80">
              <li>
                {t("Các Card này có thực sự được tái sử dụng ở trang khác không?", "Are these Cards actually reused on another page?")}
              </li>
              <li>
                {t("Tách ra có làm mất đi ngữ cảnh (context) khi đọc code không?", "Will separating them strip away context when reading the code?")}
              </li>
              <li>
                {t(
                  "Người tiếp theo vào maintain có thể nhìn một phát hiểu ngay overview trang web, hay phải nhảy qua lại giữa 10 file nhỏ xíu chỉ để biết một cái Card chứa gì?",
                  "Can the next person maintaining this understand the page overview at a glance, or will they have to jump between 10 tiny files just to know what a Card contains?"
                )}
              </li>
            </ul>
            <p>
              {t("Viết code dài trong một file không xấu, nếu nó ", "Writing long code in a single file isn't bad, as long as it is ")}
              <strong>{t("minh bạch và dễ theo dõi", "transparent and easy to follow")}</strong>. {t("Chỉ tách component khi bạn thực sự cần tái sử dụng nó ở nhiều nơi.", "Only split a component when you genuinely need to reuse it in multiple places.")}
            </p>
          </div>
        </div>
      </div>

      <div className="text-center pb-8 pt-4">
        <p className="text-sm text-muted-foreground italic max-w-2xl mx-auto">
          {t(
            "*P/S: Tại sao những điều này lại được viết ở Dashboard block mà không phải nơi khác? Thực ra thì chúng áp dụng cho tất cả mọi Block, tôi chỉ tình cờ chọn Dashboard làm chỗ để tâm sự mỏng thôi. Đời mà, đâu cần cái gì cũng phải phân chia hoàn hảo.",
            "*P/S: Why are these things written in the Dashboard block and not somewhere else? Actually, they apply to all Blocks, I just happened to choose Dashboard to have a little chat. That's life, not everything needs to be perfectly categorized."
          )}
        </p>
      </div>
    </div>
  );
}
