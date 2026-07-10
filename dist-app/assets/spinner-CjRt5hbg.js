import {
  Nn as e,
  cr as t,
  dr as n,
  i as r,
  r as i,
} from "./showcase-vJrKG7HA.js";
import { t as a } from "./spinner-DUT2A4pL.js";
import { t as o } from "./select-preset-B6grUIWS.js";
var s = n(t(), 1),
  c = e();
function l() {
  let [e, t] = (0, s.useState)(`md`);
  return (0, c.jsxs)(`div`, {
    className: `space-y-10`,
    children: [
      (0, c.jsx)(r, {
        title: `Spinner`,
        description: `Một chỉ báo quay vòng tải.`,
        children: (0, c.jsx)(o, {
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
      (0, c.jsx)(i, {
        label: `Default`,
        description: `Máy quay tiêu chuẩn.`,
        children: (0, c.jsx)(a, { size: e }),
      }),
    ],
  });
}
export { l as default };
