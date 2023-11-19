import { BiDollarCircle } from "react-icons/bi";
import { MdOutlineMenu } from "react-icons/md";

export default function ProjectBudgetCard() {
  return (
    <div className="w-full h-full border-[1px] shadow-md   d border-[#EBEBEB] rounded-xl p-5 flex flex-col gap-1">
      <div className="w-full border-b-[1px] border-[#EBEBEB] flex items-center gap-2">
        <BiDollarCircle />
        <p className="text-sm font-semibold">PROJECT BUDGET</p>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <p className="text-3xl font-semibold">200M</p>
        <p className="text-sm text-[#00C48C]">
          53% <span className="text-[#A4AAB2]">Paid in 3 Months</span>
        </p>
      </div>
    </div>
  );
}
