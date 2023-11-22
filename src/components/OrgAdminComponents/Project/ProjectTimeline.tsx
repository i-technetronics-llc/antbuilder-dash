import { BiDollarCircle } from "react-icons/bi";
import { MdOutlineMenu } from "react-icons/md";

export default function ProjectTimelineCard() {
  return (
    <div className="w-full h-full border-[1px] shadow-md   d border-[#EBEBEB] rounded-xl p-5 flex flex-col gap-1">
      <div className="w-full border-b-[1px] border-[#EBEBEB] flex items-center gap-2">
        <BiDollarCircle />
        <p className="text-sm font-semibold">PROJECT BUDGET</p>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <p className="text-3xl font-semibold">1 YEAR</p>
        <p className="text-smtext-[#A4AAB2]">Dec 2023 - Mar 2024</p>
      </div>
    </div>
  );
}
