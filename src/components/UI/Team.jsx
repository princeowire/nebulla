// 

import React from "react";

const activities = [
  {
    color: "bg-gray-500",
    title: "User Photo Changed",
    time: "12 minutes ago",
    description: "John Doe changed his avatar photo",
  },
  {
    color: "bg-blue-500",
    title: "Video Added",
    time: "2 hours ago",
    description: "Mores Clarke added new video",
  },
  {
    color: "bg-green-500",
    title: "Design Completed",
    time: "3 hours ago",
    description: "Robert Nolan completed the design of the CRM application",
  },
  {
    color: "bg-yellow-500",
    title: "ER Diagram",
    time: "a day ago",
    description: "Team completed the ER diagram app",
  },
  {
    color: "bg-orange-500",
    title: "Weekly Report",
    time: "a day ago",
    description: "Weekly report has been created",
  },
];

export default function TeamActivity() {
  return (
    <div className="ml-4 border border-[#1C1D20]  text-white rounded-lg p-4">

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Team Activity</h2>
        <button className="text-sm text-blue-400 hover:underline">View All</button>
      </div>

      <div className="space-y-6">
        {activities.map((item, index) => (
          <div key={index} className="flex gap-3">
            <div className="flex flex-col items-center">
              <span
                className={`${item.color} animate-pulse w-3 h-3 rounded-full`}
              ></span>
              {index !== activities.length - 1 && (
                <div className="w-px flex-1 bg-gray-700 mt-1"></div>
              )}
            </div>

            <div>
              <p className="text-sm font-semibold">{item.title}</p>
              <p className="text-xs text-gray-400 mb-1">{item.time}</p>
              <p className="text-sm text-gray-300">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
