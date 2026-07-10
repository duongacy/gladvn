import { Nn as e, i as t, r as n, s as r } from "./showcase-vJrKG7HA.js";
import { zt as i } from "./index-Dk0REsC9.js";
var a = e();
function o() {
  return (0, a.jsxs)(`div`, {
    className: `space-y-10`,
    children: [
      (0, a.jsx)(t, {
        title: `Sonner`,
        description: `Một thành phần nâng cốc chúc mừng cho React.`,
      }),
      (0, a.jsx)(n, {
        label: `Toast Types`,
        description: `Nhấp vào từng nút để kích hoạt một loại bánh mì nướng khác nhau.`,
        children: (0, a.jsxs)(`div`, {
          className: `flex flex-wrap gap-2`,
          children: [
            (0, a.jsx)(r, {
              variant: `outline`,
              onClick: () =>
                i(`Event has been created`, {
                  description: `Sunday, December 03, 2023 at 9:00 AM`,
                  action: { label: `Undo`, onClick: () => console.log(`Undo`) },
                }),
              children: `Default Toast`,
            }),
            (0, a.jsx)(r, {
              variant: `outline`,
              color: `success`,
              onClick: () => i.success(`Successfully saved!`),
              children: `Success`,
            }),
            (0, a.jsx)(r, {
              variant: `outline`,
              color: `destructive`,
              onClick: () => i.error(`An error occurred.`),
              children: `Error`,
            }),
            (0, a.jsx)(r, {
              variant: `outline`,
              color: `warning`,
              onClick: () => i.warning(`Connection is unstable.`),
              children: `Warning`,
            }),
            (0, a.jsx)(r, {
              variant: `outline`,
              color: `info`,
              onClick: () => i.info(`Update is available.`),
              children: `Info`,
            }),
          ],
        }),
      }),
    ],
  });
}
export { o as default };
