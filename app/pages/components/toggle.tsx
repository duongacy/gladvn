import React from "react";
import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";

import { Toggle } from "@/components/micro/toggle";
import { useI18n, useDevContext } from "~app/components/dev-context";
import {
  ConfigurableShowcase,
  ShowcaseDocs,
  DocsH3,
  DocsP,
  DocsCode,
} from "~app/components/showcase";

function useToggleExamples() {
  const t = useI18n();
  const { size: globalSize } = useDevContext();

  return React.useMemo(
    () => [
      {
        title: "Default (Ghost)",
        description: t(
          "Variant mặc định — không viền, chỉ đổi nền khi pressed.",
          "Default variant — no border, only changes background when pressed."
        ),
        microCode: `<Toggle aria-label="Toggle italic">
  <ItalicIcon />
  Italic
</Toggle>
<Toggle aria-label="Toggle bold">
  <BoldIcon />
  Bold
</Toggle>`,
        microPreview: (
          <div className="flex gap-2">
            <Toggle aria-label="Toggle italic" size={globalSize}>
              <ItalicIcon />
              Italic
            </Toggle>
            <Toggle aria-label="Toggle bold" size={globalSize}>
              <BoldIcon />
              Bold
            </Toggle>
          </div>
        ),
      },
      {
        title: "Outline",
        description: t(
          'variant="outline" thêm viền border-input xung quanh toggle.',
          'variant="outline" adds a border-input around the toggle.'
        ),
        microCode: `<Toggle variant="outline" aria-label="Toggle italic">
  <ItalicIcon />
  Italic
</Toggle>
<Toggle variant="outline" aria-label="Toggle underline">
  <UnderlineIcon />
  Underline
</Toggle>`,
        microPreview: (
          <div className="flex gap-2">
            <Toggle
              variant="outline"
              aria-label="Toggle italic"
              size={globalSize}
            >
              <ItalicIcon />
              Italic
            </Toggle>
            <Toggle
              variant="outline"
              aria-label="Toggle underline"
              size={globalSize}
            >
              <UnderlineIcon />
              Underline
            </Toggle>
          </div>
        ),
      },
      {
        title: "Icon Only",
        description: t(
          "Toggle chỉ có icon — luôn truyền aria-label để đảm bảo a11y.",
          "Toggle with icon only — always pass aria-label to ensure a11y."
        ),
        microCode: `<Toggle aria-label="Toggle italic">
  <ItalicIcon />
</Toggle>
<Toggle aria-label="Toggle bold">
  <BoldIcon />
</Toggle>
<Toggle variant="outline" aria-label="Toggle underline">
  <UnderlineIcon />
</Toggle>`,
        microPreview: (
          <div className="flex gap-2">
            <Toggle aria-label="Toggle italic" size={globalSize}>
              <ItalicIcon />
            </Toggle>
            <Toggle aria-label="Toggle bold" size={globalSize}>
              <BoldIcon />
            </Toggle>
            <Toggle
              variant="outline"
              aria-label="Toggle underline"
              size={globalSize}
            >
              <UnderlineIcon />
            </Toggle>
          </div>
        ),
      },
      {
        title: "Disabled",
        description: t(
          "Toggle bị vô hiệu hóa — không thể tương tác, hiển thị mờ.",
          "Disabled toggle — cannot be interacted with, displayed as faded."
        ),
        microCode: `<Toggle disabled aria-label="Toggle italic">
  <ItalicIcon />
  Italic
</Toggle>
<Toggle
  variant="outline"
  disabled
  aria-label="Toggle bold"
>
  <BoldIcon />
  Bold
</Toggle>`,
        microPreview: (
          <div className="flex gap-2">
            <Toggle disabled aria-label="Toggle italic" size={globalSize}>
              <ItalicIcon />
              Italic
            </Toggle>
            <Toggle
              variant="outline"
              disabled
              aria-label="Toggle bold"
              size={globalSize}
            >
              <BoldIcon />
              Bold
            </Toggle>
          </div>
        ),
      },
    ],
    [t, globalSize]
  );
}

export default function ToggleShowcase() {
  const t = useI18n();
  const examples = useToggleExamples();

  return (
    <ConfigurableShowcase
      title="Toggle"
      description={t(
        "Nút hai trạng thái có thể bật hoặc tắt, hỗ trợ icon, text, variants và sizes.",
        "A two-state button that can be toggled on or off, supporting icons, text, variants, and sizes."
      )}
      guideline={
        <ShowcaseDocs>
          <DocsH3>Toggle</DocsH3>
          <DocsP>
            <DocsCode>Toggle</DocsCode>{" "}
            {t(
              "là nút có 2 trạng thái bật/tắt dựa trên",
              "is a button with 2 on/off states based on"
            )}{" "}
            <DocsCode>aria-pressed</DocsCode>
            {t(". Hỗ trợ 2 variant:", ". Supports 2 variants:")}{" "}
            <DocsCode>default</DocsCode>{" "}
            {t("(ghost, không viền) và", "(ghost, no border) and")}{" "}
            <DocsCode>outline</DocsCode>{" "}
            {t("(có viền). Luôn truyền", "(with border). Always pass")}{" "}
            <DocsCode>aria-label</DocsCode>{" "}
            {t(
              "khi Toggle chỉ chứa icon để đảm bảo a11y.",
              "when Toggle contains only an icon to ensure a11y."
            )}
          </DocsP>
        </ShowcaseDocs>
      }
      examples={examples}
    />
  );
}
