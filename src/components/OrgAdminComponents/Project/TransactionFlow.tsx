import { GrMenu } from "react-icons/gr";
import AmountPaidCard from "./AmountPaidCard";
import PaymentDueCard from "./PaymentDueCard";
import ProjectBudgetCard from "./ProjectBudgetCard";
import TransClientInfo from "./TransClientInfo";
import { LiaFilterSolid } from "react-icons/lia";
import SearchBar from "@/components/Utils/SearchBar";
import { useState } from "react";
import InvoiceTable from "@/components/Utils/InvoiceTable";

export default function TransactionFlow() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const invoice = [
    {
      invoice_id: 233,
      amount: "$20,000",
      issuing_date: "23rd May, 2023",
      payment_status: "Pending",
      payment_date: "23rd May, 2023",
      payment_Cat: "Subscription Fee",
    },
    {
      invoice_id: 233,
      amount: "$20,000",
      issuing_date: "23rd May, 2023",
      payment_status: "Pending",
      payment_date: "23rd May, 2023",
      payment_Cat: "Subscription Fee",
    },
    {
      invoice_id: 233,
      amount: "$20,000",
      issuing_date: "23rd May, 2023",
      payment_status: "Pending",
      payment_date: "23rd May, 2023",
      payment_Cat: "Subscription Fee",
    },
  ];
  return (
    <div className="">
      <div className="grid md:grid-cols-3  lg:grid-cols-4  my-8 gap-3">
        <ProjectBudgetCard />
        <AmountPaidCard />
        <PaymentDueCard />
        <TransClientInfo />
      </div>
      <div className="my-5 flex items-center justify-between">
        <GrMenu />
        <div className="flex items-center  gap-3">
          <button className="w-fit h-fit gap-2 border-[1px] border-[#cccccc] flex items-center rounded-lg px-3 py-1">
            <LiaFilterSolid /> Filter
          </button>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
      </div>
      <InvoiceTable invoiceData={invoice} />
    </div>
  );
}
