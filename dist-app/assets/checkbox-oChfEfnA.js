import {
  Nn as e,
  cr as t,
  dr as n,
  i as r,
  ir as i,
  n as a,
  r as o,
} from "./showcase-vJrKG7HA.js";
import { t as s } from "./minus-BfciniaV.js";
import { At as c } from "./index-Dk0REsC9.js";
import { i as l, o as u, r as d, t as f } from "./field-DA6j2oEX.js";
import { t as p } from "./select-preset-B6grUIWS.js";
import { n as m, t as h } from "./checkbox-CFK7pS0k.js";
var g = n(t(), 1),
  _ = e();
function v({ size: e }) {
  let [t, n] = (0, g.useState)(!1);
  return (0, _.jsxs)(`div`, {
    className: `w-full max-w-sm flex flex-col gap-4`,
    children: [
      (0, _.jsxs)(`div`, {
        className: `flex items-center gap-3`,
        children: [
          (0, _.jsx)(h, {
            id: `cb-controlled`,
            size: e,
            checked: t,
            onCheckedChange: (e) => n(!!e),
            children: (0, _.jsx)(m, { children: (0, _.jsx)(i, {}) }),
          }),
          (0, _.jsx)(c, {
            htmlFor: `cb-controlled`,
            className: `font-normal cursor-pointer`,
            children: `Controlled Checkbox`,
          }),
        ],
      }),
      (0, _.jsxs)(`p`, {
        className: `text-sm text-muted-foreground`,
        children: [
          `Trạng thái hiện tại: `,
          (0, _.jsx)(`span`, {
            className: `font-mono font-bold text-foreground`,
            children: t ? `Checked` : `Unchecked`,
          }),
        ],
      }),
    ],
  });
}
function y() {
  let [e, t] = (0, g.useState)(`md`);
  return (0, _.jsxs)(`div`, {
    className: `space-y-10`,
    children: [
      (0, _.jsx)(r, {
        title: `Checkbox`,
        description: `Một thành phần điều khiển cho phép người dùng chuyển đổi giữa trạng thái được chọn (checked) và không được chọn (not checked).`,
        children: (0, _.jsx)(p, {
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
      (0, _.jsx)(o, {
        label: `Default`,
        description: `Checkbox cơ bản kèm nhãn sử dụng pure composition.`,
        children: (0, _.jsxs)(`div`, {
          className: `flex items-center gap-3`,
          children: [
            (0, _.jsx)(h, {
              id: `cb-default`,
              size: e,
              children: (0, _.jsx)(m, { children: (0, _.jsx)(i, {}) }),
            }),
            (0, _.jsx)(c, {
              htmlFor: `cb-default`,
              className: `font-normal cursor-pointer`,
              children: `Accept terms and conditions`,
            }),
          ],
        }),
      }),
      (0, _.jsx)(o, {
        label: `Custom Icon`,
        description: `Sử dụng API tổng hợp để cung cấp biểu tượng chỉ báo tùy chỉnh.`,
        children: (0, _.jsxs)(`div`, {
          className: `flex items-center gap-3`,
          children: [
            (0, _.jsx)(h, {
              id: `cb-custom-icon`,
              size: e,
              children: (0, _.jsx)(m, { children: (0, _.jsx)(s, {}) }),
            }),
            (0, _.jsx)(c, {
              htmlFor: `cb-custom-icon`,
              className: `font-normal cursor-pointer`,
              children: `Indeterminate state (custom icon)`,
            }),
          ],
        }),
      }),
      (0, _.jsx)(o, {
        label: `With Description`,
        description: `Checkbox kèm theo văn bản mô tả.`,
        children: (0, _.jsxs)(`div`, {
          className: `flex items-start gap-3`,
          children: [
            (0, _.jsxs)(`div`, {
              className: `flex items-center text-sm leading-snug`,
              children: [
                `​`,
                (0, _.jsx)(h, {
                  id: `cb-with-desc`,
                  size: e,
                  children: (0, _.jsx)(m, { children: (0, _.jsx)(i, {}) }),
                }),
              ],
            }),
            (0, _.jsxs)(`div`, {
              className: `grid gap-1.5 leading-none`,
              children: [
                (0, _.jsx)(c, {
                  htmlFor: `cb-with-desc`,
                  className: `font-medium cursor-pointer`,
                  children: `Accept terms and conditions`,
                }),
                (0, _.jsx)(`p`, {
                  className: `text-xs text-muted-foreground`,
                  children: `You agree to our Terms of Service and Privacy Policy.`,
                }),
              ],
            }),
          ],
        }),
      }),
      (0, _.jsxs)(a, {
        columns: 2,
        children: [
          (0, _.jsx)(o, {
            label: `Error State`,
            description: `Trạng thái lỗi thủ công sử dụng các primitives của Field.`,
            children: (0, _.jsx)(`div`, {
              className: `w-full max-w-sm flex flex-col gap-6`,
              children: (0, _.jsxs)(f, {
                className: `flex flex-row items-start gap-3`,
                "data-invalid": !0,
                "data-size": e,
                children: [
                  (0, _.jsxs)(`div`, {
                    className: `flex items-center text-sm leading-snug group-data-[size=sm]/field:text-xs`,
                    children: [
                      `​`,
                      (0, _.jsx)(h, {
                        id: `cb-err1`,
                        size: e,
                        "aria-invalid": !0,
                        children: (0, _.jsx)(m, {
                          children: (0, _.jsx)(i, {}),
                        }),
                      }),
                    ],
                  }),
                  (0, _.jsxs)(`div`, {
                    className: `grid gap-1.5 leading-none`,
                    children: [
                      (0, _.jsx)(u, {
                        htmlFor: `cb-err1`,
                        className: `font-medium cursor-pointer`,
                        children: `Đồng ý điều khoản (Không hợp lệ)`,
                      }),
                      (0, _.jsx)(l, {
                        children: `Bạn phải đánh dấu vào ô này.`,
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
          (0, _.jsx)(o, {
            label: `Disabled`,
            description: `Các trạng thái không thể tương tác.`,
            children: (0, _.jsxs)(`div`, {
              className: `flex flex-col gap-4`,
              children: [
                (0, _.jsxs)(`div`, {
                  className: `flex items-center gap-3`,
                  children: [
                    (0, _.jsx)(h, {
                      id: `cb-disabled-unchecked`,
                      disabled: !0,
                      size: e,
                      children: (0, _.jsx)(m, { children: (0, _.jsx)(i, {}) }),
                    }),
                    (0, _.jsx)(c, {
                      htmlFor: `cb-disabled-unchecked`,
                      className: `font-normal text-muted-foreground`,
                      children: `Chưa chọn & bị vô hiệu hoá`,
                    }),
                  ],
                }),
                (0, _.jsxs)(`div`, {
                  className: `flex items-center gap-3`,
                  children: [
                    (0, _.jsx)(h, {
                      id: `cb-disabled-checked`,
                      disabled: !0,
                      defaultChecked: !0,
                      size: e,
                      children: (0, _.jsx)(m, { children: (0, _.jsx)(i, {}) }),
                    }),
                    (0, _.jsx)(c, {
                      htmlFor: `cb-disabled-checked`,
                      className: `font-normal text-muted-foreground`,
                      children: `Đã chọn & bị vô hiệu hoá`,
                    }),
                  ],
                }),
              ],
            }),
          }),
          (0, _.jsx)(o, {
            label: `Form Group`,
            description: `Nhiều tuỳ chọn liên quan đến nhau.`,
            children: (0, _.jsxs)(`div`, {
              className: `flex flex-col gap-3`,
              children: [
                (0, _.jsxs)(`div`, {
                  className: `flex items-center gap-3`,
                  children: [
                    (0, _.jsx)(h, {
                      id: `cb-recents`,
                      defaultChecked: !0,
                      size: e,
                      children: (0, _.jsx)(m, { children: (0, _.jsx)(i, {}) }),
                    }),
                    (0, _.jsx)(c, {
                      htmlFor: `cb-recents`,
                      className: `font-normal cursor-pointer`,
                      children: `Gần đây`,
                    }),
                  ],
                }),
                (0, _.jsxs)(`div`, {
                  className: `flex items-center gap-3`,
                  children: [
                    (0, _.jsx)(h, {
                      id: `cb-home`,
                      defaultChecked: !0,
                      size: e,
                      children: (0, _.jsx)(m, { children: (0, _.jsx)(i, {}) }),
                    }),
                    (0, _.jsx)(c, {
                      htmlFor: `cb-home`,
                      className: `font-normal cursor-pointer`,
                      children: `Trang chủ`,
                    }),
                  ],
                }),
                (0, _.jsxs)(`div`, {
                  className: `flex items-center gap-3`,
                  children: [
                    (0, _.jsx)(h, {
                      id: `cb-applications`,
                      size: e,
                      children: (0, _.jsx)(m, { children: (0, _.jsx)(i, {}) }),
                    }),
                    (0, _.jsx)(c, {
                      htmlFor: `cb-applications`,
                      className: `font-normal cursor-pointer`,
                      children: `Ứng dụng`,
                    }),
                  ],
                }),
              ],
            }),
          }),
          (0, _.jsx)(o, {
            label: `Real-world Content`,
            description: `Minh hoạ cách xử lý nhãn (label) dạng React Node phức tạp.`,
            children: (0, _.jsx)(`div`, {
              className: `w-full max-w-sm`,
              children: (0, _.jsxs)(f, {
                className: `flex flex-row items-start gap-3`,
                "data-size": e,
                children: [
                  (0, _.jsxs)(`div`, {
                    className: `flex items-center text-sm leading-snug group-data-[size=sm]/field:text-xs`,
                    children: [
                      `​`,
                      (0, _.jsx)(h, {
                        id: `cb-rw1`,
                        size: e,
                        children: (0, _.jsx)(m, {
                          children: (0, _.jsx)(i, {}),
                        }),
                      }),
                    ],
                  }),
                  (0, _.jsxs)(`div`, {
                    className: `grid gap-1.5 leading-none`,
                    children: [
                      (0, _.jsxs)(u, {
                        htmlFor: `cb-rw1`,
                        className: `font-medium cursor-pointer flex items-center gap-2`,
                        children: [
                          `Chia sẻ dữ liệu sử dụng `,
                          (0, _.jsx)(`span`, {
                            className: `rounded bg-primary/20 px-1.5 py-0.5 text-[10px] font-semibold text-primary`,
                            children: `BETA`,
                          }),
                        ],
                      }),
                      (0, _.jsx)(d, {
                        children: `Giúp chúng tôi cải thiện dịch vụ bằng cách tự động gửi dữ liệu phân tích và báo cáo lỗi mỗi khi ứng dụng gặp sự cố. Bạn có thể thu hồi quyền này bất cứ lúc nào trong phần cài đặt tài khoản.`,
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        ],
      }),
      (0, _.jsx)(a, {
        columns: 1,
        children: (0, _.jsx)(o, {
          label: `Controlled Mode`,
          description: `Quản lý trạng thái bằng React state (sử dụng checked và onCheckedChange).`,
          codeString: `import { useState } from "react";
import { CheckIcon } from "lucide-react";
import { Checkbox, CheckboxIndicator } from "@/components/micro/checkbox";
import { Label } from "@/components/micro/label";

export function ControlledDemo() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex items-center gap-3">
      <Checkbox id="cb-controlled" checked={checked} onCheckedChange={(c) => setChecked(!!c)}>
        <CheckboxIndicator>
          <CheckIcon />
        </CheckboxIndicator>
      </Checkbox>
      <Label htmlFor="cb-controlled">Checkbox có kiểm soát</Label>
    </div>
  );
}`,
          children: (0, _.jsx)(v, { size: e }),
        }),
      }),
    ],
  });
}
export { y as default };
