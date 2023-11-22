import SearchBar from "@/components/Utils/SearchBar";
import { feature } from "@/models/org_Admin.models";
// import { feature } from "@/models/org-Admin.models";
import { Dispatch, SetStateAction, useState } from "react";

type ModuleProps = {
  view: string;
  setView: Dispatch<SetStateAction<string>>;
  modules: feature[];
};
export default function Modules({ view, setView, modules }: ModuleProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedModule, setSelectedModule] = useState<any>();

  return (
    <div className="w-full h-full p-5 flex flex-col gap-2">
      <div className="w-full text-[#0A2656] border-b-[1px] border-[#EBEBEB] flex items-center gap-2">
        <p className="text-sm font-semibold">MODULES (24)</p>
      </div>
      <SearchBar setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <div className="w-full h-[570px] overflow-y-scroll flex flex-col gap-2">
        {modules.map((item, index) => (
          <div
            className="w-full h-full cursor-pointer hover:shadow-md border-[1px]  d border-[#EBEBEB] rounded-xl p-5 flex flex-col gap-2"
            key={index}
            onClick={() => {
              setView("moduleDetail");
              localStorage.setItem("selectedFeature", JSON.stringify(item));
            }}
          >
            <div className="flex  items-center justify-between gap-1 w-full">
              <p className="text-sm font-[400] text-[#080E1A]">{item.name}</p>
            </div>
            <p className="text-xs text-[#6C7480]">{item.features}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
