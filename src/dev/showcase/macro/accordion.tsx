import { useState } from "react";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
  ShowcaseDocs,
} from "@/dev/components/showcase";
import { AccordionPreset } from "@/components/macro/accordion-preset";

const faqItems = [
  {
    value: "item-1",
    title: "Is it accessible?",
    content: "Yes. It adheres to the WAI-ARIA design pattern. Keyboard navigation and screen readers are fully supported.",
  },
  {
    value: "item-2",
    title: "Is it styled?",
    content: "Yes. It comes with default styles that match the other components' aesthetic.",
  },
  {
    value: "item-3",
    title: "Is it animated?",
    content: "Yes. It's animated by default with smooth transitions.",
  },
];

export default function MacroAccordionShowcase() {
  const [controlledValue, setControlledValue] = useState<string[]>([]);

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Accordion (Macro)"
        description="Một Preset Component giúp render toàn bộ Accordion từ một mảng dữ liệu (array) truyền vào."
      />

      <ShowcaseDocs>
        <h3>Khi nào nên dùng</h3>
        <p>Đây là phiên bản <b>được khuyên dùng mặc định</b> cho 90% các trường hợp cần Accordion (như FAQ, điều khoản, menu con). Thay vì phải render thủ công từng thẻ Root, Item, Trigger, Content, bạn chỉ cần truyền vào một array <code>items</code>.</p>
        
        <h3>Ưu điểm</h3>
        <ul>
          <li>Code siêu ngắn gọn, data-driven, dễ bảo trì.</li>
          <li>Đảm bảo chuẩn xác về Type và cấu trúc Headless UI.</li>
          <li>Vẫn hỗ trợ nhét React Component phức tạp vào thẻ <code>content</code> (như ví dụ Complex Content và Nested bên dưới).</li>
        </ul>

        <h3>Lưu ý</h3>
        <p>Bản Macro này đã được gói ghém (encapsulated) layout cẩn thận. Bạn có thể thoải mái truyền <code>className</code> vào thẳng thẻ <code>&lt;AccordionPreset /&gt;</code> để giới hạn width hay margin mà không sợ vỡ layout bên trong.</p>

        <h3>Controlled vs Uncontrolled</h3>
        <ul>
          <li><b>Uncontrolled (Mặc định):</b> Tự quản lý state. Phù hợp cho 80% trường hợp như trang FAQ cơ bản. Dùng <code>defaultValue</code> để gán state ban đầu.</li>
          <li><b>Controlled:</b> Phải dùng <code>value</code> và <code>onValueChange</code>. Bắt buộc dùng khi cần: (1) Đồng bộ trạng thái mở với URL (ví dụ <code>?faq=1</code>), (2) Làm Form dạng Wizard (chặn user qua bước tiếp theo nếu form lỗi), (3) Điều khiển mở/đóng từ một nút bấm nằm ngoài Accordion, (4) Bắn event Tracking/Analytics khi user mở tab.</li>
        </ul>
      </ShowcaseDocs>

      <ExampleGrid columns={2}>
        <ExampleSection label="Tiêu Chuẩn (Standard)" description="Accordion mở đơn cơ bản.">
          <AccordionPreset
            className="w-full"
            defaultValue={["item-1"]}
            items={faqItems}
          />
        </ExampleSection>

        <ExampleSection label="Mở Nhiều (Multiple Expansion)" description="Cho phép mở nhiều mục cùng một lúc.">
          <AccordionPreset
            className="w-full"
            multiple
            defaultValue={["item-1", "item-2"]}
            items={faqItems}
          />
        </ExampleSection>
      </ExampleGrid>

      <ExampleGrid columns={2}>
        <ExampleSection
          label="Controlled"
          description="Trạng thái mở được quản lý bằng state. Click vào các mục để xem state thay đổi."
        >
          <div className="flex w-full flex-col gap-3">
            <p className="text-xs text-muted-foreground">
              Open:{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
                {controlledValue.length > 0
                  ? controlledValue.map((v) => `"${v}"`).join(", ")
                  : "(none)"}
              </code>
            </p>
            <AccordionPreset
              className="w-full"
              multiple
              value={controlledValue}
              onValueChange={setControlledValue}
              items={faqItems}
            />
          </div>
        </ExampleSection>

        <ExampleSection
          label="Disabled (Vô hiệu hoá)"
          description="Từng mục riêng lẻ có thể bị vô hiệu hóa trong khi các mục khác vẫn tương tác bình thường."
        >
          <AccordionPreset
            className="w-full"
            items={[
              {
                value: "enabled-1",
                title: "Available Feature",
                content: "This feature is available and can be expanded normally.",
              },
              {
                value: "disabled-1",
                title: "Premium Feature (Locked)",
                content: "This content is hidden behind a premium plan.",
                disabled: true,
              },
              {
                value: "enabled-2",
                title: "Another Feature",
                content: "This is another available feature you can interact with freely.",
              },
            ]}
          />
        </ExampleSection>
      </ExampleGrid>

      <ExampleGrid columns={2}>
        <ExampleSection label="Nội Dung Phức Tạp" description="Render các React Node bên trong nội dung.">
          <AccordionPreset
            className="w-full"
            items={[
              {
                value: "profile",
                title: "User Profile Settings",
                content: (
                  <div className="flex flex-col items-start gap-3">
                    <p className="text-sm">Update your personal information and preferences.</p>
                    <button className="rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground">
                      Edit Profile
                    </button>
                  </div>
                ),
              },
            ]}
          />
        </ExampleSection>

        <ExampleSection
          label="Lồng Nhau (Nested Accordions)"
          description="Nội dung bên trong có thể chứa một Accordion khác."
        >
          <AccordionPreset
            className="w-full"
            items={[
              {
                value: "getting-started",
                title: "Getting Started",
                content: (
                  <AccordionPreset
                    className="w-full"
                    items={[
                      {
                        value: "installation",
                        title: "Installation",
                        content: "Run npm install to add the component to your project.",
                      },
                    ]}
                  />
                ),
              },
              {
                value: "advanced",
                title: "Advanced Usage",
                content: (
                  <AccordionPreset
                    className="w-full"
                    items={[
                      {
                        value: "controlled",
                        title: "Controlled Mode",
                        content: "Use the value and onValueChange props to control which items are open.",
                      },
                    ]}
                  />
                ),
              },
            ]}
          />
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
