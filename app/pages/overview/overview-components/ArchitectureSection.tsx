import { cn } from "@/lib/utils";
import { useI18n } from "~app/components/dev-context";
import { CodeBlock } from "./CodeBlock";
import { ComboboxPreset } from "@/components/macro/combobox-preset";
import { 
  Combobox, 
  ComboboxAnchor,
  ComboboxInput, 
  ComboboxContent, 
  ComboboxList, 
  ComboboxCollection, 
  ComboboxItem,
  ComboboxEmpty
} from "@/components/micro/combobox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/micro/avatar";

const frameworks = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Svelte", value: "svelte" },
];

const users = [
  { id: "1", name: "John Doe", email: "john@example.com", avatar: "https://github.com/shadcn.png" },
  { id: "2", name: "Jane Smith", email: "jane@example.com", avatar: "https://github.com/shadcn.png" },
  { id: "3", name: "Alice Johnson", email: "alice@example.com", avatar: "https://github.com/shadcn.png" },
];

export function ArchitectureSection({ className }: { className?: string }) {
  const t = useI18n();

  const SHADCN_CODE = `export function Combobox() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open}>
          {value ? items.find((f) => f.value === value)?.label : "Select..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search..." />
          <CommandEmpty>No item found.</CommandEmpty>
          <CommandGroup>
            {items.map((item) => (
              <CommandItem
                key={item.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue)
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === item.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}`;

  const GLADVN_MACRO_CODE = `import { ComboboxPreset } from "@/components/macro/combobox-preset";

export function StandardForm() {
  return (
    <ComboboxPreset 
      options={frameworks} 
      placeholder="Select framework..." 
    />
  )
}`;

  const GLADVN_MICRO_CODE = `import { 
  Combobox, 
  ComboboxAnchor,
  ComboboxInput, 
  ComboboxContent,
  ComboboxList, 
  ComboboxCollection,
  ComboboxItem 
} from "@/components/micro/combobox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/micro/avatar";

export function CustomComplexFilter() {
  return (
    <Combobox items={users}>
      <ComboboxAnchor>
        <ComboboxInput placeholder="Search user..." />
      </ComboboxAnchor>
      <ComboboxContent>
        <ComboboxList>
           <ComboboxCollection>
             {(user) => (
                <ComboboxItem key={user.id} value={user.id} className="gap-3 py-2">
                   <Avatar size="sm">
                     <AvatarImage src={user.avatar} />
                     <AvatarFallback>{user.name[0]}</AvatarFallback>
                   </Avatar>
                   <div className="flex flex-col">
                      <span className="font-medium text-foreground">{user.name}</span>
                      <span className="text-muted-foreground text-[10px] leading-tight">{user.email}</span>
                   </div>
                </ComboboxItem>
             )}
           </ComboboxCollection>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}`;

  const ARCHITECTURE_LAYERS = [
    {
      tag: "src/components/macro/",
      title: t("Macro — Vùng an toàn", "Macro — The safe zone"),
      desc: t(
        <>Muốn tuỳ chỉnh? Bắt đầu từ đây nhé. Mỗi Macro là một khối độc lập — thêm footer cho DatePicker, giấu nút đóng của Dialog... Cứ thoải mái vọc, sửa cái nào chỉ ảnh hưởng cái đó thôi, chả lo "cháy nhà" hàng xóm.</>,
        <>Want to customize? Start here. Each Macro is an independent block — add a footer to a DatePicker, hide a Dialog's close button... Feel free to tinker, changing one thing only affects itself, no fear of breaking the neighbors.</>
      ),
    },
    {
      tag: "src/components/micro/",
      title: t("Micro — Lãnh địa cốt lõi", "Micro — The core territory"),
      desc: t(
        <>Mọi thứ đều xây từ đây. Các thành phần "ngu" (Dumb Components) chỉ chứa giao diện. Sửa cái padding của Button hay animation của Tooltip thì <strong>cả app sẽ ăn theo</strong>. Thiết kế dị biệt đến đâu cũng có thể lắp ghép được từ Micro!</>,
        <>Everything is built from here. Dumb Components containing only UI logic. Changing a Button's padding or a Tooltip's animation means <strong>the whole app follows suit</strong>. Assemble any weird design using Micro!</>
      ),
    },
    {
      tag: "src/blocks/",
      title: t("Blocks — Lắp ghép linh hoạt", "Blocks — Flexible assembly"),
      desc: t(
        <>Nơi bạn lắp ráp Micro và Macro lại thành một Page hoặc Layout hoàn chỉnh. Không ai ép bạn phải dùng 100% Micro hay Macro. Code sao cho bản thân thấy sướng là được!</>,
        <>Where you assemble Micro and Macro into a complete Page or Layout. Nobody forces you to use 100% Micro or Macro. Just code however makes you happy!</>
      ),
    },
    {
      tag: "src/index.css",
      title: t("CSS Token — Ảnh hưởng toàn cục", "CSS Tokens — Global impact"),
      desc: t(
        <>Nơi quyết định màu sắc, font, độ bo góc. Đổi một biến ở đây là <strong>giao diện lột xác toàn tập</strong>. Rất đã khi cần thay áo mới (rebrand) — nhưng đừng dùng để vá lỗi vặt.</>,
        <>Where colors, fonts, and border radii are determined. Change a variable here and the <strong>entire UI transforms</strong>. Great for rebranding — but don't use it for quick localized fixes.</>
      ),
    }
  ] as const;

  return (
    <section className={cn("w-full", className)}>
      <h2 className="font-serif text-4xl sm:text-5xl font-black mb-6 text-foreground tracking-tighter leading-tight">
        {t("Architectural Layers", "Architectural Layers")}
      </h2>
      <p className="text-lg leading-[1.8] text-muted-foreground mb-12 max-w-3xl">
        {t(
          "Ngừng đánh vật với những file component nguyên khối dài hàng trăm dòng. GLADVN mang đến sức mạnh của sự phân tách rạch ròi thông qua triết lý Micro & Macro.",
          "Stop wrestling with monolithic component files spanning hundreds of lines. GLADVN brings the power of strict separation with the Micro & Macro philosophy."
        )}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* SHADCN / Monolith */}
        <div className="space-y-4">
           <h3 className="font-bold text-xl text-foreground">
              {t("Các thư viện khác (Kiến trúc Cục gạch)", "Other Libraries (Monolithic Block)")}
           </h3>
           <p className="text-muted-foreground min-h-[5.5rem]">
              {t("Nhận về một file 200 dòng nhồi nhét cả giao diện lẫn logic. Bạn muốn chế cháo thêm một cái avatar vào menu? Chúc may mắn, vì bạn rất dễ làm gãy luôn tính năng điều hướng bằng bàn phím (keyboard navigation) của nó!", "You get a 200-line file stuffing both UI and logic. Want to hack an avatar into the menu? Good luck, you'll likely break its keyboard navigation in the process!")}
           </p>
           <div className="w-full">
             <CodeBlock type="destructive" title="Monolithic Component (shadcn/ui style)">
               <pre className="whitespace-pre-wrap break-all"><code>{SHADCN_CODE}</code></pre>
             </CodeBlock>
           </div>
        </div>

        {/* GLADVN Micro/Macro */}
        <div className="space-y-4">
           <h3 className="font-bold text-xl text-foreground">
              {t("Kiến trúc GLADVN (Micro & Macro)", "GLADVN Architecture (Micro & Macro)")}
           </h3>
           <p className="text-muted-foreground min-h-[5.5rem]">
              {t("Chẻ component ra làm 2 tầng để xoá bỏ cấu trúc nguyên khối (Monolith). Macro (Mì ăn liền) đã bọc sẵn logic, gọi 1 dòng là chạy. Micro (Lắp Lego) bóc tách toàn bộ phần nhìn, dùng để tự do xếp hình khi gặp giao diện dị biệt.", "Splits components into 2 layers to break the Monolithic structure. Macro (Instant Noodles) wraps logic for 1-line plug & play. Micro (Lego Bricks) extracts pure UI, letting you freely assemble weird designs without breaking logic.")}
           </p>
           
           <div className="space-y-6 w-full">
             <CodeBlock 
               type="success" 
               title="Macro — Plug & Play"
               preview={
                 <div className="w-full max-w-sm">
                   <ComboboxPreset 
                     options={frameworks} 
                     placeholder="Select framework..." 
                   />
                 </div>
               }
             >
               <pre className="whitespace-pre-wrap break-all"><code>{GLADVN_MACRO_CODE}</code></pre>
             </CodeBlock>

             <CodeBlock 
               type="success" 
               title="Micro — Lego Bricks (Pure Flexibility)"
               preview={
                 <div className="w-full max-w-sm">
                   <Combobox items={users}>
                     <ComboboxAnchor>
                       <ComboboxInput placeholder="Search user..." />
                     </ComboboxAnchor>
                     <ComboboxContent>
                       <ComboboxEmpty>No users found.</ComboboxEmpty>
                       <ComboboxList>
                          <ComboboxCollection>
                            {(item: typeof users[0]) => (
                               <ComboboxItem key={item.id} value={item.id} className="gap-3 py-2">
                                  <Avatar size="sm">
                                    <AvatarImage src={item.avatar} />
                                    <AvatarFallback>{item.name[0]}</AvatarFallback>
                                  </Avatar>
                                  <div className="flex flex-col">
                                     <span className="font-medium text-foreground">{item.name}</span>
                                     <span className="text-muted-foreground text-[10px] leading-tight">{item.email}</span>
                                  </div>
                               </ComboboxItem>
                            )}
                          </ComboboxCollection>
                       </ComboboxList>
                     </ComboboxContent>
                   </Combobox>
                 </div>
               }
             >
               <pre className="whitespace-pre-wrap break-all"><code>{GLADVN_MICRO_CODE}</code></pre>
             </CodeBlock>
           </div>
        </div>
      </div>
      
      {/* Detail list */}
      <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10 border-t border-border pt-16">
        {ARCHITECTURE_LAYERS.map((layer, idx) => (
          <div key={idx} className="space-y-2">
            <h3 className="font-semibold text-xl text-foreground flex items-baseline gap-2">
              <span className="font-mono text-sm px-2 py-0.5 rounded-md bg-muted/50 text-muted-foreground">{layer.tag}</span>
            </h3>
            <h4 className="font-semibold text-lg">{layer.title}</h4>
            <p className="text-base leading-[1.8] text-muted-foreground">
              {layer.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
