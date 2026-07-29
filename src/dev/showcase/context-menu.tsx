import { useState } from "react";

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "../../components/micro/context-menu";
import { useI18n } from "../../dev/components/dev-context";
import {
  DocsP,
  Showcase,
  ShowcaseDocs,
  ShowcaseExample,
} from "../../dev/components/showcase";

function ContextMenuMicroShowcase() {
  const t = useI18n();
  const [showBookmarks, setShowBookmarks] = useState(true);
  const [showFullUrls, setShowFullUrls] = useState(false);
  const [person, setPerson] = useState("pedro");

  return (
    <div className="space-y-10">
      <ShowcaseExample
        title={t("Menu đầy đủ", "Full Context Menu")}
        description={t(
          "Nhấp chuột phải vào khu vực bên dưới để mở.",
          "Right-click the area below to open.",
        )}
        code={`<ContextMenu>
    <ContextMenuTrigger className="flex h-[150px] w-full max-w-100 items-center justify-center rounded-md border border-border border-dashed text-sm">
      Right click here
    </ContextMenuTrigger>
    
      <ContextMenuContent className="w-64">
        <ContextMenuItem inset>
          Back
          <ContextMenuShortcut>⌘[</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset disabled>
          Forward
          <ContextMenuShortcut>⌘]</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset>
          Reload
          <ContextMenuShortcut>⌘R</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger inset>
            More Tools
          </ContextMenuSubTrigger>
          
            <ContextMenuSubContent className="w-48">
              <ContextMenuItem>
                Save Page As...
                <ContextMenuShortcut>
                  ⇧⌘S
                </ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                Create Shortcut...
              </ContextMenuItem>
              <ContextMenuItem>
                Name Window...
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem>
                Developer Tools
              </ContextMenuItem>
            </ContextMenuSubContent>
          
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem
          checked={showBookmarks}
          onCheckedChange={setShowBookmarks}
        >
          Show Bookmarks Bar
          <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem
          checked={showFullUrls}
          onCheckedChange={setShowFullUrls}
        >
          Show Full URLs
        </ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuLabel inset>People</ContextMenuLabel>
          <ContextMenuSeparator />
          <ContextMenuRadioGroup
            value={person}
            onValueChange={setPerson}
          >
            <ContextMenuRadioItem value="pedro">
              Pedro Duarte
            </ContextMenuRadioItem>
            <ContextMenuRadioItem value="colm">
              Colm Tuite
            </ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuGroup>
      </ContextMenuContent>
    
  </ContextMenu>`}
        preview={
          <>
            <ContextMenu>
              <ContextMenuTrigger className="flex h-[150px] w-full max-w-100 items-center justify-center rounded-md border border-border border-dashed text-sm">
                Right click here
              </ContextMenuTrigger>

              <ContextMenuContent className="w-64">
                <ContextMenuItem inset>
                  Back
                  <ContextMenuShortcut>⌘[</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem inset disabled>
                  Forward
                  <ContextMenuShortcut>⌘]</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem inset>
                  Reload
                  <ContextMenuShortcut>⌘R</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuSub>
                  <ContextMenuSubTrigger inset>
                    More Tools
                  </ContextMenuSubTrigger>

                  <ContextMenuSubContent className="w-48">
                    <ContextMenuItem>
                      Save Page As...
                      <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuItem>Create Shortcut...</ContextMenuItem>
                    <ContextMenuItem>Name Window...</ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuItem>Developer Tools</ContextMenuItem>
                  </ContextMenuSubContent>
                </ContextMenuSub>
                <ContextMenuSeparator />
                <ContextMenuCheckboxItem
                  checked={showBookmarks}
                  onCheckedChange={setShowBookmarks}
                >
                  Show Bookmarks Bar
                  <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
                </ContextMenuCheckboxItem>
                <ContextMenuCheckboxItem
                  checked={showFullUrls}
                  onCheckedChange={setShowFullUrls}
                >
                  Show Full URLs
                </ContextMenuCheckboxItem>
                <ContextMenuSeparator />
                <ContextMenuGroup>
                  <ContextMenuLabel inset>People</ContextMenuLabel>
                  <ContextMenuSeparator />
                  <ContextMenuRadioGroup
                    value={person}
                    onValueChange={setPerson}
                  >
                    <ContextMenuRadioItem value="pedro">
                      Pedro Duarte
                    </ContextMenuRadioItem>
                    <ContextMenuRadioItem value="colm">
                      Colm Tuite
                    </ContextMenuRadioItem>
                  </ContextMenuRadioGroup>
                </ContextMenuGroup>
              </ContextMenuContent>
            </ContextMenu>
          </>
        }
      />

      <ShowcaseExample
        title={t("Biến thể Nguy hiểm", "Destructive Variant")}
        description={t(
          "Context menu với các action nguy hiểm hiển thị màu destructive.",
          "Context menu with dangerous actions highlighted in destructive color.",
        )}
        code={`<ContextMenu>
    <ContextMenuTrigger className="flex h-25 w-full max-w-75 items-center justify-center rounded-md border border-border border-dashed text-sm">
      Right click here
    </ContextMenuTrigger>
    
      <ContextMenuContent className="w-52">
        <ContextMenuItem>
          Rename
          <ContextMenuShortcut>⌘R</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>Duplicate</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">
          Delete
          <ContextMenuShortcut>⌫</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    
  </ContextMenu>`}
        preview={
          <>
            <ContextMenu>
              <ContextMenuTrigger className="flex h-25 w-full max-w-75 items-center justify-center rounded-md border border-border border-dashed text-sm">
                Right click here
              </ContextMenuTrigger>

              <ContextMenuContent className="w-52">
                <ContextMenuItem>
                  Rename
                  <ContextMenuShortcut>⌘R</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>Duplicate</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem variant="destructive">
                  Delete
                  <ContextMenuShortcut>⌫</ContextMenuShortcut>
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </>
        }
      />
    </div>
  );
}

export default function ContextMenuShowcase() {
  const t = useI18n();
  return (
    <Showcase
      title="Context Menu"
      description={t(
        "Menu ngữ cảnh hiển thị khi click chuột phải — dùng cho các hành động nhanh.",
        "Context menu appearing on right-click — used for quick actions.",
      )}
      guideline={
        <ShowcaseDocs>
          <DocsP>
            {t(
              "Dùng để hiển thị danh sách các tuỳ chọn hoặc hành động liên quan tới phần tử mà người dùng vừa nhấp chuột phải vào.",
              "Used to display a list of options or actions related to the element the user just right-clicked.",
            )}
          </DocsP>
        </ShowcaseDocs>
      }
      micro={{ content: <ContextMenuMicroShowcase /> }}
    />
  );
}
