import { Image } from "@chakra-ui/react";
import { Progress } from "@chakra-ui/react";

export default function ProjectCard() {
  return (
    <div className="w-full h-full border-[1px] shadow-md   border-[#EBEBEB] justify-between rounded-xl p-5 flex flex-col gap-3">
      <div className="w-full flex md:flex-row flex-col items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src={"/icons/projectlogo2.svg"}
            alt="logo"
            width={10}
            height={10}
            className="cursor-pointer"
          />
          <div className="flex- flex-col gap-2">
            <p className=" font-semibold">Project name</p>
            <p className="text-sm text-[#A4AAB2] "> ID: 1234567</p>
          </div>
        </div>
        <div className="flex- flex-col gap-2">
          <div className="w-fit h-fit px-3 py-1 bg-[#EDF4FF] rounded-full text-[#3B82F6] text-xs">
            <p>On Track</p>{" "}
          </div>
          <p className="text-sm text-[#A4AAB2] "> Due: 11-08-2023</p>
        </div>
      </div>

      <div className="flex flex-col gap-1 w-full">
        <p className="text-xs text-[#6C7480]">Client</p>
        <div className="flex item-center gap-2">
          <Image
            src={"/img/headshot.jpg"}
            alt="logo"
            width={5}
            height={5}
            // className="cursor-pointer"
          />
          <p className="text-sm font-semibold text-[#3B4350]">Sarah Audu</p>
        </div>
      </div>
      <div className="w-full flex items-center gap-2 flex-col lg:flex-row ">
        <div className="flex flex-col gap-1 w-full">
          <p className="text-xs text-[#6C7480]">Account Executive</p>
          <div className="flex item-center gap-2">
            <Image
              src={"/img/headshot.jpg"}
              alt="logo"
              width={5}
              height={5}
              // className="cursor-pointer"
            />
            <p className="text-sm font-semibold text-[#3B4350]">Sarah Audu</p>
          </div>
        </div>
        <div className="flex flex-col gap-1 w-full">
          <p className="text-xs text-[#6C7480]">CSM Manager</p>
          <div className="flex item-center gap-2">
            <Image
              src={"/img/headshot.jpg"}
              alt="logo"
              width={5}
              height={5}
              // className="cursor-pointer"
            />
            <p className="text-sm font-semibold text-[#3B4350]">Sarah Audu</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1 w-full">
        <p className="text-xs text-[#6C7480]">Git Link</p>
        <div className="flex item-center gap-2">
          <a className="text-sm truncate  text-[#3B82F6]">
            https://www.xufhflfo.mnc/mkd/o103/ifjn
          </a>
        </div>
      </div>
      <Progress colorScheme="green" size="sm" value={20} borderRadius={5} />
    </div>
  );
}
