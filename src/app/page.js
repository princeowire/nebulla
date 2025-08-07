"use client";
import Image from "next/image";
import Header from "@/components/UI/Header";
import Sidebar from "@/components/UI/Sidebar";
import customer from "@/assets/customer.svg"; 
import { ArrowUp } from "lucide-react";
import { useState } from "react";

export default function Home() {

  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const data = [
    { id: 1, name: "Sales", value: "6.5k", percentage: "12%", img: customer, color: "#ffba42" },
    { id: 2, name: "Customers", value: '12k', percentage: "12%", img: customer },
    { id: 3, name: "Product", value: "47k", percentage: "12%", img: customer },
    { id: 4, name: "Revenue", value: "$128k", percentage: "12%", img: customer },
  ];

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div className="bg-[#0e0f11] text-white ">
      <Header onToggleSidebar={toggleSidebar} />
      <Sidebar collapsed={!isSidebarOpen} toggleCollapsed={toggleSidebar} />

      <div className="flex gap-8 p-4 ml-[05.8%] text-white">
        {data.map((item) => (
        <div key={item.id} className="flex justify-between w-full gap-4 p-4 border border-gray-600 rounded-[20px]">
          <div className="flex flex-col justify-center gap-1">
            <p className="text-gray-300 font-semibold">{item.name}</p>
            <p className="text-2xl">{item.value}</p>
            <p className="text-sm text-[#00d492] flex items-center"> <ArrowUp /> {item.percentage}</p>
          </div>

          <div className="p-2 max-w-[250px] rounded-[30%] h-[40px] w-[40px] bg-[#ffba4242]">
            <Image src={item.img} alt="" />
          </div>

        </div>
        ))}


        
      </div>

    </div>
  );
}
