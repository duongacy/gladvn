import {
  Nn as e,
  cr as t,
  dr as n,
  i as r,
  ir as i,
  n as a,
  qn as o,
  r as s,
  s as c,
} from "./showcase-vJrKG7HA.js";
import { i as l, o as u, r as d, t as f } from "./field-DA6j2oEX.js";
import { t as p } from "./select-preset-B6grUIWS.js";
import { n as m, t as h } from "./checkbox-CFK7pS0k.js";
import { a as g, i as _, n as v, o as y, t as b } from "./schemas-Dv-WZqIR.js";
var x = n(t(), 1),
  S = e(),
  C = x.forwardRef(
    (
      {
        label: e,
        description: t,
        errorMessage: n,
        showError: r = !0,
        className: a,
        id: s,
        size: c = `md`,
        ...p
      },
      g,
    ) => {
      let _ = x.useId(),
        v = s || _;
      return (0, S.jsxs)(f, {
        className: o(`flex flex-row items-start gap-3`, a),
        "data-size": c,
        children: [
          (0, S.jsxs)(`div`, {
            className: `flex items-center text-sm leading-snug group-data-[size=sm]/field:text-xs group-data-[size=lg]/field:text-base`,
            children: [
              `​`,
              (0, S.jsx)(h, {
                ref: g,
                id: v,
                "aria-invalid": !!n,
                size: c,
                ...p,
                children: (0, S.jsx)(m, { children: (0, S.jsx)(i, {}) }),
              }),
            ],
          }),
          (0, S.jsxs)(`div`, {
            className: `grid gap-1.5 leading-none`,
            children: [
              e &&
                (0, S.jsx)(u, {
                  htmlFor: v,
                  className: `font-medium cursor-pointer`,
                  children: e,
                }),
              t && (0, S.jsx)(d, { children: t }),
              r && n && (0, S.jsx)(l, { children: n }),
            ],
          }),
        ],
      });
    },
  );
C.displayName = `CheckboxPreset`;
var w = v({ mobile: b().default(!1).optional() });
function T({ size: e }) {
  let t = y({ resolver: _(w), defaultValues: { mobile: !1 } });
  function n(e) {
    alert(JSON.stringify(e, null, 2));
  }
  return (0, S.jsxs)(`form`, {
    onSubmit: t.handleSubmit(n),
    className: `w-full max-w-sm space-y-6`,
    children: [
      (0, S.jsx)(g, {
        control: t.control,
        name: `mobile`,
        render: ({ field: t, fieldState: n }) =>
          (0, S.jsx)(C, {
            size: e,
            label: `Use mobile device`,
            description: `Cho phép chúng tôi gửi thông báo đến thiết bị di động của bạn.`,
            checked: t.value,
            onCheckedChange: t.onChange,
            errorMessage: n.error?.message,
          }),
      }),
      (0, S.jsx)(c, { type: `submit`, size: e, children: `Submit` }),
    ],
  });
}
var E = `const formSchema = z.object({
  mobile: z.boolean().default(false).optional(),
});

type FormValues = z.infer<typeof formSchema>;

function CheckboxForm({ size }: { size: Size }) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { mobile: false },
  });

  function onSubmit(values: FormValues) {
    alert(JSON.stringify(values, null, 2));
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-sm space-y-6">
      <Controller
        control={form.control}
        name="mobile"
        render={({ field, fieldState }) => (
          <CheckboxPreset
            size={size}
            label="Use mobile device"
            description="Cho phép chúng tôi gửi thông báo đến thiết bị di động của bạn."
            checked={field.value}
            onCheckedChange={field.onChange}
            errorMessage={fieldState.error?.message}
          />
        )}
      />
      <Button type="submit" size={size}>Submit</Button>
    </form>
  );
}`;
function D({ size: e }) {
  let [t, n] = (0, x.useState)(!1);
  return (0, S.jsxs)(`div`, {
    className: `w-full max-w-sm flex flex-col gap-4`,
    children: [
      (0, S.jsx)(C, {
        size: e,
        checked: t,
        onCheckedChange: (e) => n(!!e),
        label: `Controlled Checkbox`,
        description: `Trạng thái hộp kiểm này được quản lý bởi React.`,
      }),
      (0, S.jsxs)(`p`, {
        className: `text-sm text-muted-foreground`,
        children: [
          `Trạng thái hiện tại: `,
          (0, S.jsx)(`span`, {
            className: `font-mono font-bold text-foreground`,
            children: t ? `Checked` : `Unchecked`,
          }),
        ],
      }),
    ],
  });
}
function O() {
  let [e, t] = (0, x.useState)(`md`);
  return (0, S.jsxs)(`div`, {
    className: `space-y-10`,
    children: [
      (0, S.jsx)(r, {
        title: `Checkbox (Macro)`,
        description: `Một preset component đóng gói Checkbox, Field, Label, và Description.`,
        children: (0, S.jsx)(p, {
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
      (0, S.jsxs)(a, {
        columns: 2,
        children: [
          (0, S.jsx)(s, {
            label: `Standard`,
            description: `Checkbox cơ bản kèm nhãn (label) và mô tả.`,
            children: (0, S.jsx)(`div`, {
              className: `w-full max-w-sm`,
              children: (0, S.jsx)(C, {
                size: e,
                label: `Accept terms`,
                description: `Bạn phải đồng ý với các điều khoản và điều kiện.`,
              }),
            }),
          }),
          (0, S.jsx)(s, {
            label: `Error State`,
            description: `Minh hoạ cách sử dụng props errorMessage và showError.`,
            children: (0, S.jsxs)(`div`, {
              className: `w-full max-w-sm flex flex-col gap-6`,
              children: [
                (0, S.jsx)(C, {
                  size: e,
                  label: `Accept terms (Invalid)`,
                  errorMessage: `Bạn phải đánh dấu vào ô này.`,
                }),
                (0, S.jsx)(C, {
                  size: e,
                  label: `Accept terms (Hidden Error)`,
                  description: `Câu báo lỗi bị ẩn đi bằng showError={false}`,
                  errorMessage: `Lỗi bị ẩn.`,
                  showError: !1,
                }),
              ],
            }),
          }),
          (0, S.jsx)(s, {
            label: `Disabled State`,
            description: `Một trường checkbox không thể tương tác.`,
            children: (0, S.jsxs)(`div`, {
              className: `w-full max-w-sm flex flex-col gap-6`,
              children: [
                (0, S.jsx)(C, {
                  size: e,
                  label: `Sign up for newsletter`,
                  description: `Tuỳ chọn này hiện không khả dụng.`,
                  disabled: !0,
                }),
                (0, S.jsx)(C, {
                  size: e,
                  label: `Enable experimental features`,
                  description: `Bạn không thể thay đổi cài đặt này.`,
                  defaultChecked: !0,
                  disabled: !0,
                }),
              ],
            }),
          }),
          (0, S.jsx)(s, {
            label: `Form Group`,
            description: `Nhiều tuỳ chọn liên quan đến nhau.`,
            children: (0, S.jsxs)(`div`, {
              className: `flex flex-col gap-3`,
              children: [
                (0, S.jsx)(C, {
                  id: `cb-m-recents`,
                  label: `Recents`,
                  defaultChecked: !0,
                  size: e,
                }),
                (0, S.jsx)(C, {
                  id: `cb-m-home`,
                  label: `Home`,
                  defaultChecked: !0,
                  size: e,
                }),
                (0, S.jsx)(C, {
                  id: `cb-m-applications`,
                  label: `Applications`,
                  size: e,
                }),
              ],
            }),
          }),
          (0, S.jsx)(s, {
            label: `Real-world Content`,
            description: `Minh hoạ cách CheckboxPreset xử lý nhãn (label) dạng React Node phức tạp và các đoạn mô tả dài.`,
            children: (0, S.jsx)(`div`, {
              className: `w-full max-w-sm`,
              children: (0, S.jsx)(C, {
                size: e,
                label: (0, S.jsxs)(`span`, {
                  className: `flex items-center gap-2`,
                  children: [
                    `Chia sẻ dữ liệu sử dụng `,
                    (0, S.jsx)(`span`, {
                      className: `rounded bg-primary/20 px-1.5 py-0.5 text-[10px] font-semibold text-primary`,
                      children: `BETA`,
                    }),
                  ],
                }),
                description: `Giúp chúng tôi cải thiện dịch vụ bằng cách tự động gửi dữ liệu phân tích và báo cáo lỗi mỗi khi ứng dụng gặp sự cố. Bạn có thể thu hồi quyền này bất cứ lúc nào trong phần cài đặt tài khoản.`,
              }),
            }),
          }),
        ],
      }),
      (0, S.jsxs)(a, {
        columns: 1,
        children: [
          (0, S.jsx)(s, {
            label: `Controlled Mode`,
            description: `Quản lý trạng thái bằng React state (sử dụng checked và onCheckedChange).`,
            codeString: `import { useState } from "react";
import { CheckboxPreset } from "@/components/macro/checkbox-preset";

export function ControlledDemo() {
  const [checked, setChecked] = useState(false);

  return (
    <CheckboxPreset
      checked={checked}
      onCheckedChange={(c) => setChecked(!!c)}
      label="Controlled Checkbox"
      description="Trạng thái của checkbox này được quản lý bởi React."
    />
  );
}`,
            children: (0, S.jsx)(D, { size: e }),
          }),
          (0, S.jsx)(s, {
            label: `React Hook Form Integration`,
            description: `Xác thực form bằng Zod và React Hook Form.`,
            codeString: E,
            children: (0, S.jsx)(T, { size: e }),
          }),
        ],
      }),
    ],
  });
}
export { O as default };
