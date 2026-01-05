import React, { useState } from "react";

const theaters = [
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-5dtY5EZRpEjH_0WGf2Y3tzGcc7KxvkGqdg&s",
    name: "Cinepolis Gokulam Mall Ariyedathpalam, Kozhikkode",
    distance: "2.5 km Away",
    refundable: "Non Refundable",
    showtimes: [
      "09:40 AM",
      "12:00 PM",
      "03:00 PM",
      "06:00 PM",
      "09:40 AM",
      "12:00 PM",
      "03:00 PM",
      "06:00 PM",
    ],
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-5dtY5EZRpEjH_0WGf2Y3tzGcc7KxvkGqdg&s",
    name: "Cinepolis Mall 2",
    distance: "3.1 km Away",
    refundable: "Non Refundable",
    showtimes: [
      "10:00 AM",
      "01:00 PM",
      "04:00 PM",
      "07:00 PM",
      "10:00 AM",
      "01:00 PM",
      "04:00 PM",
      "07:00 PM",
    ],
  },
];

const MovieBooking = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().getDate());
  const days = Array.from({ length: 7 }, (_, i) => i + new Date().getDate());
  const weekdays = ["Fri", "Sat", "Sun", "Mon", "Thu", "Wed", "Tue"];

  return (
    <div className="bg-[#1A00046B] min-h-[90vh] p-8 pb-32 flex flex-col gap-8 max-w-[1350px] mx-auto container rounded-2xl">
      <div className="flex gap-4 overflow-x-auto">
        {days.map((day, idx) => (
          <div
            key={day}
            onClick={() => setSelectedDate(day)}
            className={`flex flex-col items-center justify-center cursor-pointer min-w-[70px] p-4 rounded-lg transition ${
              selectedDate === day
                ? "bg-white text-black font-semibold"
                : "bg-[#4B0D12] text-gray-300"
            }`}
          >
            <p className="text-3xl mt-2">{day}</p>{" "}
            <p className="text-sm text-gray-300">{weekdays[idx]}</p>{" "}
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-6">
        {theaters.map((theater, tIdx) => (
          <div
            key={tIdx}
            className="bg-[#4B0D12] rounded-lg p-6 flex flex-col gap-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={theater.logo}
                alt={theater.name}
                className="w-20 h-20 object-contain rounded-full"
              />
              <div className="flex flex-col">
                <h3 className="text-white font-semibold text-lg">
                  {theater.name}
                </h3>
                <p className="text-sm">
                  {theater.distance} | {theater.refundable}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-3 mt-2">
              {theater.showtimes.map((time, idx) => (
                <button
                  key={idx}
                  className="bg-[#660022] hover:bg-[#6C010D] border-[0.5px] border-white text-white text-sm px-4 py-2 transition flex flex-col items-center rounded-xl"
                >
                  <span className="text-xl">{time}</span>
                  <span className="font-light text-xs text-gray-400 mt-1">
                    Dolby 7.1
                  </span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieBooking;
