import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";
import { PaginationPreset } from "@/components/macro/pagination-preset";

export default function MacroPaginationShowcase() {
  return (
    <div className="space-y-10">
      <SectionHeader
        title="Pagination (Macro)"
        description="Một thành phần đặt trước hiển thị phân trang dựa trên các trang hiện tại và tổng số trang."
      />

      <ExampleGrid columns={1}>
        <ExampleSection label="Standard" description="Phân trang cơ bản.">
          <PaginationPreset
            currentPage={4}
            totalPages={10}
          />
        </ExampleSection>

        <ExampleSection label="Many Pages" description="Phân trang với số lượng lớn trang hiển thị hình elip ở cả hai bên.">
          <PaginationPreset
            currentPage={50}
            totalPages={100}
          />
        </ExampleSection>

        <ExampleSection label="First Page" description="Khi ở trang đầu tiên, nút trước đó bị tắt.">
          <PaginationPreset
            currentPage={1}
            totalPages={5}
          />
        </ExampleSection>

        <ExampleSection label="Last Page" description="Khi ở trang cuối cùng, nút tiếp theo bị tắt.">
          <PaginationPreset
            currentPage={5}
            totalPages={5}
          />
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
