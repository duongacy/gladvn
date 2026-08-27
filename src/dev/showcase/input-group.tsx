import { useState } from "react";
import React from "react";

import {
  DollarSignIcon,
  EyeIcon,
  EyeOffIcon,
  GlobeIcon,
  MinusIcon,
  PlusIcon,
  SearchIcon,
  XIcon,
} from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "../../components/micro/input-group";
import { useDevContext, useI18n } from "../components/dev-context";
import {
  ConfigurableShowcase,
  DocsCode,
  DocsH3,
  DocsLi,
  DocsP,
  DocsUl,
  ShowcaseDocs,
} from "../components/showcase";

function useInputGroupExamples() {
  const t = useI18n();
  const { size: globalSize } = useDevContext();

  const [showPassword, setShowPassword] = useState(false);
  const [clearValue, setClearValue] = useState("Hello world");
  const [count, setCount] = useState(0);

  return React.useMemo(
    () => [
      {
        title: t("Text Prefix & Suffix", "Text Prefix & Suffix"),
        description: t(
          "InputGroupAddon với văn bản — click addon để focus input.",
          "InputGroupAddon with text — click addon to focus input."
        ),
        microCode: `<InputGroup size="md">
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
</InputGroup>`,
        microPreview: (
          <InputGroup size={globalSize} className="w-full">
            <InputGroupAddon>
              <InputGroupText>https://</InputGroupText>
            </InputGroupAddon>
            <InputGroupInput id="ig-url" placeholder="example.com" />
            <InputGroupAddon align="end">
              <InputGroupText>.vn</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        ),
      },
      {
        title: t("Icon Prefix & Text Suffix", "Icon Prefix & Text Suffix"),
        description: t(
          "InputGroupAddon với icon — thường dùng cho tiền tệ, số lượng.",
          "InputGroupAddon with icon — often used for currency, quantity."
        ),
        microCode: `<InputGroup size="md">
  <InputGroupAddon>
    <InputGroupText>
      <DollarSignIcon aria-hidden="true" />
    </InputGroupText>
  </InputGroupAddon>
  <InputGroupInput id="price-input" placeholder="0.00" />
  <InputGroupAddon align="end">
    <InputGroupText>USD</InputGroupText>
  </InputGroupAddon>
</InputGroup>`,
        microPreview: (
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
        ),
      },
      {
        title: t("Bật tắt Mật khẩu", "Password Toggle"),
        description: t(
          "InputGroupButton icon đặt trực tiếp trong InputGroup — tự có border-l border-l-border phân tách.",
          "InputGroupButton icon placed directly in InputGroup — automatically has a separating border-l border-l-border."
        ),
        microCode: `const [show, setShow] = useState(false);
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
</InputGroup>`,
        microPreview: (
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
        ),
      },
      {
        title: t("Nút Xoá", "Clear Button"),
        description: t(
          "InputGroupButton icon để xoá nhanh nội dung — hiện có điều kiện.",
          "InputGroupButton icon to quickly clear content — conditionally rendered."
        ),
        microCode: `const [value, setValue] = useState("");
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
    placeholder="Search..."
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
</InputGroup>`,
        microPreview: (
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
              placeholder="Search..."
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
        ),
      },
      {
        title: t("Text Button", "Text Button (non-icon)"),
        description: t(
          "InputGroupButton không có prop icon — dùng horizontal padding và font-size từ group.",
          "InputGroupButton without icon prop — uses horizontal padding and font-size from group."
        ),
        microCode: `<InputGroup size="md">
  <InputGroupInput
    id="find-input"
    placeholder="Search..."
  />
  <InputGroupButton variant="solid">
    <SearchIcon aria-hidden="true" /> Find
  </InputGroupButton>
</InputGroup>`,
        microPreview: (
          <InputGroup size={globalSize} className="w-full">
            <InputGroupInput id="ig-find" placeholder="Search..." />
            <InputGroupButton variant="solid">
              <SearchIcon aria-hidden="true" /> Find
            </InputGroupButton>
          </InputGroup>
        ),
      },
      {
        title: t(
          "Cả hai đầu — Bộ đếm",
          "Both Ends — Counter"
        ),
        description: t(
          "Button ở cả 2 đầu — border-r border-r-border (start) và border-l border-l-border (end) tự động theo vị trí DOM.",
          "Button on both ends — border-r border-r-border (start) and border-l border-l-border (end) automatically adapt based on DOM position."
        ),
        microCode: `const [count, setCount] = useState(0);
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
</InputGroup>`,
        microPreview: (
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
        ),
      },
      {
        title: t("Button Variants", "Button Variants"),
        description: t(
          "InputGroupButton hỗ trợ 4 variants: ghost (default), solid, soft, outline. Demo với icon và text mode.",
          "InputGroupButton supports 4 variants: ghost (default), solid, soft, outline. Demo with icon and text modes."
        ),
        microCode: `{/* icon mode — 4 variants */}
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
</InputGroup>`,
        microPreview: (
          <div className="space-y-4">
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
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
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
          </div>
        ),
      },
      {
        title: t("Khóa / Bất hoạt", "Disabled"),
        description: t(
          "Trạng thái disabled delegate lên wrapper qua has-disabled: — toàn bộ group mờ đi.",
          "Disabled state delegates to wrapper via has-disabled: — the whole group fades."
        ),
        microCode: `<InputGroup size="md">
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
</InputGroup>`,
        microPreview: (
          <InputGroup size={globalSize} className="w-full">
            <InputGroupAddon>
              <InputGroupText>
                <GlobeIcon aria-hidden="true" />
              </InputGroupText>
            </InputGroupAddon>
            <InputGroupInput
              id="ig-disabled"
              placeholder="Disabled"
              disabled
            />
          </InputGroup>
        ),
      },
      {
        title: t("Lỗi", "Invalid / Error"),
        description: t(
          "aria-invalid='true' trên input delegate border đỏ lên toàn bộ wrapper qua has-[...aria-invalid].",
          "aria-invalid='true' on input delegates red border to the wrapper via has-[...aria-invalid]."
        ),
        microCode: `<InputGroup size="md">
  <InputGroupAddon>
    <InputGroupText>$</InputGroupText>
  </InputGroupAddon>
  <InputGroupInput
    id="error-input"
    aria-invalid="true"
    defaultValue="abc"
    placeholder="0.00"
  />
</InputGroup>`,
        microPreview: (
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
        ),
      },
      {
        title: t("Kèm Textarea", "With Textarea"),
        description: t(
          "InputGroupTextarea — InputGroup wrapper tự co giãn chiều cao với className='h-auto'.",
          "InputGroupTextarea — InputGroup wrapper automatically stretches height with className='h-auto'."
        ),
        microCode: `<InputGroup size="md" className="h-auto">
  <InputGroupAddon className="self-start">
    <InputGroupText>@</InputGroupText>
  </InputGroupAddon>
  <InputGroupTextarea
    id="comment-input"
    placeholder="Write a comment..."
    rows={4}
  />
</InputGroup>`,
        microPreview: (
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
        ),
      },
    ],
    [
      t,
      globalSize,
      showPassword,
      setShowPassword,
      clearValue,
      setClearValue,
      count,
      setCount,
    ]
  );
}

export default function InputGroupShowcase() {
  const t = useI18n();
  const examples = useInputGroupExamples();

  return (
    <ConfigurableShowcase
      title="Input Group"
      description={t(
        "Kết hợp input với text, icon và action button bên trong một wrapper tuyến tính theo size.",
        "Combine input with text, icon, and action button inside a linearly sized wrapper."
      )}
      guideline={
        <ShowcaseDocs>
          <DocsH3>
            {t(
              "Kiến trúc Self-Contained",
              "Self-Contained Architecture"
            )}
          </DocsH3>
          <DocsP>
            <DocsCode>InputGroup</DocsCode> là wrapper duy nhất quản lý{" "}
            <DocsCode>size</DocsCode>. Tất cả children (
            <DocsCode>InputGroupInput</DocsCode>,{" "}
            <DocsCode>InputGroupButton</DocsCode>,{" "}
            <DocsCode>InputGroupTextarea</DocsCode>) tự đọc size từ wrapper qua
            CSS group modifiers — không có <DocsCode>size</DocsCode> prop trên
            sub-component nào.
          </DocsP>

          <DocsH3>
            {t(
              "InputGroupAddon vs InputGroupButton",
              "InputGroupAddon vs InputGroupButton"
            )}
          </DocsH3>
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

          <DocsH3>
            {t(
              "Icon Button vs Text Button",
              "Icon Button vs Text Button"
            )}
          </DocsH3>
          <DocsUl>
            <DocsLi>
              {t(
                <>
                  <DocsCode>icon</DocsCode> prop → nút vuông, width = height của
                  wrapper. Không cần set size thủ công.
                </>,
                <>
                  <DocsCode>icon</DocsCode> prop → square button, width = height
                  of wrapper. No need to set size manually.
                </>
              )}
            </DocsLi>
            <DocsLi>
              {t(
                <>
                  Không có <DocsCode>icon</DocsCode> → nút text với horizontal
                  padding tương xứng group size.
                </>,
                <>
                  Without <DocsCode>icon</DocsCode> → text button with
                  horizontal padding proportional to group size.
                </>
              )}
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
      examples={examples}
    />
  );
}
