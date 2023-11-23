import EmailSignIn from "@/components/OnboardingComponents/EmailSignIn";
import ExternalProviderCard from "@/components/OnboardingComponents/ExternalProviderCard";
import OnboardingNavbar from "@/components/OnboardingComponents/OnboardingNavbar";
import RouteToDashboard from "@/components/OnboardingComponents/RouteToDashboard";
import StaffSignInLayout from "@/components/OnboardingComponents/StaffSignInLayout";
import { Checkbox, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function ClientSignIn() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [view, setView] = useState<string>("");
  return (
    <StaffSignInLayout>
      <div className="w-[80%]">
        {/* <OnboardingNavbar /> */}

        {view === "" ? (
          <div className="w-full font-mukta border-[1.5px] shadow-md border-solid border-[#00000020]  rounded-xl p-5 flex flex-col gap-5">
            <Image
              src="/icons/antbuilderlogoLight.svg"
              alt="logo light"
              w={40}
              h={10}
              className="hidden lg:block"
            />
            {/* <p className=" font-semibold text-[#3B4350]">Log In</p> */}

            <div className="flex flex-col gap-4">
              <EmailSignIn
                password={password}
                email={email}
                setPassword={setPassword}
                setEmail={setEmail}
              />
              <Checkbox
                spacing={"0.5rem"}
                className="font-semibold text-[#3B4350] text-sm"
              >
                {" "}
                Remember me{" "}
              </Checkbox>

              <Link
                href={"/auth/reset-password"}
                className="text-sm text-[#6C7480] font-semibold"
              >
                Forgot Password?
              </Link>
            </div>
            <div className="w-full border-[1px] border-[#D9D9D9]"></div>
            <div className="flex flex-col gap-3">
              <ExternalProviderCard
                url={"/icons/googleIcon.svg"}
                provider={"Google"}
              />
              <div className="flex flex-col md:flex-row w-full items-center gap-3">
                <ExternalProviderCard
                  url={"/icons/facebookIcon.svg"}
                  provider={"Facebook"}
                />
                <ExternalProviderCard
                  url={"/icons/appleIcon.svg"}
                  provider={"Apple"}
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-2 items-center">
              <button
                className={`w-full ${
                  email === "" && password === ""
                    ? " bg-[#D0E1FF]"
                    : "bg-[#3B82F6] hover:bg-[#3B82F670]"
                } rounded-full ease-in-out duration-700  text-white font-semibold py-3`}
                onClick={() => {
                  setView("dash");
                }}
              >
                {" "}
                Login
              </button>
              <p className="text-sm text-[#6C7480]">
                No account?{" "}
                <span
                  className="text-[#3B82F6] cursor-pointer"
                  onClick={() => router.push("/auth/signup")}
                >
                  Sign Up
                </span>
              </p>
            </div>
          </div>
        ) : (
          <RouteToDashboard />
        )}
      </div>
    </StaffSignInLayout>
  );
}
