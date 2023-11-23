import { Checkbox, Input, Select, Textarea } from "@chakra-ui/react";
import ExternalProviderCard from "./ExternalProviderCard";
import { Dispatch, SetStateAction, useState } from "react";
import { useRouter } from "next/router";
import { FaEye, FaEyeSlash } from "react-icons/fa";

type ThirdPageProps = {
  company: string;
  website: string;
  industry: string;
  country: string;
  employeeCount: string;
  projectTitle: string;
  projectBudget: string;
  projectDescription: string;
  setCompany: Dispatch<SetStateAction<string>>;
  setWebsite: Dispatch<SetStateAction<string>>;
  setIndustry: Dispatch<SetStateAction<string>>;
  setCountry: Dispatch<SetStateAction<string>>;
  setEmployeeCount: Dispatch<SetStateAction<string>>;
  setProjectTitle: Dispatch<SetStateAction<string>>;
  setProjectBudget: Dispatch<SetStateAction<string>>;
  setProjectDescription: Dispatch<SetStateAction<string>>;
  setView: Dispatch<SetStateAction<string>>;
};
export default function SignUpThirdPage({
  company,
  country,
  website,
  industry,
  employeeCount,
  projectBudget,
  projectDescription,
  projectTitle,
  setCompany,
  setCountry,
  setEmployeeCount,
  setIndustry,
  setProjectBudget,
  setProjectDescription,
  setProjectTitle,
  setWebsite,
  setView,
}: ThirdPageProps) {
  const router = useRouter();
  const [terms, setTerms] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-1 w-full">
        <p className="text-xs font-semibold text-[#6C7480]">Company Name</p>

        <Input
          type="text"
          className="bg-[#F8F8F8]"
          bg={"#F8F8F8"}
          size={"lg"}
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <p className="text-xs font-semibold text-[#6C7480]">Website URL</p>

        <Input
          type="text"
          className="bg-[#F8F8F8]"
          bg={"#F8F8F8"}
          size={"lg"}
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <p className="text-xs font-semibold text-[#6C7480]">Industry</p>

        <Select onChange={(e) => setIndustry(e.target.value)}>
          <option value="Please Select Industry">Please Select Industry</option>
        </Select>
      </div>
      <div className="flex flex-col gap-1 w-full">
        <p className="text-xs font-semibold text-[#6C7480]">Country Region</p>

        <Select onChange={(e) => setCountry(e.target.value)}>
          <option value="Please Select Industry">Please Select Country</option>
        </Select>
      </div>
      <div className="flex flex-col gap-1 w-full">
        <p className="text-xs font-semibold text-[#6C7480]">Employee Count</p>

        <Input
          type="text"
          className="bg-[#F8F8F8]"
          bg={"#F8F8F8"}
          size={"lg"}
          value={employeeCount}
          onChange={(e) => setEmployeeCount(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <p className="text-xs font-semibold text-[#6C7480]">Project Title</p>

        <Input
          type="text"
          className="bg-[#F8F8F8]"
          bg={"#F8F8F8"}
          size={"lg"}
          value={projectTitle}
          onChange={(e) => setProjectTitle(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <p className="text-xs font-semibold text-[#6C7480]">Project Budget</p>

        <Input
          type="text"
          className="bg-[#F8F8F8]"
          bg={"#F8F8F8"}
          size={"lg"}
          value={projectBudget}
          onChange={(e) => setProjectBudget(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <p className="text-xs font-semibold text-[#6C7480]">
          Project Description
        </p>

        <Textarea
          //   type="text"

          className="bg-[#F8F8F8]"
          bg={"#F8F8F8"}
          size={"lg"}
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
        />
      </div>

      <div className="w-full flex flex-col lg:flex-row lg:justify-end items-center gap-2 items-center">
        {/* <button
          className="w-fit h-fit px-3 py-1 text-[#3B4350] font-semibold "
          onClick={() => {
            setView("second");
          }}
        >
          Back
        </button> */}
        <button
          className={`w-fit  ${
            projectDescription === ""
              ? " bg-[#D0E1FF]"
              : "bg-[#3B82F6] hover:bg-[#3B82F670]"
          }  rounded-full ease-in-out duration-700  text-white font-semibold px-7 py-3`}
          onClick={() => {
            if (projectDescription != "") {
              setView("second");
            }
          }}
        >
          {" "}
          Next
        </button>
      </div>
    </div>
  );
}
