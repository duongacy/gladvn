import { ShieldAlertIcon, SkullIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/micro/accordion";

export function TragediesSection() {
  return (
    <div className="rounded-2xl border border-border bg-card/40 p-6 shadow-sm transition-all hover:shadow-md group">
      <div className="flex items-center justify-between mb-6 border-b border-border/50 pb-4">
        <div>
          <h3 className="font-semibold text-lg flex items-center gap-2">
            <SkullIcon className="size-5 text-destructive" />
            3 Bi Kịch Khi Thiếu Micro/Macro
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            Những câu chuyện có thật từ chiến trường Frontend — và lý do Gladvn
            được thiết kế khác.
          </p>
        </div>
      </div>

      <Accordion className="w-full">
        <AccordionItem value="tragedy-1">
          <AccordionTrigger>
            <span className="flex items-center gap-2">
              <ShieldAlertIcon className="size-4 text-destructive/70" />
              Bi kịch 1: Quái Vật &quot;God Component&quot;
            </span>
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground space-y-3">
            <p>
              Bạn cần một <code>Select</code>. Dùng thư viện X, viết một dòng{" "}
              <code>{"<Select options={data} />"}</code> — chạy tốt! Rồi sếp
              bảo:{" "}
              <em>
                &quot;Đổi nút Clear thành icon thùng rác, thêm avatar kế bên mỗi
                option nhé.&quot;
              </em>
            </p>
            <p>
              Bạn bắt đầu lội vào <strong>47 cái props</strong> trên tài liệu:{" "}
              <code>
                hasClearButton, clearIcon, renderOption, searchPlaceholder...
              </code>{" "}
              — Component phình to thành một con quái vật 2000 dòng. Đến lúc cần
              đổi màu viền khi loading, bạn phát hiện tác giả...{" "}
              <strong>quên không làm prop đó</strong>. Giải pháp cuối cùng? Viết
              CSS bẩn với <code>!important</code> để đè từ bên ngoài.
            </p>
            <div className="rounded-lg bg-success/10 border border-success/20 p-3 text-sm">
              <strong className="text-success">✅ Gladvn:</strong> Tầng Micro
              cho bạn từng mảnh Lego riêng lẻ — <code>{"<SelectTrigger>"}</code>
              , <code>{"<SelectItem>"}</code> — bạn tự xếp, tự nhét icon, tự
              quyết. Nếu lười? Dùng <code>SelectPreset</code> (Macro) là xong.
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="tragedy-2">
          <AccordionTrigger>
            <span className="flex items-center gap-2">
              <ShieldAlertIcon className="size-4 text-destructive/70" />
              Bi kịch 2: Cạm Bẫy &quot;State Bị Khóa&quot;
            </span>
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground space-y-3">
            <p>
              Bạn dùng một Accordion của thư viện Y. Click mở/đóng mượt mà.
              Tuyệt! Một tuần sau, yêu cầu mới:{" "}
              <em>
                &quot;Nếu user bấm Submit mà form lỗi, hãy tự động mở Accordion
                số 3 để hiển thị lỗi.&quot;
              </em>
            </p>
            <p>
              Ác mộng: Component đó quá &quot;thông minh&quot; — nó ôm khư khư
              cái <code>useState</code> bên trong và{" "}
              <strong>không cho bên ngoài can thiệp</strong>. Bạn không thể
              truyền <code>{"value=\"item-3\""}</code> vào để ép nó mở ra. Giải
              pháp cuối cùng? Dùng <code>useRef</code> chọc thẳng vào DOM gọi{" "}
              <code>.click()</code> một cách... hèn hạ.
            </p>
            <div className="rounded-lg bg-success/10 border border-success/20 p-3 text-sm">
              <strong className="text-success">✅ Gladvn:</strong> Micro
              component hoàn toàn &quot;Ngu&quot; (Dumb) — nó chỉ nhận props và
              render. State thuộc về Headless UI hoặc tầng Macro. Không bao giờ
              bị khóa chết.
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="tragedy-3">
          <AccordionTrigger>
            <span className="flex items-center gap-2">
              <ShieldAlertIcon className="size-4 text-destructive/70" />
              Bi kịch 3: Địa Ngục Boilerplate
            </span>
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground space-y-3">
            <p>
              Thư viện Z chỉ cho bạn Primitives thô (giống Shadcn gốc). Bạn cần
              làm một form 10 trường. Cứ mỗi trường, bạn phải gõ thủ công:
            </p>
            <pre className="rounded-lg bg-muted/50 border border-border p-3 text-xs overflow-x-auto">
              {`<div>
  <Label htmlFor="email-id">Email</Label>
  <Input id="email-id" aria-describedby="email-err" />
  {error && <p id="email-err">{error}</p>}
</div>`}
            </pre>
            <p>
              Nhân lên <strong>10 lần</strong>. File code phình lên 300 dòng
              toàn copy-paste. Đến trường thứ 7, bạn copy nhầm{" "}
              <code>id=&quot;email-id&quot;</code> xuống trường Password. Kết
              quả: click vào Label Password → con trỏ nhảy lên Email.{" "}
              <strong>Trợ năng (a11y) nát bét.</strong>
            </p>
            <div className="rounded-lg bg-success/10 border border-success/20 p-3 text-sm">
              <strong className="text-success">✅ Gladvn:</strong> Tầng Macro (
              <code>InputPreset</code>, <code>FieldPreset</code>) tự sinh unique
              ID và liên kết ARIA. Bạn chỉ viết{" "}
              <code>{"<InputPreset label=\"Email\" error={error} />"}</code> —
              xong.
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
