import { feature, singlefeature } from "@/models/org_Admin.models";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { LuArrowLeftCircle } from "react-icons/lu";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { VscEllipsis } from "react-icons/vsc";
import ModuleEstimation from "./ModuleEstimation";
type ModuleDetailsProps = {
  setView: Dispatch<SetStateAction<string>>;
  features: feature[];
  //   selectedFeature: feature;
};
export default function ModuleDetail({
  setView,
  features,
}: //   selectedFeature,
ModuleDetailsProps) {
  const [selectedFeature, setSelectedFeature] = useState<feature>();
  const [estimation, setEstimation] = useState<boolean>(false);

  useEffect(() => {
    const selected =
      typeof window != undefined
        ? JSON.parse(localStorage.getItem("selectedFeature") as string)
        : null;
    console.log(selected, "selected");
    setSelectedFeature(selected);
  }, []);

  return (
    <div className="">
      {!estimation ? (
        <div className="">
          <div className="my-5 flex items-center justify-between  ">
            <div
              className="flex items-center cursor-pointer gap-3"
              onClick={() => {
                setView("");
              }}
            >
              <LuArrowLeftCircle />
              <p className="text-xl font-semibold text-[#0A2656]">
                {" "}
                {selectedFeature?.name}
              </p>
            </div>
            <button
              className="w-fit h-fit  flex items-center gap-2 text-[#3B82F6] border-[1px] border-[#3B82F6] rounded-full px-3 py-1"
              onClick={() => setEstimation(true)}
            >
              <MdOutlineRemoveRedEye />
              <p className="text-sm">View Module Estimation</p>
            </button>
          </div>
          <div className="flex items-start gap-3  max-h-[75vh] overflow-y-scroll">
            <div className="w-[15%] flex flex-col gap-3">
              {features?.map((item, index) => (
                <div
                  className={`w-full h-full cursor-pointer hover:shadow-md border-[1px]  ${
                    selectedFeature?.id === item.id
                      ? "border-black"
                      : "border-[#EBEBEB]"
                  }  rounded-xl p-5 flex flex-col gap-2`}
                  key={index}
                  onClick={() => {
                    setSelectedFeature(item);
                    localStorage.setItem(
                      "selectedFeature",
                      JSON.stringify(item)
                    );
                  }}
                >
                  <div className="flex  items-center justify-between gap-1 w-full">
                    <p className="text-sm font-[400] text-[#080E1A]">
                      {item.name}
                    </p>
                  </div>
                  <p className="text-xs text-[#6C7480]">{item.features}</p>
                </div>
              ))}
            </div>
            <div className="w-[85%]">
              <div className="flex flex-row w-full bg-[#F4F4F8] border-b-[2px] border-b-[#cccccc] rounded-t-lg h-[3rem]">
                <div className=" w-full p-3">
                  <p className="">Features</p>
                </div>
                <div className=" w-full p-3">
                  <p className="">Description</p>
                </div>
                <div className=" w-full p-3">
                  <p className="">Subfeatures</p>
                </div>
                <div className=" w-full p-3">
                  <p className="">User Story</p>
                </div>
                <div className=" text-right w-full p-3">
                  <p className="">Remark</p>
                </div>
                <div className=" text-right w-full p-3">
                  <p className="">Action</p>
                </div>
              </div>
              <div className="">
                {selectedFeature?.featuresDrill.map((item, index) => (
                  <div
                    className="flex flex-row w-full   border-[1px] border-b-[#cccccc]  h-fit"
                    key={index}
                  >
                    <div className=" min-w-[10%] p-2 border-r-[1px] border-[#cccccc] ">
                      <p className="">{item.name}</p>
                    </div>
                    <div className=" min-w-[20%] p-2 border-r-[1px] border-[#cccccc] ">
                      <p className="">{item.description}</p>
                    </div>
                    <div className=" w-full py-2 px-5 border-r-[1px] border-[#cccccc] ">
                      <ol className="list-disc">
                        {item.subFeatures.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ol>
                    </div>
                    <div className=" w-full py-2 px-5 border-r-[1px] border-[#cccccc] ">
                      <ol className="list-disc">
                        {item.userStory.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ol>
                    </div>
                    <div className=" max-w-[20%] p-2 border-r-[1px] border-[#cccccc] ">
                      <p className="">{item.remark}</p>
                    </div>
                    <div className=" min-w-[8%]  p-2  ">
                      <VscEllipsis />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <ModuleEstimation
          features={selectedFeature?.featuresDrill as singlefeature[]}
          setEstimation={setEstimation}
        />
      )}
    </div>
  );
}
