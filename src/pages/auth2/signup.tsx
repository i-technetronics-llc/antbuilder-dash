import EmailSignIn from "@/components/OnboardingComponents/EmailSignIn";
import ExternalProviderCard from "@/components/OnboardingComponents/ExternalProviderCard";
import RouteToDashboard from "@/components/OnboardingComponents/RouteToDashboard";
import StaffSignInLayout from "@/components/OnboardingComponents/StaffSignInLayout";
import { useRouter } from "next/router";
import { useState } from "react";

export default function StaffSignUp() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [view, setView] = useState<string>("first");

  return (
    <StaffSignInLayout>
      {view === "first" ? (
        <div className=" w-[80%] font-mukta shadow-md border-[1px] border-solid border-[#00000020]  rounded-xl p-5 flex flex-col gap-5">
          <p className=" text-2xl font-semibold text-[#3B4350]">Sign Up</p>
          <p className=" font-semibold lg:w-[70%] w-full text-sm text-[#3B4350] leading-24">
            Set up your account and get in touch with a skilled development
            expert today!
          </p>
          <div className="flex flex-col gap-4">
            <EmailSignIn
              password={password}
              email={email}
              setPassword={setPassword}
              setEmail={setEmail}
            />

            {/* <Link
              href={"/onboarding/reset-password"}
              className="text-sm text-[#6C7480] font-semibold"
            >
              Forgot Password?
            </Link> */}
          </div>
          <div className="w-full border-[1px] border-[#D9D9D9]"></div>
          <div className="flex flex-col gap-3">
            <ExternalProviderCard
              url={"/icons/googleIcon.svg"}
              provider={"Google"}
            />
          </div>
          <div className="w-full flex flex-col gap-2 items-center">
            <button
              className={`w-full ${
                email === "" && password === ""
                  ? " bg-[#D0E1FF]"
                  : "bg-[#3B82F6] hover:bg-[#3B82F670]"
              }  rounded-full ease-in-out duration-700  text-white font-semibold py-3`}
              onClick={() => {
                setView("second");
              }}
            >
              {" "}
              Next
            </button>
            <p className="text-sm text-[#6C7480]">
              Have account?{" "}
              <span
                className="text-[#3B82F6] cursor-pointer"
                onClick={() => router.push("/auth2/signin")}
              >
                Log In
              </span>
            </p>
          </div>
        </div>
      ) : (
        <RouteToDashboard />
      )}
    </StaffSignInLayout>
  );
}
