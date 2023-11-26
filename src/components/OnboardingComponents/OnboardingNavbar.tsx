import { Image, useDisclosure } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { MdMenu } from "react-icons/md";

export default function OnboardingNavbar() {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="w-full z-10 sticky top-0 flex items-center px-5 justify-between ">
      <Image
        src="/icons/antbuilderlogoLight.svg"
        alt="logo light"
        w={40}
        h={20}
      />
      <div className=" lg:flex hidden items-center gap-5">
        <Link href={"https://www.antbuilder.tech/vision"} target="_blank">
          <button className=" font-semibold  hover:text-[#3B82F6] hover:underline underline-offset-8 ">
            Our Vision
          </button>
        </Link>
        <Link href={"https://www.antbuilder.tech/solution"} target="_blank">
          <button className=" font-semibold  hover:text-[#3B82F6] hover:underline underline-offset-8 ">
            Solution
          </button>
        </Link>
        <Link href={"https://www.antbuilder.tech/projects"} target="_blank">
          {" "}
          <button className=" font-semibold  hover:text-[#3B82F6] hover:underline underline-offset-8 ">
            Our Project
          </button>
        </Link>
        {/* <Link href={"/auth/booking-information"} target="_blank">
          <button className=" hidden font-semibold  hover:text-[#3B82F6] hover:underline underline-offset-8 ">
            Blog
          </button>
        </Link> */}
        <Link href={"https://www.antbuilder.tech/careers"} target="_blank">
          <button className=" font-semibold  hover:text-[#3B82F6] hover:underline underline-offset-8 ">
            Careers
          </button>
        </Link>
      </div>
      <div className="flex  hidden lg:block items-center gap-3">
        <button
          className="w-fit hidden h-fit px-3 py-1 text-[#3B4350] font-semibold "
          onClick={() => {
            if (router.asPath == "/auth/signin") {
              router.push("/auth/signup");
              // alert("1");
            } else {
              router.push("/auth/signin");
            }
          }}
        >
          {router.asPath === "/auth/signin" ? "Sign Up" : "Log In"}
        </button>

        <Link href={"/auth/booking-information"} target="_blank">
          <button className="w-fit h-fit px-3 py-1 hover:bg-[#3B82F670]  bg-[#3B82F6] ease-in-out duration-700 text-white  rounded-full  border-solid ">
            Get Started
          </button>
        </Link>
      </div>
      <div className="lg:hidden">
        <MdMenu onClick={onOpen} />
      </div>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        // finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody p={15} bg={"#3B82F640"}>
            <div className=" flex flex-col justify-center h-full items-center gap-5">
              <Link href={"https://www.antbuilder.tech/vision"} target="_blank">
                <button className=" font-semibold  hover:text-[#3B82F6] hover:underline underline-offset-8 ">
                  Our Vision
                </button>
              </Link>
              <Link
                href={"https://www.antbuilder.tech/solution"}
                target="_blank"
              >
                <button className=" font-semibold  hover:text-[#3B82F6] hover:underline underline-offset-8 ">
                  Solution
                </button>
              </Link>
              <Link
                href={"https://www.antbuilder.tech/projects"}
                target="_blank"
              >
                {" "}
                <button className=" font-semibold  hover:text-[#3B82F6] hover:underline underline-offset-8 ">
                  Our Project
                </button>
              </Link>
              {/* <Link href={"/auth/booking-information"} target="_blank">
          <button className=" hidden font-semibold  hover:text-[#3B82F6] hover:underline underline-offset-8 ">
            Blog
          </button>
        </Link> */}
              <Link
                href={"https://www.antbuilder.tech/careers"}
                target="_blank"
              >
                <button className=" font-semibold  hover:text-[#3B82F6] hover:underline underline-offset-8 ">
                  Careers
                </button>
              </Link>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
