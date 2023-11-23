import { Image } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdArrowBack } from "react-icons/md";

export default function ResetPasswordNavbar() {
  const router = useRouter();
  return (
    <div className="w-full bg-[#0A2656] z-10 sticky top-0 flex items-center justify-between px-5">
      <div className="flex hidden lg:block items-center gap-3">
        <button
          className="w-fit h-fit px-3 py-1 hover:bg-white hover:text-[#0A2656] ease-in-out duration-700 text-white flex items-center gap-3 border-[1px] rounded-full border-white font-semibold "
          onClick={() => {
            router.back();
          }}
        >
          <MdArrowBack />
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
