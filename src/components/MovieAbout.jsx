import React from "react";

const MovieAbout = ({ plot }) => (
  <div className="p-8 bg-[#3A0B12] mt-4 rounded-lg mx-8">
    <h2 className="text-2xl font-semibold mb-3">About the Movie</h2>
    <p className="text-gray-200 text-sm">{plot}</p>
  </div>
);

export default MovieAbout;
