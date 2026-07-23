import {
  CopyIcon,
  FileIcon,
  FilePlusIcon,
  FolderOpenIcon,
  SaveIcon } from "lucide-react";

import { Button } from "../../components/micro/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  
  DropdownMenuSeparator,
  DropdownMenuTrigger } from "../../components/micro/dropdown-menu";
import { Kbd, KbdGroup } from "../../components/micro/kbd";
import {
  Tooltip,
  TooltipContent,
  
  TooltipProvider,
  TooltipTrigger } from "../../components/micro/tooltip";
import {
  DocsCode,
  DocsP,
  ExampleGrid,
  ExampleSection,
  Showcase,
  ShowcaseDocs } from "../../dev/components/showcase";

// ──────────────────────────────────────────────────────────
// SECTION 2: Micro Content (không export)
// ──────────────────────────────────────────────────────────
function KbdMicroShowcase() {
  return (
    <div className="space-y-10 mt-6">
      {/* ── Kbd đơn ── */}
      <ExampleGrid>
        <ExampleSection
          label="Kbd — Phím đơn"
          description="Hiển thị một phím bàn phím riêng lẻ dùng thẻ <kbd> semantic."
          codeString={`<p className="text-sm text-muted-foreground">
    Press <Kbd>⌘</Kbd> <Kbd>K</Kbd> to open search.
  </p>`}
        >
          <p className="text-sm text-muted-foreground">
            Press <Kbd>⌘</Kbd> <Kbd>K</Kbd> to open search.
          </p>
        </ExampleSection>

        <ExampleSection
          label="KbdGroup — Tổ hợp phím"
          description="Nhóm nhiều phím cạnh nhau với khoảng cách đều. Dùng khi biểu diễn tổ hợp phím như Ctrl+Shift+P."
          codeString={`<p className="text-sm text-muted-foreground flex items-center gap-2">
    Open Command Palette
    <KbdGroup>
      <Kbd>⌘</Kbd>
      <Kbd>⇧</Kbd>
      <Kbd>P</Kbd>
    </KbdGroup>
  </p>`}
        >
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            Open Command Palette
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>⇧</Kbd>
              <Kbd>P</Kbd>
            </KbdGroup>
          </p>
        </ExampleSection>
      </ExampleGrid>

      {/* ── Ký tự & Symbols ── */}
      <ExampleSection
        label="Ký tự & Symbols"
        description="Kbd có thể chứa ký tự Unicode, chữ cái, số hoặc tên phím dài."
        codeString={`<div className="flex flex-wrap items-center gap-2">
    <Kbd>Ctrl</Kbd>
    <Kbd>Alt</Kbd>
    <Kbd>⌘</Kbd>
    <Kbd>⇧</Kbd>
    <Kbd>⌫</Kbd>
    <Kbd>↵</Kbd>
    <Kbd>Tab</Kbd>
    <Kbd>Esc</Kbd>
    <Kbd>F1</Kbd>
    <Kbd>→</Kbd>
  </div>`}
      >
        <div className="flex flex-wrap items-center gap-2">
          <Kbd>Ctrl</Kbd>
          <Kbd>Alt</Kbd>
          <Kbd>⌘</Kbd>
          <Kbd>⇧</Kbd>
          <Kbd>⌫</Kbd>
          <Kbd>↵</Kbd>
          <Kbd>Tab</Kbd>
          <Kbd>Esc</Kbd>
          <Kbd>F1</Kbd>
          <Kbd>→</Kbd>
        </div>
      </ExampleSection>

      {/* ── Kbd trong Tooltip ── */}
      <ExampleSection
        label="Kbd trong Tooltip"
        description="Kbd tự đổi màu khi nằm trong TooltipContent — màu nền sáng trên nền tối của tooltip, không cần thêm class."
        codeString={`<TooltipProvider>
    <Tooltip>
      <TooltipTrigger
        render={
          <Button variant="outline" iconOnly>
            <SaveIcon />
          </Button>
        }
      />
      <TooltipContent>
        Lưu tài liệu <Kbd>⌘</Kbd>
        <Kbd>S</Kbd>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>`}
      >
        <div className="flex items-center gap-3">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger
                render={
                  <Button variant="outline" iconOnly>
                    <SaveIcon aria-hidden="true" />
                  </Button>
                }
              />
              
                <TooltipContent>
                  Lưu tài liệu <Kbd>⌘</Kbd>
                  <Kbd>S</Kbd>
                </TooltipContent>
              
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger
                render={
                  <Button variant="outline" iconOnly>
                    <CopyIcon aria-hidden="true" />
                  </Button>
                }
              />
              
                <TooltipContent>
                  Sao chép <Kbd>⌘</Kbd>
                  <Kbd>C</Kbd>
                </TooltipContent>
              
            </Tooltip>
          </TooltipProvider>
        </div>
      </ExampleSection>

      {/* ── Use case thực tế: Menu với shortcuts ── */}
      <ExampleSection
        label="Use case — Menu với Keyboard Shortcut"
        description="Kbd dùng trong DropdownMenuItem để hiển thị phím tắt bên cạnh label — pattern phổ biến trong text editor, IDE, Figma."
        codeString={`<DropdownMenuItem>
    <FileIcon />
    New File
    <KbdGroup className="ml-auto">
      <Kbd>⌘</Kbd>
      <Kbd>N</Kbd>
    </KbdGroup>
  </DropdownMenuItem>

  <DropdownMenuItem>
    <SaveIcon />
    Save
    <KbdGroup className="ml-auto">
      <Kbd>⌘</Kbd>
      <Kbd>S</Kbd>
    </KbdGroup>
  </DropdownMenuItem>`}
      >
        <DropdownMenu>
          <DropdownMenuTrigger
            render={<Button variant="outline">File menu</Button>}
          />
          
            <DropdownMenuContent className="w-56">
              <DropdownMenuItem>
                <FilePlusIcon aria-hidden="true" />
                New File
                <KbdGroup className="ml-auto">
                  <Kbd>⌘</Kbd>
                  <Kbd>N</Kbd>
                </KbdGroup>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <FolderOpenIcon aria-hidden="true" />
                Open...
                <KbdGroup className="ml-auto">
                  <Kbd>⌘</Kbd>
                  <Kbd>O</Kbd>
                </KbdGroup>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <SaveIcon aria-hidden="true" />
                Save
                <KbdGroup className="ml-auto">
                  <Kbd>⌘</Kbd>
                  <Kbd>S</Kbd>
                </KbdGroup>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <FileIcon aria-hidden="true" />
                Save As...
                <KbdGroup className="ml-auto">
                  <Kbd>⌘</Kbd>
                  <Kbd>⇧</Kbd>
                  <Kbd>S</Kbd>
                </KbdGroup>
              </DropdownMenuItem>
            </DropdownMenuContent>
          
        </DropdownMenu>
      </ExampleSection>

      {/* ── Gợi ý inline trong form ── */}
      <ExampleSection
        label="Gợi ý inline trong văn bản"
        description="Kbd dùng inline trong đoạn văn bản để gợi ý phím tắt — phổ biến trong help text, onboarding, documentation."
        codeString={`<p className="text-sm text-muted-foreground">
    Nhấn <Kbd>Enter</Kbd> để gửi, hoặc{" "}
    <KbdGroup>
      <Kbd>⇧</Kbd>
      <Kbd>Enter</Kbd>
    </KbdGroup>{" "}
    để xuống dòng.
  </p>`}
      >
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">
            Nhấn <Kbd>Enter</Kbd> để gửi, hoặc{" "}
            <KbdGroup>
              <Kbd>⇧</Kbd>
              <Kbd>Enter</Kbd>
            </KbdGroup>{" "}
            để xuống dòng.
          </p>
          <p className="text-sm text-muted-foreground">
            Dùng <Kbd>Tab</Kbd> để chuyển trường, <Kbd>Esc</Kbd> để huỷ.
          </p>
        </div>
      </ExampleSection>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 3: Entry point (export default)
// ──────────────────────────────────────────────────────────
export default function KbdShowcase() {
  return (
    <Showcase
      title="Keyboard Shortcut"
      description="Hiển thị phím tắt bàn phím dạng inline với thẻ HTML semantic <kbd>."
      generalConcept={
        <ShowcaseDocs>
          <DocsP>
            <DocsCode>Kbd</DocsCode> dùng thẻ HTML semantic{" "}
            <DocsCode>&lt;kbd&gt;</DocsCode> để biểu diễn một phím bàn phím.
            Screen reader nhận ra đây là keyboard input thay vì văn bản thường.
          </DocsP>
          <DocsP>
            <DocsCode>KbdGroup</DocsCode> nhóm nhiều <DocsCode>Kbd</DocsCode>{" "}
            lại để tạo tổ hợp phím (ví dụ: ⌘ + ⇧ + P). Kbd tự thích nghi màu sắc
            khi nằm trong <DocsCode>TooltipContent</DocsCode> nhờ data-slot
            context.
          </DocsP>
        </ShowcaseDocs>
      }
      tabs={[{ label: "Micro (Primitive)", content: <KbdMicroShowcase /> }]}
    />
  );
}
