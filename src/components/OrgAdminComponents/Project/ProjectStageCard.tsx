import { Progress } from "@chakra-ui/react";
import { GrLocation } from "react-icons/gr";

export default function ProjectStageCard() {
  return (
    <div className="w-full h-full border-[1px] shadow-md   d border-[#EBEBEB] rounded-xl p-5 flex flex-col gap-1">
      <div className="w-full border-b-[1px] border-[#EBEBEB] flex items-center gap-2">
        <GrLocation />
        <p className="text-sm font-semibold">PROJECT STAGE</p>
      </div>
      <div className="flex  flex-col gap-3 justify-between w-full h-full">
        <div className="w-full flex justify-between items-center">
          <div className="w-fit h-fit border-[1px] border-[#5F84C8] rounded-full px-2 text-[#5F84C8] py-1">
            <p className="text-xs">Development Stage</p>
          </div>
          <div className="w-fit h-fit  bg-[#00C48C13] rounded-full px-3 text-[#00C48C] py-1">
            <p className="text-sm">On Track</p>
          </div>
        </div>
        <div className="">
          <Progress
            borderRadius={8}
            size={"sm"}
            value={50}
            colorScheme="green"
          />
          <p className="text-sm text-[#A4AAB2]">256 Tasks to Completion</p>
        </div>
      </div>
    </div>
  );
}
