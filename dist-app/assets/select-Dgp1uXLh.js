import{Nn as e,cr as t,dr as n,i as r,n as i,r as a,s as o}from"./showcase-vJrKG7HA.js";import{t as s}from"./select-preset-B6grUIWS.js";import{a as c,i as l,n as u,o as d,r as f}from"./schemas-Dv-WZqIR.js";var p=n(t(),1),m=e(),h=u({language:f().min(1,`Vui lòng chọn một ngôn ngữ.`)});function g({size:e}){let t=d({resolver:l(h),defaultValues:{language:``}});function n(e){alert(JSON.stringify(e,null,2))}return(0,m.jsxs)(`form`,{onSubmit:t.handleSubmit(n),className:`w-full max-w-sm space-y-6`,children:[(0,m.jsx)(c,{control:t.control,name:`language`,render:({field:t,fieldState:n})=>(0,m.jsx)(s,{size:e,label:`Language`,description:`Ngôn ngữ ưa thích của bạn là gì?`,placeholder:`Select a language...`,options:[{value:`en`,label:`English`},{value:`vi`,label:`Vietnamese`},{value:`fr`,label:`French`}],value:t.value,onValueChange:t.onChange,errorMessage:n.error?.message})}),(0,m.jsx)(o,{type:`submit`,size:e,children:`Submit`})]})}var _=`const formSchema = z.object({
  language: z.string().min(1, "Vui lòng chọn một ngôn ngữ."),
});

type FormValues = z.infer<typeof formSchema>;

function SelectForm({ size }: { size: Size }) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { language: "" },
  });

  function onSubmit(values: FormValues) {
    alert(JSON.stringify(values, null, 2));
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-sm space-y-6">
      <Controller
        control={form.control}
        name="language"
        render={({ field, fieldState }) => (
          <SelectPreset
            size={size}
            label="Language"
            description="Ngôn ngữ ưa thích của bạn là gì?"
            placeholder="Select a language..."
            options={[
              { value: "en", label: "English" },
              { value: "vi", label: "Vietnamese" },
              { value: "fr", label: "French" },
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
}`;function v(){let[e,t]=(0,p.useState)(`md`);return(0,m.jsxs)(`div`,{className:`space-y-10`,children:[(0,m.jsx)(r,{title:`Select (Macro)`,description:`Một thành phần đặt trước bao gồm Chọn, Trường, Nhãn và Mô tả.`,children:(0,m.jsx)(s,{value:e,onValueChange:e=>t(e),options:[{value:`sm`,label:`Size: sm`},{value:`md`,label:`Size: md`},{value:`lg`,label:`Size: lg`}],className:`w-[120px] h-8 text-xs bg-background`})}),(0,m.jsxs)(i,{columns:2,children:[(0,m.jsx)(a,{label:`Standard`,description:`Chọn thả xuống cơ bản với nhãn và mô tả.`,children:(0,m.jsx)(`div`,{className:`w-full max-w-sm`,children:(0,m.jsx)(s,{size:e,label:`Fruit`,description:`Chọn trái cây yêu thích của bạn.`,placeholder:`Pick a fruit...`,options:[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`}]})})}),(0,m.jsx)(a,{label:`Error State`,description:`Thể hiện các đạo cụ errorMessage và showError.`,children:(0,m.jsxs)(`div`,{className:`w-full max-w-sm flex flex-col gap-6`,children:[(0,m.jsx)(s,{size:e,label:`Framework (Invalid)`,placeholder:`Pick a framework...`,options:[{value:`react`,label:`React`}],errorMessage:`You must select a framework.`}),(0,m.jsx)(s,{size:e,label:`Framework (Hidden Error)`,description:`Văn bản lỗi bị ẩn bằng showError={false}`,placeholder:`Pick a framework...`,options:[{value:`react`,label:`React`}],errorMessage:`Hidden error.`,showError:!1})]})}),(0,m.jsx)(a,{label:`Disabled State`,description:`Một thành phần chọn không tương tác.`,children:(0,m.jsx)(`div`,{className:`w-full max-w-sm`,children:(0,m.jsx)(s,{size:e,label:`Account Tier`,description:`Bạn không thể hạ cấp tài khoản của mình vào lúc này.`,placeholder:`Select tier...`,value:`pro`,options:[{value:`basic`,label:`Cơ bản`},{value:`pro`,label:`Pro`}],disabled:!0})})}),(0,m.jsx)(a,{label:`Real-world Form Snippet`,description:`Tích hợp nhãn tùy chỉnh và mô tả chi tiết.`,children:(0,m.jsx)(`div`,{className:`w-full max-w-sm`,children:(0,m.jsx)(s,{size:e,label:(0,m.jsxs)(`span`,{className:`flex items-center gap-2`,children:[`Country of Residence `,(0,m.jsx)(`span`,{className:`text-destructive`,children:`*`})]}),description:`Thông tin này được sử dụng cho mục đích tính thuế. Hãy đảm bảo nó khớp với địa chỉ thanh toán của bạn.`,placeholder:`Select your country...`,options:[{value:`us`,label:`United States`},{value:`ca`,label:`Canada`},{value:`uk`,label:`United Kingdom`},{value:`au`,label:`Australia`}]})})}),(0,m.jsx)(a,{label:`React Hook Form Integration`,description:`Xác thực form bằng Zod và React Hook Form.`,codeString:_,children:(0,m.jsx)(g,{size:e})})]})]})}export{v as default};