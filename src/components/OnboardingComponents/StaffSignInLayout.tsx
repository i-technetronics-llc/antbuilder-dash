import { Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

type childrenProps = {
  children: React.ReactNode;
};
export default function StaffSignInLayout({ children }: childrenProps) {
  const [bigant, setBigant] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBigant((prevBigant) => !prevBigant);
    }, 5000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-screen h-screen flex flex-col lg:flex-row ">
      <div className="w-full h-full bg-[#11223F] relative p-5 hidden lg:flex  flex-col gap-8">
        <Image
          src="/icons/antbuilderIconDark.svg"
          alt="logo Dark"
          w={40}
          h={20}
        />
        <p className="text-[32px] font-millik   leading-24 text-white font-bold">
          Unleash the Power of Iterative App Development with Antbuilder
        </p>
        <div className="w-full flex items-center justify-center  ">
          {bigant ? (
            <Image
              src="/icons/bigAnt.svg"
              className="absolute ease-in-out duration-700 left-0 bottom-0"
              alt="logo Dark"
            />
          ) : (
            <Image
              src="/icons/gridFaded.svg"
              alt="logo Dark"
              className="ease-in-out duration-700"
            />
          )}
        </div>
      </div>
      <div className="w-full overflow-y-scroll  bg-white flex items-center font-mukta justify-center h-full">
        {children}
      </div>
    </div>
  );
}
