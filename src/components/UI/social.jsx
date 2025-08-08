import { FaInstagram, FaFacebookF, FaTiktok, FaTwitter, FaPinterestP, FaDiscord, FaYoutube } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

export default function SocialSource() {
   const data = [
    { color: "#E4405F", icon: <FaInstagram />, name: "Instagram", views: "34.36k", revenue: "$5.17k", trend: "up" },
    { color: "#1877F2", icon: <FaFacebookF />, name: "Facebook", views: "24.62k", revenue: "$4.32k", trend: "up" },
    { color: "#000000", icon: <FaTiktok />, name: "Tik Tok", views: "17.36k", revenue: "$3.47k", trend: "up" },
    { color: "#1DA1F2", icon: <FaTwitter />, name: "Twitter", views: "49.32k", revenue: "$1.26k", trend: "down" },
    { color: "#BD081C", icon: <FaPinterestP />, name: "Pinterest", views: "6.92k", revenue: "$926", trend: "up" },
    { color: "#5865F2", icon: <FaDiscord />, name: "Discord", views: "639", revenue: "$517", trend: "up" },
    { color: "#FF0000", icon: <FaYoutube />, name: "Youtube", views: "391", revenue: "$268", trend: "down" },
  ];

  return (
    <div className="border w-full border-[#1C1D20]  rounded-lg p-4 text-white">
      {/* Header */}
      <div className="flex justify-between items-start mb-3">
        <div>
          <h2 className="text-lg font-semibold mb-3">Social Source</h2>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-semibold">135K</span>
            <span className="text-xs  text-green-500 font-medium">+3.1%</span>
          </div>
          <p className="text-xs text-gray-500 mt-[2px]">View in this month</p>
        </div>
        <HiOutlineDotsHorizontal className="text-gray-400 text-lg cursor-pointer" />
      </div>

      {/* List */}
      <div className="space-y-4">
        {data.map((item, idx) => (
          <div key={idx} className="flex justify-between items-center mt-1">
            {/* Left: Icon & Name */}
                       <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 flex items-center justify-center rounded-full"
                style={{ backgroundColor: `${item.color}20`, color: item.color }}
              >
                {item.icon}
              </div>
              <span className="text-sm">{item.name}</span>
            </div>


            {/* Middle: Views */}
            <div className="flex items-center gap-1 text-xs text-gray-400">
              <FiEye className="text-gray-400" />
              <p className="text-[13px] font-semibold">{item.views}</p>
              <p className="text-green-500">↗</p>
            </div>

            {/* Right: Revenue */}
            <div className="text-xs text-gray-400">
              <span className="text-[13px] font-semibold">{item.revenue}</span> <span className="text-red-500">↘</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
