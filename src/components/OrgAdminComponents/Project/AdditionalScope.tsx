import SearchBar from "@/components/Utils/SearchBar";
import { useState } from "react";
import { LuPaperclip } from "react-icons/lu";
import ScopeCard from "./ScopeCard";
export default function AdditionalScope() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  return (
    <div className="w-full h-full border-[1px]  d border-[#EBEBEB] rounded-xl p-5 flex flex-col gap-1">
      <div className="w-full text-[#0A2656] border-b-[1px] border-[#EBEBEB] flex items-center gap-2">
        <LuPaperclip />
        <p className="text-sm font-semibold">ADDITIONAL SCOPE/FEATURES</p>
      </div>
      <div className="flex flex-col gap-2 w-full h-full">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="my-5 flex flex-col gap-3 w-full">
          <ScopeCard />
          <ScopeCard />
          <ScopeCard />
          <ScopeCard />
        </div>
      </div>
    </div>
  );
}
