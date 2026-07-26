import {
  CheckCircle2Icon,
  CheckIcon,
  LayersIcon,
  UserIcon
} from "lucide-react";

import { AvatarPreset } from "../../components/macro/avatar-preset";
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage
} from "../../components/micro/avatar";
import { useDevContext } from "../../dev/components/dev-context";
import {
  DocsP,
  ExampleGrid,
  ShowcaseExample,
  Showcase,
  ShowcaseDocs
} from "../../dev/components/showcase";
import { type Size } from "../../lib/types";

function AvatarMacroShowcase({ globalSize }: { globalSize: Size }) {
  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample title="Tiêu chuẩn (Standard)" description="Avatar tự động fallback dựa vào tên truyền vào alt." code={`<div className="flex items-center gap-4">
    <AvatarPreset
      src="https://github.com/shadcn.png"
      alt="Shadcn"
    />
    <AvatarPreset alt="John Doe" />
    <AvatarPreset />
  </div>`} preview={
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
                    } />

        <ShowcaseExample title="Trạng thái (Status)" description="Hỗ trợ sẵn các trạng thái: online, offline, away." code={`<div className="flex items-center gap-4">
    <AvatarPreset
      src="https://github.com/shadcn.png"
      alt="Shadcn"
      status="online"
    />
    <AvatarPreset alt="Alice" status="away" />
    <AvatarPreset status="offline" />
  </div>`} preview={
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
                    } />
      </ExampleGrid>

      <ShowcaseExample title="Nhóm Avatar (Avatar Group)" description="Kết hợp Preset với AvatarGroup để tiết kiệm code." code={`<AvatarGroup>
    <AvatarPreset
      src="https://github.com/shadcn.png"
      alt="Shadcn"
    />
    <AvatarPreset alt="Alice Smith" />
    <AvatarPreset alt="Bob Jones" />
    <AvatarGroupCount>+3</AvatarGroupCount>
  </AvatarGroup>`} preview={
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
                } />
    </div>
  );
}

function AvatarMicroShowcase({ globalSize }: { globalSize: Size }) {
  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample title="Với Hình ảnh (With Image)" description="Hiển thị ảnh và sẽ fallback về chữ nếu ảnh lỗi." code={`<div className="flex items-center gap-4">
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
  </div>`} preview={
                      <>
              <div className="flex items-center gap-4">
                          <Avatar size={globalSize}>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                          <Avatar size={globalSize}>
                            <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
                            <AvatarFallback>VC</AvatarFallback>
                          </Avatar>
                          <Avatar size={globalSize}>
                            <AvatarImage src="https://github.com/leerob.png" alt="@leerob" />
                            <AvatarFallback>LR</AvatarFallback>
                          </Avatar>
                        </div>
                      </>
                    } />

        <ShowcaseExample title="Lỗi Ảnh & Chỉ có Fallback" description="Khi không có ảnh hoặc ảnh lỗi, fallback sẽ hiển thị." code={`<div className="flex items-center gap-4">
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
  </div>`} preview={
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
                    } />
      </ExampleGrid>

      <ShowcaseExample title="Huy hiệu (With Badge)" description="Bạn có thể tự định vị Badge ở bất cứ đâu trên Avatar." code={`<div className="flex items-center gap-6">
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
  </div>`} preview={
                  <>
          <div className="flex items-center gap-6">
                    <div className="flex flex-col items-center gap-2">
                      <Avatar size={globalSize}>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                        <AvatarBadge className="absolute z-10 right-0 bottom-0 bg-green-500" />
                      </Avatar>
                      <span className="text-xs text-muted-foreground">Online</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <Avatar size={globalSize}>
                        <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
                        <AvatarFallback>VC</AvatarFallback>
                        <AvatarBadge className="absolute z-10 right-0 top-0 bg-red-500" />
                      </Avatar>
                      <span className="text-xs text-muted-foreground">Notification</span>
                    </div>
                  </div>
                  </>
                } />

      <ExampleGrid>
        <ShowcaseExample title="Nhóm cơ bản (Basic Group)" description="Xếp chồng nhiều avatar lên nhau." code={`<AvatarGroup>
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
  </AvatarGroup>`} preview={
                      <>
              <AvatarGroup>
                          <Avatar size={globalSize}>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                          <Avatar size={globalSize}>
                            <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
                            <AvatarFallback>VC</AvatarFallback>
                          </Avatar>
                          <Avatar size={globalSize}>
                            <AvatarImage src="https://github.com/leerob.png" alt="@leerob" />
                            <AvatarFallback>LR</AvatarFallback>
                          </Avatar>
                        </AvatarGroup>
                      </>
                    } />

        <ShowcaseExample title="Kèm bộ đếm (With Count)" description="Hiển thị những avatar còn lại bị ẩn." code={`<AvatarGroup>
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
  </AvatarGroup>`} preview={
                      <>
              <AvatarGroup>
                          <Avatar size={globalSize}>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                          <Avatar size={globalSize}>
                            <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
                            <AvatarFallback>VC</AvatarFallback>
                          </Avatar>
                          <AvatarGroupCount size={globalSize}>+12</AvatarGroupCount>
                        </AvatarGroup>
                      </>
                    } />

        <ShowcaseExample title="🧭 So sánh Use Case" description="Các kịch bản thực tế giúp bạn quyết định nên dùng Micro hay Macro." code={`<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
    {/* ── Story 1: Macro wins ── */}
    <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 shrink-0 rounded-full bg-green-500/10 p-1.5 text-green-600">
          <CheckCircle2Icon
            className="size-4"
            aria-hidden="true"
          />
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Story 1 · Dùng Macro
          </p>
          <h3 className="mt-0.5 text-sm font-semibold text-foreground">
            Hiển thị Avatar chuẩn với URL và Fallback
          </h3>
        </div>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed">
        Hầu hết các trường hợp bạn chỉ có một URL hình ảnh
        và một cái tên. Macro tự động hiển thị ảnh, nếu ảnh
        lỗi thì tự sinh chữ viết tắt dựa trên tên cực kỳ
        tiện lợi mà không cần viết nhiều code.
      </p>
      <div className="rounded-lg bg-muted/50 p-3 flex justify-center">
        <AvatarPreset
          src="https://github.com/shadcn.png"
          alt="Shadcn"
          size="lg"
        />
      </div>
    </div>

    {/* ── Story 2: Micro wins ── */}
    <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 shrink-0 rounded-full bg-blue-500/10 p-1.5 text-blue-600">
          <LayersIcon
            className="size-4"
            aria-hidden="true"
          />
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Story 2 · Dùng Micro
          </p>
          <h3 className="mt-0.5 text-sm font-semibold text-foreground">
            Layout Fallback phức tạp hoặc tích hợp Badge đặc
            thù
          </h3>
        </div>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed">
        Khi bạn muốn Fallback là một Icon thay vì Text, hoặc
        muốn đính kèm một Badge tùy chỉnh hoàn toàn tự do
        (như icon viền, thông báo tin nhắn), bạn phải dùng
        Primitive để lắp ghép.
      </p>
      <div className="rounded-lg bg-muted/50 p-3 flex justify-center">
        <Avatar size="lg">
          <AvatarImage src="/broken.png" alt="Avatar" />
          <AvatarFallback>
            <UserIcon className="size-1/2 text-muted-foreground" />
          </AvatarFallback>
          <AvatarBadge className="bg-blue-500">
            <CheckIcon className="size-2 text-white" />
          </AvatarBadge>
        </Avatar>
      </div>
    </div>
  </div>`} preview={
                      <>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                          <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
                            <div className="flex items-start gap-3">
                              <span className="mt-0.5 shrink-0 rounded-full bg-green-500/10 p-1.5 text-green-600">
                                <CheckCircle2Icon className="size-4" aria-hidden="true" />
                              </span>
                              <div>
                                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                  Story 1 · Dùng Macro
                                </p>
                                <h3 className="mt-0.5 text-sm font-semibold text-foreground">
                                  Hiển thị Avatar chuẩn với URL và Fallback
                                </h3>
                              </div>
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                              Hầu hết các trường hợp bạn chỉ có một URL hình ảnh và một cái
                              tên. Macro tự động hiển thị ảnh, nếu ảnh lỗi thì tự sinh chữ
                              viết tắt dựa trên tên cực kỳ tiện lợi mà không cần viết nhiều
                              code.
                            </p>
                            <div className="rounded-lg bg-muted/50 p-3 flex justify-center">
                              <AvatarPreset
                                size={globalSize === "sm" ? "md" : "lg"}
                                src="https://github.com/shadcn.png"
                                alt="Shadcn"
                              />
                            </div>
                          </div>

                          <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
                            <div className="flex items-start gap-3">
                              <span className="mt-0.5 shrink-0 rounded-full bg-blue-500/10 p-1.5 text-blue-600">
                                <LayersIcon className="size-4" aria-hidden="true" />
                              </span>
                              <div>
                                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                  Story 2 · Dùng Micro
                                </p>
                                <h3 className="mt-0.5 text-sm font-semibold text-foreground">
                                  Layout Fallback phức tạp hoặc tích hợp Badge đặc thù
                                </h3>
                              </div>
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                              Khi bạn muốn Fallback là một Icon thay vì Text, hoặc muốn đính
                              kèm một Badge tùy chỉnh hoàn toàn tự do (như icon viền, thông
                              báo tin nhắn), bạn phải dùng Primitive để lắp ghép.
                            </p>
                            <div className="rounded-lg bg-muted/50 p-3 flex justify-center">
                              <Avatar size={globalSize === "sm" ? "md" : "lg"}>
                                <AvatarImage src="/broken.png" alt="Avatar" />
                                <AvatarFallback>
                                  <UserIcon className="size-1/2 text-muted-foreground" />
                                </AvatarFallback>
                                <AvatarBadge className="bg-blue-500">
                                  <CheckIcon className="size-2 text-white" />
                                </AvatarBadge>
                              </Avatar>
                            </div>
                          </div>
                        </div>
                      </>
                    } />
      </ExampleGrid>
    </div>
  );
}

export default function AvatarShowcase() {
  const { size: globalSize } = useDevContext();
  return (
    <Showcase
      title="Avatar"
      description="Hiển thị hình ảnh đại diện của người dùng hoặc các thực thể khác."
      guideline={
        <ShowcaseDocs>
          <DocsP>
            Dùng để hiển thị hình ảnh đại diện cho người dùng, nhóm hoặc tổ
            chức. Hỗ trợ tự động hiển thị chữ cái viết tắt hoặc icon mặc định
            khi không tải được ảnh.
          </DocsP>
        </ShowcaseDocs>
      }
      micro={{ content: <AvatarMicroShowcase globalSize={globalSize} /> }}
      macro={{ content: <AvatarMacroShowcase globalSize={globalSize} /> }}
    />
  );
}
