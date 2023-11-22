import { Input } from "@chakra-ui/react";
import ExternalProviderCard from "./ExternalProviderCard";
import { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/router";

type FirstPageProps = {
  firstName: string;
  lastName: string;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  setFirstName: Dispatch<SetStateAction<string>>;
  setLastName: Dispatch<SetStateAction<string>>;
  setView: Dispatch<SetStateAction<string>>;
};
export default function SignUpFirstPage({
  firstName,
  lastName,
  email,
  setEmail,
  setFirstName,
  setLastName,
  setView,
}: FirstPageProps) {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-1 w-full">
        <p className="text-xs font-semibold text-[#6C7480]">First Name</p>

        <Input
          type="text"
          className="bg-[#F8F8F8]"
          bg={"#F8F8F8"}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <p className="text-xs font-semibold text-[#6C7480]">Last Name</p>

        <Input
          type="text"
          className="bg-[#F8F8F8]"
          bg={"#F8F8F8"}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <p className="text-xs font-semibold text-[#6C7480]">Email Address</p>

        <Input
          type="text"
          className="bg-[#F8F8F8]"
          bg={"#F8F8F8"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
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
            email === "" && firstName === "" && lastName === ""
              ? " bg-[#D0E1FF]"
              : "bg-[#3B82F6] hover:bg-[#3B82F670]"
          }  rounded-full ease-in-out duration-700  text-white font-semibold py-3`}
          onClick={() => {
            if (email != "" && firstName != "" && lastName != "") {
              setView("second");
            }
          }}
        >
          {" "}
          Next
        </button>
        <p className="text-sm text-[#6C7480]">
          Have account?{" "}
          <span
            className="text-[#3B82F6] cursor-pointer"
            onClick={() => router.push("/auth/signisn")}
          >
            Log In
          </span>
        </p>
      </div>
    </div>
  );
}
