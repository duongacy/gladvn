import {
  CheckCircle2Icon,
  CheckIcon,
  LayersIcon,
  UserIcon,
} from "lucide-react";

import { AvatarPreset } from "../../components/macro/avatar-preset";
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "../../components/micro/avatar";
import { useDevContext, useI18n } from "../../dev/components/dev-context";
import {
  DocsP,
  ExampleGrid,
  Showcase,
  ShowcaseDocs,
  ShowcaseExample,
} from "../../dev/components/showcase";
import { type Size } from "../../lib/types";

function AvatarMacroShowcase({ globalSize }: { globalSize: Size }) {
  const t = useI18n();
  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample
          title={t("Tiêu chuẩn", "Standard")}
          description={t(
            "Avatar tự động fallback dựa vào tên truyền vào alt.",
            "Avatar automatically falls back based on the name passed to alt.",
          )}
          code={`<div className="flex items-center gap-4">
    <AvatarPreset
      src="https://github.com/shadcn.png"
      alt="Shadcn"
    />
    <AvatarPreset alt="John Doe" />
    <AvatarPreset />
  </div>`}
          preview={
            <>
              <div className="flex items-center gap-4">
                <AvatarPreset
                  size={globalSize}
                  src="https://github.com/shadcn.png"
                  alt="Shadcn"
                />
                <AvatarPreset size={globalSize} alt="John Doe" />
                <AvatarPreset size={globalSize} />
              </div>
            </>
          }
        />

        <ShowcaseExample
          title={t("Trạng thái", "Status")}
          description={t(
            "Hỗ trợ sẵn các trạng thái: online, offline, away.",
            "Built-in support for states: online, offline, away.",
          )}
          code={`<div className="flex items-center gap-4">
    <AvatarPreset
      src="https://github.com/shadcn.png"
      alt="Shadcn"
      status="online"
    />
    <AvatarPreset alt="Alice" status="away" />
    <AvatarPreset status="offline" />
  </div>`}
          preview={
            <>
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
            </>
          }
        />
      </ExampleGrid>

      <ShowcaseExample
        title={t("Nhóm Avatar", "Avatar Group")}
        description={t(
          "Kết hợp Preset với AvatarGroup để tiết kiệm code.",
          "Combine Preset with AvatarGroup to save code.",
        )}
        code={`<AvatarGroup>
    <AvatarPreset
      src="https://github.com/shadcn.png"
      alt="Shadcn"
    />
    <AvatarPreset alt="Alice Smith" />
    <AvatarPreset alt="Bob Jones" />
    <AvatarGroupCount>+3</AvatarGroupCount>
  </AvatarGroup>`}
        preview={
          <>
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
          </>
        }
      />
    </div>
  );
}

function AvatarMicroShowcase({ globalSize }: { globalSize: Size }) {
  const t = useI18n();
  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample
          title={t("Với hình ảnh", "With Image")}
          description={t(
            "Hiển thị ảnh và sẽ fallback về chữ nếu ảnh lỗi.",
            "Displays an image and falls back to text if the image fails to load.",
          )}
          code={`<div className="flex items-center gap-4">
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
  </div>`}
          preview={
            <>
              <div className="flex items-center gap-4">
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
              </div>
            </>
          }
        />

        <ShowcaseExample
          title={t("Lỗi ảnh & Chỉ có Fallback", "Broken Image & Fallback Only")}
          description={t(
            "Khi không có ảnh hoặc ảnh lỗi, fallback sẽ hiển thị.",
            "When there is no image or the image fails to load, the fallback will display.",
          )}
          code={`<div className="flex items-center gap-4">
    <Avatar>
      <AvatarImage
        src="https://broken-url.invalid/avatar.png"
        alt="broken"
      />
      <AvatarFallback>BR</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarFallback>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-4"
        >
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      </AvatarFallback>
    </Avatar>
  </div>`}
          preview={
            <>
              <div className="flex items-center gap-4">
                <Avatar size={globalSize}>
                  <AvatarImage
                    src="https://broken-url.invalid/avatar.png"
                    alt="broken"
                  />
                  <AvatarFallback>BR</AvatarFallback>
                </Avatar>
                <Avatar size={globalSize}>
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <Avatar size={globalSize}>
                  <AvatarFallback>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-4"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </AvatarFallback>
                </Avatar>
              </div>
            </>
          }
        />
      </ExampleGrid>

      <ShowcaseExample
        title={t("Huy hiệu", "With Badge")}
        description={t(
          "Bạn có thể tự định vị Badge ở bất cứ đâu trên Avatar.",
          "You can position the Badge anywhere on the Avatar.",
        )}
        code={`<div className="flex items-center gap-6">
    <div className="flex flex-col items-center gap-2">
      <Avatar>
        <AvatarImage
          src="https://github.com/shadcn.png"
          alt="@shadcn"
        />
        <AvatarFallback>CN</AvatarFallback>
        <AvatarBadge className="absolute z-10 right-0 bottom-0 bg-green-500" />
      </Avatar>
      <span className="text-xs text-muted-foreground">
        Online
      </span>
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
      <span className="text-xs text-muted-foreground">
        Notification
      </span>
    </div>
  </div>`}
        preview={
          <>
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
                <span className="text-xs text-muted-foreground">
                  Notification
                </span>
              </div>
            </div>
          </>
        }
      />

      <ExampleGrid>
        <ShowcaseExample
          title={t("Nhóm cơ bản", "Basic Group")}
          description={t(
            "Xếp chồng nhiều avatar lên nhau.",
            "Stacks multiple avatars on top of each other.",
          )}
          code={`<AvatarGroup>
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
  </AvatarGroup>`}
          preview={
            <>
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
              </AvatarGroup>
            </>
          }
        />

        <ShowcaseExample
          title={t("Kèm bộ đếm", "With Count")}
          description={t(
            "Hiển thị những avatar còn lại bị ẩn.",
            "Displays the remaining hidden avatars.",
          )}
          code={`<AvatarGroup>
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
    <AvatarGroupCount>+12</AvatarGroupCount>
  </AvatarGroup>`}
          preview={
            <>
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
                <AvatarGroupCount size={globalSize}>+12</AvatarGroupCount>
              </AvatarGroup>
            </>
          }
        />
      </ExampleGrid>
    </div>
  );
}

export default function AvatarShowcase() {
  const { size: globalSize } = useDevContext();
  const t = useI18n();
  return (
    <Showcase
      title={t("Ảnh đại diện", "Avatar")}
      description={t(
        "Hiển thị hình ảnh đại diện của người dùng hoặc các thực thể khác.",
        "Displays the profile image of a user or other entities.",
      )}
      guideline={
        <ShowcaseDocs>
          <DocsP>
            {t(
              "Dùng để hiển thị hình ảnh đại diện cho người dùng, nhóm hoặc tổ chức. Hỗ trợ tự động hiển thị chữ cái viết tắt hoặc icon mặc định khi không tải được ảnh.",
              "Used to display a profile image for a user, group, or organization. Supports automatically displaying initials or a default icon when the image fails to load.",
            )}
          </DocsP>
        </ShowcaseDocs>
      }
      micro={{ content: <AvatarMicroShowcase globalSize={globalSize} /> }}
      macro={{ content: <AvatarMacroShowcase globalSize={globalSize} /> }}
    />
  );
}
