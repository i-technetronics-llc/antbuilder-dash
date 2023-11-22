import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
export default function TaskCompletionRateCard() {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className="w-full h-full border-[1px] shadow-md   d border-[#EBEBEB] rounded-xl p-5 flex flex-col gap-1">
      <div className="w-full border-b-[1px] border-[#EBEBEB] flex items-center gap-2">
        <svg
          width="17"
          height="10"
          viewBox="0 0 17 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.00024 7.06736H4.06064L5.05196 4.38903H5.45639L6.77157 8.00424H7.16959L9.21146 0.956299H9.71619L12.0067 8.00424H13.7695M16.0002 7.95995C16.0002 8.24741 15.886 8.5231 15.6828 8.72636C15.4795 8.92963 15.2038 9.04382 14.9164 9.04382C14.6289 9.04382 14.3532 8.92963 14.1499 8.72636C13.9467 8.5231 13.8325 8.24741 13.8325 7.95995C13.8325 7.67249 13.9467 7.39681 14.1499 7.19354C14.3532 6.99028 14.6289 6.87609 14.9164 6.87609C15.2038 6.87609 15.4795 6.99028 15.6828 7.19354C15.886 7.39681 16.0002 7.67249 16.0002 7.95995Z"
            stroke="#0A2656"
            strokeWidth="0.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <p className="text-sm font-semibold">TASK COMPLETION RATE</p>
      </div>
      <div className="flex items-center  gap-2 justify-center w-full h-full">
        <div className="w-full">
          <p className="text-3xl font-semibold">98%</p>
          <p className="text-sm text-[#A4AAB2] ">
            From Last Week <span className="text-[#00C48C]">53%</span>
          </p>
        </div>
        <div className="w-full">
          {/* <ResponsiveContainer width="100%" height="100%"> */}
          <LineChart width={100} height={50} data={data}>
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              strokeWidth={2}
            />
          </LineChart>
          {/* </ResponsiveContainer> */}
        </div>
      </div>
    </div>
  );
}
