import {
  Nn as e,
  cr as t,
  dr as n,
  i as r,
  n as i,
  r as a,
} from "./showcase-vJrKG7HA.js";
import { t as o } from "./field-preset-D4aZ2rJM.js";
import { t as s } from "./textarea-BDNGe1-g.js";
import { t as c } from "./mono-select-2fT-ju4g.js";
var l = n(t(), 1),
  u = e(),
  d = l.forwardRef(
    (
      {
        label: e,
        description: t,
        errorMessage: n,
        showError: r = !0,
        className: i,
        size: a,
        id: c,
        ...d
      },
      f,
    ) => {
      let p = l.useId(),
        m = c || p;
      return (0, u.jsx)(o, {
        label: e,
        description: t,
        errorMessage: n,
        showError: r,
        className: i,
        size: a,
        htmlFor: m,
        children: (0, u.jsx)(s, {
          ref: f,
          id: m,
          "aria-invalid": !!n,
          size: a,
          ...d,
        }),
      });
    },
  );
d.displayName = `TextareaPreset`;
function f() {
  let [e, t] = (0, l.useState)(`md`),
    [n, o] = (0, l.useState)(``);
  return (0, u.jsxs)(`div`, {
    className: `space-y-10`,
    children: [
      (0, u.jsx)(r, {
        title: `Textarea Preset (Macro)`,
        description: `Trường văn bản hoàn chỉnh có nhãn, mô tả và thông báo lỗi xác thực tích hợp sẵn.`,
        children: (0, u.jsx)(c, {
          value: e,
          onValueChange: (e) => t(e),
          options: [
            { value: `sm`, label: `Small` },
            { value: `md`, label: `Medium` },
            { value: `lg`, label: `Large` },
          ],
        }),
      }),
      (0, u.jsxs)(i, {
        columns: 1,
        children: [
          (0, u.jsx)(a, {
            label: `Basic Usage`,
            description: `Trường văn bản tiêu chuẩn có nhãn.`,
            children: (0, u.jsx)(d, {
              label: `Biography`,
              placeholder: `Tell us about yourself...`,
              size: e,
              className: `w-full max-w-sm`,
            }),
          }),
          (0, u.jsx)(a, {
            label: `With Description`,
            description: `Cung cấp thêm ngữ cảnh bên dưới vùng văn bản.`,
            children: (0, u.jsx)(d, {
              label: `Feedback`,
              description: `Chúng tôi đánh giá cao những suy nghĩ của bạn về cách cải thiện dịch vụ của chúng tôi.`,
              placeholder: `Type your feedback here...`,
              size: e,
              className: `w-full max-w-sm`,
            }),
          }),
          (0, u.jsx)(a, {
            label: `Validation Error`,
            description: `Hiển thị thông báo lỗi khi đầu vào không hợp lệ.`,
            children: (0, u.jsx)(d, {
              label: `Complaint`,
              placeholder: `Describe your issue`,
              errorMessage: `Please provide more details.`,
              size: e,
              className: `w-full max-w-sm`,
            }),
          }),
          (0, u.jsx)(a, {
            label: `Disabled State`,
            description: `Trường văn bản không tương tác.`,
            children: (0, u.jsx)(d, {
              label: `Archived Notes`,
              description: `Những ghi chú này ở dạng chỉ đọc.`,
              defaultValue: `This project was completed in 2023.`,
              disabled: !0,
              size: e,
              className: `w-full max-w-sm`,
            }),
          }),
          (0, u.jsx)(a, {
            label: `Character Count`,
            description: `Giới hạn ký tự với đếm ngược — use case phổ biến trong B2B.`,
            children: (0, u.jsx)(`div`, {
              className: `w-full max-w-sm`,
              children: (0, u.jsx)(d, {
                label: `Bio`,
                description: (0, u.jsxs)(`span`, {
                  className: `flex justify-between`,
                  children: [
                    (0, u.jsx)(`span`, {
                      children: `Mô tả ngắn gọn về bản thân bạn.`,
                    }),
                    (0, u.jsxs)(`span`, {
                      className:
                        n.length > 280 ? `text-destructive font-medium` : ``,
                      children: [n.length, `/`, 280],
                    }),
                  ],
                }),
                placeholder: `I'm a developer who loves...`,
                value: n,
                onChange: (e) => o(e.target.value),
                maxLength: 280,
                errorMessage:
                  n.length > 280
                    ? `Exceeded by ${n.length - 280} characters.`
                    : void 0,
                size: e,
                className: `w-full`,
                rows: 4,
              }),
            }),
          }),
          (0, u.jsx)(a, {
            label: `Real-world Form`,
            description: `Trình bày bố cục trong ngữ cảnh biểu mẫu rộng hơn.`,
            children: (0, u.jsxs)(`div`, {
              className: `w-full max-w-sm rounded-lg border p-4 shadow-sm`,
              children: [
                (0, u.jsx)(`h3`, {
                  className: `mb-4 font-semibold`,
                  children: `Contact Support`,
                }),
                (0, u.jsx)(d, {
                  label: `Issue Description`,
                  description: `Vui lòng cung cấp càng nhiều chi tiết càng tốt để giúp chúng tôi giải quyết vấn đề.`,
                  placeholder: `I am experiencing an error when...`,
                  size: e,
                  className: `w-full`,
                  rows: 5,
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
export { f as default };
