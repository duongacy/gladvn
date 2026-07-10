import {
  Nn as e,
  cr as t,
  dr as n,
  i as r,
  r as i,
  s as a,
} from "./showcase-vJrKG7HA.js";
import { zt as o } from "./index-Dk0REsC9.js";
import { t as s } from "./select-preset-B6grUIWS.js";
var c = n(t(), 1),
  l = e();
function u() {
  let [e, t] = (0, c.useState)(`md`);
  return (0, l.jsxs)(`div`, {
    className: `space-y-10`,
    children: [
      (0, l.jsx)(r, {
        title: `Toast`,
        description: `Một thông báo ngắn gọn được hiển thị tạm thời.`,
        children: (0, l.jsx)(s, {
          value: e,
          onValueChange: (e) => t(e),
          options: [
            { value: `sm`, label: `Size: sm` },
            { value: `md`, label: `Size: md` },
            { value: `lg`, label: `Size: lg` },
          ],
          className: `w-[120px] h-8 text-xs bg-background`,
        }),
      }),
      (0, l.jsx)(i, {
        label: `Toast Notifications`,
        description: `Nhấp để kích hoạt các lời chúc mừng khác nhau.`,
        children: (0, l.jsxs)(`div`, {
          className: `flex flex-wrap gap-3`,
          children: [
            (0, l.jsx)(a, {
              variant: `outline`,
              size: e,
              onClick: () => {
                o(`Event has been created`, {
                  description: `Sunday, December 03, 2023 at 9:00 AM`,
                  action: { label: `Undo`, onClick: () => console.log(`Undo`) },
                });
              },
              children: `Show Toast`,
            }),
            (0, l.jsx)(a, {
              variant: `outline`,
              color: `success`,
              size: e,
              onClick: () => {
                o.success(`Profile updated successfully`);
              },
              children: `Success Toast`,
            }),
            (0, l.jsx)(a, {
              variant: `outline`,
              color: `destructive`,
              size: e,
              onClick: () => {
                o.error(`Failed to update profile`);
              },
              children: `Error Toast`,
            }),
          ],
        }),
      }),
    ],
  });
}
export { u as default };
