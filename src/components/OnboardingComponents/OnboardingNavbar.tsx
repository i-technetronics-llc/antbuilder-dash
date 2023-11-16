import { Image } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function OnboardingNavbar() {
  const router = useRouter();
  return (
    <div className="w-full z-10 sticky top-0 flex items-center justify-between px-5">
      <Image
        src="/icons/antbuilderlogoLight.svg"
        alt="logo light"
        w={40}
        h={20}
      />
      <div className="flex hidden lg:block items-center gap-3">
        <button
          className="w-fit h-fit px-3 py-1 text-[#3B4350] font-semibold "
          onClick={() => {
            if (router.asPath === "/onboarding/client_signIn") {
              router.push("/onboarding/client_signUp");
            } else {
              router.push("/onboarding/client_signIn");
            }
          }}
        >
          {router.asPath === "/onboarding/client_signIn" ? "Sign Up" : "Log In"}
        </button>

        <Link href={"https://www.antbuilder.tech/get-started"} target="_blank">
          <button className="w-fit h-fit px-3 py-1 text-[#3B82F6] hover:bg-[#3B82F6] ease-in-out duration-700 hover:text-white border-[1px] rounded-full border-[#3B82F6] border-solid ">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}
