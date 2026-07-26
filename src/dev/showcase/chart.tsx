import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent
} from "../../components/micro/chart";
import {
  DocsCode,
  DocsP,
  ShowcaseExample,
  Showcase,
  ShowcaseDocs
} from "../../dev/components/showcase";

export default function ChartShowcase() {
  return (
    <Showcase
      title="Chart"
      description="Biểu đồ đẹp và responsive, xây dựng trên nền Recharts."
      guideline={
        <ShowcaseDocs>
          <DocsP>
            Component wrapper cho thư viện <DocsCode>Recharts</DocsCode>. Cung
            cấp <DocsCode>ChartContainer</DocsCode> để cấu hình theme màu sắc,{" "}
            <DocsCode>ChartTooltip</DocsCode> và{" "}
            <DocsCode>ChartLegend</DocsCode> để hiển thị thông tin bổ sung khi
            hover.
          </DocsP>
        </ShowcaseDocs>
      }
      micro={{ content: <ChartMicroShowcase /> }}
    />
  );
}

function ChartMicroShowcase() {
  return (
    <div className="space-y-10">
      <ShowcaseExample title="Bar Chart" description="Biểu đồ cột cơ bản kèm tooltip và legend." code={`const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))" },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))" } } satisfies ChartConfig

<ChartContainer
  config={chartConfig}
  className="min-h-[200px] w-full max-w-lg"
>
  <BarChart accessibilityLayer data={chartData}>
    <CartesianGrid vertical={false} />
    <XAxis
      dataKey="month"
      tickLine={false}
      tickMargin={10}
      axisLine={false}
      tickFormatter={(value) => value.slice(0, 3)}
    />
    <ChartTooltip content={<ChartTooltipContent />} />
    <ChartLegend content={<ChartLegendContent />} />
    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
    <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
  </BarChart>
</ChartContainer>`} preview={
                  <>
          <ChartContainer
                    config={{
                      desktop: {
                        label: "Desktop",
                        color: "hsl(var(--chart-1))" },
                      mobile: {
                        label: "Mobile",
                        color: "hsl(var(--chart-2))" } }}
                    className="min-h-[200px] w-full max-w-lg"
                  >
                    <BarChart
                      accessibilityLayer
                      data={[
                        { month: "January", desktop: 186, mobile: 80 },
                        { month: "February", desktop: 305, mobile: 200 },
                        { month: "March", desktop: 237, mobile: 120 },
                        { month: "April", desktop: 73, mobile: 190 },
                        { month: "May", desktop: 209, mobile: 130 },
                        { month: "June", desktop: 214, mobile: 140 },
                      ]}
                    >
                      <CartesianGrid vertical={false} />
                      <XAxis
                        dataKey="month"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value.slice(0, 3)}
                      />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <ChartLegend content={<ChartLegendContent />} />
                      <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                      <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                    </BarChart>
                  </ChartContainer>
                  </>
                } />
    </div>
  );
}
