import CreateNavbar from "@/components/Utils/CreateNavbar";
import { Input } from "@chakra-ui/react";

export default function CreateProject() {
  return (
    <div className="w-full">
      <CreateNavbar />
      <div className="h-[90vh] font-mukta flex items-center w-full justify-center ">
        <div className="lg:w-[35%] w-[80%]  shadow-md border-[1px] border-solid border-[#00000020]  rounded-xl p-5 flex flex-col gap-5">
          <p className=" font-semibold text-xl text-[#3B4350]">New Project</p>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1 w-full">
              <p className="text-xs font-semibold text-[#6C7480]">
                Project Name
              </p>

              <Input
                type="text"
                // size={""}
                name="projectName"
                className="bg-[#F8F8F8]"
                bg={"#F8F8F8"}
                //   value={email}
                //   onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <p className="text-xs font-semibold text-[#6C7480]">
                Project Description
              </p>

              <Input
                type="text"
                // size={""}
                name="projectDesc"
                className="bg-[#F8F8F8]"
                bg={"#F8F8F8"}
                //   value={email}
                //   onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <p className="text-xs font-semibold text-[#6C7480]">
                Project Amount
              </p>

              <Input
                type="text"
                // size={""}
                name="projectAmount"
                className="bg-[#F8F8F8]"
                bg={"#F8F8F8"}
                //   value={email}
                //   onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <p className="text-xs font-semibold text-[#6C7480]">
                Client Name
              </p>

              <Input
                type="text"
                // size={""}
                name="clientName"
                className="bg-[#F8F8F8]"
                bg={"#F8F8F8"}
                //   value={email}
                //   onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="w-full flex justify-end items-center">
            <button
              className={`w-fit h-fit px-5 bg-[#3B82F6] hover:bg-[#3B82F670] rounded-full ease-in-out duration-700  text-white font-semibold py-3`}
            >
              {" "}
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
