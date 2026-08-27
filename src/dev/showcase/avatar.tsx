import React from "react";
import { User } from "lucide-react";

import { AvatarPreset } from "../../components/macro/avatar-preset";
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "../../components/micro/avatar";
import { useDevContext, useI18n } from "../components/dev-context";
import {
  ConfigurableShowcase,
  ShowcaseDocs,
  DocsP,
} from "../components/showcase";

function useAvatarExamples() {
  const t = useI18n();
  const { size: globalSize } = useDevContext();

  return React.useMemo(
    () => [
      {
        title: t("Tiêu chuẩn", "Standard"),
        description: t(
          "Tự động fallback về chữ viết tắt dựa trên tên truyền vào alt, hoặc hiển thị icon mặc định.",
          "Automatically falls back to initials based on the alt name, or displays a default icon."
        ),
        macroCode: `<div className="flex items-center gap-4">
  <AvatarPreset
    src="https://github.com/shadcn.png"
    alt="Shadcn"
  />
  <AvatarPreset alt="John Doe" />
  <AvatarPreset />
</div>`,
        macroPreview: (
          <div className="flex items-center gap-4">
            <AvatarPreset
              size={globalSize}
              src="https://github.com/shadcn.png"
              alt="Shadcn"
            />
            <AvatarPreset size={globalSize} alt="John Doe" />
            <AvatarPreset size={globalSize} />
          </div>
        ),
        microCode: `<div className="flex items-center gap-4">
  <Avatar>
    <AvatarImage
      src="https://github.com/shadcn.png"
      alt="@shadcn"
    />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarFallback>
      <User className="size-4" />
    </AvatarFallback>
  </Avatar>
</div>`,
        microPreview: (
          <div className="flex items-center gap-4">
            <Avatar size={globalSize}>
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar size={globalSize}>
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Avatar size={globalSize}>
              <AvatarFallback>
                <User className="size-4" />
              </AvatarFallback>
            </Avatar>
          </div>
        ),
      },
      {
        title: t("Trạng thái", "Status"),
        description: t(
          "Hiển thị huy hiệu (badge) báo trạng thái hoạt động.",
          "Displays a badge indicating activity status."
        ),
        macroCode: `<div className="flex items-center gap-4">
  <AvatarPreset
    src="https://github.com/shadcn.png"
    alt="Shadcn"
    status="online"
  />
  <AvatarPreset alt="Alice" status="away" />
  <AvatarPreset status="offline" />
</div>`,
        macroPreview: (
          <div className="flex items-center gap-4">
            <AvatarPreset
              size={globalSize}
              src="https://github.com/shadcn.png"
              alt="Shadcn"
              status="online"
            />
            <AvatarPreset size={globalSize} alt="Alice" status="away" />
            <AvatarPreset size={globalSize} status="offline" />
          </div>
        ),
        microCode: `<div className="flex items-center gap-6">
  <div className="flex flex-col items-center gap-2">
    <Avatar>
      <AvatarImage
        src="https://github.com/shadcn.png"
        alt="@shadcn"
      />
      <AvatarFallback>CN</AvatarFallback>
      <AvatarBadge className="absolute z-10 right-0 bottom-0 bg-green-500" />
    </Avatar>
    <span className="text-xs text-muted-foreground">Online</span>
  </div>
  <div className="flex flex-col items-center gap-2">
    <Avatar>
      <AvatarImage
        src="https://github.com/vercel.png"
        alt="@vercel"
      />
      <AvatarFallback>VC</AvatarFallback>
      <AvatarBadge className="absolute z-10 right-0 top-0 bg-red-500" />
    </Avatar>
    <span className="text-xs text-muted-foreground">Notification</span>
  </div>
</div>`,
        microPreview: (
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-center gap-2">
              <Avatar size={globalSize}>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
                <AvatarBadge className="absolute z-10 right-0 bottom-0 bg-green-500" />
              </Avatar>
              <span className="text-xs text-muted-foreground">Online</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar size={globalSize}>
                <AvatarImage
                  src="https://github.com/vercel.png"
                  alt="@vercel"
                />
                <AvatarFallback>VC</AvatarFallback>
                <AvatarBadge className="absolute z-10 right-0 top-0 bg-red-500" />
              </Avatar>
              <span className="text-xs text-muted-foreground">Notification</span>
            </div>
          </div>
        ),
      },
      {
        title: t("Nhóm Avatar", "Avatar Group"),
        description: t(
          "Kết hợp các avatar xếp chồng lên nhau và bộ đếm.",
          "Combine stacked avatars and a count."
        ),
        macroCode: `<AvatarGroup>
  <AvatarPreset
    src="https://github.com/shadcn.png"
    alt="Shadcn"
  />
  <AvatarPreset alt="Alice Smith" />
  <AvatarPreset alt="Bob Jones" />
  <AvatarGroupCount>+3</AvatarGroupCount>
</AvatarGroup>`,
        macroPreview: (
          <div className="flex flex-col gap-4">
            <AvatarGroup>
              <AvatarPreset
                size={globalSize}
                src="https://github.com/shadcn.png"
                alt="Shadcn"
              />
              <AvatarPreset size={globalSize} alt="Alice Smith" />
              <AvatarPreset size={globalSize} alt="Bob Jones" />
              <AvatarGroupCount size={globalSize}>+3</AvatarGroupCount>
            </AvatarGroup>
          </div>
        ),
        microCode: `<AvatarGroup>
  <Avatar>
    <AvatarImage
      src="https://github.com/shadcn.png"
      alt="@shadcn"
    />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarImage
      src="https://github.com/vercel.png"
      alt="@vercel"
    />
    <AvatarFallback>VC</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarImage
      src="https://github.com/leerob.png"
      alt="@leerob"
    />
    <AvatarFallback>LR</AvatarFallback>
  </Avatar>
  <AvatarGroupCount>+12</AvatarGroupCount>
</AvatarGroup>`,
        microPreview: (
          <AvatarGroup>
            <Avatar size={globalSize}>
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar size={globalSize}>
              <AvatarImage
                src="https://github.com/vercel.png"
                alt="@vercel"
              />
              <AvatarFallback>VC</AvatarFallback>
            </Avatar>
            <Avatar size={globalSize}>
              <AvatarImage
                src="https://github.com/leerob.png"
                alt="@leerob"
              />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
            <AvatarGroupCount size={globalSize}>+12</AvatarGroupCount>
          </AvatarGroup>
        ),
      },
    ],
    [globalSize, t]
  );
}

export default function AvatarShowcase() {
  const t = useI18n();
  const examples = useAvatarExamples();

  return (
    <ConfigurableShowcase
      title={t("Ảnh đại diện", "Avatar")}
      description={t(
        "Hiển thị hình ảnh đại diện của người dùng hoặc các thực thể khác.",
        "Displays the profile image of a user or other entities."
      )}
      guideline={
        <ShowcaseDocs>
          <DocsP>
            {t(
              "Dùng để hiển thị hình ảnh đại diện cho người dùng, nhóm hoặc tổ chức. Hỗ trợ tự động hiển thị chữ cái viết tắt hoặc icon mặc định khi không tải được ảnh.",
              "Used to display a profile image for a user, group, or organization. Supports automatically displaying initials or a default icon when the image fails to load."
            )}
          </DocsP>
        </ShowcaseDocs>
      }
      examples={examples}
    />
  );
}
