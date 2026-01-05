import React from "react";

const MovieAbout = ({ plot }) => (
  <div className="p-8 mt-4 rounded-lg max-w-[1350px] mx-auto container">
    <h2 className="text-2xl font-semibold mb-3">About the Movie</h2>
    <p className="text-gray-200 text-sm">{plot}</p>
  </div>
);

export default MovieAbout;
