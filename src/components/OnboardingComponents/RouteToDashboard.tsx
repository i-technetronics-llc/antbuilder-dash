import { Input } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";

export default function RouteToDashboard() {
  const router = useRouter();
  const [link, setLink] = useState<string>("");

  return (
    <div className=" w-[80%] border-[1px] border-solid border-[#00000020]  rounded-xl p-5 flex flex-col gap-5">
      <p className=" font-semibold text-[#3B4350]">Project Link</p>
      <p className=" font-semibold lg:w-[70%] w-full text-sm text-[#3B4350] leading-24">
        Input your the project link sent to your email to access your dashboard
      </p>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1 w-full">
          <p className="text-xs font-semibold text-[#6C7480]">Project Link</p>

          <Input
            type="text"
            size={"sm"}
            className="bg-[#F8F8F8]"
            placeholder="Type here"
            bg={"#F8F8F8"}
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
      </div>

      <div className="w-full flex flex-col gap-2 items-center">
        <button
          className={`w-full ${
            link === "" ? " bg-[#D0E1FF]" : "bg-[#3B82F6] hover:bg-[#3B82F670]"
          }  rounded-full ease-in-out duration-700  text-white font-semibold py-3`}
          onClick={() => router.push("/org_Admin/")}
        >
          {" "}
          Next
        </button>
        {/* <p className="text-sm text-[#6C7480]">
              Have account?{" "}
              <span
                className="text-[#3B82F6] cursor-pointer"
                onClick={() => router.push("/onboarding/staff_signIn")}
              >
                Log In
              </span>
            </p> */}
      </div>
    </div>
  );
}
