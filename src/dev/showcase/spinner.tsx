import { Spinner } from "../../components/micro/spinner";
import { useDevContext } from "../../dev/components/dev-context";
import {
  DocsCode,
  DocsH3,
  DocsP,
  ExampleGrid,
  Showcase,
  ShowcaseDocs,
  ShowcaseExample
} from "../../dev/components/showcase";
import { type Size } from "../../lib/types";

function SpinnerMicroShowcase({ globalSize }: { globalSize: Size }) {
  return (
    <div className="space-y-10">
      <ShowcaseExample title="Default" description="Spinner mặc định với kích thước được kiểm soát bởi size toggle ở trên." code={`<Spinner />
  <Spinner size="sm" />
  <Spinner size="md" />
  <Spinner size="lg" />`} preview={
                  <>
          <Spinner size={globalSize} />
                  </>
                } />

      <ExampleGrid>
        <ShowcaseExample title="Custom Colors" description="Truyền className để override màu sắc — Spinner kế thừa currentColor của SVG." code={`<Spinner className="text-primary" />
  <Spinner className="text-destructive" />
  <Spinner className="text-warning" />
  <Spinner className="text-success" />`} preview={
                      <>
              <div className="flex items-center gap-4">
                          <Spinner size={globalSize} className="text-primary" />
                          <Spinner size={globalSize} className="text-destructive" />
                          <Spinner size={globalSize} className="text-warning" />
                          <Spinner size={globalSize} className="text-success" />
                        </div>
                      </>
                    } />

        <ShowcaseExample title="In Context — Button Loading" description="Kết hợp Spinner trong Button để mô phỏng trạng thái loading." code={`<button
    disabled
    className="flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm opacity-70"
  >
    <Spinner
      size="sm"
      className="text-primary-foreground"
    />
    Đang lưu...
  </button>`} preview={
                      <>
              <button
                          disabled
                          className="flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm opacity-70 cursor-not-allowed"
                        >
                          <Spinner size={globalSize} className="text-primary-foreground" />
                          Đang lưu...
                        </button>
                      </>
                    } />
      </ExampleGrid>

      <ShowcaseExample title="Overlay Loading" description="Đặt Spinner trên một overlay để chặn tương tác trong khi tải nội dung." code={`<div className="relative rounded-xl border border-border bg-card h-32">
    <div className="absolute inset-0 flex items-center justify-center bg-background/60 rounded-xl">
      <Spinner size="lg" className="text-primary" />
    </div>
  </div>`} preview={
                  <>
          <div className="relative rounded-xl border border-border bg-card h-32 w-full max-w-sm">
                    <div className="absolute inset-0 flex items-center justify-center bg-background/60 rounded-xl">
                      <Spinner size={globalSize} className="text-primary" />
                    </div>
                    <div className="p-4 text-sm text-muted-foreground">
                      Nội dung đang tải...
                    </div>
                  </div>
                  </>
                } />
    </div>
  );
}

export default function SpinnerShowcase() {
  const { size: globalSize } = useDevContext();
  return (
    <Showcase
      title="Spinner"
      description="Chỉ báo trạng thái đang tải, hỗ trợ nhiều kích thước và màu sắc."
      guideline={
        <ShowcaseDocs>
          <DocsH3>Spinner</DocsH3>
          <DocsP>
            <DocsCode>Spinner</DocsCode> render icon{" "}
            <DocsCode>Loader2Icon</DocsCode> với animation{" "}
            <DocsCode>animate-spin</DocsCode>. Tự động tắt animation khi người
            dùng bật <DocsCode>prefers-reduced-motion</DocsCode> (
            <DocsCode>motion-reduce:animate-none</DocsCode>
            ). Màu mặc định là <DocsCode>currentColor</DocsCode> — override bằng{" "}
            <DocsCode>className="text-primary"</DocsCode> hoặc tương tự.
          </DocsP>
        </ShowcaseDocs>
      }
      micro={{ content: <SpinnerMicroShowcase globalSize={globalSize} /> }}
    />
  );
}
