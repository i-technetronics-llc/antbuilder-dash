import { Image } from "@chakra-ui/react";
import { BiDollarCircle } from "react-icons/bi";

export default function TransClientInfo() {
  return (
    <div className="w-full h-full border-[1px] shadow-md   d border-[#EBEBEB] rounded-xl p-5 flex flex-col gap-1">
      <div className="w-full border-b-[1px] border-[#EBEBEB] flex items-center gap-2">
        <BiDollarCircle />
        <p className="text-sm font-semibold">AMOUNT PAID</p>
      </div>
      <div className="flex flex-col items-center gap-3 pt-3 justify-center w-full h-full">
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
            <p className="text-sm  text-[#3B4350]">Sarah Audu</p>
          </div>
        </div>
        <div className="w-full flex items-center gap-2 flex-col lg:flex-row ">
          <div className="flex flex-col gap-1 w-full">
            <p className="text-xs text-[#6C7480]">Email</p>

            <p className="text-xs  text-[#3B4350]">company@email.com</p>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <p className="text-xs text-[#6C7480]">Subscription Plan</p>

            <p className="text-xs  text-[#3B4350]">sampleData</p>
          </div>
        </div>
      </div>
    </div>
  );
}
