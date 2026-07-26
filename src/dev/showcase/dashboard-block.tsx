import { BlockViewer } from "../components/BlockViewer";
import codeString from "../../blocks/dashboard.tsx?raw";
import { InfoIcon } from "lucide-react";

export default function DashboardBlockShowcase() {
  return (
    <div className="space-y-8">
      <BlockViewer 
        blockId="dashboard" 
        title="Dashboard" 
        description="A full-featured dashboard layout with a responsive sidebar, header, and data visualizations."
        codeString={codeString} 
      />

      <div className="rounded-2xl border border-info/30 bg-info/5 p-6 md:p-8 space-y-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
          <InfoIcon className="w-32 h-32 text-info" />
        </div>
        <h3 className="text-xl font-bold text-foreground flex items-center gap-2 relative z-10">
          <InfoIcon className="size-5 text-info" />
          Triết lý lắp ghép (Composition Philosophy)
        </h3>
        <div className="text-muted-foreground leading-relaxed space-y-4 relative z-10">
          <p>
            Nhìn vào mã nguồn của Dashboard này, bạn sẽ thấy sự xuất hiện dày đặc của cả <strong>Micro</strong> (Avatar, Button, DropdownMenu...) và <strong>Macro</strong> (DatePicker).
            Điều này không có nghĩa là bạn bị ép buộc phải dùng toàn bộ Micro để xây dựng Layout.
          </p>
          <p>
            gladvn khuyến khích bạn <strong>tự do kết hợp</strong> cả hai tầng kiến trúc:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>Dùng Macro</strong> khi bạn cần một khối chức năng hoàn chỉnh, chuẩn mực và hoạt động ngay lập tức (như DatePicker).</li>
            <li><strong>Dùng Micro</strong> khi bạn cần tuỳ chỉnh sâu bố cục, hoặc xây dựng các phần tử đặc thù mà preset có sẵn không đáp ứng được (như Sidebar, Header).</li>
          </ul>
          <p>
            Không có ranh giới cứng nhắc. Hãy dùng kết hợp để tối ưu tốc độ phát triển mà không đánh mất sự linh hoạt!
          </p>
        </div>
      </div>
    </div>
  );
}
