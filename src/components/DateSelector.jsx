import React, { useState } from "react";

const DateSelector = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().getDate());
  const days = Array.from({ length: 7 }, (_, i) => i + new Date().getDate());

  return (
    <div className="p-8 flex gap-4 overflow-x-auto mt-4">
      {days.map((day) => (
        <div
          key={day}
          onClick={() => setSelectedDate(day)}
          className={`min-w-[50px] text-center cursor-pointer rounded-lg p-2 ${
            selectedDate === day ? "bg-red-600" : "bg-[#4B0D12]"
          }`}
        >
          <p className="text-sm">{day}</p>
          <p className="text-xs">Mon</p>
        </div>
      ))}
    </div>
  );
};

export default DateSelector;
