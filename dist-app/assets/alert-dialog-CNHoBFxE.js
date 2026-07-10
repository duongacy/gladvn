import {
  Nn as e,
  a as t,
  cr as n,
  dr as r,
  i,
  n as a,
  or as o,
  qn as s,
  r as c,
  s as l,
} from "./showcase-vJrKG7HA.js";
import { t as u } from "./info-DF5q0VCE.js";
import { t as d } from "./shield-alert-BU-i_lMw.js";
import {
  a as f,
  c as p,
  d as m,
  l as h,
  n as g,
  o as _,
  r as v,
  s as y,
  t as b,
  u as x,
} from "./alert-dialog-BFZR-0wx.js";
import { t as S } from "./select-preset-B6grUIWS.js";
var C = o(`mail-warning`, [
    [
      `path`,
      {
        d: `M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5`,
        key: `e61zoh`,
      },
    ],
    [`path`, { d: `m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7`, key: `1ocrg3` }],
    [`path`, { d: `M20 14v4`, key: `1hm744` }],
    [`path`, { d: `M20 22v.01`, key: `12bgn6` }],
  ]),
  w = r(n(), 1),
  T = e();
function E({
  trigger: e,
  icon: t,
  title: n,
  description: r,
  cancelLabel: i,
  cancelColor: a,
  cancelVariant: o,
  actionLabel: c,
  actionColor: l,
  actionVariant: u,
  onAction: d,
  onCancel: S,
  size: C = `md`,
  children: w,
  ...E
}) {
  return (0, T.jsxs)(b, {
    ...E,
    children: [
      e && (0, T.jsx)(m, { render: e }),
      (0, T.jsxs)(f, {
        size: C,
        children: [
          (0, T.jsxs)(`div`, {
            className: s(`flex flex-col gap-1.5`, {
              "sm:flex-row sm:gap-4": !!t,
            }),
            children: [
              t &&
                (0, T.jsx)(h, {
                  className: `mx-auto mb-2 shrink-0 sm:mx-0 sm:mb-0`,
                  children: t,
                }),
              (0, T.jsxs)(p, {
                children: [
                  n && (0, T.jsx)(x, { children: n }),
                  r && (0, T.jsx)(_, { children: r }),
                  w,
                ],
              }),
            ],
          }),
          (i || c) &&
            (0, T.jsxs)(y, {
              className: `group-data-[size=sm]/alert-dialog-content:grid group-data-[size=sm]/alert-dialog-content:grid-cols-2 group-data-[size=sm]/alert-dialog-content:sm:flex group-data-[size=sm]/alert-dialog-content:sm:justify-end`,
              children: [
                i &&
                  (0, T.jsx)(v, {
                    size: C,
                    color: a,
                    variant: o,
                    onClick: S,
                    children: i,
                  }),
                c &&
                  (0, T.jsx)(g, {
                    size: C,
                    color: l,
                    variant: u,
                    onClick: d,
                    children: c,
                  }),
              ],
            }),
        ],
      }),
    ],
  });
}
E.displayName = `AlertDialogPreset`;
function D() {
  let [e, n] = (0, w.useState)(`md`),
    [r, o] = (0, w.useState)(!1);
  return (0, T.jsxs)(`div`, {
    className: `space-y-10`,
    children: [
      (0, T.jsx)(i, {
        title: `Alert Dialog Preset (Macro)`,
        description: `Phiên bản bọc sẵn (Opinionated) của AlertDialog, tự động xử lý toàn bộ layout phức tạp.`,
        children: (0, T.jsx)(S, {
          value: e,
          onValueChange: (e) => n(e),
          options: [
            { value: `sm`, label: `Size: sm` },
            { value: `md`, label: `Size: md` },
            { value: `lg`, label: `Size: lg` },
          ],
          className: `w-[120px] h-8 text-xs bg-background`,
        }),
      }),
      (0, T.jsxs)(t, {
        children: [
          (0, T.jsx)(`h3`, { children: `Giới thiệu Macro` }),
          (0, T.jsx)(`p`, {
            children: `Thành phần này được thiết kế để giải quyết 99% các trường hợp sử dụng thực tế. Nó bọc sẵn các Primitive (Micro), tự động bố cục Icon, Tiêu đề, Nội dung và Nút bấm bằng Flexbox một cách hoàn hảo mà không cần bạn phải viết thêm class hay wrapper nào.`,
          }),
        ],
      }),
      (0, T.jsxs)(a, {
        columns: 2,
        children: [
          (0, T.jsx)(c, {
            label: `Hành Động Nguy Hiểm (Destructive)`,
            description: `Sử dụng actionColor='destructive' để tạo nút hành động nguy hiểm.`,
            children: (0, T.jsx)(E, {
              size: e,
              trigger: (0, T.jsx)(l, {
                variant: `outline`,
                color: `destructive`,
                size: e,
                children: `Xoá Tài Khoản`,
              }),
              title: `Bạn có chắc chắn muốn xoá?`,
              description: `Hành động này không thể hoàn tác. Tài khoản và toàn bộ dữ liệu của bạn trên hệ thống sẽ bị xoá vĩnh viễn.`,
              cancelLabel: `Huỷ`,
              actionLabel: `Xoá`,
              actionColor: `destructive`,
              onAction: () => console.log(`Deleted!`),
            }),
          }),
          (0, T.jsx)(c, {
            label: `Xác Nhận Tiêu Chuẩn`,
            description: `Hộp thoại xác nhận thông thường chỉ với Text.`,
            children: (0, T.jsx)(E, {
              size: e,
              trigger: (0, T.jsx)(l, {
                variant: `outline`,
                size: e,
                children: `Đăng Xuất`,
              }),
              title: `Đăng xuất khỏi tài khoản?`,
              description: `Bạn sẽ cần nhập lại thông tin đăng nhập để truy cập vào tài khoản.`,
              cancelLabel: `Ở Lại`,
              actionLabel: `Đăng Xuất`,
              onAction: () => console.log(`Logged out!`),
            }),
          }),
        ],
      }),
      (0, T.jsxs)(a, {
        columns: 2,
        children: [
          (0, T.jsx)(c, {
            label: `Kèm Media (Icon/Image)`,
            description: `Tự động chia cột Flexbox Side-by-Side khi truyền prop 'icon'.`,
            children: (0, T.jsx)(E, {
              size: e,
              trigger: (0, T.jsx)(l, {
                variant: `outline`,
                color: `warning`,
                size: e,
                children: `Thu Hồi Quyền`,
              }),
              icon: (0, T.jsx)(`div`, {
                className: `flex size-full items-center justify-center rounded-full bg-warning/10`,
                children: (0, T.jsx)(d, { className: `text-warning` }),
              }),
              title: `Thu hồi quyền truy cập API?`,
              description: `Tất cả các ứng dụng đang sử dụng API key này sẽ bị mất quyền truy cập ngay lập tức.`,
              cancelLabel: `Giữ Lại`,
              actionLabel: `Thu Hồi`,
              actionColor: `warning`,
              onAction: () => console.log(`Revoked!`),
            }),
          }),
          (0, T.jsx)(c, {
            label: `Trạng Thái Controlled`,
            description: `Quản lý trạng thái đóng mở thông qua React State thay vì dùng prop Trigger.`,
            children: (0, T.jsxs)(`div`, {
              className: `flex w-full flex-col items-center gap-3`,
              children: [
                (0, T.jsxs)(`p`, {
                  className: `text-xs text-muted-foreground`,
                  children: [
                    `State:`,
                    ` `,
                    (0, T.jsx)(`code`, {
                      className: `rounded bg-muted px-1.5 py-0.5 text-xs font-mono`,
                      children: r ? `true` : `false`,
                    }),
                  ],
                }),
                (0, T.jsx)(l, {
                  variant: `outline`,
                  color: `info`,
                  size: e,
                  onClick: () => o(!0),
                  children: `Bật Chế Độ Máy Bay`,
                }),
                (0, T.jsx)(E, {
                  open: r,
                  onOpenChange: o,
                  size: e,
                  title: `Bật chế độ máy bay?`,
                  description: `Tất cả các kết nối mạng bao gồm Wi-Fi và Bluetooth sẽ bị ngắt.`,
                  cancelLabel: `Huỷ`,
                  actionLabel: `Đồng Ý`,
                  actionColor: `info`,
                  onAction: () => console.log(`Airplane mode on!`),
                }),
              ],
            }),
          }),
        ],
      }),
      (0, T.jsxs)(a, {
        columns: 2,
        children: [
          (0, T.jsx)(c, {
            label: `Custom Button Variants`,
            description: `Tuỳ chỉnh variant cho cả nút Action (soft) và Cancel (ghost) thông qua actionVariant/cancelVariant.`,
            children: (0, T.jsx)(E, {
              size: e,
              trigger: (0, T.jsx)(l, {
                variant: `outline`,
                size: e,
                children: `Custom Variants`,
              }),
              icon: (0, T.jsx)(`div`, {
                className: `flex size-full items-center justify-center rounded-full bg-info/10`,
                children: (0, T.jsx)(C, { className: `text-info` }),
              }),
              title: `Gửi phản hồi?`,
              description: `Phản hồi của bạn sẽ được gửi ẩn danh tới đội ngũ phát triển.`,
              cancelLabel: `Bỏ qua`,
              cancelVariant: `ghost`,
              actionLabel: `Gửi`,
              actionColor: `info`,
              actionVariant: `soft`,
              onAction: () => console.log(`Feedback sent!`),
            }),
          }),
          (0, T.jsx)(c, {
            label: `Children (Nội dung bổ sung)`,
            description: `Prop children cho phép chèn thêm nội dung tuỳ ý vào phần Header.`,
            children: (0, T.jsx)(E, {
              size: e,
              trigger: (0, T.jsx)(l, {
                variant: `outline`,
                color: `warning`,
                size: e,
                children: `Báo Cáo Lỗi`,
              }),
              title: `Báo cáo lỗi hệ thống`,
              description: `Vui lòng kiểm tra thông tin lỗi bên dưới trước khi gửi.`,
              cancelLabel: `Huỷ`,
              actionLabel: `Gửi Báo Cáo`,
              actionColor: `warning`,
              onAction: () => console.log(`Report sent!`),
              children: (0, T.jsxs)(`div`, {
                className: `mt-2 rounded-md border bg-muted/50 p-3 font-mono text-xs text-muted-foreground`,
                children: [
                  (0, T.jsx)(`p`, {
                    children: `Error Code: ERR_NETWORK_TIMEOUT`,
                  }),
                  (0, T.jsx)(`p`, {
                    children: `Timestamp: 2026-07-05T14:30:00Z`,
                  }),
                  (0, T.jsx)(`p`, { children: `Module: api/gateway` }),
                ],
              }),
            }),
          }),
        ],
      }),
      (0, T.jsx)(a, {
        columns: 1,
        children: (0, T.jsx)(c, {
          label: `Giao Diện Nhỏ (Compact)`,
          description: `Khi dùng size='sm', nội dung sẽ được căn giữa và footer tự động dàn hàng ngang 2 cột.`,
          children: (0, T.jsx)(E, {
            size: `sm`,
            trigger: (0, T.jsx)(l, {
              variant: `outline`,
              size: e,
              children: `Xác Nhận Nhanh`,
            }),
            icon: (0, T.jsx)(`div`, {
              className: `flex size-full items-center justify-center rounded-full bg-muted`,
              children: (0, T.jsx)(u, {}),
            }),
            title: `Xác nhận hành động?`,
            description: `Đây là hộp thoại dạng nhỏ, phù hợp cho các thao tác nhanh với 2 nút nằm ngang.`,
            cancelLabel: `Không`,
            actionLabel: `Có`,
          }),
        }),
      }),
    ],
  });
}
export { D as default };
