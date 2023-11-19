import { MdOutlineMenu } from "react-icons/md";

export default function ProjectCountDashboard() {
  return (
    <div className="w-full h-full border-[1px] shadow-md   d border-[#EBEBEB] rounded-xl p-5 flex flex-col gap-1">
      <div className="w-full border-b-[1px] border-[#EBEBEB] flex items-center gap-2">
        <MdOutlineMenu />
        <p className="text-sm font-semibold">PROJECT COUNT</p>
      </div>
      <div className="flex items-center justify-center w-full h-full">
        <p className="text-3xl font-semibold">20</p>
      </div>
    </div>
  );
}
