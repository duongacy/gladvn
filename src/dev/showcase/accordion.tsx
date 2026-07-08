import { useState } from "react";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
  ShowcaseDocs,
} from "@/dev/components/showcase";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/micro/accordion";

const faqItems = [
  {
    q: "Is it accessible?",
    a: "Yes. It adheres to the WAI-ARIA design pattern. Keyboard navigation and screen readers are fully supported.",
  },
  {
    q: "Is it styled?",
    a: "Yes. It comes with default styles that match the other components' aesthetic. You can override every token via CSS variables.",
  },
  {
    q: "Is it animated?",
    a: "Yes. It's animated by default with smooth expand/collapse transitions, but you can disable animation if you prefer.",
  },
  {
    q: "Can I nest accordions?",
    a: "Yes. You can nest accordion components inside each other to create multi-level collapsible sections.",
  },
];

const firstQ = faqItems[0]?.q ?? "";
const secondQ = faqItems[1]?.q ?? "";

export default function AccordionShowcase() {
  const [controlledValue, setControlledValue] = useState<string[]>([]);

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Accordion"
        description="Tập hợp các tiêu đề có thể tương tác xếp chồng lên nhau theo chiều dọc, mỗi tiêu đề sẽ mở ra một phần nội dung."
      />

      <ShowcaseDocs>
        <h3>Khi nào nên dùng</h3>
        <p>Dùng để gom nhóm các khối nội dung lớn nhằm tiết kiệm không gian hiển thị (ví dụ: FAQ, Advanced Settings). Không nên dùng Accordion nếu nội dung bên trong quá quan trọng và cần user phải nhìn thấy ngay lập tức.</p>
        
        <h3>Micro vs Macro</h3>
        <ul>
          <li>Hãy dùng bản <code>Macro (AccordionPreset)</code> cho 90% các trường hợp thông thường (truyền array data).</li>
          <li>Chỉ dùng bản <code>Micro</code> này khi bạn cần tuỳ biến giao diện cực sâu hoặc nhét Form/Component phức tạp vào trong từng Panel.</li>
        </ul>



        <h3>Controlled vs Uncontrolled</h3>
        <ul>
          <li><b>Uncontrolled (Mặc định):</b> Tự quản lý state. Phù hợp cho 80% trường hợp như trang FAQ cơ bản. Dùng <code>defaultValue</code> để gán state ban đầu.</li>
          <li><b>Controlled:</b> Phải dùng <code>value</code> và <code>onValueChange</code>. Bắt buộc dùng khi cần: (1) Đồng bộ trạng thái mở với URL (ví dụ <code>?faq=1</code>), (2) Làm Form dạng Wizard (chặn user qua bước tiếp theo nếu form lỗi), (3) Điều khiển mở/đóng từ một nút bấm nằm ngoài Accordion, (4) Bắn event Tracking/Analytics khi user mở tab.</li>
        </ul>
      </ShowcaseDocs>

      <ExampleGrid columns={2}>
        <ExampleSection
          label="Mở Đơn (Single Expand)"
          description="Chỉ một mục được phép mở tại một thời điểm (mặc định)."
        >
          <Accordion className="w-full" defaultValue={[firstQ]}>
            {faqItems.slice(0, 3).map(({ q, a }) => (
              <AccordionItem key={q} value={q}>
                <AccordionTrigger>{q}</AccordionTrigger>
                <AccordionContent>{a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ExampleSection>

        <ExampleSection
          label="Mở Nhiều (Multiple Expand)"
          description="Cho phép mở nhiều mục cùng lúc."
        >
          <Accordion className="w-full" multiple defaultValue={[firstQ, secondQ]}>
            {faqItems.slice(0, 3).map(({ q, a }) => (
              <AccordionItem key={q} value={q}>
                <AccordionTrigger>{q}</AccordionTrigger>
                <AccordionContent>{a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ExampleSection>
      </ExampleGrid>

      <ExampleGrid columns={2}>
        <ExampleSection
          label="Controlled"
          description="Trạng thái mở được quản lý bằng state. Click vào các mục để xem state thay đổi."
          codeString={`const [controlledValue, setControlledValue] = useState<string[]>([]);

<Accordion
  className="w-full"
  multiple
  value={controlledValue}
  onValueChange={setControlledValue}
>
  <AccordionItem value="item-1">
    <AccordionTrigger>Question 1</AccordionTrigger>
    <AccordionContent>Answer 1</AccordionContent>
  </AccordionItem>
</Accordion>`}
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
            <Accordion
              className="w-full"
              multiple
              value={controlledValue}
              onValueChange={setControlledValue}
            >
              {faqItems.slice(0, 3).map(({ q, a }) => (
                <AccordionItem key={q} value={q}>
                  <AccordionTrigger>{q}</AccordionTrigger>
                  <AccordionContent>{a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ExampleSection>

        <ExampleSection
          label="Disabled (Vô hiệu hoá)"
          description="Từng mục riêng lẻ có thể bị vô hiệu hóa trong khi các mục khác vẫn tương tác bình thường."
        >
          <Accordion className="w-full">
            <AccordionItem value="enabled-1">
              <AccordionTrigger>Available Feature</AccordionTrigger>
              <AccordionContent>
                This feature is available and can be expanded normally. Click to
                see the details.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="disabled-1" disabled>
              <AccordionTrigger>Premium Feature (Locked)</AccordionTrigger>
              <AccordionContent>
                This content is hidden behind a premium plan.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="enabled-2">
              <AccordionTrigger>Another Feature</AccordionTrigger>
              <AccordionContent>
                This is another available feature you can interact with freely.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ExampleSection>
      </ExampleGrid>

      <ExampleSection
        label="Lồng Nhau (Nested Accordions)"
        description="Nội dung bên trong có thể chứa một Accordion khác để tạo cấu trúc nhiều cấp."
      >
        <Accordion className="w-full max-w-lg">
          <AccordionItem value="getting-started">
            <AccordionTrigger>Getting Started</AccordionTrigger>
            <AccordionContent>
              <Accordion>
                <AccordionItem value="installation">
                  <AccordionTrigger>Installation</AccordionTrigger>
                  <AccordionContent>
                    Run npm install to add the component to your project.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="configuration">
                  <AccordionTrigger>Configuration</AccordionTrigger>
                  <AccordionContent>
                    Import and wrap your content with the Accordion component.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="advanced">
            <AccordionTrigger>Advanced Usage</AccordionTrigger>
            <AccordionContent>
              <Accordion>
                <AccordionItem value="controlled">
                  <AccordionTrigger>Controlled Mode</AccordionTrigger>
                  <AccordionContent>
                    Use the value and onValueChange props to control which items
                    are open.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="animation">
                  <AccordionTrigger>Custom Animation</AccordionTrigger>
                  <AccordionContent>
                    Override transition duration and easing via className.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </ExampleSection>

      <ExampleSection
        label="FAQ Hoàn Chỉnh"
        description="Ví dụ một phần hỏi đáp FAQ hoàn chỉnh."
      >
        <Accordion className="w-full max-w-lg">
          {faqItems.map(({ q, a }) => (
            <AccordionItem key={q} value={q}>
              <AccordionTrigger>{q}</AccordionTrigger>
              <AccordionContent>{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ExampleSection>
    </div>
  );
}
