import { ShieldAlertIcon, SkullIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/micro/accordion";

import { useI18n } from "~app/components/dev-context";

export function TragediesSection() {
  const t = useI18n();

  return (
    <div className="rounded-2xl border border-border bg-card/40 p-6 shadow-sm transition-all hover:shadow-md group">
      <div className="flex items-center justify-between mb-6 border-b border-border/50 pb-4">
        <div>
          <h3 className="font-semibold text-lg flex items-center gap-2">
            <SkullIcon className="size-5 text-destructive" />
            {t("4 Cạm Bẫy Chết Người Của Component UI", "4 Fatal Traps of Component UI")}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            {t(
              "Những câu chuyện có thật từ chiến trường Frontend — và cách triết lý Gladvn giải cứu bạn.",
              "True stories from the Frontend battlefield — and how Gladvn's philosophy saves you."
            )}
          </p>
        </div>
      </div>

      <Accordion className="w-full">
        <AccordionItem value="tragedy-1">
          <AccordionTrigger>
            <span className="flex items-center gap-2">
              <ShieldAlertIcon className="size-4 text-destructive/70" />
              {t("Bi kịch 1: Quái Vật \"God Component\"", "Tragedy 1: The \"God Component\" Monster")}
            </span>
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground space-y-3">
            <p>
              {t(
                <>Bạn cần một <code>Select</code>. Dùng thư viện X, viết một dòng <code>{"<Select options={data} />"}</code> — chạy tốt! Rồi sếp bảo: <em>&quot;Đổi nút Clear thành icon thùng rác, thêm avatar kế bên mỗi option nhé.&quot;</em></>,
                <>You need a <code>Select</code>. Using library X, you write <code>{"<Select options={data} />"}</code> — works great! Then your boss says: <em>&quot;Change the Clear button to a trash icon, add an avatar next to each option.&quot;</em></>
              )}
            </p>
            <p>
              {t(
                <>Bạn bắt đầu lội vào <strong>47 cái props</strong> trên tài liệu: <code>hasClearButton, clearIcon, renderOption, searchPlaceholder...</code> — Component phình to thành một con quái vật 2000 dòng. Đến lúc cần đổi màu viền khi loading, bạn phát hiện tác giả... <strong>quên không làm prop đó</strong>. Giải pháp cuối cùng? Viết CSS bẩn với <code>!important</code> để đè từ bên ngoài.</>,
                <>You start wading through <strong>47 props</strong> in the docs: <code>hasClearButton, clearIcon, renderOption, searchPlaceholder...</code> — The component bloats into a 2000-line monster. When you need to change the border color during loading, you discover the author... <strong>forgot to add that prop</strong>. The final solution? Writing dirty CSS with <code>!important</code> to override it from the outside.</>
              )}
            </p>
            <div className="rounded-lg bg-success/10 border border-success/20 p-3 text-sm">
              {t(
                <><strong className="text-success">✅ Gladvn:</strong> Tầng Micro cho bạn từng mảnh Lego riêng lẻ — <code>{"<SelectTrigger>"}</code>, <code>{"<SelectItem>"}</code> — bạn tự xếp, tự nhét icon, tự quyết. Nếu lười? Dùng <code>SelectPreset</code> (Macro) là xong.</>,
                <><strong className="text-success">✅ Gladvn:</strong> The Micro layer gives you individual Lego pieces — <code>{"<SelectTrigger>"}</code>, <code>{"<SelectItem>"}</code> — you assemble, insert icons, and decide yourself. Feeling lazy? Just use <code>SelectPreset</code> (Macro).</>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="tragedy-2">
          <AccordionTrigger>
            <span className="flex items-center gap-2">
              <ShieldAlertIcon className="size-4 text-destructive/70" />
              {t("Bi kịch 2: Cạm Bẫy \"State Bị Khóa\"", "Tragedy 2: The \"Locked State\" Trap")}
            </span>
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground space-y-3">
            <p>
              {t(
                <>Bạn dùng một Accordion của thư viện Y. Click mở/đóng mượt mà. Tuyệt! Một tuần sau, yêu cầu mới: <em>&quot;Nếu user bấm Submit mà form lỗi, hãy tự động mở Accordion số 3 để hiển thị lỗi.&quot;</em></>,
                <>You use an Accordion from library Y. Clicking open/close is smooth. Great! A week later, a new requirement: <em>&quot;If the user clicks Submit and the form has errors, automatically open Accordion 3 to show the error.&quot;</em></>
              )}
            </p>
            <p>
              {t(
                <>Ác mộng: Component đó quá &quot;thông minh&quot; — nó ôm khư khư cái <code>useState</code> bên trong và <strong>không cho bên ngoài can thiệp</strong>. Bạn không thể truyền <code>{"value=\"item-3\""}</code> vào để ép nó mở ra. Giải pháp cuối cùng? Dùng <code>useRef</code> chọc thẳng vào DOM gọi <code>.click()</code> một cách... hèn hạ.</>,
                <>Nightmare: The component is too &quot;smart&quot; — it tightly hugs its internal <code>useState</code> and <strong>doesn't allow outside intervention</strong>. You can't pass <code>{"value=\"item-3\""}</code> to force it open. The final solution? Using <code>useRef</code> to poke directly into the DOM and call <code>.click()</code> in a... cowardly way.</>
              )}
            </p>
            <div className="rounded-lg bg-success/10 border border-success/20 p-3 text-sm">
              {t(
                <><strong className="text-success">✅ Gladvn:</strong> Micro component hoàn toàn &quot;Ngu&quot; (Dumb) — nó chỉ nhận props và render. State thuộc về Headless UI hoặc tầng Macro. Không bao giờ bị khóa chết.</>,
                <><strong className="text-success">✅ Gladvn:</strong> Micro components are completely &quot;Dumb&quot; — they only receive props and render. State belongs to Headless UI or the Macro layer. It's never deadlocked.</>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="tragedy-3">
          <AccordionTrigger>
            <span className="flex items-center gap-2">
              <ShieldAlertIcon className="size-4 text-destructive/70" />
              {t("Bi kịch 3: Địa Ngục Boilerplate", "Tragedy 3: Boilerplate Hell")}
            </span>
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground space-y-3">
            <p>
              {t(
                <>Thư viện Z chỉ cho bạn Primitives thô (giống Shadcn gốc). Bạn cần làm một form 10 trường. Cứ mỗi trường, bạn phải gõ thủ công:</>,
                <>Library Z only gives you raw Primitives (like original Shadcn). You need to build a 10-field form. For every field, you manually type:</>
              )}
            </p>
            <pre className="rounded-lg bg-muted/50 border border-border p-3 text-xs overflow-x-auto">
              {`<div>
  <Label htmlFor="email-id">Email</Label>
  <Input id="email-id" aria-describedby="email-err" />
  {error && <p id="email-err">{error}</p>}
</div>`}
            </pre>
            <p>
              {t(
                <>Nhân lên <strong>10 lần</strong>. File code phình lên 300 dòng toàn copy-paste. Đến trường thứ 7, bạn copy nhầm <code>id=&quot;email-id&quot;</code> xuống trường Password. Kết quả: click vào Label Password → con trỏ nhảy lên Email. <strong>Trợ năng (a11y) nát bét.</strong></>,
                <>Multiply by <strong>10 times</strong>. The code file bloats to 300 lines of copy-paste. At the 7th field, you mistakenly copy <code>id=&quot;email-id&quot;</code> to the Password field. Result: clicking the Password Label → cursor jumps to Email. <strong>Accessibility (a11y) is completely ruined.</strong></>
              )}
            </p>
            <div className="rounded-lg bg-success/10 border border-success/20 p-3 text-sm">
              {t(
                <><strong className="text-success">✅ Gladvn:</strong> Tầng Macro (<code>InputPreset</code>, <code>FieldPreset</code>) tự sinh unique ID và liên kết ARIA. Bạn chỉ viết <code>{"<InputPreset label=\"Email\" error={error} />"}</code> — xong.</>,
                <><strong className="text-success">✅ Gladvn:</strong> The Macro layer (<code>InputPreset</code>, <code>FieldPreset</code>) auto-generates unique IDs and ARIA links. You just write <code>{"<InputPreset label=\"Email\" error={error} />"}</code> — done.</>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="tragedy-4">
          <AccordionTrigger>
            <span className="flex items-center gap-2">
              <ShieldAlertIcon className="size-4 text-destructive/70" />
              {t("Bi kịch 4: Hội Chứng \"Cố Đấm Ăn Xôi\" với Component", "Tragedy 4: The \"Forcing It\" Component Syndrome")}
            </span>
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground space-y-3">
            <p>
              {t(
                <>Bạn có một <code>Card</code> component làm rất tốt việc hiển thị tiêu đề, nội dung và footer. Rồi designer đưa cho bạn một thiết kế hiển thị thẻ người dùng cực dị: hình đại diện tràn viền, text đè lên ảnh, background chéo.</>,
                <>You have a <code>Card</code> component that perfectly displays titles, content, and footers. Then the designer hands you a bizarre user card design: full-bleed avatar, text overlaying the image, diagonal background.</>
              )}
            </p>
            <p>
              {t(
                <>Vì quá <strong>tôn sùng việc &quot;phải dùng component có sẵn&quot;</strong>, bạn lôi <code>Card</code> ra dùng. Bạn viết những dòng CSS dị hợm đè lên <code>CardHeader</code>, dùng margin âm để kéo ảnh, và ghi đè đến <strong>80% style gốc</strong> của thẻ. Kết quả: code thì xấu, bảo trì thì khó, mà lại phá hỏng cả ý đồ kiến trúc ban đầu.</>,
                <>Because you blindly <strong>worship &quot;must use existing components&quot;</strong>, you grab <code>Card</code>. You write bizarre CSS overriding <code>CardHeader</code>, use negative margins to pull the image, and override <strong>80% of the original styles</strong>. Result: ugly code, hard to maintain, and ruins the original architectural intent.</>
              )}
            </p>
            <div className="rounded-lg bg-success/10 border border-success/20 p-3 text-sm">
              {t(
                <><strong className="text-success">✅ Lời khuyên từ Gladvn:</strong> Component sinh ra để phục vụ bạn, không phải để trói buộc bạn. Nếu một giao diện quá đặc thù, hãy <strong>mạnh dạn vứt component đi và viết freestyle bằng HTML/Tailwind thuần </strong> (<code>{"<div className=\"...\">"}</code>). Dùng đúng công cụ cho đúng việc thì code mới &quot;sướng&quot;.</>,
                <><strong className="text-success">✅ Gladvn Advice:</strong> Components exist to serve you, not to restrict you. If an interface is too custom, <strong>boldly ditch the component and write freestyle with pure HTML/Tailwind </strong> (<code>{"<div className=\"...\">"}</code>). Use the right tool for the job to make coding a joy.</>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
