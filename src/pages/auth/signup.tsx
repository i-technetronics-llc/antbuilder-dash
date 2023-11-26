import OnboardingNavbar from "@/components/OnboardingComponents/OnboardingNavbar";
import SignUpFirstPage from "@/components/OnboardingComponents/SignUpFirstPage";
import SignUpSecondPage from "@/components/OnboardingComponents/SignUpSecondPage";
import StaffSignInLayout from "@/components/OnboardingComponents/StaffSignInLayout";
import { useEffect, useState } from "react";

export default function ClientSignUp() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");
  const [question, setQuestion] = useState<string>("");
  const [view, setView] = useState<string>("first");

  useEffect(() => {
    console.log(password, password2);
  }, [password, password2]);
  return (
    <StaffSignInLayout>
      <div className="w-[80%]">
        {/* <OnboardingNavbar /> */}

        <div className="  w-full font-mukta border-[1.5px] shadow-md border-solid border-[#00000020]  rounded-xl p-5 flex flex-col gap-5">
          <p className=" text-2xl font-semibold text-[#3B4350]">Sign Up</p>
          <p className=" font-semibold lg:w-[70%] w-full text-sm text-[#3B4350] leading-24">
            Enter your email address for instructions on how to reset your
            password
          </p>
          {view === "first" && (
            <SignUpFirstPage
              firstName={firstName}
              lastName={lastName}
              email={email}
              setEmail={setEmail}
              setFirstName={setFirstName}
              setLastName={setLastName}
              setView={setView}
            />
          )}
          {view === "second" && (
            <SignUpSecondPage
              password={password}
              password2={password2}
              question={question}
              setQuestion={setQuestion}
              setPassword={setPassword}
              setPassword2={setPassword2}
              setView={setView}
            />
          )}
        </div>
      </div>
    </StaffSignInLayout>
  );
}
