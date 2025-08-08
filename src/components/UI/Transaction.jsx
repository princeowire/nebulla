import React from "react";

const transactions = [
  {
    name: "Konnor Guzman",
    date: "Dec 21, 2021 - 08:05",
    amount: 660.22,
    color: "text-emerald-400",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    bg: "bg-cyan-100"
  },
  {
    name: "Henry Curtis",
    date: "Dec 19, 2021 - 11:55",
    amount: 33.63,
    color: "text-emerald-400",
    avatar: "https://randomuser.me/api/portraits/men/76.jpg",
    bg: "bg-yellow-100"
  },
  {
    name: "Derrick Simmons",
    date: "Dec 16, 2021 - 14:45",
    amount: 674.63,
    color: "text-orange-400",
    avatar: null,
    initials: "DS",
    bg: "bg-neutral-700"
  },
  {
    name: "Kartina West",
    date: "Dec 13, 2021 - 11:30",
    amount: 547.63,
    color: "text-emerald-400",
    avatar: "https://randomuser.me/api/portraits/women/40.jpg",
    bg: "bg-red-100"
  },
  {
    name: "Samantha Shelton",
    date: "Dec 10, 2021 - 09:41",
    amount: 736.24,
    color: "text-emerald-400",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    bg: "bg-amber-100"
  },
  {
    name: "Joe Perkins",
    date: "Dec 06, 2021 - 11:41",
    amount: 369.6,
    color: "text-orange-400",
    avatar: null,
    initials: "JP",
    bg: "bg-orange-500"
  },
  {
    name: "Joe Perkins",
    date: "Dec 06, 2021 - 11:41",
    amount: 369.6,
    color: "text-orange-400",
    avatar: null,
    initials: "JP",
    bg: "bg-orange-500"
  },
  {
    name: "Joe Perkins",
    date: "Dec 06, 2021 - 11:41",
    amount: 369.6,
    color: "text-orange-400",
    avatar: null,
    initials: "JP",
    bg: "bg-orange-500"
  }
];

export default function Transactions() {
  return (
    <div className=" p-4 rounded-xl ">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Transactions</h2>
        <button className="text-xs text-blue-400 hover:underline">
          View All
        </button>
      </div>

      {/* Transaction List */}
      <div className="flex flex-col gap-4">
        {transactions.map((tx, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between border border-[#1C1D20]  p-3 rounded-lg"
          >
            {/* Avatar */}
            <div className="flex items-center gap-3">
              {tx.avatar ? (
                <img
                  src={tx.avatar}
                  alt={tx.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
              ) : (
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full ${tx.bg}`}
                >
                  <span className="text-white text-xs font-medium">
                    {tx.initials}
                  </span>
                </div>
              )}
              {/* Info */}
              <div>
                <p className="text-white text-sm font-medium">{tx.name}</p>
                <p className="text-xs text-gray-400">{tx.date}</p>
              </div>
            </div>

            {/* Amount */}
            <p className={`text-sm font-semibold ${tx.color}`}>
              {tx.color.includes("emerald") ? "$" : "-$"}
              {tx.amount.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
