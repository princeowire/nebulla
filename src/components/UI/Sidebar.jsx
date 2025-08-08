"use client";

import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Settings,
  Bell,
  HelpCircle,
  Search,
  User,
} from "lucide-react";

export default function Sidebar({ collapsed, toggleCollapsed }) {
  const [activeItem, setActiveItem] = useState("Sales");

  const menuItems = [
    { label: "Dashboards", hasSubmenu: true },
    { label: "Sales", active: true },
    { label: "CRM Analytics" },
    { label: "Orders" },
    { label: "Cryptocurrency", hasSubmenu: true },
    { label: "Banking", hasSubmenu: true },
    { label: "Personal" },
    { label: "CMS Analytics" },
    { label: "Influencer" },
    { label: "Travel" },
    { label: "Teacher" },
    { label: "Education" },
    { label: "Authors" },
    { label: "Doctor" },
    { label: "Employees" },
    { label: "Workspaces" },
    { label: "Meetings" },
    { label: "Projects Board" }
  ];

  return (
    <div className="flex h-screen fixed top-0 left-0 z-50">
      {/* Fixed Vertical Icon Bar */}
      <div className="w-16 bg-[#0e0f11] flex flex-col items-center justify-between h-full py-4 border-r border-gray-800">
       
        <div className="flex flex-col items-center gap-6 mt-6 text-gray-400"> 

          <div>p</div>

          <div className="flex flex-col gap-4">
            <Search className="w-5 h-5 cursor-pointer hover:text-white" />
            <Bell className="w-5 h-5 cursor-pointer hover:text-white" />
            <HelpCircle className="w-5 h-5 cursor-pointer hover:text-white" />
            <Settings className="w-5 h-5 cursor-pointer hover:text-white" />
          </div>
        </div>

        {/* Spacer */}

        <div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
              <User className="h-4 w-4 text-white" />
            </div>
        </div>
        <div />
      </div>

      {/* Expandable Sidebar */}
      <div
        className={`bg-[#0e0f11] border-r border-gray-800 transition-all duration-300 flex flex-col ${
          collapsed ? "w-0" : "w-64"
        } overflow-hidden`}
      >
        {/* Header */}
        <div className="p-4 flex items-center justify-between border-b border-gray-800">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-white">Dashboards</span>
          </div>
          <button
            onClick={toggleCollapsed}
            className="p-1.5 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <ChevronLeft className="h-4 w-4 text-gray-400" />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex-1 py-4 overflow-y-auto">
          <nav className="space-y-1 px-3">
            {menuItems.map((item, index) => {
              const isActive = item.label === activeItem;
              return (
                <button
                  key={index}
                  onClick={() => setActiveItem(item.label)}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-all duration-200 text-left"
                >
                  <span
                    className={`text-sm truncate ${
                      isActive
                        ? "text-white font-semibold"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </span>
                  {item.hasSubmenu && (
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* User Profile */}
        <div className="p-4 border-t border-gray-800">
          <div className="flex items-center space-x-3">
            <div className="flex-1 min-w-0 space-y-4">
              <p className="text-xs text-gray-400 truncate">Widget Ui</p>
              <p className="text-xs text-gray-400 truncate">Widget Contact</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
