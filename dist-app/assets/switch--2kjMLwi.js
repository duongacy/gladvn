import{Nn as e,cr as t,dr as n,i as r,n as i,qn as a,r as o,s}from"./showcase-vJrKG7HA.js";import{n as c,r as l}from"./index-Dk0REsC9.js";import{i as u,o as d,r as f,t as p}from"./field-DA6j2oEX.js";import{t as m}from"./mono-select-2fT-ju4g.js";import{a as h,i as g,n as _,o as v,t as y}from"./schemas-Dv-WZqIR.js";var b=n(t(),1),x=e(),S=b.forwardRef(({label:e,description:t,errorMessage:n,showError:r=!0,className:i,id:o,size:s=`md`,...m},h)=>{let g=b.useId(),_=o||g;return(0,x.jsxs)(p,{size:s,error:!!n,className:a(`gap-1.5`,i),children:[(0,x.jsxs)(`div`,{className:`flex items-center justify-between gap-3`,children:[(0,x.jsxs)(`div`,{className:`flex-1 space-y-0.5`,children:[e&&(0,x.jsx)(d,{htmlFor:_,children:e}),t&&(0,x.jsx)(f,{children:t})]}),(0,x.jsx)(c,{ref:h,id:_,"aria-invalid":!!n,size:s,...m,children:(0,x.jsx)(l,{})})]}),r&&n&&(0,x.jsx)(u,{children:n})]})});S.displayName=`SwitchPreset`;var C=_({marketing:y().default(!1).optional()});function w({size:e}){let t=v({resolver:g(C),defaultValues:{marketing:!1}});function n(e){alert(JSON.stringify(e,null,2))}return(0,x.jsxs)(`form`,{onSubmit:t.handleSubmit(n),className:`w-full max-w-sm space-y-6`,children:[(0,x.jsx)(h,{control:t.control,name:`marketing`,render:({field:t,fieldState:n})=>(0,x.jsx)(S,{size:e,label:`Marketing Emails`,description:`Nhận email về các sản phẩm, tính năng mới và hơn thế nữa.`,checked:t.value,onCheckedChange:t.onChange,errorMessage:n.error?.message})}),(0,x.jsx)(s,{type:`submit`,size:e,children:`Submit`})]})}var T=`const formSchema = z.object({
  marketing: z.boolean().default(false).optional(),
});

type FormValues = z.infer<typeof formSchema>;

function SwitchForm({ size }: { size: Size }) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { marketing: false },
  });

  function onSubmit(values: FormValues) {
    alert(JSON.stringify(values, null, 2));
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-sm space-y-6">
      <Controller
        control={form.control}
        name="marketing"
        render={({ field, fieldState }) => (
          <SwitchPreset
            size={size}
            label="Marketing Emails"
            description="Nhận email về các sản phẩm, tính năng mới và hơn thế nữa."
            checked={field.value}
            onCheckedChange={field.onChange}
            errorMessage={fieldState.error?.message}
          />
        )}
      />
      <Button type="submit" size={size}>Submit</Button>
    </form>
  );
}`;function E(){let[e,t]=(0,b.useState)(`md`);return(0,x.jsxs)(`div`,{className:`space-y-10`,children:[(0,x.jsx)(r,{title:`Switch (Macro)`,description:`Một thành phần cài sẵn bao gồm Switch, Field, Label và Description.`,children:(0,x.jsx)(m,{value:e,onValueChange:e=>t(e),options:[{value:`sm`,label:`Size: sm`},{value:`md`,label:`Size: md`},{value:`lg`,label:`Size: lg`}]})}),(0,x.jsxs)(i,{columns:2,children:[(0,x.jsx)(o,{label:`Standard`,description:`Công tắc cơ bản có nhãn và mô tả.`,children:(0,x.jsx)(`div`,{className:`w-full max-w-sm`,children:(0,x.jsx)(S,{size:e,label:`Airplane Mode`,description:`Vô hiệu hóa tất cả các kết nối không dây.`})})}),(0,x.jsx)(o,{label:`Error State`,description:`Thể hiện các đạo cụ errorMessage và showError.`,children:(0,x.jsxs)(`div`,{className:`w-full max-w-sm flex flex-col gap-6`,children:[(0,x.jsx)(S,{size:e,label:`Network (Invalid)`,errorMessage:`Network connection lost.`}),(0,x.jsx)(S,{size:e,label:`Network (Hidden Error)`,description:`Văn bản lỗi bị ẩn bằng showError={false}`,errorMessage:`Hidden error.`,showError:!1})]})}),(0,x.jsx)(o,{label:`Disabled State`,description:`Một công tắc không tương tác.`,children:(0,x.jsxs)(`div`,{className:`w-full max-w-sm flex flex-col gap-6`,children:[(0,x.jsx)(S,{size:e,label:`Sync Contacts`,description:`Yêu cầu quyền truy cập vào danh bạ của bạn.`,disabled:!0}),(0,x.jsx)(S,{size:e,label:`Use Cellular Data`,description:`Dữ liệu di động bị tắt trên toàn cầu.`,defaultChecked:!0,disabled:!0})]})}),(0,x.jsx)(o,{label:`Real-world Content`,description:`Nhãn tùy chỉnh và mô tả dài.`,children:(0,x.jsx)(`div`,{className:`w-full max-w-sm`,children:(0,x.jsx)(S,{size:e,label:(0,x.jsxs)(`span`,{className:`flex items-center gap-2`,children:[`Enable two-factor authentication`,(0,x.jsx)(`span`,{className:`rounded bg-success/20 px-1.5 py-0.5 text-[10px] font-semibold text-success`,children:`RECOMMENDED`})]}),description:`Thêm một lớp bảo mật bổ sung cho tài khoản của bạn. Chúng tôi sẽ yêu cầu bạn nhập mã từ ứng dụng xác thực của bạn mỗi khi bạn đăng nhập từ thiết bị mới.`})})}),(0,x.jsx)(o,{label:`React Hook Form Integration`,description:`Xác thực form bằng Zod và React Hook Form.`,codeString:T,children:(0,x.jsx)(w,{size:e})})]})]})}export{E as default};