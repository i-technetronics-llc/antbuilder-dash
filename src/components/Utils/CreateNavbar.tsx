import { Image } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

export default function CreateNavbar() {
  const router = useRouter();
  return (
    <div className="w-full z-10 sticky top-0 flex items-center bg-[#0A2656] justify-between px-5">
      <div className="flex lg:block items-center gap-3">
        <button
          className="w-fit h-fit px-3 py-1 flex items-center gap-2 text-white hover:bg-white hover:text-[#0A2656] bg-transparent rounded-full ease-in-out duration-700 border-white border-[1px]  font-semibold "
          onClick={() => {
            router.back();
          }}
        >
          <MdOutlineKeyboardBackspace />
          Back
        </button>
      </div>
      <Image
        src="/icons/antbuilderIconDark.svg"
        alt="logo light"
        w={40}
        h={20}
      />
    </div>
  );
}
