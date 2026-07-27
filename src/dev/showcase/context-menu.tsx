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
  ContextMenuTrigger
} from "../../components/micro/context-menu";
import {
  DocsP,
  Showcase,
  ShowcaseDocs,
  ShowcaseExample
} from "../../dev/components/showcase";

function ContextMenuMicroShowcase() {
  const [showBookmarks, setShowBookmarks] = useState(true);
  const [showFullUrls, setShowFullUrls] = useState(false);
  const [person, setPerson] = useState("pedro");

  return (
    <div className="space-y-10">
      <ShowcaseExample title="Full Context Menu" description="Nhấp chuột phải vào khu vực bên dưới để mở." code={`<ContextMenu>
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
    
  </ContextMenu>`} preview={
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
                          <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>

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
                          <ContextMenuRadioGroup value={person} onValueChange={setPerson}>
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
                } />

      <ShowcaseExample title="Destructive Variant" description="Context menu với các action nguy hiểm hiển thị màu destructive." code={`<ContextMenu>
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
    
  </ContextMenu>`} preview={
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
                } />
    </div>
  );
}

export default function ContextMenuShowcase() {
  return (
    <Showcase
      title="Context Menu"
      description="Menu ngữ cảnh hiển thị khi click chuột phải — dùng cho các hành động nhanh."
      guideline={
        <ShowcaseDocs>
          <DocsP>
            Dùng để hiển thị danh sách các tuỳ chọn hoặc hành động liên quan tới
            phần tử mà người dùng vừa nhấp chuột phải vào.
          </DocsP>
        </ShowcaseDocs>
      }
      micro={{ content: <ContextMenuMicroShowcase /> }}
    />
  );
}
