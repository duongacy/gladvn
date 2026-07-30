import {
  CopyIcon,
  FileIcon,
  FilePlusIcon,
  FolderOpenIcon,
  SaveIcon,
} from "lucide-react";

import { Button } from "../../components/micro/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/micro/dropdown-menu";
import { Kbd, KbdGroup } from "../../components/micro/kbd";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/micro/tooltip";
import { useI18n } from "../../dev/components/dev-context";
import {
  DocsCode,
  DocsP,
  ExampleGrid,
  Showcase,
  ShowcaseDocs,
  ShowcaseExample,
} from "../../dev/components/showcase";

function KbdMicroShowcase() {
  const t = useI18n();
  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample
          title={t("Kbd — Phím đơn", "Kbd — Single Key")}
          description={t(
            "Hiển thị một phím bàn phím riêng lẻ dùng thẻ <kbd> semantic.",
            "Displays a single keyboard key using the semantic <kbd> tag.",
          )}
          code={`<p className="text-sm text-muted-foreground">
    Press <Kbd>⌘</Kbd> <Kbd>K</Kbd> to open search.
  </p>`}
          preview={
            <>
              <p className="text-sm text-muted-foreground">
                Press <Kbd>⌘</Kbd> <Kbd>K</Kbd> to open search.
              </p>
            </>
          }
        />

        <ShowcaseExample
          title={t("KbdGroup — Tổ hợp phím", "KbdGroup — Key Combination")}
          description={t(
            "Nhóm nhiều phím cạnh nhau với khoảng cách đều. Use khi biểu diễn tổ hợp phím như Ctrl+Shift+P.",
            "Groups multiple keys side-by-side with equal spacing. Used for key combinations like Ctrl+Shift+P.",
          )}
          code={`<p className="text-sm text-muted-foreground flex items-center gap-2">
    Open Command Palette
    <KbdGroup>
      <Kbd>⌘</Kbd>
      <Kbd>⇧</Kbd>
      <Kbd>P</Kbd>
    </KbdGroup>
  </p>`}
          preview={
            <>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                Open Command Palette
                <KbdGroup>
                  <Kbd>⌘</Kbd>
                  <Kbd>⇧</Kbd>
                  <Kbd>P</Kbd>
                </KbdGroup>
              </p>
            </>
          }
        />
      </ExampleGrid>

      <ShowcaseExample
        title={t("Ký tự & Symbols", "Characters & Symbols")}
        description={t(
          "Kbd có thể chứa ký tự Unicode, chữ cái, số hoặc tên phím dài.",
          "Kbd can contain Unicode characters, letters, numbers, or long key names.",
        )}
        code={`<div className="flex flex-wrap items-center gap-2">
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
        preview={
          <>
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
          </>
        }
      />

      <ShowcaseExample
        title={t("Kbd trong Tooltip", "Kbd in Tooltip")}
        description={t(
          "Kbd tự đổi màu khi nằm trong TooltipContent — màu nền sáng trên nền tối của tooltip, không cần thêm class.",
          "Kbd automatically changes color inside TooltipContent — light background on tooltip's dark background, no extra class needed.",
        )}
        code={`<TooltipProvider>
    <Tooltip>
      <TooltipTrigger
        render={
          <Button variant="outline" iconOnly>
            <SaveIcon />
          </Button>
        }
      />
      <TooltipContent>
        Save document <Kbd>⌘</Kbd>
        <Kbd>S</Kbd>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>`}
        preview={
          <>
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
                    Save document <Kbd>⌘</Kbd>
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
                    Copy <Kbd>⌘</Kbd>
                    <Kbd>C</Kbd>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </>
        }
      />

      <ShowcaseExample
        title={t(
          "Use case — Menu với Keyboard Shortcut",
          "Use Case — Menu with Keyboard Shortcut",
        )}
        description={t(
          "Kbd dùng trong DropdownMenuItem để hiển thị phím tắt bên cạnh label — pattern phổ biến trong text editor, IDE, Figma.",
          "Kbd used in DropdownMenuItem to show shortcuts next to the label — a common pattern in text editors, IDEs, Figma.",
        )}
        code={`<DropdownMenuItem>
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
        preview={
          <>
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
          </>
        }
      />

      <ShowcaseExample
        title={t("Gợi ý inline trong văn bản", "Inline text hint")}
        description={t(
          "Kbd dùng inline trong đoạn văn bản để gợi ý phím tắt — phổ biến trong help text, onboarding, documentation.",
          "Kbd used inline in text to hint at shortcuts — common in help text, onboarding, documentation.",
        )}
        code={`<p className="text-sm text-muted-foreground">
    Press <Kbd>Enter</Kbd> {t("để gửi, hoặc ", "to send, or ")}
    <KbdGroup>
      <Kbd>⇧</Kbd>
      <Kbd>Enter</Kbd>
    </KbdGroup>{" "}
    {t("to newline.", "to newline.")}
  </p>`}
        preview={
          <>
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Press <Kbd>Enter</Kbd> {t("để gửi, hoặc ", "to send, or ")}
                <KbdGroup>
                  <Kbd>⇧</Kbd>
                  <Kbd>Enter</Kbd>
                </KbdGroup>{" "}
                to newline.
              </p>
              <p className="text-sm text-muted-foreground">
                Use <Kbd>Tab</Kbd> to switch fields, <Kbd>Esc</Kbd> to cancel.
              </p>
            </div>
          </>
        }
      />
    </div>
  );
}

export default function KbdShowcase() {
  const t = useI18n();
  return (
    <Showcase
      title={t("Phím tắt (Keyboard Shortcut)", "Keyboard Shortcut")}
      description={t(
        "Hiển thị phím tắt bàn phím dạng inline với thẻ HTML semantic <kbd>.",
        "Displays inline keyboard shortcuts with semantic HTML <kbd> tag.",
      )}
      guideline={
        <ShowcaseDocs>
          <DocsP>
            <DocsCode>Kbd</DocsCode>
            {t(" dùng thẻ HTML semantic ", " uses the semantic HTML tag ")}
            <DocsCode>&lt;kbd&gt;</DocsCode>
            {t(
              " để biểu diễn một phím bàn phím. Screen reader nhận ra đây là keyboard input thay vì văn bản thường.",
              " to represent a keyboard key. Screen readers recognize this as keyboard input instead of regular text.",
            )}
          </DocsP>
          <DocsP>
            <DocsCode>KbdGroup</DocsCode>
            {t(" nhóm nhiều ", " groups multiple ")}
            <DocsCode>Kbd</DocsCode>
            {t(
              " lại để tạo tổ hợp phím (ví dụ: ⌘ + ⇧ + P). Kbd tự thích nghi màu sắc khi nằm trong ",
              " together to create a key combination (e.g., ⌘ + ⇧ + P). Kbd automatically adapts its colors when placed inside ",
            )}
            <DocsCode>TooltipContent</DocsCode>
            {t(" nhờ data-slot context.", " thanks to the data-slot context.")}
          </DocsP>
        </ShowcaseDocs>
      }
      micro={{ content: <KbdMicroShowcase /> }}
    />
  );
}
