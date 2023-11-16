import { useState } from "react";
import SearchBar from "../Utils/SearchBar";
import { MdNotificationsNone } from "react-icons/md";
import { Image } from "@chakra-ui/react";
type navbarProps = {
  page: string;
};
export default function OrgAdminNavbar({ page }: navbarProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  return (
    <div className="w-full sticky top-0 flex font-mukta items-center justify-between py-2 px-5 bg-[#FCFCFC]">
      <p className="text-xl text-[#3B4350]  font-semibold">{page}</p>
      <div className="max-w-[200px]">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div className="flex items-center gap-4">
        <MdNotificationsNone className="text-[#A4AAB2] text-2xl" />
        <div className="flex  items-center gap-2">
          <div className="w-[30px] h-[30px] border-[2px] border-white rounded-full overflow-hidden">
            <Image
              src={"/img/headshot.jpg"}
              alt="logo"
              width={30}
              height={30}
              className="cursor-pointer"
            />
          </div>
          <div className="">
            <p className="text-sm text-[#3B4350] font-semibold leading-24">
              Sandra Audu
            </p>
            <p className="text-xs text-[#3B4350] leading-24">Role</p>
          </div>
        </div>
      </div>
    </div>
  );
}
