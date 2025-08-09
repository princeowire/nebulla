"use client";
import Image from "next/image";
import Header from "@/components/UI/Header";
import Sidebar from "@/components/UI/Sidebar";
import BarChartMultiple from "@/components/UI/Barchart";
import customer from "@/assets/customer.svg";
import one from "@/assets/one.svg";
import box from "@/assets/box.svg";
import dollar from "@/assets/dollar.svg";
import { ArrowUp } from "lucide-react";
import { useState } from "react";
import ChartAreaDefault from "@/components/UI/Graph";
import { DataTable } from "@/components/UI/Dattable";
import { sampleData } from "@/components/Datas/sample-data";
import { columns } from "@/components/Datas/columns";
import TeamActivity from "@/components/UI/Team";
import SocialSource from "@/components/UI/social";
import Transactions from "@/components/UI/Transaction";
import CountrySource from "@/components/UI/Country";
import CircularProgress from "@/components/UI/Circularprogress";
import DivisionBarChart from "@/components/UI/Divisionbar";

export default function Home() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const data = [
    { id: 1, name: "Sales", value: "6.5k", percentage: "4.3%", img: one, color: "bg-[#51a2ff51]", textColor: "text-[#ffba42]" },
    { id: 2, name: "Customers", value: "12k", percentage: "7.2%", img: customer, color: " bg-[#ffba424c]", textColor: "text-[#00d492]" },
    { id: 3, name: "Product", value: "47k", percentage: "8%", img: box, color: "bg-[#00d49145]", textColor: "text-[#4db8ff]" },
    { id: 4, name: "Revenue", value: "$128k", percentage: "3.69%", img: dollar, color: "bg-[#ff75df4a]", textColor: "text-[#ff4d4d]" },
  ];

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div className="bg-[#0e0f11] ml-16 max-sm:ml-0 text-gray-300">
      <Header onToggleSidebar={toggleSidebar} />
      <Sidebar collapsed={!isSidebarOpen} toggleCollapsed={toggleSidebar} />

      <div className="flex flex-wrap max-sm:flex-col-reverse w-full">

        {/* Top Cards */}
        <div className="flex flex-wrap justify-between gap-4 p-4 w-full">
          {data.map((item) => (
            <div key={item.id} className="flex justify-between flex-1 min-w-[250px] max-sm:w-full gap-4 p-4 border border-gray-800 rounded-[20px]">
              <div className="flex flex-col justify-center gap-1">
                <p className="text-gray-300 font-semibold">{item.name}</p>
                <p className={`text-2xl my-2 font-bold ${item.textColor}`}>{item.value}</p>
                <p className="text-sm text-[#00d492] flex items-center"><ArrowUp className="w-4 h-4" /> {item.percentage}</p>
              </div>
              <div className={`p-2 max-w-[250px] rounded-[30%] h-[40px] w-[40px] ${item.color}`}>
                <Image src={item.img} alt="" />
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="flex flex-wrap gap-4 justify-between p-4 w-full max-[900px]:flex-col">
          <div className="w-[60%] max-[900px]:w-full">
            <BarChartMultiple />
          </div>

          <div className="w-[37%] max-[900px]:w-full flex gap-4 max-md:flex-wrap">

            <div className="max-md:w-[48%] max-sm:w-full w-full h-full flex flex-col justify-between gap-4">

              <div className="h-[70%] sm:h-[70%] border rounded-xl border-gray-800 p-4">
                <p>Earning</p>
                <p className="text-2xl">$16.4k</p>
              </div>
              <div className="h-[28%] sm:h-[25%] flex gap-4 items-center justify-center border rounded-xl border-gray-800 p-4">
                <span>
                  <CircularProgress value={45} progressColor="#2563eb" backgroundColor="#111827" />
                </span>
                <p>Closed Orders</p>
              </div>

            </div>

            <div className="max-md:w-[48%] max-sm:w-full max w-full h-full flex flex-col justify-between gap-4">
              <div className="h-[28%] sm:h-[25%] flex gap-4 items-center justify-center border rounded-xl border-gray-800 p-4">
                <span>
                  <CircularProgress value={85} progressColor="#00d492" backgroundColor="#111827" />
                </span>
                <p>Closed Orders</p>
              </div>

              <div className="max-md:w-full h-[70%] border rounded-xl border-gray-800 flex flex-col justify-between">
                <div className="p-4">
                  <p>Earning</p>
                  <p className="text-2xl">$16.4k</p>
                </div>
                <ChartAreaDefault />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Table Section */}
      <div className="flex gap-4">
        <div className="p-4">
          <DataTable columns={columns} data={sampleData} />
        </div>

        <div className="p-4">
          <DivisionBarChart />
        </div>
      </div>

      {/* Bottom Widgets */}
      <div className="grid max-[900px]:grid-cols-1 grid-cols-3 gap-4 p-4">
        <TeamActivity />
        <div className="grid grid-cols-1 gap-4">
          <SocialSource />
          <CountrySource />
        </div>
        <Transactions />
      </div>
    </div>
  );
}
