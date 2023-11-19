import { Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BsGrid, BsQuestionCircle } from "react-icons/bs";
import { GrCube } from "react-icons/gr";
import {
  LiaChevronCircleLeftSolid,
  LiaChevronCircleRightSolid,
} from "react-icons/lia";
import {
  MdOutlineLocationOn,
  MdOutlineSettingsInputComponent,
} from "react-icons/md";
import { RiTeamLine } from "react-icons/ri";
import { BiDollarCircle } from "react-icons/bi";
import { PiSignOut } from "react-icons/pi";
type childrenProps = {
  children: React.ReactNode;
};
export default function OrgAdminLayout({ children }: childrenProps) {
  const router = useRouter();
  const [sideBar, setSideBar] = useState(true);

  return (
    <div
      className={
        !sideBar
          ? "grid grid-cols-[100px_1fr] font-mukta w-full z-10 h-screen ease-in-out duration-700  "
          : "grid grid-cols-[257px_1fr] font-mukta w-full z-10 h-screen  ease-in-out duration-700"
      }
    >
      <div className="flex flex-col h-full justify-between p-5 relative bg-[#FCFCFC]">
        <div
          className={`absolute ease-in-out duration-700  top-[22px] ${
            sideBar ? "right-[25px]" : "right-[-15px]"
          }`}
          onClick={() => {
            setSideBar(!sideBar);
          }}
        >
          <div className="w-fit h-fit rounded-full cursor-pointer rounded-full text-[#6C7480] p-2">
            {sideBar ? (
              <LiaChevronCircleLeftSolid className="text-2xl" />
            ) : (
              <LiaChevronCircleRightSolid className="text-2xl" />
            )}
          </div>
        </div>
        <div
          className={`flex flex-col h-full gap-12 ${
            !sideBar && "items-center"
          } `}
        >
          {sideBar ? (
            <Image
              src={"/icons/antbuilderlogoLight.svg"}
              alt="logo"
              width={40}
              height={10}
              className="cursor-pointer"
            />
          ) : (
            <Image
              src={"/icons/antFace.svg"}
              alt="logo"
              width={10}
              height={10}
              className="cursor-pointer"
            />
          )}
          <div className="flex flex-col w-full gap-4">
            <div
              className={`w-full flex gap-3 cursor-pointer items-center font-semibold hover:text-[#3B82F6] hover:border-[2px] ease-in-out duration-400 px-5 py-2 rounded-full border-[#EDF4FF] ${
                router.asPath == "/org_Admin"
                  ? "border-[2px]  text-[#3B82F6]"
                  : "text-[#6C7480] hover:border-[2px] "
              }  `}
              onClick={() => {
                router.push("/org_Admin");
              }}
            >
              <BsGrid />
              <p className={` ${!sideBar && "hidden"} text-[14px]`}>
                Dashboard
              </p>
            </div>
            <div
              className={`w-full flex gap-3 cursor-pointer items-center font-semibold hover:text-[#3B82F6] hover:border-[2px] ease-in-out duration-400 px-5 py-2 rounded-full border-[#EDF4FF] ${
                router.asPath == "/org_Admin/project"
                  ? "border-[2px]  text-[#3B82F6]"
                  : "text-[#6C7480] hover:border-[2px] "
              }  `}
              onClick={() => {
                router.push("/org_Admin/project");
              }}
            >
              <GrCube />
              <p className={` ${!sideBar && "hidden"} text-[14px]`}>Project</p>
            </div>
            <div
              className={`w-full flex gap-3 cursor-pointer items-center font-semibold hover:text-[#3B82F6] hover:border-[2px] ease-in-out duration-400 px-5 py-2 rounded-full border-[#EDF4FF] ${
                router.asPath == "/org_Admin/milstones"
                  ? "border-[2px]  text-[#3B82F6]"
                  : "text-[#6C7480] hover:border-[2px]  "
              }  `}
              onClick={() => {
                router.push("/org_Admin");
              }}
            >
              <MdOutlineLocationOn />
              <p className={` ${!sideBar && "hidden"} text-[14px]`}>
                Milestones
              </p>
            </div>
            <div
              className={`w-full flex gap-3 cursor-pointer items-center font-semibold hover:text-[#3B82F6]  ease-in-out duration-400 px-5 py-2 rounded-full border-[#EDF4FF] ${
                router.asPath == "/org_Admin/team"
                  ? "border-[2px]  text-[#3B82F6]"
                  : "text-[#6C7480] hover:border-[2px]  "
              }  `}
              onClick={() => {
                router.push("/org_Admin");
              }}
            >
              <RiTeamLine />
              <p className={` ${!sideBar && "hidden"} text-[14px]`}>Team</p>
            </div>
            <div
              className={`w-full flex gap-3 cursor-pointer items-center font-semibold hover:text-[#3B82F6]  ease-in-out duration-400 px-5 py-2 rounded-full border-[#EDF4FF] ${
                router.asPath == "/org_Admin/transactions"
                  ? "border-[2px]  text-[#3B82F6]"
                  : "text-[#6C7480] hover:border-[2px]  "
              }  `}
              onClick={() => {
                router.push("/org_Admin");
              }}
            >
              <BiDollarCircle />
              <p className={` ${!sideBar && "hidden"} text-[14px]`}>
                Transactions
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full gap-4 border-t-[1px] boder-[#cccccc70]">
          <div
            className={`w-full flex gap-3 cursor-pointer items-center font-semibold hover:text-[#3B82F6]  ease-in-out duration-400 px-5 py-2 rounded-full border-[#EDF4FF] ${
              router.asPath == "/org_Admin/settings"
                ? "  text-[#3B82F6]"
                : "text-[#6C7480]  "
            }  `}
          >
            <MdOutlineSettingsInputComponent />
            <p className={` ${!sideBar && "hidden"} text-[14px]`}>Settings</p>
          </div>
          <div
            className={`w-full flex gap-3 cursor-pointer items-center font-semibold hover:text-[#3B82F6]  ease-in-out duration-400 px-5 py-2 rounded-full border-[#EDF4FF] ${
              router.asPath == "/org_Admin/faq"
                ? " text-[#3B82F6]"
                : "text-[#6C7480]  "
            }  `}
          >
            <BsQuestionCircle />
            <p className={` ${!sideBar && "hidden"} text-[14px]`}>FAQ</p>
          </div>
          <div
            className={`w-full flex gap-3 cursor-pointer items-center font-semibold hover:text-[#3B82F6]  ease-in-out duration-400 px-5 py-2 rounded-full border-[#EDF4FF] text-[#6C7480]
           `}
          >
            <PiSignOut />
            <p className={` ${!sideBar && "hidden"} text-[14px]`}>Sign Out</p>
          </div>
        </div>
      </div>
      <div className="px-5 h-full overflow-y-scroll">{children}</div>
    </div>
  );
}
