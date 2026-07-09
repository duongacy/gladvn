import {
  ExampleGrid,
  ExampleSection,
  SectionHeader,
} from "@/dev/components/showcase";
import { DownloadIcon, MailIcon, PlusIcon } from "lucide-react";
import { useState } from "react";

import { SelectPreset } from "@/components/macro/select-preset";
import { Button, ButtonIcon } from "@/components/micro/button";
import { Spinner } from "@/components/micro/spinner";
import { type Size } from "@/lib/types";

export default function ButtonShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => setIsDeleting(false), 1500);
  };

  const handleSend = () => {
    setIsSending(true);
    setTimeout(() => setIsSending(false), 1500);
  };

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Button"
        description="Kích hoạt một hành động hoặc sự kiện, chẳng hạn như gửi biểu mẫu hoặc mở hộp thoại."
      >
        <SelectPreset
          value={globalSize}
          onValueChange={(v) => setGlobalSize(v as Size)}
          options={[
            { value: "sm", label: "Size: sm" },
            { value: "md", label: "Size: md" },
            { value: "lg", label: "Size: lg" },
          ]}
          className="w-[120px] h-8 text-xs bg-background"
        />
      </SectionHeader>

      {/* ── Variants ── */}
      <ExampleSection
        label="Variants"
        description="Tất cả các kiểu hiển thị hiện có."
        codeString={`<Button variant="solid">
  Solid
</Button>
<Button variant="outline">
  Outline
</Button>
<Button variant="soft">
  Soft
</Button>
<Button variant="ghost">
  Ghost
</Button>
<Button variant="link">
  Link
</Button>
`}
      >
        <Button size={globalSize} variant="solid">
          Solid
        </Button>
        <Button size={globalSize} variant="outline">
          Outline
        </Button>
        <Button size={globalSize} variant="soft">
          Soft
        </Button>
        <Button size={globalSize} variant="ghost">
          Ghost
        </Button>
        <Button size={globalSize} variant="link">
          Link
        </Button>
      </ExampleSection>

      {/* ── Colors ── */}
      <ExampleSection
        label="Colors"
        description="Màu sắc theo ngữ nghĩa đi kèm với biến thể solid."
        codeString={`<Button color="primary">
  Primary
</Button>
<Button color="secondary">
  Secondary
</Button>
<Button color="destructive">
  Destructive
</Button>
<Button color="warning">
  Warning
</Button>
<Button color="success">
  Success
</Button>
<Button color="info">
  Info
</Button>
<Button color="tertiary">
  Tertiary
</Button>
<Button color="muted">
  Muted
</Button>
<Button color="accent">
  Accent
</Button>
`}
      >
        <Button size={globalSize} color="primary">
          Primary
        </Button>
        <Button size={globalSize} color="secondary">
          Secondary
        </Button>
        <Button size={globalSize} color="destructive">
          Destructive
        </Button>
        <Button size={globalSize} color="warning">
          Warning
        </Button>
        <Button size={globalSize} color="success">
          Success
        </Button>
        <Button size={globalSize} color="info">
          Info
        </Button>
        <Button size={globalSize} color="tertiary">
          Tertiary
        </Button>
        <Button size={globalSize} color="muted">
          Muted
        </Button>
        <Button size={globalSize} color="accent">
          Accent
        </Button>
      </ExampleSection>

      {/* ── With Icon ── */}
      <ExampleGrid columns={2}>
        <ExampleSection
          label="With Icon"
          description="Nút kèm biểu tượng ở đầu hoặc cuối."
          codeString={`<Button variant="outline">
  <ButtonIcon render={<MailIcon />} />
  Login with Email
</Button>
<Button>
  <ButtonIcon render={<DownloadIcon />} />
  Download
</Button>
`}
        >
          <Button size={globalSize} variant="outline">
            <ButtonIcon render={<MailIcon />} />
            Login with Email
          </Button>
          <Button size={globalSize}>
            <ButtonIcon render={<DownloadIcon />} />
            Download
          </Button>
        </ExampleSection>

        <ExampleSection
          label="Icon Only"
          description="Nút hình vuông chỉ chứa biểu tượng."
          codeString={`<Button variant="outline" iconOnly={true}>
  <ButtonIcon render={<PlusIcon />} />
</Button>
<Button variant="ghost" iconOnly={true}>
  <ButtonIcon render={<MailIcon />} />
</Button>
<Button variant="soft" iconOnly={true}>
  <ButtonIcon render={<DownloadIcon />} />
</Button>
`}
        >
          <Button size={globalSize} variant="outline" iconOnly={true}>
            <ButtonIcon render={<PlusIcon />} />
          </Button>
          <Button size={globalSize} variant="ghost" iconOnly={true}>
            <ButtonIcon render={<MailIcon />} />
          </Button>
          <Button size={globalSize} variant="soft" iconOnly={true}>
            <ButtonIcon render={<DownloadIcon />} />
          </Button>
        </ExampleSection>
      </ExampleGrid>

      {/* ── Disabled ── */}
      <ExampleSection
        label="Disabled"
        description="Trạng thái nút không thể tương tác."
        codeString={`<Button disabled>
  Solid Disabled
</Button>
<Button variant="outline" disabled>
  Outline Disabled
</Button>
<Button variant="soft" disabled>
  Soft Disabled
</Button>
<Button variant="ghost" disabled>
  Ghost Disabled
</Button>
<Button variant="link" disabled>
  Link Disabled
</Button>
`}
      >
        <Button size={globalSize} disabled>
          Solid Disabled
        </Button>
        <Button size={globalSize} variant="outline" disabled>
          Outline Disabled
        </Button>
        <Button size={globalSize} variant="soft" disabled>
          Soft Disabled
        </Button>
        <Button size={globalSize} variant="ghost" disabled>
          Ghost Disabled
        </Button>
        <Button size={globalSize} variant="link" disabled>
          Link Disabled
        </Button>
      </ExampleSection>

      {/* ── Real-world examples ── */}
      <ExampleGrid columns={2}>
        <ExampleSection
          label="Loading State"
          description="Nút kèm spinner trong quá trình xử lý bất đồng bộ."
          fullWidth
          codeString={`<Button color="primary" className="w-full" disabled={isSending} onClick={handleSend}>
  {isSending && <Spinner />}
  {isSending ? "Sending..." : "Send Message"}
</Button>
<Button variant="outline" className="w-full">
  Save Draft
</Button>`}
        >
          <div className="flex flex-col gap-3 w-full max-w-xs mx-auto">
            <Button
              size={globalSize}
              color="primary"
              className="w-full"
              disabled={isSending}
              onClick={handleSend}
            >
              {isSending && <Spinner />}
              {isSending ? "Sending..." : "Send Message"}
            </Button>
            <Button size={globalSize} variant="outline" className="w-full">
              Save Draft
            </Button>
          </div>
        </ExampleSection>

        <ExampleSection
          label="Destructive"
          description="Xác nhận một hành động nguy hiểm."
          fullWidth
          codeString={`<Button color="destructive" className="w-full mt-1" disabled={isDeleting} onClick={handleDelete}>
  {isDeleting && <Spinner />}
  {isDeleting ? "Deleting..." : "Delete Permanently"}
</Button>`}
        >
          <div className="w-full max-w-xs mx-auto rounded-lg border border-destructive/20 bg-destructive/5 p-4 flex flex-col gap-2">
            <p className="text-sm font-medium">Delete Workspace</p>
            <p className="text-xs text-muted-foreground">
              This action cannot be undone. All data will be lost.
            </p>
            <Button
              size={globalSize}
              color="destructive"
              className="w-full mt-1"
              disabled={isDeleting}
              onClick={handleDelete}
            >
              {isDeleting && <Spinner />}
              {isDeleting ? "Deleting..." : "Delete Permanently"}
            </Button>
          </div>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
