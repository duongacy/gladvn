import React from "react";

import { Separator } from "@/components/micro/separator";
import { useI18n } from "~app/components/dev-context";
import {
  ConfigurableShowcase,
  ShowcaseDocs,
  DocsH3,
  DocsLi,
  DocsP,
  DocsUl,
  DocsCode,
} from "~app/components/showcase";

function useSeparatorExamples() {
  const t = useI18n();

  return React.useMemo(
    () => [
      {
        title: t("Ngang", "Horizontal"),
        description: t(
          "Sử dụng để phân tách các khối nội dung từ trên xuống dưới.",
          "Used to separate content blocks from top to bottom."
        ),
        microCode: `<div className="w-full max-w-sm rounded-lg border border-border bg-card p-6">
  <div className="space-y-1">
    <h4 className="text-sm font-medium leading-none">
      Gladvn UI
    </h4>
    <p className="text-sm text-muted-foreground">
      Open-source UI Component library.
    </p>
  </div>
  <Separator className="my-4" />
  <div className="text-sm text-muted-foreground">
    Last updated: Today
  </div>
</div>`,
        microPreview: (
          <div className="w-full max-w-sm rounded-lg border border-border bg-card p-6">
            <div className="space-y-1">
              <h4 className="text-sm font-medium leading-none">Gladvn UI</h4>
              <p className="text-sm text-muted-foreground">
                Open-source UI Component library.
              </p>
            </div>
            <Separator className="my-4" />
            <div className="text-sm text-muted-foreground">
              Last updated: Today
            </div>
          </div>
        ),
      },
      {
        title: t("Dọc", "Vertical"),
        description: t(
          "Sử dụng để phân tách các mục nằm ngang (như menu, thanh công cụ).",
          "Used to separate horizontal items (like menus, toolbars)."
        ),
        microCode: `<div className="flex h-5 items-center space-x-4 text-sm">
  <div className="font-medium hover:underline cursor-pointer">
    Blog
  </div>
  <Separator orientation="vertical" className="h-5" />
  <div className="font-medium hover:underline cursor-pointer">
    Tài liệu
  </div>
  <Separator orientation="vertical" className="h-5" />
  <div className="font-medium hover:underline cursor-pointer">
    Mã nguồn
  </div>
</div>`,
        microPreview: (
          <div className="flex h-5 items-center space-x-4 text-sm">
            <div className="font-medium hover:underline cursor-pointer">
              Blog
            </div>
            <Separator orientation="vertical" className="h-5" />
            <div className="font-medium hover:underline cursor-pointer">
              Tài liệu
            </div>
            <Separator orientation="vertical" className="h-5" />
            <div className="font-medium hover:underline cursor-pointer">
              Mã nguồn
            </div>
          </div>
        ),
      },
      {
        title: "Decorative vs Semantic",
        description: t(
          'Semantic (mặc định) được screen reader đọc. Truyền aria-hidden="true" khi Separator chỉ mang tính trang trí thuần.',
          'Semantic (default) is read by screen readers. Pass aria-hidden="true" when the Separator is purely decorative.'
        ),
        microCode: `{/* Semantic — recognized by screen reader */}
<Separator />

{/* Decorative — purely visual line */}
<Separator aria-hidden="true" />`,
        microPreview: (
          <div className="flex flex-col gap-6 w-full max-w-sm">
            <div>
              <p className="text-xs text-muted-foreground mb-2">
                Semantic (default — recognized by screen reader)
              </p>
              <Separator />
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-2">
                Decorative — <code className="text-xs">aria-hidden="true"</code>
              </p>
              <Separator aria-hidden="true" />
            </div>
          </div>
        ),
      },
    ],
    [t]
  );
}

export default function SeparatorShowcase() {
  const t = useI18n();
  const examples = useSeparatorExamples();

  return (
    <ConfigurableShowcase
      title="Separator"
      description={t(
        "Thành phần phân cách trực quan hoặc ngữ nghĩa giữa các khối nội dung (Đường kẻ).",
        "A visual or semantic separator between content blocks (Line)."
      )}
      guideline={
        <ShowcaseDocs>
          <DocsH3>Separator</DocsH3>
          <DocsP>
            {t(
              <>
                <DocsCode>Separator</DocsCode> không có phiên bản Macro vì bản
                chất nó chỉ là một đường kẻ phân tách giao diện. Mặc định là
                đường kẻ ngang (<DocsCode>orientation="horizontal"</DocsCode>).
              </>,
              <>
                <DocsCode>Separator</DocsCode> does not have a Macro version
                because it is essentially just an interface dividing line. The
                default is horizontal line (
                <DocsCode>orientation="horizontal"</DocsCode>).
              </>
            )}
          </DocsP>

          <div className="mt-6 rounded-lg border border-amber-500/20 bg-amber-500/10 p-4">
            <h4 className="mb-2 text-sm font-semibold text-amber-900 dark:text-amber-400">
              {t(
                "⚠️ Lưu ý quan trọng về Layout (Auto Layout/Flexbox)",
                "⚠️ Important Note on Layout (Auto Layout/Flexbox)"
              )}
            </h4>
            <p className="mb-3 text-sm text-amber-900/90 dark:text-amber-200/90">
              {t(
                'Separator rất "nhạy cảm" với cấu trúc flex bên ngoài. Nếu bạn thấy đường kẻ "biến mất" (kích thước bị bóp về 0px), hãy chú ý:',
                'Separator is highly "sensitive" to the outer flex structure. If you see the line "disappear" (size squeezed to 0px), please note:'
              )}
            </p>
            <DocsUl className="mb-0 text-sm text-amber-900/90 dark:text-amber-200/90">
              <DocsLi>
                {t(
                  <>
                    <strong>Horizontal (Kẻ ngang):</strong> Component này mặc
                    định chỉ cấp `h-px`. Vì là thẻ block nên nó tự giãn full
                    ngang, tuy nhiên nếu ném vào{" "}
                    <DocsCode className="bg-transparent border-amber-500/30">
                      flex-row
                    </DocsCode>{" "}
                    tự do mà không set flex basis, width sẽ bị ép thành{" "}
                    <DocsCode className="bg-transparent border-amber-500/30">
                      0px
                    </DocsCode>
                    . Hãy bổ sung{" "}
                    <DocsCode className="bg-transparent border-amber-500/30">
                      w-full
                    </DocsCode>{" "}
                    hoặc{" "}
                    <DocsCode className="bg-transparent border-amber-500/30">
                      flex-1
                    </DocsCode>{" "}
                    nếu cần thiết.
                  </>,
                  <>
                    <strong>Horizontal:</strong> This component by default only
                    provides `h-px`. Since it's a block tag, it stretches full
                    width automatically, but if thrown into a free{" "}
                    <DocsCode className="bg-transparent border-amber-500/30">
                      flex-row
                    </DocsCode>{" "}
                    without setting a flex basis, its width will be squeezed to{" "}
                    <DocsCode className="bg-transparent border-amber-500/30">
                      0px
                    </DocsCode>
                    . Please add{" "}
                    <DocsCode className="bg-transparent border-amber-500/30">
                      w-full
                    </DocsCode>{" "}
                    or{" "}
                    <DocsCode className="bg-transparent border-amber-500/30">
                      flex-1
                    </DocsCode>{" "}
                    if necessary.
                  </>
                )}
              </DocsLi>
              <DocsLi>
                {t(
                  <>
                    <strong>Vertical (Kẻ dọc):</strong> Component chỉ cung cấp
                    `w-px`. Nó hoàn toàn <strong>KHÔNG</strong> tự nội suy chiều
                    cao (no self-stretch, no h-full). Do đó, bạn{" "}
                    <strong>BẮT BUỘC</strong> phải truyền chiều cao rõ ràng từ
                    bên ngoài thông qua{" "}
                    <DocsCode className="bg-transparent border-amber-500/30">
                      className
                    </DocsCode>{" "}
                    (Ví dụ:{" "}
                    <DocsCode className="bg-transparent border-amber-500/30">
                      h-5
                    </DocsCode>
                    ,{" "}
                    <DocsCode className="bg-transparent border-amber-500/30">
                      h-full
                    </DocsCode>
                    , hoặc{" "}
                    <DocsCode className="bg-transparent border-amber-500/30">
                      self-stretch
                    </DocsCode>
                    ).
                  </>,
                  <>
                    <strong>Vertical:</strong> This component only provides
                    `w-px`. It does NOT auto-interpolate height (no
                    self-stretch, no h-full). Therefore, you MUST explicitly
                    pass the height from the outside via{" "}
                    <DocsCode className="bg-transparent border-amber-500/30">
                      className
                    </DocsCode>{" "}
                    (e.g.,{" "}
                    <DocsCode className="bg-transparent border-amber-500/30">
                      h-5
                    </DocsCode>
                    ,{" "}
                    <DocsCode className="bg-transparent border-amber-500/30">
                      h-full
                    </DocsCode>
                    , or{" "}
                    <DocsCode className="bg-transparent border-amber-500/30">
                      self-stretch
                    </DocsCode>
                    ).
                  </>
                )}
              </DocsLi>
            </DocsUl>
          </div>
        </ShowcaseDocs>
      }
      examples={examples}
    />
  );
}
