import { TbBoxMultiple } from "react-icons/tb";
import AdditionalScope from "./AdditionalScope";
import Modules from "./Modules";
import { useState } from "react";
import { feature } from "@/models/org-Admin.models";
import ModuleDetail from "./ModuleDetail";
export default function PrdFlow() {
  const [view, setView] = useState<string>("");
  const modules: feature[] = [
    {
      id: 1,
      name: "Authentication Module",
      features: "11 Features",
      featuresDrill: [
        {
          name: "Blog Page",
          description: "A blog screen, where all posted blog will show up",
          subFeatures: [
            "Search button ",
            " Vidoes",
            "Infographics",
            "Industry reports",
            "Freebooks",
            "BLogs",
            "Top navigation bar",
            "Button navigation bar",
          ],
          userStory: [
            "As a user i want to be able to see a list of blogs post, so that i can read them",
            "As a user i want to see a section where i can see all the vidoes uploaded in the blogs.",
            "As a user i want to be able to search for any keywords so that i can see a relating blog post relating to the keywords",
            "As a user i want to be able to see a section where i can see all industries report",
            "As user i want to be able to see a section where i can see all freebooks",
            "As a user i want to see the top navigation bar, so that i can switch to any page i want to.",
            "As a user i want to see button navigation/site map bar so that i can switch to other screen",
            "As a user i want to see the “Get started button” so that i can go to the get started page.",
          ],
          remark:
            "Demo vido ( https://www.code-brew.com/build-all-in-one-delivery-app-postmates-clone-grab-clone-delivery-app-clone-live-demo/ )https://prnt.sc/Ik4HupjAW3Up",
        },
      ],
    },
    {
      id: 2,
      name: "Product Owner Module",
      features: "11 Features",
      featuresDrill: [
        {
          name: "Product Page",
          description: "A blog screen, where all posted blog will show up",
          subFeatures: [
            "Search button ",
            " Vidoes",
            "Infographics",
            "Industry reports",
            "Freebooks",
            "BLogs",
            "Top navigation bar",
            "Button navigation bar",
          ],
          userStory: [
            "As a user i want to be able to see a list of blogs post, so that i can read them",
            "As a user i want to see a section where i can see all the vidoes uploaded in the blogs.",
            "As a user i want to be able to search for any keywords so that i can see a relating blog post relating to the keywords",
            "As a user i want to be able to see a section where i can see all industries report",
            "As user i want to be able to see a section where i can see all freebooks",
            "As a user i want to see the top navigation bar, so that i can switch to any page i want to.",
            "As a user i want to see button navigation/site map bar so that i can switch to other screen",
            "As a user i want to see the “Get started button” so that i can go to the get started page.",
          ],
          remark:
            "Demo vido ( https://www.code-brew.com/build-all-in-one-delivery-app-postmates-clone-grab-clone-delivery-app-clone-live-demo/ )https://prnt.sc/Ik4HupjAW3Up",
        },
        {
          name: "Main Page",
          description: "A blog screen, where all posted blog will show up",
          subFeatures: [
            "Search button ",
            " Vidoes",
            "Infographics",
            "Industry reports",
            "Freebooks",
            "BLogs",
            "Top navigation bar",
            "Button navigation bar",
          ],
          userStory: [
            "As a user i want to be able to see a list of blogs post, so that i can read them",
            "As a user i want to see a section where i can see all the vidoes uploaded in the blogs.",
            "As a user i want to be able to search for any keywords so that i can see a relating blog post relating to the keywords",
            "As a user i want to be able to see a section where i can see all industries report",
            "As user i want to be able to see a section where i can see all freebooks",
            "As a user i want to see the top navigation bar, so that i can switch to any page i want to.",
            "As a user i want to see button navigation/site map bar so that i can switch to other screen",
            "As a user i want to see the “Get started button” so that i can go to the get started page.",
          ],
          remark:
            "Demo vido ( https://www.code-brew.com/build-all-in-one-delivery-app-postmates-clone-grab-clone-delivery-app-clone-live-demo/ )https://prnt.sc/Ik4HupjAW3Up",
        },
      ],
    },
    {
      id: 7,
      name: "AccountExec Module",
      features: "11 Features",
      featuresDrill: [
        {
          name: "Major Page",
          description: "A blog screen, where all posted blog will show up",
          subFeatures: [
            "Search button ",
            " Vidoes",
            "Infographics",
            "Industry reports",
            "Freebooks",
            "BLogs",
            "Top navigation bar",
            "Button navigation bar",
          ],
          userStory: [
            "As a user i want to be able to see a list of blogs post, so that i can read them",
            "As a user i want to see a section where i can see all the vidoes uploaded in the blogs.",
            "As a user i want to be able to search for any keywords so that i can see a relating blog post relating to the keywords",
            "As a user i want to be able to see a section where i can see all industries report",
            "As user i want to be able to see a section where i can see all freebooks",
            "As a user i want to see the top navigation bar, so that i can switch to any page i want to.",
            "As a user i want to see button navigation/site map bar so that i can switch to other screen",
            "As a user i want to see the “Get started button” so that i can go to the get started page.",
          ],
          remark:
            "Demo vido ( https://www.code-brew.com/build-all-in-one-delivery-app-postmates-clone-grab-clone-delivery-app-clone-live-demo/ )https://prnt.sc/Ik4HupjAW3Up",
        },
      ],
    },
    {
      id: 3,
      name: "Customer Module",
      features: "11 Features",
      featuresDrill: [
        {
          name: "Blog Page",
          description: "A blog screen, where all posted blog will show up",
          subFeatures: [
            "Search button ",
            " Vidoes",
            "Infographics",
            "Industry reports",
            "Freebooks",
            "BLogs",
            "Top navigation bar",
            "Button navigation bar",
          ],
          userStory: [
            "As a user i want to be able to see a list of blogs post, so that i can read them",
            "As a user i want to see a section where i can see all the vidoes uploaded in the blogs.",
            "As a user i want to be able to search for any keywords so that i can see a relating blog post relating to the keywords",
            "As a user i want to be able to see a section where i can see all industries report",
            "As user i want to be able to see a section where i can see all freebooks",
            "As a user i want to see the top navigation bar, so that i can switch to any page i want to.",
            "As a user i want to see button navigation/site map bar so that i can switch to other screen",
            "As a user i want to see the “Get started button” so that i can go to the get started page.",
          ],
          remark:
            "Demo vido ( https://www.code-brew.com/build-all-in-one-delivery-app-postmates-clone-grab-clone-delivery-app-clone-live-demo/ )https://prnt.sc/Ik4HupjAW3Up",
        },
      ],
    },
    {
      id: 4,
      name: "Authentication Module",
      features: "11 Features",
      featuresDrill: [
        {
          name: "Blog Page",
          description: "A blog screen, where all posted blog will show up",
          subFeatures: [
            "Search button ",
            " Vidoes",
            "Infographics",
            "Industry reports",
            "Freebooks",
            "BLogs",
            "Top navigation bar",
            "Button navigation bar",
          ],
          userStory: [
            "As a user i want to be able to see a list of blogs post, so that i can read them",
            "As a user i want to see a section where i can see all the vidoes uploaded in the blogs.",
            "As a user i want to be able to search for any keywords so that i can see a relating blog post relating to the keywords",
            "As a user i want to be able to see a section where i can see all industries report",
            "As user i want to be able to see a section where i can see all freebooks",
            "As a user i want to see the top navigation bar, so that i can switch to any page i want to.",
            "As a user i want to see button navigation/site map bar so that i can switch to other screen",
            "As a user i want to see the “Get started button” so that i can go to the get started page.",
          ],
          remark:
            "Demo vido ( https://www.code-brew.com/build-all-in-one-delivery-app-postmates-clone-grab-clone-delivery-app-clone-live-demo/ )https://prnt.sc/Ik4HupjAW3Up",
        },
      ],
    },
    {
      id: 5,
      name: "Authentication Module",
      features: "11 Features",
      featuresDrill: [
        {
          name: "Blog Page",
          description: "A blog screen, where all posted blog will show up",
          subFeatures: [
            "Search button ",
            " Vidoes",
            "Infographics",
            "Industry reports",
            "Freebooks",
            "BLogs",
            "Top navigation bar",
            "Button navigation bar",
          ],
          userStory: [
            "As a user i want to be able to see a list of blogs post, so that i can read them",
            "As a user i want to see a section where i can see all the vidoes uploaded in the blogs.",
            "As a user i want to be able to search for any keywords so that i can see a relating blog post relating to the keywords",
            "As a user i want to be able to see a section where i can see all industries report",
            "As user i want to be able to see a section where i can see all freebooks",
            "As a user i want to see the top navigation bar, so that i can switch to any page i want to.",
            "As a user i want to see button navigation/site map bar so that i can switch to other screen",
            "As a user i want to see the “Get started button” so that i can go to the get started page.",
          ],
          remark:
            "Demo vido ( https://www.code-brew.com/build-all-in-one-delivery-app-postmates-clone-grab-clone-delivery-app-clone-live-demo/ )https://prnt.sc/Ik4HupjAW3Up",
        },
      ],
    },
    {
      id: 6,
      name: "Authentication Module",
      features: "11 Features",
      featuresDrill: [
        {
          name: "Blog Page",
          description: "A blog screen, where all posted blog will show up",
          subFeatures: [
            "Search button ",
            " Vidoes",
            "Infographics",
            "Industry reports",
            "Freebooks",
            "BLogs",
            "Top navigation bar",
            "Button navigation bar",
          ],
          userStory: [
            "As a user i want to be able to see a list of blogs post, so that i can read them",
            "As a user i want to see a section where i can see all the vidoes uploaded in the blogs.",
            "As a user i want to be able to search for any keywords so that i can see a relating blog post relating to the keywords",
            "As a user i want to be able to see a section where i can see all industries report",
            "As user i want to be able to see a section where i can see all freebooks",
            "As a user i want to see the top navigation bar, so that i can switch to any page i want to.",
            "As a user i want to see button navigation/site map bar so that i can switch to other screen",
            "As a user i want to see the “Get started button” so that i can go to the get started page.",
          ],
          remark:
            "Demo vido ( https://www.code-brew.com/build-all-in-one-delivery-app-postmates-clone-grab-clone-delivery-app-clone-live-demo/ )https://prnt.sc/Ik4HupjAW3Up",
        },
      ],
    },
  ];
  return (
    <div className="">
      {view === "" && (
        <div className="">
          <div className="w-full h-full border-[1px]  d border-[#EBEBEB] rounded-xl p-5 flex flex-col gap-1">
            <div className="w-full text-[#0A2656] border-b-[1px] border-[#EBEBEB] flex items-center gap-2">
              <TbBoxMultiple />
              <p className="text-sm font-semibold">PROJECT INFORMATION</p>
            </div>
            <div className="flex flex-col gap-2 w-full h-full">
              <div className="w-full flex items-center gap-3 flex-col lg:flex-row">
                <div className="flex flex-col gap-1 w-full">
                  <p className="text-sm text-[#6C7480] font-semibold">
                    Project Description
                  </p>
                  <p className="text-[#080E1A]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore{" "}
                  </p>
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <p className="text-sm text-[#6C7480] font-semibold">Type</p>
                  <p className="text-[#080E1A]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore{" "}
                  </p>
                </div>
              </div>
              <div className="w-full flex items-center gap-3 flex-col lg:flex-row">
                <div className="flex flex-col gap-1 w-full">
                  <p className="text-sm text-[#6C7480] font-semibold">
                    Access Type
                  </p>
                  <p className="text-[#080E1A]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore{" "}
                  </p>
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <p className="text-sm text-[#6C7480] font-semibold">
                    Access Layer
                  </p>
                  <p className="text-[#080E1A]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="my-8 flex flex-col lg:flex-row w-full">
            <div className="lg:w-[40%] w-full h-full">
              <AdditionalScope />
            </div>
            <div className="lg:w-[60%] w-full h-full">
              <Modules view={view} setView={setView} modules={modules} />
            </div>
          </div>
        </div>
      )}
      {view === "moduleDetail" && (
        <ModuleDetail setView={setView} features={modules} />
      )}
    </div>
  );
}
