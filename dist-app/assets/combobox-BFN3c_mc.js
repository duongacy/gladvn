import{Nn as e,cr as t,dr as n,i as r,n as i,r as a,s as o}from"./showcase-vJrKG7HA.js";import{t as s}from"./field-preset-D4aZ2rJM.js";import{_ as c,c as l,d as u,h as d,l as f,o as p,p as m,s as h,t as g,u as _}from"./combobox-DDh62TFy.js";import{i as v,n as y,t as b}from"./input-group-CEoiDdE-.js";import{t as x}from"./mono-select-2fT-ju4g.js";import{a as S,i as C,n as w,o as T,r as E}from"./schemas-Dv-WZqIR.js";var D=n(t(),1),O=e(),k=D.forwardRef(({options:e,value:t,defaultValue:n,onValueChange:r,placeholder:i=`Select an option`,searchPlaceholder:a,emptyText:o=`No results found.`,className:c,disabled:d,label:p,description:_,errorMessage:v,showError:y=!0,id:b,size:x=`md`},S)=>{let C=D.useId(),w=b||C;return(0,O.jsx)(s,{size:x,label:p,description:_,errorMessage:v,showError:y,className:c,orientation:`vertical`,htmlFor:w,children:(0,O.jsxs)(g,{items:D.useMemo(()=>e.map(e=>e.value),[e]),value:t,defaultValue:n,onValueChange:r,disabled:d,children:[(0,O.jsx)(A,{ref:S,inputId:w,size:x,placeholder:i||a,"aria-invalid":!!v||void 0,disabled:d}),(0,O.jsxs)(h,{children:[(0,O.jsx)(l,{children:o}),(0,O.jsx)(m,{children:(0,O.jsx)(f,{children:e.map(e=>(0,O.jsx)(u,{value:e.value,disabled:e.disabled,children:e.label},e.value))})})]})]})})});k.displayName=`ComboboxPreset`;var A=D.forwardRef(({inputId:e,size:t,placeholder:n,"aria-invalid":r,disabled:i},a)=>{let{setAnchor:o}=c();return(0,O.jsxs)(b,{ref:o,size:t,className:`w-full`,children:[(0,O.jsx)(_,{ref:a,id:e,placeholder:n,"aria-invalid":r,render:(0,O.jsx)(v,{disabled:i})}),(0,O.jsxs)(y,{align:`inline-end`,children:[(0,O.jsx)(d,{className:`flex h-full cursor-default items-center justify-center px-2.5 outline-none group-has-data-[slot=combobox-clear]/input-group:hidden disabled:cursor-not-allowed disabled:opacity-50`,disabled:i}),(0,O.jsx)(p,{disabled:i})]})]})});A.displayName=`ComboboxPresetInner`;var j=w({framework:E().min(1,`Vui lòng chọn một framework.`)});function M({size:e}){let t=T({resolver:C(j),defaultValues:{framework:``}});function n(e){alert(JSON.stringify(e,null,2))}return(0,O.jsxs)(`form`,{onSubmit:t.handleSubmit(n),className:`w-full max-w-sm space-y-6`,children:[(0,O.jsx)(S,{control:t.control,name:`framework`,render:({field:t,fieldState:n})=>(0,O.jsx)(k,{size:e,label:`Framework`,description:`Chọn framework yêu thích của bạn.`,placeholder:`Select framework...`,searchPlaceholder:`Search frameworks...`,emptyText:`No framework found.`,options:[{value:`react`,label:`React`},{value:`vue`,label:`Vue`},{value:`angular`,label:`Angular`},{value:`svelte`,label:`Svelte`}],value:t.value,onValueChange:t.onChange,errorMessage:n.error?.message})}),(0,O.jsx)(o,{type:`submit`,size:e,children:`Submit`})]})}var N=`const formSchema = z.object({
  framework: z.string().min(1, "Vui lòng chọn một framework."),
});

type FormValues = z.infer<typeof formSchema>;

function ComboboxForm({ size }: { size: Size }) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { framework: "" },
  });

  function onSubmit(values: FormValues) {
    alert(JSON.stringify(values, null, 2));
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-sm space-y-6">
      <Controller
        control={form.control}
        name="framework"
        render={({ field, fieldState }) => (
          <ComboboxPreset
            size={size}
            label="Framework"
            description="Chọn framework yêu thích của bạn."
            placeholder="Select framework..."
            searchPlaceholder="Search frameworks..."
            emptyText="No framework found."
            options={[
              { value: "react", label: "React" },
              { value: "vue", label: "Vue" },
              { value: "angular", label: "Angular" },
              { value: "svelte", label: "Svelte" },
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
}`;function P(){let[e,t]=(0,D.useState)(`md`);return(0,O.jsxs)(`div`,{className:`space-y-10`,children:[(0,O.jsx)(r,{title:`Combobox (Macro)`,description:`Một thành phần cài sẵn bao gồm Combobox, Field, Label và Description.`,children:(0,O.jsx)(x,{value:e,onValueChange:e=>t(e),options:[{value:`sm`,label:`Size: sm`},{value:`md`,label:`Size: md`},{value:`lg`,label:`Size: lg`}]})}),(0,O.jsxs)(i,{columns:2,children:[(0,O.jsx)(a,{label:`Standard`,description:`Combobox cơ bản có nhãn và mô tả.`,children:(0,O.jsx)(`div`,{className:`w-full max-w-sm`,children:(0,O.jsx)(k,{size:e,label:`Framework`,description:`Chọn khuôn khổ yêu thích của bạn.`,placeholder:`Pick a framework...`,searchPlaceholder:`Search framework...`,emptyText:`No framework found.`,options:[{value:`react`,label:`React`},{value:`vue`,label:`Vue`},{value:`angular`,label:`Angular`},{value:`svelte`,label:`Svelte`}]})})}),(0,O.jsx)(a,{label:`Error State`,description:`Thể hiện các đạo cụ errorMessage và showError.`,children:(0,O.jsxs)(`div`,{className:`w-full max-w-sm flex flex-col gap-6`,children:[(0,O.jsx)(k,{size:e,label:`Framework (Invalid)`,placeholder:`Pick a framework...`,options:[{value:`react`,label:`React`}],errorMessage:`You must select a framework.`}),(0,O.jsx)(k,{size:e,label:`Framework (Hidden Error)`,description:`Văn bản lỗi bị ẩn bằng showError={false}`,placeholder:`Pick a framework...`,options:[{value:`react`,label:`React`}],errorMessage:`Hidden error.`,showError:!1})]})}),(0,O.jsx)(a,{label:`Disabled State`,description:`Một combobox không tương tác.`,children:(0,O.jsx)(`div`,{className:`w-full max-w-sm`,children:(0,O.jsx)(k,{size:e,label:`Team`,description:`Bạn không có quyền thay đổi đội.`,placeholder:`Select team...`,searchPlaceholder:`Search team...`,emptyText:`No team found.`,options:[{value:`engineering`,label:`Engineering`},{value:`design`,label:`Design`}],value:`engineering`,disabled:!0})})}),(0,O.jsx)(a,{label:`Long List`,description:`Thể hiện thao tác cuộn với nhiều tùy chọn.`,children:(0,O.jsx)(`div`,{className:`w-full max-w-sm`,children:(0,O.jsx)(k,{size:e,label:`Timezone`,placeholder:`Select timezone...`,searchPlaceholder:`Search timezone...`,emptyText:`No timezone found.`,options:Array.from({length:50}).map((e,t)=>({value:`utc${t-12}`,label:`UTC ${t-12>0?`+`:``}${t-12}:00`}))})})}),(0,O.jsx)(a,{label:`React Hook Form Integration`,description:`Xác thực form bằng Zod và React Hook Form.`,codeString:N,children:(0,O.jsx)(M,{size:e})})]})]})}export{P as default};