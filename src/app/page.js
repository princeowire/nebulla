"use client";
import Image from "next/image";
import Header from "@/components/UI/Header";
import Sidebar from "@/components/UI/Sidebar";
import BarChartMultiple from "@/components/UI/Barchart";
import customer from "@/assets/customer.svg";
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

export default function Home() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const data = [
    { id: 1, name: "Sales", value: "6.5k", percentage: "4.3%", img: customer, color: "#ffba42", textColor: "text-[#ffba42]" },
    { id: 2, name: "Customers", value: "12k", percentage: "7.2%", img: customer, color: "#00d492", textColor: "text-[#00d492]" },
    { id: 3, name: "Product", value: "47k", percentage: "8%", img: customer, color: "#4db8ff", textColor: "text-[#4db8ff]" },
    { id: 4, name: "Revenue", value: "$128k", percentage: "3.69%", img: customer, color: "#ff4d4d", textColor: "text-[#ff4d4d]" },
  ];

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div className="bg-[#0e0f11] ml-16 max-sm:ml-0 text-gray-300">
      <Header onToggleSidebar={toggleSidebar} />
      <Sidebar collapsed={!isSidebarOpen} toggleCollapsed={toggleSidebar} />

      <div className="flex flex-wrap max-sm:flex-col-reverse">

        {/* Top Cards */}
        <div className="flex flex-wrap gap-4 p-4">
          {data.map((item) => (
            <div key={item.id} className="flex justify-between flex-1 min-w-[250px] max-sm:w-full gap-4 p-4 border border-gray-800 rounded-[20px]">
              <div className="flex flex-col justify-center gap-1">
                <p className="text-gray-300 font-semibold">{item.name}</p>
                <p className={`text-2xl my-2 font-bold ${item.textColor}`}>{item.value}</p>
                <p className="text-sm text-[#00d492] flex items-center"><ArrowUp className="w-4 h-4" /> {item.percentage}</p>
              </div>
              <div className="p-2 max-w-[250px] rounded-[30%] h-[40px] w-[40px] bg-[#ffba4242]">
                <Image src={item.img} alt="" />
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="flex flex-wrap gap-4 justify-between p-4">
          <div className="w-full sm:w-[60%]">
            <BarChartMultiple />
          </div>

          <div className="w-full sm:w-[37%] flex flex-col sm:flex-row gap-4">
            <div className="w-full h-full flex flex-col justify-between gap-4">
              <div className="h-[200px] sm:h-[70%] border rounded-xl border-gray-800 p-4">
                <p>Earning</p>
                <p className="text-2xl">$16.4k</p>
              </div>
              <div className="h-[80px] sm:h-[25%] flex gap-4 items-center justify-center border rounded-xl border-gray-800 p-4">
                <span>
                  <p>45%</p>
                </span>
                <p>Closed Orders</p>
              </div>
            </div>

            <div className="w-full h-full flex flex-col justify-between gap-4">
              <div className="h-[80px] sm:h-[25%] flex gap-4 items-center justify-center border rounded-xl border-gray-800 p-4">
                <span>
                  <p>45%</p>
                </span>
                <p>Closed Orders</p>
              </div>

              <div className="max-sm:w-full border rounded-xl border-gray-800 flex flex-col justify-between">
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
      <div className="p-4">
        <DataTable columns={columns} data={sampleData} />
      </div>

      {/* Bottom Widgets */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4">
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
