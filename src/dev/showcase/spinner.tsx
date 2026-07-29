import { Spinner } from "../../components/micro/spinner";
import { useI18n } from "../../dev/components/dev-context";
import { useDevContext } from "../../dev/components/dev-context";
import {
  DocsCode,
  DocsH3,
  DocsP,
  ExampleGrid,
  Showcase,
  ShowcaseDocs,
  ShowcaseExample,
} from "../../dev/components/showcase";
import { type Size } from "../../lib/types";

function SpinnerMicroShowcase({ globalSize }: { globalSize: Size }) {
  const t = useI18n();
  return (
    <div className="space-y-10">
      <ShowcaseExample
        title="Default"
        description={t(
          "Spinner mặc định với kích thước được kiểm soát bởi size toggle ở trên.",
          "Default spinner with size controlled by the size toggle above.",
        )}
        code={`<Spinner />
  <Spinner size="sm" />
  <Spinner size="md" />
  <Spinner size="lg" />`}
        preview={
          <>
            <Spinner size={globalSize} />
          </>
        }
      />

      <ExampleGrid>
        <ShowcaseExample
          title="Custom Colors"
          description={t(
            "Truyền className để override màu sắc — Spinner kế thừa currentColor của SVG.",
            "Pass className to override colors — Spinner inherits currentColor from SVG.",
          )}
          code={`<Spinner className="text-primary" />
  <Spinner className="text-destructive" />
  <Spinner className="text-warning" />
  <Spinner className="text-success" />`}
          preview={
            <>
              <div className="flex items-center gap-4">
                <Spinner size={globalSize} className="text-primary" />
                <Spinner size={globalSize} className="text-destructive" />
                <Spinner size={globalSize} className="text-warning" />
                <Spinner size={globalSize} className="text-success" />
              </div>
            </>
          }
        />

        <ShowcaseExample
          title="In Context — Button Loading"
          description={t(
            "Kết hợp Spinner trong Button để mô phỏng trạng thái loading.",
            "Combine Spinner inside a Button to simulate a loading state.",
          )}
          code={`<button
    disabled
    className="flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm opacity-70"
  >
    <Spinner
      size="sm"
      className="text-primary-foreground"
    />
    Saving...
  </button>`}
          preview={
            <>
              <button
                disabled
                className="flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm opacity-70 cursor-not-allowed"
              >
                <Spinner
                  size={globalSize}
                  className="text-primary-foreground"
                />
                Saving...
              </button>
            </>
          }
        />
      </ExampleGrid>

      <ShowcaseExample
        title="Overlay Loading"
        description={t(
          "Đặt Spinner trên một overlay để chặn tương tác trong khi tải nội dung.",
          "Place Spinner on an overlay to block interactions while loading content.",
        )}
        code={`<div className="relative rounded-xl border border-border bg-card h-32">
    <div className="absolute inset-0 flex items-center justify-center bg-background/60 rounded-xl">
      <Spinner size="lg" className="text-primary" />
    </div>
  </div>`}
        preview={
          <>
            <div className="relative rounded-xl border border-border bg-card h-32 w-full max-w-sm">
              <div className="absolute inset-0 flex items-center justify-center bg-background/60 rounded-xl">
                <Spinner size={globalSize} className="text-primary" />
              </div>
              <div className="p-4 text-sm text-muted-foreground">
                Content is loading...
              </div>
            </div>
          </>
        }
      />
    </div>
  );
}

export default function SpinnerShowcase() {
  const t = useI18n();
  const { size: globalSize } = useDevContext();
  return (
    <Showcase
      title="Spinner"
      description={t(
        "Chỉ báo trạng thái đang tải, hỗ trợ nhiều kích thước và màu sắc.",
        "Loading state indicator, supports multiple sizes and colors.",
      )}
      guideline={
        <ShowcaseDocs>
          <DocsH3>Spinner</DocsH3>
          <DocsP>
            {t(
              <>
                <DocsCode>Spinner</DocsCode> render icon{" "}
                <DocsCode>Loader2Icon</DocsCode> với animation{" "}
                <DocsCode>animate-spin</DocsCode>. Tự động tắt animation khi
                người dùng bật <DocsCode>prefers-reduced-motion</DocsCode> (
                <DocsCode>motion-reduce:animate-none</DocsCode>). Màu mặc định
                là <DocsCode>currentColor</DocsCode> — override bằng{" "}
                <DocsCode>className="text-primary"</DocsCode> hoặc tương tự.
              </>,
              <>
                <DocsCode>Spinner</DocsCode> renders the{" "}
                <DocsCode>Loader2Icon</DocsCode> with{" "}
                <DocsCode>animate-spin</DocsCode> animation. Automatically
                disables animation when the user{" "}
                <DocsCode>prefers-reduced-motion</DocsCode> (
                <DocsCode>motion-reduce:animate-none</DocsCode>). Default color
                is <DocsCode>currentColor</DocsCode> — override with{" "}
                <DocsCode>className="text-primary"</DocsCode> or similar.
              </>,
            )}
          </DocsP>
        </ShowcaseDocs>
      }
      micro={{ content: <SpinnerMicroShowcase globalSize={globalSize} /> }}
    />
  );
}
