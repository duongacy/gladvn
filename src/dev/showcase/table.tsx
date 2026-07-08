import { useState } from "react";
import { SectionHeader, ExampleSection } from "@/dev/components/showcase";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow, TableFooter } from "@/components/micro/table";

type SortDirection = "asc" | "desc" | "none";

const DUMMY_DATA = [
  { id: "INV001", status: "Paid", method: "Credit Card", amount: "$250.00" },
  { id: "INV002", status: "Pending", method: "PayPal", amount: "$150.00" },
  { id: "INV003", status: "Unpaid", method: "Bank Transfer", amount: "$350.00" },
];

export default function TableShowcase() {
  const [invoiceSort, setInvoiceSort] = useState<SortDirection>("asc");

  const sortedData = [...DUMMY_DATA].sort((a, b) => {
    if (invoiceSort === "none") return 0;
    const compare = a.id.localeCompare(b.id);
    return invoiceSort === "asc" ? compare : -compare;
  });

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Table"
        description="Một thành phần bảng đáp ứng."
      />

      <ExampleSection
        label="Default"
        description="Bảng tiêu chuẩn có chú thích."
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
