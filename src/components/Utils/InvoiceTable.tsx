import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { type } from "os";
import { VscEllipsis } from "react-icons/vsc";

type invoiceTableDetails = {
  invoice_id: number;
  amount: string;
  issuing_date: string;
  payment_status: string;
  payment_date: string;
  payment_Cat: string;
};
type invoiceTableProps = {
  invoiceData: invoiceTableDetails[];
};

export default function InvoiceTable({ invoiceData }: invoiceTableProps) {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th fontWeight={600}>Invoice ID</Th>
            <Th fontWeight={600}>Amount</Th>
            <Th fontWeight={600}>Issuing Date</Th>
            <Th fontWeight={600}>Payment Status</Th>
            <Th fontWeight={600}>Payment Date</Th>
            <Th fontWeight={600}>Payment Category</Th>

            <Th fontWeight={600}>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {invoiceData.map((item, index) => (
            <Tr key={index}>
              <Td>{item.invoice_id}</Td>
              <Td>{item.amount}</Td>
              <Td>{item.issuing_date}</Td>
              <Td>
                <div className="w-fit hfit px-3 py-1 rounded-full bg-[#D0E1FF] text-xs text-[#3B82F6]">
                  {item.payment_status}{" "}
                </div>
              </Td>
              <Td>{item.payment_date}</Td>
              <Td>{item.payment_Cat}</Td>

              <Td>
                <VscEllipsis />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
