import { FiEye } from "react-icons/fi";

export default function CountrySource() {
  return (
    <div className=" p-4 rounded-lg  text-white font-sans border border-[#1C1D20] ">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold">Country Source</span>
        <a href="#" className="text-sm text-[#3B82F6] hover:underline">
          View All
        </a>
      </div>

      {/* Number + Percentage */}
      <div className="flex items-end gap-2 mt-2">
        <p className="text-[28px] font-semibold">93</p>
        <p className="text-md text-[#22C55E]">+1.3%</p>
      </div>
      <p className="text-md text-[#9CA3AF] mt-1 font-semibold">Country in this month</p>

      {/* Country Row */}
      <div className="flex items-center justify-between bg-[#111315] rounded-md py-3 px-3 mt-4">
        {/* Flag + Name */}
        <div className="flex items-center gap-2">
          <img
            src="https://flagcdn.com/w40/es.png"
            alt="Spain flag"
            className="w-6 h-6 rounded-full"
          />
          <p className="text-md text-gray-400 font-semibold">Spain</p>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 bg-[#132E1B] px-6 py-[4px] rounded-full">
            {/* Green Arrow Up */}
            <FiEye className="text-[#22C55E]" />
            <p className="text-sm text-[#22C55E] font-bold">2.37k</p>
          </div>

          <div className="flex items-center gap-1 bg-[#2A1313] px-6 py-[4px] rounded-full">
            {/* Red Arrow Down */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 text-[#F87171]"
            >
              <path d="M20 12l-4-4-8 8" />
            </svg>
            <span className="text-sm text-[#F87171] font-bold">36.52k</span>
          </div>
        </div>
      </div>
    </div>
  );
}
