import { InfoIcon } from "lucide-react";
import codeString from "../../blocks/dashboard.tsx?raw";
import { BlockViewer } from "../components/BlockViewer";

export default function DashboardBlockShowcase() {
  return (
    <div className="space-y-8">
      <BlockViewer 
        blockId="dashboard" 
        title="Dashboard" 
        description="A full-featured dashboard layout with a responsive sidebar, header, and data visualizations."
        codeString={codeString} 
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-info/30 bg-info/5 p-6 md:p-8 space-y-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
            <InfoIcon className="w-32 h-32 text-info" />
          </div>
          <h3 className="text-xl font-bold text-foreground flex items-center gap-2 relative z-10">
            <InfoIcon className="size-5 text-info" />
            Triết lý lắp ghép (Composition)
          </h3>
          <div className="text-muted-foreground leading-relaxed space-y-4 relative z-10">
            <p>
              Nhìn vào mã nguồn của Dashboard này, bạn sẽ thấy sự xuất hiện dày đặc của cả <strong>Micro</strong> (Avatar, Button, DropdownMenu...) và <strong>Macro</strong> (DatePicker).
            </p>
            <p>
              gladvn khuyến khích bạn <strong>tự do kết hợp</strong> cả hai tầng kiến trúc:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li><strong>Dùng Macro</strong> khi bạn cần một khối chức năng hoàn chỉnh, hoạt động ngay lập tức (như DatePicker).</li>
              <li><strong>Dùng Micro</strong> khi bạn cần tuỳ chỉnh sâu bố cục, hoặc xây dựng các phần tử đặc thù (như Sidebar, Header).</li>
            </ul>
            <p>
              Không có ranh giới cứng nhắc. Hãy dùng kết hợp để tối ưu tốc độ phát triển mà không đánh mất sự linh hoạt!
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-warning/30 bg-warning/5 p-6 md:p-8 space-y-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
            <InfoIcon className="w-32 h-32 text-warning" />
          </div>
          <h3 className="text-xl font-bold text-foreground flex items-center gap-2 relative z-10">
            <InfoIcon className="size-5 text-warning" />
            Cạm bẫy "Trừu tượng hoá sớm"
          </h3>
          <div className="text-muted-foreground leading-relaxed space-y-4 relative z-10">
            <p>
              Nhiều người khi nhìn vào mã nguồn file này sẽ thắc mắc: <em>"Tại sao không tách các thẻ Card kia thành một component nhỏ hơn (ví dụ DashboardCard) cho code ngắn lại?"</em>
            </p>
            <p>
              Đừng rơi vào bẫy <strong>Premature Abstraction (Trừu tượng hoá quá sớm)</strong>. Hãy tự hỏi:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2 font-medium text-foreground/80">
              <li>Các Card này có thực sự được tái sử dụng ở trang khác không?</li>
              <li>Tách ra có làm mất đi ngữ cảnh (context) khi đọc code không?</li>
              <li>Người tiếp theo vào maintain có thể nhìn một phát hiểu ngay overview trang web, hay phải nhảy qua lại giữa 10 file nhỏ xíu chỉ để biết một cái Card chứa gì?</li>
            </ul>
            <p>
              Viết code dài trong một file không xấu, nếu nó <strong>minh bạch và dễ theo dõi (transparent)</strong>. Chỉ tách component khi bạn thực sự cần tái sử dụng nó ở nhiều nơi.
            </p>
          </div>
        </div>
      </div>
      
      <div className="text-center pb-8 pt-4">
        <p className="text-sm text-muted-foreground italic max-w-2xl mx-auto">
          *P/S: Tại sao những điều này lại được viết ở Dashboard block mà không phải nơi khác? 
          Thực ra thì chúng áp dụng cho <strong>tất cả mọi Block</strong>, tôi chỉ tình cờ chọn Dashboard làm chỗ để tâm sự mỏng thôi. 
          Đời mà, đâu cần cái gì cũng phải phân chia hoàn hảo, thong thả đi! ☕️
        </p>
      </div>
    </div>
  );
}
