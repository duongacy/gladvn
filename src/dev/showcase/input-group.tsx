import { useState } from "react";

import {
  DollarSignIcon,
  EyeIcon,
  EyeOffIcon,
  GlobeIcon,
  MinusIcon,
  PlusIcon,
  SearchIcon,
  XIcon
} from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea
} from "../../components/micro/input-group";
import { useDevContext } from "../../dev/components/dev-context";
import {
  DocsCode,
  DocsH3,
  DocsLi,
  DocsP,
  DocsUl,
  ExampleGrid,
  ExampleSection,
  Showcase,
  ShowcaseDocs
} from "../../dev/components/showcase";
import { type Size } from "../../lib/types";

function InputGroupMicroShowcase({ globalSize }: { globalSize: Size }) {
  const [showPassword, setShowPassword] = useState(false);
  const [clearValue, setClearValue] = useState("Hello world");
  const [count, setCount] = useState(0);

  return (
    <div className="space-y-10 mt-6">
      {}
      <ExampleGrid>
        <ExampleSection
          label="Text Prefix & Suffix"
          description="InputGroupAddon với văn bản — click addon để focus input."
          codeString={`<InputGroup size="md">
    <InputGroupAddon>
      <InputGroupText>https://</InputGroupText>
    </InputGroupAddon>
    <InputGroupInput
      id="url-input"
      placeholder="example.com"
    />
    <InputGroupAddon align="end">
      <InputGroupText>.vn</InputGroupText>
    </InputGroupAddon>
  </InputGroup>`}
        >
          <InputGroup size={globalSize} className="w-full">
            <InputGroupAddon>
              <InputGroupText>https://</InputGroupText>
            </InputGroupAddon>
            <InputGroupInput id="ig-url" placeholder="example.com" />
            <InputGroupAddon align="end">
              <InputGroupText>.vn</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </ExampleSection>

        <ExampleSection
          label="Icon Prefix & Text Suffix"
          description="InputGroupAddon với icon — thường dùng cho tiền tệ, số lượng."
          codeString={`<InputGroup size="md">
    <InputGroupAddon>
      <InputGroupText>
        <DollarSignIcon aria-hidden="true" />
      </InputGroupText>
    </InputGroupAddon>
    <InputGroupInput id="price-input" placeholder="0.00" />
    <InputGroupAddon align="end">
      <InputGroupText>USD</InputGroupText>
    </InputGroupAddon>
  </InputGroup>`}
        >
          <InputGroup size={globalSize} className="w-full">
            <InputGroupAddon>
              <InputGroupText>
                <DollarSignIcon aria-hidden="true" />
              </InputGroupText>
            </InputGroupAddon>
            <InputGroupInput id="ig-price" placeholder="0.00" />
            <InputGroupAddon align="end">
              <InputGroupText>USD</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </ExampleSection>
      </ExampleGrid>

      {}
      <ExampleGrid>
        <ExampleSection
          label="Password Toggle"
          description="InputGroupButton icon đặt trực tiếp trong InputGroup — tự có border-l border-l-border phân tách."
          codeString={`const [show, setShow] = useState(false);
  <InputGroup size="md">
    <InputGroupInput
      id="password-input"
      type={show ? "text" : "password"}
      placeholder="••••••••"
    />
    <InputGroupButton
      icon
      aria-label={show ? "Hide password" : "Show password"}
      onClick={() => setShow((p) => !p)}
    >
      {show ? (
        <EyeOffIcon aria-hidden="true" />
      ) : (
        <EyeIcon aria-hidden="true" />
      )}
    </InputGroupButton>
  </InputGroup>`}
        >
          <InputGroup size={globalSize} className="w-full">
            <InputGroupInput
              id="ig-password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
            />
            <InputGroupButton
              icon
              aria-label={showPassword ? "Hide password" : "Show password"}
              onClick={() => setShowPassword((p) => !p)}
            >
              {showPassword ? (
                <EyeOffIcon aria-hidden="true" />
              ) : (
                <EyeIcon aria-hidden="true" />
              )}
            </InputGroupButton>
          </InputGroup>
        </ExampleSection>

        <ExampleSection
          label="Clear Button"
          description="InputGroupButton icon để xoá nhanh nội dung — hiện có điều kiện."
          codeString={`const [value, setValue] = useState("");
  <InputGroup size="md">
    <InputGroupAddon>
      <InputGroupText>
        <SearchIcon aria-hidden="true" />
      </InputGroupText>
    </InputGroupAddon>
    <InputGroupInput
      id="search-input"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Tìm kiếm..."
    />
    {value && (
      <InputGroupButton
        icon
        aria-label="Clear"
        onClick={() => setValue("")}
      >
        <XIcon aria-hidden="true" />
      </InputGroupButton>
    )}
  </InputGroup>`}
        >
          <InputGroup size={globalSize} className="w-full">
            <InputGroupAddon>
              <InputGroupText>
                <SearchIcon aria-hidden="true" />
              </InputGroupText>
            </InputGroupAddon>
            <InputGroupInput
              id="ig-search"
              value={clearValue}
              onChange={(e) => setClearValue(e.target.value)}
              placeholder="Tìm kiếm..."
            />
            {clearValue && (
              <InputGroupButton
                icon
                aria-label="Clear"
                onClick={() => setClearValue("")}
              >
                <XIcon aria-hidden="true" />
              </InputGroupButton>
            )}
          </InputGroup>
        </ExampleSection>
      </ExampleGrid>

      {}
      <ExampleGrid>
        <ExampleSection
          label="Text Button (non-icon)"
          description="InputGroupButton không có prop icon — dùng horizontal padding và font-size từ group."
          codeString={`<InputGroup size="md">
    <InputGroupInput
      id="find-input"
      placeholder="Tìm kiếm..."
    />
    <InputGroupButton variant="solid">
      <SearchIcon aria-hidden="true" /> Find
    </InputGroupButton>
  </InputGroup>`}
        >
          <InputGroup size={globalSize} className="w-full">
            <InputGroupInput id="ig-find" placeholder="Tìm kiếm..." />
            <InputGroupButton variant="solid">
              <SearchIcon aria-hidden="true" /> Find
            </InputGroupButton>
          </InputGroup>
        </ExampleSection>

        <ExampleSection
          label="Both Ends — Counter"
          description="Button ở cả 2 đầu — border-r border-r-border (start) và border-l border-l-border (end) tự động theo vị trí DOM."
          codeString={`const [count, setCount] = useState(0);
  <InputGroup size="md">
    <InputGroupButton
      icon
      aria-label="Decrement"
      onClick={() => setCount((c) => c - 1)}
    >
      <MinusIcon aria-hidden="true" />
    </InputGroupButton>
    <InputGroupInput
      id="counter-input"
      type="number"
      value={count}
      onChange={(e) => setCount(Number(e.target.value))}
      className="text-center"
    />
    <InputGroupButton
      icon
      aria-label="Increment"
      onClick={() => setCount((c) => c + 1)}
    >
      <PlusIcon aria-hidden="true" />
    </InputGroupButton>
  </InputGroup>`}
        >
          <InputGroup size={globalSize} className="w-full">
            <InputGroupButton
              icon
              aria-label="Decrement"
              onClick={() => setCount((c) => c - 1)}
            >
              <MinusIcon aria-hidden="true" />
            </InputGroupButton>
            <InputGroupInput
              id="ig-counter"
              type="number"
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
              className="text-center"
            />
            <InputGroupButton
              icon
              aria-label="Increment"
              onClick={() => setCount((c) => c + 1)}
            >
              <PlusIcon aria-hidden="true" />
            </InputGroupButton>
          </InputGroup>
        </ExampleSection>
      </ExampleGrid>

      {}
      <ExampleSection
        label="Button Variants"
        description="InputGroupButton hỗ trợ 4 variants: ghost (default), solid, soft, outline. Demo với icon và text mode."
        codeString={`{/* icon mode — 4 variants */}
  <InputGroup size="md">
    <InputGroupInput placeholder="ghost" />
    <InputGroupButton
      icon
      variant="ghost"
      aria-label="Search"
    >
      <SearchIcon aria-hidden="true" />
    </InputGroupButton>
  </InputGroup>

  <InputGroup size="md">
    <InputGroupInput placeholder="solid" />
    <InputGroupButton
      icon
      variant="solid"
      aria-label="Search"
    >
      <SearchIcon aria-hidden="true" />
    </InputGroupButton>
  </InputGroup>

  <InputGroup size="md">
    <InputGroupInput placeholder="soft" />
    <InputGroupButton
      icon
      variant="soft"
      aria-label="Search"
    >
      <SearchIcon aria-hidden="true" />
    </InputGroupButton>
  </InputGroup>

  <InputGroup size="md">
    <InputGroupInput placeholder="outline" />
    <InputGroupButton
      icon
      variant="outline"
      aria-label="Search"
    >
      <SearchIcon aria-hidden="true" />
    </InputGroupButton>
  </InputGroup>

  {/* text mode — 4 variants */}
  <InputGroup size="md">
    <InputGroupInput placeholder="ghost text" />
    <InputGroupButton variant="ghost">Go</InputGroupButton>
  </InputGroup>

  <InputGroup size="md">
    <InputGroupInput placeholder="solid text" />
    <InputGroupButton variant="solid">Go</InputGroupButton>
  </InputGroup>

  <InputGroup size="md">
    <InputGroupInput placeholder="soft text" />
    <InputGroupButton variant="soft">Go</InputGroupButton>
  </InputGroup>

  <InputGroup size="md">
    <InputGroupInput placeholder="outline text" />
    <InputGroupButton variant="outline">
      Go
    </InputGroupButton>
  </InputGroup>`}
        fullWidth
      >
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <InputGroup size={globalSize}>
            <InputGroupInput placeholder="ghost" />
            <InputGroupButton icon variant="ghost" aria-label="Search">
              <SearchIcon aria-hidden="true" />
            </InputGroupButton>
          </InputGroup>
          <InputGroup size={globalSize}>
            <InputGroupInput placeholder="solid" />
            <InputGroupButton icon variant="solid" aria-label="Search">
              <SearchIcon aria-hidden="true" />
            </InputGroupButton>
          </InputGroup>
          <InputGroup size={globalSize}>
            <InputGroupInput placeholder="soft" />
            <InputGroupButton icon variant="soft" aria-label="Search">
              <SearchIcon aria-hidden="true" />
            </InputGroupButton>
          </InputGroup>
          <InputGroup size={globalSize}>
            <InputGroupInput placeholder="outline" />
            <InputGroupButton icon variant="outline" aria-label="Search">
              <SearchIcon aria-hidden="true" />
            </InputGroupButton>
          </InputGroup>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <InputGroup size={globalSize}>
            <InputGroupInput placeholder="ghost text" />
            <InputGroupButton variant="ghost">Go</InputGroupButton>
          </InputGroup>
          <InputGroup size={globalSize}>
            <InputGroupInput placeholder="solid text" />
            <InputGroupButton variant="solid">Go</InputGroupButton>
          </InputGroup>
          <InputGroup size={globalSize}>
            <InputGroupInput placeholder="soft text" />
            <InputGroupButton variant="soft">Go</InputGroupButton>
          </InputGroup>
          <InputGroup size={globalSize}>
            <InputGroupInput placeholder="outline text" />
            <InputGroupButton variant="outline">Go</InputGroupButton>
          </InputGroup>
        </div>
      </ExampleSection>

      {}
      <ExampleGrid>
        <ExampleSection
          label="Disabled"
          description="Trạng thái disabled delegate lên wrapper qua has-disabled: — toàn bộ group mờ đi."
          codeString={`<InputGroup size="md">
    <InputGroupAddon>
      <InputGroupText>
        <GlobeIcon aria-hidden="true" />
      </InputGroupText>
    </InputGroupAddon>
    <InputGroupInput
      id="disabled-input"
      placeholder="Disabled"
      disabled
    />
  </InputGroup>`}
        >
          <InputGroup size={globalSize} className="w-full">
            <InputGroupAddon>
              <InputGroupText>
                <GlobeIcon aria-hidden="true" />
              </InputGroupText>
            </InputGroupAddon>
            <InputGroupInput id="ig-disabled" placeholder="Disabled" disabled />
          </InputGroup>
        </ExampleSection>

        <ExampleSection
          label="Invalid / Error"
          description="aria-invalid='true' trên input delegate border border-border đỏ lên toàn bộ wrapper qua has-[...aria-invalid]."
          codeString={`<InputGroup size="md">
    <InputGroupAddon>
      <InputGroupText>$</InputGroupText>
    </InputGroupAddon>
    <InputGroupInput
      id="error-input"
      aria-invalid="true"
      defaultValue="abc"
      placeholder="0.00"
    />
  </InputGroup>`}
        >
          <InputGroup size={globalSize} className="w-full">
            <InputGroupAddon>
              <InputGroupText>$</InputGroupText>
            </InputGroupAddon>
            <InputGroupInput
              id="ig-error"
              aria-invalid="true"
              defaultValue="abc"
              placeholder="0.00"
            />
          </InputGroup>
        </ExampleSection>
      </ExampleGrid>

      {}
      <ExampleSection
        label="With Textarea"
        description="InputGroupTextarea — InputGroup wrapper tự co giãn chiều cao với className='h-auto'."
        codeString={`<InputGroup size="md" className="h-auto">
    <InputGroupAddon className="self-start">
      <InputGroupText>@</InputGroupText>
    </InputGroupAddon>
    <InputGroupTextarea
      id="comment-input"
      placeholder="Write a comment..."
      rows={4}
    />
  </InputGroup>`}
      >
        <InputGroup size={globalSize} className="h-auto w-full">
          <InputGroupAddon className="self-start">
            <InputGroupText>@</InputGroupText>
          </InputGroupAddon>
          <InputGroupTextarea
            id="ig-comment"
            placeholder="Write a comment..."
            rows={4}
          />
        </InputGroup>
      </ExampleSection>
    </div>
  );
}

export default function InputGroupShowcase() {
  const { size: globalSize } = useDevContext();
  return (
    <Showcase
      title="Input Group"
      description="Kết hợp input với text, icon và action button bên trong một wrapper tuyến tính theo size."
      generalConcept={
        <ShowcaseDocs>
          <DocsH3>Kiến trúc Self-Contained</DocsH3>
          <DocsP>
            <DocsCode>InputGroup</DocsCode> là wrapper duy nhất quản lý{" "}
            <DocsCode>size</DocsCode>. Tất cả children (
            <DocsCode>InputGroupInput</DocsCode>,{" "}
            <DocsCode>InputGroupButton</DocsCode>,{" "}
            <DocsCode>InputGroupTextarea</DocsCode>) tự đọc size từ wrapper qua
            CSS group modifiers — không có <DocsCode>size</DocsCode> prop trên
            sub-component nào.
          </DocsP>

          <DocsH3>InputGroupAddon vs InputGroupButton</DocsH3>
          <DocsUl>
            <DocsLi>
              <DocsCode>InputGroupAddon</DocsCode> — slot trang trí (text,
              icon). Click addon để focus input. Chỉ có{" "}
              <DocsCode>align="start"</DocsCode> hoặc{" "}
              <DocsCode>align="end"</DocsCode>.
            </DocsLi>
            <DocsLi>
              <DocsCode>InputGroupButton</DocsCode> — đặt trực tiếp trong{" "}
              <DocsCode>InputGroup</DocsCode> (không bọc trong Addon). Tự có
              separator border border-border theo vị trí DOM.
            </DocsLi>
          </DocsUl>

          <DocsH3>Icon Button vs Text Button</DocsH3>
          <DocsUl>
            <DocsLi>
              <DocsCode>icon</DocsCode> prop → nút vuông, width = height của
              wrapper. Không cần set size thủ công.
            </DocsLi>
            <DocsLi>
              Không có <DocsCode>icon</DocsCode> → nút text với horizontal
              padding tương xứng group size.
            </DocsLi>
          </DocsUl>

          <DocsH3>Accessibility</DocsH3>
          <DocsP>
            Icon trang trí bên trong <DocsCode>InputGroupText</DocsCode> nên có{" "}
            <DocsCode>aria-hidden="true"</DocsCode>. Icon trong{" "}
            <DocsCode>InputGroupButton</DocsCode> icon-only cần{" "}
            <DocsCode>aria-label</DocsCode> trên button thay vì trên icon.
          </DocsP>
        </ShowcaseDocs>
      }
      tabs={[
        {
          label: "Micro (Primitive)",
          content: <InputGroupMicroShowcase globalSize={globalSize} /> },
      ]}
    />
  );
}
