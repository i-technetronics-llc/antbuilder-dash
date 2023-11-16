import OnboardingNavbar from "@/components/OnboardingComponents/OnboardingNavbar";
import { Image, Input } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";

export default function ResetPassword() {
  const [email, setEmail] = useState<string>("");

  const router = useRouter();
  return (
    <div className="">
      <OnboardingNavbar />
      <div className="h-[90vh] font-mukta flex items-center w-full justify-center ">
        <div className="lg:w-[35%] w-[80%] border-[1px] border-solid border-[#00000020]  rounded-xl p-5 flex flex-col gap-5">
          <Image
            src="/icons/antbuilderlogoLight.svg"
            alt="logo light"
            w={40}
            h={10}
          />
          <p className=" font-semibold text-[#3B4350]">Reset Password</p>
          <p className=" font-semibold lg:w-[70%] w-full text-sm text-[#3B4350] leading-24">
            Enter your email address for instructions on how to reset your
            password
          </p>

          <div className="flex flex-col gap-1 w-full">
            <p className="text-xs font-semibold text-[#6C7480]">
              Email Address
            </p>

            <Input
              type="text"
              size={"sm"}
              className="bg-[#F8F8F8]"
              bg={"#F8F8F8"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="w-full flex flex-col gap-2 items-center">
            <button
              className={`w-full ${
                email === ""
                  ? " bg-[#D0E1FF]"
                  : "bg-[#3B82F6] hover:bg-[#3B82F670]"
              } bg-[#D0E1FF] rounded-full ease-in-out duration-700  text-white font-semibold py-3`}
            >
              {" "}
              Reset Password
            </button>
            <button className="w-fit h-fit px-3 py-1 text-[#3B4350] font-semibold ">
              Return to Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
