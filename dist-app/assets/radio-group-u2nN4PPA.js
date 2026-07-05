import{Nn as e,cr as t,dr as n,i as r,n as i,qn as a,r as o,s}from"./showcase-vJrKG7HA.js";import{At as c}from"./index-Dk0REsC9.js";import{t as l}from"./field-preset-D4aZ2rJM.js";import{n as u,t as d}from"./radio-group-HdCfCKXo.js";import{t as f}from"./mono-select-2fT-ju4g.js";import{a as p,i as m,n as h,o as g,r as _}from"./schemas-Dv-WZqIR.js";var v=n(t(),1),y=e(),b=v.forwardRef(({options:e,orientation:t=`vertical`,label:n,description:r,errorMessage:i,showError:o=!0,className:s,id:f,size:p=`md`,...m},h)=>{let g=v.useId(),_=f||g,b=a({"text-xs":p===`sm`,"text-sm":p===`md`,"text-base":p===`lg`});return(0,y.jsx)(l,{size:p,label:n,description:r,errorMessage:i,showError:o,className:s,htmlFor:_,children:(0,y.jsx)(d,{ref:h,id:_,className:a(`flex`,{"flex-col gap-2":t===`vertical`,"flex-row gap-4 flex-wrap":t!==`vertical`}),"aria-invalid":!!i,...m,children:e.map(e=>(0,y.jsxs)(`div`,{className:`flex items-start gap-3`,children:[(0,y.jsxs)(`div`,{className:a(`flex items-center leading-snug`,b),children:[`​`,(0,y.jsx)(u,{value:e.value,id:`${_}-${e.value}`,disabled:e.disabled,size:p})]}),(0,y.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,y.jsx)(c,{htmlFor:`${_}-${e.value}`,className:a(`font-normal cursor-pointer leading-snug`,b,{"opacity-50 cursor-not-allowed":e.disabled}),children:e.label}),e.description&&(0,y.jsx)(`p`,{className:a(`text-muted-foreground`,b),children:e.description})]})]},e.value))})})});b.displayName=`RadioGroupPreset`;var x=h({notify:_().min(1,`Vui lòng chọn phương thức thông báo.`)});function S({size:e}){let t=g({resolver:m(x),defaultValues:{notify:``}});function n(e){alert(JSON.stringify(e,null,2))}return(0,y.jsxs)(`form`,{onSubmit:t.handleSubmit(n),className:`w-full max-w-sm space-y-6`,children:[(0,y.jsx)(p,{control:t.control,name:`notify`,render:({field:t,fieldState:n})=>(0,y.jsx)(b,{size:e,label:`Notification Preference`,description:`Bạn muốn được thông báo như thế nào?`,options:[{value:`email`,label:`Email`},{value:`sms`,label:`SMS`},{value:`push`,label:`Push Notification`}],value:t.value,onValueChange:t.onChange,errorMessage:n.error?.message})}),(0,y.jsx)(s,{type:`submit`,size:e,children:`Submit`})]})}var C=`const formSchema = z.object({
  notify: z.string().min(1, "Vui lòng chọn phương thức thông báo."),
});

type FormValues = z.infer<typeof formSchema>;

function RadioGroupForm({ size }: { size: Size }) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { notify: "" },
  });

  function onSubmit(values: FormValues) {
    alert(JSON.stringify(values, null, 2));
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-sm space-y-6">
      <Controller
        control={form.control}
        name="notify"
        render={({ field, fieldState }) => (
          <RadioGroupPreset
            size={size}
            label="Notification Preference"
            description="Bạn muốn được thông báo như thế nào?"
            options={[
              { value: "email", label: "Email" },
              { value: "sms", label: "SMS" },
              { value: "push", label: "Push Notification" },
            ]}
            value={field.value}
            onValueChange={field.onChange}
            errorMessage={fieldState.error?.message}
          />
        )}
      />
      <Button type="submit" size={size}>Submit</Button>
    </form>
  );
}`;function w(){let[e,t]=(0,v.useState)(`md`);return(0,y.jsxs)(`div`,{className:`space-y-10`,children:[(0,y.jsx)(r,{title:`Radio Group (Macro)`,description:`Một thành phần cài sẵn bao gồm RadioGroup, Field, Label và Description.`,children:(0,y.jsx)(f,{value:e,onValueChange:e=>t(e),options:[{value:`sm`,label:`Size: sm`},{value:`md`,label:`Size: md`},{value:`lg`,label:`Size: lg`}]})}),(0,y.jsxs)(i,{columns:2,children:[(0,y.jsx)(o,{label:`Standard`,description:`Nhóm radio cơ bản có nhãn và mô tả.`,children:(0,y.jsx)(`div`,{className:`w-full max-w-sm`,children:(0,y.jsx)(b,{size:e,label:`Notification Preference`,description:`Bạn muốn được thông báo như thế nào?`,options:[{value:`email`,label:`Email`},{value:`sms`,label:`SMS`},{value:`push`,label:`Push Notification`}]})})}),(0,y.jsx)(o,{label:`Error State`,description:`Thể hiện các đạo cụ errorMessage và showError.`,children:(0,y.jsxs)(`div`,{className:`w-full max-w-sm flex flex-col gap-6`,children:[(0,y.jsx)(b,{size:e,label:`Preference (Invalid)`,options:[{value:`email`,label:`Email`},{value:`sms`,label:`SMS`}],errorMessage:`You must select a preference.`}),(0,y.jsx)(b,{size:e,label:`Preference (Hidden Error)`,description:`Văn bản lỗi bị ẩn bằng showError={false}`,options:[{value:`email`,label:`Email`}],errorMessage:`Hidden error.`,showError:!1})]})}),(0,y.jsx)(o,{label:`Disabled State`,description:`Một nhóm radio không tương tác.`,children:(0,y.jsx)(`div`,{className:`w-full max-w-sm flex flex-col gap-6`,children:(0,y.jsx)(b,{size:e,label:`Subscription Plan`,description:`Bạn không thể thay đổi kế hoạch của mình ngay bây giờ.`,options:[{value:`free`,label:`Free Plan`},{value:`pro`,label:`Pro Plan`}],defaultValue:`free`,disabled:!0})})}),(0,y.jsx)(o,{label:`Rich Descriptions`,description:`Các tùy chọn có mô tả dài để kiểm tra việc gói và căn chỉnh.`,children:(0,y.jsx)(`div`,{className:`w-full max-w-sm`,children:(0,y.jsx)(b,{size:e,label:`Theme`,options:[{value:`light`,label:`Light Theme`},{value:`dark`,label:`Dark Theme`},{value:`system`,label:`System Default`,description:`This is a custom rich description.`}],description:`Chọn cách bạn muốn giao diện trông như thế nào. Nếu bạn chọn Mặc định hệ thống, chủ đề sẽ tự động thích ứng với cài đặt hệ điều hành của bạn khi có thể.`,defaultValue:`system`})})}),(0,y.jsx)(o,{label:`React Hook Form Integration`,description:`Xác thực form bằng Zod và React Hook Form.`,codeString:C,children:(0,y.jsx)(S,{size:e})})]})]})}export{w as default};