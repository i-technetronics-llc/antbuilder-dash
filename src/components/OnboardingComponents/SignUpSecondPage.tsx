import { Checkbox, Input } from "@chakra-ui/react";
import ExternalProviderCard from "./ExternalProviderCard";
import { Dispatch, SetStateAction, useState } from "react";
import { useRouter } from "next/router";
import { FaEye, FaEyeSlash } from "react-icons/fa";

type SecondPageProps = {
  password: string;
  password2: string;
  question: string;
  setPassword: Dispatch<SetStateAction<string>>;
  setPassword2: Dispatch<SetStateAction<string>>;
  setQuestion: Dispatch<SetStateAction<string>>;
  setView: Dispatch<SetStateAction<string>>;
};
export default function SignUpSecondPage({
  password,
  password2,
  question,
  setPassword,
  setPassword2,
  setQuestion,
  setView,
}: SecondPageProps) {
  const router = useRouter();
  const [terms, setTerms] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-1 w-full">
        <p className="text-xs font-semibold text-[#6C7480]">Password</p>

        <div className="w-full flex items-center gap-2">
          <Input
            type={showPassword ? "text" : "password"}
            className="bg-[#F8F8F8]"
            bg={"#F8F8F8"}
            size={"sm"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {!showPassword ? (
            <FaEye
              className="cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
          ) : (
            <FaEyeSlash
              className="cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
          )}
        </div>
      </div>
      <div className="flex flex-col gap-1 w-full">
        <p className="text-xs font-semibold text-[#6C7480]">Confirm Password</p>

        <div className="">
          <div className="w-full mb-2 flex items-center gap-2">
            <Input
              type={showPassword ? "text" : "password"}
              className="bg-[#F8F8F8]"
              bg={"#F8F8F8"}
              size={"sm"}
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
            {!showPassword ? (
              <FaEye
                className="cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <FaEyeSlash
                className="cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>
          {password != password2 && (
            <p className="text-xs text-red-600">Passwords do not match!</p>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-1 w-full">
        <p className="text-xs font-semibold text-[#6C7480]">Secret Question</p>

        <div className="w-full flex items-center gap-2">
          <Input
            type={showPassword ? "text" : "password"}
            className="bg-[#F8F8F8]"
            bg={"#F8F8F8"}
            size={"sm"}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          {!showPassword ? (
            <FaEye
              className="cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
          ) : (
            <FaEyeSlash
              className="cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
          )}
        </div>
      </div>
      <div className="w-full flex items-center gap-2">
        <Checkbox size={"md"} onChange={() => setTerms(!terms)} />
        <p className="text-sm  text-[#6C7480]">
          I have read and agree to the{" "}
          <span className="font-semibold text-[#3B82F6]">
            Term’s of Agreement
          </span>{" "}
        </p>
      </div>
      <div className="w-full flex flex-col gap-2 items-center">
        <button
          className={`w-full ${
            !terms ? " bg-[#D0E1FF]" : "bg-[#3B82F6] hover:bg-[#3B82F670]"
          }  rounded-full ease-in-out duration-700  text-white font-semibold py-3`}
          onClick={() => {
            // if (terms) {
            router.push("/onboarding/booking_information");
            // }
          }}
        >
          {" "}
          Next
        </button>
        <p className="text-sm text-[#6C7480]">
          Have account?{" "}
          <span
            className="text-[#3B82F6] cursor-pointer"
            onClick={() => router.push("/auth/signin")}
          >
            Log In
          </span>
        </p>
      </div>
    </div>
  );
}
