import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export default function ProjectStatusDashboard() {
  const [isClient, setIsClient] = useState(false);
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const colors = ["#DEF7F0", "#3B82F6", "#FBBC05", "#EB4335"];

  useEffect(() => {
    // Set the state to true once component mounts
    setIsClient(true);
  }, []);

  return (
    <div className="w-full h-full border-[1px] shadow-md  border-[#EBEBEB] rounded-xl p-5 flex flex-col gap-1">
      <div className="w-full border-b-[1px] border-[#EBEBEB] flex items-center gap-2">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.6667 5.99992C14.6667 3.42259 12.5773 1.33325 10 1.33325V5.99992H14.6667Z"
            stroke="#0A2656"
            strokeWidth="0.666667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 7.98155C2 11.3054 4.69451 13.9999 8.01837 13.9999C11.1162 13.9999 13.6674 11.6594 14 8.65026H7.34966V1.99992C4.34051 2.33256 2 4.88373 2 7.98155Z"
            stroke="#0A2656"
            strokeWidth="0.666667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <p className="text-sm font-semibold">PROJECT STATUS</p>
      </div>
      <div className="flex items-center justify-center w-full h-full">
        {isClient && (
          <PieChart width={100} height={80}>
            <Pie
              data={data}
              cx={40}
              cy={40}
              innerRadius={20}
              outerRadius={35}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Pie>
          </PieChart>
        )}
        <div className="grid grid-cols-1">
          {colors?.map((color, index) => (
            <div
              className="w-full flex items-center gap-1 text-xs "
              key={index}
            >
              <div className={`w-2 h-2 rounded-full bg-[${color}]`}></div>
              <p className="font-[500]">
                {color === "#DEF7F0"
                  ? "Completed"
                  : color === "#3B82F6"
                  ? "On-Track"
                  : color === "#FBBC05"
                  ? "Pending"
                  : "Overdue"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
