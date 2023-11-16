import { Image } from "@chakra-ui/react";
import { FiAlertOctagon } from "react-icons/fi";
export default function ProjectDeadlineDashboard() {
  const mockProjects = [
    {
      url: "/icons/projectlogo1.svg",
      name: "project 1",
      id: "13454R456",
      due: "11-08-2023",
    },
    {
      url: "/icons/projectlogo2.svg",
      name: "project 1",
      id: "13454R456",
      due: "11-08-2023",
    },
    {
      url: "/icons/projectlogo3.svg",
      name: "project 1",
      id: "13454R456",
      due: "11-08-2023",
    },
  ];
  return (
    <div className="w-full h-full border-[1px] border-[#EBEBEB] rounded-xl p-5 flex flex-col gap-1">
      <div className="w-full border-b-[1px] border-[#EBEBEB] flex items-center gap-2">
        <FiAlertOctagon />
        <p className="text-sm font-semibold">UPCOMING DEADLINES</p>
      </div>
      <div className="flex flex-col gap-1 w-full h-full">
        {mockProjects?.map((item, index) => (
          <div className="w-full flex items-end justify-between" key={index}>
            <div className="flex items-center gap-2">
              <Image
                src={item.url}
                alt="logo"
                width={5}
                height={5}
                className="cursor-pointer"
              />
              <div className="">
                <p className="text-xs font-semibold">{item.name}</p>
                <p className="text-xs text-[#A4AAB2] "> ID: {item.id}</p>
              </div>
            </div>
            <p className="text-xs text-[#A4AAB2] "> DUE: {item.due}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
