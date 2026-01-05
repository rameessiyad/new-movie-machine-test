import React from "react";

const MovieTicket = ({ movie, date, time, row, seats }) => {
  return (
    <div className="w-72 md:w-80 bg-[#951926] rounded-xl shadow-lg overflow-hidden relative font-sans">
      {/* Movie Image */}
      <div className="h-40 overflow-hidden">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Movie Info */}
      <div className="p-4 bg-white rounded-b-xl relative z-10">
        <h2 className="text-lg font-bold text-gray-900 mb-1">{movie.title}</h2>
        <p className="text-gray-700 text-sm mb-2">{movie.subtitle}</p>

        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>Date: {date}</span>
          <span>Time: {time}</span>
        </div>

        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Row: {row}</span>
          <span>Seats: {seats}</span>
        </div>

        <div className="mt-2">
          <img
            src="https://barcode.tec-it.com/barcode.ashx?data=1234567890&code=Code128&dpi=96"
            alt="barcode"
            className="w-full h-8 object-contain"
          />
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-t from-black/30 to-transparent"></div>
    </div>
  );
};

export default MovieTicket;
