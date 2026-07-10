import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/micro/table";
import {
  DocsH3,
  DocsP,
  ExampleSection,
  Showcase,
  ShowcaseDocs,
} from "@/dev/components/showcase";
import { useState } from "react";

type SortDirection = "asc" | "desc" | "none";

const DUMMY_DATA = [
  { id: "INV001", status: "Paid", method: "Credit Card", amount: "$250.00" },
  { id: "INV002", status: "Pending", method: "PayPal", amount: "$150.00" },
  {
    id: "INV003",
    status: "Unpaid",
    method: "Bank Transfer",
    amount: "$350.00",
  },
];

function TableMicroShowcase() {
  const [invoiceSort, setInvoiceSort] = useState<SortDirection>("asc");

  const sortedData = [...DUMMY_DATA].sort((a, b) => {
    if (invoiceSort === "none") return 0;
    const compare = a.id.localeCompare(b.id);
    return invoiceSort === "asc" ? compare : -compare;
  });

  return (
    <div className="space-y-10 mt-6">
      <ExampleSection
        label="Default"
        description="Bảng tiêu chuẩn có chú thích."
        codeString={`<Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell className="text-right">\$250.00</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">INV002</TableCell>
      <TableCell>Pending</TableCell>
      <TableCell>PayPal</TableCell>
      <TableCell className="text-right">\$150.00</TableCell>
    </TableRow>
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell colSpan={3}>Total</TableCell>
      <TableCell className="text-right">\$2,500.00</TableCell>
    </TableRow>
  </TableFooter>
</Table>
`}
      >
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">INV002</TableCell>
              <TableCell>Pending</TableCell>
              <TableCell>PayPal</TableCell>
              <TableCell className="text-right">$150.00</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">$2,500.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </ExampleSection>

      <ExampleSection
        label="Sortable"
        description="Bảng có tính năng sắp xếp dữ liệu (strictly controlled). Thử click vào cột Invoice!"
        codeString={`const [invoiceSort, setInvoiceSort] = React.useState<"asc" | "desc" | "none">("asc")

// Tính toán sortedData dựa trên invoiceSort ở đây...

return (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead 
          className="w-[100px]"
          sortDirection={invoiceSort}
          sortOptions={["asc", "desc"]}
          onSort={(dir) => setInvoiceSort(dir as SortDirection)}
        >
          Invoice
        </TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Method</TableHead>
        <TableHead className="text-right">Amount</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {sortedData.map((item) => (
        <TableRow key={item.id}>
          <TableCell className="font-medium">{item.id}</TableCell>
          <TableCell>{item.status}</TableCell>
          <TableCell>{item.method}</TableCell>
          <TableCell className="text-right">{item.amount}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
)`}
      >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead
                className="w-[100px]"
                sortDirection={invoiceSort}
                sortOptions={["asc", "desc"]}
                onSort={(dir) => setInvoiceSort(dir as SortDirection)}
              >
                Invoice
              </TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedData.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.id}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell>{item.method}</TableCell>
                <TableCell className="text-right">{item.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ExampleSection>
    </div>
  );
}

export default function TableShowcase() {
  return (
    <Showcase
      title="Table"
      description="Một thành phần bảng đáp ứng."
      generalConcept={
        <ShowcaseDocs>
          <DocsH3>Table</DocsH3>
          <DocsP>Sử dụng để hiển thị dữ liệu dạng bảng.</DocsP>
        </ShowcaseDocs>
      }
      tabs={[{ label: "Micro (Primitive)", content: <TableMicroShowcase /> }]}
    />
  );
}
