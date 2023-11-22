import OnboardingNavbar from "@/components/OnboardingComponents/OnboardingNavbar";
import SignUpFirstPage from "@/components/OnboardingComponents/SignUpFirstPage";
import SignUpSecondPage from "@/components/OnboardingComponents/SignUpSecondPage";
import SignUpThirdPage from "@/components/OnboardingComponents/SignUpThirdPage";
import { Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function BookingInformation() {
  const [company, setCompany] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [website, setWebsite] = useState<string>("");
  const [industry, setIndustry] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [employeeCount, setEmployeeCount] = useState<string>("");
  const [projectTitle, setProjectTitle] = useState<string>("");
  const [projectBudget, setProjectBudget] = useState<string>("");
  const [projectDescription, setProjectDescription] = useState<string>("");

  const [view, setView] = useState<string>("first");

  return (
    <div className="">
      <OnboardingNavbar />
      <div className="h-[90vh] flex items-center w-full justify-center ">
        <div className="lg:w-[35%] font-mukta shadow-md max-h-[90%] overflow-y-scroll w-[80%] border-[1px] border-solid border-[#00000020]  rounded-xl p-5 flex flex-col gap-5">
          {/* <Image
              src="/icons/antbuilderlogoLight.svg"
              alt="logo light"
              w={40}
              h={10}
            /> */}
          <p className=" font-semibold text-[#3B4350]">Booking Information</p>
          <p className=" font-semibold lg:w-[70%] w-full text-sm text-[#3B4350] leading-24">
            Schedule a call to let us Know more about your project
          </p>
          {view === "first" && (
            <SignUpThirdPage
              company={company}
              country={country}
              website={website}
              industry={industry}
              employeeCount={employeeCount}
              projectTitle={projectTitle}
              projectBudget={projectBudget}
              projectDescription={projectDescription}
              setCompany={setCompany}
              setCountry={setCountry}
              setEmployeeCount={setEmployeeCount}
              setIndustry={setIndustry}
              setProjectBudget={setProjectBudget}
              setProjectDescription={setProjectDescription}
              setProjectTitle={setProjectTitle}
              setView={setView}
              setWebsite={setWebsite}
            />
          )}
          {view === "second" && (
            <div className="flex flex-col gap-4 w-full">
              <div className="flex flex-col gap-1 w-full">
                <p className="text-xs font-semibold text-[#6C7480]">
                  Schedule a call
                </p>

                <Input
                  type="date"
                  size={"sm"}
                  className="bg-[#F8F8F8]"
                  bg={"#F8F8F8"}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className="w-full flex flex-col lg:flex-row lg:justify-end items-center gap-2 items-center">
                <button
                  className="w-fit h-fit px-3 py-1 text-[#3B4350] font-semibold "
                  onClick={() => {
                    setView("first");
                  }}
                >
                  Back
                </button>
                <button
                  className={`w-fit  ${
                    date === ""
                      ? " bg-[#D0E1FF]"
                      : "bg-[#3B82F6] hover:bg-[#3B82F670]"
                  } bg-[#D0E1FF] rounded-full ease-in-out duration-700  text-white font-semibold px-7 py-3`}
                  onClick={() => {
                    if (date === "") {
                    }
                  }}
                >
                  {" "}
                  Submit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
