import React from "react";

const theaters = [
  {
    name: "Cinepolis Gokulam Mall Ariyedathpalam, Kozhikkode",
    distance: "2.5 km Away",
    refundable: "Non Refundable",
    showtimes: ["09:40 AM", "12:00 PM", "03:00 PM", "06:00 PM"],
  },
  {
    name: "Cinepolis Mall 2",
    distance: "3.1 km Away",
    refundable: "Non Refundable",
    showtimes: ["10:00 AM", "01:00 PM", "04:00 PM", "07:00 PM"],
  },
];

const TheaterShowtimes = () => (
  <div className="p-8 mt-4 space-y-6">
    {theaters.map((theater, idx) => (
      <div key={idx} className="bg-[#4B0D12] rounded-lg p-4">
        <h3 className="font-semibold text-lg">{theater.name}</h3>
        <p className="text-sm text-gray-400">
          {theater.distance} | {theater.refundable}
        </p>
        <div className="flex gap-4 flex-wrap mt-2">
          {theater.showtimes.map((time, tIdx) => (
            <button
              key={tIdx}
              className="bg-[#6C010D] px-4 py-2 rounded hover:bg-red-600 transition"
            >
              {time}
            </button>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default TheaterShowtimes;
