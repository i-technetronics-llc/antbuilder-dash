import { Image } from "@chakra-ui/react";

export default function ScopeCard() {
  return (
    <div className="w-full h-full border-[1px]  d border-[#EBEBEB] rounded-xl p-5 flex flex-col gap-3">
      <p className="text-xs text-[#080E1A]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore{" "}
      </p>

      <div className="flex  items-center justify-between gap-1 w-full">
        <div className="flex item-center gap-2">
          <Image
            src={"/img/headshot.jpg"}
            alt="logo"
            width={5}
            height={5}
            // className="cursor-pointer"
          />
          <div className="">
            <p className="text-sm font-semibold text-[#3B4350]">Sarah Audu</p>
            <p className="text-xs  text-[#3B4350]">Role</p>
          </div>
        </div>
        <p className="text-[#6C7480] text-xs">Today</p>
      </div>
    </div>
  );
}
