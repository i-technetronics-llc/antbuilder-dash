import OnboardingNavbar from "@/components/OnboardingComponents/OnboardingNavbar";
import SignUpFirstPage from "@/components/OnboardingComponents/SignUpFirstPage";
import SignUpSecondPage from "@/components/OnboardingComponents/SignUpSecondPage";
import SignUpThirdPage from "@/components/OnboardingComponents/SignUpThirdPage";

import { useEffect, useState } from "react";
import {
  Checkbox,
  Input,
  Select,
  Spinner,
  Textarea,
  useToast,
} from "@chakra-ui/react";
// import ExternalProviderCard from "./ExternalProviderCard";
import { InlineWidget, PopupWidget } from "react-calendly";
import { useRouter } from "next/router";
import { FaAsterisk, FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { CreateBooking } from "@/models/org_Admin.models";
import BookingServices from "@/services/Booking-services/booking.services";

export default function BookingInformation() {
  const toast = useToast();
  const [firstName, setFirstName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [website, setWebsite] = useState<string>("");
  const [industry, setIndustry] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [employeeCount, setEmployeeCount] = useState<number>();
  const [projectTitle, setProjectTitle] = useState<string>("");
  const [projectBudget, setProjectBudget] = useState<number>();
  const [projectDescription, setProjectDescription] = useState<string>("");
  const [view, setView] = useState<string>("first");
  const [loading, setLoading] = useState<boolean>(false);
  const [rootElement, setRootElement] = useState<HTMLElement>();

  useEffect(() => {
    // Wait for the component to be mounted before setting the rootElement
    if (typeof window !== "undefined") {
      setRootElement(document.getElementById("__next") as HTMLElement);
    }
  }, []);
  function isValidEmail(email: string): boolean {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  }
  function isValidPhone(phone: string): boolean {
    const regex =
      /^\+?([0-9]{1,3})?[-. ]?([(0-9]{1,4})?[-. ]?([0-9]{1,4})?[-. ]?([0-9]{1,4})?[-. ]?([0-9]{1,4})$/;
    return regex.test(phone);
  }
  const createBooking = async () => {
    setLoading(true);
    const data: CreateBooking = {
      personalData: {
        firstName,
        lastName,
        email,
        phone,
      },
      companyData: {
        companyName: company,
        websiteUrl: website,
        industry: industry,
        countryName: country,
        state,
        employeeCount: employeeCount as number,
      },
      projectData: {
        projectTitle,
        projectBudget: projectBudget as number,
        projectDescription,
      },
    };
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
    console.log(baseURL, "baseeee");
    try {
      const res = await BookingServices.createBooking(data);
      if (res.status === 302) {
        setLoading(false);
        setView("fourth");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex w-full h-screen items-center justify-center flex-col">
      <OnboardingNavbar />
      <div className="h-full  flex items-center w-full justify-center">
        <div className="lg:w-[35%] font-mukta shadow-md  w-[80%] border-[1px] border-solid border-[#00000020] max-h-[90%] overflow-y-scroll  rounded-xl p-5 flex flex-col gap-5">
          <div className="w-full flex items-center">
            <p className=" text-2xl w-full font-semibold text-[#3B4350]">
              Booking Information
            </p>
            {/* {view === "fourth" && (
              <div className="w-full flex flex-col lg:flex-row lg:justify-end items-center gap-2 items-center">
                <button
                  className="w-fit h-fit px-3 py-1 text-[#3B4350] font-semibold "
                  onClick={() => {
                    setView("third");
                  }}
                >
                  Back
                </button>
                <button
                  className={`w-fit 
                    bg-[#3B82F6] hover:bg-[#3B82F670]
                  rounded-full ease-in-out duration-700  text-white font-semibold px-3 py-1`}
                  onClick={() => {}}
                >
                  {" "}
                  Submit
                </button>
              </div>
            )} */}
          </div>
          <p className=" font-semibold lg:w-[70%] w-full text-sm text-[#3B4350] leading-24">
            Schedule a call to let us Know more about your project
          </p>
          {view === "first" && (
            <div className="flex gap-4 flex-col">
              <div className="flex flex-col gap-1 w-full">
                <div className="flex items-center gap-1">
                  <p className="text-xs font-semibold text-[#6C7480]">
                    First Name
                  </p>
                  <FaAsterisk className="text-red-600 text-[8px]" />
                </div>

                <Input
                  type="text"
                  className="bg-[#F8F8F8]"
                  bg={"#F8F8F8"}
                  size={"lg"}
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <div className="flex items-center gap-1">
                  <p className="text-xs font-semibold text-[#6C7480]">
                    Last Name
                  </p>
                  <FaAsterisk className="text-red-600 text-[8px]" />
                </div>

                <Input
                  type="text"
                  className="bg-[#F8F8F8]"
                  bg={"#F8F8F8"}
                  size={"lg"}
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <div className="flex items-center gap-1">
                  <p className="text-xs font-semibold text-[#6C7480]">Email</p>
                  <FaAsterisk className="text-red-600 text-[8px]" />
                </div>

                <Input
                  type="text"
                  className="bg-[#F8F8F8]"
                  bg={"#F8F8F8"}
                  size={"lg"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  // onBlur={(e)=>{
                  //   isValidEmail(e.target.value)
                  // }}
                />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <div className="flex items-center gap-1">
                  <p className="text-xs font-semibold text-[#6C7480]">Phone</p>
                  <FaAsterisk className="text-red-600 text-[8px]" />
                </div>

                <Input
                  type="text"
                  className="bg-[#F8F8F8]"
                  bg={"#F8F8F8"}
                  size={"lg"}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="w-full flex flex-col lg:flex-row lg:justify-end items-center gap-2 items-center">
                <button
                  className={`w-fit  ${"bg-[#3B82F6] hover:bg-[#3B82F670]"}  rounded-full ease-in-out duration-700  text-white font-semibold px-7 py-3`}
                  onClick={() => {
                    if (firstName === "") {
                      toast({
                        title: "Booking Info.",
                        description: "First Name is required",
                        status: "error",
                        duration: 2000,
                        isClosable: true,
                      });
                      return;
                    }
                    if (lastName === "") {
                      toast({
                        title: "Booking Info.",
                        description: "Last Name is required",
                        status: "error",
                        duration: 2000,
                        isClosable: true,
                      });
                      return;
                    }
                    if (isValidEmail(email) === false) {
                      toast({
                        title: "Booking Info.",
                        description: "Enter a valid email",
                        status: "error",
                        duration: 2000,
                        isClosable: true,
                      });
                      return;
                    }
                    if (isValidPhone(phone) === false) {
                      toast({
                        title: "Booking Info.",
                        description: "Kindly enter a valid phone number",
                        status: "error",
                        duration: 3000,
                        isClosable: true,
                      });
                      return;
                    }
                    setView("second");
                  }}
                >
                  {" "}
                  Next
                </button>
              </div>
            </div>
          )}
          {view === "second" && (
            <div className="flex gap-4 flex-col">
              <div className="flex flex-col gap-1 w-full">
                <div className="flex items-center gap-1">
                  <p className="text-xs font-semibold text-[#6C7480]">
                    Company Name
                  </p>
                </div>

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
                <div className="flex items-center gap-1">
                  <p className="text-xs font-semibold text-[#6C7480]">
                    Website URL
                  </p>
                </div>

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
                <div className="flex items-center gap-1">
                  <p className="text-xs font-semibold text-[#6C7480]">
                    Industry
                  </p>
                </div>
                <Input
                  type="text"
                  className="bg-[#F8F8F8]"
                  bg={"#F8F8F8"}
                  size={"lg"}
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                />
              </div>
              <div className="flex items-center md:flex-row gap-2 w-full">
                <div className="flex flex-col gap-1 w-full">
                  <div className="flex items-center gap-1">
                    <p className="text-xs font-semibold text-[#6C7480]">
                      Country Region
                    </p>
                  </div>

                  <Input
                    type="text"
                    className="bg-[#F8F8F8]"
                    bg={"#F8F8F8"}
                    size={"lg"}
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <div className="flex items-center gap-1">
                    <p className="text-xs font-semibold text-[#6C7480]">
                      State
                    </p>
                  </div>

                  <Input
                    type="text"
                    className="bg-[#F8F8F8]"
                    bg={"#F8F8F8"}
                    size={"lg"}
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1 w-full">
                <p className="text-xs font-semibold text-[#6C7480]">
                  Employee Count
                </p>

                <Input
                  type="number"
                  className="bg-[#F8F8F8]"
                  bg={"#F8F8F8"}
                  size={"lg"}
                  value={employeeCount}
                  onChange={(e) => setEmployeeCount(parseInt(e.target.value))}
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
                  className={`w-fit 
                     bg-[#3B82F6] hover:bg-[#3B82F670]  rounded-full ease-in-out duration-700  text-white font-semibold px-7 py-3`}
                  onClick={() => {
                    setView("third");
                  }}
                >
                  {" "}
                  Next
                </button>
              </div>
            </div>
          )}
          {view === "third" && (
            <div className="flex gap-4 flex-col">
              <div className="flex flex-col gap-1 w-full">
                <div className="flex items-center gap-1">
                  <p className="text-xs font-semibold text-[#6C7480]">
                    Project Title
                  </p>
                  <FaAsterisk className="text-red-600 text-[8px]" />
                </div>

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
                <div className="flex items-center gap-1">
                  <p className="text-xs font-semibold text-[#6C7480]">
                    Project Budget
                  </p>
                  <FaAsterisk className="text-red-600 text-[8px]" />
                </div>

                <Input
                  type="number"
                  className="bg-[#F8F8F8]"
                  bg={"#F8F8F8"}
                  size={"lg"}
                  value={projectBudget}
                  onChange={(e) => setProjectBudget(parseInt(e.target.value))}
                />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <div className="flex items-center gap-1">
                  <p className="text-xs font-semibold text-[#6C7480]">
                    Project Description
                  </p>
                  <FaAsterisk className="text-red-600 text-[8px]" />
                </div>

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
                <button
                  className="w-fit h-fit px-3 py-1 text-[#3B4350] font-semibold "
                  onClick={() => {
                    setView("second");
                  }}
                >
                  Back
                </button>
                <button
                  className={`w-fit  ${
                    projectDescription === ""
                      ? " bg-[#D0E1FF]"
                      : "bg-[#3B82F6] hover:bg-[#3B82F670]"
                  }  rounded-full ease-in-out duration-700  text-white font-semibold px-7 py-3`}
                  onClick={() => {
                    if (projectTitle === "") {
                      toast({
                        title: "Booking Info.",
                        description: "Project Title is required",
                        status: "error",
                        duration: 2000,
                        isClosable: true,
                      });
                      return;
                    }
                    if (projectBudget === undefined) {
                      toast({
                        title: "Booking Info.",
                        description: "Project Budget is required",
                        status: "error",
                        duration: 2000,
                        isClosable: true,
                      });
                      return;
                    }
                    if (projectDescription === "") {
                      toast({
                        title: "Booking Info.",
                        description: "Project Description is required",
                        status: "error",
                        duration: 2000,
                        isClosable: true,
                      });
                      return;
                    }

                    createBooking();
                  }}
                >
                  {loading ? <Spinner size={"sm"} /> : "Next"}
                </button>
              </div>
            </div>
          )}
          {view === "fourth" && (
            <div className="flex flex-col gap-4 w-full custom-popup-position">
              <InlineWidget
                url="https://calendly.com/devantbuilder/kick-off-call"
                prefill={{
                  name: `${firstName} ${lastName}`,
                  email: email,
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
